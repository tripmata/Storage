    var page_height;
    var page_width;


    function DrawLogin(e)
    {
        $('body').css("background-color", "whitesmoke");

        let frame = document.createElement("div");
        frame.id = "frame";
        frame.className = "w3-row f-height";
        $(frame).height(page_height);

        frame.innerHTML = "<div class='w3-col l4 m1 s12'>.</div>" +
            "<div class='w3-col l4 m10 s12'><div class='w3-row'><div class='w3-col l1 m1 s12'>.</div>" +
            "<div class='w3-col l10 m10 s12'><div class='l-pad-2 l-margin-t-9 w3-card-2'" +
            " style='background-color: white; border-radius: 4px;'><h1 class='ui header' id='b_name'" +
            " style='font-family: comfortaaregular; margin-top: 10px;'>"
            +"<i class='shield "+e.Color+" icon'></i> "+e.BusinessName+"</h1>" +
            "<form onsubmit='return adminLogin()'>" +
            "<div class='ui fluid input' style='margin-top: 40px;'>" +
            "<input id='email' type='text' placeholder='Email'/> </div><br/> " +
            "<div class='ui fluid input'><input id='password' type='password' placeholder='Password'/> </div><br/> " +
            "<h6 style='float: right; cursor: pointer;'><i class='unlock "+e.Color+" icon'></i> Lost password?</h6>" +
            "<button id='sub_btn' class='ui "+e.Color+" button'>Login</button> <br/> </div> </form>" +
            "</div></div></div></div>";

        $('body').css("background-image","url(http://localhost/pms/System/cdn/themes/default/assets/images/back.png)")
        $('body').html(frame);

        let color = document.getElementById('sub_btn').style.color;

        $('#b_name').css("color", "dimgray");
    }

    function DrawDashboard()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" icon tachometer alternate'></i> Dashboard</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);

        let row = document.createElement("div");
        row.className = "w3-row l-pad-2";

        row.innerHTML = "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-2'>" +
            "<h1 class='ui header' style='font-family: comfortaaregular;'>" +
            "<i class='"+ThemeColor+" users icon'></i><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "<div class='sub header'>Customers</div></div></h1></div></div>" +


            "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-2'>" +
            "<h1 class='ui header' style='font-family: comfortaaregular';>" +
            "<i class='"+ThemeColor+" cart icon'></i><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "<div class='sub header'>Orders</div></div></h1></div></div>" +


            "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-2'>" +
            "<h1 class='ui header' style='font-family: comfortaaregular';>" +
            "<i class='"+ThemeColor+" checked list icon'></i><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "<div class='sub header'>Quotation</div></div></h1></div></div>" +


            "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-2'>" +
            "<h1 class='ui header' style='font-family: comfortaaregular';>" +
            "<i class='"+ThemeColor+" tag icon'></i><div class='content'>" +
            "<div class='ui placeholder'><div class='line'></div> </div>" +
            "<div class='sub header'>Product</div></div></h1></div></div>";



        document.getElementById("page").appendChild(row);
    }


    function DrawOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" shopping basket alternate icon'></i> Order List</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);


        let buttons = document.createElement("div");
        buttons.className = "l-pad-1 w3-container";
        buttons.style.textAlign = "right";

        buttons.innerHTML = "<button class='ui "+ThemeColor+" compact button right float'>Job Board</button>"
            +"<button class='ui "+ThemeColor+" compact button float right'>Notes / Messages</button>" +
            "<button class='ui "+ThemeColor+" compact button float right'>Payment Request</button>";

        document.getElementById("page").appendChild(buttons);
    }


    function DrawNewOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" cart plus icon'></i> Create New Order</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }


    function DrawExportOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" cart arrow down icon'></i> Export Order</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }



    function DrawOrderStatus()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" tags icon'></i> Order Status</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }


    function DrawCoupon()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" ticket icon'></i> Coupon</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }


    function DrawRewardPoint()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" gift  icon'></i> Reward Point</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }


    function DrawUnpaidOrder()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" money icon'></i> Unpaid Order</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }


    function DrawOrderArchive()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" file archive icon'></i> Order Archive</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }



    function DrawQuote()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" shopping basket alternate icon'></i> Quote</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }



    function DrawPrintQuote()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" shopping basket alternate icon'></i> Order List</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }



    function DrawQuoteStatus()
    {
        insertframe();

        $("#page").html("");
        $('body').css("background-image","");

        let pageTop = document.createElement("div");
        pageTop.className = "l-pad-2";
        pageTop.innerHTML = "<h5 style='font-weight: normal; font-family: comfortaaregular; color: dimgray;'>" +
            "<i class='"+ThemeColor+" shopping basket alternate icon'></i> Order List</h5>";
        pageTop.style.backgroundColor = "white";
        pageTop.style.borderBottom = "1px solid silver";

        document.getElementById("page").appendChild(pageTop);
    }







    function insertframe()
    {
        page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        $('body').css("background-color", "whitesmoke");

        if(document.getElementById("frame") == null)
        {
            let frame = document.createElement("div");
            frame.id = "frame";
            frame.className = "w3-row";
            $(frame).height(page_height);

            let menu = document.createElement("div");
            menu.id = "menu";
            menu.className = "w3-col l2 m3 s12 s-hide";
            $(menu).css("background-color", "white");
            $(menu).css("overflow-y", "auto");
            $(menu).css("height", "100%");

            let page = document.createElement("div");
            page.id = "page";
            page.className = "w3-col l10 m9 s12";
            $(page).css("border-left", "1px solid silver");
            $(page).css("overflow-y", "auto");
            $(page).css("height", "100%");


            frame.appendChild(menu);
            frame.appendChild(page);

            document.body.appendChild(frame);


            $('body').html(frame);


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

    
    
    function populateMenu(e) {

        if(e.Status == "SUCCESS")
        {
            let menu = e.Menu;

            var menues = "";

            $("#menu").html("");

            for(var i = 0; i < menu.length; i++)
            {
                if(menu[i].Active == true)
                {
                    let angle = "right";
                    if(menu[i].SubMenu.length > 0)
                    {
                        angle = "down";
                    }

                    let men = document.createElement("div");
                    men.id = "cover_shell"+menu[i].Name;
                    men.className = "menu-shell";

                    if(menu[i].Hash == "")
                    {
                        men.innerHTML = "<div class='menu-item outer-menu' onclick=\"openShell('"+i+"')\"><i class='"+
                            e.Color+" "+menu[i].Icon+" icon'></i> "+menu[i].Name
                            +"<i class='angle "+angle+" icon' style='color: silver;'></i> </div><div id='shell_"+
                            i+"' class='shell-cont' style='display: none;'></div>";
                    }
                    else
                    {
                        men.innerHTML = "<a href='"+menu[i].Hash+"' style='text-decoration: none;'>" +
                            "<div class='menu-item outer-menu' onclick=\"openShell('"+i+"')\"><i class='"+
                            e.Color+" "+menu[i].Icon+" icon'></i> "+menu[i].Name
                            +"<i class='angle "+angle+" icon' style='color: silver;'></i> </div><div id='shell_"+
                            i+"' class='shell-cont' style='display: none;'></div></a>";
                    }

                    document.getElementById("menu").appendChild(men);

                    for(var j = 0; j < menu[i].SubMenu.length; j++)
                    {
                        addSubMenue(menu[i].SubMenu[j], i);
                    }
                }
            }
        }
    }



    function addSubMenue(submenu, shell) {

        if(submenu.Active == true)
        {
            let angle = "";
            if(submenu.SubMenu.length > 0)
            {
                angle = "angle down";
            }

            let men = document.createElement("div");
            men.id = "outer_shell"+submenu.Name;
            men.className = "menu-shell";

            if(submenu.Hash == "")
            {
                men.innerHTML = "<div class='menu-item inner-menu' style='padding-left: 40px;'>"+submenu.Name+
                    "<i class='"+angle+" icon' style='color: silver;'></i> </div><div id='shell_"+
                    submenu.Name+"' class='inner_shell'></div>";
            }
            else
            {
                men.innerHTML = "<a href='"+submenu.Hash+"' style='text-decoration: none;'>" +
                    "<div class='menu-item inner-menu' style='padding-left: 40px;'>"+submenu.Name+
                    "<i class='"+angle+" icon' style='color: silver;'></i> </div><div id='shell_"+
                    submenu.Name+"' class='inner_shell'></div></a>";
            }


            document.getElementById("shell_"+shell).appendChild(men);

            for(var k = 0; k < submenu.SubMenu.length; k++)
            {
                addSubMenue(submenu.SubMenu[k], submenu.Name);
            }
        }
    }

    
    function openShell(e) {
        $(".shell-cont").slideUp(600);

        if($("#shell_"+e).css("display") == "none")
        {
            $("#shell_"+e).slideDown(600);
        }
        else
        {
            $("#shell_"+e).slideUp(600);
        }
    }