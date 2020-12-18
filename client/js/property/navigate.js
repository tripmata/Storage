
    let host = "http://localhost/hotels/";
    let cdn = "http://localhost/hotels/cdn/";

    var ThemeColor = "";
    var ThemeIcon = "";


    $(document).ready(function () {

        window.onhashchange = locationChanged;

        //window.onscroll = pageScrolled;

        window.onresize = reSize;

        FirstRun();
    });


    function locationChanged() {
        FirstRun();
    }

    function reSize()
    {
        let page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        $(".f-height").height(page_height);

        let x = $(document).innerHeight();
        let hh = 0;
        if(getElement("page-header") != null)
        {
            hh += $('#page-header').innerHeight();
        }
        if(getElement("page-control-menu") != null)
        {
            hh += $("#page-control-menu").innerHeight();
        }
        if(getElement("header-menu") != null)
        {
            hh += $("#header-menu").innerHeight();
        }

        let r = x - (hh  + 2);
        $("#inventory-item-table-con").height(r);
        $("#inventory-timeline-con").height(r);


    }

    function getArg(num) {
        let hashes = location.hash.split("/");
        if (num == null) {
            if (hashes.length > 1) {
                return hashes[1];
            }
        }
        else {
            if (hashes.length > (1 + num)) {
                return hashes[(1 + num)];
            }
        }
    }

    function pageScrolled() {

    }

    function FirstRun() {
        let hash = location.hash;

        let page = hash.split("/")[0];

        if (page === "") {
                location.hash = "#property";
            DrawProperty();
        }

        switch (page)
        {
            case "#property":
                DrawProperty();
                break;

            case "#reservation":
                drawReservations();
                break;

            case "#new-room-category":
                DrawNewRoomCategory();
                break;

            case "#messaging":
                DrawMessaging();
                break;

            case "#rooms":
                DrawRoom();
                break;

            case "#new-room":
                DrawNewRoom();
                break;

            case "#staff":
                DrawStaff();
                break;

            case "#new-admin-user":
                DrawNewAdminUsers();
                break;

            case "#add-role":
                DrawNewGroupRole();
                break;

            case "#discount":
                DrawDiscounts();
                break;

            case "#new-discount":
                DrawNewDiscount();
                break;

            case "#coupon":
                DrawCoupon();
                break;

            case "#new-coupon":
                DrawNewCoupon();
                break;

            case "#reports":
                DrawReport();
                break;

            case "#settings":
                DrawPropertySettings();
                break;

            case "#sign-out":
                DoSignOut();
                break;

            case "#room-availability":
                DrawAvailablitCalendar();
                break;

            case "#room-rate":
                DrawRatesCalendar()
                break;

            case "#reservation-detail":
                DrawReservation();
                break;

            case "#customer":
                DrawCustomerProfile();
                break;

            default:
                break;
        }
    }

    function DrawProperty()
    {
        $('body').css("background-color", "rgb(250,250,250)");

        $("#min-menue-con").html("");
        $("#property-page").html(
            "<div class='l-width-7' style='margin: auto;'>" +
            "<div class='pad-2' style=''>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l8 m8 s12'>" +
            "<div class='l-width-xl pad-t'>" +
            "<h2 id='property-name' style='font-family: varela_roundregular; font-weight: normal; color: dimgray;'>Property Name</h2>" +
            "<div id='property-page-1' class='pad-3 lift-1 widget curve' style=''>" +
            "" +
            "</div>" +
            "<div id='property-page-2' class='pad-3 lift-1 widget curve' style='margin-top: 10px;'>" +
            "" +
            "</div>" +
            "</div> " +
            "</div> " +
            "<div class='w3-col l4 m4 s12'>" +
            "<div class=''>" +
            "<h1 style='font-family: varela_roundregular; font-weight: normal; color: dimgray;'>" +
            "<div class='switch'><label><input id='property-status' type='checkbox' disabled onchange='switchPropertyState(this)'/><span class='lever'></span></label>" +
            "<span style='font-size: 16px;'>Open / close property</span></div> " +
            "</h1>" +
            "<div class='pad-3 lift-1 widget curve' style='margin-top: 10px;'>" +
            "<div id='property-side-1' class=''>" +
            "" +
            "</div>" +
            "</div>" +
            "<div class='pad-3 lift-1 widget curve' style='margin-top: 10px;'>" +
            "<div id='property-side-2' class=''>" +
            "" +
            "</div>" +
            "</div>" +
            "</div> " +
            "</div> " +
            "<div class='w3-col l4 m4 s12'></div> " +
            "</div> " +
            "</div>" +
            "</div>");

        populateProperty();
    }

    function drawReservations()
    {
        let arg = getArg();

        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: 0;'>" +
            "       <div class='header blue item' style='border-radius: 0; background-color: rgb(0,100,140);opacity: 0.5; color: white;'>" +
            "           <i class='calendar alternate outline icon'></i> Reservations" +
            "       </div>" +
            "       <a href='#reservation' class='item "+(arg == null ? "active" : "")+"'>" +
            "           Reservations" +
            "       </a>" +
            "       <a href='#reservation/customers' class='item "+(arg == "customers" ? "active" : "")+"'>" +
            "           Customers" +
            "       </a>" +
            "       <a href='#reservation/lodging' class='item "+(arg == "lodging" ? "active" : "")+"'>" +
            "           In house guests" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");

        if(arg == null)
        {
            DrawReservations();
        }
        else if(arg == "lodging")
        {
            DrawLoging();
        }
        else if(arg == "customers")
        {
            DrawCustomers();
        }
    }

    function DrawMessaging()
    {
        $('body').css("background-color", "white");

        let arg = getArg();

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='open envelope icon'></i> Messaging" +
            "       </div>" +
            "       <a href='#messaging' class='item "+(arg == null ? "active" : "")+"'>" +
            "           E-mail" +
            "       </a>" +
            "       <a href='#messaging/sms' class='item "+(arg == "sms" ? "active" : "")+"'>" +
            "           SMS" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");

        if(arg == null)
        {
            DrawSendMessages();
        }
        else
        {
            DrawSendSMS();
        }
    }

    function DrawRoom()
    {
        $('body').css("background-color", "white");

        let arg = getArg();

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "          <i class='bed icon'></i> Rooms" +
            "       </div>" +
            "       <a href='#rooms' class='item "+(arg == null ? "active" : "")+"'>" +
            "           Categories" +
            "       </a>" +
            "       <a href='#rooms/number' class='item "+(arg == "number" ? "active" : "")+"'>" +
            "           Number/ name" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'>" +
            "</div>" +
            "<div id='page'></div>" +
            "</div>");


        if(arg == null)
        {
            DrawRoomCategories();
            $("#menu").html(

                "<div class='l-pad-2 s-pad-1'>" +
                "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
                "<img src='../images/roomservice.png' style='width: 40px; margin-top: 0px;'> Room category" +
                "</h3>" +
                "</div>" +

                "<div class='pad-2'>" +
                "<a href='#new-room-category'><button class='ui blue fluid button'>Add new category</button></a>" +
                "</div> ");
        }
        else
        {
            DrawRooms();
            $("#menu").html(

                "<div class='l-pad-2 s-pad-1'>" +
                "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
                "<img src='../images/bed_1.png' style='width: 40px; margin-top: 0px;'> Rooms" +
                "</h3>" +
                "</div>" +

                "<div class='pad-2'>" +
                "<a href='#new-room'><button class='ui blue fluid button''>New room</button></a>" +
                "</div> ");
        }
    }

    function DrawStaff()
    {
        let arg = getArg();

        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='users icon'></i> Staff" +
            "       </div>" +
            "       <a href='#staff' class='item  "+(arg == null ? "active" : "")+"'>" +
            "           All" +
            "       </a>" +
            "       <a href='#staff/roles' class='item  "+(arg == "roles" ? "active" : "")+"'>" +
            "           Group role" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");

        if(arg == null)
        {
            DrawAdminUsers();
        }
        else if(arg == "roles")
        {
            DrawAdminGroupRoles();
        }
    }

    function DrawReport()
    {
        let arg = getArg();

        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item'style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='pie chart icon'></i> Reports" +
            "       </div>" +
            "       <a href='#reports' class='item "+(arg == null ? "active" : "")+"'>" +
            "           Transactions" +
            "       </a>" +
            "       <a href='#reports/finance' class='item "+(arg == "finance" ? "active" : "")+"'>" +
            "           Financial report" +
            "       </a>" +
            "       <a href='#reports/customers' class='item "+(arg == "customers" ? "active" : "")+"'>" +
            "           Customers" +
            "       </a>" +
            "       <a href='#reports/reviews' class='item "+(arg == "reviews" ? "active" : "")+"'>" +
            "           Reviews" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");
    }

    function DrawPropertySettings()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html("");
        $("#property-page").html(
            "<div style='margin-top: 20px;'>" +
                "<div class='l-width-7 w3-row' style='margin: auto;'>" +
                    "<h1 class='ui header' style='font-family: varela_roundregular; font-weight: normal; color: dimgray;'>" +
                        "<img src='../images/cog.png' style='width: 50px; margin-top: -15px;'> " +
                        "Settings" +
                    "</h1>" +



                    "<div class='w3-col l6 m6 s12'>" +
                    "<div class='l-width-xl'>" +

                    "<div style='margin-top: 60px;'>" +
                    "<h3 class='sleak' style='float: right; cursor: pointer;'>" +
                    "<i class='pencil icon' style='color: rgb(0,100,140);'></i> <small>Edit</small></h3>" +
                    "<h3 style='font-family: varela_roundregular; font-weight: normal;'>Property's detail</h3>" +
                    "</div><hr style='background-color: transparent; color: transparent;'/>" +

                    "<div class='ui fluid small labeled disabled input'>" +
                    "<label class='ui basic label' style='font-weight: normal; font-size: 14px;'>Property Name</label>" +
                    "<input id='property-name' class='profile-input profile-edit-con' type='text' placeholder='Property name'/> " +
                    "</div>" +

                    "<div class='ui fluid large form' style='margin-top: 10px;'>" +
                    "<br/>" +
                    "<label style='color: dimgray; font-size: 14px;'>Property description</label>" +
                    "<textarea id='property-description' rows='3' class='profile-edit-con' " +
                    "style='font-family: Lato; font-size: 14px; color: lightgray; font-family: Lato;' " +
                    "placeholder='Property description' disabled></textarea> " +
                    "</div>" +

                    "<div style='margin-top: 10px;'>" +
                    "<select id='property-type' class='ui dropdown disabled large fluid profile-input profile-edit-con'>" +
                    "<option value=''>Select type</option>" +
                    "<option value='hotel'>Hotel</option>" +
                    "<option value='b&b'>B&B</option>" +
                    "<option value='condor'>Condor</option>" +
                    "<option value='apartment'>Apartment</option>" +
                    "<option value='studio'>Studio</option>" +
                    "<option value='boutique'>Boutique</option>" +
                    "</select> " +
                    "</div>" +

                    "<div class='ui fluid labeled disabled input' style='margin-top: 10px;'>" +
                    "<label class='ui basic label' style='font-weight: normal; font-size: 14px;'>Phone 1</label>" +
                    "<input id='phone1' class='ui dropdown large fluid profile-input profile-edit-con' placeholder='Phone 1'>" +
                    "</div>" +

                    "<div class='ui fluid labeled disabled input' style='margin-top: 10px;'>" +
                    "<label class='ui basic label' style='font-weight: normal; font-size: 14px;'>Phone 2</label>" +
                    "<input id='phone2' class='ui dropdown large fluid profile-input profile-edit-con' placeholder='Phone 2'>" +
                    "</div>" +

                    "<div class='ui fluid labeled disabled input' style='margin-top: 10px;'>" +
                    "<label class='ui basic label' style='font-weight: normal; font-size: 14px;'>EMail 1</label>" +
                    "<input id='email1' class='ui dropdown large fluid profile-input profile-edit-con' placeholder='Email 1'>" +
                    "</div>" +

                    "<div class='ui fluid labeled disabled input' style='margin-top: 10px;'>" +
                    "<label class='ui basic label' style='font-weight: normal; font-size: 14px;'>Email 2</label>" +
                    "<input id='email2' class='ui dropdown large fluid profile-input profile-edit-con' placeholder='Email 2'>" +
                    "</div>" +


                    "<div style='margin-top: 60px;'>" +
                    "<h4 style='font-family: varela_roundregular; font-weight: normal;'>Address info</h4>" +
                    "</div><hr style='background-color: transparent; color: transparent;'/>" +

                    "<div style='margin-top: 10px;'>" +
                    "<select id='property-city' class='ui dropdown disabled large fluid profile-input profile-edit-con'>" +
                    "<option value=''>Select city</option>" +
                    "</select> " +
                    "</div>" +

                    "<div style='margin-top: 10px;'>" +
                    "<select id='property-state' class='ui dropdown disabled large fluid profile-input profile-edit-con'>" +
                    "<option value=''>Select state</option>" +
                    "</select> " +
                    "</div>" +

                    "<div class='ui fluid large form' style='margin-top: 10px;'>" +
                    "<textarea id='address' rows='3' class='profile-input profile-edit-con' " +
                    "style='font-family: Lato;' placeholder='Property address' disabled></textarea> " +
                    "</div>" +

                    "</div>" +
                    "</div>" +

                    "<div class='w3-col l6 m6 s12'>" +
                    "<div class='l-width-8' style='margin: auto;'>" +
                    "<br/><br/><br/><br/>" +

                    "<div>" +
                    "<h4 style='font-family: varela_roundregular; font-weight: normal;'><i class='image file icon'></i> Property's gallery</h4>" +
                    "</div><hr style='background-color: transparent; color: transparent;'/>" +

                    "<div class='w3-row' id='property-gallery'></div>" +
                    "</div>" +
                    "</div>" +



                "</div> " +
            "</div>");

        $(".ui.dropdown").dropdown();

        populatePropertySettings();
    }

    function DrawDiscounts()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='percent icon'></i> &nbsp;Coupon & discounts" +
            "       </div>" +
            "       <a href='#coupon' class='item'>" +
            "           Coupon" +
            "       </a>" +
            "       <a href='#discount' class='item active'>" +
            "           Discount" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");

            DrawDiscount();

            $("#menu").html(
                "<div class='l-pad-2 s-pad-1'>" +
                "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
                "<img src='../images/percent.png' style='width: 40px; margin-top: 0px;'> Discount" +
                "</h3>" +
                "</div>" +

                "<div class='pad-2'>" +
                "<a href='#discount'><button class='ui blue fluid button'>Discount list</button></a><br/> " +
                "<a href='#new-discount'><button class='ui blue fluid button'>New Discount</button></a>" +
                "</div> ");
    }
