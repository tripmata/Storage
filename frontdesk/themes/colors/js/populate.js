
function tableLoader(e)
{
    let td = "";
    for(var i = 0; i < e; i++)
    {
        td += "<td><div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div></div></div> </td>";
    }
    return "<tr>"+td+"</tr>"+"<tr>"+td+"</tr>";
}



function populateOder(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "sort by";
    data.Filtervalue = "registration date";
    data.job = "getoder";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }

    if($("#filter").dropdown('get value') != "")
    {
        data.Filter = $("#filter").dropdown('get value');
    }


    if(data.Filter == "sort by")
    {
        data.Filtervalue = $("#sort-sel").val();
    }
    else if(data.Filter == "search list")
    {
        data.Filtervalue = $("#search-txt").val();
    }
    else if(data.Filter == "filter")
    {
        data.Filtervalue = $("#filter-select").val();
    }
    else if(data.Filter == "filter gender")
    {
        data.Filtervalue = $("#gender-filter").val();
    }


    $("#table-body").html(tableLoader(6));

    postJson("worker.php", function (data, status) { //alert(data);

        $("#table-body").html("");

        if(status == "done")
        {
            let dat = JSON.parse(data);


            if (dat.Status == "SUCCESS")
            {
                let sn = 1;

                $("#total_count_btn").html(dat.Total);

                $("#pages").html(Paginate(Number(dat.Page), Number(dat.Total), Number(dat.Perpage), "populateOder"));

                for (var i = 0; i < dat.Data.length; i++)
                {
                    let row = document.createElement("tr");

                    let td1 = document.createElement("td");
                    td1.innerHTML = "<label><input class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                    let td2 = document.createElement("td");
                    td2.innerHTML = "<b class='blue-text'>" + dat.Data[i].Customer.Name + " " + dat.Data[i].Customer.Surname + "</b><br/>" +
                        "<span style='color: silver;'>Email: </span><span style='color: dimgray;'>" +
                        dat.Data[i].Customer.Email + "</span><br/>" +
                        "<span style='color: silver;'><b>Pickup Branch:</b> </span><span style='color: dimgray;'>"
                        + dat.Data[i].PickupBranch + "</span><br/>" +
                        "<a class='ui tiny green-back circular label' style='font-weight: normal;'>" + dat.Data[i].Products.length + "</a>";

                    let td3 = document.createElement("td");
                    td3.innerHTML = "<span style='color: silver;'>Pay Method: </span><span style='color: dimgray;'>" +
                        dat.Data[i].PayMethod.Name + "</span><br/>" +
                        "<span style='color: silver;'>Shipping: </span><span style='color: dimgray;'>"
                        + dat.Data[i].Phone + "</span>";

                    let td4 = document.createElement("td");
                    td4.innerHTML = "<span style='color: silver;'>Order: </span><span style='color: dimgray;'><small>" +
                        dat.Data[i].OrderDate.WeekDay + "," + dat.Data[i].OrderDate.Day + "/" + dat.Data[i].OrderDate.MonthName +
                        "/" + dat.Data[i].OrderDate.Year + "</small></span><br/>" +
                        "<span style='color: silver;'>Due: </span><span style='color: dimgray;'><small>" +
                        dat.Data[i].OrderDate.WeekDay + "," + dat.Data[i].OrderDate.Day + "/" + dat.Data[i].OrderDate.MonthName +
                        "/" + dat.Data[i].OrderDate.Year + "</small></span>";

                    let td5 = document.createElement("td");
                    td5.innerHTML = "<span style='font-family: Arial;'>" + dat.Currency + "</span><span style='color: dimgray;'>" +
                        dat.Data[i].Amount + "</span>";


                    let td6 = document.createElement("td");
                    td6.innerHTML = "<label class='ui " + dat.Data[i].Status.Color + " tag sleak small label'>" + dat.Data[i].Status.Text + "</label>";


                    let td7 = document.createElement("td");
                    td7.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + dat.Data[i].Userid + "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<div class='item' onclick=\"viewContestat('" + dat.Data[i].Userid + "')\"><i class='eye icon'></i> View/Update Order</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='edit icon'></i> Edit Order</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='download icon'></i> Download Invoice</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='download icon'></i> Download File</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='download icon'></i> Download Job Ticket</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='download icon'></i> Download Shipping Label</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='zip file icon'></i> Archive Order</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='pdf file icon'></i> Impose Order</div>" +
                        "<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"deleteContestat('" + dat.Data[i].Userid + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";

                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);
                    row.appendChild(td6);
                    row.appendChild(td7);

                    sn++;

                    document.getElementById("table-body").appendChild(row);
                }

                $(".c-menu").dropdown();
            }
        }
        else
        {

        }
    }, data);
}


function populateCustomers(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "sort by";
    data.Filtervalue = "registration date";
    data.job = "getcustomers";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }

    if($("#filter").dropdown('get value') != "")
    {
        data.Filter = $("#filter").dropdown('get value');
    }


    if(data.Filter == "sort by")
    {
        data.Filtervalue = $("#sort-sel").val();
    }
    else if(data.Filter == "search list")
    {
        data.Filtervalue = $("#search-txt").val();
    }
    else if(data.Filter == "filter")
    {
        data.Filtervalue = $("#filter-select").val();
    }
    else if(data.Filter == "filter gender")
    {
        data.Filtervalue = $("#gender-filter").val();
    }


    $("#table-body").html(tableLoader(6));

    postJson("worker.php", function (data, status) {

        $("#table-body").html("");

        if(status == "done")
        {
            let dat = JSON.parse(data);


            if(dat.Status == "SUCCESS")
            {
                let sn = 1;

                $("#total_count_btn").html(dat.Total);

                $("#pages").html(Paginate(Number(dat.Page), Number(dat.Total), Number(dat.Perpage), "populateCustomers"));

                for(var i = 0; i < dat.Data.length; i++)
                {
                    let row = document.createElement("tr");

                    let td1 = document.createElement("td");
                    td1.innerHTML = "<label><input class='check-sel' type='checkbox' onchange='CheckProcess()'><span>"+sn+"</span></label>";

                    let td2 = document.createElement("td");
                    td2.innerHTML = "<b class='blue-text'>"+dat.Data[i].Name+" "+dat.Data[i].Surname+"</b><br/>" +
                        "<span style='color: silver;'>Email: </span><span style='color: dimgray;'>"+
                        dat.Data[i].Email+"</span><br/>" +
                        "<span style='color: silver;'>Type: </span><span style='color: dimgray;'>"
                        +dat.Data[i].Type+"</span>";

                    let td3 = document.createElement("td");
                    td3.innerHTML = "<span style='color: silver;'>Address: </span><span style='color: dimgray;'>"+
                        dat.Data[i].Street+", "+dat.Data[i].State+", "+dat.Data[i].City+", "+dat.Data[i].Country+"</span><br/>" +
                        "<span style='color: silver;'>Phone: </span><span style='color: dimgray;'>"
                        +dat.Data[i].Phone+"</span>";

                    let td4 = document.createElement("td");
                    td4.innerHTML = "<span style='color: silver;'>Registered: </span><span style='color: dimgray;'>"+
                        dat.Data[i].Registered+"</span><br/>" +
                        "<span style='color: silver;'>Last seen: </span><span style='color: dimgray;'>"
                        +dat.Data[i].LastSeen+"</span>";

                    let td5 = document.createElement("td");
                    if(dat.Data[i].Status == true)
                    {
                        td5.innerHTML = "<div class='switch'><label><input type='checkbox' checked><span class='lever'></span></label></div>";
                    }
                    else
                    {
                        td5.innerHTML = "<div class='switch'><label><input type='checkbox'><span class='lever'></span></label></div>";
                    }



                    let td6 = document.createElement("td");
                    td6.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + dat.Data[i].Userid + "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<div class='item' onclick=\"viewContestat('" + dat.Data[i].Userid + "')\"><i class='eye icon'></i> View</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='edit icon'></i> Edit</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='shopping basket icon'></i> View Oders</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='picture icon'></i> View Template</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='list icon'></i> View Quote</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='map marker icon'></i> Manage Address</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].Userid + "')\"><i class='sign in icon'></i> Login As Customer</div>" +
                        "<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"deleteContestat('" + dat.Data[i].Userid + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";

                   row.appendChild(td1);
                   row.appendChild(td2);
                   row.appendChild(td3);
                   row.appendChild(td4);
                   row.appendChild(td5);
                   row.appendChild(td6);

                   sn++;

                   document.getElementById("table-body").appendChild(row);
                }

                $(".c-menu").dropdown();
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





function populateCategory(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "search";
    data.Filtervalue = $("#search-txt").val();
    data.job = "getcategory";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }


    $("#table-body").html(tableLoader(6));


    postJson("worker.php", function (data, status) {

        $("#table-body").html("");

        if(status == "done")
        {
            let dat = JSON.parse(data);


            if(dat.Status == "SUCCESS")
            {
                let sn = 1;

                $("#total_count_btn").html(dat.Total);

                $("#pages").html(Paginate(Number(dat.Page), Number(dat.Total), Number(dat.Perpage), "populateCustomers"));

                for(var i = 0; i < dat.Data.length; i++)
                {
                    let row = document.createElement("tr");

                    let td1 = document.createElement("td");
                    td1.innerHTML = "<label><input class='check-sel' type='checkbox' onchange='CheckProcess()'><span>"+sn+"</span></label>";

                    let td2 = document.createElement("td");
                    td2.innerHTML = "<img src='' style='width: 100px; background-color: whitesmoke; min-height: 100px; border: none;'>";

                    let td3 = document.createElement("td");
                    td3.innerHTML = "<b class='blue-text'>"+dat.Data[i].Name+"</b><br/>";

                    let td4 = document.createElement("td");
                    td4.innerHTML = dat.Data[i].Sort;

                    let td5 = document.createElement("td");
                    if(dat.Data[i].Status == true)
                    {
                        td5.innerHTML = "<div class='switch'><label><input type='checkbox' checked><span class='lever'></span></label></div>";
                    }
                    else
                    {
                        td5.innerHTML = "<div class='switch'><label><input type='checkbox'><span class='lever'></span></label></div>";
                    }



                    let td6 = document.createElement("td");
                    td6.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + dat.Data[i].CategoryId + "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<div class='item' onclick=\"viewContestat('" + dat.Data[i].CategoryId + "')\"><i class='eye icon'></i> View</div>" +

                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].CategoryId + "')\"><i class='sign in icon'></i>Edit Category</div>" +
                        "<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"deleteContestat('" + dat.Data[i].CategoryId + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";

                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);
                    row.appendChild(td6);

                    sn++;

                    document.getElementById("table-body").appendChild(row);
                }

                $(".c-menu").dropdown();
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




function populateTemplate(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "sort by";
    data.Filtervalue = "registration date";
    data.job = "getcustomers";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }

    if($("#filter").dropdown('get value') != "")
    {
        data.Filter = $("#filter").dropdown('get value');
    }


    if(data.Filter == "sort by")
    {
        data.Filtervalue = $("#sort-sel").val();
    }
    else if(data.Filter == "search list")
    {
        data.Filtervalue = $("#search-txt").val();
    }
    else if(data.Filter == "filter")
    {
        data.Filtervalue = $("#filter-select").val();
    }
    else if(data.Filter == "filter gender")
    {
        data.Filtervalue = $("#gender-filter").val();
    }


    $("#table-body").html(tableLoader(6));

    postJson("worker.php", function (data, status) {alert(data);
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


function populateProduct(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "search list";
    data.Filtervalue = $("#search-txt").val();
    data.job = "getproducts";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }

    if($("#filter").dropdown('get value') != "")
    {
        data.Filter = $("#filter").dropdown('get value');
    }


    if(data.Filter == "filter by category")
    {
        data.Filtervalue = $("#filter-category").val();
    }
    else if(data.Filter == "search list")
    {
        data.Filtervalue = $("#search-txt").val();
    }
    else if(data.Filter == "filter by pricing method")
    {
        data.Filtervalue = $("#filter-pricing").val();
    }


    $("#table-body").html(tableLoader(7));

    postJson("worker.php", function (data, status) { //alert(data);

        $("#table-body").html("");

        if(status == "done")
        {
            let dat = JSON.parse(data);


            if (dat.Status == "SUCCESS")
            {
                let sn = 1;

                $("#total_count_btn").html(dat.Total);

                $("#pages").html(Paginate(Number(dat.Page), Number(dat.Total), Number(dat.Perpage), "populateOder"));

                for (var i = 0; i < dat.Data.length; i++)
                {
                    let row = document.createElement("tr");

                    let td1 = document.createElement("td");
                    td1.innerHTML = "<label><input class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                    let img = dat.Data[i].SmallImage;
                    if(img == ""){img = dat.Data[i].LargeImage;}

                    let td2 = document.createElement("td");
                    td2.innerHTML = "<img src='" + img + "' style='width: 70px; background-color: whitesmoke; height: 70px;'/><br/>";

                    let p_type = "Standard";
                    if(dat.Data[i].IsPromotional){p_type = "Promotional";}

                    let td3 = document.createElement("td");
                    td3.innerHTML = "<b class='blue-text'>"+dat.Data[i].Name+"</b><br/>"+dat.Data[i].Category.Name
                    +"<br/><b style='color: darkgray;'>Product Type: </b>"+p_type+"<br/>" +
                        "<b style='color: darkgray;'>Size: </b> Notset" +
                        "<br/><b style='color: darkgray;'>Page: </b> Notset" +
                        "<br/><br/><span class='ui green-back tiny label'>Size</span> " +
                        "<span class='ui green-back tiny label'>Page</span>" +
                        "<span class='ui tiny label'>Options</span>";


                    let f_ship = dat.Data[i].FreeShipping ? "Yes" : "No";
                    let sheet_calc = dat.Data[i].SheetCalculation ? "Yes" : "No";

                    let td4 = document.createElement("td");
                    td4.innerHTML =
                        "<span style='color: darkgray;'>Available To: </span>" +
                        "<br/><span style='color: darkgray;'>Pricing: </span>" +dat.Data[i].PricingMethod +
                        "<br/><span style='color: darkgray;'>Free SHipping: </span>" + f_ship +
                        "<br/><span style='color: darkgray;'>Sheet Calculation: </span>" + sheet_calc +
                        "";


                    let td5 = document.createElement("td");
                    td5.innerHTML = dat.Data[i].Sort;


                    let td6 = document.createElement("td");
                    if(dat.Data[i].Status === true)
                    {
                        td6.innerHTML = "<div class='switch'>" +
                            "<label><input type='checkbox' checked/><span class='lever'></span></label></div>";
                    }
                    else
                    {
                        td6.innerHTML = "<div class='switch'>" +
                            "<label><input type='checkbox'/><span class='lever'></span></label></div>";
                    }




                    let td7 = document.createElement("td");
                    td7.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + dat.Data[i].ProductId+ "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<div class='item' onclick=\"viewContestat('" + dat.Data[i].ProductId + "')\"><i class='eye icon'></i> View</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='edit icon'></i> Edit</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='tint icon'></i> Designer Option</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='money icon'></i> Price</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='exclamation icon'></i> Additional Option</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='list icon'></i> Option Rules</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='tag icon'></i> Meta Tag</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='image file icon'></i> Gallery</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='question icon'></i> Help Template</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='cog icon'></i> Settings</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='clone icon'></i> Duplicate Product</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='shipping fast icon'></i> Shipping Price</div>" +
                        "<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"deleteContestat('" + dat.Data[i].ProductId + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";

                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);
                    row.appendChild(td6);
                    row.appendChild(td7);

                    sn++;

                    document.getElementById("table-body").appendChild(row);
                }

                $(".c-menu").dropdown();
            }
        }
        else
        {

        }
    }, data);
}





function populateFaqCategory(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "search";
    data.Filtervalue = $("#search-txt").val();
    data.job = "getfaqcategory";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }


    $("#table-body").html(tableLoader(6));


    postJson("worker.php", function (data, status) {

        $("#table-body").html("");

        if(status == "done")
        {
            let dat = JSON.parse(data);


            if(dat.Status == "SUCCESS")
            {
                let sn = 1;

                $("#total_count_btn").html(dat.Total);

                $("#pages").html(Paginate(Number(dat.Page), Number(dat.Total), Number(dat.Perpage), "populateCustomers"));

                for(var i = 0; i < dat.Data.length; i++)
                {
                    let row = document.createElement("tr");

                    let td1 = document.createElement("td");
                    td1.innerHTML = "<label><input class='check-sel' type='checkbox' onchange='CheckProcess()'><span>"+sn+"</span></label>";

                    let td2 = document.createElement("td");
                    td2.innerHTML = "<b class='blue-text'>"+dat.Data[i].Name+"</b><br/>" +
                        "<small style='color: darkgray;'>" +
                        "<b>Created: </b> "+dat.Data[i].Created.MonthName+", "+dat.Data[i].Created.Day+"/"+
                        dat.Data[i].Created.Year+"</small>";

                    let td3 = document.createElement("td");
                    td3.innerHTML = dat.Data[i].Sort;

                    let td4 = document.createElement("td");
                    if(dat.Data[i].Status == true)
                    {
                        td4.innerHTML = "<div class='switch'><label><input type='checkbox' checked><span class='lever'></span></label></div>";
                    }
                    else
                    {
                        td4.innerHTML = "<div class='switch'><label><input type='checkbox'><span class='lever'></span></label></div>";
                    }



                    let td5 = document.createElement("td");
                    td5.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + dat.Data[i].CategoryId + "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].CategoryId + "')\"><i class='sign in icon'></i>Edit Category</div>" +
                        "<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"deleteContestat('" + dat.Data[i].CategoryId + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";

                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);

                    sn++;

                    document.getElementById("table-body").appendChild(row);
                }

                $(".c-menu").dropdown();
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






function populateFaq(page)
{
    let data = new Object();
    data.Page = 1;
    data.Perpage = 25;
    data.Filter = "search list";
    data.Filtervalue = $("#search-txt").val();
    data.job = "getfaq";

    if(Number(page) > 0)
    {
        data.Page = Number(page);
    }

    if($("#perpage").dropdown('get value') != "")
    {
        data.Perpage = $("#perpage").dropdown('get value');
    }

    if($("#filter").dropdown('get value') != "")
    {
        data.Filter = $("#filter").dropdown('get value');
    }


    if(data.Filter == "filter by category")
    {
        data.Filtervalue = $("#faq-cat").val();
    }
    else if(data.Filter == "search list")
    {
        data.Filtervalue = $("#search-txt").val();
    }


    $("#table-body").html(tableLoader(6));

    postJson("worker.php", function (data, status) { //alert(data);

        $("#table-body").html("");

        if(status == "done")
        {
            let dat = JSON.parse(data);


            if (dat.Status == "SUCCESS")
            {
                let sn = 1;

                $("#total_count_btn").html(dat.Total);

                $("#pages").html(Paginate(Number(dat.Page), Number(dat.Total), Number(dat.Perpage), "populateOder"));

                for (var i = 0; i < dat.Data.length; i++)
                {
                    let row = document.createElement("tr");

                    let td1 = document.createElement("td");
                    td1.innerHTML = "<label><input class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                    let td2 = document.createElement("td");
                    td2.innerHTML = "<span class='blue-text'>"+dat.Data[i].Heading+"</span>";

                    let p_type = "Standard";
                    if(dat.Data[i].IsPromotional){p_type = "Promotional";}

                    let td3 = document.createElement("td");
                    td3.innerHTML = dat.Data[i].Category.Name;


                    let td4 = document.createElement("td");
                    td4.innerHTML = dat.Data[i].Sort;


                    let td5 = document.createElement("td");
                    if(dat.Data[i].Status === true)
                    {
                        td5.innerHTML = "<div class='switch'>" +
                            "<label><input type='checkbox' checked/><span class='lever'></span></label></div>";
                    }
                    else
                    {
                        td5.innerHTML = "<div class='switch'>" +
                            "<label><input type='checkbox'/><span class='lever'></span></label></div>";
                    }



                    let td6 = document.createElement("td");
                    td6.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + dat.Data[i].ProductId+ "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<div class='item' onclick=\"editContestant('" + dat.Data[i].ProductId + "')\"><i class='edit icon'></i> Edit</div>" +
                        "<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"deleteContestat('" + dat.Data[i].ProductId + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";

                    row.appendChild(td1);
                    row.appendChild(td2);
                    row.appendChild(td3);
                    row.appendChild(td4);
                    row.appendChild(td5);
                    row.appendChild(td6);

                    sn++;

                    document.getElementById("table-body").appendChild(row);
                }

                $(".c-menu").dropdown();
            }
        }
        else
        {

        }
    }, data);
}

