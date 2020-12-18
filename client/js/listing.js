let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let request = {listedItem:"", type:"", brand:"", model:"", color:"", seats:0, description:"", state:"", city:"", statename:"", cityname:"", feature:[], images:[], price:"", mileage:"", extramile:"", driver:"", driverprice:"", compulsorydriver:false, adddriver:false};
let driver = {names:"", phone:"", email:"", dob:"", address:"", sex:"", password:"", passport:"", state:"", statename:"", city:"", cityname:"", available:false};
let property = {type:"", city:"", cityname:"", state:"", statename:"", name:"", description:"", phone1:"", phone2:"", email1:"", email2:"", address:"", facilities:[], images:[], banner:"", tandc:"", checkinH:0, checkinM:0, checkoutH:0, checkoutM:0, cashonly:false, rules:[],
formType:'simple', cancellation:false, canceldays:0, cancelhour:0, damagedeposit:false, damageamount:0, earlycheckout:false, partialpayment:false, partialpayamount:0, percialpaypercent:false, policies:[], childpolicy:""};

$(document).ready(function () {
    window.onhashchange = navigate;
    location.hash = "#listing";
    navigate();
});

function navigate()
{
    let hash = location.hash;

    let page = hash.split("/")[0];

    if (page === "") {
        location.hash = "#listing";
        DrawDashboard();
    }

    switch (page)
    {
        case "#listing":
            whatToList();
            break;
        case "#select-type":
            drawVehicleType();
            break;
        case "#select-brand":
            drawVehicleBrand();
            break;
        case "#driver-details":
            drawDriverDetail();
            break;
        case "#drivers-location":
            drawDriverLocation();
            break;
        case "#driver-extras":
            drawDriverExtras();
            break;
        case "#vehicle-details":
            drawVehicleDetails();
            break;
        case "#vehicle-location":
            drawVehicleLocation();
            break;
        case "#vehicle-billing":
            drawVehicleBilling();
            break;
        case "#vehicle-gallery":
            drawVehicleGallery();
            break;
        case "#vehicle-features":
            drawVehicleFeatures();
            break;
        case "#vehicle-overview":
            drawVehicleOverView();
            break;


        case "#property-type":
            drawPropertyType();
            break;
        case "#property-details":
            drawPropertyDetails();
            break;
        case "#property-facilities":
            drawPropertyFacilities();
            break;
        case "#property-gallery":
            drawPropertyGallery();
            break;
        case "#property-rules":
            drawPropertyRules();
            break;
        case "#terms":
            drawTerms();
            break;
        case "#property-overview":
            drawPropertyOverView();
            break;
        default:
            whatToList();
    }
}

function selectCarType(e)
{
    request.type = e.id;
    $(".car-select-tile h1").hide();
    $("#"+e.id +" h1").show();

    $("#car-selected-1-btn").prop("disabled", false);
    $("#car-selected-1-a").attr("href", "#select-brand");
}

function selectCarBrand(e)
{
    request.brand = e.id;
    $(".car-select-tile h1").hide();
    $("#"+e.id +" h1").show();

    $("#car-selected-2-btn").prop("disabled", false);
    $("#car-selected-2-a").attr("href", "#vehicle-details");
}

function selectPropertyType(e)
{
    property.type = e.id;
    $(".car-select-tile h1").hide();
    $("#"+e.id +" h1").show();

    $("#property-selected-2-btn").prop("disabled", false);
    $("#property-selected-1-a").attr("href", "#property-details");
}

function doVehicleDetails()
{
    if($("#model").val() === "")
    {
        $("#form-error").html("Enter vehicle model");
        $("#form-error").transition("drop in");
    }
    else if($("#color").val() === "")
    {
        $("#form-error").html("Enter a valid color");
        $("#form-error").transition("drop in");
    }
    else if(!Number($("#seats").val()))
    {
        $("#form-error").html("The seats you selected are wrong");
        $("#form-error").transition("drop in");
    }
    else if($("#description").val() === "")
    {
        $("#form-error").html("Your description is empty");
        $("#form-error").transition("drop in");
    }
    else
    {
        request.color = $("#color").val();
        request.model = $("#model").val();
        request.seats = Number($("#seats").val());
        request.description = $("#description").val();

        location.hash = "#vehicle-location";
    }
}

function toVehicleDetails()
{
    if(request.type !== "")
    {

    }
}

function selectItemType(e)
{
    request.listedItem = e.id;
    if(request.listedItem === "property")
    {
        location.hash = "#property-type";
    }
    else
    {
        location.hash = "#select-type"
    }
}

function driverLevel1()
{
    if($("#names").val().split(" ").length < 2)
    {
        $("#form-error").html("Full names are required");
        $("#form-error").transition("drop in");
    }
    else if($("#phone").val() === "")
    {
        $("#form-error").html("Phone number is required");
        $("#form-error").transition("drop in");
    }
    else if(!regex.test($("#email").val()))
    {
        $("#form-error").html("Invalid email");
        $("#form-error").transition("drop in");
    }
    else if($("#dob").val().split("/").length < 2)
    {
        $("#form-error").html("Invalid date of birth");
        $("#form-error").transition("drop in");
    }
    else if($("#address").val() === "")
    {
        $("#form-error").html("Address is empty");
        $("#form-error").transition("drop in");
    }
    else
    {
        driver.address = $("#address").val();
        driver.email = $("#email").val();
        driver.phone = $("#phone").val();
        driver.sex = !($("#female").prop("checked")) ? "male" : "female";
        driver.dob = $("#dob").val();
        driver.names = $("#names").val();

        location.hash = "#vehicle-overview";
    }
}

function driverLevel2()
{
    if($("#state").dropdown('get value') === "")
    {
        $("#form-error").html("Select or enter state of operation");
        $("#form-error").transition("drop in");
    }
    else if($("#city").dropdown('get value') === "")
    {
        $("#form-error").html("Select or enter city of operation");
        $("#form-error").transition("drop in");
    }
    else
    {
        driver.state = $("#address").dropdown('get value');
        driver.city = $("#email").dropdown('get value');

        location.hash = "#driver-extras";
    }
}

function saveVehicle()
{
    if(!$("#agreement").prop("checked"))
    {
        $("#form-error").html("Please read and accept our terms and conditions");
        $("#form-error").transition("drop in");
    }
    else
    {
        loadingButton({btn:"save-btn"});

        if(request.adddriver)
        {
            driver.city = request.city;
            driver.state = request.state;

            postJson(api+"/listdriver", function (data, status) {
                loadingButton({btn:"save-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        request.driver = d.data;

                        loadingButton({btn:"save-btn"});
                        postJson(api+"/listvehicle", function (data, status) {
                            loadingButton({btn:"save-btn", loading:false});
                            if(status === "done")
                            {
                                let d = JSON.parse(data);

                                if(d.status === "success")
                                {
                                    $("#listing-page").html(
                                        "       <div style='margin-top: 90px;'>" +
                                        "            <div style='margin: auto;'>" +
                                        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
                                        "                   <div class='width-5 ui form'>" +
                                        "                       <br/>" +

                                        "<div class='w3-row pad-2 align-c' style='border: 3px solid rgb(245,245,245);'>" +
                                        "   <img src='images/check_office.png' style='margin-top: 20px; width: 100px;'>" +
                                        "   <h3 style='font-family: varela_roundregular;'>Vehicle submitted for approval</h3><br/>" +
                                        "   <p style='font-family: Lato; color: dimgray; line-height: 180%;'>" +
                                        "       Your vehicle have been submitted for approval. We will notify by mail if your vehicle " +
                                        "       is approved or not. If it is approved, " +
                                        "       it will go live and customers will be able to start renting" +
                                        "   </p><br/>" +
                                        "<a href='partner'><button class='ui button'>My account</button></a><br/><br/>" +
                                        "<a href='home'><h5>Go Home</h5></a>" +

                                        "</div> " +
                                        "</div> " +

                                        "                   </div>" +
                                        "                 </div>" +
                                        "            </div>" +
                                        "       </div>");
                                }
                                else
                                {
                                    errorButton({btn:"save-btn", msg:d.message});
                                }
                            }
                            else
                            {
                                errorButton({btn:"save-btn", msg:"Connection error"});
                            }
                        }, request);
                    }
                    else
                    {
                        errorButton({btn:"save-btn", msg:d.message});
                    }
                }
                else
                {
                    errorButton({btn:"save-btn", msg:"Connection error"});
                }
            }, driver);
        }
        else
        {
            postJson(api+"/listvehicle", function (data, status) {
                loadingButton({btn:"save-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#listing-page").html(
                            "       <div style='margin-top: 90px;'>" +
                            "            <div style='margin: auto;'>" +
                            "                <div class='w3-row l-width-7' style='margin: auto;'>" +
                            "                   <div class='width-5 ui form'>" +
                            "                       <br/>" +

                            "<div class='w3-row pad-2 align-c' style='border: 3px solid rgb(245,245,245);'>" +
                            "   <img src='images/check_office.png' style='margin-top: 20px; width: 100px;'>" +
                            "   <h3 style='font-family: varela_roundregular;'>Vehicle submitted for approval</h3><br/>" +
                            "   <p style='font-family: Lato; color: dimgray; line-height: 180%;'>" +
                            "       Your vehicle have been submitted for approval. We will notify by mail if your vehicle " +
                            "       is approved or not. If it is approved, " +
                            "       it will go live and customers will be able to start renting" +
                            "   </p><br/>" +
                            "<a href='partner'><button class='ui button'>My account</button></a><br/><br/>" +
                            "<a href='home'><h5>Go Home</h5></a>" +

                            "</div> " +
                            "</div> " +

                            "                   </div>" +
                            "                 </div>" +
                            "            </div>" +
                            "       </div>");
                    }
                    else
                    {
                        errorButton({btn:"save-btn", msg:d.message});
                    }
                }
                else
                {
                    errorButton({btn:"save-btn", msg:"Connection error"});
                }
            }, request);
        }
    }
}

function vehicleLevel2()
{
    if($("#state").dropdown('get value') === "")
    {
        $("#form-error").html("Select or enter state of operation");
        $("#form-error").transition("drop in");
    }
    else if($("#city").dropdown('get value') === "")
    {
        $("#form-error").html("Select or enter city of operation");
        $("#form-error").transition("drop in");
    }
    else
    {
        request.state = $("#state").dropdown('get value');
        request.statename = $("#state").dropdown('get text');

        request.city = $("#city").dropdown('get value');
        request.cityname = $("#city").dropdown('get text');

        location.hash = "#vehicle-features";
    }
}

function vehicleLevel3()
{
    let features = document.getElementsByClassName("v-feature");
    let checks = [];

    for(let i = 0; i < features.length; i++)
    {
        if(features[i].checked)
        {
            checks.push(features[i].id);
        }
    }
    request.feature = checks;
    location.hash = "#vehicle-gallery";
}

function vehicleLevel4()
{
    request.images = [];
    if($("#gallery-image-name-1").val() !== "")
    {
        request.images.push($("#gallery-image-name-1").val());
    }
    if($("#gallery-image-name-2").val() !== "")
    {
        request.images.push($("#gallery-image-name-2").val());
    }
    if($("#gallery-image-name-3").val() !== "")
    {
        request.images.push($("#gallery-image-name-3").val());
    }
    if($("#gallery-image-name-4").val() !== "")
    {
        request.images.push($("#gallery-image-name-4").val());
    }

    if(request.images.length === 0)
    {
        $("#form-error").html("Add at least one image");
        $("#form-error").transition("drop in");
    }
    else
    {
        location.hash = "#vehicle-billing";
    }
}

function vehicleLevel5()
{
    if(!Number($("#price").val()))
    {
        $("#form-error").html("Add a price for the vehicle");
        $("#form-error").transition("drop in");
    }
    else
    {
        request.price = Number($("#price").val());
        request.mileage = Number($("#mileage").val()) ? Number($("#mileage").val()) : 0;
        request.extramile = Number($("#extramile").val()) ? Number($("#extramile").val()) : 0;
        request.compulsorydriver = $("#compulsory-driver").prop("checked");
        request.adddriver = $("#add-a-driver").prop("checked");
        request.driverprice = Number($("#driver-price").val());

        if(request.adddriver)
        {
            location.hash = "#driver-details";
        }
        else
        {
            location.hash = "#vehicle-overview";
        }
    }
}

function backFromOverview()
{
    if(request.adddriver)
    {
        location.hash = "#driver-details";
    }
    else
    {
        location.hash = "#vehicle-billing";
    }
}

function whatToList()
{
    $("#listing-page").html(
        " <div style='margin-top: 70px;'>" +
        "            <h2 class='align-c' style='font-family: varela_roundregular; font-weight: normal;'>" +
        "                What would you like to list?" +
        "            </h2>" +
        "            <div style='margin-top: 70px;'>" +
        "                <div class='w3-row l-width-6' style='margin: auto;'>" +
        "                    <div class='w3-col l12 m6 s12'>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='property' class='pad-3 align-c car-select-tile' style='height: auto;'" +
        "                                     onclick='selectItemType(this)'>" +
        "                                    <h3 class='ui sleak header'>" +
        "                                        <i class='building blue icon'></i> List a property" +
        "                                    </h3>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='vehicle' class='pad-3 align-c car-select-tile' style='height: auto;'" +
        "                                     onclick='selectItemType(this)'>" +
        "                                    <h3 class='ui sleak header'>" +
        "                                        <i class='taxi blue icon'></i> List a vehicle" +
        "                                    </h3>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>"
    );
}

function drawDriverDetail()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Driver's Details</h3>" +
        "                           <p>Provide your drivers basic information</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <div class='ui fluid left icon input'>" +
        "                           <i class='user circle blue icon'></i>" +
        "                           <input id='names' class='wix-textbox' type='text' value='"+driver.names+"' placeholder='Full Name' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='mobile blue icon'></i>" +
        "                           <input id='phone' class='wix-textbox' type='text' value='"+driver.phone+"' placeholder='Phone number' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='at blue icon'></i>" +
        "                           <input id='email' class='wix-textbox' type='text' value='"+driver.email+"' placeholder='Email address' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='calendar alternate outline blue icon'></i>" +
        "                           <input id='dob' class='wix-textbox' data-toggle='datepicker' value='"+driver.dob+"' type='text' placeholder='Date of birth' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui form' style='margin-top: 10px;'>" +
        "                               <textarea id='address' class='wix-textbox' rows='3' placeholder='Address'>"+driver.address+"</textarea>" +
        "                       </div>" +
        "<div class='w3-row' style='margin-top: 10px; margin-bottom: 10px;'>" +
        "<div class='w3-col l6 m6 s6'>" +
        "<label><input class='with-gap' name='gender' type='radio' "+(((driver.sex == "") && (driver.sex == "male")) ? "checked" : "")+"/><span>Male</span></label>" +
        "</div>" +
        "<div class='w3-col l6 m6 s6'>" +
        "<label><input id='female' class='with-gap' name='gender' type='radio' "+((driver.sex == "female") ? "checked" : "")+"/><span>Female</span></label>" +
        "</div>" +
        "</div>" +


        "<div style='margin-top: 30px;'>" +
        "<a href='#vehicle-billing'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='driverLevel1()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
}

function drawVehicleType()
{
    $("#listing-page").html(
        "<div style='margin-top: 70px;'>" +
        "            <h2 class='align-c' style='font-family: varela_roundregular; font-weight: normal;'>" +
        "               Select Car Type" +
        "           </h2>" +
        "            <div style='margin-top: 70px;'>" +
        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='suv' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/suv.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>SUV</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='sedan' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/sedan.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Sedan</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='station-wagon' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/station-wagon.png' style='width: 100%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak' style='margin-top: 35px;'>Station wagon</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='hatch-back' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/hatchback.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Hatch Back</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='truck' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/truck.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Truck</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='van' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/van.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Van</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='small' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/small.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Small</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='sports' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/sport.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Sports</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='electric-car' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/hybrid-electric.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Electric car</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='motor-cyle' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/motorcycle.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Motorcycle</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='convertible' class='pad-2 align-c car-select-tile' onclick='selectCarType(this)'>" +
        "                                    <img src='images/placeholder/convertible.png' style='width: 100%;'/>" +
        "                                    <br/><br/>" +
        "                                    <h3 class='sleak'>Convertible</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "            <div class='align-c' style='margin-top: 70px; margin-bottom: 30px;'>" +
        "               <a href='#listing'>" +
        "                   <button class='ui large basic button'>" +
        "                       <i class='arrow left icon'></i><span style='color: transparent'>B</span>" +
        "                   </button>" +
        "               </a>" +
        "                   <a id='car-selected-1-a'>" +
        "                   <button id='car-selected-1-btn' class='ui blue large button' disabled>" +
        "                       Next <i class='arrow right icon'></i>" +
        "                   </button>" +
        "                   </a>" +
        "            </div>" +
        "        </div>");

    if(request.type !== "")
    {
        $(".car-select-tile h1").hide();
        $("#"+request.type +" h1").show();

        $("#car-selected-1-btn").prop("disabled", false);
        $("#car-selected-1-a").attr("href", "#select-brand");
    }
}

function drawVehicleBrand()
{
    $("#listing-page").html(
        "<div style='margin-top: 70px;'>" +
        "            <h2 class='align-c' style='font-family: varela_roundregular; font-weight: normal;'>" +
        "               Select Car Brand" +
        "            </h2>" +
        "            <div style='margin-top: 70px;'>" +
        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Toyota' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Toyota-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Toyota</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='BMW' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/BMW-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>BMW</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Mercedes' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Mercedes-Benz-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak' style='margin-top: 35px;'>Mercedes</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Ford' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Ford-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Ford</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Fiat' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Fiat-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Fiat</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Honda' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Honda-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Honda</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Volkswagen' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Volkswagen-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Volkswagen</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Nissan' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Nissan-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Nissan</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Mini' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Mini-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Mini</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Peugeot' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Peugeot-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Peugeot</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Audi' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Audi-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Audi</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Hyundai' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Hyundai-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Hyundai</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +

        "                </div>" +

        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Alfa-Romeo' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Alfa-Romeo-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Alfa-Romeo</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Infinity' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Infiniti-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Infinity</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Jaguar' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Jaguar-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Jaguar</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Jeep' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Jeep-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Jeep</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Porsche' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Porsche-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Porsche</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Renault' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Renault-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Renault</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +

        "                </div>" +

        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Seat' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/SEAT-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Seat</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Volvo' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Volvo-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Volvo</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Smart' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Smart-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Smart</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Vauxhall' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Vauxhall-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Vauxhall</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Citroen' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Citroen-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Citroen</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='Tesla' class='pad-2 align-c car-select-tile' onclick='selectCarBrand(this)'>" +
        "                                    <img src='images/logos/Tesla-logo.png' style='width: 80%;'/>" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Tesla</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +

        "                </div>" +

        "            </div>" +
        "            <div class='align-c' style='margin-top: 70px; margin-bottom: 30px;'>" +
        "                <button class='ui large basic button' onclick=\"location.hash = '#select-type';\">" +
        "                    <i class='arrow left icon'></i><span style='color: transparent'>B</span>" +
        "                </button>" +
        "                <a id='car-selected-2-a'>" +
        "                   <button id='car-selected-2-btn' class='ui blue large button' disabled>" +
        "                       Next <i class='arrow right icon'></i>" +
        "                   </button>" +
        "                     </a>" +
        "            </div>" +
        "        </div>");

    if(request.brand !== "")
    {
        $("#"+request.brand+" h1").show();

        $("#car-selected-2-btn").prop("disabled", false);
        $("#car-selected-2-a").attr("href", "#vehicle-details");
    }
}

function drawVehicleDetails()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Vehicle's Details</h3>" +
        "                       </div>" +
        "                       <div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <div class='ui fluid left icon input'>" +
        "                           <i class='taxi blue icon'></i>" +
        "                           <input id='model' class='wix-textbox' type='text' value='"+request.model+"' placeholder='Model' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <p style='margin-top: 5px; color: lightgray;'>Model name like \"venza\", \"Explorer\" etc</p>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='tint blue icon'></i>" +
        "                           <input id='color' class='wix-textbox' type='text' value='"+request.color+"' placeholder='Color' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left labeled input' style='margin-top: 10px;'>" +
        "                           <label class='ui label'>seats</label>" +
        "                           <input id='seats' class='wix-textbox' type='number' value='"+(request.seats === 0 ? 4 : request.seats)+"' placeholder='Seats' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui form' style='margin-top: 10px;'>" +
        "                               <textarea id='description' class='wix-textbox' rows='3' placeholder='Description'>"+request.description+"</textarea>" +
        "                       </div>" +


        "<div style='margin-top: 30px;'>" +
        "<a href='#select-brand'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='doVehicleDetails()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
}

function drawVehicleLocation()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Vehicle's Location</h3>" +
        "                           <p style='font-family: Lato;'>Where will the vehicle be operating?</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <select id='state' class='ui fluid wix-select dropdown'>" +
        "                           <option value=''>Select vehicles operation state</option>" +
        "                       </select>" +
        "                       <div style='margin-top: 10px;'> " +
        "                           <select id='city' class='ui fluid search wix-select dropdown' style='margin-top: 30px;'>" +
        "                               <option value=''>Select vehicles operation city</option>" +
        "                           </select>" +
        "                       </div> " +
        "<div style='margin-top: 30px;'>" +
        "<a href='#vehicle-details'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='vehicleLevel2()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    $(".ui.dropdown").dropdown({allowAdditions:true});
    list({ con: getElement("state"), job: 'list states', onLoaded:function(){
            if(request.state !== "")
            {
                if(request.state === request.statename)
                {
                    let option = document.createElement("option");
                    option.value = request.statename;
                    option.innerHTML = request.statename;
                    getElement("state").appendChild(option);
                }
                $("#state").dropdown('set selected', request.state);
            }
        }});
    list({ con: getElement("city"), job: 'list cities', onLoaded:function () {
            if(request.city !== "")
            {
                if(request.city === request.cityname)
                {
                    let option = document.createElement("option");
                    option.value = request.cityname;
                    option.innerHTML = request.cityname;
                    getElement("city").appendChild(option);
                }
                $("#city").dropdown('set selected', request.city);
            }
        }});
}

function drawVehicleFeatures()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Vehicle's Features</h3>" +
        "                           <p style='font-family: Lato;'>Let your customers know what your vehicle has?</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <div class='pad-2' id='features-con' style='margin-top: 10px; border: 3px solid rgb(245,245,245);'> " +

        "                       </div> " +
        "<div style='margin-top: 30px;'>" +
        "<a href='#vehicle-location'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='vehicleLevel3()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    loadVehicleFeatures();
}

function loadVehicleFeatures()
{
    $("#features-con").html(
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>"
    );

    postJson(api+"/listvehiclefeatures", function(data, status){
        $("#features-con").html("");
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                for(let i = 0; i < d.data.length; i++)
                {
                    let space = document.createElement("div");
                    space.className = "w3-row";
                    space.style.marginTop = "10px";
                    space.innerHTML = "<div class='w3-col l6 m6 s12'>" +
                        "<label><input class='v-feature' id='"+d.data[i].Feature+"' type='checkbox'><span>"+d.data[i].Feature+"</span></label>" +
                        "</div>";

                    if(d.data.length > (i + 1))
                    {
                        i++;
                        space.innerHTML += "<div class='w3-col l6 m6 s12'>" +
                            "<label><input class='v-feature' id='"+d.data[i].Feature+"' type='checkbox'><span>"+d.data[i].Feature+"</span></label>" +
                            "</div>";
                    }
                    document.getElementById("features-con").appendChild(space);
                }

                for(let i = 0; i < request.feature.length; i++)
                {
                    getElement(request.feature[i]).checked = true;
                }
            }
            else
            {

            }
        }
        else
        {

        }
    }, {});
}

function drawVehicleBilling()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Billing Setup</h3>" +
        "                           <p>Setup prices and how much mileage is allowed per day for your vehicle</p>" +
        "                       </div>" +
        "                       <div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <h5 class='sleak'>Without a driver</h5>" +
        "                       <div class='ui fluid right labeled left icon input'>" +
        "                           <i class=' blue icon' style='font-family: Lato; margin-top: 13px; font-size: 16px;'>&#8358;</i>" +
        "                           <input id='price' class='wix-textbox' type='text' value='"+request.price+"' placeholder='Price' style='font-family: Lato; padding: 11px;'/>" +
        "                           <label class='ui label'>/ day</label>" +
        "                       </div>" +
        "                       <div class='ui fluid right labeled left icon input' style='margin-top: 10px;'>" +
        "                           <i class=' blue icon' style='font-family: Lato; margin-top: 13px; font-size: 14px;'>km</i>" +
        "                           <input id='mileage' class='wix-textbox' type='text' value='"+request.mileage+"' placeholder='Daily Milage' style='font-family: Lato; padding: 11px;'/>" +
        "                           <label class='ui label'> / day</label>" +
        "                       </div>" +
        "                       <p style='margin-top: 5px; color: gray;'>To set unlimited mileage, leave empty or enter 0</p>" +
        "                       <div class='ui fluid right labeled left icon input' style='margin-top: 10px;'>" +
        "                           <i class=' blue icon' style='font-family: Lato; margin-top: 13px; font-size: 16px;'>&#8358;</i>" +
        "                           <input id='extramile' class='wix-textbox' type='text' value='"+request.extramile+"' placeholder='Price for every extra mileage' style='font-family: Lato; padding: 11px;'/>" +
        "                           <label class='ui label'> / day</label>" +
        "                       </div>" +


        "                       <br/>" +
        "                       <h5 class='sleak'>Price for a driver</h5>" +
        "                       <div class='ui fluid right labeled left icon input'>" +
        "                           <i class=' blue icon' style='font-family: Lato; margin-top: 13px; font-size: 16px;'>&#8358;</i>" +
        "                           <input id='driver-price' class='wix-textbox' type='text' value='"+request.driverprice+"' placeholder='Price' style='font-family: Lato; padding: 11px;'/>" +
        "                           <label class='ui label'> / day</label>" +
        "                       </div>" +


        "<br/>" +
        "<div><label><input id='compulsory-driver' class='filled-in' type='checkbox' "+(request.compulsorydriver ? "checked" : "")+"/><span>Vehicle must be hired with a driver</span></label></div><br/>" +
        "<div><label><input id='add-a-driver' class='filled-in' type='checkbox' "+(request.adddriver ? "checked" : "")+"/><span>I want to add my own driver</span></label></div>" +


        "<div style='margin-top: 30px;'>" +
        "<a href='#vehicle-gallery'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='vehicleLevel5()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    $('[data-toggle="datepicker"]').datepicker({autoHide:true});
}

function drawVehicleGallery()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Add photos of your vehicle</h3>" +
        "                           <p style='font-family: Lato;'>The first image will be used as the default image</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +

        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12'>" +
        "<div class='pad-1'>" +
        "<div class='w3-card' style='height: 200px; background-color: white; position: relative;'>" +
        "<img id='gallery-image-1' style='width: 100%;'/>" +
        "<input id='file-image-1' type='file' onchange=\"processGalleryImage(this, '1')\" style='display: none;'/> " +
        "<input id='gallery-image-name-1' type='hidden' value=''/> " +
        "<button id='gallery-btn-1' class='ui circular large blue icon button' style='position: absolute; bottom: -10px; left: -10px;'" +
        "onclick=\"getElement('file-image-1').click()\">" +
        "<i class='image file icon'></i>" +
        "</button>" +
        "</div>" +
        "</div> " +
        "</div> " +
        "<div class='w3-col l6 m6 s12'>" +
        "<div class='pad-1'>" +
        "<div class='w3-card' style='height: 200px; background-color: white; position: relative;'>" +
        "<img id='gallery-image-2' style='width: 100%;'/>" +
        "<input id='file-image-2' type='file' onchange=\"processGalleryImage(this, '2')\" style='display: none;'/> " +
        "<input id='gallery-image-name-2' type='hidden' value=''/> " +
        "<button id='gallery-btn-2' class='ui circular large blue icon button' style='position: absolute; bottom: -10px; left: -10px;'" +
        "onclick=\"getElement('file-image-2').click()\">" +
        "<i class='image file icon'></i>" +
        "</button>" +
        "</div>" +
        "</div> " +
        "</div> " +
        "</div> " +

        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12'>" +
        "<div class='pad-1'>" +
        "<div class='w3-card' style='height: 200px; background-color: white; position: relative;'>" +
        "<img id='gallery-image-3' style='width: 100%;'/>" +
        "<input id='file-image-3' type='file' onchange=\"processGalleryImage(this, '3')\" style='display: none;'/> " +
        "<input id='gallery-image-name-3' type='hidden' value=''/> " +
        "<button id='gallery-btn-3' class='ui circular large blue icon button' style='position: absolute; bottom: -10px; left: -10px;'" +
        "onclick=\"getElement('file-image-3').click()\">" +
        "<i class='image file icon'></i>" +
        "</button>" +
        "</div>" +
        "</div> " +
        "</div> " +
        "<div class='w3-col l6 m6 s12'>" +
        "<div class='pad-1'>" +
        "<div class='w3-card' style='height: 200px; background-color: white; position: relative;'>" +
        "<img id='gallery-image-4' style='width: 100%;'/>" +
        "<input id='file-image-4' type='file' onchange=\"processGalleryImage(this, '4')\" style='display: none;'/> " +
        "<input id='gallery-image-name-4' type='hidden' value=''/> " +
        "<button id='gallery-btn-4' class='ui circular large blue icon button' style='position: absolute; bottom: -10px; left: -10px;'" +
        "onclick=\"getElement('file-image-4').click()\">" +
        "<i class='image file icon'></i>" +
        "</button>" +
        "</div>" +
        "</div> " +
        "</div> " +
        "</div> " +

        "<div style='margin-top: 30px;'>" +
        "<a href='#vehicle-features'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='vehicleLevel4()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    for(let i = 0; i < request.images.length; i++)
    {
        $("#gallery-image-"+(i + 1)).attr("src", phpvars.STORAGE_API_URL + "files/"+request.images[i]);
        $("#gallery-image-name-"+(i + 1)).val(request.images[i]);
    }
}

function processGalleryImage(e, id)
{
    cropImage({file:e.files[0], ratio:1.5/1}, function(blob, URL, n){


        getElement("gallery-image-"+n.toString()).src = URL.createObjectURL(blob);

        let img = new File([blob], "file.png");

        loadingButton({btn:"gallery-btn-"+n.toString()});
        let upload = new WixUpload({file:img,url: phpvars.STORAGE_API_URL + "upload/files"});
        upload.Upload(function(data, status){
            loadingButton({btn:"gallery-btn-"+n.toString(),loading:false});
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#gallery-image-name-"+n.toString()).val(d.data);
                    //activateGallery(n);
                    //saveGallery(n);
                    //checkGalleryPlaceholders();
                }
                else
                {
                    getElement("gallery-image-"+n.toString()).src = "";
                    ShowModal("Application error. Unable to upload file please try again");
                }
            }
            else
            {
                getElement("gallery-image-"+n.toString()).src = "";
                ShowModal("Connection error. Unable to upload file please try again");
            }
        });
    }, id);
}

function drawVehicleOverView()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5 ui form'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Review and agreement</h3>" +
        "                           <p style='font-family: Lato;'>Make sure all the info supplied are correct.</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +

        "<div class='w3-row pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "   <h3 class='sleak' style='margin: 0px;'>Vehicle Info</h3>" +
        "   <p>A "+request.color+" "+request.brand+" "+request.model+" "+request.type+".<br/>can seat <b>"+
        request.seats+"</b> "+(request.seats > 1 ? "people" : "person")+"</p><br/>" +
        "   <h3 class='sleak' style='margin: 0px;'>To opearate in </h3>" +
        "   <p>"+request.statename+", "+request.cityname+"</p>" +
        "   <h3 class='sleak' style='margin: 0px;'>My Vehicle has got</h3>" +
        "   <ul>"+featureList()+"</ul><br/><br/>" +
        "   <h3 class='sleak' style='margin: 0px;'>Billing</h3>" +
        "   <p>&#8358;"+request.price+" / day "+(request.mileage > 0 ? "for "+request.mileage+" miles" :"") +
        (request.extramile > 0 ? "&#8358;" +request.mileage+" for every extra mile" : "") + "</p><br/>" +


        "   <h3 class='sleak' style='margin: 0px;'>Agreement</h3>" +
        "   <p>Carefully read and accept <a href='' target='empty'>" +
        "our terms & conditions</a> to continue</p>" +
        "<label><input id='agreement' class='filled-in' type='checkbox'>" +
        "<span>I have read and accepted the terms and conditions</span> </label>" +

        "</div> " +
        "</div> " +

        "<div style='margin-top: 30px;'>" +
        "<button class='ui button' onclick='backFromOverview()'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span>" +
        "</button>" +
        " &nbsp;" +
        "<button id='save-btn' class='ui blue button' onclick='saveVehicle()'><i class='check icon'></i>Done </button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");
}

function featureList()
{
    let r = "";
    for(let i = 0; i < request.feature.length; i++)
    {
        r += "<li>"+request.feature[i]+"</li>";
    }
    return r;
}


//------------------------------------------------- doing property listing-------------------------------------

function drawPropertyType()
{
    $("#listing-page").html(
        "<div style='margin-top: 70px;'>" +
        "            <h2 class='align-c' style='font-family: varela_roundregular; font-weight: normal;'>" +
        "               Select property Type" +
        "            </h2>" +
        "            <div style='margin-top: 70px;'>" +
        "                <div class='w3-row l-width-8' style='margin: auto;'>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='hotel' class='pad-2 align-c car-select-tile' onclick='selectPropertyType(this)'>" +
        "                                    <!--<img src='images/logos/hotel.png' style='width: 80%;'/>-->" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Hotel</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='b-and-b' class='pad-2 align-c car-select-tile' onclick='selectPropertyType(this)'>" +
        "                                    <!--<img src='images/logos/b&b.png' style='width: 80%;'/>-->" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>B&B</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='condor' class='pad-2 align-c car-select-tile' onclick='selectPropertyType(this)'>" +
        "                                    <!--<img src='images/logos/condor.png' style='width: 80%;'/>-->" +
        "                                    <br/>" +
        "                                    <h3 class='sleak' style='margin-top: 35px;'>Condor</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='apartment' class='pad-2 align-c car-select-tile' onclick='selectPropertyType(this)'>" +
        "                                    <!--<img src='images/logos/apartment.png' style='width: 80%;'/>-->" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Apartment</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                    <div class='w3-col l4 '>" +
        "                        <div class='w3-row'>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='studio' class='pad-2 align-c car-select-tile' onclick='selectPropertyType(this)'>" +
        "                                    <!--<img src='images/logos/studio.png' style='width: 80%;'/>-->" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Studio</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class='w3-col l6 pad-1'>" +
        "                                <div id='boutique' class='pad-2 align-c car-select-tile' onclick='selectPropertyType(this)'>" +
        "                                    <!--<img src='images/logos/boutique.png' style='width: 80%;'/>-->" +
        "                                    <br/>" +
        "                                    <h3 class='sleak'>Boutique</h3>" +
        "                                    <h1><i class='check green circle icon'></i></h1>" +
        "                                </div>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +



        "            </div>" +
        "            <div class='align-c' style='margin-top: 70px; margin-bottom: 30px;'>" +
        "                <button class='ui large basic button' onclick=\"location.hash = '#listing';\">" +
        "                    <i class='arrow left icon'></i><span style='color: transparent'>B</span>" +
        "                </button>" +
        "                <a id='property-selected-1-a'>" +
        "                   <button id='property-selected-2-btn' class='ui blue large button' disabled>" +
        "                       Next <i class='arrow right icon'></i>" +
        "                   </button>" +
        "                     </a>" +
        "            </div>" +
        "        </div>"
    );

    if(property.type !== "")
    {
        $("#"+property.type+" h1").show();

        $("#property-selected-2-btn").prop("disabled", false);
        $("#property-selected-1-a").attr("href", "#property-details");
    }
}

function drawPropertyDetails()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Propertie's Details</h3>" +
        "                       </div>" +
        "                       <div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <div class='ui fluid left icon input'>" +
        "                           <i class='building blue icon'></i>" +
        "                           <input id='name' class='wix-textbox' type='text' value='"+property.name+"' placeholder='Name' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui form' style='margin-top: 10px;'>" +
        "                               <textarea id='description' class='wix-textbox' rows='3' " +
        "                                   placeholder='Property description' style='font-family: Lato;'>"+property.description+
                                        "</textarea>" +
        "                       </div>" +
        "                       <br/><br/>" +
        "                       <h6 style='font-family: varela_roundregular;'>Property location</h6>" +
        "                       <select id='state' class='ui fluid wix-select dropdown'>" +
        "                           <option value=''>Select or add state</option>" +
        "                       </select>" +
        "                       <div style='margin-top: 10px;'> " +
        "                           <select id='city' class='ui fluid search wix-select dropdown' style='margin-top: 30px;'>" +
        "                               <option value=''>Select or add city</option>" +
        "                           </select>" +
        "                       </div>" +
        "                       <div class='ui form' style='margin-top: 10px;'>" +
        "                               <textarea id='address' class='wix-textbox' rows='3' " +
        "                                   placeholder='Property address' style='font-family: Lato;'>"+property.address+
                                        "</textarea>" +
        "                       </div>" +
        "                       <br/><br/> " +
        "                       <h6 style='font-family: varela_roundregular;'>Contact Info</h6>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='mobile blue icon'></i>" +
        "                           <input id='phone-1' class='wix-textbox' type='text' value='"+property.phone1+"' placeholder='Phone 1' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='mobile blue icon'></i>" +
        "                           <input id='phone-2' class='wix-textbox' type='text' value='"+property.phone2+"' placeholder='Phone 2' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='at blue icon'></i>" +
        "                           <input id='email-1' class='wix-textbox' type='text' value='"+property.email1+"' placeholder='Email 1' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +
        "                       <div class='ui fluid left icon input' style='margin-top: 10px;'>" +
        "                           <i class='at blue icon'></i>" +
        "                           <input id='email-2' class='wix-textbox' type='text' value='"+property.email2+"' placeholder='Email 2' style='font-family: Lato; padding: 11px;'/>" +
        "                       </div>" +



        "<div style='margin-top: 30px;'>" +
        "<a href='#property-type'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='doPropertyDetails()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    $(".ui.dropdown").dropdown({allowAdditions:true});
    list({ con: getElement("state"), job: 'list states', onLoaded:function(){
            if(property.state !== "")
            {
                if(property.state == property.statename)
                {
                    let option = document.createElement("option");
                    option.value = property.statename;
                    option.innerHTML = property.statename;
                    getElement("state").appendChild(option);

                    $("#state").dropdown('set selected', property.state);
                }
                else
                {
                    $("#state").dropdown('set selected', property.state);
                }
            }
        }});
    list({ con: getElement("city"), job: 'list cities', onLoaded:function () {
            if(property.city !== "")
            {
                if(property.cityname === property.city)
                {
                    let option = document.createElement("option");
                    option.value = property.cityname;
                    option.innerHTML = property.cityname;
                    getElement("city").appendChild(option);

                    $("#city").dropdown('set selected', property.city);
                }
                else
                {
                    $("#city").dropdown('set selected', property.city);
                }
            }
        }});
}

function doPropertyDetails()
{
    if($("#name").val() === "")
    {
        $("#form-error").html("Enter property name");
        $("#form-error").transition("drop in");
    }
    else if($("#description").val() === "")
    {
        $("#form-error").html("Property description is empty");
        $("#form-error").transition("drop in");
    }
    else if($("#state").val() === "")
    {
        $("#form-error").html("Select the state where the property is located");
        $("#form-error").transition("drop in");
    }
    else if($("#city").val() === "")
    {
        $("#form-error").html("Select the city where the property is located");
        $("#form-error").transition("drop in");
    }
    else if($("#address").val() === "")
    {
        $("#form-error").html("Property address is empty");
        $("#form-error").transition("drop in");
    }
    else if(($("#phone-1").val() === "") && ($("#phone-1").val() === ""))
    {
        $("#form-error").html("Enter at least one phone number");
        $("#form-error").transition("drop in");
    }
    else if(!regex.test($("#email-1").val()) && (!regex.test($("#email-2").val())))
    {
        $("#form-error").html("Enter at least one email");
        $("#form-error").transition("drop in");
    }
    else
    {
        property.name = $("#name").val();
        property.description = $("#description").val();

        property.city = $("#city").dropdown('get value');
        property.cityname = $("#city").dropdown('get text');

        property.state = $("#state").dropdown('get value');
        property.statename = $("#state").dropdown('get text');

        property.phone1 = $("#phone-1").val();
        property.phone2 = $("#phone-2").val();
        property.email1 = $("#email-1").val();
        property.email2 = $("#email-2").val();
        property.address = $("#address").val();

        location.hash = "#property-facilities";
    }
}

function drawPropertyFacilities()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Facilities</h3>" +
        "                           <p style='font-family: Lato;'>What facilities can customers use in your property?</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <div class='pad-2' id='features-con' style='margin-top: 10px; border: 3px solid rgb(245,245,245);'> " +

        "                       </div> " +
        "<div style='margin-top: 30px;'>" +
        "<a href='#property-details'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='doPropertyFacilities()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    loadPropertyFacilities();
}

function loadPropertyFacilities()
{
    $("#features-con").html(
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>"
    );

    postJson(api+"/listpropertyfacilities", function(data, status){
        $("#features-con").html("");
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                for(let i = 0; i < d.data.length; i++)
                {
                    let space = document.createElement("div");
                    space.className = "w3-row";
                    space.style.marginTop = "10px";
                    space.innerHTML = "<div class='w3-col l6 m6 s12'>" +
                        "<label><input class='v-feature' id='"+d.data[i].Facility+"' type='checkbox'><span>"+d.data[i].Facility+"</span></label>" +
                        "</div>";

                    if(d.data.length > (i + 1))
                    {
                        i++;
                        space.innerHTML += "<div class='w3-col l6 m6 s12'>" +
                            "<label><input class='v-feature' id='"+d.data[i].Facility+"' type='checkbox'><span>"+d.data[i].Facility+"</span></label>" +
                            "</div>";
                    }
                    document.getElementById("features-con").appendChild(space);
                }

                for(let i = 0; i < property.facilities.length; i++)
                {
                    getElement(property.facilities[i]).checked = true;
                }
            }
            else
            {

            }
        }
        else
        {

        }
    }, {});
}

function doPropertyFacilities()
{
    let facilities = document.getElementsByClassName("v-feature");
    let checks = [];

    for(let i = 0; i < facilities.length; i++)
    {
        if(facilities[i].checked)
        {
            checks.push(facilities[i].id);
        }
    }
    property.facilities = checks;
    location.hash = "#property-gallery";
}

function drawPropertyGallery()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Add photos of your property</h3>" +
        "                           <p style='font-family: Lato;'>The large image will be used as cover image for your property</p>" +
        "                       </div>" +
        "                       <div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +

        "<div class=''>" +
        "<div style='border: 5px solid rgb(240,240,240);'>" +
        "<div style='height: 300px; background-color: white; position: relative; border: 3px solid rgb(228,228,228);'>" +
        "<img id='gallery-image-0' style='width: 100%;'/>" +
        "<input id='file-image-0' type='file' onchange=\"processGalleryImage(this, '0')\" style='display: none;'/> " +
        "<input id='gallery-image-name-0' type='hidden' value=''/> " +
        "<button id='gallery-btn-0' class='ui circular large blue icon button' style='position: absolute; bottom: -10px; left: -10px;'" +
        "onclick=\"getElement('file-image-0').click()\">" +
        "<i class='image file icon'></i>" +
        "</button>" +
        "</div>" +
        "</div>" +
        "</div> " +

        "<div id='property-images-con' class='w3-row' style='margin-top: 10px;'>" +
        "<div class='w3-col l6 m6 s12 property-image'>" +
        "<div style='border: 5px solid rgb(240,240,240);'>" +
        "<div class='w3-card' style='height: 200px; background-color: white; position: relative;'>" +
        "<img id='gallery-image-1' style='width: 100%;'/>" +
        "<input id='file-image-1' type='file' onchange=\"processGalleryImage(this, '1'); checkPropertyImages();\" style='display: none;'/> " +
        "<input class='property-image-file property-image-input' id='gallery-image-name-1' type='hidden' value=''/> " +
        "<button id='gallery-btn-1' class='ui circular large blue icon button' style='position: absolute; bottom: -10px; left: -10px;'" +
        "onclick=\"getElement('file-image-1').click()\">" +
        "<i class='image file icon'></i>" +
        "</button>" +
        "</div>" +
        "</div> " +
        "</div> " +

        "</div> " +


        "<div style='margin-top: 30px;'>" +
        "<a href='#property-facilities'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='doPropertyGallery()'>Next <i class='arrow right icon'></i></button> </div>" +

        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    for(let i = 0; i < property.images.length; i++)
    {
        if(getElement("gallery-image-"+(i)) == null)
        {
            addPropetyImage(i);
        }
        $("#gallery-image-"+(i)).attr("src", "files/"+property.images[i]);
        $("#gallery-image-name-"+(i)).val(property.images[i]);
    }
    firstCheckPropertyImages();
}


/// -------------------------------------------------- doing property Logic -------------------------------------

function checkPropertyImages()
{
    let cons = document.getElementsByClassName("property-image");
    let found = 0;

    for(let i = 1; i < cons.length; i++)
    {
        if(($(cons[i]).find(".property-image-file").val() === "") && ($(cons[i]).find(".property-image-input").val() === ""))
        {
            found++;
        }
    }

    if(found === 0)
    {
        let i = 2 ;

        while(getElement("property-image-"+i) != null) {i++;}
        addPropetyImage(i);
    }
}

function firstCheckPropertyImages()
{
    let cons = document.getElementsByClassName("property-image");
    let found = 0;

    for(let i = 1; i < cons.length; i++)
    {
        if($(cons[i]).find(".property-image-input").val() === "")
        {
            found++;
        }
    }

    if(found === 0)
    {
        let i = 2 ;

        while(getElement("property-image-"+i) != null) {i++;}
        addPropetyImage(i);
    }
}

function removePropertyImage(e)
{
    if(getElement("property-image-"+e) != null)
    {
        getElement("property-images-con").removeChild(getElement("property-image-"+e));
    }
}

function addPropetyImage(n)
{
    let con = document.createElement("div");
    con.id = "property-image-"+n;
    con.className = "w3-col l6 m6 s12 property-image";

    con.innerHTML =
        "<div class='' style='position: relative; border: 5px solid rgb(240,240,240);'>" +
        "<button id='close-btn-"+n+"' class='ui circular red icon button' " +
        "style='position: absolute; right: -10px; top: -10px; z-index: 100;' onclick=\"removePropertyImage('"+n+"')\" disabled>" +
        "<i class='times icon'></i></button> " +
        "<div class='w3-card' style=\"height: 200px; " +
        "background-repeat: no-repeat; background-position: center; position: relative;\">" +
        "<img class='propert-images' id='gallery-image-"+n+"' style='width: 100%;'/>" +
        "<button id='gallery-btn-"+n+"' class='ui circular compact sleak blue-back button' " +
        "style='position:absolute; bottom:-15px; right:0px;'" +
        " onclick=\"getElement('item-file-"+n+"').click()\">" +
        "<i class='plus icon'></i>Property picture</button>" +
        "<input class='property-image-file' id='item-file-"+n+"' type='file' style='display: none;' " +
        "onchange=\"processGalleryImage(this, '"+n+"'); checkPropertyImages(); getElement('close-btn-"+n+"').disabled = false;\"/>" +
        "<input class='property-image-input' id='gallery-image-name-"+n+"' type='hidden' value=''/>" +
        "</div> " +
        "</div>";

    getElement("property-images-con").appendChild(con);
}

function doPropertyGallery()
{
    property.images = [];
    if($("#gallery-image-name-0").val() !== "")
    {
        property.images.push($("#gallery-image-name-0").val());
    }

    let cons = document.getElementsByClassName("property-image");

    for(let i = 0; i < cons.length; i++)
    {
        if($(cons[i]).find(".property-image-input").val() !== "")
        {
            property.images.push($(cons[i]).find(".property-image-input").val());
        }
    }

    if($("#gallery-image-name-0").val() === "")
    {
        $("#form-error").html("The property banner image is required.");
        $("#form-error").transition("drop in");
    }
    else if(property.images.length < 2)
    {
        $("#form-error").html("Add at least one more image");
        $("#form-error").transition("drop in");
    }
    else
    {
        console.log(property);
        location.hash = "#property-rules";
    }
}

function drawPropertyRules()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Property rules</h3>" +
        "                           <p style='font-family: Lato;'>Let customers know how your property operates</p>" +
        "                       </div>" +
        "                       <div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +

        "                       <div class='w3-row' style='margin-top: 20px;'>" +
        "                           <div class='w3-col l6 m6 s12'>" +
        "                               <div class='l-width-9'>" +
        "                                   <h6 class='sleak'>Check in time</h6>" +
        "                                   <div class='ui labeled fluid input'>" +
        "                                       <input class='wix-textbox' id='checkin-h' type='text' value='"+zerofy(property.checkinH)+"'  style='border-radius: 4px 0px 0px 4px;'/>" +
        "                                       <label class='ui label' style='border-radius: 0px;'>:</label>" +
        "                                       <input class='wix-textbox' id='checkin-m' type='text' value='"+zerofy(property.checkinM)+"' style='border-radius: 0px 4px 4px 0px;'/>" +
        "                                   </div>" +
        "                               </div>" +
        "                           </div>" +
        "                           <div class='w3-col l6 m6 s12'>" +
        "                               <h6 class='sleak'>Check out time</h6>" +
        "                               <div class='ui labeled fluid input'>" +
        "                                   <input class='wix-textbox' id='checkout-h' type='text' value='"+zerofy(property.checkoutH)+"' style='border-radius: 4px 0px 0px 4px;'/>" +
        "                                   <label class='ui label' style='border-radius: 0px;'>:</label>" +
        "                                   <input class='wix-textbox' id='checkout-m' type='text' value='"+zerofy(property.checkoutM)+"' style='border-radius: 0px 4px 4px 0px;'/>" +
        "                               </div>" +
        "                           </div>" +
        "                       </div>" +
        "                       <div style='margin-top: 10px;'><br/> " +


        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <label><input id='cash-only' type='checkbox' "+(property.cashonly ? "checked" : "")+"/><span style='font-weight: bold;'>" +
        "                               Cash only</span>" +
        "                           </label><br/><br/>" +
        "                           <p style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                               Customers can't pay for their booking online at the time of making the reservation. " +
        "                               They can only pay with cash at the front desk." +
        "                           </p>" +
        "                       </div>" +


        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <span style='font-weight: bold;'>Customers check-in form</span><br/><br/>" +
        "                           <div class='w3-row'>" +
        "                               <div class='w3-col l6 m6 s12'>" +
        "                                   <label><input id='simple-form' class='with-gap' type='radio' name='form-type' "+(property.formType == "simple" ? "checked" : "")+"/>" +
    "                                       <span style='font-weight: bold;'>Simple form</span></label>" +
        "                                   <p  style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                                       Collect just name, phone number and email" +
        "                                   </p>" +
        "                               </div>" +
        "                               <div class='w3-col l6 m6 s12'>" +
        "                                   <label><input id='detailed-form' class='with-gap' type='radio' name='form-type' "+(property.formType == "detailed" ? "checked" : "")+"/>" +
        "                                   <span style='font-weight: bold;'>Detailed form</span></label>" +
        "                                   <p  style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                                       Collect more detailed data about the customer" +
        "                                   </p>" +
        "                               </div>" +
        "                           </div>" +
        "                       </div>" +


        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <label><input id='cancellation' type='checkbox' "+(property.cancellation ? "checked" : "")+"/><span style='font-weight: bold;'>" +
        "                               Booking Cancellation" +
        "                           </span></label><br/><br/>" +
        "                           <span>Cancellation period</span><br/>" +
        "                           <div class='ui left labeled small fluid input'>" +
        "                               <label class='ui label'>days</label>" +
        "                               <input id='cancel-days' class='wix-textbox' type='text' value='"+property.canceldays+"' style='border-radius: 0px;'/>" +
        "                               <label class='ui label' style='border-radius: 0px;'>hrs</label>" +
        "                               <input id='cancel-hours' class='wix-textbox' type='text' value='"+property.cancelhour+"' style='border-radius: 0px 4px 4px 0px;'/>" +
        "                           </div>" +
        "                       </div>" +

        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <label><input id='damage-deposite' type='checkbox' "+(property.damagedeposit ? "checked" : "")+"/><span style='font-weight: bold;'>" +
        "                               Damage deposit</span>" +
        "                           </label><br/><br/>" +
        "                           <p style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                               Customers deposit some money during booking. In case they need to pay extra fees after their stay." +
        "                           </p>" +
        "                           <span>How much is to be deposited</span><br/>" +
        "                           <div class='ui left labeled small fluid input'>" +
        "                               <label class='ui small label'>&#8358;</label>" +
        "                               <input id='damage-amount' class='wix-textbox' type='text' value='"+(property.damageamount)+"'/>" +
        "                           </div>" +
        "                       </div>" +


        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <label><input id='early-checkout' type='checkbox' "+(property.earlycheckout ? "checked" : "")+"/>" +
        "                               <span style='font-weight: bold;'>" +
        "                               Early check out</span>" +
        "                           </label><br/><br/>" +
        "                           <p style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                               Enable early check-out. Guest get a refund for the period they don't stay" +
        "                           </p>" +
        "                       </div>" +

        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <label><input id='partial-payment' type='checkbox' "+(property.partialpayment ? "checked" : "")+"/>" +
        "                               <span style='font-weight: bold;'>" +
        "                               Partial payment</span>" +
        "                           </label><br/><br/>" +
        "                           <p style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                               Allow customers make partial payment during booking. They pay the rest at the front desk check they are checking in." +
        "                           </p>" +
        "                           <span>How much is to be deposited</span><br/>" +
        "                           <div class='ui left labeled fluid small input'>" +
        "                               <label class='ui small label'>&#8358;</label>" +
        "                               <input id='partial-pay-amount' class='wix-textbox' type='text' value='"+property.partialpayamount+"'/>" +
        "                           </div><br/><br/>" +
        "                           <label><input id='partial-pay-percent' class='filled-in' type='checkbox' "+(property.partialpayment ? "checked" : "")+"/>" +
        "                           <span>Deposit by percentage</span></label><br/>" +
        "                       </div>" +

        "                       <div class='widget pad-1' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <span style='font-weight: bold;'>Children Policy</span>" +
        "                           <br/><br/>" +
        "                           <p style='color: dimgray; font-family: Lato; line-height: 180%;'>" +
        "                               Any policies on how the hotel handle things like getting extra bed for children and " +
        "                               other children related matters" +
        "                           </p>" +
        "                           <div class='ui form'>" +
        "                               <textarea class='wix-textbox' id='child-policy' rows='2'>"+property.childpolicy+"</textarea>" +
        "                           </div>" +
        "                       </div>" +

        "                       <div id='loaded-rules'></div>" +


        "                           <div id='rules-container'></div>" +

        "                       </div> " +
        "<div style='margin-top: 30px;'>" +
        "<a href='#property-gallery'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='doPropertyRules()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    loadPropertyRules();
}

function loadPropertyRules()
{
    $("#features-con").html(
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>" +
        "<div class='w3-row'>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "<div class='w3-col l6 m6 s12 pad-1'><div class='ui placeholder'><div class='line'></div></div></div>" +
        "</div>"
    );

    postJson(api+"/listpropertyfacilities", function(data, status){
        $("#features-con").html("");
        if(status === "done")
        {
            let d = JSON.parse(data);

            if(d.status === "success")
            {
                for(let i = 0; i < d.data.length; i++)
                {
                    let space = document.createElement("div");
                    space.className = "w3-row";
                    space.style.marginTop = "10px";
                    space.innerHTML = "<div class='w3-col l6 m6 s12'>" +
                        "<label><input class='v-feature' id='"+d.data[i].Facility+"' type='checkbox'><span>"+d.data[i].Facility+"</span></label>" +
                        "</div>";

                    if(d.data.length > (i + 1))
                    {
                        i++;
                        space.innerHTML += "<div class='w3-col l6 m6 s12'>" +
                            "<label><input class='v-feature' id='"+d.data[i].Facility+"' type='checkbox'><span>"+d.data[i].Facility+"</span></label>" +
                            "</div>";
                    }
                    document.getElementById("features-con").appendChild(space);
                }

                for(let i = 0; i < property.facilities.length; i++)
                {
                    getElement(property.facilities[i]).checked = true;
                }
            }
            else
            {

            }
        }
        else
        {

        }
    }, {});
}

function doPropertyRules()
{
    let checks = [];
    let rules = document.getElementsByClassName("rules-check");

    for(let i = 0; i < rules.length; i++)
    {
        if(rules[i].checked)
        {
            checks.push(rules[i]);
        }
    }
    property.checkinH = Number($("#checkin-h").val());
    property.checkinM = Number($("#checkin-m").val());
    property.checkoutH = Number($("#checkout-h").val());
    property.checkoutM = Number($("#checkin-m").val());

    property.cashonly = $("#cash-only").prop("checked");
    property.formType = $("#detailed-form").prop("checked") ? "detailed" : "simple";
    property.cancellation = $("#cancellation").prop("checked");
    property.canceldays = Number($("#cancel-days").val());
    property.cancelhour = Number($("#cancel-hours").val());
    property.damagedeposit = $("#damage-deposite").prop("checked");
    property.damageamount = Number($("#damage-amount").val());
    property.earlycheckout = $("#early-checkout").prop("checked");
    property.partialpayment = $("#partial-payment").prop("checked");
    property.partialpayamount = Number($("#partial-pay-amount").val());
    property.percialpaypercent = $("#partial-pay-percent").prop("checked");
    property.childpolicy = $("#child-policy").val();

    location.hash = "#terms";
}

function drawTerms()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Terms and conditions</h3>" +
        "                           <p style='font-family: Lato;'>Compose terms and conditions for your property</p>" +
        "                       </div>" +
        "                       <div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +
        "                       <div> " +

        "                       <div class='widget'>" +
        "                           <textarea id='terms'></textarea>" +
        "                       </div>" +


        "                           <div id='rules-container'></div>" +

        "                       </div> " +
        "<div style='margin-top: 30px;'>" +
        "<a href='#property-rules'>" +
        "<button class='ui button'><i class='arrow left icon'></i>" +
        "<span style='color: transparent;'>b</span></button></a> &nbsp;" +
        "<button class='ui blue button' onclick='doTerms()'>Next <i class='arrow right icon'></i></button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");

    InitEditor(getElement("terms"));
}

function doTerms()
{
    property.tandc = $("#terms").val();
    location.hash = "#property-overview";
}


function drawPropertyOverView()
{
    $("#listing-page").html(
        "       <div style='margin-top: 50px;'>" +
        "            <div style=''>" +
        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
        "                   <div class='width-5 ui form'>" +
        "                       <div class='widget pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "                           <h3 style='font-family: varela_roundregular;'>Review and agreement</h3>" +
        "                           <p style='font-family: Lato;'>Make sure all the info supplied are correct.</p>" +
        "                       </div>" +
        "<div id='form-error' class='ui error message' style='display: none;'></div>" +
        "                       <br/>" +

        "<div class='w3-row pad-2' style='border: 3px solid rgb(245,245,245);'>" +
        "   <h3 class='sleak' style='margin: 0px;'>Property Info</h3>" +
        "   <p>Name: "+property.name+"<br/> Type: "+property.type+"</p><br/>" +
        "   <h3 class='sleak' style='margin: 0px;'>Location </h3>" +
        "   <p style='margin-bottom: 0;'>"+property.statename+", "+property.cityname+"</p>" +
        "   <p style='margin-top: 0;'>"+property.address+"</p><br/>" +
        "   <h3 class='sleak' style='margin: 0px;'>Facilities at the property</h3>" +
        "   <ul>"+facilitiesList()+"</ul><br/><br/>" +

        "   <h3 class='sleak' style='margin: 0px;'>Agreement</h3>" +
        "   <p>Carefully read and accept <a href='' target='empty'>" +
        "our terms & conditions</a> to continue</p>" +
        "<label><input id='agreement' class='filled-in' type='checkbox'>" +
        "<span>I have read and accepted the terms and conditions</span> </label>" +

        "</div> " +
        "</div> " +

        "<div style='margin-top: 30px;'>" +
        "<a href='#terms'> " +
        "   <button class='ui button'>" +
        "       <i class='arrow left icon'></i>" +
        "       <span style='color: transparent;'>b</span>" +
        "    </button>" +
        "</a>" +
        " &nbsp;" +
        "<button id='save-btn' class='ui blue button' onclick='saveProperty()'><i class='check icon'></i>Done </button> </div>" +


        "                   </div>" +
        "                 </div>" +
        "            </div>" +
        "       </div>");
}

function facilitiesList()
{
    let r = "";
    for(let i = 0; i < property.facilities.length; i++)
    {
        r += "<li>"+property.facilities[i]+"</li>";
    }
    return r;
}

function saveProperty()
{
    if(!$("#agreement").prop("checked"))
    {
        $("#form-error").html("Please read and accept our terms and conditions");
        $("#form-error").transition("drop in");
    }
    else
    {
        loadingButton({btn:"save-btn"});

        postJson(api+"/listproperty", function (data, status) {
            loadingButton({btn:"save-btn", loading:false});
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#listing-page").html(
                        "       <div style='margin-top: 90px;'>" +
                        "            <div style='margin: auto;'>" +
                        "                <div class='w3-row l-width-7' style='margin: auto;'>" +
                        "                   <div class='width-5 ui form'>" +
                        "                       <br/>" +

                        "<div class='w3-row pad-2 align-c' style='border: 3px solid rgb(245,245,245);'>" +
                        "   <img src='images/check_office.png' style='margin-top: 20px; width: 100px;'>" +
                        "   <h3 style='font-family: varela_roundregular;'>Property submitted for approval</h3><br/>" +
                        "   <p style='font-family: Lato; color: dimgray; line-height: 180%;'>" +
                        "       Your property have been submitted for approval. We will notify by mail if your property " +
                        "       is approved or not. If your property is approved, " +
                        "       it will go live and customers will be able to start booking" +
                        "   </p><br/>" +
                        "<a href='partner'><button class='ui button'>My account</button></a><br/><br/>" +
                        "<a href='home'><h5>Go Home</h5></a>" +

                        "</div> " +
                        "</div> " +

                        "                   </div>" +
                        "                 </div>" +
                        "            </div>" +
                        "       </div>");
                }
                else
                {
                    errorButton({btn:"save-btn", msg:d.message});
                }
            }
            else
            {
                errorButton({btn:"save-btn", msg:"Connection error"});
            }
        }, property);
    }
}

