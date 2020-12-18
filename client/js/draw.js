
  let Action_Icon = "wrench";

  function DrawLogOut()
  {
      _page({ add: "<div></div>", clear: true });
      doLogOut();
  }


  function DrawDashboard()
  {
      _page({ add: pageTop({ icon: "tachometer alternate", text: "Dashboard" }), clear: true });

      _page({add:
             "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' " +
              "style='display: none; width: 97%; margin: auto; margin-top: 10px;'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "loadDashboard()\">try again</button>" +
              "</div>" +
              "</div>"
      });
	  
	  _page({add:div({add:
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div>" +
                  "<div id='blog-back' class='widget l-width-xxl w3-card' style='min-height: 290px; position: relative;" +
                  "background-size: cover; background-repeat: no-repeat; background-position: center;'>" +
                  "<div class='l-pad-2 m-pad-1 s-pad-1' style='position: absolute; background: " +
                  "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0), rgb(50,50,50));" +
                  "width: 100%; height: 100%; top: 0px; left: 0px;'>" +
                  "<h2 class='sleak' id='blog-heading'></h2>" +
                  "<h6 class='' id='blog-sub-heading' style='position: absolute; bottom: 40px; width: 90%; " +
                  "color: white; font-family: Lato;'></h6>" +
                  "<a id='learn-more-path' style='position: absolute; bottom: 10px; color: blue;'></a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row margin-t-t'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-xl' style=''>" +
                  "<div class='widget w3-card' style='min-height: 100px;'>" +
                  "<div class='pad-1'>" +
                  "<h5 class='sleak load-slip' style='font-weight: normal;'>Software Version</h5>" +
                  "</div>" +
                  "<div class='w3-row pad-1'>" +
                  "<div class='w3-col l3 m3 s3 align-c'><h1><i class='microchip green-txt icon'></i></h1></div>" +
                  "<div class='w3-col l9 m9 s9 align-r'>" +
                  "<h2 id='version-con' class='load-slip' style='margin-top: 10px; margin-right: 10px;'>0</h2></div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s2'>" +
                  "<div class='l-width-xl' style=''>" +
                  "<div class='widget w3-card' style='min-height: 100px;'>" +
                  "<div class='pad-t'>" +
                  "</div>" +
                  "<div>" +
                  "<table class='w3-table'>" +
                  "<tr>" +
                  "<th><span class='load-slip'>Admin theme</span></th>" +
                  "<td id='admin-theme'></td>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><span class='load-slip'>Customer theme</span></th>" +
                  "<td id='client-theme'></td>" +
                  "</tr>" +
                  "</table>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-xl' style='margin: auto;'>" +
                  "<div id='trending-room-item' class='widget w3-card' style='min-height: 195px; position: relative; " +
                  "background-size: cover; background-repeat: no-repeat; background-position: center;'>" +
                  "<div class='pad-2'>" +
                  "<h4 class='sleak load-slip'>" +
                  "<i class='bed icon'></i> Hot Room Category" +
                  "</h4>" +
                  "</div>" +
                  "<div id='trending-room-gradient' style='position: absolute; top: 0px; height: 100%; width: 100%; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgb(50,50,50));'>" +
                  "<h5 class='pad-1 sleak' id='room-item-name' " +
                  "style='position: absolute; width: 100%; bottom: 0px; color:  white;'>" +
                  "</h5>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s2'>" +
                  "<div class='l-width-xl' style='margin: auto;'>" +
                  "<div id='trending-food-item' class='widget w3-card' style='min-height: 195px; position: relative; " +
                  "background-size: cover; background-repeat: no-repeat; background-position: center;'>" +
                  "<div class='pad-2'>" +
                  "<h4 class='sleak load-slip'>" +
                  "<i class='utensils icon'></i> Trending Food" +
                  "</h4>" +
                  "</div>" +
                  "<div id='trending-food-gradient' style='position: absolute; top: 0px; height: 100%; width: 100%; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgb(50,50,50));'>" +
                  "<h5 class='pad-1 sleak' id='food-item-name' " +
                  "style='position: absolute; width: 100%; bottom: 0px; color:  white; '>" +
                  "</h5>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row margin-t-t'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-xl' style='margin: auto;'>" +
                  "<div id='trending-drink-item' class='widget w3-card' style='min-height: 195px; position: relative; " +
                  "background-size: cover; background-repeat: no-repeat; background-position: center;'>" +
                  "<div class='pad-2'>" +
                  "<h4 class='sleak load-slip'>" +
                  "<i class='martini glass icon'></i> Trending Drink" +
                  "</h4>" +
                  "</div>" +
                  "<div id='trending-drink-gradient' style='position: absolute;  top: 0px; height: 100%; width: 100%; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgb(50,50,50));'>" +
                  "<h5 class='pad-1 sleak' id='drink-item-name' " +
                  "style='position: absolute; width: 100%; bottom: 0px; color:  white;'>" +
                  "</h5>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s2'>" +
                  "<div class='l-width-xl' style='margin: auto;'>" +
                  "<div id='trending-pastry-item' class='widget w3-card' style='min-height: 195px; position: relative; " +
                  "background-size: cover; background-repeat: no-repeat; background-position: center;'>" +
                  "<div class='pad-2'>" +
                  "<h4 class='sleak load-slip'>" +
                  "<i class='birthday cake icon'></i> Trending Pastry" +
                  "</h4>" +
                  "</div>" +
                  "<div id='trending-pastry-gradient' style='position: absolute;  top: 0px; height: 100%; width: 100%; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgb(50,50,50));'>" +
                  "<h5 class='pad-1 sleak' id='pastry-item-name' " +
                  "style='position: absolute; width: 100%; bottom: 0px; color:  white;'>" +
                  "</h5>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row l-pad-2 m-pad-1 s-pad-1", style:"padding-bottom: 7px;"})});


	    _page({add:div({add:
            "<div class='w3-row'>" +
            "<div class='w3-col l3 m6 12'>" +
            "<div class='widget w3-card' style='min-height: 198px;'>" +
                    "<div class='pad-2'>" +
                    "<h4 class='sleak load-slip'>" +
                    "<i id='message-alert' class='bell outline slash icon' style='float: right; font-size: 20px; color: silver;'></i>" +
                    "<i class='open envelope icon'></i> Messages</h4>" +
                    "</div>" +
                    "<div class='pad-2'>" +
                    "<h4 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>" +
                    "<i class='inbox blue load-slip icon'></i> " +
                    "New Messages " +
                    "<label id='new-message-con' class='ui circular label'>0</label>" +
                    "</h4>" +
                    "<h4 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>" +
                    "<i class='envelope blue load-slip icon'></i> " +
                    "Unread Messages " +
                    "<label id='unread-message-con' class='ui circular label'>0</label>" +
                    "</h4>" +
                    "</div>" +
            "</div>" +
            "<div class='widget w3-card' style='min-height: 198px; margin-top: 5px;'>" +
                    "<div class='pad-2'>" +
                    "<h4 class='sleak'><i class='bug icon'></i> Find an error? " +
                    "<a href='https://gigahotels.com/bug-report' target='_blank'> Report</a></h4>" +
                    "<h4 class='sleak'><i class='film icon'></i> " +
                    "<a href='https://gigahotels.com/help/videos' target='_blank'>" +
                    "Access tutorial videos now</a></h4>" +
                    "<h4 class='sleak'><i class='question icon'></i> " +
                    "Need help? </h4>" +
                    "<a href='https://gigahotels.com/contact-us' target='_blank'>" +
                    "<button class='ui blue button' style='font-weight: normal;'>Contact Gigahotels now</button>" +
                    "</a>" +
                    "</div>" +
                    "<div></div>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l9 m6 12'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l6 m6 12'>" +
            "<div class='l-width-xl' style='margin: auto;'>" +
            "<div class='widget w3-card' style='min-height: 198px;'>" +
            "<div class='pad-2'>" +
            "<h4 class='sleak load-slip'><i class='calendar alternate outline icon'></i>Staff of the month</h4>" +
            "</div>" +
                    "<div class='w3-row'>" +
                    "<div class='w3-col l5 m5 s5'>" +
                    "<div class='pad-1' id='staff-of-month' style='padding-top: 0px; position: relative;'></div>" +
                    "</div>" +
                    "<div class='w3-col l7 m7 s7'>" +
                    "<div id='staff-of-month-name' class='pad-2' style=''></div>" +
                    "</div>" +
                    "</div>" +
            "</div>" +
                    "<div class='widget w3-card' style='height: 205px; margin-top: 5px; overflow-y: auto;'>" +
                    "<div class='pad-2' style='background-color: rgb(250,250,250);'>" +
                    "<h4 class='sleak load-slip'><i class='bullhorn icon'></i>Announcements</h4>" +
                    "</div>" +
                    "<div id='announce-con'></div>" +
                    "</div>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l6 m6 12'>" +
            "<div class='l-width-xxl' style=''>" +
            "<div class='widget w3-card' style='height: 408px; overflow-y: auto;'>" +
            "<div class='pad-2' style='background-color: rgb(250,250,250);'>" +
            "<h4 class='sleak load-slip'><i class='rss icon'></i> Gigahotels feed</h4>" +
            "</div>" +
            "<div id='feed-con'></div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>",
        class:"l-pad-2 m-pad-1 s-pad-1", style:"padding-top: 0px;"})});


	    loadDashboard();
  }


  function DrawAdminSecurity() {
      _page({ add: pageTop({ icon: "unlock", text: "Admin Secirity" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +
              "<div class='l-width-8' style='margin: auto;'>" +


              "<input id='adminuserid' type='hidden' value=''/>" +

              "<br/><br/><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
              "<img src='" + host + "cdn/images/icons/pastel/unlock_checked.png' style='width: 60px;'/>" +
              "</div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<h2 style='font-weight: normal; color: dimgray; font-family: nunitoregular;'>" +
              "Secure your account" +
              "</h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Change Username</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='username' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +

              "<div class='align-r'>" +
              "<button id='save-admin-user-btn' class='ui blue sleak compact button' onclick='saveAdminUsername()'>Save Username</button>" +
              "</div><br/>" +


              "<br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>New Password</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='lock green icon'></i><input id='admin-user-password' class='wix-textbox' type='password'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Confirm Password</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='unlock green icon'></i><input id='admin-user-password-conf' class='wix-textbox' type='password'/></div></div>" +
              "</div><br/>" +

              "<div class='align-r'>" +
              "<button id='save-admin-pass-btn' class='ui blue sleak compact button' onclick='saveUserPassword()'>Save Password</button>" +
              "</div><br/>" +

              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("staff-list"), job: 'list staff', all: true });
      list({ con: getElement("role-list"), job: 'list role', all: true });

      $(".ui.dropdown").dropdown();
  }


  function DrawAdminUsers()
  {
      _page({ add: pageTop({ icon: "group", text: "Admin Group Roles" }), clear: true });

      let btnCon = div({ add: "<a href='#new-admin-user'>" + buttonStack({ text: "<i class='plus icon'></i>Add User", class: "blue-back compact sleak" }).outerHTML + "</a>", class: "l-pad-2 w3-container align-r" });
      btnCon.style.paddingBottom = "0px";
      _page({ add: btnCon });

      let searchCon = div({ add: DrawSearch({ method: "populateUser" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
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
      _page({ add: pageTop({ icon: "lock", text: "New Admin User" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +
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
      _page({ add: pageTop({ icon: "shield", text: "Admin Group Roles" }), clear: true });

      let btnCon = div({ add: "<a href='#add-role'>" + buttonStack({ text: "<i class='plus icon'></i>New Role", class: "blue-back compact sleak" }).outerHTML + "</a>", class: "l-pad-2 w3-container align-r" });
      btnCon.style.paddingBottom = "0px";
      _page({ add: btnCon });

      let searchCon = div({ add: DrawSearch({ method: "populateAdminRoles" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
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
      _page({ add: pageTop({ icon: "unlock", text: "New Admin Role" }), clear: true });

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

      accessWidget("Booking", "booking") +
      accessWidget("Discount & Coupon", "coupon") +
      accessWidget("Customers", "customer") +
      accessWidget("Staff", "staff") +
      accessWidget("Rooms", "rooms") +
      accessWidget("Kitchen", "kitchen") +
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
      accessWidget("Report", "reporting") +
      accessWidget("Messaging", "messaging") +
      accessWidget("Webfront", "webfront") +
      accessWidget("Webconfig", "webconfig") +
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




  /// --------------------- Tabed Pages --------------------------------//


	let loadingSettings = true;

    function DrawGeneralSetting()
    {
        _page({ add: pageTop({ icon: "cog", text: "General Settings" }), clear: true });

        _page({
          add: "<div class='w3-row l-width-9' style='margin: auto;'><div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='building green inverted circular icon'></i>Hotel Info</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget curve lift-1 pad-1'>" +
            "<label>Hotel Name</label>" +
            "<div class='ui fluid left icon input'>" +
            "<i class='building green icon'></i> " +
            "<input class='wix-textbox' id='hotel-name' type='text' onchange='saveWebfrontInfo()'/></div><br/>" +
            "<label>Contact Phone 1</label>" +
            "<div class='ui fluid left icon input'>" +
            "<i class='phone green icon'></i> " +
            "<input class='wix-textbox' id='hotel-phone1' type='text' onchange='saveWebfrontInfo()'/></div><br/>" +
            "<label>Contact Phone 2</label>" +
            "<div class='ui fluid left icon input'>" +
            "<i class='phone green icon'></i> " +
            "<input class='wix-textbox' id='hotel-phone2' type='text' onchange='saveWebfrontInfo()'/></div><br/>" +
            "<label>Contact email 1</label>" +
            "<div class='ui fluid left icon input'>" +
            "<i class='at green icon'></i> " +
            "<input class='wix-textbox' id='hotel-email1' type='text' onchange='saveWebfrontInfo()'/></div><br/>" +
            "<label>Contact email 2</label>" +
            "<div class='ui left icon fluid input'>" +
            "<i class='at green icon'></i> " +
            "<input class='wix-textbox' id='hotel-email2' type='text' onchange='saveWebfrontInfo()'/></div><br/>" +
              "<label>Country</label>" +
              "<div class=''>" +
              "<select id='hotel-country' class='ui wix-select fluid search dropdown' onchange='saveWebfrontInfo()'></select>" +
              "</div><br/>" +
              "<label>State</label>" +
              "<div class='ui fluid input'>" +
              "<input id='hotel-state' class='wix-textbox' type='text' onchange='saveWebfrontInfo()'>" +
              "</div><br/>" +
              "<label>City</label>" +
              "<div class='ui fluid input'>" +
              "<input id='hotel-city' class='wix-textbox' type='text' onchange='saveWebfrontInfo()'>" +
              "</div><br/>" +
            "<label>Hotel Address</label>" +
            "<div class='ui form'>" +
            "<textarea id='hotel-adddress' class='wix-textbox' rows='2' onchange='saveWebfrontInfo()'></textarea>" +
            "</div><br/>" +
            "<label id='webfront-info-save-label' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='group green inverted circular icon'></i>Guest / Customers</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Setup customers options</label><br/><br/>" +
            "<label><input id='customersaddress' type='checkbox' onchange='saveCustomersSettings()'/><span>Get customers address during signup</span></label><br/>" +
            "<label><input id='customersselfngt' type='checkbox' onchange='saveCustomersSettings()'/><span>Allow customers manage their info</span></label><br/><br/>" +
            "<label id='customer-settings-save-label' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='user circle green inverted circular icon'></i>Logo</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Add hotel logo</label>" +
            "<div class='align-c' style='min-height: 200px; background-image: url("+host+"cdn/images/icons/plain/image.png); "+
            "position: relative; background-repeat: no-repeat; background-position: center;'>" +
                "<img id='logo-img' src='' style='min-width: 150px; max-width: 200px;'/>" +
                "<button id='logo-upload-btn' class='ui circular large icon blue button' style='position: absolute; bottom: 0px; left: 45%;' " +
                "onclick=\"document.getElementById('logo-file').click()\">" +
                "<i class='plus icon'></i>" +
                "</button>" +
              "<input id='logo-file' type='file' style='display: none;' onchange='uploadLogo(this)'/>" +
            "</div>" +
            "<label id='logo-save-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='circle green inverted circular icon'></i>Logo & Name On Webfront</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Choose what shows on the webfront</label><br/><br/>" +
            "<label><input id='showlogo' type='checkbox' onchange='saveLogoNameSettings()'/><span>Show Logo on the webfront</span></label><br/>" +
            "<label><input id='showtextname' type='checkbox' onchange='saveLogoNameSettings()'/><span>Show name in text on the webfront <br/>" +
            "<span style='color: silver;'>(Used mostly if your logo does not have your name on it)</span></span></label><br/><br/>" +
            "<label id='logoname-save-label' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='code green inverted circular icon'></i>WebFront</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

              "<div class='widget lift-1 pad-1 ui form'>" +
              "<label style='color: dimgray;'>Customize Webfront properties</label>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<br/>" +
              "<label>Primary color</label><br/>" +
              "<div class='ui input'>" +
              "<input id='primary-color' autocomplete='off' class='wix-textbox color-input' type='text'  onchange='saveWebfrontSettings()'/> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<br/>" +
              "<label>Secondary color</label><br/>" +
              "<div class='ui input'>" +
              "<input id='secondary-color' autocomplete='off' class='wix-textbox color-input' type='text'  onchange='saveWebfrontSettings()'/> " +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<br/>" +
              "<label>Primary font</label><br/>" +
              "<div class='width-xl'>" +
              "<select id='primary-font' class='ui wix-select fluid dropdown' onchange='saveWebfrontSettings()'>" +
              "<option value='arial'>Arial</option>" +
              "<option value='verdana'>Verdana</option>" +
              "<option value='thahoma'>Tahoma</option>" +
              "<option value='consolas'>Consolas</option>" +
              "<option value='segoe ui light'>Segoe ui</option>" +
              "<option value='Lato'>Lato</option>" +
              "<option value='quicksandregular'>Quicksand</option>" +
              "<option value='comfortaaregular'>Comfortaa</option>" +
              "<option value='nunitoregular'>Nunito</option>" +
              "<option value='roboto'>Roboto</option>" +
              "<option value='varela_roundregular'>Varela round</option>" +
              "</select> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<br/>" +
              "<label>Secondary font</label><br/>" +
              "<div class=''>" +
              "<select id='secondary-font' class='ui wix-select fluid dropdown' onchange='saveWebfrontSettings()'>" +
              "<option value='arial'>Arial</option>" +
              "<option value='verdana'>Verdana</option>" +
              "<option value='thahoma'>Tahoma</option>" +
              "<option value='consolas'>Consolas</option>" +
              "<option value='segoe ui light'>Segoe ui</option>" +
              "<option value='Lato'>Lato</option>" +
              "<option value='quicksandregular'>Quicksand</option>" +
              "<option value='comfortaaregular'>Comfortaa</option>" +
              "<option value='nunitoregular'>Nunito</option>" +
              "<option value='roboto'>Roboto</option>" +
              "<option value='varela_roundregular'>Varela round</option>" +
              "</select> " +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<br/>" +
              "<label>Bold font</label><br/>" +
              "<div class='width-xl'>" +
              "<select id='bold-font' class='ui wix-select fluid dropdown' onchange='saveWebfrontSettings()'>" +
              "<option value='arial'>Arial</option>" +
              "<option value='verdana'>Verdana</option>" +
              "<option value='thahoma'>Tahoma</option>" +
              "<option value='consolas'>Consolas</option>" +
              "<option value='segoe ui light'>Segoe ui</option>" +
              "<option value='Lato'>Lato</option>" +
              "<option value='quicksandbold'>Quicksand Bold</option>" +
              "<option value='comfortaabold'>Comfortaa Bold</option>" +
              "<option value='nunitosemibold'>Nunito Bold</option>" +
              "<option value='roboto_bold'>Roboto Bold</option>" +
              "<option value='varela_roundregular'>Varela round</option>" +
              "</select> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<br/>" +
              "<label>Sleak font</label><br/>" +
              "<div class=''>" +
              "<select id='sleak-font' class='ui wix-select fluid dropdown' onchange='saveWebfrontSettings()'>" +
              "<option value='arial'>Arial</option>" +
              "<option value='verdana'>Verdana</option>" +
              "<option value='thahoma'>Tahoma</option>" +
              "<option value='consolas'>Consolas</option>" +
              "<option value='segoe ui light'>Segoe ui</option>" +
              "<option value='Lato'>Lato</option>" +
              "<option value='quicksandlight'>Quicksand light</option>" +
              "<option value='comfortaalight'>Comfortaa light</option>" +
              "<option value='nunitolight'>Nunito Light</option>" +
              "<option value='roboto_light'>Roboto Light</option>" +
              "<option value='varela_roundregular'>Varela round</option>" +
              "</select> " +
              "</div>" +
              "</div>" +
              "</div>" +
              "<br/>" +
              "<label id='webfront-save-label' style='color: silver;'>Saved</label>" +
              "</div></div></div>" +

            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='group green inverted circular icon'></i>Guest Data</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>How detailed would you like guest data to be during checking in</label>" +
            "<br/><br/><br/>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l4 m4 s4'>"+
            "<div>" +
            "<label><input id='simple-check' class='with-gap' name='guest-data' type='radio' checked  onchange='saveGuestFormSettings()'/><span>Simple</span></label>" +
            "<p style='padding: 6px; color: dimgray;'>" +
            "Collect names, phone number, gender and email" +
            "</p>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l4 m4 s4'>" +
            "<div>" +
            "<label><input id='intermediary-check' class='with-gap' name='guest-data' type='radio' onchange='saveGuestFormSettings()'/><span>Intermediary</span></label>" +
            "<p style='padding: 6px; color: dimgray;'>" +
            "Collect evrything in simple plus home address, occupation and place of origin & destination" +
            "</p>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l4 m4 s4'>"+
            "<div>" +
            "<label><input id='detailed-check' class='with-gap' name='guest-data' type='radio' onchange='saveGuestFormSettings()'/><span>Detailed</span></label>" +
            "<p style='padding: 6px; color: dimgray;'>" +
            "Collect evrything in intermediary plus passport, ID & ID Number" +
            "</p>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<br/>" +
            "<label id='guestform-save-label' style='color: silver;'>Saved</label>" +
            "</div></div></div>", class: "l-pad-3"
    });

    let colors = document.getElementsByClassName("color-input");
    let hube = [];

    for(let i = 0; i < colors.length; i++)
    {
        hube.push(new Huebee(colors[i], {}));
        hube[i].on("change", function(){
            saveWebfrontSettings();
        });
    }

    $(".ui.dropdown").dropdown();
    list({con:getElement("hotel-country"), job:"list countries", all:true});

    populateSettings();
    }

  function DrawModules()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Modules" }), clear: true });

      _page({
          class: "margin-t-3", add: "<div class='l-width-9' style='margin: auto;'>" +
            "<div class='w3-row'>" +

          drawModule("Booking & Reservation", "laptop", "The booking module provides customers and guest " +
            "management on the hotel website.", "booking") +

          drawModule("Discount & Coupon", "discount", "Discount & Coupon module processes dicount " +
              "for customers on the website, frontdesk & POS", "discount") +

          drawModule("Customers", "customers", "Enable customers manage an account on the webfront " +
              "where they can manage bookings & other things", "customers") +

          drawModule("Lodging", "room", "Enable & Disable display of any room category or info on rooms " +
              "and lodging from the main webfront.", "lodging") +

          drawModule("Kitchen", "kitchen", "Kitchen module enables customers & guests order food from the " +
              "restaurant both while lodging or making reservation.", "kitchen") +

          drawModule("Bakery", "cake", "Bakery module enables customers & guests order pastries from the " +
              "bakery both while lodging or making reservation.", "bakery") +

          drawModule("Bar", "bar", "Bar module enables customers & guests order drinks from the " +
              "bar both while lodging or making reservation.", "bar") +

          drawModule("Laundry", "laundry", "Laundry module enables customers or guests order laundry " +
              "while lodging.", "laundry") +

          drawModule("Contact Us", "paperplane", "Contact us model enables customers send messages from the " +
              "webfront and enables admin recieve customers messages", "contactus") +

          drawModule("Newsletter subscription", "message", "Subscription module enables the customers who visit the " +
              "hotels website to subscribe for a news letter reminder.", "newsletter") +

          drawModule("Gallery", "network_file", "Gallery module displays all the images and text added to the gallery " +
              "tab from the admin panel on the webfront", "gallery") +

          drawModule("Team", "network_file", "Team module displays all the images and text added to the team " +
              "tab from the admin panel on the webfront", "team") +

          drawModule("Services", "network_file", "Services module displays all the listed services added to the services " +
              "tab from the admin panel on the webfront", "services") +

          drawModule("Facilities", "network_file", "Facilities module displays all the listed facilities added to the gallery " +
              "tab from the admin panel on the webfront", "facility") +

          drawModule("Page text", "network_file", "Page text module displays the page text added to the page text " +
              "tab from the admin panel on the webfront", "pagetext") +

          drawModule("FAQ", "network_file", "FAQ module displays all the questions and their answers " +
              "from the admin panel on the webfront", "faq") +

          drawModule("Terms & conditions", "network_file", "Terms & Condition module activates or deactivates the  " +
              "T&C page from the webfront", "tc") +

          drawModule("Privacy policy", "network_file", "Privacy Policy module activates or deactivates the  " +
              "Privacy policy page from the webfront", "pp") +

          drawModule("About us", "network_file", "About us module activates or deactivates the  " +
              "About us page from the webfront", "aboutus") +

          drawModule("Testimonials", "network_file", "Testimonial module activates or deactivates the  " +
              "testimonial widget from the webfront", "testimonial") +

          "</div>" +
          "</div>"
        });

      loadModules();
  }

  function drawModule(name, icon, text, checkid)
  {
      return "<div class='w3-col l4 m6 s12'>" +
        "<div class='pad-1'>" +
        "<div class='widget curve lift-1'>" +
        "<div class='pad-2' style='border-bottom: 1px solid whitesmoke;'>" +
        "<h3 class='sleak' style='margin-top: 10px; font-weight: normal;'>" +
        "<img src='" + host + "cdn/images/icons/pastel/" + icon + ".png' style='width: 40px; vertical-align: middle; margin-top: -20px;'/> " +
        name +
        "</h3>" +
        "</div>" +
        "<div class='pad-2' style='border-bottom: 1px solid whitesmoke;'>" +
        "<p style='color: dimgray;'>" + text + "</p>" +
        "</div>" +
        "<div class='pad-2'>" +
        "<div class='switch'>" +
        "<label><input id='"+checkid+"' type='checkbox' onchange='saveModuleSettings(this)'/><span class='lever'></span></label>" +
        "</div>" +
        "</div>" +
        "</div> " +
        "</div> " +
        "</div>";
  }

  function DrawTC()
  {
      _page({ add: pageTop({ icon: "file", text: "Terms & Conditions" }), clear: true });

      _page({
        add: "<div class='widget pad-2'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l8 m8 s12'>" +
          "<p style='color: dimgray;'>" +
          "The terms and conditions document will provide a mode of operations for your customers </p>" +
          "</div>" +
          "<div class='w3-col l4 m4 s12'>" +
          "<button id='tandc-save-btn' class='ui basic compact blue right floated button disabled' " +
          "onclick='saveTandc()'><i class='save icon'></i>Save</button>" +
          "</div>" +
          "</div>" +
          "</div>", class: ""
      });

      _page({ add: "<div id='tandc-con' class='widget pad-2 lift-1 curve'></div>", class: "pad-2" });

      getTermsandConditions();
  }

  function DrawPrivacyPolicy()
  {
      _page({ add: pageTop({ icon: "pencil", text: "Privacy Policy" }), clear: true });

      _page({
        add: "<div class='widget pad-2'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l8 m8 s12'>" +
          "<p style='color: dimgray;'>" +
          "Privacy policy gives users an insite to how there info is collected and used with who and </p>" +
          "</div>" +
          "<div class='w3-col l4 m4 s12'>" +
          "<button id='tandc-save-btn' class='ui basic compact blue right floated button disabled' " +
          "onclick='savePrivacyPolicy()'><i class='save icon'></i>Save</button>" +
          "</div>" +
          "</div>" +
          "</div>", class: ""
      });

      _page({ add: "<div id='tandc-con' class='widget pad-2 lift-1 curve'></div>", class: "pad-2" });

      getPrivacyPolicy();
  }

  function DrawIntegrations()
  {
      _page({ add: pageTop({ icon: "code", text: "Integrations" }), clear: true });

      _page({
          add: "<div class='w3-row l-width-9' style='margin: auto;'><div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak' style='color: dimgray;'><i class='mobile green inverted circular icon'></i>Social Media</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1'>" +
            "<label style='color: dimgray;'>Facebook page URL</label>" +
            "<div class='ui fluid left icon input'><i class='facebook f icon'></i>" +
              "<input class='wix-textbox' id='facebook-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
            "<label style='color: dimgray;'>Twitter Page URL</label>" +
            "<div class='ui fluid left icon input'><i class='twitter icon'></i>" +
              "<input class='wix-textbox' id='twitter-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
			"<label style='color: dimgray;'>Instagrame Page URL</label>" +
            "<div class='ui fluid left icon input'><i class='instagram icon'></i>" +
              "<input class='wix-textbox' id='instagram-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
			"<label style='color: dimgray;'>Google plus Page URL</label>" +
            "<div class='ui fluid left icon input'><i class='google icon'></i>" +
              "<input class='wix-textbox' id='google-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
			"<label style='color: dimgray;'>Whatsapp group URL</label>" +
            "<div class='ui fluid left icon input'><i class='whatsapp icon'></i>" +
              "<input class='wix-textbox' id='whatsapp-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
			"<label style='color: dimgray;'>Telegram group URL</label>" +
            "<div class='ui fluid left icon input'><i class='telegram icon'></i>" +
              "<input class='wix-textbox' id='telegram-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
			"<label style='color: dimgray;'>Linked in page URL</label>" +
            "<div class='ui fluid left icon input'><i class='linkedin icon'></i>" +
              "<input class='wix-textbox' id='linkedin-integration' type='text' onchange='saveSocialIntegration()'/></div><br/>" +
            "<label id='social-integration-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='comment green inverted circular icon'></i>Live Chat</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Live chat integration code</label>" +
            "<div class='field'><textarea id='live-chat-integration' class='wix-textbox' rows='4'" +
              " onchange='saveLivechatIntegration()' style='font-family: consolas, Lato;'></textarea></div>" +
            "<label id='livechat-integration-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='code green inverted circular icon'></i>Google Analytics</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Add google analytics</label>" +
            "<div class='field'><textarea id='google-analytics-integration' class='wix-textbox' rows='3' " +
              "onchange='saveAnalyticsIntegration()' style='font-family: consolas, Lato;'></textarea></div>" +
            "<label id='analytics-integration-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +


            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='code green inverted circular icon'></i>Google Tag</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Add google tag api</label>" +
            "<div class='field'><textarea id='google-tag-integration' class='wix-textbox' rows='3'" +
              " onchange='saveGoogleTagIntegration()' style='font-family: consolas, Lato;'></textarea></div>" +
            "<label id='googletag-integration-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +



			"<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='map marker green inverted circular icon'></i>Google Map</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Add a google map showing the location of the hotel. If the template in use has a map module, this " +
			"info will be used to build the map.<br/><br/> Click <a href='' target='empty'>here</a> to learn more about this feature.</label><br/><br/>" +
			"<div class='ui labeled sleak fluid input'><label class='ui label'>Longitude</label>" +
              "<input id='longitude-integration' type='text' onchange='saveMapIntegration()'/></div>" +
			"<div class='ui labeled sleak fluid input' style='margin-top: 5px;'>" +
			"<label class='ui label'>Latitude</label>" +
              "<input id='latitude-integration' type='text' onchange='saveMapIntegration()'/></div>" +
			"<div class='ui labeled sleak fluid input' style='margin-top: 5px;'>" +
			"<label class='ui label'>API Key</label>" +
              "<input id='apikey-integration' type='text' onchange='saveMapIntegration()'/></div><br/>" +
            "<!--<div class='field'><textarea class='wix-textbox' rows='3'></textarea></div>-->" +
            "<label id='map-integration-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>" +



            "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
            "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='translate green inverted circular icon'></i>Translator</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget lift-1 pad-1 ui form'>" +
            "<label style='color: dimgray;'>Add translator api code</label>" +
            "<div class='field'><textarea id='translator-integration' class='wix-textbox' rows='3' " +
              "onchange='saveTranslatorIntegration()' style='font-family: Consolas, Lato;'></textarea></div>" +
            "<label id='translator-integration-status' style='color: silver;'>Saved</label>" +
            "</div></div></div>"

          , class: "l-pad-3"
      });

      populateIntegration();
  }

  function DrawSEO()
  {
      _page({ add: pageTop({ icon: "search", text: "Search Engine Optimization" }), clear: true });

      _page({

          add:

              "<div class='w3-row l-width-9' style='margin: auto;'>" +
              "<div class='w3-col l6 m5 s12'>" +
              "<div class='w3-row l-pad-1 widget l-width-xl lift-1 curve'>" +
              "<div class='w3-col l2 m3 s3 align-c'>" +
              "<img src='"+host+"/cdn/images/icons/pastel/search.png' style='width: 60px;'/>" +
              "</div>" +
              "<div class='w3-col l10 m9 s9'>" +
              "<p style='font-family: Lato;'></p>" +
              "</div>" +
              "</div></div>" +
              "<div class='w3-col l6 m5 s12 widget lift-1 pad-1 curve'>" +
              "<div class=' w3-row'>" +
              "<br/>" +
              "<div class='w3-col l9 m8 s7'>" +
              "<h3 class='sleak blue-text' style='color: dimgray;'>Auto SEO Engine</h3>" +
              "</div>" +
              "<div class='w3-col l3 m4 s5 align-r'>" +
              "<div class='switch'><label><input id='auto-seo' type='checkbox' " +
              "onchange='SetSeo_Autoseo(this)'/><span class='lever'></span></label></div>" +
              "</div></div><br/>" +
              "<!--<label id='homepage-seo-save-label' style='color: silver;'>Saved</label>-->" +
              "</div></div>" +


              "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
              "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
              "<h6 class='sleak'><i class='home blue inverted circular icon'></i>Home page SEO</h6>" +
              "</div></div></div>" +
              "<div class='w3-col l6 m5 s12'>" +
              "<div class='widget curve lift-1 pad-1'>" +
              "<br/>" +
              "<div class='ui fluid left labeled input'>" +
              "<label class='ui sleak label'>Key words</label>" +
              "<input class='wix-textbox' id='homepage-seo-keywords' type='text' onchange='saveHomePageSeo()'/></div><br/>" +
              "<label class='sleak' style='color: dimgray; font-family: bold;'>Meta description</label>" +
              "<div class='ui form'>" +
              "<textarea id='homepage-seo-description' class='wix-textbox' rows='2' onchange='saveHomePageSeo()'></textarea>" +
              "</div><br/>" +
              "<label id='homepage-seo-save-label' style='color: silver;'>Saved</label>" +
              "</div></div></div>" +


              "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
              "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
              "<h6 class='sleak'><i class='bed blue inverted circular icon'></i>Lodging SEO</h6>" +
              "</div></div></div>" +
              "<div class='w3-col l6 m5 s12'>" +
              "<div class='widget curve lift-1 pad-1'>" +
              "<br/>" +
              "<div class='ui fluid left labeled input'>" +
              "<label class='ui sleak label'>Key words</label>" +
              "<input class='wix-textbox' id='lodging-seo-keywords' type='text' onchange='saveLodgingSeo()'/></div><br/>" +
              "<label class='sleak' style='color: dimgray; font-family: bold;'>Meta description</label>" +
              "<div class='ui form'>" +
              "<textarea id='lodging-seo-description' class='wix-textbox' rows='2' onchange='saveLodgingSeo()'></textarea>" +
              "</div><br/>" +
              "<label id='lodging-seo-save-label' style='color: silver;'>Saved</label>" +
              "</div></div></div>" +


              "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
              "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
              "<h6 class='sleak'><i class='utensils blue inverted circular icon'></i>Restaurant SEO</h6>" +
              "</div></div></div>" +
              "<div class='w3-col l6 m5 s12'>" +
              "<div class='widget curve lift-1 pad-1'>" +
              "<br/>" +
              "<div class='ui fluid left labeled input'>" +
              "<label class='ui sleak label'>Key words</label>" +
              "<input class='wix-textbox' id='restaurant-seo-keywords' type='text' onchange='saveRestaurantSeo()'/></div><br/>" +
              "<label class='sleak' style='color: dimgray; font-family: bold;'>Meta description</label>" +
              "<div class='ui form'>" +
              "<textarea id='restaurant-seo-description' class='wix-textbox' rows='2' onchange='saveRestaurantSeo()'></textarea>" +
              "</div><br/>" +
              "<label id='restaurant-seo-save-label' style='color: silver;'>Saved</label>" +
              "</div></div></div>" +



              "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
              "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
              "<h6 class='sleak'><i class='martini glass blue inverted circular icon'></i>Bar SEO</h6>" +
              "</div></div></div>" +
              "<div class='w3-col l6 m5 s12'>" +
              "<div class='widget curve lift-1 pad-1'>" +
              "<br/>" +
              "<div class='ui fluid left labeled input'>" +
              "<label class='ui sleak label'>Key words</label>" +
              "<input class='wix-textbox' id='bar-seo-keywords' type='text' onchange='saveBarSeo()'/></div><br/>" +
              "<label class='sleak' style='color: dimgray; font-family: bold;'>Meta description</label>" +
              "<div class='ui form'>" +
              "<textarea id='bar-seo-description' class='wix-textbox' rows='2' onchange='saveBarSeo()'></textarea>" +
              "</div><br/>" +
              "<label id='bar-seo-save-label' style='color: silver;'>Saved</label>" +
              "</div></div></div>" +


              "<div class='w3-row l-width-9' style='margin: auto; margin-top: 10px;'>" +
              "<div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
              "<h6 class='sleak'><i class='birthday cake blue inverted circular icon'></i>Pastries SEO</h6>" +
              "</div></div></div>" +
              "<div class='w3-col l6 m5 s12'>" +
              "<div class='widget curve lift-1 pad-1'>" +
              "<br/>" +
              "<div class='ui fluid left labeled input'>" +
              "<label class='ui sleak label'>Key words</label>" +
              "<input class='wix-textbox' id='pastry-seo-keywords' type='text' onchange='savePastrySeo()'/></div><br/>" +
              "<label class='sleak' style='color: dimgray; font-family: bold;'>Meta description</label>" +
              "<div class='ui form'>" +
              "<textarea id='pastry-seo-description' class='wix-textbox' rows='2' onchange='savePastrySeo()'></textarea>" +
              "</div><br/>" +
              "<label id='pastry-seo-save-label' style='color: silver;'>Saved</label>" +
              "</div></div></div>"


          , class: "l-pad-3"
      });
      populateSeo();
  }

  function DrawCurrencyPayment()
  {
      _page({ add: pageTop({ icon: "money", text: "Currency & Payment Method" }), clear: true });

      _page({add:"<p>Choose curency and integrate payment gateway. " +
              "The selected currency will be used throughout your system. The payment gateways selected will " +
              "enable customers who visit your website to make payments easily without any staff involvement " +
              "click <a href='' target='_blank'>here</a> to learn more bout this feature</p>",
          class:"pad-2 widget"});

      _page({add:"<div class=''>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12 pad-2'>" +
              "<div class='widget curve lift pad-2 lift-1'>" +
              "<h6 class='sleak'>Current currency</h6>" +
              "<div><select id='current-currency' class='ui wix-select fluid search dropdown' onchange='saveCurrency()'>" +
              "<option value=''>Select currency</option>" +
              "</select></div><br/>" +
              "<table class='ui basic table'>" +
              "<tbody>" +
              "<tr>" +
              "<td style='color: darkgray;'>Curency Name</td>" +
              "<td id='currency-name-con'></td>" +
              "</tr>" +
              "<tr>" +
              "<td style='color: darkgray;'>Country of origin</td>" +
              "<td id='country-con'></td>" +
              "</tr>" +
              "<tr>" +
              "<td style='color: darkgray;'>Curency Code</td>" +
              "<td id='currency-code-con'></td>" +
              "</tr>" +
              "<tr>" +
              "<td style='color: darkgray;'>Symbol</td>" +
              "<td id='symbol-con'></td>" +
              "</tr>" +
              "</tbody>" +
              "</table> <br/>" +
              "<label id='currency-save-status' style='color: darkgray;'>Saved</label>" +
              "</div><br/>" +
              "<div class='widget lift-1 curve pad-1'>" +
              "<h6 class='sleak'>Turn Webpay ON/OFF</h6><br/>" +
              "<p style='font-family: Lato; color: dimgray;'>" +
              "Webpay allows customers pay online when ever they visit the hotel website to make reservations. " +
              "click <a href='' target='_blank'> here</a> to learn more about this feature</p><br/>" +
              "<div class='switch'><label><input id='webpay-status' type='checkbox' onchange='saveWebpaystatus()'/>" +
              "<span class='lever'></span></label> WebPay</div><br/>" +
              "<div class='switch'><label><input id='no-pay-reservation' type='checkbox' onchange='saveWebpaystatus()'/>" +
              "<span class='lever'></span></label> Allow reservation without payment</div><br/>" +
              "<label id='webpay-save-label' style='color: darkgray;'>Saved</label>" +
              "</div> " +
              "</div>" +
              "<div class='w3-col l6 m6 s12 pad-2'>" +
              "<div class='widget pad-2 curve'>" +
              "<h3 class='sleak' style='font-weight: normal;'>" +
              "<i class='credit blue card icon'></i> Add Payment Gateways" +
              "</h3>" +
              "</div><br/> " +
              "<div class='widget pad-1 lift-1 curve'>" +
              "<div class='pad-1'> " +
              "<h3 class='sleak' style='font-weight: normal;'>" +
              "<i class='paypal blue icon'></i> Paypal" +
              "</h3></div><br/>" +
              "<div class='ui form'>" +
              "<div class='ui fluid labeled input'>" +
              "<label class='ui blue-back sleak label'>API Signature</label>" +
              "<input id='paypal-id' class='wix-textbox' type='text' onchange='savePaypal()'>" +
              "</div> <br/>" +
              "<div class='ui fluid labeled input'>" +
              "<label class='ui blue-back sleak label'>Username</label>" +
              "<input id='paypal-username' class='wix-textbox' type='text' onchange='savePaypal()'>" +
              "</div> <br/>" +
              "<div class='ui fluid labeled input'>" +
              "<label class='ui blue-back sleak label'>Password</label>" +
              "<input id='paypal-password' class='wix-textbox' type='text' onchange='savePaypal()'>" +
              "</div> <br/>" +
              "<br/><label id='paypal-save-status' style='color: silver;'>Saved</label> " +
              "</div> " +
              "</div> <br/>" +
              "<div class='widget pad-1 lift-1 curve'>" +
              "<div class='pad-1'> " +
              "<h3 class='sleak' style='font-weight: normal;'>" +
              "Paystack" +
              "</h3></div><br/>" +
              "<div class='ui form'>" +
              "<div class='ui fluid labeled input'>" +
              "<label class='ui blue-back sleak label'>Private key</label>" +
              "<input id='paystack-private-key' class='wix-textbox' type='text' onchange='savePaystack()'>" +
              "</div> <br/>" +
              "<div class='ui fluid labeled input'>" +
              "<label class='ui blue-back sleak label'>Public key</label>" +
              "<input id='paystack-public-key' class='wix-textbox' type='text' onchange='savePaystack()'>" +
              "</div>" +
              "<br/><label id='paystack-save-status' style='color: silver;'>Saved</label> " +
              "</div> " +
              "</div> <br/>" +
              "<div class='widget pad-1 lift-1 curve'>" +
              "<div class='pad-1'> " +
              "<h3 class='sleak' style='font-weight: normal;'>" +
              "<i class='money blue icon'></i> Interswitch" +
              "</h3></div><br/>" +
              "<div class='ui form'>" +
              "<div class='ui fluid labeled input'>" +
              "<label class='ui blue-back sleak label'>Marchant Id</label>" +
              "<input id='marchant-id' class='wix-textbox' type='text' onchange='saveInterswitch()'>" +
              "</div> <br/>" +
              "<br/><label id='interswitch-save-status' style='color: silver;'>Saved</label> " +
              "</div> " +
              "</div> <br/>" +
              "</div>" +
              "</div>" +
              "</div>"});

      list({con:getElement("current-currency"), job:"list currency", all:true});
      $(".ui.dropdown").dropdown();
      populateCurrency();
  }

  function DrawThemes()
  {
      _page({ add: pageTop({ icon: "tint", text: "Themes" }), clear: true });

      _page({
      add: "<div class='ui top attached tabular menu'>" +
        "<div class='active sleak item'>Webfront theme</div>" +
        "<a href='#admin-themes' class='sleak item'>Admin panel theme</a>" +
        "</div> " +
        "<div id='theme-con' class='ui bottom attached segment'>" +
        "</div> ",

        class: "l-pad-3 s-pad-1"
      });

      loadTheme();
  }

  function DrawAdminTheme()
  {
      _page({ add: pageTop({ icon: "tint", text: "Themes" }), clear: true });

      _page({
      add: "<div class='ui top attached tabular menu'>" +
          "<a href='#themes' class='sleak item'>Webfront theme</a>" +
          "<div class='active sleak item'>Admin panel theme</div>" +
          "</div> " +
          "<div id='theme-con' class='ui bottom attached segment'>" +
          "</div> ",

        class: "l-pad-3 s-pad-1"
      });

      loadAdminTheme();
  }

  function DrawBanners()
  {
      _page({ add: pageTop({ icon: "image file", text: "Website Hero banner" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
        " onclick=\"location.hash='#new-banner'\">" +
        "<div class='ui small blue-back sleak button'><i class='plus icon'></i>Add Banner</div>" +
        "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      _page({
        add: DrawTable(["Banner", "text", "subtext", "sort", "status", "Action"],
          {
            Celled: true, Padded: true, GroupAction: [{ Text: "DIVIDER" },
            { Text: "Delete Banner", Method: "ConfirmGroupBannerDelete" }]
          }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateBanner();
  }

  function DrawAddBanner()
  {
      _page({ add: pageTop({ icon: "image file", text: "Add New Banner" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<button id='banner-save-btn' class='ui compact blue-back button' tabindex='0' onclick='saveBanner()'>" +
        "<i class='plus icon'></i>Save Banner</button>";
      _page({ add: buttons });

      _page({
        add: "<input id='banner-id' type='hidden' value=''>" +
            "<div id='banner-edit-page'>" +
            "</div>", class: "margin-b-6"
      });
      loadBannerEditor();
  }

  function DrawFAQ()
  {
      _page({ add: pageTop({ icon: "question circle", text: "Frequently Asked Questions" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<button class='ui yellow-back sleak button' onclick='showfaqcategory()'>FAQ Category</button> " +
        "<div class='ui labeled button' tabindex='0'" +
        " onclick=\"location.hash='#new-faq'\">" +
        "<div class='ui small blue-back sleak button'><i class='plus icon'></i>New Faq</div>" +
        "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      _page({ add: DrawSearch({ method: "populateFaq" }).outerHTML, class: "pad-2" });

      _page({
        add: DrawTable(["Question", "Category", "sort", "status", "Action"],
          {
            Celled: true, Padded: true, GroupAction: [{ Text: "DIVIDER" },
            { Text: "Delete FAQ", Method: "ConfirmGroupFaqDelete" }]
          }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateFaq();
  }

  function DrawNewFAQ(o)
  {
      _page({ add: pageTop({ icon: "question circle", text: "Add FAQ" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +
            "<div class='l-width-8' style='margin: auto;'>" +
            "<input id='faqid' type='hidden' value=''/>" +
            "<br/><br/><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Question</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='faq-question' class='wix-textbox' type='text'/></div></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Answer</label></div></div>" +
            "<div class='w3-col l8 m3 s12 ui form'><div class='field'><textarea id='faq-answer' class='wix-textbox' rows='3'></textarea></div></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Category</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><select id='faq-category' class='ui fluid wix-select dropdown'><option value=''>Select category</option></select></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Sort</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='faq-sort' class='wix-textbox' type='number' value='0'/></div></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>.</div></div>" +
            "<div class='w3-col l8 m3 s12'><label><input id='faq-status' class='filled-in' type='checkbox' checked/><span>Status</span></label></div>" +
            "</div><br/>" +

            "<div class='align-r'>" +
            "<button id='faq-save-btn' class='ui blue sleak compact button' onclick='saveFaq()'>Save FAQ</button>" +
            "</div><br/>" +

            "<div>" +
            "</div>", class: "l-margin-t-4"
      });

      $(".ui.dropdown").dropdown();

      InitEditor("#faq-answer");
      list({ con: getElement("faq-category"), job: 'list faq category', all: true });
  }

  function DrawWebContent()
  {
      _page({ add: pageTop({ icon: "clone", text: "Content" }), clear: true });

      _page({
          class: "pad-2 widget", add: "<p style='color: dimgray;'>" +
            "Cusomize the content on your website with images and text from your hotel. " +
            "The theme you are using still decides" +
            " how they appear on your website regardless of how they look here.</p>"
      });

      let gallery = getArg() == "gallery" ? "active" : "";
      let team = getArg() == "team" ? "active" : "";
      let testimonial = getArg() == "testimonial" ? "active" : "";
      let aboutus = getArg() == "aboutus" ? "active" : "";
      let facilities = getArg() == "facilities" ? "active" : "";
      let pagetext = getArg() == "pagetext" ? "active" : "";

      let services = ((gallery != "active") && (team != "active") && (testimonial != "active") && (aboutus != "active") && (facilities != "active") && (pagetext != "active")) ? "active" : "";

      _page({
          class: "pad-2", add: "<div class='ui top attached tabular menu'>" +
                "<a class='" + services + " item sleak' href='#web-content/services'>" +
                "Our Services" +
                "</a>" +
                "<a class='" + gallery + " item sleak' href='#web-content/gallery'>" +
                "Our Gallery" +
                "</a>" +
                "<a class='" + team + " item sleak' href='#web-content/team'>" +
                "Our Team" +
                "</a>" +
                "<a class='" + testimonial + " item sleak' href='#web-content/testimonial'>" +
                "Testimonials" +
                "</a>" +
                "<a class='" + aboutus + " item sleak' href='#web-content/aboutus'>" +
                "About Us" +
                "</a>" +
                "<a class='" + facilities + " item sleak' href='#web-content/facilities'>" +
                "Our Facilities" +
                "</a>" +
                "<a class='" + pagetext + " item sleak' href='#web-content/pagetext'>" +
                "Page Text" +
                "</a>" +
                "</div>" +
                "<div id='content-page' class='ui bottom attached segment'>" +
                "</div>"
      });

      if (testimonial === "active")
      {
          DrawTestimonial();
      }
      else if (gallery === "active")
      {
          DrawGallery();
      }
      else if (team === "active")
      {
          DrawTeam();
      }
      else if (aboutus === "active")
      {
          DrawAboutUs();
      }
      else if (facilities === "active")
      {
          DrawFacilities();
      }
      else if (pagetext === "active")
      {
          DrawPageText();
      }
      else
      {
          DrawServices();
      }
  }

  function servicePlaceholder()
  {
      return "<div class='w3-col l6 m6 s12'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l4 m4 s12'>" +
          "<div class='pad-2'>" +
          "<div class='ui placeholder'>" +
          "<div class='square image'></div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "<div class='w3-col l8 m8 s12'>" +
          "<div class='pad-1'>" +
          "<div class='ui fluid placeholder'>" +
          "<div class='very short line'></div>" +
          "<div class='medium line'></div>" +
          "<div class='long line'></div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
  }


  function facilityPlaceholder()
  {
      return "<div class='w3-col l6 m6 s12'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l4 m4 s12'>" +
          "<div class='pad-2'>" +
          "<div class='ui placeholder'>" +
          "<div class='square image'></div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "<div class='w3-col l8 m8 s12'>" +
          "<div class='pad-1'>" +
          "<div class='ui fluid placeholder'>" +
          "<div class='very short line'></div>" +
          "<div class='medium line'></div>" +
          "<div class='long line'></div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";
  }


  function imageTextPlaceholder()
  {
      return "<div class='w3-col l3 m6 s12'>" +
          "<div class='pad-2'>" +
          "<div class='ui fluid placeholder'>" +
          "<div class='square image'></div>" +
          "<div class='very short line'></div>" +
          "<div class='medium line'></div>" +
          "<div class='long line'></div>" +
          "</div>" +
          "</div>" +
          "</div>";
  }

  function testimonialPlaceholder()
  {
      return "<div id='testimonial-item-' class='w3-row teams' style=''>" +

          "<div class='lift-1'>" +

          "<input id='testimonial-id-' type='hidden' value=''/>" +
          "<input id='testimonial-image-name-' type='hidden' value=''/>" +


          "<div class='w3-col l2 m2 s12 pad-2'>" +
          "<div class='ui placeholder'>" +
          "<div class='line'></div><div class='line'></div>" +
          "</div>" +
          "<div class='ui placeholder'>" +
          "<div class='line'></div><div class='line'></div>" +
          "</div>" +
          "<br/>" +
          "</div> " +


          "<div class='w3-col l3 m3 s12 pad-2'>" +
          "<div class='ui placeholder'>" +
          "<div class='image' style='width: 100%; min-height: 170px;'></div>" +
          "</div>" +
          "</div>" +


          "<div class='w3-col l7 m7 s12 pad-2'>" +
          "<div class='ui placeholder' style='width: 100%;'>" +
          "<div class='line' style='width: 100%;'></div>" +
          "<div class='line' style='width: 100%;'></div>" +
          "</div>" +
          "<br/><br/>" +
          "<div class='ui placeholder'>" +
          "<div class='line'></div><div class='line'></div>" +
          "</div>" +
          "</div>" +

          "</div>" +

          "</div>";
  }

  function DrawServices()
  {
      $("#content-page").html("");

      getElement("content-page").appendChild(div({ add: "<div id='service-content' class='w3-row'></div>" }));

      populateServicesContent(function () {
          let i = 0;
          while (getElement("service-item-" + i) != null)
          {
              i++;
          }
          addServicesPlaceholder(i);
      });
  }

  function DrawFacilities()
  {
      $("#content-page").html("");

      getElement("content-page").appendChild(div({ add: "<div id='facility-content' class='w3-row'></div>" }));

      populateFacilitiesContent(function () {
          let i = 0;
          while (getElement("facility-item-" + i) != null)
          {
              i++;
          }
          addFacilitiesPlaceholder(i);
      });
  }

  function DrawGallery()
  {
      $("#content-page").html("");

      getElement("content-page").appendChild(div({ add: "<div id='gallery-content' class='w3-row'></div>" }));

      populateGalleryContent(function () {
          let i = 0;
          while (getElement("gallery-item-" + i) != null)
          {
            i++;
          }
          addGalleryPlaceholder(i);
        });
  }

  function DrawTeam()
  {
      $("#content-page").html("");

      getElement("content-page").appendChild(div({ add: "<div id='team-content' class='w3-row'></div>" }));

      populateTeamContent(function () {

          let i = 0;

          while (getElement("team-item-" + i) != null)
          {
              i++;
          }

          addTeamPlaceholder(i);
      });
  }

  function DrawTestimonial()
  {
      $("#content-page").html("");

      getElement("content-page").appendChild(div({ add: "<div id='testimonial-content' class=''></div>" }));

      populateTestimonialContent(function (e) {

          $("#testimonial-rating-"+e).rating({maxRating: 5});

          let i = 0;

          while (getElement("testimonial-item-" + i) != null)
          {
              i++;
          }

          addTestimonialPlaceholder(i);
      });
  }

  function DrawPageText()
  {
      getElement("content-page").appendChild(div({
          add: "<div class='widget pad-2'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m8 s12'>" +
              "<p style='color: dimgray;'>" +
              "The article here will be used on the home page. The placement will be determined my the template in use</p>" +
              "</div>" +
              "<div class='w3-col l4 m4 s12'>" +
              "<button id='page-text-save-btn' class='ui basic compact blue right floated button' " +
              "onclick='savePagetext()'><i class='save icon'></i>Save</button>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div id='page-text-con' class='widget pad-2 lift-1 curve'></div>"
      }));

      getPageText();
  }

  function DrawAboutUs()
  {
      getElement("content-page").appendChild(div({
          add: "<div class='widget pad-2'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l8 m8 s12'>" +
            "<p style='color: dimgray;'>" +
            "The article here will be used to create a the about us on the hotel website </p>" +
            "</div>" +
            "<div class='w3-col l4 m4 s12'>" +
            "<button id='about-us-save-btn' class='ui basic compact blue right floated button disabled' " +
            "onclick='saveAboutUs()'><i class='save icon'></i>Save</button>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div id='aboutus-con' class='widget pad-2 lift-1 curve'></div>"
      }));

      getAboutUs();
  }

  function DrawMessagesTemplate()
  {
      _page({ add: pageTop({ icon: "envelope open", text: "Message Templates" }), clear: true });

      _page({add:
              "<div class='l-width-l' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m5 s12'>" +
              "<div class='widget w3-card l-width-l m-width-xl curve l-margin-t-6'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6 l-pad-3 align-c' style='border-bottom: 1px solid whitesmoke; border-right: 1px solid whitesmoke;'>" +
              "<h1 id='email-count-con' class='sleak blue-text'>0</h1>" +
              "<h6 class='sleak'>Emails</h6>" +
              "</div>" +
              "<div class='w3-col l6 m6 s6 l-pad-3 align-c' style='border-bottom: 1px solid whitesmoke;'>" +
              "<h1 id='sms-count-con' class='sleak blue-text'>0</h1>" +
              "<h6 class='sleak'>SMS</h6>" +
              "</div>" +
              "</div>" +
              "<div class='pad-1'>" +
              "<h6 class='sleak' style='color: dimgray; text-align: center;'>Schedules and events</h6> " +
              "<br/>" +
              "<label>0%</label> " +
              "<div class='ui blue tiny progress'>" +
              "<div class='bar'></div>" +
              "</div> " +
              "<label>0%</label> " +
              "<div class='ui blue tiny progress'>" +
              "<div class='bar'></div>" +
              "</div> " +
              "<label>0%</label> " +
              "<div class='ui blue tiny progress'>" +
              "<div class='bar'></div>" +
              "</div> " +
              "</div>" +
              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m7 s12'>" +

              div({add: "<div class='w3-row'>" +
                      "<div class='w3-col l5 m5 s12'>" +
                      DrawSearch({method:"populateReceivedMessages"}).outerHTML +
                      "</div>" +
                      "<div class='w3-col l7 m7 s12 l-align-r'>" +
                      "<div class=''>" +
                      "<a href='#add-message-template'><button class='ui sleak blue-back button'>New Template</button></a>" +
                      "</div>" +
                      "</div></div>", class:'l-margin-b-2'}).outerHTML +

              "<div id='table-body' class=''>" +


              "</div> " +
              "<div class='w3-row widget w3-card curve' style='margin-top: 5px;'>" +

              "<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid lightgray;'>" +
              "<div class='ui icon top left pointing dropdown button'>" +
              "<i class='wrench blue icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Group Action</div>" +
              "</div>" +
              "</div>" +
              "</div>" +

              "<div class='w3-col l2 m3 s12 l-pad-2 s-pad-1' style=''>" +
              "<div id='perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l8 m7 s12 l-pad-2 s-pad-1'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +
              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      populateMessageTemplate();
  }

  function DrawAddMessagesTemplate()
  {
      _page({ add: pageTop({ icon: "envelope open", text: "create message template" }), clear: true });

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='ui secondary  menu'>" +
              "  <a class='item active'>" +
              "    <i class='blue at icon'></i> Email template" +
              "  </a>" +
              "  <a href='#add-sms-template' class='item'>" +
              "    <i class='blue open mobile icon'></i> SMS Template" +
              "  </a>" +
              "</div>" +
              "<input id='messageid' type='hidden' value=''/>" +
              "<input id='email-status' type='hidden' value='true'/>",
          class:"l-pad-2 s-pad-1"});

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='w3-col l8 m8 s12'>" +
              "<div class='widget w3-card pad-2 l-width-xl m-width-l curve margin-b-1'>" +
              "<div class='ui fluid input'>" +
              "<input id='email-title' class='wix-textbox' placeholder='Message Title'/>" +
              "</div> " +
              "</div>" +
              "<div class='widget w3-card pad-2 l-width-xl m-width-l curve'>" +
              "<div style='margin-bottom: 10px;'>" +
              "<div class='ui buttons'>" +
              "<button class='ui basic compact small sleak button'>Import html template</button> " +
              "</div> " +
              "</div>" +
              "<div class='ui fluid right labeled input'>" +
              "<input id='email-from' class='wix-textbox' placeholder='From Email'/>" +
              "<label id='email-domain-con' class='ui label'></label> " +
              "</div> " +
              "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
              "<label class='ui sleak label'>From Name</label>" +
              "<input id='email-from-name' class='wix-textbox' placeholder='' type='text'/>" +
              "</div> " +
              "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
              "<label class='ui sleak label'>Reply To</label>" +
              "<input id='email-reply-to' class='wix-textbox' placeholder='' type='text'/>" +
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
              "<input id='email-attachment-file' type='file' style='display: none;' onchange=''/> " +
              "<input id='email-attachment' type='hidden' value=''/> " +
              "<label id='email-attachment-txt'>Click to add attachment</label>" +
              "</div> " +
              "<div style='margin-top: 10px;'>" +
              "<button id='email-template-btn' class='ui blue-back sleak button' onclick='saveEmailTemplate()'><i class='save icon'></i> Save</button> " +
              "</div> " +
              "</div> " +
              "</div> " +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget w3-card curve'>" +

              "<div class='pad-1'>" +
              "<h6 class='sleak'>Message Tags</h6>" +
              "<p>Use these message tags to customize messages with users data. " +
              "Click <a href='' target='_blank'>here</a> to learn more about message tags</p>" +
              "<br>" +
              "<h6 class='m-tag'>{name}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name </h6>" +
              "<h6 class='m-tag'>{surname}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name </h6>" +
              "<h6 class='m-tag'>{guestid}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user guest ID </h6>" +
              "<h6 class='m-tag'>{country}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user country </h6>" +
              "<h6 class='m-tag'>{street}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user street address </h6>" +
              "<h6 class='m-tag'>{state}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's state </h6>" +
              "<h6 class='m-tag'>{city}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's city </h6>" +
              "<h6 class='m-tag'>{usertoken}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users system ID </h6>" +
              "<h6 class='m-tag'>{lastseen-date}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last seen date </h6>" +
              "<h6 class='m-tag'>{lastseen-time}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last seen time </h6>" +
              "<h6 class='m-tag'>{lodge-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total number of lodging </h6>" +
              "<h6 class='m-tag'>{food-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total food ordered </h6>" +
              "<h6 class='m-tag'>{pastry-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total pastry ordered </h6>" +
              "<h6 class='m-tag'>{laundry-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total laundry ordered </h6>" +
              "<h6 class='m-tag'>{pool-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total pool side ordering </h6>" +
              "<h6 class='m-tag'>{lodge-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User's deficit for lodging </h6>" +
              "<h6 class='m-tag'>{food-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's deficit for food orders </h6>" +
              "<h6 class='m-tag'>{drinks-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's deficit for drinks order </h6>" +
              "<h6 class='m-tag'>{pastries-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's deficit for patry orders </h6>" +
              "<h6 class='m-tag'>{laundry-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total deficit for laundry orders </h6>" +
              "<h6 class='m-tag'>{pool-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total deficit for pool orders </h6>" +
              "<h6 class='m-tag'>{total-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users to total deficit </h6>" +
              "<h6 class='m-tag'>{last-lodged}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last time the user lodged </h6>" +
              "</div> " +
              "</div> " +
              "</div>" +
              "</div>",
          class:"w3-row l-pad-2 s-pad-1"});


      $(".ui.dropdown").dropdown();

      InitEditor(getElement("email-body"));

      $("#email-domain-con").html("@"+location.hostname.toString());
  }

  function DrawAddSMSTemplate()
  {
      _page({ add: pageTop({ icon: "mobile", text: "create SMS template" }), clear: true });

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='ui secondary  menu'>" +
              "  <a href='#add-message-template' class='item'>" +
              "    <i class='blue at icon'></i> Email template" +
              "  </a>" +
              "  <a class='item active'>" +
              "    <i class='blue open mobile icon'></i> SMS Template" +
              "  </a>" +
              "</div>" +
              "<input id='messageid' type='hidden' value=''/>" +
              "<input id='sms-status' type='hidden' value='true'/>",
          class:"l-pad-2 s-pad-1"});

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='w3-col l8 m8 s12'>" +
              "<div class='widget w3-card pad-2 l-width-xl m-width-l curve margin-b-1'>" +
              "<div class='ui fluid input'>" +
              "<input id='sms-title' class='wix-textbox' placeholder='Message Title'/>" +
              "</div> " +
              "</div>" +
              "<div class='widget w3-card pad-2 l-width-xl m-width-l curve'>" +
              "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
              "<label class='ui sleak label'>From Name</label>" +
              "<input id='sms-from-name' class='wix-textbox' placeholder='' type='text'/>" +
              "</div> " +

              "<div class='ui form' style='margin-top: 10px;'>" +
              "<div class='field'>" +
              "<textarea class='wix-textbox' rows='3' placeholder='SMS body' id='sms-body'></textarea>" +
              "</div> " +
              "</div> " +
              "<div style='margin-top: 10px;'>" +
              "<button id='sms-template-btn' class='ui blue-back sleak button' onclick='saveSMSTemplate()'><i class='save icon'></i> Save</button> " +
              "</div> " +
              "</div> " +
              "</div> " +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget curve'>" +

              "<div class='pad-1 w3-card'>" +
              "<h6 class='sleak'>Message Tags</h6>" +
              "<p>Use these message tags to customize messages with users data. " +
              "Click <a href='' target='_blank'>here</a> to learn more about message tags</p>" +
              "<br>" +
              "<h6 class='m-tag'>{name}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name </h6>" +
              "<h6 class='m-tag'>{surname}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name </h6>" +
              "<h6 class='m-tag'>{guestid}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user guest ID </h6>" +
              "<h6 class='m-tag'>{country}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user country </h6>" +
              "<h6 class='m-tag'>{street}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user street address </h6>" +
              "<h6 class='m-tag'>{state}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's state </h6>" +
              "<h6 class='m-tag'>{city}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's city </h6>" +
              "<h6 class='m-tag'>{usertoken}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users system ID </h6>" +
              "<h6 class='m-tag'>{lastseen-date}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last seen date </h6>" +
              "<h6 class='m-tag'>{lastseen-time}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last seen time </h6>" +
              "<h6 class='m-tag'>{lodge-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total number of lodging </h6>" +
              "<h6 class='m-tag'>{food-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total food ordered </h6>" +
              "<h6 class='m-tag'>{pastry-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total pastry ordered </h6>" +
              "<h6 class='m-tag'>{laundry-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total laundry ordered </h6>" +
              "<h6 class='m-tag'>{pool-order-count}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total pool side ordering </h6>" +
              "<h6 class='m-tag'>{lodge-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User's deficit for lodging </h6>" +
              "<h6 class='m-tag'>{food-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's deficit for food orders </h6>" +
              "<h6 class='m-tag'>{drinks-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's deficit for drinks order </h6>" +
              "<h6 class='m-tag'>{pastries-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User's deficit for patry orders </h6>" +
              "<h6 class='m-tag'>{laundry-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total deficit for laundry orders </h6>" +
              "<h6 class='m-tag'>{pool-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total deficit for pool orders </h6>" +
              "<h6 class='m-tag'>{total-deficit}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Users to total deficit </h6>" +
              "<h6 class='m-tag'>{last-lodged}&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last time the user lodged </h6>" +
              "</div> " +
              "</div> " +
              "</div>" +
              "</div>",
          class:"w3-row l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();
  }

  function DrawContactList()
  {
      _page({ add: pageTop({ icon: "list", text: "Contact List" }), clear: true });

      _page({add:
            "<input id='custom-list-id' type='hidden' value=''/> " +

              "<div class='l-width-l' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l3 m4 s12'>" +
              "<div class='l-width-l m-width-xl curve l-margin-t-6'>" +

              "<div class='ui secondary vertical menu'>" +
              "      <a id='contact-list-all' class='active item contact-list-menu' onclick='contactListClicked(this)'>" +
              "             All" +
              "      </a>" +
              "      <a id='contact-list-customer' class='item contact-list-menu' onclick='contactListClicked(this)'>" +
              "         Customers" +
              "      </a>" +
              "      <a id='contact-list-guest' class='item contact-list-menu' onclick='contactListClicked(this)'>" +
              "         Guests" +
              "      </a>" +
              "      <a id='contact-list-staff' class='item contact-list-menu' onclick='contactListClicked(this)'>" +
              "         Staff" +
              "      </a>" +
              "      <a id='contact-list-subscribers' class='item contact-list-menu' onclick='contactListClicked(this)'>" +
              "         Subscribers" +
              "      </a>" +
              "      <a id='contact-list-messaging' class='item contact-list-menu' onclick='contactListClicked(this)'>" +
              "            Contact form" +
              "      </a>" +
              "      <a id='contact-list-custom' class='item contact-list-menu' onclick='populateCustomContactList(this)'>" +
                  "      Custom list <span class='list-name-con'></span>" +
              "      </a>" +
              "    </div>" +


              "</div> " +
              "</div>" +
              "<div class='w3-col l9 m8 s12'>" +

              div({add: "<div class='w3-row'>" +
                      "<div class='w3-col l5 m5 s12'>" +
                      DrawSearch({method:"populateContactList"}).outerHTML +
                      "</div>" +
                      "<div class='w3-col l7 m7 s12 l-align-r'>" +
                      "<div class='ui buttons'>" +
                      "<button class='ui sleak blue button' onclick='launchAddContact()'>Add Contact</button>" +
                      "<button class='ui sleak basic button' onclick='launchCustomList()'>New custom list</button>" +
                      "</div>" +
                      "</div></div>", class:'l-margin-b-2'}).outerHTML +
                    "<h3 class='sleak' style='margin: 0px; font-weight: normal;'><span class='list-name-con'></span></h3>" +

              DrawTable(["Name", "Contact info", "Action"],
                  {GroupAction:[{Text:"Add to custom list",Method:"addGroupContacttoList"},
                          {Text:"Remove from custom list",Method:"removeGroupContactfromList"},{Text:"Delete",Method:"ConfirmGroupContactDelete"}]}).outerHTML +


              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      populateContactList();
  }

  function DrawSendMessages()
  {
      _page({ add: pageTop({ icon: "paper plane", text: "Send Messages" }), clear: true });

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='ui secondary  menu'>" +
              "  <a class='item active'>" +
              "    <i class='blue at icon'></i> Send Emails" +
              "  </a>" +
              "  <a href='#send-sms' class='item'>" +
              "    <i class='blue open mobile icon'></i> Send SMS" +
              "  </a>" +
              "<!--" +
              "<div class='right menu'>" +
              "    <a href='#sent-message-history' class='ui item'>" +
              "      <i class='history icon'></i> History" +
              "    </a>" +
              "  </div>" +
              "-->" +
              "</div></div>", class:"l-pad-2 s-pad-1"});

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget wix-textbox w3-card l-width-xl m-width-xl curve'>" +
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
              "<td><label><input id='customers' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Customers</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='staff' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Staff</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='guests' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Guests</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='subscribers' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Subscribers</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='contactus' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>Contact Us form</label></td>" +
              "</tr>" +
              "<tr>" +
              "</tbody>" +
              "</table>" +
              "</div> " +
              "<div class='l-pad-1' style=''>" +
              "<div class='ui form'>" +
              "<div class='field'>" +
              "<textarea id='open-contacts' class='wix-textbox' rows='5' style='font-family: Lato;' " +
              "placeholder='Add emails sepearted with coma (,) or new line'></textarea>" +
              "</div>" +
              "</div>" +
              "</div> " +
              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m8 s12'>" +
              "<div class='widget w3-card pad-2 curve'>" +
              "<div style='margin-bottom: 10px;'>" +
              "<div class='ui buttons'>" +
              "<button class='ui basic compact small sleak button' onclick='loadEmailTemplatelist()'>Import email template</button> " +
              "<button class='ui basic blue-text compact small sleak button' onclick='showMessageTags()'>Message Tags</button>" +
              "</div> " +
              "</div>" +
              "<div class='ui fluid right labeled input'>" +
              "<input id='from-email' class='wix-textbox' placeholder='From Email'/>" +
              "<label id='email-domain-con' class='ui label'></label> " +
              "</div> " +
              "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
              "<label class='ui sleak label'>From Name</label>" +
              "<input id='from-name' class='wix-textbox' placeholder='' value='"+$("#business-name").val()+"' type='text'/>" +
              "</div> " +
              "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
              "<label class='ui sleak label'>Reply To</label>" +
              "<input id='reply-to-email' class='wix-textbox' value='"+$("#business-email").val()+"' type='text'/>" +
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
      _page({ add: pageTop({ icon: "paper plane", text: "Send Messages" }), clear: true });

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='ui secondary  menu'>" +
              "  <a href='#send-messages' class='item'>" +
              "    <i class='blue at icon'></i> Send Emails" +
              "  </a>" +
              "  <a class='item active'>" +
              "    <i class='blue open mobile icon'></i> Send SMS" +
              "  </a>" +
              "<!--" +
              "  <div class='right menu'>" +
              "    <a href='#sent-message-history' class='ui item'>" +
              "      <i class='history icon'></i> History" +
              "    </a>" +
              "  </div>" +
              "-->" +
              "</div></div>", class:"l-pad-2 s-pad-1"});

      _page({add:"<div class='l-width-9' style='margin: auto;'> " +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget wix-textbox w3-card l-width-xl m-width-xl curve'>" +
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
              "<td><label><input id='customers' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Customers</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='staff' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Staff</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='guests' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Guests</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='subscribers' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>All Subscribers</label></td>" +
              "</tr>" +
              "<tr>" +
              "<td><label><input id='contactus' class='filled-in contact-list-item' type='checkbox'/><span></span></label></td>" +
              "<td><label>Contact Us form</label></td>" +
              "</tr>" +
              "<tr>" +
              "</tbody>" +
              "</table>" +
              "</div> " +
              "<div class='l-pad-1' style=''>" +
              "<div class='ui form'>" +
              "<div class='field'>" +
              "<textarea id='open-contacts' class='wix-textbox' rows='5' style='font-family: Lato;' " +
              "placeholder='Add emails sepearted with coma (,) or new line'></textarea>" +
              "</div>" +
              "</div>" +
              "</div> " +
              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m8 s12'>" +
              "<div class='widget w3-card pad-2 curve'>" +

              "<div style='margin-bottom: 10px;'>" +
              "<div class='ui buttons'>" +
              "<button class='ui basic compact small sleak button' onclick='loadSMSTemplatelist()'>Import email template</button> " +
              "<button class='ui basic blue-text compact small sleak button' onclick='showMessageTags()'>Message Tags</button>" +
              "</div> " +
              "</div>" +

              "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
              "<label class='ui sleak label'>From Name</label>" +
              "<input id='from-name' class='wix-textbox' value='"+$("#business-name").val()+"' type='text'/>" +
              "</div> " +

              "<div class='ui form' style='margin-top: 10px;'>" +
              "<div class='field'>" +
              "<textarea class='wix-textbox' rows='5' placeholder='Write message' id='sms-body'></textarea>" +
              "</div> " +
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
  /*------------------------   Frozen for latter
  function DrawSentMessagesHistory()
  {
      _page({ add: pageTop({ icon: "history", text: "Sent messages" }), clear: true });
  }
  ---------------------------*/
  function DrawReminders()
  {
      _page({ add: pageTop({ icon: "bell", text: "Schedule messages" }), clear: true });

      _page({add:
              "<div style='margin: auto;'>" +

              div({add: "<div class=''>" +
                      "<div class='l-align-r'>" +
                      "<div class=''>" +
                      "<a href='#new-shchedule'><button class='ui sleak blue-back button'>New Schedule</button></a>" +
                      "<a href='#new-event-listener'><button class='ui sleak blue-back button'>New Event</button></a>" +
                      "</div>" +
                      "</div></div>", class:'l-margin-b-2'}).outerHTML +

              "<div class='w3-row'>" +
              "<div class='w3-col l2 m2 s12'>" +
              "<div class='widget l-width-xl m-width-l w3-card l-margin-t-9 curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l12 m12 s12 l-pad-3 align-c' style=''>" +
              "<h1 id='schedule-count-con' class='sleak blue-text' style='margin-top: 50px;'>0</h1>" +
              "<h6 class='sleak'>Schedules</h6>" +
              "</div>" +
              "<div class='w3-col l12 m12 s12 l-pad-3 align-c'>" +
              "<h1 id='event-count-con' class='sleak blue-text'>0</h1>" +
              "<h6 class='sleak'>Events</h6>" +
              "</div>" +
              "</div>" +
              "<div class='pad-1 align-c'>" +

              "<span class='chart' id='completed-schedule' data-percent='0' data-scale-color='#ffb400'><span class='percent'></span></span>" +

              "</div>" +
              "<div class='pad-1'>" +
              "<h6 class='sleak' style='color: dimgray; text-align: center; font-weight: bold;'>Executed schedules</h6> " +
              "</div>" +
              "<br/>" +

              "</div> " +
              "</div>" +
              "<div class='w3-col l5 m5 s12'>" +

              "<div class='pad-1 l-width-xl'>" +
              "<h3 class='sleak' style='font-weight: bold; color: dimgray;'>" +
              "<i class='calendar blue alternate outline icon'></i>Schedules</h3>" +
              "<div class='ui secondary pointing menu'>" +
              "  <a id='user-schedule-tab' class='active schedule-tab item' onclick='switchScheduleTab(this)'>" +
              "     <i class='user circle blue-text icon'></i> User schedules" +
              "  </a>" +
              "  <a id='system-schedule-tab' class='schedule-tab item' onclick='switchScheduleTab(this)'>" +
              "     <i class='microchip green-text icon'></i> System Schedules" +
              "  </a>" +
              "</div>" +
              "</div>" +

              "<div id='schedule-table' class='l-width-xl m-width-l'>" +
              "</div> " +

              "<div class='w3-row widget curve w3-card l-width-xl' style='margin-top: 5px;'>" +

              "<div class='w3-col l2 m3 s3 pad-1' style=''>" +
              "<div id='schedule-perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l10 m9 s9 pad-1'>" +
              "      <div id='schedule-pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +


              "</div>" +
              "<div class='w3-col l5 m5 s12'>" +


              "<div class='pad-1'>" +
              "<h3 class='sleak' style='font-weight: bold; color: dimgray;'>" +
              "<i class='code blue icon'></i>Events</h3>" +
              "<div class='ui secondary pointing menu'>" +
              "  <a id='user-event-tab' class='active event-tab item' onclick='switchEventTab(this)'>" +
              "     <i class='user circle blue-text icon'></i> User events" +
              "  </a>" +
              "  <a id='system-event-tab' class='event-tab item' onclick='switchEventTab(this)'>" +
              "     <i class='microchip green-text icon'></i> System events" +
              "  </a>" +
              "</div>" +
              "</div>" +


              "<div id='event-table'>" +
              "</div>" +


              "<div class='w3-row widget curve w3-card' style='margin-top: 5px;'>" +

              "<div class='w3-col l2 m3 s3 pad-1' style=''>" +
              "<div id='event-perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l10 m9 s9 pad-1'>" +
              "      <div id='event-pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +

              "</div>" +


              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      populateSchedule();
      populateEvent();
  }

  function DrawNewEventListner()
  {
      _page({ add: pageTop({ icon: "code", text: "Create event listener" }), clear: true });

            let d = new Date();

            let days = "<option value='0'>Every day</option>";
            for(let i = 0; i < 31; i++)
            {
              days += "<option value='"+(i + 1)+"'>"+(i + 1)+"</option>";
            }


            let years = "<option value='0'>Every year</option>";
            for(let j = d.getFullYear(); j < (d.getFullYear() + 10); j++)
            {
              years += "<option value='"+j+"'>"+j+"</option>";
            }


            _page({add:"<div class='l-width-7' style='margin: auto;'>" +
                "<div class='widget w3-card pad-2'>"+

                    "<input id='event-id' type='hidden' value=''/>" +
                    "<input id='event-status' type='hidden' value='true'/>" +

                    "<br/><br/>" +
                    "<div class='l-width-8' style='margin: auto;'>"+

                    "<h2 class='sleak' style='font-weight: bold; color: dimgray;'>"+
                        "<i class='code icon'></i> Create an event listener" +
                    "</h2>" +

                    "<label class='sleak' style='font-weight: bold; color: dimgray;'>Event title</label>" +
                    "<div class='ui fluid input'><input id='event-title' class='wix-textbox' type='text' placeholder='Event title'/>"+
                    "</div><br/>" +

                    "<label class='sleak' style='font-weight: bold; color: dimgray;'>Select message</label>" +
                    "<select id='message-template' class='ui search fluid wix-select dropdown'>"+
                    "<option value=''>Select message</option>" +
                    "</select><br/><br/><br/>" +

                    "<label class='sleak' style='font-weight: bold; color: dimgray;'>Select event</label>" +
                    "<select id='event' class='ui fluid wix-select dropdown'>"+
                    "<option value='101'>Guest checked in</option>" +
                    "<option value='102'>Guest checked out</option>" +
                    "<option value='103'>Guest stays 25%</option>" +
                    "<option value='104'>Guest stays 50%</option>" +
                    "<option value='105'>Guest stays 75%</option>" +
                    "<option value='106'>Guest stays 100%</option>" +
                    "<option value='107'>Saff loggedIn</option>" +
                    "<option value='108'>Customer loggedIn</option>" +
                    "<option value='109'>Customer creates account</option>" +
                    "<option value='201'>Staff is added</option>" +
                    "<option value='202'>Staff signs in at the hotel</option>" +
                    "<option value='203'>Its users birthday</option>" +
                    "<option value='204'>Customer completes reservation</option>"+
                    "<option value='205'>Customer cancels reservation</option>" +
                    "<option value='206'>1 day to Customers arrival</option>" +
                    "<option value='207'>2 days to customers arrival</option>" +
                    "<option value='208'>1 week to customers arrival</option>" +
                    "<option value='209'>Coupon is used</option>" +
                    "<option value='301'>Staff logs out</option>" +
                    "<option value='302'>Customer logs out</option>" +
                    "<option value='303'>User sends message</option>" +
                    "<option value='304'>Guest makes order while lodging</option>" +
                    "<option value='305'>User Completes review</option>" +
                    "<option value='306'>Customer updates info</option>" +
                    "<option value='307'>Guest orders food while lodging</option>" +
                    "<option value='308'>Guest orders drink while lodging</option>" +
                    "<option value='309'>Guest orders pastry while lodging</option>" +
                    "<option value='401'>Guest orders laundry while lodging</option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "<option></option>" +
                    "</select>" +


                    "<div class='w3-row'>" +
                    "<div class='w3-col l8 m8 s12'>" +
                    "<div class='ui fluid labeled input' style='margin-top: 3px;'>" +
                    "<label class='ui sleak blue w3-card-4 label'>Delay for</label>" +
                    "<label class='ui sleak blue label' style='border-radius: 0px;'>Hour(s)</label>" +
                    "<input id='delay-hours' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
                    "<label class='ui blue-back sleak label' style='border-radius: 0px;'>Min(s)</label>" +
                    "<input id='delay-mins' class='wix-textbox' type='text' value='00' style='border-radius: 0px 4px 4px 0px;'/>" +
                    "</div>" +
                    "</div>" +
                    "</div><br/><br/><br/>" +


                    "<h3 class='sleak' style='font-weight: bold;'><i class='address book outline icon'></i>Add Contacts</h5>" +

                    "<label class='ui fluid input'><input id='context-user' class='filled-in' type='checkbox'/>"+
                    "<span class='sleak' style='color: dimgray; font-weight: bold;'>"+
                    "Send to the user in the event context</span></label><br/>" +

                    "<div id='contact-list-con'></div>" +

                    "<div class='ui fluid blue buttons'>"+
                    "<button id='guest-contact-btn' class='ui button' onclick='addContact(this)'><i class='group icon'></i> Guests</button>" +
                    "<button id='customers-contact-btn' class='ui button' onclick='addContact(this)'><i class='user circle icon'></i> Customers</button>" +
                    "<button id='staff-contact-btn' class='ui button' onclick='addContact(this)'><i class='male icon'></i> Staff</button>" +
                    "</div>" +
                    "<div class='ui fluid blue buttons' style='margin-top: 3px;'>"+
                    "<button id='subscribers-contact-btn' class='ui button' onclick='addContact(this)'><i class='at icon'></i> Subscribers</button>" +
                    "<button id='contactus-contact-btn' class='ui button' onclick='addContact(this)'><i class='open envelope icon'></i> Contact form</button>" +
                    "<button id='custom-contact-btn' class='ui button' onclick='addContact(this)'><i class='list icon'></i> Custom list</button>" +
                    "</div>"+
                    "<div class='ui form' style='margin-top: 3px;'>"+
                    "<div class='field'>" +
                    "<textarea id='contact-collection' rows='2' class='wix-textbox' style='font-family: Lato;'"+
                    "placeholder='Add contact list seprated by a coma (,) or a new line'>"+
                    "</textarea>" +
                    "</div>" +
                    "</div>" +

                    "<br/><br/>" +


                    "<br/><br/>" +
                    "<button id='event-btn' class='ui blue sleak button' onclick='saveEvent()'>Save event</button>" +

                    "</div>" +
                    "<br/>" +
                "</div>" +
                "</div>", class:"l-margin-t-9 l-margin-b-6"});

                $(".ui.dropdown").dropdown();

                list({ con: getElement("message-template"), job: 'list message template', all: true });

            let arg = getArg();
            if(arg != null)
            {
                loadEditEvent(arg);
            }
  }

  function DrawEventDetails()
  {
      _page({ add: pageTop({ icon: "code", text: "Event details" }), clear: true });

      _page({add:div({add:"<div id='event-data-con-1' class='l-margin-t-5 widget pad-2 curve w3-card'></div>",
              class:"l-width-7", style:"margin: auto;"})});

      _page({add:div({add:"<div id='event-data-con-2' class='l-margin-t-t widget pad-2 curve w3-card'></div>",
              class:"l-width-7", style:"margin: auto;"})});

      _page({add:div({add:"<div id='event-data-con-3' class='l-margin-t-t margin-b-7 widget pad-2 curve w3-card'></div>",
              class:"l-width-7", style:"margin: auto; padding-bottom: 20px;"})});

      let arg = getArg();
      if(arg != null)
      {
          loadEventData(arg);
      }
      else
      {
          localtion.hash = "#reminders";
          ShowModal("Invalid event id");
      }
  }
  function DrawScheduleDetail()
  {
      _page({ add: pageTop({ icon: "calendar alternate outline", text: "Schedule details" }), clear: true });

      _page({add:div({add:"<div id='event-data-con-1' class='l-margin-t-5 widget pad-2 curve w3-card'></div>",
              class:"l-width-7", style:"margin: auto;"})});

      _page({add:div({add:"<div id='event-data-con-2' class='l-margin-t-t widget pad-2 curve w3-card'></div>",
              class:"l-width-7", style:"margin: auto;"})});

      _page({add:div({add:"<div id='event-data-con-3' class='l-margin-t-t margin-b-7 widget pad-2 curve w3-card'></div>",
              class:"l-width-7", style:"margin: auto; padding-bottom: 20px;"})});

      let arg = getArg();
      if(arg != null)
      {
          loadScheduleData(arg);
      }
      else
      {
          localtion.hash = "#reminders";
          ShowModal("Invalid schedule id");
      }
  }
  function DrawSchedule()
  {
      _page({ add: pageTop({ icon: "calendar alternate outline", text: "Schedule messages" }), clear: true });

      let d = new Date();

      let days = "<option value='0'>Every day</option>";
      for(let i = 0; i < 31; i++)
      {
        days += "<option value='"+(i + 1)+"'>"+(i + 1)+"</option>";
      }


      let years = "<option value='0'>Every year</option>";
      for(let j = d.getFullYear(); j < (d.getFullYear() + 10); j++)
      {
        years += "<option value='"+j+"'>"+j+"</option>";
      }


      _page({add:"<div class='l-width-7' style='margin: auto;'>" +
          "<div class='widget w3-card pad-2'>"+

              "<input id='schedule-id' type='hidden' value=''/>" +
              "<input id='schedule-status' type='hidden' value='true'/>" +

              "<br/><br/>" +
              "<div class='l-width-8' style='margin: auto;'>"+

              "<h2 class='sleak' style='font-weight: bold; color: dimgray;'>"+
                  "<i class='calendar outline alternate icon'></i> Schedule a message for later" +
              "</h2>" +

              "<label class='sleak' style='font-weight: bold; color: dimgray;'>Schedule title</label>" +
              "<div class='ui fluid input'><input id='schedule-title' class='wix-textbox' type='text' placeholder='Schedule title'/></div><br/><br/>" +

              "<label class='sleak' style='font-weight: bold; color: dimgray;'>Select message</label>" +
              "<select id='message-template' class='ui search fluid wix-select dropdown'>"+
              "<option value=''>Select message</option>" +
              "</select><br/><br/><br/>" +

              "<div class='ui fluid action labeled input'>" +
              "<label class='ui blue w3-card-4 sleak label'>Set year</label>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>Year</label>" +
              "<select id='schedule-year' class='ui wix-select compact selection dropdown'>"+years+"</select>" +
              "</div><br/>" +

              "<div class='ui fluid action labeled input'>" +
              "<label class='ui blue w3-card-4 sleak label'>Set Day / Month</label>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>Day</label>" +
              "<select id='schedule-day' class='ui wix-select compact selection dropdown'>"+days+"</select>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>Month</label>" +
              "<select id='schedule-month' class='ui wix-select compact selection dropdown'>" +
              "<option value='0'>Every month</option>" +
              "<option value='1'>January</option>" +
              "<option value='2'>Febuary</option>" +
              "<option value='3'>March</option>" +
              "<option value='4'>April</option>" +
              "<option value='5'>May</option>" +
              "<option value='6'>June</option>" +
              "<option value='7'>July</option>" +
              "<option value='8'>August</option>" +
              "<option value='9'>September</option>" +
              "<option value='10'>October</option>" +
              "<option value='11'>November</option>" +
              "<option value='12'>December</option>" +
              "</select>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l7 m8 s12'>" +
              "<div class='ui fluid action labeled input' style='margin-top: 3px;'>" +
              "<label class='ui sleak blue w3-card-4 label'>Set time</label>" +
              "<select id='schedule-hour' class='ui wix-select compact selection dropdown'>" +
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
              "<label class='ui blue-back label' style='border-radius: 0px;'>:</label>" +
              "<input id='schedule-min' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
              "<select id='schedule-gmt' class='ui wix-select compact selection dropdown'>" +
              "<option>am</option>" +
              "<option>pm</option>" +
              "</select>" +
              "</div>" +
              "</div>" +
              "</div><br/><br/><br/>" +

              "<label class='ui fluid input'><input id='indefinit-exec' class='filled-in' type='checkbox' onChange='execNumChanged(this)'/>" +
              "<span>Run indefinitly</span></label>" +
              "<div id='exec-count-con' class='ui labeled input'>"+
              "<label class='ui blue w3-card-4 label'>Number of executions</label>" +
              "<input id='exec-count' class='wix-textbox' type='number'min='1' value='1'/>" +
              "</div><br/><br/><br/>" +

              "<label class='ui fluid input'><input id='auto-delete' class='filled-in' type='checkbox'/><span>Automatically delete on completion</span></label><br/>" +


              "<h3 class='sleak' style='font-weight: bold;'><i class='address book outline icon'></i>Add Contacts</h3>" +

              "<div id='contact-list-con'></div>" +

              "<div class='ui fluid blue buttons'>"+
              "<button id='guest-contact-btn' class='ui button' onclick='addContact(this)'><i class='group icon'></i> Guests</button>" +
              "<button id='customers-contact-btn' class='ui button' onclick='addContact(this)'><i class='user circle icon'></i> Customers</button>" +
              "<button id='staff-contact-btn' class='ui button' onclick='addContact(this)'><i class='male icon'></i> Staff</button>" +
              "</div>" +
              "<div class='ui fluid blue buttons' style='margin-top: 3px;'>"+
              "<button id='subscribers-contact-btn' class='ui button' onclick='addContact(this)'><i class='at icon'></i> Subscribers</button>" +
              "<button id='contactus-contact-btn' class='ui button' onclick='addContact(this)'><i class='open envelope icon'></i> Contact form</button>" +
              "<button id='custom-contact-btn' class='ui button' onclick='addContact(this)'><i class='list icon'></i> Custom list</button>" +
              "</div>"+
              "<div class='ui form' style='margin-top: 3px;'>"+
              "<div class='field'>" +
              "<textarea id='contact-collection' rows='2' class='wix-textbox' style='font-family: Lato;'"+
              "placeholder='Add contact list seprated by a coma (,) or a new line'>"+
              "</textarea>" +
              "</div>" +
              "</div>" +

              "<br/><br/>" +


              "<br/><br/>" +
              "<button id='schedule-btn' class='ui blue sleak button' onclick='saveSchedule()'>Save schedule</button>" +

              "</div>" +
              "<br/>" +
          "</div>" +
          "</div>", class:"l-margin-t-9 l-margin-b-6"});

          $(".ui.dropdown").dropdown();

          list({ con: getElement("message-template"), job: 'list message template', all: true });

      let arg = getArg();
      if(arg != null)
      {
          loadEditSchedule(arg);
      }
  }
  function DrawReceivedMessage()
  {
      _page({ add: pageTop({ icon: "envelope open", text: "Received Messages" }), clear: true });

      _page({add:
              "<div class='l-width-l' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l3 m4 s12'>" +
              "<div class='widget l-width-l m-width-xl curve l-margin-t-6'>" +
              "<div class='pad-2' style='border-radius: 4px 4px 0px 0px;'>" +
              "<h3 style='display: inline; font-weight: normal; color: dimgray;' class='sleak'>" +
              "<i class='open envelope icon'></i> Received Messages" +
              "</h3>" +
              "</div><hr style='margin: 0px;'/> " +
              "<div class=''>" +
              "<div id='all-messge-tab' class='minor-menu message-menu-item active pad-1' onclick='selectMessagetab(this)'>" +
              "<label id='all-count-con' class='ui circular label' style='float: right;'>0</label>" +
              "<label><small><i class='blue circle icon'></i></small> All</label>" +
              "</div>" +
              "<div id='unresolved-messge-tab' class='minor-menu message-menu-item pad-1' onclick='selectMessagetab(this)'>" +
              "<label id='unresolved-count-con' class='ui circular label' style='float: right;'>0</label>" +
              "<label><small><i class='red circle icon'></i></small> Unresolved</label>" +
              "</div>" +
              "<div id='resolved-messge-tab' class='minor-menu message-menu-item pad-1' onclick='selectMessagetab(this)'>" +
              "<label id='resolved-count-con' class='ui circular label' style='float: right;'>0</label>" +
              "<label><small><i class='green circle icon'></i></small> Resolved</label>" +
              "</div>" +
              "<div id='stared-messge-tab' class='minor-menu message-menu-item pad-1' onclick='selectMessagetab(this)'>" +
              "<label id='stared-count-con' class='ui circular label' style='float: right;'>0</label>" +
              "<label><small><i class='yellow circle icon'></i></small> Stared</label>" +
              "</div>" +

              "</div> " +
              "</div> " +
              "</div>" +
              "<div class='w3-col l9 m8 s12'>" +

              div({add:DrawSearch({method:"populateReceivedMessages"}).outerHTML, class:'l-margin-b-2'}).outerHTML +

              "<div class='w3-row widget curve'>" +
              "<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid transparent;'>" +
              "<label class=''><input id='main-sel' type='checkbox'  onchange='CheckAll(this)'/><span>SN</span></label> " +
              "</div> " +
              "<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style=''>" +
              "<div class='align-c'><i class='star icon' style='color: lightgray;'></i></div> " +
              "</div> " +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<div class=''><label class='status'>Status</label></div> " +
              "</div> " +
              "<div class='w3-col l5 m4 s12 l-pad-2 s-pad-1'>" +
              "<div class=''><label>Body</label></div> " +
              "</div> " +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<div class='align-r'><label>Delete</label></div> " +
              "</div> " +
              "</div>" +
              "<div id='table-body' class=''>" +


              "</div> " +
              "<div class='w3-row widget curve' style='margin-top: 5px;'>" +

              "<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid transparent;'>" +
              "<div class='ui icon top left pointing dropdown button'>" +
              "<i class='wrench blue icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Group Action</div>" +
              "<div class='item' onclick='ConfirmGroupMessageDelete()'>Delete</div>" +
              "</div>" +
              "</div>" +
              "</div>" +

              "<div class='w3-col l2 m3 s12 l-pad-2 s-pad-1' style=''>" +
              "<div id='perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l8 m7 s12 l-pad-2 s-pad-1'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +
              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      populateReceivedMessages();
  }
  function DrawOpenMessage()
  {
      _page({ add: pageTop({ icon: "open envelope", text: "Read Message" }), clear: true });

      _page({add:
              "<div class='l-width-l' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m5 s12'>" +
              "<div id='message-info' class='widget w3-card l-pad-2 s-pad-1 l-width-l m-width-xl curve'>" +


              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m7 s12'>" +
              "<div id='message-body' class='w3-row widget w3-card curve l-pad-2 s-pad-1'>" +

              "</div>" +
              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      let arg = getArg();
      if(arg == null)
      {
          location.hash = "#received-message";
          ShowModal("Invalid message");
      }
      else
      {
          loadMessage(arg);
      }
  }
  function DrawMessageSettings()
  {
      _page({ add: pageTop({ icon: "cog", text: "Message Settings" }), clear: true });
      
      _page({add:div({add:


                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateMessageSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +


                  "<div class='l-margin-t-2'>" +
                  "<div class='w3-col l6 m6 s12'>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>SMS Units</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l4 m6 s12'>" +
                  "<div class='ui small statistics' style='margin-top: 20px;'>" +
                  "<div class='statistic'>" +
                  "<div id='sms-unti-con' class='value sleak'>0</div>" +
                  "<div class='label sleak'><span class='settings-text'>Units</span></div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l8 m6 s12'>" +
                  "<div class=''>" +
                  "<p class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>2 units is charged for every SMS sent by the system. </span>" +
                  "<span class='settings-text'>Emailing is completely free</span></p>" +
                  "<a id='buy_units_link' target='_blank'>" +
                  "<button class='ui compact settings-control w3-button green button'>Buy Units</button>" +
                  "</a>" +
                  "</div>" +
                  "</div>" +
                  "</div><br/>" +


                  "<h6 class='sleak' style='font-weight: bold;'><small>Integrate Ononiru messaging</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class=''>" +
                  "<p class='sleak' style='font-weight: bold; line-height: 170%; color: dimgray;'>" +
                  "<span class='settings-text'>You can connect your system to Ononiru SMS and mail client </span>" +
                  "<span class='settings-text'>for better control of your </span>" +
                  "<span class='settings-text'>email / SMS marketing and campaigns. To begin, visit Ononiru</span>" +
                  "<span class='settings-text'> and get an API key</span></p>" +
                  "<div class='ui fluid input'>" +
                  "<input id='ononiru-message-api-key' class='wix-textbox settings-control' type='text' " +
                  "placeholder='API key' onchange='saveMessageSettings(this)'/>" +
                  "</div><br/>" +
                  "<button id='api-connect-button' class='ui button' onclick='connectOnoniruMessaging()'>Connect</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low unit alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>Get notified when your sms units gets low to avoid delays </span>" +
                  "<span class='settings-text'>in sending SMS </span></small></h6><br/> " +
                  "<div class='ui small labeled input'>" +
                  "<label class='ui blue sleak label'>Low point</label>" +
                  "<input id='low-uint-point' class='wix-textbox settings-control' type='number' min='0' value='1' onchange='saveMessageSettings(this)'/>" +
                  "</div><br/><br/>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small><span class='settings-text'>Phone number to notify</span></small></h6> " +
                  "<div class='ui input'>" +
                  "<input id='low-unit-phone' class='wix-textbox settings-control' type='text' placeholder='Phone number' onchange='saveMessageSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Handle unresolved message tags</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='remove-tag' class='with-gap settings-control' name='tag-handle' type='radio' onchange='saveMessageSettings(this)'/>" +
                  "<span><span class='settings-text'>Remove tag</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='leave-tag' class='with-gap settings-control' name='tag-handle' type='radio' onchange='saveMessageSettings(this)'/>" +
                  "<span><span class='settings-text'>Leave tag in place</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cancel-tag' class='with-gap settings-control' name='tag-handle' type='radio' onchange='saveMessageSettings(this)'/>" +
                  "<span><span class='settings-text'>Don't send message</span></span>" +
                  "</label>" +
                  "</div>" +

                  "</div>" +

                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateMessageSettings();
  }
  function DrawSalesReport()
  {
      _page({ add: pageTop({ icon: "shopping basket", text: "Sales Report" }), clear: true });

      _page({add:"<div class='ui secondary  menu'>" +
              "  <a class='active item'>" +
              "     Today" +
              "  </a>" +
              "  <a class='item'>" +
              "    Messages" +
              "  </a>" +
              "  <a class='item'>" +
              "    Friends" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui icon input'>" +
              "        <input type='text' placeholder='Search...'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "    <a class='ui item'>" +
              "      Logout" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"pad-2"});
  }
  function DrawFinancialReport()
  {
      _page({ add: pageTop({ icon: "money", text: "Financial Report" }), clear: true });
  }
  function DrawCustomersReport()
  {
      _page({ add: pageTop({ icon: "users", text: "Customers Report" }), clear: true });
  }
  function DrawBusinessAnalytics()
  {
      _page({ add: pageTop({ icon: "server", text: "Business Analytics" }), clear: true });

      _page({add:
              "<div class='pad-2 widget w3-card'>" +
              "<h1 class='sleak blue' style='font-size: 3em;'>1.3</h1>" +
              "<h4 class='sleak' style='color: dimgray; margin: 0px;'>" +
              "Business performance index</h4>" +
              "</div>"})
  }
  function DrawGeneralReport()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "General Report" }), clear: true });

      let row = document.createElement("div");
      row.className = "w3-row l-pad-2";
      row.style.paddingBottom = "0px";

      row.innerHTML = "<div class='w3-col l3 m6 s12 l-pad-1 s-pad-1'><div class='widget curve w3-card l-pad-1 s-pad-1'>" +
          "<h6 class='sleak' style='color: dimgray;'>Customers</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='blue sleak' style=''> 542,245" +
          "<div class='icon-block blue-back' style='float: right;'>" +
          "<i class='users icon' style=''></i></div></h3></div><div class='content'><br/>" +
          "</div></h3></div></div>" +


          "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-1'>" +
          "<h6 class='sleak' style='color: dimgray;'>Guests</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='yellow sleak' style=''> 243,422" +
          "<div class='icon-block yellow-back' style='float: right;'>" +
          "<i class='shopping basket icon' style=''></i></div></h3></div><div class='content'>" +
          "<br/>" +
          "</div></h3></div></div>" +


          "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-1'>" +
          "<h6 class='sleak' style='color: dimgray;'>Reservations</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='green sleak' style=''> 1,221" +
          "<div class='icon-block green-back' style='float: right;'>" +
          "<i class='user circle icon' style=''></i></div></h3></div><div class='content'>" +
          "<br/>" +
          "</div></h3></div></div>" +


          "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget curve w3-card l-pad-1'>" +
          "<h6 class='sleak' style='color: dimgray;'>Staff</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='red sleak' style=''> 223,1" +
          "<div class='icon-block red-back' style='float: right;'>" +
          "<i class='tag icon' style=''></i></div></h3></div><div class='content'>" +
          "<br/>" +
          "</div></h3></div></div>";

      document.getElementById("page").appendChild(row);



      _page({add:"<div class=''>" +
              "<div class='width-xl' style='margin: auto;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l5 m12 s12'>" +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget pad-1 curve w3-card align-c'>" +
              "<div id='' style=''>" +
              "<h2 class='ui sleak-b '><i class='calendar alternate circular green icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>300</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Checked-in Today</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1 align-c'>" +
              "<div id='' class='' style=''>" +
              "<h2 class='ui sleak-b '><i class='bed circular red icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>550</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Checked-out Today</h6>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1 align-c'>" +
              "<div id='' class='' style=''>" +
              "<h2 class='ui sleak-b '><i class='bed circular green icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>450</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Reservations</h6>" +
              "</div> " +
              "</div>" +
              "</div> " +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1 align-c'>" +
              "<div id='' class='' style=''>" +
              "<h2 class='ui sleak-b '><i class='bed circular blue icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>300</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Currently Lodged</h6>" +
              "</div> " +
              "</div>" +
              "</div> " +
              "</div>" +
              "<div class='w3-col l7 m12 s12'>" +

              "<div class='widget curve w3-card pad-1 margin-t-1' style='min-height: 337px;'></div>" +

              "</div> " +
              "</div>" +

              "</div>" +
              "</div>", class:""});



      _page({add:"<div class=''>" +
              "<div class='width-xl' style='margin: auto;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l5 m6 s12 pad-1'>" +
              "<div class='widget pad-1 curve w3-card'>" +
              "<h6 class='sleak'>Revenue sources</h6><hr/>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Lodging</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div>" +
              "<label></label> " +
              "</div>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Restuarant POS</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div> " +
              "</div>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Bakery POS</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div> " +
              "</div>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Bar POS</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div> " +
              "</div>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Laundry POS</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div> " +
              "</div>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Pool POS</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div> " +
              "</div>" +
              "<label style='color: dimgray; float: right;'>0%</label>" +
              "<label style='color: dimgray;'>Others POS</label>" +
              "<div class='ui tiny indicating progress' data-percent='0' style='margin: 0px; padding: 0px; margin-bottom: 20px;'>" +
              "<div class='bar'></div> " +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue / Expenditure</h6><hr/>" +
              "<div id='revenue-graph' class='' style='min-height: 315px;'></div> " +
              "</div>" +
              "</div>" +
              "</div>" +

              "</div>" +
              "</div>", class:""});


      _page({add:"<div class=''>" +
              "<div class='width-xl' style='margin: auto;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget pad-1 curve w3-card'>" +
              "<h6 class='sleak'>Revenue sources</h6><hr/>" +
              "<div id='donut-1' style='min-height: 280px;'></div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue</h6><hr/>" +
              "<div id='donut-2' class='' style='min-height: 280px;'></div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue</h6><hr/>" +
              "<div id='donut-3' class='' style='min-height: 280px;'></div> " +
              "</div>" +
              "</div> " +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget curve w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue</h6><hr/>" +
              "<div id='donut-4' class='' style='min-height: 280px;'></div> " +
              "</div>" +
              "</div> " +
              "</div>" +

              "</div>" +
              "</div>", class:""});


      loadHomeData();

      //$(".ui.progress").progress();
  }
  function DrawEventLog()
  {
      _page({ add: pageTop({ icon: "edit", text: "Event Log" }), clear: true });

      _page({add:
              "<div class='w3-col l6 m9 s12 s-pad-1 l-pad-2'>" +

              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 s-pad-1 l-pad-2 align-r'>"+DrawSearch({Method:""}).outerHTML+"</div>",
          class:"w3-row"});


      _page({add:DrawTable(["Date","Event","Source","Description"]).outerHTML,
          class:"s-pad-1 l-pad-2 m-pad-2"});


      $('[data-toggle="datepicker"]').datepicker({autoHide:true});
      $(".ui.dropdown").dropdown();

      dateSpan("periodspan", {onChange:function(start, stop){
              populateEventLog();
          }});
  }
  function DrawSystemLog()
  {
      _page({ add: pageTop({ icon: "bug", text: "System Log" }), clear: true });

      _page({add:
              "<div class='w3-col l6 m9 s12 s-pad-1 l-pad-2'>" +

              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 s-pad-1 l-pad-2 align-r'>"+DrawSearch({Method:"populateSystemLog"}).outerHTML+"</div>",
          class:"w3-row"});


     _page({add:DrawTable(["Date","Event","Source","Description"]).outerHTML,
         class:"s-pad-1 l-pad-2 m-pad-2"});


      $('[data-toggle="datepicker"]').datepicker({autoHide:true});
      $(".ui.dropdown").dropdown();

      dateSpan("periodspan", {onChange:function(start, stop){
              populateSystemLog();
          }});
  }
  function DrawSuppliers()
  {
      _page({ add: pageTop({ icon: "group", text: "Suppliers" }), clear: true });

      _page({
          add: div({add:
                  "<div class='w3-col l6 m6 s12'>" +
                  DrawSearch({method:"populateSupplier"}).outerHTML +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12 align-r'>" +
                  "  <a href='#new-supplier' class=''>" +
                  "    <button class='ui button sleak blue-back'>Add supplier</button>" +
                  "  </a>" +
                  "</div>",
              class: "w3-row l-pad-2 s-pad-1"
          })
      });

      _page({ add: DrawTable(["Company", "Name", "Phone", "Email", "Address", "Action"],
              {GroupAction:[{Method:"ConfirmGroupSupplierDelete", Text:"Delete"},
                      {Method:"addGroupContacttoList", Text:"Add to contact list"}]}).outerHTML, class: "l-pad-2 s-pad-1" });

      $(".ui.dropdown").dropdown();
      populateSupplier();
  }
  function DrawAddSupplier()
  {
      _page({ add: pageTop({ icon: "group", text: "Add supplier" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='supplier-id' type='hidden' value=''/>" +

              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Company</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='company-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Phone</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'><i class='mobile icon'></i></label>" +
              "<input id='phone' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Email</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'><i class='at icon'></i></label>" +
              "<input id='email' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Contact person</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Name</label>" +
              "<input id='name' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>Surname</label>" +
              "<input id='surname' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Address</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui form'>" +
              "<textarea id='address' class='wix-textbox' rows='3' placeholder='Address'></textarea>" +
              "</div></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='supplier-save-btn' class='ui blue sleak button' onclick='saveSupplier()'>Save Supplier</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      let arg = getArg();

      if (arg != null) {
          $("#header-text").html("Edit supplier");
          loadEditSupplierData(arg);
      }
  }
  function DrawStoreInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Store Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});


      _page({add:div({add:
                  "<div class=''>" +


                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class=''>" +
                  "<div class='pad-2 align-r'>" +
                  "<div class='ui top right pointing dropdown basic blue circular button'>" +
                  "<i class='plus icon'></i> New Record" +
                  "<div class='menu'>" +
                  "<div class='header'>Records</div>" +
                  "<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
                  "<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
                  "<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
                  "<div class='ui divider'></div>" +
                  "<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
                  "<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
                  "</div>" +
                  "</div>" +

                  "<p style='color: dimgray; margin-top: 10px;'>" +
                  "Record detailed events on products usage, damages and increment" +
                  "</p>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
          class:"margin-t-2"});



      _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-store-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                  "<th colspan='1'>" +
                  "<div class='ui icon top left pointing dropdown button'>" +
                  "<i class='wrench blue icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Group Action</div>" +
                  "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                  "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                  "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                  "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                  "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                  "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawStoreInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Store Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

                  "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

                  "  </div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


                  "<div id='periodspan' class='ui labeled fluid input'>" +

                  "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
                  "<div class='text sleak'>This month</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='item'>This month</div>" +
                  "<div class='item'>Last month</div>" +
                  "<div class='item'>This year</div>" +
                  "<div class='item'>Last year</div>" +
                  "</div>" +
                  "</div>" +

                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
                  "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
                  "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                  "</div>" +


                  "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawStoreInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Store Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenStorePurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Store Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenStorePurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Store Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#bar-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenStoreQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#kitchen-price-enquiry";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawStoreInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Store Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/><span id='on-enquiry-page'></span>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawStoreInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Store Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenStoreAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddStoreInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Store Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='store_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawStoreReport()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Store Report" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateGeneralSettings()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-inventory-report' class='item active sleak' style='font-weight: bold;'>" +
              "     <i class='boxes blue icon'></i> Inventory" +
              "  </a>" +
              "  <a href='#kitchen-financial-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Financial report" +
              "  </a>" +
              "</div>"});

      _page({add:
              "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>", class:"w3-row"});


      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();
  }
  function DrawPool()
  {
      _page({ add: pageTop({ icon: "usd", text: "Pool POS" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='pool_item'/>"});


      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populatePOSReport()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populatePOSReport()'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>", class:"w3-row"});

      _page({add:
              "<div class='w3-col l12 m12 s12'>" +
              "<div class='w3-row pad-1'>" +
              "<div class='w3-col l6 m6 s6'>" +
              "<h4 class='sleak'>Pool sessions</h4>" +
              "</div>" +
              "<div class='w3-col l6 m6 s6 align-r'>" +
              "<a href='#new-pool-session'><button class='ui sleak blue button'>Add Session</button></a>" +
              "</div>" +
              "</div>" +
              "<div class='pad-1'>"+
              DrawTable(["Cloth type","Price","Sale frequency","Status","Action"],
                  {GroupAction:[{Text:"Delete", Method:"ConfirmGroupLaundryDelete"}]}).outerHTML+
              "</div>" +
              "</div>",
          class:"w3-row l-pad-1"});


      _page({add:div({add:
                  "<div class=''>" +
                  "<div class=''>" +
                  "<div class='widget curve w3-card wix-textbox pad-1 w3-row' style='margin-bottom: 3px;'>" +
                  "<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>POS User</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'><span class='status'>Status</span></div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Sold</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Total</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Paid</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Balance</h5>" +
                  "</div>" +
                  "</div>" +
                  "<div id='pos-list-con'>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:""})});


      _page({add:div({add:

                  "<div class='w3-row'>" +


                  "<div class='w3-col l12 m12 s12'> " +

                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class=''>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='general-total-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-items-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class=''  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-customers-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='margin-t-2'>" +
                  "<div class='widget curve w3-card'>" +
                  "<div class='pad-1 w3-container'>" +
                  "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average daily sale plot</h5>" +
                  "<button id='plot-customer' class='ui compact sleak right floated blue button' onclick=\"switchDailyPlotType('customer')\">Customers</button>" +
                  "<button id='plot-items' class='ui compact sleak right floated button' onclick=\"switchDailyPlotType('items')\">Items</button>" +
                  "</div>" +
                  "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 295px;'></div>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              populatePool();
          }});
  }
  function DrawPoolPOSTransactions()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pool POS Transactions" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='pool_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateUserPOSReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m7 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateUserPOSReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "<div class='w3-col l4 m3 s12 l-pad-2 s-pad-1 align-r'>" +
              "<h5 id='pos-user-name' class='sleak' style='font-weight: bold;'></h5>" +
              "</div>", class:"w3-row"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='total-sold-amount'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='sold-items-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='customers-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='width-xl' style='margin: auto;'>" +

                  "<h3 class='sleak load-slip' style='font: bold;margin-top: 10px;'>Payment method</h3>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato; font-weight: normal;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='cash-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Cash</label>" +
                  "<div id='cash-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='pos-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>POS</label>" +
                  "<div id='pos-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='web-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Online</label>" +
                  "<div id='web-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +


                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='others-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Others</label>" +
                  "<div id='others-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class=''>" +
                  "<div class='w3-row' style='margin: auto;'>" +


                  "<div>" +
                  "<table class='ui very padded basic table' style='background-color: white;'>" +
                  "<tr><th colspan='2'>Transaction details</th></tr>" +
                  "<tr><td>Total</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-sale'>0</span></span></td></tr>" +
                  "<tr><td>Paid</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-paid'>0</span></span></td></tr>" +
                  "<tr><td>Balance</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-balance'>0</span></span></td></tr>" +
                  "<tr><td>Rebate</td><td><span class='load-slip'>"+$("#currency-symbol").val()+"<span id='total-rebate'>0</span></span></td></tr>" +
                  "</table>" +
                  "</div>" +


                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +

                  "<h3 class='sleak' style='font: bold;margin-top: 10px;'>Order Channels</h3><br/>" +


                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>POS orders</h6>" +
                  "<h1 id='pos-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "<br/>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Web orders</h6>" +
                  "<h1 id='web-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<table class='ui structured selectable celled table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='9'>" +
                  "<div class='w3-row'>"+
                  "<div class='w3-col l6 m4 s4'>"+
                  DrawSearch({Method:"populateUserPOSTransactions"}).outerHTML+
                  "</div>" +
                  "<div class='w3-col l6 m8 s8 align-r'>"+
                  "<div class='ui secondary menu'>" +
                  "<div class='right menu'>" +
                  "<a class='active item trans-list-filter' onclick='switchTransLstFilter(this)'>All</a>" +
                  "<a id='staff-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Staff</a>" +
                  "<a id='customers-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Guest</a>" +
                  "<a id='others-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Others</a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th>sn</th>" +
                  "<th>Transaction id</th>" +
                  "<th>Items</th>" +
                  "<th>Total</th>" +
                  "<th>Paid</th>" +
                  "<th>Balance</th>" +
                  "<th>Channel</th>" +
                  "<th>Customer</th>" +
                  "<th>Date / time</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'></tbody>" +
                  "<tfoot>" +

                  "<th colspan='1'>" +
                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "<div class='item' data-text='300'>300</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "" +
                  "</th>" +
                  "<th colspan='9'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +

                  "</tfoot>" +
                  "</table>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"
          })});


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateUserPOSReport(arg);
              }
              else
              {
                  location.hash = "#laundry";
              }
          }});
  }
  function DrawPoolPOSTransactionsDetails()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Transaction detail" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='pool_item'/>"});

      _page({add:"<input id='currently-viewed-transaction' type='hidden' value=''/>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "<div>" +
                  "<h3 class='ui sleak header'>" +
                  "<i class='shopping bag green-text icon'></i> Item list" +
                  "</h3>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='w3-col l5 m5 s12 pad-1 widget'>" +

                  "<h3 class='ui sleak header'><i class='money green-text icon'></i> Detail / Payments</h3>" +

                  "</div>" +
                  "<div class='w3-col l3 m3 s12 pad-1 align-r'>" +
                  "<!--" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "-->" +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class=''>Action<i class='caret down icon'></i></div> " +
                  "  <div class='menu'>" +
                  "    <div class='header'>Action</div>" +
                  "    <div class='item' onclick='launchPOSReceivePayment()'>Add payment</div>" +
                  "    <div class='item' onclick='launchPOSRefund()'>Add refund</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $(".ui.dropdown").dropdown();

      reSize();
      populatePosTransaction();
  }
  function DrawNewPoolSession()
  {
      _page({ add: pageTop({ icon: "life ring", text: "New Pool Session" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +
              "<input id='poolid' type='hidden' value=''/>" +
              "<input id='poolstatus' type='hidden' value='true'/>" +
              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Session Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='session-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='session-price' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Tax</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='tax-amount' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='align-r'>" +
              "<button id='pool-save-btn' class='ui blue sleak compact button' onclick='savePoolSession()'>Save session</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null)
      {
          loadEditPoolData(arg);
      }
  }
  function DrawPoolInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Pool Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pool-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#pool-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pool-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pool-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:div({add:
                  "<div class=''>" +


                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class=''>" +
                  "<div class='pad-2 align-r'>" +
                  "<div class='ui top right pointing dropdown basic blue circular button'>" +
                  "<i class='plus icon'></i> New Record" +
                  "<div class='menu'>" +
                  "<div class='header'>Records</div>" +
                  "<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
                  "<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
                  "<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
                  "<div class='ui divider'></div>" +
                  "<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
                  "<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
                  "</div>" +
                  "</div>" +

                  "<p style='color: dimgray; margin-top: 10px;'>" +
                  "Record detailed events on products usage, damages and increment" +
                  "</p>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
          class:"margin-t-2"});



      _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-pool-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                  "<th colspan='1'>" +
                  "<div class='ui icon top left pointing dropdown button'>" +
                  "<i class='wrench blue icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Group Action</div>" +
                  "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                  "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                  "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                  "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                  "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                  "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawPoolInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Pool Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#pool-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#pool-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pool-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pool-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

                  "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

                  "  </div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


                  "<div id='periodspan' class='ui labeled fluid input'>" +

                  "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
                  "<div class='text sleak'>This month</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='item'>This month</div>" +
                  "<div class='item'>Last month</div>" +
                  "<div class='item'>This year</div>" +
                  "<div class='item'>Last year</div>" +
                  "</div>" +
                  "</div>" +

                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
                  "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
                  "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                  "</div>" +


                  "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawPoolInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pool Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#pool-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pool-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pool-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pool-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenPoolPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pool Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenPoolPurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pool Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#bar-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenPoolQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#pool-price-enquiry";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawPoolInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Pool Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/><span id='on-enquiry-page'></span>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#pool-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pool-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a  href='#pool-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pool-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawPoolInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Pool Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#pool-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pool-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#pool-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pool-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenPoolAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddPoolInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Pool Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='pool_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawPoolReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Pool Report" }), clear: true });
  }
  function DrawPoolSettings()
  {
      _page({ add: pageTop({ icon: "cogs", text: "Pool Settings" }), clear: true });


      _page({add:"<input id='inventory-item-type' type='hidden' value='pool_item'/>"});

      _page({add:div({add:

                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateGeneralSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +

                  "<div class='l-margin-t-2 w3-row' style='padding-bottom: 50px;'>" +
                  "<div class='w3-col l6 m6 s12 settings-con'>" +

                  "<input id='receipttemplate' type='hidden' value=''/>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Receipt</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l5 m6 s12'>" +
                  "<div id='receipt-image-con' class='settings-text' style='margin-top: 5px; height: 270px; overflow: hidden;'>" +
                  "<img id='receipt-image' style='width: 100%;'/>." +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l7 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<h3 id='receipt-name' class='sleak' style='margin-top: 20px;'></h3>" +
                  "<p class='sleak' style='font-weight: bold; color: gray;'>" +
                  "<span class='settings-text'>Select the proper receipt </span>" +
                  "<span class='settings-text'>template that fits the kinda</span>" +
                  "<span class='settings-text'> printer you will be printing from</span></p>" +
                  "<button class='ui compact settings-control w3-button green button' " +
                  "onclick='selectTemplate()'>Select template</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Receipt printer type</small></h6> " +
                  "<div class='l-width-l w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='a4' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>A4 Size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='letter' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Letter size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm58' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>58mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm80' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>80mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Add fields to receipt</small></h6> " +
                  "<div class='l-width-l pad-1 w3-card widget curve'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptaddess' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Address</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptlogo' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Logo</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptemail' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Email</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptsalutation' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Salutation</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='ui form'>" +
                  "<textarea id='salutation' class='wix-textbox settings-control' rows='1' " +
                  "placeholder='Write salutation' onchange='saveSettings(this)'></textarea>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low stock alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>If the low stock point of any item is " +
                  "reached, a notification message will</span> " +
                  "<span class='settings-text'>be sent to the phone and email  supplied below</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input'>" +
                  "<label class='ui blue sleak label'>Email</label>" +
                  "<input id='lowstockemail' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='lowstockphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Payment methods</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cash_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Cash</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='pos_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>POS machine</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='online_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Online</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='other_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Others</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Refund order / Tax calculation method</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='refund' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Enable / Disable refund at the POS</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +

                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='compound_tax' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Compound tax</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateGeneralSettings();
  }
  function DrawLaundry()
  {
      _page({ add: pageTop({ icon: "usd", text: "Laundry POS" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='laundry_item'/>"});


      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populatePOSReport()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populatePOSReport()'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>", class:"w3-row"});

      _page({add:
              "<div class='w3-col l12 m12 s12'>" +
                    "<div class='w3-row pad-1'>" +
                        "<div class='w3-col l6 m6 s6'>" +
                            "<h4 class='sleak'>Laundry Items</h4>" +
                        "</div>" +
                        "<div class='w3-col l6 m6 s6 align-r'>" +
                            "<a href='#new-laundry-item'><button class='ui sleak blue button'>Add Item</button></a>" +
                        "</div>" +
                    "</div>" +
                    "<div class=''>"+
                        DrawTable(["Item type","Price","Sale frequency","Status","Action"],
                            {GroupAction:[{Text:"Delete", Method:"ConfirmGroupLaundryDelete"}]}).outerHTML+
                    "</div>" +
              "</div>",
          class:"w3-row l-pad-2"});


      _page({add:div({add:
          "<div class=''>" +
          "<div class=''>" +
          "<div class='widget curve w3-card wix-textbox pad-1 w3-row' style='margin-bottom: 3px;'>" +
          "<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
          "<h5 class='sleak' style='color: black; font-weight: bold;'>POS User</h5>" +
          "</div>" +
          "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'><span class='status'>Status</span></div>" +
          "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
          "<h5 class='sleak' style='color: black; font-weight: bold;'>Sold</h5>" +
          "</div>" +
          "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
          "<h5 class='sleak' style='color: black; font-weight: bold;'>Total</h5>" +
          "</div>" +
          "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
          "<h5 class='sleak' style='color: black; font-weight: bold;'>Paid</h5>" +
          "</div>" +
          "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
          "<h5 class='sleak' style='color: black; font-weight: bold;'>Balance</h5>" +
          "</div>" +
          "</div>" +
          "<div id='pos-list-con'>" +
          "</div>" +
          "</div>" +

          "</div>",
      class:"l-pad-2 s-pad-1", style:""})});


      _page({add:div({add:

                  "<div class='w3-row'>" +


                  "<div class='w3-col l12 m12 s12'> " +

                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class=''>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='general-total-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-items-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class=''  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-customers-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='margin-t-2'>" +
                  "<div class='widget curve w3-card'>" +
                  "<div class='pad-1 w3-container'>" +
                  "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average daily sale plot</h5>" +
                  "<button id='plot-customer' class='ui compact sleak right floated blue button' onclick=\"switchDailyPlotType('customer')\">Customers</button>" +
                  "<button id='plot-items' class='ui compact sleak right floated button' onclick=\"switchDailyPlotType('items')\">Items</button>" +
                  "</div>" +
                  "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 295px;'></div>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              populateLaundry();
          }});
  }
  function DrawLaundryPOSTransactions()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Laundry POS Transactions" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateUserPOSReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m7 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateUserPOSReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "<div class='w3-col l4 m3 s12 l-pad-2 s-pad-1 align-r'>" +
              "<h5 id='pos-user-name' class='sleak' style='font-weight: bold;'></h5>" +
              "</div>", class:"w3-row"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='total-sold-amount'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='sold-items-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='customers-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='width-xl' style='margin: auto;'>" +

                  "<h3 class='sleak load-slip' style='font: bold;margin-top: 10px;'>Payment method</h3>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato; font-weight: normal;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='cash-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Cash</label>" +
                  "<div id='cash-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='pos-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>POS</label>" +
                  "<div id='pos-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='web-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Online</label>" +
                  "<div id='web-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +


                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='others-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Others</label>" +
                  "<div id='others-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class=''>" +
                  "<div class='w3-row' style='margin: auto;'>" +


                  "<div>" +
                  "<table class='ui very padded basic table' style='background-color: white;'>" +
                  "<tr><th colspan='2'>Transaction details</th></tr>" +
                  "<tr><td>Total</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-sale'>0</span></span></td></tr>" +
                  "<tr><td>Paid</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-paid'>0</span></span></td></tr>" +
                  "<tr><td>Balance</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-balance'>0</span></span></td></tr>" +
                  "<tr><td>Rebate</td><td><span class='load-slip'>"+$("#currency-symbol").val()+"<span id='total-rebate'>0</span></span></td></tr>" +
                  "</table>" +
                  "</div>" +


                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +

                  "<h3 class='sleak' style='font: bold;margin-top: 10px;'>Order Channels</h3><br/>" +


                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>POS orders</h6>" +
                  "<h1 id='pos-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "<br/>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Web orders</h6>" +
                  "<h1 id='web-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<table class='ui structured selectable celled table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='9'>" +
                  "<div class='w3-row'>"+
                  "<div class='w3-col l6 m4 s4'>"+
                  DrawSearch({Method:"populateUserPOSTransactions"}).outerHTML+
                  "</div>" +
                  "<div class='w3-col l6 m8 s8 align-r'>"+
                  "<div class='ui secondary menu'>" +
                  "<div class='right menu'>" +
                  "<a class='active item trans-list-filter' onclick='switchTransLstFilter(this)'>All</a>" +
                  "<a id='staff-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Staff</a>" +
                  "<a id='customers-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Guest</a>" +
                  "<a id='others-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Others</a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th>sn</th>" +
                  "<th>Transaction id</th>" +
                  "<th>Items</th>" +
                  "<th>Total</th>" +
                  "<th>Paid</th>" +
                  "<th>Balance</th>" +
                  "<th>Channel</th>" +
                  "<th>Customer</th>" +
                  "<th>Date / time</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'></tbody>" +
                  "<tfoot>" +

                  "<th colspan='1'>" +
                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "<div class='item' data-text='300'>300</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "" +
                  "</th>" +
                  "<th colspan='9'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +

                  "</tfoot>" +
                  "</table>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"
          })});


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateUserPOSReport(arg);
              }
              else
              {
                  location.hash = "#laundry";
              }
          }});
  }
  function DrawLaundryPOSTransactionsDetails()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Transaction detail" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:"<input id='currently-viewed-transaction' type='hidden' value=''/>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "<div>" +
                  "<h3 class='ui sleak header'>" +
                  "<i class='shopping bag green-text icon'></i> Item list" +
                  "</h3>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='w3-col l5 m5 s12 pad-1 widget'>" +

                  "<h3 class='ui sleak header'><i class='money green-text icon'></i> Detail / Payments</h3>" +

                  "</div>" +
                  "<div class='w3-col l3 m3 s12 pad-1 align-r'>" +
                  "<!--" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "-->" +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class=''>Action<i class='caret down icon'></i></div> " +
                  "  <div class='menu'>" +
                  "    <div class='header'>Action</div>" +
                  "    <div class='item' onclick='launchPOSReceivePayment()'>Add payment</div>" +
                  "    <div class='item' onclick='launchPOSRefund()'>Add refund</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $(".ui.dropdown").dropdown();

      reSize();
      populatePosTransaction();
  }
  function DrawNewLaundryItem()
  {
      _page({ add: pageTop({ icon: "industry", text: "New Laundry Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +
              "<input id='laundryid' type='hidden' value=''/>" +
              "<input id='laundrystatus' type='hidden' value='true'/>" +
              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='laundry-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='laundry-price' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Tax</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='tax-amount' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='show-on-site' type='checkbox' checked/><span>Show on website</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +


              "<div class='align-r'>" +
              "<button id='laundry-save-btn' class='ui blue sleak compact button' onclick='saveLaundryItem()'>Save item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null)
      {
          loadEditLaundryData(arg);
      }
  }
  function DrawLaundryInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Laundry Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#laundry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#laundry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#laundry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#laundry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:div({add:
                  "<div class=''>" +


                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class=''>" +
                  "<div class='pad-2 align-r'>" +
                  "<div class='ui top right pointing dropdown basic blue circular button'>" +
                  "<i class='plus icon'></i> New Record" +
                  "<div class='menu'>" +
                  "<div class='header'>Records</div>" +
                  "<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
                  "<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
                  "<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
                  "<div class='ui divider'></div>" +
                  "<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
                  "<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
                  "</div>" +
                  "</div>" +

                  "<p style='color: dimgray; margin-top: 10px;'>" +
                  "Record detailed events on products usage, damages and increment" +
                  "</p>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
          class:"margin-t-2"});



      _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-laundry-inventory-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                  "<th colspan='1'>" +
                  "<div class='ui icon top left pointing dropdown button'>" +
                  "<i class='wrench blue icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Group Action</div>" +
                  "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                  "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                  "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                  "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                  "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                  "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawLaundryInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Launddry Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#laundry-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#laundry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#laundry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#laundry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

                  "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

                  "  </div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


                  "<div id='periodspan' class='ui labeled fluid input'>" +

                  "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
                  "<div class='text sleak'>This month</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='item'>This month</div>" +
                  "<div class='item'>Last month</div>" +
                  "<div class='item'>This year</div>" +
                  "<div class='item'>Last year</div>" +
                  "</div>" +
                  "</div>" +

                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
                  "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
                  "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                  "</div>" +


                  "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawLaundryInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Laundry Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#laundry-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#laundry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#laundry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#laundry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenLaundryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Laundry Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenLaundryPurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Laundry Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#bar-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenLaundryQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#laundry-price-enquiry";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawLaundryInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Laundry Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/><span id='on-enquiry-page'></span>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#laundry-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#laundry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a  href='#laundry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#laundry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawLaundryInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Laundry Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#laundry-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#laundry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#laundry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#laundry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenLaundryAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddLaundryInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Laundry Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='laundry_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawLaundryReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Laundry Report" }), clear: true });
  }
  function DrawLaundrySettings()
  {
      _page({ add: pageTop({ icon: "cogs", text: "Laundry Settings" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='laundry_item'/>"});

      _page({add:div({add:

                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateGeneralSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +

                  "<div class='l-margin-t-2 w3-row' style='padding-bottom: 50px;'>" +
                  "<div class='w3-col l6 m6 s12 settings-con'>" +

                  "<input id='receipttemplate' type='hidden' value=''/>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Receipt</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l5 m6 s12'>" +
                  "<div id='receipt-image-con' class='settings-text' style='margin-top: 5px; height: 270px; overflow: hidden;'>" +
                  "<img id='receipt-image' style='width: 100%;'/>." +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l7 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<h3 id='receipt-name' class='sleak' style='margin-top: 20px;'></h3>" +
                  "<p class='sleak' style='font-weight: bold; color: gray;'>" +
                  "<span class='settings-text'>Select the proper receipt </span>" +
                  "<span class='settings-text'>template that fits the kinda</span>" +
                  "<span class='settings-text'> printer you will be printing from</span></p>" +
                  "<button class='ui compact settings-control w3-button green button' " +
                  "onclick='selectTemplate()'>Select template</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Receipt printer type</small></h6> " +
                  "<div class='l-width-l w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='a4' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>A4 Size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='letter' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Letter size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm58' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>58mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm80' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>80mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Add fields to receipt</small></h6> " +
                  "<div class='l-width-l pad-1 w3-card widget curve'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptaddess' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Address</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptlogo' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Logo</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptemail' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Email</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptsalutation' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Salutation</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='ui form'>" +
                  "<textarea id='salutation' class='wix-textbox settings-control' rows='1' " +
                  "placeholder='Write salutation' onchange='saveSettings(this)'></textarea>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low stock alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>If the low stock point of any item is " +
                  "reached, a notification message will</span> " +
                  "<span class='settings-text'>be sent to the phone and email  supplied below</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input'>" +
                  "<label class='ui blue sleak label'>Email</label>" +
                  "<input id='lowstockemail' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='lowstockphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Payment methods</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cash_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Cash</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='pos_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>POS machine</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='online_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Online</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='other_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Others</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Refund order / Tax calculation method</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='refund' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Enable / Disable refund at the POS</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +

                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='compound_tax' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Compound tax</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateGeneralSettings();
  }
  function DrawBarDrinks()
  {
      _page({ add: pageTop({ icon: "martini glass", text: "Bar Drinks" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML =
          "<button class='ui green-back sleak button' onclick='showdrinkcategory()'>Drinks Category</button> " +

          "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-drinks'\">" +
          "<div class='ui small blue-back button'><i class='plus icon'></i>Add Drinks</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateDrinks" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({ add: searchCon });

      _page({
          add: DrawTable(["Drink", "Name", "Price", "On Site", "Sort", "Status", "Action"],
              { GroupAction: [{ Text: "DIVIDER" }, { Text: "Delete", Method: "ConfirmGroupDrinkDelete" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateDrinks();
  }
  function DrawAddDrinks()
  {
      _page({ add: pageTop({ icon: "martini glass", text: "Add New Drink" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='drinkid' type='hidden' value=''/>" +
              "<input id='drinkstatus' type='hidden' value='true'/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-2' src='' style='width: 100%;'/>" +
              "<button id='item-btn-2' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-2').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-2' type='file' style='display: none;' onchange='processItemImage(this, 2)'/> " +
              "<input id='item-file-name-2' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-3' src='' style='width: 100%;'/>" +
              "<button  id='item-btn-3' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-3').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-3' type='file' style='display: none;' onchange='processItemImage(this, 3)'/> " +
              "<input id='item-file-name-3' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-4' src='' style='width: 100%;'/>" +
              "<button id='item-btn-4' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-4').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-4' type='file' style='display: none;' onchange='processItemImage(this, 4)'/> " +
              "<input id='item-file-name-4' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='drink-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Category</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='drink-category' class='ui wix-select fluid dropdown'>" +
              "<option value=''>Select Drink Category</option>" +
              "<option value='default'>Default</option>" +
              "</select></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Cost price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='cost' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Selling price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='drink-price' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Compare Price at</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='drink-price-compare' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Tax</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='tax-amount' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>SKU / Barcode</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Description</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui form'>" +
              "<div class='field'><textarea id='drink-description' class='wix-textbox' rows='2'></textarea></div>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Promotional Text</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='gift green icon'></i><input id='drink-promo-text' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Sort</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='drink-sort' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +






              //----------------- do inventory stuff ----------------------------------------------

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='track-inventory' type='checkbox' onchange='openInventoryCon(this)'/><span>Track Inventory</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +


              // ------------------------------- Inventory container ------------------------------------------

              "<div id='inventory-con' style='display: none;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +

              "</div>" +

              //--------------------------- End of inventory stuff------------------------------------------------------------






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



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='pos-available' type='checkbox' checked/><span>POS Available</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='drink-save-btn' class='ui blue sleak compact button' onclick='saveDrink()'>Save Drink</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      $(".ui.driodown").dropdown();

      list({ con: getElement("drink-category"), job: 'list drink category', all: true });

      $(".ui.dropdown").dropdown();

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      let arg = getArg();

      if (arg != null) {
          loadEditDrinkData(arg);
      }
  }
  function DrawBarPos()
  {
      _page({ add: pageTop({ icon: "usd", text: "Bar POS" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='bar_item'/>"});


      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populatePOSReport()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populatePOSReport()'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>", class:"w3-row"});


      _page({add:div({add:
                  "<div class=''>" +
                  "<div class=''>" +
                  "<div class='widget curve w3-card wix-textbox pad-1 w3-row' style='margin-bottom: 3px;'>" +
                  "<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>POS User</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'><span class='status'>Status</span></div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Sold</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Total</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Paid</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Balance</h5>" +
                  "</div>" +
                  "</div>" +
                  "<div id='pos-list-con'>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:""})});


      _page({add:div({add:

                  "<div class='w3-row'>" +


                  "<div class='w3-col l9 m9 s12'> " +

                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='general-total-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-items-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-customers-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='pad-1'>" +
                  "<div class='widget curve w3-card'>" +
                  "<div class='pad-1 w3-container'>" +
                  "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average daily sale plot</h5>" +
                  "<button id='plot-customer' class='ui compact sleak right floated blue button' onclick=\"switchDailyPlotType('customer')\">Customers</button>" +
                  "<button id='plot-items' class='ui compact sleak right floated button' onclick=\"switchDailyPlotType('items')\">Items</button>" +
                  "</div>" +
                  "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 295px;'></div>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +
                  "<div class='w3-col l3 m3 s12'>" +
                  "<div class='l-pad-2 s-pad-1 widget curve w3-card'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold;'>Sales channels</h6>" +
                  "<div id='sale-source-donut'></div>" +
                  "<i class='square icon' style='color: rgb(0,100,140);'></i> <label class='load-slip'>POS</label><br/>" +
                  "<i class='square icon' style='color: whitesmoke;'></i> <label class='load-slip'>Online</label><br/>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='up arrow circular green icon'></i> " +
                  "Top 5 most sold items" +
                  "</h3>" +
                  "</div>" +

                  "<div id='most-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class=''  style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='down arrow circular red icon'></i> " +
                  "Top 5 least sold items" +
                  "</h3>" +
                  "</div>" +

                  "<div id='least-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              populatePOSReport();
          }});

      //populatePOSReport();
  }
  function DrawBarPOSTransactions()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Bar POS Transactions" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='bar_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateUserPOSReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m7 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateUserPOSReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "<div class='w3-col l4 m3 s12 l-pad-2 s-pad-1 align-r'>" +
              "<h5 id='pos-user-name' class='sleak' style='font-weight: bold;'></h5>" +
              "</div>", class:"w3-row"});



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='total-sold-amount'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='sold-items-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='customers-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='width-xl' style='margin: auto;'>" +

                  "<h3 class='sleak load-slip' style='font: bold;margin-top: 10px;'>Payment method</h3>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato; font-weight: normal;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='cash-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Cash</label>" +
                  "<div id='cash-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='pos-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>POS</label>" +
                  "<div id='pos-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='web-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Online</label>" +
                  "<div id='web-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +


                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='others-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Others</label>" +
                  "<div id='others-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class=''>" +
                  "<div class='w3-row' style='margin: auto;'>" +


                  "<div>" +
                  "<table class='ui very padded basic table' style='background-color: white;'>" +
                  "<tr><th colspan='2'>Transaction details</th></tr>" +
                  "<tr><td>Total</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-sale'>0</span></span></td></tr>" +
                  "<tr><td>Paid</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-paid'>0</span></span></td></tr>" +
                  "<tr><td>Balance</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-balance'>0</span></span></td></tr>" +
                  "<tr><td>Rebate</td><td><span class='load-slip'>"+$("#currency-symbol").val()+"<span id='total-rebate'>0</span></span></td></tr>" +
                  "</table>" +
                  "</div>" +


                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +

                  "<h3 class='sleak' style='font: bold;margin-top: 10px;'>Order Channels</h3><br/>" +


                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>POS orders</h6>" +
                  "<h1 id='pos-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "<br/>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Web orders</h6>" +
                  "<h1 id='web-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<table class='ui structured selectable celled table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='9'>" +
                  "<div class='w3-row'>"+
                  "<div class='w3-col l6 m4 s4'>"+
                  DrawSearch({Method:"populateUserPOSTransactions"}).outerHTML+
                  "</div>" +
                  "<div class='w3-col l6 m8 s8 align-r'>"+
                  "<div class='ui secondary menu'>" +
                  "<div class='right menu'>" +
                  "<a class='active item trans-list-filter' onclick='switchTransLstFilter(this)'>All</a>" +
                  "<a id='staff-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Staff</a>" +
                  "<a id='customers-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Guest</a>" +
                  "<a id='others-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Others</a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th>sn</th>" +
                  "<th>Transaction id</th>" +
                  "<th>Items</th>" +
                  "<th>Total</th>" +
                  "<th>Paid</th>" +
                  "<th>Balance</th>" +
                  "<th>Channel</th>" +
                  "<th>Customer</th>" +
                  "<th>Date / time</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'></tbody>" +
                  "<tfoot>" +

                  "<th colspan='1'>" +
                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "<div class='item' data-text='300'>300</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "" +
                  "</th>" +
                  "<th colspan='9'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +

                  "</tfoot>" +
                  "</table>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"
          })});


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateUserPOSReport(arg);
              }
              else
              {
                  location.hash = "#bar";
              }
          }});
  }
  function DrawBarPOSTransactionsDetails()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Transaction detail" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='bar_item'/>"});

      _page({add:"<input id='currently-viewed-transaction' type='hidden' value=''/>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "<div>" +
                  "<h3 class='ui sleak header'>" +
                  "<i class='shopping bag green-text icon'></i> Item list" +
                  "</h3>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='w3-col l5 m5 s12 pad-1 widget'>" +

                  "<h3 class='ui sleak header'><i class='money green-text icon'></i> Detail / Payments</h3>" +

                  "</div>" +
                  "<div class='w3-col l3 m3 s12 pad-1 align-r'>" +
                  "<!--" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "-->" +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class=''>Action<i class='caret down icon'></i></div> " +
                  "  <div class='menu'>" +
                  "    <div class='header'>Action</div>" +
                  "    <div class='item' onclick='launchPOSReceivePayment()'>Add payment</div>" +
                  "    <div class='item' onclick='launchPOSRefund()'>Add refund</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $(".ui.dropdown").dropdown();

      reSize();
      populatePosTransaction();
  }
  function DrawBarInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Bar Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#bar-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#bar-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#bar-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#bar-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:div({add:
                  "<div class=''>" +


                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class=''>" +
                  "<div class='pad-2 align-r'>" +
                  "<div class='ui top right pointing dropdown basic blue circular button'>" +
                  "<i class='plus icon'></i> New Record" +
                  "<div class='menu'>" +
                  "<div class='header'>Records</div>" +
                  "<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
                  "<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
                  "<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
                  "<div class='ui divider'></div>" +
                  "<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
                  "<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
                  "</div>" +
                  "</div>" +

                  "<p style='color: dimgray; margin-top: 10px;'>" +
                  "Record detailed events on products usage, damages and increment" +
                  "</p>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
            class:"margin-t-2"});



            _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-bar-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                  "<th colspan='1'>" +
                  "<div class='ui icon top left pointing dropdown button'>" +
                  "<i class='wrench blue icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Group Action</div>" +
                  "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                  "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                  "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                  "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                  "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                  "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawBarInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Bar Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#bar-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#bar-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#bar-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#bar-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

                  "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

                  "  </div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


                  "<div id='periodspan' class='ui labeled fluid input'>" +

                  "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
                  "<div class='text sleak'>This month</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='item'>This month</div>" +
                  "<div class='item'>Last month</div>" +
                  "<div class='item'>This year</div>" +
                  "<div class='item'>Last year</div>" +
                  "</div>" +
                  "</div>" +

                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
                  "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
                  "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                  "</div>" +


                  "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawBarInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Bar Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#bar-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#bar-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#bar-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#bar-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenBarPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Bar Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenBarPurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Bar Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#bar-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenBarQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#bar-price-enquiry";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawBarInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Bar Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/><span id='on-enquiry-page'></span>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#bar-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#bar-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a  href='#bar-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#bar-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawBarInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Bar Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#bar-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#bar-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#bar-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#bar-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenBarAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddBarInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Bar Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='bar_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawBarReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Bar Report" }), clear: true });
  }
  function DrawBarSettings()
  {
      _page({ add: pageTop({ icon: "cogs", text: "Bar Settings" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='bar_item'/>"});

      _page({add:div({add:

                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateGeneralSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +

                  "<div class='l-margin-t-2 w3-row' style='padding-bottom: 50px;'>" +
                  "<div class='w3-col l6 m6 s12 settings-con'>" +

                  "<input id='receipttemplate' type='hidden' value=''/>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Receipt</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l5 m6 s12'>" +
                  "<div id='receipt-image-con' class='settings-text' style='margin-top: 5px; height: 270px; overflow: hidden;'>" +
                  "<img id='receipt-image' style='width: 100%;'/>." +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l7 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<h3 id='receipt-name' class='sleak' style='margin-top: 20px;'></h3>" +
                  "<p class='sleak' style='font-weight: bold; color: gray;'>" +
                  "<span class='settings-text'>Select the proper receipt </span>" +
                  "<span class='settings-text'>template that fits the kinda</span>" +
                  "<span class='settings-text'> printer you will be printing from</span></p>" +
                  "<button class='ui compact settings-control w3-button green button' " +
                  "onclick='selectTemplate()'>Select template</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Receipt printer type</small></h6> " +
                  "<div class='l-width-l w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='a4' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>A4 Size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='letter' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Letter size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm58' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>58mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm80' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>80mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Add fields to receipt</small></h6> " +
                  "<div class='l-width-l pad-1 w3-card widget curve'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptaddess' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Address</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptlogo' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Logo</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptemail' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Email</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptsalutation' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Salutation</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='ui form'>" +
                  "<textarea id='salutation' class='wix-textbox settings-control' rows='1' " +
                  "placeholder='Write salutation' onchange='saveSettings(this)'></textarea>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low stock alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>If the low stock point of any item is " +
                  "reached, a notification message will</span> " +
                  "<span class='settings-text'>be sent to the phone and email  supplied below</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input'>" +
                  "<label class='ui blue sleak label'>Email</label>" +
                  "<input id='lowstockemail' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='lowstockphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Payment methods</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cash_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Cash</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='pos_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>POS machine</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='online_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Online</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='other_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Others</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Refund order / Tax calculation method</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='refund' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Enable / Disable refund at the POS</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +

                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='compound_tax' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Compound tax</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Online order</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>" +
                  "If there are no open POS and an order is made online, a notification message</span> " +
                  "<span class='settings-text'>will be sent to the phone number below.</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='onlineorderphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +




                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateGeneralSettings();
  }
  function DrawPastries()
  {
      _page({ add: pageTop({ icon: "birthday cake", text: "Pastries" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML =
          "<button class='ui green-back sleak button' onclick='showpastrycategory()'>Pastry Category</button> " +

          "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-pastry'\">" +
          "<div class='ui small blue-back button'><i class='plus icon'></i>Add Pastry</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populatePastries" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Pastry", "Name", "Price", "On Site", "Sort", "Status", "Action"],
              { GroupAction: [{ Text: "DIVIDER" }, { Text: "Delete Pastries", Method: "ConfirmGroupPastryDelete" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populatePastries();
  }
  function DrawAddPastry()
  {
      _page({ add: pageTop({ icon: "birthday cake", text: "Add New Pastry" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='pastryid' type='hidden' value=''/>" +
              "<input id='pastrystatus' type='hidden' value='true'/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-2' src='' style='width: 100%;'/>" +
              "<button id='item-btn-2' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-2').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-2' type='file' style='display: none;' onchange='processItemImage(this, 2)'/> " +
              "<input id='item-file-name-2' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-3' src='' style='width: 100%;'/>" +
              "<button  id='item-btn-3' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-3').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-3' type='file' style='display: none;' onchange='processItemImage(this, 3)'/> " +
              "<input id='item-file-name-3' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-4' src='' style='width: 100%;'/>" +
              "<button id='item-btn-4' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-4').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-4' type='file' style='display: none;' onchange='processItemImage(this, 4)'/> " +
              "<input id='item-file-name-4' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='pastry-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Category</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='pastry-category' class='ui wix-select fluid dropdown'>" +
              "<option value=''>Select Pastry Category</option>" +
              "<option value='default'>Default</option>" +
              "</select></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Cost price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='cost' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Selling price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='pastry-price' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Compare Price at</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='pastry-price-compare' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Tax</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='tax-amount' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>SKU / Barcode</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Description</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui form'>" +
              "<div class='field'><textarea id='pastry-description' class='wix-textbox' rows='2'></textarea></div>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Promotional Text</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='gift green icon'></i><input id='pastry-promo-text' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Sort</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='pastry-sort' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +





              //----------------- do inventory stuff ----------------------------------------------

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='track-inventory' type='checkbox' onchange='openInventoryCon(this)'/><span>Track Inventory</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +


              // ------------------------------- Inventory container ------------------------------------------

              "<div id='inventory-con' style='display: none;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +

              "</div>" +

              //--------------------------- End of inventory stuff------------------------------------------------------------





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



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='pos-available' type='checkbox' checked/><span>POS Available</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +


              "<div class='align-r'>" +
              "<button id='pastry-save-btn' class='ui blue sleak button' onclick='savePastry()'>Save Pastry</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      $(".ui.driodown").dropdown();

      list({ con: getElement("pastry-category"), job: 'list pastry category', all: true });

      $(".ui.dropdown").dropdown();

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      let arg = getArg();

      if (arg != null) {
          loadEditPastryData(arg);
      }
  }
  function DrawPastryPos()
  {
      _page({ add: pageTop({ icon: "usd", text: "Pastry POS" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='pastry_item'/>"});


      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populatePOSReport()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populatePOSReport()'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>", class:"w3-row"});


      _page({add:div({add:
                  "<div class=''>" +
                  "<div class=''>" +
                  "<div class='widget curve w3-card wix-textbox pad-1 w3-row' style='margin-bottom: 3px;'>" +
                  "<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>POS User</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'><span class='status'>Status</span></div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Sold</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Total</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Paid</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Balance</h5>" +
                  "</div>" +
                  "</div>" +
                  "<div id='pos-list-con'>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:""})});


      _page({add:div({add:

                  "<div class='w3-row'>" +


                  "<div class='w3-col l9 m9 s12'> " +

                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='general-total-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-items-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-customers-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='pad-1'>" +
                  "<div class='widget curve w3-card'>" +
                  "<div class='pad-1 w3-container'>" +
                  "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average daily sale plot</h5>" +
                  "<button id='plot-customer' class='ui compact sleak right floated blue button' onclick=\"switchDailyPlotType('customer')\">Customers</button>" +
                  "<button id='plot-items' class='ui compact sleak right floated button' onclick=\"switchDailyPlotType('items')\">Items</button>" +
                  "</div>" +
                  "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 295px;'></div>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +
                  "<div class='w3-col l3 m3 s12'>" +
                  "<div class='l-pad-2 s-pad-1 widget curve w3-card'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold;'>Sales channels</h6>" +
                  "<div id='sale-source-donut'></div>" +
                  "<i class='square icon' style='color: rgb(0,100,140);'></i> <label class='load-slip'>POS</label><br/>" +
                  "<i class='square icon' style='color: whitesmoke;'></i> <label class='load-slip'>Online</label><br/>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='up arrow circular green icon'></i> " +
                  "Top 5 most sold items" +
                  "</h3>" +
                  "</div>" +

                  "<div id='most-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class=''  style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='down arrow circular red icon'></i> " +
                  "Top 5 least sold items" +
                  "</h3>" +
                  "</div>" +

                  "<div id='least-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              populatePOSReport();
          }});

      //populatePOSReport();
  }
  function DrawPastryPOSTransactions()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pastry POS Transactions" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateUserPOSReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m7 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateUserPOSReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "<div class='w3-col l4 m3 s12 l-pad-2 s-pad-1 align-r'>" +
              "<h5 id='pos-user-name' class='sleak' style='font-weight: bold;'></h5>" +
              "</div>", class:"w3-row"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='total-sold-amount'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='sold-items-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='customers-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='width-xl' style='margin: auto;'>" +

                  "<h3 class='sleak load-slip' style='font: bold;margin-top: 10px;'>Payment method</h3>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato; font-weight: normal;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='cash-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Cash</label>" +
                  "<div id='cash-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='pos-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>POS</label>" +
                  "<div id='pos-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='web-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Online</label>" +
                  "<div id='web-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +


                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='others-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Others</label>" +
                  "<div id='others-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class=''>" +
                  "<div class='w3-row' style='margin: auto;'>" +


                  "<div>" +
                  "<table class='ui very padded basic table' style='background-color: white;'>" +
                  "<tr><th colspan='2'>Transaction details</th></tr>" +
                  "<tr><td>Total</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-sale'>0</span></span></td></tr>" +
                  "<tr><td>Paid</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-paid'>0</span></span></td></tr>" +
                  "<tr><td>Balance</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-balance'>0</span></span></td></tr>" +
                  "<tr><td>Rebate</td><td><span class='load-slip'>"+$("#currency-symbol").val()+"<span id='total-rebate'>0</span></span></td></tr>" +
                  "</table>" +
                  "</div>" +


                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +

                  "<h3 class='sleak' style='font: bold;margin-top: 10px;'>Order Channels</h3><br/>" +


                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>POS orders</h6>" +
                  "<h1 id='pos-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "<br/>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Web orders</h6>" +
                  "<h1 id='web-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<table class='ui structured selectable celled table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='9'>" +
                  "<div class='w3-row'>"+
                  "<div class='w3-col l6 m4 s4'>"+
                  DrawSearch({Method:"populateUserPOSTransactions"}).outerHTML+
                  "</div>" +
                  "<div class='w3-col l6 m8 s8 align-r'>"+
                  "<div class='ui secondary menu'>" +
                  "<div class='right menu'>" +
                  "<a class='active item trans-list-filter' onclick='switchTransLstFilter(this)'>All</a>" +
                  "<a id='staff-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Staff</a>" +
                  "<a id='customers-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Guest</a>" +
                  "<a id='others-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Others</a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th>sn</th>" +
                  "<th>Transaction id</th>" +
                  "<th>Items</th>" +
                  "<th>Total</th>" +
                  "<th>Paid</th>" +
                  "<th>Balance</th>" +
                  "<th>Channel</th>" +
                  "<th>Customer</th>" +
                  "<th>Date / time</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'></tbody>" +
                  "<tfoot>" +

                  "<th colspan='1'>" +
                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "<div class='item' data-text='300'>300</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "" +
                  "</th>" +
                  "<th colspan='9'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +

                  "</tfoot>" +
                  "</table>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"
          })});


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateUserPOSReport(arg);
              }
              else
              {
                  location.hash = "#bakery";
              }
          }});
  }
  function DrawPastryPOSTransactionsDetails()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Transaction detail" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:"<input id='currently-viewed-transaction' type='hidden' value=''/>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "<div>" +
                  "<h3 class='ui sleak header'>" +
                  "<i class='shopping bag green-text icon'></i> Item list" +
                  "</h3>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='w3-col l5 m5 s12 pad-1 widget'>" +

                  "<h3 class='ui sleak header'><i class='money green-text icon'></i> Detail / Payments</h3>" +

                  "</div>" +
                  "<div class='w3-col l3 m3 s12 pad-1 align-r'>" +
                  "<!--" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "-->" +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class=''>Action<i class='caret down icon'></i></div> " +
                  "  <div class='menu'>" +
                  "    <div class='header'>Action</div>" +
                  "    <div class='item' onclick='launchPOSReceivePayment()'>Add payment</div>" +
                  "    <div class='item' onclick='launchPOSRefund()'>Add refund</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $(".ui.dropdown").dropdown();

      reSize();
      populatePosTransaction();
  }
  function DrawBakeryInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Bakery Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pastry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#pastry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pastry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pastry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:div({add:
                  "<div class=''>" +


                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class=''>" +
                  "<div class='pad-2 align-r'>" +
                  "<div class='ui top right pointing dropdown basic blue circular button'>" +
                  "<i class='plus icon'></i> New Record" +
                  "<div class='menu'>" +
                  "<div class='header'>Records</div>" +
                  "<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
                  "<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
                  "<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
                  "<div class='ui divider'></div>" +
                  "<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
                  "<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
                  "</div>" +
                  "</div>" +

                  "<p style='color: dimgray; margin-top: 10px;'>" +
                  "Record detailed events on products usage, damages and increment" +
                  "</p>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
          class:"margin-t-2"});



      _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-pastry-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                  "<th colspan='1'>" +
                  "<div class='ui icon top left pointing dropdown button'>" +
                  "<i class='wrench blue icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Group Action</div>" +
                  "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                  "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                  "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                  "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                  "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                  "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawPastryInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Pastry Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#bakery-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#pastry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pastry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pastry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

                  "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

                  "  </div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


                  "<div id='periodspan' class='ui labeled fluid input'>" +

                  "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
                  "<div class='text sleak'>This month</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='item'>This month</div>" +
                  "<div class='item'>Last month</div>" +
                  "<div class='item'>This year</div>" +
                  "<div class='item'>Last year</div>" +
                  "</div>" +
                  "</div>" +

                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
                  "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
                  "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                  "</div>" +


                  "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawPastryInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pastry Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#bakery-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pastry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pastry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pastry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenPastryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pastry Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenPastryPurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Pastry Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#pastry-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenPastryQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#pastry-price-enquiry";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawPastryInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Pastry Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/><span id='on-enquiry-page'></span>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#pastry-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pastry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a  href='#pastry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#pastry-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawPastryInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Pastry Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#pastry-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#pastry-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#pastry-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#pastry-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenPastryAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddPastryInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Pastry Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='pastry_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawBakeryReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Bakery Report" }), clear: true });
  }
  function DrawBakerySettings()
  {
      _page({ add: pageTop({ icon: "cogs", text: "Bakery Settings" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='pastry_item'/>"});

      _page({add:div({add:

                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateGeneralSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +

                  "<div class='l-margin-t-2 w3-row' style='padding-bottom: 50px;'>" +
                  "<div class='w3-col l6 m6 s12 settings-con'>" +

                  "<input id='receipttemplate' type='hidden' value=''/>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Receipt</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l5 m6 s12'>" +
                  "<div id='receipt-image-con' class='settings-text' style='margin-top: 5px; height: 270px; overflow: hidden;'>" +
                  "<img id='receipt-image' style='width: 100%;'/>." +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l7 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<h3 id='receipt-name' class='sleak' style='margin-top: 20px;'></h3>" +
                  "<p class='sleak' style='font-weight: bold; color: gray;'>" +
                  "<span class='settings-text'>Select the proper receipt </span>" +
                  "<span class='settings-text'>template that fits the kinda</span>" +
                  "<span class='settings-text'> printer you will be printing from</span></p>" +
                  "<button class='ui compact settings-control w3-button green button' " +
                  "onclick='selectTemplate()'>Select template</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Receipt printer type</small></h6> " +
                  "<div class='l-width-l w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='a4' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>A4 Size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='letter' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Letter size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm58' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>58mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm80' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>80mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Add fields to receipt</small></h6> " +
                  "<div class='l-width-l pad-1 w3-card widget curve'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptaddess' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Address</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptlogo' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Logo</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptemail' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Email</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptsalutation' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Salutation</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='ui form'>" +
                  "<textarea id='salutation' class='wix-textbox settings-control' rows='1' " +
                  "placeholder='Write salutation' onchange='saveSettings(this)'></textarea>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low stock alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>If the low stock point of any item is " +
                  "reached, a notification message will</span> " +
                  "<span class='settings-text'>be sent to the phone and email  supplied below</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input'>" +
                  "<label class='ui blue sleak label'>Email</label>" +
                  "<input id='lowstockemail' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='lowstockphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Payment methods</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cash_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Cash</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='pos_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>POS machine</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='online_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Online</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='other_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Others</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Refund order / Tax calculation method</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='refund' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Enable / Disable refund at the POS</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +

                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='compound_tax' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Compound tax</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Online order</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>" +
                  "If there are no open POS and an order is made online, a notification message</span> " +
                  "<span class='settings-text'>will be sent to the phone number below.</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='onlineorderphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +




                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateGeneralSettings();
  }

  function DrawFood()
  {
      _page({ add: pageTop({ icon: "utensils", text: "Manage Food" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML =
          "<button class='ui green-back sleak button' onclick='showfoodcategory()'>Food Category</button> " +

          "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-food'\">" +
          "<div class='ui small blue-back button'><i class='plus icon'></i>Add Food</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateFood" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Food", "Name", "Price", "On Site", "Sort", "Status", "Action"],
              { GroupAction: [{ Text: "DIVIDER" }, { Text: "Delete", Method: "ConfirmGroupFoodDelete" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateFood();
  }
  function DrawAddFood()
  {
      _page({ add: pageTop({ icon: "utensils", text: "Add food" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='foodid' type='hidden' value=''/>" +
              "<input id='foodstatus' type='hidden' value='true'/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-2' src='' style='width: 100%;'/>" +
              "<button id='item-btn-2' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-2').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-2' type='file' style='display: none;' onchange='processItemImage(this, 2)'/> " +
              "<input id='item-file-name-2' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-3' src='' style='width: 100%;'/>" +
              "<button  id='item-btn-3' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-3').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-3' type='file' style='display: none;' onchange='processItemImage(this, 3)'/> " +
              "<input id='item-file-name-3' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-4' src='' style='width: 100%;'/>" +
              "<button id='item-btn-4' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-4').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-4' type='file' style='display: none;' onchange='processItemImage(this, 4)'/> " +
              "<input id='item-file-name-4' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='food-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Category</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='food-category' class='ui wix-select fluid dropdown'>" +
              "<option value=''>Select Food Category</option>" +
              "<option value='default'>Default</option>" +
              "</select></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Cost price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='cost' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Selling price</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='food-price' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Compare Price at</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='food-price-compare' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Tax</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>" + $('#currency-symbol').val() + "</label>" +
              "<input id='tax-amount' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>SKU / Barcode</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Description</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui form'>" +
              "<div class='field'><textarea id='food-description' class='wix-textbox' rows='2'></textarea></div>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Promotional Text</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='gift green icon'></i><input id='food-promo-text' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Sort</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='food-sort' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              //----------------- do inventory stuff ----------------------------------------------

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='track-inventory' type='checkbox' onchange='openInventoryCon(this)'/><span>Track Inventory</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +


              // ------------------------------- Inventory container ------------------------------------------

              "<div id='inventory-con' style='display: none;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +

              "</div>" +

              //--------------------------- End of inventory stuff------------------------------------------------------------


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



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6'><label><input id='pos-available' type='checkbox' checked/><span>POS Available</span></label></div>" +
              "</div>" +
              "</div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='food-save-btn' class='ui blue sleak button' onclick='saveFood()'>Save Food</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      $(".ui.driodown").dropdown();

      list({ con: getElement("food-category"), job: 'list food category', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      if (arg != null) {
          loadEditFoodData(arg);
      }
  }
  function DrawFoodReport()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Food report" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<div class='widget'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l5 m6 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l3 m4 s5'>" +
              "<div class='pad-2'>" +
              "<img id='item-image' src='' style='width: 90px; border-radius: 4px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l9 m8 s7'>" +
              "<div class='pad-2'>" +
              "<h6 id='item-name' class='sleak load-slip' style='font-weight: bold;'>Item name</h6>" +
              "<h6 id='item-category' class='sleak load-slip'>Category</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m6 s12'>" +

              "<br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l10 m10 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateItemReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "</div>" +


              "</div>" +
              "</div>" +
              "</div>"})

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateItemReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l5 m5 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-bottom: 0px;'>" +
              "<div class='widget w3-card curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l7 m7 s6 pad-t'>" +
              "<div style='margin-top: 30px;'>" +
              "<span id='small-periodic-chart'>" +
              "</span>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l5 m5 s6 pad-2 align-r'>" +
              "<h4 class='sleak load-slip blue'>Sales position</h4>" +
              "<h2 id='sales-poition' class='sleak load-slip' style='margin: 0px;'>0</h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m7 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-bottom: 0px;'>" +
              "<div class='widget w3-card curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4' style=\"background-image: " +
              "url('"+cdn+"images/icons/pastel/business.png'); min-height: 100px; " +
              "background-position-x: -35px; background-position-y: -35px; background-repeat: no-repeat;\">.</div>" +
              "<div class='w3-col l8 m8 s8 pad-2 align-r'>" +
              "<h4 class='sleak blue load-slip'>Sold</h4>" +
              "<h2 id='sold-qty' class='sleak load-slip' style='margin: 0px;'>0</h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-bottom: 0px;'>" +
              "<div class='widget w3-card curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4' style=\"background-image: " +
              "url('"+cdn+"images/icons/pastel/naira.png'); min-height: 100px; " +
              "background-position-x: -35px; background-position-y: -35px; background-repeat: no-repeat;\">.</div>" +
              "<div class='w3-col l8 m8 s8 pad-2 align-r'>" +
              "<h4 class='sleak load-slip blue'>Total</h4>" +
              "<h2 class='sleak load-slip' style='margin: 0px;'>" +
              "<span style='font-family: Lato; font-weight: normal;'>" +
              $("#currency-symbol").val()+"</span> " +
              "<span id='sale-amount'>0</span></h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l9 m8 s12'>" +
              "<div class='l-pad-1 s-pad-t m-pad-t' style='padding-top: 0px;'>" +
              "<div class='widget pad-2 curve w3-card'>" +

              "<div class='pad-1 w3-container'>" +
              "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average Sales over period</h5>" +
              "<button id='plot-period' class='ui compact sleak right floated blue button' onclick=\"switchReportPlot('period')\">Over period</button>" +
              "<button id='plot-daily' class='ui compact sleak right floated button' onclick=\"switchReportPlot('daily')\">Daily average</button>" +
              "</div>" +
              "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 285px;'></div>" +

              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m4 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-top: 0px;'>" +
              "<div class='widget pad-2 curve w3-card'style='padding-top: 0px;'>" +

              "<div class='' style='text-align: center;'>" +

              "<span class='chart' style='width: 160px; margin-top: 40px; margin-bottom: 10px;' id='revenue-percentage' data-percent='0' data-scale-color='#00b400'>" +
              "<span class='percent' style='line-height: 160px;'></span></span>" +

              "</div>" +
              "<div class='pad-1'>" +
              "<h6 class='sleak load-slip' style='color: dimgray; text-align: center; font-weight: bold;'>Of Kitchen Revenue</h6> " +
              "</div>" +
              "<br/><br/>" +

              "<div class='align-c' style='margin-top: 7px;'>" +
              "<h2 class='load-slip' style='margin: 0px;'>"+$("#currency-symbol").val()+"20,000</h2>" +
              "<h6 class='load-slip' style='margin: 0px;'>Profit</h6>" +
              "</div>" +

              "</div>" +
              "</div>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});




      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"This month",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateItemReport(arg);
              }
              else
              {
                  location.hash = "#food";
              }
          }});
  }
  function DrawKitchenPos()
  {
      _page({ add: pageTop({ icon: "usd", text: "Kitchen POS" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});


      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populatePOSReport()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populatePOSReport()'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>", class:"w3-row"});


      _page({add:div({add:
                  "<div class=''>" +
                  "<div class=''>" +
                  "<div class='widget curve w3-card wix-textbox pad-1 w3-row' style='margin-bottom: 3px;'>" +
                  "<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>POS User</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'><span class='status'>Status</span></div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Sold</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Total</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Paid</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Balance</h5>" +
                  "</div>" +
                  "</div>" +
                  "<div id='pos-list-con'>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:""})});


      _page({add:div({add:

                  "<div class='w3-row'>" +


                  "<div class='w3-col l9 m9 s12'> " +

                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='general-total-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-items-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-customers-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='pad-1'>" +
                  "<div class='widget curve w3-card'>" +
                  "<div class='pad-1 w3-container'>" +
                  "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average daily sale plot</h5>" +
                  "<button id='plot-customer' class='ui compact sleak right floated blue button' onclick=\"switchDailyPlotType('customer')\">Customers</button>" +
                  "<button id='plot-items' class='ui compact sleak right floated button' onclick=\"switchDailyPlotType('items')\">Items</button>" +
                  "</div>" +
                  "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 295px;'></div>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +
                  "<div class='w3-col l3 m3 s12'>" +
                  "<div class='l-pad-2 s-pad-1 widget curve w3-card'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold;'>Sales channels</h6>" +
                  "<div id='sale-source-donut'></div>" +
                  "<i class='square icon' style='color: rgb(0,100,140);'></i> <label class='load-slip'>POS</label><br/>" +
                  "<i class='square icon' style='color: whitesmoke;'></i> <label class='load-slip'>Online</label><br/>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='up arrow circular green icon'></i> " +
                  "Top 5 most sold items" +
                  "</h3>" +
                  "</div>" +

                  "<div id='most-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class=''  style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='down arrow circular red icon'></i> " +
                  "Top 5 least sold items" +
                  "</h3>" +
                  "</div>" +

                  "<div id='least-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              populatePOSReport();
          }});

      //populatePOSReport();
  }
  function DrawKitchenPOSTransactions()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Kitchen POS Transactions" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateUserPOSReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m7 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateUserPOSReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "<div class='w3-col l4 m3 s12 l-pad-2 s-pad-1 align-r'>" +
              "<h5 id='pos-user-name' class='sleak' style='font-weight: bold;'></h5>" +
              "</div>", class:"w3-row"});



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='total-sold-amount'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Items sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='sold-items-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='customers-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='width-xl' style='margin: auto;'>" +

                  "<h3 class='sleak load-slip' style='font: bold;margin-top: 10px;'>Payment method</h3>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato; font-weight: normal;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='cash-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Cash</label>" +
                  "<div id='cash-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='pos-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>POS</label>" +
                  "<div id='pos-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='web-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Online</label>" +
                  "<div id='web-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +


                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='others-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Others</label>" +
                  "<div id='others-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class=''>" +
                  "<div class='w3-row' style='margin: auto;'>" +


                  "<div>" +
                  "<table class='ui very padded basic table' style='background-color: white;'>" +
                  "<tr><th colspan='2'>Transaction details</th></tr>" +
                  "<tr><td>Total</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-sale'>0</span></span></td></tr>" +
                  "<tr><td>Paid</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-paid'>0</span></span></td></tr>" +
                  "<tr><td>Balance</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-balance'>0</span></span></td></tr>" +
                  "<tr><td>Rebate</td><td><span class='load-slip'>"+$("#currency-symbol").val()+"<span id='total-rebate'>0</span></span></td></tr>" +
                  "</table>" +
                  "</div>" +


                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +

                  "<h3 class='sleak' style='font: bold;margin-top: 10px;'>Order Channels</h3><br/>" +


                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>POS orders</h6>" +
                  "<h1 id='pos-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "<br/>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Web orders</h6>" +
                  "<h1 id='web-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<table class='ui structured selectable celled table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='9'>" +
                  "<div class='w3-row'>"+
                  "<div class='w3-col l6 m4 s4'>"+
                  DrawSearch({Method:"populateUserPOSTransactions"}).outerHTML+
                  "</div>" +
                  "<div class='w3-col l6 m8 s8 align-r'>"+
                  "<div class='ui secondary menu'>" +
                  "<div class='right menu'>" +
                  "<a class='active item trans-list-filter' onclick='switchTransLstFilter(this)'>All</a>" +
                  "<a id='staff-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Staff</a>" +
                  "<a id='customers-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Guest</a>" +
                  "<a id='others-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Others</a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th>sn</th>" +
                  "<th>Transaction id</th>" +
                  "<th>Items</th>" +
                  "<th>Total</th>" +
                  "<th>Paid</th>" +
                  "<th>Balance</th>" +
                  "<th>Channel</th>" +
                  "<th>Customer</th>" +
                  "<th>Date / time</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'></tbody>" +
                  "<tfoot>" +

                  "<th colspan='1'>" +
                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "<div class='item' data-text='300'>300</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "" +
                  "</th>" +
                  "<th colspan='9'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +

                  "</tfoot>" +
                  "</table>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"
          })});


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateUserPOSReport(arg);
              }
              else
              {
                  location.hash = "#kitchen-pos";
              }
          }});
  }
  function DrawKitchenPOSTransactionsDetails()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Transaction detail" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<input id='currently-viewed-transaction' type='hidden' value=''/>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "<div>" +
                  "<h3 class='ui sleak header'>" +
                  "<i class='shopping bag green-text icon'></i> Item list" +
                  "</h3>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='w3-col l5 m5 s12 pad-1 widget'>" +

                  "<h3 class='ui sleak header'><i class='money green-text icon'></i> Detail / Payments</h3>" +

                  "</div>" +
                  "<div class='w3-col l3 m3 s12 pad-1 align-r'>" +
                  "<!--" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "-->" +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class=''>Action<i class='caret down icon'></i></div> " +
                  "  <div class='menu'>" +
                  "    <div class='header'>Action</div>" +
                  "    <div class='item' onclick='launchPOSReceivePayment()'>Add payment</div>" +
                  "    <div class='item' onclick='launchPOSRefund()'>Add refund</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $(".ui.dropdown").dropdown();

      reSize();
      populatePosTransaction();
  }
  function DrawKitchenInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Kitchen Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#kitchen-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#kitchen-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#kitchen-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#kitchen-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:div({add:
              "<div class=''>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='curve widget w3-card'>" +
              "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='curve widget w3-card'>" +
              "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='curve widget w3-card'>" +
              "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class=''>" +
              "<div class='pad-2 align-r'>" +
					"<div class='ui top right pointing dropdown basic blue circular button'>" +
					"<i class='plus icon'></i> New Record" +
					"<div class='menu'>" +
					"<div class='header'>Records</div>" +
					"<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
					"<div class='divider'></div>" +
					"<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
					"<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
					"<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
					"<div class='ui divider'></div>" +
					"<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
					"<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
					"</div>" +
					"</div>" +
					
					"<p style='color: dimgray; margin-top: 10px;'>" +
						"Record detailed events on products usage, damages and increment" +
					"</p>" +
					
			  "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
          class:"margin-t-2"});



      _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-kitchen-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                        "<th colspan='1'>" +
                            "<div class='ui icon top left pointing dropdown button'>" +
                            "<i class='wrench blue icon'></i>" +
                            "<div class='menu'>" +
                                "<div class='header'>Group Action</div>" +
                                    "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                                    "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                                    "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                                    "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                                    "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                                    "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                                    "<div class='divider'></div>" +
                                    "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                                "</div>" +
                            "</div>" +
                        "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawKitchenInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Kitchen Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#kitchen-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#kitchen-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#kitchen-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add: div({add:
              "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
              "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

              "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

              "  </div>" +
              "</div>" +
              "</div>" +




              "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +


              "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
          class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                        "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
            openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawKitchenInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Kitchen Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#kitchen-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#kitchen-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#kitchen-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenKitchenPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Kitchen Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenKitchenPurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Kitchen Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#kitchen-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenKitchenQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#kitchen-price-enquiry";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawKitchenInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Kitchen Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/><span id='on-enquiry-page'></span>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#kitchen-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a  href='#kitchen-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#kitchen-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawKitchenInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Kitchen Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#kitchen-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#kitchen-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#kitchen-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
                    DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
                    "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenKitchenAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddKitchenInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Kitchen Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='kitchen_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawKitchenReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Kitchen Report" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateGeneralSettings()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='cart blue icon'></i> Sales" +
              "  </a>" +
              "  <a href='#kitchen-inventory-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='boxes blue icon'></i> Inventory" +
              "  </a>" +
              "  <a href='#kitchen-financial-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Financial report" +
              "  </a>" +
              "</div>"});

      _page({add:
              "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>", class:"w3-row"});


      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();
  }
  function DrawKitchenInventoryReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Kitchen Report" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateGeneralSettings()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='cart blue icon'></i> Sales" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='boxes blue icon'></i> Inventory" +
              "  </a>" +
              "  <a href='#kitchen-financial-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Financial report" +
              "  </a>" +
              "</div>"});

      _page({add:
              "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>", class:"w3-row"});


      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();
  }
  function DrawKitchenFinancialReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Kitchen Report" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateGeneralSettings()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='cart blue icon'></i> Sales" +
              "  </a>" +
              "  <a href='#kitchen-inventory-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='boxes blue icon'></i> Inventory" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Financial report" +
              "  </a>" +
              "</div>"});

      _page({add:
              "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>", class:"w3-row"});


      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();
  }
  function DrawKitchenSettings()
  {
      _page({ add: pageTop({ icon: "cog", text: "Kitchen Settings" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:div({add:

                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateGeneralSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +

                  "<div class='l-margin-t-2 w3-row' style='padding-bottom: 50px;'>" +
                  "<div class='w3-col l6 m6 s12 settings-con'>" +

                  "<input id='receipttemplate' type='hidden' value=''/>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Receipt</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l5 m6 s12'>" +
                  "<div id='receipt-image-con' class='settings-text' style='margin-top: 5px; height: 270px; overflow: hidden;'>" +
                  "<img id='receipt-image' style='width: 100%;'/>." +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l7 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<h3 id='receipt-name' class='sleak' style='margin-top: 20px;'></h3>" +
                  "<p class='sleak' style='font-weight: bold; color: gray;'>" +
                  "<span class='settings-text'>Select the proper receipt </span>" +
                  "<span class='settings-text'>template that fits the kinda</span>" +
                  "<span class='settings-text'> printer you will be printing from</span></p>" +
                  "<button class='ui compact settings-control w3-button green button' " +
                  "onclick='selectTemplate()'>Select template</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Receipt printer type</small></h6> " +
                  "<div class='l-width-l w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='a4' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>A4 Size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='letter' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Letter size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm58' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>58mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm80' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>80mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Add fields to receipt</small></h6> " +
                  "<div class='l-width-l pad-1 w3-card widget curve'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptaddess' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Address</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptlogo' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Logo</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptemail' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Email</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptsalutation' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Salutation</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='ui form'>" +
                  "<textarea id='salutation' class='wix-textbox settings-control' rows='1' " +
                  "placeholder='Write salutation' onchange='saveSettings(this)'></textarea>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low stock alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>If the low stock point of any item is " +
                  "reached, a notification message will</span> " +
                  "<span class='settings-text'>be sent to the phone and email  supplied below</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input'>" +
                  "<label class='ui blue sleak label'>Email</label>" +
                  "<input id='lowstockemail' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='lowstockphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Payment methods</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cash_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Cash</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='pos_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>POS machine</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='online_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Online</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='other_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Others</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>POS Refund order / Tax calculation method</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='refund' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Enable / Disable refund at the POS</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +

                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='compound_tax' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Compound tax</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Online order</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>" +
                  "If there are no open POS and an order is made online, a notification message</span> " +
                  "<span class='settings-text'>will be sent to the phone number below.</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='onlineorderphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +




                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateGeneralSettings();
  }
  function DrawRooms()
  {
      _page({ add: pageTop({ icon: "bed", text: "Rooms" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
        " onclick=\"location.hash='#new-room'\">" +
        "<div class='ui small blue-back sleak button'><i class='plus icon'></i>Add Rooms</div>" +
        "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

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
      _page({ add: pageTop({ icon: "bed", text: "Add Room" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +

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
  }
  function DrawRoomCategories()
  {
      _page({ add: pageTop({ icon: "shower", text: "Rooms Category" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
        " onclick=\"location.hash='#new-room-category'\">" +
        "<div class='ui small blue-back sleak button'><i class='plus icon'></i>New category</div>" +
        "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

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
  function DrawNewRoomCategory()
  {
      _page({ add: pageTop({ icon: "shower", text: "Add Room Category" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


            "<div class='' style='margin: auto;'>" +

            "<input id='roomcatid' type='hidden' value=''/>" +


            "<div class='w3-row'>" +
            "<div class='w3-col l3 m6 s12'>" +
            "<div class='pad-1'>" +
            "<div class='w3-card' style=\"min-height: 150px; " +
            "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
            "background-repeat: no-repeat; background-position: center; position: relative;\">" +
            "<img id='room-img-1' src='' style='width: 100%;'/>" +
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
            "<div class='w3-card' style=\"min-height: 150px; " +
            "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
            "background-repeat: no-repeat; background-position: center; position: relative;\">" +
            "<img id='room-img-2' src='' style='width: 100%;'/>" +
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
            "<div class='w3-card' style=\"min-height: 150px; " +
            "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
            "background-repeat: no-repeat; background-position: center; position: relative;\">" +
            "<img id='room-img-3' src='' style='width: 100%;'/>" +
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
            "<div class='w3-card' style=\"min-height: 150px; " +
            "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
            "background-repeat: no-repeat; background-position: center; position: relative;\">" +
            "<img id='room-img-4' src='' style='width: 100%;'/>" +
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
            "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("staff-list"), job: 'list staff', all: true });
      list({ con: getElement("role-list"), job: 'list role', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
        loadEditRoomCatData(arg);
      }
  }
  function DrawRoomInventory()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Room Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#room-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#room-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#room-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#room-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:div({add:
                  "<div class=''>" +


                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='boxes green icon'></i></h2> " +
                  "<h2 id='item-instock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Products in stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='pallet yellow icon'></i></h2> " +
                  "<h2 id='item-lowstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Low stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='pad-2'>" +
                  "<div class=''>" +
                  "<div class=''>" +
                  "<h2 style='float: right;'><i class='window minimize red icon'></i></h2> " +
                  "<h2 id='item-outofstock-statistic' class='sleak'>0</h2> " +
                  "<h6 class='sleak' style='font-weight: bold;'>Out of stock</h6> " +
                  "</div> " +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<div class=''>" +
                  "<div class='pad-2 align-r'>" +
                  "<div class='ui top right pointing dropdown basic blue circular button'>" +
                  "<i class='plus icon'></i> New Record" +
                  "<div class='menu'>" +
                  "<div class='header'>Records</div>" +
                  "<div class='item' onclick='recordUsage()'><i class='minus icon'></i>Record Usage</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='raisePurchaseRequest()'><i class='plus icon'></i>Raise purchase request</div>" +
                  "<div class='item' onclick='recordDamage()'><i class='minus icon'></i>Record damage</div>" +
                  "<div class='item' onclick='recordSurplus()'><i class='plus icon'></i>Record surplus</div>" +
                  "<div class='ui divider'></div>" +
                  "<div class='item' onclick='recordReturn()'><i class='minus icon'></i>Record return</div>" +
                  "<div class='item' onclick='runPriceEnquiry()'><i class='question icon'></i>Price enquiry</div>" +
                  "</div>" +
                  "</div>" +

                  "<p style='color: dimgray; margin-top: 10px;'>" +
                  "Record detailed events on products usage, damages and increment" +
                  "</p>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "</div>",  class:"l-width-9", style:"margin: auto;"}).outerHTML,
          class:"margin-t-2"});



      _page({add:div({add:
                  "<table class='ui table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='3'>"+DrawSearch({Method:"populateInventoryItems"}).outerHTML+"</th>" +
                  "<th colspan='6' style='text-align: right;'>" +
                  "<div class='ui blue buttons'>" +
                  "<button id='all-item-tab' class='ui inventory-items-filter-tab button' onclick='switchItemFilterTab(this)'>All</button>" +
                  "<button id='instock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>In stock</button>" +
                  "<button id='lowstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Low stock</button>" +
                  "<button id='outofstock-item-tab' class='ui inventory-items-filter-tab basic sleak button' onclick='switchItemFilterTab(this)'>Out of stock</button>" +
                  "</div> " +
                  "<a href='#new-room-item'><button class='ui basic sleak blue button'>Add Item</button></a>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>" +
                  "<th>Item</th>" +
                  "<th>Name</th>" +
                  "<th>Unit</th>" +
                  "<th>In stock</th>" +
                  "<th>Low point</th>" +
                  "<th>Status</th>" +
                  "<th>Action</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'>" +

                  "</tbody>" +
                  "<tfoot>" +
                  "<tr>" +
                  "<th colspan='1'>" +
                  "<div class='ui icon top left pointing dropdown button'>" +
                  "<i class='wrench blue icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Group Action</div>" +
                  "<div class='item' onclick=\"recordUsage('list')\">Record Usage</div>" +
                  "<div class='item' onclick=\"raisePurchaseRequest('list')\">Raise purchase request</div>" +
                  "<div class='item' onclick=\"recordDamage('list')\">Record Damage</div>" +
                  "<div class='item' onclick=\"recordSurplus('list')\">Record Surplus</div>" +
                  "<div class='item' onclick=\"recordReturn('list')\">Record Return</div>" +
                  "<div class='item' onclick=\"runPriceEnquiry('list')\">Start price enquiry</div>" +
                  "<div class='divider'></div>" +
                  "<div class='item' onclick='ConfirmGroupItemDelete()'>Delete</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "<th>" +

                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "</th>" +

                  "<th colspan='7'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +
                  "</tr>" +
                  "</tfoot>" +
                  "</table>",
              class:"l-width-9", style:"margin: auto;"}).outerHTML, class:"l-margin-t-2 margin-b-7"});

      $(".ui.dropdown").dropdown();

      populateInventoryItems();
  }
  function DrawRoomInventoryTimeline()
  {
      _page({ add: pageTop({ icon: "sitemap", text: "Room Item Inventory Timeline" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:"<input id='currently-viewed-item' type='hidden' value=''/>"});

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#room-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#room-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#room-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#room-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "    <div class='item'>" +
                  "      <div class='ui icon input'>" +
                  "        <input id='search-txt' type='text' placeholder='Search...' onkeyup=\"if(event.keyCode == 13){populateInventoryItemsTimeline()}\">" +
                  "        <i class='search link icon'></i>" +
                  "      </div>" +
                  "    </div>" +

                  "  <div class='right menu'>" +

                  "    <div id='timeline-item-filter' class='ui dropdown' style='margin-top: 10px;'>" +
                  "     <div class='text'>All</div>" +
                  "     <i class='dropdown icon'></i>" +
                  "     <div class='menu'>" +
                  "         <div class='item'>All</div>" +
                  "         <div class='item'>In stock</div>" +
                  "         <div class='item'>Low stock</div>" +
                  "         <div class='item'>Out of stock</div>" +
                  "     </div>" +
                  "    </div>" +

                  "  </div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='w3-col l6 m5 s12 pad-1 widget'>" +


                  "<div id='periodspan' class='ui labeled fluid input'>" +

                  "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
                  "<div class='text sleak'>This month</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='item'>This month</div>" +
                  "<div class='item'>Last month</div>" +
                  "<div class='item'>This year</div>" +
                  "<div class='item'>Last year</div>" +
                  "</div>" +
                  "</div>" +

                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
                  "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
                  "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
                  "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                  "</div>" +


                  "</div>" +
                  "<div class='w3-col l2 m3 s12 pad-1'>" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class='text'>All</div> <i class='caret down icon'></i>" +
                  "  <div class='menu'>" +
                  "    <div class='header'>Filter</div>" +
                  "    <div class='item'>All</div>" +
                  "    <div class='item'>Usage</div>" +
                  "    <div class='item'>Restocking</div>" +
                  "    <div class='item'>Surplus</div>" +
                  "    <div class='item'>Damages</div>" +
                  "    <div class='item'>Returns</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();

      reSize();

      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-filter").dropdown({onChange:function(){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $("#timeline-item-filter").dropdown({onChange:function(text, value){
              populateInventoryItemsTimeline();
          }});

      populateInventoryItemsTimeline();
  }
  function DrawRoomInventoryPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Room Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#room-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#room-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#room-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#room-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({
          add: "<div class='ui pointing menu'>" +
              "  <a id='all-pr-tab' class='active purchase-request-tab item' onclick='switchPRTabs(this)'>" +
              "      All<label id='all-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='fulfilled-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Fulfilled<label id='fulfilled-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='processing-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Processing<label id='processing-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a id='pending-pr-tab' class='item purchase-request-tab' onclick='switchPRTabs(this)'>" +
              "      Pending<label id='pending-pr-label' class='ui label sleak blue-back'>0</label>" +
              "  </a>" +
              "  <a class='pad-1'>" +
              "      <button class='ui button sleak compact blue-back' onclick='raisePurchaseRequest()'>" +
              "          <i class='shopping basket icon'></i> New Request" +
              "      </button>" +
              "  </a>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='search-txt' type='text' placeholder='Search...' onkeyup='if(event.keyCode==13){populatePurchaseRequest();}'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class: "l-pad-2 s-pad-1"
      });

      _page({ add: DrawTable(["Reference No", "Items", "Total", "Raised by", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupPrDelete",Text:"Delete request"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePurchaseRequest();
  }
  function DrawOpenRoomPurchaseRequest()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Room Purchase Request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:"<div class='ui menu'>" +
              "  <div class='item'>" +
              "    Purchase order(s) &nbsp;&nbsp;&nbsp;&nbsp;" +
              "     <button id='pr-generate-btn' class='ui primary button' onclick='generatePO()'>Generate</button>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Total: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              $("#currency-symbol").val()+"</span> <span id='total-con'>0</span></label>" +
              "  </div>" +
              "  <div class='item sleak' style='font-weight: bold;'>" +
              "     <label style='color: lightgray;'>Items: &nbsp;&nbsp;&nbsp;&nbsp;</label>" +
              "    <label class=''><span style='font-family: Lato; font-weight: normal;'>"+
              "     </span> <span id='item-count-con'>0</span></label>" +
              "  </div>" +
              "<div class='right menu'>" +
              "    <a class='ui item' onclick='editPurchaseRequest()'>" +
              "      <i class='blue pencil icon'></i> Edit" +
              "    </a>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"});

      _page({add:
              "<div class=''>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>SN</th>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Rate</th>" +
              "      <th>Total</th>" +
              "      <th>Supplier</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      populatePurchaseRequestData();
  }
  function DrawOpenRoomPurchaseOrder()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Room Purchase Order" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:
              "<div id='order-table-list'>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePurchaseOrder(arg);
      }
      else
      {
          location.hash = "#bar-purchase-request";
          ShowModal("Invalid price purchase orders");
      }
  }
  function  DrawOpenRoomQuotation()
  {
      _page({ add: pageTop({ icon: "question", text: "Quotation request" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:
              "<button class='ui blue icon button' onclick='getQuotationPrintSession(this)'>" +
              "<i class='print icon'></i></button>" +
              "<button class='ui blue sleak basic button' onclick=\"resendQuotation(this, '"+getArg()+"')\">" +
              "<i class='paper plane icon'></i> resend all</button>",
          class:"l-pad-2 s-pad-1"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l8 m12 s12'>" +
              "<div class='l-width-xl'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Item</th>" +
              "      <th>Quantity</th>" +
              "      <th>Supplier</th>" +
              "      <th>Price</th>" +
              "      <th>Total</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m12 s12'>" +
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "    <tr>" +
              "      <th>Supplier</th>" +
              "      <th>Resend</th>" +
              "    </tr>" +
              "  </thead>" +
              "  <tbody id='suppliers-table-body'>" +
              "  </tbody>" +
              "</table>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          populateSinglePriceEnquiry(arg);
      }
      else
      {
          location.hash = "#room-quotation";
          ShowModal("Invalid price enquiry session");
      }
  }
  function DrawRoomInventoryPriceInquiry()
  {
      _page({ add: pageTop({ icon: "money", text: "Room Price enquiry" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/><span id='on-enquiry-page'></span>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#room-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#room-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a  href='#room-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a href='#room-inventory-auditing' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populatePriceEnquiary"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='runPriceEnquiry()'>Price enquiry</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Reference", "Items", "Suppliers", "Channel", "Date", "Status", "Action"], {GroupAction:[{Method:"ConfirmGroupQuotationDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populatePriceEnquiary();
  }
  function DrawRoomInventoryAudits()
  {
      _page({ add: pageTop({ icon: "question", text: "Room Items Audits" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:"<div class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#room-inventory' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='pie chart blue icon'></i> Products overview" +
              "  </a>" +
              "  <a href='#room-product-timeline' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='sitemap blue icon'></i> Products timeline" +
              "  </a>" +
              "  <a href='#room-purchase-request' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='file outline blue icon'></i> Purchase request" +
              "  </a>" +
              "  <a href='#room-price-enquiry' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Price enquiry" +
              "  </a>" +
              "  <a class='active item sleak' style='font-weight: bold;'>" +
              "     <i class='question blue icon'></i> Audits" +
              "  </a>" +
              "<div class='right menu'>" +
              "  <a href='#suppliers' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='group blue icon'></i> Suppliers" +
              "  </a>" +
              "</div>" +
              "</div>"});

      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              DrawSearch({Method:"populateAudits"}).outerHTML +
              "</div>" +
              "<div class='w3-col l6 m6 s12 align-r'>" +
              "<button class='ui blue sleak button' onclick='launchAddInventoryAudit()'>New Audit</button>" +
              "</div>" +
              "</div>", class:"l-pad-2 s-pad-1"});

      _page({ add: DrawTable(["Title", "Date", "Audited", "Pending", "Surplus", "Shortage", "Action"],
              {GroupAction:[{Method:"ConfirmGroupAuditDelete",Text:"Delete"}]}).outerHTML, class: "l-pad-2 s-pad-1" });
      $(".ui.dropdown").dropdown();
      populateAudits();
  }
  function  DrawOpenRoomAudit()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Audit Inventory" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  DrawSearch({Method:"populateSingleAudit"}).outerHTML +
                  "<br/><button class='ui icon blue button' onclick='getAuditPrintSession(this)'>" +
                  "<i class='print icon'></i></button>&nbsp;&nbsp;" +
                  "<label>" +
                  "<input id='remove-audited' class='filled-in' type='checkbox' onchange='populateSingleAudit()'/>" +
                  "<span style='font-weight: bold;'>Remove audited</span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block green-back'>" +
                  "<i class='check icon'></i>" +
                  "</div>" +
                  " Accurate" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='accurate-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l6 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block blue-back'>" +
                  "<i class='arrow up icon'></i>" +
                  "</div>" +
                  " Surplus" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s6 align-r'>" +
                  "<h2 id='shortage-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l3 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<div class='widget w3-row lift-1 curve pad-1'>" +
                  "<div class='w3-col l7 m6 s6'>" +
                  "<h4 class='sleak' style='color: silver;'>" +
                  "<div class='icon-block red-back'>" +
                  "<i class='arrow down icon'></i>" +
                  "</div>" +
                  " Shortages" +
                  "</h4>" +
                  "</div>" +
                  "<div class='w3-col l5 m6 s6 align-r'>" +
                  "<h2 id='surplus-count-con' class='sleak' style='margin-top: 5px;'>0</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1"}), class:"l-pad-2 s-pad-1"});

      _page({add:
              "<table class='ui celled structured table'>" +
              "<thead>" +
              "<tr>" +
              "<th>SN</th>" +
              "<th>Item</th>" +
              "<th>Name</th>" +
              "<th>Counted</th>" +
              "<th>Status</th>" +
              "<th>Difference</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody id='table-body'>" +
              "</tbody>" +
              "<tfoot>" +
              "</tfoot>" +
              "<tr>" +
              "<th class='pad-1' colspan='1'>" +
              "<h4 class='ui header'>" +
              "<div class='content'>" +
              "<div id='perpage' class='ui inline dropdown'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</h4>" +
              "" +
              "</th>" +
              "<th class='pad-1' colspan='5'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "    </th>" +


              "</tr>" +
              "</table>",
          class:"l-pad-2 s-pad-1"});

      populateSingleAudit();
  }
  function DrawAddRoomInventoryItem()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Add New Room Item" }), clear: true });

      _page({
          add: "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +


              "<div class='' style='margin: auto;'>" +

              "<input id='inventory-item-type' type='hidden' value='room_item'/>" +

              "<input id='item-id' type='hidden' value=''/>" +
              "<input id='item-productid' type='hidden' value=''/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'>.</div>" +
              "<div class='w3-col l3 m6 s12'>" +
              "<div class='pad-1'>" +
              "<div class='w3-card' style=\"min-height: 150px; " +
              "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
              "background-repeat: no-repeat; background-position: center; position: relative;\">" +
              "<img id='item-img-1' src='' style='width: 100%;'/>" +
              "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
              "style='position:absolute; bottom:-15px; right:0px;'" +
              " onclick=\"getElement('item-file-1').click()\">" +
              "<i class='plus icon'></i>Add Image</button>" +
              "<input id='item-file-1' type='file' style='display: none;' onchange='processItemImage(this, 1)'/>" +
              "<input id='item-file-name-1' type='hidden' value=''/>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "</div>" +


              "</div>" +



              "<div class='l-width-8' style='margin: auto;'>" +

              "<br/><br/><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-name' class='wix-textbox' type='text'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Unit</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>singular</label>" +
              "<input id='item-unit-singular' class='wix-textbox' type='text' style='border-radius: 0px;'/>" +
              "<label class='ui label' style='border-radius: 0px;'>plural</label>" +
              "<input id='item-unit-plural' class='wix-textbox' type='text' style='border-radius: 0px 4px 4px 0px;'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Low stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid labeled input'><label class='ui label'>Low stock point</label>" +
              "<input id='item-lowstockpoint' class='wix-textbox' type='number' value='1' mmin='0'/></div></div>" +
              "</div><br/>" +



              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Barcode / SKU</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid action input'>" +
              "<input id='barcode' class='wix-textbox' type='text'/>" +
              "<button id='barcode-btn' class='ui blue icon button' onclick='generateBarcode()'><i class='hand pointer icon'></i></button>" +
              "</div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Opening stock</label></div></div>" +
              "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='item-openingstock' class='wix-textbox' type='number' value='0'/></div></div>" +
              "</div><br/>" +


              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Add suppliers</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='suppliers' class='ui wix-select fluid search dropdown' multiple>" +
              "<option value=''>Add suppliers</option>" +
              "</select></div>" +
              "</div><br/>" +



              "<div class='align-r'>" +
              "<button id='inventory-item-save-btn' class='ui blue sleak button' onclick='saveInventoryItem()'>Save Item</button>" +
              "</div><br/>" +


              "<div>" +
              "</div>", class: 'l-margin-t-4'
      });

      list({ con: getElement("suppliers"), job: 'list suppliers', all: true });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg != null) {
          LoadEditInventoryItem(arg);
      }
  }
  function DrawRoomMaintainance()
  {
      _page({ add: pageTop({ icon: "wrench", text: "Room Maintainance" }), clear: true });
  }
  function DrawExtraServices()
  {
      _page({ add: pageTop({ icon: "boxes", text: "Extra Services" }), clear: true });

      _page({add:"" +
              "<input id='extra-service-id' type='hidden' value=''/> " +

              "<div class='w3-row margin-t-2'>" +
              "<div class='w3-col l5 m6 s12'>" +
              "<div class='pad-1 l-width-xl' style='margin: auto;'>" +
              "<div id='service-edit-con' class='widget lift-1 pad-1 curve'>" +
              "<h4 id='edit-close-btn' style='float: right; cursor: pointer; " +
              "margin-top: 10px; display: none;' onclick='closeServiceEdit()'>" +
              "<i class='times red icon'></i>" +
              "</h4> " +
              "<h6 class='sleak'><i class='boxes blue icon'></i> Add Extra services</h6> " +
              "<div style='margin-top: 20px;'>" +
              "<div class='ui fluid input'>" +
              "<input id='service-name' class='wix-textbox' type='text' placeholder='Service name'/></div><br/>" +
              "<div class='ui labeled fluid input'>" +
              "<label class='ui label'>"+$('#currency-symbol').val()+"</label>" +
              "<input id='service-price' class='wix-textbox' type='text' placeholder='Price'/>" +
              "</div>" +
              "<br/><div class=''><button id='extraservice-save-btn' class='ui blue sleak button' " +
              "onclick='saveExtraService()'>Save</button></div> " +
              "<br/>" +
              "<p style='font-family: Lato; color: darkgray;'>" +
              "Add all extra services available. The services added will be available at the front desk and " +
              "to people who book on the hotel website." +
              "</p>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m6 s12'>" +
              "<div class='pad-1'>" +
              DrawTable(["Name","Price","Action"],{GroupAction:[{Text:"Delete Service", Method:"ConfirmGroupExtraserviceDelete"}]}).outerHTML +
              "</div> " +
              "</div> " +
              "</div>"});

      $(".ui.dropdown").dropdown();
      populateExtraservice();
  }
  function DrawRoomReport()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Room Report" }), clear: true });

      _page({add:"<input id='inventory-item-type' type='hidden' value='store_item'/>"});

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateGeneralSettings()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add:"<div id='header-menu' class='ui large menu' style='border: 0px; border-radius: 0px;'>" +
              "  <a href='#kitchen-inventory-report' class='item active sleak' style='font-weight: bold;'>" +
              "     <i class='bed blue icon'></i> Lodging" +
              "  </a>" +
              "  <a href='#kitchen-inventory-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='boxes blue icon'></i> Inventory" +
              "  </a>" +
              "  <a href='#kitchen-financial-report' class='item sleak' style='font-weight: bold;'>" +
              "     <i class='money blue icon'></i> Financial report" +
              "  </a>" +
              "</div>"});

      _page({add:
              "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>", class:"w3-row"});


      dateSpan("periodspan", {onChange:function(start, stop){
              openItemTimeline($("#currently-viewed-item").val());
          }});

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      $(".ui.dropdown").dropdown();
  }
  function DrawStaff()
  {
      _page({ add: pageTop({ icon: "user circle", text: "Staff list" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled sleak button' tabindex='0'" +
        " onclick=\"location.hash='#add-staff'\">" +
        "<div class='ui small blue-back button'><i class='plus icon'></i>New Staff</div>" +
        "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateStaff" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Staff", "Info", "Department", "OnDuty", "Racked Surcharge", "Status", "Action"],
          {
            GroupAction: [{ Text: "DIVIDER" },
            { Text: "Delete Role", Method: "ConfirmGroupStaffDelete" }]
          }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateStaff();
  }
  function DrawDepartment_Shift()
  {
      _page({ add: pageTop({ icon: "suitcase", text: "Departments & Shifts" }), clear: true });

      _page({
          class: "w3-row l-margin-t-4 margin-b-4", add: "<div class='w3-col l5 m6 s12'>" +

            "<div class='l-width-l' style='margin: auto;'>" +
            "<div >" +
            "<table class='ui fluid padded table'>" +
            "<thead>" +
            "<tr>" +
            "<td colspan='3'>" +
            "<h6 class='sleak-b' style='color: dimgray;'><i class='suitcase circular green-back icon'></i> Departments</h6>" +
            "</td>" +
            "</tr>" +
            "<tr>" +

            "<input id='department-id' type='hidden' value=''/>" +

            "<td class='w3-row' colspan='3'>" +
            "<div class='w3-col l8 m8 s8' style='padding: 3px;'>" +
            "<div class='ui small fluid input'>" +
            "<input id='department-name' class='wix-textbox' type='text' value=''/>" +
            "</div>" +
            "</div>" +
            "<div class='w3-col l4 m4 s4' style='padding: 3px;'>" +
            "<button id='save-dept-btn' class='ui blue fluid sleak button' onclick='saveDepartment()'><i class='save icon'></i>Add</button>" +
            "</div>" +
            "</td>" +
            "</tr>" +
            "</thead>" +
            "<tbody id='dept-tbl'>" +
            "<tr>" +
            "<td colspan='1'>" +
            "Marketting" +
            "</td>" +
            "<td colspan='1'>" +
            "<label class='ui sleak blue label'>73 staff</label>" +
            "</td>" +
            "<td style='text-align: right;'>" +
            "<span style='cursor: pointer;' title='Edit department'><i class='pencil blue icon'></i></span>&nbsp;&nbsp;&nbsp;" +
            "<span style='cursor: pointer;' title='Delete department'><i class='trash red icon'></i></span>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td colspan='1'>" +
            "Housekeeping" +
            "</td>" +
            "<td colspan='1'>" +
            "<label class='ui sleak blue label'>33 staff</label>" +
            "</td>" +
            "<td style='text-align: right;'>" +
            "<span style='cursor: pointer;'><i class='pencil blue icon'></i></span>&nbsp;&nbsp;&nbsp;" +
            "<span style='cursor: pointer;'><i class='trash red icon'></i></span>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td colspan='1'>" +
            "Front Desk" +
            "</td>" +
            "<td colspan='1'>" +
            "<label class='ui blue sleak label'>3 staff</label>" +
            "</td>" +
            "<td style='text-align: right;'>" +
            "<span style='cursor: pointer;'><i class='pencil blue icon'></i></span>&nbsp;&nbsp;&nbsp;" +
            "<span style='cursor: pointer;'><i class='trash red icon'></i></span>" +
            "</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "</div>" +
            "</div>" +

            "</div>" +


            "<div class='w3-col l7 m6 s12'>" +
            "<div class='l-width-xl' style=''>" +
            "<div >" +
            "<div>" +
            "<div class='widget lift-1 curve pad-1 margin-b-1'>" +
            "<h6 class='sleak-b' style='color: dimgray;'><i class='clock circular green-back icon'></i> Shifts (work hours)</h6>" +
            "<p style='font-family: Lato; line-height: 170%; color: dimgray;'>" +
            "Shifts (working hours) enables accurate attendance report and works" +
            " with staff leave to provide a complete absentiesm and attendance report and tracking" +
            "</p>" +
            "</div>" +
            "</div>" +


            "<input id='shiftid' type='hidden' value=''/>" +


            "<div id='dept-edit-con' class='widget pad-1 curve lift-1'>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l3'>" +
            "<label>Work Days</label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='sun-check' class='filled-in' type='checkbox'/><span>Sun</span></label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='mon-check' class='filled-in' type='checkbox'/><span>Mon</span></label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='tue-check' class='filled-in' type='checkbox'/><span>Tue</span></label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='wed-check' class='filled-in' type='checkbox'/><span>Wed</span></label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='thu-check' class='filled-in' type='checkbox'/><span>Thu</span></label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='fri-check' class='filled-in' type='checkbox'/><span>Fri</span></label>" +
            "</div>" +
            "<div class='w3-col l3'>" +
            "<label><input id='sat-check' class='filled-in' type='checkbox'/><span>Sat</span></label>" +
            "</div>" +
            "</div>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l7 m8 s8' style='padding: 3px;'>" +
            "<div class='ui fluid action labeled input'>" +
            "<label class='ui sleak label'>Start time</label>" +
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
            "<div class='w3-col l5 m4 s4' style='padding: 3px;'>" +
            "<div class='ui fluid input'><input id='shift-name' class='wix-textbox' type='text' placeholder='Shift Name'/></div>" +
            "</div>" +
            "</div>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l9 m8 s8' style='padding: 3px;'>" +
            "<div class='ui fluid action labeled input'>" +
            "<label class='ui sleak label'>Stop time</label>" +
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
            "<div class='w3-col l3 m4 s4' style='padding: 3px;'>" +
            "<button id='shift-btn' class='ui blue fluid sleak button' onclick='saveShift()'>Add</button>" +
            "</div>" +
            "</div>" +

            "<div id='edit-close-btn' style='padding: 3px; display: none;'>" +
            "<hr/>" +
            "<button class='ui basic red compact sleak button' onclick='closeShiftEdit()'>Cancel</button>" +
            "</div>" +

            "</div>" +
            "</div>" +



            "<table class='ui fluid padded table'>" +
            "<thead>" +

            "</thead>" +
            "<tbody id='shift-tbl'>" +
            "<tr>" +
            "<td colspan='1'>" +
            "Marketting" +
            "</td>" +
            "<td colspan='1'>" +
            "<label class='status'>73 staff</label>" +
            "</td>" +
            "<td style='text-align: right;'>" +
            "<span style='cursor: pointer;' title='Action'><i class='ellipsis vertical green icon'></i></span>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td colspan='1'>" +
            "Housekeeping" +
            "</td>" +
            "<td colspan='1'>" +
            "<label class='status'>33 staff</label>" +
            "</td>" +
            "<td style='text-align: right;'>" +
            "<span style='cursor: pointer;' title='Action'><i class='ellipsis vertical green icon'></i></span>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td colspan='1'>" +
            "Front Desk" +
            "</td>" +
            "<td colspan='1'>" +
            "<label class='status'>3 staff</label>" +
            "</td>" +
            "<td style='text-align: right;'>" +
            "<span style='cursor: pointer;' title='Action'><i class='ellipsis vertical green icon'></i></span>" +
            "</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "</div>" +
            "</div>" +
            "</div>"
      });

      $(".ui.dropdown").dropdown();

      populateShift();
      populateDepartments();
  }
  function DrawAttendance()
  {
      _page({ add: pageTop({ icon: "paint brush", text: "Staff Attendance" }), clear: true });
  }
  function DrawAnouncement()
  {
      _page({ add: pageTop({ icon: "bullhorn", text: "Staff Anouncement" }), clear: true });
  }
  function DrawStaffPolls()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Staff Polls & survey" }), clear: true });
  }
  function DrawStaffBonus()
  {
      _page({ add: pageTop({ icon: "gift", text: "Bonuses" }), clear: true });
  }
  function DrawStaffSurchage()
  {
      _page({ add: pageTop({ icon: "times", text: "Surcharge" }), clear: true });
  }
  function DrawStaffLeave()
  {
      _page({ add: pageTop({ icon: "calendar", text: "Leave & Holidays" }), clear: true });
  }
  function DrawStaffReport()
  {
      _page({ add: pageTop({ icon: "line chart", text: "Staff Report" }), clear: true });
  }
  function DrawCustomers()
  {
      _page({ add: pageTop({ icon: "group", text: "Customers" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
        " onclick=\"location.hash='#add-customer'\">" +
        "<div class='ui small blue-back button'><i class='plus icon'></i>New Customer</div>" +
        "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateCustomers" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Profile pic","Customer's Info", "Date", "GuestID", "Status", "Action"],
          { GroupAction: [{Text:"Add to custom list", Method:""},
                  { Text: "DIVIDER" },
                  { Text: "Delete Customers", Method: "ConfirmGroupCustomerDelete" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateCustomers();
  }
  function DrawCustomerProfile()
  {
      _page({ add: pageTop({ icon: "user circle", text: "Customer / Guest profile" }), clear: true });

      _page({add:
          "<div id='error-pane' class='ui w3-row negative message pad-2 l-width-l lift-1' style='display: none; margin: auto; margin-top: 10px;'>" +
          "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
          "<div class='w3-col l2 m2 s4 align-r'>" +
          "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
          "populateCustomer()\">try again</button>" +
          "</div>" +
          "</div>"});

      _page({add:div({add:
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

          "<div style='margin-top: 20px;'>" +
          "<div class='widget pad-t curve w3-card' style='background-color: whitesmoe;'>" +
          "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>Orders</h6>" +
          "</div>" +
          "</div>" +

          "</div>" +
          "</div>",  class:"w3-row l-pad-7 m-pad-1 s-pad-1"})});

      populateCustomer();
  }
  function DrawAddCustomer()
  {
      _page({ add: pageTop({ icon: "user plus", text: "Add Customer" }), clear: true });

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +
        "<div class='l-width-8' style='margin: auto;'>" +


        "<input id='customerid' type='hidden' value=''/>" +

        "<br/><br/><br/>" +




          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'>" +
          "<span style='color: transparent;'>.</span>" +
          "</div>" +
          "<div class='w3-col l4 m6 s12'>" +
          "<div class='pad-1'>" +
          "<div class='w3-card' style=\"min-height: 180px; " +
          "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
          "background-repeat: no-repeat; background-position: center; position: relative;\">" +
          "<img id='item-img-1' src='' style='width: 100%;'/>" +
          "<button id='item-btn-1' class='ui circular compact sleak blue-back button' " +
          "style='position:absolute; bottom:-15px; right:0px;'" +
          " onclick=\"getElement('item-file-1').click()\">" +
          "<i class='plus icon'></i>Profile picture</button>" +
          "<input id='item-file-1' type='file' style='display: none;' onchange='processProfileImage(this, 1)'/>" +
          "<input id='item-file-name-1' type='hidden' value=''/>" +
          "</div> " +
          "</div>" +
          "</div>" +
          "</div>" +


          "<br/><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Salutation</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select class='ui wix-select dropdown'>" +
          "<option>Mr</option>" +
          "<option>Mrs</option>" +
          "<option>Master</option>" +
          "<option>Miss</option>" +
          "<option>Dr</option>" +
          "<option>Sag</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='user circle green icon'></i><input id='customer-name' class='wix-textbox' type='text'/></div></div>" +
        "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Surame</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='customer-surname' class='wix-textbox' type='text'/></div></div>" +
        "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Phone number</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='mobile green icon'></i><input id='customer-phone' class='wix-textbox' type='text'/></div></div>" +
        "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Email</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='at green icon'></i><input id='customer-email' class='wix-textbox' type='text'/></div></div>" +
        "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Gender</label></div></div>" +
        "<div class='w3-col l8 m3 s12'>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s6'><label><input id='male-customer' class='with-gap' name='sex' type='radio' checked/><span>Male</span></label></div>" +
        "<div class='w3-col l6 m6 s6'><label><input class='with-gap' name='sex' type='radio'/><span>Female</span></label></div>" +
        "</div>" +
        "</div>" +
        "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>News-Letter</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><label><input id='sub-newsletter' class='filled-in' type='checkbox'/><span>subscribe</span></label></div>" +
        "</div><br/>";

      if ($("#get-customers-address").val() == "true")
      {
          page +=
            "<div id='address'>" +
            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Country</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><select id='customer-country' class='ui wix-select fluid search dropdown'></select></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>State</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><select id='customer-state' class='ui wix-select search fluid dropdown'></select></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>City</label></div></div>" +
            "<div class='w3-col l8 m3 s12'><select id='customer-city' class='ui wix-select search fluid dropdown'></select></div>" +
            "</div><br/>" +

            "<div class='w3-row'>" +
            "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Street Address</label></div></div>" +
            "<div class='w3-col l8 m3 s12 ui form'>" +
            "<div class='field'><textarea rows='3' id='customer-street' class='wix-textbox'></textarea></div>" +
            "</div>" +
            "</div><br/>" +
            "</div>";
      }

      page +=
        "<br/><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Guest ID</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='male green icon'></i><input id='guestid' class='wix-textbox' type='text' placeholder='Optional (if customer has lodged before)'/></div></div>" +
        "</div><br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Password</label></div></div>" +
        "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='lock green icon'></i><input id='customer-password' class='wix-textbox' type='password'/></div></div>" +
        "</div><br/>" +

        "<div class='align-r'>" +
        "<button id='save-customer-btn' class='ui blue sleak compact button' onclick='saveCustomer()'>Create account</button>" +
        "</div><br/>" +

        "<div>" +
        "</div>";

      _page({ class: 'l-margin-t-4', add: page });

      $(".ui.dropdown").dropdown();

      let arg = getArg();

      if (arg !== undefined)
      {
          loadEditCustomerData(arg);
      }
  }
  function DrawCustomersReview()
  {
      _page({ add: pageTop({ icon: "star", text: "Customers review" }), clear: true });

      _page({add:"<div class='w3-row'>" +
              "<div class='w3-col l5 m4 s12 l-pad-2 s-pad-1'>" +
              "<p style='font-family: Lato;'>" +
              "Customers remark is invaluable to any business. Get customers to write remarks and ratings" +
              "</p>" +
              "</div>" +
              "<div class='w3-col l7 m7 s12 l-pad-2 s-pad-1'>" +
              "<div class='align-r'>" +
              "<a href='#create-review'><button class='ui blue-back button'><i class=''></i> New Review</button> </a>" +
              "</div>" +
              "</div>" +
              "</div>", class:"widget"});

      _page({add:
              "<div class='l-width-l' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m5 s12'>" +
              "<div class='widget w3-card l-width-l m-width-xl curve'>" +
              "<div class='align-c pad-4'>" +
              "<h1 id='review-responses-count' class='sleak'>0</h1>" +
              "<h6 class=''>Responses</h6>" +
              "</div>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s6 l-pad-3 align-c' style='border-bottom: 1px solid whitesmoke; border-right: 1px solid whitesmoke;'>" +
              "<h1 id='sent-review-count' class='sleak blue-text'>0</h1>" +
              "<h6 class='sleak'>Sent out</h6>" +
              "</div>" +
              "<div class='w3-col l6 m6 s6 l-pad-3 align-c' style='border-bottom: 1px solid whitesmoke;'>" +
              "<h1 id='ignored-review-count' class='sleak blue-text'>0</h1>" +
              "<h6 class='sleak'>Ignored</h6>" +
              "</div>" +
              "</div>" +
              "<div class='pad-1'>" +
              "<h6 class='sleak' style='color: dimgray;'>" +
              "Response curve <small>(1 month) " +
              "<!--<i class='arrow red down icon'></i>0%-->" +
              "</small>" +
              "</h6> " +
              "<br/>" +

              "<div class=''>" +
              "<span id='response-curve' data-peity='{\"height\":\"100px\",\"width\":\"100%\"}'></span>" +
              "</div> " +

              "</div>" +
              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m7 s12'>" +

              "<div id='table-body' class=''>" +


              "</div> " +
              "<div class='w3-row widget w3-card curve' style='margin-top: 5px;'>" +

              "<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke;'>" +
              "<div class='ui icon top left pointing dropdown button'>" +
              "<i class='wrench blue icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Group Action</div>" +
              "<div class='item' onclick='ConfirmGroupReviewDelete()'>Delete</div>" +
              "</div>" +
              "</div>" +
              "</div>" +

              "<div class='w3-col l2 m3 s12 l-pad-2 s-pad-1' style=''>" +
              "<div id='perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "<div class='item' data-text='200'>200</div>" +
              "<div class='item' data-text='300'>300</div>" +
              "<div class='item' data-text='400'>400</div>" +
              "<div class='item' data-text='500'>500</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l8 m7 s12 l-pad-2 s-pad-1'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +
              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      populateReviews();
  }
  function DrawReviewResponse()
  {
      _page({ add: pageTop({ icon: "star", text: "Review response" }), clear: true });

      _page({add:
              "<div class='l-width-xxl' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m5 s12'>" +
              "<div id='review-info' class='widget w3-card l-pad-2 s-pad-1 l-width-l m-width-xl curve'>" +


              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m7 s12'>" +
              "<div id='review-body' class=''>" +

              "</div>" +
              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      let arg = getArg();
      if(arg == null)
      {
          location.hash = "#customer-review";
          ShowModal("Invalid review");
      }
      else
      {
          loadReview(arg);
      }
  }
  function DrawIndivdualResponses()
  {
      _page({ add: pageTop({ icon: "star", text: "Review response list" }), clear: true });

      let arg = getArg();
      if(arg == null)
      {
          location.hash = "#customer-review";
          ShowModal("Invalid review");
      }

      _page({add:
              "<div class='l-width-xxl' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l5 m6 s12'>" +
              "<input id='review-id-input' type='hidden' value='"+arg+"'/>" +
              "<div id='customers-list' class='widget w3-card l-width-xxl m-width-xl curve'>" +


              "</div> " +
              "<div class='w3-row widget w3-card curve l-width-xxl m-width-xl' style='margin-top: 2px;'>" +

              "<div class='w3-col l2 m3 s3 l-pad-1 s-pad-1' style=''>" +
              "<div id='perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l10 m9 s9 l-pad-1 s-pad-1'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m6 s12'>" +
              "<div id='review-con' class=''>" +

              "</div>" +
              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();


      loadReviewResponses(arg);
  }
  function DrawItemRatingList()
  {
      _page({ add: pageTop({ icon: "star", text: "Rating Item listing" }), clear: true });

      let arg = getArg();
      if(arg == null)
      {
          location.hash = "#customer-review";
          ShowModal("Invalid review item");
      }

      _page({add:
              "<div class='l-width-xxl' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m5 s12'>" +
              "<input id='review-item-id-input' type='hidden' value='"+arg+"'/>" +
              "<div id='item-detail-con' class='widget w3-card l-pad-2 s-pad-1 l-width-l m-width-xl curve'>" +


              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m7 s12'>" +
              "<div id='reply-list-con' class=''>" +

              "</div>" +

              "<div class='w3-row widget w3-card curve' style='margin-top: 2px;'>" +

              "<div class='w3-col l2 m3 s3 l-pad-1 s-pad-1' style=''>" +
              "<div id='perpage' class='ui inline dropdown' style='margin-top: 10px;'>" +
              "<div class='text sleak'> 25</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='header'>Show per page</div>" +
              "<div class='active item' data-text='25'>25</div>" +
              "<div class='item' data-text='50'>50</div>" +
              "<div class='item' data-text='100'>100</div>" +
              "</div>" +
              "</div>" +
              "</div> " +

              "<div class='w3-col l10 m9 s9 l-pad-1 s-pad-1'>" +
              "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
              "      </div>" +
              "</div> " +

              "</div>" +

              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      $(".ui.dropdown").dropdown();

      loadReviewItem(arg);
  }
  function DrawAddCustomerReview()
  {
      _page({ add: pageTop({ icon: "star", text: "Create review" }), clear: true });


      _page({add:"<div class='w3-row'>" +
              "<div class='w3-col l5 m4 s12 l-pad-2 s-pad-1'>" +
              "<p class='' style='font-family: Lato;'>" +
              "Use the review components to design concreat reviews. <a href=''>Learn</a> how to use this tool" +
              "</p>" +
              "</div>" +
              "<div class='w3-col l7 m7 s12 l-pad-2 s-pad-1'>" +
              "<div class='align-r'>" +
              "<button id='review-save-btn' class='ui blue-back button' onclick='saveReview()'>" +
              "<i class='save icon'></i> Save review</button>" +
              "</div>" +
              "</div>" +
              "</div>", class:"widget"});

      _page({add:
              "<div class='l-width-l' style='margin: auto;'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m5 s12'>" +
              "<div class='l-width-l m-width-xl curve'>" +
              "<div class='w3-row'>" +
              "</div>" +
              "<div class='pad-1 w3-card widget curve'>" +
              "<h6 class='sleak-b'>Add Review Item</h6>" +
              "<p style='color: dimgray;'>" +
              "Click on the components below to add and customize them on your review" +
              "</p> " +
              "</div>" +

              "<div class='w3-container hoverable pad-1 widget curve w3-hoverable' " +
              "style='margin-top: 5px; cursor: pointer;' onclick='addStarRating()'>" +
              "<h4 style='float: left;  margin: 0px; margin-top: 10px; color: dimgray;'>Star rating</h4> " +
              "<h6 style='float: right;'>" +
              "<i class='star green-txt icon'></i>" +
              "<i class='star green-txt icon'></i>" +
              "<i class='star green-txt icon'></i>" +
              "<i class='star icon' style='color: lightgray;'></i>" +
              "</h6>" +
              "</div>" +

              "<div class='w3-container hoverable pad-1 widget curve w3-hoverable' " +
              "style='margin-top: 5px; cursor: pointer;' onclick='addHeartRating()'>" +
              "<h4 style='float: left;  margin: 0px; margin-top: 10px; color: dimgray;'>Heart rating</h4> " +
              "<h6 style='float: right;'>" +
              "<i class='heart red icon'></i>" +
              "<i class='heart red icon'></i>" +
              "<i class='heart red icon'></i>" +
              "<i class='heart icon' style='color: lightgray;'></i>" +
              "</h6>" +
              "</div>" +


              "<div class='w3-container hoverable pad-1 widget curve w3-hoverable' " +
              "style='margin-top: 5px; cursor: pointer;' onclick='addMutipleselect()'>" +
              "<h4 style='float: left;  margin: 0px; margin-top: 10px; color: dimgray;'>Multi select</h4> " +
              "<h6 style='float: right;'>" +
              "<i class='check square icon' style='color: gray;'></i>" +
              "<i class='check square icon' style='color: gray;'></i>" +
              "<i class='check square icon' style='color: gray;'></i>" +
              "<i class='square outline icon' style='color: gray;'></i>" +
              "</h6>" +
              "</div>" +


              "<div class='w3-container hoverable pad-1 widget curve w3-hoverable' " +
              "style='margin-top: 5px; cursor: pointer;' onclick='addSingleselect()'>" +
              "<h4 style='float: left;  margin: 0px; margin-top: 10px; color: dimgray;'>Single select</h4> " +
              "<h6 style='float: right;'>" +
              "<i class='circle outline icon' style='color: gray;'></i>" +
              "<i class='circle outline icon' style='color: gray;'></i>" +
              "<i class='dot circle icon' style='color: gray;'></i>" +
              "<i class='circle outline icon' style='color: gray;'></i>" +
              "</h6>" +
              "</div>" +


              "<div class='w3-container hoverable pad-1 widget curve w3-hoverable' " +
              "style='margin-top: 5px; cursor: pointer;' onclick='addCommentbox()'>" +
              "<h4 style='float: left;  margin: 0px; margin-top: 10px; color: dimgray;'>Comment box</h4> " +
              "<h6 style='float: right;'>" +
              "<i class='pencil blue icon'></i>" +
              "</h6>" +
              "</div>" +

              "</div> " +
              "</div>" +
              "<div class='w3-col l8 m7 s12'>" +

              "<div id='table-body' class=''>" +


              "<input id='review-id' type='hidden' value=''/>" +
              "</div> " +
              "<div class='w3-row widget curve' style=''>" +
              "<div class='ui fluid large input'><input id='review-title' class='wix-textbox' type='text' placeholder='Review Title'/></div>" +
              "</div>" +
              "<div class='ui form' style='margin-top: 5px;'>" +
              "<div class='field'><textarea id='review-body' class='wix-textbox' rows='4' placeholder='Review body'></textarea></div>" +
              "</div>" +

              "<div id='review-dynamic-con'></div>" +

              "</div></div></div>",
          class:"l-pad-2 s-pad-1"});

      let arg = getArg();

      if(arg != null)
      {
          loadEditReview(arg);
      }
  }
  function DrawDiscount()
  {
      _page({ add: pageTop({ icon: "money", text: "Discount" }), clear: true });

      _page({
          add: div({add:
            "<div class='w3-col l6 m6 s12'>" +
          DrawSearch({method:""}).outerHTML +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12 align-r'>" +
                  "<a href='#discount-analytics' class=''>" +
                  "    <button class='ui sleak basic blue button'>Analytics</button>" +
                  "  </a>" +
                  "  <a href='#new-discount' class=''>" +
                  "    <button class='ui button sleak blue-back'>Create Discount</button>" +
                  "  </a>" +
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
      _page({ add: pageTop({ icon: "money", text: "Create discount" }), clear: true });


      let days = "";
      for(let i = 0; i < 31; i++)
      {
          days += "<option value='"+(i + 1)+"'>"+(i + 1)+"</option>";
      }


      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +
          "<div class='l-width-8' style='margin: auto;'>" +

          "<input id='discountid' type='hidden' value=''/>" +
          "<input id='discountstatus' type='hidden' value='true'/>" +

          "<br/><br/><br/>" +


          "<div class='w3-row margin-t-1'>" +
          "<div class='w3-col l4 m3 s12'><span style='color: transparent;'>.</span></div>" +
          "<div class='w3-col l8 m3 s12'><h6 class='sleak-b' style='color: dimgray;'>Coverage</h6></div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>What's covered</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='discount-main-select' class='ui fluid  dropdown wix-select' onchange='discountCoverageChanged(this)'>" +
          "<option>Lodging</option>" +
          "<option>Restaurant</option>" +
          "<option>Bar</option>" +
          "<option>Bakery</option>" +
          "<option>Laundry</option>" +
          "<option>Pool</option>" +
          "<option>Extra services</option>" +
          "</select>" +
          "</div>" +
          "</div>" +


          "<div id='lodging-select-con' class='w3-row' style='margin-top: 4px;'>" +
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

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

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
  function DrawDiscountAnalytics()
  {
      _page({ add: pageTop({ icon: "money", text: "Discount analytics" }), clear: true });

      _page({add: "<div>" +
              "<div class='ui labeled input'>" +

              "<div class='ui dropdown w3-card-2 blue-back label'>" +
              "<div class='text sleak'>This month</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "<div class='item'>Custom</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input class='wix-textbox' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input class='wix-textbox' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>", class:"l-pad-2 s-pad-1"});


      let graphCon = document.createElement("div");
      graphCon.className = "s-pad-1 l-pad-2 m-pad-1";
      graphCon.innerHTML = "<div class='widget curve lift-1 w3-row'>" +
          "<div class='w3-col l9 m8 s12' style='border-right: 1px solid lightgray;'>" +
          "<div class='pad-1'>" +
          "<h5 class='sleak' style='color: dimgray;'>Discound periodic usage</h5>" +
          "</div>" +
          "<div class='l-pad-1 s-pad-1' id='discount-use-graph' style='width: 100%; height: 350px;'></div>" +
          "</div>" +
          "<div class='w3-col l3 m4 s12'>" +
          "<div class='pad-2'><h2 class='green' style='text-align: right; font-family: quicksandregular;'>" +
          "<span style='float: left;'><i class='refresh circular icon' style='font-size: 86%;'></i></span>543</h2>" +
          "<h6 class='sleak' style='color: dimgray; text-align: right;'>" +
          "<small><small class='green'><i class='circle icon w3-text-shadow-white'></i></small></small>Use count</h6>" +
          "<h2 class='blue margin-t-6' style='text-align: right; font-family: quicksandregular;'>" +
          "<span style='float: left;'><i class='money circular icon' style='font-size: 86%;'></i></span>"+
          "<span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 23,543</h2>" +
          "<h6 class='sleak' style='color: dimgray;font-family: montserrat; text-align: right;'>" +
          "<small><small class='blue'><i class='circle icon w3-text-shadow-white'></i></small></small>Total discounted</h6>" +
          "</div></div>" +
          "</div>";
      document.getElementById("page").appendChild(graphCon);


      let h = "50px";
      let w = "100px";


      _page({add:"<div class='w3-col l8 m8 s12'>" +
              "<div class='pad-1'>" +
              "<table class='ui basic no-line white pad-1 sleak table' style='font-weight:  bold; font-size: 16px;'>" +
              "<tbody>" +
              "<tr>" +
              "<td>Booking</td>" +
              "<td>123</td>" +
              "<td><span id='booking-chart' data-peity='{\"width\":\"120px\",\"height\":\"40px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+"</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Restaurant</td>" +
              "<td>123</td>" +
              "<td><span id='restarant-chart' data-peity='{\"width\":\"120px\",\"height\":\"40px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100)) +
              "</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Bar</td>" +
              "<td>123</td>" +
              "<td><span id='bar-chart' data-peity='{\"width\":\"120px\",\"height\":\"40px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100)) +
              "</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Bakery</td>" +
              "<td>123</td>" +
              "<td><span id='bakery-chart' data-peity='{\"width\":\"120px\",\"height\":\"40px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100)) +
              "</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Laundry</td>" +
              "<td>123</td>" +
              "<td><span id='laundry-chart' data-peity='{\"width\":\"120px\",\"height\":\"40px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100)) +
              "</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Pool</td>" +
              "<td>123</td>" +
              "<td><span id='pool-chart' data-peity='{\"width\":\"120px\",\"height\":\"50px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100)) +
              "</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Extra services</td>" +
              "<td>123</td>" +
              "<td><span id='service-chart' data-peity='{\"width\":\"120px\",\"height\":\"40px\"}'>" +
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100))+","+
              (Math.floor(Math.random() * 100))+","+(Math.floor(Math.random() * 100)) +
              "</span></td>" +
              "<td>12%</td>" +
              "<td><span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> 34,433</td>" +
              "</tr>" +
              "</tbody>" +
              "</table>" +
              "</div>" +
              "</div>" +
          "<div class='w3-col l4 m4 s12'>" +
              "<div class='pad-1'>" +
              "<div class='widget pad-2 curve lift-1'>" +
              "<div id='discoungt-donut'></div>" +
              "<div>" +
              "<label style='font-weight: bold;'><i class='square icon'></i> Discound used online</label><br/>" +
              "<label style='font-weight: bold;'><i class='square icon'></i> Discound at POS</label><br/>" +
              "<label style='font-weight: bold;'><i class='square icon'></i> Discound at the front desk</label>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>",
          class:"w3-row pad-1"});



      $('[data-toggle="datepicker"]').datepicker({autoHide:true});
      $(".ui.dropdown").dropdown();

      $("#booking-chart").peity('line', {fill:["rgba(64,153,255,0)"],strokeWidth:3, stroke:"rgb(64,153,255)"});
      $("#restarant-chart").peity('line', {fill:["transparent"],strokeWidth:3, stroke:"rgb(64,153,255)"});
      $("#bar-chart").peity('line', {fill:["rgba(46,216,182,0)"],strokeWidth:3, stroke:"rgb(46,216,182)"});
      $("#bakery-chart").peity('line', {fill:["rgba(255,83,112,0)"],strokeWidth:3, stroke:"rgb(255,83,112)"});
      $("#laundry-chart").peity('line', {fill:["rgba(64,153,255,0)"],strokeWidth:3, stroke:"rgb(64,153,255)"});
      $("#pool-chart").peity('line', {fill:["rgba(64,153,255,0)"],strokeWidth:3, stroke:"rgb(46,216,182)"});
      $("#service-chart").peity('line', {fill:["rgba(64,153,255,0)"],strokeWidth:3, stroke:"rgb(255,83,112)"});

      loadDiscountAnalytics();
  }
  function DrawCoupon()
  {
      _page({ add: pageTop({ icon: "ticket", text: "Coupon" }), clear: true });

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
            "  <a href='#new-coupon' class='pad-1'>" +
            "    <button class='ui button sleak compact blue-back'>New Coupon</button>" +
            "  </a>" +
            "  <a href='#coupon-analytics' class='pad-1'>" +
            "    <button class='ui sleak compact basic blue button'>Coupon Analytics</button>" +
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
      _page({ add: pageTop({ icon: "ticket plus", text: "Create Coupon" }), clear: true });

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='margin: auto; border: 3px solid rgb(240,240,240); margin-bottom: 50px;'>" +
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
        "<select id='coupon-main-select' class='ui fluid  dropdown wix-select' multiple onchange='coverageChanged(this)'>" +
        "<option>Lodging</option>" +
        "<option>Restaurant</option>" +
        "<option>Bar</option>" +
        "<option>Bakery</option>" +
        "<option>Laundry</option>" +
        "<option>Pool</option>" +
        "<option>Extra services</option>" +
        "</select>" +
        "</div>" +
        "</div>" +


        "<div id='lodging-select-con' class='w3-row' style='margin-top: 4px; display: none;'>" +
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

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      let arg = getArg();
      if(arg != null)
      {
          loadEditCoupon(arg);
      }
  }
  function DrawCouponDetails()
  {
      _page({ add: pageTop({ icon: "ticket", text: "Coupon details" }), clear: true });
  }
  function DrawCouponAnalytics()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Coupon analytics" }), clear: true });
  }
  function DrawCouponHistory()
  {
      _page({ add: pageTop({ icon: "history", text: "Coupon History" }), clear: true });
  }
  function DrawReservations()
  {
      _page({ add: pageTop({ icon: "calendar alternate outline", text: "Reservations" }), clear: true });


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
              "     <i class='red calendar alternate outline icon'></i> Abandoned" +
              "  </a>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input id='reservation-due-date' type='text' data-toggle='datepicker' " +
              "             placeholder='Select due date' onchange='populateReservations(); ehChange()'>" +
              "        <i id='reservation-cancel-btn' class='blue calendar alternate outline icon' onclick='cancelDate()'></i>" +
              "      </div>" +
              "    </div>" +
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
      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      populateReservations();
  }

  function DrawReservation()
  {
      _page({ add: pageTop({ icon: "calendar alternate outline", text: "Reservation Detail" }), clear: true });

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
                  "<th><span class='load-slip'>Taxes</span></th>" +
                  "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='taxes'>0</span></span></td>" +
                  "</tr>" +
                  "<tr>" +
                  "<th><span class='load-slip'>Discount</span></th>" +
                  "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='discount'>0</span></span></td>" +
                  "</tr>" +
                  "<tr>" +
                  "<tr>" +
                  "<th><span class='load-slip'>Coupon discount</span></th>" +
                  "<td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='coupon-discount'>0</span></span></td>" +
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

                  "<div class='widget curve w3-card' style='margin-top: 20px;'>" +
                  "<div class='pad-t' style='background-color: rgb(250,250,250); border-radius: 4px 4px 0px 0px;'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>" +
                  "Food reservations<span id='food-res-count' style='float: right; margin-right: 10px;'>0</span></h6>" +
                  "</div>" +
                  "<div id='food-reservations-con'></div>" +
                  "</div>" +

                  "<div class='widget curve w3-card' style='margin-top: 20px;'>" +
                  "<div class='pad-t' style='background-color: rgb(250,250,250); border-radius: 4px 4px 0px 0px;'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>" +
                  "Drinks reservations<span id='drink-res-count' style='float: right; margin-right: 10px;'>0</span></h6>" +
                  "</div>" +
                  "<div id='drinks-reservation-con'></div>" +
                  "</div>" +

                  "<div class='widget curve w3-card' style='margin-top: 20px;'>" +
                  "<div class='pad-t' style='background-color: rgb(250,250,250); border-radius: 4px 4px 0px 0px;'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; margin-left: 10px; font-size: 14px;'>" +
                  "Pastries reservations<span id='pastry-res-count' style='float: right; margin-right: 10px;'>0</span></h6>" +
                  "</div>" +
                  "<div id='pastry-reservation-con'></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>",
              class:"w3-row l-pad-7 m-pad-1 s-pad-1"})});

      populateReservation();
  }

  function DrawLoging()
  {
      _page({ add: pageTop({ icon: "bed", text: "Lodging" }), clear: true });

      _page({ add:
              "<div class='w3-row'>" +
              "<div class='w3-col l10 m9 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget curve w3-card l-width-xl m-width-l'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
              "<h6 style='text-align: center;'><i class='green bed inverted circular icon'></i></h6>" +
              "</div>" +
              "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
              "<h6 class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>23,23</h6>" +
              "<h6 class='sleak' style='text-align: right; font-weight: bold; color: silver; margin-right: 10px;'>" +
              "<small>Currently lodged</small>" +
              "</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget curve w3-card l-width-xl m-width-l'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
              "<h6 style='text-align: center;'><i class='blue calendar inverted alternate outline circular icon'></i></h6>" +
              "</div>" +
              "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
              "<h6 class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>10</h6>" +
              "<h6 class='sleak' style='text-align: right; font-weight: bold; color: silver; margin-right: 10px;'>" +
              "<small>Today's check-ins</small>" +
              "</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l4 m4 s12'>" +
              "<div class='widget curve w3-card l-width-xl m-width-l'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4 pad-1' style='border-right: 1px solid lightgray;'>" +
              "<h6 style='text-align: center;'>" +
              "<i class='red calendar inverted times outline circular icon'></i>" +
              "</h6>" +
              "</div>" +
              "<div class='w3-col l8 m8 s8 pad-t' style=''>" +
              "<h6 class='sleak' style='text-align: right; font-weight: bold; margin-right: 10px;'>12</h6>" +
              "<h6 class='sleak' style='text-align: right; font-weight: bold; color: silver; margin-right: 10px;'>" +
              "<small>Today's check-outs</small>" +
              "</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m3 s12 align-r'>" +
              "<button class='ui blue compact button'><i class='history icon'></i> History</button>" +
              "<button class='ui red compact button' style='margin-top: 5px;'><i class='clipboard check icon'></i> Check-outs</button>" +
              "</div>" +
              "</div>",
          class:"l-pad-2"});

      _page({add:"<div class='ui pointing menu'>" +
              "  <a class='active item'>" +
              "     All" +
              "  </a>" +
              "  <a class='item'>" +
              "     <i class='green calendar alternate outline icon'></i> Due check-out" +
              "  </a>" +
              "  <a class='item'>" +
              "     <i class='red calendar times outline icon'></i> Overdue" +
              "  </a>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input type='text' placeholder='Select check-out date'>" +
              "        <i class='blue calendar alternate outline icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  <div class='right menu'>" +
              "    <div class='item'>" +
              "      <div class='ui transparent icon input'>" +
              "        <input type='text' placeholder='Search...'>" +
              "        <i class='search link icon'></i>" +
              "      </div>" +
              "    </div>" +
              "  </div>" +
              "</div>", class:"l-pad-2 s-pad-1 m-pad-1"})


      _page({
          add: DrawTable(["Guest", "Checkin-checkout", "Room(s)", "Adults", "Children", "Amount", "Paid", "Action"],
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


      referenceCon.appendChild(refTable);
      _page({ add: referenceCon });

      $(".ui.dropdown").dropdown();
  }

  function DrawFrontDesk()
  {
      _page({ add: pageTop({ icon: "usd", text: "Front Desk" }), clear: true });

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateFrontDeskReport()\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m9 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m3 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateFrontDeskReport()'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>", class:"w3-row"});


      _page({add:div({add:
                  "<div class=''>" +
                  "<div class=''>" +
                  "<div class='widget curve w3-card wix-textbox pad-1 w3-row' style='margin-bottom: 3px;'>" +
                  "<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Frontdesk User</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'><span class='status'>Status</span></div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Booked</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Total</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Paid</h5>" +
                  "</div>" +
                  "<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
                  "<h5 class='sleak' style='color: black; font-weight: bold;'>Balance</h5>" +
                  "</div>" +
                  "</div>" +
                  "<div id='pos-list-con'>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:""})});


      _page({add:div({add:

                  "<div class='w3-row'>" +


                  "<div class='w3-col l9 m9 s12'> " +

                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Total booking</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='general-total-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Booked rooms</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-items-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h2 class='sleak load-slip'>" +
                  "<span id='general-customers-con'>0</span>" +
                  "</h2>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h2 class='' style='margin-top: 5px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h2>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +




                  "<div class='pad-1'>" +
                  "<div class='widget curve w3-card'>" +
                  "<div class='pad-1 w3-container'>" +
                  "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average daily booking plot</h5>" +
                  "<button id='plot-customer' class='ui compact sleak right floated blue button' onclick=\"switchDailyPlotType('customer')\">Customers</button>" +
                  "<button id='plot-items' class='ui compact sleak right floated button' onclick=\"switchDailyPlotType('items')\">Items</button>" +
                  "</div>" +
                  "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 295px;'></div>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +
                  "<div class='w3-col l3 m3 s12'>" +
                  "<div class='l-pad-2 s-pad-1 widget curve w3-card'>" +
                  "<h6 class='sleak load-slip' style='font-weight: bold;'>Booking channels</h6>" +
                  "<div id='sale-source-donut'></div>" +
                  "<i class='square icon' style='color: rgb(0,100,140);'></i> <label class='load-slip'>Frontdesk</label><br/>" +
                  "<i class='square icon' style='color: whitesmoke;'></i> <label class='load-slip'>Online</label><br/>" +
                  "</div>" +
                  "</div>" +

                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='up arrow circular green icon'></i> " +
                  "Top 5 most booked room category" +
                  "</h3>" +
                  "</div>" +

                  "<div id='most-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class=''  style='margin: auto;'>" +
                  "<div class='curve widget w3-card'>" +
                  "<div class='w3-row' style='margin: auto;'>" +

                  "<div class='pad-2' style='border-bottom: 1px solid lightgray;'>" +
                  "<h3 class='sleak load-slip'>" +
                  "<i class='down arrow circular red icon'></i> " +
                  "Top 5 least booked room category" +
                  "</h3>" +
                  "</div>" +

                  "<div id='least-sold-con'></div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });



      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              populateFrontDeskReport();
          }});

      //populatePOSReport();
  }

  function DrawFrontdeskTransactions()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Frontdesk Transactions" }), clear: true });

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateUserFrontdeskReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });

      _page({add: "<div class='w3-col l6 m7 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateUserFrontdeskReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "<div class='w3-col l4 m3 s12 l-pad-2 s-pad-1 align-r'>" +
              "<h5 id='pos-user-name' class='sleak' style='font-weight: bold;'></h5>" +
              "</div>", class:"w3-row"});



      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Total sold</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span>" +
                  "<span id='total-sold-amount'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='money circular blue-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Booked rooms</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='sold-items-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='box circular yellow-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Customers</h6>" +
                  "<h1 class='sleak load-slip'>" +
                  "<span style='font-family: segoe ui;'></span>" +
                  "<span id='customers-con'>0</span>" +
                  "</h1>" +
                  "</div>" +
                  "<div class='w3-col l4 m5 s5 align-r'>" +
                  "<h4 class='ui icon header' style='margin-top: 10px;'>" +
                  "<i class='user circle circular green-text icon'></i>" +
                  "</h4>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<div class='w3-row'>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +
                  "<div class='width-xl' style='margin: auto;'>" +

                  "<h3 class='sleak load-slip' style='font: bold;margin-top: 10px;'>Payment method</h3>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato; font-weight: normal;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='cash-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Cash</label>" +
                  "<div id='cash-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='pos-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>POS</label>" +
                  "<div id='pos-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='web-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Online</label>" +
                  "<div id='web-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +


                  "<div style='margin-top: 30px;'>" +
                  "<label class='sleak load-slip' style='float: right; font-weight: bold;'>"+
                  "<span style='font-family: Lato;'>"+$("#currency-symbol").val()+"</span> " +
                  "<span id='others-amount'>0</span>" +
                  "</label>" +
                  "<label class='sleak' style='font-weight: bold;'>Others</label>" +
                  "<div id='others-bar' class='ui tiny blue progress'><div class='bar'></div></div>" +
                  "</div>" +

                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l' style='margin: auto;'>" +
                  "<div class=''>" +
                  "<div class='w3-row' style='margin: auto;'>" +


                  "<div>" +
                  "<table class='ui very padded basic table' style='background-color: white;'>" +
                  "<tr><th colspan='2'>Transaction details</th></tr>" +
                  "<tr><td>Total</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-sale'>0</span></span></td></tr>" +
                  "<tr><td>Paid</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-paid'>0</span></span></td></tr>" +
                  "<tr><td>Balance</td><td><span class='load-slip'>"+$("#currency-symbol").val()+" <span id='total-balance'>0</span></span></td></tr>" +
                  "<tr><td>Rebate</td><td><span class='load-slip'>"+$("#currency-symbol").val()+"<span id='total-rebate'>0</span></span></td></tr>" +
                  "</table>" +
                  "</div>" +


                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l4 m4 s12'>" +
                  "<div class='pad-t l-width-l'  style='margin: auto;'>" +
                  "<div class='curve widget w3-card pad-1'>" +

                  "<h3 class='sleak' style='font: bold;margin-top: 10px;'>Booking Channels</h3><br/>" +


                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Frontdesk bookings</h6>" +
                  "<h1 id='pos-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "<br/>" +
                  "<div class='w3-row width-9' style='margin: auto;'>" +
                  "<div class='w3-col l8 m7 s7'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>Online bookings</h6>" +
                  "<h1 id='web-orders' class='sleak load-slip'>0</h1>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"})
      });


      _page({add:div({add:
                  "<table class='ui structured selectable celled table'>" +
                  "<thead>" +
                  "<tr>" +
                  "<th colspan='9'>" +
                  "<div class='w3-row'>"+
                  "<div class='w3-col l6 m4 s4'>"+
                  DrawSearch({Method:"populateUserFrontDeskTransactions"}).outerHTML+
                  "</div>" +
                  "<div class='w3-col l6 m8 s8 align-r'>"+
                  "<div class='ui secondary menu'>" +
                  "<div class='right menu'>" +
                  "<a class='active item trans-list-filter' onclick='switchTransLstFilter(this)'>All</a>" +
                  "<a id='staff-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Staff</a>" +
                  "<a id='customers-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Guest</a>" +
                  "<a id='others-filter' class='item trans-list-filter' onclick='switchTransLstFilter(this)'>Others</a>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</th>" +
                  "</tr>" +
                  "<tr>" +
                  "<th>sn</th>" +
                  "<th>Transaction id</th>" +
                  "<th>Rooms</th>" +
                  "<th>Total</th>" +
                  "<th>Paid</th>" +
                  "<th>Balance</th>" +
                  "<th>Channel</th>" +
                  "<th>Customer</th>" +
                  "<th>Date / time</th>" +
                  "</tr>" +
                  "</thead>" +
                  "<tbody id='table-body'></tbody>" +
                  "<tfoot>" +

                  "<th colspan='1'>" +
                  "<h4 class='ui header'>" +
                  "<div class='content'>" +
                  "<div id='perpage' class='ui inline dropdown'>" +
                  "<div class='text sleak'> 25</div>" +
                  "<i class='dropdown icon'></i>" +
                  "<div class='menu'>" +
                  "<div class='header'>Show per page</div>" +
                  "<div class='active item' data-text='25'>25</div>" +
                  "<div class='item' data-text='50'>50</div>" +
                  "<div class='item' data-text='100'>100</div>" +
                  "<div class='item' data-text='200'>200</div>" +
                  "<div class='item' data-text='300'>300</div>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "</h4>" +
                  "" +
                  "</th>" +
                  "<th colspan='9'>" +
                  "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
                  "      </div>" +
                  "    </th>" +

                  "</tfoot>" +
                  "</table>",
              class:"l-pad-2 s-pad-1", style:"padding-top: 0px;"
          })});


      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"Today",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  populateUserFrontdeskReport(arg);
              }
              else
              {
                  location.hash = "#front-desk";
              }
          }});
  }

  function DrawFrontdeskTransactionsDetails()
  {
      _page({ add: pageTop({ icon: "file outline", text: "Transaction detail" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<input id='currently-viewed-transaction' type='hidden' value=''/>"});


      _page({add: div({add:
                  "<div class='w3-col l4 m4 s12 pad-1 widget' style='border-right: 1px solid lightgray;'>" +
                  "<div class='ui fluid secondary menu'>" +
                  "<div>" +
                  "<h3 class='ui sleak header'>" +
                  "<i class='shopping bag green-text icon'></i> Item list" +
                  "</h3>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<div class='w3-col l5 m5 s12 pad-1 widget'>" +

                  "<h3 class='ui sleak header'><i class='money green-text icon'></i> Detail / Payments</h3>" +

                  "</div>" +
                  "<div class='w3-col l3 m3 s12 pad-1 align-r'>" +
                  "<!--" +
                  "<div class='ui icon blue buttons'>" +
                  "  <button class='ui button' onclick=\"getPrintSession(this)\"><i class='print icon'></i></button>" +
                  "</div> " +
                  "-->" +
                  "<div id='timeline-filter' class='ui icon top right blue basic pointing dropdown button'>" +
                  "  <div class=''>Action<i class='caret down icon'></i></div> " +
                  "  <div class='menu'>" +
                  "    <div class='header'>Action</div>" +
                  "    <div class='item' onclick='launchPOSReceivePayment()'>Add payment</div>" +
                  "    <div class='item' onclick='launchPOSRefund()'>Add refund</div>" +
                  "   </div>" +
                  "</div>" +
                  "</div>",
              class:"w3-row widget", style:"border-bottom: 1px solid lightgray;", id:"page-control-menu"}),
          class:""});

      _page({add:div({add:
                  "<div id='inventory-item-table-con' class='w3-col l4 m4 s12' style='overflow-y: scroll; height: 0px;'>" +
                  "<table id='timeline-table' class='ui selectable table' style='border-radius: 0px;'></table>" +
                  "</div>" +
                  "<div id='inventory-timeline-con' class='w3-col l8 m8 s12' style='overflow-y: scroll; height: 0px;'></div>",
              class:"w3-row"})});

      $(".ui.dropdown").dropdown();

      reSize();
      populatePosTransaction();
  }

  function DrawLodgingReport()
  {
      _page({ add: pageTop({ icon: "pie chart", text: "Lodging report" }), clear: true });

      _page({add:"<input id='report-item-type' type='hidden' value='kitchen_item'/>"});

      _page({add:"<div class='widget'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l5 m6 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l3 m4 s5'>" +
              "<div class='pad-2'>" +
              "<img id='item-image' src='' style='width: 90px; border-radius: 4px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l9 m8 s7'>" +
              "<div class='pad-2'>" +
              "<h6 id='item-name' class='sleak load-slip' style='font-weight: bold;'>Item name</h6>" +
              "<h6 id='item-category' class='sleak load-slip'>Category</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m6 s12'>" +

              "<br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l10 m10 s12 l-pad-2 s-pad-1'>" +
              "<div id='periodspan' class='ui labeled fluid input'>" +

              "<div class='ui date-span-dropdown dropdown blue-back w3-card-2 label'>" +
              "<div class='text sleak'>Today</div>" +
              "<i class='dropdown icon'></i>" +
              "<div class='menu'>" +
              "<div class='item'>Today</div>" +
              "<div class='item'>Yesterday</div>" +
              "<div class='item'>This week</div>" +
              "<div class='item'>Last week</div>" +
              "<div class='item'>This month</div>" +
              "<div class='item'>Last month</div>" +
              "<div class='item'>This year</div>" +
              "<div class='item'>Last year</div>" +
              "</div>" +
              "</div>" +

              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>From</label>" +
              "<input id='from-date' class='wix-textbox date-span-from-date from-date' data-toggle='datepicker' style='border-radius: 0px;'/>" +
              "<label class='ui sleak blue-back label' style='border-radius: 0px;'>To</label>" +
              "<input id='to-date' class='wix-textbox date-span-to-date to-date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
              "<button class='ui icon green button' onclick='populateItemReport(getArg())'>" +
              "<i class='refresh icon'></i></button>" +
              "</div>" +
              "</div>" +


              "</div>" +
              "</div>" +
              "</div>"})

      _page({add:
              "<div class='l-pad-2 s-pad-1' id='error-pane' style='display: none;'>" +
              "<div class='ui w3-row negative message pad-2 lift-1'>" +
              "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
              "<div class='w3-col l2 m2 s4 align-r'>" +
              "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
              "populateItemReport(getArg())\">try again</button>" +
              "</div>" +
              "</div>" +
              "</div>"
      });


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l5 m5 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-bottom: 0px;'>" +
              "<div class='widget w3-card curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l7 m7 s6 pad-t'>" +
              "<div style='margin-top: 30px;'>" +
              "<span id='small-periodic-chart'>" +
              "</span>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l5 m5 s6 pad-2 align-r'>" +
              "<h4 class='sleak load-slip blue'>Sales position</h4>" +
              "<h2 id='sales-poition' class='sleak load-slip' style='margin: 0px;'>0</h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l7 m7 s12'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l6 m6 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-bottom: 0px;'>" +
              "<div class='widget w3-card curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4' style=\"background-image: " +
              "url('"+cdn+"images/icons/pastel/business.png'); min-height: 100px; " +
              "background-position-x: -35px; background-position-y: -35px; background-repeat: no-repeat;\">.</div>" +
              "<div class='w3-col l8 m8 s8 pad-2 align-r'>" +
              "<h4 class='sleak blue load-slip'>Sold</h4>" +
              "<h2 id='sold-qty' class='sleak load-slip' style='margin: 0px;'>0</h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-bottom: 0px;'>" +
              "<div class='widget w3-card curve'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m4 s4' style=\"background-image: " +
              "url('"+cdn+"images/icons/pastel/naira.png'); min-height: 100px; " +
              "background-position-x: -35px; background-position-y: -35px; background-repeat: no-repeat;\">.</div>" +
              "<div class='w3-col l8 m8 s8 pad-2 align-r'>" +
              "<h4 class='sleak load-slip blue'>Total</h4>" +
              "<h2 class='sleak load-slip' style='margin: 0px;'>" +
              "<span style='font-family: Lato; font-weight: normal;'>" +
              $("#currency-symbol").val()+"</span> " +
              "<span id='sale-amount'>0</span></h2>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});


      _page({add:
              "<div class='w3-row'>" +
              "<div class='w3-col l9 m8 s12'>" +
              "<div class='l-pad-1 s-pad-t m-pad-t' style='padding-top: 0px;'>" +
              "<div class='widget pad-2 curve w3-card'>" +

              "<div class='pad-1 w3-container'>" +
              "<h5 class='sleak load-slip' style='color: dimgray; float: left;'>Average Sales over period</h5>" +
              "<button id='plot-period' class='ui compact sleak right floated blue button' onclick=\"switchReportPlot('period')\">Over period</button>" +
              "<button id='plot-daily' class='ui compact sleak right floated button' onclick=\"switchReportPlot('daily')\">Daily average</button>" +
              "</div>" +
              "<div class='l-pad-1 s-pad-1' id='daily-sale-average-graph' style='width: 100%; height: 285px;'></div>" +

              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m4 s12'>" +
              "<div class='l-pad-1 m-pad-t s-pad-t' style='padding-top: 0px;'>" +
              "<div class='widget pad-2 curve w3-card'style='padding-top: 0px;'>" +

              "<div class='' style='text-align: center;'>" +

              "<span class='chart' style='width: 160px; margin-top: 40px; margin-bottom: 10px;' id='revenue-percentage' data-percent='0' data-scale-color='#00b400'>" +
              "<span class='percent' style='line-height: 160px;'></span></span>" +

              "</div>" +
              "<div class='pad-1'>" +
              "<h6 class='sleak load-slip' style='color: dimgray; text-align: center; font-weight: bold;'>Of Kitchen Revenue</h6> " +
              "</div>" +
              "<br/><br/>" +

              "<div class='align-c' style='margin-top: 7px;'>" +
              "<h2 class='load-slip' style='margin: 0px;'>"+$("#currency-symbol").val()+"20,000</h2>" +
              "<h6 class='load-slip' style='margin: 0px;'>Profit</h6>" +
              "</div>" +

              "</div>" +
              "</div>" +
              "</div>" +
              "</div>",
          class:"l-pad-2 s-pad-1"});




      $(".ui.dropdown").dropdown();

      $('[data-toggle="datepicker"]').datepicker({autoHide:true});

      dateSpan("periodspan", {default:"This month",onChange:function(start, stop){
              let arg = getArg();
              if(arg != null)
              {
                  //populateItemReport(arg);
              }
              else
              {
                  //location.hash = "#food";
              }
          }});
  }

  function DrawGuests()
  {
      _page({ add: pageTop({ icon: "group", text: "Guests" }), clear: true });
  }

  function DrawFrontdeskSettings()
  {
      _page({ add: pageTop({ icon: "cog", text: "Frontdesk Settings" }), clear: true });


      _page({add:"<input id='inventory-item-type' type='hidden' value='room_item'/>"});

      _page({add:div({add:

                  "<div id='error-pane' class='ui w3-row negative message pad-2 lift-1' style='display: none; margin-top: 10px;'>" +
                  "<div class='w3-col l10 m10 s8'><h6 id='error-pane-text' class='sleak'></h6></div>" +
                  "<div class='w3-col l2 m2 s4 align-r'>" +
                  "<button class='ui negative sleak button' onclick=\"$('#error-pane').transition('drop out'); " +
                  "populateGeneralSettings()\">try again</button>" +
                  "</div>" +
                  "</div>" +

                  "<div class='l-margin-t-2 w3-row' style='padding-bottom: 50px;'>" +
                  "<div class='w3-col l6 m6 s12 settings-con'>" +

                  "<input id='receipttemplate' type='hidden' value=''/>" +

                  "<h6 class='sleak' style='font-weight: bold;'><small>Frontdesk Receipt</small></h6> " +
                  "<div class='l-width-l w3-container w3-card widget pad-1 curve'>" +
                  "<div class='w3-col l5 m6 s12'>" +
                  "<div id='receipt-image-con' class='settings-text' style='margin-top: 5px; height: 270px; overflow: hidden;'>" +
                  "<img id='receipt-image' style='width: 100%;'/>." +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l7 m6 s12'>" +
                  "<div class='pad-1'>" +
                  "<h3 id='receipt-name' class='sleak' style='margin-top: 20px;'></h3>" +
                  "<p class='sleak' style='font-weight: bold; color: gray;'>" +
                  "<span class='settings-text'>Select the proper receipt </span>" +
                  "<span class='settings-text'>template that fits the kinda</span>" +
                  "<span class='settings-text'> printer you will be printing from</span></p>" +
                  "<button class='ui compact settings-control w3-button green button' " +
                  "onclick='selectTemplate()'>Select template</button>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Receipt printer type</small></h6> " +
                  "<div class='l-width-l w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='a4' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>A4 Size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='letter' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Letter size</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm58' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>58mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='mm80' class='with-gap settings-control' name='receipt-paper-type' type='radio' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>80mm (thermal printer)</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Add fields to receipt</small></h6> " +
                  "<div class='l-width-l pad-1 w3-card widget curve'>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptaddess' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Address</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptlogo' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Logo</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-row'>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptemail' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Email</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "<div class='w3-col l6 m6 s12'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='receiptsalutation' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Salutation</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +
                  "<div class='ui form'>" +
                  "<textarea id='salutation' class='wix-textbox settings-control' rows='1' " +
                  "placeholder='Write salutation' onchange='saveSettings(this)'></textarea>" +
                  "</div>" +
                  "</div>" +



                  "</div>" +



                  "<div class='w3-col l6 m6 s12'>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Low stock alert</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>If the low stock point of any item in room invenory is " +
                  "reached, a notification message will</span> " +
                  "<span class='settings-text'>be sent to the phone and email supplied below</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input'>" +
                  "<label class='ui blue sleak label'>Email</label>" +
                  "<input id='lowstockemail' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='lowstockphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +


                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Payment methods</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='cash_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Cash</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='pos_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>POS machine</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='online_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Online</span></span>" +
                  "</label>" +
                  "</div>" +
                  "<hr style='margin: 0px;'/>" +
                  "<div class='pad-t'>" +
                  "<label>" +
                  "<input id='other_pay' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='sleak' style='font-weight: bold;'><span class='settings-text'>Others</span></span>" +
                  "</label>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Frontdesk Refund order / Tax calculation method</small></h6> " +
                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='refund' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Enable / Disable refund at the Frontdesk</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +

                  "<div class='w3-card widget curve'>" +
                  "<div class='pad-1'>" +
                  "<div class='switch'>" +
                  "<label>" +
                  "<input id='compound_tax' class='filled-in settings-control' type='checkbox' onchange='saveSettings(this)'/>" +
                  "<span class='lever'></span>" +
                  "</label>" +
                  "<span class='sleak' style='font-weight: bold;'>" +
                  "<span class='settings-text'>Compound tax</span>" +
                  "</div>" +
                  "</div>" +
                  "</div>" +



                  "<br/>" +
                  "<h6 class='sleak' style='font-weight: bold;'><small>Online order</small></h6> " +
                  "<div class='w3-container w3-card widget pad-1 curve'>" +
                  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>" +
                  "<small>" +
                  "<span class='settings-text'>" +
                  "If there are no open Frontdesk and a due reservation made online, a notification message</span> " +
                  "<span class='settings-text'>will be sent to the phone number below.</span></small></h6><br/> " +
                  "<div class='ui small fluid labeled input' style='margin-top: 3px;'>" +
                  "<label class='ui blue sleak label'>Phone number</label>" +
                  "<input id='onlineorderphone' class='wix-textbox settings-control' type='text' onchange='saveSettings(this)'/>" +
                  "</div>" +
                  "</div>" +




                  "</div>" +
                  "</div>",
              class:"l-width-9", style:"margin: auto;"})});

      populateGeneralSettings();
  }

