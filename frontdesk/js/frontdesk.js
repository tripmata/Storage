
	let settings = null;
	let discounts = [];
	let receipt = {};

	let searchList = [];

	let pushed = false;
	let fState = false;


	//food order
	let foodOrder = [];
	let savedOrder = [];

	let entity = {id:"", name:"", type:""};

	let businessName = "Undefined name";

	let coupons = [];
	let addedDiscount = [];

	let retainPMethod = false;
	let reprintReceipt = true;


	$(document).ready(function(){
		$(".ui.dropdown").dropdown();

		if(browserIsCompatible())
		{
			initializePOS();
		}
		else
		{
			alert("Your browser is not compatible please update your browser");
		}
	});


	function numFormat(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}


	function browserIsCompatible()
	{
		return typeof (Storage) !== "undefined";
	}

	function initializePOS()
	{
		let cover = document.createElement("div");
		cover.style.backgroundColor = "rgba(255,255,255,0.9)";
		cover.style.position = "fixed";
		cover.style.top = "0px";
		cover.style.width = "100%";
		cover.style.height = "100%";
		cover.style.zIndex = "1000";
		cover.style.textAlign = "center";
		cover.id = "loading-cover";
		cover.innerHTML =
			"<div style='margin-top: 250px;'>" +
			"<div id='loading-cover-content' class='l-width-4' style='margin: auto;'> " +
			"<h1 style='font-weight: normal; font-family: quicksandregular;'>" +
			"<div class='ui inline active loader'></div> Initializing Frontdesk" +
			"</h1><br/><br/>" +
			"<div id='pos-init-bar' class='ui indicating tiny progress'><div class='bar'></div> </div> " +
			"</div>" +
			"</div>";

		document.body.appendChild(cover);

		loadPOSData({onProgress:function (percent) {
				$("#pos-init-bar").progress({percent: percent});
			}, onCompleted:function () {
				$("#pos-init-bar").progress({percent: 100});
				setTimeout(function () {
					$("#loading-cover-content").html("<h1 style='font-family: quicksandregular; font-weight: normal;'>" +
						"<i class='green check icon'></i> Initialization completed</h1>");
					$("#activity-con").html("<i class='signal green-txt icon'></i> Connected");
					setTimeout(function () {
						document.body.removeChild(getElement("loading-cover"));
						if(!receipt.isValid)
						{
							ShowModal("The receipt for your terminal has not been properly set-up, is damaged or missing. please contact admin to resolve this");
						}
						initRoutine();
						drawCheckin();
					}, 2000);
				},1000);
			}, onError:function () {

			}});
	}

	function applyCoupon()
	{
		let request = {
			code:$("#coupon_txt").val(),
			item_type:$("#pos-type").val(),
			job:"process coupon"
		};

		if(request.code === "")
		{
			errorButton({btn:"coupon_btn", msg:"No code"});
		}
		else
		{
			loadingButton({btn:"coupon_btn"});
			postJson("hms-pos/worker", function(data, status){
				loadingButton({btn:"coupon_btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.Status === "success")
					{
						let found = false;
						for(let i = 0; i < coupons.length; i++)
						{
							if(d.Data.Id == coupons[i].Id)
							{
								found = true;
							}
						}

						if(!found)
						{
							coupons.push(d.Data);

							let con = document.createElement("div");
							con.className = "w3-row";
							con.id = "coupon-"+d.Data.Id;
							con.innerHTML = "<div class='w3-col l8 m8 s8 pad-t'>" +
								"<label class='sleak' style='font-weight: bold; color: dimgray;'>"+
								d.Data.Title+"</label></div>" +
								"<div class='w3-col l2 m2 s2'>"+
								(d.Data.Bypercentage ? d.Data.Value+"%" : $("#currency-symbol").val()+
									numFormat(Number(d.Data.Value).toFixed(2)))+"</div>" +
								"<div class='w3-col l2 m2 s2 align-r'>" +
								"<i class='red times icon' style='cursor: pointer;' " +
								"onclick=\"removeCoupon('"+d.Data.Id+"')\"></i> " +
								"</div>";

							getElement("discount-list-con").appendChild(con);

							calculate();
						}
						$("#coupon_txt").val("");
						$("#coupon_btn").addClass("positive disabled");
						$("#coupon_btn").html("Coupon added");
						setTimeout(function () {
							$("#coupon_btn").removeClass("positive disabled");
							$("#coupon_btn").html("Add");
						}, 3000);
					}
					else if(d.Status === "coupon error")
					{
						errorButton({btn:"coupon_btn", msg:d.Message});
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

	function removeCoupon(e)
	{
		for(let i = 0; i < coupons.length; i++)
		{
			if(coupons[i].Id === e)
			{
				coupons.splice(i, 1);
			}
		}
		getElement("discount-list-con").removeChild(getElement("coupon-"+e));
		calculate();
	}

	function calculateCouponDiscount()
	{
		let discount = 0.0;

		let cc = document.getElementsByClassName("sale-item");

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let totalAmount = Number($("#"+c+"_price").val()) * Number($("#"+c+"_quantity").val());

			for(let j= 0; j < coupons.length; j++)
			{
				if(coupons[j].Food.includes(c))
				{
					if(coupons[j].Bypercentage)
					{
						discount += ((Number(coupons[j].Value) / 100.0) * totalAmount);
					}
					else
					{
						discount += (Number(coupons[j].Value) > Number($("#"+c+"_price").val())) ? Number($("#"+c+"_price").val()) : Number(coupons[j].Value);
					}
				}
			}
		}
		return discount;
	}


	function buildCouponPixels()
	{
		let pixels = [];

		let cc = document.getElementsByClassName("sale-item");

		for(let j= 0; j < coupons.length; j++)
		{
			let tots = 0;
			for(let i = 0; i < cc.length; i++)
			{
				let c = cc[i].id;
				let totalAmount = Number($("#"+c+"_price").val()) * Number($("#"+c+"_quantity").val());

				if(coupons[j].Food.includes(c))
				{
					if(coupons[j].Bypercentage)
					{
						tots += ((Number(coupons[j].Value) / 100.0) * totalAmount);
					}
					else
					{
						tots += Number(coupons[j].Value) > Number($("#"+c+"_price").val()) ? Number($("#"+c+"_price").val()) : Number(coupons[j].Value);
					}
				}
			}
			pixels.push(coupons[j].Id+":"+tots+":"+coupons[j].Value+":"+(coupons[j].Bypercentage ? "true" : "false"));
		}
		return pixels;
	}


	//----------------------------------- Start of loading POS data----------------------------------------------------

	function loadPOSData(o)
	{
		$("#activity-con").html("<i class='spinner green-txt icon loading'></i>  " +
			"loading data <span class='load-progress-con'>0</span>%");
		loadPOSSettings(function(data, status){
			if(status === "success")
			{
				settings = data;
				$(".load-progress-con").html(5);
				if(o.onProgress != null)
				{
					if(typeof o.onProgress == "function")
					{
						o.onProgress(5);
					}
				}

				loadPOSDiscount(function (data, status) {
					if(status === "success")
					{
						discounts = [];
						for(let i = 0; i < data.length; i++)
						{
							if(data[i].Status)
							{
								discounts.push(data[i]);
							}
						}
						$(".load-progress-con").html(30);
						if(o.onProgress != null)
						{
							if(typeof o.onProgress == "function")
							{
								o.onProgress(30);
							}
						}

						loadPOSReceipt(function (data, status) {
							if(status === "success")
							{
								receipt = data;
								$(".load-progress-con").html(60);
								if(o.onProgress != null)
								{
									if(typeof o.onProgress == "function")
									{
										o.onProgress(60);
									}
								}

								loadItemList(function (data, status) {
									searchList = [];
									for(let i = 0; i < data.length; i++)
									{
										if(data[i].Status)
										{
											searchList.push({title:data[i].Name,
												description:$("#currency-symbol").val()+numFormat(Number(data[i].Price).toFixed(2)),
												value:data[i].Id
											});
										}
									}

									$('.ui.search').search({
										source : searchList,
										searchFields   : [
											'title'
										],
										fullTextSearch: false,
										minCharacters : 2,
										onSelect : function(event) {
											AddItem(event.value);
										}
									});

									$(".load-progress-con").html(90);
									if(o.onProgress != null)
									{
										if(typeof o.onProgress == "function")
										{
											o.onProgress(90);
										}
									}

									window.localStorage.setItem("menu", JSON.stringify(data));

									$(".load-progress-con").html(100);
									$("#activity-con").html("<i class='signal green-txt icon'></i> Connected");
									if(o.onCompleted != null)
									{
										if(typeof o.onCompleted == "function")
										{
											o.onCompleted();
										}
									}
								});
							}
							else
							{
								if(o.onError != null)
								{
									if(typeof o.onError == "function")
									{
										o.onError(status);
									}
								}
							}
						});
					}
					else
					{
						if(o.onError != null)
						{
							if(typeof o.onError == "function")
							{
								o.onError(status);
							}
						}
					}
				});
			}
			else
			{
				if(o.onError != null)
				{
					if(typeof o.onError == "function")
					{
						o.onError(status);
					}
				}
			}
		});
	}

	function loadItemList(func)
	{
		postJson("hms-pos/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(typeof  func == "function")
					{
						func(d.Data, "success");
					}
				}
				else
				{
					if(typeof  func == "function")
					{
						func(d.Message, "error");
					}
				}
			}
			else
			{
				if(typeof  func == "function")
				{
					func("connection", "error");
				}
			}
		},{job:"get pos items", item_type:$("#pos-type").val()});
	}

	function loadPOSSettings(func)
	{
		postJson("hms-pos/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(typeof  func == "function")
					{
						func(d.Data, "success");
					}
				}
				else
				{
					if(typeof  func == "function")
					{
						func(d.Message, "error");
					}
				}
			}
			else
			{
				if(typeof  func == "function")
				{
					func("connection", "error");
				}
			}
		},{job:"get pos settings", item_type:$("#pos-type").val()});
	}

	function loadPOSDiscount(func)
	{
		postJson("hms-pos/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(typeof  func == "function")
					{
						func(d.Data, "success");
					}
				}
				else
				{
					if(typeof  func == "function")
					{
						func(d.Message, "error");
					}
				}
			}
			else
			{
				if(typeof  func == "function")
				{
					func("connection", "error");
				}
			}
		},{job:"get pos discount", item_type:$("#pos-type").val()});
	}

	function loadPOSReceipt(func)
	{
		postJson("hms-pos/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(typeof  func == "function")
					{
						func(d.Data, "success");
					}
				}
				else
				{
					if(typeof  func == "function")
					{
						func(d.Message, "error");
					}
				}
			}
			else
			{
				if(typeof  func == "function")
				{
					func("connection", "error");
				}
			}
		},{job:"get pos receipt", item_type:$("#pos-type").val()});
	}
	//---------------------------------End of loading Initializing POS------------------------------------------







	//--------------------------------- Logic for routines------------------------------------------------------
	function initRoutine()
	{
		let que = null;
		let store = null;

		try
		{
			que = JSON.parse(window.localStorage.getItem("laundry_data_que"));
		}
		catch (e)
		{
			try
			{
				que = JSON.parse(window.localStorage.getItem('laundry_que_store'));
			}
			catch (e)
			{
				ShowModal("There was an error recovering saved data.");
			}
		}
		if(que != null)
		{
			$("#que-indicator").addClass("red");
			$("#que-indicator").removeClass("green");
		}
		runRoutine();
	}

	let emptyRun = 0;
	function runRoutine(o)
	{
		if(!queWork)
		{
			queWork = true;

			let que = JSON.parse(window.localStorage.getItem("laundry_data_que"));

			if(que != null)
			{
				if(que.length > 0)
				{
					postQuedData(que[0]);
				}
				queWork = false;
			}
			else
			{
				setTimeout(function(){
					runRoutine();
				},10000);
			}
		}
		else
		{
			setTimeout(function(){
				runRoutine();
			},5000);
		}
	}

	function postQuedData(o)
	{
		o.job = "save pos sale";
		o.item_type = $("#pos-type").val();

		$("#que-indicator").removeClass("green");
		$("#que-indicator").removeClass("red");
		$("#que-indicator").addClass("yellow");

		if(getElement(o.transId+"-status") != null)
		{
			$("#"+o.transId+"-status").html("<i class='red circle notch loading icon'></i> processing");
		}

		postJson("hms-pos/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					removeFromQue(o);
					$("#activity-con").html("<i class='green signal icon'></i> Connected");
					runRoutine();
				}
				else if(d.Status === "order")
				{
					removeFromQue(o);
					$("#activity-con").html("<i class='green signal icon'></i> Connected");
					runRoutine();
				}
				else
				{
					$("#activity-con").html("<i class='green signal icon'></i> Connected");
					setTimeout(function () {
						runRoutine();
					}, 10000);

					$("#que-indicator").removeClass("green");
					$("#que-indicator").addClass("red");
					$("#que-indicator").removeClass("yellow");

					if(getElement(o.transId+"-status") != null)
					{
						$("#"+o.transId+"-status").html("<small><small><i class='red circle icon'></i></small></small> pending");
					}
				}
			}
			else
			{
				connectionError();

				$("#que-indicator").removeClass("green");
				$("#que-indicator").addClass("red");
				$("#que-indicator").removeClass("yellow");

				if(getElement(o.transId+"-status") != null)
				{
					$("#"+o.transId+"-status").html("<small><small><i class='red circle icon'></i></small></small> pending");
				}
			}
		}, o);
	}

	function removeFromQue(o)
	{
		if(!queWork)
		{
			queWork = true;

			let que = JSON.parse(window.localStorage.getItem("laundry_data_que"));

			if(que != null)
			{
				for(let i = 0; i < que.length; i++)
				{
					if((que[i].transId == o.transId) && (que[i].total == o.total) && (que[i].paidAmount == o.paidAmount))
					{
						que.splice(i, 1);
					}
				}
				if(que.length > 0)
				{
					window.localStorage.setItem("laundry_data_que", JSON.stringify(que));

					if(getElement("order-que-table") != null)
					{
						$("#"+o.transId+"-order-row").transition('drop out', function () {
							getElement("order-que-table").removeChild(getElement(o.transId+"-order-row"));
						});
						$("#que-items-count").html(que.length);
					}
				}
				else
				{
					window.localStorage.removeItem("laundry_data_que");

					$("#que-indicator").addClass("green");
					$("#que-indicator").removeClass("red");
					$("#que-indicator").removeClass("yellow");

					if(getElement("order-que-table") != null)
					{
						$("#order-que-table").html(
							"<tr>" +
							"<td colspan='6'>" +
							"<div class='align-c pad-3'>" +
							"<h3 class='ui icon header'>" +
							"<i class='sync icon' style='color: silver;'></i>" +
							"</h3>" +
							"<h4 class='sleak' style='font-weight: bold; color: dimgray;'>" +
							"Data que is empty" +
							"</h4>" +
							"</div>" +
							"</td>" +
							"</tr>");

						$("#que-items-count").html("0");
					}
				}
			}

			queWork = false;
		}
		else
		{
			setTimeout(function(){
				removeFromQue(o);
			},1000);
		}
	}

	function connectionError()
	{
		$("#activity-con").html("<i class='red times icon'></i> Disconnected");
		setTimeout(function () {
			$("#activity-con").html("<i class='spinner red loading icon'></i> Connecting..");
			runRoutine();
		}, 30000);
	}
	//--------------------------------------- End of routine logic-------------------------------------------------




	//-----------------------------------------------------------------------------------------------------------
	function posTransactions()
	{
		itemsList = [];
		if(getElement("pos-transaction-container") == null)
		{
			loadPageModal({size:"m", onLoaded:function(m){

					$("#modal_"+m.modal+"-inner").html(
						"<div id='pos-transaction-container' class='pad-1'>" +
						"<div class='pad-2'>" +
						"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
						"<i class='blue print icon'></i> POS Transactions" +
						"</h2>" +
						"</div>" +
						DrawSearch({Method:"populatePosTransaction"}).outerHTML+
						DrawTable(["transaction id","Items","Total","Paid","Channel"], {class:"selectable"}).outerHTML +
						"</div>");

					$(".ui.dropdown").dropdown();
					populatePosTransaction();
				}});
		}
		else
		{
			$("#pos-transaction-container").html(
				"<div class='pad-2'>" +
				"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
				"<i class='blue print icon'></i> POS Transactions" +
				"</h2>" +
				"</div>" +
				DrawSearch({Method:"populatePosTransaction"}).outerHTML+
				DrawTable(["transaction id","Items","Total","Paid","Channel"], {class:"selectable"}).outerHTML);

			$(".ui.dropdown").dropdown();
			populatePosTransaction();
		}
	}

	function populatePosTransaction(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.item_type = $("#pos-type").val();
		request.job = "get pos transactions";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		$("#table-body").html(tableLoader(6));

		postJson("hms-pos/worker", function(data, status){
			$("#table-body").html("");
			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populatePosTransaction"));

					if(d.Data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+cdn+"images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Transaction list is empty</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id;
						row.onclick = function(){
							openTransaction(this.id);
						};

						let td0 = document.createElement("td");
						td0.innerHTML = "<span>" + sn + "</span>";



						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Transactionid;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Itemcount;


						let td3 = document.createElement("td");
						td3.innerHTML = $("#currency-symbol").val()+numFormat(((Number(d.Data[i].Total) + Number(d.Data[i].Taxes)) - Number(d.Data[i].Discount)).toFixed(2));

						let td4 = document.createElement("td");
						td4.innerHTML = $("#currency-symbol").val()+numFormat((Number(d.Data[i].Paidamount).toFixed(2)));

						let td5 = document.createElement("td");
						td5.innerHTML = "<span class='status "+((d.Data[i].Channel == "pos" ? "green-back" : "blue-back"))+
							"'>"+d.Data[i].Channel+"</span>";



						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);
						row.appendChild(td5);
						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.Status == "ACCESS_DENIED")
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

	function openTransaction(e)
	{
		if(getElement("pos-transaction-container") == null)
		{
			loadPageModal({size:"m", onLoaded:function(m){

					$("#modal_"+m.modal+"-inner").html(
						"<div class='pad-2 w3-row'>" +
						"<div class='w3-col l9 m9 s9'>" +
						"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
						"<i class='blue cart icon'></i> Transaction details" +
						"</h2>" +
						"</div> " +
						"<div class='w3-col l3 m3 s3 align-r'>" +
						"<button class='ui icon blue button' onclick='posTransactions()'>" +
						"<i class='arrow left icon'></i></button> " +
						"</div>" +
						"</div>" +
						"<hr/>" +
						"<div class='pad-1' id='transaction-detail-con'></div>" +
						"</div>");
					loadTransactionDetail(e);
				}});
		}
		else
		{
			$("#pos-transaction-container").html(
				"<div class='pad-2 w3-row'>" +
				"<div class='w3-col l9 m9 s9'>" +
				"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
				"<i class='blue cart icon'></i> Transaction details" +
				"</h2>" +
				"</div> " +
				"<div class='w3-col l3 m3 s3 align-r'>" +
				"<button class='ui icon blue button' onclick='posTransactions()'>" +
				"<i class='arrow left icon'></i></button> " +
				"</div>" +
				"</div>" +
				"<hr/>" +
				"<div class='pad-1' id='transaction-detail-con'></div>" +
				"</div>");

			$(".ui.dropdown").dropdown();
			loadTransactionDetail(e);
		}
	}

	function loadTransactionDetail(e)
	{
		$("#transaction-detail-con").html(
			"<div class='ui placeholder'>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div>" +
			"<div class='ui placeholder'>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div>");

		postJson("hms-pos/worker", function (data, status) {
			$("#transaction-detail-con").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					let content = "<table class='ui very basic table'>";

					for(let i = 0; i < d.Data.Items.length; i++)
					{
						content +=
							"<tr>" +
							"<td>"+d.Data.Items[i].Item.Name+"</td>" +
							"<td>"+d.Data.Items[i].Quantity+"</td>" +
							"</tr>";
					}
					content += "</table>";

					content += "<div>" +
						"<h6><span style='color: silver;'>Trans date:</span>"+d.Data.Created.WeekDay+", "+
						d.Data.Created.Day+"/"+d.Data.Created.Month+"/"+d.Data.Created.Year+"</h6>" +
						"<h6><span style='color: silver;'>Total: </span>"+ $("#currency-symbol").val() +
						numFormat(((Number(d.Data.Total) + Number(d.Data.Taxes)) - Number(d.Data.Discount)).toFixed(2)) +"</h6>" +
						"<h6><span style='color: silver;'>Paid: </span>"+ $("#currency-symbol").val() +
						numFormat((Number(d.Data.Paidamount)).toFixed(2)) +"</h6>" +
						"</div>";

					content +=
						"<hr/>" +
						"<div style='margin-t-2 margin-b-2'>" +
						"<h6>Receive payment</h6>" +
						"<div class='ui labeled input'>" +
						"<label class='ui label'>Amount "+$("#currency-symbol").val()+"</label> " +
						"<input id='t-pay-amount' type='text' value='"+
						(((Number(d.Data.Total) + Number(d.Data.Taxes)) - Number(d.Data.Discount)) -
							(Number(d.Data.Paidamount))).toFixed(2)+"'/>" +
						"</div>" +
						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l4 m4 s4'>" +
						"<label><input id='t-pay-cash' class='with-gap' name='t-pay-method' type='radio'/><span>Cash</span></label>" +
						"</div> " +
						"<div class='w3-col l4 m4 s4'>" +
						"<label><input id='t-pay-pos' class='with-gap' name='t-pay-method' type='radio'/><span>POS</span></label>" +
						"</div> " +
						"<div class='w3-col l4 m4 s4'>" +
						"<label><input id='t-pay-others' class='with-gap' name='t-pay-method' type='radio'/><span>Others</span></label>" +
						"</div> " +
						"</div>" +
						"<div style='margin: 10px;'>" +
						"<button id='t-payment-btn' class='ui blue button' onclick=\"processTPayment('"+e+"')\">Process payment</button> " +
						"</div>" +
						"</div>" +
						"</div>";

					if(settings.Refund)
					{
						content +=
							"<hr/>" +
							"<div style='margin-t-2 margin-b-2'>" +
							"<h6>Refund</h6>" +
							"<div class='ui labeled input'>" +
							"<label class='ui label'>Amount "+$("#currency-symbol").val()+"</label> " +
							"<input id='t-refund-amount' type='text' value='"+
							(Number(d.Data.Paidamount)).toFixed(2)+"'/>" +
							"</div>" +
							"<div class='ui form'>" +
							"<textarea id='t-refund-note' rows='2' placeholder='Reason for refund'></textarea> " +
							"</div> " +
							"<div style='margin: 10px;'>" +
							"<button id='t-refund-btn' class='ui blue button' onclick=\"processTRefund('"+e+"')\">Process refund</button> " +
							"</div>" +
							"</div>" +
							"</div>";
					}
					$("#transaction-detail-con").html(content);
				}
				else
				{
					$("#transaction-detail-con").html(
						"<div class='pad-2 align-c'>" +
						"<h4 class='sleak' style='color: dimgray;'>" +
						"Connection error. <br/>" +
						"Check your connection and try again</h4>" +
						"<button class='ui button' " +
						"onclick=\"loadTransactionDetail('"+e+"')\">" +
						"Try again</button> " +
						"</div>");
				}
			}
			else
			{
				$("#transaction-detail-con").html(
					"<div class='pad-2 align-c'>" +
					"<h4 class='sleak' style='color: dimgray;'>" +
					"Connection error. <br/>" +
					"Check your connection and try again</h4>" +
					"<button class='ui button' " +
					"onclick=\"loadTransactionDetail('"+e+"')\">" +
					"Try again</button> " +
					"</div>");
			}
		}, {job:"pos transaction detail", transaction:e, item_type:$("#pos-type").val()});
	}

	function processTPayment(e)
	{
		let request = {
			amount:Number($("#t-pay-amount").val()),
			method:"cash",
			transaction:e,
			item_type:$("#pos-type").val(),
			job:"add payment"
		};

		if(getElement("t-pay-pos").checked)
		{
			request.method = "pos";
		}
		if(getElement("t-pay-others").checked)
		{
			request.method = "others";
		}

		if(!request.amount)
		{
			errorButton({btn:"t-payment-btn", msg:"Invalid amount"});
		}
		else if((!getElement("t-pay-cash").checked) && (!getElement("t-pay-pos").checked) && (!getElement("t-pay-others").checked))
		{
			errorButton({btn:"t-payment-btn", msg:"Select pay method"});
		}
		else
		{
			loadingButton({btn:"t-payment-btn"});
			postJson("hms-pos/worker", function(data, status){
				loadingButton({btn:"t-payment-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.Status === "success")
					{
						$("#t-payment-btn").addClass("positive disabled");
						$("#t-payment-btn").html("<i class='check icon'></i> success");

						setTimeout(function(){
							$("#t-payment-btn").removeClass("positive disabled");
							$("#t-payment-btn").html("Process payment");
							posTransactions();
						},1000);
					}
					else
					{
						errorButton({btn:"t-payment-btn", msg:d.Message});
					}
				}
				else
				{
					errorButton({btn:"t-payment-btn", msg:"Connection error"});
				}
			},request);
		}
	}

	function processTRefund(e)
	{
		let request = {
			amount:Number($("#t-refund-amount").val()),
			note:$("#refund-note").val(),
			item_type:$("#pos-type").val(),
			transaction:e,
			job:"add refund"
		};

		if(!request.amount)
		{
			errorButton({btn:"t-refund-btn", msg:"Invalid amount"});
		}
		else
		{
			loadingButton({btn:"t-refund-btn"});
			postJson("hms-pos/worker", function(data, status){
				loadingButton({btn:"t-refund-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.Status === "success")
					{
						$("#t-refund-btn").addClass("positive disabled");
						$("#t-refund-btn").html("<i class='check icon'></i> success");

						setTimeout(function(){
							$("#t-refund-btn").removeClass("positive disabled");
							$("#t-refund-btn").html("<i class='check icon'></i> success");
							posTransactions();
						},1000);
					}
					else
					{
						errorButton({btn:"t-refund-btn", msg:d.Message});
					}
				}
				else
				{
					errorButton({btn:"t-refund-btn", msg:"Select pay method"});
				}
			},request);
		}
	}

	function posAnalytics(day)
	{
		itemsList = [];
		loadPageModal({size:"ms", onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html("<div id='pos-report-con'></div>");
				loadPOSAnalytics("today");
			}});
	}

	function loadPOSAnalytics(day)
	{
		$("#pos-report-con").html(
			"<div class='pad-3'>" +
			"<div class='align-c'>" +
			"<div class='margin-t-8'>" +
			"<div class='ui loader large active inline'></div>" +
			"<h3 class='sleak'>Please wait...</h3>" +
			"</div>" +
			"</div>" +
			"</div>");

		postJson("hms-pos/worker", function(data, status){
			$("#pos-report-con").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					for(let i = 0; i < d.Data.length; i++)
					{
						itemsList.push({name:d.Data[i].Name, value:d.Data[i].Id});
					}

					$("#pos-report-con").html(
						"<div class='pad-4'>" +
						"<div class=''>" +
						"<div>" +
						"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
						"<i class='blue pie chart icon'></i> POS Report" +
						"</h2>" +
						"</div>" +
						"</div>" +
						"</div><hr style='margin: 0px; padding: 0px;'/><br/>" +
						"<div class='pad-2'>" +
						"<div class='ui secondary  menu'>" +
						"  <a class='item "+((day == "today" ? "active" : ""))+"' onclick=\"loadPOSAnalytics('today')\">" +
						"    Today" +
						"  </a>" +
						"  <a class='item "+((day == "yesterday" ? "active" : ""))+"' onclick=\"loadPOSAnalytics('yesterday')\">" +
						"    Yesterday" +
						"  </a>" +
						"</div>" +
						"</div>" +
						"<div class='pad-2'>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l6 m6 s6 align-c' style='border-right: 1px solid lightgray;'>" +
						"<div class='pad-4'>" +
						"<h2 class='sleak' style='font-weight: bold;'>" +
						"<span id='tems-count'>"+numFormat(Number(d.Data.Totalitems))+"</span> Item(s)</h2>" +
						"</div>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6 align-c'>" +
						"<div class='pad-4'>" +
						"<h2 class='sleak' style='font-weight: bold;'>" +
						"<span style='font-family: Lato;'>"+
						$("#currency-symbol").val()+"</span> " +
						"<span d='total-sale-amount'>"+numFormat(Number(d.Data.Saletotal).toFixed(2))+"</span></h2>" +
						"</div>" +
						"</div> " +
						"</div> " +
						"</div>" +
						"<div>" +
						"<table class='ui table' style='border-radius: 0px;'>" +
						"<tr>" +
						"<td>Paid amount</td>" +
						"<td>"+
						"<span style='font-family: Lato;'>"+
						$("#currency-symbol").val()+"</span> " +
						"<span d='total-sale-amount'>"+numFormat(Number(d.Data.Paidtotal).toFixed(2))+"</span></h2>" +
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Cash</td>" +
						"<td>"+
						"<span style='font-family: Lato;'>"+
						$("#currency-symbol").val()+"</span> " +
						"<span d='total-sale-amount'>"+numFormat(Number(d.Data.Cashsale).toFixed(2))+"</span></h2>" +
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>POS</td>" +
						"<td>"+
						"<span style='font-family: Lato;'>"+
						$("#currency-symbol").val()+"</span> " +
						"<span d='total-sale-amount'>"+numFormat(Number(d.Data.Possale).toFixed(2))+"</span></h2>" +
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Online</td>" +
						"<td>"+
						"<span style='font-family: Lato;'>"+
						$("#currency-symbol").val()+"</span> " +
						"<span d='total-sale-amount'>"+numFormat(Number(d.Data.Websale).toFixed(2))+"</span></h2>" +
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Others</td>" +
						"<td>"+
						"<span style='font-family: Lato;'>"+
						$("#currency-symbol").val()+"</span> " +
						"<span d='total-sale-amount'>"+numFormat(Number(d.Data.Othersale).toFixed(2))+"</span></h2>" +
						"</td>" +
						"</tr>" +
						"</table>" +
						"</div>" +
						"<br/>" +
						"<div class='pad-1'>" +
						"<label>POS orders "+d.Data.Pospercentage+"%</label>" +
						"<div class='ui blue progress'>" +
						"<div class='bar' style='width: "+d.Data.Pospercentage+"%;'></div>" +
						"</div>" +
						"</div>");
				}
				else
				{
					closeGenModal(m.modal, function(){
						ShowModal(d.Message);
					});
				}
			}
			else
			{
				closeGenModal(m.modal, function(){
					ShowModal("Connection error. Unable retrieve analytics");
				});
			}
		},{job:"get pos analytics", item_type:$("#pos-type").val(),
			filter:"all", period: day, Page:0, Perpage:0});
	}

	function launchAddCustomer()
	{
		loadModal({title:"Add Customer", html:"<div class='pad-1'>" +
				"<input id='staff-modal-id' type='hidden' value=''/>" +
				"<select id='staff-list-con' class='ui fluid search wix-select dropdown'>" +
				"<option value=''>Select guest</option>" +
				"</select> " +
				"<div class='ui fluid input' style='margin-top: 5px;'>" +
				"<button id='contact-save-btn' class='ui sleak blue button' onclick=\"addEntity('customer')\">" +
				"<i class='plus icon'></i> Add</button>" +
				"</div> " +
				"</div>", onLoaded:function(m){
				$("#staff-list-con").dropdown();
				list({con:getElement("staff-list-con"), job:"list guest", all:true});
				$("#staff-modal-id").val(m.modal);
			}});
	}

	function launchAddStaff()
	{
		loadModal({title:"Add Staff", html:"<div class='pad-1'>" +
				"<input id='staff-modal-id' type='hidden' value=''/>" +
				"<select id='staff-list-con' class='ui fluid search wix-select dropdown'>" +
				"<option value=''>Select staff</option>" +
				"</select> " +
				"<div class='ui fluid input' style='margin-top: 5px;'>" +
				"<button id='contact-save-btn' class='ui sleak blue button' onclick=\"addEntity('staff')\">" +
				"<i class='plus icon'></i> Add</button>" +
				"</div> " +
				"</div>", onLoaded:function(m){
				$("#staff-list-con").dropdown();
				list({con:getElement("staff-list-con"), job:"list staff", all:true});
				$("#staff-modal-id").val(m.modal);
			}});
	}

	function addEntity(type)
	{
		entity.id = $("#staff-list-con").dropdown('get value');
		entity.name = $("#staff-list-con").dropdown('get text');
		entity.type = type;
		$("#entity-text-con").html("<i class='red times icon' style='cursor:pointer;' onclick='removeEntity()'></i> " +
			"&nbsp;&nbsp;&nbsp;&nbsp;"+
			entity.name+" <small style='color: silver;'>("+type+")</small>");
		closeGenModal($("#staff-modal-id").val());
		calculate();
	}

	function removeEntity()
	{
		$("#entity-text-con").html("");
		entity.id = "";
		entity.name = "";
		entity.type = "";
		calculate();
	}



	//-------------------------------- Saved order logic --------------------------------------------------------
	function launchsaveOrder()
	{
		if(!pushed)
		{
			let savedList = JSON.parse(window.localStorage.getItem("laundry_sys_saved_order"));

			let autoName = "saved_order_0";
			if(savedList == null)
			{
				autoName = "saved_order_0";
			}
			else if(typeof savedList === "object")
			{
				let i = 0;
				while(savedList.includes(autoName))
				{
					autoName = "saved_order_"+i;
					i++;
				}
			}

			loadModal({title:"Save order", html:"<div class='pad-1'>" +
					"<input id='order-save-modal-id' type='hidden' value=''/>" +
					"<div class='ui fluid wix-textbox input'>" +
					"<input id='order-list-name' type='text' placeholder='Order name' value='"+autoName+"'>" +
					"</div> " +
					"<div class='ui fluid input' style='margin-top: 5px;'>" +
					"<button id='order-save-btn' class='ui sleak blue button' onclick=\"saveOrder('staff')\">" +
					"<i class='save icon'></i> Save</button>" +
					"</div> " +
					"</div>", onLoaded:function(m){
					$("#staff-list-con").dropdown();
					list({con:getElement("staff-list-con"), job:"list staff", all:true});
					$("#order-save-modal-id").val(m.modal);
				}});
			return savedList;
		}
		else
		{
			ShowModal("Order has been processed and cannot be saved.");
		}
	}

	function saveOrder()
	{
		let order = {items:[], entity:{}, coupons:[], discounts:[], posuser:""};

		let cc = document.getElementsByClassName("sale-item");

		for(let i = 0; i < cc.length; i++)
		{
			order.items.push({item:cc[i].id, quantity:Number($("#"+cc[i].id+"_quantity").val())});
		}
		order.entity = entity;
		order.coupons = coupons;
		order.discounts = addedDiscount;
		order.posuser = $("#pos-user").val();

		let listingName = $("#order-list-name").val();

		if(order.items.length > 0)
		{
			let savedList = JSON.parse(window.localStorage.getItem("laundry_sys_saved_order"));

			let found = false;
			if(savedList !== null)
			{
				for(let i = 0; i < savedList.length; i++)
				{
					if(listingName === savedList[i])
					{
						found = true;
						break;
					}
				}
			}

			if((listingName === "menu") || (listingName === "laundry_sys_saved_order") || (listingName === ""))
			{
				errorButton({btn:"order-save-btn", msg:"invalid name"});
			}
			else if(found === true)
			{
				errorButton({btn:"order-save-btn", msg:"name exist already"});
			}
			else
			{
				if(savedList === null)
				{
					savedList = [];
				}
				window.localStorage.setItem(listingName, JSON.stringify(order));
				savedList.push(listingName);
				window.localStorage.setItem("laundry_sys_saved_order", JSON.stringify(savedList));

				emptyTray();
				closeGenModal($("#order-save-modal-id").val());
			}
		}
		else
		{
			closeGenModal($("#order-save-modal-id").val(), function () {
				ShowModal("There are no items in the order. Empty orders cannot be saved");
			});
		}
	}

	function openSavedOrder(e)
	{
		itemsList = [];
		loadPageModal({size:"s", onLoaded:function(m){

				let savedList = JSON.parse(window.localStorage.getItem("laundry_sys_saved_order"));

				let content = "<div class='align-c pad-3'>" +
					"<h3 class='ui icon header'>" +
					"<i class='shopping bag icon' style='color: silver;'></i>" +
					"</h3>" +
					"<h5 class='sleak' style='font-weight: bold; color: dimgray;'>" +
					"There are no saved orders yet" +
					"</h5>" +
					"</div>";

				if(savedList !== null)
				{
					if (typeof savedList === "object")
					{
						content = "";
						for(let i = 0; i < savedList.length; i++)
						{
							if(savedList[i] != null)
							{
								content +=
									"<div id='"+savedList[i]+"-con' class='pad-2 w3-row hoverable' " +
									"style='border-bottom: 1px solid lightgray; cursor: pointer;'  " +
									"onclick=\"populateOrder('"+savedList[i]+"','"+m.modal+"')\">" +
									"<div class='w3-col l9 m9 s9'>" +
									"<span>"+savedList[i]+"</span>" +
									"</div> " +
									"<div class='w3-col l3 m3 s3 align-r'>" +
									"<span><i class='red trash icon' style='cursor: pointer;' " +
									"onclick=\"deleteSavedOrder('"+savedList[i]+"')\"></i></span>" +
									"</div> " +
									"</div>";
							}
						}
					}
				}

				if(content === "")
				{
					content =
						"<div class='align-c pad-3'>" +
						"<h3 class='ui icon header'>" +
						"<i class='shopping bag icon' style='color: silver;'></i>" +
						"</h3>" +
						"<h5 class='sleak' style='font-weight: bold; color: dimgray;'>" +
						"There are no saved bookings yet" +
						"</h5>" +
						"</div>";
				}

				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class=''>" +
					"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
					"<i class='blue save icon'></i> Saved Bookings" +
					"</h2>" +
					"</div>" +
					"</div>" +
					"<hr style='margin: 0px; padding: 0px;'/><br/>" +
					"<div id='saved-order-con'>"+content+"</div>");
			}});
	}


	function deleteSavedOrder(e)
	{
		ConfirmModal("Are you sure you want to delete the order?", function (choice, param) {
			if(choice)
			{
				removeSavedOrder(param);
			}
		}, "Yes", "Cancel", e);
	}

	function removeSavedOrder(e)
	{
		let savedList = JSON.parse(window.localStorage.getItem("laundry_sys_saved_order"));

		if(savedList !== null)
		{
			if(typeof savedList === "object")
			{
				for(let i = 0; i < savedList.length; i++)
				{
					if(savedList[i] === e)
					{
						savedList.splice(i, 1);
						getElement("saved-order-con").removeChild(getElement(e+"-con"));
						break;
					}
				}
			}
			window.localStorage.setItem("laundry_sys_saved_order", JSON.stringify(savedList));
		}
	}

	function populateOrder(e, m)
	{
		let order = JSON.parse(window.localStorage.getItem(e));

		if(order === null)
		{
			ShowModal("Error processing order content. The order seems to be damaged");
		}
		else if(typeof order === "object")
		{
			for(let i = 0; i < order.items.length; i++)
			{
				AddItem(order.items[i].item);
				$("#"+order.items[i].item+"_quantity").val(order.items[i].quantity);
			}
			coupons = order.coupons;
			for(let i = 0; i < order.coupons.length; i++)
			{
				let con = document.createElement("div");
				con.className = "w3-row";
				con.id = "coupon-"+order.coupons[i].Id;
				con.innerHTML = "<div class='w3-col l8 m8 s8 pad-t'>" +
					"<label class='sleak' style='font-weight: bold; color: dimgray;'>"+
					order.coupons[i].Title+"</label></div>" +
					"<div class='w3-col l2 m2 s2'>"+
					(order.coupons[i].Bypercentage ? order.coupons[i].Value+"%" : $("#currency-symbol").val()+
						numFormat(Number(order.coupons[i].Value).toFixed(2)))+"</div>" +
					"<div class='w3-col l2 m2 s2 align-r'>" +
					"<i class='red times icon' style='cursor: pointer;' " +
					"onclick=\"removeCoupon('"+order.coupons[i].Id+"')\"></i> " +
					"</div>";

				getElement("discount-list-con").appendChild(con);
			}
			addedDiscount = order.discounts;
			for(let i = 0; i < addedDiscount.length; i++)
			{
				let con = document.createElement("div");
				con.className = "w3-row";
				con.id = "discount-"+addedDiscount[i].Id;
				con.innerHTML = "<div class='w3-col l8 m8 s8 pad-t'>" +
					"<label class='sleak' style='font-weight: bold; color: dimgray;'>"+
					addedDiscount[i].Name+"</label></div>" +
					"<div class='w3-col l2 m2 s2'>"+
					(addedDiscount[i].Bypercentage ? addedDiscount[i].Value+"%" : $("#currency-symbol").val()+
						numFormat(Number(addedDiscount[i].Value).toFixed(2)))+"</div>" +
					"<div class='w3-col l2 m2 s2 align-r'>" +
					"<i class='red times icon' style='cursor: pointer;' " +
					"onclick=\"removeDiscount('"+addedDiscount[i].Id+"')\"></i> " +
					"</div>";

				getElement("discount-list-con").appendChild(con);
			}

			entity = order.entity;

			$("#entity-text-con").html("<i class='red times icon' style='cursor:pointer;' onclick='removeEntity()'></i> " +
				"&nbsp;&nbsp;&nbsp;&nbsp;"+
				entity.name+" <small style='color: silver;'>("+entity.type+")</small>");

			getElement("modal_"+m).click();

			calculate();
		}
		else
		{
			ShowModal("Error processing order content. The order seems to be damaged");
		}
		removeSavedOrder(e);
	}

	//------------------------------------ End of saved order ----------------------------------------------------





	//------------------------------------- Discount and coupon logic --------------------------------------------
	function openDiscounts()
	{
		loadPageModal({size:"s", onLoaded:function(m){

				let content = "<div class='align-c pad-3'>" +
					"<h3 class='ui icon header'>" +
					"<i class='percent icon' style='color: silver;'></i>" +
					"</h3>" +
					"<h5 class='sleak' style='font-weight: bold; color: dimgray;'>" +
					"There are no manually appliable discounts" +
					"</h5>" +
					"</div>";

				if (typeof discounts === "object")
				{
					content = "";
					for(let i = 0; i < discounts.length; i++)
					{
						if(!discounts[i].Autoapply)
						{
							content +=
								"<div class='pad-2 w3-row hoverable' " +
								"style='border-bottom: 1px solid lightgray; cursor: pointer;'  " +
								"onclick=\"applyDiscount('"+discounts[i].Id+"','"+m.modal+"')\">" +
								"<div class='w3-col l9 m9 s9'>" +
								"<span>"+discounts[i].Name+"</span>" +
								"</div> " +
								"<div class='w3-col l3 m3 s3 align-r'>" +
								"<span>"+(discounts[i].Bypercentage ? discounts[i].Value+"%" :
								$("#currency-symbol").val()+numFormat(Number(discounts[i].Value).toFixed(2)))+"</span>" +
								"</div> " +
								"</div>";
						}
					}
				}

				if(content === "")
				{
					content = "<div class='align-c pad-3'>" +
						"<h3 class='ui icon header'>" +
						"<i class='percent icon' style='color: silver;'></i>" +
						"</h3>" +
						"<h5 class='sleak' style='font-weight: bold; color: dimgray;'>" +
						"There are no manually appliable discounts" +
						"</h5>" +
						"</div>";
				}

				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class=''>" +
					"<h2 style='font-family: quicksandregular; color: dimgrayy'>" +
					"<i class='blue percent icon'></i> POS Discount" +
					"</h2>" +
					"</div>" +
					"</div>" +
					"<hr style='margin: 0px; padding: 0px;'/><br/>" +
					"<div id='saved-order-con'>"+content+"</div>");
			}});
	}

	function applyDiscount(e, m)
	{
		if(pushed === true)
		{
			emptyTray();
		}

		let d = null;

		for(let i = 0; i < discounts.length; i++)
		{
			if(discounts[i].Id === e)
			{
				d = discounts[i];
				break;
			}
		}

		let found = false;
		for(let i = 0; i < addedDiscount.length; i++)
		{
			if(d.Id == addedDiscount[i].Id)
			{
				found = true;
			}
		}

		if(!found)
		{
			addedDiscount.push(d);

			let con = document.createElement("div");
			con.className = "w3-row";
			con.id = "discount-"+d.Id;
			con.innerHTML = "<div class='w3-col l8 m8 s8 pad-t'>" +
				"<label class='sleak' style='font-weight: bold; color: dimgray;'>"+
				d.Name+"</label></div>" +
				"<div class='w3-col l2 m2 s2'>"+
				(d.Bypercentage ? d.Value+"%" : $("#currency-symbol").val()+
					numFormat(Number(d.Value).toFixed(2)))+"</div>" +
				"<div class='w3-col l2 m2 s2 align-r'>" +
				"<i class='red times icon' style='cursor: pointer;' " +
				"onclick=\"removeDiscount('"+d.Id+"')\"></i> " +
				"</div>";

			getElement("discount-list-con").appendChild(con);
		}

		getElement("modal_"+m).click();
		calculate();
	}

	function removeDiscount(e)
	{
		if(pushed === true)
		{
			emptyTray();
		}

		for(let i = 0; i < addedDiscount.length; i++)
		{
			if(addedDiscount[i].Id === e)
			{
				addedDiscount.splice(i, 1);
			}
		}
		getElement("discount-list-con").removeChild(getElement("discount-"+e));
		calculate();
	}

	function calculateAddedDiscount()
	{
		let discount = 0.0;

		let cc = document.getElementsByClassName("sale-item");

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let totalAmount = Number($("#"+c+"_price").val()) * Number($("#"+c+"_quantity").val());

			for(let j= 0; j < addedDiscount.length; j++)
			{
				if(addedDiscount[j].Food.includes(c))
				{
					if(addedDiscount[j].Bypercentage)
					{
						if(addedDiscount[j].Ontotal)
						{
							discount += ((Number(addedDiscount[j].Value) / 100.0) * orderTotal);
						}
						else
						{
							discount += ((Number(addedDiscount[j].Value) / 100.0) * totalAmount);
						}
					}
					else
					{
						discount += Number(addedDiscount[j].Value);
					}
				}

			}
		}
		return discount;
	}

	//------------------------------------ POS Business logic---------------------------------------------------

	function togglePMethodRetain()
	{
		if(retainPMethod)
		{
			retainPMethod = false;
			$("#pmethod-toggle-con").html("<i class='money icon'></i> Retain payment method");
		}
		else
		{
			retainPMethod = true;
			$("#pmethod-toggle-con").html("<i class='refresh icon'></i> Reset payment method");
		}
	}

	function toggleReprint()
	{
		if(reprintReceipt)
		{
			reprintReceipt = false;
			$("#preceipt-toggle-con").html("<i class='print icon'></i> Enable receipt reprint");
		}
		else
		{
			reprintReceipt = true;
			$("#preceipt-toggle-con").html("<i class='print icon'></i> Disable receipt reprint");
		}
	}

	function toggleMenu()
	{
		if(getElement("food-menu-cover") == null)
		{
			$("#menu-icon").removeClass("th");
			$("#menu-icon").removeClass("green-txt");
			$("#menu-icon").addClass("times");
			$("#menu-icon").addClass("red");
			showMenu();
		}
		else
		{
			$("#menu-icon").addClass("th");
			$("#menu-icon").addClass("green-txt");
			$("#menu-icon").removeClass("times");
			$("#menu-icon").removeClass("red");
			closeMenu();
		}
	}

	function showMenu()
	{
		let menu = JSON.parse(window.localStorage.getItem("menu"));

		let cover = document.createElement("div");
		cover.style.backgroundColor = "rgb(0,100,140)";
		cover.style.position = "fixed";
		cover.style.top = "0px";
		cover.style.height = "100%";
		cover.style.zIndex = "1000";
		cover.id = "food-menu-cover";
		cover.style.overflowY = "auto";
		cover.style.display = "none";
		cover.className = "l-width-3 w3-card-4";
		cover.style.right = "0px";
		cover.innerHTML =
			"<div style=''>" +
			"<div id='loading-cover-content' style='margin: auto;'>" +

			"<div class='pad-2 w3-row'>" +

			"<div class='w3-col l12 m12 s12'>" +
			"<h3 style='font-family: quicksandregular; color: white; margin-top: 10px;'>" +
			"<i class='factory icon'></i> Laundry Items</h3>" +
			"</div>" +

			"</div> " +

			"<div id='menu-body' class='pad-1'>" +
			"</div>" +

			"</div>" +
			"</div>";

		document.body.appendChild(cover);

		for(let i = 0; i < menu.length; i++)
		{
			let m = document.createElement("div");
			m.className = "hoverable";
			m.innerHTML = "<div class='w3-row curve pad-1 food-item' " +
				"style='background-color: rgba(0,0,0,0.5); margin-bottom: 5px;' " +
				"onclick=\"AddItem('"+menu[i].Id+"'); foodItemClicked(this)\">" +
				"<div class='w3-col l6 m6 s6'> " +
				"<span class='status blue-back' style='font-family: quicksandregular; " +
				"font-size: 13px; font-weight: bold;'>"+menu[i].Name+"</span>" +
				"</div>" +
				"<div class='w3-col l6 m6 s6' style=''>" +
				"<h6 style='font-family: quicksandregular; color: white; text-align: center; margin: 0px;'>" +
				"<span style='font-family: Arial;'>"+
				$("#currency-symbol").val()+"</span>"+numFormat(Number(menu[i].Price).toFixed(2))+"</h6>" +
				"</div> " +
				"</div>";

			getElement("menu-body").appendChild(m);
		}

		$("#food-menu-cover").transition("scale in");
	}

	function closeMenu()
	{
		$("#food-menu-cover").transition("scale out", function () {
			document.body.removeChild(getElement("food-menu-cover"));
		});
	}

	function foodItemClicked(e)
	{
		$(e).transition('pulse');
	}

	function checkP()
	{
		if(fState === true)
		{
			$("#sPrompt").val("");
			fState = false;
		}
	}

	function keyPress(a, e)
	{
		if(e.keyCode === 13)
		{
			AddItem(a.value);
		}
		else
		{
			$("#sPrompt-con").removeClass("error");
		}
	}

	function AddItem(item)
	{
		let menu = JSON.parse(window.localStorage.getItem("menu"));

		let e = null;

		for(let i = 0; i < menu.length; i++)
		{
			if((menu[i].Id === item))
			{
				e = menu[i];
			}
		}

		if(e !== null)
		{
			if(pushed === true)
			{
				emptyTray();
			}

			if(document.getElementById(e.Id) == null)
			{
				let row = document.createElement("tr");
				row.id = e.Id;
				row.className = "sale-item";
				row.innerHTML = "" +
					"<td id='"+e.Id+"_name_txt' style='font-family: quicksand_mediumregular;'>" +
					e.Name +
					"</td>" +
					"<td>" +
					"<span style='font-family: Arial;'>" +
					$("#currency-symbol").val()+"</span>"+numFormat(e.Price) +
					"</td>" +
					"<td>" +
					"<span style='font-family: Arial;'>" +
					$("#currency-symbol").val()+"</span>"+numFormat(e.Tax) +
					"</td>" +
					"<td>" +
					"<div class=''><input id='"+e.Id+"_quantity' type='number' value='1'" +
					" min='1' onchange='if(pushed){emptyTray();} calculate()' onkeyup='if(pushed){emptyTray();} calculate()' " +
					"style='border: none; padding: 10px; max-width: 100px;'/> </div>" +
					"</td>" +
					"<td>" +
					"<span style='font-family: Arial;'>"+$("#currency-symbol").val()+"</span> " +
					"<span id='"+e.Id+"_price_txt'>" +
					numFormat(e.Price) +
					"</span>" +
					"</td>" +
					"<td>" +
					"<button class='ui circular red-back small button icon' onclick=\"removeItem('"+e.Id+"')\">" +
					"<i class='times icon'></i></button> " +
					"</td><input id='"+e.Id+"_price' type='hidden' value='"+e.Price+"' />" +
					"</td><input id='"+e.Id+"_tax' type='hidden' value='"+e.Tax+"' />";

				if(document.getElementsByClassName("sale-item").length == 0)
				{
					$("#product-con").html("");
				}

				let parent = document.getElementById("product-con");

				if(parent.hasChildNodes() == true)
				{
					parent.insertBefore(row, parent.firstChild);
				}
				else
				{
					parent.appendChild(row);
				}

				calculate();
			}
			else
			{
				let cur = Number($("#"+e.Id+"_quantity").val()) + 1;
				$("#"+e.Id+"_quantity").val(cur);

				calculate();
			}
			fState = true;
			$("#sPrompt-con").removeClass("error");
		}
		else
		{
			$("#sPrompt-con").addClass("error");
			$("#sPrompt-con").transition("shake");
			setTimeout(function () {
				$("#sPrompt-con").removeClass("error");
			}, 5000);
		}
	}

	function removeItem(e)
	{
		let cc = document.getElementsByClassName("sale-item");

		$("#"+e).transition('fade down', function () {
			document.getElementById("product-con").removeChild(document.getElementById(e));

			calculate();

			if(document.getElementsByClassName("sale-item").length == 0)
			{
				$("#product-con").html("<tr>" +
					"<td colspan='5'>" +
					"<h3 class='sleak pad-2' style='color: silver;'>" +
					"<i class='factory circular blue-text icon'></i> " +
					"Laundry Basket is empty</h3></td></tr>");
			}
		});

		if(pushed == true)
		{
			emptyTray();
		}
	}

	function emptyTray()
	{
		$("#product-con").html("<tr>" +
			"<td colspan='5'>" +
			"<h3 class='sleak pad-2' style='color: silver;'>" +
			"<i class='factory circular blue-text icon'></i> Laundry Basket is empty</h3></td></tr>");

		removeEntity();
		coupons = [];
		addedDiscount = [];
		$("#discount-list-con").html("");
		calculate();
		pushed = false;

		$("#push_btn").html("Process and print Receipt");

		if(!retainPMethod)
		{
			if(getElement("cash_pay") != null)
			{
				getElement("cash_pay").checked = false;
			}
			if(getElement("pos_pay") != null)
			{
				getElement("pos_pay").checked = false;
			}
			if(getElement("others_pay") != null)
			{
				getElement("others_pay").checked = false;
			}
		}
		if(getElement("web_pay") != null)
		{
			$("#web_pay").val("false");
		}
	}

	let orderTotal = 0;
	let orderTaxes = 0;
	let orderDiscount = 0;
	function calculate()
	{
		let total = 0.00;
		let tax = 0.00;

		let cc = document.getElementsByClassName("sale-item");

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let tt = Number($("#"+c+"_price").val()) * Number($("#"+c+"_quantity").val());

			let tx = 0.00;

			if(settings.Compundtax)
			{
				tx = Number($("#"+c+"_tax").val());
			}
			else
			{
				tx = Number($("#"+c+"_tax").val()) * Number($("#"+c+"_quantity").val());
			}

			total += tt;
			tax += tx;
			$("#"+c+"_price_txt").html(numFormat((tt + tx).toFixed(2)));
		}


		let subtotal = total;
		total += tax;

		orderTotal = subtotal;
		orderTaxes = tax;

		let discount = calculateDiscount() + calculateAddedDiscount() + calculateCouponDiscount();

		discount = ((discount > total) ? total : discount);

		orderDiscount = discount;

		$("#total_con").html(numFormat((total - discount).toFixed(2)));
		$("#tax_con").html(numFormat((tax).toFixed(2)));
		$("#discount_con").html(numFormat((discount).toFixed(2)));
		$("#subtotal_con").html(numFormat((subtotal).toFixed(2)));

		$("#payment-amount").val((total - discount).toFixed(2));
	}

	function calculateDiscount()
	{
		let discount = 0.0;

		let cc = document.getElementsByClassName("sale-item");

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let totalAmount = Number($("#"+c+"_price").val()) * Number($("#"+c+"_quantity").val());
			let itemQuantity = Number($("#"+c+"_quantity").val());

			let tx = 0.00;

			let date = new Date();


			for(let j= 0; j < discounts.length; j++)
			{
				if(discounts[j].Autoapply)
				{
					if(discounts[j].Food.includes(c))
					{
						if(discounts[j].Isstaff)
						{
							if(entity.type === "staff")
							{
								if(discounts[j].Bypercentage)
								{
									if(discounts[j].Ontotal)
									{
										discount += ((discounts[j].Value / 100.0) * orderTotal);
									}
									else
									{
										discount += ((discounts[j].Value / 100.0) * totalAmount);
									}
								}
								else
								{
									discount += discounts[j].Value;
								}
							}
						}
						if(discounts[j].Periodic)
						{
							if((monthToNumber(discounts[j].Frommonth) > (date.getMonth() + 1)) &&
								(monthToNumber(discounts[j].Tomonth) < (date.getMonth() + 1)))
							{
								if(discounts[j].Bypercentage)
								{
									if(discounts[j].Ontotal)
									{
										discount += ((discounts[j].Value / 100.0) * orderTotal);
									}
									else
									{
										discount += ((discounts[j].Value / 100.0) * totalAmount);
									}
								}
								else
								{
									discount += discounts[j].Value;
								}
							}
							if(monthToNumber(discounts[j].Frommonth) === (date.getMonth() + 1))
							{
								if(discounts[j].Fromday <= date.getDay())
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											discount += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											discount += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										discount += discounts[j].Value;
									}
								}
							}
							else if(monthToNumber(discounts[j].Tomonth) === (date.getMonth() + 1))
							{
								if(discounts[j].Today >= date.getDay())
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											discount += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											discount += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										discount += discounts[j].Value;
									}
								}
							}
						}
						if(discounts[j].Timebased)
						{
							let nowsec = time() - ((strtotime(date("m/d/Y"))));
							let fromsec = 0;
							let tosec = 0;

							let starthour = discounts[j].Fromhour === 12 ? 0 : discounts[j].Fromhour;
							let stophour = discounts[j].Tohour === 12 ? 0 : discounts[j].Tohour;

							fromsec = discounts[j].Frommeridean === "am" ? (((starthour * 60) + discounts[j].Fromminuite) * 60) : ((((discounts[j].Fromhour + 12) * 60) + discounts[j].Fromminuite) * 60);
							tosec = discounts[j].Tomeridean === "am" ? (((stophour * 60) + discounts[j].Tominuite) * 60) : ((((discounts[j].Tohour + 12) * 60) + discounts[j].Tominuite) * 60);


							if(fromsec > tosec)
							{
								if ((nowsec >= fromsec) || (nowsec <= tosec))
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											discount += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											discount += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										discount += discounts[j].Value;
									}
								}
							}
							else
							{
								if ((nowsec >= fromsec) && (nowsec <= tosec))
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											discount += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											discount += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										discount += discounts[j].Value;
									}
								}
							}
						}
						if(discounts[j].Offlineorder)
						{
							if(discounts[j].Bypercentage)
							{
								if(discounts[j].Ontotal)
								{
									discount += ((discounts[j].Value / 100.0) * orderTotal);
								}
								else
								{
									discount += ((discounts[j].Value / 100.0) * totalAmount);
								}
							}
							else
							{
								discount += discounts[j].Value;
							}
						}
						if(discounts[j].Quantity)
						{
							if(itemQuantity >= Number(discounts[j].Fromcount))
							{
								if((itemQuantity <= Number(discounts[j].Tocount)) || (Number(discounts[j].Tocount) === 0))
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											discount += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											discount += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										discount += discounts[j].Value;
									}
								}
							}
						}
						if(discounts[j].Amountbased)
						{
							if(orderTotal >= Number(discounts[j].Fromamount))
							{
								if((orderTotal <= Number(discounts[j].Toamount)) || (Number(discounts[j].Toamount) === 0))
								{
									if(Number(discounts[j].Bypercentage))
									{
										if(Number(discounts[j].Ontotal))
										{
											discount += ((Number(discounts[j].Value) / 100.0) * orderTotal);
										}
										else
										{
											discount += ((Number(discounts[j].Value) / 100.0) * totalAmount);
										}
									}
									else
									{
										discount += discounts[j].Value;
									}
								}

							}
						}
					}
				}
			}
		}
		return discount;
	}

	function buildDiscountPixels()
	{
		let pixel = [];

		let cc = document.getElementsByClassName("sale-item");

		for(let j= 0; j < discounts.length; j++)
		{
			let tots = 0;

			for(let i = 0; i < cc.length; i++)
			{
				let c = cc[i].id;
				let totalAmount = Number($("#"+c+"_price").val()) * Number($("#"+c+"_quantity").val());
				let itemQuantity = Number($("#"+c+"_quantity").val());

				let tx = 0.00;

				let date = new Date();


				if(discounts[j].Autoapply)
				{
					if(discounts[j].Food.includes(c))
					{
						if(discounts[j].Isstaff)
						{
							if(entity.type === "staff")
							{
								if(discounts[j].Bypercentage)
								{
									if(discounts[j].Ontotal)
									{
										tots += ((discounts[j].Value / 100.0) * orderTotal);
									}
									else
									{
										tots += ((discounts[j].Value / 100.0) * totalAmount);
									}
								}
								else
								{
									tots += discounts[j].Value;
								}
							}
						}
						if(discounts[j].Periodic)
						{
							if((monthToNumber(discounts[j].Frommonth) > (date.getMonth() + 1)) &&
								(monthToNumber(discounts[j].Tomonth) < (date.getMonth() + 1)))
							{
								if(discounts[j].Bypercentage)
								{
									if(discounts[j].Ontotal)
									{
										tots += ((discounts[j].Value / 100.0) * orderTotal);
									}
									else
									{
										tots += ((discounts[j].Value / 100.0) * totalAmount);
									}
								}
								else
								{
									tots += discounts[j].Value;
								}
							}
							if(monthToNumber(discounts[j].Frommonth) === (date.getMonth() + 1))
							{
								if(discounts[j].Fromday <= date.getDay())
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											tots += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											tots += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										tots += discounts[j].Value;
									}
								}
							}
							else if(monthToNumber(discounts[j].Tomonth) === (date.getMonth() + 1))
							{
								if(discounts[j].Today >= date.getDay())
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											tots += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											tots += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										tots += discounts[j].Value;
									}
								}
							}
						}
						if(discounts[j].Timebased)
						{
							let nowsec = time() - ((strtotime(date("m/d/Y"))));
							let fromsec = 0;
							let tosec = 0;

							let starthour = discounts[j].Fromhour === 12 ? 0 : discounts[j].Fromhour;
							let stophour = discounts[j].Tohour === 12 ? 0 : discounts[j].Tohour;

							fromsec = discounts[j].Frommeridean === "am" ? (((starthour * 60) + discounts[j].Fromminuite) * 60) : ((((discounts[j].Fromhour + 12) * 60) + discounts[j].Fromminuite) * 60);
							tosec = discounts[j].Tomeridean === "am" ? (((stophour * 60) + discounts[j].Tominuite) * 60) : ((((discounts[j].Tohour + 12) * 60) + discounts[j].Tominuite) * 60);


							if(fromsec > tosec)
							{
								if ((nowsec >= fromsec) || (nowsec <= tosec))
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											tots += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											tots += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										tots += discounts[j].Value;
									}
								}
							}
							else
							{
								if ((nowsec >= fromsec) && (nowsec <= tosec))
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											tots += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											tots += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										tots += discounts[j].Value;
									}
								}
							}
						}
						if(discounts[j].Offlineorder)
						{
							if(discounts[j].Bypercentage)
							{
								if(discounts[j].Ontotal)
								{
									tots += ((discounts[j].Value / 100.0) * orderTotal);
								}
								else
								{
									tots += ((discounts[j].Value / 100.0) * totalAmount);
								}
							}
							else
							{
								tots += discounts[j].Value;
							}
						}
						if(discounts[j].Quantity)
						{
							if(itemQuantity >= Number(discounts[j].Fromcount))
							{
								if((itemQuantity <= Number(discounts[j].Tocount)) || (Number(discounts[j].Tocount) === 0))
								{
									if(discounts[j].Bypercentage)
									{
										if(discounts[j].Ontotal)
										{
											tots += ((discounts[j].Value / 100.0) * orderTotal);
										}
										else
										{
											tots += ((discounts[j].Value / 100.0) * totalAmount);
										}
									}
									else
									{
										tots += discounts[j].Value;
									}
								}
							}
						}
						if(discounts[j].Amountbased)
						{
							if(orderTotal >= Number(discounts[j].Fromamount))
							{
								if((orderTotal <= Number(discounts[j].Toamount)) || (Number(discounts[j].Toamount) === 0))
								{
									if(Number(discounts[j].Bypercentage))
									{
										if(Number(discounts[j].Ontotal))
										{
											tots += ((Number(discounts[j].Value) / 100.0) * orderTotal);
										}
										else
										{
											tots += ((Number(discounts[j].Value) / 100.0) * totalAmount);
										}
									}
									else
									{
										tots += discounts[j].Value;
									}
								}

							}
						}
					}
				}
			}
			if(tots > 0)
			{
				pixel.push(discounts[j].Id+":"+tots+":"+discounts[j].Value+":"+(discounts[j].Bypercentage ? "true" : "false"));
			}
		}
		return pixel;
	}

	//-------------------------------------- Push order logic-----------------------------------------------------------
	function pushTray()
	{
		let order = buildOrder();

		if(!pushed)
		{
			if(order != null)
			{
				addOrderToQue(order);
				printReceipt(order);

				if(reprintReceipt)
				{
					$("#push_btn").html("<i class='print icon'></i> Print receipt");
				}
				else
				{
					emptyTray();
				}
			}
		}
		else
		{
			printReceipt(order);
		}
	}

	let queWork = false;
	function addOrderToQue(order)
	{
		queWork = true;

		let que = JSON.parse(window.localStorage.getItem("laundry_data_que"));

		if(que == null)
		{
			que = [];
		}
		order.transId = generateId();

		que.push(order);
		window.localStorage.setItem('laundry_que_store', JSON.stringify(que));
		window.localStorage.setItem('laundry_data_que', JSON.stringify(que));

		window.localStorage.removeItem('laundry_que_store');

		queWork = false;
		pushed = true;

		$("#que-indicator").addClass("red");
		$("#que-indicator").removeClass("green");
	}

	function generateId()
	{
		let d = Date.now();
		return d;
	}

	function buildOrder()
	{
		let order = {};

		order.items = [];

		order.total = orderTotal;
		order.taxes = orderTaxes;
		order.discount = orderDiscount;

		order.transId = generateId();
		order.time = (Date.now() / 1000);

		order.printItems = [];

		let cc = document.getElementsByClassName("sale-item");

		for(let i = 0; i < cc.length; i++)
		{
			let tx = 0.00;

			if(settings.Compundtax)
			{
				tx = Number($("#"+cc[i].id+"_tax").val());
			}
			else
			{
				tx = Number($("#"+cc[i].id+"_tax").val()) * Number($("#"+cc[i].id+"_quantity").val());
			}
			order.items.push(cc[i].id+":"+Number($("#"+cc[i].id+"_quantity").val())+":"+Number($("#"+cc[i].id+"_price").val())+":"+tx);
			order.printItems.push({item:$("#"+cc[i].id+"_name_txt").html(),qty:$("#"+cc[i].id+"_quantity").val(),price:Number($("#"+cc[i].id+"_price").val())});
		}
		order.entity = entity.id+":"+entity.type;
		order.coupons = [];
		for(let i = 0; i < coupons.length; i++)
		{
			order.coupons.push(coupons[i].Id);
		}
		order.discounts = [];
		for(let i = 0; i < addedDiscount.length; i++)
		{
			order.discounts.push(addedDiscount[i].Id);
		}
		order.posuser = $("#pos-user").val();

		order.paidAmount = Number($("#payment-amount").val());
		order.isWeborder = false;
		order.method = "";

		order.couponPixels = buildCouponPixels();
		order.discountPixels = buildDiscountPixels();

		if(order.paidAmount > 0)
		{
			if((getElement("cash_pay") != null) && (getElement("cash_pay").checked))
			{
				order.method = "cash";
			}
			else if((getElement("pos_pay") != null) && (getElement("pos_pay").checked))
			{
				order.method = "pos";
			}
			else if((getElement("others_pay") != null) && (getElement("others_pay").checked))
			{
				order.method = "others";
			}
			else if((getElement("web_pay") != null) && (getElement("web_pay").value === 'true'))
			{
				order.method = "web";
			}
			else
			{
				errorButton({btn:"push_btn", msg:"Select pay method"});
				return ;
			}
		}

		if(order.items.length > 0)
		{
			return order;
		}
		else
		{
			errorButton({btn:"push_btn", msg:"Order is empty"});
		}
	}

	function printReceipt(order)
	{
		if(receipt.isValid)
		{
			if(receipt.Definitions.type === "json")
			{
				let receiptRows = [];

				for(let i = 0; i < order.printItems.length; i++)
				{
					let row = {};
					row.Item = order.printItems[i].item;
					row.Price = $("#currency-symbol").val()+numFormat((Number(order.printItems[i].price)).toFixed(2));
					row.Qty = numFormat(order.printItems[i].qty);
					row.Total = $("#currency-symbol").val()+numFormat(((Number(order.printItems[i].qty) * Number(order.printItems[i].price))).toFixed(2));
					receiptRows.push(row);
				}

				let row0 = {};
				row0.Item = "______";
				row0.Price = "______";
				row0.Qty = "______";
				row0.Total = "______";
				receiptRows.push(row0);


				let row1 = {};
				row1.Item = "";
				row1.Price = "";
				row1.Qty = "<big><b>Subtotal:</b></big>";
				row1.Total = $("#currency-symbol").val() + numFormat(Number(order.total).toFixed(2));
				receiptRows.push(row1);

				let row2 = {};
				row2.Item = "";
				row2.Price = "";
				row2.Qty = "<big><b>Tax:</b></big>";
				row2.Total = $("#currency-symbol").val() + numFormat(Number(order.taxes).toFixed(2));
				receiptRows.push(row2);

				let row3 = {};
				row3.Item = "";
				row3.Price = "";
				row3.Qty = "<big><b>Discount:</b></big>";
				row3.Total = $("#currency-symbol").val() + numFormat(Number(order.discount).toFixed(2));
				receiptRows.push(row3);

				let row4 = {};
				row4.Item = "";
				row4.Price = "";
				row4.Qty = "<big><b>Total:</b></big>";
				row4.Total = $("#currency-symbol").val() + numFormat(((Number(order.total) + Number(order.taxes)) - Number(order.discount)).toFixed(2));
				receiptRows.push(row4);

				let printObject = {};
				printObject.printable = receiptRows;
				printObject.properties = ['Item', 'Price', 'Qty', 'Total'];
				printObject.type = 'json';

				printObject.style = processReplace(receipt.Style, order);

				if(settings.Papertype === "a4")
				{
					printObject.header = processReplace(receipt.Header.a4, order);
					printObject.headerStyle = processReplace(receipt.Definitions.a4.headerStyle, order);
					printObject.maxWidth = processReplace(receipt.Definitions.a4.maxWidth, order);
					printObject.css = processReplace(receipt.Links.a4, order);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.a4.gridHeaderStyle, order);
					printObject.gridStyle = processReplace(receipt.Definitions.a4.gridStyle, order);
				}
				else if(settings.Papertype === "letter")
				{
					printObject.header = processReplace(receipt.Header.letter, order);
					printObject.headerStyle = processReplace(receipt.Definitions.letter.headerStyle, order);
					printObject.maxWidth = processReplace(receipt.Definitions.letter.maxWidth, order);
					printObject.css = processReplace(receipt.Links.letter, order);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.letter.gridHeaderStyle, order);
					printObject.gridStyle = processReplace(receipt.Definitions.letter.gridStyle, order);
				}
				else if(settings.Papertype === "80mm")
				{
					printObject.header = processReplace(receipt.Header.mm80, order);
					printObject.headerStyle = processReplace(receipt.Definitions.mm80.headerStyle, order);
					printObject.maxWidth = processReplace(receipt.Definitions.mm80.maxWidth, order);
					printObject.css = processReplace(receipt.Links.mm80, order);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.mm80.gridHeaderStyle, order);
					printObject.gridStyle = processReplace(receipt.Definitions.mm80.gridStyle, order);
				}
				else
				{
					printObject.header = processReplace(receipt.Header.mm58, order);
					printObject.headerStyle = processReplace(receipt.Definitions.mm58.headerStyle, order);
					printObject.maxWidth = processReplace(receipt.Definitions.mm58.maxWidth, order);
					printObject.css = processReplace(receipt.Links.mm58, order);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.mm58.gridHeaderStyle, order);
					printObject.gridStyle = processReplace(receipt.Definitions.mm58.gridStyle, order);
				}

				printJS(printObject);
			}
			else if(receipt.Definitions.type === "html")
			{

			}
			else
			{
				ShowModal("The receipt for your terminal has not been properly set-up, is damaged or missing. please contact admin to resolve this");
			}
		}
		else
		{
			ShowModal("The receipt for your terminal has not been properly set-up, is damaged or missing. please contact admin to resolve this");
		}
	}

	function processReplace(txt, order)
	{
		let ret = null;

		let date = new Date();

		if(typeof txt === "string")
		{
			ret = txt.replace(/{businessname}/gim,$("#business-name").val()).replace(/{cdn}/gim,cdn)
				.replace(/{host}/gim,host).replace(/{date}/gim, date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear())
				.replace(/{transactionid}/gim, order.transId)
				.replace(/{salutation}/gim, (settings.Receiptsalutation ? settings.Salutation : ""))
				.replace(/{logo}/gim,  (settings.Receiptlogo ? "<img class='logo' src='"+$("#business-logo").val()+"'/>" : ""))
				.replace(/{address}/gim,  (settings.Receiptaddress ? $("#business-address").val() : ""))
				.replace(/{email}/gim,  (settings.Receiptemail ? $("#business-email").val() : ""))
				.replace(/{posuser}/gim,  $("#pos-user-name").val())
				.replace(/{currency}/gim,  $("#currency-symbol").val())
				.replace(/{primarycolor}/gim,  $("#primary-color").val())
				.replace(/{primaryfont}/gim,  $("#primary-font").val())
				.replace(/{secondarycolor}/gim,  $("#secondary-color").val())
				.replace(/{secondaryfont}/gim,  $("#secondary-font").val())
				.replace(/{weekday}/gim,  date.getDay())
				.replace(/{day}/gim,  date.getDate())
				.replace(/{month}/gim,  date.getMonth())
				.replace(/{WEEKDAY}/gim,  numToDay(date.getDay()))
				.replace(/{MONTH}/gim,  numToMonth(date.getMonth()))
				.replace(/{WEEKDAYshort}/gim,  numToDayShort(date.getDay()))
				.replace(/{MONTHshort}/gim,  numToMonthShort(date.getMonth()))
				.replace(/{year}/gim,  date.getFullYear())
				.replace(/{hour}/gim,  date.getHours())
				.replace(/{minute}/gim,  date.getMinutes())
				.replace(/{second}/gim,  date.getSeconds())
				.replace(/{time}/gim,  date.getTime())
				.replace(/{time}/gim,  date.getTime())
				.replace(/{itemcount}/gim,  numFormat(Number(order.items.length).toFixed(2)))
				.replace(/{subtotal}/gim,  numFormat(Number(order.total).toFixed(2)))
				.replace(/{tax}/gim,  numFormat(Number(order.taxes).toFixed(2)))
				.replace(/{discount}/gim,  numFormat(Number(order.discount).toFixed(2)))
				.replace(/{rebate}/gim,  order.balance != null ? numFormat(Number(order.balance).toFixed(2)) : "")
				.replace(/{paid}/gim,  order.paidAmount != null ? numFormat(Number(order.paidAmount).toFixed(2)) : "")
				.replace(/{total}/gim,  numFormat(((Number(order.total) + Number(order.taxes)) - Number(order.discount)).toFixed(2)));
		}
		else if(typeof txt === "object")
		{
			if(txt.length > 0)
			{
				ret = [];

				for(let i = 0; i < txt.length; i++)
				{
					ret.push(txt[i].replace(/{businessname}/gim,$("#business-name").val()).replace(/{cdn}/gim,cdn)
						.replace(/{host}/gim,host).replace(/{date}/gim, date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear())
						.replace(/{transactionid}/gim, order.transId)
						.replace(/{salutation}/gim, (settings.Receiptsalutation ? settings.Salutation : ""))
						.replace(/{logo}/gim,  (settings.Receiptlogo ? "<img class='logo' src='"+$("#business-logo").val()+"'/>" : ""))
						.replace(/{address}/gim,  (settings.Receiptaddress ? $("#business-address").val() : ""))
						.replace(/{email}/gim,  (settings.Receiptemail ? $("#business-email").val() : ""))
						.replace(/{posuser}/gim,  $("#pos-user-name").val())
						.replace(/{currency}/gim,  $("#currency-symbol").val())
						.replace(/{primarycolor}/gim,  $("#primary-color").val())
						.replace(/{primaryfont}/gim,  $("#primary-font").val())
						.replace(/{secondarycolor}/gim,  $("#secondary-color").val())
						.replace(/{secondaryfont}/gim,  $("#secondary-font").val())
						.replace(/{weekday}/gim,  date.getDay())
						.replace(/{day}/gim,  date.getDate())
						.replace(/{month}/gim,  date.getMonth())
						.replace(/{WEEKDAY}/gim,  numToDay(date.getDay()))
						.replace(/{MONTH}/gim,  numToMonth(date.getMonth()))
						.replace(/{WEEKDAYshort}/gim,  numToDayShort(date.getDay()))
						.replace(/{MONTHshort}/gim,  numToMonthShort(date.getMonth()))
						.replace(/{year}/gim,  date.getFullYear())
						.replace(/{hour}/gim,  date.getHours())
						.replace(/{minute}/gim,  date.getMinutes())
						.replace(/{second}/gim,  date.getSeconds())
						.replace(/{time}/gim,  date.getTime())
						.replace(/{time}/gim,  date.getTime())
						.replace(/{itemcount}/gim,  numFormat(Number(order.items.length).toFixed(2)))
						.replace(/{subtotal}/gim,  numFormat(Number(order.total).toFixed(2)))
						.replace(/{tax}/gim,  numFormat(Number(order.taxes).toFixed(2)))
						.replace(/{discount}/gim,  numFormat(Number(order.discount).toFixed(2)))
						.replace(/{rebate}/gim,  order.balance != null ? numFormat(Number(order.balance).toFixed(2)) : "")
						.replace(/{paid}/gim,  order.paidAmount != null ? numFormat(Number(order.paidAmount).toFixed(2)) : "")
						.replace(/{total}/gim,  numFormat(((Number(order.total) + Number(order.taxes)) - Number(order.discount)).toFixed(2))))
				}
			}
			else
			{
				return txt;
			}
		}
		else
		{
			return txt;
		}
		return ret;
	}

	//--------------------------------------End of push order logic-----------------------------------------------------

	function openDataQue()
	{
		let que = JSON.parse(window.localStorage.getItem("laundry_data_que"));

		let count = 0;

		let content =
			"<tr>" +
			"<td colspan='6'>" +
			"<div class='align-c pad-3'>" +
			"<h3 class='ui icon header'>" +
			"<i class='sync icon' style='color: silver;'></i>" +
			"</h3>" +
			"<h4 class='sleak' style='font-weight: bold; color: dimgray;'>" +
			"Data que is empty" +
			"</h4>" +
			"</div>" +
			"</td>" +
			"</tr>";

		if(que == null)
		{
			que = [];
		}
		else
		{
			count = que.length;

			content = "";
			for(let i = 0; i < que.length; i++)
			{
				if(que[i] != null)
				{
					content +=
						"<tr id='"+que[i].transId+"-order-row'>" +
						"<td>"+que[i].transId+"</td>" +
						"<td>"+que[i].items.length+"</td>" +
						"<td>"+que[i].method+"</td>" +
						"<td>"+$("#currency-symbol").val()+numFormat(((Number(que[i].total) + Number(que[i].taxes)) - Number(que[i].discount)).toFixed(2))+"</td>" +
						"<td>"+$("#currency-symbol").val()+numFormat(Number(que[i].paidAmount).toFixed(2))+"</td>" +
						"<td id='"+que[i].transId+"-status'><small><small><i class='red circle icon'></i></small></small> pending</td>" +
						"</tr>";
				}
			}
		}


		if(content === "")
		{
			content =
				"<tr>" +
				"<td colspan='6'>" +
				"<div class='align-c pad-3'>" +
				"<h3 class='ui icon header'>" +
				"<i class='sync icon' style='color: silver;'></i>" +
				"</h3>" +
				"<h4 class='sleak' style='font-weight: bold; color: dimgray;'>" +
				"Data que is empty" +
				"</h4>" +
				"</div>" +
				"</td>" +
				"</tr>";
		}


		loadModal({title:"<i class='bug red-txt icon'></i> Data Que (<span id='que-items-count'>"+count+"</span>)",
			size:"l",cover:"white",curve:true,html:
				"<div class=''>" +
				"<table class='ui structured table'>" +
				"<thead>" +
				"<tr>" +
				"<td>Transaction id</td>" +
				"<td>Items</td>" +
				"<td>Pay method</td>" +
				"<td>Total</td>" +
				"<td>Paid</td>" +
				"<td>Status</td>" +
				"</tr>" +
				"<tbody id='order-que-table'>" +
				content +
				"</tbody>" +
				"</thead>" +
				"</table>" +
				"</div>"});
	}

	function initializePaystackPay()
	{
		if(getElement("cash_pay") != null)
		{
			getElement("cash_pay").checked = false;
		}
		if(getElement("pos_pay") != null)
		{
			getElement("pos_pay").checked = false;
		}
		if(getElement("others_pay") != null)
		{
			getElement("others_pay").checked = false;
		}

		loadingButton({btn:"paystack-btn"});
		postJson("hms-pos/worker", function(data, status){
			loadingButton({btn:"paystack-btn", loading:false});
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					payWithPaystack(d.Data,function(ref, status){
						if(status === "success")
						{
							confirmPaystackPay(ref, function (status, message) {

								if(status === "success")
								{
									$("#paystack-btn").addClass("positive disabled");
									$("#paystack-btn").html("<i class='check icon'></i> Success");

									setTimeout(function () {
										$("#paystack-btn").removeClass("positive disabled");
										$("#paystack-btn").html("paystack");
									}, 3000);

									if(getElement("web_pay") != null)
									{
										$("#web_pay").val("false");
									}
								}
								else
								{
									ShowModal(message);
								}
							});
						}
						else
						{
							ShowModal(ref);
						}
					});
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
		},{job:"init paystack pay", amount:Number($("#payment-amount").val())})
	}

	function confirmPaystackPay(ref, func)
	{
		loadingButton({btn:"paystack-btn"});
		postJson("hms-pos/worker", function(data, status){
			loadingButton({btn:"paystack-btn", loading:false});
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					func("success");
				}
				else
				{
					func("error", d.Message);
				}
			}
			else
			{
				func("error", "Connection error");
			}
		},{job:"confirm paystack pay", reference:ref})
	}


	///// --------------------------------------------  New code for Front desk----------------------------------

	function drawCheckin()
	{
		$("#front-desk-main").html(
			"<div class='l-width-2 w3-col pad-1' id='small-calendar-con'>" +
			"<div class='w3-row'>" +
			"<div class='w3-col l6 m6 s6'>" +
			"<input class='date-input' id='static-checkin'/> " +
			"</div> " +
			"<div class='w3-col l6 m6 s6'>" +
			"<input class='date-input' id='static-checkout'/> " +
			"</div> " +
			"</div>" +
			"</div>" +


			"<div class='l-width-8 w3-col pad-2' id='large-calendar-con'>" +
			"<div id='large-calendar'></div>" +
			"</div>"
		);

		if(getElement("static-checkin") != null)
		{
			var picker = new Lightpick({
				field: document.getElementById('static-checkin'),
				secondField: document.getElementById('static-checkout'),
				singleDate: false,
				inline:true,
				format:"MM/DD/YY",
				numberOfColumns:1,
				numberOfMonths:1,
				minDate:new Date(),
				onSelect: function(start, end){

				}
			});
		}

		let strip = new Bookingstrip({container:getElement("large-calendar")});

	}









