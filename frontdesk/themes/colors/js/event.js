
function saveCustomer(func)
{
    var data = new Object();
    data.name = $("#name").val();
    data.surname = $("#sname").val();
    data.email = $("#email").val();
    data.phone = $("#phone").val();
    data.street = $("#street").val();
    data.city = $("#city").val();
    data.state = $("#state").val();
    data.company = $("#company").val();

    data.password = $("#password").val();
    data.conf = $("#conf").val();

    data.userid = $("#userid").val();

    data.country = $("#country").dropdown('get text');
    data.type = $("#type").dropdown('get value');
    data.agent = $("#agent").dropdown('get value');
    data.group = $("#group").dropdown('get value');

    data.status = $("#status").prop("checked");
    data.notification = $("#notification").prop("checked");
    data.accountpay = $("#pay-on-account").prop("checked");
    data.tax = $("#tax").prop("checked");
    data.notification = $("#notification").prop("checked");

    data.job = "savecustomer";


    let error = false;


    if(data.name == "")
    {
        $("#name-con").addClass("error");
        $("#name-con").transition("shake");
        error = true;
    }
    if(data.surname == "")
    {
        $("#sname-con").addClass("error");
        $("#sname-con").transition("shake");
        error = true;
    }
    if(data.email == "")
    {
        $("#email-con").addClass("error");
        $("#email-con").transition("shake");
        error = true;
    }
    if(data.phone == "")
    {
        $("#phone-con").addClass("error");
        $("#phone-con").transition("shake");
        error = true;
    }
    if(data.city == "")
    {
        $("#city-con").addClass("error");
        $("#city-con").transition("shake");
        error = true;
    }
    if(data.street == "")
    {
        $("#street-con").addClass("error");
        $("#street-con").transition("shake");
        error = true;
    }
    if(data.state == "")
    {
        $("#state-con").addClass("error");
        $("#state-con").transition("shake");
        error = true;
    }
    if(data.password == "")
    {
        $("#password-con").addClass("error");
        $("#password-con").transition("shake");
        error = true;
    }
    $("#errmsg-txt").html("Incomplete Info");
    if(data.password != $("#conf").val())
    {
        $("#conf-con").addClass("error");
        $("#conf-con").transition("shake");

        if(error == true)
        {
            $("#errmsg-txt").html("Incomplete Info");
        }
        else
        {
            $("#errmsg-txt").html("Password's don't match");
        }
        error = true;
    }


    if(error === false)
    {
        $("#save-btn-txt").html("Saving...");
        $("#save-btn-icon").addClass("loading");

        if(document.getElementById("errmsg").style.display == "block")
        {
            $("#errmsg").transition('flip vertical')
        }

        postJson("worker.php", function (data, status)
        {
            $("#save-btn-icon").removeClass("loading");
            $("#save-btn-txt").html("Save");
            if(status == "done")
            {
                var dat = JSON.parse(data);

                if(dat.Status == "SUCCESS")
                {
                    $("#name").val("");
                    $("#sname").val("");
                    $("#email").val("");
                    $("#phone").val("");
                    $("#street").val("");
                    $("#city").val("");
                    $("#state").val("");
                    $("#company").val("");

                    $("#password").val("");
                    $("#conf").val("");

                    $("#status").prop("checked", true);
                    $("#notification").prop("checked", false);
                    $("#pay-on-account").prop("checked", false);
                    $("#tax").prop("checked", false);
                    $("#notification").prop("checked", false);

                    $("#save-btn-i").removeClass("save");
                    $("#save-btn-i").addClass("check");
                    $("#save-btn-txt").html("Saved");

                    setTimeout(function () {
                        $("#save-btn-i").removeClass("check");
                        $("#save-btn-i").addClass("save");
                        $("#save-btn-txt").html("Save");
                        if(typeof func == "function")
                        {
                            func("done");
                        }
                    }, 2000);
                }
                else
                {
                    ShowModal(dat.Message+". Operation Failed");
                    if(typeof func == "function")
                    {
                        func("error");
                    }
                }
            }
            else
            {
                ShowModal("Connection Error. Operation Failed");
                if(typeof func == "function")
                {
                    func("error");
                }
            }
        }, data);
    }
    else
    {
        if((document.getElementById("errmsg").style.display == "none") && (error === true))
        {
            $("#errmsg").transition('flip vertical');
        }
        if(typeof func == "function")
        {
            func("error");
        }
    }
}


function SaveAndBack()
{
    $("#saveback-btn").html("saving...");
    $("#saveback-btn").prop("disabled", true);
    saveCustomer(function(status){
        $("#saveback-btn").html("Save & Go Back");
        $("#saveback-btn").prop("disabled", false);
        if(status == "done")
        {
            location.hash = "#customers";
        }
    });
}



function resetField(e) {
    $("#"+e+"-con").removeClass("error");
}





/// -------------------  Add Category Event ----------------------- ///

function saveCategory(func)
{

    let data = {};
    data.title = WixEncode($("#title").val());
    data.internalTitle = WixEncode($("#int-title").val());
    data.longDescription = WixEncode($('#long-desc').froalaEditor('html.get'));
    data.shortDescription = WixEncode($('#short-desc').froalaEditor('html.get'));
    data.image = $("#img-name").val();
    data.promotionalText = $("#prom-txt").val();
    data.promotionalTextStatus = document.getElementById("prom-txt-stat").checked;
    data.sort = $("#sort").val();
    data.status = document.getElementById("status").checked;
    data.onHome = document.getElementById("onhome").checked;

    data.seoPageTitle = $("#seo-page-title").val();
    data.metaKeyWords = WixEncode($("#seo-keyword").val());
    data.metaDescription = WixEncode($("#meta-desc").val());

    data.categoryId = $("#cat_id").val();

    data.job = "savecategory";

    let error = false;


    if(data.shortDescription == "")
    {
        $("#errmsg-txt").html("Short description is empty");
        error = true;
    }
    if(data.title == "")
    {
        $("#title-con").addClass("error");
        $("#title-con").transition("shake");
        $("#errmsg-txt").html("Title is empty");
        error = true;
    }



    if(error === false)
    {
        $("#save-btn-txt").html("Saving...");
        $("#save-btn-icon").addClass("loading");

        if(document.getElementById("errmsg").style.display == "block")
        {
            $("#errmsg").transition('flip vertical')
        }

        postJson("worker.php", function (data, status) { //alert(data);

            $("#save-btn-icon").removeClass("loading");
            $("#save-btn-txt").html("Save");
            if(status == "done")
            {
                var dat = JSON.parse(data);

                if(dat.Status == "SUCCESS")
                {
                    $("#name").val("");
                    $("#sname").val("");
                    $("#email").val("");
                    $("#phone").val("");
                    $("#street").val("");
                    $("#city").val("");
                    $("#state").val("");
                    $("#company").val("");

                    $("#password").val("");
                    $("#conf").val("");

                    $("#status").prop("checked", true);
                    $("#notification").prop("checked", false);
                    $("#pay-on-account").prop("checked", false);
                    $("#tax").prop("checked", false);
                    $("#notification").prop("checked", false);

                    $("#save-btn-i").removeClass("save");
                    $("#save-btn-i").addClass("check");
                    $("#save-btn-txt").html("Saved");

                    setTimeout(function () {
                        $("#save-btn-i").removeClass("check");
                        $("#save-btn-i").addClass("save");
                        $("#save-btn-txt").html("Save");
                        if(typeof func == "function")
                        {
                            func("done");
                        }
                    }, 2000);
                }
                else
                {
                    ShowModal(dat.Message+". Operation Failed");
                    if(typeof func == "function")
                    {
                        func("error");
                    }
                }
            }
            else
            {
                ShowModal("Connection Error. Operation Failed");
                if(typeof func == "function")
                {
                    func("error");
                }
            }
        }, data);
    }
    else
    {
        if((document.getElementById("errmsg").style.display == "none") && (error === true))
        {
            $("#errmsg").transition('flip vertical');
        }
        if(typeof func == "function")
        {
            func("error");
        }
    }
}


function SaveCategoryAndBack()
{
    $("#saveback-btn").html("saving...");
    $("#saveback-btn").prop("disabled", true);
    saveCategory(function(status){
        $("#saveback-btn").html("Save & Go Back");
        $("#saveback-btn").prop("disabled", false);
        if(status == "done")
        {
            location.hash = "#product-categories";
        }
    });
}







/// -------------------  Add Product Event ----------------------- ///

function saveProduct(func)
{
    let data = {};
    data.title = WixEncode($("#title").val());
    data.internalTitle = WixEncode($("#int-title").val());
    data.Category = $("#prd-cat").val();
    data.PricingMethod = $("#pricing-method").val();
    data.SheetCalculation = document.getElementById("sheet-calc").checked;
    data.sort = $("#sort").val();
    data.status = document.getElementById("status").checked;

    data.BrowseDesign = document.getElementById("browse-design").checked;
    data.CustomDesign = document.getElementById("custom-design").checked;
    data.UploadCenter = document.getElementById("upload-center").checked;
    data.QuoteProduct = document.getElementById("quote-prd").checked;
    data.HireDesigner = document.getElementById("hire-designer").checked;

    data.Retailer = document.getElementById("retailer-type").checked;
    data.AllCoportes = document.getElementById("corp-type").checked;
    data.Coporte = $("#specific-corp").val();

    data.ColorPallet = $("#color-pallet").val();
    data.AdvancedColorPallet = $("#ad-color-pal").val();

    data.StockManagment = "NONE";
    if($("#stck-size-only").prop('checked') === true)
    {
        data.StockManagment = "";
    }
    else if($("#stk-size-product").prop('checked') === true)
    {
        data.StockManagment = "";
    }

    data.onHome = document.getElementById("onhome").checked;
    data.FreeShipping = document.getElementById("free-shipping").checked;
    data.Promotional = document.getElementById("promotional").checked;

    data.ProductionDays = $("#prd-days").val();
    data.SmallImage = $("#small-img").val();
    data.LargeImage = $("#large-img").val();

    data.longDescription = WixEncode($('#long-desc').froalaEditor('html.get'));
    data.shortDescription = WixEncode($('#short-desc').froalaEditor('html.get'));
    data.UploadCenterDescription = WixEncode($('#up-center-desc').froalaEditor('html.get'));
    data.BrowseDescription = WixEncode($('#browse-design-desc').froalaEditor('html.get'));

    data.ProductId = $("#prd_id").val();

    data.job = "saveproduct";

    let error = false;


    if(data.shortDescription == "")
    {
        $("#errmsg-txt").html("Short description is empty");
        error = true;
    }
    if(data.title == "")
    {
        $("#title-con").addClass("error");
        $("#title-con").transition("shake");
        $("#errmsg-txt").html("Product Name is empty");
        error = true;
    }



    if(error === false)
    {
        $("#save-btn-txt").html("Saving...");
        $("#save-btn-icon").addClass("loading");

        if(document.getElementById("errmsg").style.display == "block")
        {
            $("#errmsg").transition('flip vertical')
        }

        postJson("worker.php", function (data, status) { //alert(data);

            $("#save-btn-icon").removeClass("loading");
            $("#save-btn-txt").html("Save");
            if(status == "done")
            {
                var dat = JSON.parse(data);

                if(dat.Status == "SUCCESS")
                {
                    $("#title").val("");
                    $("#int-title").val("");
                    $("#sort").val("");
                    $("#phone").val("");
                    $("#street").val("");
                    $("#city").val("");
                    $("#state").val("");
                    $("#company").val("");

                    $("#password").val("");
                    $("#conf").val("");

                    $("#status").prop("checked", true);
                    $("#promotional").prop("checked", false);
                    $("#free-shipping").prop("checked", false);
                    $("#tax").prop("checked", false);
                    $("#notification").prop("checked", false);

                    $("#save-btn-i").removeClass("save");
                    $("#save-btn-i").addClass("check");
                    $("#save-btn-txt").html("Saved");

                    setTimeout(function () {
                        $("#save-btn-i").removeClass("check");
                        $("#save-btn-i").addClass("save");
                        $("#save-btn-txt").html("Save");
                        if(typeof func == "function")
                        {
                            func("done");
                        }
                    }, 2000);
                }
                else
                {
                    ShowModal(dat.Message+". Operation Failed");
                    if(typeof func == "function")
                    {
                        func("error");
                    }
                }
            }
            else
            {
                ShowModal("Connection Error. Operation Failed");
                if(typeof func == "function")
                {
                    func("error");
                }
            }
        }, data);
    }
    else
    {
        if((document.getElementById("errmsg").style.display == "none") && (error === true))
        {
            $("#errmsg").transition('flip vertical');
        }
        if(typeof func == "function")
        {
            func("error");
        }
    }
}


function SaveProductAndBack()
{
    $("#saveback-btn").html("saving...");
    $("#saveback-btn").prop("disabled", true);
    saveCategory(function(status){
        $("#saveback-btn").html("Save & Go Back");
        $("#saveback-btn").prop("disabled", false);
        if(status == "done")
        {
            location.hash = "#product-categories";
        }
    });
}


function populateCategoryList()
{
    $("#category-loading").html("<div class='ui active inline loader mini'></div>");

    let data = {job:"listcategory"};
    
    postJson("worker.php", function (data, status) {
        $("#category-loading").html("");
        if(status == "done")
        {
            let dat = JSON.parse(data);

            if(dat.Status == "SUCCESS")
            {
                for(var i = 0; i < dat.Content.length; i++)
                {
                    let b = document.createElement("option");
                    b.value = dat.Content[i].CategoryId;
                    b.innerHTML = dat.Content[i].Name;

                    document.getElementById("prd-cat").appendChild(b);
                }
            }
            else
            {
                $("#category-loading").html("<h6 style='color: red; font-size: 14px; display: inline-block;'>Loading Failed. " +
                    "<span style='color: blue; cursor: pointer;' onclick='populateCategoryList()'>Retry</span></h6>");
            }
        }
        else
        {
            $("#category-loading").html("<h6 style='color: red;font-size: 14px; display: inline-block;'>Connection Error. " +
                "<span style='color: blue; cursor: pointer;' onclick='populateCategoryList()'>Retry</span><h6/>");
        }
    }, data);
}



function populateFaqCategoryList()
{
    $("#faq-category-loading").html("<div class='ui active inline loader mini'></div>");

    let data = {job:"listfaqcategory"};

    postJson("worker.php", function (data, status) { //alert(data);
        $("#faq-category-loading").html("");
        if(status == "done")
        {
            let dat = JSON.parse(data);

            if(dat.Status == "SUCCESS")
            {
                for(var i = 0; i < dat.Content.length; i++)
                {
                    let b = document.createElement("option");
                    b.value = dat.Content[i].CategoryId;
                    b.innerHTML = dat.Content[i].Name;

                    document.getElementById("faq-cat").appendChild(b);
                }
            }
            else
            {
                $("#faq-category-loading").html("<h6 style='color: red; font-size: 14px; display: inline-block;'>Loading Failed. " +
                    "<span style='color: blue; cursor: pointer;' onclick='populateFaqCategoryList()'>Retry</span></h6>");
            }
        }
        else
        {
            $("#faq-category-loading").html("<h6 style='color: red;font-size: 14px; display: inline-block;'>Connection Error. " +
                "<span style='color: blue; cursor: pointer;' onclick='populateFaqCategoryList()'>Retry</span><h6/>");
        }
    }, data);
}






/// -------------------  Add FAQ Category Event ----------------------- ///

function saveFaqCategory(func)
{

    let data = {};
    data.title = WixEncode($("#title").val());
    data.sort = $("#sort").val();
    data.status = document.getElementById("status").checked;
    data.categoryId = $("#faq-cat-id").val();

    data.job = "savefaqcategory";

    let error = false;


    if(data.title == "")
    {
        $("#title-con").addClass("error");
        $("#title-con").transition("shake");
        $("#errmsg-txt").html("Title is empty");
        error = true;
    }



    if(error === false)
    {
        $("#save-btn-txt").html("Saving...");
        $("#save-btn-icon").addClass("loading");

        if(document.getElementById("errmsg").style.display == "block")
        {
            $("#errmsg").transition('flip vertical')
        }

        postJson("worker.php", function (data, status) {

            $("#save-btn-icon").removeClass("loading");
            $("#save-btn-txt").html("Save");
            if(status == "done")
            {
                var dat = JSON.parse(data);

                if(dat.Status == "SUCCESS")
                {
                    $("#title").val("");
                    $("#sort").val(0);
                    $("#status").prop("checked", true);

                    $("#save-btn-i").removeClass("save");
                    $("#save-btn-i").addClass("check");
                    $("#save-btn-txt").html("Saved");

                    setTimeout(function () {
                        $("#save-btn-i").removeClass("check");
                        $("#save-btn-i").addClass("save");
                        $("#save-btn-txt").html("Save");
                        if(typeof func == "function")
                        {
                            func("done");
                        }
                    }, 2000);
                }
                else
                {
                    ShowModal(dat.Message+". Operation Failed");
                    if(typeof func == "function")
                    {
                        func("error");
                    }
                }
            }
            else
            {
                ShowModal("Connection Error. Operation Failed");
                if(typeof func == "function")
                {
                    func("error");
                }
            }
        }, data);
    }
    else
    {
        if((document.getElementById("errmsg").style.display == "none") && (error === true))
        {
            $("#errmsg").transition('flip vertical');
        }
        if(typeof func == "function")
        {
            func("error");
        }
    }
}


function SaveFaqCategoryAndBack()
{
    $("#saveback-btn").html("saving...");
    $("#saveback-btn").prop("disabled", true);
    saveFaqCategory(function(status){
        $("#saveback-btn").html("Save & Go Back");
        $("#saveback-btn").prop("disabled", false);
        if(status == "done")
        {
            location.hash = "#faq-categories";
        }
    });
}






/// -------------------  Add FAQ Category Event ----------------------- ///

function saveFaq(func)
{

    let data = {};
    data.question = WixEncode($("#question").val());
    data.answer = WixEncode($('#answer').froalaEditor('html.get'));
    data.sort = $("#sort").val();
    data.category = $("#faq-cat").val();
    data.status = document.getElementById("status").checked;
    data.faqId = $("#faq-id").val();

    data.job = "savefaq";

    let error = false;



    if(data.answer == "")
    {
        $("#title-con").addClass("error");
        $("#title-con").transition("shake");
        $("#errmsg-txt").html("Answer is empty");
        error = true;
    }
    if(data.question == "")
    {
        $("#title-con").addClass("error");
        $("#title-con").transition("shake");
        $("#errmsg-txt").html("Question is empty");
        error = true;
    }
    if(data.category == "")
    {
        $("#title-con").addClass("error");
        $("#title-con").transition("shake");
        $("#errmsg-txt").html("Please select category");
        error = true;
    }



    if(error === false)
    {
        $("#save-btn-txt").html("Saving...");
        $("#save-btn-icon").addClass("loading");

        if(document.getElementById("errmsg").style.display == "block")
        {
            $("#errmsg").transition('flip vertical')
        }

        postJson("worker.php", function (data, status) {

            $("#save-btn-icon").removeClass("loading");
            $("#save-btn-txt").html("Save");
            if(status == "done")
            {
                var dat = JSON.parse(data);

                if(dat.Status == "SUCCESS")
                {
                    $("#question").val("");
                    $("#answer").val("");
                    $("#sort").val(0);
                    $("#status").prop("checked", true);

                    $("#save-btn-i").removeClass("save");
                    $("#save-btn-i").addClass("check");
                    $("#save-btn-txt").html("Saved");

                    setTimeout(function () {
                        $("#save-btn-i").removeClass("check");
                        $("#save-btn-i").addClass("save");
                        $("#save-btn-txt").html("Save");
                        if(typeof func == "function")
                        {
                            func("done");
                        }
                    }, 2000);
                }
                else
                {
                    ShowModal(dat.Message+". Operation Failed");
                    if(typeof func == "function")
                    {
                        func("error");
                    }
                }
            }
            else
            {
                ShowModal("Connection Error. Operation Failed");
                if(typeof func == "function")
                {
                    func("error");
                }
            }
        }, data);
    }
    else
    {
        if((document.getElementById("errmsg").style.display == "none") && (error === true))
        {
            $("#errmsg").transition('flip vertical');
        }
        if(typeof func == "function")
        {
            func("error");
        }
    }
}


function SaveFaqAndBack()
{
    $("#saveback-btn").html("saving...");
    $("#saveback-btn").prop("disabled", true);
    saveFaq(function(status){
        $("#saveback-btn").html("Save & Go Back");
        $("#saveback-btn").prop("disabled", false);
        if(status == "done")
        {
            location.hash = "#faq";
        }
    });
}
