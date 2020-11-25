var ret_data = "";

var js_place = 0;


var onLoad = Array();

var js_files = Array();
var js_list = Array();

var fade_out = 200;
var fade_in = 500;


function Reload()
{
	locationChanged();
}

function Load_View(view, query)
{
	if(Load_animation == 1)
	{
		anim1();
	}
	else if(Load_animation == 2)
	{
		anim2();
	}
	else if(Load_animation == 3)
	{
		anim3();
	}
	
	var tries = 0;
	//location.href = Space_Path + "#/" + view;
	if(view != "")
	{
		var h = view.split('/')[0].split(".");

		var st = view.split('/')[0].split("#");

		view ="";

		for(var i = 0; i < st.length; i++)
		{
			view += st[i];
		}
		
		//alert(view);

		hash = "";

		if(h.length > 1)
		{
			for(var i =0;i < (h.length - 1); i++)
			{
				hash += h[i];
			}
		}
		else
		{
			hash = view;
			view = view+".php";
		}
		
		/*
		if(location.hash != view)
		{
			location.hash = hash;
		}*/
	}
	
	get("module/manifest.php?app="+app_id+"&s_height="+page_height+"&s_width="+page_width+"&path="+app_path+"&page="+view, function(data,status,f_code){
		if(status == "done")
		{
			var dat1 = JSON.parse(data);
			
			var gets ="";

			if(location.hash.split('/').length > 1)
			{
				var sub = 0;
				var g = location.hash.split('/');
				
				for(var i = 1; i < g.length; i++)
				{
					var tmp = g[i];
					
					if(g[i].split('=').length == 1)
					{
						tmp = "arg"+sub+"="+g[1];
					}
					
					if(gets == "")
					{
						gets = tmp;
					}
					else
					{
						gets += ":-:" + tmp;
					}
				}
			}

			get("module/loader.php?app="+app_id+"&s_height="+page_height+"&s_width="+page_width+"&path="+app_path+"&page="+view+"&q="+gets, function(data,status,f_code){
				if(status == "done")
				{
					var d = data.split(":");
					if((d.length == 2) && (d[0].trim() == "REDIRECT"))
					{
						if(location.hash.trim() != d[1].trim())
						{
							location.hash = d[1].trim();
						}
					}
					else
					{
						try{
							
							eval("if(dat1."+view.split(".")[0]+".body != undefined){if(typeof(dat1."+view.split(".")[0]+".body) == \"string\"){"
								+"var attrs = dat1."
								+view.split(".")[0]+".body.split(\";\");"
								+"for(var i = 0; i < attrs.length; i++){var atvl = attrs[i].split(\":\");"
								+"if(atvl.length == 2){$(\"body\").css(atvl[0].trim(),atvl[1].trim());}}}}");
								
							eval("if(dat1."+view.split(".")[0]+".title != undefined){if(typeof(dat1."+view.split(".")[0]+".title) == \"string\"){"
								+"document.title = dat1."+view.split(".")[0]+".title;}}");
								
							eval("if(dat1."+view.split(".")[0]+".fade_in != undefined){if(Number(dat1."+view.split(".")[0]+".fade_in) != NaN){"
								+"fade_in = Number(dat1."+view.split(".")[0]+".fade_in);}}");
							
							eval("if(dat1."+view.split(".")[0]+".fade_out != undefined){if(Number(dat1."+view.split(".")[0]+".fade_out) != NaN){"
								+"fade_out = Number(dat1."+view.split(".")[0]+".fade_out);}}");
							
							eval("if(dat1."+view.split(".")[0]+".fade_speed != undefined){if(Number(dat1."+view.split(".")[0]+".fade_speed) != NaN){"
								+"fade_in = Number(dat1."+view.split(".")[0]+".fade_speed);"
								+"fade_out = Number(dat1."+view.split(".")[0]+".fade_speed);}}");
							
							js_list = Array();
							js_files = Array();
							js_place = 0;
							
							eval("if(dat1."+view.split(".")[0]+".js != undefined){"
								+"if(typeof(dat1."+view.split(".")[0]+".js) == \"string\"){js_list.push(dat1."+view.split(".")[0]+".js);"
								+"}else{for(var i =0; i < dat1."+view.split(".")[0]+".js.length; i++){js_list.push(dat1."+view.split(".")[0]+".js[i]);}}}");
								
							getjsFiles();
							ret_data = data;
						}
						catch(e)
						{
							removeAnimation();
							debug.Error("MISSING_MANIFEST_DATA",Debug_Mode);
						}
					}
				}
				else
				{
					removeAnimation()
					debug.Error(f_code,Debug_Mode);
				}
			});
		}
		else
		{
			removeAnimation();
			if(f_code == "NOT_FOUND")
			{
				debug.Error("MANIFEST_MISSING",Debug_Mode);
			}
			else
			{
				debug.Error(f_code,Debug_Mode);
			}
		}
	});
}


function getjsFiles()
{
	if(js_list.length == js_place)
	{
		Render_Space();
	}
	else
	{
		get("repository/js/"+js_list[js_place], function(data, status, f_code){
			if(status == "done")
			{
				js_files.push(data);
				js_place++;
				getjsFiles();
			}
			else
			{
				removeAnimation()
				debug.Error(f_code,Debug_Mode);
			}
		});
	}
}


function Render_Space()
{
	$('body').fadeOut(fade_out, function(){
		$('body').html(ret_data);
		document.scrollTop = 0;
		$('body').fadeIn(fade_in, function(){
			reSize();
			$(".ui.dropdown").dropdown();
			for(var i = 0; i < js_files.length; i++)
			{
				try{eval(js_files[i]);}
				catch(e)
				{
					debug.Error("ERROR_IN_JS",js_list,e);
				}
			}
		});
	});
}

function Load_Sub(view, con, func)
{
	if(SubLoad_animation == 1)
	{
		anim1();
	}
	else if(SubLoad_animation == 2)
	{
		anim2();
	}
	else if(SubLoad_animation == 3)
	{
		anim3();
	}
	var tries = 0;
	//location.href = Space_Path + "#/" + view;
	
	if(view != "")
	{
		var h = view.split(".");

		var st = view.split("#");

		view ="";

		for(var i = 0; i < st.length; i++)
		{
			view += st[i];
		}

		if(h.length < 2)
		{
			hash = view;
			view = view+".php";
		}
	}
	
	get("module/loader.php?app="+app_id+"&s_height="+page_height+"&s_width="+page_width+"&path="+app_path+"&page="+view, function(data,status){
		if(status == "done")
		{
			$('#'+con).html(data);
			removeAnimation();
			reSize();
			if(func != undefined)
			{
				func("done", view);
			}
		}
	});
}

function postLoad()
{
	scrollbud();
}

function Load(v, con, func)
{
	if(con == null)
	{
		if(v != "")
		{
			var h = v.split(".");

			var st = v.split("#");

			view ="";

			for(var i = 0; i < st.length; i++)
			{
				view += st[i];
			}

			hash = "";

			if(h.length > 1)
			{
				for(var i =0;i < (h.length - 1); i++)
				{
					hash += h[i];
				}
			}
			else
			{
				hash = view;
			}
			location.hash = hash;
		}
	}
	else
	{
		Load_Sub(v, con, func);
	}
}

function get(url,func)
{
	var xmlhttp;

	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4)
		{
			if(xmlhttp.status == 0)
			{
				func(xmlhttp.responseText,"error","NETWORK");
			}
			else if(xmlhttp.status == 404)
			{
				func(xmlhttp.responseText,"error","NOT_FOUND");
			}
			else
			{
				func(xmlhttp.responseText,"done");
			}
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function post(url, func, data) 
	{
	    var params = typeof data == 'string' ? data : Object.keys(data).map(
	            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
	        ).join('&');
	
	    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	    xhr.open('POST', url);
	    xhr.onreadystatechange = function() {
	        if (xhr.readyState > 3 && xhr.status==200)
			{
				func(xhr.responseText, "done");
			}
	    };
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xhr.send(params);
	}


function Module(file, func, data)
{
	post("module/module.php?app="+app_id+"&s_height="+page_height+"&s_width="+page_width+"&path="+app_path+"&page="+file, function(data, status){
		func(data, status);
	}, data);
}



function GetHashQuery()
{
	var gets ="";

	if(location.hash.split('/').length > 1)
	{
		var sub = 0;
		var g = location.hash.split('/');
		
		for(var i = 1; i < g.length; i++)
		{
			var tmp = g[i];
			
			if(g[i].split('=').length == 1)
			{
				tmp = "arg"+sub+"="+g[1];
			}
			
			if(gets == "")
			{
				gets = tmp;
			}
			else
			{
				gets += "&" + tmp;
			}
		}
	}
	return gets;
}
	