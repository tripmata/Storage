
    function DrawNewRoomCategory()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "          <i class='bed icon'></i> Rooms" +
            "       </div>" +
            "       <a href='#rooms' class='item'>" +
            "           Categories" +
            "       </a>" +
            "       <a href='#rooms/number' class='item'>" +
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

        $("#menu").html(

            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/roomservice.png' style='width: 40px; margin-top: 0px;'> Room category" +
            "</h3>" +
            "</div>" +

            "<div class='pad-2'>" +
            "<a href='#rooms'><button class='ui blue fluid button'>Category List</button></a><br/> " +
            "</div> ");


        _page({add:"", clear:true});

        _page({
            add: "<br/> " +
                "<div class='l-width-8 widget wix-textbox curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(230,230,230); margin-bottom: 50px;'>" +


                "<div class='' style='margin: auto;'>" +

                "<input id='roomcatid' type='hidden' value=''/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l3 m6 s12'>" +
                "<div class='pad-1'>" +
                "<div class='w3-card' style=\"height: 200px; " +
                "background-image: url('../images/imageplaceholder.png'); " +
                "background-repeat: no-repeat; background-position: center; position: relative;\">" +
                "<img id='room-img-1' style='width: 100%;'/>" +
                "<button id='room-btn-1' class='ui circular compact sleak blue-back button' style='position:absolute; bottom:-15px; right:0px;'" +
                " onclick=\"getElement('room-file-1').click()\">" +
                "<i class='plus icon'></i>Add Image</button>" +
                "<input id='room-file-1' type='file' style='display: none;' onchange='processRoomImage(this, 1)'/>" +
                "<input id='room-file-name-1' type='hidden' value=''/>" +
                "</div> " +
                "</div>" +
                "</div>" +
                "<div class='w3-col l3 m6 s12'>" +
                "<div class='pad-1'>" +
                "<div class='w3-card' style=\"height: 200px; " +
                "background-image: url('../images/imageplaceholder.png'); " +
                "background-repeat: no-repeat; background-position: center; position: relative;\">" +
                "<img id='room-img-2' style='width: 100%;'/>" +
                "<button id='room-btn-2' class='ui circular compact sleak blue-back button' style='position:absolute; bottom:-15px; right:0px;'" +
                " onclick=\"getElement('room-file-2').click()\">" +
                "<i class='plus icon'></i>Add Image</button>" +
                "<input id='room-file-2' type='file' style='display: none;' onchange='processRoomImage(this, 2)'/> " +
                "<input id='room-file-name-2' type='hidden' value=''/>" +
                "</div> " +
                "</div>" +
                "</div>" +
                "<div class='w3-col l3 m6 s12'>" +
                "<div class='pad-1'>" +
                "<div class='w3-card' style=\"height: 200px; " +
                "background-image: url('../images/imageplaceholder.png'); " +
                "background-repeat: no-repeat; background-position: center; position: relative;\">" +
                "<img id='room-img-3' style='width: 100%;'/>" +
                "<button  id='room-btn-3' class='ui circular compact sleak blue-back button' style='position:absolute; bottom:-15px; right:0px;'" +
                " onclick=\"getElement('room-file-3').click()\">" +
                "<i class='plus icon'></i>Add Image</button>" +
                "<input id='room-file-3' type='file' style='display: none;' onchange='processRoomImage(this, 3)'/> " +
                "<input id='room-file-name-3' type='hidden' value=''/>" +
                "</div> " +
                "</div>" +
                "</div>" +
                "<div class='w3-col l3 m6 s12'>" +
                "<div class='pad-1'>" +
                "<div class='w3-card' style=\"height: 200px; " +
                "background-image: url('../images/imageplaceholder.png'); " +
                "background-repeat: no-repeat; background-position: center; position: relative;\">" +
                "<img id='room-img-4' style='width: 100%;'/>" +
                "<button id='room-btn-4' class='ui circular compact sleak blue-back button' style='position:absolute; bottom:-15px; right:0px;'" +
                " onclick=\"getElement('room-file-4').click()\">" +
                "<i class='plus icon'></i>Add Image</button>" +
                "<input id='room-file-4' type='file' style='display: none;' onchange='processRoomImage(this, 4)'/> " +
                "<input id='room-file-name-4' type='hidden' value=''/>" +
                "</div> " +
                "</div>" +
                "</div>" +
                "</div>" +


                "</div>" +



                "<div class='l-width-8' style='margin: auto;'>" +

                "<br/><br/><br/>" +

                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='room-name' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +

                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Price</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
                "<input id='room-price' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Compare Price at</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
                "<input id='room-price-compare' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +



                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Occupancy</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui sleak label'>Base</label>" +
                "<input id='base-occupancy' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
                "<label class='ui label' style='border-radius: 0px;'>Max</label>" +
                "<input id='max-occupancy' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/>" +
                "</div></div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Price per extra person</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
                "<input id='extra-person-price' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +


                "<div>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Special services</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='special-services' multiple class='ui wix-select fluid search dropdown'></select></div>" +
                "</div><br/>" +



                "<div>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Smoking</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='smoking-policy' class='ui wix-select fluid dropdown'>" +
                "<option value='false'>Non-smoking</option>" +
                "<option value='true'>Smoking</option>" +
                "</select></div>" +
                "</div><br/>" +



                "<div>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Children</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='children-policy' class='ui wix-select fluid dropdown'>" +
                "<option value='true'>Allowed</option>" +
                "<option value='false'>Not - Allowed</option>" +
                "</select></div>" +
                "</div><br/>" +



                "<div>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Pets</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='pet-policy' class='ui wix-select fluid dropdown'>" +
                "<option value='false'>Not - Allowed</option>" +
                "<option value='true'>Allowed</option>" +
                "</select></div>" +
                "</div><br/>" +



                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Room Description</label></div></div>" +
                "<div class='w3-col l8 m3 s12 ui form'><div class='field'><textarea id='room-description' class='wix-textbox' rows='3'></textarea></div></div>" +
                "</div><br/>" +



                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Room Features</label></div></div>" +
                "<div id='features-list-con' class='w3-col l8 m3 s12'>" +
                "<div id='features-list-0' class='ui fluid input'>" +
                "<input id='features-list-0-txt' class='wix-textbox' type='text' onkeyup='checkFeatureList()'/>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Promotional Text</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='gift green icon'></i><input id='room-promo-text' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Sort</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='room-cat-sort' class='wix-textbox' type='number' value='0'/></div></div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
                "<div class='w3-col l8 m3 s12'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='show-promo-text' type='checkbox'/><span>Show promotional text</span></label></div>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
                "<div class='w3-col l8 m3 s12'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='show-on-site' type='checkbox' checked/><span>Show on website</span></label></div>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
                "<div class='w3-col l8 m3 s12'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='reservable' type='checkbox' checked/><span>Enable reservation</span></label></div>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='align-r'>" +
                "<button id='room-cat-save-btn' class='ui blue sleak compact button' onclick='saveRoomCategory()'>Save Category</button>" +
                "</div><br/>" +


                "<div>" +
                "</div></div>", class: 'l-margin-t-4'
        });

        list({ con: getElement("staff-list"), job: 'list staff', all: true });
        list({ con: getElement("role-list"), job: 'list role', all: true });

        $(".ui.dropdown").dropdown();

        let arg = getArg();

        if (arg != null) {
            loadEditRoomCatData(arg);
        }
    }

    function DrawRoomCategories()
    {
        //_page({ add: pageTop({ icon: "shower", text: "Rooms Category" }), clear: true });

        _page({add:"", clear:true});

        let buttons = document.createElement("div");
        buttons.className = "pad-2 align-r";
        buttons.style.paddingBottom = "0px";
        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#new-room-category'\">" +
            "<div class='ui small blue-back sleak button'><i class='plus icon'></i>New category</div>" +
            "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
       // _page({ add: buttons });

        _page({
            add: DrawTable(["Room", "Name", "Price", "Rooms", "On site", "sort", "status", "Action"],
                {
                    Padded: true, GroupAction: [{ Text: "DIVIDER" },
                        { Text: "Delete", Method: "ConfirmGroupRoomcategoryDelete" }]
                }).outerHTML, class: "l-pad-2"
        });

        $(".ui.dropdown").dropdown();

        populateRoomcategory();
    }

    function DrawRooms()
    {
        _page({ add: "", clear: true });

        let buttons = document.createElement("div");
        buttons.className = "pad-2 align-r";
        buttons.style.paddingBottom = "0px";
        buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
            " onclick=\"location.hash='#new-room'\">" +
            "<div class='ui small blue-back sleak button'><i class='plus icon'></i>Add Rooms</div>" +
            "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
        //_page({ add: buttons });

        _page({
            add: DrawTable(["Number", "Category", "Occupied", "status", "Action"],
                {
                    Celled: true, Padded: true, GroupAction: [{ Text: "DIVIDER" },
                        { Text: "Delete Rooms", Method: "ConfirmGroupRoomDelete" }]
                }).outerHTML, class: "l-pad-2"
        });

        $(".ui.dropdown").dropdown();

        populateRoom();
    }

    function DrawNewRoom()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "          <i class='bed icon'></i> Rooms" +
            "       </div>" +
            "       <a href='#rooms' class='item'>" +
            "           Categories" +
            "       </a>" +
            "       <a href='#rooms/number' class='item'>" +
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


            $("#menu").html(

                "<div class='l-pad-2 s-pad-1'>" +
                "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
                "<img src='../images/bed_1.png' style='width: 40px; margin-top: 0px;'> Rooms" +
                "</h3>" +
                "</div>" +

                "<div class='pad-2'>" +
                "<a href='#rooms/number'><button class='ui blue fluid button'>Room list</button></a><br/> " +
                "</div> ");

        _page({ add: "", clear: true });

        _page({
            add: "<br/>" +
                "<div class='l-width-8 widget wix-textbox curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(230,230,230); margin-bottom: 50px;'>" +

                "<input id='roomid' type='hidden' value=''/>" +


                "<div class='l-width-8' style='margin: auto;'>" +

                "<br/><br/><br/>" +

                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Room Number</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='room-nun' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +


                "<div>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Room Category</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='room-category-list' class='ui wix-select fluid dropdown'><option value=''>Select Category</option></select></div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Room Features</label></div></div>" +
                "<div id='features-list-con' class='w3-col l8 m3 s12'>" +
                "<div id='features-list-0' class='ui fluid input'>" +
                "<input id='features-list-0-txt' class='wix-textbox' type='text' onkeyup='checkFeatureList()'/>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
                "<div class='w3-col l8 m3 s12'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><div class='switch'><label><input id='room-status' type='checkbox' checked/><span class='lever'></span></label>Status</div></div>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='align-r'>" +
                "<button id='room-save-btn' class='ui blue sleak compact button' onclick='saveRoom()'>Save Room</button>" +
                "</div><br/>" +


                "<div>" +
                "</div>", class: 'l-margin-t-4'
        });

        list({ con: getElement("room-category-list"), job: 'list room category', all: true });

        $(".ui.dropdown").dropdown();

        let arg = getArg();

        if (arg != null) {
            loadEditRoomData(arg);
        }
    }

    function DrawCoupon()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='percent icon'></i> &nbsp;Coupon & discounts" +
            "       </div>" +
            "       <a href='#coupon' class='item active'>" +
            "           Coupon" +
            "       </a>" +
            "       <a href='#discount' class='item'>" +
            "           Discount" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");


        $("#menu").html(
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/discount.png' style='width: 50px; margin-top: 0px;'> Coupons" +
            "</h3>" +
            "</div>" +

            "<div class='pad-2'>" +
            "<a href='#coupon'><button class='ui blue fluid button'>Coupon List</button></a><br/> " +
            "<a href='#new-coupon'><button class='ui blue fluid button'>Create new coupon</button></a>" +
            "</div> ");

        _page({ add: "", clear: true });

        _page({
            add: "<div class='ui pointing menu'>" +
                "  <a id='all-coupon-tab' class='active coupon-tab item' onclick='switchCouponTabs(this)'>" +
                "    All<label id='all-coupon-label' class='ui label sleak blue-back'>0</label>" +
                "  </a>" +
                "  <a id='used-coupon-tab' class='item coupon-tab' onclick='switchCouponTabs(this)'>" +
                "    Used<label id='used-coupon-label' class='ui label sleak blue-back'>0</label>" +
                "  </a>" +
                "  <a id='unused-coupon-tab' class='item coupon-tab' onclick='switchCouponTabs(this)'>" +
                "    Unused<label id='unused-coupon-label' class='ui label sleak blue-back'>0</label>" +
                "  </a>" +
                "  <a id='expired-coupon-tab' class='item coupon-tab' onclick='switchCouponTabs(this)'>" +
                "    Expired<label id='expired-coupon-label' class='ui label sleak blue-back'>0</label>" +
                "  </a>" +
                "  <div class='right menu'>" +
                "    <div class='item'>" +
                "      <div class='ui transparent icon input'>" +
                "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populateCoupon();}'>" +
                "        <i class='search link icon'></i>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>", class: "l-pad-2 s-pad-1"
        });

        _page({ add: DrawTable(["Name", "Code", "Value", "Coverage", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupCouponDelete",Text:"Delete coupons"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
        $(".ui.dropdown").dropdown();
        populateCoupon();
    }

    function DrawNewCoupon()
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
            "       <a href='#discount' class='item'>" +
            "           Discount" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");

            $("#menu").html(
                "<div class='l-pad-2 s-pad-1'>" +
                "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
                "<img src='../images/discount.png' style='width: 50px; margin-top: 0px;'> Coupons" +
                "</h3>" +
                "</div>" +

                "<div class='pad-2'>" +
                "<a href='#coupon'><button class='ui blue fluid button'>Coupon List</button></a><br/> " +
                "</div> ");


        _page({ add: "", clear: true });

        let page = "<br/>" +
            "<div class='l-width-8 widget wix-textbox curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(230,230,230); margin-bottom: 50px;'>" +
            "<div class='l-width-8' style='margin: auto;'>" +

            "<input id='couponid' type='hidden' value=''/>" +

            "<br/><br/><br/>" +

            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>Coverage</h6></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>What's covered</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<input id='coupon-main-select' type='hidden' value='Lodging'/> " +
            "<!--" +
            "<select  class='ui fluid  dropdown wix-select' multiple onchange='coverageChanged(this)'>" +
            "<option>Lodging</option>" +
            "<option>Restaurant</option>" +
            "<option>Bar</option>" +
            "<option>Bakery</option>" +
            "<option>Laundry</option>" +
            "<option>Pool</option>" +
            "<option>Extra services</option>" +
            "</select>" +
            "-->" +
            "</div>" +
            "</div>" +


            "<div id='lodging-select-con' class='w3-row' style='margin-top: 4px; display: block;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Lodging</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='lodging-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='kitchen-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Kitchen</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='kitchen-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='bar-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Bar</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='bar-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='bakery-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Bakery</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='bakery-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='laundry-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Laundry</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='laundry-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='pool-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Pool</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='pool-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='services-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Extra services</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='services-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div><br/><br/>" +




            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>General</h6></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='ticket circle green icon'></i><input id='coupon-name' class='wix-textbox' type='text'/></div></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Code</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
            "<input id='coupon-code' class='wix-textbox' type='text'/>" +
            "<button id='coupon-gen-btn' class='ui blue icon button' onclick='generateCoupon()'>" +
            "<i class='hand pointer icon'></i>" +
            "</button>" +
            "</div></div>" +
            "</div><br/>" +



            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>Value</h6></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label id='per-cash-label' style='color: gray; font-family: nunitoregular;'>Amount</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i id='per-cash-icon' class='money green icon'></i><input id='coupon-amount' class='wix-textbox' type='text'/></div></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><label><input id='bypercentage' class='filled-in' type='checkbox' onchange='percentageSwitch()'/><span>By Percentage</span></label></div>" +
            "</div><br/><br/>" +




            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>Usage</h6></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Number of use</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='green ticket icon'></i><input id='use-count' class='wix-textbox' type='number' value='1'/></div></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Expiriy date</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='calendar green icon'></i><input id='coupon-expiry-date' data-toggle='datepicker' class='wix-textbox' type=''/></div></div>" +
            "</div><br/>" +



            "<br/><br/>" +

            "<div class='align-r'>" +
            "<button id='save-coupon-btn' class='ui blue sleak button' onclick='saveCoupon()'>Create coupon</button>" +
            "</div><br/>" +

            "<div>" +
            "</div>";

        _page({ class: 'l-margin-t-4', add: page });

        $(".ui.dropdown").dropdown();

        $('[data-toggle="datepicker"]').datepicker();

        let arg = getArg();
        if(arg != null)
        {
            loadEditCoupon(arg);
        }
        coverageChanged(getElement("coupon-main-select"));
    }

    function DrawCouponDetails()
    {
        _page({ add: pageTop({ icon: "ticket", text: "Coupon details" }), clear: true });
    }

    function DrawDiscount()
    {
        _page({clear: true });

        _page({
            add: div({add:
                    "<div class='w3-col l6 m6 s12'>" +
                    DrawSearch({method:""}).outerHTML +
                    "</div>" +
                    "<div class='w3-col l6 m6 s12 align-r'>" +
                    "</div>",
                class: "w3-row l-pad-2 s-pad-1"
            })
        });

        _page({ add: DrawTable(["Name", "Value", "Coverage", "Application method", "Status", "Action"],
                {GroupAction:[{Method:"ConfirmGroupDiscountDelete", Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });

        $(".ui.dropdown").dropdown();
        populateDiscount();
    }

    function DrawNewDiscount()
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
            "       <a href='#discount' class='item'>" +
            "           Discount" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");


        $("#menu").html(
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/percent.png' style='width: 40px; margin-top: 0px;'> Discount" +
            "</h3>" +
            "</div>" +

            "<div class='pad-2'>" +
            "<a href='#discount'><button class='ui blue fluid button'>Discount list</button></a><br/> " +
            "</div> ");

        _page({clear: true });


        let days = "";
        for(let i = 0; i < 31; i++)
        {
            days += "<option value='"+(i + 1)+"'>"+(i + 1)+"</option>";
        }


        let page = "<br/>" +
            "<div class='l-width-8 widget wix-textbox curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(230,230,230); margin-bottom: 50px;'>" +
            "<div class='l-width-8' style='margin: auto;'>" +

            "<input id='discountid' type='hidden' value=''/>" +
            "<input id='discountstatus' type='hidden' value='true'/>" +

            "<br/><br/><br/>" +


            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>Coverage</h6></div>" +
            "</div><br/>" +



            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><!--<label style='color: gray; font-family: nunitoregular;'>What's covered</label>--></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<input id='discount-main-select' type='hidden' value='Lodging'/>" +
            "<!--" +
            "<select  class='ui fluid  dropdown wix-select' onchange='discountCoverageChanged(this)'>" +
            "<option>Lodging</option>" +
            "<option>Restaurant</option>" +
            "<option>Bar</option>" +
            "<option>Bakery</option>" +
            "<option>Laundry</option>" +
            "<option>Pool</option>" +
            "<option>Extra services</option>" +
            "</select>" +
            "-->" +
            "</div>" +
            "</div>" +


            "<div id='lodging-select-con' class='w3-row' style='margin-top: 4px;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Covered rooms</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='lodging-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='kitchen-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Kitchen</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='kitchen-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='bar-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Bar</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='bar-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='bakery-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Bakery</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='bakery-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='laundry-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Laundry</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='laundry-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='pool-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Pool</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='pool-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div>" +


            "<div id='services-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
            "<label style='color: gray; font-family: nunitoregular;'>Extra services</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='services-select' class='ui fluid dropdown wix-select' multiple></select>" +
            "</div>" +
            "</div><br/>" +



            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l6 m6 s6'>" +
            "<div class=''>" +
            "<label><input id='manual-discount' class='with-gap' type='radio' name='auto-discount' checked onchange='manualDiscountSelected(this)'/><span>Apply Manually</span></label>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l6 m6 s6'>" +
            "<div class=''>" +
            "<label><input id='auto-discount' class='with-gap' type='radio' name='auto-discount' onchange='autoDiscountSelected(this)'/><span>Apply Automatically</span></label>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div><br/>" +




            "<div id='auto-discount-list' class='w3-row' style='margin-bottom: 50px; display: none;'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Apply discount if</label></div></div>" +
            "<div class='w3-col l8 m3 s12'>" +
            "<select id='auto-discount-sel' class='ui fluid  dropdown wix-select' onchange='discountMeasured(this)'>" +
            "<option value='is-staff'>Customer is a staff</option>" +
            "<option value='former-booking-count'>Formerly booked up to</option>" +
            "<option value='online-order'>Reservation is made online</option>" +
            "<option value='offline-order'>Reservation is made at the Front-desk</option>" +
            "<option value='periodic'>Period is</option>" +
            "<option value='time-of-day'>Time of checking in is</option>" +
            "<option value='days-count'>Number of days booked is</option>" +
            "<option value='room-count'>Number of rooms booked is</option>"+
            "<option value='total-amount'>Total amount is</option>" +
            "</select>" +

            "<div style='margin-top: 7px;'>" +


            "<div class='option-value-con' id='time-period-con' style='display: none;'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l9 m10 s12'>" +
            "<div class='ui fluid action labeled input'>" +
            "<label class='ui sleak label'>From</label>" +
            "<select id='start-hour' class='ui wix-select compact selection dropdown'>" +
            "<option>01</option>" +
            "<option>02</option>" +
            "<option>03</option>" +
            "<option>04</option>" +
            "<option>05</option>" +
            "<option>06</option>" +
            "<option>07</option>" +
            "<option>08</option>" +
            "<option>09</option>" +
            "<option>10</option>" +
            "<option>11</option>" +
            "<option>12</option>" +
            "</select>" +
            "<label class='ui label' style='border-radius: 0px;'>:</label>" +
            "<input id='start-min' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
            "<select id='start-gmt' class='ui wix-select compact selection dropdown'>" +
            "<option>am</option>" +
            "<option>pm</option>" +
            "</select>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l9 m10 s12'>" +
            "<div class='ui fluid action labeled input' style='margin-top: 3px;'>" +
            "<label class='ui sleak label'>to</label>" +
            "<select id='stop-hour' class='ui wix-select compact selection dropdown'>" +
            "<option>01</option>" +
            "<option>02</option>" +
            "<option>03</option>" +
            "<option>04</option>" +
            "<option>05</option>" +
            "<option>06</option>" +
            "<option>07</option>" +
            "<option>08</option>" +
            "<option>09</option>" +
            "<option>10</option>" +
            "<option>11</option>" +
            "<option>12</option>" +
            "</select>" +
            "<label class='ui label' style='border-radius: 0px;'>:</label>" +
            "<input id='stop-min' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
            "<select id='stop-gmt' class='ui wix-select compact selection dropdown'>" +
            "<option>am</option>" +
            "<option>pm</option>" +
            "</select>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +



            "<div class='option-value-con' id='date-period-con' style='display: none;'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l12 m12 s12'>" +
            "<div class='ui fluid action labeled input'>" +
            "<label class='ui sleak label'>From</label>" +
            "<select id='start-day' class='ui wix-select compact selection dropdown'>" + days + "</select>" +
            "<select id='start-month' class='ui wix-select compact selection dropdown'>" +
            "<option>January</option>" +
            "<option>February</option>" +
            "<option>March</option>" +
            "<option>April</option>" +
            "<option>May</option>" +
            "<option>June</option>" +
            "<option>July</option>" +
            "<option>August</option>" +
            "<option>September</option>" +
            "<option>October</option>" +
            "<option>November</option>" +
            "<option>December</option>" +
            "</select>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l12 m12 s12'>" +
            "<div class='ui fluid action labeled input' style='margin-top: 3px;'>" +
            "<label class='ui sleak label'>To</label>" +
            "<select id='stop-day' class='ui wix-select compact selection dropdown'>" + days + "</select>" +
            "<select id='stop-month' class='ui wix-select compact selection dropdown'>" +
            "<option>January</option>" +
            "<option>February</option>" +
            "<option>March</option>" +
            "<option>April</option>" +
            "<option>May</option>" +
            "<option>June</option>" +
            "<option>July</option>" +
            "<option>August</option>" +
            "<option>September</option>" +
            "<option>October</option>" +
            "<option>November</option>" +
            "<option>December</option>" +
            "</select>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +




            "<div class='option-value-con' id='amount-con' style='display: none;'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<div class='l-width-xl'>" +
            "<div class='ui fluid left labeled input'>" +
            "<label class='ui sleak label'>From&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: Arial;'>"+
            $("#currency-symbol").val()+"</span></label>" +
            "<input id='from-amount' class='wix-textbox' type='number' value='0.00' min='0'/>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<div class='ui fluid left labeled input'>" +
            "<label class='ui sleak label'>To&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: Arial;'>"+
            $("#currency-symbol").val()+"</span></label>" +
            "<input id='to-amount' class='wix-textbox' type='number' value='0.00' min='0'/>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +



            "<div class='option-value-con' id='quantity-con' style='display: none;'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<div class='l-width-xl'>" +
            "<div class='ui fluid left labeled input'>" +
            "<label class='ui sleak label'>From</label>" +
            "<input id='from-quantity' class='wix-textbox' type='number' value='0' min='0'/>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l6 m6 s12'>" +
            "<div class='ui fluid left labeled input'>" +
            "<label class='ui sleak label'>To</label>" +
            "<input id='to-quantity' class='wix-textbox' type='number' value='0' min='0'/>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +





            "</div>" +

            "</div>" +
            "</div>"+




            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>General</h6></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='money circle green icon'></i><input id='discount-name' class='wix-textbox' type='text'/></div></div>" +
            "</div><br/>" +



            "<div class='w3-row margin-t-1'>" +
            "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
            "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>Value</h6></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label id='per-cash-label' style='color: gray; font-family: nunitoregular;'>Amount</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i id='per-cash-icon' class='money green icon'></i><input id='discount-amount' class='wix-textbox' type='text'/></div></div>" +
            "</div><br/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><label><input id='bypercentage' class='filled-in' type='checkbox' onchange='discountPercentageSwitch()'/><span>By Percentage</span></label></div>" +
            "</div>" +



            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><label><input id='ontotal' class='filled-in' type='checkbox' /><span>On Total</span></label></div>" +
            "</div><br/><br/>" +

            "<br/><br/>" +

            "<div class='align-r'>" +
            "<button id='save-discount-btn' class='ui blue sleak button' onclick='saveDiscount()'>Save discount</button>" +
            "</div><br/>" +

            "<div>" +
            "</div>";

        _page({ class: 'l-margin-t-4', add: page });

        $(".ui.dropdown").dropdown();

        list({con:getElement("lodging-select"),job:'list room category',all:true});

        $('[data-toggle="datepicker"]').datepicker();

        let arg = getArg();
        if(arg != null)
        {
            loadEditDiscount(arg);
        }
    }

    function DrawDiscountDetail()
    {
        _page({ add: pageTop({ icon: "money", text: "Discount details" }), clear: true });
    }

    function DrawAvailablitCalendar()
    {
        let arg = getArg();

        if(arg == null)
        {
            location.hash = "#rooms";
            ShowModal("Invalid room selected");
        }
        else
        {
            $("#min-menue-con").html(
                "<div>" +
                "   <div class='ui menu' style='border-radius: 0; box-shadow: none;'>" +
                "       <div class='header item'>" +
                "          <i class='bed blue icon'></i> Rooms" +
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
                "<div id='menu' class='' style='border-right: 1px solid lightgray;'>" +
                "<div class='ui fluid placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "<div class='ui placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "</div>" +
                "<div id='page' class='pad-2'>" +
                "<div class='ui placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "<div class='ui placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "<div>" +
                "</div>" +
                "</div>" +
                "</div>");

            $("#property-page").removeClass("ui loading form");

            postJson("hms-admin/worker", function(data, status){
                _page({clear:true});
                $("#menu").html("");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {

                        $("#menu").html(
                            "<div class='pad-t'>" +
                            "<h3 class='blue-text' style='font-weight: normal; font-family: varela_roundregular;'>" +
                            "<img src='../images/calendar.png' style='width: 30px;'/> Scheduled availability" +
                            "</h3></div><hr/> " +
                            "<div id='saved-availability-con'></div>");

                        let content = "";

                        if(d.data.length > 0)
                        {
                            for(let i = 0; i < d.data.length; i++)
                            {
                                let dv = document.createElement("div");
                                dv.className = "pad-t";
                                dv.id = d.data[i].Id+"-con";
                                dv.style.position = "relative";
                                dv.innerHTML =
                                    "<button id='"+d.data[i].Id+"-btn' class='ui mini circular red icon button' style='position: absolute; bottom: 40px; right: 10px;'" +
                                    "onclick=\"removeAvailability('"+d.data[i].Id+"')\">" +
                                    "<i class='times icon'></i>" +
                                    "</button> " +
                                    "<h6 style='font-family: Lato;'><small>"+d.data[i].Startdate.WeekDay+", "+
                                    d.data[i].Startdate.MonthName+"/"+d.data[i].Startdate.Day+"/"+d.data[i].Startdate.Year+"&nbsp;&nbsp;&nbsp;-" +
                                    "&nbsp;&nbsp;&nbsp;" +
                                    d.data[i].Stopdate.WeekDay+", "+
                                    d.data[i].Stopdate.MonthName+"/"+d.data[i].Stopdate.Day+"/"+d.data[i].Stopdate.Year+"</small></h6>" +
                                    "<h6 style='font-family: varela_roundregular;'>Available: "+d.data[i].Available+" rooms</h6><hr/>";

                                document.getElementById("saved-availability-con").appendChild(dv);
                            }
                        }
                        else
                        {
                            $("#saved-availability-con").html(
                                "<div class='align-c pad-2'>" +
                                "<h1><i class='calendar outline alternate icon' style='color: whitesmoke'></i></h1>" +
                                "<h6 style='font-family: varela_roundregular; color: silver; font-weight: normal;'>" +
                                "Availability schedule is empty</h6>" +
                                "</div>");
                        }

                        _page({add:"<div class='calendar-con' style='margin-left: 20px;'>" +
                                "<h1 style='font-family: varela_roundregular; font-weight: normal; color: dimgray;'>" +
                                "<i class='bed icon'></i> Room Availability</h1><br/>" +
                                "<h2 style='font-family: varela_roundregular; color: dimgray; font-weight: normal; margin: 0;'>" +
                                "<span style='color: silver;'>Room categoty</span>: "+d.room.Name+"</h2>" +
                                "<h5 style='font-family: varela_roundregular; color: dimgray; font-weight: normal; margin-top: 10px;'>" +
                                "<span style='color: silver;'>Standard room price: </span>: <span style='font-family: Lato;'>&&#8358;</span>"+
                                numFormat(Number(d.room.Baseprice).toFixed(2)) +
                                "</h5><br/>" +
                                "<div class='ui input'><input id='availability-calendar' type=''/></div>" +
                                "<div class='ui input'><input id='availability-calendar-end' type='hidden'/></div><br/>" +
                                "" +
                                "<br/>" +
                                "<input id='category-input' type='hidden' value='"+d.room.Id+"'/> " +
                                "<div class='ui large left labeled input'>" +
                                "<label class='ui sleak label'>Available rooms</label>" +
                                "<input id='availability-value' class='wix-textbox' type='number' value='0'/>" +
                                "</div>" +
                                "<br/><br/>" +
                                "<button id='availability-btn' class='ui blue large sleak button' onclick='saveAvailability()'><i class='save icon'></i> Save</button> " +
                                "</div>"});

                        var picker = new Lightpick({
                            field: document.getElementById('availability-calendar'),
                            singleDate: false,
                            inline:true,
                            numberOfColumns:3,
                            numberOfMonths:3,
                            minDate:new Date(),
                            onSelect: function(start, end){
                                var str = '';
                                str += start ? start.format('MMMM DD YYYY') + ' to ' : '';
                                str += end ? end.format('MMMM DD YYYY') : '...';
                                document.getElementById('availability-calendar-end').value = str;
                            }
                        });
                    }
                    else
                    {
                        location.hash = "#rooms";
                        ShowModal(d.messge);
                    }
                }
                else
                {
                    location.hash = "#rooms";
                    ShowModal("Connection error. Check your connection and try again");
                }
            },{category:arg,job:"getcategoryavailability"});
        }
    }

    function DrawRatesCalendar()
    {
        let arg = getArg();

        if(arg == null)
        {
            location.hash = "#rooms";
            ShowModal("Invalid room selected");
        }
        else
        {
            $("#min-menue-con").html(
                "<div>" +
                "   <div class='ui menu' style='border-radius: 0; box-shadow: none;'>" +
                "       <div class='header item'>" +
                "          <i class='bed blue icon'></i> Rooms" +
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
                "<div id='menu' class='' style='border-right: 1px solid lightgray;'>" +
                "<div class='ui fluid placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "<div class='ui placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "</div>" +
                "<div id='page' class='pad-2'>" +
                "<div class='ui placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "<div class='ui placeholder'>" +
                "<div class='line'></div> " +
                "<div class='line'></div> " +
                "</div>" +
                "<div>" +
                "</div>" +
                "</div>" +
                "</div>");

            $("#property-page").removeClass("ui loading form");

            postJson("hms-admin/worker", function(data, status){
                _page({clear:true});
                $("#menu").html("");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {

                        $("#menu").html(
                            "<div class='pad-t'>" +
                            "<h3 class='blue-text' style='font-weight: normal; font-family: varela_roundregular;'>" +
                            "<img src='../images/calendar.png' style='width: 30px;'/> Scheduled rates" +
                            "</h3></div><hr/> " +
                            "<div id='saved-rates-con'></div>");

                        let content = "";

                        if(d.data.length > 0)
                        {
                            for(let i = 0; i < d.data.length; i++)
                            {
                                let dv = document.createElement("div");
                                dv.className = "pad-t";
                                dv.id = d.data[i].Id+"-con";
                                dv.style.position = "relative";
                                dv.innerHTML =
                                    "<button id='"+d.data[i].Id+"-btn' class='ui mini circular red icon button' style='position: absolute; bottom: 40px; right: 10px;'" +
                                    "onclick=\"removeRate('"+d.data[i].Id+"')\">" +
                                    "<i class='times icon'></i>" +
                                    "</button> " +
                                    "<h6 style='font-family: Lato;'><small>"+d.data[i].Startdate.WeekDay+", "+
                                    d.data[i].Startdate.MonthName+"/"+d.data[i].Startdate.Day+"/"+d.data[i].Startdate.Year+"&nbsp;&nbsp;&nbsp;-" +
                                    "&nbsp;&nbsp;&nbsp;" +
                                    d.data[i].Stopdate.WeekDay+", "+
                                    d.data[i].Stopdate.MonthName+"/"+d.data[i].Stopdate.Day+"/"+d.data[i].Stopdate.Year+"</small></h6>" +
                                    "<h6 style='font-family: varela_roundregular;'>Rate: " +
                                    "<span style='font-family: Lato;'>&#8358</span>"+numFormat(Number(d.data[i].Rate).toFixed(2))+"</h6><hr/>";

                                document.getElementById("saved-rates-con").appendChild(dv);
                            }
                        }
                        else
                        {
                            $("#saved-rates-con").html(
                                "<div class='align-c pad-2'>" +
                                "<h1><i class='calendar outline alternate icon' style='color: whitesmoke'></i></h1>" +
                                "<h6 style='font-family: varela_roundregular; color: silver; font-weight: normal;'>" +
                                "No scheduled rates</h6>" +
                                "</div>");
                        }

                        _page({add:"<div class='calendar-con' style='margin-left: 20px;'>" +
                                "<h1 style='font-family: varela_roundregular; font-weight: normal; color: dimgray;'>" +
                                "<i class='usd icon'></i> Room Rates</h1><br/>" +
                                "<h2 style='font-family: varela_roundregular; color: dimgray; font-weight: normal; margin: 0;'>" +
                                "<span style='color: silver;'>Room categoty</span>: "+d.room.Name+"</h2>" +
                                "<h5 style='font-family: varela_roundregular; color: dimgray; font-weight: normal; margin-top: 10px;'>" +
                                "<span style='color: silver;'>Standard room price: </span>: <span style='font-family: Lato;'>&#8358;</span>"+
                                numFormat(Number(d.room.Baseprice).toFixed(2)) +
                                "</h5><br/>" +
                                "<div class='ui input'><input id='availability-calendar' type=''/></div>" +
                                "<div class='ui input'><input id='availability-calendar-end' type='hidden'/></div><br/>" +
                                "" +
                                "<br/>" +
                                "<input id='category-input' type='hidden' value='"+d.room.Id+"'/> " +
                                "<div class='ui large left labeled input'>" +
                                "<label class='ui sleak label'>Room rate:&nbsp;&nbsp;&nbsp; <span style='font-family: Lato;'>&#8358</span></label>" +
                                "<input id='availability-value' class='wix-textbox' type='' value='0.0'/>" +
                                "</div>" +
                                "<br/><br/>" +
                                "<button id='availability-btn' class='ui blue large sleak button' onclick='saveRate()'><i class='save icon'></i> Save</button> " +
                                "</div>"});

                        var picker = new Lightpick({
                            field: document.getElementById('availability-calendar'),
                            singleDate: false,
                            inline:true,
                            numberOfColumns:3,
                            numberOfMonths:3,
                            minDate:new Date(),
                            onSelect: function(start, end){
                                var str = '';
                                str += start ? start.format('MMMM DD YYYY') + ' to ' : '';
                                str += end ? end.format('MMMM DD YYYY') : '...';
                                document.getElementById('availability-calendar-end').value = str;
                            }
                        });
                    }
                    else
                    {
                        location.hash = "#rooms";
                        ShowModal(d.messge);
                    }
                }
                else
                {
                    location.hash = "#rooms";
                    ShowModal("Connection error. Check your connection and try again");
                }
            },{category:arg,job:"getroomrate"});
        }
    }

    function DrawReservations()
    {
        $("#menu").html(
            "<div class='w3-col l12 m12 s12 pad-1'>" +

            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/calendar.png' style='width: 40px; margin-top: 0px;'> Reservations" +
            "</h3>" +
            "</div>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l12 m12 s12' style='margin-top: 10px;'>" +
            "<div class='widget curve wix-textbox l-width-xl m-width-l' style='border: 1px solid rgb(230,230,230);'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
            "<h6 style='text-align: center;'><i class='green calendar alternate outline inverted circular icon'></i></h6>" +
            "</div>" +
            "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
            "<h6 id='due-count' class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>0</h6>" +
            "<h6 class='' style='text-align: right; color: dimgray; font-family: varela_roundregular; margin-right: 10px;'>Due today" +
            "</h6>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l12 m12 s12' style='margin-top: 10px;'>" +
            "<div class='widget curve wix-textbox l-width-xl m-width-l' style='border: 1px solid rgb(230,230,230);'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
            "<h6 style='text-align: center;'>" +
            "<i class='red calendar inverted times outline circular icon'></i>" +
            "</h6>" +
            "</div>" +
            "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
            "<h6 id='abandpned-count' class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>0</h6>" +
            "<h6 class='' style='text-align: right; color: dimgray; font-family: varela_roundregular; margin-right: 10px;'>No show" +
            "</h6>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");


        _page({add:"<div class='ui pointing menu'>" +
                "  <a id='all-reservations' class='active item reserve-tab' onclick='switchReserveTab(this)'>" +
                "     <i class='circle dot blue outline icon'></i>  All" +
                "  </a>" +
                "  <a id='paid-reservations' class='item reserve-tab' onclick='switchReserveTab(this)'>" +
                "     <i class='green check circle icon'></i> Paid" +
                "  </a>" +
                "  <a id='unpaid-reservations' class='item reserve-tab' onclick='switchReserveTab(this)'>" +
                "     <i class='red times circle icon'></i> Unpaid" +
                "  </a>" +
                "  <a id='abandoned-reservation' class='item reserve-tab' onclick='switchReserveTab(this)'>" +
                "     <i class='red calendar alternate outline icon'></i> No show" +
                "  </a>" +
                "  <div class='right menu'>" +
                "    <div class='item'>" +
                "      <div class='ui transparent icon input'>" +
                "        <input id='search-txt' type='text' placeholder='Search...' " +
                "         onkeyup='if(event.keyCode == 13){populateReservations()}'/>" +
                "        <i class='search link icon'></i>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

        _page({add: DrawTable(["Reservation Detail", "Total", "Payment", "Date", "Status", "Action"],
                {
                    Celled: true, Padded: true, GroupAction: [{ Text: "Cancel reservations", Method: "ConfGroupOrderDelete" }]
                }).outerHTML, class: "l-pad-2"});

        $(".ui.dropdown").dropdown();
        populateReservations();
    }

    function DrawReservation()
    {
        drawReservations();

        _page({add:
                "<div id='error-pane' class='ui w3-row negative message pad-2 l-width-l lift-1' style='display: none; margin: auto; margin-top: 10px;'>" +
                "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                "<div class='w3-col l2 m2 s4 align-r'>" +
                "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                "populateReservation()\">try again</button>" +
                "</div>" +
                "</div>"});


        _page({add:div({add:
                    "<div class='w3-col l4 m4 s12'>" +
                    "<div class=''>" +


                    "<div>" +
                    "<h3 id='res-name' class='sleak load-slip' style='margin: 0px; margin-top: 10px;'>Name</h3>" +
                    "<small class='load-slip'><span id='res-number'>Booking</span></small>" +
                    "</div>" +

                    "<div class='pad-1 widget w3-card curve' style='margin-top: 10px;'>" +
                    "<a id='see-profile-con' style='float: right; margin-top: 10px;' href=''></a>" +
                    "<h6 class='sleak load-slip' style='font-weight: bold; color: steelblue;'>Contact Into</h6><br/>" +
                    "<h6 class='load-slip' style='color: dimgray; font-size: 14px;'>" +
                    "<i class='mobile icon'></i> <span id='res-phone'>phone</span>" +
                    "</h6>" +
                    "<h6 class='load-slip' style='color: dimgray; font-size: 14px;'>" +
                    "<i class='at icon'></i> <span id='res-email'>email</span>" +
                    "</h6>" +
                    "</div>" +

                    "<div class='pad-1 widget w3-card curve' style='margin-top: 10px;'>" +
                    "<span id='pay-status' class='status load-slip'>Status</span>" +
                    "<h6 class='sleak load-slip' style='font-weight: bold; color: steelblue;'>" +
                    "Payment info </h6><br/>" +
                    "<table class='ui very basic no-line table'>" +
                    "<tr>" +
                    "<th><span class='load-slip'>Subtotal</span></th>" +
                    "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='subtotal'>0</span></span></td>" +
                    "</tr>" +
                    "<tr>" +
                    "<th><span class='load-slip'>Discount</span></th>" +
                    "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='discount'>0</span></span></td>" +
                    "</tr>" +
                    "<tr>" +
                    "<th><span class='load-slip'>Total</span></th>" +
                    "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total'>0</span></span></td>" +
                    "</tr>" +
                    "<tr>" +
                    "<th><span class='load-slip'>Paid</span></th>" +
                    "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='paid'>0</span></span></td>" +
                    "</tr>" +
                    "</table>" +
                    "</div>" +

                    "<div class='pad-1 widget w3-card curve' style='margin-top: 10px;'>" +
                    "<h6 class='sleak load-slip' style='font-weight: bold; color: steelblue;'>Special request</h6><br/>" +
                    "<div id='special-req'></div>" +
                    "</div>" +

                    "</div>" +
                    "</div>" +


                    "<div class='w3-col l8 m8 s12'>" +
                    "<div class='l-width-8' style='margin: auto;'>" +
                    "<div>" +
                    "<h6 id='reserve-status' class='status load-slip' style='float: right;'>Status</h6>" +
                    "<h4 class='sleak load-slip' style='margin: 0px; margin-top: 10px;'>Reservation details</h4>" +
                    "<small class='load-slip'>Created: <span id='res-crested-con'></span></small>" +
                    "</div>" +

                    "<div class='widget curve w3-card' style='margin-top: 20px;'>" +
                    "<div class='pad-t' style='background-color: rgb(250,250,250); border-radius: 4px 4px 0px 0px;'>" +
                    "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>" +
                    "Rooms <span id='room-res-count' style='float: right; margin-right: 10px;'>0</span>" +
                    "</h6>" +
                    "</div>" +
                    "<div id='room-reservations-con'></div>" +
                    "</div>" +

                    "</div>" +
                    "</div>",
                class:"w3-row l-pad-7 m-pad-1 s-pad-1"})});

        populateReservation();
    }

    function DrawLoging()
    {
        $("#menu").html(
                "<div class='w3-row'>" +

            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/group.png' style='width: 40px; margin-top: 0px;'> In house guests" +
            "</h3>" +
            "</div>" +


                "<div class='w3-col l12 m12 s12 pad-1'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l12 m12 s12' style='margin-top: 10px;'>" +
                "<div class='widget curve wix-textbox l-width-xl m-width-l' style='border: 1px solid rgb(230,230,230);'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
                "<h6 style='text-align: center;'><i class='green bed inverted circular icon'></i></h6>" +
                "</div>" +
                "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
                "<h6 id='inhouse-count' class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>0</h6>" +
                "<h6 style='text-align: right; font-family: varela_roundregular; color: dimgray; margin-right: 10px;'>In house guests" +
                "</h6>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class='w3-col l12 m12 s12' style='margin-top: 10px;'>" +
                "<div class='widget curve wix-textbox l-width-xl m-width-l' style='border: 1px solid rgb(230,230,230);'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
                "<h6 style='text-align: center;'><i class='blue calendar inverted alternate outline circular icon'></i></h6>" +
                "</div>" +
                "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
                "<h6 id='todays-checkin-count' class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>0</h6>" +
                "<h6 style='text-align: right; font-family: varela_roundregular; color: dimgray; margin-right: 10px;'>Today's check-ins" +
                "</h6>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class='w3-col l12 m12 s12' style='margin-top: 10px;'>" +
                "<div class='widget curve wix-textbox l-width-xl m-width-l' style='border: 1px solid rgb(230,230,230);'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
                "<h6 style='text-align: center;'><i class='red calendar inverted alternate outline circular icon'></i></h6>" +
                "</div>" +
                "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
                "<h6 id='todays-checkin-count' class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>0</h6>" +
                "<h6 style='text-align: right; font-family: varela_roundregular; color: dimgray; margin-right: 10px;'>Today's check-outs" +
                "</h6>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>");

        _page({add:"<div class='ui pointing menu'>" +
                "  <a id='all-guest-tab' class='active item guest-tab' onclick=\"switchGuestTab(this)\">" +
                "     All" +
                "  </a>" +
                "  <a id='due-checkout-tab' class='item guest-tab' onclick='switchGuestTab(this)'>" +
                "     <i class='green calendar alternate outline icon'></i> Due check-out" +
                "  </a>" +
                "  <a id='overdue-tab' class='item guest-tab' onclick='switchGuestTab(this)'>" +
                "     <i class='red calendar times outline icon'></i> Overdue" +
                "  </a>" +
                "  <div class='right menu'>" +
                "    <div class='item'>" +
                "      <div class='ui transparent icon input'>" +
                "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode == 13){populateGuests();}'>" +
                "        <i class='search link icon'></i>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>", class:"l-pad-2 s-pad-1 m-pad-1"})


        _page({
            add: DrawTable(["Guest", "Checkin-checkout", "Room(s)", "Adults", "Payment", "Balances","Bill"],
                {
                    Celled: true, Padded: true, GroupAction: [{ Text: "Add guest to custom list", Method: "ConfGroupOrderDelete" }]
                }).outerHTML, class: "l-pad-2"
        });


        let referenceCon = document.createElement("div");
        referenceCon.className = "l-pad-2";
        referenceCon.style.backgroundColor = "transparent";

        let refTable = document.createElement("table");
        refTable.className = "ui very basic table";
        refTable.style.backgroundColor = "transparent;"
        refTable.innerHTML = "<tr>" +
            "<td style='border-bottom: none;'><i class='green user circle circular icon' data-content='Guest customer'></i> New guest </td>" +
            "<td><i class='blue refresh circular icon' data-content='Guest customer'></i> Re-lodging </td>" +
            "<td><i class='yellow group circular icon' data-content='Guest customer'></i> Has sub guest </td>" +
            "<td><i class='red bed circular icon' data-content='Repeated customer'></i> Multiple rooms </td>" +
            "<td><i class='blue paw circular icon' data-content='Repeated customer'></i> Has pet </td>" +
            "</tr>";


        //referenceCon.appendChild(refTable);
        //_page({ add: referenceCon });

        $(".ui.dropdown").dropdown();

        populateGuests();
    }

    function DrawCustomers()
    {
        $("#menu").html(
            "<div class='w3-row'>" +

            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/group.png' style='width: 40px; margin-top: 0px;'> Customers" +
            "</h3>" +
            "</div>" +


            "<div class='w3-col l12 m12 s12 pad-1'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l12 m12 s12' style='margin-top: 10px;'>" +
            "<div class='widget curve wix-textbox l-width-xl m-width-l' style='border: 1px solid rgb(230,230,230);'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
            "<h6 style='text-align: center;'><i class='green users inverted circular icon'></i></h6>" +
            "</div>" +
            "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
            "<h6 id='customers-count' class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>0</h6>" +
            "<h6 style='text-align: right; font-family: varela_roundregular; color: dimgray; margin-right: 10px;'>Customers" +
            "</h6>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

        _page({add:DrawSearch({method:"populateCustomers"}).outerHTML, class:"l-pad-2 s-pad-1 m-pad-1"})


        _page({
            add: DrawTable(["Profile img", "Customers info", "Address", "Gender", "Dates", "Action"],
                {
                    Celled: true, Padded: true, GroupAction: [{ Text: "Add guest to custom list", Method: "addGroupToContacttoList" }]
                }).outerHTML, class: "l-pad-2"
        });


        let referenceCon = document.createElement("div");
        referenceCon.className = "l-pad-2";
        referenceCon.style.backgroundColor = "transparent";

        let refTable = document.createElement("table");
        refTable.className = "ui very basic table";
        refTable.style.backgroundColor = "transparent;"
        refTable.innerHTML = "<tr>" +
            "<td style='border-bottom: none;'><i class='green user circle circular icon' data-content='Guest customer'></i> New guest </td>" +
            "<td><i class='blue refresh circular icon' data-content='Guest customer'></i> Re-lodging </td>" +
            "<td><i class='yellow group circular icon' data-content='Guest customer'></i> Has sub guest </td>" +
            "<td><i class='red bed circular icon' data-content='Repeated customer'></i> Multiple rooms </td>" +
            "<td><i class='blue paw circular icon' data-content='Repeated customer'></i> Has pet </td>" +
            "</tr>";


        //referenceCon.appendChild(refTable);
        //_page({ add: referenceCon });

        $(".ui.dropdown").dropdown();

        populateCustomers();
    }

    function DrawCustomerProfile()
    {
        $('body').css("background-color", "white");

        let arg = getArg();

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



    $("#property-page").html("<div id='error-pane' class='ui w3-row negative message pad-2 l-width-l lift-1' style='display: none; margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
            "<div class='w3-col l2 m2 s4 align-r'>" +
            "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
            "populateCustomer()\">try again</button>" +
            "</div>" +
            "</div>" +


                "<div class='l-width-8' style='margin: auto;'>" +
                "<div class='w3-row l-pad-7 m-pad-1 s-pad-1'>" +
                "<div class='w3-col l3 m3 s12'>" +
                "<div class=''>" +
                "<div class='widget load-slip curve w3-card align-c'>" +
                "<div id='profile-img-con'>" +
                "</div>" +
                "</div>" +
                "<div class='pad-1 widget w3-card curve' style='color: silver; margin-top: 10px;'>" +
                "<h6 class='sleak load-slip' style='font-weight: bold; color: steelblue;'>Personal Info</h6><br/>" +

                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'>" +
                "<i class='user circle load-slip icon'></i> <span id='salutation' class='load-slip' style='color: black;'>Salutation</span>" +
                "</h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'>" +
                "<i class='history load-slip icon'></i> <span id='lastseen' class='load-slip' style='color: black;'>Lastseen</span>" +
                "</h6>" +
                "<h6 style='color: gray; font-size: 14px; font-family: Lato;'>" +
                "<i class='venus mars load-slip icon'></i> <span id='gender' class='load-slip' style='color: black;'>Gender</span>" +
                "</h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'>" +
                "<i class='calendar outline alternate load-slip icon'></i> <span id='dob' class='load-slip' style='color: black;'>DOB</span>" +
                "</h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'>" +
                "<i class='suitcase load-slip icon'></i> <span id='occupation' class='load-slip' style='color: black;'>Occupation</span>" +
                "</h6>" +
                "</div>" +
                "<div class='pad-1 widget w3-card curve' style='margin-top: 10px;'>" +
                "<h6 class='sleak load-slip' style='font-weight: bold; color: steelblue;'>Contact Into</h6><br/>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'><i class='mobile load-slip icon'></i> " +
                "<span id='phone' class='load-slip' style='color: black;'> Phone</span></h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'><i class='at load-slip icon'></i> " +
                "<span id='email' class='load-slip' style='color: black;'> email</span></h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'><i class='map marker load-slip icon'></i> " +
                "<span id='city' class='load-slip' style='color: black;'>City</span></h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'><i class='at load-slip icon'></i> " +
                "<span id='state' class='load-slip' style='color: black;'>State</span></h6>" +
                "<h6 style='color: dimgray; font-size: 14px; font-family: Lato;'><i class='map load-slip icon'></i> " +
                "<span id='country' class='load-slip' style='color: black;'>Country </span></h6>" +
                "</div>" +
                "</div>" +
                "</div>" +


                "<div class='w3-col l9 m9 s12'>" +
                "<div class='l-width-8' style='margin: auto;'>" +
                "<div>" +
                "<h6 class='load-slip status' style='float: right;'>Status</h6>" +
                "<h3 id='customer-name' class='sleak load-slip' style='margin: 0px; margin-top: 10px;'>Full Name</h3>" +
                "<small class='load-slip'>Created: <span id='creation-date' class='load-slip'>date</span></small>" +
                "</div>" +

                "<div style='margin-top: 20px;'>" +
                "<div class='widget pad-t curve w3-card' style='background-color: whitesmoe;'>" +
                "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>Reservations</h6>" +
                "</div>" +
                "</div>" +

                "<div style='margin-top: 20px;'>" +
                "<div class='widget pad-t curve w3-card' style='background-color: whitesmoe;'>" +
                "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>Lodging</h6>" +
                "</div>" +
                "</div>" +

                "</div>" +
                "</div>" +
                "</div>" +
                "</div>");

        populateCustomer();
    }

    function DrawSendMessages()
    {
        $("#menu").html("<div class='l-width-9' style='margin: auto;'> " +
                "<div class='l-pad-2 s-pad-1'>" +
                "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
                "<img src='../images/messages.png' style='width: 45px; margin-top: 10px;'> Send Emails" +
                "</h3>" +
                "</div>" +
            "<div class='l-pad-2 s-pad-1'>" +
            "<button class='ui blue sleak fluid button' onclick='launchCustomList()'>Create custom list</button>" +
            "</div>" +
            "</div>");

        _page({add:"<div class='l-width-9' style='margin: auto;'> " +
                "<div class='w3-col l4 m4 s12'>" +
                "<div class='widget wix-textbox l-width-xl m-width-xl curve' style='border: 1px solid rgb(230,230,230);'>" +
                "<div class='pad-2' style='border-radius: 4px 4px 0px 0px;'>" +
                "<div style='float: right;' class='ui right top pointing dropdown'>" +
                "<div class=''><i class='ellipsis vertical icon'></i></div>" +
                "<div class='menu'>" +
                "<div class='item' onclick='importCustomContactList()'>Import custom list</div>" +
                "</div>" +
                "</div> " +
                "<h4 style='display: inline; color: dimgray;' class='sleak'><i class='group icon'></i> Add Contacts</h4>" +
                "</div> " +
                "<div class=''>" +
                "<table class='ui definition table' style='border-radius: 0px;'>" +
                "<tbody id='contact-table-list'>" +
                "<tr>" +
                "<td><label><input id='guests' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
                "<td><label>All Guests</label></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label><input id='in-house-guest' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
                "<td><label>In house guest</label></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>" +
                "</div> " +
                "<div class='l-pad-1' style=''>" +
                "<div class='ui form'>" +
                "<div class='field'>" +
                "<textarea id='open-contacts' class='wix-textbox' rows='20' style='font-family: Lato;' " +
                "placeholder='Add emails separated with coma (,) or new line'></textarea>" +
                "</div>" +
                "</div>" +
                "</div> " +
                "</div> " +
                "</div>" +
                "<div class='w3-col l8 m8 s12'>" +
                "<div class='widget wix-textbox pad-2 curve' style='border: 1px solid rgb(230,230,230);'>" +
                "<div style='margin-bottom: 10px;'>" +
                "<div class='ui buttons'>" +
                "<button class='ui basic blue-text compact small sleak button' onclick='showMessageTags()'>Message Tags</button>" +
                "</div> " +
                "</div>" +
                "<div class='ui fluid right labeled input'>" +
                "<input id='from-email' class='wix-textbox' placeholder='From Email'/>" +
                "<label id='email-domain-con' class='ui label'></label> " +
                "</div> " +
                "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
                "<label class='ui sleak label'>From Name</label>" +
                "<input id='from-name' class='wix-textbox' placeholder=''  type='text'/>" +
                "</div> " +
                "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
                "<label class='ui sleak label'>Reply To</label>" +
                "<input id='reply-to-email' class='wix-textbox' type='text'/>" +
                "</div> " +
                "<div class='ui fluid input' style='margin-top: 10px;'>" +
                "<input id='email-subject' class='wix-textbox' placeholder='Subject' type='text'/>" +
                "</div> " +
                "<div class='ui form' style='margin-top: 10px;'>" +
                "<div class='field'>" +
                "<textarea id='email-body'></textarea>" +
                "</div> " +
                "</div> " +
                "<div style='margin-top: 10px;'>" +
                "<button id='email-attachment-btn' class='ui green-back   icon button' onclick=\"getElement('email-attachment-file').click()\"><i class='linkify icon'></i></button>" +
                "<input id='email-attachment-file' type='file' style='display: none;' onchange='uploadAttachment(this)'/> " +
                "<input id='email-attachment' type='hidden' value=''/> " +
                "<label id='email-attachment-txt'>Click to add attachment</label>" +
                "</div> " +
                "<div style='margin-top: 10px;'>" +
                "<button id='send-email-btn' class='ui blue sleak button'  onclick='sendEmail()'><i class='paper plane icon'></i> Send</button> " +
                "</div> " +
                "</div> " +
                "</div> " +
                "</div>",
            class:"w3-row l-pad-2 s-pad-1"});


        $(".ui.dropdown").dropdown();

        InitEditor(getElement("email-body"));

        $("#email-domain-con").html("@"+location.hostname.toString());
    }

    function DrawSendSMS()
    {
        $("#menu").html("<div class='l-width-9' style='margin: auto;'> " +
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/sms.png' style='width: 45px; margin-top: 10px;'> Send SMS" +
            "</h3>" +
            "</div>" +
            "<div class='l-pad-2 s-pad-1'>" +
            "<button class='ui blue sleak fluid button' onclick='launchCustomList()'>Create custom list</button>" +
            "</div>" +
            "</div>");


        _page({add:"<div class='l-width-9' style='margin: auto;'> " +
                "<div class='w3-col l4 m4 s12'>" +
                "<div class='widget wix-textbox l-width-xl m-width-xl curve' style='border: 1px solid rgb(230,230,230);'>" +
                "<div class='pad-2' style='border-radius: 4px 4px 0px 0px;'>" +
                "<div style='float: right;' class='ui right top pointing dropdown'>" +
                "<div class=''><i class='ellipsis vertical icon'></i></div>" +
                "<div class='menu'>" +
                "<div class='item' onclick='importCustomContactList()'>Import custom list</div>" +
                "</div>" +
                "</div> " +
                "<h4 style='display: inline; color: dimgray;' class='sleak'><i class='group icon'></i> Add Contacts</h4>" +
                "</div> " +
                "<div class=''>" +
                "<table class='ui definition table' style='border-radius: 0px;'>" +
                "<tbody id='contact-table-list'>" +
                "<tr>" +
                "<td><label><input id='guests' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
                "<td><label>All Guests</label></td>" +
                "</tr>" +
                "<tr>" +
                "<td><label><input id='in-house-guest' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
                "<td><label>In house guest</label></td>" +
                "</tr>" +
                "</tbody>" +
                "</table>" +
                "</div> " +
                "<div class='l-pad-1' style=''>" +
                "<div class='ui form'>" +
                "<div class='field'>" +
                "<textarea id='open-contacts' class='wix-textbox' rows='5' style='font-family: Lato;' " +
                "placeholder='Add phone numbers sepearted with coma (,) or new line'></textarea>" +
                "</div>" +
                "</div>" +
                "</div> " +
                "</div> " +
                "</div>" +
                "<div class='w3-col l8 m8 s12'>" +
                "<div class='widget pad-2 wix-textbox curve' style='border: 1px solid rgb(230,230,230);'>" +

                "<div style='margin-bottom: 10px;'>" +
                "<div class='ui buttons'>" +
                "<button class='ui basic blue-text compact small sleak button' onclick='showMessageTags()'>Message Tags</button>" +
                "</div> " +
                "</div>" +

                "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
                "<label class='ui sleak label'>From Name</label>" +
                "<input id='from-name' class='wix-textbox' type='text'/>" +
                "</div> " +

                "<div class='ui form' style='margin-top: 10px;'>" +
                "<div class='field'>" +
                "<textarea class='wix-textbox' rows='5' placeholder='Write message' id='sms-body' onkeyup='countCharacters()' onchange='countCharacters()'></textarea>" +
                "</div> " +
                "<h6 style='font-family: lato; float: right;'><small><span id='char-count'>0</span> of 160</small></h6>" +
                "</div> " +
                "<div style='margin-top: 10px;'>" +
                "<button id='send-sms-btn' class='ui blue sleak button' onclick='sendSMSMessage()'>" +
                "<i class='paper plane icon'></i> Send</button> " +
                "</div> " +
                "</div> " +
                "</div> " +
                "</div>",
            class:"w3-row l-pad-2 s-pad-1"});


        $(".ui.dropdown").dropdown();
    }


    //--------------------------- STaff and users managment--------------------------//

    function DrawAdminUsers()
    {
        $("#menu").html("<div class='l-width-9' style='margin: auto;'> " +
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/admin_user.png' style='width: 50px; margin-top: -10;'> Admin users" +
            "</h3>" +
            "</div>" +
            "<div class='l-pad-2 s-pad-1'>" +
            "<a href='#new-admin-user'><button class='ui blue sleak fluid button'><i class='plus icon'></i> New User</button></a> " +
            "</div>" +
            "</div>");



        let searchCon = div({ add: DrawSearch({ method: "populateUser" }), class: "l-pad-2" });
        searchCon.style.paddingBottom = "0px";
        _page({ add: searchCon });

        _page({
            add: DrawTable(["Name", "Username", "Role", "Status", "Action"],
                {
                    GroupAction: [{ Text: "DIVIDER" },
                        { Text: "Delete users", Method: "ConfirmGroupUserDelete" }]
                }).outerHTML, class: "l-pad-2"
        });

        $(".ui.dropdown").dropdown();

        populateUser();
    }

    function DrawNewAdminUsers()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='users icon'></i> Staff" +
            "       </div>" +
            "       <a href='#staff' class='item'>" +
            "           All" +
            "       </a>" +
            "       <a href='#staff/roles' class='item'>" +
            "           Group role" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");


        $("#menu").html("<div class='l-width-9' style='margin: auto;'> " +
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/admin_user.png' style='width: 50px; margin-top: -10;'> Create / Edit users" +
            "</h3>" +
            "</div>" +
            "<div class='l-pad-2 s-pad-1'>" +
            "<a href='#staff'><button class='ui blue sleak fluid button'><i class='users icon'></i> Admin users</button></a> " +
            "</div>" +
            "</div>");


        _page({clear:true});

        _page({
            add: "<br/>" +
                "<div class='l-width-8 widget wix-textbox curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(230,230,230); margin-bottom: 50px;'>" +
                "<div class='l-width-8' style='margin: auto;'>" +


                "<input id='adminuserid' type='hidden' value=''/>" +

                "<br/><br/><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
                "<div class='w3-col l8 m3 s12'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='use-staff-list-chk' type='checkbox' onchange='from_st_lst(this)' checked/><span>From Staff list</span></label></div>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "<div>" +
                "<div id='staff-list-con' class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Select staff</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='staff-list' class='ui wix-select fluid search dropdown' onchange='staff_changed(this)'></select></div>" +
                "<br/><br/><br/></div>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Fullname</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='user circle green icon'></i><input id='full-name' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +

                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Username</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='username' class='wix-textbox' type='text'/></div></div>" +
                "</div><br/>" +

                "<div id='address'>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Select role</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><select id='role-list' class='ui wix-select fluid search dropdown'></select></div>" +
                "</div><br/>" +


                "<br/><br/>" +

                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Password</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='lock green icon'></i><input id='admin-user-password' class='wix-textbox' type='password'/></div></div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Confirm Password</label></div></div>" +
                "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='unlock green icon'></i><input id='admin-user-password-conf' class='wix-textbox' type='password'/></div></div>" +
                "</div><br/>" +

                "<div class='align-r'>" +
                "<button id='save-admin-user-btn' class='ui blue sleak compact button' onclick='saveAdminUser()'>Create User</button>" +
                "</div><br/>" +

                "<div>" +
                "</div>", class: 'l-margin-t-4'
        });

        list({ con: getElement("staff-list"), job: 'list staff', all: true });
        list({ con: getElement("role-list"), job: 'list role', all: true });

        $(".ui.dropdown").dropdown();
    }

    function DrawAdminGroupRoles()
    {
        $("#menu").html("<div class='l-width-9' style='margin: auto;'> " +
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/access.png' style='width: 50px; margin-top: -10;'> Group roles" +
            "</h3>" +
            "</div>" +
            "<div class='l-pad-2 s-pad-1'>" +
            "<a href='#add-role'><button class='ui blue sleak fluid button'><i class='plus icon'></i> New role</button></a> " +
            "</div>" +
            "</div>");


        _page({clear:true});
        let searchCon = div({ add: DrawSearch({ method: "populateAdminRoles" }), class: "l-pad-2" });
        searchCon.style.paddingBottom = "0px";
        _page({ add: searchCon });

        _page({
            add: DrawTable(["Name", "Access", "Action"],
                {
                    Celled: true, Padded: true, GroupAction: [{ Text: "DIVIDER" },
                        { Text: "Delete Roles", Method: "ConfirmGroupRoleDelete" }]
                }).outerHTML, class: "l-pad-2"
        });

        $(".ui.dropdown").dropdown();

        populateAdminRoles();
    }


    //-----------------------Non Tabbed Pages -----------------------------//
    function DrawNewGroupRole()
    {
        $('body').css("background-color", "white");

        $("#min-menue-con").html(
            "<div>" +
            "   <div class='ui menu' style='border-radius: 0; box-shadow: none; border: none;'>" +
            "       <div class='header item' style='background-color: rgb(0,100,140); opacity: 0.5; color: white; border-radius: 0;'>" +
            "           <i class='users icon'></i> Staff" +
            "       </div>" +
            "       <a href='#staff' class='item'>" +
            "           All" +
            "       </a>" +
            "       <a href='#staff/roles' class='item'>" +
            "           Group role" +
            "       </a>" +
            "   </div>" +
            "</div>");

        $("#property-page").html(
            "<div>" +
            "<div id='menu'></div>" +
            "<div id='page'></div>" +
            "</div>");


        $("#menu").html("<div class='l-width-9' style='margin: auto;'> " +
            "<div class='l-pad-2 s-pad-1'>" +
            "<h3 class='ui header' style='font-family: varela_roundregular; color: dimgray;'>" +
            "<img src='../images/access.png' style='width: 50px; margin-top: -10;'> Group roles" +
            "</h3>" +
            "</div>" +
            "<div class='l-pad-2 s-pad-1'>" +
            "<a href='#add-role'><button class='ui blue sleak fluid button'><i class='shield icon'></i>Roles</button></a> " +
            "</div>" +
            "</div>");

        _page({clear:true});

        let access_con = "<div class='w3-row l-width-9' style='margin: auto;'><div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='unlock green inverted circular icon'></i>Access Role Name</h6>" +
            "<br/><br/>" +
            "<p class='pad-1' style='font-family: Lato; color: dimgray; line-height: 170%;'>" +
            "Create roles and give access to specific areas of the admin dashboard to the users with the role. A read access allows a user view " +
            " data but cannot add, remove or make changes to the data. Write access allows a user change, add or remove data. A \"Write\" access " +
            "without a \"Read\" access is useless." +
            "</p>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1'>" +
            "<div class='ui fluid input'><input id='role-name' type='text'/></div>" +
            "<input id='role-id' type='hidden' value=''/>" +
            "</div>" +

            accessWidget("Reservation", "booking") +
            accessWidget("Discount & Coupon", "coupon") +
            accessWidget("Guests", "customer") +
            //accessWidget("Staff", "staff") +
            accessWidget("Rooms", "rooms") +
            /*accessWidget("Kitchen", "kitchen") +
            accessWidget("Bakery", "bakery") +
            accessWidget("Bar", "bar") +
            accessWidget("Laundry", "laundry") +
            accessWidget("House Keeping", "housekeeping") +
            accessWidget("Pool", "pool") +
            accessWidget("Store", "store") +
            accessWidget("Event", "event") +
            accessWidget("Finance", "finance") +
            accessWidget("Branch", "branch") +
            accessWidget("Log", "log") +
             */
            accessWidget("Report", "reporting") +
            accessWidget("Messaging", "messaging") +
            //accessWidget("Webfront", "webfront") +
            //accessWidget("Webconfig", "webconfig") +
            accessWidget("Settings", "settings");

        if ($("#system-role-access").val() == "true")
        {
            access_con += "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>Front Desk</h5>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='frontdesk' class='filled-in' type='checkbox'/><span>Front Desk access</span></label></div>" +
                "</div>" +
                "</div>" +

                "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>Kitchen POS</h5>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='kitchen-pos' class='filled-in' type='checkbox'/><span>Kitchen POS access</span></label></div>" +
                "</div>" +
                "</div>" +


                "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>Bar POS</h5>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='bar-pos' class='filled-in' type='checkbox'/><span>Bar POS access</span></label></div>" +
                "</div>" +
                "</div>" +


                "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>Laundry POS</h5>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='laundry-pos' class='filled-in' type='checkbox'/><span>Laundry POS access</span></label></div>" +
                "</div>" +
                "</div>" +

                "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>Bakery POS</h5>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='bakery-pos' class='filled-in' type='checkbox'/><span>Bakery POS access</span></label></div>" +
                "</div>" +
                "</div>" +


                "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>Pool POS</h5>" +
                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s6'><label><input id='pools-pos' class='filled-in' type='checkbox'/><span>Pools POS access</span></label></div>" +
                "</div>" +
                "</div>";
        }


        access_con += "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
            "<div class=''>" +
            "<button id='role-save-btn' class='ui blue sleak button' onclick='saveRole()'><i class='save icon'></i>Save</button>" +
            "<button class='ui basic sleak button'><i class='arrow left icon'></i>Back</button>" +
            "</div>" +
            "</div>" +


            "</div>" +
            "</div>";


        _page({ add: access_con, class: "l-pad-3" });


        let arg = getArg();
        if(arg != null)
        {
            loadEditRole(arg);
        }
    }

    function accessWidget(title, ids)
    {
        return "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
            "<h5 class='sleak-b' style='color: gray; font-weight: normal;'>" + title + "</h5>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l6 m6 s6'><label><input id='" + ids + "-read' class='filled-in' type='checkbox'/><span>Read access</span></label></div>" +
            "<div class='w3-col l6 m6 s6'><label><input id='" + ids + "-write' class='filled-in' type='checkbox'/><span>Write access</span></label></div>" +
            "</div>" +
            "</div>";
    }

    function DrawNewStaff()
    {
        _page({ add: pageTop({ icon: "user circle", text: "Add New Staff" }), clear: true });

        _page({
            add:

                "<div class='w3-row l-width-9' style='margin: auto;'><div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
                "<h6 class='sleak'><i class='user circle green inverted circular icon'></i>Personal Info</h6>" +
                "</div></div></div>" +
                "<div class='w3-col l6 m5 s12'>" +

                "<input id='staff-id' type='hidden' value=''/>" +

                "<div class='widget lift-1 l-pad-2 s-pad-1'>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<label>Name</label>" +
                "<div class='ui left icon fluid input l-width-xl'><i class='user circle green icon'></i>" +
                "<input class='wix-textbox' id='staff-name' type='text'/></div>" +
                "</div>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<label>Surname</label>" +
                "<div class='ui fluid input'><input class='wix-textbox' id='staff-surname' type='text'/></div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l5 m5 s12'>" +
                "<label>Phone</label>" +
                "<div class='ui fluid left icon input l-width-xl'><i class='mobile green icon'></i>" +
                "<input class='wix-textbox' id='staff-phone' type='text'/></div>" +
                "</div>" +
                "<div class='w3-col l7 m7 s12'>" +
                "<label>Email</label>" +
                "<div class='ui left icon fluid input'><i class='at green icon'></i>" +
                "<input class='wix-textbox' id='staff-email' type='text'/></div>" +
                "</div>" +
                "</div><br/>" +



                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<div class='l-width-xl'>" +
                "<label>Gender</label>" +
                "<select id='staff-sex' class='wix-select ui fluid dropdown'><option>Male</option><option>Female</option></select>" +
                "</div>" +
                "</div>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<label>Date of birth</label>" +
                "<div class='ui fluid left icon input'><i class='calendar green icon'></i>" +
                "<input class='wix-textbox' data-toggle='datepicker' id='staff-dateofbirth' type='text'/></div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<div class='l-width-xl'>" +
                "<label>Nationality</label>" +
                "<select id='nationality' class='wix-select ui search fluid dropdown'></select>" +
                "</div>" +
                "</div>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<label>State of Origin</label>" +
                "<div class='ui fluid input'><input class='wix-textbox' id='staff-state' type='text'/></div>" +
                "</div>" +
                "</div><br/>" +


                "<div class='ui form'>" +
                "<label>Current Address</label>" +
                "<div class='field'>" +
                "<div class=''>" +
                "<textarea id='staff-address' class='wix-textbox' rows='2'></textarea>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +



                "</div>" +


                "</div>" +
                "</div>" +


                "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
                "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
                "<h6 class='sleak'><i class='briefcase green inverted circular icon'></i>Work Info</h6>" +
                "</div></div></div>" +
                "<div class='w3-col l6 m5 s12'>" +

                "<div class='widget lift-1 l-pad-2 s-pad-1'>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Department</label>" +
                "<select id='staff-department' class='ui wix-select fluid dropdown'></select>" +
                "</div>" +
                "</div><br/>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Shift (Work hours)</label>" +
                "<select id='staff-shifts' class='ui wix-select fluid dropdown' multiple></select>" +
                "</div>" +
                "</div><br/>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Position</label>" +
                "<div class='ui left icon fluid input'><i class='bullseye green icon'></i>" +
                "<input class='wix-textbox' id='staff-position' type='text'/></div>" +
                "</div>" +
                "</div><br/>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Salary</label>" +
                "<div class='ui fluid green labeled input'><label class='ui label'>N</label>" +
                "<input class='wix-textbox' id='staff-salary' value='0.00' type='text'/></div>" +
                "</div>" +
                "</div>" +


                "</div>" +


                "</div>" +
                "</div>" +




                "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
                "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
                "<h6 class='sleak'><i class='money green inverted circular icon'></i>Bank Info</h6>" +
                "</div></div></div>" +
                "<div class='w3-col l6 m5 s12'>" +

                "<div class='widget lift-1 l-pad-2 s-pad-1'>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Bank</label>" +
                "<select id='staff-bank' class='ui wix-select fluid dropdown'></select>" +
                "</div>" +
                "</div><br/>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Account number</label>" +
                "<div class='ui fluid input'><input class='wix-textbox' id='staff-acc-num' type='text'/></div>" +
                "</div>" +
                "</div><br/>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Account Name</label>" +
                "<div class='ui fluid input'><input class='wix-textbox' id='staff-acc-name' type='text'/></div>" +
                "</div>" +
                "</div>" +


                "</div>" +


                "</div>" +
                "</div>" +




                "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
                "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
                "<h6 class='sleak'><i class='male green inverted circular icon'></i>Image Capture</h6>" +
                "</div></div></div>" +
                "<div class='w3-col l6 m5 s12'>" +

                "<input id='role-id' type='hidden' value=''/>" +

                "<div class='widget lift-1 l-pad-2 s-pad-1'>" +


                "<div class='w3-row'>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<label>Passport</label>" +
                "<div class='l-width-9 align-c'>" +
                "<div class='' style='height: 150px; width: 150px; background-color: whitesmoke; border-radius: 50%; margin: auto;'>" +
                "<img id='passport-photo' src='' style='max-width: 100%; border-radius: 50%;'/>" +
                "</div>" +
                "<button id='passport-btn' class='ui compact sleak blue button' style='margin-top: 5px;' onclick=\"getElement('passport-file').click()\">" +
                "Select from device</button>" +
                "<input id='passport-file' type='file' style='display: none;' onChange='processPassport(this)'/>" +
                "<input id='passport_file' type='hidden' value=''/>" +
                "<button class='ui basic compact sleak button' style='margin-top: 5px;'>Use camera</button>" +
                "</div>" +
                "</div>" +
                "<div class='w3-col l6 m6 s12'>" +
                "<label>Full shot</label>" +
                "<div class=''>" +
                "<div class='' style='min-height: 200px; background-color: whitesmoke;'>" +
                "<img id='fullshot-photo' style='width: 100%;'/>" +
                "</div>" +
                "<button id='fullshot-btn' class='ui compact sleak blue button' style='margin-top: 5px;' onclick=\"getElement('fullshot-file').click()\">" +
                "Select from device</button>" +
                "<input id='fullshot-file' type='file' style='display: none;' onChange='processFullshot(this)'/>" +
                "<input id='fullshot_file' type='hidden' value=''/>" +
                "<button class='ui basic compact sleak button' style='margin-top: 5px;'>Use camera</button>" +
                "</div>" +
                "</div>" +
                "</div><br/>" +


                "</div>" +


                "</div>" +
                "</div>" +



                "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
                "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
                "<h6 class='sleak'><i class='barcode green inverted circular icon'></i>Biometric / Barcode <small>(for attendance tracking)</small></h6>" +
                "</div></div></div>" +
                "<div class='w3-col l6 m5 s12'>" +

                "<div class='widget lift-1 l-pad-2 s-pad-1'>" +


                "<div class=''>" +
                "<div class=''>" +
                "<label>Barcode / Bio-data</label>" +
                "<div class='ui fluid input'><input id='bio-data' class='wix-textbox' type=''/></div>" +
                "</div>" +
                "</div><br/>" +


                "<div class=''>" +
                "<div class=''>" +
                "<button id='bar-code-gen-btn' class='ui circular basic button' onclick='generateBarcode()'>Generate bar code</button>" +
                "</div>" +
                "</div>" +


                "</div>" +


                "<div class='widget l-pad-2 lift-1 s-pad-1' style='margin-top: 4px;'>" +
                "<div class=''>" +
                "<button id='staff-save-btn' class='ui blue sleak button' onclick='saveStaff()'><i class='save icon'></i>Save</button>" +
                "<a href='#staff'><button class='ui basic sleak button'><i class='arrow left icon'></i>Back</button></a>" +
                "</div>" +
                "</div>" +


                "</div>" +
                "</div>", class: "l-pad-3"
        });

        $("#staff-bank").dropdown();
        $("#staff-department").dropdown();
        $("#staff-shifts").dropdown();
        $("#staff-sex").dropdown();
        //$("#").dropdown();

        list({ con: getElement("staff-bank"), job: 'list banks', all: true });
        list({ con: getElement("staff-department"), job: 'list departments' });
        list({ con: getElement("staff-shifts"), job: 'list shifts' });
        list({ con: getElement("nationality"), job: 'search countries', all: false });

        $('[data-toggle="datepicker"]').datepicker({autoHide:true});
    }

