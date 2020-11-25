
function fetchCustomers(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "";
    data.Filtervalue = "";
    data.job = "fetchcustomers";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#per-page").dropdown('get value') == "")
    {
        data.Perpage = $("#per-page").dropdown('get value');
    }

    if($("#filter").dropdown('get value') == "")
    {
        data.Filter = $("#filter").dropdown('get value');
    }


    $("#table-body").html(tableLoader());

    postJson("worker.php", function (data, status) {
        if(status == "done")
        {
            let dat = JSON.parse(data);

            if(dat.Status == "SUCCESS")
            {

            }
            else
            {

            }
        }
        else
        {

        }
    }, data);
}

function fetchEditCustomer()
{
    
}


