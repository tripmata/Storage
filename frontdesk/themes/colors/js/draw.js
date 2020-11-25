
    let Action_Icon = "wrench";


    function DrawDashboard()
    {
        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-1 lift-1";
        pageTop.innerHTML = "<h6 style='font-weight: normal; font-family: quicksandregular; color: dimgray;'>" +
            "<div class='blue-back icon-block'><i class='icon tachometer alternate'></i></div> Dashboard</h6>";
        pageTop.style.backgroundColor = "white";

        document.getElementById("page").appendChild(pageTop);

        let row = document.createElement("div");
        row.className = "w3-row l-pad-2";

        row.innerHTML = "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve lift-1 l-pad-1'>" +
            "<h6 style='font-family: quicksandbold; color: dimgray;'>Customers</h6>" +
            "<div class='w3-container'> " +
            "<h5 class='blue' style='font-family: quicksandbold;'> 542,245" +
            "<div class='icon-block blue-back' style='float: right;'>" +
            "<small><i class='users icon' style=''></i></small></div></h5></div><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "</div></h3></div></div>" +


            "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve lift-1 l-pad-1'>" +
            "<h6 style='font-family: quicksandbold; color: dimgray;'>Orders</h6>" +
            "<div class='w3-container'> " +
            "<h5 class='yellow' style='font-family: quicksandbold;'> 243,422" +
            "<div class='icon-block yellow-back' style='float: right;'>" +
            "<small><i class='shopping basket icon' style=''></i></small></div></h5></div><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "</div></h3></div></div>" +


            "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve lift-1 l-pad-1'>" +
            "<h6 style='font-family: quicksandbold; color: dimgray;'>Quotation</h6>" +
            "<div class='w3-container'> " +
            "<h5 class='green' style='font-family: quicksandbold;'> 1,221" +
            "<div class='icon-block green-back' style='float: right;'>" +
            "<small><i class='list icon' style=''></i></small></div></h5></div><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "</div></h3></div></div>" +


            "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve lift-1 l-pad-1'>" +
            "<h6 style='font-family: quicksandbold; color: dimgray;'>Products</h6>" +
            "<div class='w3-container'> " +
            "<h5 class='red' style='font-family: quicksandbold;'> 223,1" +
            "<div class='icon-block red-back' style='float: right;'>" +
            "<small><i class='tag icon' style=''></i></small></div></h5></div><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "</div></h3></div></div>";



        document.getElementById("page").appendChild(row);
    }


    function DrawOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("shopping basket alternate", "Order List"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<button class='blue-back btn btn-small' style='font-family: quicksandbold; margin-right: 10px;'>" +
            "Payment Request</button>"
            +"<button class='red-back btn btn-small' style='font-family: quicksandbold; margin-right: 10px;'>" +
            "Notes / Messages</button>" +
            "<button class='green-back btn btn-small' style='font-family: quicksandbold;'>" +
            "Job Board</button>";

        document.getElementById("page").appendChild(buttons);




        let filterCon = document.createElement("div");
        filterCon.className = "l-pad-2";
        filterCon.style.paddingBottom = "0px";
        filterCon.style.paddingTop = "0px";

        let filter = document.createElement("div");
        filter.className = "widget l-pad-1 lift-1 curve";

        filter.style.margin = "auto";
        filter.innerHTML = "<div id='filter' class='ui inline dropdown'>" +
            "      <div class='text red' style='font-family: quicksandregular;'>Sort By</div>" +
            "      <i class='dropdown icon'></i>" +
            "      <div class='menu'>" +
            "        <div class='header'>Sort criteria</div>" +
            "        <div class='item' data-text='Sort By'>Default</div>" +
            "        <div class='item' data-text='Search List'>Search List</div>" +
            "        <div class='item' data-text='Sort By Status'>Sort By Status</div>" +
            "        <div class='item' data-text='User Type'>User Type</div>" +
            "        <div class='item' data-text='Assigned Printer'>Assigned Printer</div>" +
            "        <div class='item' data-text='Branch'>Branch</div>" +
            "        <div class='item' data-text='Order Date'>Order Date</div>" +
            "        <div class='item' data-text='Delivery Date'>Delivery Date</div>" +
            "        <div class='item' data-text='Payment Method'>Payment Method</div>" +
            "        <div class='item' data-text='Amount'>Amount</div>" +
            "        <div class='item' data-text='Trait'>Trait</div>" +
            "      </div>" +
            "    </div>" +
            "<span id='oder-filter-controls'>" +
                "<select class='ui dropdown'>" +
                "<option>Order Date</option>"+
                "<option>Due Date</option>"+
                "<option>Update Date</option>"+
                "</select>" +
            "</span>";

        filterCon.appendChild(filter);
        document.getElementById("page").appendChild(filterCon);



        let tableCon = document.createElement("div");
        tableCon.className = "l-pad-2";
        tableCon.appendChild(DrawTable(["Order Detail","Payment & Shipping","Date","Amount","Status","Action"],
            {Celled: true, Padded: true, GroupAction: [{Text: "Archive Order", Method: "GroupArchOrder"},
                    {Text:"DIVIDER"},{Text: "Delete Order", Method: "ConfGroupOrderDelete"}]}));
        document.getElementById("page").appendChild(tableCon);




        let referenceCon = document.createElement("div");
        referenceCon.className = "l-pad-2";
        referenceCon.style.backgroundColor = "transparent";

        let refTable = document.createElement("table");
        refTable.className = "ui very basic table";
        refTable.style.backgroundColor = "transparent;"
        refTable.innerHTML = "<tr>" +
            "<td style='border-bottom: none;'><i class='yellow user circle circular icon' data-content='Guest customer'></i> Total Order </td>" +
            "<td><i class='green user circle circular outline icon' data-content='Guest customer'></i> Guest Customer </td>" +
            "<td><i class='blue refresh circular icon' data-content='Guest customer'></i> Reorder </td>" +
            "<td><i class='green cart circular icon' data-content='Repeated customer'></i> Repeated Customer </td>" +
            "<td><i class='green cart circular icon' data-content='Repeated customer'></i> Repeated Customer </td>" +
            "</tr><tr>" +
            "<td style='border: none;'><i class='red image circular icon' data-content='Guest customer'></i> Image Added </td>" +
            "<td style='border: none;'><i class='yellow usd circular icon' data-content='Guest customer'></i> Payment request </td>" +
            "<td style='border: none;'><i class='green upload circle circular icon' data-content='Guest customer'></i> Guest Customer </td>" +
            "<td style='border: none;'><i class='red print circular icon' data-content='Guest customer'></i> Guest Customer </td>" +
            "<td style='border: none;'><i class='green cart circular icon' data-content='Repeated customer'></i> Repeated Customer </td>" +
            "</tr>";


        referenceCon.appendChild(refTable);
        document.getElementById("page").appendChild(referenceCon);


        $(".ui.dropdown").dropdown();
        $('#filter').dropdown('setting', 'onChange', function(val, text, choice){

            //$("#oder-filter-controls").slideUp(600, function () {

                if(val == "search list")
                {
                    $("#oder-filter-controls").html("<div class='ui left icon input'><i class='red search icon'></i> " +
                        "<input type='text' placeholder='Search'> </div> " +
                        "<button class='ui button red-back' style='color: white;'>Search</button>");
                }
                if(val == "sort by")
                {
                    $("#oder-filter-controls").html("<select id='default-order' class='ui dropdown'>" +
                        "<option>Order Date</option>"+
                        "<option>Due Date</option>"+
                        "<option>Update Date</option>"+
                        "</select>");
                    $("#default-order").dropdown();
                }
                if(val == "sort by status")
                {
                    $("#oder-filter-controls").html("<select id='sort-order-status' class='ui loading dropdown'>" +
                        "</select>");
                    $("#sort-order-status").dropdown();
                }
                if(val == "user type")
                {
                    $("#oder-filter-controls").html("<select id='sort-user' class='ui loading dropdown'>" +
                        "</select>");
                    $("#sort-user").dropdown();
                }
                if(val == "branch")
                {
                    $("#oder-filter-controls").html("<select id='sort-branch' class='ui loading dropdown'>" +
                        "</select>");
                    $("#sort-branch").dropdown();
                }
                if(val == "order date")
                {
                    $("#oder-filter-controls").html("<div class='ui left action input'>" +
                         "<select id='order-period-select' class='ui selection dropdown'>"+
                            "<option>From</option>"+
                            "<option>Today</option>" +
                            "<option>Yesterday</option> "+
                            "<option>This week</option> "+
                            "<option>This Month</option> "+
                            "<option>Last Month</option> "+
                           " <option>This Year</option> "+
                           " <option>Last Year</option> "+
                            "</select>" +
                        "<input type='text' placeholder='from'> </div> " +
                        "<div class='ui input'><input type='' placeholder='to'> </div> " +
                        "<button class='ui button red-back' style='color: white;'>Sort</button>");

                    $("#order-period-select").dropdown();
                }
                if(val == "assigned printer")
                {
                    $("#oder-filter-controls").html("<select id='sort-branch' class='ui loading dropdown'>" +
                        "</select>");
                    $("#sort-branch").dropdown();
                }
                if(val == "delivery date")
                {
                    $("#oder-filter-controls").html("<div class='ui left action input'>" +
                        "<select id='delv-period-select' class='ui selection dropdown'>"+
                        "<option>From</option>"+
                        "<option>Delivery Today</option>" +
                        "<option>Delivery Tommorow</option> "+
                        "<option>Delivery Next Week</option> "+
                        "<option>Delivery Next Month</option> "+
                        " <option>Delivery Overdue</option> "+
                        "</select>" +
                        "<input type='text' placeholder='from'> </div> " +
                        "<div class='ui input'><input type='' placeholder='to'> </div> " +
                        "<button class='ui button red-back' style='color: white;'>Sort</button>");

                    $("#delv-period-select").dropdown();
                }
                if(val == "payment method")
                {
                    $("#oder-filter-controls").html("<select id='sort-pay-method' class='ui dropdown'>" +
                        "<option>POS (Point Of Sale)</option>" +
                        "<option>Bank Transfer</option>" +
                        "<option>Paystack</option>" +
                        "</select>");
                    $("#sort-pay-method").dropdown();
                }
                if(val == "amount")
                {
                    $("#oder-filter-controls").html("<div class='ui left action input'>" +
                        "<select id='sort-pay-method' class='ui dropdown'>" +
                        "<option>Equal To</option>" +
                        "<option>Greater Than</option>" +
                        "<option>Less Than</option>" +
                        "<option>Greater or Equal To</option>" +
                        "<option>Less or Equal To</option>" +
                        "</select><input type='number' value='100'></div>");
                    $("#sort-pay-method").dropdown();
                }
                if(val == "trait")
                {
                    $("#oder-filter-controls").html("<div class='ui left action input'>" +
                        "<i class='icon user circle outline circular green'></i> " +
                        "<i class='icon user circle circular blue'></i> " +
                        "<i class='icon cart circular green'></i> " +
                        "<i class='icon refresh circular blue'></i> " +
                        "<i class='icon refresh circular yellow'></i> " +
                        "<i class='icon refresh circular blue'></i> " +
                        "<i class='icon images circular red'></i> " +
                        "<i class='icon usd circular green'></i> " +
                        "<i class='icon upload circular yellow'></i> " +
                        "<i class='icon print circular red'></i> " +
                        "</div>");
                }
        });

        $('#perpage').dropdown('setting', 'onChange', function(val, text, choice) {
            populateOder();
        });

        populateOder();
    }


    function DrawNewOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cart plus", "Create New Order"));


        let step = document.createElement("div");
        step.style.margin = "auto";
        step.style.width = "auto";
        step.className = "l-pad-3"
        step.style.textAlign = "center";
        step


        step.innerHTML = "<div class='ui ordered steps' style='text-align: left; font-family: quicksandregular;'>" +
            "  <div class='active step'>" +
            "    <div class='content'>" +
            "      <div class='title blue' style='font-family: quicksandbold;'>Customer</div>" +
            "      <div class='description'>Select customers</div>" +
            "    </div>" +
            "  </div>" +
            "  <div class='step'>" +
            "    <div class='content'>" +
            "      <div class='title blue' style='font-family: quicksandbold;'>Product</div>" +
            "      <div class='description'>Add products to print</div>" +
            "    </div>" +
            "  </div>" +
            "  <div class='step'>" +
            "    <div class='content'>" +
            "      <div class='title blue' style='font-family: quicksandbold;'>Billing $ Shipping</div>" +
            "      <div class='description'>Pay and select shipping menthod</div>" +
            "    </div>" +
            "  </div>" +
            "</div>";

        document.getElementById("page").appendChild(step);

        let cusSearch = document.createElement("div");
        cusSearch.className = "l-width-6 s-pad-1";
        $(cusSearch).css("margin","auto");

        cusSearch.innerHTML = "<div class=''>" +
            "<select class='ui search fluid dropdown'>" +
            "<option value=''>Search Customers</option></select> </div><br/>" +
            "<button class='btn btn-small green-back'>New Customer</button>";

        document.getElementById("page").appendChild(cusSearch);

        $(".ui.dropdown").dropdown();

    }


    function DrawExportOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cart arrow down", "Export Order"));
    }



    function DrawOrderStatus()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tags", "Order Status"));
    }


    function DrawCoupon()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("ticket", "Coupon"));
    }


    function DrawRewardPoint()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("gift", "Reward Point"));
    }


    function DrawUnpaidOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("money", "Unpaid Order"));
    }


    function DrawOrderArchive()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("zip file", "Order Archive"));
    }



    function DrawQuote()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("shopping basket", "Quote"));
    }



    function DrawPrintQuote()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-1 lift-1";
        pageTop.innerHTML = "<h6 style='font-weight: normal; font-family: quicksandregular; color: dimgray;'>" +
            "<div class='icon-block blue-back'><i class='shopping basket alternate icon'></i></div> Order List</h6>";
        pageTop.style.backgroundColor = "white";

        document.getElementById("page").appendChild(DrawHeader("print", "Print Quote"));
    }



    function DrawQuoteStatus()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tag", "Quote Status"));
    }
    
    
    
    function DrawCustomers()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("group", "Customers"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#add-customer'\" style='margin-right: 5px;'>" +
            "<div class='ui small blue-back button'><i class='plus icon'></i>New Customer</div>" +
            "<a id='total_count_btn' class='ui basic blue-border blue-text left pointing label'></a></div>"
            +"<button class='yellow-back small ui button' style='margin-right: 5px;'>" +
            "Notes / Messages</button>" +
            "<button class='green-back small icon ui button'>" +
            "<i class='download icon'></i> Import</button>";

        document.getElementById("page").appendChild(buttons);




        let filterCon = document.createElement("div");
        filterCon.className = "l-pad-2 m-pad-1 s-pad-1";
        filterCon.style.paddingBottom = "0px";
        filterCon.style.paddingTop = "0px";

        let filter = document.createElement("div");
        filter.className = "pad-1 curve";

        filter.style.margin = "auto";
        filter.innerHTML = "<div id='filter' class='ui inline dropdown'>" +
            "      <div class='text red' style='font-family: quicksandregular;'>Sort By</div>" +
            "      <i class='dropdown icon'></i>" +
            "      <div class='menu'>" +
            "        <div class='header'>Sort criteria</div>" +
            "        <div class='item' data-text='Sort By'>Default</div>" +
            "        <div class='item' data-text='Search List'>Search List</div>" +
            "        <div class='item' data-text='Filter By Status'>Filter By Status</div>" +
            "        <div class='item' data-text='Filter By Sales Agent'>Filter By Sales Agent</div>" +
            "        <div class='item' data-text='Filter By Reg Date'>Filter By Reg Date</div>" +
            "      </div>" +
            "    </div>" +
            "<span id='oder-filter-controls'>" +
            "<select class='ui dropdown'>" +
            "<option>Registration Date</option>"+
            "<option>Name</option>"+
            "<option>Phone</option>"+
            "<option>Email</option>"+
            "<option>Last Seen</option>"+
            "<option>Address</option>"+
            "</select>" +
            "</span>";

        filterCon.appendChild(filter);
        document.getElementById("page").appendChild(filterCon);



        let tableCon = document.createElement("div");
        tableCon.className = "l-pad-2";
        tableCon.appendChild(DrawTable(["Customers Info","Address","Date","Status","Action"],
            {GroupAction: [{Text:"Delete", Method: "ConfGroupCusDelete"}]}));
        document.getElementById("page").appendChild(tableCon);




        $(".ui.dropdown").dropdown();
        $('#filter').dropdown('setting', 'onChange', function(val, text, choice){

            if(val == "search list")
            {
                $("#oder-filter-controls").html("<div class='ui left icon input'><i class='red search icon'></i> " +
                    "<input type='text' placeholder='Search'> </div> " +
                    "<button class='ui button red-back' style='color: white;'>Search</button>");
            }
            if(val == "sort by")
            {
                $("#oder-filter-controls").html("<select id='default-order' class='ui dropdown'>" +
                    "<option>Registration Date</option>"+
                    "<option>Name</option>"+
                    "<option>Phone</option>"+
                    "<option>Email</option>"+
                    "<option>Last Seen</option>"+
                    "<option>Address</option>"+
                    "</select>");
                $("#default-order").dropdown();

                populateCustomers();
            }
            if(val == "filter by sales agent")
            {
                $("#oder-filter-controls").html("<select id='sort-order-status' class='ui loading dropdown'>" +
                    "</select>");
                $("#sort-order-status").dropdown();
            }
            if(val == "filter by status")
            {
                $("#oder-filter-controls").html("<select id='sort-user' class='ui dropdown'>" +
                    "<option>Active</option><option>Others</option></select>");
                $("#sort-user").dropdown();

                populateCustomers();
            }
            if(val == "filter by reg date")
            {
                $("#oder-filter-controls").html("<div class='ui left action input'>" +
                    "<select id='order-period-select' class='ui selection dropdown'>"+
                    "<option>From</option>"+
                    "<option>Today</option>" +
                    "<option>Yesterday</option> "+
                    "<option>This week</option> "+
                    "<option>This Month</option> "+
                    "<option>Last Month</option> "+
                    " <option>This Year</option> "+
                    " <option>Last Year</option> "+
                    "</select>" +
                    "<input type='text' placeholder='from'> </div> " +
                    "<div class='ui input'><input type='' placeholder='to'> </div> " +
                    "<button class='ui button red-back' style='color: white;'>Filter</button>");

                $("#order-period-select").dropdown();
            }
        });

        $('#perpage').dropdown('setting', 'onChange', function(val, text, choice)
        {
            populateCustomers();
        });

        populateCustomers();
    }
    
    
    function DrawNewCustomer() {

        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("user", "Add Customer"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick='saveCustomer()' style='margin-right: 5px;'>" +
            "<div id='save-btn-icon' class='ui small blue-back button'><i id='save-btn-i' class='save icon'></i></div>" +
            "<a id='save-btn-txt' class='ui basic blue-border blue-text left pointing label'>Save </a></div>"
            +"<button id='saveback-btn' class='green-back small ui button' style='margin-right: 5px;' onclick='SaveAndBack()'>" +
            "Save & Go Back</button>" +
            "<a href='#customers'><button class='red-back small icon ui button'>" +
            "<i class='arrow left icon'></i> Back</button></a>";

        document.getElementById("page").appendChild(buttons);



        let errorMsg = document.createElement("div");
        errorMsg.id = "errmsg";
        errorMsg.className = "l-pad-3 m-pad-2 s-pad-1";
        errorMsg.innerHTML = "<div id='errmsg-txt' class='ui error message'>Passwords don't match</div>";
        errorMsg.style.paddingTop = "0px";
        errorMsg.style.display = "none";

        document.getElementById("page").appendChild(errorMsg);



        let form  = document.createElement("div");
        form.className = "l-pad-3 m-pad-2 s-pad-1";
        form.style.paddingTop = "0px";

        form.innerHTML = "<div class='widget curve lift-1 l-pad-2 m-pad-2 s-pad-1'>" +
            "<div><h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='address book icon'></i></div> Personal Info</h6></div><hr/>" +
            "<div class='w3-row'><div class='w3-col l6 m6 s12'>"+
            "<table class='ui very basic table no-line'>" +
            "<tr>" +
            "<td>User Type</td>" +
            "<td><select class='ui dropdown'><option>Retailer</option><option>Multi Pro</option></select></td>" +
            "</tr>" +
            "<tr>" +
            "<tr>" +
            "<td>Full Name</td>" +
            "<td><div id='name-con' class='ui left icon input'>" +
            "<i class='icon blue user'></i>" +
            "<input id='name' type='text' placeholder='First name'  " +
            "onkeyup=\"resetField('name')\" onchange=\"resetField('name')\"/></div></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Email</td>" +
            "<td><div id='email-con' class='ui left icon input'><i class='icon at blue'></i>"+
            "<input id='email' type='text' placeholder='Email' " +
            "onkeyup=\"resetField('email')\" onchange=\"resetField('email')\"/></div></td>" +
            "</tr>" +
            "</table></div>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<table class='ui very basic table no-line'>" +
            "<tr>" +
            "<td>Sales Agent</td>" +
            "<td><select class='ui dropdown'><option value=''>Select Agent</option></select></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Surname</td>" +
            "<td><div id='sname-con' class='ui left icon input'><i class='blue user icon'></i> " +
            "<input id='sname' type='text'  onkeyup=\"resetField('sname')\" onchange=\"resetField('sname')\" /> </div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>User Group</td>" +
            "<td><select class='ui dropdown'></select> </td>" +
            "</tr>" +
            "</table>" +
            "</div>" +
            "" +
            "</div></div>";

        document.getElementById("page").appendChild(form);






        let appearance  = document.createElement("div");
        appearance.className = "l-pad-3 m-pad-1 s-pad-1";
        appearance.style.paddingTop = "0px";

        appearance.innerHTML = "<div class='widget curve lift-1 l-pad-2 m-pad-2 s-pad-1'>" +
            "<div><h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='map marker icon'></i></div> Customer's Address</h6></div><hr/>" +
            "<div class='w3-row'><div class='w3-col l6 m6 s12'>"+
            "<table class='ui very basic table no-line'>" +
            "<tr>" +
            "<td>Street Address</td>" +
            "<td><div id='street-con' class='ui input'><input id='street' type='text' " +
            " onkeyup=\"resetField('street')\" onchange=\"resetField('street')\"></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<tr>" +
            "<td>State</td>" +
            "<td><div id='state-con' class='ui left icon input'><i class='icon map blue'></i>" +
            "<input id=state type='text' placeholder='State'  " +
            "onkeyup=\"resetField('state')\" onchange=\"resetField('state')\"/></div></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Phone</td>" +
            "<td><div id='phone-con' class='ui left icon input'><i class='icon mobile blue'></i>"+
            "<input id='phone' type='text' placeholder='' " +
            " onkeyup=\"resetField('phone')\" onchange=\"resetField('phone')\" /></div></td>" +
            "</tr>" +
            "</table></div>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<table class='ui very basic table no-line'>" +
            "<tr>" +
            "<td>Country</td>" +
            "<td>"+country_dropdown+"</td>" +
            "</tr>" +
            "<tr>" +
            "<td>City</td>" +
            "<td><div id='city-con' class='ui left icon input'><i class='blue map marker icon'></i> " +
            "<input id='city' type='text'  onkeyup=\"resetField('city')\" onchange=\"resetField('city')\"/> </div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Company</td>" +
            "<td><div id='company-con' class='ui left icon input'>" +
            "<input id='company' type='text'  onkeyup=\"resetField('company')\" onchange=\"resetField('company')\" />" +
            "<i class='factory icon blue'></i> </div></td> " +
            "</tr>" +
            "</table>" +
            "</div>" +
            "" +
            "</div></div>";

        document.getElementById("page").appendChild(appearance);





        let images  = document.createElement("div");
        images.className = "l-pad-3 m-pad-2 s-pad-1";
        images.style.paddingTop = "0px";

        images.innerHTML = "<div class='widget curve w3-container lift-1 l-pad-2 m-pad-2 s-pad-1'>" +
            "<div><h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='cog icon'></i></div>" +
            " Customer's Settings</h6></div><hr/>" +
            "<div clas='w3-row'><div class='w3-col l6 m6 s12'>"+
            "<table class='ui very basic table no-line'>" +
            "<tr>" +
            "<td>Status</td>" +
            "<td><div class='switch'><label><input id='status' type='checkbox' checked>" +
            "<span class='lever'></span> </label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<tr>" +
            "<td>Notifications</td>" +
            "<td><div class='switch'><label><input id='notification' type='checkbox'>" +
            "<span class='lever'></span> </label></div></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Pay On Account</td>" +
            "<td><div class='switch'><label><input id='pay-on-account' type='checkbox'>" +
            "<span class='lever'></span> </label></div></td>" +
            "</tr>" +
            "</table></div>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<table class='ui very basic table no-line'>" +
            "<tr>" +
            "<td>Allow Tax</td>" +
            "<td><div class='switch'><label><input id='tax' type='checkbox'>" +
            "<span class='lever'></span> </label></div></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Subscribe News Letter</td>" +
            "<td><div class='switch'><label><input id='subscriber' type='checkbox'>" +
            "<span class='lever'></span> </label></div> </td>" +
            "</tr>" +
            "</table>" +
            "</div>" +
            "" +
            "</div></div>";

        document.getElementById("page").appendChild(images);



        let password = document.createElement("div");
        password.className = "l-pad-3 m-pad-2 s-pad-1";
        password.style.paddingTop = "0px";
        password.style.paddingBottom = "40px";

        password.innerHTML = "<div class='widget lift-1 curve l-pad-2  m-pad-2 s-pad-1'>"+
            "<div><h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='lock icon'></i></div> Secure Account</h6></div><hr/>" +
            "<div class='l-width-5 m-width-8'>" +
            "<div id='password-con' class='ui fluid left icon input'><i class='blue lock icon'></i>"+
            "<input id='password' type='password' placeholder='Create password' " +
            " onkeyup=\"resetField('password')\" onchange=\"resetField('password')\"></div><br/>" +
            "<div id='conf-con' class='ui fluid left icon input'><i class='blue unlock icon'></i>"+
            "<input id='conf' type='password' placeholder='Confirm password' " +
            "onkeyup=\"resetField('conf')\" onchange=\"resetField('conf')\" /></div>" +
        "</div>" +
        "</div>";

        document.getElementById("page").appendChild(password);


        $(".ui.dropdown").dropdown();
        $('[data-toggle="datepicker"]').datepicker();
    }


    function DrawNewsletter()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("open envelope", "News Letter Subscribers"));
    }


    function DrawCustomerTemplate()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("user circle", "Customer Template"));
    }

    function DrawCorperates()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("handshake outline", "Corperates"));
    }

    function DrawDepartments()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("building", "Departments"));
    }

    function DrawInventory()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("columns", "Inventory"));
    }

    function DrawCorpProfile()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("address book", "Cooperate Profile"));
    }

    function DrawProducts()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cart", "Products"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#add-product'\" style='margin-right: 5px;'>" +
            "<div class='ui small blue-back button'><i class='plus icon'></i>Add Product</div>" +
            "<a id='total_count_btn' class='ui basic blue-border blue-text left pointing label'>0</a></div>"
            +"<button class='yellow-back small ui button' style='margin-right: 5px;'>" +
            "Related Product</button>" +
            "<button class='green-back small icon ui button'>" +
            "<i class='cube icon'></i> Manage Stock</button><butotn class='ui button'>" +
            "<i class='download icon'></i>Import</butotn>";

        document.getElementById("page").appendChild(buttons);


        let filterCon = document.createElement("div");
        filterCon.className = "l-pad-2 m-pad-1 s-pad-1";
        filterCon.style.paddingBottom = "0px";
        filterCon.style.paddingTop = "0px";

        let filter = document.createElement("div");
        filter.className = "pad-1 curve";

        filter.style.margin = "auto";
        filter.innerHTML = "<div id='filter' class='ui inline dropdown'>" +
            "      <div class='text red' style='font-family: quicksandregular;'>Search List</div>" +
            "      <i class='dropdown icon'></i>" +
            "      <div class='menu'>" +
            "        <div class='header'>Sort criteria</div>" +
            "        <div class='item' data-text='Search List'>Search List</div>" +
            "        <div class='item' data-text='Filter By Category'>Filter By Category</div>" +
            "        <div class='item' data-text='Filter By Pricing Method'>Filter By Pricing Method</div>" +
            "      </div>" +
            "    </div>" +
            "<span id='oder-filter-controls'>" +
            "<div class='ui left icon input'><i class='red search icon'></i> " +
            "<input id='search-txt' type='text' placeholder='Search'> </div> " +
            "<button class='ui button red-back' style='color: white;'>Search</button>" +
            "</span>";

        filterCon.appendChild(filter);
        document.getElementById("page").appendChild(filterCon);



        let tableCon = document.createElement("div");
        tableCon.className = "l-pad-2";
        tableCon.appendChild(DrawTable(["Image","Product Detail","Settings","Sort","Status","Action"],
            {Celled: true, Padded: true, GroupAction: [{Text: "Delete Products",Method:"confGroupPrdDel"}]}));
        document.getElementById("page").appendChild(tableCon);

        $(".ui.dropdown").dropdown();
        $('#filter').dropdown('setting', 'onChange', function(val, text, choice){

            if(val == "search list")
            {
                $("#oder-filter-controls").html("<div class='ui left icon input'><i class='red search icon'></i> " +
                    "<input id='search-txt' type='text' placeholder='Search'> </div> " +
                    "<button class='ui button red-back' style='color: white;'>Search</button>");
            }
            if(val == "filter by category")
            {
                $("#oder-filter-controls").html("<select id='filter-category' class='ui loading dropdown'>" +
                    "</select>");
                $("#default-order").dropdown();

                populateCustomers();
            }
            if(val == "filter by pricing method")
            {
                $("#oder-filter-controls").html("<select id='filter-pricing' class='ui dropdown'>" +
                    "<option >Size Based Price (Dynamic Size)</option>" +
                    "<option >Range Based without multiplication</option>" +
                    "<option>Fixed Quantity And Price</option></select> " +
                    "</select>");
                $("#sort-order-status").dropdown();
            }
        });

        $('#perpage').dropdown('setting', 'onChange', function(val, text, choice)
        {
            populateCustomers();
        });
        populateProduct();
    }

    function DrawCategories()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("bookmark", "Product Categories"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#add-category'\" style='margin-right: 5px;'>" +
            "<div class='ui small blue-back button'><i class='plus icon'></i>New Category</div>" +
            "<a id='total_count_btn' class='ui basic blue-border blue-text left pointing label'>0</a></div>";

        document.getElementById("page").appendChild(buttons);


        document.getElementById("page").appendChild(DrawSearch({Method: populateCategory, Reset: true}));


        let tableCon = document.createElement("div");
        tableCon.className = "l-pad-2";
        tableCon.appendChild(DrawTable(["Category Image","Title","Sort","Status","Action"],
            {GroupAction:[{Text: "Delete", Method:"ConfGroupCatDelete"}]}));
        document.getElementById("page").appendChild(tableCon);

        $(".ui.dropdown").dropdown();

        $('#perpage').dropdown('setting', 'onChange', function() {populateCategory();});

        populateCategory();
    }


    function DrawAddProducts()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cube", "New Product"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.paddingBottom = "0px";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick='saveProduct()' style='margin-right: 5px;'>" +
            "<div id='save-btn-icon' class='ui small blue-back button'><i id='save-btn-i' class='save icon'></i></div>" +
            "<a id='save-btn-txt' class='ui basic blue-border blue-text left pointing label'>Save </a></div>"
            +"<button id='saveback-btn' class='green-back small ui button' style='margin-right: 5px;' onclick='SaveProductAndBack()'>" +
            "Save & Go Back</button>" +
            "<a href='#products'><button class='red-back small icon ui button'>" +
            "<i class='arrow left icon'></i> Back</button></a>";

        document.getElementById("page").appendChild(buttons);




        let errorMsg = document.createElement("div");
        errorMsg.id = "errmsg";
        errorMsg.className = "l-pad-3 m-pad-2 s-pad-1";
        errorMsg.innerHTML = "<div id='errmsg-txt' class='ui error message'></div>";
        errorMsg.style.paddingBottom = "0px";
        errorMsg.style.display = "none";

        document.getElementById("page").appendChild(errorMsg);



        let formCon = document.createElement("div");
        formCon.className = "l-pad-2 s-pad-1";
        formCon.innerHTML = "<div class='w3-row'><div class='w3-col l6 m12 s12'>" +
            "<div class='widget w3-container l-pad-2 s-pad-1 lift-1 curve l-width-xl'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='cube icon'></i></div> Product Detail</h6><hr/>" +
            "<div class='ui form'> " +
            "<table>" +
            "<tr>" +
            "<td>Product Name</td>" +
            "<td class='pad-1'><div id='title-con' class='ui fluid input'><input id='title' type='text' onkeyup=\"resetField('title')\"/> </div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Internal Title</td>" +
            "<td class='pad-1'><div class='ui fluid input'><input id='int-title' type='text' /> </div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Product Category</td>" +
            "<td class='pad-1'><select id='prd-cat' class='ui dropdown'></select> " +
            "<span id='category-loading'></span></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Price Defining Method</td>" +
            "<td class='pad-1'><select id='pricing-method' class='ui fluid dropdown'>" +
            "<option >Size Based Price (Dynamic Size)</option>" +
            "<option >Range Based without multiplication</option>" +
            "<option>Fixed Quantity And Price</option></select> " +
            "<p style='font-size: 12px; color: dimgray;'>1. While changing price method please verify coresponding price management.<br/>" +
            "2. Product Defined Price method cannot be edited once saved for Size Based Price (Dynamic Price)" +
            "<ul style='font-size: 12px; color: dimgray;'>" +
            "<li><b>Fixed Quantity And Price:</b> allows you to define fix price for fixed quantity of products." +
            "e.g for 100 Quantity price = 10.</li>" +
            "<li><b>Range Based Without Multiplication:</b> In this method, different quantity ranges are available" +
            "with different prices. Total price = Quantity * price. e.g for range 1 - 100 price 20 so total price = 20</li>" +
            "<li><b>Size Based Price (Dynamic Size):</b> Customer will get option to enter width and height on the front store" +
            "and the system will calculate the price based on area.</li>" +
            "</ul></p>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>Sheet Calculation</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='sheet-calc' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Status</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='status' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Sort</td>" +
            "<td class='pad-2 align-l'><div class='ui input'><input id='sort' type='number' /></div> </td>" +
            "</tr>" +
            "</table>" +
            "</div></div></div>" +


            "<div class='widget l-pad-2 s-pad-1 lift-1 curve w3-col l6 m12 s12'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='wrench icon'></i></div> Configuration</h6><hr/>" +
            "<div class='ui form'> " +
            "<table>" +
            "<tr>" +
            "<td>Product Type</td>" +
            "<td class='pad-1'><table class='ui basic table'>" +
            "<tr><td><label><i class='arrows alternate vertical icon'></i>" +
            " <input id='browse-design' class='filled-in' type='checkbox' checked/><span>Browse Design</span></label></td></tr>" +
            "<tr><td><label><i class='arrows alternate vertical icon'></i>" +
            "<input id='custom-design' class='filled-in' type='checkbox' checked/><span>Custom Design</span></label></td></tr>" +
            "<tr><td><label><i class='arrows alternate vertical icon'></i>" +
            "<input id='upload-center' class='filled-in' type='checkbox' checked/><span>Upload Center</span></label></td></tr>" +
            "<tr><td><i class='arrows alternate vertical icon'></i><label>" +
            "<input id='quote-prd' class='filled-in' type='checkbox' /><span>Quote Product</span></label></td></tr>" +
            "<tr><td><i class='arrows alternate vertical icon'></i><label>" +
            "<input id='hire-designer' class='filled-in' type='checkbox' /><span>Hire Designer</span></label></td></tr>" +
            "</table><p style='font-size: 12px; color: dimgray;'>Selected product type will be displayed in the product " +
            "info page of web store as" +
            " per sorting. If you do not select any product type, then product description will be displayed</p>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>User Type</td>" +
            "<td class='pad-1'><div class='w3-row'>" +
            "<div class='w3-col l6 m6 s6'><label><input id='retailer-type' type='checkbox'checked /><span>Retailer</span> </label></div>" +
            "<div class='w3-col l6 m6 s6'><label><input id='corp-type' type='checkbox' /><span>All Coportes</span> </label></div>" +
            "</div><br/>Specific Coporates <select id='specific-corp' class='ui dropdown'></select> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Type Of Color Pallet</td>" +
            "<td class='pad-1'><select id='color-pallet' class='ui fluid dropdown'><option>CMYK</option><option>RGB</option></select> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Advanced Color Pallet</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='ad-color-pal' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Enable Stock Managment</td>" +
            "<td class='pad-2 align-l'><div class='w3-row'><div class='w3-col l6 m6 s6'> " +
            "<label><input class='with-gap' id='stck-none' name='stock_mgt' type='radio' checked/><span>None</span></label></div>" +
            "<div class='w3-col l6 m6 s6'>" +
            "<label><input class='with-gap' id='stck-size-only' name='stock_mgt' type='radio'/><span>Only Size</span></label>" +
            "</div></div><label><input class='with-gap' id='stk-size-product' name='stock_mgt' type='radio'/><span>Size With Product Option</span></label> " +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>Display On Home</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='onhome' type='checkbox'/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Allow Free Shipping</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='free-shipping' type='checkbox'/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Promotional Product</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='promotional' type='checkbox'/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Production Days</td>" +
            "<td class='pad-2 align-l'><div class='ui input'><input id='prd-days' type='number' /></div>" +
            "<p style='font-size: 12px; color: dimgray;'>This will be considered when " +
            "calculating estimated delivery date of order. If not set" +
            " then \"Common Production Days\" will be used from store configuration setting. Size and " +
            "additional option and other things can overwrite this value.</p> </td>" +
            "</tr>" +
            "</table>" +
            "</div>" +
            "</div></div>" +


            "<div class='widget l-pad-2 s-pad-1 lift-1 curve w3-row margin-t-2'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='box icon'></i></div> Product Description</h6><hr/>" +
            "<div class='w3-col l7 m8 s12 ui form'> " +
            "<table>" +
            "<tr>" +
            "<td>Small Image</td>" +
            "<td class='pad-1'><button class='ui circular large blue icon button' " +
            "onclick=\"document.getElementById('small-img-file').click()\"><i class='plus icon'></i></button>" +
            "<input id='small-img-file' type='file' style='display: none; width: 0px;'/>" +
            " Select Image <input id='small-img' type='hidden' value=''/> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Large Image</td>" +
            "<td class='pad-1'><button class='ui circular large blue icon button' " +
            "onclick=\"document.getElementById('large-img-file').click()\"><i class='plus icon'></i></button> " +
            "<input id='large-img-file' type='file' style='display: none; width: 0px;'/>" +
            "Select Image <input id='large-img' type='hidden' value=''/> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Short Description</td>" +
            "<td class='pad-1'><div class='field'><textarea id='short-desc' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Long Description</td>" +
            "<td class='pad-1'><div class='field'><textarea id='long-desc' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
            "<td>Upload Center Description</td>" +
            "<td class='pad-1'><div class='field'><textarea id='up-center-desc' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "</tr>" +
            "<tr>" +
            "<td>Browse Design Description</td>" +
            "<td class='pad-1'><div class='field'><textarea id='browse-design-desc' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "</table>" +
            "</div></div><input id='prd_id' type='hidden' value=''>";
        document.getElementById("page").appendChild(formCon);

        $(".ui.dropdown").dropdown();
        InitEditor("#short-desc");
        InitEditor("#long-desc");
        InitEditor("#browse-design-desc");
        InitEditor("#up-center-desc");

        populateCategoryList();
    }



    function AddCategory()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("shopping basket", "New Product Category"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.paddingBottom = "0px";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick='saveCategory()' style='margin-right: 5px;'>" +
            "<div id='save-btn-icon' class='ui small blue-back button'><i id='save-btn-i' class='save icon'></i></div>" +
            "<a id='save-btn-txt' class='ui basic blue-border blue-text left pointing label'>Save </a></div>"
            +"<button id='saveback-btn' class='green-back small ui button' style='margin-right: 5px;' onclick='SaveCategoryAndBack()'>" +
            "Save & Go Back</button>" +
            "<a href='#product-categories'><button class='red-back small icon ui button'>" +
            "<i class='arrow left icon'></i> Back</button></a>";

        document.getElementById("page").appendChild(buttons);




        let errorMsg = document.createElement("div");
        errorMsg.id = "errmsg";
        errorMsg.className = "l-pad-3 m-pad-2 s-pad-1";
        errorMsg.innerHTML = "<div id='errmsg-txt' class='ui error message'></div>";
        errorMsg.style.paddingTop = "0px";
        errorMsg.style.display = "none";

        document.getElementById("page").appendChild(errorMsg);



        let formCon = document.createElement("div");
        formCon.className = "l-pad-2 s-pad-1";
        formCon.innerHTML = "<div class='widget l-pad-2 s-pad-1 lift-1 curve w3-row'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='address book icon'></i></div> Category Detail</h6><hr/>" +
            "<div class='w3-col l7 m8 s12 ui form'> " +
            "<table>" +
                "<tr>" +
                    "<td>Title</td>" +
                    "<td class='pad-1'><div id='title-con' class='ui fluid input'><input id='title' type='text' onkeyup=\"resetField('title')\"/> </div> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>Internal Title</td>" +
                    "<td class='pad-1'><div class='ui fluid input'><input id='int-title' type='text' /> </div> </td>" +
                "</tr>" +
                "<tr>" +
                "<td>Short Description</td>" +
                "<td class='pad-1'><div class='field'><textarea id='short-desc' rows='3'></textarea></div> </td>" +
                "</tr>" +
                "<tr>" +
            "<tr>" +
            "<td>Long Description</td>" +
            "<td class='pad-1'><div class='field'><textarea id='long-desc' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<tr>" +
            "<td>Category Image</td>" +
            "<td class='pad-1'>" +
                "<button id='upload-btn' class='ui circular large blue icon button' " +
                "onclick=\"document.getElementById('image-upload').click()\"><i class='plus icon'></i></button>" +
                "<input id='image-upload' type='file' style='display: none; width: 0px;'/><input id='img-name' type='hidden'> " +
            "</td>" +
            "</tr>" +
            "<tr>" +
                    "<td>Enable Promotional Text</td>" +
                    "<td class='pad-1 align-l'><div class='switch'><label><input id='prom-txt-stat' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>Promotional Text</td>" +
                    "<td><div class='ui input'><input id='prom-txt' type='text' /></div> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>Status</td>" +
                    "<td class='pad-2 align-l'><div class='switch'><label><input id='status' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>Sort</td>" +
                    "<td class='pad-2 align-l'><div class='ui input'><input id='sort' type='number' /></div> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>Display On Home</td>" +
                    "<td class='pad-2 align-l'><div class='switch'><label><input id='onhome' type='checkbox'/><span class='lever'></span></label></div> </td>" +
                "</tr>" +
            "</table>" +
            "</div></div>" +


            "<div class='widget l-pad-2 s-pad-1 lift-1 curve w3-row margin-t-2'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='search icon'></i></div> SEO Content Description</h6><hr/>" +
            "<div class='w3-col l7 m8 s12 ui form'> " +
            "<table>" +
            "<tr>" +
            "<td>Page Title</td>" +
            "<td class='pad-1'><div class='ui fluid input'><input id='seo-page-title' type='text' /> </div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Meta Keywords</td>" +
            "<td class='pad-1'><div class='field'><textarea id='seo-keyword' rows='2'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<tr>" +
            "<td>Meta Description</td>" +
            "<td class='pad-1'><div class='field'><textarea id='meta-desc' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "</table>" +
            "</div></div><input id='cat_id' type='hidden' value=''>";
        document.getElementById("page").appendChild(formCon);

        InitEditor("#short-desc");
        InitEditor("#long-desc");
    }





    function DrawWeightDays()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("weight", "Product Weight / Days"));
    }

    function DrawProductTax()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("certificate", "Product Tax"));
    }

    function DrawProductSize()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("arrows alternate", "Product Size"));
    }

    function DrawProductsPredefined()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("shopping bag", "Predefined Products"));
    }

    function DrawProductsPrice()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("money", "Product Price"));
    }

    function DrawBulkPrice()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("money", "Bulk Price"));
    }

    function DrawProductsPriceOption()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("money", "Product Price Options"));
    }

    function DrawProductsPriceExcel()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("file excel", "Product Price Excel"));
    }

    function DrawProductsTemplate()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tags", "Product Template"));
    }

    function DrawPdfTemplate()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("file pdf", "PDF Block Template"));
    }

    function DrawTemplatePropertiesMaster()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tags", "Templates Properties Master"));
    }

    function DrawTemplateCategories()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tags", "Template Category"));
    }

    function DrawDupTemp()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tag", "Product DUP Template"));
    }

    function DrawContent()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("boxes", "Content"));
    }

    function DrawFAQCategory()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("question", "FAQ Categories"));

        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#add-faq-category'\" style='margin-right: 5px;'>" +
            "<div class='ui small blue-back button'><i class='plus icon'></i>New Category</div>" +
            "<a id='total_count_btn' class='ui basic blue-border blue-text left pointing label'>0</a></div>";

        document.getElementById("page").appendChild(buttons);


        document.getElementById("page").appendChild(DrawSearch({Method: populateFaqCategory, Reset: true}));


        let tableCon = document.createElement("div");
        tableCon.className = "l-pad-2";
        tableCon.appendChild(DrawTable(["Title","Sort","Status","Action"],
            {GroupAction:[{Text: "Delete", Method:"ConfGroupFaqCatDelete"}]}));
        document.getElementById("page").appendChild(tableCon);

        $(".ui.dropdown").dropdown();

        $('#perpage').dropdown('setting', 'onChange', function() {populateFaqCategory();});

        populateFaqCategory();
    }


    function DrawAddFAQCategory()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("question circle", "New FAQ Category"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.paddingBottom = "0px";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick='saveFaqCategory()' style='margin-right: 5px;'>" +
            "<div id='save-btn-icon' class='ui small blue-back button'><i id='save-btn-i' class='save icon'></i></div>" +
            "<a id='save-btn-txt' class='ui basic blue-border blue-text left pointing label'>Save </a></div>"
            +"<button id='saveback-btn' class='green-back small ui button' style='margin-right: 5px;' onclick='SaveFaqCategoryAndBack()'>" +
            "Save & Go Back</button>" +
            "<a href='#faq-categories'><button class='red-back small icon ui button'>" +
            "<i class='arrow left icon'></i> Back</button></a>";

        document.getElementById("page").appendChild(buttons);




        let errorMsg = document.createElement("div");
        errorMsg.id = "errmsg";
        errorMsg.className = "l-pad-3 m-pad-2 s-pad-1";
        errorMsg.innerHTML = "<div id='errmsg-txt' class='ui error message'></div>";
        errorMsg.style.paddingBottom = "0px";
        errorMsg.style.display = "none";

        document.getElementById("page").appendChild(errorMsg);



        let formCon = document.createElement("div");
        formCon.className = "l-pad-2 s-pad-1";
        formCon.innerHTML = "<div class='widget l-pad-2 s-pad-1 lift-1 curve w3-row'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='question icon'></i></div> FAQ Category Detail</h6><hr/>" +
            "<div class='w3-col l7 m8 s12 ui form'> " +
            "<table>" +
            "<tr>" +
            "<td>Title</td>" +
            "<td class='pad-1'><div id='title-con' class='ui fluid input'><input id='title' type='text' onkeyup=\"resetField('title')\"/> </div> </td>" +
            "</tr>" +
            "<td>Status</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='status' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Sort</td>" +
            "<td class='pad-2 align-l'><div class='ui input'><input id='sort' type='number' /></div> </td>" +
            "</tr>" +
            "</table>" +
            "</div></div><input id='faq-cat-id' type='hidden' value=''/>";
        document.getElementById("page").appendChild(formCon);
    }

    function DrawFAQ()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("question", "FAQ"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#add-faq'\" style='margin-right: 5px;'>" +
            "<div class='ui small blue-back button'><i class='plus icon'></i>Add FAQ</div>" +
            "<a id='total_count_btn' class='ui basic blue-border blue-text left pointing label'>0</a></div>";

        document.getElementById("page").appendChild(buttons);


        let filterCon = document.createElement("div");
        filterCon.className = "l-pad-2 m-pad-1 s-pad-1";
        filterCon.style.paddingBottom = "0px";
        filterCon.style.paddingTop = "0px";

        let filter = document.createElement("div");
        filter.className = "pad-1 curve";

        filter.style.margin = "auto";
        filter.innerHTML = "<div id='filter' class='ui inline dropdown'>" +
            "      <div class='text red' style='font-family: quicksandregular;'>Search List</div>" +
            "      <i class='dropdown icon'></i>" +
            "      <div class='menu'>" +
            "        <div class='header'>Sort criteria</div>" +
            "        <div class='item' data-text='Search List'>Search List</div>" +
            "        <div class='item' data-text='Filter By Category'>Filter By Category</div>" +
            "      </div>" +
            "    </div>" +
            "<span id='oder-filter-controls'>" +
            "<div class='ui left icon input'><i class='red search icon'></i> " +
            "<input id='search-txt' type='text' placeholder='Search'> </div> " +
            "<button class='ui button red-back' style='color: white;'>Search</button>" +
            "</span>";

        filterCon.appendChild(filter);
        document.getElementById("page").appendChild(filterCon);



        let tableCon = document.createElement("div");
        tableCon.className = "l-pad-2";
        tableCon.appendChild(DrawTable(["Question","FAQ Category","Sort","Status","Action"],
            {GroupAction: [{Text: "Delete",Method:"confGroupFaqDel"}]}));
        document.getElementById("page").appendChild(tableCon);

        $(".ui.dropdown").dropdown();
        $('#filter').dropdown('setting', 'onChange', function(val, text, choice){

            if(val == "search list")
            {
                $("#oder-filter-controls").html("<div class='ui left icon input'><i class='red search icon'></i> " +
                    "<input id='search-txt' type='text' placeholder='Search'> </div> " +
                    "<button class='ui button red-back' style='color: white;'>Search</button>");
            }
            if(val == "filter by category")
            {
                $("#oder-filter-controls").html("<select id='faq-cat' class='ui dropdown'>" +
                    "<option value=''>Select Category</option></select>");
                $("#faq-cat").dropdown();
                $('#faq-cat').dropdown('setting', 'onChange', function() {populateFaq();});
                populateFaqCategoryList();
            }
        });

        $('#perpage').dropdown('setting', 'onChange', function(val, text, choice) {
            populateFaq();
        });
        populateFaq();
    }


    function DrawAddFaq()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("question circle", "Add FAQ"));


        let buttons = document.createElement("div");
        buttons.className = "l-pad-2 w3-container";
        buttons.style.paddingBottom = "0px";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick='saveFaq()' style='margin-right: 5px;'>" +
            "<div id='save-btn-icon' class='ui small blue-back button'><i id='save-btn-i' class='save icon'></i></div>" +
            "<a id='save-btn-txt' class='ui basic blue-border blue-text left pointing label'>Save </a></div>"
            +"<button id='saveback-btn' class='green-back small ui button' style='margin-right: 5px;' onclick='SaveFaqAndBack()'>" +
            "Save & Go Back</button>" +
            "<a href='#faq'><button class='red-back small icon ui button'>" +
            "<i class='arrow left icon'></i> Back</button></a>";

        document.getElementById("page").appendChild(buttons);


        let errorMsg = document.createElement("div");
        errorMsg.id = "errmsg";
        errorMsg.className = "l-pad-3 m-pad-2 s-pad-1";
        errorMsg.innerHTML = "<div id='errmsg-txt' class='ui error message'></div>";
        errorMsg.style.paddingBottom = "0px";
        errorMsg.style.display = "none";

        document.getElementById("page").appendChild(errorMsg);



        let formCon = document.createElement("div");
        formCon.className = "l-pad-2 s-pad-1";
        formCon.innerHTML = "<div class='widget l-pad-2 s-pad-1 lift-1 curve w3-row'>" +
            "<h6 style='font-family: quicksandbold;'>" +
            "<div class='icon-block blue-back'><i class='question icon'></i></div> FAQ Detail</h6><hr/>" +
            "<div class='w3-col l7 m8 s12 ui form'> " +
            "<table>" +
            "<tr>" +
            "<td>FAQ Category</td>" +
            "<td class='pad-1'><select id='faq-cat' class='ui dropdown'>" +
            "<option value=''>Select Category</option></select> <span id='faq-category-loading'></span></td>" +
            "</tr>" +
            "<tr>" +
            "<td>Question</td>" +
            "<td class='pad-1'><div class='ui fluid input'><input id='question' type='text' /></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<tr>" +
            "<td>Answer</td>" +
            "<td class='pad-1'><div class='field'><textarea id='answer' rows='3'></textarea></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Status</td>" +
            "<td class='pad-2 align-l'><div class='switch'><label><input id='status' type='checkbox' checked/><span class='lever'></span></label></div> </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Sort</td>" +
            "<td class='pad-2 align-l'><div class='ui input'><input id='sort' type='number' /></div> </td>" +
            "</tr>" +
            "<tr>" +
            "</table>" +
            "</div></div></div><input id='faq-id' type='hidden' value=''>";
        document.getElementById("page").appendChild(formCon);

        $(".ui.dropdown").dropdown();

        InitEditor("#answer");

        populateFaqCategoryList();
    }

    function DrawTestimonials()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("bullhorn", "Testimonials"));
    }

    function DrawBanners()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("clone", "Banners"));
    }

    function DrawEmailNote()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("at", "Email Notification"));
    }

    function DrawSMSNote()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("mobile", "SMS Notification"));
    }

    function DrawAutoReminder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("alarm", "Auto Reminder"));
    }

    function DrawBreadCrumb()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("angle right", "Breadcrumb"));
    }

    function DrawSEOKeywords()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("search", "SEO Key words"));
    }

    function DrawSiteMap()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("sitemap", "Site Map"));
    }

    function DrawMetaTag()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("search", "Meta"));
    }

    function DrawRobots()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("robot", "Robot"));
    }

    function DrawSEOURL()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("terminal", "SEO URL"));
    }

    function DrawProductPageLayout()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("th", "Product Page Layout"));
    }

    function DrawLanguagePreference()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("language", "Language Preference"));
    }

    function DrawHeaderFooterLink()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("align justify", "Header / Footer Links"));
    }

    function DrawSideBar()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("align left", "Side Bar"));
    }

    function DrawPromotionalContent()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("bullhorn", "Promotional Content"));
    }

    function DrawTheme()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("file code", "Website Theme"));
    }

    function DrawPrinters()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("print", "Printers"));
    }

    function DrawSalesAgents()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("group", "Sales Agent"));
    }

    function DrawBranch()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("building", "Branch"));
    }

    function DrawStoreSettings()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cogs", "Store Settings"));
    }

    function DrawLanguage()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("language", "Language"));
    }

    function DrawStorage()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("database", "Storage"));
    }

    function DrawFormFields()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("edit", "Form Field"));
    }

    function DrawCurrency()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("money", "Currency"));
    }

    function DrawPayMethod()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cc mastercard", "Payment Method"));
    }

    function DrawShippingMethod()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("shipping fast", "Shipping Method"));
    }

    function DrawTaxVatSettings()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("money", "Tax / Vat Settings"));
    }

    function DrawCountryStates()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("map", "Country States"));
    }

    function DrawExternService()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cog", "External Services"));
    }

    function DrawImpSchemeMngt()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cogs", "Imposition Schema Managment"));
    }

    function DrawImposeJob()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("briefcase", "Impose Job"));
    }

    function DrawSheetSizeMgt()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("arrows alternate", "Sheet Size Management"));
    }

    function DrawImpoSizeMgt()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("check", "Imposition Marks Management"));
    }

    function DrawProductSchemaSettings()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("cog", "Product Schema Settings"));
    }

    function DrawStudioSettings()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("tint", "Studio Settings"));
    }

    function DrawImages()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("file image", "Images"));
    }

    function DrawImageCategory()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("picture", "Image Category"));
    }

    function DrawStudioFonts()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("font", "Fonts Studio"));
    }


    function DrawSalesReport()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("pie chart", "Sales Report"));
    }

    function DrawProductReport()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("line chart", "Product Report"));
    }

    function DrawCustomersReport()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("area chart", "Customer Report"));
    }

    function DrawPartnersReport()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("handshake", "Partners Report"));
    }


    function DrawLogReport()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("file", "Report Log"));
    }

    function DrawAdmin()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("unlock", "Admin"));
    }


    function DrawWorkFlowAdmin()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("arrow right", "Admin Work Flow"));
    }


    function DrawAdminGroupRoles()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("group", "Admin Group Roles"));
    }


    /* Drawing main Template
    function DrawTMP()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        document.getElementById("page").appendChild(DrawHeader("zip file", "Order Archive"));
    }
     */




































    function insertframe()
    {
        page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        $('body').css("background-color", "rgb(242,247,251)");

        if(document.getElementById("menu") == null)
        {
            let menu = document.createElement("div");
            menu.id = "menu";
            menu.className = "w3-col s-hide";
            $(menu).css("background-color", "rgb(38,53,68)");
            $(menu).css("overflow-y", "auto");
            $(menu).css("height", "100%");
            $(menu).css("width", "18.2%");

            let page = document.createElement("div");
            page.id = "page";
            page.className = "w3-col";
            $(page).css("border-left", "1px solid silver");
            $(page).css("height", "100%");
            $(page).css("width", "81.7%");


            document.body.appendChild(menu);
            document.body.appendChild(page);


            let MenuPlaceHolders = "<div class='l-pad-2 m-pad-1'><div class='ui placeholder'><div class='image header'>" +
                "<div class='line'></div><div class='line'></div></div></div></div><hr style='margin: 0px; padding: 0px;'/>" +
                "<div class='l-pad-2'><div class='ui placeholder'><div class='header'>" +
                "<div class='line'></div><div class='line'></div></div></div><br/>" +
                "<div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "<div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "<div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "<div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "</div></div>";

            let PagePlaceHolders = "<div class='l-pad-2 m-pad-1'><div class='ui placeholder' style='background-color: whitesmoke;'>" +
                "<div class='image header'>" +
                "<div class='line'></div><div class='line'></div></div></div></div><hr style='margin: 0px; padding: 0px;'/>" +
                "<div class='l-pad-2'><div class='ui fluid placeholder'><div class='header'>" +
                "<div class='line'></div><div class='line'></div></div></div><br/>" +
                "<div class='ui fluid placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "<div class='ui fluid placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "<div class='ui fluid placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "<div class='ui fluid placeholder'><div class='header'><div class='line'></div><div class='line'></div> </div> </div> " +
                "</div></div>";

            menu.innerHTML = MenuPlaceHolders;
            //page.innerHTML = PagePlaceHolders;


            getMenu(function (data) {
                populateMenu(data);
            });
        }
    }

    
    