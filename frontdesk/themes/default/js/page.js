    let PrimColor = "";
    let PrimFont = "";
    let SecColor = "";
    let SecFont = "";
    let currency_symbol = "";
    let host = "http://localhost/hotels/";

    $(document).ready(function () {

        if (document.getElementById("prim-color") != null)
        {
            PrimColor = $("#prim-color").val();
        }
        if (document.getElementById("prim-font") != null)
        {
            PrimFont = $("#prim-font").val();
        }
        if (document.getElementById("prim-color") != null)
        {
            PrimColor = $("#prim-color").val();
        }
        if (document.getElementById("prim-font") != null)
        {
            PrimFont = $("#prim-font").val();
        }
        if (document.getElementById("currency-symbol") != null)
        {
            currency_symbol = $("#currency-symbol").val();
        }


        $(".ui.dropdown").dropdown();
        $('[data-toggle="datepicker"]').datepicker({autoHide:true});
        $('[data-toggle="periodadjust"]').datepicker({autoHide:true, pick:function(e, a){
                if(e.view == "day")
                {
                    if(this.getAttribute('order-id') != null)
                    {
                        let order = this.getAttribute('order-id');
                        setTimeout(function () {
                            changeBookingDetails(order);
                        },200);
                    }
                }
            }});
        $('.dropdown-trigger').dropdown({ constrainWidth: false });

        $('.food-search').search({
            // change search endpoint to a custom endpoint by manipulating apiSettings
            apiSettings: {
                url: 'hms-client/worker?job=search food&q={query}'
            },
            onSelect:function (e) {
                reserveFood(e.value);
            }
        });

        $('.drink-search').search({
            // change search endpoint to a custom endpoint by manipulating apiSettings
            apiSettings: {
                url: 'hms-client/worker?job=search drink&q={query}'
            },
            onSelect:function (e) {
                reserveDrink(e.value);
            }
        });

        $('.pastry-search').search({
            // change search endpoint to a custom endpoint by manipulating apiSettings
            apiSettings: {
                url: 'hms-client/worker?job=search pastry&q={query}'
            },
            onSelect:function (e) {
                reservePastry(e.value);
            }
        });

        let hovers = document.getElementsByClassName("hover-item");

        for(let i = 0; i < hovers.length; i++)
        {
            hovers[i].addEventListener("mouseenter", function () {
                $(hovers[i]).transition('pulse');
            });
        }


        let cur = 0;

        let elems = document.querySelectorAll('#slider-carousel');
        instances = M.Carousel.init(elems, { fullWidth: true, indicators: true, onCycleTo:function(e){

                $("#main-text").transition("slide down out", function(){
                    $("#sub-text").transition("slide down out", function(){

                        $("#main-text").html($("#slide-main-text-"+e.id.toString()).html());
                        $("#sub-text").html($("#slide-sub-text-"+e.id.toString()).html());

                        $("#sub-text").transition('slide down in', function () {
                            $("#main-text").transition('slide down in');
                        });

                    });
                });

            } });


        let testimonial = document.querySelectorAll("#testimonial-carousel");
        testimonialInstances = M.Carousel.init(testimonial, {});

        if (document.getElementsByClassName("carousel").length > 0)
        {
            setInterval(function () {
                runSlide();
            }, 8000);
        }

        $('.collapsible').collapsible();
    });



    function shortenText(max, header, body)
    {
        let ret = "";

        if(body == null)
        {
            if(header.length <= max)
            {
                ret = header;
            }
            else
            {
                let store = "";

                let split = header.split(" ");

                for(let i = 0; i < split.length; i++)
                {
                    if((store + " " + split[i]).trim().length > max)
                    {
                        store += "...";
                        break;
                    }
                    else
                    {
                        store+= " "+split[i];
                    }
                }
                ret = store;
            }
        }
        else
        {
            if(header.length <= max)
            {
                ret = "<b>"+header+"</b> - ";

                let store = "";

                let split = body.split(" ");

                for(let i = 0; i < split.length; i++)
                {
                    if(((store + " " + split[i]).trim().length + header.length) > max)
                    {
                        store += "...";
                        break;
                    }
                    else
                    {
                        store+= " "+split[i];
                    }
                }
                ret += store;
            }
            else
            {
                let store = "";

                let split = header.split(" ");

                for(let i = 0; i < split.length; i++)
                {
                    if((store + " " + split[i]).trim().length > max)
                    {
                        store += "...";
                        break;
                    }
                    else
                    {
                        store+= " "+split[i];
                    }
                }
                ret = "<b>"+store+"</b>";
            }
        }

        return ret;
    }

    function toggleActionTab()
    {
        $('.action-tabs').transition({
                animation : 'fly right',
                duration  : 800,
                interval  : 200
            })
        ;
    }

    function runSlide()
    {
        if (document.getElementsByClassName("carousel").length > 0)
        {
            $('.carousel').carousel('next');
        }
    }

    function ShowLogin()
    {
        let lg_pane = document.createElement("div");
        lg_pane.style.display = "none";
        lg_pane.style.position = "fixed";
        lg_pane.style.top = "0px";
        lg_pane.style.width = "100%";
        lg_pane.style.height = "100%";
        lg_pane.style.zIndex = 300;
        lg_pane.id = "login-pane";
        lg_pane.style.overflowY = "auto";
        lg_pane.style.backgroundColor = "rgba(0,0,0,0.6)";

        lg_pane.className = "w3-row s-pad-1";

        lg_pane.innerHTML = "<div class='w3-col l4 m6 s12 s-hide'>.</div>" +
          "<div id='lg-body' class='w3-col l4 m6 s12' style='display: none;'>" +
          "<div class='w3-row'><div class='w3-col l2 m12 s12'>.</div> " +
          "<div class='w3-col l10 m12 s12 l-margin-t-5 curve widget' " +
          "style='position: relative;' " +
          "onclick='preventPropagation(event)'> " +
          "<div id='logs-con' class='l-pad-2 s-pad-1 l-margin-t-6'> " +
          "</div>" +
          "</div></div></div>";

        lg_pane.onclick = function () {
            $("#lg-body").transition('flip horizontal out', function ()
            {
                $("#login-pane").fadeOut(800);
            });
        };

        document.body.appendChild(lg_pane);

        drawSignIn();

        $("#login-pane").fadeIn(800, function () {
            $("#lg-body").transition('flip horizontal in');
        });
        reSize();
    }

    function toggleMobMen()
    {
        if($("#mobile-menu").hasClass('not-visible'))
        {
            $("#mobile-menu").removeClass('not-visible');
            $("#mobile-menu").transition('flip horizontal in');
        }
        else
        {
            $("#mobile-menu").addClass('not-visible');
            $("#mobile-menu").transition('flip horizontal out');
        }
    }

    function preventPropagation(e)
    {
        e.stopPropagation();
    }

    function drawPasswordRecovery()
    {
        $("#logs-con").addClass("l-margin-t-8");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html(
            "<div class='pad-1 align-c curve'>" +
            "<h3 class='align-c' style='font-family: "+PrimFont+"; color: "+PrimColor+";'>Reset  Password</h3><br/> " +
            "<img src='"+host+"/cdn/images/icons/pastel/reset.png' style='width: 80px;'/>" +
            "</div>" +

          "<form class='margin-t-3' action='' method='post' onsubmit='return logIN()'>" +
          "<div class='ui fluid large left icon input'>" +
          "<i class='at icon'></i> " +
          "<input class='wix-textbox' id='email' type='text' placeholder='Email' style='font-family: lato;'/>" +
          "</div>" +
          "<div style='margin-top: 5px;'> " +
          "<h6 class='sleak' style='float: right; color: " + PrimColor + "; cursor: pointer;'" +
          " onclick='drawSignIn()'>Back</h6> " +
          "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
          "<i class='open envelope icon'></i> Send reset email</button> " +
          "</form> <br/>" +
          "<div class='align-c'><br/><br/>" +
          "</div>" +
          "</div>");
    }

    function drawSignIn()
    {
        $("#logs-con").addClass("margin-t-2");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html(
            "<div class='pad-1 align-c curve'>" +
                "<h3 class='align-c' style='font-family: "+PrimFont+"; color: "+PrimColor+";'>Login</h3><br/> " +
            "<img src='"+host+"/cdn/images/icons/pastel/shield.png' style='width: 80px;'/>" +
            "</div>" +

          "<form class='margin-t-2' action='' method='post' onsubmit='return logIN()'>" +
          "<div class='ui fluid large left icon input'>" +
          "<i class='user circle icon'></i> " +
          "<input class='wix-textbox' id='login-email' type='text' placeholder='Email & Phone number' style='font-family: lato;'/>" +
          "</div>" +
          "<div class='ui fluid large left icon input' style='margin-top: 6px;'>" +
          "<i class='unlock icon'></i> " +
          "<input class='wix-textbox' id='login-password' type='password' placeholder='Password' style='font-family: lato;'/>" +
          "</div> " +
          "<div style='margin-top: 5px;'> " +
          "<h6 class='sleak' style='float: right; color: " + PrimColor + "; cursor: pointer;'" +
          " onclick='drawPasswordRecovery()'>Forgotten Password</h6> " +
          "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
          "<i class='sign in icon'></i> Login</button> " +
          "</form> <br/>" +
          "<div class='align-c'><br/><br/>" +
          "<h6 style='font-family: lato;'>New User? <span style='color: " + PrimColor + ";" +
          " cursor:pointer;' onclick='drawSignUp()'>Register</span></h6>" +
          "</div>" +
          "</div>");
    }

    function drawSignUp()
    {
        $("#logs-con").removeClass("l-margin-t-8");
        $("#logs-con").addClass("margin-t-1");
        $("#logs-con").html(
            "<div class='pad-1 align-c curve'>" +
            "<h3 class='align-c' style='font-family: "+PrimFont+"; color: "+PrimColor+";'>Create Account</h3><br/> " +
            "<img src='"+host+"/cdn/images/icons/pastel/verified_user.png' style='width: 80px;'/>" +
            "</div>" +

          "<form class='s-margin-t-1' action='' method='post' onsubmit='return SignUp()'>" +
          "<div class='ui fluid large left icon input'>" +
          "<i class='user circle icon'></i> " +
          "<input class='wix-textbox' id='signup-names' type='text' placeholder='Full Name' style='font-family: lato;'/>" +
          "</div>" +
          "<div class='ui fluid large left icon input' style='margin-top: 6px;'>" +
          "<i class='at icon'></i> " +
          "<input class='wix-textbox' id='signup-email' type='text' placeholder='Email' style='font-family: lato;'/>" +
          "</div>" +
          "<div class='ui fluid large left icon input' style='margin-top: 6px;'>" +
          "<i class='phone icon'></i> " +
          "<input class='wix-textbox' id='signup-phone' type='text' placeholder='Phone number' style='font-family: lato;'/>" +
          "</div>" +
          "<div class='ui fluid large icon input' style='margin-top: 6px;'>" +
          "<input class='wix-textbox' id='signup-password' type='password' placeholder='Password' style='font-family: lato;'/>" +
          "<i id='eye-icon' class='eye slash link icon' onclick='toggleViewPassword()'></i> " +
          "</div><br/> " +
          "<label><input class='filled-in' id='signup-subscribe' type='checkbox' checked/><span>Subscribe to our newsletter</span></label><br/>" +
          "<div style='margin-top: 5px;'> " +
          "<button id='signUp-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;'>" +
          "<i class='user circle icon'></i> Create account</button> " +
          "</form> <br/><br/>" +
          "<div class='align-c'>" +
          "<h6 style='font-family: lato;'>Have an account <span style='color: " + PrimColor + ";" +
          " cursor:pointer;' onclick='drawSignIn()'>Sign In</span></h6>" +
          "</div>" +
          "</div>");
    }

    function drawAddress()
    {
        $("#logs-con").removeClass("l-margin-t-8");
        $("#logs-con").addClass("l-margin-t-1");
        $("#logs-con").html("<h1 class='ui center aligned header'>" +
          "<i class='shipping circular icon' style='color: darkgray;'></i></h1>" +
          "<h4 class='align-c sleak-b' style='color: " + PrimColor + ";'>Add Shipping Address</h4> " +
          "<form action='' method='post' onsubmit='return SaveAddress()'>" +
          "<div class='input-field'><input id='country' type='text' style='font-family: lato;'/>" +
          "<label for='country'>Country</label></div> " +
          "<div class='input-field'><input id='state' type='text' style='font-family: lato;'/>" +
          "<label for='state'>State</label></div> " +
          "<div class='input-field'><input id='city' type='text' style='font-family: lato;'/>" +
          "<label for='city'>City</label></div> " +
          "<div class='input-field'><textarea id='street' class='materialize-textarea'></textarea>" +
          "<label for='street'>Street Address</label></div> " +
          "<button id='save-btn' class='btn sleak-m waves-effect' style='background-color: " + PrimColor + ";'>" +
          "<i class='save icon'></i> Save</button><input id='add_id' type='hidden' value=''/> " +
          "</form>");
    }

    function CloseLoginPage()
    {
        $("#lg-body").transition('flip horizontal', function () {
            $("#lg-body").fadeOut(800);
        })
    }

    function reSize()
    {
        page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        $(".f-height").height(page_height);
        $(".h-height").height(page_height / 2);
    }

    function logIN()
    {
        let data = {};
        data.email = $("#login-email").val();
        data.password = $("#login-password").val();
        data.job = "login customer";

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(data.email))
        {
            M.toast({ html: 'Invalid Email' });
        }
        else if (data.password == "")
        {
            M.toast({ html: 'Please Enter your password' });
        }
        else
        {
            loadingButton({ btn: "login-btn" });
            $("#login-btn").prop("disabled", true);
            $("#email").prop("disabled", true);
            $("#password").prop("disabled", true);

            postJson("hms-client/worker", function (data, status) {

                loadingButton({ btn: "login-btn", loading: false });

                $("#login-btn").prop("disabled", false);
                $("#email").prop("disabled", false);
                $("#password").prop("disabled", false);

                if (status == "done")
                {
                    let dat = JSON.parse(data);

                    if (dat.Status == "success")
                    {
                        $("#login-btn").html("<i class='check icon'></i> Logged In. ");
                        $("#login-btn").css("background-color", "forestgreen");

                        setTimeout(function () {
                          location.reload();
                        }, 2000);
                    }
                    else
                    {
                        errorButton({ btn: "login-btn", msg: "Invalid credentials" });
                        M.toast({ html: 'Incorrect username and password combination' });
                    }
                }
                else
                {
                    errorButton({ btn: "login-btn", msg: "Connection error" });
                    M.toast({ html: 'Check your connection' })
                }
            }, data);
        }
      return false;
    }

    function toggleViewPassword()
    {
        if ($("#eye-icon").hasClass("slash"))
        {
            $("#password").prop("type", "text");
            $("#eye-icon").removeClass("slash");
        }
        else
        {
            $("#password").prop("type", "password");
            $("#eye-icon").addClass("slash");
        }
    }

    function SignUp()
    {
        let data = {};
        data.names = $("#signup-names").val();
        data.phone = $("#signup-phone").val();
        data.email = $("#signup-email").val();
        data.password = $("#signup-password").val();
        data.subscribe = document.getElementById("signup-subscribe").checked;
        data.job = "sign up";

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (data.names.split(" ").length < 2)
        {
            M.toast({ html: 'Full name is required' });
        }
        else if (!regex.test(data.email))
        {
            alert(data.email);
            M.toast({ html: 'Invalid Email' });
        }
        else if (data.phone == "")
        {
            M.toast({ html: 'Invalid phone' });
        }
        else if (data.password == "")
        {
            M.toast({ html: 'Invalid Password' });
        }
        else
        {
            $("#signUp-btn").html("<i class='spinner icon loading'></i> Processing..");
            $("#signUp-btn").prop("disabled", true);
            $("#email").prop("disabled", true);
            $("#password").prop("disabled", true);
            $("#names").prop("disabled", true);
            $("#phone").prop("disabled", true);

            postJson("hms-client/worker", function (data, status) {

                $("#signUp-btn").html("<i class='spinner icon loading'></i> Processing..");
                $("#signUp-btn").prop("disabled", false);
                $("#email").prop("disabled", false);
                $("#password").prop("disabled", false);
                $("#names").prop("disabled", false);
                $("#phone").prop("disabled", false);

                if (status == "done")
                {
                    let d = JSON.parse(data);

                    if (d.Status == "success")
                    {
                        $("#signUp-btn").html("<i class='check icon'></i>! Success. ");
                        $("#signUp-btn").css("background-color", "forestgreen");

                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    }
                    else
                    {
                        errorButton({ btn: "signUp-btn", msg: d.Message });
                        M.toast({ html: d.Message });
                    }
                }
                else
                {
                    errorButton({ btn: "signUp-btn", msg: "Connection error" });
                    M.toast({ html: 'Check your connection' })
                }

            }, data);
        }
        return false;
    }

    function ShowModal(msg) {
      let modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.backgroundColor = "rgba(0,0,0,0.6)";
      modal.style.top = "0px";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.zIndex = 300;
      modal.id = "modal";
      modal.style.overflowY = "auto";
      modal.className = "w3-row";
      modal.style.display = "none";


      document.body.appendChild(modal);


      $("#modal").fadeIn(500, function () {

        modal.innerHTML = "<div id='modal-inner' style='display: none;'>" +
            "<div class='w3-col l4 m2 s12' style='color: transparent;'>.</div>" +
            "<div class='w3-col l4 m8 s12 s-pad-t'>" +
            "<div class='widget curve l-margin-t-7 margin-b-3'>" +
            "<div class='pad-1'><h6 style='font-family: quicksandbold; color: dimgray;'>Message</h6></div>" +
            "<hr style='margin: 0px;'/>" +
            "<div class='pad-2'><p style='font-family: Lato;'>" + msg + "</p></div>" +
            "<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
            "<button class='btn green-back btn-small' onclick='closeModal()'>OK</button></div>" +
            "</div></div></div><br/><br/>";

        $("#modal-inner").transition('fade right in');

      });
    }

    function ConfirmModal(msg, func, yesmg, nomsg, param) {
      let modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.backgroundColor = "rgba(0,0,0,0.6)";
      modal.style.top = "0px";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.zIndex = 300;
      modal.id = "modal";
      modal.style.overflowY = "auto";
      modal.className = "w3-row";
      modal.style.display = "none";

      if (yesmg == null) {
        yesmg = "Yes";
      }
      if (nomsg == null) {
        nomsg = "Cancel";
      }


      document.body.appendChild(modal);


      $("#modal").fadeIn(500, function () {

        modal.innerHTML = "<div id='modal-inner' style='display: none;'>" +
            "<div class='w3-col l4 m2 s12' style='color: transparent;'>.</div>" +
            "<div class='w3-col l4 m8 s12 w3-padding-tiny'>" +
            "<div class='widget curve l-margin-t-7 margin-b-3'>" +
            "<div class='pad-1 '><h6 style='font-family: quicksandbold; color: dimgray;'>Confirmation</h6></div>" +
            "<hr style='margin: 0px;'/>" +
            "<div class='pad-2'><p style='font-family: Lato;'>" + msg + "</p></div>" +
            "<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
            "<button class='ui small sleak button red-back' onclick=\"closeConfirm(" + func + ",false,'" + param + "')\">" + nomsg + "</button> " +
            "<button class='ui small sleak button green-back' onclick=\"closeConfirm(" + func + ",true,'" + param + "')\">" + yesmg + "</button></div>" +
            "</div></div></div><br/><br/>";

        $("#modal-inner").transition('fade right in');
      });
    }

    function closeConfirm(func, choice, param) {

        $("#modal-inner").transition('fade right', function () {
            $('#modal').fadeOut(500, function () {
                document.body.removeChild(document.getElementById('modal'));
                if (typeof func == "function")
                {
                    func(choice, param);
                }
            });
        });
    }

    function closeModal(func)
    {
        $("#modal-inner").transition('fade right', function () {
            $('#modal').fadeOut(500, function () {
                document.body.removeChild(document.getElementById('modal'));
                if (typeof func == "function")
                {
                    func();
                }
            });
        });
    }

    function SaveAddress()
    {
        let data = {};
        data.Country = WixEncode($("#country").val());
        data.State = WixEncode($("#state").val());
        data.City = WixEncode($("#city").val());
        data.Street = WixEncode($("#street").val());
        data.Id = $("#add_id").val();

        data.job = "saveaddress";

        if (data.Country == "")
        {
            M.toast({ html: 'Country is required' });
        }
        else if (data.City == "")
        {
            M.toast({ html: 'City is required' });
        }
        else if (data.State == "")
        {
            M.toast({ html: 'State is required' });
        }
        else if (data.Street == "")
        {
            M.toast({ html: 'Street address is required' });
        }
        else
        {
            $("#save-btn").html("<i class='spinner icon loading'></i> Processing..");
            $("#save-btn").prop("disabled", true);
            postJson("worker.php", function (data, status) {

                $("#save-btn").html("<i class='spinner icon loading'></i> Processing..");
                $("#save-btn").prop("disabled", false);

                if (status === "done") {
                    let dat = JSON.parse(data);

                    if (dat.Status === "success")
                    {
                        $("#save-btn").html("<i class='check icon'></i> Success ");
                        $("#save-btn").css("background-color", "forestgreen");

                        setTimeout(function () {
                          location.reload();
                        }, 3000)
                    }
                    else
                    {
                        $("#save-btn").html("<i class='exclamation circle icon'></i>Invalid");
                        setTimeout(function () {
                          $("#save-btn").html("<i class='save icon'></i>Save");
                        }, 3000);
                        M.toast({ html: dat.Message });
                    }
                }
                else
                {
                    $("#save-btn").html("<i class='exclamation circle icon'></i>Connection Error");
                    setTimeout(function () {
                      $("#save-btn").html("<i class='save icon'></i>Save");
                    }, 3000);
                    M.toast({ html: 'Check your connection' });
                }
          }, data);
        }
        return false;
    }

    function galleryEntered(e)
    {
        $("#gallery-cover-" + e).css("background-color", "rgba(0,0,0,0.4)");
        $("#gallery-description-" + e).transition("fade up in");
    }

    function galleryLeft(e)
    {
        $("#gallery-description-" + e).transition("fade up out", function () {
            $("#gallery-cover-" + e).css("background-color", "transparent");
        });
    }

    function errorButton(o)
    {
        let b = null;
        let d = 2000;
        let m = "";

        let bc = "";
        let cl = "";

        let has_blue = false;
        let has_red = false;
        let has_green = false;
        let has_yellow = false;


        let store = "";

        if (o != null)
        {
            if (o.btn != null)
            {
                b = document.getElementById(o.btn);
            }
            if (o.btn != null)
            {
                b = document.getElementById(o.btn);
            }
            if (o.msg != null)
            {
                m = o.msg;
            }
            if (o.delay != null)
            {
                d = o.delay;
            }

            if (b != null)
            {
                store = b.innerHTML;
                b.innerHTML = m;
                d.disabled = true;

                has_blue = $(b).hasClass("blue-back") ? true : false;
                has_red = $(b).hasClass("red-back") ? true : false;
                has_green = $(b).hasClass("green-back") ? true : false;
                has_yellow = $(b).hasClass("yellow-back") ? true : false;

                if (($(b).hasClass("ui")) && ($(b).hasClass("button")))
                {
                    $(b).addClass("negative");
                    $(b).addClass("disabled");
                }
                else
                {
                    bc = $(b).css("background-color");
                    cl = $(b).css("color");

                    $(b).css("background-color", "red");
                    $(b).css("color", "white");
                }

            setTimeout(function () {

                b.innerHTML = store;
                b.disabled = false;

                if (($(b).hasClass("ui")) && ($(b).hasClass("button"))) {
                  $(b).removeClass("negative");
                  $(b).removeClass("disabled");
                }
                else {
                  bc = $(b).css("background-color", bc);
                  cl = $(b).css("color", cl);
                }
            }, d);
        }
      }
    }

    function getElement(e, callback=null)
    {
        if (typeof e == "string")
        {
            var id = document.getElementById(e);

            // check callback
            if (callback !== null && typeof callback == 'function' && id !== null)
            {
                callback.call(this, id);
            }

            // return id
            return id;
        }
        else
        {

        }
    }

    function loadingButton(o)
    {
        let b = null;
        let l = true;

        let store = "";

        if (o != null)
        {
            if (o.btn != null)
            {
                b = getElement(o.btn);
            }
            if (o.loading != null)
            {
                l = o.loading;
            }

            if (b != null)
            {
                if (l == true)
                {
                    b.disabled = true;

                    if (($(b).hasClass("ui")) && ($(b).hasClass("button")))
                    {
                        $(b).addClass("loading");
                        $(b).addClass("disabled");
                    }
                    else
                    {
                        b.name = b.innerHTML;
                        b.innerHTML = "Loading...";
                    }
                }
                else
                {
                    b.disabled = false;

                    if (($(b).hasClass("ui")) && ($(b).hasClass("button")))
                    {
                        $(b).removeClass("loading");
                        $(b).removeClass("disabled");
                    }
                    else
                    {
                        b.innerHTML = b.name;
                    }
                }
            }
        }
    }

    function savePassword()
    {
        let request = {
            oldpassword: $("#old-password").val(),
            newpassword: $("#new-password").val(),
            job: "update password"
        };

        if (request.oldpassword === "")
        {
            errorButton({ btn: "save-btn", msg: "Current password is required" });
        }
        else if (request.newpassword === "")
        {
            errorButton({ btn: "save-btn", msg: "New password is empty" });
        }
        else if (request.newpassword != $("#confirm-password").val())
        {
            errorButton({ btn: "save-btn", msg: "Passwords don't match" });
        }
        else
        {
            loadingButton({ btn: "save-btn" });
            postJson("hms-client/worker", function (data, status) {
                loadingButton({ btn: "save-btn", loading: false });
                if (status === "done")
                {
                    let d = JSON.parse(data);

                    if (d.Status === "success")
                    {
                        $("#old-password").val("");
                        $("#new-password").val("");
                        $("#confirm-password").val("");

                        $("#save-btn").html("<i class='check icon'></i> Password updated");
                        $("#save-btn").addClass("positive disabled");
                        setTimeout(() => {
                          $("#save-btn").html("Save password");
                          $("#save-btn").removeClass("positive disabled");
                        }, 3000);
                    }
                    else
                    {
                        errorButton({ btn: "save-btn", msg: d.Message });
                    }
                }
                else {
                  errorButton({ btn: "save-btn", msg: "Connection error" });
                }
          }, request);
        }
    }

    function logout(e)
    {
        let store = e.innerHTML;

        e.innerHTML = "&nbsp;&nbsp;<div class='ui inline mini active loader'></div> Logging out...";
        postJson("logout", function (data, status) {
            if (status === "done")
            {
                let d = JSON.parse(data);

                if (d.status === "success")
                {
                    e.innerHTML = " <span style='color: forestgreen;'><i class='check icon'></i> Logged out</span>";
                    setTimeout(() => {
                      location.reload();
                    }, 2000);
                }
                else
                {
                    e.innerHTML = " <span style='color: red;'><i class='times icon'></i> Failed</span>";
                    setTimeout(() => {
                      e.innerHTML = store;
                    }, 2000);
                }
            }
            else
            {
                e.innerHTML = " <span style='color: red;'><i class='times icon'></i> Failed</span>";
                setTimeout(() => {
                  e.innerHTML = store;
                }, 2000);
            }
        },{});
    }

    function setImageFrame(e)
    {
        getElement("main-frame-image").src = e.src;
    }
    
    function bookRoom(category, start, end)
    {
        let lg_pane = document.createElement("div");
        lg_pane.style.display = "none";
        lg_pane.style.position = "fixed";
        lg_pane.style.top = "0px";
        lg_pane.style.width = "100%";
        lg_pane.style.height = "100%";
        lg_pane.style.zIndex = 300;
        lg_pane.id = "reservation-pane";
        lg_pane.style.overflowY = "auto";
        lg_pane.style.backgroundColor = "rgba(0,0,0,0.6)";

        lg_pane.className = "w3-row";

        lg_pane.innerHTML = "<div class='w3-col l4 m6 s12 s-hide'>.</div>" +
            "<div id='reservation-body' class='w3-col l4 m6 s12' style='display: none;'>" +
            "<div class='w3-row s-pad-2'><div class='w3-col l2 m12 s12'>.</div> " +
            "<div class='w3-col l10 m12 s12 l-margin-t-9 s-margin-t-5  curve widget' " +
            "style='position: relative;'>" +
            "<i class='times red inverted circular icon' style='cursor: pointer; float: right; " +
            "position: absolute; right: -10px; top: -10px;' onclick='closeReservepane()'></i> " +
            "<div id='logs-con' class='l-pad-2 s-pad-1 l-margin-t-8'> " +
            "</div>" +
            "</div></div></div>";

        /*
        lg_pane.onclick = function () {
            $("#reservation-body").transition('drop out', function () {
              $("#reservation-pane").fadeOut(800);
            });
        };
         */

        document.body.appendChild(lg_pane);

        $("#logs-con").html("");

        $("#reservation-pane").fadeIn(800, function () {
            $("#reservation-body").transition('drop in', function () {
                drawBooking(category, start, end);
            });
        });
        reSize();
    }

    function closeReservepane(func)
    {
        $("#reservation-body").transition('drop out', function () {
            $("#reservation-pane").fadeOut(800, function () {
                document.body.removeChild(document.getElementById("reservation-pane"));
                if(typeof (func) == "function")
                {
                    func();
                }
            });
        });
    }

    function reserveRoom()
    {
        let start = $("#checkin-date").val();
        let stop = $("#checkout-date").val();
        let room = $("#room-cat-select").dropdown('get value');

        if((start === "") || (stop === ""))
        {
            ShowModal("Select check-in and check-out date");
        }
        else if(room === "")
        {
            ShowModal("Select room type");
        }
        else
        {
            bookRoom(room, start, stop);
        }
    }

    function m_reserveRoom()
    {
        let start = $("#m-checkin-date").val();
        let stop = $("#m-checkout-date").val();
        let room = $("#m-room-cat-select").dropdown('get value');

        if((start === "") || (stop === ""))
        {
            ShowModal("Select check-in and check-out date");
        }
        else if(room === "")
        {
            ShowModal("Select room type");
        }
        else
        {
            bookRoom(room, start, stop);
        }
    }

    function drawBooking(room, start, stop)
    {
        $("#logs-con").html("");

        $("#logs-con").addClass("l-margin-t-8");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html("<div class='pad-5'>" +
            "<div class='align-c'>" +
            "<div class='ui active huge loader'></div> " +
            "</div> " +
            "</div>");

        let request = {
            room:room,
            checkin:start,
            checkout:stop,
            job:"start booking"
        };

        postJson("hms-client/worker", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    if((d.Data.Checkin === "") || (d.Data.Checkout === ""))
                    {
                        $("#logs-con").removeClass("l-margin-t-8");
                        $("#logs-con").html(
                            "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: "+PrimColor+";'>" +
                            "<i class='calendar alternate icon'></i> Reservation</h4><br/>"+
                            "<form class='' action='' method='post' onsubmit='return executeReservation()'>" +
                            "<input id='final-room' type='hidden' value='"+d.Data.Room+"'/> " +
                            "<div class='ui fluid labeled icon input'>" +
                            "<label class='ui label' >Check in</label> " +
                            "<input id='final-checkin' autocomplete='off' class='wix-textbox' data-toggle='datepicker' type='text' style='font-family: lato;'/>" +
                            "</div>" +
                            "<div class='ui fluid left labeled input' style='margin-top: 6px;'>" +
                            "<label class='ui label'>Check out</label> " +
                            "<input id='final-checkout' autocomplete='off' class='wix-textbox' data-toggle='datepicker' type='text' style='font-family: lato;'/>" +
                            "</div> " +
                            "<div class='ui fluid left labeled input' style='margin-top: 6px;'>" +
                            "<label class='ui label'>Number of guest</label> " +
                            "<input class='wix-textbox' autocomplete='off' id='final-guest-count' type='number' value='1' style='font-family: lato;'/>" +
                            "</div> " +
                            "<div style='margin-top: 5px;'><br/> " +
                            "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
                            "<i class='calendar icon'></i> Reserve</button> " +
                            "</form> <br/>" +
                            "</div>");

                        $('[data-toggle="datepicker"]').datepicker({autoHide:true});
                    }
                    else
                    {
                        $("#logs-con").removeClass("l-margin-t-8");
                        $("#logs-con").html(
                            "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: "+PrimColor+";'>" +
                            "<i class='calendar alternate icon'></i> Reservation</h4><br/>"+
                            "<form class='' action='' method='post' onsubmit='return executeReservation()'>" +
                            "<input id='final-room' type='hidden' value='"+d.Data.Room+"'/> " +
                            "<input id='final-checkin' type='hidden' value='"+d.Data.Checkin+"'/> " +
                            "<input id='final-checkout' type='hidden' value='"+d.Data.Checkout+"'/> " +
                            "<div class='ui fluid left labeled input' style='margin-top: 6px;'>" +
                            "<label class='ui label'>Number of guest</label> " +
                            "<input class='wix-textbox' id='final-guest-count' type='number' value='1' style='font-family: lato;'/>" +
                            "</div> " +
                            "<div style='margin-top: 5px;'><br/> " +
                            "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
                            "<i class='calendar icon'></i> Reserve</button> " +
                            "</form> <br/>" +
                            "</div>");

                    }
                }
            else
                {

                }
            }
            else
            {

            }
        }, request);
    }

    function executeReservation()
    {
        let request = {
            room:$("#final-room").val(),
            checkin:$("#final-checkin").val(),
            checkout:$("#final-checkout").val(),
            guestcount:$("#final-guest-count").val(),
            job:"add room"
        };


        $("#logs-con").addClass("l-margin-t-8");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html("<div class='pad-5'>" +
            "<div class='align-c'>" +
            "<div class='ui active huge loader'></div> " +
            "</div> " +
            "</div>");

        postJson("hms-client/worker", function(data, status){
            if(status === "done")
            {
				let d = JSON.parse(data);
				
				if(d.Status == "success")
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c' style='margin-top: 20px;'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/check_circle.png' style='max-width: 100%; width: 80px;'/>" +
                        "<h4 style='font-family: "+PrimFont+";'>Room added successfully</h4>"+
                        "</div><br/><br/>" +
                        "<div class='align-c'>" +
                        "<a href='"+d.Data.root+"maverick/reservations'>" +
                        "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                        "<i class='cart icon'></i> Proceed to reserve" +
                        "</button><br/>" +
                        "<div class='ui horizontal divider'>OR</div>" +
                        "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                        "Add more to your reservation</label><br/>" +
                        "</div>" +
                        "<div class='w3-row margin-t-6'>" +
                        (d.Data.modules.Kitchen === true ?
                        "<div class='w3-col l4 m4 s4 align-c'>" +
                        "<a href='"+d.Data.root+"maverick/restaurant'> " +
                        "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                        "<i class='utensils icon' style='color: silver;'></i> Food" +
                        "</h6>" +
                        "</a>" +
                        "</div> " : "") +
                        (d.Data.modules.Bar === true ?
                        "<div class='w3-col l4 m4 s4 align-c'>" +
                        "<a href='"+d.Data.root+"maverick/bar'> " +
                        "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                        "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                        "</h6>" +
                        "</a>" +
                        "</div> " : "") +
                        (d.Data.modules.Bakery === true ?
                        "<div class='w3-col l4 m4 s4 align-c'>" +
                        "<a href='"+d.Data.root+"maverick/pastries'> " +
                        "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                        "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                        "</h6>" +
                        "</a>" +
                        "</div> " : "") +
                        "</div>");


                    $(".cart-content-count").html(d.Data.Cartcount);
				}
				else if(d.Status == "invalid stay period")
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: "+PrimColor+";'>" +
                        "<i class='calendar alternate icon'></i> Reservation</h4><br/>"+
                        "<form class='' action='' method='post' onsubmit='return executeReservation()'>" +
                        "<div class='ui error message' style='font-family: "+SecFont+"'>Invalid check in and check out dates</div> " +
                        "<input id='final-room' type='hidden' value='"+d.Data.Room+"'/> " +
                        "<input id='final-guest-count' type='hidden' value='"+d.Data.Guestcount+"'/> " +
                        "<div class='ui fluid labeled icon input'>" +
                        "<label class='ui label' >Check in</label> " +
                        "<input id='final-checkin' class='wix-textbox' data-toggle='datepicker' type='text' value='"+d.Data.Checkin+"' style='font-family: lato;'/>" +
                        "</div>" +
                        "<div class='ui fluid left labeled input' style='margin-top: 6px;'>" +
                        "<label class='ui label'>Check out</label> " +
                        "<input id='final-checkout' class='wix-textbox' data-toggle='datepicker' type='text' value='"+d.Data.Checkout+"' style='font-family: lato;'/>" +
                        "</div> " +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
                        "<i class='calendar icon'></i> Reserve</button> " +
                        "</form> <br/>" +
                        "</div>");


                    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
				}
				else if(d.Status == "maximum occupancy exceeded")
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: "+PrimColor+";'>" +
                        "<i class='calendar alternate icon'></i> Reservation</h4><br/>"+
                        "<form class='' action='' method='post' onsubmit='return executeReservation()'>" +
                        "<div class='ui error message' style='font-family: "+SecFont+"'>Only a maximum of <b>"+
                        d.Data.Maxoccupancy+"</b> people can occupy the selected room type</div> " +
                        "<input id='final-room' type='hidden' value='"+d.Data.Room+"'/> " +
                        "<input id='final-checkin' type='hidden' value='"+d.Data.Checkin+"'/> " +
                        "<input id='final-checkout' type='hidden' value='"+d.Data.Checkout+"'/> " +
                        "<div class='ui fluid labeled icon input'>" +
                        "<label class='ui label' >Number of guest</label> " +
                        "<input id='final-guest-count' class='wix-textbox' type='number' value='"+d.Data.Guestcount+"'/>" +
                        "</div>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
                        "<i class='calendar icon'></i> Reserve</button> " +
                        "</form> <br/>" +
                        "</div>");
				}
				else if(d.Status == "invalid room category")
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c' style='margin-top: 20px;'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/times.png' stxyle='max-width: 100%; width: 60px;'/>" +
                        "<h4 style='font-family: "+PrimFont+";'>Invalid room selected.</h4>"+
                        "</div><br/>" +
                        "<div class='align-c'> " +
                        "<button class='ui red button' onclick='closeReservepane()'>Try again</button>" +
                        "</div> <br/><br/>");
				}
				else if(d.Status == "invalid checkin time")
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: "+PrimColor+";'>" +
                        "<i class='calendar alternate icon'></i> Reservation</h4><br/>"+
                        "<form class='' action='' method='post' onsubmit='return executeReservation()'>" +
                        "<div class='ui error message' style='font-family: "+SecFont+"'>Invalid check in date</div> " +
                        "<input id='final-room' type='hidden' value='"+d.Data.Room+"'/> " +
                        "<input id='final-guest-count' type='hidden' value='"+d.Data.Guestcount+"'/> " +
                        "<input id='final-checkout' type='hidden' value='"+d.Data.Checkout+"'/> " +
                        "<div class='ui fluid labeled icon input'>" +
                        "<label class='ui label' >Check in</label> " +
                        "<input id='final-checkin' class='wix-textbox' data-toggle='datepicker' type='text' value='"+d.Data.Checkin+"' style='font-family: lato;'/>" +
                        "</div>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
                        "<i class='calendar icon'></i> Reserve</button> " +
                        "</form> <br/>" +
                        "</div>");

                    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
				}
				else if(d.Status == "invalid guest number")
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: "+PrimColor+";'>" +
                        "<i class='calendar alternate icon'></i> Reservation</h4><br/>"+
                        "<form class='' action='' method='post' onsubmit='return executeReservation()'>" +
                        "<div class='ui error message' style='font-family: "+SecFont+"'>Invalid number of guest</div> " +
                        "<input id='final-room' type='hidden' value='"+d.Data.Room+"'/> " +
                        "<input id='final-checkin' type='hidden' value='"+d.Data.Checkin+"'/> " +
                        "<input id='final-checkout' type='hidden' value='"+d.Data.Checkout+"'/> " +
                        "<div class='ui fluid labeled icon input'>" +
                        "<label class='ui label' >Number of guest</label> " +
                        "<input id='final-guest-count' class='wix-textbox' type='number' value='"+d.Data.Guestcount+"'/>" +
                        "</div>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " + PrimColor + "; color: white;;'>" +
                        "<i class='calendar icon'></i> Reserve</button> " +
                        "</form> <br/>" +
                        "</div>");
				}
				else
				{
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c' style='margin-top: 20px;'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/nuclear.png' stxyle='max-width: 100%; width: 60px;'/>" +
                        "<h4 style='font-family: "+PrimFont+";'>Unknown error.</h4>"+
                        "</div><br/>" +
                        "<div class='align-c'> " +
                        "<button class='ui red button' onclick='closeReservepane()'>Try again</button>" +
                        "</div> <br/><br/>");
				}
            }
            else
            {
                $("#logs-con").removeClass("l-margin-t-8");
                $("#logs-con").html(
                    "<div class='align-c' style='margin-top: 20px;'>" +
                    "<img src='"+host+"/cdn/images/icons/pastel/times.png' stxyle='max-width: 100%; width: 60px;'/>" +
                    "<h4 style='font-family: "+PrimFont+";'>Connection error.</h4>"+
                    "</div><br/>" +
                    "<div class='align-c'> " +
                    "<button class='ui red button' onclick='closeReservepane()'>Try again</button>" +
                    "</div> <br/><br/>");
            }
        },request);

        return false;
    }

    function changeBookingDetails(e)
    {
        let request = {
            itemid:e,
            guest:$("#"+e+"-guest-count").val(),
            start_date:$("#"+e+"-start-date").html().toString().trim(),
            stop_date:$("#"+e+"-stop-date").html().toString().trim(),
            job:"update room booking"
        };

        $("#item-"+e+"-del-btn").removeClass("trash red icon");
        $("#item-"+e+"-del-btn").addClass("wix-pulse");
        postJson("hms-client/worker", function(data, status){
            $("#item-"+e+"-del-btn").addClass("trash red icon");
            $("#item-"+e+"-del-btn").removeClass("wix-pulse");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                    $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                    $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                    $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));

                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                    $("#"+e+"-nights").html(numFormat(Math.round(Number(d.Data.Days))));
                    $("#"+e+"-start-date").html(d.Data.Order.Checkindate.Month+"/"+d.Data.Order.Checkindate.Day+"/"+d.Data.Order.Checkindate.Year);
                    $("#"+e+"-stop-date").html(d.Data.Order.Checkoutdate.Month+"/"+d.Data.Order.Checkoutdate.Day+"/"+d.Data.Order.Checkoutdate.Year);
                    //$("#"+e+"-guest-count").val(d.Data.Order.Guestcount);

                    for(let i = 0; i < d.Data.Removelist.length; i++)
                    {
                        $("#item-"+d.Data.Removelist[i]+"-con").transition('drop out', function(){
                            getElement("items-main-con").removeChild(getElement("#item-"+d.Data.Removelist[i]+"-con"));
                        });
                    }
                }
                else
                {
                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                    $("#"+e+"-nights").html(numFormat(Math.round(Number(d.Data.Days))));
                    $("#"+e+"-start-date").html(d.Data.Order.Checkindate.Month+"/"+d.Data.Order.Checkindate.Day+"/"+d.Data.Order.Checkindate.Year);
                    $("#"+e+"-stop-date").html(d.Data.Order.Checkoutdate.Month+"/"+d.Data.Order.Checkoutdate.Day+"/"+d.Data.Order.Checkoutdate.Year);
                    $("#"+e+"-guest-count").val(d.Data.Order.Guestcount);

                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Check your connection and try again");
            }
        },request);
    }

    function showSlip(e)
    {
        $("#room-book-slip-"+e).transition('drop in');
        $("#room-detail-slip-"+e).transition('drop in');
    }

    function hideSlip(e)
    {
        $("#room-detail-slip-"+e).transition('drop out');
        $("#room-book-slip-"+e).transition('drop out');
    }

    function numFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function sendMessage()
    {
        let request = {
            names: $("#contact-names").val(),
            phone:$("#contact-phone").val(),
            email:$("#contact-email").val(),
            message:$("#contact-message").val(),
            job:"send message"
        };

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(request.names.split(" ").length < 2)
        {
            $("#contact-btn-icon").html("<i class='exclamation icon'></i>");
            $("#contact-btn-txt").html("Full name is required");
            $("#contact-btn").addClass("disabled");
            setTimeout(function(){
                $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                $("#contact-btn-txt").html("Send");
                $("#contact-btn").removeClass("disabled");
            },3000);
        }
        else if(!regex.test(request.email))
        {
            $("#contact-btn-icon").html("<i class='exclamation icon'></i>");
            $("#contact-btn-txt").html("Invalid email");
            $("#contact-btn").addClass("disabled");
            setTimeout(function(){
                $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                $("#contact-btn-txt").html("Send");
                $("#contact-btn").removeClass("disabled");
            },3000);
        }
        else if(request.phone === "")
        {
            $("#contact-btn-icon").html("<i class='exclamation icon'></i>");
            $("#contact-btn-txt").html("Invalid phone number");
            $("#contact-btn").addClass("disabled");
            setTimeout(function(){
                $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                $("#contact-btn-txt").html("Send");
                $("#contact-btn").removeClass("disabled");
            },3000);
        }
        else if(request.message === "")
        {
            $("#contact-btn-icon").html("<i class='exclamation icon'></i>");
            $("#contact-btn-txt").html("Message is empty");
            $("#contact-btn").addClass("disabled");
            setTimeout(function(){
                $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                $("#contact-btn-txt").html("Send");
                $("#contact-btn").removeClass("disabled");
            },3000);
        }
        else
        {
            $("#contact-btn-icon").html("<i class='spinner loading icon'></i>");
            $("#contact-btn-txt").html("Sending..");
            $("#contact-btn").addClass("disabled");
            postJson("hms-client/worker", function(data, status){
                $("#contact-btn").removeClass("disabled");

                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#contact-btn-icon").html("<i class='check icon icon'></i>");
                        $("#contact-btn-txt").html("message sent");
                        $("#contact-btn").addClass("positive disabled");
                        setTimeout(function(){
                            $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                            $("#contact-btn-txt").html("Send");
                            $("#contact-btn").removeClass("positive disabled");
                        },3000);

                        $("#contact-names").val("");
                        $("#contact-phone").val("");
                        $("#contact-email").val("");
                        $("#contact-message").val("");
                    }
                    else
                    {
                        $("#contact-btn-icon").html("<i class='exclamation icon'></i>");
                        $("#contact-btn-txt").html(d.Message);
                        $("#contact-btn").addClass("disabled");
                        setTimeout(function(){
                            $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                            $("#contact-btn-txt").html("Send");
                            $("#contact-btn").removeClass("disabled");
                        },3000);
                    }
                }
                else
                {
                    $("#contact-btn-icon").html("<i class='exclamation icon'></i>");
                    $("#contact-btn-txt").html("Connection error");
                    $("#contact-btn").addClass("disabled");
                    setTimeout(function(){
                        $("#contact-btn-icon").html("<i class='paper plane icon'></i>");
                        $("#contact-btn-txt").html("Send");
                        $("#contact-btn").removeClass("disabled");
                    },3000);
                }

            },request);
        }
    }


    //--------------------------------- Reservation logic ----------------------------------------

    function removeItem(e)
    {
        $("#item-"+e+"-del-btn").addClass("loading spinner");
        $("#item-"+e+"-del-btn").removeClass("trash");

        postJson("hms-client/worker", function(data, status){
            $("#item-"+e+"-del-btn").removeClass("loading spinner");
            $("#item-"+e+"-del-btn").addClass("trash");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    if(d.Data.Reservationcount < 1)
                    {
                        location.reload();
                    }
                    $("#reservation-count-con").html(d.Data.Reservationcount);
                    $(".cart-content-count").html(d.Data.Reservationcount);

                    $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                    $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                    $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                    $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));

                    $("#item-"+e+"-con").transition('drop out', function(){
                        getElement("items-main-con").removeChild(getElement("#item-"+e+"-con"));
                    });

                    for(let i = 0; i < d.Data.Removelist.length; i++)
                    {
                        $("#item-"+d.Data.Removelist[i]+"-con").transition('drop out', function(){
                            getElement("items-main-con").removeChild(getElement("#item-"+d.Data.Removelist[i]+"-con"));
                        });
                    }
                }
                else
                {
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection erorr. Unable remove reservation");
            }
        },{job:"remove item", item:e});
    }



    //--------------------------------------- Food reservation------------------------------------

    function showMobileCat()
    {
        let lg_pane = document.createElement("div");
        lg_pane.style.display = "none";
        lg_pane.style.position = "fixed";
        lg_pane.style.top = "0px";
        lg_pane.style.width = "100%";
        lg_pane.style.height = "100%";
        lg_pane.style.zIndex = 300;
        lg_pane.id = "reservation-pane";
        lg_pane.style.backgroundColor = "rgba(0,0,0,0.6)";

        lg_pane.className = "w3-row";

        lg_pane.innerHTML = "<div class='w3-col l3 m3 s12 s-hide' style='color: transparent;'>.</div>" +
            "<div id='reservation-body' class='w3-col l6 m6 s12' style='display: none;'>" +
            "<div class='w3-row s-pad-2'><div class='w3-col l2 m12 s12' style='color: transparent'>.</div> " +
            "<div class='w3-col l10 m12 s12 l-margin-t-2 s-margin-t-2  curve widget' " +
            "style='position: relative;'>" +
            "<i class='times red inverted circular icon' style='cursor: pointer; float: right; " +
            "position: absolute; right: -10px; top: -10px;' onclick='closeReservepane()'></i> " +
            "<div id='logs-con' class='l-pad-2 s-pad-1 l-margin-t-8'> " +
            $("#category-content").html() +
            "</div>" +
            "</div></div></div>";

        document.body.appendChild(lg_pane);

        $("#reservation-pane").fadeIn(800, function () {
            $("#reservation-body").transition('drop in', function () {
                drawFoodReservation(e);
            });
        });
    }

    function swithReservLogin()
    {
        closeReservepane(function () {
            ShowLogin();
        });
    }

    function reserveFood(e)
    {
        let lg_pane = document.createElement("div");
        lg_pane.style.display = "none";
        lg_pane.style.position = "fixed";
        lg_pane.style.top = "0px";
        lg_pane.style.width = "100%";
        lg_pane.style.height = "100%";
        lg_pane.style.zIndex = 300;
        lg_pane.id = "reservation-pane";
        lg_pane.style.overflowY = "auto";
        lg_pane.style.backgroundColor = "rgba(0,0,0,0.6)";

        lg_pane.className = "w3-row";

        lg_pane.innerHTML = "<div class='w3-col l4 m3 s12 s-hide' style='color: transparent;'>.</div>" +
            "<div id='reservation-body' class='w3-col l4 m6 s12' style='display: none;'>" +
            "<div class='w3-row s-pad-2'><div class='w3-col l2 m12 s12'>.</div> " +
            "<div id='reservation-widget' class='w3-col l10 m12 s12 l-margin-t-6 s-margin-t-5  curve widget' " +
            "style='position: relative;'>" +
            "<i class='times red inverted circular icon' style='cursor: pointer; float: right; " +
            "position: absolute; right: -10px; top: -10px;' onclick='closeReservepane()'></i> " +
            "<div id='logs-con' class='l-pad-2 s-pad-1 l-margin-t-8'> " +
            "</div>" +
            "</div></div></div>";

        /*
        lg_pane.onclick = function () {
            $("#reservation-body").transition('drop out', function () {
              $("#reservation-pane").fadeOut(800);
            });
        };
         */

        document.body.appendChild(lg_pane);

        $("#logs-con").html("");

        $("#reservation-pane").fadeIn(800, function () {
            $("#reservation-body").transition('drop in', function () {
                drawFoodReservation(e);
            });
        });
        reSize();
    }

    function drawFoodReservation(e)
    {
        $("#logs-con").html("");

        $("#logs-con").addClass("l-margin-t-8");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html("<div class='pad-5'>" +
            "<div class='align-c'>" +
            "<div class='ui active huge loader'></div> " +
            "</div> " +
            "</div>");

        let request = {
            food:e,
            job:"start food reservation"
        };

        postJson("hms-client/worker", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status == "add-reservation")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class=''>" +
                        "<input id='ordered-item' type='hidden' value='"+d.Data.Id+"'/>" +
                        "<div class='w3-col'>" +
                        "<div class='w3-col l3 m3 s3'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/utensils.png' style='width: 50px; max-width: 100%;'/>" +
                        "</div> " +
                        "<div class='w3-col l9 m9 s9'>" +
                        "<h3 style='margin-top: 15px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        " Oder details" +
                        "</h3>" +
                        "</div> " +
                        "</div><br/><br/><br/><br/> " +

                        "<h6 style='font-family: "+PrimFont+";'>Food: " +
                        "<span style='color: "+PrimColor+";'>"+
                        d.Data.Name +"</span></h6>" +


                        "<h6 style='font-family: "+PrimFont+";'>Price: " +
                        "<span style='color: "+PrimColor+";'><span style='font-family: Arial;'>"+
                        d.Currency.Symbol +"</span>" +
                        numFormat(Number(d.Data.Price).toFixed(2)) +"</span></h6>" +

                        "Enter the quantity, date and time, the order will be made automatically when you are at the hotel" +

                        "<div class='ui input fluid labeled s-width-xxl'>" +
                        "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Qty</label>" +
                        "<input id='order-quantity' class='wix-textbox' type='number' value='1' min='1' style='border-radius: 0px; max-width: 80px;'/>" +
                        "<label class='ui label' style='color: "+PrimColor+"; border-radius: 0px; font-family: "+PrimFont+";'>Date</label>" +
                        "<input id='order-date' class='wix-textbox' autocomplete='off' placeholder='Order date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                        "</div>"+
                        "<div class='ui fluid action labeled input' style='margin-top: 3px;'>" +
                        "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Time</label>" +
                        "<select id='order-hour' class='ui wix-select compact selection dropdown'>" +
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
                        "<label class='ui label' style='color: "+PrimColor+"; border-radius: 0px; font-family: "+PrimFont+";'>:</label>" +
                        "<input id='order-min' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
                        "<select id='order-gmt' class='ui wix-select compact selection dropdown'>" +
                        "<option>am</option>" +
                        "<option>pm</option>" +
                        "</select>" +
                        "</div>" +
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='item-order-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='executeFoodReservation()'>Place order</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");

                    $(".ui.dropdown").dropdown();
                    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
                }
                else if(d.Status == "not-reservable")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "Unable to reserve" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/utensils.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "<span style='font-weight: bold; color: "+PrimColor+";'>"+
                        d.Data.Name +"</span> is currently unavailable for reservation at the moment. " +
                        "It may be available at the restaurant though." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "no-room")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "Can't order from the kitchen just yet" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/utensils.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "To order from the kitchen, you have to add room reservations or be checked in at the hotel. " +
                        "Add a room reservation or login if you have checked in already." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "&nbsp;&nbsp;<label style='font-family: "+PrimFont+"; cursor: pointer;' " +
                        "onclick='swithReservLogin()'>Login</label>" +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "no-room-logged-in")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "You need a room reservation to order" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/utensils.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "To order from the kitchen, you have to add room reservations or be checked in at the hotel. " +
                        "Add a room reservation first." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "order-now")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class=''>" +
                        "<input id='ordered-item' type='hidden' value='"+d.Data.Id+"'/>" +
                        "<div class='w3-col'>" +
                        "<div class='w3-col l3 m3 s3'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/utensils.png' style='width: 50px; max-width: 100%;'/>" +
                        "</div> " +
                        "<div class='w3-col l9 m9 s9'>" +
                        "<h3 style='margin-top: 15px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        " Oder details" +
                        "</h3>" +
                        "</div> " +
                        "</div><br/><br/><br/><br/> " +


                        "<h6 style='font-family: "+PrimFont+";'>" +
                        "Room: <span style='color: "+PrimColor+";'>"+
                        shortenText(50, d.Lodging.Rooms.toString()) + "</span></h6>" +

                        "<h6 style='font-family: "+PrimFont+";'>Food: " +
                        "<span style='color: "+PrimColor+";'>"+
                        d.Data.Name +"</span></h6>" +

                        "<h6 style='font-family: "+PrimFont+";'>Price: " +
                        "<span style='color: "+PrimColor+";'><span style='font-family: Arial;'>"+
                        d.Currency.Symbol +"</span>" +
                        numFormat(Number(d.Data.Price).toFixed(2)) +"</span></h6>" +

                        "<div class='ui input fluid labeled s-width-xxl'>" +
                        "<label class='ui label'>Quantity</label>" +
                        "<input id='ordered-item-quantity' class='wix-textbox' type='number' value='1' min='1'/>" +
                        "</div>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='item-order-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='executeFoodOrder()'>Order now</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
            }
            else
            {

            }
        }, request);
    }

    function executeFoodOrder()
    {
        let request = {
            quantity:Number($("#ordered-item-quantity").val()),
            food:$("#ordered-item").val(),
            job:"order food now"
        };

        if(request.quantity < 1)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid quantity"});
        }
        else
        {
            $("#logs-con").addClass("ui loading form");
            postJson("hms-client/worker", function(data, status){
                $("#logs-con").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#logs-con").html(
                            "<div class='align-c' style='margin-top: 20px;'>" +
                            "<img src='"+host+"/cdn/images/icons/pastel/utensils.png' style='max-width: 100%;'/>" +
                            "<h4 style='font-family: "+PrimFont+";'>Food added successfully</h4>"+
                            "</div><br/><br/>" +
                            "<div class='align-c'>" +
                            "<a href='"+d.Data.root+"maverick/reservations'>" +
                            "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                            "<i class='shopping basket icon'></i> Complete your order" +
                            "</button><br/>" +
                            "<div class='ui horizontal divider'>OR</div>" +
                            "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                            "Add more to your order</label><br/>" +
                            "</div>" +
                            "<div class='w3-row margin-t-6'>" +
                            (d.Data.modules.Kitchen === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a onclick='closeReservepane()'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='utensils icon' style='color: silver;'></i> Food" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bar === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/bar'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bakery === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/pastries'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            "</div>");


                        $(".cart-content-count").html(d.Data.Cartcount);
                    }
                    else
                    {
                        errorButton({btn:"item-order-btn", msg:d.Message});
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to send request");
                }
            },request);
        }
    }

    function executeFoodReservation()
    {
        let request = {
            quantity:Number($("#order-quantity").val()),
            date:$("#order-date").val(),
            hour:$("#order-hour").val(),
            mins:$("#order-min").val(),
            gmt:$("#order-gmt").val(),
            food:$("#ordered-item").val(),
            job:"add food reservation"
        };

        if(request.quantity < 1)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid quantity"});
        }
        else if(request.date.toString().split("/") < 3)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid date"});
        }
        else
        {
            $("#logs-con").addClass("ui loading form");
            postJson("hms-client/worker", function(data, status){
                $("#logs-con").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#logs-con").html(
                            "<div class='align-c' style='margin-top: 20px;'>" +
                            "<img src='"+host+"/cdn/images/icons/pastel/utensils.png' style='max-width: 100%;'/>" +
                            "<h4 style='font-family: "+PrimFont+";'>Food added successfully</h4>"+
                            "</div><br/><br/>" +
                            "<div class='align-c'>" +
                            "<a href='"+d.Data.root+"maverick/reservations'>" +
                            "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                            "<i class='shopping basket icon'></i> Complete your order" +
                            "</button><br/>" +
                            "<div class='ui horizontal divider'>OR</div>" +
                            "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                            "Add more to your order</label><br/>" +
                            "</div>" +
                            "<div class='w3-row margin-t-6'>" +
                            (d.Data.modules.Kitchen === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a onclick='closeReservepane()'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='utensils icon' style='color: silver;'></i> Food" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bar === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/bar'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bakery === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/pastries'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            "</div>");


                        $(".cart-content-count").html(d.Data.Cartcount);
                    }
                    else if(d.Status === "out of range")
                    {
                        ShowModal("Order has to be within the period of your stay at the hotel. Your selected date is out of range.");
                    }
                    else
                    {
                        errorButton({btn:"item-order-btn", msg:d.Message});
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to send request");
                }
            },request);
        }
    }

    function changeFoodQuantity(e)
    {
        let request = {
            itemid:e,
            quantity:$("#"+e+"-quantity").val(),
            job:"update food quantity"
        };

        $("#item-"+e+"-del-btn").removeClass("trash red icon");
        $("#item-"+e+"-del-btn").addClass("wix-pulse");
        postJson("hms-client/worker", function(data, status){
            $("#item-"+e+"-del-btn").addClass("trash red icon");
            $("#item-"+e+"-del-btn").removeClass("wix-pulse");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                    $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                    $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                    $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));

                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                }
                else
                {
                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Check your connection and try again");
            }
        },request);
    }


    //--------------------------------------- Drink reservation------------------------------------

    function reserveDrink(e)
    {
        let lg_pane = document.createElement("div");
        lg_pane.style.display = "none";
        lg_pane.style.position = "fixed";
        lg_pane.style.top = "0px";
        lg_pane.style.width = "100%";
        lg_pane.style.height = "100%";
        lg_pane.style.zIndex = 300;
        lg_pane.id = "reservation-pane";
        lg_pane.style.overflowY = "auto";
        lg_pane.style.backgroundColor = "rgba(0,0,0,0.6)";

        lg_pane.className = "w3-row";

        lg_pane.innerHTML = "<div class='w3-col l4 m3 s12 s-hide' style='color: transparent;'>.</div>" +
            "<div id='reservation-body' class='w3-col l4 m6 s12' style='display: none;'>" +
            "<div class='w3-row s-pad-2'><div class='w3-col l2 m12 s12'>.</div> " +
            "<div id='reservation-widget' class='w3-col l10 m12 s12 l-margin-t-6 s-margin-t-5  curve widget' " +
            "style='position: relative;'>" +
            "<i class='times red inverted circular icon' style='cursor: pointer; float: right; " +
            "position: absolute; right: -10px; top: -10px;' onclick='closeReservepane()'></i> " +
            "<div id='logs-con' class='l-pad-2 s-pad-1 l-margin-t-8'> " +
            "</div>" +
            "</div></div></div>";

        /*
        lg_pane.onclick = function () {
            $("#reservation-body").transition('drop out', function () {
              $("#reservation-pane").fadeOut(800);
            });
        };
         */

        document.body.appendChild(lg_pane);

        $("#logs-con").html("");

        $("#reservation-pane").fadeIn(800, function () {
            $("#reservation-body").transition('drop in', function () {
                drawDrinkReservation(e);
            });
        });
        reSize();
    }

    function drawDrinkReservation(e)
    {
        $("#logs-con").html("");

        $("#logs-con").addClass("l-margin-t-8");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html("<div class='pad-5'>" +
            "<div class='align-c'>" +
            "<div class='ui active huge loader'></div> " +
            "</div> " +
            "</div>");

        let request = {
            drink:e,
            job:"start drink reservation"
        };

        postJson("hms-client/worker", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status == "add-reservation")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class=''>" +
                        "<input id='ordered-item' type='hidden' value='"+d.Data.Id+"'/>" +
                        "<div class='w3-col'>" +
                        "<div class='w3-col l3 m3 s3'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/martini.png' style='width: 50px; max-width: 100%;'/>" +
                        "</div> " +
                        "<div class='w3-col l9 m9 s9'>" +
                        "<h3 style='margin-top: 15px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        " Oder details" +
                        "</h3>" +
                        "</div> " +
                        "</div><br/><br/><br/><br/> " +

                        "<h6 style='font-family: "+PrimFont+";'>Drink: " +
                        "<span style='color: "+PrimColor+";'>"+
                        d.Data.Name +"</span></h6>" +


                        "<h6 style='font-family: "+PrimFont+";'>Price: " +
                        "<span style='color: "+PrimColor+";'><span style='font-family: Arial;'>"+
                        d.Currency.Symbol +"</span>" +
                        numFormat(Number(d.Data.Price).toFixed(2)) +"</span></h6>" +

                        "Enter the quantity, date and time, the order will be made automatically when you are at the hotel" +

                        "<div class='ui input fluid labeled s-width-xxl'>" +
                        "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Qty</label>" +
                        "<input id='order-quantity' class='wix-textbox' type='number' value='1' min='1' style='border-radius: 0px; max-width: 80px;'/>" +
                        "<label class='ui label' style='color: "+PrimColor+"; border-radius: 0px; font-family: "+PrimFont+";'>Date</label>" +
                        "<input id='order-date' class='wix-textbox' autocomplete='off' placeholder='Order date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                        "</div>"+
                        "<div class='ui fluid action labeled input' style='margin-top: 3px;'>" +
                        "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Time</label>" +
                        "<select id='order-hour' class='ui wix-select compact selection dropdown'>" +
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
                        "<label class='ui label' style='color: "+PrimColor+"; border-radius: 0px; font-family: "+PrimFont+";'>:</label>" +
                        "<input id='order-min' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
                        "<select id='order-gmt' class='ui wix-select compact selection dropdown'>" +
                        "<option>am</option>" +
                        "<option>pm</option>" +
                        "</select>" +
                        "</div>" +
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='item-order-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='executeDrinkReservation()'>Place order</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");

                    $(".ui.dropdown").dropdown();
                    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
                }
                else if(d.Status == "not-reservable")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "Unable to reserve" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/martini.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "<span style='font-weight: bold; color: "+PrimColor+";'>"+
                        d.Data.Name +"</span> is currently unavailable for reservation at the moment. " +
                        "It may be available at the bar though." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "no-room")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "Can't order from the bar just yet" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/martini.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "To order from the bar, you have to add room reservations or be checked in at the hotel. " +
                        "Add a room reservation or login if you have checked in already." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "&nbsp;&nbsp;<label style='font-family: "+PrimFont+"; cursor: pointer;' " +
                        "onclick='swithReservLogin()'>Login</label>" +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "no-room-logged-in")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "You need a room reservation to order" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/martini.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "To order from the bar, you have to add room reservations or be checked in at the hotel. " +
                        "Add a room reservation first." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "order-now")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class=''>" +
                        "<input id='ordered-item' type='hidden' value='"+d.Data.Id+"'/>" +
                        "<div class='w3-col'>" +
                        "<div class='w3-col l3 m3 s3'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/martini.png' style='width: 50px; max-width: 100%;'/>" +
                        "</div> " +
                        "<div class='w3-col l9 m9 s9'>" +
                        "<h3 style='margin-top: 15px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        " Oder details" +
                        "</h3>" +
                        "</div> " +
                        "</div><br/><br/><br/><br/> " +


                        "<h6 style='font-family: "+PrimFont+";'>" +
                        "Room: <span style='color: "+PrimColor+";'>"+
                        shortenText(50, d.Lodging.Rooms.toString()) + "</span></h6>" +

                        "<h6 style='font-family: "+PrimFont+";'>Drink: " +
                        "<span style='color: "+PrimColor+";'>"+
                        d.Data.Name +"</span></h6>" +

                        "<h6 style='font-family: "+PrimFont+";'>Price: " +
                        "<span style='color: "+PrimColor+";'><span style='font-family: Arial;'>"+
                        d.Currency.Symbol +"</span>" +
                        numFormat(Number(d.Data.Price).toFixed(2)) +"</span></h6>" +

                        "<div class='ui input fluid labeled s-width-xxl'>" +
                        "<label class='ui label'>Quantity</label>" +
                        "<input id='ordered-item-quantity' class='wix-textbox' type='number' value='1' min='1'/>" +
                        "</div>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='item-order-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='executeDrinkOrder()'>Order now</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
            }
            else
            {

            }
        }, request);
    }

    function executeDrinkOrder()
    {
        let request = {
            quantity:Number($("#ordered-item-quantity").val()),
            drink:$("#ordered-item").val(),
            job:"order drink now"
        };

        if(request.quantity < 1)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid quantity"});
        }
        else
        {
            $("#logs-con").addClass("ui loading form");
            postJson("hms-client/worker", function(data, status){
                $("#logs-con").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#logs-con").html(
                            "<div class='align-c' style='margin-top: 20px;'>" +
                            "<img src='"+host+"/cdn/images/icons/pastel/martini.png' style='max-width: 100%;'/>" +
                            "<h4 style='font-family: "+PrimFont+";'>Drink added successfully</h4>"+
                            "</div><br/><br/>" +
                            "<div class='align-c'>" +
                            "<a href='"+d.Data.root+"maverick/reservations'>" +
                            "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                            "<i class='shopping basket icon'></i> Complete your order" +
                            "</button><br/>" +
                            "<div class='ui horizontal divider'>OR</div>" +
                            "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                            "Add more to your order</label><br/>" +
                            "</div>" +
                            "<div class='w3-row margin-t-6'>" +
                            (d.Data.modules.Kitchen === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/kitchen'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='utensils icon' style='color: silver;'></i> Food" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bar === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a onclick='closeReservepane()'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bakery === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/pastries'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            "</div>");


                        $(".cart-content-count").html(d.Data.Cartcount);
                    }
                    else
                    {
                        errorButton({btn:"item-order-btn", msg:d.Message});
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to send request");
                }
            },request);
        }
    }

    function executeDrinkReservation()
    {
        let request = {
            quantity:Number($("#order-quantity").val()),
            date:$("#order-date").val(),
            hour:$("#order-hour").val(),
            mins:$("#order-min").val(),
            gmt:$("#order-gmt").val(),
            drink:$("#ordered-item").val(),
            job:"add drink reservation"
        };

        if(request.quantity < 1)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid quantity"});
        }
        else if(request.date.toString().split("/") < 3)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid date"});
        }
        else
        {
            $("#logs-con").addClass("ui loading form");
            postJson("hms-client/worker", function(data, status){
                $("#logs-con").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#logs-con").html(
                            "<div class='align-c' style='margin-top: 20px;'>" +
                            "<img src='"+host+"/cdn/images/icons/pastel/martini.png' style='max-width: 100%;'/>" +
                            "<h4 style='font-family: "+PrimFont+";'>Drink added successfully</h4>"+
                            "</div><br/><br/>" +
                            "<div class='align-c'>" +
                            "<a href='"+d.Data.root+"maverick/reservations'>" +
                            "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                            "<i class='shopping basket icon'></i> Complete your order" +
                            "</button><br/>" +
                            "<div class='ui horizontal divider'>OR</div>" +
                            "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                            "Add more to your order</label><br/>" +
                            "</div>" +
                            "<div class='w3-row margin-t-6'>" +
                            (d.Data.modules.Kitchen === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/restaurant'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='utensils icon' style='color: silver;'></i> Food" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bar === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a onclick='closeReservepane()'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bakery === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/pastries'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            "</div>");


                        $(".cart-content-count").html(d.Data.Cartcount);
                    }
                    else if(d.Status === "out of range")
                    {
                        ShowModal("Order has to be within the period of your stay at the hotel. Your selected date is out of range.");
                    }
                    else
                    {
                        errorButton({btn:"item-order-btn", msg:d.Message});
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to send request");
                }
            },request);
        }
    }

    function changeDrinkQuantity(e)
    {
        let request = {
            itemid:e,
            quantity:$("#"+e+"-quantity").val(),
            job:"update drink quantity"
        };

        $("#item-"+e+"-del-btn").removeClass("trash red icon");
        $("#item-"+e+"-del-btn").addClass("wix-pulse");
        postJson("hms-client/worker", function(data, status){
            $("#item-"+e+"-del-btn").addClass("trash red icon");
            $("#item-"+e+"-del-btn").removeClass("wix-pulse");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                    $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                    $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                    $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));

                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                }
                else
                {
                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Check your connection and try again");
            }
        },request);
    }



    //--------------------------------------- Pastry reservation------------------------------------

    function reservePastry(e)
    {
        let lg_pane = document.createElement("div");
        lg_pane.style.display = "none";
        lg_pane.style.position = "fixed";
        lg_pane.style.top = "0px";
        lg_pane.style.width = "100%";
        lg_pane.style.height = "100%";
        lg_pane.style.zIndex = 300;
        lg_pane.id = "reservation-pane";
        lg_pane.style.overflowY = "auto";
        lg_pane.style.backgroundColor = "rgba(0,0,0,0.6)";

        lg_pane.className = "w3-row";

        lg_pane.innerHTML = "<div class='w3-col l4 m3 s12 s-hide' style='color: transparent;'>.</div>" +
            "<div id='reservation-body' class='w3-col l4 m6 s12' style='display: none;'>" +
            "<div class='w3-row s-pad-2'><div class='w3-col l2 m12 s12'>.</div> " +
            "<div id='reservation-widget' class='w3-col l10 m12 s12 l-margin-t-6 s-margin-t-5  curve widget' " +
            "style='position: relative;'>" +
            "<i class='times red inverted circular icon' style='cursor: pointer; float: right; " +
            "position: absolute; right: -10px; top: -10px;' onclick='closeReservepane()'></i> " +
            "<div id='logs-con' class='l-pad-2 s-pad-1 l-margin-t-8'> " +
            "</div>" +
            "</div></div></div>";

        /*
        lg_pane.onclick = function () {
            $("#reservation-body").transition('drop out', function () {
              $("#reservation-pane").fadeOut(800);
            });
        };
         */

        document.body.appendChild(lg_pane);

        $("#logs-con").html("");

        $("#reservation-pane").fadeIn(800, function () {
            $("#reservation-body").transition('drop in', function () {
                drawPastryReservation(e);
            });
        });
        reSize();
    }

    function drawPastryReservation(e)
    {
        $("#logs-con").html("");

        $("#logs-con").addClass("l-margin-t-8");
        $("#logs-con").removeClass("l-margin-t-1");
        $("#logs-con").html("<div class='pad-5'>" +
            "<div class='align-c'>" +
            "<div class='ui active huge loader'></div> " +
            "</div> " +
            "</div>");

        let request = {
            pastry:e,
            job:"start pastry reservation"
        };

        postJson("hms-client/worker", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status == "add-reservation")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class=''>" +
                        "<input id='ordered-item' type='hidden' value='"+d.Data.Id+"'/>" +
                        "<div class='w3-col'>" +
                        "<div class='w3-col l3 m3 s3'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/utensils.png' style='width: 50px; max-width: 100%;'/>" +
                        "</div> " +
                        "<div class='w3-col l9 m9 s9'>" +
                        "<h3 style='margin-top: 15px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        " Oder details" +
                        "</h3>" +
                        "</div> " +
                        "</div><br/><br/><br/><br/> " +

                        "<h6 style='font-family: "+PrimFont+";'>Pastry: " +
                        "<span style='color: "+PrimColor+";'>"+
                        d.Data.Name +"</span></h6>" +


                        "<h6 style='font-family: "+PrimFont+";'>Price: " +
                        "<span style='color: "+PrimColor+";'><span style='font-family: Arial;'>"+
                        d.Currency.Symbol +"</span>" +
                        numFormat(Number(d.Data.Price).toFixed(2)) +"</span></h6>" +

                        "Enter the quantity, date and time, the order will be made automatically when you are at the hotel" +

                        "<div class='ui input fluid labeled s-width-xxl'>" +
                        "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Qty</label>" +
                        "<input id='order-quantity' class='wix-textbox' type='number' value='1' min='1' style='border-radius: 0px; max-width: 80px;'/>" +
                        "<label class='ui label' style='color: "+PrimColor+"; border-radius: 0px; font-family: "+PrimFont+";'>Date</label>" +
                        "<input id='order-date' class='wix-textbox' autocomplete='off' placeholder='Order date' data-toggle='datepicker' style='border-radius: 0px 4px 4px 0px;'/>" +
                        "</div>"+
                        "<div class='ui fluid action labeled input' style='margin-top: 3px;'>" +
                        "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Time</label>" +
                        "<select id='order-hour' class='ui wix-select compact selection dropdown'>" +
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
                        "<label class='ui label' style='color: "+PrimColor+"; border-radius: 0px; font-family: "+PrimFont+";'>:</label>" +
                        "<input id='order-min' class='wix-textbox' type='text' value='00' style='border-radius: 0px;'/>" +
                        "<select id='order-gmt' class='ui wix-select compact selection dropdown'>" +
                        "<option>am</option>" +
                        "<option>pm</option>" +
                        "</select>" +
                        "</div>" +
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='item-order-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='executePastryReservation()'>Place order</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");

                    $(".ui.dropdown").dropdown();
                    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
                }
                else if(d.Status == "not-reservable")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "Unable to reserve" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/pastry.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "<span style='font-weight: bold; color: "+PrimColor+";'>"+
                        d.Data.Name +"</span> is currently unavailable for reservation at the moment. " +
                        "It may be available at the pastry corner though." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "no-room")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "Can't order from the pastry corner just yet" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/pastry.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "To order from the pastry corner, you have to add room reservations or be checked in at the hotel. " +
                        "Add a room reservation or login if you have checked in already." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "&nbsp;&nbsp;<label style='font-family: "+PrimFont+"; cursor: pointer;' " +
                        "onclick='swithReservLogin()'>Login</label>" +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "no-room-logged-in")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class='align-c'>" +
                        "<h4 style='margin-top: 20px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        "You need a room reservation to order" +
                        "</h4>" +
                        "<h1 class=''>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/pastry.png'/>" +
                        "</h1>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "To order from the pastry corner, you have to add room reservations or be checked in at the hotel. " +
                        "Add a room reservation first." +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='login-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='closeReservepane()'>OK</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
                else if(d.Status == "order-now")
                {
                    $("#logs-con").removeClass("l-margin-t-8");
                    $("#logs-con").html(
                        "<div class=''>" +
                        "<input id='ordered-item' type='hidden' value='"+d.Data.Id+"'/>" +
                        "<div class='w3-col'>" +
                        "<div class='w3-col l3 m3 s3'>" +
                        "<img src='"+host+"/cdn/images/icons/pastel/pastry.png' style='width: 50px; max-width: 100%;'/>" +
                        "</div> " +
                        "<div class='w3-col l9 m9 s9'>" +
                        "<h3 style='margin-top: 15px; font-family: "+PrimFont+"; color: dimgray;'>" +
                        " Oder details" +
                        "</h3>" +
                        "</div> " +
                        "</div><br/><br/><br/><br/> " +


                        "<h6 style='font-family: "+PrimFont+";'>" +
                        "Room: <span style='color: "+PrimColor+";'>"+
                        shortenText(50, d.Lodging.Rooms.toString()) + "</span></h6>" +

                        "<h6 style='font-family: "+PrimFont+";'>Pastry: " +
                        "<span style='color: "+PrimColor+";'>"+
                        d.Data.Name +"</span></h6>" +

                        "<h6 style='font-family: "+PrimFont+";'>Price: " +
                        "<span style='color: "+PrimColor+";'><span style='font-family: Arial;'>"+
                        d.Currency.Symbol +"</span>" +
                        numFormat(Number(d.Data.Price).toFixed(2)) +"</span></h6>" +

                        "<div class='ui input fluid labeled s-width-xxl'>" +
                        "<label class='ui label'>Quantity</label>" +
                        "<input id='ordered-item-quantity' class='wix-textbox' type='number' value='1' min='1'/>" +
                        "</div>"+
                        "<h6 class='' style='margin: auto; font-family: "+
                        PrimFont+"; color: dimgray; line-height: 170%;'>" +
                        "</h6>" +
                        "<div style='margin-top: 5px;'><br/> " +
                        "<button id='item-order-btn' class='ui sleak button' style='background-color: " +
                        PrimColor + "; color: white;' onclick='executePastryOrder()'>Order now</button> " +
                        "<br/>" +
                        "</div>" +
                        "</div>");
                }
            }
            else
            {

            }
        }, request);
    }

    function executePastryOrder()
    {
        let request = {
            quantity:Number($("#ordered-item-quantity").val()),
            pastry:$("#ordered-item").val(),
            job:"order pastry now"
        };

        if(request.quantity < 1)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid quantity"});
        }
        else
        {
            $("#logs-con").addClass("ui loading form");
            postJson("hms-client/worker", function(data, status){
                $("#logs-con").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#logs-con").html(
                            "<div class='align-c' style='margin-top: 20px;'>" +
                            "<img src='"+host+"/cdn/images/icons/pastel/pastry.png' style='max-width: 100%;'/>" +
                            "<h4 style='font-family: "+PrimFont+";'>Pastry added successfully</h4>"+
                            "</div><br/><br/>" +
                            "<div class='align-c'>" +
                            "<a href='"+d.Data.root+"maverick/reservations'>" +
                            "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                            "<i class='shopping basket icon'></i> Complete your order" +
                            "</button><br/>" +
                            "<div class='ui horizontal divider'>OR</div>" +
                            "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                            "Add more to your order</label><br/>" +
                            "</div>" +
                            "<div class='w3-row margin-t-6'>" +
                            (d.Data.modules.Kitchen === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/restaurant'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='utensils icon' style='color: silver;'></i> Food" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bar === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/bar'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bakery === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a onclick='closeReservepane()'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            "</div>");


                        $(".cart-content-count").html(d.Data.Cartcount);
                    }
                    else
                    {
                        errorButton({btn:"item-order-btn", msg:d.Message});
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to send request");
                }
            },request);
        }
    }

    function executePastryReservation()
    {
        let request = {
            quantity:Number($("#order-quantity").val()),
            date:$("#order-date").val(),
            hour:$("#order-hour").val(),
            mins:$("#order-min").val(),
            gmt:$("#order-gmt").val(),
            pastry:$("#ordered-item").val(),
            job:"add pastry reservation"
        };

        if(request.quantity < 1)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid quantity"});
        }
        else if(request.date.toString().split("/") < 3)
        {
            errorButton({btn:"item-order-btn", msg:"Invalid date"});
        }
        else
        {
            $("#logs-con").addClass("ui loading form");
            postJson("hms-client/worker", function(data, status){
                $("#logs-con").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#logs-con").html(
                            "<div class='align-c' style='margin-top: 20px;'>" +
                            "<img src='"+host+"/cdn/images/icons/pastel/pastry.png' style='max-width: 100%;'/>" +
                            "<h4 style='font-family: "+PrimFont+";'>Pastry added successfully</h4>"+
                            "</div><br/><br/>" +
                            "<div class='align-c'>" +
                            "<a href='"+d.Data.root+"maverick/reservations'>" +
                            "<button class='ui button' style='color: white; background-color: "+PrimColor+"; font-family: "+SecFont+"; font-weight: normal;'>" +
                            "<i class='shopping basket icon'></i> Complete your order" +
                            "</button><br/>" +
                            "<div class='ui horizontal divider'>OR</div>" +
                            "<label style='color: darkgray; font-family: "+PrimFont+"; margin-top: 10px;'>" +
                            "Add more to your order</label><br/>" +
                            "</div>" +
                            "<div class='w3-row margin-t-6'>" +
                            (d.Data.modules.Kitchen === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/restaurant'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='utensils icon' style='color: silver;'></i> Food" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bar === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a href='"+d.Data.root+"maverick/bar'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='martini glass icon' style='color: silver;'></i> Drinks" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            (d.Data.modules.Bakery === true ?
                                "<div class='w3-col l4 m4 s4 align-c'>" +
                                "<a onclick='closeReservepane()'> " +
                                "<h6 style='color: "+PrimColor+"; font-family: "+PrimFont+"; cursor: pointer; font-size: 15px;'>" +
                                "<i class='birthday cake icon' style='color: silver;'></i> Pastries" +
                                "</h6>" +
                                "</a>" +
                                "</div> " : "") +
                            "</div>");


                        $(".cart-content-count").html(d.Data.Cartcount);
                    }
                    else if(d.Status === "out of range")
                    {
                        ShowModal("Order has to be within the period of your stay at the hotel. Your selected date is out of range.");
                    }
                    else
                    {
                        errorButton({btn:"item-order-btn", msg:d.Message});
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to send request");
                }
            },request);
        }
    }

    function changePastryQuantity(e)
    {
        let request = {
            itemid:e,
            quantity:$("#"+e+"-quantity").val(),
            job:"update pastry quantity"
        };

        $("#item-"+e+"-del-btn").removeClass("trash red icon");
        $("#item-"+e+"-del-btn").addClass("wix-pulse");
        postJson("hms-client/worker", function(data, status){
            $("#item-"+e+"-del-btn").addClass("trash red icon");
            $("#item-"+e+"-del-btn").removeClass("wix-pulse");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                    $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                    $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                    $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));

                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                }
                else
                {
                    $("#"+e+"-order-total").html(numFormat(Number(d.Data.total).toFixed(2)));
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Check your connection and try again");
            }
        },request);
    }






    //----------------------------------------------------------------------------------------------

    function saveSubscriberEmail()
    {
        let request = {
            email:$("#newsletter-email").val(),
            job:"save subscriber email"
        };

        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!regex.test(request.email))
        {
            errorButton({btn:"email-subscribe-btn", msg:"Invalid email"});
        }
        else
        {
            loadingButton({btn:"email-subscribe-btn"});
            postJson("hms-client/worker", function(data, status){
                loadingButton({btn:"email-subscribe-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#newsletter-email").val("");

                        $("#email-subscribe-btn").addClass("positive disabled");
                        $("#email-subscribe-btn").html("<i class='check icon'></i> Success");
                        setTimeout(function () {
                            $("#email-subscribe-btn").removeClass("positive disabled");
                            $("#email-subscribe-btn").html("<i class='open envelope icon'></i> Subscribe");
                        }, 3000);

                        ShowModal("You have successfully signed up for our newsletter");
                    }
                    else
                    {
                        errorButton({btn:"email-subscribe-btn", msg:d.Message});
                    }
                }
                else
                {
                    errorButton({btn:"email-subscribe-btn", msg:"Connection error"});
                }
            },request);
        }
    }

    function applyCoupon()
    {
        let request = {
            code:$("#coupon-code").val(),
            job:"apply coupon"
        };

        if(request.code == "")
        {
            errorButton({btn:"coupon-btn", msg:"No code"});
        }
        else
        {
            loadingButton({btn:"coupon-btn"});
            postJson("hms-client/worker", function(data, status){
                loadingButton({btn:"coupon-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#coupon-code").val("");
                        $("#coupon-btn").html("<i class='check icon'></i> Applied");
                        $("#coupon-btn").addClass("disabled positive");
                        setTimeout(function(){
                            $("#coupon-btn").html("Apply");
                            $("#coupon-btn").removeClass("disabled positive");
                        },3000);

                        $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                        $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                        $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                        $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));


                        for(let i = 0; i < d.Data.Coupon.length; i++)
                        {
                            if(getElement(d.Data.Coupon[i].Id+"-con") == null)
                            {
                                let con = document.createElement("div");
                                con.id = d.Data.Coupon[i].Id+"-con";
                                con.className = "w3-row";
                                con.style.display = "none";

                                con.innerHTML =
                                    "<div class='w3-col l6 m6 s6'>" +
                                    "<h6 style='font-family: "+SecFont+"; color: "+PrimColor+";'>" +
                                    d.Data.Coupon[i].Title+"</h6></div>" +
                                    "<div class='w3-col l4 m4 s4 align-r'>" +
                                    "<h6 style='font-family: "+SecFont+"; color: "+PrimColor+";'>" +
                                    (d.Data.Coupon[i].Bypercentage ? numFormat(Number(d.Data.Coupon[i].Value))+"%" :
                                    "<span style='font-family: Lato;'>" +
                                    currency_symbol+numFormat(Number(d.Data.Coupon[i].Value))+"</span>") +
                                    "</h6>" +
                                    "</div>" +
                                    "<div class='w3-col l2 m2 s2 align-r'>" +
                                    "<h6>" +
                                    "<i id='"+d.Data.Coupon[i].Id+"-btn' class='times red icon' style='cursor: pointer;' " +
                                    "title='remove coupon' onclick=\"removeCoupon('"+d.Data.Coupon[i].Id+"')\"></i></h6>" +
                                    "</div>";
                                getElement("coupon-con").appendChild(con);

                                $("#"+d.Data.Coupon[i].Id+"-con").transition('drop in');
                            }
                        }
                    }
                    else
                    {
                        errorButton({btn:"coupon-btn", msg:d.Message});
                    }
                }
                else
                {
                    errorButton({btn:"coupon-btn", msg:"Connection error"});
                }
            },request);
        }
    }

    function removeCoupon(e)
    {
        let request = {
            coupon:e,
            job:"remove coupon"
        };

        $("#"+e+"-btn").addClass("loading spinner");
        $("#"+e+"-btn").removeClass("times");
        postJson("hms-client/worker", function(data, status){
            $("#"+e+"-btn").removeClass("loading spinner");
            $("#"+e+"-btn").addClass("times");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    $("#"+e+"-btn").addClass("green check");
                    $("#"+e+"-btn").removeClass("times red");

                    setTimeout(function () {
                        $("#"+e+"-con").transition('drop out', function(){
                            getElement("coupon-con").removeChild(getElement(e+"-con"));
                        });
                    },2000);

                    $("#subtotal-main-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
                    $("#taxes-main-con").html(numFormat(Number(d.Data.Tax).toFixed(2)));
                    $("#discount-main-con").html(numFormat(Number(d.Data.Discount).toFixed(2)));
                    $("#total-main-con").html(numFormat(Number((Number(d.Data.Total) + Number(d.Data.Tax)) - Number(d.Data.Discount)).toFixed(2)));

                }
                else
                {
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Check your connection and try again");
            }
        },request);
    }






    function saveReservation(func)
    {
        let request = {
            name:$("#reservation-name").val(),
            surname:$("#reservation-sname").val(),
            email:$("#reservation-email").val(),
            phone:$("#reservation-phone").val(),
            gender:"male",
            country:"",
            state:"",
            city:"",
            street:"",
            specialrequest:$("#reservation-request").val(),
            job:"save reservation"
        };


        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(getElement("female-check").checked)
        {
            request.gender = "female";
        }

        if(getElement("reservation-country") != null)
        {
            request.country = $("#reservation-country").dropdown('get value');
        }
        if(getElement("reservation-state") != null)
        {
            request.state = $("#reservation-state").val();
        }
        if(getElement("reservation-city") != null)
        {
            request.state = $("#reservation-city").val();
        }
        if(getElement("reservation-street") != null)
        {
            request.state = $("#reservation-street").val();
        }



        if(request.name == "")
        {
            if(typeof (func) == "function")
            {
                func("error", "Enter your fist name");
            }
        }
        else if(request.surname == "")
        {
            if(typeof (func) == "function")
            {
                func("error", "Surname is empty");
            }
        }
        else if(!regex.test(request.email))
        {
            if(typeof (func) == "function")
            {
                func("error", "Your email is invalid. Please reload the page");
            }
        }
        else if(request.phone == "")
        {
            if(typeof (func) == "function")
            {
                func("error", "Invalid phone number");
            }
        }
        else if((getElement("reservation-country") != null) && ($("#reservation-country").dropdown('get value') === ""))
        {
            if(typeof (func) == "function")
            {
                func("error", "Select your country where you live");
            }
        }
        else if((getElement("reservation-state") != null) && ($("#reservation-state").val() === ""))
        {
            if(typeof (func) == "function")
            {
                func("error", "Enter the state where you live");
            }
        }
        else if((getElement("reservation-city") != null) && ($("#reservation-city").val() === ""))
        {
            if(typeof (func) == "function")
            {
                func("error", "Enter the city where you live");
            }
        }
        else if((getElement("reservation-street") != null) && ($("#reservation-street").val() === ""))
        {
            if(typeof (func) == "function")
            {
                func("error", "Enter your street address");
            }
        }
        else
        {
            postJson("hms-client/worker", function(data, status){
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        if(typeof (func) == "function")
                        {
                            func("success", d);
                        }
                    }
                    else
                    {
                        if(typeof (func) == "function")
                        {
                            func("failed", d.Message);
                        }
                    }
                }
                else
                {
                    if(typeof (func) == "function")
                    {
                        func("failed", "Connection error");
                    }
                }
            },request);
        }
    }


    function PayReservationNow()
    {
        payWithPaystack({
            email: d.Data.Email,
            key: d.Data.Key,
            amount: d.Data.Basevalue,
            currency: d.Data.Currency,
            payment: d.Data.Payment.Id,
            payload: d.Data
        }, function (data, status, payload) {
            if (status == "done") {
                onlinepaySuccess(data, payload);
            } else {
                onlinePayFailed(data);
            }
        });
    }

    function payOrderNow()
    {
        $("#order-btn").addClass("disabled");
        $("#order-btn-text").html("processing");
        $("#order-btn-icon").addClass("spinner loading");
        $("#order-btn-icon").removeClass("cart");

        postJson("hms-client/worker", function(data, status){

            $("#order-btn").removeClass("disabled");
            $("#order-btn-text").html("Send order");
            $("#order-btn-icon").removeClass("spinner loading");
            $("#order-btn-icon").addClass("cart");

            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    if(d.Method === "PAYSTACK")
                    {
                        payWithPaystack(d.Data,function(){

                        });
                    }
                    else
                    {
                        ShowModal("Sorry! Webpay has not been setup correctly");
                    }
                }
                else
                {
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Unable to initialize payment");
            }
        },{job:"initialize reservation webpay"});
    }

    function payAtHotel(e)
    {
        loadingButton({btn:"at-hotel-btn"});
        $("#online-btn").addClass("disabled");

        saveReservation(function(status, d){
            loadingButton({btn:"at-hotel-btn", loading:false});
            $("#online-btn").removeClass("disabled");
            if(status === "success")
            {
                location.href = d.Data.root+"maverick/reservation-complete/"+d.Data.Reservation.Id;
            }
            else
            {
                ShowModal(d.Data);
            }
        });
    }


    function nopayreservation()
    {
        $("#reserve-btn-icon").addClass("spinner loading");
        $("#reserve-btn-text").html("Processing..");
        $("#reserve-btn").addClass("disabled");

        saveReservation(function(status, d){
            $("#reserve-btn-icon").addClass("spinner loading");
            $("#reserve-btn-text").html("Processing..");
            $("#reserve-btn").addClass("disabled");
            $("#online-btn").removeClass("disabled");
            if(status === "success")
            {
                location.href = d.Data.root+"maverick/reservation-complete/"+d.Data.Reservation.Id;
            }
            else
            {
                ShowModal(d.Data);
            }
        });
    }

    function beginPayonline()
    {
        $("#at-hotel-btn").addClass("disabled");
        $("#online-btn").addClass("disabled");
        $("#online-btn-text").html("processing");
        $("#online-btn-icon").addClass("spinner loading");
        $("#online-btn-icon").removeClass("credit card");

        postJson("hms-client/worker", function(data, status){

            $("#at-hotel-btn").removeClass("disabled");
            $("#online-btn").removeClass("disabled");
            $("#online-btn-text").html("Pay now");
            $("#online-btn-icon").removeClass("spinner loading");
            $("#online-btn-icon").addClass("credit card");

            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    if(d.Method === "PAYSTACK")
                    {
                        payWithPaystack(d.Data,function(){

                        });
                    }
                    else
                    {
                        ShowModal("Sorry! Webpay has not been setup correctly");
                    }
                }
                else
                {
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Unable to initialize payment");
            }
        },{job:"initialize reservation webpay"});
    }

    function processOrderNow()
    {
        if(getElement("pay-order-inroom").checked)
        {
            $("#order-btn").addClass("disabled");
            $("#order-btn-text").html("processing");
            $("#order-btn-icon").addClass("spinner loading");
            $("#order-btn-icon").removeClass("cart");

            postJson("hms-client/worker", function(data, status){

                $("#order-btn").removeClass("disabled");
                $("#order-btn-text").html("Send order");
                $("#order-btn-icon").removeClass("spinner loading");
                $("#order-btn-icon").addClass("cart");

                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        $("#reservations-con").html(
                            "<div class='l-pad-4 widget w3-card s-pad-2'>" +
                            "<div class='align-c'>" +
                            "<h1 class='ui icon header'><i class='check circular green icon'></i></h1>" +
                            "<h3 style='font-family: "+PrimFont+"; color: dimgray;'>Order sent successfully!</h3>" +
                            "<br/>" +
                            "<h6 style='font-family: "+PrimFont+"; font-weight: bold; line-height: 180%;'>" +
                            "Your order have been sent for processing. <br/>Your order will be delivered " +
                            "to your room in a few minuites</h6>" +
                            "<h6></h6>" +
                            "</div>" +
                            "</div>");
                    }
                    else
                    {
                        ShowModal(d.Message);
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to complete order");
                }
            },{job:"place order now"});
        }
        else
        {
            payOrderNow();
        }
    }

    function editProfile(e)
    {
        if(e.innerHTML === "<i class=\"save icon\"></i> Save")
        {
            let request = {
                name:$("#name").val(),
                sname:$("#sname").val(),
                dob:$("#dob").val(),
                city:"",
                state:"",
                country:"",
                street:"",
                occupation:"",
                kin_name:"",
                kin_address:"",
                job:"update profile"
            };

            if(getElement("city") != null)
            {
                request.city = $("#city").val();
            }
            if(getElement("state") != null)
            {
                request.city = $("#state").val();
            }
            if(getElement("country") != null)
            {
                request.city = $("#country").dropdown('get value');
            }
            if(getElement("street") != null)
            {
                request.city = $("#street").val();
            }
            if(getElement("occupation") != null)
            {
                request.city = $("#occupation").val();
            }
            if(getElement("kin-name") != null)
            {
                request.kin_name = $("#kin-name").val();
            }
            if(getElement("kin-address") != null)
            {
                request.city = $("#kin-address").val();
            }


            if(request.name === "")
            {
                errorButton({btn:"profile-edit-btn", msg:"Name is empty"});
            }
            else if(request.sname === "")
            {
                errorButton({btn:"profile-edit-btn", msg:"Surname is empty"});
            }
            else if(request.dob.split("/") < 2)
            {
                errorButton({btn:"profile-edit-btn", msg:"Invalid date of birth"});
            }
            else if((getElement("city") != null) && ($("#city").val() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"City is empty"});
            }
            else if((getElement("state") != null) && ($("#state").val() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"State is empty"});
            }
            else if((getElement("country") != null) && ($("#country").dropdown() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"Select your country"});
            }
            else if((getElement("street") != null) && ($("#street").val() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"Enter your street address"});
            }
            else if((getElement("occupation") != null) && ($("#occupation").val() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"Enter your occupation"});
            }
            else if((getElement("kin-name") != null) && ($("#kin-name").val() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"Enter a next of kin"});
            }
            else if((getElement("kin-address") != null) && ($("#city").val() == ""))
            {
                errorButton({btn:"profile-edit-btn", msg:"Enter next of kin's address"});
            }
            else
            {

                $(e).addClass("disabled loading");
                postJson("hms-client/worker", function(data, status){
                    $(e).removeClass("disabled loading");
                    if(status === "done")
                    {
                        let d = JSON.parse(data);

                        if(d.Status === "success")
                        {
                            $(".profile-edit-con").prop("disabled", true);
                            $(".profile-edit-con").addClass("profile-input");
                            $(".profile-edit-con").removeClass("wix-textbox");

                            $(e).addClass("disabled positive");
                            $(e).html("<i class='check icon'></i> Saved");
                            setTimeout(function(){
                                $(e).removeClass("disabled positive");
                                $(e).html("<i class='pencil icon'></i> Edit Profile");
                            },3000);
                        }
                        else
                        {
                            ShowModal(d.Message);
                        }
                    }
                    else
                    {
                        ShowModal("Connection error. Check your connection and try again");
                    }
                },request);
            }
        }
        else
        {
            $(".profile-edit-con").prop("disabled", false);
            $(".profile-edit-con").removeClass("profile-input");
            $(".profile-edit-con").addClass("wix-textbox");

            e.innerHTML = "<i class='save icon'></i> Save";
        }
    }

    function cancelReservation(e)
    {
        $("#"+e+"-btn").addClass("wix-pulse");
        $("#"+e+"-btn").removeClass("vertical ellipsis");
        postJson("hms-client/worker", function(data, status){
            $("#"+e+"-btn").removeClass("wix-pulse");
            $("#"+e+"-btn").addClass("vertical ellipsis");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.Status === "success")
                {
                    $("#"+e+"-reservation").transition('drop out', function(){
                        getElement("reservation-con").removeChild(getElement(e+"-reservation"));
                    });
                }
                else
                {
                    ShowModal(d.Message);
                }
            }
            else
            {
                ShowModal("Connection error. Check your connection and try again");
            }
        },{job:"cancel reservation", reservation:e});
    }

    function openMobileAccountMenu(e)
    {
        if(!$("#m-account-menu").hasClass("is-open"))
        {
            $("#m-account-menu").addClass("is-open");
            $("#m-account-menu").slideDown(400);
            $(e).transition('drop out', function(){
                $(e).removeClass("down");
                $(e).addClass("up");
                $(e).transition('drop in');
            });
        }
        else
        {
            $("#m-account-menu").removeClass("is-open");
            $("#m-account-menu").slideUp(400);
            $(e).transition('drop out', function(){
                $(e).removeClass("up");
                $(e).addClass("down");
                $(e).transition('drop in');
            });
        }
    }


    let cropping = null;
    let cropPayload = null;
    let cropSize = "viewport"; //values viewport or original
    let cropQuality = 1; //values 0 - 1

    function cropImage(o, func, payload) {
        let img = null;
        let resizable = true;
        let shape = "square";
        let width = 250;
        let height = 250;

        // bind config
        this.CropConfig = o;

        cropPayload = payload;

        if (o != null) {
            if (o.file != null) {
                img = o.file;
            }
            if (o.width != null) {
                width = o.width;
            }
            if (o.height != null) {
                height = o.height;
            }
            if (o.shape != null) {
                shape = o.shape;
            }
            if (o.elastic != null) {
                resizable = o.elastic;
            }
            if (o.resizable != null) {
                resizable = o.resizable;
            }
            if (o.ratio != null) {
                height = 250;
                width = Number(o.ratio * 250);
            }
            if (o.aspectratio != null) {
                height = 250;
                width = Number(o.aspectratio * 250);
            }
            if (o.size != null) {
                cropSize = o.size;
            }
            if (o.Size != null) {
                cropSize = o.Size;
            }
            if (o.quality != null) {
                cropSize = o.quality;
            }
            if (o.Quality != null) {
                cropSize = o.Quality;
            }
        }

        if (img != null) {
            let modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.backgroundColor = "rgba(0,0,0,0.6)";
            modal.style.top = "0px";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.zIndex = 300;
            modal.id = "passport-modal";
            modal.style.overflowY = "auto";
            modal.className = "w3-row";
            modal.style.display = "none";


            document.body.appendChild(modal);


            $("#passport-modal").fadeIn(500, function () {

                modal.innerHTML = "<div id='passport-modal-inner' style='display: none;'>" +
                    "<div class='w3-col l3 m2 s12' style='color: transparent;'>.</div>" +
                    "<div class='w3-col l6 m8 s12 s-pad-t'>" +
                    "<div class='widget l-margin-t-7 margin-b-3'>" +
                    "<div class='pad-1'><h6 style='font-family: quicksandbold; color: dimgray;'>Crop Image</h6></div>" +
                    "<hr style='margin: 0px;'/>" +
                    "<div class='pad-2 align-c style='width: 100%;'>" +
                    "<div id='image-crop' style='height: 250px; width: 100%;'>" +
                    "</div></div><br/><br/>" +
                    "<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
                    "<button class='ui compact sleak w3-green button' onclick='deliverCropedImage(" + func + ")'>OK</button>" +
                    "<button class='ui compact sleak basic button' onclick='closepassportModal()'>Cancel</button></div>" +
                    "</div></div></div><br/><br/>";

                $("#passport-modal-inner").transition('fade right in', function () {

                    //getElement("image-crop").src = URL.createObjectURL(img);

                    cropping = new Croppie(getElement("image-crop"), {
                        viewport: {
                            width: width,
                            height: height,
                            enableResize: resizable,
                            type: shape
                        }
                    });

                    cropping.bind({
                        url: URL.createObjectURL(img),
                    });
                });
            });
        }
    }



    function closepassportModal() {
        $("#passport-modal-inner").transition('fade right out', function () {
            $("#passport-modal").fadeIn(500, function () {
                document.body.removeChild(getElement("passport-modal"));
            });
        });
    }


    function deliverCropedImage(func) {
        cropping.result({ type: "blob", size: cropSize, quality: cropQuality, circle: false }).then(function (blob) {
            if (typeof func == "function") {
                func(blob, URL, cropPayload);
            }
        });
        closepassportModal();
    }



    function uploadPic(e)
    {
        cropImage({file:e.files[0], ratio:1/1}, function(blob, URL, n){

            getElement("profile-img").src = URL.createObjectURL(blob);

            let img = new File([blob], "file.png");

            loadingButton({btn:"profile-btn"});
            let upload = new WixUpload({file:img,url:"hms-client/upload"});
            upload.Upload(function(data, status){
                loadingButton({btn:"profile-btn",loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.Status === "success")
                    {
                        loadingButton({btn:"profile-btn"});
                        postJson("hms-client/worker", function(data, status){
                            loadingButton({btn:"profile-btn",loading:false});
                            if(status === "done")
                            {
                                let d = JSON.parse(data);

                                if(d.Status !== "success")
                                {
                                    getElement("profile-img").src = "";
                                    ShowModal(d.Message);
                                }
                            }
                            else
                            {
                                getElement("profile-img").src = "";
                                ShowModal("Connection error. Unable to save image");
                            }
                        },{job:"save profile picture", img:d.Data});
                    }
                    else
                    {
                        getElement("profile-img").src = "";
                        ShowModal("Application error. Unable to upload file please try again");
                    }
                }
                else
                {
                    getElement("profile-img").src = "";
                    ShowModal("Connection error. Unable to upload file please try again");
                }
            });
        });
    }
