let PrimColor = "";
let PrimFont = "";
let SecColor = "";
let SecFont = "";
let currency_symbol = "";
let host = "https://tripmata.com";

let api = "https://tripmata.com/api";

$(document).ready(function () {

    if(getElement("checkin-date") != null)
    {
        var picker = new Lightpick({
            field: document.getElementById('checkin-date'),
            secondField: document.getElementById('checkout-date'),
            singleDate: false,
            inline:false,
            format: 'M/D/YYYY',
            numberOfColumns:2,
            numberOfMonths:2,
            minDate:new Date(),
            onSelect: function(start, end){
                if($("#checkout-date").val() !== "")
                {
                    if($("#checkout-date").val() === $("#checkin-date").val())
                    {
                        let d = new Date(new Date(end).getTime() + (((60 * 60) * 24) * 1000));
                        $("#checkout-date").val((d.getMonth() + 1) + "/" + (d.getDate()) + "/" + d.getFullYear());
                    }
                }
            }
        });    
    }

    if(getElement("m-checkin-date") != null)
    {
        var picker2 = new Lightpick({
            field: document.getElementById('m-checkin-date'),
            secondField: document.getElementById('m-checkout-date'),
            singleDate: false,
            inline:false,
            format: 'M/D/YYYY',
            numberOfColumns:2,
            numberOfMonths:2,
            minDate:new Date(),
            onSelect: function(start, end){
                if($("#checkout-date").val() !== "")
                {
                    if($("#checkout-date").val() === $("#checkin-date").val())
                    {
                        let d = new Date(new Date(end).getTime() + (((60 * 60) * 24) * 1000));
                        $("#checkout-date").val((d.getMonth() + 1) + "/" + (d.getDate()) + "/" + d.getFullYear());
                    }
                }
            }
        });    
    }
    

    if(getElement("search-input") != null)
    {
        $('.ui.search').search({
            apiSettings: {
            url: api+'/soft-search?q={query}'
            },
            minCharacters : 2
        });
    }

    document.body.onscroll = pageScrolled;

    if(getElement("price-filter-min") != null)
    {
        $("#price-slider").slider({range:true, min:0, max:1000000, values:[1000, 1000000],slide:function (event, ui) {
                $("#price-filter-min").val(ui.values[0]);
                $("#price-filter-max").val(ui.values[1]);
                reRunSearch();
            }});
    }

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
    /*
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
*/

       



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


function pageScrolled()
{
    if(getElement("hero") != null)
    {
        let carousel = document.getElementById("hero");
        let sticky = carousel.offsetTop + 20;

        if (window.pageYOffset > sticky)
        {
            $("#page-header-container").css("background-color","white");
            //$("#page-header-container").animate({backgroundColor: "#ffffff"}, 1500 );
            $("#page-header-container").addClass("w3-card-4");
            $(".header-text").css("color", PrimColor);
            $(".pad-shift").removeClass("l-pad-2 s-pad-1");
            //$(".pad-shift").addClass("pad-t");
            $("#logo").animate( { height:"30px" }, { queue:false, duration:100 });
            $("#logo").animate( { marginTop:"10px" }, { queue:false, duration:100 });

            $(".swith-text").css("color","black");
        }
        else
        {
            $("#page-header-container").css("background-color","transparent");
            $("#page-header-container").removeClass("w3-card-4");
            $(".header-text").css("color", "white");
            $(".pad-shift").addClass("l-pad-2 s-pad-1");
            $("#logo").animate( { height:"30px" }, { queue:false, duration:100 });
            $("#logo").animate( { marginTop:"10px" }, { queue:false, duration:100 });

            $(".swith-text").css("color","white");
        }
    }
}

function zerofy(num)
{
    return Number(num) < 10 ? "0"+num : num;
}

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

function toggleMobMen()
{
    if($("#mobile-menu").hasClass('not-visible'))
    {
        $("#mobile-menu").removeClass('not-visible');
        $("#mobile-menu").transition('fade left in');
    }
    else
    {
        $("#mobile-menu").addClass('not-visible');
        $("#mobile-menu").transition('fade left out');
    }
}

function preventPropagation(e)
{
    e.stopPropagation();
}

function reSize()
{
    page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    $(".f-height").height(page_height);
    $(".h-height").height(page_height / 2);
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
        if (callback !== null && typeof callback == 'function')
        {
            callback.call(this, id);
        }

        // manage failed id
        id = (id === null) ? Object.create(null) : id;

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

function numFormat(x)
{
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
            sex:"",
            job:"update profile"
        };

        if(getElement("city") != null)
        {
            request.city = $("#city").val();
        }
        if(getElement("gender") != null)
        {
            request.sex = $("#gender").val();
        }
        if(getElement("state") != null)
        {
            request.state = $("#state").val();
        }
        if(getElement("country") != null)
        {
            request.country = $("#country").dropdown('get value');
        }
        if(getElement("street") != null)
        {
            request.street = $("#street").val();
        }
        if(getElement("occupation") != null)
        {
            request.occupation = $("#occupation").val();
        }
        if(getElement("kin-name") != null)
        {
            request.kin_name = $("#kin-name").val();
        }
        if(getElement("kin-address") != null)
        {
            request.kin_address = $("#kin-address").val();
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

                    if(d.status === "success")
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
                        ShowModal(d.message);
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

function deliverCropedImage(func)
{
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
        let upload = new WixUpload({file:img,url: phpvars.STORAGE_API_URL + "upload/files"});
        upload.Upload(function(data, status){
            loadingButton({btn:"profile-btn",loading:false});
            if(status === "done")
            {
                let d = JSON.parse(data);

                if (d.status === "success")
                {
                    loadingButton({btn:"profile-btn"});
                    postJson("hms-client/worker", function(data, status){
                        loadingButton({btn:"profile-btn",loading:false});
                        if(status === "done")
                        {
                            let d = JSON.parse(data);

                            if(d.status !== "success")
                            {
                                getElement("profile-img").src = "";
                                ShowModal(d.message);
                            }
                        }
                        else
                        {
                            getElement("profile-img").src = "";
                            ShowModal("Connection error. Unable to save image");
                        }
                    },{
                        job:"save profile picture",
                        img:d.data
                    });
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

function countryDropdown()
{
    var country_dropdown = "<div id='country' class='ui search fluid selection dropdown'>" +
        "  <input type='hidden' name='country'>" +
        "  <i class='dropdown icon'></i>" +
        "  <div class='default text'>Select Country</div>" +
        "  <div class='menu'>" +
        "  <div class='item' data-value='af'><i class='af flag'></i>Afghanistan</div>" +
        "  <div class='item' data-value='ax'><i class='ax flag'></i>Aland Islands</div>" +
        "  <div class='item' data-value='al'><i class='al flag'></i>Albania</div>" +
        "  <div class='item' data-value='dz'><i class='dz flag'></i>Algeria</div>" +
        "  <div class='item' data-value='as'><i class='as flag'></i>American Samoa</div>" +
        "  <div class='item' data-value='ad'><i class='ad flag'></i>Andorra</div>" +
        "  <div class='item' data-value='ao'><i class='ao flag'></i>Angola</div>" +
        "  <div class='item' data-value='ai'><i class='ai flag'></i>Anguilla</div>" +
        "  <div class='item' data-value='ag'><i class='ag flag'></i>Antigua</div>" +
        "  <div class='item' data-value='ar'><i class='ar flag'></i>Argentina</div>" +
        "  <div class='item' data-value='am'><i class='am flag'></i>Armenia</div>" +
        "  <div class='item' data-value='aw'><i class='aw flag'></i>Aruba</div>" +
        "  <div class='item' data-value='au'><i class='au flag'></i>Australia</div>" +
        "  <div class='item' data-value='at'><i class='at flag'></i>Austria</div>" +
        "  <div class='item' data-value='az'><i class='az flag'></i>Azerbaijan</div>" +
        "  <div class='item' data-value='bs'><i class='bs flag'></i>Bahamas</div>" +
        "  <div class='item' data-value='bh'><i class='bh flag'></i>Bahrain</div>" +
        "  <div class='item' data-value='bd'><i class='bd flag'></i>Bangladesh</div>" +
        "  <div class='item' data-value='bb'><i class='bb flag'></i>Barbados</div>" +
        "  <div class='item' data-value='by'><i class='by flag'></i>Belarus</div>" +
        "  <div class='item' data-value='be'><i class='be flag'></i>Belgium</div>" +
        "  <div class='item' data-value='bz'><i class='bz flag'></i>Belize</div>" +
        "  <div class='item' data-value='bj'><i class='bj flag'></i>Benin</div>" +
        "  <div class='item' data-value='bm'><i class='bm flag'></i>Bermuda</div>" +
        "  <div class='item' data-value='bt'><i class='bt flag'></i>Bhutan</div>" +
        "" +
        "  <div class='item' data-value='bo'><i class='bo flag'></i>Bolivia</div>" +
        "  <div class='item' data-value='ba'><i class='ba flag'></i>Bosnia</div>" +
        "  <div class='item' data-value='bw'><i class='bw flag'></i>Botswana</div>" +
        "  <div class='item' data-value='bv'><i class='bv flag'></i>Bouvet Island</div>" +
        "  <div class='item' data-value='br'><i class='br flag'></i>Brazil</div>" +
        "  <div class='item' data-value='vg'><i class='vg flag'></i>British Virgin Islands</div>" +
        "  <div class='item' data-value='bn'><i class='bn flag'></i>Brunei</div>" +
        "  <div class='item' data-value='bg'><i class='bg flag'></i>Bulgaria</div>" +
        "  <div class='item' data-value='bf'><i class='bf flag'></i>Burkina Faso</div>" +
        "  <div class='item' data-value='mm'><i class='mm flag'></i>Burma</div>" +
        "  <div class='item' data-value='bi'><i class='bi flag'></i>Burundi</div>" +
        "  <div class='item' data-value='tc'><i class='tc flag'></i>Caicos Islands</div>" +
        "  <div class='item' data-value='kh'><i class='kh flag'></i>Cambodia</div>" +
        "  <div class='item' data-value='cm'><i class='cm flag'></i>Cameroon</div>" +
        "  <div class='item' data-value='ca'><i class='ca flag'></i>Canada</div>" +
        "  <div class='item' data-value='cv'><i class='cv flag'></i>Cape Verde</div>" +
        "  <div class='item' data-value='ky'><i class='ky flag'></i>Cayman Islands</div>" +
        "  <div class='item' data-value='cf'><i class='cf flag'></i>Central African Republic</div>" +
        "  <div class='item' data-value='td'><i class='td flag'></i>Chad</div>" +
        "  <div class='item' data-value='cl'><i class='cl flag'></i>Chile</div>" +
        "  <div class='item' data-value='cn'><i class='cn flag'></i>China</div>" +
        "  <div class='item' data-value='cx'><i class='cx flag'></i>Christmas Island</div>" +
        "  <div class='item' data-value='cc'><i class='cc flag'></i>Cocos Islands</div>" +
        "  <div class='item' data-value='co'><i class='co flag'></i>Colombia</div>" +
        "  <div class='item' data-value='km'><i class='km flag'></i>Comoros</div>" +
        "  <div class='item' data-value='cg'><i class='cg flag'></i>Congo Brazzaville</div>" +
        "  <div class='item' data-value='cd'><i class='cd flag'></i>Congo</div>" +
        "  <div class='item' data-value='ck'><i class='ck flag'></i>Cook Islands</div>" +
        "  <div class='item' data-value='cr'><i class='cr flag'></i>Costa Rica</div>" +
        "  <div class='item' data-value='ci'><i class='ci flag'></i>Cote Divoire</div>" +
        "  <div class='item' data-value='hr'><i class='hr flag'></i>Croatia</div>" +
        "  <div class='item' data-value='cu'><i class='cu flag'></i>Cuba</div>" +
        "  <div class='item' data-value='cy'><i class='cy flag'></i>Cyprus</div>" +
        "  <div class='item' data-value='cz'><i class='cz flag'></i>Czech Republic</div>" +
        "  <div class='item' data-value='dk'><i class='dk flag'></i>Denmark</div>" +
        "  <div class='item' data-value='dj'><i class='dj flag'></i>Djibouti</div>" +
        "  <div class='item' data-value='dm'><i class='dm flag'></i>Dominica</div>" +
        "  <div class='item' data-value='do'><i class='do flag'></i>Dominican Republic</div>" +
        "  <div class='item' data-value='ec'><i class='ec flag'></i>Ecuador</div>" +
        "  <div class='item' data-value='eg'><i class='eg flag'></i>Egypt</div>" +
        "  <div class='item' data-value='sv'><i class='sv flag'></i>El Salvador</div>" +
        "  <div class='item' data-value='gb'><i class='gb flag'></i>England</div>" +
        "  <div class='item' data-value='gq'><i class='gq flag'></i>Equatorial Guinea</div>" +
        "  <div class='item' data-value='er'><i class='er flag'></i>Eritrea</div>" +
        "  <div class='item' data-value='ee'><i class='ee flag'></i>Estonia</div>" +
        "  <div class='item' data-value='et'><i class='et flag'></i>Ethiopia</div>" +
        "  <div class='item' data-value='eu'><i class='eu flag'></i>European Union</div>" +
        "  <div class='item' data-value='fk'><i class='fk flag'></i>Falkland Islands</div>" +
        "  <div class='item' data-value='fo'><i class='fo flag'></i>Faroe Islands</div>" +
        "  <div class='item' data-value='fj'><i class='fj flag'></i>Fiji</div>" +
        "  <div class='item' data-value='fi'><i class='fi flag'></i>Finland</div>" +
        "  <div class='item' data-value='fr'><i class='fr flag'></i>France</div>" +
        "  <div class='item' data-value='gf'><i class='gf flag'></i>French Guiana</div>" +
        "  <div class='item' data-value='pf'><i class='pf flag'></i>French Polynesia</div>" +
        "  <div class='item' data-value='tf'><i class='tf flag'></i>French Territories</div>" +
        "  <div class='item' data-value='ga'><i class='ga flag'></i>Gabon</div>" +
        "  <div class='item' data-value='gm'><i class='gm flag'></i>Gambia</div>" +
        "  <div class='item' data-value='ge'><i class='ge flag'></i>Georgia</div>" +
        "  <div class='item' data-value='de'><i class='de flag'></i>Germany</div>" +
        "  <div class='item' data-value='gh'><i class='gh flag'></i>Ghana</div>" +
        "  <div class='item' data-value='gi'><i class='gi flag'></i>Gibraltar</div>" +
        "  <div class='item' data-value='gr'><i class='gr flag'></i>Greece</div>" +
        "  <div class='item' data-value='gl'><i class='gl flag'></i>Greenland</div>" +
        "  <div class='item' data-value='gd'><i class='gd flag'></i>Grenada</div>" +
        "  <div class='item' data-value='gp'><i class='gp flag'></i>Guadeloupe</div>" +
        "  <div class='item' data-value='gu'><i class='gu flag'></i>Guam</div>" +
        "  <div class='item' data-value='gt'><i class='gt flag'></i>Guatemala</div>" +
        "  <div class='item' data-value='gw'><i class='gw flag'></i>Guinea-Bissau</div>" +
        "  <div class='item' data-value='gn'><i class='gn flag'></i>Guinea</div>" +
        "  <div class='item' data-value='gy'><i class='gy flag'></i>Guyana</div>" +
        "  <div class='item' data-value='ht'><i class='ht flag'></i>Haiti</div>" +
        "  <div class='item' data-value='hm'><i class='hm flag'></i>Heard Island</div>" +
        "  <div class='item' data-value='hn'><i class='hn flag'></i>Honduras</div>" +
        "  <div class='item' data-value='hk'><i class='hk flag'></i>Hong Kong</div>" +
        "  <div class='item' data-value='hu'><i class='hu flag'></i>Hungary</div>" +
        "  <div class='item' data-value='is'><i class='is flag'></i>Iceland</div>" +
        "  <div class='item' data-value='in'><i class='in flag'></i>India</div>" +
        "  <div class='item' data-value='io'><i class='io flag'></i>Indian Ocean Territory</div>" +
        "  <div class='item' data-value='id'><i class='id flag'></i>Indonesia</div>" +
        "  <div class='item' data-value='ir'><i class='ir flag'></i>Iran</div>" +
        "  <div class='item' data-value='iq'><i class='iq flag'></i>Iraq</div>" +
        "  <div class='item' data-value='ie'><i class='ie flag'></i>Ireland</div>" +
        "  <div class='item' data-value='il'><i class='il flag'></i>Israel</div>" +
        "  <div class='item' data-value='it'><i class='it flag'></i>Italy</div>" +
        "  <div class='item' data-value='jm'><i class='jm flag'></i>Jamaica</div>" +
        "  <div class='item' data-value='jp'><i class='jp flag'></i>Japan</div>" +
        "  <div class='item' data-value='jo'><i class='jo flag'></i>Jordan</div>" +
        "  <div class='item' data-value='kz'><i class='kz flag'></i>Kazakhstan</div>" +
        "  <div class='item' data-value='ke'><i class='ke flag'></i>Kenya</div>" +
        "  <div class='item' data-value='ki'><i class='ki flag'></i>Kiribati</div>" +
        "  <div class='item' data-value='kw'><i class='kw flag'></i>Kuwait</div>" +
        "  <div class='item' data-value='kg'><i class='kg flag'></i>Kyrgyzstan</div>" +
        "  <div class='item' data-value='la'><i class='la flag'></i>Laos</div>" +
        "  <div class='item' data-value='lv'><i class='lv flag'></i>Latvia</div>" +
        "  <div class='item' data-value='lb'><i class='lb flag'></i>Lebanon</div>" +
        "  <div class='item' data-value='ls'><i class='ls flag'></i>Lesotho</div>" +
        "  <div class='item' data-value='lr'><i class='lr flag'></i>Liberia</div>" +
        "  <div class='item' data-value='ly'><i class='ly flag'></i>Libya</div>" +
        "  <div class='item' data-value='li'><i class='li flag'></i>Liechtenstein</div>" +
        "  <div class='item' data-value='lt'><i class='lt flag'></i>Lithuania</div>" +
        "  <div class='item' data-value='lu'><i class='lu flag'></i>Luxembourg</div>" +
        "  <div class='item' data-value='mo'><i class='mo flag'></i>Macau</div>" +
        "  <div class='item' data-value='mk'><i class='mk flag'></i>Macedonia</div>" +
        "  <div class='item' data-value='mg'><i class='mg flag'></i>Madagascar</div>" +
        "  <div class='item' data-value='mw'><i class='mw flag'></i>Malawi</div>" +
        "  <div class='item' data-value='my'><i class='my flag'></i>Malaysia</div>" +
        "  <div class='item' data-value='mv'><i class='mv flag'></i>Maldives</div>" +
        "  <div class='item' data-value='ml'><i class='ml flag'></i>Mali</div>" +
        "  <div class='item' data-value='mt'><i class='mt flag'></i>Malta</div>" +
        "  <div class='item' data-value='mh'><i class='mh flag'></i>Marshall Islands</div>" +
        "  <div class='item' data-value='mq'><i class='mq flag'></i>Martinique</div>" +
        "  <div class='item' data-value='mr'><i class='mr flag'></i>Mauritania</div>" +
        "  <div class='item' data-value='mu'><i class='mu flag'></i>Mauritius</div>" +
        "  <div class='item' data-value='yt'><i class='yt flag'></i>Mayotte</div>" +
        "  <div class='item' data-value='mx'><i class='mx flag'></i>Mexico</div>" +
        "  <div class='item' data-value='fm'><i class='fm flag'></i>Micronesia</div>" +
        "  <div class='item' data-value='md'><i class='md flag'></i>Moldova</div>" +
        "  <div class='item' data-value='mc'><i class='mc flag'></i>Monaco</div>" +
        "  <div class='item' data-value='mn'><i class='mn flag'></i>Mongolia</div>" +
        "  <div class='item' data-value='me'><i class='me flag'></i>Montenegro</div>" +
        "  <div class='item' data-value='ms'><i class='ms flag'></i>Montserrat</div>" +
        "  <div class='item' data-value='ma'><i class='ma flag'></i>Morocco</div>" +
        "  <div class='item' data-value='mz'><i class='mz flag'></i>Mozambique</div>" +
        "  <div class='item' data-value='na'><i class='na flag'></i>Namibia</div>" +
        "  <div class='item' data-value='nr'><i class='nr flag'></i>Nauru</div>" +
        "  <div class='item' data-value='np'><i class='np flag'></i>Nepal</div>" +
        "  <div class='item' data-value='an'><i class='an flag'></i>Netherlands Antilles</div>" +
        "  <div class='item' data-value='nl'><i class='nl flag'></i>Netherlands</div>" +
        "  <div class='item' data-value='nc'><i class='nc flag'></i>New Caledonia</div>" +
        "  <div class='item' data-value='pg'><i class='pg flag'></i>New Guinea</div>" +
        "  <div class='item' data-value='nz'><i class='nz flag'></i>New Zealand</div>" +
        "  <div class='item' data-value='ni'><i class='ni flag'></i>Nicaragua</div>" +
        "  <div class='item' data-value='ne'><i class='ne flag'></i>Niger</div>" +
        "  <div class='item' data-value='ng'><i class='ng flag'></i>Nigeria</div>" +
        "  <div class='item' data-value='nu'><i class='nu flag'></i>Niue</div>" +
        "  <div class='item' data-value='nf'><i class='nf flag'></i>Norfolk Island</div>" +
        "  <div class='item' data-value='kp'><i class='kp flag'></i>North Korea</div>" +
        "  <div class='item' data-value='mp'><i class='mp flag'></i>Northern Mariana Islands</div>" +
        "  <div class='item' data-value='no'><i class='no flag'></i>Norway</div>" +
        "  <div class='item' data-value='om'><i class='om flag'></i>Oman</div>" +
        "  <div class='item' data-value='pk'><i class='pk flag'></i>Pakistan</div>" +
        "  <div class='item' data-value='pw'><i class='pw flag'></i>Palau</div>" +
        "  <div class='item' data-value='ps'><i class='ps flag'></i>Palestine</div>" +
        "  <div class='item' data-value='pa'><i class='pa flag'></i>Panama</div>" +
        "  <div class='item' data-value='py'><i class='py flag'></i>Paraguay</div>" +
        "  <div class='item' data-value='pe'><i class='pe flag'></i>Peru</div>" +
        "  <div class='item' data-value='ph'><i class='ph flag'></i>Philippines</div>" +
        "  <div class='item' data-value='pn'><i class='pn flag'></i>Pitcairn Islands</div>" +
        "  <div class='item' data-value='pl'><i class='pl flag'></i>Poland</div>" +
        "  <div class='item' data-value='pt'><i class='pt flag'></i>Portugal</div>" +
        "  <div class='item' data-value='pr'><i class='pr flag'></i>Puerto Rico</div>" +
        "  <div class='item' data-value='qa'><i class='qa flag'></i>Qatar</div>" +
        "  <div class='item' data-value='re'><i class='re flag'></i>Reunion</div>" +
        "  <div class='item' data-value='ro'><i class='ro flag'></i>Romania</div>" +
        "  <div class='item' data-value='ru'><i class='ru flag'></i>Russia</div>" +
        "  <div class='item' data-value='rw'><i class='rw flag'></i>Rwanda</div>" +
        "  <div class='item' data-value='sh'><i class='sh flag'></i>Saint Helena</div>" +
        "  <div class='item' data-value='kn'><i class='kn flag'></i>Saint Kitts and Nevis</div>" +
        "  <div class='item' data-value='lc'><i class='lc flag'></i>Saint Lucia</div>" +
        "  <div class='item' data-value='pm'><i class='pm flag'></i>Saint Pierre</div>" +
        "  <div class='item' data-value='vc'><i class='vc flag'></i>Saint Vincent</div>" +
        "  <div class='item' data-value='ws'><i class='ws flag'></i>Samoa</div>" +
        "  <div class='item' data-value='sm'><i class='sm flag'></i>San Marino</div>" +
        "  <div class='item' data-value='gs'><i class='gs flag'></i>Sandwich Islands</div>" +
        "  <div class='item' data-value='st'><i class='st flag'></i>Sao Tome</div>" +
        "  <div class='item' data-value='sa'><i class='sa flag'></i>Saudi Arabia</div>" +
        "  <div class='item' data-value='sn'><i class='sn flag'></i>Senegal</div>" +
        "  <div class='item' data-value='cs'><i class='cs flag'></i>Serbia</div>" +
        "  <div class='item' data-value='rs'><i class='rs flag'></i>Serbia</div>" +
        "  <div class='item' data-value='sc'><i class='sc flag'></i>Seychelles</div>" +
        "  <div class='item' data-value='sl'><i class='sl flag'></i>Sierra Leone</div>" +
        "  <div class='item' data-value='sg'><i class='sg flag'></i>Singapore</div>" +
        "  <div class='item' data-value='sk'><i class='sk flag'></i>Slovakia</div>" +
        "  <div class='item' data-value='si'><i class='si flag'></i>Slovenia</div>" +
        "  <div class='item' data-value='sb'><i class='sb flag'></i>Solomon Islands</div>" +
        "  <div class='item' data-value='so'><i class='so flag'></i>Somalia</div>" +
        "  <div class='item' data-value='za'><i class='za flag'></i>South Africa</div>" +
        "  <div class='item' data-value='kr'><i class='kr flag'></i>South Korea</div>" +
        "  <div class='item' data-value='es'><i class='es flag'></i>Spain</div>" +
        "  <div class='item' data-value='lk'><i class='lk flag'></i>Sri Lanka</div>" +
        "  <div class='item' data-value='sd'><i class='sd flag'></i>Sudan</div>" +
        "  <div class='item' data-value='sr'><i class='sr flag'></i>Suriname</div>" +
        "  <div class='item' data-value='sj'><i class='sj flag'></i>Svalbard</div>" +
        "  <div class='item' data-value='sz'><i class='sz flag'></i>Swaziland</div>" +
        "  <div class='item' data-value='se'><i class='se flag'></i>Sweden</div>" +
        "  <div class='item' data-value='ch'><i class='ch flag'></i>Switzerland</div>" +
        "  <div class='item' data-value='sy'><i class='sy flag'></i>Syria</div>" +
        "  <div class='item' data-value='tw'><i class='tw flag'></i>Taiwan</div>" +
        "  <div class='item' data-value='tj'><i class='tj flag'></i>Tajikistan</div>" +
        "  <div class='item' data-value='tz'><i class='tz flag'></i>Tanzania</div>" +
        "  <div class='item' data-value='th'><i class='th flag'></i>Thailand</div>" +
        "  <div class='item' data-value='tl'><i class='tl flag'></i>Timorleste</div>" +
        "  <div class='item' data-value='tg'><i class='tg flag'></i>Togo</div>" +
        "  <div class='item' data-value='tk'><i class='tk flag'></i>Tokelau</div>" +
        "  <div class='item' data-value='to'><i class='to flag'></i>Tonga</div>" +
        "  <div class='item' data-value='tt'><i class='tt flag'></i>Trinidad</div>" +
        "  <div class='item' data-value='tn'><i class='tn flag'></i>Tunisia</div>" +
        "  <div class='item' data-value='tr'><i class='tr flag'></i>Turkey</div>" +
        "  <div class='item' data-value='tm'><i class='tm flag'></i>Turkmenistan</div>" +
        "  <div class='item' data-value='tv'><i class='tv flag'></i>Tuvalu</div>" +
        "  <div class='item' data-value='ug'><i class='ug flag'></i>Uganda</div>" +
        "  <div class='item' data-value='ua'><i class='ua flag'></i>Ukraine</div>" +
        "  <div class='item' data-value='ae'><i class='ae flag'></i>United Arab Emirates</div>" +
        "  <div class='item' data-value='us'><i class='us flag'></i>United States</div>" +
        "  <div class='item' data-value='uy'><i class='uy flag'></i>Uruguay</div>" +
        "  <div class='item' data-value='um'><i class='um flag'></i>Us Minor Islands</div>" +
        "  <div class='item' data-value='vi'><i class='vi flag'></i>Us Virgin Islands</div>" +
        "  <div class='item' data-value='uz'><i class='uz flag'></i>Uzbekistan</div>" +
        "  <div class='item' data-value='vu'><i class='vu flag'></i>Vanuatu</div>" +
        "  <div class='item' data-value='va'><i class='va flag'></i>Vatican City</div>" +
        "  <div class='item' data-value='ve'><i class='ve flag'></i>Venezuela</div>" +
        "  <div class='item' data-value='vn'><i class='vn flag'></i>Vietnam</div>" +
        "  <div class='item' data-value='wf'><i class='wf flag'></i>Wallis and Futuna</div>" +
        "  <div class='item' data-value='eh'><i class='eh flag'></i>Western Sahara</div>" +
        "  <div class='item' data-value='ye'><i class='ye flag'></i>Yemen</div>" +
        "  <div class='item' data-value='zm'><i class='zm flag'></i>Zambia</div>" +
        "  <div class='item' data-value='zw'><i class='zw flag'></i>Zimbabwe</div>" +
        "</div>" +
        "</div>";

    return country_dropdown;
}

function loadCountryDropdown()
{
    var countryWrapper = getElement('country-wrapper');
                    
    // can we continue
    if (countryWrapper !== null && countryWrapper.hasAttribute('data-country'))
    {
        // get country
        countryWrapper.innerHTML = countryDropdown();

        // initiate
        $('#country').dropdown('set selected', countryWrapper.getAttribute('data-country'));
    }
}

// ------------------------------------------------------------------------------------------------------------------

function startReservation(property, room, roomname, price)
{
    if(!$("#room-"+room+"-btn").hasClass("icon"))
    {
        $("#room-"+room+"-btn").addClass("icon small");
        $("#room-"+room+"-btn").html("<i class='times icon'></i>");
        $("#number-"+room+"-rm").transition("slide down in", function () {
            processPricing();
        });
    }
    else
    {
        $("#number-"+room+"-rm").transition("slide down out", function () {
            $("#room-"+room+"-btn").removeClass("icon small");
            $("#room-"+room+"-btn").html("Book");
            processPricing();
        });
    }
}

function incrRooms(e)
{
    $("#num-"+e+"-rooms").val(Number($("#num-"+e+"-rooms").val()) + 1);
    processPricing();
}

function decrRooms(e)
{
    if(Number($("#num-"+e+"-rooms").val()) > 1)
    {
        $("#num-"+e+"-rooms").val(Number($("#num-"+e+"-rooms").val()) - 1);
    }
    processPricing();
}

function processPricing(property)
{
    let isOpen = false;

    let total = 0;
    let rooms = 0;

    let p = document.getElementsByClassName("roms-number-text");

    for(let i = 0; i < p.length; i++)
    {
        if($(p[i].parentNode.parentNode).hasClass("visible"))
        {
            isOpen = true;
            total += (Number($(p[i]).val()) * Number($("#room-"+$(p[i]).attr("room-id")+"-price").val()));
            rooms += Number($(p[i]).val());
        }
    }

    if(isOpen)
    {
        if(getElement("reservation-total-con") != null)
        {
            $("#booking-total").html("<span style='font-font: Lato;'>&#8358;</span> "+numFormat(Number(total).toFixed(2)));
            $("#room-count").html(numFormat(Number(rooms)));
        }
        else
        {
            let rt = document.createElement("div");
            rt.id = "reservation-total-con";
            rt.style.position = "fixed";
            rt.style.top = "100px";
            rt.style.width = "200px";
            rt.style.minHeight = "250px";
            rt.style.right = "0px";
            rt.className = "w3-card-2 widget";
            rt.style.display = "none";
            rt.innerHTML =
                "<div>" +
                "<div class='pad-2'>" +
                "<h5 style='font-family: "+PrimFont+"; font-weight: bold;'>Booking total</h5>" +
                "<br/>" +
                "<h6>Rooms: <span id='room-count'>"+numFormat(Number(rooms))+"</span></h6>" +
                "<h6>Total: <span id='booking-total'>&#8358; "+numFormat(Number(total).toFixed(2))+"</span></h6>" +
                "<br/>" +
                "<div class='ui fluid labeled input'>" +
                "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Adults</label>" +
                "<input id='adults-count' class='wix-textbox' type='number' min='1' value='1'/> " +
                "</div>" +
                "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
                "<label class='ui label' style='color: "+PrimColor+"; font-family: "+PrimFont+";'>Children</label>" +
                "<input id='children-count' class='wix-textbox' type='number' min='0' value='0'/> " +
                "</div> <br/>" +
                "<button id='proceed-btn' class='ui fluid button' style='font-family: "+
                PrimFont+"; color: white; background-color: "+PrimColor+";' onclick='processReservation()'>Proceed</button> " +
                "</div> " +
                "</div>";

            document.body.appendChild(rt);

            $("#reservation-total-con").transition('fade right in');
        }
    }
    else
    {
        if(getElement("reservation-total-con") != null)
        {
            $("#reservation-total-con").transition('fade right out', function(){
                document.body.removeChild(getElement("reservation-total-con"));
            });
        }
    }
}

function _startReservation(property, room, roomname, price)
{
    loadModal({title:"<span style='font-family: "+PrimFont+
            "; font-weight: bold;'><img src='../images/calendar_plus.png'/> Complete booking</span>",
        html:
            "<div id='reservationForm' class='ui pad-1 form'>" +
            "<input id='property' type='hidden' value='"+property+"'/> " +
            "<input id='room-type' type='hidden' value='"+room+"'/> " +
            "<div>" +
            "<img src='../images/bed_1.png'/>" +
            "<h6 style='font-family: "+PrimFont+"; font-weight: bold; font-size: 15px;'>Room Type: <span>"+
            roomname+"</span></h6>" +
            "<h6 style='font-family: "+PrimFont+"; font-size: 14px;'>" +
            "<span style='font-family: Lato;'>&#8358;</span>" +
            "<span>"+numFormat(Number(price).toFixed(2))+
            "</span>&nbsp; / night</h6>" +
            "</div><br/>" +

            "<div class='ui fluid labeled input' style='margin-top: 10px;'>" +
            "<label class='ui label' style='color: white; color: "+
            PrimColor+"; font-family: "+PrimFont+";'>No of rooms</label> " +
            "<input id='room-count' class='wix-textbox' type='number' min='1' value='1'/>" +
            "</div>" +
            "<div class='ui left labeled fluid input' style='margin-top: 10px;'>" +
            "<label class='ui label' style='font-family: "+PrimFont+"; color: "+PrimColor+";'>Adults</label>" +
            "<input id='adult-count' class='wix-textbox' min='1' value='2' type='number' style='border-radius: 0;'/>" +
            "<label class='ui label' style='font-family: "+PrimFont+"; color: "+PrimColor+"; border-radius: 0px;'>Children</label>" +
            "<input id='children-count' class='wix-textbox' type='number' value='0' style='border-radius: 0 4px 4px 0;'/>" +
            "</div>" +
            "<br/>" +
            "<button id='reserve-btn' class='ui button' style='background-color: "+PrimColor
            +"; color: white;' onclick='doReservation()'>Reserve</button>" +
            "</div>" +
            "</div>"});
}

function doReservation()
{
    let request = {
        rooms:Number($("#room-count").val()),
        adults:Number($("#adult-count").val()),
        children:Number($("#children-count").val()),
        roomtype:$("#room-type").val(),
        property:$("#property").val()
    };

    if(!request.rooms)
    {
        errorButton({btn:"reserve-btn", msg:"Invalid number of rooms"});
    }
    else if(!request.adults)
    {
        errorButton({btn:"reserve-btn", msg:"Invalid number of adults"});
    }
    else
    {
        $("#reservationForm").addClass("loading");
        postJson(api+"/start-reservation", function (data, status) {
            $("#reservationForm").removeClass("loading");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#reservationForm").html(
                        "<div style='margin-top: 10px;'>" +
                        "<div class='align-c'>" +
                        "<img src='../images/check.png'/>" +
                        "</div> " +
                        "</div>");
                }
                else
                {
                    errorButton({btn:"reserve-btn", msg:d.message});
                }
            }
            else
            {
                errorButton({btn:"reserve-btn", msg:"Connection error"});
            }
        }, request);
    }
}

function loadModal(o)
{
    let m_num = 0;

    while (getElement("modal_" + m_num) != null) {
        m_num++;
    }

    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.backgroundColor = "rgba(0,0,0,0.6)";
    modal.style.top = "0px";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.zIndex = 300;
    modal.id = "modal_" + m_num;
    modal.style.overflowY = "auto";
    modal.className = "w3-row";
    modal.style.display = "none";


    document.body.appendChild(modal);

    let title = "";
    let html = "";
    let close = "close";
    let closeBtn = false;
    let outter = "l4 m3 s12";
    let inner = "l4 m6 s12";
    let curve = 5;
    let titlebar = true;
    let type = "standard";


    if(o != null)
    {
        if (o.title != null)
        {
            title = o.title;
        }
        if (o.curve != null)
        {
            curve = o.curve;
        }
        if (o.html != "")
        {
            html = o.html;
        }
        if (o.titlebar != null)
        {
            titlebar = o.titlebar;
        }
        if (o.size != null)
        {
            if ((o.size == "large") || (o.size == "l"))
            {
                outter = "l2 m1 s12";
                inner = "l8 m10 s12";
            }
            if ((o.size == "midium") || (o.size == "m"))
            {
                outter = "l3 m3 s12";
                inner = "l6 m6 s12";
            }
            if ((o.size == "small") || (o.size == "s"))
            {
                outter = "l4 m3 s12";
                inner = "l4 m6 s12";
            }
        }
    }


    $("#modal_" + m_num).fadeIn(500, function () {

        let content = "";

        content = "<div id='modal_" + m_num + "-inner' style='display: none;'>" +
            "<div class='w3-col " + outter + "' style='color: transparent;'>.</div>" +
            "<div class='w3-col " + inner + " w3-padding-tiny s-pad-6'>" +
            "<div class='widget l-margin-t-7 s-margin-t-8 margin-b-3' style='border-radius: "+curve+"px;'>";

        if(titlebar)
        {
            content +=
                "<div class='pad-1'>" +
                "<h6 id='modal-" + m_num + "-close-btn' style='font-family: quicksandbold; " +
                "color: dimgray; float: right; cursor: pointer;' onclick=\"closeGenModal('" + m_num + "')\">" +
                "<i class='times red icon'></i></h6>" +
                "<h6 style='font-family: quicksandbold; color: dimgray;'>" + title + "</h6>" +
                "</div>" +
                "<hr style='margin: 0px;'/>";
        }

        content +=
            "<div id='modal-"+m_num+"-content'>" + html + "</div>" +
            "</div></div></div><br/><br/>";

        modal.innerHTML = content;

        $("#modal_" + m_num + "-inner").transition('fade right in', function () {

            if (o.onLoaded != null) {
                o.onLoaded({ modal: m_num });
            }
        });
    });
}

function loadPageModal(o)
{
    let m_num = 0;

    while (getElement("modal_" + m_num) != null) {
        m_num++;
    }

    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.backgroundColor = "rgba(0,0,0,0.6)";
    modal.style.top = "0px";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.zIndex = 300;
    modal.id = "modal_" + m_num;
    modal.style.overflowY = "auto";
    modal.className = "w3-row";
    modal.style.display = "none";


    document.body.appendChild(modal);

    let title = "";
    let html = "";
    let close = "close";
    let closeBtn = false;
    let outter = "l4 m3 s12";
    let inner = "l-width-5";
    let curve = 5;
    let titlebar = true;
    let type = "standard";


    if(o != null)
    {
        if (o.title != null)
        {
            title = o.title;
        }
        if (o.curve != null)
        {
            curve = o.curve;
        }
        if (o.html != "")
        {
            html = o.html;
        }
        if (o.titlebar != null)
        {
            titlebar = o.titlebar;
        }
        if (o.size != null)
        {
            if ((o.size == "xlarge") || (o.size == "xl"))
            {
                outter = "l2 m1 s12";
                inner = "l-width-9";
            }
            if ((o.size == "large") || (o.size == "l"))
            {
                outter = "l2 m1 s12";
                inner = "l-width-7";
            }
            if ((o.size == "midium") || (o.size == "m"))
            {
                outter = "l3 m3 s12";
                inner = "l-width-5";
            }
            if ((o.size == "small") || (o.size == "ms"))
            {
                outter = "l4 m3 s12";
                inner = "l-width-4";
            }
            if ((o.size == "small") || (o.size == "s"))
            {
                outter = "l4 m3 s12";
                inner = "l-width-3";
            }
            if ((o.size == "xsmall") || (o.size == "xs"))
            {
                outter = "l4 m3 s12";
                inner = "l-width-1";
            }
        }
    }


    $("#modal_" + m_num).fadeIn(500, function () {

        let content = "";

        content = "<div id='modal_"+m_num +"-inner' class='"+inner+" widget' " +
            "style='right: 0px; height: 100%; display: none; position: absolute; overflow-y: auto;' " +
            "onclick='preventPropagation(event)'></div>";

        modal.innerHTML = content;

        $("#modal_" + m_num + "-inner").transition('fade right in', function () {

            if (o.onLoaded != null) {
                o.onLoaded({ modal: m_num });
            }
        });
    });


    modal.onclick = function () {
        $("#modal_" + m_num+"-inner").transition('fade right out', function ()
        {
            $("#modal_" + m_num).fadeOut(800, function(){
                document.body.removeChild(getElement("modal_"+m_num));
            });
        });
    };
}

function preventPropagation(e)
{
    e.stopPropagation();
}

function closeGenModal(e, func)
{
    $("#modal_" + e + "-inner").transition('fade right out', function () {
        $("#modal_" + e).fadeOut(600, function () {
            document.body.removeChild(getElement("modal_" + e));
            if (typeof func == "function") {
                func();
            }
        });
    });
}

function processReservation()
{
    let request = {
        property:$("#property-id").val(),
        rooms:[],
        adult:Number($("#adults-count").val()),
        children:$("#children-count").val(),
        checkin:$("#check-in").val(),
        checkout:$("#check-out").val()
    };

    let p = document.getElementsByClassName("roms-number-text");

    for(let i = 0; i < p.length; i++)
    {
        if($(p[i].parentNode.parentNode).hasClass("visible"))
        {
            request.rooms.push($(p[i]).attr("room-id")+":"+$(p[i]).val());
        }
    }

    if(request.rooms.length === 0)
    {
        ShowModal("Select room to proceed");
    }
    else
    {
        loadingButton({btn:"proceed-btn"});
        postJson(api+"/start-reservation", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    location.href = "../reservations";
                }
                else
                {
                    errorButton({btn:"proceed-btn", msg:d.messge});
                }
            }
            else
            {
                errorButton({btn:"proceed-btn", msg:"Connection error"});
            }
        }, request);
    }
}

function runPaymentPlaceholder()
{
    $("#pay-con").html(
        "<div class='ui placeholder'>" +
        "<div class='line'></div>" +
        "<div class='line'></div>" +
        "<div class='line'></div>" +
        "</div>" +
        "<div class='ui placeholder'>" +
        "<div class='line'></div>" +
        "<div class='line'></div>" +
        "<div class='line'></div>" +
        "</div>" +
        "<div class='ui placeholder'>" +
        "<div class='line'></div>" +
        "<div class='line'></div>" +
        "<div class='line'></div>" +
        "</div>");
}

function getPayment()
{
    runPaymentPlaceholder();

    postJson(api+"/getbooking", function(data, status){
        $("#pay-con").html("");
       if(status === "done")
       {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                if((d.property.Partialpayment === true) && (d.partial > 0))
                {
                    let check = document.createElement("div");
                    check.innerHTML = "<label><input class='filled-in' type='checkbox'><span>Pay &#8358;"+numFormat(Number(d.partial).toFixed(2))+" now</span></label>" +
                        "<p style='font-family: Lato; color: dimgray;'>You can do a partial payment. The rest will be paid on arrival at the property</p>";
                    getElement("pay-con").appendChild(check);
                }

                let sub = document.createElement("div");
                sub.innerHTML =
                    "<div class='w3-row' style='margin-top: 10px;'>" +
                    "   <div class='w3-col l5 m5 s5'>" +
                    "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                    "           <small>Subtotal</small>" +
                    "       </h5>" +
                    "   </div>" +
                    "   <div class='w3-col l7 m7 s7 align-r'>" +
                    "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                    "           <small><span style='font-family: arial;'>&#8358;</span>" +
                    "           <span id='total-main-con'>"+numFormat(Number(d.subtotal))+"</span></small>" +
                    "       </h5>" +
                    "   </div>" +
                    "</div>";
                getElement("pay-con").appendChild(sub);

                let discount = document.createElement("div");
                discount.innerHTML =
                    "<div class='w3-row' style='margin-top: 10px;'>" +
                    "   <div class='w3-col l5 m5 s5'>" +
                    "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                    "           <small>Discount</small>" +
                    "       </h5>" +
                    "   </div>" +
                    "   <div class='w3-col l7 m7 s7 align-r'>" +
                    "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                    "           <small><span style='font-family: arial;'>&#8358;</span>" +
                    "           <span id='total-main-con'>"+numFormat(Number(d.discount))+"</span></small>" +
                    "       </h5>" +
                    "   </div>" +
                    "</div>";
                getElement("pay-con").appendChild(discount);

                if((d.property.Damagedeposit) && (d.property.Damagedepositamount > 0))
                {
                    let pp = document.createElement("div");
                    pp.innerHTML =
                        "<div class='w3-row' style='margin-top: 10px;'>" +
                        "   <div class='w3-col l5 m5 s5'>" +
                        "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                        "           <small>Damage deposit</small>" +
                        "       </h5>" +
                        "   </div>" +
                        "   <div class='w3-col l7 m7 s7 align-r'>" +
                        "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                        "           <small><span style='font-family: arial;'>&#8358;</span>" +
                        "           <span id='total-main-con'>"+numFormat(Number(d.property.Damagedepositamount))+"</span></small>" +
                        "       </h5>" +
                        "   </div>" +
                        "</div>";
                    getElement("pay-con").appendChild(pp);
                }

                let tot = document.createElement("div");
                tot.innerHTML =
                        "<input id='total-amount-input' type='hidden' value='"+d.total+"'/>" +
                    "<div class='w3-row' style='margin-top: 35px;'>" +
                    "   <div class='w3-col l5 m5 s5'>" +
                    "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                    "           Total" +
                    "       </h5>" +
                    "   </div>" +
                    "   <div class='w3-col l7 m7 s7 align-r'>" +
                    "       <h5 style='font-family: Lato; font-weight: bold;'>" +
                    "           <span style='font-family: arial;'>&#8358;</span>" +
                    "           <span id='total-main-con'>"+numFormat(Number(d.total))+"</span>" +
                    "       </h5>" +
                    "   </div>" +
                    "</div>";
                getElement("pay-con").appendChild(tot);

                if(d.property.Cashonly)
                {
                    let pa = document.createElement("div");
                    pa.innerHTML = "<h6 class='sleak' style='color: dimgray; margin-top: 15px;'>" +
                        "Payment will be made at the hotel" +
                        "</h6>" +
                        "<div id='reserve-btn' class='ui left labeled button s-margin-t-1 s-margin-b-2' tabindex='0' onclick=' payAtHotel()'>" +
                        "<a class='ui basic right pointing blue label'" +
                        "style='border: 1px solid ;'>" +
                        "<i id='reserve-btn-icon' class='check icon'></i>" +
                        "</a>" +
                        "<div id='reserve-btn-text' class='ui blue button' style='font-weight: normal;'>" +
                        "Complete" +
                        "</div>" +
                        "</div>";
                    getElement("pay-con").appendChild(pa);
                }
                else
                {
                    let pa = document.createElement("div");
                    pa.innerHTML = "<h6 class='sleak' style='color: dimgray;'>" +
                        "Choose pay method" +
                        "</h6>" +
                        "<button id='online-btn-text' class='ui blue button' onclick='beginPayonline()'>Pay Now</button> &nbsp;" +
                        "<button id='at-hotel-btn' class='ui blue button' onclick='payAtHotel()'>Pay at the hotel</button>" +
                        "</div>";
                    getElement("pay-con").appendChild(pa);
                }
            }
            else
            {
                $("#pay-con").html(
                    "<div class='align-c pad-2'>" +
                    "<h4 class='ui icon header' style='color: rgba(255,0,0,0.1);'><i class='ban icon'></i></h4>" +
                    "<br/>" +
                    "<h6 style='font-family: varela_roundregular; color: silver; line-height: 150%; font-weight: normal;'>"+d.message+"</h6><br/>" +
                    "</div>");
            }
       }
       else
       {
           $("#pay-con").html(
               "<div class='align-c pad-2'><h1 style='color: rgba(255,0,0,0.1);'><i class='signal icon'></i></h1><br/>" +
               "<h5 style='font-family: varela_roundregular; color: silver; font-weight: normal;'>Connection error</h5><br/>" +
               "<button class='ui basic sleak button' onclick='getPayment()'>Try again</button> " +
               "</div>");
       }
    },{});
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

    loadingButton({btn:"online-btn-text"});
    postJson(api+"/initializereservationwebpay", function(data, status){

        loadingButton({btn:"online-btn-text", loading:false});

        $("#at-hotel-btn").removeClass("disabled");

        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                if(d.Method === "PAYSTACK")
                {
                    payWithPaystack(d.data,function(){

                    });
                }
                else
                {
                    ShowModal("Sorry! Webpay has not been setup correctly");
                }
            }
            else
            {
                ShowModal(d.message);
            }
        }
        else
        {
            ShowModal("Connection error. Unable to initialize payment");
        }
    },{job:"initialize reservation webpay", amount:$("#total-amount-input").val()});
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

function payAtHotel()
{
    loadingButton({btn:"at-hotel-btn"});
    postJson(api+"/createreservation", function(data, status){
        loadingButton({btn:"at-hotel-btn", loading:false});
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                location.href = "reservation-complete/"+d.data.toLowerCase();
            }
            else
            {
                ShowModal(d.message);
            }
        }
        else
        {
            ShowModal("Connection error. Unable to create reservation. Check your connection and try again");
        }
    },{});
}

function loadreservationData()
{
    $("span").addClass("ui loadingItem placeholder");
    postJson(api+"/reservation-data", function(data, status){
        $("span").removeClass("ui loadingItem placeholder");
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                let rooms = 0;
                
                for(let i = 0; i < d.data.Rooms.length; i++)
                {
                    rooms += Number(d.data.Rooms[i].Number);
                }
                
                
                $("#property-name").html(d.data.Property.Name);
                $("#property-address").html(d.data.Property.Address);
                $("#arrival").html(d.data.Checkindate.WeekDay+", "+d.data.Checkindate.MonthName+"/"+d.data.Checkindate.Day+"/"+d.data.Checkindate.Year);
                $("#booked-rooms").html(rooms);

                $("#subtotal").html("&#8358;"+numFormat(Number(d.data.Total).toFixed(2)));
                $("#discount").html("&#8358;"+numFormat(Number(d.data.Discount).toFixed(2)));
                $("#total").html("&#8358;"+numFormat((Number(d.data.Total) - Number(d.data.Discount)).toFixed(2)));
                $("#paid-amount").html("&#8358;"+numFormat((Number(d.data.Paidamount)).toFixed(2)));
                $("#payment").html(d.data.Paid ?
                    "<span style='color: forestgreen;'><i class='green check icon'></i> Paid</span>" :
                    "<span style='color: maroon;'><i class='red times icon'></i> Unpaid</span>");
            }
            else
            {
                ShowModal(d.message);
            }
        }
        else
        {
            ShowModal("Connection error. Unable to retrieve data. Check your connection then reload page to get data");
        }
    },{booking:$('#booking-number').val()});
}

function loadReservation()
{
    $("#reservation-con").html("<div class='ui active loader'></div>");

    postJson(api+"/list-reservation", function(data, status){
        $("#reservation-con").html("");
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                if(d.data.length === 0)
                {
                    $("#reservation-con").html(
                        "<div style='margin-top: 50px;'>" +
                        "<div class='align-c'>" +
                        "<img src='images/empty_box.png' style='width: 60px;'/>" +
                        "<h4 style='color: silver; font-family: varela_roundregular;'>" +
                        "You have no <br/>reservations at the moment" +
                        "</h4>" +
                        "</div>" +
                        "</div>");
                }
                else
                {
                    for(let i = 0; i < d.data.length; i++)
                    {
                        let roomcount = 0;
                        
                        for(let j = 0; j < d.data[i].Rooms.length; j++)
                        {
                            roomcount += Number(d.data[i].Rooms[j].Number);
                        }
                        
                        let con = document.createElement("div");
                        con.style.marginBottom = "5px";
                        con.className = "reservation-strip w3-card-2 w3-row pad-1 curve";
                        con.innerHTML =
                            "<a href='open-reservation/"+d.data[i].Id+"' style='color: black;'>" +
                            "<div class='w3-col l2 m2 s2' style='padding-top: 8px;'>" +
                            "<span>"+d.data[i].Created.WeekDay+", "+d.data[i].Created.Day+"/"+
                            d.data[i].Created.MonthName+"/"+d.data[i].Created.Year+"</span><br/>" +
                            "<h6 style='font-family: "+$('#system-font').val()+"; font-weight: bold;'>"+
                            d.data[i].Bookingnumber+"</h6>" +
                            "</div>" +
                            "<div class='w3-col l1 m1 s2'>" +
                            "<img src='files/"+d.data[i].Property.Banner+"' style='width: 100%; margin-top: 7px;'>" +
                            "</div>" +
                            "<div class='w3-col l3 m3 s4' style='padding-left: 20px;'>" +
                            "<h6 style='font-family: "+$('#system-font').val()+"; font-weight: bold;'>"+
                            d.data[i].Property.Name+"</h6>" +
                            "<span><i class='map marker blue icon'></i> "+d.data[i].Property.Statename+"</span>" +
                            "</div>" +
                            "<div class='w3-col l3 m3 s4' style='padding-left: 20px;'>" +
                            "<h6 style='font-family: "+$('#system-font').val()+"; font-weight: bold;'>Room(s): "+
                            roomcount +
                            "</h6>" +
                            "<span><i class='calendar alternate outline blue icon'></i> Arrival: "+
                            d.data[i].Checkindate.WeekDay+", "+d.data[i].Checkindate.Day+"/"+d.data[i].Checkindate.MonthName+
                            d.data[i].Checkindate.Year+"</span>" +
                            "</div>" +
                            "<div class='w3-col l3 m3 s4 align-r' style='padding-left: 20px; padding-top: 10px;'>" +
                            "<span class='status "+(d.data[i].Paid ? "green-back" : "yellow-back")+
                            "' style='font-family: "+$('#system-font').val()+
                            "; font-weight: bold; margin-top: 20px;'>"+
                            (d.data[i].Paid ? "paid" : "Unpaid")+"</span><br/>" +
                            "<h6><small><i class='group blue icon'></i> "+d.data[i].Adult+" Adults &nbsp;&nbsp; "+d.data[i].Children+" Children</small></h6>" +
                            "</div></a>";

                        getElement("reservation-con").appendChild(con);
                    }
                }
            }
            else
            {
                $("#reservation-con").html(
                    "<div style='margin-top: 50px;'>" +
                    "<div class='align-c'>" +
                    "<h1><i class='ban icon' style='color: rgba(255,0,0,0.1);'></i></h1>" +
                    "<h4 style='font-family: varela_roundregular; color: silver;'>"+d.message+"</h4>" +
                    "<button class='ui basic small compact sleak-m button' onclick='loadReservation()'>try again</button>" +
                    "</div>" +
                    "</div>");
            }
        }
        else
        {
            $("#reservation-con").html(
                "<div style='margin-top: 50px;'>" +
                "<div class='align-c'>" +
                "<h1><i class='ban icon' style='color: rgba(255,0,0,0.1);'></i></h1>" +
                "<h4 style='font-family: varela_roundregular; color: silver;'>Connection error</h4>" +
                "<button class='ui basic small compact sleak-m button' onclick='loadReservation()'>try again</button>" +
                "</div>" +
                "</div>");
        }
    },{});
}

function openReservation(e)
{
    $("#reservation-con").html("<div class='ui active loader'></div>");

    postJson(api+"/open-reservation", function(data, status){
        $("#reservation-con").html("");
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                let roomcount = 0;

                for(let j = 0; j < d.data.Rooms.length; j++)
                {
                    roomcount += Number(d.data.Rooms[j].Number);
                }

                let con = document.createElement("div");
                con.style.marginBottom = "5px";
                con.className = "pad-t";
                con.innerHTML =
                    "<div class='w3-row'>" +
                    "<div class='w3-col l9 m9 s8'>" +
                    "<div style=''>" +
                    "<h4 class='sleak' style='font-weight: bold;'>"+d.data.Property.Name+"</h4>" +
                    "<h6 style='font-family: nunitoregular;'>"+d.data.Property.Address+"</h6>" +
                    "<h6 style='font-family: nunitoregular;'><small>" +
                    "<i class='calendar alternate outline red icon'></i> "+ d.data.Checkindate.WeekDay+", "+
                    d.data.Checkindate.Day + " / " + d.data.Checkindate.MonthName + " / " + d.data.Checkindate.Year +
                    "&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "<i class='calendar alternate outline red icon'></i>" + d.data.Checkoutdate.WeekDay+", "+
                    d.data.Checkoutdate.Day + " / " + d.data.Checkoutdate.MonthName + " / " + d.data.Checkoutdate.Year +
                    "</small></h6>" +
                    "</div>" +
                    "</div> " +

                    "<div class='w3-col l3 m3 s4 align-r'>" +
                    (!d.data.Paid ? 
                    "<span class='status red-back'><i class='times icon'></i> Unpaid</span>" +
                    (d.data.Property.Onlinepay ? "<button class='ui compact small sleak button'>Pay now</button>" : "")
                    : "<span class='status green-back'><i class='check icon'></i> Paid</span>") +
                    "<h6></h6>" +
                    (d.data.Cancelable ? "<button class='compact mini red ui button' style='cursor: pointer;'><i class='times icon'></i> Cancel</button> " : "") +
                    "</div> " +

                    "</div> <hr/>";
                getElement("reservation-con").appendChild(con);

                for(let i = 0; i < d.data.Rooms.length; i++)
                {
                    let fts = "";
                    
                    for(let h = 0; h < d.data.Rooms[i].Room.Features.length; h++)
                    {
                        fts += (fts == "" ? fts += "<small><small><i class='circle blue icon'></i></small></small>" + 
                        d.data.Rooms[i].Room.Features[h] : "<br/><span>" + 
                        "<small><small><i class='circle blue icon'></i></small></small></span>" + 
                        d.data.Rooms[i].Room.Features[h]);
                    }
                    
                    let rm = document.createElement("div");
                    rm.style.marginBottom = "5px";
                    rm.className = "pad-t";
                    rm.innerHTML =
                        "<div class='w3-row'>" +

                        "<div class='w3-col l2 m2 s2 pad-1'>" +
                        "<img src='../files/"+d.data.Rooms[i].Room.Images[0]+"' style='width: 100%; border-radius: 3px;'>" +
                        "</div> " +

                        "<div class='w3-col l8 m8 s8 pad-1'>" +
                        "<div style=''>" +
                        "<h5 class='sleak' style='font-weight: bold;'>"+d.data.Rooms[i].Room.Name+"</h5>" +
                        "<span style='font-family: nunitoregular;'>"+fts+"</span>" +
                        "</div> " +
                        "</div> " +

                        "<div class='w3-col l2 m3 s4 align-r pad-1'>" +
                        "<span class='status' style='font-family: Lato; font-size: 14px; padding: 3px;'>" +
                        d.data.Rooms[i].Number+" room (s)</span>" +
                        "<h6></h6>" +
                        "</div> " +

                        "</div> ";
                    getElement("reservation-con").appendChild(rm);
                }
            }
            else
            {
                $("#reservation-con").html(
                    "<div style='margin-top: 50px;'>" +
                    "<div class='align-c'>" +
                    "<h1><i class='ban icon' style='color: rgba(255,0,0,0.1);'></i></h1>" +
                    "<h4 style='font-family: varela_roundregular; color: silver;'>"+d.message+"</h4>" +
                    "<button class='ui basic small compact sleak-m button' onclick=\"openReservation('"+e+"')\">try again</button>" +
                    "</div>" +
                    "</div>");
            }
        }
        else
        {
            $("#reservation-con").html(
                "<div style='margin-top: 50px;'>" +
                "<div class='align-c'>" +
                "<h1><i class='ban icon' style='color: rgba(255,0,0,0.1);'></i></h1>" +
                "<h4 style='font-family: varela_roundregular; color: silver;'>Connection error</h4>" +
                "<button class='ui basic small compact sleak-m button' onclick=\"openReservation('"+e+"')\">try again</button>" +
                "</div>" +
                "</div>");
        }
    },{booking:e});
}

function setDesktopSearch(e)
{
    if(e === "car")
    {
        $("#car-tab").addClass("status green-back");
        $("#accomodation-tab").removeClass("status green-back");
        
        $("#desktop-search").transition({animation: "fade down out", duration:500, onComplete:function(){
            $("#desktop-search").html(
            '<form action=\'cars\' method=\'get\'>'+
            '<div class=\'pad-1 curve l-width-8\' style=\'margin: auto; position: relative; margin-bottom: 50px; background-color: rgba(255,255,255,0.2);\'>'+
            '<div class=\'w3-row\'>'+
            '<div class=\'w3-col l4\'>'+
            '<div class=\'pad-1\'>'+
            '<div class=\'ui car-serch search\'>'+
            '<div class=\'ui left icon big fluid input\'>'+
            '<input id=\'car-search-input\' class=\'prompt\' autocomplete=\'off\' name=\'city\' type=\'text\' placeholder=\'City or state\' style=\'font-family: nunitoregular; border: none; background-color: transparent; color: white;\'>'+
            '<i class=\'taxi icon\' style=\'color: white;\'></i>'+
            '</div>'+
            '<div class=\'results\'></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class=\'w3-col l3\'>'+
            '<div class=\'pad-1\'>'+
            '<div class=\'ui left icon big fluid input\'>'+
            '<i class=\'calendar alternate icon\' style=\'color: white;\'></i>'+
            '<input id=\'pickup-date\' name=\'pick-up\' autocomplete=\'off\' data-toggle=\'datepicker\' placeholder=\'Pick up date\' style=\'font-family: nunitoregular; color: white; border: none; background-color: transparent;\'/>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class=\'w3-col l3\'>'+
            '<div class=\'pad-1\'>'+
            '<div class=\'ui left icon big fluid input\'>'+
            '<i class=\'calendar alternate icon\' style=\'color: white;\'></i>'+
            '<input id=\'dropoff-date\' name=\'drop-off\' autocomplete=\'off\' data-toggle=\'datepicker\' placeholder=\'Drop of date\'  style=\'font-family: nunitoregular; color: white; border: none; background-color: transparent;\'/>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class=\'w3-col l2\'>'+
            '<div class=\'pad-1\'>'+
            '<button class=\'ui waves-effect sleak large fluid button\' style=\'font-family: nunitoregular; background-color: rgb(0,100,140); color: white;\'>'+
            '<i class=\'search icon\'></i>Search'+
            '</button>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</form>');
            $("#desktop-search").transition({animation: "fade up in", duration:500, onComplete:function(){

                var picker = new Lightpick({
                    field: document.getElementById('pickup-date'),
                    secondField: document.getElementById('dropoff-date'),
                    singleDate: false,
                    inline:false,
                    format:"MM/DD/YY",
                    numberOfColumns:2,
                    numberOfMonths:2,
                    minDate:new Date(),
                    onSelect: function(start, end){
                        
                    }
                });

                if(getElement("car-search-input") != null)
                {
                    $('.car-serch').search({
                        apiSettings: {
                        url: api+'/soft-car-search?q={query}'
                        },
                        minCharacters : 2
                    });
                }

            }});
        }});
        $('body').scrollTop();
    }
    else
    {
        $("#car-tab").removeClass("status green-back");
        $("#accomodation-tab").addClass("status green-back");
        
        $("#desktop-search").transition({animation: "fade down out", duration:500, onComplete:function(){
            $("#desktop-search").html(
            '<form action=\'properties\' method=\'get\'>'+
            '<div class=\'pad-1 curve l-width-8\' style=\'margin: auto; position: relative; margin-bottom: 50px; background-color: rgba(255,255,255,0.2);\'>'+
            '<div class=\'w3-row\'>'+
            '<div class=\'w3-col l4\'>'+
            '<div class=\'pad-1\'>'+
            '<div class=\'ui property-serch search\'>'+
            '<div class=\'ui left icon big fluid input\'>'+
            '<input id=\'search-input\' class=\'prompt\' autocomplete=\'off\' name=\'city\' type=\'text\' placeholder=\'City, State or Hotel Name \' style=\'font-family: nunitoregular; border: none; background-color: transparent; color: white;\'>'+
            '<i class=\'map marker icon\' style=\'color: white;\'></i>'+
            '</div>'+
            '<div class=\'results\'></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class=\'w3-col l3\'>'+
            '<div class=\'pad-1\'>'+
            '<div class=\'ui left icon big fluid input\'>'+
            '<i class=\'calendar alternate icon\' style=\'color: white;\'></i>'+
            '<input id=\'checkin-date\' name=\'check-in\' autocomplete=\'off\' data-toggle=\'datepicker\' placeholder=\'Check In date\' style=\'font-family: nunitoregular; color: white; border: none; background-color: transparent;\'/>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class=\'w3-col l3\'>'+
            '<div class=\'pad-1\'>'+
            '<div class=\'ui left icon big fluid input\'>'+
            '<i class=\'calendar alternate icon\' style=\'color: white;\'></i>'+
            '<input id=\'checkout-date\' name=\'check-out\' autocomplete=\'off\' data-toggle=\'datepicker\' placeholder=\'Check out date\'  style=\'font-family: nunitoregular; color: white; border: none; background-color: transparent;\'/>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class=\'w3-col l2\'>'+
            '<div class=\'pad-1\'>'+
            '<button class=\'ui waves-effect sleak large fluid button\' style=\'font-family: nunitoregular; background-color: rgb(0,100,140); color: white;\'>'+
            '<i class=\'search icon\'></i>Search'+
            '</button>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</form>');

            $("#desktop-search").transition({animation: "fade up in", duration:500, onComplete:function(){

                var picker = new Lightpick({
                    field: document.getElementById('checkin-date'),
                    secondField: document.getElementById('checkout-date'),
                    singleDate: false,
                    inline:false,
                    format:"MM/DD/YY",
                    numberOfColumns:2,
                    numberOfMonths:2,
                    minDate:new Date(),
                    onSelect: function(start, end){
                        
                    }
                });


                if(getElement("search-input") != null)
                {
                    $('.property-serch').search({
                        apiSettings: {
                        url: api+'/soft-search?q={query}'
                        },
                        minCharacters : 2
                    });
                }

            }});
        }});
        $('body').scrollTop();
    }
}

function setMobileSearch(e)
{
    if(e === "car")
    {
        $("#mobile-swith-tab").transition({animation:'fade right out',duration:'500ms', onComplete:function(){
            $("#mobile-swith-tab").html(
                '<div class=\'ui tabular menu\' style=\'border: none;\' onclick=\"setMobileSearch(\'accomodation\')\">'+
                '<a class=\'active right item\' style=\'color: white; font-family: <?php echo $site->TextFont; ?>\'>'+
                '<i class=\'building icon\'></i> Accomodation</a>'+
                '</div>');
                $("#mobile-swith-tab").transition({animation:'fade right in',duration:'500ms'});
        } });
        
        $("#mobile-swith-con").transition({animation: "fade down out", duration:'500ms', onComplete:function(){
            $("#mobile-swith-con").html(
                '<form action=\'cars\' method=\'get\'>'+
                '<div class=\'ui search\'>'+
                '<div class=\'ui left icon big fluid input\'>'+
                '<input id=\'search-input\' class=\'prompt\' autocomplete=\'off\' name=\'city\' type=\'text\' placeholder=\'City or state\' style=\'font-family: nunitoregular; border-radius: 4px; border: none; background-color: rgba(255,255,255,0.2); color: white;\'>'+
                '<i class=\'taxi icon\' style=\'color: white;\'></i>'+
                '</div>'+
                '<div class=\'results\'></div>'+
                '</div>'+
                '<div class=\'ui fluid big left icon input\' style=\'margin-top: 10px;\'>'+
                '<i class=\'calendar alternate outline icon\'></i>'+
                '<input id=\'m-checkin-date\' name=\'check-in\' autocomplete=\'off\' placeholder=\'Pick up date\' style=\'font-family: nunitoregular; color: white; border: none; background-color: rgba(255,255,255,0.2);\'/>'+
                '</div>'+
                '<div class=\'ui fluid big left icon input\' style=\'margin-top: 10px;\'>'+
                '<i class=\'calendar alternate outline icon\'></i>'+
                '<input id=\'m-checkout-date\' name=\'check-out\' autocomplete=\'off\' placeholder=\'Drop off date\' style=\'font-family: nunitoregular; color: white; border: none; background-color: rgba(255,255,255,0.2);\'/>'+
                '</div>'+
                '<button id=\'m-reserve-btn\' class=\'ui fluid big button\' style=\'color: white; margin-top: 10px; background-color:'+
                'rgb(0,100,140); font-family: nunitoregular;\' onclick=\'m_reserveRoom()\'>'+
                '<i class=\'search icon\'></i> Search'+
                '</button>'+
                '</form>');

            $("#mobile-swith-con").transition({animation: "fade up in", duration:500, onComplete:function(){

                var picker = new Lightpick({
                    field: document.getElementById('m-checkin-date'),
                    secondField: document.getElementById('m-checkout-date'),
                    singleDate: false,
                    inline:false,
                    format:"MM/DD/YY",
                    numberOfColumns:2,
                    numberOfMonths:2,
                    minDate:new Date(),
                    onSelect: function(start, end){
                        
                    }
                });

                if(getElement("car-search-input") != null)
                {
                    $('.car-serch').search({
                        apiSettings: {
                        url: api+'/soft-car-search?q={query}'
                        },
                        minCharacters : 2
                    });
                }

            }});
        }});
        $('body').scrollTop();
    }
    else
    {
        $("#mobile-swith-tab").transition({animation:'fade right out',duration:'500ms', onComplete:function(){
            $("#mobile-swith-tab").html(
                '<div class=\'ui tabular menu\' style=\'border: none;\' onclick=\"setMobileSearch(\'car\')\">'+
                '<a class=\'active right item\' style=\'color: white; font-family: <?php echo $site->TextFont; ?>\'>'+
                '<i class=\'taxi icon\'></i> Car rental</a>'+
                '</div>');
                $("#mobile-swith-tab").transition({animation:'fade right in',duration:'500ms'});
        } });
        
        $("#mobile-swith-con").transition({animation: "fade down out", duration:'500ms', onComplete:function(){
            $("#mobile-swith-con").html(
                '<form action=\'properties\' method=\'get\'>'+
                '<div class=\'ui search\'>'+
                '<div class=\'ui left icon big fluid input\'>'+
                '<input id=\'search-input\' class=\'prompt\' autocomplete=\'off\' name=\'city\' type=\'text\' placeholder=\'City, State or Hotel Name \' style=\'font-family: nunitoregular; border-radius: 4px; border: none; background-color: rgba(255,255,255,0.2); color: white;\'>'+
                '<i class=\'map marker icon\' style=\'color: white;\'></i>'+
                '</div>'+
                '<div class=\'results\'></div>'+
                '</div>'+
                '<div class=\'ui fluid big left icon input\' style=\'margin-top: 10px;\'>'+
                '<i class=\'calendar alternate outline icon\'></i>'+
                '<input id=\'m-checkin-date\' name=\'check-in\' autocomplete=\'off\' placeholder=\'Check in date\' style=\'font-family: nunitoregular; color: white; border: none; background-color: rgba(255,255,255,0.2);\'/>'+
                '</div>'+
                '<div class=\'ui fluid big left icon input\' style=\'margin-top: 10px;\'>'+
                '<i class=\'calendar alternate outline icon\'></i>'+
                '<input id=\'m-checkout-date\' name=\'check-out\' autocomplete=\'off\' placeholder=\'Check out date\' style=\'font-family: nunitoregular; color: white; border: none; background-color: rgba(255,255,255,0.2);\'/>'+
                '</div>'+
                '<button id=\'m-reserve-btn\' class=\'ui fluid big button\' style=\'color: white; margin-top: 10px; background-color:'+
                'rgb(0,100,140); font-family: nunitoregular;\' onclick=\'m_reserveRoom()\'>'+
                '<i class=\'search icon\'></i> Search'+
                '</button>'+
                '</form>');

            $("#mobile-swith-con").transition({animation: "fade up in", duration:500, onComplete:function(){

                var picker = new Lightpick({
                    field: document.getElementById('m-checkin-date'),
                    secondField: document.getElementById('m-checkout-date'),
                    singleDate: false,
                    inline:false,
                    format:"MM/DD/YY",
                    numberOfColumns:2,
                    numberOfMonths:2,
                    minDate:new Date(),
                    onSelect: function(start, end){
                        
                    }
                });


                if(getElement("search-input") != null)
                {
                    $('.property-serch').search({
                        apiSettings: {
                        url: api+'/soft-search?q={query}'
                        },
                        minCharacters : 2
                    });
                }

            }});
        }});
        $('body').scrollTop();
    }
}

function submitCorporateRequest()
{
    let request = {
        company:$("#company-name").val(),
        email:$("#company-email").val(),
        phone:$("#company-phone").val(),
        city:$("#company-city").val(),
        state:$("#company-state").val(),
        address:$("#company-address").val()
    };

    if(request.company === "")
    {
        errorButton({btn:"submit-btn", msg:"Company name is empty"});
    }
    else if(request.email === "")
    {
        errorButton({btn:"submit-btn", msg:"email is empty"});
    }
    else if(request.phone === "")
    {
        errorButton({btn:"submit-btn", msg:"phone is empty"});
    }
    else if(request.state === "")
    {
        errorButton({btn:"submit-btn", msg:"state is empty"});
    }
    else if(request.address === "")
    {
        errorButton({btn:"submit-btn", msg:"business address"});
    }
    else
    {
        loadingButton({btn:"submit-btn"});
        postJson(api+"/request-corporate", (data, status)=>{
            loadingButton({btn:"submit-btn", loading:false});
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#form-place").transition("fade down out", function () {
                        $("#form-place").html(
                            "<div class=''>" +
                            "<div class='pad-8 align-c'>" +
                            "<img src='images/checked_pastel.png' style='max-width: 100px;'/>" +
                            "<h4 style='font-family: Nunito; line-height: 160%; color: dimgray;'>" +
                            "Your request have been sent. You will be notified by mail if it is approved" +
                            "</h4>" +
                            "</div>" +
                            "</div>"
                        );
                        $("#form-place").transition("fade down in");
                    });
                }
                else if(d.status === "exist")
                {
                    ShowModal(d.message);
                }
                else
                {
                    errorButton({btn:"submit-btn", msg:d.message});
                }
            }
            else
            {
                errorButton({btn:"submit-btn", msg:"Connection error. request failed"});
            }
        }, request);
    }
    return false;
}