


function WixUpload(o)
{
    //Variables initialization
    this.Url = "";
    this.interV = null;
    this.Persistent = false;
    this.Verified = false;
    this.InitTries = 5;
    this.autoStart = false;


    let Loc = "";
    let InitTries = 0;
    let Initialized = false;
    let File = null;
    let SentSize = 0;
    let LastChunk = 0;
    let Percentage = 0;
    let chunkSize = 1024 * 1024;
    let autoresume = false;
    let isUploading = false;
    let isPaused = false;

    let StopRequested = false;
	let PauseRequested = false;
    let uploadTries = 0;

    let stopTries = 0;

    //Events Cluster
    let dragDrop = null,
        dragEnter = null,
        dragLeave = null,
        dragOver = null,
        starting = null,
        started = null,
        stopped = null,
        paused = null,
        error = null,
        completed = null,
        progress = null,
        stopping = null,
		canResume = null,
        fileselected = null;


    if(o != null)
    {
        if(o.file != null)
        {
            File = o.file;
        }
        if(o.URL != null)
        {
            this.Url = o.URL;
            Loc = o.URL;
        }
        if(o.url != null)
        {
            this.Url = o.url;
            Loc = o.url;
        }
    }


    this.setDropZone = function (e) {

        let zone = null;

        if(typeof e == "string")
        {
            zone = document.getElementById(e);
        }
        else
        {
            zone = e;
        }

        zone.addEventListener('dragenter', function () {
            if(typeof dragEnter == "function")
            {
                dragEnter({status: 100});
            }
        }, false);
        zone.addEventListener('dragleave', function () {
            if(typeof dragLeave == "function")
            {
                dragLeave({status: 100});
            }
        }, false);
        zone.addEventListener('dragover', function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        }, false);
        zone.addEventListener('drop', function (e) {
            e.stopPropagation();
            e.preventDefault();
            File = e.dataTransfer.files[0]; // Array of all files
            if(typeof fileselected == "function")
            {
                fileselected({status: 100, file:File});
            }
        }, false);
    };


    this.setBrowseButton = function (e) {

        let btn = null;

        if(typeof e == "string")
        {
            btn = document.getElementById(e);
        }
        else
        {
            btn = e;
        }

        btn.addEventListener("click", function (e) {
            let f = document.createElement("input");
            f.type = "file";
            f.id = "wixupload-file";
            f.style.display = "none";
            f.addEventListener("change", function () {
                File = f.files[0];
                document.body.removeChild(document.getElementById("wixupload-file"));
                if(typeof fileselected == "function")
                {
                    fileselected({status: 100, file:File});
                }
            });
            document.body.appendChild(f);
            f.click();
        }, false);
    };

    this.on = function (event, func) {
        if(event.toLowerCase() === "dragdrop")
        {
            dragDrop = func;
        }
        if(event.toLowerCase() === "dragenter")
        {
            dragEnter = func;
        }
        if(event.toLowerCase() === "dragleave")
        {
            dragLeave = func;
        }
        if(event.toLowerCase() === "dragover")
        {
            dragOver = func;
        }
        if(event.toLowerCase() === "starting")
        {
            starting = func;
        }
        if(event.toLowerCase() === "started")
        {
            started = func;
        }
        if(event.toLowerCase() === "stopped")
        {
            stopped = func;
        }
        if(event.toLowerCase() === "stopping")
        {
            stopping = func;
        }
        if(event.toLowerCase() === "error")
        {
            error = func;
        }
        if(event.toLowerCase() === "uploaded")
        {
            progress = func;
        }
        if(event.toLowerCase() === "progresschanged")
        {
            progress = func;
        }
        if(event.toLowerCase() === "completed")
        {
            completed = func;
        }
        if(event.toLowerCase() === "fileselected")
        {
            fileselected = func;
        }
		if(event.toLowerCase() === "canresume")
		{
			canResume = func;
		}
		if(event.toLowerCase() === "paused")
        {
            paused = func;
        }
    };




	let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

	let request = {};
    request.type = "UPLOAD";


    //Methods initialization
    this.Start = function()
    {
        Loc = this.Url;
        InitTries = 0;

        if(typeof starting == "function")
        {
            starting({status:105, file:File});
        }

        Init(function (e) {
            if(e)
            {
                if(typeof started == "function")
                {
                    started({status:100, file:File});
                }

				preUpload();
            }
            else
            {
                if(typeof error == "function")
                {
                    error({status:121, message:"Network error. Unable to start upload"});
                }
            }
        });
    };


	function preUpload()
	{
		request.name = File.name;
		request.size = File.size;
		request.filetype = File.type;
		runUpload();
	}


    function Init(func) {

        if(InitTries > 5)
        {
            if(typeof func == "function")
            {
                func(false);
            }
        }
        else
        {
            if(Initialized)
            {
                if(typeof func == "function")
                {
                    func(true);
                }
            }
            else
            {
                InitTries++;
                initialize(func);
            }
        }
    }



    function initialize(func)
    {
        let request = {};
        request.type = "INIT";
        request.name = File.name;
        request.size = File.size;
        request.filetype = File.type;

        sendData(request, function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);
                SentSize = Number(d.Uploadedsize);
                Initialized = true;

                if(SentSize > 0)
                {
                    if(autoresume)
                    {
                        Init(func);
                    }
                    else
                    {
                        isPaused = true;
                        if(typeof canResume == "function")
                        {
                            canResume({status:1000,uploaded:SentSize});
                        }
                    }
                }
                else
                {
                    Init(func);
                }
            }
            else
            {
                Init(func);
            }
        });
    }

    let reader = new FileReader();

    function runUpload()
    {
        let next_slice = SentSize + chunkSize;
        let blob = File.slice(SentSize, next_slice);

        reader.onload = function(event) {
            if (event.target.readyState !== FileReader.DONE) {
                return;
            }
            // At this point the file data is loaded to event.target.result

            sendChunk(event.target.result, function (data, status) {
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "SUCCESS")
                    {
                        if(typeof progress == "function")
                        {
                            progress({status:100, progress:((Number(SentSize) / File.size) * 100.0).toFixed(4)});
                        }
                        SentSize += chunkSize;
                        if(SentSize <= File.size)
                        {
                            if(PauseRequested === true)
                            {
                                if(typeof paused === "function")
                                {
                                    paused({status:100,state:"paused",current:SentSize});
                                }
                            }
                            else if(StopRequested === true)
                            {
                                if(typeof stopping === "function")
                                {
                                    stopping({status:100,state:"stoping",current:SentSize});
                                }
                                stopUpload();
                            }
                            else
                            {
                                runUpload();
                            }
                        }
                        else
                        {
                            if(typeof progress == "function")
                            {
                                progress({status:100, progress:100});
                            }
                            if(typeof completed == "function")
                            {
                                completed({status:100});
                            }
                        }
                    }
                }
                else
                {

                }
            });
        };

        reader.readAsDataURL(blob);
        //reader.readAsBinaryString(blob);
    }

    function sendChunk(chunk, func)
    {
        request.payload = chunk;

        let params = typeof request == 'string' ? request : Object.keys(request).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(request[k]) }
        ).join('&');

		xhr.open('POST', Loc, true);
        xhr.onload = function ()
        {
            if(xhr.readyState > 3)
            {
                if (xhr.status === 200)
                {
                    try{
                        let t = JSON.parse(xhr.responseText);
                        if(typeof(func) == "function")
                        {
                            func(xhr.responseText, "done");
                        }
                    }
                    catch(e)
                    {
                        if(typeof(func) == "function")
                        {
                            func(xhr.responseText, "error");
                        }
                    }
                }
                else
                {
                    if(typeof(func) == "function")
                    {
                        func(xhr.responseText, "error");
                    }
                }
            }
        };
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }

	this.humanizeSize = function(decimals = 2){

		if (File.size === 0) return '0 Bytes';

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		const i = Math.floor(Math.log(File.size) / Math.log(k));

		return parseFloat((File.size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	};

    this.Stop = function(){

        StopRequested = true;
    };

	this.Pause = function(){

		PauseRequested = true;
	};

	this.Resume = function(){
        if(!isUploading && isPaused)
        {
            if(typeof starting == "function")
            {
                starting({status:100, file:File});
            }
            if(typeof started == "function")
            {
                started({status:100, file:File});
            }
            isPaused = false;
            isUploading = true;
            preUpload();
        }
        else
        {
            if(typeof error == "function")
            {
                error({status:222,message:"Cannot resume download"})
            }
        }
	};

    this.Restart = function(){
        if(isUploading && isPaused)
        {
            if(typeof started == "function")
            {
                started({status:100, file:File});
            }
            isPaused = false;
            isUploading = true;
            preUpload();
        }
        else
        {
            if(typeof error == "function")
            {
                error({status:222,message:"Cannot resume download"})
            }
        }
    };

	this.autoResume = function(e=null){

	    if(e == null)
        {
            return autoresume;
        }
	    else if(typeof e == "boolean")
        {
            autoresume = e;
        }
    };



	function stopUpload()
    {
        let request = {};
        request.type = "STOP";
        request.name = File.name;
        request.size = File.size;
        request.filetype = File.type;

        sendData(request, function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "STOPPED")
                {
                    isUploading = false;
                    SentSize = 0;
                    if(typeof stopped == "function")
                    {
                        stopped({status:100});
                    }
                }
                else
                {
                    if(stopTries < 5)
                    {
                        stopTries++;
                        stopUpload();
                    }
                    else
                    {
                        if(typeof error == "function")
                        {
                            error({status: 302,message:"Unable to cancel upload"});
                        }
                    }
                }
            }
            else
            {
                if(stopTries < 5)
                {
                    stopTries++;
                    stopUpload();
                }
                else
                {
                    if(typeof error == "function")
                    {
                        error({status: 302,message:"Unable to cancel upload"});
                    }
                }
            }
        });
    }


    this.Upload = function(func)
    {
        if(File != null)
        {
            let formData = new FormData();

            formData.append('file', File, File.name);
            let xhru = new XMLHttpRequest();
            xhru.open('POST', Loc, true);
            xhru.onload = function ()
            {
                if(xhru.readyState > 3)
                {
                    if (xhru.status === 200)
                    {
                        func(xhru.responseText, "done", File.name);
                    }
                    else
                    {
                        if(typeof(func) == "function")
                        {
                            func(xhru.responseText, "error", "Connection Error");
                        }
                    }
                }
            };
            xhru.send(formData);
        }
        else
        {
            if(typeof(func) == "function")
            {
                func(xhru.responseText, "error", "No file is attached");
            }
        }
    };


	function sendData(request, func)
	{
		 var params = typeof request == 'string' ? request : Object.keys(request).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(request[k]) }
        ).join('&');

        var xhr1 = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr1.open('POST', Loc);
        xhr1.onreadystatechange = function() {
            if (xhr1.readyState > 3)
            {
                if(xhr1.status==200)
                {
                    try
                    {
                        let d = JSON.parse(xhr1.responseText);
                        if(typeof func == "function")
                        {
                            func(xhr1.responseText, "done");
                        }
                    }
                    catch (e)
                    {
                        if(typeof func == "function")
                        {
                            func(xhr1.responseText, "error");
                        }
                    }
                }
                else
                {
                    if(typeof func == "function")
                    {
                        func(xhr1.responseText, "error");
                    }
                }
            }
        };
        xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr1.send(params);
	}
}
