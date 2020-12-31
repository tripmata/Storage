//------- Run Logout --------------------//

    function doLogOut()
    {
        postJson("logout", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    location.hash = "#";
                    location.reload();
                }
                else
                {
                    ShowModal("Application error. Logout Unsuccessfull");
                }
            }
            else
            {
                ShowModal("Connection error. Logout Unsuccessfull");
            }
        },{})
    }




//-----------------  Customers Logic -----------------------------------------------------------//

	function saveCustomer()
	{
		let request = {
			customerid:getElement("customerid").value,
			name:getElement("customer-name").value,
			surname:getElement("customer-surname").value,
			phone:getElement("customer-phone").value,
			email:getElement("customer-email").value,
			sex:getElement("male-customer").checked ? "male" : "female",
			newletter:getElement("sub-newsletter").checked,
			guestid:getElement("guestid").value,
			password:getElement("customer-password").value,
			job:"save customer",
			country:"",
			state:"",
			city:"",
			street:""
		};

		if(getElement("customer-country") != null)
		{
			request.country = getElement("customer-country").value;
		}
		if(getElement("customer-state") != null)
		{
			request.state = getElement("customer-state").value;
		}
		if(getElement("customer-city") != null)
		{
			request.city = getElement("customer-city").value;
		}
		if(getElement("customer-street") != null)
		{
			request.street = getElement("customer-street").value;
		}

		let error = false;
		let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(request.name == "")
		{
			errorButton({btn:"save-customer-btn",msg:"Name is empty"});
			error = true;
		}
		else if(request.surname == "")
		{
			errorButton({btn:"save-customer-btn",msg:"Surname is empty"});
			error = true;
		}
		else if(request.phone == "")
		{
			errorButton({btn:"save-customer-btn",msg:"Invalid phone number"});
			error = true;
		}
		else if((request.password == "") && (request.customerid == ""))
		{
			errorButton({btn:"save-customer-btn",msg:"Password is empty"});
			error = true;
		}
		else if(request.email != "")
		{
			if(!regex.test(request.email))
			{
				errorButton({btn:"save-customer-btn",msg:"Invalid email"});
				error = true;
			}
		}

		if(error == false)
		{
			loadingButton({btn:"save-customer-btn"});

			postJson("hms-admin/worker", function(data, status){

				loadingButton({btn:"save-customer-btn", loading:false});
				if(status == "done")
				{
					let d = JSON.parse(data);

					if(d.status == "success")
					{
						if(d.data == "success")
						{
							$("#customerid").val("");
							$("#customer-name").val("");
							$("#customer-surname").val("");
							$("#customer-phone").val("");
							$("#customer-email").val("");
							$("#customer-password").val("");
							$("#guestid").val("");
							$("#save-customer-btn").addClass("positive");
							$("#save-customer-btn").html("<i class='check icon'></i> Customer Saved");

							setTimeout(function(){
								location.hash = "#customers";
							},2000);
						}
						else
						{
							errorButton({btn:"save-customer-btn",msg:d.message});
						}
					}
					else
					{
						errorButton({btn:"save-customer-btn",msg:"Unable to save data"});
					}
				}
				else
				{
					errorButton({btn:"save-customer-btn",msg:"Connection error"});
				}
			},request);
		}
	}

	function ConfirmGroupCustomerDelete()
	{
		ConfirmModal("Are you sure you want to delete all the selected Customers?", function(choice){
			if(choice === true)
			{
				CustomerGroupDelete();
			}
		});
	}

	function ConfirmCustomerDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the selected Customer?", function(choice, param){
			if(choice === true)
			{
				CustomerListDelete(param);
			}
		}, null, null, e);
	}

	function CustomerGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteCustomer(lst[i].id, function(status, msg){
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status == "done")
					{
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Customers failed to delete");
			}
		}
		else
		{
			ShowModal("No Customers were selected");
		}
	}

	function CustomerListDelete(e)
	{
		$('#'+e+'-btn').addClass('loading');
		DeleteCustomer(e, function(status, msg){
			$('#'+e+'-btn').removeClass('loading');
			if(status == "done")
			{
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				ShowModal(msg);
			}
		});
	}

	function DeleteCustomer(e, func)
	{
		let request = {};
		request.Customerid = e;
		request.job = "delete customer";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function loadEditCustomerData(e)
	{
		$("#page").addClass("ui loading form");
		$("#save-customer-btn").html("<i class='save icon'></i> Save");

		postJson("hms-admin/worker", function(data, status){
			$("#page").removeClass("ui loading form");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					getElement("customerid").value = d.data.Id;
					getElement("customer-name").value = d.data.Name;
					getElement("customer-surname").value = d.data.Surname;
					getElement("customer-phone").value = d.data.Phone;
					getElement("customer-email").value = d.data.Email;
					getElement("male-customer").checked = d.data.Sex == "male" ? true : false;
					getElement("sub-newsletter").checked = d.data.Newsletter;
					getElement("guestid").value = d.data.Guestid;

					if(getElement("customer-country") != null)
					{
						getElement("customer-country").value = d.data.Country;
					}
					if(getElement("customer-state") != null)
					{
						getElement("customer-state").value = d.data.State;
					}
					if(getElement("customer-city") != null)
					{
						getElement("customer-city").value = d.data.City;
					}
					if(getElement("customer-street") != null)
					{
						getElement("customer-street").value = d.data.Street;
					}
				}
				else
				{
					location.hash = "#customers";
					ShowModal(d.message);
				}
			}
			else
			{
				location.hash = "#customers";
				ShowModal("Connectiont error. Unable to load customers data");
			}
		}, {customerid:e, job:"get customer"});
	}

	function processPassport(e)
	{
		cropImage({shape:"circle", file:e.files[0]}, function(blob, URL){
			getElement("passport-photo").src = URL.createObjectURL(blob);

			let img = new File([blob], "file.png");

			loadingButton({btn:"passport-btn"});
			formWorking(true);
			let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
			upload.Upload(function(data, status){
				formWorking(false);
				loadingButton({btn:"passport-btn",loading:false});
				if(status == "done")
				{
					let d = JSON.parse(data);

					if(d.status == "success")
					{
						$("#passport_file").val(d.data);
					}
					else
					{
						getElement("passport-photo").src = "";
						ShowModal("Application error. Unable to upload file please try again");
					}
				}
				else
				{
					getElement("passport-photo").src = "";
					ShowModal("Connection error. Unable to upload file please try again");
				}
			});
		});
	}

	function formWorking(e=false)
	{
		if(e){$("#staff-save-btn").html("A file is uploading");$("#staff-save-btn").prop("disabled", true);}
		else{$("#staff-save-btn").html("<i class='save icon'></i> Save");$("#staff-save-btn").prop("disabled", false);}
	}

	function processFullshot(e)
	{
		cropImage({file:e.files[0]}, function(blob, URL){
				getElement("fullshot-photo").src = URL.createObjectURL(blob);

				let img = new File([blob], "file.png");

				loadingButton({btn:"fullshot-btn"});
				formWorking(true);
				let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
				upload.Upload(function(data, status){
						formWorking(false);
						loadingButton({btn:"fullshot-btn",loading:false});
						if(status === "done")
						{
							let d = JSON.parse(data);

							if(d.status === "success")
							{
									$("#fullshot_file").val(d.data);
							}
							else
							{
									getElement("fullshot-photo").src = "";
									ShowModal("Application error. Unable to upload file please try again");
							}
						}
						else
						{
								getElement("fullshot-photo").src = "";
								ShowModal("Connection error. Unable to upload file please try again");
						}
				});
		});
	}



	//---------------------------   banner managed events  ------------------------------------------//

	function loadBannerEditor()
	{
		let request = {job:'get banner config'};

		postJson("hms-admin/worker", function(data, status)
        {
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					/*if(d.data.Config.enabled === "false")
					{
						$("#banner-edit-page").html("<div class='align-c pad-2'><br/><br/>" +
							"<h3 class='ui icon header sleak-b' style='font-weight: normal; color: dimgray;'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png'/><br/><br/>" +
							"The theme you are using does not support banners</h3><br/><br/>" +
							"</div>");
					}
					else
					{
					 */
						$("#banner-edit-page").html("<div id='banner-edit-con' class='l-pad-3 s-pad-1'>" +
							"<div class='widget lift-1' style='min-height: 300px; position: relative;'>" +

                            "<img id='cover-img' style='width: 100%;'/>" +
                            "<button id='cover-img-btn' class='ui circular icon blue large button' style='position: absolute; bottom: -14px; left: -14px;'" +
                            "onclick=\"document.getElementById('banner-file').click()\">" +
                            "<i class='image icon'></i></button>" +
                            "<input id='banner-file' type='file' onchange='processBanner(this)' style='display: none;'/>" +
							"<input id='fullshot_file' type='hidden' value=''/> "+
                            "</div> " +
							"</div>");


						//if(d.data.Config.text === "enabled")
						//{
							getElement("banner-edit-con").appendChild(div({class:"ui fluid form margin-t-2 w3-container",
									add:"<div class='field w3-col l-width-5'>" +
										"<label class='sleak' style='color: dimgray;'>Main Text</label>" +
										"<textarea id='banner-maintext' class='wix-textbox' rows='4'></textarea>" +
										"</div>"}));

							//if(d.data.Config.subtext === "enabled")
							//{
								getElement("banner-edit-con").appendChild(div({class:"ui form margin-t-3 w3-container",
									add:"<div class='field w3-col l-width-5'>" +
										"<label class='sleak' style='color: dimgray;'>Sub Text</label>" +
										"<textarea id='banner-sub' class='wix-textbox' rows='2'></textarea>" +
										"</div>"}));
							//}
						//}

					//}


					getElement("banner-edit-con").appendChild(div({class:"ui form margin-t-3 w3-container",
						add:"<div class='w3-col l-width-5'>" +
							"<label class='sleak' style='color: dimgray;'>Sort</label> " +
							"<div class='ui input'>" +
							"<input id='banner-sort' type='number' value='0'/>" +
							"</div>" +
							"</div>"}));

					getElement("banner-edit-con").appendChild(div({class:"ui form margin-t-3 w3-container",
						add:"<div class='w3-col l-width-5'>" +
							"<div class='switch'>" +
							"<span>Status</span>" +
							"<label><input id='banner-status' type='checkbox' value='0' checked/><span class='lever'></span></label>" +
							"</div>" +
							"</div>"}));


                    let hueb = [];
                    var elem = $('.color-input');
                    for(let q = 0; q < elem.length; q++)
                    {
                        hueb.push(new Huebee(elem[q]));
                    }

                    /*hueb.on( 'change', function( color ) {
                        back_color(color)
                    });*/

					$(".ui.dropdown").dropdown();


					let arg = getArg();

					if(arg != null)
					{
						loadBanner(arg);
					}
				}
				else
				{
					$("#banner-edit-page").html("<div class='align-c pad-2'><br/><br/>" +
						"<h3 class='ui icon header sleak'><i class='exclamation circle icon' " +
						"style='color: rgba(255,0,0,0.3);'></i>" +
						"Connection error. Unable to load banner configuration</h3><br/><br/>" +
						"<button class='ui green-back sleak compact button' onclick='loadBannerEditor()'>Try again</button> " +
						"</div>");
				}
			}
			else
			{
				$("#banner-edit-page").html("<div class='align-c pad-2'><br/><br/>" +
					"<h3 class='ui icon header sleak'><i class='exclamation circle icon' " +
					"style='color: rgba(255,0,0,0.3);'></i>" +
					"Connection error. Unable to load banner configuration</h3><br/><br/>" +
					"<button class='ui green-back sleak compact button' onclick='loadBannerEditor()'>Try again</button> " +
					"</div>");
			}
		},request);
	}

	function loadBanner(e)
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function(data, status){
			$("#page").removeClass("ui loading form");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#banner-id").val(d.data.Id);
					$("#fullshot_file").val(d.data.Image);
					getElement("cover-img").src = "files/"+d.data.Image;
					$("#banner-maintext").val(d.data.Text);
					$("#banner-sub").val(d.data.Subtext);
					$("#banner-sort").val(d.data.Sort);
					getElement("banner-status").checked = d.data.Status;
				}
				else
				{
					location.hash = "#banners";
					ShowModal("Connection error! Unable to retrieve data. Reload the page and try again");
				}
			}
			else
			{
				location.hash = "#banners";
				ShowModal("Connection error! Unable to retrieve data. Check your onnection and try again");
			}
		},{banner:e, job:"get banner"});
	}

	function processBanner(e)
    {
        cropImage({file:e.files[0],ratio:2.1/1,size:"original"}, function (blob, URL) {

            getElement("cover-img").src = URL.createObjectURL(blob);

            let img = new File([blob], "file.png");

            loadingButton({btn:"cover-img-btn"});
            let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
            upload.Upload(function(data, status){
                formWorking(false);
                loadingButton({btn:"cover-img-btn",loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#fullshot_file").val(d.data);
                    }
                    else
                    {
                        getElement("cover-img").src = "";
                        ShowModal("Application error. Unable to upload file please try again");
                    }
                }
                else
                {
                    getElement("cover-img").src = "";
                    ShowModal("Connection error. Unable to upload file please try again");
                }
            });
        });
    }

    function saveBanner()
	{
		let request = {
			id:$("#banner-id").val(),
			image:$("#fullshot_file").val(),
			main:$("#banner-maintext").val(),
			sub:$("#banner-sub").val(),
			sort:$("#banner-sort").val(),
			status:getElement("banner-status").checked,
			job:"save banner"
		};

		if(request.image === "")
		{
			errorButton({btn:"banner-save-btn", msg:"Select an Image"});
		}
		else if(request.main === "")
		{
			errorButton({btn:"banner-save-btn", msg:"Main text is empty"});
		}
		else if(request.sub === "")
		{
			errorButton({btn:"banner-save-btn", msg:"Subtext is empty"});
		}
		else
		{
			loadingButton({btn:"banner-save-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"banner-save-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#fullshot_file").val("");
						getElement("cover-img").src = "";
						$("#banner-id").val();
						$("#banner-maintext").val("");
						$("#banner-sub").val("");
						$("#banner-sort").val(0);
						getElement("banner-status").checked = true;

						$("#banner-save-btn").html("<i class='check icon'></i> Banner saved");
						$("#banner-save-btn").addClass("disabled positive");
						setTimeout(function () {
							$("#banner-save-btn").html("<i class='plus icon'></i> Save Banner");
							$("#banner-save-btn").removeClass("disabled positive");
						}, 3000);
					}
					else if(d.status === "failed")
					{
						errorButton({btn:"banner-save-btn", msg:"Failed. Reload page & retry"});
					}
					else
					{
						errorButton({btn:"banner-save-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"banner-save-btn", msg:"Connection error"});
				}
			},request);
		}
	}

	function SetBanner_Status(e, id)
	{
		let request = {};
		request.Bannerid = id;
		request.Status = e.checked;
		request.job = "set banner status";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					ShowModal("Unable to save Banner Status");
				}
			}
			else
			{
				ShowModal("Connection error. Unable to save Banner Status");
			}
		}, request);
	}

	function ConfirmGroupBannerDelete()
	{
		ConfirmModal("Are you sure you want to delete all the selected Banners?", function(choice){
			if(choice === true)
			{
				BannerGroupDelete();
			}
		});
	}

	function ConfirmBannerDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the selected Banner?", function(choice, param){
			if(choice === true)
			{
				BannerListDelete(param);
			}
		}, null, null, e);
	}

	function BannerGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				//Loading animation here

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteBanner(lst[i].id, function(status, msg){
					//Stop Animation here
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status == "done")
					{
						//Deletion success
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});

					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Banners failed to delete");
			}
		}
		else
		{
			ShowModal("No Banners were selected");
		}
	}

	function BannerListDelete(e)
	{
		//Loading animation here
		$("#"+e+"-btn").addClass("loading");
		DeleteBanner(e, function(status, msg){
			//Stop Animation here
			$("#"+e+"-btn").removeClass("loading");
			if(status === "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteBanner(e, func)
	{
		let request = {};
		request.Bannerid = e;
		request.job = "delete banner";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else if(d.status === "access denied")
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", "Operation failed. Try again");
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}


    //-------------------- Terms and conditions logic------------------------------//

    function getTermsandConditions()
    {
        $("#tandc-con").html(
            "<div class='ui placeholder'>" +
            "<div class='line'></div> " +
            "<div class='line'></div> " +
            "</div>" +
            "<div class='ui placeholder'>" +
            "<div class='line'></div> " +
            "<div class='line'></div> " +
            "</div>");

        postJson("hms-admin/worker", function (data, status) {
            $("#tandc-con").html("");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    if(d.data === "")
                    {
                        let con ="<h3 class='align-c pad-2' style='font-family: montserratlight; color: silver;'>" +
                            "<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 70px;'/>" +
                            "<br/><br/>Your Terms & Condition is empty. Delete this content and type here</h3>";

						$("#tandc-con").html("<textarea id='tandc-edit-con' style='width: 100%;'>"+con+"</textarea>");
						InitEditor(getElement("tandc-edit-con"));
						$("#tandc-con").removeClass("pad-2");
						$("#tandc-save-btn").removeClass("disabled");
                    }
                    else
                    {
						$("#tandc-con").html("<textarea id='tandc-edit-con' style='width: 100%;'>"+d.data+"</textarea>");
						InitEditor(getElement("tandc-edit-con"));
						$("#tandc-con").removeClass("pad-2");
						$("#tandc-save-btn").removeClass("disabled");
                    }
                }
                else
                {
                    $("#tandc-con").html("<h4 class='align-c' style='font-family: nunitoregular;'>" +
                        "<i class='web icon'></i>Connection Error!</h4>");
                }
            }
            else
            {
                $("#tandc-con").html("<h4 class='align-c' style='font-family: nunitoregular;'>" +
                    "<i class='web icon'></i>Connection Error!</h4>");
            }
        },{job:"get t&c"});
    }

    function saveTandc()
    {
        let request = {
        	content:$("#tandc-edit-con").val(),
			job:"save t&c"
		};

		let store = "<h3 class=\"align-c pad-2\" style=\"font-family: montserratlight; color: silver;\"><img src=\"http://localhost/hotels/cdn/images/icons/pastel/empty_box.png\" style=\"width: 70px;\"><br><br>Your Terms &amp; Condition is empty. Delete this content and type here</h3>";

		if(store === request.content)
		{
			errorButton({btn:"tandc-save-btn",msg:"Invalid content"});
		}
		else
		{
			loadingButton({btn:"tandc-save-btn"});
			postJson("hms-admin/worker", function (data, status) {
				loadingButton({btn:"tandc-save-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#tandc-save-btn").addClass("positive");
						$("#tandc-save-btn").html("<i class='check icon'></i>Document saved");
						setTimeout(function () {
							$("#tandc-save-btn").removeClass("positive");
							$("#tandc-save-btn").html("<i class='save icon'></i>Save");
						}, 3000);
					}
					else
					{
						errorButton({btn:"tandc-save-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"tandc-save-btn", msg:"Connection error"});
				}
			}, request);
		}
    }




	//-------------------- Privacy Policy logic------------------------------//

	function getPrivacyPolicy()
	{
		$("#tandc-con").html(
			"<div class='ui placeholder'>" +
			"<div class='line'></div> " +
			"<div class='line'></div> " +
			"</div>" +
			"<div class='ui placeholder'>" +
			"<div class='line'></div> " +
			"<div class='line'></div> " +
			"</div>");

		postJson(api+"/getprivacypolicy", function (data, status) {
			$("#tandc-con").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(d.data === "")
					{
						let con ="<h3 class='align-c pad-2' style='font-family: montserratlight; color: silver;'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 70px;'/>" +
							"<br/><br/>Your Privacy Policy is empty. Delete this content and type here</h3>";

						$("#tandc-con").html("<textarea id='tandc-edit-con' style='width: 100%;'>"+con+"</textarea>");
						InitEditor(getElement("tandc-edit-con"));
						$("#tandc-con").removeClass("pad-2");
						$("#tandc-save-btn").removeClass("disabled");
					}
					else
					{
						$("#tandc-con").html("<textarea id='tandc-edit-con' style='width: 100%;'>"+d.data+"</textarea>");
						InitEditor(getElement("tandc-edit-con"));
						$("#tandc-con").removeClass("pad-2");
						$("#tandc-save-btn").removeClass("disabled");
					}
				}
				else
				{
					$("#tandc-con").html("<h4 class='align-c' style='font-family: nunitoregular;'>" +
						"<i class='web icon'></i>Connection Error!</h4>");
				}
			}
			else
			{
				$("#tandc-con").html("<h4 class='align-c' style='font-family: nunitoregular;'>" +
					"<i class='web icon'></i>Connection Error!</h4>");
			}
		},{});
	}

	function savePrivacyPolicy()
	{
		let request = {
			content:$("#tandc-edit-con").val(),
			job:"save privacy policy"
		};

		let store = "<h3 class=\"align-c pad-2\" style=\"font-family: montserratlight; color: silver;\"><img src=\"http://localhost/hotels/cdn/images/icons/pastel/empty_box.png\" style=\"width: 70px;\"><br><br>Your Privacy Policy is empty. Delete this content and type here</h3>";

		if(store === request.content)
		{
			errorButton({btn:"tandc-save-btn",msg:"Invalid content"});
		}
		else
		{
			loadingButton({btn:"tandc-save-btn"});
			postJson("hms-admin/worker", function (data, status) {
				loadingButton({btn:"tandc-save-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#tandc-save-btn").addClass("positive");
						$("#tandc-save-btn").html("<i class='check icon'></i>Document saved");
						setTimeout(function () {
							$("#tandc-save-btn").removeClass("positive");
							$("#tandc-save-btn").html("<i class='save icon'></i>Save");
						}, 3000);
					}
					else
					{
						errorButton({btn:"tandc-save-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"tandc-save-btn", msg:"Connection error"});
				}
			}, request);
		}
	}


	//---------------------------------  Faq Logic Zone --------------------------------------//

	function saveFaq()
	{
		let request = {
			faqid:$("#faqid").val(),
			question:$("#faq-question").val(),
			answer:$("#faq-answer").val(),
			sort:$("#faq-sort").val(),
			category:$("#faq-category").val(),
			status:getElement("faq-status").checked,
			job:"save faq"
		};

		if(request.question === "")
		{
			errorButton({btn:"faq-save-btn", msg:"Question is empty"});
		}
		else if(request.answer === "")
		{
			errorButton({btn:"faq-save-btn", msg:"Answer is empty"});
		}
		else if(request.category === "")
		{
			errorButton({btn:"faq-save-btn", msg:"Category is empty"});
		}
		else
		{
			loadingButton({btn:"faq-save-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"faq-save-btn",loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#faqid").val("");
						$("#faq-question").val("");
						$("#faq-answer").val("");
						$("#faq-sort").val(0);
						$("#faq-category").dropdown('set default'),
						getElement("faq-status").checked = false;

						$("#faq-save-btn").html("<i class='check icon'></i> FAQ Saved");
						$("#faq-save-btn").addClass("positive");
						setTimeout(function(){
							$("#faq-save-btn").html("Save FAQ");
							$("#faq-save-btn").removeClass("positive");
						},2000);
					}
					else
					{
						errorButton({btn:"faq-save-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"faq-save-btn", msg:"Connection error"});
				}
			},request);
		}
	}

    function SetFaq_Status(e, id)
    {
        let request = {
            Faqid:id,
            Status:e.checked,
            job:"set faq status"
        };

        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status !== "success")
                {
                    e.checked = !request.Status;
                    ShowModal("Unable to save Faq Status");
                }
            }
            else
            {
                e.checked = !request.Status;
                ShowModal("Connection error. Unable to save Faq Status");
            }
        }, request);
    }


	function viewFaqAnswer(e)
	{
		let r = JSON.parse(unescape(e));

		loadModal({title:"FAQ Answer",size:"m",html:"<div class='pad-2'>" +
		"<div class=''>" +
		"<h6 class='sleak-b blue'>Question</h6>" +
		"<h6>"+r.Question+"</h6>" +
		"</div>" +
		"<div class=''>" +
		"<br/>" +
		"<h6 class='sleak-b blue'>Answer</h6>" +
		"<p style='color: dimgray;'>"+r.Answer+"</p>" +
		"</div>" +
		"</div>"});
	}


	function ConfirmGroupFaqDelete()
	{
		ConfirmModal("Are you sure you want to delete all the selected FAQs?", function(choice){
			if(choice === true)
			{
				FaqGroupDelete();
			}
		});
	}

	function ConfirmFaqDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the selected FAQ?", function(choice, param){
			if(choice === true)
			{
				FaqListDelete(param);
			}
		}, null, null, e);
	}

	function FaqGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteFaq(lst[i].id, function(status, msg){
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status == "done")
					{
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Faqs failed to delete");
			}
		}
		else
		{
			ShowModal("No Faqs were selected");
		}
	}

	function FaqListDelete(e)
	{
		//Loading animation here
		DeleteFaq(e, function(status, msg){
			//Stop Animation here
			//
			if(status === "done")
			{
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				ShowModal(msg);
			}
		});
	}

	function DeleteFaq(e, func)
	{
		let request = {};
		request.Faqid = e;
		request.job = "delete faq";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	let faqCat_modal = null;

	function showfaqcategory()
	{
		loadModal({title:"FAQ Category", size:'l',html:"<div class='pad-1 align-r'>"+
		"<button id='new-cat-btn' class='ui sleak compact blue-back button'>New Category</button>" +
		"</div>" + div({class:"pad-1", add:"<table class='ui basic table'>" +
			"<thead class='sleak'>" +
				"<th>SN</th>" +
				"<th>Name</th>" +
				"<th>Sort</th>" +
				"<th>Status</th>" +
				"<th>Action</th>" +
			"</thead>" +
			"<tbody id='faq-cat-body'>" +

			"</tbody>" +
			"<tfoot>" +
				"<tr>" +
				"<th colspan='1'>" +
				"<h4 class='ui header'>" +
				"<div class='content'>" +
				"<div id='faq-cat-perpage' class='ui inline dropdown'>" +
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
				"<th colspan='6'>" +
				"      <div id='faq-cat-pages' class='ui right floated pagination tiny compact menu'>" +
				"      </div>" +
				"    </th>" +
				"</tr>" +
			"</tfoot>" +
		"</table>"}).outerHTML, onLoaded: function(o){

			$("#faq-cat-perpage").dropdown();
			populateFaqcategory();

			faqCat_modal = o.modal;

			getElement("new-cat-btn").onclick = function(){
				closeGenModal(o.modal, function(){
					showNewfaqcategory();
				});
			};

		}});
	}

	function showNewfaqcategory(o)
	{
		let name = "";
		let sort = 0;
		let status = "checked";
		let id = "";
		let title = "Create New FAQ Category";

		if(o != null)
		{
			if(o.id != null)
			{
				id = o.id;
				title = "Edit FAQ Category";
			}
			if(o.name != null)
			{
				name = o.name;
			}
			if(o.sort != null)
			{
				sort = o.sort;
			}
			if(o.status != null)
			{
				status = o.status ? "checked" : "";
			}
		}

		loadModal({title:title, size:'s',html:"<div class='pad-1 align-r'>"+
		"<button id='new-cat-btn' class='ui sleak compact blue-back button'>Category List</button>" +
		"</div>" + div({class:"pad-2", add:"<div>" +

		"<input id='faq-cat-id' type='hidden' value='"+id+"'/>" +

		"<label>Category Name</label>" +
		"<div class='ui fluid input'><input id='faq-cat-title' class='wix-textbox' type='text' value='"+name+"'/></div><br/>" +
		"<div class='ui fluid labeled input'><label class='ui sleak label'>Sort</label><input id='faq-cat-sort' class='wix-textbox' type='number' value='"+sort+"'/></div><br/>" +
		"<div class='switch'><label><input id='faq-cat-status' type='checkbox' "+status+"/><span class='lever'></span></label>Status</div><br/>" +
		"<div><button id='faq-cat-save-btn' class='ui green-back sleak compact button' onclick='saveFaqCategory()'><i class='save icon'></i>Save</button></div>" +

		"</div>"}).outerHTML, onLoaded: function(o){

			$("#faq-cat-perpage").dropdown();
			populateFaqcategory();

			getElement("new-cat-btn").onclick = function(){
				closeGenModal(o.modal, function(){
					showfaqcategory();
				});
			};

		}});
	}

	function saveFaqCategory()
	{
		let request = {
			catid:$("#faq-cat-id").val(),
			title:$("#faq-cat-title").val(),
			sort:$("#faq-cat-sort").val(),
			status:getElement("faq-cat-status").checked,
			job:"save faq category"
		};

		if(request.title === "")
		{
			errorButton({btn:"faq-cat-save-btn",msg:"Name is empty"});
		}
		else
		{
			loadingButton({btn:"faq-cat-save-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"faq-cat-save-btn",loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#faq-cat-id").val(""),
						$("#faq-cat-title").val(""),
						$("#faq-cat-sort").val(0);
						getElement("faq-cat-status").checked = true;

						$("#faq-cat-save-btn").html("<i class='check icon'></i>Saved");
						$("#faq-cat-save-btn").addClass("positive");
						$("#faq-cat-save-btn").addClass("disabled");

						setTimeout(function(){
							$("#faq-cat-save-btn").html("<i class='save icon'></i>Save");
							$("#faq-cat-save-btn").removeClass("positive");
							$("#faq-cat-save-btn").removeClass("disabled");
						},2000);
					}
					else
					{
						errorButton({btn:"faq-cat-save-btn",msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"faq-cat-save-btn",msg:"Connection error"});
				}
			},request);
		}
	}

	function editFaqcategory(o)
    {
        let res = JSON.parse(unescape(o));
        let r = {id:res.Id, name:res.Name, sort:res.Sort, status:res.Status};

        closeGenModal(faqCat_modal, function(){
            showNewfaqcategory(r);
        });
    }


    function SetFaqcategory_Status(e, id)
    {
        let request = {};
        request.Faqcategoryid = id;
        request.Status = e.checked;
        request.job = "set faq category status";

        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status !== "success")
                {
                    e.checked = !request.Status;
                    ShowModal("Unable to save Faqcategory Status");
                }
            }
            else
            {
                ShowModal("Connection error. Unable to save Faqcategory Status");
            }
        }, request);
    }

	function ConfirmFaqcategoryDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the FAQ category?", function(choice, param){
			if(choice === true)
			{
				FaqcategoryListDelete(param);
			}
		}, null, null, e);
	}

	function FaqcategoryListDelete(e)
	{
		//Loading animation here
        $("#faqcat-del-btn-"+e).removeClass("trash");
        $("#faqcat-del-btn-"+e).addClass("spinner");
        $("#faqcat-del-btn-"+e).addClass("loading");
		DeleteFaqcategory(e, function(status, msg){
			//Stop Animation here
            $("#faqcat-del-btn-"+e).addClass("trash");
            $("#faqcat-del-btn-"+e).removeClass("spinner");
            $("#faqcat-del-btn-"+e).removeClass("loading");
			if(status == "done")
			{
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				ShowModal(msg);
			}
		});
	}

	function DeleteFaqcategory(e, func)
	{
		let request = {};
		request.Faqcategoryid = e;
		request.job = "delete faq category";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	//------------------------   Doing Content Logic --------------------------------//

	function processGalleryImage(e, id)
	{
		cropImage({file:e.files[0], ratio:1/1}, function(blob, URL, n){

            getElement("gallery-image-"+n.toString()).src = URL.createObjectURL(blob);

            let img = new File([blob], "file.png");

            loadingButton({btn:"gallery-btn-"+n.toString()});
            let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
            upload.Upload(function(data, status){
                loadingButton({btn:"gallery-btn-"+n.toString(),loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#gallery-image-name-"+n.toString()).val(d.data);
						activateGallery(n);
						saveGallery(n);
						checkGalleryPlaceholders();
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

	function saveGallery(n)
	{
		let request = {
			galleryid:$("#gallery-id-"+n).val(),
			image:$("#gallery-image-name-"+n).val(),
			heading:$("#gallery-heading-"+n).val(),
			description:$("#gallery-description-"+n).val(),
			status:getElement("gallery-status-"+n).checked,
            sort:$("#gallery-sort-"+n).val(),
			job:"save gallery"
		};

		$("#gallery-status-text-"+n).html("<div class='ui inline active mini loader'></div> Saving");
		$("#gallery-status-text-"+n).css("color","deepskyblue");

		postJson("hms-admin/worker",function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
                    $("#gallery-id-"+n).val(d.data);
                    $("#gallery-status-text-"+n).html("<i class='check icon'></i> Saved");
                    $("#gallery-status-text-"+n).css("color","forestgreen");
                    setTimeout(function () {
                        $("#gallery-status-text-"+n).html("Pending");
                        $("#gallery-status-text-"+n).css("color","silver");
                    }, 3000);
				}
				else
				{
                    $("#gallery-status-text-"+n).html("<i class='times red icon'></i> Error " +
                        "<span style='color: blue; cursor: pointer;' onclick=\"saveGallery('"+n+"')\">Try again</span>");
                    $("#gallery-status-text-"+n).css("color","red");
				}
			}
			else
			{
                $("#gallery-status-text-"+n).html("<i class='times red icon'></i> Error " +
                    "<span style='color: blue; cursor: pointer;' onclick=\"saveGallery('"+n+"')\">Try again</span>");
                $("#gallery-status-text-"+n).css("color","red");
			}
		},request);
	}

	function addGalleryPlaceholder(i)
	{
		getElement("gallery-content").appendChild(div({
			add:"<div id='gallery-item-"+i+"' class='w3-col l3 m6 s12 pad-1 galeries'>" +

				"<div class='lift-1'>" +

				"<input id='gallery-id-"+i+"' type='hidden' value=''/>" +
				"<input id='gallery-image-name-"+i+"' type='hidden' value=''/>" +

				"<div style='height: 200px; background-color: whitesmoke; position: relative; border-radius: 0px;'>" +
				"<img id='gallery-image-"+i+"' src='' style='width: 100%;'/>" +
                "<div id='gallery-sort-con-"+i+"' class='ui mini labeled input' " +
                "style='background-color: transparent; position: absolute; left: 0px; top: 0px; display: none;'> " +
                "<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
                "<input id='gallery-sort-"+i+"' type='number' value='0' " +
                "style='width: 60px; border-radius: 0px;'  onchange=\"saveGallery('"+i+"')\"/>" +
                "</div>" +
				"<button id='gallery-btn-"+i+"' class='ui circular icon green-back button' "+
				"style='position: absolute; top: 0px; right: 0px;' onclick=\"getElement('gallery-file-"+i+"').click()\">" +
				"<i class='image icon'></i></button>" +
				"<button id='gallery-delete-btn-"+i+"' class='ui circular icon red button' "+
				"style='position: absolute; top: 0px; right: 30px; display: none;' onclick=\"confirmGalleryItemDelete('"+i+"')\">" +
				"<i class='trash icon'></i></button>" +
				"<input id='gallery-file-"+i+"' type='file' onchange=\"processGalleryImage(this, '"+i+"')\" style='display: none;'/>" +
				"</div>" +
				"<div class='pad-1'>" +
				"<div class='ui fluid input'>" +
				"<input id='gallery-heading-"+i+"' class='wix-textbox' type='textbox' placeholder='Heading' style='margin-top: 5px; border-radius: 0px;'" +
                " onchange=\"saveGallery('"+i+"')\" onkeyup='checkGalleryPlaceholders()'/>" +
				"</div>" +
				"<div class='ui form' style='margin-top: 5px;'>" +
					"<div class='field'>" +
						"<textarea id='gallery-description-"+i+"' class='wix-textbox' rows='1' placeholder='short description'" +
                        " onchange=\"saveGallery('"+i+"')\" onkeyup='checkGalleryPlaceholders()' style='border-radius: 0px;'></textarea>" +
					"</div>" +
				"</div>" +
				"<div class='switch' style='float: right; margin-top: 5px;'>" +
                "<label>" +
                "<input type='checkbox' id='gallery-status-"+i+"' checked disabled onchange=\"saveGallery('"+i+"')\"/><span class='lever'></span></label></div>" +
				"<h6 id='gallery-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
				"</div>" +

				"</div>" +

			"</div>"
			}));
	}

	function removeGalleryPlaceholder(i)
	{
		if(getElement("gallery-item-"+i) != null)
		{
			getElement("gallery-content").removeChild(getElement("gallery-item-"+i));
		}
	}

	function checkGalleryPlaceholders()
	{
		let g = document.getElementsByClassName("galeries");

		let empty = false;

		let i = 0;

		for(let j = 0; j < g.length; j++)
		{
			i = g[j].id.split("gallery-item-")[1];

            if(($("#gallery-heading-"+i).val() === "") && ($("#gallery-description-"+i).val() === "") && ($("#gallery-image-name-"+i).val() === ""))
            {
                empty = true;
            }
		}

		i = Number(i) + 1;

		if(empty === false)
		{
		    addGalleryPlaceholder(i);
		}
	}

	function activateGallery(n)
	{
		$("#gallery-status-"+n).prop("disabled", false);
		$("#gallery-delete-btn-"+n).show();
		$("#gallery-sort-con-"+n).show();
	}

	function confirmGalleryItemDelete(e)
    {
        ConfirmModal("Are you sure you want to delete the gallery item?",function(choice, param){
            if(choice)
            {
                deleteGallery(param);
            }
        },null,null,e);
    }

    function deleteGallery(e)
    {
        loadingButton({btn:"gallery-delete-btn-"+e});

        postJson("hms-admin/worker", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#gallery-item-"+e).transition("flip horizontal out", function () {
                        removeGalleryPlaceholder(e);
                    });
                }
                else
                {
                    ShowModal(d.message);
                }
            }
            else
            {
                ShowModal("Connection error. Unable to delete ");
            }
        }, {job:"delete gallery item", galleryId:$("#gallery-id-"+e).val()})

    }


	//--------------------------------- Testimonials -----------------------------------------------------------------//

	function processTestimonialImage(e, id)
	{
		cropImage({file:e.files[0], ratio:1/1}, function(blob, URL, n){

			getElement("testimonial-image-"+n.toString()).src = URL.createObjectURL(blob);

			let img = new File([blob], "file.png");

			loadingButton({btn:"testimonial-btn-"+n.toString()});
			let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
			upload.Upload(function(data, status){
				loadingButton({btn:"testimonial-btn-"+n.toString(),loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#testimonial-image-name-"+n.toString()).val(d.data);
						activateTestimonial(n);
						saveTestimonial(n);
						checkTestimonialPlaceholders();
					}
					else
					{
						getElement("testimonial-image-"+n.toString()).src = "";
						ShowModal("Application error. Unable to upload file please try again");
					}
				}
				else
				{
					getElement("testimonial-image-"+n.toString()).src = "";
					ShowModal("Connection error. Unable to upload file please try again");
				}
			});
		}, id);
	}


	function ratingSaveTestimonial(e)
	{
		setTimeout(function(){
			saveTestimonial(e);
		},500);
	}

	function saveTestimonial(n)
	{
		let request = {
			teamid:$("#testimonial-id-"+n).val(),
			image:$("#testimonial-image-name-"+n).val(),
			name:$("#testimonial-name-"+n).val(),
			testimony:$("#testimonial-description-"+n).val(),
			status:getElement("testimonial-status-"+n).checked,
			sort:$("#testimonial-sort-"+n).val(),
			rating:$("#testimonial-rating-"+n).rating("get rating"),
			job:"save testimonial"
		};

		$("#testimonial-status-text-"+n).html("<div class='ui inline active mini loader'></div> Saving");
		$("#testimonial-status-text-"+n).css("color","deepskyblue");

		postJson("hms-admin/worker",function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#testimonial-id-"+n).val(d.data);
					$("#testimonial-status-text-"+n).html("<i class='check icon'></i> Saved");
					$("#testimonial-status-text-"+n).css("color","forestgreen");
					setTimeout(function () {
						$("#testimonial-status-text-"+n).html("Pending");
						$("#testimonial-status-text-"+n).css("color","silver");
					}, 3000);
				}
				else
				{
					$("#testimonial-status-text-"+n).html("<i class='times red icon'></i> Error " +
						"<span style='color: blue; cursor: pointer;' onclick=\"saveTeam('"+n+"')\">Try again</span>");
					$("#testimonial-status-text-"+n).css("color","red");
				}
			}
			else
			{
				$("#testimonial-status-text-"+n).html("<i class='times red icon'></i> Error " +
					"<span style='color: blue; cursor: pointer;' onclick=\"saveTeam('"+n+"')\">Try again</span>");
				$("#testimonial-status-text-"+n).css("color","red");
			}
		},request);
	}

	function addTestimonialPlaceholder(i)
	{
		getElement("testimonial-content").appendChild(div({
			add:"<div id='testimonial-item-"+i+"' class='w3-row pad-1 testimonial' style=''>" +

				"<div class='lift-1'>" +

				"<input id='testimonial-id-"+i+"' type='hidden' value=''/>" +
				"<input id='testimonial-image-name-"+i+"' type='hidden' value=''/>" +


				"<div class='w3-col l2 m2 s12 pad-2'>" +
				"<div class='switch' style='float: right; margin-top: 5px;'>" +
				"<label>" +
				"<input type='checkbox' id='testimonial-status-"+i+"' disabled checked onchange=\"saveTestimonial('"+i+"')\"/><span class='lever'></span></label>" +
				"</div>" +
				"<h6 id='testimonial-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
				"<br/>" +
				"<div id='testimonial-sort-con-"+i+"' class='ui mini fluid labeled input' " +
				"style='display: none;'> " +
				"<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
				"<input id='testimonial-sort-"+i+"' type='number' value='0' " +
				"style='width: 60px; border-radius: 0px;'  onchange=\"saveTestimonial('"+i+"')\"/>" +
				"</div><br/>" +

				"<div id='testimonial-rating-"+i+"' data-max-rating='5' class='ui star rating' onclick=\"ratingSaveTestimonial('"+i+"')\"></div> "+

				"<br/>" +
				"<button id='testimonial-delete-btn-"+i+"' class='ui circular icon red button' "+
				"style='left: 30px; display: none;' onclick=\"confirmTestimonialItemDelete('"+i+"')\">" +
				"<i class='trash icon'></i></button>" +

				"</div> " +


				"<div class='w3-col l3 m3 s12 pad-2'>" +
				"<div class='l-width-l m-width-xl' style='height: 200px; background-color: whitesmoke; position: relative; border-radius: 0px;'>" +
				"<img id='testimonial-image-"+i+"' src='' style='width: 100%;'/>" +
				"<button id='testimonial-btn-"+i+"' class='ui circular icon green-back button' "+
				"style='position: absolute; top: 0px; left: 0px;' onclick=\"getElement('testimonial-file-"+i+"').click()\">" +
				"<i class='image icon'></i></button>" +
				"<input id='testimonial-file-"+i+"' type='file' onchange=\"processTestimonialImage(this, '"+i+"')\" style='display: none;'/>" +
				"<input id='testimonial-image-name-"+i+"' type='hidden' value=''/>" +
				"</div>" +
				"</div>" +


				"<div class='w3-col l7 m7 s12 pad-2'>" +
				"<div class=''>" +
				"<div class='ui fluid input'>" +
				"<input id='testimonial-name-"+i+"' class='wix-textbox' type='textbox' placeholder='Name' style='margin-top: 5px; border-radius: 0px;'" +
				" onchange=\"saveTestimonial('"+i+"')\" onkeyup='checkTestimonialPlaceholders()'/>" +
				"</div>" +
				"<div class='ui form' style='margin-top: 5px;'>" +
				"<div class='field'>" +
				"<textarea id='testimonial-description-"+i+"' class='wix-textbox' rows='3' placeholder='Testimony'" +
				" onchange=\"saveTestimonial('"+i+"')\" onkeyup='checkTestimonialPlaceholders()' style='border-radius: 0px;'></textarea>" +
				"</div>" +
				"</div>" +

				"</div>" +
				"</div>" +

				"</div>" +

				"</div>"
		}));
	}

	function removeTestimonialPlaceholder(i)
	{
		if(getElement("team-item-"+i) != null)
		{
			getElement("team-content").removeChild(getElement("testimonial-item-"+i));
		}
	}

	function checkTestimonialPlaceholders()
	{
		let g = document.getElementsByClassName("testimonial");

		let empty = false;

		let i = 0;

		for(let j = 0; j < g.length; j++)
		{
			i = g[j].id.split("testimonial-item-")[1];

			if(($("#testimonial-name-"+i).val() === "") && ($("#testimonial-description-"+i).val() === "") && ($("#testimonial-image-name-"+i).val() === ""))
			{
				empty = true;
			}
		}

		i = Number(i) + 1;

		if(empty === false)
		{
			addTestimonialPlaceholder(i);
		}
	}

	function activateTestimonial(n)
	{
		$("#testimonial-status-"+n).prop("disabled", false);
		$("#testimonial-delete-btn-"+n).show();
		$("#testimonial-sort-con-"+n).show();
		$("#testimonial-rating-"+n).show();
		$("#testimonial-rating-"+n).rating({maxRating: 5});
	}

	function confirmTestimonialItemDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the testimonial?",function(choice, param){
			if(choice)
			{
				deleteTestimonial(param);
			}
		},null,null,e);
	}

	function deleteTestimonial(e)
	{
		loadingButton({btn:"testimonial-delete-btn-"+e});

		postJson("hms-admin/worker", function (data, status) {
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#testimonial-item-"+e).transition("flip vertical out", function () {
						removeTestimonialPlaceholder(e);
					}) ;
				}
				else
				{
					ShowModal(d.message);
				}
			}
			else
			{
				ShowModal("Connection error. Unable to delete ");
			}
		}, {job:"delete testimonial item", testimonialId:$("#testimonial-id-"+e).val()})

	}


	///------------------------------ About us logic ---------------------------------///
	function getAboutUs()
	{
		$("#aboutus-con").html(
			"<div class='ui placeholder'>" +
			"<div class='line'></div> " +
			"<div class='line'></div> " +
			"</div>" +
			"<div class='ui placeholder'>" +
			"<div class='line'></div> " +
			"<div class='line'></div> " +
			"</div>");

		postJson("hms-admin/worker", function (data, status) {
			$("#aboutus-con").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(d.data === "")
					{
						let con ="<h3 class='align-c pad-2' style='font-family: montserratlight; color: silver;'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 70px;'/>" +
							"<br/><br/>About Us page is empty. Delete this content and type here</h3>";

						$("#aboutus-con").html("<textarea id='about-us-edit-con' style='width: 100%;'>"+con+"</textarea>");
						InitEditor(getElement("about-us-edit-con"));
						$("#aboutus-con").removeClass("pad-2");
						$("#about-us-save-btn").removeClass("disabled");
					}
					else
					{
						$("#aboutus-con").html("<textarea id='about-us-edit-con' style='width: 100%;'>"+d.data+"</textarea>");
						InitEditor(getElement("about-us-edit-con"));
						$("#aboutus-con").removeClass("pad-2");
						$("#about-us-save-btn").removeClass("disabled");
					}
				}
				else
				{
					$("#aboutus-con").html("<h4 class='ui center aligned icon sleak header' style='font-family: nunitoregular;'>" +
						"<i class='ban icon' style='color: rgba(255,0,0,0.1)'></i>Connection Error!</h4>");
				}
			}
			else
			{
				$("#aboutus-con").html("<h4 class='align-c' style='font-family: nunitoregular;'>" +
					"<i class='web icon'></i>Connection Error!</h4>");
			}
		},{job:"get about us"});
	}

	function saveAboutUs()
	{
		let request = {
			content:$("#about-us-edit-con").val(),
			job:"save about us"
		};

		let store = "<h3 class=\"align-c pad-2\" style=\"font-family: montserratlight; color: silver;\">" +
			"<img src=\""+host+"cdn/images/icons/pastel/empty_box.png\" style=\"width: 70px;\">" +
			"<br><br>About Us page is empty. Delete this content and type here</h3>";

		if(store === request.content)
		{
			errorButton({btn:"about-us-save-btn",msg:"Invalid content"});
		}
		else
		{
			loadingButton({btn:"about-us-save-btn"});
			postJson("hms-admin/worker", function (data, status) {
				loadingButton({btn:"about-us-save-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#about-us-save-btn").addClass("positive");
						$("#about-us-save-btn").html("<i class='check icon'></i>Document saved");
						setTimeout(function () {
							$("#about-us-save-btn").removeClass("positive");
							$("#about-us-save-btn").html("<i class='save icon'></i>Save");
						}, 3000);
					}
					else
					{
						errorButton({btn:"about-us-save-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"about-us-save-btn", msg:"Connection error"});
				}
			}, request);
		}
	}



  //------------------------- admin security logic ----------------------------------------------//

    function saveUserPassword()
    {
        let request = {
            password:$("#admin-user-password").val(),
            job:"save admin password"
        };

        if(request.password === "")
        {
            errorButton({btn:"save-admin-pass-btn", msg:"Password is empty"});
        }
        else if(request.password !== $("#admin-user-password-conf").val())
        {
            errorButton({btn:"save-admin-pass-btn", msg:"Passwords don't match"});
        }
        else
        {
            loadingButton({btn:"save-admin-pass-btn"});
            postJson("hms-admin/worker", function(data, status){
                loadingButton({btn:"save-admin-pass-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#admin-user-password").val("");
                        $("#admin-user-password-conf").val("");

                        $("#save-admin-pass-btn").addClass("positive");
                        $("#save-admin-pass-btn").html("<i class='check icon'></i> Password saved");
                        setTimeout(function(){
                            $("#save-admin-pass-btn").removeClass("positive");
                            $("#save-admin-pass-btn").html("Save Password");
                        },3000);
                    }
                    else
                    {
                        errorButton({btn:"save-admin-pass-btn", msg:d.message});
                    }
                }
                else
                {
                    errorButton({btn:"save-admin-pass-btn", msg:"Connection error"});
                }
            },request);
        }
    }

    function saveAdminUsername()
    {
        let request = {
            username:$("#username").val(),
            job:"save admin username"
        };

        if(request.username === "")
        {
            errorButton({btn:"save-admin-user-btn", msg:"Username is empty"});
        }
        else
        {
            loadingButton({btn:"save-admin-user-btn"});
            postJson("hms-admin/worker", function(data, status){
                loadingButton({btn:"save-admin-user-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#username").val("");

                        $("#save-admin-user-btn").addClass("positive");
                        $("#save-admin-user-btn").html("<i class='check icon'></i> Username saved");
                        setTimeout(function(){
                            $("#save-admin-user-btn").removeClass("positive");
                            $("#save-admin-user-btn").html("Save Username");
                        },3000);
                    }
                    else
                    {
                        ShowModal(d.message);
                    }
                }
                else
                {
                    errorButton({btn:"save-admin-user-btn", msg:"Connection error"});
                }
            },request);
        }
    }

    //---------------------- General settings logic -------------------------------------//

	function uploadLogo(e)
	{
		loadingButton({btn:"logo-upload-btn"});

		let upload = new WixUpload({file:e.files[0], url:phpvars.STORAGE_API_URL + "upload/files"});
		upload.Upload(function(data, status){
			loadingButton({btn:"logo-upload-btn", loading:false});
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					getElement("logo-img").src = URL.createObjectURL(e.files[0]);
					saveLogo(d.data);
				}
				else
				{
					ShowModal(d.message);
				}
			}
			else
			{
				ShowModal("Connection error. Unable to upload the seleced logo");
			}
		});
	}

	function saveLogo(e)
	{
		$("#logo-save-status").html("<div class='ui mini inline active loader'></div> Saving...");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#logo-save-status").html("<span class='green-txt'><i class='check icon'></i> Saved</span>");
					setTimeout(function(){
						$("#logo-save-status").html("Saved");
					},3000);
				}
				else
				{
					getElement("logo-img").src = "";
					ShowModal(d.message);
					$("#logo-save-status").html("<span class='red-txt'><i class='times icon'></i> Failed</span>");
				}
			}
			else
			{
				getElement("logo-img").src = "";
				ShowModal("Connection error. Unabl to save logo");
				$("#logo-save-status").html("<span class='red-txt'><i class='times icon'></i> Failed</span>");
			}
		},{job:"save logo", logo:e});
	}
	
	function  saveWebfrontSettings()
	{
		if(loadingSettings == false)
		{
			let request = {
				primarycolor:$("#primary-color").val(),
				secondarycolor:$("#secondary-color").val(),
				primaryfont:$("#primary-font").dropdown("get value"),
				secondaryfont:$("#secondary-font").dropdown("get value"),
				boldfont:$("#bold-font").dropdown("get value"),
				sleakfont:$("#sleak-font").dropdown("get value"),
				job:"save webfront settings"
			};

			$("#webfront-save-label").html("<div class='ui mini inline active loader'></div> saving...");
			postJson("hms-admin/worker", function(data, status){
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#webfront-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
						setTimeout(function(){
							$("#webfront-save-label").html("Saved");
						},3000);
					}
					else
					{
						$("#webfront-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span> " +
						"<span style='color: blue; cursor: pointer;' onclick='saveWebfrontSettings()'>try again</span>");
					}
				}
				else
				{
					$("#webfront-save-label").html("<span style='color: forestgreen;'><i class='times icon'></i> Failed. Connection error " +
						"<span style='color: blue; cursor: pointer;' onclick='saveWebfrontSettings()'>try again</span></span>");
				}
			},request);
		}
	}

	function  saveWebfrontInfo()
	{
		if(loadingSettings == false)
		{
			let request = {
				hotelname:$("#hotel-name").val(),
				phone1:$("#hotel-phone1").val(),
				phone2:$("#hotel-phone2").val(),
				email1:$("#hotel-email1").val(),
				email2:$("#hotel-email2").val(),
				country:$("#hotel-country").dropdown("get value"),
				state:$("#hotel-state").val(),
				city:$("#hotel-city").val(),
				address:$("#hotel-adddress").val(),
				job:"save webfront info"
			};

			$("#webfront-info-save-label").html("<div class='ui mini inline active loader'></div> saving...");
			postJson("hms-admin/worker", function(data, status){
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#webfront-info-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
						setTimeout(function(){
							$("#webfront-save-label").html("Saved");
						},3000);
					}
					else
					{
						$("#webfront-info-save-label").html("<span style='color: red;'><i class='times icon'></i> Failed " +
						"<span style='color: blue; cursor: pointer;' onclick='saveWebfrontInfo()'>try again</span></span>");
					}
				}
				else
				{
					$("#webfront-info-save-label").html("<span style='color: red;'><i class='times icon'></i> Failed. Connection error " +
						"<span style='color: blue; cursor: pointer;' onclick='saveWebfrontInfo()'>try again</span></span>");
				}
			},request);
		}
	}

	function saveCustomersSettings()
	{
		let request = {
			collectaddress:getElement("customersaddress").checked,
			allowselfmgt:getElement("customersselfngt").checked,
			job:"save customers settings"
		};

		$("#customer-settings-save-label").html("<div class='ui mini inline active loader'></div> saving...");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#customer-settings-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
					setTimeout(function(){
						$("#customer-settings-save-label").html("Saved");
					},3000);
				}
				else
				{
					$("#customer-settings-save-label").html("<span style='color: red;'><i class='times icon'></i> " + d.message +
						"<span style='color: blue; cursor: pointer;' onclick='saveCuestomersSettings()'>try again</span></span>");
				}
			}
			else
			{
				$("#customer-settings-save-label").html("<span style='color: red;'><i class='times icon'></i> Failed. Connection error " +
					"<span style='color: blue; cursor: pointer;' onclick='saveCuestomersSettings()'>try again</span></span>");
			}
		},request);
	}

	function saveLogoNameSettings()
	{
		let request = {
			showlogo:getElement("showlogo").checked,
			showname:getElement("showtextname").checked,
			job:"save logoname settings"
		};

		$("#logoname-save-label").html("<div class='ui mini inline active loader'></div> saving...");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#logoname-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
					setTimeout(function(){
						$("#logoname-save-label").html("Saved");
					},3000);
				}
				else
				{
					$("#logoname-save-label").html("<span style='color: red;'><i class='times icon'></i> " + d.message +
						"<span style='color: blue; cursor: pointer;' onclick='saveLogoNameSettings()'>try again</span></span>");
				}
			}
			else
			{
				$("#logoname-save-label").html("<span style='color: red;'><i class='times icon'></i> Failed. Connection error " +
					"<span style='color: blue; cursor: pointer;' onclick='saveLogoNameSettings()'>try again</span></span>");
			}
		},request);
	}

	function saveGuestFormSettings()
	{
		let form = "SIMPLE";
		if(getElement("intermediary-check").checked)
		{
			form = "INTERMEDIARY";
		}
		else if(getElement("detailed-check").checked)
		{
			form = "DETAILED";
		}

		let request = {
			collectaddress:form,
			job:"save guestform settings"
		};

		$("#guestform-save-label").html("<div class='ui mini inline active loader'></div> saving...");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#guestform-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
					setTimeout(function(){
						$("#guestform-save-label").html("Saved");
					},3000);
				}
				else
				{
					$("#guestform-save-label").html("<span style='color: red;'><i class='times icon'></i> " + d.message +
						"<span style='color: blue; cursor: pointer;' onclick='saveGuestFormSettings()'> try again</span></span>");
				}
			}
			else
			{
				$("#guestform-save-label").html("<span style='color: red;'><i class='times icon'></i> Failed. Connection error " +
					"<span style='color: blue; cursor: pointer;' onclick='saveGuestFormSettings()'>try again</span></span>");
			}
		},request);
	}





	//------------------------------------ Iintegration Logic -------------------------------//

	function saveSocialIntegration()
	{
		let request = {
			facebook:$("#facebook-integration").val(),
			twitter:$("#twitter-integration").val(),
			google:$("#google-integration").val(),
			linkedin:$("#linkedin-integration").val(),
			whatsapp:$("#whatsapp-integration").val(),
			telegram:$("#telegram-integration").val(),
			instagram:$("#instagram-integration").val(),
			job:"save social integration"
		};

		$("#social-integration-status").html("<div class='ui mini inline active loader'></div> Saving...");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#social-integration-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
					setTimeout(function () {
						$("#social-integration-status").html("Saved");
					}, 3000);
				}
				else
				{
					$("#social-integration-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
						"<span style='color: blue;' onclick='saveSocialIntegration()'>try again</span> </span>");
				}
			}
			else
			{
				$("#social-integration-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
					"Connection error <span style='color: blue;' onclick='saveSocialIntegration()'>try again</span> </span>");
			}
		},request);
	}

	function saveLivechatIntegration()
    {
        let request = {
            livechat:$("#live-chat-integration").val(),
            job:"save livechat integration"
        };

        $("#livechat-integration-status").html("<div class='ui mini inline active loader'></div> Saving...");
        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#livechat-integration-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
                    setTimeout(function () {
                        $("#livechat-integration-status").html("Saved");
                    }, 3000);
                }
                else
                {
                    $("#livechat-integration-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
                        "<span style='color: blue;' onclick='saveLivechatIntegration()'>try again</span> </span>");
                }
            }
            else
            {
                $("#livechat-integration-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
                    "Connection error <span style='color: blue;' onclick='saveLivechatIntegration()'>try again</span> </span>");
            }
        },request);
    }
    
    function saveAnalyticsIntegration()
    {
        let request = {
            analytics:$("#google-analytics-integration").val(),
            job:"save analytics integration"
        };

        $("#analytics-integration-status").html("<div class='ui mini inline active loader'></div> Saving...");
        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#analytics-integration-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
                    setTimeout(function () {
                        $("#analytics-integration-status").html("Saved");
                    }, 3000);
                }
                else
                {
                    $("#analytics-integration-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
                        "<span style='color: blue;' onclick='saveAnalyticsIntegration()'>try again</span> </span>");
                }
            }
            else
            {
                $("#analytics-integration-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
                    "Connection error <span style='color: blue;' onclick='saveAnalyticsIntegration()'>try again</span> </span>");
            }
        },request);
    }

    function saveGoogleTagIntegration()
    {
        let request = {
            googletag:$("#google-tag-integration").val(),
            job:"save googletag integration"
        };

        $("#googletag-integration-status").html("<div class='ui mini inline active loader'></div> Saving...");
        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#googletag-integration-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
                    setTimeout(function () {
                        $("#googletag-integration-status").html("Saved");
                    }, 3000);
                }
                else
                {
                    $("#googletag-integration-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
                        "<span style='color: blue;' onclick='saveGoogleTagIntegration()'>try again</span> </span>");
                }
            }
            else
            {
                $("#googletag-integration-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
                    "Connection error <span style='color: blue;' onclick='saveGoogleTagIntegration()'>try again</span> </span>");
            }
        },request);
    }

    function saveTranslatorIntegration()
    {
        let request = {
            translator:$("#translator-integration").val(),
            job:"save translator integration"
        };

        $("#translator-integration-status").html("<div class='ui mini inline active loader'></div> Saving...");
        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#translator-integration-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
                    setTimeout(function () {
                        $("#translator-integration-status").html("Saved");
                    }, 3000);
                }
                else
                {
                    $("#translator-integration-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
                        "<span style='color: blue;' onclick='saveTranslatorIntegration()'>try again</span> </span>");
                }
            }
            else
            {
                $("#translator-integration-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
                    "Connection error <span style='color: blue;' onclick='saveTranslatorIntegration()'>try again</span> </span>");
            }
        },request);
    }


    //---------------------------  Currency & Payment method -------------------------------------//

	function saveCurrency()
	{
		if(!populatingCurrency)
		{
			let request = {
				currency: $("#current-currency").dropdown('get value'),
				job: "save currency"
			};

			$("#currency-save-status").html("<div class='ui mini inline active loader'></div> Saving...");
			postJson("hms-admin/worker", function (data, status) {
				if (status === "done") {
					let d = JSON.parse(data);

					if (d.status === "success")
					{
						$("#currency-name-con").html(d.data.Name);
						$("#currency-code-con").html(d.data.Code);
						$("#symbol-con").html(d.data.Symbol);
						$("#country-con").html(d.data.Country);

						$("#currency-save-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
						setTimeout(function () {
							$("#currency-save-status").html("Saved");
						}, 3000);
					}
					else
					{
						$("#currency-save-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
							"<span style='color: blue;' onclick='saveCurrency()'>try again</span> </span>");
					}
				}
				else
				{
					$("#currency-save-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
						"Connection error <span style='color: blue;' onclick='saveCurrency()'>try again</span> </span>");
				}
			}, request);
		}
	}

	
	function saveInterswitch()
	{
		if(!populatingCurrency)
		{
			let request = {
				marchantid: $("#marchant-id").val(),
				job: "save interswitch integration"
			};

			$("#interswitch-save-status").html("<div class='ui mini inline active loader'></div> Saving...");
			postJson("hms-admin/worker", function (data, status) {
				if (status === "done") {
					let d = JSON.parse(data);

					if (d.status === "success")
					{
						$("#interswitch-save-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
						setTimeout(function () {
							$("#interswitch-save-status").html("Saved");
						}, 3000);
					}
					else
					{
						$("#interswitch-save-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
							"<span style='color: blue; cursor: pointer;' onclick='saveInterswitch()'> try again</span> </span>");
					}
				}
				else
				{
					$("#interswitch-save-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
						"Connection error <span style='color: blue; cursor: pointer;' onclick='saveInterswitch()'>try again</span> </span>");
				}
			}, request);
		}
	}

	function savePaystack()
	{
		if(!populatingCurrency)
		{
			let request = {
				privatekey: $("#paystack-private-key").val(),
				publickey: $("#paystack-public-key").val(),
				job: "save paystack integration"
			};

			$("#paystack-save-status").html("<div class='ui mini inline active loader'></div> Saving...");
			postJson("hms-admin/worker", function (data, status) {
				if (status === "done") {
					let d = JSON.parse(data);

					if (d.status === "success")
					{
						$("#paystack-save-status").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
						setTimeout(function () {
							$("#paystack-save-status").html("Saved");
						}, 3000);
					}
					else
					{
						$("#paystack-save-status").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
							"<span style='color: blue; cursor: pointer;' onclick='savePaystack()'>try again</span> </span>");
					}
				}
				else
				{
					$("#paystack-save-status").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
						"Connection error <span style='color: blue; cursor: pointer;' onclick='savePaystack()'> try again</span> </span>");
				}
			}, request);
		}
	}

	function saveWebpaystatus()
	{
		$("#webpay-save-label").html("<div class='ui mini inline active loader'></div> Saving...");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#webpay-save-label").html("<span style='color: forestgreen;'><i class='check icon'></i> Saved</span>");
					setTimeout(function () {
						$("#webpay-save-label").html("Saved");
					}, 3000);
				}
				else
				{
					$("#webpay-save-label").html("<span style='color: red;'><i class='check icon'></i> " + d.message +
						"<span style='color: blue; cursor: pointer;' onclick='saveWebpaystatus()'>try again</span> </span>");
				}
			}
			else
			{
				$("#webpay-save-label").html("<span style='color: red;'><i class='check icon'></i> Failed. " +
					"Connection error <span style='color: blue; cursor: pointer;' onclick='saveWebpaystatus()'> try again</span> </span>")
			}
		},{job:"save webpay status", webpay:getElement("webpay-status").checked, nopayreservation:getElement("no-pay-reservation").checked})
	}




    //--------------------------------  Home page analytics -------------------------------//

    function loadHomeData()
    {
        Morris.Area({
            element: 'revenue-graph',
            data: [
                {x: '2010 Q4', y: 3, z: 7},
                {x: '2011 Q1', y: 3, z: 4},
                {x: '2011 Q2', y: null, z: 1},
                {x: '2011 Q3', y: 2, z: 5},
                {x: '2011 Q4', y: 8, z: 2},
                {x: '2012 Q1', y: 4, z: 4}
            ],
            xkey: 'x',
            ykeys: ['y', 'z'],
            labels: ['Y', 'Z']
        }).on('click', function(i, row){
            console.log(i, row);
        });


        Morris.Donut({
            element: 'donut-1',
            data: [
                {value: 70, label: 'foo', formatted: 'at least 70%' },
                {value: 15, label: 'bar', formatted: 'approx. 15%' },
                {value: 10, label: 'baz', formatted: 'approx. 10%' },
                {value: 5, label: 'A really really long label', formatted: 'at most 5%' }
            ],
            formatter: function (x, data) { return data.formatted; }
        });

        Morris.Donut({
            element: 'donut-2',
            data: [
                {value: 70, label: 'foo', formatted: 'at least 70%' },
                {value: 15, label: 'bar', formatted: 'approx. 15%' },
                {value: 10, label: 'baz', formatted: 'approx. 10%' },
                {value: 5, label: 'A really really long label', formatted: 'at most 5%' }
            ],
            formatter: function (x, data) { return data.formatted; }
        });


        Morris.Donut({
            element: 'donut-3',
            data: [
                {value: 70, label: 'foo', formatted: 'at least 70%' },
                {value: 15, label: 'bar', formatted: 'approx. 15%' },
                {value: 10, label: 'baz', formatted: 'approx. 10%' },
                {value: 5, label: 'A really really long label', formatted: 'at most 5%' }
            ],
            formatter: function (x, data) { return data.formatted; }
        });

        Morris.Donut({
            element: 'donut-4',
            data: [
                {value: 70, label: 'foo', formatted: 'at least 70%' },
                {value: 15, label: 'bar', formatted: 'approx. 15%' },
                {value: 10, label: 'baz', formatted: 'approx. 10%' },
                {value: 5, label: 'A really really long label', formatted: 'at most 5%' }
            ],
            formatter: function (x, data) { return data.formatted; }
        });
    }



    //------------------------- Item Processing Logic -----------------------//

    function processItemImage(e, num)
    {
        cropImage({file:e.files[0], ratio:1.5/1}, function(blob, URL, n){

            getElement("item-img-"+n.toString()).src = URL.createObjectURL(blob);

            let img = new File([blob], "file.png");

            loadingButton({btn:"item-btn-"+n.toString()});
            let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
            upload.Upload(function(data, status){
                loadingButton({btn:"item-btn-"+n.toString(),loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#item-file-name-"+n.toString()).val(d.data);
                    }
                    else
                    {
                        getElement("item-img-"+n.toString()).src = "";
                        ShowModal("Application error. Unable to upload file please try again");
                    }
                }
                else
                {
                    getElement("item-img-"+n.toString()).src = "";
                    ShowModal("Connection error. Unable to upload file please try again");
                }
            });
        }, num);
    }



    //------------------------- Profile image processing logic --------------------------------//

//------------------------- Item Processing Logic -----------------------//

	function processProfileImage(e, num)
	{
		cropImage({file:e.files[0], ratio:1/1.1}, function(blob, URL, n){

			getElement("item-img-"+n.toString()).src = URL.createObjectURL(blob);

			let img = new File([blob], "file.png");

			loadingButton({btn:"item-btn-"+n.toString()});
			let upload = new WixUpload({file:img,url:phpvars.STORAGE_API_URL + "upload/files"});
			upload.Upload(function(data, status){
				loadingButton({btn:"item-btn-"+n.toString(),loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#item-file-name-"+n.toString()).val(d.data);
					}
					else
					{
						getElement("item-img-"+n.toString()).src = "";
						ShowModal("Application error. Unable to upload file please try again");
					}
				}
				else
				{
					getElement("item-img-"+n.toString()).src = "";
					ShowModal("Connection error. Unable to upload file please try again");
				}
			});
		}, num);
	}

	function generateBarcode()
	{
		loadingButton({btn:"barcode-btn"});
		postJson("hms-admin/worker", function(data, status){
			loadingButton({btn:"barcode-btn", loading:false});
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#barcode").val(d.data);
				}
				else
				{
					ShowModal(d.message);
				}
			}
			else
			{
				ShowModal("Unable to generate barcode. Connection error");
			}
		},{job:"generate item barcode"});
	}

	function receivedmessageLoader()
	{
		return "<div class='w3-row widget curve' style='margin-top: 5px;'>" +
			"<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid lightgray;'>" +
			"<div class='ui placeholder'><div class='line'></div></div> " +
			"</div> " +
			"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style=''>" +
			"<div class='ui placeholder'><div class='line'></div></div> " +
			"</div> " +
			"<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
			"<div class='ui placeholder'><div class='line'></div></div> " +
			"</div> " +
			"<div class='w3-col l5 m4 s12 l-pad-2 s-pad-1'>" +
			"<div class='ui placeholder'><div class='line'></div></div> " +
			"</div> " +
			"<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
			"<div class='ui placeholder'><div class='line'></div></div> " +
			"</div> " +
			"</div>";
	}


	//----------------------------------------- Message template logic-----------------------------------------

	function saveEmailTemplate()
	{
		let request = {
			messageid:$("#messageid").val(),
			type:"email",
			from:$("#email-from").val(),
			fromname:$("#email-from-name").val(),
			replyto:$("#email-reply-to").val(),
			subject:$("#email-subject").val(),
			body:$("#email-body").val(),
			attachment:$("#email-attachment").val(),
			title:$("#email-title").val(),
			status:$("#email-status").val(),
			job:"save message template"
		}

		if(request.title === "")
		{
			errorButton({btn:"email-template-btn", msg:"Title is empty"});
		}
		else if(request.from === "")
		{
			errorButton({btn:"email-template-btn", msg:"Title is empty"});
		}
		else if(request.fromname === "")
		{
			errorButton({btn:"email-template-btn", msg:"From name is empty"});
		}
		else if(request.subject === "")
		{
			errorButton({btn:"email-template-btn", msg:"Subject is empty"});
		}
		else if(request.body === "")
		{
			errorButton({btn:"email-template-btn", msg:"Message body is empty"});
		}
		else
		{
			loadingButton({btn:"email-template-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"email-template-btn", loading:false});

				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#email-template-btn").html("<i class='check icon'></i> Template saved");
						$("#email-template-btn").addClass("positive disabled");

						setTimeout(function(){
							$("#email-template-btn").html("<i class='save icon'></i> Save");
							$("#email-template-btn").removeClass("positive disabled");
						},3000);

						$("#messageid").val("");
						$("#messagetype").val("email");
						$("#email-from").val("");
						$("#email-from-name").val("");
						$("#email-reply-to").val("");
						$("#email-subject").val("");
						$("#email-body").val("");
						$("#email-attachment").val("");
						$("#email-title").val("");
						$("#email-attachment-txt").html("Click to add attachment");
					}
					else
					{
						errorButton({btn:"email-template-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"email-template-btn", msg:"Connection error"});
				}
			}, request);
		}
	}

	function saveSMSTemplate()
	{
		let request = {
			messageid:$("#messageid").val(),
			type:"sms",
			from:"",
			fromname:$("#sms-from-name").val(),
			replyto:"",
			subject:"",
			body:$("#sms-body").val(),
			attachment:"",
			title:$("#sms-title").val(),
			status:$("#status-status").val(),
			job:"save message template"
		}

		if(request.title === "")
		{
			errorButton({btn:"sms-template-btn", msg:"Title is empty"});
		}
		else if(request.fromname === "")
		{
			errorButton({btn:"sms-template-btn", msg:"From name is empty"});
		}
		else if(request.body === "")
		{
			errorButton({btn:"sms-template-btn", msg:"Message body is empty"});
		}
		else
		{
			loadingButton({btn:"sms-template-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"sms-template-btn", loading:false});

				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#sms-template-btn").html("<i class='check icon'></i> Template saved");
						$("#sms-template-btn").addClass("positive disabled");

						setTimeout(function(){
							$("#sms-template-btn").html("<i class='save icon'></i> Save");
							$("#sms-template-btn").removeClass("positive disabled");
						},3000);

						$("#messageid").val("");
						$("#messagetype").val("sms");
						$("#email-from-name").val("");
						$("#sms-body").val("");
						$("#sms-title").val("");
					}
					else
					{
						errorButton({btn:"sms-template-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"sms-template-btn", msg:"Connection error"});
				}
			}, request);
		}
	}

	function contactListClicked(e)
	{
		$(".contact-list-menu").removeClass("active");
		$(e).addClass("active");
		populateContactList();
		$(".list-name-con").html("");
	}

	function addGroupContacttoList()
	{
		selectCustomlist(function(listid){
			let cnt = [];

			let inps = document.getElementsByClassName("check-sel");

			let i = 0;
			for(; i < inps.length; i++)
			{
				if(inps[i].checked)
				{
					cnt.push(inps[i].getAttribute("s-data")+":"+listid);
				}
			}

			if(cnt.length > 0)
			{
				addCustomContact(cnt);
			}
			else
			{
				ShowModal("No contacts were selected. Select contacts and try again");
			}
		});
	}

	function launchAddContact(a)
	{
		let e = null;

		if(a != null)
		{
			e = JSON.parse(unescape(a));
		}

		let id = e != null ? e.id : "";
		let names =  e != null ? e.names : "";
		let phone =  e != null ? e.phone : "";
		let email =  e != null ? e.email : "";

		loadModal({title:"Add contact", html:"<div class='pad-1'>" +
				"<input id='contactid' type='hidden' value='"+id+"'/>" +
				"<div class='ui fluid input'>" +
				"<input id='contact-names' class='wix-textbox' type='text' value='"+names+"' placeholder='Full name'/>" +
				"</div> " +
				"<div class='ui fluid input' style='margin-top: 5px;'>" +
				"<input id='contact-phone' class='wix-textbox' type='text' value='"+phone+"' placeholder='Phone'/>" +
				"</div> " +
				"<div class='ui fluid input' style='margin-top: 5px;'>" +
				"<input id='contact-email' class='wix-textbox' type='text' value='"+email+"' placeholder='Email'/>" +
				"</div> " +
				"<div class='ui fluid input' style='margin-top: 5px;'>" +
				"<button id='contact-save-btn' class='ui sleak blue button' onclick='saveContact()'>" +
				"<i class='save icon'></i> Save</button>" +
				"</div> " +
				"</div>"});
	}

	function launchCustomList()
	{
		loadModal({title:"Create contact list", html:"<div class='pad-1'>" +
				"<div class='ui fluid input'>" +
				"<input id='listid' type='hidden' value=''/> " +
				"<input id='custom-list-name' class='wix-textbox' type='text' placeholder='List name'/>" +
				"</div> " +
				"<div class='ui fluid input' style='margin-top: 5px;'>" +
				"<button id='custom-list-btn' class='ui sleak blue button' " +
				"onclick='saveCustomList()'><i class='save icon'></i> Save</button>" +
				"</div> " +
				"</div>"});
	}

	function saveCustomList()
	{
		let request = {
			id:$("#listid").val(),
			name:$("#custom-list-name").val(),
			job:"save custom list"
		}

		if(request.name === "")
		{
			errorButton({btn:"custom-list-btn", msg:"Name is empty"});
		}
		else
		{
			loadingButton({btn:"custom-list-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"custom-list-btn", loading:false});

				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#custom-list-btn").addClass("positive disabled");
						$("#custom-list-btn").html("<i class='check icon'></i> List saved");
						setTimeout(function(){
							$("#custom-list-btn").removeClass("positive disabled");
							$("#custom-list-btn").html("<i class='save icon'></i> Save");


						},3000);

						$("#listid").val("");
						$("#custom-list-name").val("");
					}
					else
					{
						errorButton({btn:"custom-list-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"custom-list-btn", msg:"Connection error"});
				}
			},request);
		}
	}

	function saveContact()
	{
		let request = {
			id:$("#contactid").val(),
			names:$("#contact-names").val(),
			phone:$("#contact-phone").val(),
			email:$("#contact-email").val(),
			job:"save contact"
		};

		if((request.email === "") && (request.phone === ""))
		{
			errorButton({btn:"contact-save-btn", msg:"Phone and email are empty"});
		}
		else
		{
			loadingButton({btn:"contact-save-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"contact-save-btn", loading:false});

				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#contact-save-btn").addClass("positive disabled");
						$("#contact-save-btn").html("<i class='check icon'></i> Contact saved");
						setTimeout(function(){
							$("#contact-save-btn").removeClass("positive disabled");
							$("#contact-save-btn").html("<i class='save icon'></i> Save");


						},3000);

						$("#contactid").val("");
						$("#contact-names").val("");
						$("#contact-phone").val("");
						$("#contact-email").val("");
					}
					else
					{
						errorButton({btn:"contact-save-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"contact-save-btn", msg:"Connection error"});
				}
			},request);
		}
	}


	let functionStore = null;
	function selectCustomlist(func)
	{
		functionStore = func;

		loadModal({title:"Custom contact list",
			html:"<div id='custom-list-con' class='pad-5 align-c'>" +
			"<div class='ui inline huge active loader'></div>" +
			"</div>",
			onLoaded:function(modalId){

			postJson("hms-admin/worker", function(data, status){
				$("#custom-list-con").html("");
				$("#custom-list-con").removeClass("pad-5");
				$("#custom-list-con").removeClass("align-c");
				//$("#custom-list-con").addClass("pad-1");
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						if(d.data.length == 0)
						{
							let c = document.createElement("div");
							c.className = "pad-2";
							c.innerHTML = "<div >" +
								"<div class='align-c widget curve pad-2'>" +
								"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
								"<h6 class='sleak-b' style='color: dimgray;'>Custom contact list is empty</h6>" +
								"</div>"+
								"</div>";

							getElement("custom-list-con").appendChild(c);
						}
						for(let i = 0; i < d.data.length; i++)
						{
							let c = document.createElement("div");
							c.className = "minor-menu";
							c.id = d.data[i].Id+"-row";
							c.innerHTML = "<div class='w3-row'>" +
								"<div class='w3-col l11 m11 s11' onclick=\"cutomlistSelected('"+d.data[i].Id+"','"+modalId.modal+"','"+d.data[i].Name+"')\">" +
								"<h6 class='minor-menu pad-1' style='margin: 0px; " +
								"font-family: Lato;'>"+d.data[i].Name+" " +
								"<label class='ui circular small green-back label'>"+d.data[i].Itemcount+"</label></h6>" +
								"</div>" +
								"<div class='w3-col l1 m1 s1'>" +
								"<i id='"+d.data[i].Id+"-btn' class='trash red icon' style='cursor: pointer; margin-top: 10px;'" +
								" onclick=\"ConfirmContactcollectionDelete('"+d.data[i].Id+"')\"></i>" +
								"</div>" +
								"</div>";

							getElement("custom-list-con").appendChild(c);
						}
					}
					else
					{

					}
				}
				else
				{

				}
			},{job:"get custom contacts list"});
		}});
	}

	function cutomlistSelected(e, modal, name)
	{
		closeGenModal(modal, function(){
			if(typeof(functionStore) === "function")
			{
				functionStore(e, name);
			}
		});
	}

	function ConfirmContactcollectionDelete(e)
	{
		ConfirmModal("All events and schedules using this list will be disabled. Would you like to continue?", function(choice, param){
			if(choice === true)
			{
				ContactcollectionListDelete(param);
			}
		}, null, null, e);
	}

	function ContactcollectionListDelete(e)
	{
		//Loading animation here
		$("#"+e+"-btn").addClass("loading spinner");
		$("#"+e+"-btn").removeClass("trash");
		DeleteContactcollection(e, function(status, msg){
			//Stop Animation here
			$("#"+e+"-btn").removeClass("loading spinner");
			$("#"+e+"-btn").addClass("trash");
			if(status == "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('custom-list-con').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteContactcollection(e, func)
	{
		let request = {};
		request.Contactcollectionid = e;
		request.job = "delete custom contact list";

		postJson("hms-admin/worker", function(data, status){
			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function addToContactList(id, type)
	{
		selectCustomlist(function(listid){
			let cnt = [];
			cnt.push(id+":"+type+":"+listid);
			addCustomContact(cnt);
		});
	}

	function populateCustomContactList(e)
	{
		selectCustomlist(function(listid, listname){
			$("#custom-list-id").val(listid);
			$(".contact-list-menu").removeClass("active");
			$(".list-name-con").html("<small><small>(<small><i class='circle green icon'></i></small> "+listname+")</small></small>");
			$(e).addClass("active");
			populateContactList();
		});
	}

	function addCustomContact(contactArray)
	{
		loadModal({titlebar:false, html:"<div class='pad-1'>" +
				"<div id='status-con' class='pad-5 align-c'>" +
				"<div class='ui active inline large loader'></div>" +
				"<h4 class='sleak'>Adding contact(s) to list</h4>" +
				"</div>" +
				"</div>", onLoaded:function(m){

			postJson("hms-admin/worker", function(data, status){
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#status-con").html("<div class=''>" +
							"<h1 class='ui header'><i class='check green icon'></i></h1>" +
							"<h4 class='sleak' style='font-weight: normal;'>Contact saved to list</h4></div>");
						setTimeout(function(){
							closeGenModal(m.modal);
						},2000);
					}
					else
					{

					}
				}
				else
				{

				}
			},{job:"save contact to list", data:contactArray});

			}});
	}

	function removeCustomContact(contactArray)
	{
		loadModal({titlebar:false, html:"<div class='pad-1'>" +
				"<div id='status-con' class='pad-5 align-c'>" +
				"<div class='ui active inline large loader'></div>" +
				"<h4 class='sleak'>Removing contact(s) from list</h4>" +
				"</div>" +
				"</div>", onLoaded:function(m){

				postJson("hms-admin/worker", function(data, status){
					if(status === "done")
					{
						let d = JSON.parse(data);

						if(d.status === "success")
						{
							$("#status-con").html("<div class=''>" +
								"<h1 class='ui header'><i class='check green icon'></i></h1>" +
								"<h4 class='sleak' style='font-weight: normal;'>Contact(s) removed from list</h4></div>");
							setTimeout(function(){
								closeGenModal(m.modal);
							},2000);

							populateContactList();
						}
						else
						{

						}
					}
					else
					{

					}
				},{job:"delete contact from list", data:contactArray});

			}});
	}

	function ConfirmGroupContactDelete()
	{
		ConfirmModal("Are you sure you want to delete all the selected Contacts?", function(choice){
			if(choice === true)
			{
				ContactGroupDelete();
			}
		});
	}

	function ConfirmContactDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the contact?", function(choice, param){
			if(choice === true)
			{
				ContactListDelete(param);
			}
		}, null, null, e);
	}

	function ContactGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				//Loading animation here
				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteContact(lst[i].id, function(status, msg){
					//Stop Animation here
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status == "done")
					{
						//Deletion success
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Contacts failed to delete");
			}
		}
		else
		{
			ShowModal("No Contacts were selected");
		}
	}

	function ContactListDelete(e)
	{
		//Loading animation here
		$("#"+e+"-btn").addClass("loading");
		DeleteContact(e, function(status, msg){
			//Stop Animation here
			$("#"+e+"-btn").removeClass("loading");
			if(status === "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteContact(e, func)
	{
		let request = {};
		request.Contactid = e;
		request.job = "delete contact";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) === "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function removeGroupContactfromList()
	{
		if($("#contact-list-custom").hasClass("active"))
		{
			let cnt = [];

			let inps = document.getElementsByClassName("check-sel");

			let i = 0;
			for(; i < inps.length; i++)
			{
				if(inps[i].checked)
				{
					cnt.push(inps[i].getAttribute("s-data")+":"+$("#custom-list-id").val());
				}
			}

			if(cnt.length > 0)
			{
				removeCustomContact(cnt);
			}
			else
			{
				ShowModal("No contacts were selected. Select contacts and try again");
			}
		}
		else
		{
			ShowModal("Enter the custom list to remove contact items");
		}
	}

	function removeContactfromList(contactid, type)
	{
		if($("#contact-list-custom").hasClass("active"))
		{
			let cnt = [];
			cnt.push(contactid+":"+type+":"+$("#custom-list-id").val());
			removeCustomContact(cnt);
		}
		else
		{
			ShowModal("Enter the custom list to remove contact items");
		}
	}


	//-------------------------------------------------- Message Logic ---------------------------

	function selectMessagetab(e)
	{
		$(".message-menu-item").removeClass("active");
		$(e).addClass("active");
		populateReceivedMessages();
	}

	function ConfirmGroupMessageDelete()
	{
		ConfirmModal("Are you sure you want to delete all the selected Messages?", function(choice){
			if(choice === true)
			{
				MessageGroupDelete();
			}
		});
	}

	function ConfirmMessageDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the Message?", function(choice, param){
			if(choice === true)
			{
				MessageListDelete(param);
			}
		}, null, null, e);
	}

	function MessageGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				//Loading animation here
				$("#"+lst[i].id+"-btn").addClass("loading spinner");
				$("#"+lst[i].id+"-btn").removeClass("trash");
				DeleteMessage(lst[i].id, function(status, msg){
					//Stop Animation here
					$("#"+lst[i].id+"-btn").removeClass("loading spinner");
					$("#"+lst[i].id+"-btn").addClass("trash");
					if(status === "done")
					{
						//Deletion success
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Messages failed to delete");
			}
		}
		else
		{
			ShowModal("No Messages were selected");
		}
	}

	function MessageListDelete(e)
	{
		//Loading animation here
		$("#"+e+"-btn").addClass("loading spinner");
		$("#"+e+"-btn").removeClass("trash");
		DeleteMessage(e, function(status, msg){
			//Stop Animation here
			$("#"+e+"-btn").removeClass("loading spinner");
			$("#"+e+"-btn").addClass("trash");
			if(status === "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteMessage(e, func)
	{
		let request = {};
		request.Messageid = e;
		request.job = "delete message";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}


	function starMessage(e, a)
	{
		if($(e).hasClass("outline"))
		{
			$(e).addClass("yellow");
			$(e).removeClass("outline");
			addStar(a);
		}
		else
		{
			$(e).removeClass("yellow");
			$(e).addClass("outline");
			removeStar(a);
		}
	}

	function addStar(e)
	{
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					$("#"+e+"-star").addClass("outline");
					$("#"+e+"-star").removeClass("yellow");
					ShowModal(d.message);
				}
				else
				{
					$("#stared-count-con").html(d.data);
				}
			}
			else
			{
				$("#"+e+"-star").addClass("outline");
				$("#"+e+"-star").removeClass("yellow");
				ShowModal("Unable to star message. Connection error");
			}
		},{job:"star message",Messageid:e});
	}

	function removeStar(e)
	{
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					$("#"+e+"-star").removeClass("outline");
					$("#"+e+"-star").addClass("yellow");
					ShowModal(d.message);
				}
				else
				{
					$("#stared-count-con").html(d.data);
				}
			}
			else
			{
				$("#"+e+"-star").removeClass("outline");
				$("#"+e+"-star").addClass("yellow");
				ShowModal("Unable to unstar message. Connection error");
			}
		},{job:"unstar message",Messageid:e})
	}

	function changeMessageStatus(e, a)
	{
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					a.checked = !a.checked;
					ShowModal(d.message);
				}
			}
			else
			{
				a.checked = !a.checked;
				ShowModal("Connection error. Unable to save status.");
			}
		},{job:"change message status",Messageid:e, status:a.checked})
	}

	function loadMessage(e)
	{
		$("#message-info").html("<div class='ui fluid placeholder'>" +
			"<div class='image header'>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div>" +
			"</div>" +

			"<div class='ui placeholder'><div class='line'></div><div class='line'></div></div>" +
			"<div class='ui placeholder'><div class='line'></div><div class='line'></div></div>" +
			"<div class='ui placeholder'><div class='line'></div><div class='line'></div></div>");

		$("#message-body").html( "<div class='ui placeholder'><div class='line'></div><div class='line'></div></div>" +

			"<div class='ui red placeholder'>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div>" +

			"<div class='ui placeholder'>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div>" +

			"<div class='ui placeholder'>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div>");

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let star = d.data.Stared ?
						"<i id='"+d.data.Id+"-star' class='star yellow icon' style='cursor: pointer; font-size: 20px;' onclick=\"starMessage(this, '"+d.data.Id+"')\"></i>" :
						"<i id='"+d.data.Id+"-star' class='star outline icon' style='cursor: pointer; font-size: 20px;' onclick=\"starMessage(this, '"+d.data.Id+"')\"></i>";

					let status = d.data.Status ? "checked" : "";

					let menuItems = "";

					if(d.data.Phone !== "")
					{
						menuItems = "<a href='#send-sms/message/"+d.data.Id+"' class='item'><i class='mobile icon'></i> Send SMS</a>";
					}
					if(d.data.Phone !== "")
					{
						menuItems += "<a href='#send-messages/message/"+d.data.Id+"' class='item'><i class='open envelope icon'></i> Send Email</a>";
					}


					$("#message-info").html("<h3 class='ui header' style='margin-top: 20px;'>" +
						"<i class='user circle blue icon' style='font-size: 40px;'></i> "+
						d.data.Name+" "+d.data.Surname+"</h3>" +
						"<h5 style='margin: 0px; color: dimgray;'><i class='at green icon'></i> "+d.data.Email+"</h5>" +
						"<h5 style='margin: 0px; margin-top: 10px; color: dimgray;'><i class='mobile green icon'></i> "+
						d.data.Phone+"</h5><hr/>" +
						"<h6 class='sleak'>"+d.data.Created.WeekDay+", "+d.data.Created.Day+"/"+d.data.Created.MonthName+
						"/"+d.data.Created.Year+"</h6>" +
						"<h6 class='sleak'>"+d.data.Created.Hour+":"+d.data.Created.Miniute+"</h6><hr/>" +
						"<label><input class='filled-in' type='checkbox' "+status+" onchange=\"changeMessageStatus('"+d.data.Id+"',this)\"/>" +
						"<span>Resolved</span></label><br/><br/>"+
						star+" <span>Importance</span>");

					$("#message-body").html("<h4>Message Body</h4>" +
						"<hr/><p class='sleak' style='line-height: 180%; font-size: 16px; font-family: Lato;" +
						" font-weight: bold; color: dimgray;'>"+
						d.data.Body+"</p><hr/>" +
						"<div class='ui icon top blue left pointing dropdown button'>" +
						"Reply <i class='caret down icon'></i>" +
						"<div class='menu'>" + menuItems +
						"</div>" +
						"</div>");

					$(".ui.dropdown").dropdown();
				}
				else
				{

				}
			}
			else
			{

			}
		},{job:"get message",messageid:e});
	}


	
	//----------------------------------------send message logic---------------------------------------
    function uploadAttachment(e)
    {
    	if(e.files.length > 0)
		{
			let upload = new WixUpload({file: e.files[0], url: phpvars.STORAGE_API_URL + "upload/files"});
			loadingButton({btn: "email-attachment-btn"});
			$("#email-attachment-txt").html("Uploading attachment...");
			upload.Upload(function (data, status) {
				loadingButton({btn: "email-attachment-btn", loading: false});
				$("#email-attachment-txt").html("Click to add attachment");
				if (status === "done") {
					let d = JSON.parse(data);

					if (d.status === "success")
					{
						$("#email-attachment-btn").html("<i class='check icon'></i>");
						$("#email-attachment").val(d.data);
						$("#email-attachment-txt").html(e.files[0].name + " added " +
							"<span style='color: steelblue; cursor: pointer;' " +
							"onclick='removeAttachment()'>Remove file</span onclick>");
					}
					else
					{
						ShowModal("Connection error. Unable to add the attachment");
					}
				}
				else
				{
					ShowModal("Connection error. Unable to add the attachment");
				}
			});
		}
    }

    function removeAttachment()
    {
        $("#email-attachment").val("");
        $("#email-attachment-btn").html("<i class='linkify icon'></i>");
        $("#email-attachment-txt").html("Click to add attachment");
    }

	function showMessageTags()
    {
        loadModal({title:"Message Tags", html:"" +
                "<div class='pad-1'>" +
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
                "</div>"});
    }


	  //-----------------------------Shedules Logic----------------------------------

	  function switchScheduleTab(e)
	  {
			$(".schedule-tab").removeClass("active");
			$(e).addClass("active");
			populateSchedule();
	  }

	  function execNumChanged(e)
	  {
		  if(e.checked)
		  {
				$("#exec-count-con").addClass("disabled");
		  }
		  else
		  {
				$("#exec-count-con").removeClass("disabled");
		  }
	  }

	  function addContact(e)
	  {
		if(e.id == "guest-contact-btn")
		{
			getElement("contact-list-con").appendChild(div({add:
				"<input class='inner-contact-list' type='hidden' value='guest'/>" +
				"<div class='w3-col l10 m10 s10'>" +
				"<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
				"<i class='group icon'></i> Guest List</h6>" +
				"</div>" +
				"<div class='w3-col l2 m2 s2 align-r'>"  +
				"<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('guest-contact-btn')\"></i></h6>"+
				"</div>",
				class:"w3-card curve pad-t margin-b-t w3-row",id:"guest-contact-btn-indic"}));
		}
		if(e.id == "customers-contact-btn")
		{
			getElement("contact-list-con").appendChild(div({add:
				"<input class='inner-contact-list' type='hidden' value='customers'/>" +
				"<div class='w3-col l10 m10 s10'>" +
				"<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
				"<i class='user circle icon'></i> Customers List</h6>" +
				"</div>" +
				"<div class='w3-col l2 m2 s2 align-r'>"  +
				"<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('customers-contact-btn')\"></i></h6>"+
				"</div>",
				class:"w3-card curve pad-t margin-b-t w3-row",id:"customers-contact-btn-indic"}));
		}
		if(e.id == "staff-contact-btn")
		{
			getElement("contact-list-con").appendChild(div({add:
				"<input class='inner-contact-list' type='hidden' value='staff'/>" +
				"<div class='w3-col l10 m10 s10'>" +
				"<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
				"<i class='male icon'></i>Staff List</h6>" +
				"</div>" +
				"<div class='w3-col l2 m2 s2 align-r'>"  +
				"<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('staff-contact-btn')\"></i></h6>"+
				"</div>",
				class:"w3-card curve pad-t margin-b-t w3-row",id:"staff-contact-btn-indic"}));
		}
		if(e.id == "contactus-contact-btn")
		{
			getElement("contact-list-con").appendChild(div({add:
				"<input class='inner-contact-list' type='hidden' value='contactus'/>" +
				"<div class='w3-col l10 m10 s10'>" +
				"<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
				"<i class='open envelope icon'></i> Contact Us users</h6>" +
				"</div>" +
				"<div class='w3-col l2 m2 s2 align-r'>"  +
				"<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('contactus-contact-btn')\"></i></h6>"+
				"</div>",
				class:"w3-card curve pad-t margin-b-t w3-row",id:"contactus-contact-btn-indic"}));
		}
		if(e.id == "subscribers-contact-btn")
		{
		  getElement("contact-list-con").appendChild(div({add:
			  "<input class='inner-contact-list' type='hidden' value='subscribers'/>" +
			  "<div class='w3-col l10 m10 s10'>" +
			  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
			  "<i class='at icon'></i> Subscribers List</h6>" +
			  "</div>" +
			  "<div class='w3-col l2 m2 s2 align-r'>"  +
			  "<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('subscribers-contact-btn')\"></i></h6>"+
			  "</div>",
			  class:"w3-card curve pad-t margin-b-t w3-row",id:"subscribers-contact-btn-indic"}));
		}
		if(e.id != "custom-contact-btn")
		{
		  $(e).addClass("disabled");
		}
		else {
		  selectCustomlist(function(id, name){
			  let list = document.getElementsByClassName("inner-contact-list");
			  let found = false;
			  for(let i = 0; i < list.length; i++){if(list[i].value == id){found=true; break;}}

			  if(!found)
			  {
				  getElement("contact-list-con").appendChild(div({add:
					  "<input class='inner-contact-list' type='hidden' value='"+id+"'/>" +
					  "<div class='w3-col l10 m10 s10'>" +
					  "<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
					  "<i class='list icon'></i> "+name+"</h6>" +
					  "</div>" +
					  "<div class='w3-col l2 m2 s2 align-r'>"  +
					  "<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('"+id+"')\"></i></h6>"+
					  "</div>",
					  class:"w3-card curve pad-t margin-b-t w3-row",id:id+"-indic"}));
			  }
		  });
	  }
	}

	  function removeContact(e)
	  {
		  $(getElement(e)).removeClass("disabled");
		  getElement("contact-list-con").removeChild(getElement(e+"-indic"));
	  }

	  function saveSchedule()
	  {
		  let request = {
			  id:$("#schedule-id").val(),
			  status:$("#schedule-status").val(),
			  title:$("#schedule-title").val(),
			  message:$("#message-template").val(),
			  year:$("#schedule-year").val(),
			  day:$("#schedule-day").val(),
			  month:$("#schedule-month").val(),
			  hour:$("#schedule-hour").val(),
			  min:$("#schedule-min").val(),
			  gmt:$("#schedule-gmt").val(),
			  inifinity:getElement("indefinit-exec").checked,
			  executions:$("#exec-count").val(),
			  autodelete:getElement("auto-delete").checked,
			  contacts:[],
			  contactcollection:$("#contact-collection").val(),
			  job:"save message schedule"
		  };

		  let list = document.getElementsByClassName("inner-contact-list");
		  for(let i = 0; i < list.length; i++)
		  {
			  request.contacts.push(list[i].value);
		  }


		  if(request.title == "")
		  {
			  errorButton({btn:"schedule-btn", msg:"Title is empty"});
		  }
		  else if(request.message == "")
		  {
			  errorButton({btn:"schedule-btn", msg:"Select message"});
		  }
		  else if((request.contacts.length == 0) && (request.contactcollection == ""))
		  {
			  errorButton({btn:"schedule-btn", msg:"No contacts have been added"});
		  }
		  else
		  {
			  loadingButton({btn:"schedule-btn"});
			  postJson("hms-admin/worker", function(data, status){
				  loadingButton({btn:"schedule-btn", loading:false});
				  if(status === "done")
				  {
					  let d = JSON.parse(data);

					  if(d.status === "success")
					  {
						  $("#schedule-id").val("");
						  $("#schedule-status").val("true");
						  $("#schedule-title").val("");
						  $("#message-template").dropdown("restore defaults");
						  $("#schedule-year").dropdown("restore defaults");
						  $("#schedule-day").dropdown("restore defaults");
						  $("#schedule-month").dropdown("restore defaults");
						  $("#schedule-hour").dropdown("restore defaults");
						  $("#schedule-min").val("00");
						  $("#schedule-gmt").dropdown("restore defaults");
						  getElement("indefinit-exec").checked = false;
						  $("#exec-count").val("1");
						  getElement("auto-delete").checked = false;
						  $("#contact-collection").val("");

						  $("#guest-contact-btn").removeClass("disabled");
						  $("#customers-contact-btn").removeClass("disabled");
						  $("#staff-contact-btn").removeClass("disabled");
						  $("#subscribers-contact-btn").removeClass("disabled");
						  $("#contactus-contact-btn").removeClass("disabled");
						  $("#custom-contact-btn").removeClass("disabled");

						  $("#exec-count-con").removeClass("disabled");


						  $("#contact-list-con").html("");


							$("#schedule-btn").addClass("positive disabled");
							$("#schedule-btn").html("<i class='check icon'></i> Schedule saved");
							setTimeout(function(){
								$("#schedule-btn").removeClass("positive disabled");
								$("#schedule-btn").html("Save schedule");
							},3000);
					  }
					  else
					  {
						  errorButton({btn:"schedule-btn", msg:d.message});
					  }
				  }
				  else
				  {
					  errorButton({btn:"schedule-btn", msg:"Connectiont error"});
				  }
			  },request);
		  }
	  }

	function ConfirmMessagescheduleDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the selected Message schedules?", function(choice, param){
			if(choice === true)
			{
				MessagescheduleListDelete(param);
			}
		}, null, null, e);
	}

	function MessagescheduleListDelete(e)
	{
		//Loading animation here
		$("#"+e+"-row").transition("set looping").transition('bounce', '2000ms');
		DeleteMessageschedule(e, function(status, msg){
			//Stop Animation here
			$("#"+e+"-row").transition("remove looping");
			if(status === "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteMessageschedule(e, func)
	{
		let request = {};
		request.Messagescheduleid = e;
		request.job = "delete message schedule";

		postJson("hms-admin/worker", function(data, status){
			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function loadEditSchedule(e)
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function(data, status){
			$("#page").removeClass("ui loading form");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#schedule-id").val(d.data.Id);
					$("#schedule-status").val(d.data.Status);
					$("#schedule-title").val(d.data.Title);
					$("#message-template").dropdown("set selected", d.data.Message.Id);
					$("#schedule-year").dropdown("set selected", d.data.Year);
					$("#schedule-month").dropdown("set selected", d.data.Month);
					$("#schedule-hour").dropdown("set selected", zerofy(d.data.Hour));
					$("#schedule-gmt").dropdown("set selected", zerofy(d.data.Meridian));
					$("#schedule-day").dropdown("set selected", d.data.Day);
					$("#exec-count").val(d.data.Execcount);
					$("#schedule-min").val(zerofy(d.data.Minuet));
					getElement("indefinit-exec").checked = d.data.Continuous;
					getElement("auto-delete").checked = d.data.Autodelete;
					$("#contact-collection").val(d.data.Contactlist.toString());

					addContact(d.data.Guest ? getElement("guest-contact-btn") : "");
					addContact(d.data.Customers ? getElement("customers-contact-btn") : "");
					addContact(d.data.Staff ? getElement("staff-contact-btn") : "");
					addContact(d.data.Subscribers ? getElement("subscribers-contact-btn") : "");
					addContact(d.data.Contactus ? getElement("contactus-contact-btn") : "");

					for(let h = 0; h < d.data.Customlist.length; h++)
					{
						getElement("contact-list-con").appendChild(div({add:
								"<input class='inner-contact-list' type='hidden' value='"+d.data.Customlist[h].Id+"'/>" +
								"<div class='w3-col l10 m10 s10'>" +
								"<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
								"<i class='list icon'></i> "+d.data.Customlist[h].Name+"</h6>" +
								"</div>" +
								"<div class='w3-col l2 m2 s2 align-r'>"  +
								"<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('"+d.data.Customlist[h].Id+"')\"></i></h6>"+
								"</div>",
							class:"w3-card curve pad-t margin-b-t w3-row",id:d.data.Customlist[h].Id+"-indic"}));
					}
				}
				else
				{
					location.hash = "#reminders";
					ShowModal(d.message);
				}
			}
			else
			{
				location.hash = "#reminders";
				ShowModal("Connection error. Unable to load schedule data");
			}
		},{job:"single message schedule", scheduleid:e});
	}


	  //----------------------------Events Logic--------------------------------------

	  function switchEventTab(e)
	  {
		$(".event-tab").removeClass("active");
		$(e).addClass("active");
		populateEvent();
	  }

	  function saveEvent()
	  {
		  let request = {
			  id:$("#event-id").val(),
			  status:$("#event-status").val(),
			  title:$("#event-title").val(),
			  message:$("#message-template").val(),
			  event:$("#event").val(),
			  delayhours:Number($("#delay-hours").val()),
			  delaymins:Number($("#delay-mins").val()),
			  contextuser:getElement("context-user").checked,
			  contacts:[],
			  contactcollection:$("#contact-collection").val(),
			  job:"save event"
		  };

		  let list = document.getElementsByClassName("inner-contact-list");
		  for(let i = 0; i < list.length; i++)
		  {
			  request.contacts.push(list[i].value);
		  }

		  if(request.title == "")
		  {
			  errorButton({btn:"event-btn", msg:"Title is empty"});
		  }
		  else if(request.message == "")
		  {
			  errorButton({btn:"event-btn", msg:"Select message"});
		  }
		  else if((request.contacts.length == 0) && (request.contactcollection == "") && (!request.contextuser))
		  {
			  errorButton({btn:"event-btn", msg:"No contacts have been added"});
		  }
		  else
		  {
			  loadingButton({btn:"event-btn"});
			  postJson("hms-admin/worker", function(data, status){
				  loadingButton({btn:"event-btn", loading:false});
				  if(status === "done")
				  {
					  let d = JSON.parse(data);

					  if(d.status === "success")
					  {
						  $("#event-id").val("");
						  $("#event-status").val("");
						  $("#event-title").val("");
						  $("#message-template").dropdown("restore defaults");
						  $("#event").dropdown("restore defaults");
						  $("#delay-hours").val("00");
						  $("#delay-mins").val("00");
						  getElement("context-user").checked = false;
						  $("#contact-collection").val("");


						  $("#guest-contact-btn").removeClass("disabled");
						  $("#customers-contact-btn").removeClass("disabled");
						  $("#staff-contact-btn").removeClass("disabled");
						  $("#subscribers-contact-btn").removeClass("disabled");
						  $("#contactus-contact-btn").removeClass("disabled");
						  $("#custom-contact-btn").removeClass("disabled");


						  $("#contact-list-con").html("");


						  $("#event-btn").addClass("positive disabled");
						  $("#event-btn").html("<i class='check icon'></i> Event saved");
						  setTimeout(function(){
								$("#event-btn").removeClass("positive disabled");
								$("#event-btn").html("Save event");
							},3000);
					  }
					  else
					  {
						  errorButton({btn:"event-btn", msg:d.message});
					  }
				  }
				  else
				  {
					  errorButton({btn:"event-btn", msg:"Connectiont error"});
				  }
			  },request);
		  }
	  }


	let scheduleChart = null;
	function plotGraph(e)
	{
		if(scheduleChart == null)
		{
			scheduleChart = new EasyPieChart(document.querySelector('#completed-schedule'), {
				easing: 'easeOutElastic',
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		}
		scheduleChart.update(e);
  	}

	function ConfirmEventlistenerDelete(e)
	{
		ConfirmModal("Are you sure you want to delete the selected Event listener?", function(choice, param){
			if(choice === true)
			{
				EventlistenerListDelete(param);
			}
		}, null, null, e);
	}

	function EventlistenerListDelete(e)
	{
		//Loading animation here
		$("#"+e+"-row").transition("set looping").transition('bounce', '2000ms');
		DeleteEventlistener(e, function(status, msg){
			//Stop Animation here
			$("#"+e+"-row").transition("remove looping");
			if(status == "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteEventlistener(e, func)
	{
		let request = {};
		request.Eventlistenerid = e;
		request.job = "delete event";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}


	function changeEventStatus(e, a)
	{
		$("#status-con-"+e).html("<small><span class='yellow-large-pulse'></span> &nbsp;&nbsp;Processing..</small>");
		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status == "success")
				{
					if(a.getAttribute("cur-status") === "true")
					{
						$("#status-con-"+e).html("<span class='small-blue-pulse'></span> &nbsp;&nbsp;<small>Listening...");
						a.setAttribute("cur-status", "false");
						a.innerHTML = "Stop listening";
					}
					else
					{
						$("#status-con-"+e).html("<span class='red-back' style='display: inline-block; border-radius: 50%; " +
							"height: 6px; width: 6px;'></span>" +
							" &nbsp;&nbsp;<small>Pending..");
						a.setAttribute("cur-status", "true");
						a.innerHTML = "Start listening";
					}
				}
				else
				{
					if(a.getAttribute("cur-status") === "false")
					{
						$("#status-con-"+e).html("<span class='small-blue-pulse'></span> &nbsp;&nbsp;<small>Listening...");
					}
					else
					{
						$("#status-con-"+e).html("<span class='red-back' style='display: inline-block; border-radius: 50%; " +
							"height: 6px; width: 6px;'></span>" +
							" &nbsp;&nbsp;<small>Pending..");
					}
					ShowModal(d.message);
				}
			}
			else
			{
				if(a.getAttribute("cur-status") === "false")
				{
					$("#status-con-"+e).html("<span class='small-blue-pulse'></span> &nbsp;&nbsp;<small>Listening...");
				}
				else
				{
					$("#status-con-"+e).html("<span class='red-back' style='display: inline-block; border-radius: 50%; " +
						"height: 6px; width: 6px;'></span>" +
						" &nbsp;&nbsp;<small>Pending..");
				}
				ShowModal("Connection error. Unable to save status.");
			}
		},{job:"change event status",id:e, status:a.getAttribute("cur-status")})
	}

	function loadEditEvent(e)
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function(data, status){
			$("#page").removeClass("ui loading form");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#event-id").val(d.data.Id);
					$("#event-status").val(d.data.Status);
					$("#event-title").val(d.data.Title);
					$("#message-template").dropdown("set selected", d.data.Message.Id);
					$("#event").dropdown("set selected", d.data.Event);
					$("#delay-hours").val(zerofy(d.data.Delayhours));
					$("#delay-mins").val(zerofy(d.data.Delaymins));
					getElement("context-user").checked = d.data.Contextuser;
					$("#contact-collection").val(d.data.Contactlist.toString());

					addContact(d.data.Guest ? getElement("guest-contact-btn") : "");
					addContact(d.data.Customer ? getElement("customers-contact-btn") : "");
					addContact(d.data.Staff ? getElement("staff-contact-btn") : "");
					addContact(d.data.Subscribers ? getElement("subscribers-contact-btn") : "");
					addContact(d.data.Contactform ? getElement("contactus-contact-btn") : "");

					for(let h = 0; h < d.data.Customlist.length; h++)
					{
						getElement("contact-list-con").appendChild(div({add:
								"<input class='inner-contact-list' type='hidden' value='"+d.data.Customlist[h].Id+"'/>" +
								"<div class='w3-col l10 m10 s10'>" +
								"<h6 class='sleak' style='font-weight: bold; color: dimgray;'>"+
								"<i class='list icon'></i> "+d.data.Customlist[h].Name+"</h6>" +
								"</div>" +
								"<div class='w3-col l2 m2 s2 align-r'>"  +
								"<h6><i class='times red icon' style='cursor: pointer;' onclick=\"removeContact('"+d.data.Customlist[h].Id+"')\"></i></h6>"+
								"</div>",
							class:"w3-card curve pad-t margin-b-t w3-row",id:d.data.Customlist[h].Id+"-indic"}));
					}
				}
				else
				{
					location.hash = "#reminders";
					ShowModal(d.message);
				}
			}
			else
			{
				location.hash = "#reminders";
				ShowModal("Connection error. Unable to load event data");
			}
		},{job:"get event", eventid:e});
	}

	function loadEventData(e)
	{
		let placeholder = "<div class='ui placeholder'>" +
			"<div class='line'></div><div class='line'></div><div class='line'></div>" +
			"<div class='line'></div><div class='line'></div><div class='line'></div>" +
			"</div>";

		$("#event-data-con-1").html(placeholder);
		$("#event-data-con-2").html(placeholder);
		$("#event-data-con-3").html(placeholder);

		postJson("hms-admin/worker", function(data, status){
			$("#event-data-con-1").html("");
			$("#event-data-con-2").html("");
			$("#event-data-con-3").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#event-data-con-1").html("<h3 class='sleak blue-text' style='font-weight: bold;'>" +
						"<i class='code blue icon'></i> Event details</h3>" +
						"<table class='ui very basic padded table'>" +
						"<tbody>" +
						"<tr><td>Title</td><td>"+d.data.Title+"</td></tr>" +
						"<tr><td>Created</td><td>"+d.data.Created.WeekDay+", "+d.data.Created.Day+"/"+d.data.Created.MonthName+"/"+d.data.Created.Year+"</td></tr>" +
						"<tr><td>Event Name</td><td>"+d.data.Eventname+"</td></tr>" +
						"<tr><td>Event Code</td><td>"+d.data.Event+"</td></tr>" +
						"<tr><td>Fired </td><td>"+d.data.Firecount+" (time(s))</td></tr>" +
						"<tr><td>Attached message type</td><td>"+d.data.Message.Type+"</td></tr>" +
						"<tr><td>Delay period</td><td>"+zerofy(d.data.Delayhours)+":"+zerofy(d.data.Delaymins)+"</td></tr>" +
						"</tbody>" +
						"</table>");

					$("#event-data-con-2").html("<h4 class='sleak blue-text' style='font-weight: bold;'>" +
						(d.data.Message.Type == "sms" ? "<i class='open envelope icon' style='color: lightgray;'></i>" :
							"<i class='at icon' style='color: lightgray;'></i>") +
						" Attached message</h4>" +
						"<table class='ui very basic padded table'>" +
						"<tbody>" +
						"<tr><td>Title</td><td>"+d.data.Message.Title+"</td></tr>" +
						(d.data.Message.Type == "email" ?
						"<tr><td>Subject</td><td>"+d.data.Message.Subject+"</td></tr>" : "")+
						"</tbody>" +
						"</table>" +
						"<h6 class='sleak blue-text' style='font-weight: bold;'>Content</h6>" +
						d.data.Message.Body);

					$("#event-data-con-3").html("<h4 class='sleak blue-text' style='font-weight: bold;'>" +
						"<i class='users icon' style='color: lightgray;'></i> Contacts</h4><br/>" +
						(d.data.Contextuser ? "<h6 style='font-family: Lato;'>" +
							"<i class='user circle green icon'></i> Context user (Source of the event)</h6>" : "") +
						(d.data.Guest ? "<h6 style='font-family: Lato;'><i class='group green icon'></i>  Guests</h6>" : "") +
						(d.data.Customer ? "<h6  style='font-family: Lato;'><i class='user green icon'></i> Cuestomers</h6>" : "") +
						(d.data.Staff ? "<h6  style='font-family: Lato;'><i class='male green icon'></i> Staff</h6>" : "") +
						(d.data.Subscribers ? "<h6 style='font-family: Lato;'><i class='at green icon'></i> Subscribers</h6>" : "") +
						(d.data.Contactform ? "<h6'  style='font-family: Lato;'><i class='envelope green icon'></i> Contact us form</h6>" : ""));

					for(let h = 0; h < d.data.Customlist.length; h++)
					{
						getElement("event-data-con-3").appendChild(
							div({add:"<h6 style='font-family: Lato;'><i class='list green icon'></i> "+
									d.data.Customlist[h].Name+" <small>(Custom list) ("+d.data.Customlist[h].Itemcount+" contacts)</small></h6>"}));
					}
				}
				else
				{

				}
			}
			else
			{

			}
		},{job:"get event", eventid:e})
	}

	function loadScheduleData(e)
	{
		let placeholder = "<div class='ui placeholder'>" +
			"<div class='line'></div><div class='line'></div><div class='line'></div>" +
			"<div class='line'></div><div class='line'></div><div class='line'></div>" +
			"</div>";

		$("#event-data-con-1").html(placeholder);
		$("#event-data-con-2").html(placeholder);
		$("#event-data-con-3").html(placeholder);

		postJson("hms-admin/worker", function(data, status){
			$("#event-data-con-1").html("");
			$("#event-data-con-2").html("");
			$("#event-data-con-3").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#event-data-con-1").html("<h3 class='sleak blue-text' style='font-weight: bold;'>" +
						"<i class='calendar outline alternate blue icon'></i> Schedule details</h3>" +
						"<table class='ui very basic padded table'>" +
						"<tbody>" +
						"<tr><td>Title</td><td>"+d.data.Title+"</td></tr>" +
						"<tr><td>Created</td><td>"+d.data.Created.WeekDay+", "+d.data.Created.Day+"/"+d.data.Created.MonthName+"/"+d.data.Created.Year+"</td></tr>" +
						"<tr><td>Year</td><td>"+(Number(d.data.Year) == 0 ? "Every year" : d.data.Year)+"</td></tr>" +
						"<tr><td>Month</td><td>"+(Number(d.data.Month) == 0 ? "Every month" : IntToMonth(d.data.Month))+"</td></tr>" +
						"<tr><td>Day</td><td>"+(Number(d.data.Day) == 0 ? "Every month" : zerofy(d.data.Day))+"</td></tr>" +
						"<tr><td>Time </td><td>"+zerofy(d.data.Hour)+":"+zerofy(d.data.Minuet)+" "+d.data.Meridian+"</td></tr>" +
						"<tr><td>Attached message type</td><td>"+d.data.Message.Type+"</td></tr>" +
						"<tr><td>Max execution</td><td>"+d.data.Execcount+"</td></tr>" +
						"<tr><td>Auto delete</td><td>"+(d.data.Autodelete ? "True" : "false")+"</td></tr>" +
						"<tr><td>Executed</td><td>"+d.data.Executed+" (time(s))</td></tr>" +
						"<tr><td>Status</td><td>"+(d.data.Completed ? "Completed" : "Waiting")+"</td></tr>" +
						"</tbody>" +
						"</table>");

					$("#event-data-con-2").html("<h4 class='sleak blue-text' style='font-weight: bold;'>" +
						(d.data.Message.Type == "sms" ? "<i class='open envelope icon' style='color: lightgray;'></i>" :
							"<i class='at icon' style='color: lightgray;'></i>") +
						" Attached message</h4>" +
						"<table class='ui very basic padded table'>" +
						"<tbody>" +
						"<tr><td>Title</td><td>"+d.data.Message.Title+"</td></tr>" +
						(d.data.Message.Type == "email" ?
							"<tr><td>Subject</td><td>"+d.data.Message.Subject+"</td></tr>" : "")+
						"</tbody>" +
						"</table>" +
						"<h6 class='sleak blue-text' style='font-weight: bold;'>Content</h6>" +
						d.data.Message.Body);

					$("#event-data-con-3").html("<h4 class='sleak blue-text' style='font-weight: bold;'>" +
						"<i class='users icon' style='color: lightgray;'></i> Contacts</h4><br/>" +
						(d.data.Contextuser ? "<h6 style='font-family: Lato;'>" +
							"<i class='user circle green icon'></i> Context user (Source of the event)</h6>" : "") +
						(d.data.Guest ? "<h6 style='font-family: Lato;'><i class='group green icon'></i>  Guests</h6>" : "") +
						(d.data.Customers ? "<h6  style='font-family: Lato;'><i class='user green icon'></i> Cuestomers</h6>" : "") +
						(d.data.Staff ? "<h6  style='font-family: Lato;'><i class='male green icon'></i> Staff</h6>" : "") +
						(d.data.Subscribers ? "<h6 style='font-family: Lato;'><i class='at green icon'></i> Subscribers</h6>" : "") +
						(d.data.Contactus ? "<h6'  style='font-family: Lato;'><i class='envelope green icon'></i> Contact us form</h6>" : ""));

					for(let h = 0; h < d.data.Customlist.length; h++)
					{
						getElement("event-data-con-3").appendChild(
							div({add:"<h6 style='font-family: Lato;'><i class='list green icon'></i> "+
									d.data.Customlist[h].Name+" <small>(Custom list) ("+d.data.Customlist[h].Itemcount+" contacts)</small></h6>"}));
					}
				}
				else
				{

				}
			}
			else
			{

			}
		},{job:"single message schedule", scheduleid:e})
	}

    function importCustomContactList()
    {
        selectCustomlist(function(id, name){
            if(getElement(id+"-contact-list") == null)
            {
                let tr = document.createElement("tr");
                tr.id = id+"-contact-list";
                tr.className = "custom-list-item";
                tr.innerHTML = "<td><label><input id='"+id+"' class='filled-in contact-list-item' type='checkbox' " +
                    "checked onchange=\"removeCustomList('"+id+"')\"/><span></span></label></td>" +
                    "<td><label>"+name+"</label></td>";
                getElement("contact-table-list").appendChild(tr);
            }
        });
    }

    function removeCustomList(e)
    {
        getElement("contact-table-list").removeChild(getElement(e+"-contact-list"));
    }

	function saveMessageSettings(e)
	{
		let request = {
			lowunitphone:$("#low-unit-phone").val(),
			tagprocessing:"remove",
			ononiruapikey:$("#ononiru-message-api-key").val(),
			lowunitpoint:$("#low-uint-point").val(),
			job:"save message settings"
		};

		if(getElement("leave-tag").checked)
		{
			request.tagprocessing = "leave";
		}
		if(getElement("cancel-tag").checked)
		{
			request.tagprocessing = "cancel";
		}


		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					if((e.type === "checkbox") || (e.type === "radio"))
					{
						e.checked = !e.checked;
					}
					if((e.type === "text") || (e.type === "textarea"))
					{
						e.value = "";
					}

					dropNotification(d.message);
				}
			}
			else
			{
				if((e.type === "checkbox") || (e.type === "radio"))
				{
					e.checked = !e.checked;
				}
				if((e.type === "text") || (e.type === "textarea"))
				{
					e.value = "";
				}

				dropNotification("Connection error. Unable to save settings");
			}
		},request);
	}

	function connectOnoniruMessaging()
	{
		loadingButton({btn:"api-connect-button"});
		postJson("hms-admin/worker", function(data, status){
			loadingButton({btn:"api-connect-button", loading: false});
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					ShowModal("Success! API connected successfully");
				}
				else
				{
					ShowModal(d.message);
				}
			}
			else
			{
				ShowModal("Connection error. Unable to complete operation.");
			}
		},{job:"connect ononiru messaging api"})
	}


	/// ------------------------------- Doing property Logic --------------------------------

	function checkPropertyImages()
	{
		let cons = document.getElementsByClassName("property-image");
		let found = 0;

		for(let i = 0; i < cons.length; i++)
		{
			if($(cons[i]).find(".property-image-file").val() === "")
			{
				found++;
			}
		}

		if(found === 0)
		{
			let i = 0 ;

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
		con.className = "w3-col l4 m6 s12 property-image";

		con.innerHTML =
			"<div class='pad-1' style='position: relative;'>" +
			"<button id='close-btn-"+n+"' class='ui circular red icon button' " +
			"style='position: absolute; right: -10px; top: -10px; z-index: 100;' onclick=\"removePropertyImage('"+n+"')\" disabled>" +
			"<i class='times icon'></i></button> " +
			"<div class='w3-card' style=\"min-height: 180px; " +
			"background-image: url('" + host + "cdn/images/icons/pastel/imageplaceholder.png'); " +
			"background-repeat: no-repeat; background-position: center; position: relative;\">" +
			"<img class='propert-images' id='item-img-"+n+"' src='' style='width: 100%;'/>" +
			"<button id='item-btn-"+n+"' class='ui circular compact sleak blue-back button' " +
			"style='position:absolute; bottom:-15px; right:0px;'" +
			" onclick=\"getElement('item-file-"+n+"').click()\">" +
			"<i class='plus icon'></i>Property picture</button>" +
			"<input class='property-image-file' id='item-file-"+n+"' type='file' style='display: none;' " +
			"onchange=\"processItemImage(this, "+n+"); checkPropertyImages(); getElement('close-btn-"+n+"').disabled = false;\"/>" +
			"<input class='propert-image-input' id='item-file-name-"+n+"' type='hidden' value=''/>" +
			"</div> " +
			"</div>";

		getElement("property-images-con").appendChild(con);
	}

	function driverConToggle(e)
	{
		if(e.checked)
		{
			$("#add-driver-con").slideDown(400);
		}
		else
		{
			$("#add-driver-con").slideUp(400);
		}
	}



	//-----------------------------------------------------------------------
	function SaveProperty()
	{
		let request = {};
		request.Propertyid = $("#propertyid").val();
		request.Name = $("#property-name").val();
		request.Phone1 = $("#phone1").val();
		request.Phone2 = $("#phone2").val();
		request.Email1 = $("#email1").val();
		request.Email2 = $("#email2").val();
		request.Type = $("#property-type").val();
		request.State = $("#property-state").dropdown('get value');
		request.City = $("#property-city").dropdown('get value');
		request.Description = $("#property-description").val();
		request.Address = $("#property-address").val();
		request.Tandc = $("#tandc").val();
		request.Images = [];
		request.Wifi = getElement("wifi").checked;
		request.Parking = getElement("parking").checked;
		request.Gym = getElement("gym").checked;
		request.Restaurant = getElement("restaurant").checked;
		request.Bar = getElement("bar").checked;
		request.Security = getElement("security").checked;
		request.Status = $("#status").val();


		let images = document.getElementsByClassName("propert-image-input");

		for(let i = 0; i < images.length; i++)
		{
			if(images[i].value !== "")
			{
				request.Images.push(images[i].value);
			}
		}

		if(request.Images.length === 0)
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"At at least one image"});
		}
		else if(request.City === "")
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Select properties city"});
		}
		else if(request.State === "")
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Select properties state"});
		}
		else if(request.Name === "")
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Name is empty"});
		}
		else if((request.Phone1 === "") && (request.Phone2 === ""))
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Enter at leaste one phone number"});
		}
		else if((request.Email1 === "") && (request.Email2 == ""))
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Enter at leaste one email"});
		}
		else if(request.Type === "")
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Select property type"});
		}
		else if(request.Address === "")
		{
			error = true;
			errorButton({btn:"save-property-btn", msg:"Address is empty"});
		}
		else
		{
			request.job = "saveproperty";

			loadingButton({btn:"save-property-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"save-property-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$(".propert-image-input").val("");
						$(".propert-images").attr("src", "");

						$("#propertyid").val("");
						$("#property-name").val("");
						$("#phone1").val("");
						$("#phone2").val("");
						$("#email1").val("");
						$("#email2").val("");
						$("#property-type").dropdown('restor defaults');
						$("#property-description").val("");
						$("#property-address").val("");
						$("#tandc").val("");
						getElement("wifi").checked = false;
						getElement("parking").checked = false;
						getElement("gym").checked = false;
						getElement("restaurant").checked = false;
						getElement("bar").checked = false;
						getElement("security").checked = false;
						$("#status").val("true");

						$("#save-property-btn").addClass("success disabled");
						$("#save-property-btn").html("<i class='check icon'></i> Property saved");
						setTimeout(function(){
							$("#save-property-btn").removeClass("success disabled");
							$("#save-property-btn").html("Save property");
						}, 3000);
					}
					else
					{
						errorButton({btn:"save-property-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"save-property-btn", msg:"Connection error"});
				}
			}, request);
		}
	}

	function ConfirmGroupPropertyDelete()
	{
		ConfirmModal("All data from deleted properties will be dumped?", function(choice){
			if(choice === true)
			{
				PropertyGroupDelete();
			}
		});
	}

	function ConfirmPropertyDelete(e)
	{
		ConfirmModal("Deleting a property will force all it's data to be dumped?", function(choice, param){
			if(choice === true)
			{
				PropertyListDelete(param);
			}
		}, "Continue", "Cancel", e);
	}

	function PropertyGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteProperty(lst[i].id, function(status, msg){
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status === "done")
					{
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				//ShowModal("<b>("+ errors +")</b> Propertys failed to delete");
			}
		}
		else
		{
			//ShowModal("No Propertys were selected");
		}
	}

	function PropertyListDelete(e)
	{
		$("#"+e+"-btn").addClass("loading");
		DeleteProperty(e, function(status, msg){
			$("#"+e+"-btn").removeClass("loading");
			if(status == "done")
			{
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteProperty(e, func)
	{
		let request = {};
		request.Propertyid = e;
		request.job = "deleteproperty";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function GetProperty(e)
	{
		let request = {};
		request.Propertyid = id;
		request.job = "getproperty";

		postJson("hms-admin/worker", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "success")
				{
					//Get success marker goes here
					/*
					$('#name').val(d.data.Property.Name);
					$('#phone1').val(d.data.Property.Phone1);
					$('#phone2').val(d.data.Property.Phone2);
					$('#email1').val(d.data.Property.Email1);
					$('#email2').val(d.data.Property.Email2);
					$('#type').val(d.data.Property.Type);
					$('#state').val(d.data.Property.State);
					$('#city').val(d.data.Property.City);
					$('#owner').val(d.data.Owner.value);
					$('#description').val(d.data.Property.Description);
					$('#address').val(d.data.Property.Address);
					$('#tandc').val(d.data.Property.Tandc);
					$('#images').val(d.data.Property.Images);
					$('#wifi').val(d.data.Property.Wifi);
					$('#parking').val(d.data.Property.Parking);
					$('#gym').val(d.data.Property.Gym);
					$('#restaurant').val(d.data.Property.Restaurant);
					$('#bar').val(d.data.Property.Bar);
					$('#security').val(d.data.Property.Security);
					$('#status').val(d.data.Property.Status);
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		}, request);
	}

	function ListProperty()
	{
		//Loading animation
		//

		getJson("listproperty.php", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "SUCCESS")
				{
					//Get success marker goes here
					/*
					for(var i = 0; i < d.data.length; i++)
					{
						let op = document.createElement('option');
						op.value = d.data[i].Property.Propertyid
						document.getElementById('property_list').appendChild(op);
					}
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		});
	}

	function changePropertyState(e, a)
	{
		postJson("hms-admin/worker",function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					a.checked = !a.checked;
					ShowModal(m.message);
				}
			}
			else
			{
				a.checked = !a.checked;
				ShowModal("Connection error. Unable to save property status");
			}
		},{job:"changepropertystatus", Propertyid:e, status:a.checked})
	}


	//-------------------------------------------------------------------------------------------

	function SaveVehicle()
	{
		let request = {};
		request.Vehicleid = $("#vehicleid").val();
		request.Image1 = $("#item-file-name-1").val();
		request.Image2 = $("#item-file-name-2").val();
		request.Image3 = $("#item-file-name-3").val();
		request.Image4 = $("#item-file-name-4").val();
		request.Type = $("#type").val();
		request.Model = $("#model").val();
		request.Color = $("#color").val();
		request.Seats = Number($("#seats").val());
		request.Description = $("#description").val();
		request.Ac = $("#ac").prop("checked");
		request.Automatic = $("#automatic").prop("checked");
		request.Tv = $("#tv").prop("checked");
		request.Fridge = $("#fridge").prop("checked");
		request.Seatwarmer = $("#seatwarmer").prop("checked");
		request.Cupholder = $("#cupholder").prop("checked");
		request.Status = $("#status").val();
		request.Driver = $("#driver").val();
		request.Price = Number($("#price").val());
		request.Extramilage = Number($("#extramilage").val());
		request.Milagecap = $("#milagecap").val();
		request.State = $("#state").dropdown("get value");
		request.City = $("#city").dropdown("get value");


		if((request.Image1 === "") && (request.Image2 === "") && (request.Image3 === "") && (request.Image4 === ""))
		{
			errorButton({btn:"save-vehicle-btn", msg:"Add at least one image"});
		}
		else if(request.Type === "")
		{
			errorButton({btn:"save-vehicle-btn", msg:"Select vehicle type"});
		}
		else if(request.Model === "")
		{
			errorButton({btn:"save-vehicle-btn", msg:"Enter vehicle model"});
		}
		else if(request.Color === "")
		{
			errorButton({btn:"save-vehicle-btn", msg:"Enter vehicle color"});
		}
		else if(Number(request.Seats) < 1 )
		{
			errorButton({btn:"save-vehicle-btn", msg:"Invalid number of seats"});
		}
		else if(request.City === "")
		{
			errorButton({btn:"save-vehicle-btn", msg:"Select or add city"});
		}
		else if(request.State === "")
		{
			errorButton({btn:"save-vehicle-btn", msg:"Select or add state"});
		}
		else if(Number(request.Price) < 1 )
		{
			errorButton({btn:"save-vehicle-btn", msg:"Invalid price"});
		}
		else
		{
			request.job = "savevehicle";

			loadingButton({btn:"save-vehicle-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"save-vehicle-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#vehicleid").val("");
						$("#item-file-name-1").val("");
						$("#item-file-name-2").val("");
						$("#item-file-name-3").val("");
						$("#item-file-name-4").val("");
						$("#item-img-1").prop("src","");
						$("#item-img-2").prop("src","");
						$("#item-img-3").prop("src","");
						$("#item-img-4").prop("src","");
						$("#type").dropdown('restore defaults');
						$("#model").val("");
						$("#color").val("");
						$("#seats").val(4);
						$("#description").val("");
						$("#ac").prop("checked", "true");
						$("#automatic").prop("checked", false);
						$("#tv").prop("checked", false);
						$("#fridge").prop("checked", false);
						$("#seatwarmer").prop("checked", false);
						$("#cupholder").prop("checked", false);
						$("#status").val("true");
						$("#driver").val("restore default");
						$("#price").val(0);
						$("#extramilage").val(0);
						$("#milagecap").val(0);
						$("#state").dropdown("restore default");
						$("#city").dropdown("restore default");


						$("#save-vehicle-btn").addClass("positive disabled");
						$("#save-vehicle-btn").html("<i class='check icon'></i> vehicle saved");
						setTimeout(function(){
							$("#save-vehicle-btn").removeClass("positive disabled");
							$("#save-vehicle-btn").html("Save vehicle");
						}, 3000);
					}
					else
					{
						errorButton({btn:"save-vehicle-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"save-vehicle-btn", msg:"Connection error"});
				}
			}, request);
		}
	}

	function ConfirmGroupVehicleDelete()
	{
		ConfirmModal("All the data for the deleted vehicles will be lost?", function(choice){
			if(choice === true)
			{
				VehicleGroupDelete();
			}
		});
	}

	function ConfirmVehicleDelete(e)
	{
		ConfirmModal("All the data for the vehicle will be lost?", function(choice, param){
			if(choice === true)
			{
				VehicleListDelete(param);
			}
		}, "Continue", "Cancel", e);
	}

	function VehicleGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteVehicle(lst[i].id, function(status, msg){
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status === "done")
					{
						//Deletion success
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Vehicles failed to delete");
			}
		}
		else
		{
			ShowModal("No Vehicles were selected");
		}
	}

	function VehicleListDelete(e)
	{
		$("#"+e+"-btn").addClass("loading");
		DeleteVehicle(e, function(status, msg){
			$("#"+e+"-btn").removeClass("loading");
			if(status === "done")
			{
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				ShowModal(msg);
			}
		});
	}

	function DeleteVehicle(e, func)
	{
		let request = {};
		request.Vehicleid = e;
		request.job = "deletevehicle";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function GetVehicle(e)
	{
		let request = {};
		request.Vehicleid = id;

		postJson("getvehicle.php", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "SUCCESS")
				{
					//Get success marker goes here
					/*
					$('#image1').val(d.data.Vehicle.Image1);
					$('#image2').val(d.data.Vehicle.Image2);
					$('#image3').val(d.data.Vehicle.Image3);
					$('#image4').val(d.data.Vehicle.Image4);
					$('#type').val(d.data.Vehicle.Type);
					$('#model').val(d.data.Vehicle.Model);
					$('#color').val(d.data.Vehicle.Color);
					$('#seats').val(d.data.Vehicle.Seats);
					$('#description').val(d.data.Vehicle.Description);
					$('#ac').prop("checked", d.data.Vehicle.Ac);
					$('#automatic').prop("checked", d.data.Vehicle.Automatic);
					$('#tv').prop("checked", d.data.Vehicle.Tv);
					$('#fridge').prop("checked", d.data.Vehicle.Fridge);
					$('#seatwarmer').prop("checked", d.data.Vehicle.Seatwarmer);
					$('#cupholder').prop("checked", d.data.Vehicle.Cupholder);
					$('#status').prop("checked", d.data.Vehicle.Status);
					$('#driver').val(d.data.Driver.value);
					$('#price').val(d.data.Vehicle.Price);
					$('#extramilage').val(d.data.Vehicle.Extramilage);
					$('#milagecap').val(d.data.Vehicle.Milagecap);
					$('#owner').val(d.data.Owner.value);
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		}, request);
	}

	function ListVehicle()
	{
		//Loading animation
		//

		getJson("listvehicle.php", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "SUCCESS")
				{
					//Get success marker goes here
					/*
					for(var i = 0; i < d.data.length; i++)
					{
						let op = document.createElement('option');
						op.value = d.data[i].Vehicle.Vehicleid
						document.getElementById('vehicle_list').appendChild(op);
					}
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		});
	}

	function changeVehicleState(e, a)
	{
		postJson("hms-admin/worker",function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					a.checked = !a.checked;
					ShowModal(m.message);
				}
			}
			else
			{
				a.checked = !a.checked;
				ShowModal("Connection error. Unable to save vehicle status");
			}
		},{job:"changevehiclestatus", Vehicleid:e, status:a.checked})
	}


	//-----------------------------------------------------------------------------------------
	function SaveDriver()
	{
		let request = {};
		request.Driverid = $("#driverid").val();
		request.Name = $("#name").val();
		request.Surname = $("#surname").val();
		request.Phone = $("#phone").val();
		request.Email = $("#email").val();
		request.Password = $("#password").val();
		request.Profilepic = $("#item-file-name-1").val();
		request.Gender = $("#male").prop("checked") ? "male" : "female";
		request.Dob = $("#dob").val();
		request.Address = $("#address").val();
		request.City = $("#city").val();
		request.State = $("#state").val();
		request.Available = $("#on-webfront").prop("checked");
		request.Status = $("#status").val();

		if(request.Name === "")
		{
			errorButton({btn:"save-driver-btn", msg:"Name is empty"});
		}
		else if(request.Surname === "")
		{
			errorButton({btn:"save-driver-btn", msg:"Surname is empty"});
		}
		else if(request.Phone === "")
		{
			errorButton({btn:"save-driver-btn", msg:"Phone is empty"});
		}
		else if(request.Email === "")
		{
			errorButton({btn:"save-driver-btn", msg:"Invalid email"});
		}
		else if(request.Dob.split("/").length < 2)
		{
			errorButton({btn:"save-driver-btn", msg:"Invalid date of birth"});
		}
		else if(request.City === "")
		{
			errorButton({btn:"save-driver-btn", msg:"City is empty"});
		}
		else if(request.State == "")
		{
			errorButton({btn:"save-driver-btn", msg:"State is empty"});
		}
		else
		{
			request.job = "savedriver";

			loadingButton({btn:"save-driver-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"save-driver-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#item-img-1").prop("src","");
						$("#driverid").val("");
						$("#name").val("");
						$("#surname").val("");
						$("#phone").val("");
						$("#email").val("");
						$("#password").val("");
						$("#item-file-name-1").val("");
						$("#dob").val("");
						$("#address").val("");
						$("#city").val("");
						$("#state").val("");
						$("#on-webfront").prop("checked", false);
						$("#status").val("true");


						$("#save-driver-btn").addClass("positive disabled");
						$("#save-driver-btn").html("<i class='check icon'></i> driver saved");
						setTimeout(function(){
							$("#save-driver-btn").removeClass("positive disabled");
							$("#save-driver-btn").html("Save driver");
						},3000);
					}
					else
					{
						errorButton({btn:"save-driver-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"save-driver-btn", msg:"Connection error"});
				}
			}, request);
		}
	}

	function ConfirmGroupDriverDelete()
	{
		ConfirmModal("All the data associated with the drivers will be deleted", function(choice){
			if(choice === true)
			{
				DriverGroupDelete();
			}
		});
	}

	function ConfirmDriverDelete(e)
	{
		ConfirmModal("All data on the driver will be lost?", function(choice, param){
			if(choice === true)
			{
				DriverListDelete(param);
			}
		}, "Continue", "Cancel", e);
	}

	function DriverGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeleteDriver(lst[i].id, function(status, msg){
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status == "done")
					{
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				//ShowModal("<b>("+ errors +")</b> Drivers failed to delete");
			}
		}
		else
		{
			//ShowModal("No Drivers were selected");
		}
	}

	function DriverListDelete(e)
	{
		$("#"+e+"-btn").addClass("loading");
		DeleteDriver(e, function(status, msg){
			$("#"+e+"-btn").removeClass("loading");
			if(status === "done")
			{
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				//Deletion Failed
				ShowModal(msg);
			}
		});
	}

	function DeleteDriver(e, func)
	{
		let request = {};
		request.Driverid = e;
		request.job = "deletedriver";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function GetDriver(e)
	{
		let request = {};
		request.Driverid = id;

		postJson("getdriver.php", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "SUCCESS")
				{
					//Get success marker goes here
					/*
					$('#name').val(d.data.Name);
					$('#surname').val(d.data.Surname);
					$('#phone').val(d.data.Phone);
					$('#email').val(d.data.Email);
					$('#password').val(d.data.Password);
					$('#profilepic').val(d.data.Profilepic);
					$('#gender').val(d.data.Gender);
					$('#dob').val(d.data.Dob);
					$('#address').val(d.data.Address);
					$('#city').val(d.data.City);
					$('#state').val(d.data.State);
					$('#available').prop("checked", d.data.Available);
					$('#status').val(d.data.Status);
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		}, request);
	}

	function ListDriver()
	{
		//Loading animation
		//

		getJson("listdriver.php", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "SUCCESS")
				{
					//Get success marker goes here
					/*
					for(var i = 0; i < d.data.length; i++)
					{
						let op = document.createElement('option');
						op.value = d.data[i].Driverid
						document.getElementById('driver_list').appendChild(op);
					}
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		});
	}


	function changeDriverState(e, a)
	{
		postJson("hms-admin/worker",function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status !== "success")
				{
					a.checked = !a.checked;
					ShowModal(m.message);
				}
			}
			else
			{
				a.checked = !a.checked;
				ShowModal("Connection error. Unable to save driver status");
			}
		},{job:"changedriverstatus", Driverid:e, status:a.checked})
	}


	//------------------------------------------------------------------------------------------------

	function SavePartner()
	{
		let request = {};
		request.Partnerid = $("#partnerid").val();
		request.Salutation = $("#salutation").val();
		request.Name = $("#name").val();
		request.Surname = $("#surname").val();
		request.Phone = $("#phone").val();
		request.Email = $("#email").val();
		request.Profilepic = $("#item-file-name-1").val();
		request.Gender = $("#male").prop("checked") ? "male" : "female";
		request.Country = $("#country").val();
		request.State = $("#state").val();
		request.City = $("#city").val();
		request.Address = $("#address").val();
		request.Status = $("#status").val();


		if(request.Name === "")
		{
			errorButton({btn:"save-partner-btn", msg:"Name is empty"});
		}
		else if(request.Surname === "")
		{
			errorButton({btn:"save-partner-btn", msg:"Surname is empty"});
		}
		else if(request.Phone === "")
		{
			errorButton({btn:"save-partner-btn", msg:"Invalid phone number"});
		}
		else if(request.Email === "")
		{
			errorButton({btn:"save-partner-btn", msg:"Invalid email"});
		}
		else if(request.Country === "")
		{
			errorButton({btn:"save-partner-btn", msg:"Select or add country of origin"});
		}
		else if(request.State === "")
		{
			errorButton({btn:"save-partner-btn", msg:"Select or add state of origin"});
		}
		else
		{
			request.job = "savepartner";

			loadingButton({btn:"save-partner-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"save-partner-btn", loading:false});

				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						$("#partnerid").val("");
						$("#salutation").dropdown('restore defaults');
						$("#name").val("");
						$("#surname").val("");
						$("#phone").val("");
						$("#email").val("");
						$("#item-file-name-1").val("");
						$("#male").prop("checked", true);
						$("#country").dropdown('restore defaults');
						$("#state").dropdown('restore defaults');
						//$("#city").dropdown('restore defaults');
						$("#address").val("");
						$("#status").val("true");

						$("#item-img-1").prop("src","");

						$("#save-partner-btn").addClass("positive disabled");
						$("#save-partner-btn").html("<i class='check icon'></i> Partner saved");
						setTimeout(function(){
							$("#save-partner-btn").removeClass("positive disabled");
							$("#save-partner-btn").html("Save partner");
						}, 3000);
					}
					else
					{
						errorButton({btn:"save-partner-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"save-partner-btn", msg:"Connection error"});
				}
			}, request);
		}
	}

	function ConfirmGroupPartnerDelete()
	{
		ConfirmModal("Deleting the partner will delete all their data", function(choice){
			if(choice === true)
			{
				PartnerGroupDelete();
			}
		});
	}

	function ConfirmPartnerDelete(e)
	{
		ConfirmModal("Deleting the partner will delete all their data", function(choice, param){
			if(choice === true)
			{
				PartnerListDelete(param);
			}
		}, "Continue", "Cancel", e);
	}

	function PartnerGroupDelete(e)
	{
		let lst = document.getElementsByClassName("check-sel");
		let errors = 0;
		let found = false;

		for(let i = 0; i < lst.length; i++)
		{
			if(lst[i].checked === true)
			{
				found = true;

				$("#"+lst[i].id+"-btn").addClass("loading");
				DeletePartner(lst[i].id, function(status, msg){
					$("#"+lst[i].id+"-btn").removeClass("loading");
					if(status === "done")
					{
						$('#'+lst[i].id+'-row').slideUp(500, function(){
							document.getElementById('table-body').removeChild(document.getElementById(lst[i].id+'-row'));
						});
					}
					else
					{
						errors++;
					}
				});
			}
		}

		if(found === true)
		{
			if(errors > 0)
			{
				ShowModal("<b>("+ errors +")</b> Partners failed to delete");
			}
		}
		else
		{
			ShowModal("No Partners were selected");
		}
	}

	function PartnerListDelete(e)
	{
		$("#"+e+"-btn").addClass("loading");
		DeletePartner(e, function(status, msg){
			$("#"+e+"-btn").removeClass("loading");
			if(status === "done")
			{
				//Deletion success
				$('#'+e+'-row').slideUp(500, function(){
					document.getElementById('table-body').removeChild(document.getElementById(e+'-row'));
				});
			}
			else
			{
				ShowModal(msg);
			}
		});
	}

	function DeletePartner(e, func)
	{
		let request = {};
		request.Partnerid = e;
		request.job = "deletepartner";

		postJson("hms-admin/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(typeof(func) == "function")
					{
						func("done");
					}
				}
				else
				{
					if(typeof(func) == "function")
					{
						func("error", d.message);
					}
				}
			}
			else
			{
				if(typeof(func) == "function")
				{
					func("error", "Connection Error. Check your connection and try again");
				}
			}
		}, request);
	}

	function GetPartner(e)
	{
		let request = {};
		request.Partnerid = id;
		request.job = "getpartner";

		postJson("hms-admin/worker", function(data, status){
			//End loading animation
			//

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					//Get success marker goes here
					/*
					$('#salutation').val(d.data.Salutation);
					$('#name').val(d.data.Name);
					$('#surname').val(d.data.Surname);
					$('#phone').val(d.data.Phone);
					$('#email').val(d.data.Email);
					$('#password').val(d.data.Password);
					$('#profilepic').val(d.data.Profilepic);
					$('#gender').val(d.data.Gender);
					$('#country').val(d.data.Country);
					$('#state').val(d.data.State);
					$('#city').val(d.data.City);
					$('#address').val(d.data.Address);
					$('#status').val(d.data.Status);
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		}, request);
	}

	function ListPartner()
	{
		//Loading animation
		//
		getJson("listpartner.php", function(data, status){
			//End loading animation
			//

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "SUCCESS")
				{
					//Get success marker goes here
					/*
					for(var i = 0; i < d.data.length; i++)
					{
						let op = document.createElement('option');
						op.value = d.data[i].Partnerid
						document.getElementById('partner_list').appendChild(op);
					}
					*/
				}
				else if(d.status == "ACCESS_DENIED")
				{
					//Re-login marker goes here
					//
				}
				else
				{
					//Unable to save marker goes here
					//
				}
			}
			else
			{
				//Network error marker goes here
				//
			}
		});
	}