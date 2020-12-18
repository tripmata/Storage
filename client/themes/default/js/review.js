
    $(document).ready(function(){
        $(".ui.rating").rating();
    });

    function nextItemCon(e)
    {
        let oldCon = "#review-item-"+(Number(e))+"-con";
        let newCon = "#review-item-"+(Number(e) + 1)+"-con";

        $(oldCon).transition("scale out", function () {
            $(newCon).transition("scale in");
        });
    }

    function previousItemCon(e)
    {
        let oldCon = "#review-item-"+(Number(e))+"-con";
        let newCon = "#review-item-"+(Number(e) - 1)+"-con";

        $(oldCon).transition("scale out", function () {
            $(newCon).transition("scale in");
        });
    }


    function reviewCompleted()
    {
        let items = document.getElementsByClassName("review-con");

        let request = {
            sessionid:$("#session-id").val(),
            channel:$("#review-channel").val(),
            data:[],
            job:"send review response"
        };

        for(let i = 0; i < items.length; i++)
        {
            request.data[i] = items[i].getAttribute("item-id");

            if(items[i].getAttribute("review-item-type") == "star-rating")
            {
                request.data[i] += ":"+items[i].getAttribute("review-item-type");
                request.data[i] += ":"+$("#review-item-"+i).rating('get rating');
            }
            if(items[i].getAttribute("review-item-type") == "heart-rating")
            {
                request.data[i] += ":"+items[i].getAttribute("review-item-type");
                request.data[i] += ":"+$("#review-item-"+i).rating('get rating');
            }
            if(items[i].getAttribute("review-item-type") == "multiple-select")
            {
                request.data[i] += ":"+items[i].getAttribute("review-item-type");
                let j = 0;
                while(getElement("review-item-"+i+"-option-"+j) != null)
                {
                    if(getElement("review-item-"+i+"-option-"+j).checked)
                    {
                        request.data[i] += ":"+getElement("review-item-"+i+"-option-"+j).getAttribute("data-text");
                    }
                    j++;
                }
            }
            if(items[i].getAttribute("review-item-type") == "single-select")
            {
                request.data[i] += ":"+items[i].getAttribute("review-item-type");
                let j = 0;
                while(getElement("review-item-"+i+"-option-"+j) != null)
                {
                    if(getElement("review-item-"+i+"-option-"+j).checked)
                    {
                        request.data[i] += ":"+getElement("review-item-"+i+"-option-"+j).getAttribute("data-text");
                    }
                    j++;
                }
            }
            if(items[i].getAttribute("review-item-type") == "comment-box")
            {
                request.data[i] += ":"+items[i].getAttribute("review-item-type");
                request.data[i] += ":"+$("#review-item-"+i).val();
            }
        }

        $("#review-main-con").transition('drop out', function(){

            $("#review-loading-con").transition('drop in', function(){

                postJson("hms-client/worker", function(data, status){
                    if(status === "done")
                    {
                        let d = JSON.parse(data);

                        if(d.Status === "success")
                        {
                            $("#review-loading-con").transition('drop out', function(){
                                $("#reviews-completion-con").transition('drop in');
                            });
                        }
                        else
                        {
                            $("#review-loading-con").transition('drop out', function(){
                                $("#review-main-con").transition('drop in', function(){
                                    ShowModal(d.Message);
                                });
                            });
                        }
                    }
                    else
                    {
                        $("#review-loading-con").transition('drop out', function(){
                            $("#review-main-con").transition('drop in', function(){
                                ShowModal("Unable to send response. Please try again");
                            });
                        });
                    }
                }, request);

            });
        });
    }