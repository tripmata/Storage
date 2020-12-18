
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

      let row = document.createElement("div");
      row.className = "w3-row l-pad-1";
      row.style.paddingBottom = "0px";

      row.innerHTML = "<div class='w3-col l3 m6 s12 l-pad-1 s-pad-1'><div class='widget w3-card l-pad-1 s-pad-1'>" +
          "<h6 style='color: dimgray; font-family: varela_roundregular;'>Customers</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='blue sleak' style='font-weight: normal;'> 0" +
          "<div class='icon-block blue-back' style='float: right;'>" +
          "<i class='users icon' style=''></i></div></h3></div><div class='content'><br/>" +
          "</div></h3></div></div>" +


          "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget w3-card l-pad-1'>" +
          "<h6 style='color: dimgray; font-family: varela_roundregular;'>Guests</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='yellow sleak' style='font-weight: normal;'> 0" +
          "<div class='icon-block yellow-back' style='float: right;'>" +
          "<i class='shopping basket icon' style=''></i></div></h3></div><div class='content'>" +
          "<br/>" +
          "</div></h3></div></div>" +


          "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget w3-card l-pad-1'>" +
          "<h6 style='color: dimgray; font-family: varela_roundregular;'>Reservations</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='green sleak' style='font-weight: normal;'> 0" +
          "<div class='icon-block green-back' style='float: right;'>" +
          "<i class='user circle icon' style=''></i></div></h3></div><div class='content'>" +
          "<br/>" +
          "</div></h3></div></div>" +


          "<div class='w3-col l3 m6 s12 l-pad-1'><div class='widget w3-card l-pad-1'>" +
          "<h6 style='color: dimgray; font-family: varela_roundregular;'>Staff</h6>" +
          "<div class='w3-container'> " +
          "<h3 class='red sleak' style='font-weight: normal;'> 0" +
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
              "<div class='widget pad-1 w3-card align-c'>" +
              "<div id='' style=''>" +
              "<h2 class='ui sleak-b '><i class='calendar alternate circular green icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>0</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Checked-in Today</h6>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget w3-card pad-1 align-c'>" +
              "<div id='' class='' style=''>" +
              "<h2 class='ui sleak-b '><i class='bed circular red icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>0</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Checked-out Today</h6>" +
              "</div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget w3-card pad-1 align-c'>" +
              "<div id='' class='' style=''>" +
              "<h2 class='ui sleak-b '><i class='bed circular green icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>0</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Reservations</h6>" +
              "</div> " +
              "</div>" +
              "</div> " +
              "<div class='w3-col l6 m6 s12 pad-1'>" +
              "<div class='widget w3-card pad-1 align-c'>" +
              "<div id='' class='' style=''>" +
              "<h2 class='ui sleak-b '><i class='bed circular blue icon'></i></h2>" +
              "<h2 style='font-family: quicksandregular;'>0</h2>" +
              "<h6 style='font-size: 14px; font-family: Lato; color: dimgray;'>Currently Lodged</h6>" +
              "</div> " +
              "</div>" +
              "</div> " +
              "</div>" +
              "<div class='w3-col l7 m12 s12'>" +

              "<div class='widget w3-card pad-1 margin-t-1' style='min-height: 337px;'></div>" +

              "</div> " +
              "</div>" +

              "</div>" +
              "</div>", class:""});



      _page({add:"<div class=''>" +
              "<div class='width-xl' style='margin: auto;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l5 m6 s12 pad-1' style='padding-top: 0px;'>" +
              "<div class='widget pad-1 w3-card' style='padding-top: 0px;'>" +
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
              "<div class='w3-col l7 m6 s12'>" +
              "<div class='widget w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue / Expenditure</h6><hr/>" +
              "<div id='revenue-graph' class='' style='min-height: 310px;'></div> " +
              "</div>" +
              "</div>" +
              "</div>" +

              "</div>" +
              "</div>", class:""});


      _page({add:"<div class=''>" +
              "<div class='width-xl' style='margin: auto;'>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget pad-1 w3-card'>" +
              "<h6 class='sleak'>Revenue sources</h6><hr/>" +
              "<div id='donut-1' style='min-height: 280px;'></div>" +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue</h6><hr/>" +
              "<div id='donut-2' class='' style='min-height: 280px;'></div> " +
              "</div>" +
              "</div>" +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget w3-card pad-1'>" +
              "<h6 class='sleak'>Monthly Revenue</h6><hr/>" +
              "<div id='donut-3' class='' style='min-height: 280px;'></div> " +
              "</div>" +
              "</div> " +
              "<div class='w3-col l3 m6 s12 pad-1'>" +
              "<div class='widget w3-card pad-1'>" +
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
  function DrawAdminSecurity()
  {
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



  /// --------------------- Tabed Pages --------------------------------//


  let loadingSettings = true;

  function DrawGeneralSetting()
  {
        _page({ add: pageTop({ icon: "cog", text: "General Settings" }), clear: true });

        _page({
          add: "<div class='w3-row l-width-9' style='margin: auto;'><div class='w3-col l6 m5 s12'><div class='l-pad-1'><div class=''>" +
            "<h6 class='sleak'><i class='building green inverted circular icon'></i>Our contact info</h6>" +
            "</div></div></div>" +
            "<div class='w3-col l6 m5 s12'>" +

            "<div class='widget curve lift-1 pad-1'>" +
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

      let testimonial = getArg() == "testimonial" ? "active" : "";
      let aboutus = getArg() == "aboutus" ? "active" : "";

      let gallery = ((testimonial != "active") && (aboutus != "active")) ? "active" : "";

      _page({
          class: "pad-2", add: "<div class='ui top attached tabular menu'>" +
                "<a class='" + gallery + " item sleak' href='#web-content/gallery'>" +
                "Our Gallery" +
                "</a>" +
                "<a class='" + testimonial + " item sleak' href='#web-content/testimonial'>" +
                "Testimonials" +
                "</a>" +
                "<a class='" + aboutus + " item sleak' href='#web-content/aboutus'>" +
                "About Us" +
                "</a>" +
                "</div>" +
                "<div id='content-page' class='ui bottom attached segment'>" +
                "</div>"
      });

      if (testimonial === "active")
      {
          DrawTestimonial();
      }
      else if (aboutus === "active")
      {
          DrawAboutUs();
      }
      else
      {
          DrawGallery();
      }
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

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='border: 3px solid rgb(240,240,240); margin: auto auto 50px;'>" +
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
  
  function DrawPropertyListing()
  {
      _page({ add: pageTop({ icon: "building", text: "Properties" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-property'\">" +
          "<div class='ui small blue-back button' style='font-family: Lato;'>" +
          "<i class='building icon'></i>Add Property</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateProperty" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Property image","Name", "Type", "Location", "Facilities", "Status", "Action"],
              { GroupAction: [{ Text: "DIVIDER" },
                      { Text: "Delete Properties", Method: "ConfirmGroupPropertyDelete" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateProperty();
  }
  function DrawAddProperty()
  {
      _page({ add: pageTop({ icon: "building", text: "Add new property" }), clear: true });

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='border: 3px solid rgb(240,240,240); margin: auto auto 50px;'>" +
          "<div class='l-width-8' style='margin: auto;'>" +


          "<input id='propertyid' type='hidden' value=''/>" +
          "<input id='status' type='hidden' value='true'/>" +

          "<br/><br/><br/>" +

          "<div id='property-images-con' class='w3-row'>" +

          "<div id='property-image-0' class='w3-col l4 m6 s12 property-image'>" +
          "<div class='pad-1'>" +
          "<div class='w3-card' style=\"min-height: 180px; " +
          "background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
          "background-repeat: no-repeat; background-position: center; position: relative;\">" +
          "<img class='propert-images' id='item-img-0' src='' style='width: 100%;'/>" +
          "<button id='item-btn-0' class='ui circular compact sleak blue-back button' " +
          "style='position:absolute; bottom:-15px; right:0px;'" +
          " onclick=\"getElement('item-file-0').click()\">" +
          "<i class='plus icon'></i>Property picture</button>" +
          "<input class='property-image-file' id='item-file-0' type='file' style='display: none;' onchange='processItemImage(this, 0); checkPropertyImages();'/>" +
          "<input class='propert-image-input' id='item-file-name-0' type='hidden' value=''/>" +
          "</div> " +
          "</div>" +
          "</div>" +


          "</div>" +


          "<br/><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>Type</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='property-type' class='ui wix-select dropdown'>" +
          "<option value='hotel'>Hotel</option>" +
          "<option value='b&b'>B&B</option>" +
          "<option value='condor'>Condor</option>" +
          "<option value='apartment'>Apartment</option>" +
          "<option value='boutique'>Boutique</option>" +
          "<option value='studio'>Studio</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>City</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='property-city' class='ui wix-select fluid search dropdown'>" +
          "<option value=''>Select city</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>State</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='property-state' class='ui wix-select fluid search dropdown'>" +
          "<option value=''>Select state</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='building green icon'></i><input id='property-name' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Properties description</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><textarea rows='3' id='property-description' class='wix-textbox'></textarea></div>" +
          "</div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><h6 class='sleak'>Property Contact</h6></div>" +
          "</div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Phone 1</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui fluid left icon input'><i class='mobile green icon'></i><input id='phone1' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Phone 2</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='mobile green icon'></i><input id='phone1' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Email 1</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='at green icon'></i><input id='email1' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Email 2</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='at green icon'></i><input id='email2' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Properties address</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><textarea rows='2' id='property-address' class='wix-textbox'></textarea></div>" +
          "</div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><h6 class='sleak'>Facilities</h6></div>" +
          "</div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='wifi' class='' type='checkbox'/><span>WIFI</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input id='bar' class='' type='checkbox'/><span>Bar</span></label></div>" +
          "</div>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='restaurant' class='' type='checkbox'/><span>Restaurant</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input id='gym' class='' type='checkbox'/><span>Gym</span></label></div>" +
          "</div>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='parking' class='' type='checkbox'/><span>Parking</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input id='security' class='' type='checkbox'/><span>Security</span></label></div>" +
          "</div>" +
          "</div>" +
          "</div><br/><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><h6 class='sleak'>Property rules</h6></div>" +
          "</div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>Terms & Conditions</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><textarea id='tandc'></textarea></div>" +
          "</div><br/>" +

          "<div class='align-r'>" +
          "<button id='save-property-btn' class='ui blue sleak button' onclick='SaveProperty()'>Save property</button>" +
          "</div><br/>" +

          "<div>" +
          "</div>";

      _page({ class: 'l-margin-t-4', add: page });

      InitEditor(getElement("tandc"));

      $(".ui.dropdown").dropdown({allowAdditions: true});

      let arg = getArg();

      if (arg !== undefined)
      {
          loadEditCustomerData(arg);
      }
  }
  function DrawPropertyOverview()
  {
      _page({ add: pageTop({ icon: "building", text: "Property overview" }), clear: true });
  }
  function DrawCarListing()
  {
      _page({ add: pageTop({ icon: "taxi", text: "Vehicle listing" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-car'\">" +
          "<div class='ui small blue-back button'><i class='plus icon'></i>Add car</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateVehicle" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Vehicle","Name / model", "Location", "Driver", "Price", "Busy", "Status", "Action"],
              { GroupAction: [
                      { Text: "Delete Vehicles", Method: "ConfirmGroupVehicleDelete()" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateVehicle();
  }
  function DrawAddCar()
  {
      _page({ add: pageTop({ icon: "taxi", text: "Add vehicle" }), clear: true });

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='border: 3px solid rgb(240,240,240); margin: auto auto 50px;'>" +
          "<div class='' style='margin: auto;'>" +


          "<input id='vehicleid' type='hidden' value=''/>" +
          "<input id='status' type='hidden' value='true'/>" +


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

          "<br/><br/><br/>" +

          "<br/><br/>" +


          "<div class='l-width-8'>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Type</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='type' class='ui wix-select search dropdown'>" +
          "<option value=''>Select car type</option>" +
          "<option>Saloon</option>" +
          "<option>SUV</option>" +
          "<option>Jeep</option>" +
          "<option>Truck</option>" +
          "<option>Pick-up Truck</option>" +
          "<option>Motorcycle</option>" +
          "<option>Sedan</option>" +
          "<option>Hatch back</option>" +
          "<option>Coupe</option>" +
          "<option>Convertible</option>" +
          "<option>Limousinee</option>" +
          "<option>Electric car</option>" +
          "<option>Economy car</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Model</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='taxi green icon'></i><input id='model' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Color</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='color' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Seats</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='seats' class='wix-textbox' value='4' type='number'/></div></div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>City</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='city' class='ui wix-select fluid search dropdown'>" +
          "<option value=''>Select or add city</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>State</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='state' class='ui wix-select fluid search dropdown'>" +
          "<option value=''>Select or add state</option>" +
          "</select>" +
          "</div>" +
          "</div><br/>" +



          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Description</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><textarea rows='3' id='description' class='wix-textbox'></textarea></div>" +
          "</div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><h6 class='sleak'>Features</h6></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='ac' class='' type='checkbox' checked/><span>AC</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input id='automatic' class='' type='checkbox'/><span>Automatic</span></label></div>" +
          "</div>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='cupholder' class='' type='checkbox'/><span>Cup holder</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input id='tv' class='' type='checkbox'/><span>TV</span></label></div>" +
          "</div>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='seatwarmer' class='' type='checkbox'/><span>Seat wammer</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input id='fridge' class='' type='checkbox'/><span>Fridge</span></label></div>" +
          "</div>" +
          "</div>" +
          "</div><br/><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><label><input type='checkbox' onchange='driverConToggle(this)'/><span>Add a driver</span></label></div>" +
          "</div><br/>" +


          "<div class='w3-row' id='add-driver-con' style='display: none;'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Driver</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<select id='driver' class='ui wix-select fluid dropdown'>" +
          "<option value=''>Select a driver</option>" +
          "</select>" +
          "</div>" +
          "</div><br/><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><h6 class='sleak'>Pricing</h6></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Price " +
          "<span style='font-family: Lato; color: black;'>"+$("#currency-symbol").val()+"</span></label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui right labeled fluid input'>" +
          "<input id='price' value='0' class='wix-textbox' type='text'/>" +
          "<label class='ui sleak label'>/ day</label></div></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>" +
          "Daily mileage cap</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui right labeled fluid input'>" +
          "<input id='milagecap' value='0' class='wix-textbox' type='text'/>" +
          "<label class='ui sleak label'>/ day</label></div></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Price " +
          "<span style='font-family: Lato; color: black;'>"+$("#currency-symbol").val()+"</span></label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui right labeled fluid input'>" +
          "<input id='extramilage' value='0' class='wix-textbox' type='text'/>" +
          "<label class='ui sleak label'>/ extra mileage</label></div></div>" +
          "</div><br/>" +


          "<br/><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<button id='save-vehicle-btn' class='ui blue sleak button' onclick='SaveVehicle()'>Save vehicle</button>" +
          "</div>" +
          "</div><br/>" +


          "</div>";

      _page({ class: 'l-margin-t-4', add: page });

      $(".ui.dropdown").dropdown({allowAdditions: true});

      let arg = getArg();

      if (arg !== undefined)
      {
          loadEditCustomerData(arg);
      }
  }
  function DrawCarOverview()
  {
      _page({ add: pageTop({ icon: "taxi", text: "Vehicle overview" }), clear: true });
  }
  function DrawCarReport()
  {
      _page({ add: pageTop({ icon: "taxi", text: "Rental report" }), clear: true });
  }
  function DrawDrivers()
  {
      _page({ add: pageTop({ icon: "user circle", text: "Drivers" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-driver'\">" +
          "<div class='ui small blue-back button'><i class='plus icon'></i>Add driver</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populateDriver" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Profile Img","Name","Contact", "Location", "Age", "Gender", "Status", "Action"],
              { GroupAction: [
                      { Text: "Delete Drivers", Method: "ConfirmGroupDriverDelete()" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populateDriver();
  }
  function DrawAddDrivers()
  {
      _page({ add: pageTop({ icon: "user plus", text: "Add drivers" }), clear: true });

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='border: 3px solid rgb(240,240,240); margin: auto auto 50px;'>" +
          "<div class='l-width-8' style='margin: auto;'>" +


          "<input id='driverid' type='hidden' value=''/>" +
          "<input id='status' type='hidden' value='true'/>" +

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
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Name</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='user circle green icon'></i><input id='name' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Surame</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='surname' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Phone number</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='mobile green icon'></i><input id='phone' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Email</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='at green icon'></i><input id='email' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Gender</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='male' class='with-gap' name='sex' type='radio' checked/><span>Male</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input class='with-gap' name='sex' type='radio'/><span>Female</span></label></div>" +
          "</div>" +
          "</div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>Date of birth</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui fluid left icon input'>" +
          "<i class='calendar alternate outline icon'></i> " +
          "<input id='dob' class='wix-textbox' data-toggle='datepicker' type='text'/>" +
          "</div></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>Driver's Address</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'>" +
          "<div class='field'><textarea rows='3' id='address' class='wix-textbox'></textarea></div>" +
          "</div>" +
          "</div><br/><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular; color: transparent;'>.</label></div></div>" +
          "<div class='w3-col l8 m3 s12 ui form'><h6 class='sleak'>Place of assignment</h6></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>State</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><select id='state' class='ui wix-select search fluid dropdown'>" +
          "<option value=''>Select or add state</option>" +
          "</select></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>City</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><select id='city' class='ui wix-select search fluid dropdown'>" +
          "<option value=''>Select or add city</option>" +
          "</select></div>" +
          "</div><br/>" +


          "<br/><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Password</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='lock green icon'></i><input id='customer-password' class='wix-textbox' type='password'/></div></div>" +
          "</div><br/>" +


          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>On web-front</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><label><input id='on-webfront' class='filled-in' type='checkbox'/><span>Available for booking</span></label></div>" +
          "</div><br/>" +


          "<div class='align-r'>" +
          "<button id='save-driver-btn' class='ui blue sleak button' onclick='SaveDriver()'>Save driver</button>" +
          "</div><br/>" +

          "<div>" +
          "</div>";

      _page({ class: 'l-margin-t-4', add: page });

      $(".ui.dropdown").dropdown({allowAdditions:true});
      $('[data-toggle="datepicker"]').datepicker();

      let arg = getArg();

      if (arg !== undefined)
      {
          loadEditCustomerData(arg);
      }
  }
  function DrawPartners()
  {
      _page({ add: pageTop({ icon: "suitcase", text: "Partners" }), clear: true });

      let buttons = document.createElement("div");
      buttons.className = "pad-2 align-r";
      buttons.style.paddingBottom = "0px";
      buttons.innerHTML = "<div class='ui labeled button' tabindex='0'" +
          " onclick=\"location.hash='#add-partner'\">" +
          "<div class='ui small blue-back button'><i class='plus icon'></i>Add Partner</div>" +
          "<a id='total_count_btn' class='ui basic blue-text left pointing label'>0</a></div> ";
      _page({ add: buttons });

      let searchCon = div({ add: DrawSearch({ method: "populatePartner" }), class: "l-pad-2" });
      searchCon.style.paddingTop = "0px";
      searchCon.style.paddingBottom = "0px";
      _page({ add: searchCon });

      _page({
          add: DrawTable(["Partner","Name", "Contact info", "Location", "Gender", "Status", "Action"],
              { GroupAction: [{Text:"Add to custom list", Method:""},
                      { Text: "DIVIDER" },
                      { Text: "Delete Partner", Method: "ConfirmGroupPartnerDelete()" }] }).outerHTML, class: "l-pad-2"
      });

      $(".ui.dropdown").dropdown();

      populatePartner();
  }
  function DrawAddPartners()
  {
      _page({ add: pageTop({ icon: "suitcase", text: "Add new partner" }), clear: true });

      let page = "<div class='l-width-8 widget curve l-pad-2 s-pad-1' style='border: 3px solid rgb(240,240,240); margin: auto auto 50px;'>" +
          "<div class='l-width-8' style='margin: auto;'>" +


          "<input id='partnerid' type='hidden' value=''/>" +
          "<input id='status' type='hidden' value='true'/>" +

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
          "<select id='salutation' class='ui wix-select dropdown'>" +
          "<option value=''>Select salutation</option>" +
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
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='user circle green icon'></i><input id='name' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Surame</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui fluid input'><input id='surname' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Phone number</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='mobile green icon'></i><input id='phone' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Email</label></div></div>" +
          "<div class='w3-col l8 m3 s12'><div class='ui left icon fluid input'><i class='at green icon'></i><input id='email' class='wix-textbox' type='text'/></div></div>" +
          "</div><br/>" +

          "<div class='w3-row'>" +
          "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Gender</label></div></div>" +
          "<div class='w3-col l8 m3 s12'>" +
          "<div class='w3-row'>" +
          "<div class='w3-col l6 m6 s6'><label><input id='male' class='with-gap' name='sex' type='radio' checked/><span>Male</span></label></div>" +
          "<div class='w3-col l6 m6 s6'><label><input class='with-gap' name='sex' type='radio'/><span>Female</span></label></div>" +
          "</div>" +
          "</div>" +
          "</div><br/>" +


              "<div id='address'>" +
              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'>" +
          "<label style='color: gray; font-family: nunitoregular;'>Country of origin</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
                "<select id='country' class='ui wix-select fluid search dropdown'>" +
                    "<option value=''>Select or enter country of origin</option>" +
                "</select>" +
              "</div>" +
              "</div><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>State of origin</label></div></div>" +
              "<div class='w3-col l8 m3 s12'>" +
              "<select id='state' class='ui wix-select search fluid dropdown'>" +
              "<option value=''>Select or enter state of origin</option>" +
              "</select>" +
              "</div>" +
              "</div><br/>" +

              "<div class='w3-row'>" +
              "<div class='w3-col l4 m3 s12'><div class='l-width-7 l-align-r' style='margin: auto;'><label style='color: gray; font-family: nunitoregular;'>Street Address</label></div></div>" +
              "<div class='w3-col l8 m3 s12 ui form'>" +
              "<div class='field'><textarea rows='3' id='address' class='wix-textbox'></textarea></div>" +
              "</div>" +
              "</div><br/>" +
              "</div>" +


          "<br/><br/>" +

          "<div class='align-r'>" +
          "<button id='save-partner-btn' class='ui blue sleak button' onclick='SavePartner()'>Save partner</button>" +
          "</div><br/>" +

          "<div>" +
          "</div>";

      _page({ class: 'l-margin-t-4', add: page });

      $(".ui.dropdown").dropdown({allowAdditions:true});

      let arg = getArg();

      if (arg !== undefined)
      {
          loadEditCustomerData(arg);
      }
  }
  function DrawPartnershipRequest()
  {
      _page({ add: pageTop({ icon: "suitcase", text: "Partnership request(s)" }), clear: true });

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

      //populateCustomers();
  }
  function DrawManageLeasing()
  {
      _page({ add: pageTop({ icon: "percent", text: "Manage Leasing" }), clear: true });

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

      //populateCustomers();
  }