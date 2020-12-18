
function sendQuotation()
{
    let items = document.getElementsByClassName("price-input");

    let request = {
        sessionid:$("#session-id").val(),
        item_type:$("#item_type").val(),
        data:[],
        job:"send quotation response"
    };

    for(let i = 0; i < items.length; i++)
    {
        request.data[i] = items[i].getAttribute("itemid");
        request.data[i] += ":"+items[i].value;
    }

    $("#quote-main-con").transition('drop out', function(){

        $("#quote-loading-con").transition('drop in', function(){

            postJson("hms-client/worker", function(data, status){
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#quote-loading-con").transition('drop out', function(){
                            $("#quote-completion-con").transition('drop in');
                        });
                    }
                    else
                    {
                        $("#quote-loading-con").transition('drop out', function(){
                            $("#quote-main-con").transition('drop in', function(){
                                ShowModal(d.Message);
                            });
                        });
                    }
                }
                else
                {
                    $("#quote-loading-con").transition('drop out', function(){
                        $("#quote-main-con").transition('drop in', function(){
                            ShowModal("Unable to send response. Please try again");
                        });
                    });
                }
            }, request);

        });
    });
}