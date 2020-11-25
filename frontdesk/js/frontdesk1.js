
	let settings = null;
	let discounts = [];
	let receipt = {};

	let strip = null;
	let stripTrack = null;

	let roomsList = [];
	let reservations = [];
	let lodging = [];
	let guests = [];
	let parentReservation = null;

	let vCalendar = [];

	let searchList = [];

	let pushed = false;
	let fState = false;


	//food order
	let foodOrder = [];
	let savedBooking = [];

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
			"<h1 style='font-weight: normal; font-family: Nunito, quicksandregular, segoe ui;'>" +
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

		let cc = checkin.rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let totalAmount = cc[i].price * cc[i].days;

			for(let j= 0; j < coupons.length; j++)
			{
				if(coupons[j].Booking.includes(c))
				{
					if(coupons[j].Bypercentage)
					{
						discount += ((Number(coupons[j].Value) / 100.0) * totalAmount);
					}
					else
					{
						discount += (Number(coupons[j].Value) > (cc[i].price * cc[i].days)) ? (cc[i].price * cc[i].days) : Number(coupons[j].Value);
					}
				}
			}
		}
		return discount;
	}

	function buildCouponPixels()
	{
		let pixels = [];

		let cc = checkin.rooms;

		for(let j= 0; j < coupons.length; j++)
		{
			let tots = 0;
			for(let i = 0; i < cc.length; i++)
			{
				let c = cc[i].id;
				let totalAmount = cc[i].price;

				if(coupons[j].Booking.includes(c))
				{
					if(coupons[j].Bypercentage)
					{
						tots += ((Number(coupons[j].Value) / 100.0) * totalAmount);
					}
					else
					{
						tots += Number(coupons[j].Value) > cc[i].price ? cc[i].price : Number(coupons[j].Value);
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
				settings.Papertype = "80mm";
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

									roomsList = data.rooms;
									lodging = data.lodging;
									reservations = data.reservations;

									for(let i = 0; i < lodging.length; i++)
									{
										for(let j = 0; j < lodging[i].Rooms.length; j++)
										{
											let d = {cat:lodging[i].Rooms[j].Category.Name, room:lodging[i].Rooms[j].Number};
										}
									}

									let stg = localStorage.getItem("frontdesk_data_que");

									if(stg != null)
									{
										stg = JSON.parse(stg);

										if(typeof (stg) == "object")
										{
											for(let i = 0; i < stg.length; i++)
											{
												if(stg[i].operation === "add payment")
												{
													for(let j = 0; j < reservations.length; j++)
													{
														if(reservations[j].Id === stg[i].booking)
														{
															reservations[j].Paidamount = Number(reservations[j].Paidamount) + stg[i].amount;
															reservations[j].Paid = true;
														}
													}
												}
												if(stg[i].operation === "mark no-show")
												{
													for(let j = 0; j < reservations.length; j++)
													{
														if(reservations[j].Id === stg[i].booking)
														{
															reservations[j].Noshow = true;
														}
													}
												}
												if(stg[i].operation === "cancel reservation")
												{
													for(let j = 0; j < reservations.length; j++)
													{
														if(reservations[j].Id === stg[i].booking)
														{
															reservations.splice(j, 1);
														}
													}
												}
												if((stg[i].operation === "checkin") && (stg[i].fromReserve))
												{
													for(let j = 0; j < reservations.length; j++)
													{
														if(reservations[j].Id === stg[i].booking)
														{
															reservations.splice(j, 1);
														}
													}
												}
												if(stg[i].operation === "deposit")
												{
													for(let j = 0; j < lodging.length; j++)
													{
														if(lodging[j].Id === stg[i].booking)
														{
															lodging[j].Paidamount += Number(stg[i].amount);
														}
													}
												}
												if(stg[i].operation === "add bill")
												{
													for(let j = 0; j < lodging.length; j++)
													{
														if(lodging[j].Id === stg[i].booking)
														{
															lodging[j].Bills = Number(lodging[j].Bills) + Number(stg[i].total);
														}
													}
												}
												if(stg[i].operation === "checkout")
												{
													for(let j = 0; j < lodging.length; j++)
													{
														if(lodging[j].Id === stg[i].booking)
														{
															for(let h = 0; h < lodging[j].Rooms.length; h++)
															{
																if((lodging[j].Rooms[h].Category.Name === stg[i].category) && (lodging[j].Rooms[h].Number === stg[i].room))
																{
																	lodging[j].Rooms[h].Checkedout = true;
																}
															}
														}
													}
												}
											}
										}
									}

									$(".load-progress-con").html(90);
									if(o.onProgress != null)
									{
										if(typeof o.onProgress == "function")
										{
											o.onProgress(90);
										}
									}

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
			que = JSON.parse(window.localStorage.getItem("frontdesk_data_que"));
		}
		catch (e)
		{
			try
			{
				que = JSON.parse(window.localStorage.getItem('frontdesk_que_store'));
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

			let que = JSON.parse(window.localStorage.getItem("frontdesk_data_que"));

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
		o.job = "frontdesk operation";
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

					if(d.Data != null)
					{
						if(d.Data.type != null)
						{
							if(d.Data.type === "lodging")
							{
								lodging = d.Data.content;
							}
							else if(d.Data.type === "reservation")
							{
								reservations = d.Data.content;
							}
						}
					}

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

			let que = JSON.parse(window.localStorage.getItem("frontdesk_data_que"));

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
					window.localStorage.setItem("frontdesk_data_que", JSON.stringify(que));

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
					window.localStorage.removeItem("frontdesk_data_que");

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


	function fetchWebOrder(o)
	{
		postJson("hms-pos/worker", function(data, status){
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					let newFound = 0;

					$("#activity-con").html("<i class='green signal icon'></i> Connected");

					for(let j = 0; j < foodOrder.length; j++)
					{
						let found = false;
						let pos = 0;
						for(let i = 0; i < d.Data.length; i++)
						{
							if(foodOrder[j].Id == d.Data[i].Id)
							{
								found = true;
								pos = j;
								break;
							}
						}
						if(!found)
						{
							foodOrder.splice(pos, 1);
						}
					}

					for(let j = 0; j < notifications.length; j++)
					{
						let found = false;
						let pos = 0;
						for(let i = 0; i < d.Data.length; i++)
						{
							if(notifications[j].Id == d.Data[i].Id)
							{
								found = true;
								pos = j;
								break;
							}
						}
						if(!found)
						{
							notifications.splice(pos, 1);
							$("#alert-num").html(notifications.length);
						}
					}

					for(let i = 0; i < d.Data.length; i++)
					{
						let found = false;

						for(let j = 0; j < foodOrder.length; j++)
						{
							if(foodOrder[j].Id == d.Data[i].Id)
							{
								found = true;
								break;
							}
						}
						if(!found)
						{
							foodOrder.push(d.Data[i]);
							notifications.push(d.Data[i]);
							newFound++;
						}
					}

					if(newFound > 0)
					{
						newOnlineOrder(newFound);
					}
					if(notifications.length === 0)
					{
						stopAlert();
					}
					emptyRun = 0;
					setTimeout(function () {
						runRoutine();
					}, 10000);
				}
				else
				{
					$("#activity-con").html("<i class='green signal icon'></i> Connected");
					setTimeout(function () {
						runRoutine();
					}, 10000);
				}
			}
			else
			{
				connectionError();
			}
		}, {job:"get web order", item_type:$("#pos-type").val()});
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
		entity.id = "";
		entity.name = "";
		entity.type = "";
	}



	//-------------------------------- Saved order logic --------------------------------------------------------
	function launchsaveOrder()
	{
		if(!pushed)
		{
			let savedList = JSON.parse(window.localStorage.getItem("frontdesk_saved_bookings"));

			let autoName = "saved_booking_0";
			if(savedList == null)
			{
				autoName = "saved_booking_0";
			}
			else if(typeof savedList === "object")
			{
				let i = 0;
				while(savedList.includes(autoName))
				{
					autoName = "saved_booking_"+i;
					i++;
				}
			}

			loadModal({title:"Save booking", html:"<div class='pad-1'>" +
					"<input id='order-save-modal-id' type='hidden' value=''/>" +
					"<div class='ui fluid wix-textbox input'>" +
					"<input id='order-list-name' type='text' placeholder='Order name' value='"+autoName+"'>" +
					"</div> " +
					"<div class='ui fluid input' style='margin-top: 5px;'>" +
					"<button id='order-save-btn' class='ui sleak blue button' onclick=\"saveOrder()\">" +
					"<i class='save icon'></i> Save</button>" +
					"</div> " +
					"</div>", onLoaded:function(m){
					$("#order-save-modal-id").val(m.modal);
				}});
			return savedList;
		}
		else
		{
			ShowModal("Booking have been processed and cannot be saved.");
		}
	}

	function saveOrder()
	{
		completeCheckinData();

		checkin.deposit = Number($("#deposit-amount").val());
		checkin.coupons = coupons;
		checkin.discounts = addedDiscount;
		checkin.posuser = $("#pos-user").val();

		let listingName = $("#order-list-name").val();

		if(checkinList.length > 0)
		{
			let savedList = JSON.parse(window.localStorage.getItem("frontdesk_saved_bookings"));

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

			if((listingName === "menu") || (listingName === "frontdesk_saved_bookings") || (listingName === ""))
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
				window.localStorage.setItem(listingName, JSON.stringify(checkin));
				savedList.push(listingName);
				window.localStorage.setItem("frontdesk_saved_bookings", JSON.stringify(savedList));

				closeCheckinForm();
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

			let savedList = JSON.parse(window.localStorage.getItem("frontdesk_saved_bookings"));

			let content = "<div class='align-c pad-3'>" +
				"<h3 class='ui icon header'>" +
				"<i class='shopping bag icon' style='color: silver;'></i>" +
				"</h3>" +
				"<h5 class='sleak' style='font-weight: bold; color: dimgray;'>" +
				"There are no saved booking yet" +
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
		let savedList = JSON.parse(window.localStorage.getItem("frontdesk_saved_bookings"));

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
			window.localStorage.setItem("frontdesk_saved_bookings", JSON.stringify(savedList));
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
			checkin = order;
			checkinList = checkin.rooms;

			launchCheckinForm();

			getElement("modal_"+m).click();
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
				"<h3 class=''>" +
				"<i class='la la-percent la-3x' style='color: silver;'></i>" +
				"</h3>" +
				"<h4 style='font-weight: bold; color: dimgray; font-family: Nunito, quicksandregular;'>" +
				"There are no manually applicable discounts" +
				"</h4>" +
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
					"<h3 class=''>" +
					"<i class='la la-percent la-3x' style='color: silver;'></i>" +
					"</h3>" +
					"<h4 style='font-weight: bold; color: dimgray; font-family: Nunito, quicksandregular;'>" +
					"There are no manually applicable discounts" +
					"</h4>" +
					"</div>";
			}

			$("#modal_"+m.modal+"-inner").html(
				"<div class='pad-2'>" +
				"<div class=''>" +
				"<h3 style='font-family: quicksandregular; color: dimgrayy'>" +
				"<i class='blue la la-percent' style='vertical-align: middle; font-size: 2.5em;'></i> " +
				"<span style='vertical-align: middle;'> Front desk discount</span>" +
				"</h3>" +
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

		let cc = checkin.rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let totalAmount = cc[i].price * cc[i].days;

			for(let j= 0; j < addedDiscount.length; j++)
			{
				if(addedDiscount[j].Booking.includes(c))
				{
					if(addedDiscount[j].Bypercentage)
					{
						if(addedDiscount[j].Ontotal)
						{
							discount += ((Number(addedDiscount[j].Value) / 100.0) * bookingTotal);
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
		removeEntity();
		coupons = [];
		addedDiscount = [];
		pushed = false;

		checkinList = [];
		checkin = {guest:{}, rooms:[], discounts:[], total:0.00};

		//closeCheckinForm();
	}

	let bookingTotal = 0;
	let bookingTaxes = 0;
	let bookingDiscount = 0;
	function calculate()
	{
		let total = 0.00;
		let tax = 0.00;

		let cc = checkin.rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let c = cc[i].id;
			let tt = cc[i].price * cc[i].days;

			let tx = 0.00;


			//if tac calculation will be included
			/*
			if(settings.Compundtax)
			{
				tx = Number($("#"+c+"_tax").val());
			}
			else
			{
				tx = Number($("#"+c+"_tax").val()) * Number($("#"+c+"_quantity").val());
			}
			*/
			total += tt;
			tax += tx;
			//$("#"+c+"_price_txt").html(numFormat((tt + tx).toFixed(2)));
		}


		let subtotal = total;
		total += tax;

		bookingTotal = subtotal;
		bookingTaxes = tax;

		//let discount = calculateDiscount() + calculateAddedDiscount() + calculateCouponDiscount();
		let discount = calculateCouponDiscount() + calculateAddedDiscount();

		discount = ((discount > total) ? total : discount);

		bookingDiscount = discount;

		$("#total_con").html(numFormat((total - discount).toFixed(2)));
		//$("#tax_con").html(numFormat((tax).toFixed(2)));
		$("#discount_con").html(numFormat((discount).toFixed(2)));
		$("#subtotal_con").html(numFormat((subtotal).toFixed(2)));

		$("#deposit-amount").val((total - discount).toFixed(2));
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
										discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
										discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
											discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
											discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
											discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
											discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
									discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
											discount += ((discounts[j].Value / 100.0) * bookingTotal);
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
							if(bookingTotal >= Number(discounts[j].Fromamount))
							{
								if((bookingTotal <= Number(discounts[j].Toamount)) || (Number(discounts[j].Toamount) === 0))
								{
									if(Number(discounts[j].Bypercentage))
									{
										if(Number(discounts[j].Ontotal))
										{
											discount += ((Number(discounts[j].Value) / 100.0) * bookingTotal);
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
										tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
										tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
											tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
											tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
											tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
											tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
									tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
											tots += ((discounts[j].Value / 100.0) * bookingTotal);
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
							if(bookingTotal >= Number(discounts[j].Fromamount))
							{
								if((bookingTotal <= Number(discounts[j].Toamount)) || (Number(discounts[j].Toamount) === 0))
								{
									if(Number(discounts[j].Bypercentage))
									{
										if(Number(discounts[j].Ontotal))
										{
											tots += ((Number(discounts[j].Value) / 100.0) * bookingTotal);
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


	///// --------------------------------------------  New code for Front desk----------------------------------

	function switchTab(e)
	{
		$(".front-desk-tab").removeClass("active");
		$(e).addClass("active");

		if(e.id === "checkin-tab")
		{
			drawCheckin();
		}
		if(e.id === "checkout-tab")
		{
			drawCheckout();
		}
		if(e.id === "guest-tab")
		{
			drawGuest();
		}
		if(e.id === "reservation-tab")
		{
			drawReservation();
		}
	}

	let checkinList = [];
	let checkinDate = null;
	let checkoutDate = null;
	let checkin = {guest:{}, rooms:[], discounts:[], total:0.00};
	let picker2 = null;

	function drawCheckin()
	{
		$("#front-desk-main").html(

			"<div class='w3-col pad-2' id='large-calendar-con'>" +
			"<div id='dates-row' class='w3-row'>" +
			"<div class='w3-col l6 m6 s12'>" +
			"<div class='w3-col l6 m12 s12'>" +
			"<div class='w3-row margin-b-1'>" +
			"<div class='ui fluid labeled input'>" +
			"<label class='ui blue label' style='font-family: Nunito;'>Select Date</label>" +
			"<input id='check-in' class='wix-textbox' placeholder='Checkin date' type='text' style='border-radius: 0;'/>" +
			"<input id='check-out' class='wix-textbox' placeholder='Checkout date' type='text' style='border-radius: 0 3px 3px 0;'/>" +
			"<input id='check-in-stamp' type='hidden' value='0'>" +
			"<input id='check-out-stamp' type='hidden' value='0'>" +
			"</div>" +
			"</div> " +
			"</div>" +
			"</div>" +
			"<div class='w3-col l6 m6 s12'>" +
			"<div class='align-r'>" +
			"<div class='ui labeled input'>" +
			"<label class='ui basic label' style='font-family: Nunito;'>Calendar date</label>" +
			"<input id='calendar-span' class='wix-textbox' type='text'/>" +
			"</div>" +
			"</div> " +
			"</div>" +
			"</div>" +
			"<div id='large-calendar'>" +
			"</div>" +
			"</div>"
		);

		let picker1 = new Lightpick({
			field: document.getElementById('check-in'),
			secondField: document.getElementById('check-out'),
			singleDate: false,
			inline:false,
			format:"MM/DD/YY",
			numberOfColumns:2,
			numberOfMonths:2,
			minDate:new Date(),
			onSelect: function(start, end){
				let cin = new Date(start);
				let cout = new Date(end);

				let inn = new Date(cin.getFullYear(), cin.getMonth(), cin.getDate());
				let out = new Date(cout.getFullYear(), cout.getMonth(), cout.getDate());

				if(!((inn === cin.getTime()) && (out === cout.getTime())))
				{
					checkinDate = inn.getTime();
					checkoutDate = out.getTime();

					checkinList = [];
				}


				$("#check-in-stamp").val(new Date(cin.getFullYear(), cin.getMonth(), cin.getDate()).getTime());
				$("#check-out-stamp").val(new Date(cout.getFullYear(), cout.getMonth(), cout.getDate()).getTime());

				if((getElement("check-in").value.split("/").length === 3)
					&& (getElement("check-out").value.split("/").length === 3))
				{
					selectRoom();
				}
			}
		});

		picker2 = new Lightpick({
			field: document.getElementById('calendar-span'),
			singleDate: true,
			inline:false,
			format:"MM/DD/YY",
			numberOfColumns:1,
			numberOfMonths:1,
			onSelect: function(date){
				let d = new Date(date);
				drawCalendar(d.getTime());
			}
		});

		if(getElement("calendar-span").value === "")
		{
			let today = new Date();
			drawCalendar(new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime());
			getElement("calendar-span").value = zerofy(today.getMonth() + 1) + "/" + zerofy(today.getDate()) + "/" + today.getFullYear();
		}
	}

	function drawCalendar(date)
	{
		getElement("large-calendar").innerHTML = "";

		vCalendar = [];

		if(strip != null)
		{
			strip.dispose();
		}

		strip = new Bookingstrip(getElement("large-calendar"), date, 'Month', 'PILLS');
		strip.addAvailbilityStrip();

		if(roomsList.length > 0)
		{
			for(let i = 0; i < roomsList.length; i++)
			{
				strip.addRoomCategory(roomsList[i].category, roomsList[i].rooms);
			}
		}
		else
		{

		}
		if(stripTrack === null)
		{
			strip.initSelection();
			stripTrack = true;
		}


		strip.onSelection = function(o){
			if(o === false)
			{
				ShowModal("Invalid selection");
			}
			else
			{
				o.id = Date.now();

				if((checkinDate === o.checkin) && (checkoutDate === o.checkout))
				{
					checkinList.push(o);
				}
				else
				{
					checkinDate = Number(o.checkin);
					checkoutDate = Number(o.checkout);

					checkinList = [];
					checkinList.push(o);
				}
				launchCheckinForm();
			}
		};

		let start = new Date(2020, 6, 15);

		for(let i = 0; i < lodging.length; i++)
        {
            for(let j = 0; j < lodging[i].Rooms.length; j++)
            {
                strip.addActivity(lodging[i].Rooms[j].Category.Name, lodging[i].Rooms[j].Number, wxDateToTime(lodging[i].Rooms[j].Checkin),
					wxDateToTime(lodging[i].Rooms[j].Checkout), lodging[i].Guest.Name+" "+lodging[i].Guest.Surname,
					lodging[i].Rooms[j].Checkedout ? 'completed' : 'lodging', true);

				vCalendar.push({category:lodging[i].Rooms[j].Category.Name, room:lodging[i].Rooms[j].Number, checkin:wxDateToTime(lodging[i].Checkin), checkout:wxDateToTime(lodging[i].Checkout)});

				$("#selection-box").removeClass("selection-box");
            }
        }


		let stg = localStorage.getItem("frontdesk_data_que");

		if(stg != null)
        {
            stg = JSON.parse(stg);

            if(typeof (stg) == "object")
            {
                for(let i = 0; i < stg.length; i++)
                {
                    if(stg[i].operation === "checkin")
                    {
                        if(stg[i].store != null)
                        {
                            addToCalendar(stg[i], 'lodging', true);
                        }
                    }
                }

                for(let i = 0; i < stg.length; i++)
				{
					if(stg[i].operation === "reservation")
					{
						if(stg[i].store != null)
						{
							for(let k = 0; k < stg[i].store.rooms.length; k++)
							{
								let vacantRoom = findVacantRoom(stg[i].store.rooms[k].category, new Date(Number(stg[i].store.rooms[k].checkin)), new Date(Number(stg[i].store.rooms[k].checkout)));

								strip.addActivity(stg[i].store.rooms[k].category, vacantRoom,
									new Date(Number(stg[i].store.rooms[k].checkin)), new Date(Number(stg[i].store.rooms[k].checkout)),
									stg[i].store.guest.name+" "+stg[i].store.guest.surname, 'reservation');

								vCalendar.push({category:stg[i].store.rooms[k].category, room:vacantRoom, checkin:new Date(Number(stg[i].store.rooms[k].checkin)), checkout:new Date(Number(stg[i].store.rooms[k].checkout))});
							}
						}
					}
				}
            }
        }
		for(let i = 0; i < reservations.length; i++)
		{
			for(let j = 0; j < reservations[i].Rooms.length; j++)
			{
				for(let h  = 0; h < reservations[i].Rooms[j].Number; h++)
				{
					let vacantRoom = findVacantRoom(reservations[i].Rooms[j].Room.Name, wxDateToTime(reservations[i].Checkindate), wxDateToTime(reservations[i].Checkoutdate));

					if(vacantRoom != null)
					{
						strip.addActivity(reservations[i].Rooms[j].Room.Name, vacantRoom,
							wxDateToTime(reservations[i].Checkindate), wxDateToTime(reservations[i].Checkoutdate),
							reservations[i].Customer.Name+" "+reservations[i].Customer.Surname, true);

						vCalendar.push({category:reservations[i].Rooms[j].Room.Name, room:vacantRoom, checkin:wxDateToTime(reservations[i].Checkindate), checkout:wxDateToTime(reservations[i].Checkoutdate)});
					}
					else
					{
						// console.log(reservations[i].Rooms[j]);
					}
				}
			}
		}

		//strip.showStripes();
		document.body.onresize = function () {
			strip.resizeStrips();
		};
	}

	function wxDateToTime(wixDate)
	{
		return new Date(Number(wixDate.Year), (Number(wixDate.Month) - 1), Number(wixDate.Day));
	}
	
	function findVacantRoom(category, checkin, checkout)
	{
		let rooms = null;
		let room = null;

		for(let i = 0; i < roomsList.length; i++)
		{
			if(roomsList[i].category ===  category)
			{
				rooms = roomsList[i].rooms;
			}
		}

		if(typeof (rooms) === "object" && rooms !== null)
		{
			let nf = false;

			for(let i = 0; i < rooms.length; i++)
			{
				let room = rooms[i];
				let f = false;

				for(let j = 0; j < vCalendar.length; j++)
				{
					if((vCalendar[j].category === category) && (vCalendar[j].room === room))
					{
						if(!((((checkin.getTime() < vCalendar[j].checkin.getTime()) && (checkin.getTime() < vCalendar[j].checkout.getTime())) &&
						((checkout.getTime() <= vCalendar[j].checkin.getTime()) && (checkout.getTime() < vCalendar[j].checkout.getTime()))) ||

							(((checkin.getTime() > vCalendar[j].checkin.getTime()) && (checkin.getTime() >= vCalendar[j].checkout.getTime())) &&
								((checkout.getTime() > vCalendar[j].checkin.getTime()) && (checkout.getTime() > vCalendar[j].checkout.getTime())))))
						{
							f = true;
							break;
						}
					}
				}
				if(f == false)
				{
					return  room;
				}
			}

			if(nf == false)
			{
				return room;
			}
		}
		return null;
	}

	function listVacantRoom(category, checkin, checkout)
	{
		let rooms = null;
		let room = null;

		let ret = [];

		for(let i = 0; i < roomsList.length; i++)
		{
			if(roomsList[i].category ===  category)
			{
				rooms = roomsList[i].rooms;
			}
		}

		if(typeof (rooms) === "object")
		{
			let nf = false;

			for(let i = 0; i < rooms.length; i++)
			{
				let room = rooms[i];
				let f = false;

				for(let j = 0; j < vCalendar.length; j++)
				{
					if((vCalendar[j].category === category) && (vCalendar[j].room === room))
					{
						if(!((((checkin.getTime() < vCalendar[j].checkin.getTime()) && (checkin.getTime() < vCalendar[j].checkout.getTime())) &&
							((checkout.getTime() <= vCalendar[j].checkin.getTime()) && (checkout.getTime() < vCalendar[j].checkout.getTime()))) ||

							(((checkin.getTime() > vCalendar[j].checkin.getTime()) && (checkin.getTime() >= vCalendar[j].checkout.getTime())) &&
								((checkout.getTime() > vCalendar[j].checkin.getTime()) && (checkout.getTime() > vCalendar[j].checkout.getTime())))))
						{
							f = true;
							break;
						}
					}
				}
				if(f == false)
				{
					if(room != null)
					{
						ret.push(room);
					}
				}
			}

			if(nf == false)
			{
				if(room != null)
				{
					ret.push(room);
				}
			}
		}
		return ret;
	}



	function drawCheckout()
	{
		$("#front-desk-main").html(
			"<div class='l-width-2 w3-col' id='small-calendar-con'>" +
			"<div class=''>" +
			"<div class='pad-2' style='background-color: rgba(100,100,100,0.1);'>" +
			"<h3 class='sleak' style='color: dimgray;'>Summary</h3>" +
			"</div>" +
			"</div>" +
			"<br/>" +
			"<div class='pad-1'>" +
			"<div>" +

			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/departure.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='checkout-due-today-con' style='font-family: Nunito; font-weight: normal; margin: 0; color: dimgray;'></h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>Due departure</h5>" +
			"</div> " +
			"</div> " +


			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/ban_rectangle.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='checkout-overdue' style='font-family: Nunito; font-weight: normal; margin: 0; color: dimgray;'></h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>Overdue</h5>" +
			"</div> " +
			"</div> " +

			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/arrival.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='checkin-today-con' style='font-family: Nunito; font-weight: normal; margin: 0; color: dimgray;'></h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>Today's arrival</h5>" +
			"</div> " +
			"</div> " +


			"</div>" +
			"</div>" +
			"</div>" +


			"<div class='l-width-8 w3-col pad-2' id='large-calendar-con'>" +
			"<div id=''>" +


			"<div class='ui pointing menu'>" +
			"  <a id='all-lodging' class='active item reserve-tab' onclick='switchDepartureTab(this)'>" +
			"     <i class='circle dot blue outline icon'></i>  All" +
			"  </a>" +
			"  <a id='due-departure' class='item reserve-tab' onclick='switchDepartureTab(this)'>" +
			"     <i class='green check circle icon'></i> Due Today (D)" +
			"  </a>" +
			"  <a id='overdue-departure' class='item reserve-tab' onclick='switchDepartureTab(this)'>" +
			"     <i class='red times circle icon'></i> Overdue (D)" +
			"  </a>" +
			"  <a id='arrived-today' class='item reserve-tab' onclick='switchDepartureTab(this)'>" +
			"     <i class='green check calendar icon'></i> Today (A)" +
			"  </a>" +
			"    <div class='item'>" +
			"      <div class='ui transparent icon input'>" +
			"        <input id='departure-due-date' type='text' data-toggle='datepicker' " +
			"             placeholder='Select due date' onchange='populateInHouseTable; ehChange()'>" +
			"        <i id='reservation-cancel-btn' class='blue calendar alternate outline icon' onclick='cancelDate()'></i>" +
			"      </div>" +
			"    </div>" +
			"  <div class='right menu'>" +
			"    <div class='item'>" +
			"      <div class='ui transparent icon input'>" +
			"        <input id='search-txt' type='text' placeholder='Search...' " +
			"         onkeyup='if(event.keyCode == 13){populateInHouseTable();}'/>" +
			"        <i class='search link icon'></i>" +
			"      </div>" +
			"    </div>" +
			"  </div>" +
			"</div>" +

			DrawTable(["Booking Detail", "Date", "Bills", "Payment", "Status", "Action"],
				{
					Celled: true, Padded: true, GroupAction: [{ Text: "", Method: "ConfGroupOrderDelete" }]
				}).outerHTML +

			"</div>" +
			"</div>"
		);

		$(".ui.dropdown").dropdown();

		let picker4 = new Lightpick({
			field: document.getElementById('departure-due-date'),
			singleDate: true,
			inline:false,
			format:"MM/DD/YY",
			numberOfColumns:1,
			numberOfMonths:1,
			onSelect: function(date){

			}
		});

		populateInHouseTable();
	}
	function populateDeparture(page)
	{
		let start = page == null ? 0 : page;
		page = page == null ? 1 : page;

		let sn = start + 1;
		let perpage = 25;

		let t = new Date();
		let today = new Date(t.getFullYear(), t.getMonth(), t.getDate());

		$("#table-body").html("");

		if($("#perpage").dropdown('get value') !== "")
		{
			perpage = $("#perpage").dropdown('get value');
		}

		$("#pages").html(Paginate(Number(page), Number(lodging.length), Number(perpage), "populateReservation"));

		let filter = "all";

		if($("#due-departure").hasClass("active"))
		{
			filter = "due";
		}
		if($("#overdue-departure").hasClass("active"))
		{
			filter = "overdue";
		}
		if($("#departure-due-date").hasClass("active"))
		{
			filter = "abandoned";
		}
		if($("#arrived-today").hasClass("active"))
		{
			filter = "arrived-today";
		}

		let added = 0;

		for(let i = start; i < lodging.length; i++)
		{
			for(let j = 0; j < lodging[i].Rooms.length; j++)
			{
				let paint = (filter === "all");

				if(filter === "due")
				{
					if(today.getTime() === wxDateToTime(lodging[i].Rooms[j].Checkout).getTime())
					{
						paint = true;
					}
				}
				if(filter === "overdue")
				{
					if((today.getTime() - (((60 * 60) * 24) * 100)) >= lodging[i].Rooms[j].Checkout)
					{
						paint = true;
					}
				}
				if(filter === "arrived-today")
				{
					if(today.getTime() === wxDateToTime(lodging[i].Rooms[j].Checkin).getTime())
					{
						paint = true;
					}
				}

				if(paint)
				{
					added++;

					let row = document.createElement("tr");
					row.id = lodging[i].Id +"-"+lodging[i].Rooms[j].Category.Name+"-"+lodging[i].Rooms[j].Number+"-row";
					row.setAttribute("row-num", sn);

					let td0 = document.createElement("td");
					td0.innerHTML = "<label><input id='"+lodging[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";


					let td1 = document.createElement("td");
					td1.style.lineHeight = "170%";
					td1.innerHTML = "<span class='blue-text'>"+lodging[i].Guest.Name+" "+lodging[i].Guest.Surname+"</span><br/>"
						+"<span style='color: silver;'> Room:</span> " +(lodging[i].Rooms[j].Category.Name) + "&nbsp;&nbsp;&nbsp;&nbsp;"
						+ "<span>"+lodging[i].Rooms[j].Number+"</span><br/>";


					let td2 = document.createElement("td");
					td2.style.lineHeight = "170%";
					td2.innerHTML = "<span style='color: silver;'>In:</span> <span style='font-size: 12px;'>"+
						lodging[i].Rooms[j].Checkin.WeekDay+", "+lodging[i].Rooms[j].Checkin.Day+"/"+lodging[i].Rooms[j].Checkin.MonthName+"/"+lodging[i].Rooms[j].Checkin.Year+
						"</span><br/><span style='color: silver;'>Out </span> <span style='font-size: 12px;'>"+
						lodging[i].Rooms[j].Checkout.WeekDay+", "+lodging[i].Rooms[j].Checkout.Day+"/"+lodging[i].Rooms[j].Checkout.MonthName+"/"+lodging[i].Rooms[j].Checkout.Year+
						"</span>";


					let td3 = document.createElement("td");
					td3.style.lineHeight = "170%";
					td3.innerHTML = "<span style='color: silver;'>Booking:</span> &#8358; "+
						numFormat(Number(lodging[i].Total).toFixed(2))+
						"<br/><span style='color: silver;'>Other bills </span>&#8358; "+
						numFormat(Number(lodging[i].Bills).toFixed(2));


					let td4 = document.createElement("td");
					td4.style.lineHeight = "170%";

					let b = ((Number(lodging[i].Total) + Number(lodging[i].Bills)) - Number(lodging[i].Paidamount));

					td4.innerHTML = "<span style='color: silver;'>Deposit:</span> &#8358; "+
						numFormat(Number(lodging[i].Paidamount).toFixed(2)) +

						(b >= 0 ? "<br/><span style='color: silver;'>Balance </span>&#8358; " + (numFormat(b.toFixed(2))) :
							"<br/><span style='color: silver;'>Rebate </span>&#8358; "+ (numFormat(Math.abs(b).toFixed(2))));

					let td5 = document.createElement("td");
					td5.style.lineHeight = "170%";

					if(lodging[i].Rooms[j].Checkedout)
					{
						td5.innerHTML = "<span class='checked-out status'>Checked out</span>";
					}
					else if(!lodging[i].Rooms[j].Checkedout && ((wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() > today.getTime())))
					{
						td5.innerHTML = "<span class='green-back status'>Active</span>";
					}
					else if(!lodging[i].Rooms[j].Checkedout && ((wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() === today.getTime())))
					{
						td5.innerHTML = "<span class='yellow-back status'>Due</span>";
					}
					else if(!lodging[i].Rooms[j].Checkedout && ((wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() < today.getTime())))
					{
						td5.innerHTML = "<span class='red-back status'>Overdue</span>";
					}


					let td6 = document.createElement("td");

					if(lodging[i].Rooms[j].Checkedout)
					{
						if(b === 0)
						{
							td6.innerHTML =
								"<div class='pad-1'><button class='ui disabled icon button'><i class='cog red icon icon'></i></button></div>";
						}
						else if(b > 0)
						{
							td6.innerHTML =
								"<div class='w3-container'> " +
								"<div id='" + lodging[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>" +
								"<div class='item' onclick=\"acceptDeposit('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='money green icon'></i>Add payment</div>" +
								"</div>" +
								"</div></div>";
						}
						else
						{
							td6.innerHTML =
								"<div class='w3-container'> " +
								"<div id='" + lodging[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>" +
								"<div class='item' onclick=\"showReservationDetails('" + lodging[i].Id + "')\"><i class='money blue icon'></i>Rebate</div>" +
								"</div>" +
								"</div></div>";
						}
					}
					else
					{
						td6.innerHTML =
							"<div class='w3-container'> " +
							"<div id='" + lodging[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<div class='item' onclick=\"showLodgingDetails('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='eye blue icon'></i>See details</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"acceptDeposit('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='money green icon'></i>Add payment</div>" +
							"<div class='item' onclick=\"addBill('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='money blue times icon'></i>Add bill</div>" +
							"<!--<div class='ui divider'></div>-->" +
							"<!--<div class='item' onclick=\"changeRoom('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='blue calendar alternate outline icon'></i>Change room</div>-->" +
							"<!--<div class='item' onclick=\"extendStay('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='blue calendar alternate outline icon'></i>Extend stay</div>-->" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"checkOutLodging('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='red calendar alternate outline icon'></i>Check out</div>" +
							"</div>" +
							"</div></div>";
					}

					row.appendChild(td0);
					row.appendChild(td1);
					row.appendChild(td2);
					row.appendChild(td3);
					row.appendChild(td4);
					row.appendChild(td5);
					row.appendChild(td6);

					sn++;

					document.getElementById("table-body").appendChild(row);
				}
			}
		}
		$(".c-menu").dropdown();

		if(added === 0)
		{
			document.getElementById("table-body").innerHTML =
				"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-list la-3x' style='color: silver;'></i> </h2>" +
				"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Empty list returned</h6></div></td></tr>";
		}
	}

	function showLodgingDetails(e)
	{
		let res = null;

		for(let i = 0; i < lodging.length; i++)
		{
			if(lodging[i].Id === e)
			{
				res = lodging[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			let content = "";

			for(let i = 0; i < res.Rooms.length; i++)
			{
				let period = ((wxDateToTime(res.Rooms[i].Checkout).getTime() - wxDateToTime(res.Rooms[i].Checkin).getTime()) / (((60 * 60) * 24) * 1000));
				content +=
					"<div class='pad-2' style='padding-top: 10px; padding-bottom: 10px;'>" +

					"<div class='w3-row' style='margin-top: 10px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<h3 style='font-family: Nunito, segoe ui; margin: 0;'>"+res.Rooms[i].Category.Name+"</h3> " +
					"<h5 style='font-family: Nunito, segoe ui; margin: 0; margin-top: 5px;'>"+
					"<span style='color: silver;'>Room: </span>"+res.Rooms[i].Number+"</h5> " +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>" +
					"<span style='font-family: Lato; color: silver;'> Checkin </span>"+
					res.Rooms[i].Checkin.WeekDay+", "+res.Rooms[i].Checkin.Day+" "+res.Rooms[i].Checkin.MonthName+" "+res.Rooms[i].Checkin.Year+"</span> " +
					"<span style='font-family: Nunito, segoe ui;'><br/>" +
					"<span style='font-family: Lato; color: silver;'>Checkout </span>"+
					res.Rooms[i].Checkout.WeekDay+", "+res.Rooms[i].Checkout.Day+" "+res.Rooms[i].Checkout.MonthName+" "+res.Rooms[i].Checkout.Year+"</span> " +
					"</div> " +
					"</div> " +

					"</div>";
			}

			loadPageModal({size:"s",  onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class='w3-row'>" +

					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
					"<i class='blue la la-calendar la-2x' style='vertical-align: middle;'></i>" +
					"<span style='vertical-align: middle'> Reservation details</span>" +
					"</h3>" +
					"</div> " +
					"<div class='w3-col l4 m4 s4 align-r'>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl; font-weight: bold;'>"+
					res.Bookingnumber+"</h5>" +
					"</div> " +

					"</div>" +
					"</div>" +
					"<hr style='margin: 0px; padding: 0px;'/><br/>" +
					"<div id='reservation-con'>" +
					"<div class='pad-2'  style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
					"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.6em;'></i> "+
					res.Guest.Name+" "+res.Guest.Surname+"</h3>" +
					"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Guest.Email+"</h5>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Guest.Phone+"</h5>" +

					"</div>" +
					"<div class='w3-col l4 m4 s4'>" +
					"<h4 style='color: dimgray; font-weight: normal;'>Total: &#8358;"+numFormat(Number(res.Total).toFixed(2))+"</h4>" +
					"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Paid: &#8358;"+numFormat((Number(res.Paidamount)).toFixed(2))+"</h4>" +
					(((Number(res.Total) + Number(res.Discount)) - Number(res.Paidamount)) ? (((Number(res.Total) + Number(res.Discount)) - Number(res.Paidamount))) :
						((Number(res.Total) + Number(res.Discount)) - Number(res.Paidamount))) +
					"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Balance: &#8358;"+
					((Number(res.Total) + Number(res.Discount)) - Number(res.Paidamount))+"</h4>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"<hr/> " +

					content +

					"<hr/>" +
					"<div class='pad-2' style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span><i class='user icon blue icon'></i> Adults <strong>("+res.Adults+")</strong></span>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span><i class='group blue icon'></i> Children <strong>("+res.Children+")</strong></span>" +
					"</div> " +
					"</div> " +
					"</div> " +

					"</div>");
			}});
		}
	}
	function acceptDeposit(e, category, room)
	{
		let res = null;

		for(let i = 0; i < lodging.length; i++)
		{
			if(lodging[i].Id === e)
			{
				res = lodging[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
					$("#modal_"+m.modal+"-inner").html(
						"<div class='pad-2'>" +
						"<div class=''>" +
						"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
						"<i class='blue la la-money-bill la-2x' style='vertical-align: middle;'></i>" +
						"<span style='vertical-align: middle'> Add payment</span>" +
						"</h3>" +
						"</div>" +
						"</div>" +
						"<hr style='margin: 0px; padding: 0px;'/><br/>" +
						"<div id='reservation-con'>" +
						"<div class='pad-2' id='checkin-control-con'>" +
						"<div>" +
						"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
						"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.5em;'></i>"+
						res.Guest.Name+" "+res.Guest.Surname+"</h3>" +
						"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Guest.Email+"</h5>" +
						"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Guest.Phone+"</h5>" +
						"</div>" +
						"</div>" +
						"<hr/> " +
						"<div class='pad-2'>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>Subtotal</span> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>" +
						numFormat(Number(res.Total).toFixed(2))+"</span> " +
						"</div> " +
						"</div> " +
						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>Discount</span> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>" +
						numFormat(Number(res.Discount).toFixed(2))+"</span> " +
						"</div> " +
						"</div> " +
						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>Other bills</span> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>" +
						numFormat(Number(res.Bills).toFixed(2))+"</span> " +
						"</div> " +
						"</div> " +
						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>Total</span> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>"+
						numFormat(((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)).toFixed(2))+"</span> " +
						"</div> " +
						"</div> " +
						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>Paid</span> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>"+
						numFormat(Number(res.Paidamount).toFixed(2))+"</span> " +
						"</div> " +
						"</div> " +
						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>Balance</span> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>"+
						numFormat(((((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)) - (Number(res.Paidamount))) < 0 ? 0 : (((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)) - (Number(res.Paidamount)))).toFixed(2))+"</span> " +
						"</div> " +
						"</div> " +
						"</div>" +
						"<hr/>" +
						"<div class='pad-2'>" +
						"<div class='ui fluid labeled input'>" +
						"<label class='ui label' style='font-family: Nunito, quicksandregular;'>&#8358;</label>" +
						"<input id='pay-amount' class='wix-textbox' value='"+(((((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)) - (Number(res.Paidamount))) > 0) ? (((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)) - (Number(res.Paidamount))) : 0)+"' placeholder='Amount'/>" +
						"</div>" +
						"<div>" +
						"<div class='w3-row' style='margin-top: 15px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<label><input id='cash_payment' name='pay-method' class='with-gap' type='radio' /><span>Cash</span></label>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6'></div> " +
						"<label><input id='pos_payment' name='pay-method' class='with-gap' type='radio' /><span>POS (credit / debit card)</span></label>" +
						"</div>" +
						"<div class='w3-row' style='margin-top: 15px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<label><input id='transfer_payment' name='pay-method' class='with-gap' type='radio' /><span>Transfer / deposit</span></label>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6'></div> " +
						"<label><input id='others_payment' name='pay-method' class='with-gap' type='radio' /><span>Others</span></label>" +
						"</div>" +
						"</div> " +
						"<hr/>" +
						"<label><input id='add-pay-print-receipt' class='filled-in' type='checkbox'/><span>Print receipt</span></label><br/><br/>" +
						"<button id='add-pay-btn' class='ui blue button' style='font-family: Nunito, quicksandregular; margin-top: 10px;' onclick=\"addDeposit('"+res.Id+"','"+m.modal+"','"+category+"','"+room+"')\">Add payment</button> " +
						"</div> " +
						"</div>");
				}});
		}
	}
	function addDeposit(e, modal, category, room)
	{
		let res = null;

		for(let i = 0; i < lodging.length; i++)
		{
			if(lodging[i].Id === e)
			{
				res = lodging[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid booking id selected");
		}
		else
		{
			let amount = Number($("#pay-amount").val());
			let print = $("#add-pay-print-receipt").prop("checked");
			let method = "";

			if((amount <= 0) || (amount.toString().toLowerCase() === "nan"))
			{
				errorButton({btn:"add-pay-btn", msg:"Invalid amount"});
			}
			else if((getElement("cash_payment") != null) && (getElement("cash_payment").checked))
			{
				method = "cash";
			}
			else if((getElement("pos_payment") != null) && (getElement("pos_payment").checked))
			{
				method = "pos";
			}
			else if((getElement("transfer_payment") != null) && (getElement("transfer_payment").checked))
			{
				method = "transfer";
			}
			else if((getElement("others_payment") != null) && (getElement("others_payment").checked))
			{
				method = "others";
			}
			else
			{
				errorButton({btn:"add-pay-btn", msg:"Select payment method"});
			}

			if((method !== "") && ((amount > 0) && (amount.toString().toLowerCase() !== "nan")))
			{
				let payment = buildAddDeposit(res, amount, method);

				for(let i = 0; i < lodging.length; i++)
				{
					if(lodging[i].Id === res.Id)
					{
						lodging[i].Paidamount = Number(lodging[i].Paidamount) + amount;
						lodging[i].Paid = true;
					}
				}

				if(payment != null)
				{
					addItemToQue(payment);

					reBuildLodgeRow(res.Id, category, room);

					if(print === true)
					{
						printReceipt(payment);
					}

					$("#add-pay-btn").html("<i class='check icon'></i> payment added");
					$("#add-pay-btn").prop("disabled", true);
					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
		}
	}
	function buildAddDeposit(res, amount, method)
	{
		let payment = {};

		payment.items = [];

		payment.total = Number(res.Total);
		payment.discount = Number(res.Discount);
		payment.operation = "deposit";
		payment.fromReserve = true;
		payment.amount = Number(amount);
		payment.booking = res.Id;
		payment.taxes = 0.0;

		payment.transId = res.Bookingnumber != "" ? res.Bookingnumber : Date.now();
		payment.time = (Date.now() / 1000);

		payment.printItems = [];

		let cc = res.Rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let tx = 0.00;
			payment.printItems.push({item:cc[i].Category.Name,qty:cc[i].Number,price:Number(cc[i].Category.price)});
		}
		payment.posuser = $("#pos-user").val();

		payment.paidAmount = Number(amount) + Number(res.Paidamount);
		payment.isWeborder = false;
		payment.method = method;


		return payment;
	}
	function addBill(e, category, room)
	{
		let res = null;

		for(let i = 0; i < lodging.length; i++)
		{
			if(lodging[i].Id === e)
			{
				res = lodging[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid booking id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class=''>" +
					"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
					"<i class='blue la la-money-bill la-2x' style='vertical-align: middle;'></i>" +
					"<span style='vertical-align: middle'> Add Bill</span>" +
					"</h3>" +
					"</div>" +
					"</div>" +
					"<hr style='margin: 0px; padding: 0px;'/><br/>" +
					"<div id='reservation-con'>" +
					"<div class='pad-2' id='checkin-control-con'>" +
					"<div>" +
					"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
					"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.5em;'></i>"+
					res.Guest.Name+" "+res.Guest.Surname+"</h3>" +
					"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Guest.Email+"</h5>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Guest.Phone+"</h5>" +
					"</div>" +
					"</div>" +
					"<hr/> " +

					"<div class='pad-2'>" +
					"<div class='ui fluid labeled input'>" +
					"<label class='ui label' style='font-family: Nunito, quicksandregular;'>Item</label>" +
					"<input id='item' class='wix-textbox' value='' placeholder='Item'/>" +
					"</div><br/>" +
					"<div class='ui fluid labeled input'>" +
					"<label class='ui label' style='font-family: Nunito, quicksandregular;'>Quantity</label>" +
					"<input id='quantity' class='wix-textbox' type='number' value='1' min='1' placeholder='quantity'/>" +
					"</div><br/>" +
					"<div class='ui fluid labeled input'>" +
					"<label class='ui label' style='font-family: Lato;'>Unit Price  &#8358;</label>" +
					"<input id='pay-amount' class='wix-textbox' value='0' placeholder='Price'/>" +
					"</div>" +
					"<hr/>" +
					"<button id='add-bill-btn' class='ui blue button' style='font-family: Nunito, quicksandregular; margin-top: 10px;' onclick=\"processAddBill('"+res.Id+"','"+m.modal+"','"+category+"','"+room+"')\">Add bill</button> " +
					"</div> " +
					"</div>");
			}});
		}
	}
	function processAddBill(e, modal, category, room)
	{
		let res = null;

		for(let i = 0; i < lodging.length; i++)
		{
			if(lodging[i].Id === e)
			{
				res = lodging[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid booking id selected");
		}
		else
		{
			let price = Number($("#pay-amount").val());
			let item = $("#item").val();
			let quantity = Number($("#quantity").val());

			if((price.toString().toLowerCase() === 'nan') || (price < 1))
			{
				errorButton({btn:"add-bill-btn", msg:"Invalid price"});
				return;
			}
			else if((quantity.toString().toLowerCase() === 'nan') || (quantity < 1))
			{
				errorButton({btn:"add-bill-btn", msg:"Invalid quantity"});
				return;
			}
			else if(item === "")
			{
				errorButton({btn:"add-bill-btn", msg:"Invalid item"});
				return;
			}

			if(item !== "")
			{
				let payment = buildAddBill(res, item, price,  quantity);

				for(let i = 0; i < lodging.length; i++)
				{
					if(lodging[i].Id === res.Id)
					{
						lodging[i].Bills += (price * quantity);
					}
				}

				if(payment != null)
				{
					addItemToQue(payment);

					reBuildLodgeRow(res.Id, category, room);

					if(print === true)
					{
						printReceipt(payment);
					}

					$("#add-bill-btn").html("<i class='check icon'></i> bill added");
					$("#add-bill-btn").prop("disabled", true);
					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
		}
	}
	function buildAddBill(res, item, price, qty)
	{
		let bill = {};

		bill.items = [];

		bill.total = Number(price * qty);
		bill.discount = 0;
		bill.operation = "add bill";
		bill.fromReserve = true;
		bill.amount = Number(price * qty);
		bill.booking = res.Id;
		bill.taxes = 0.0;

		bill.transId = res.Bookingnumber == "" ? res.Bookingnumber : Date.now();
		bill.time = (Date.now() / 1000);

		bill.printItems = [];

		let cc = res.Rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let tx = 0.00;
			bill.printItems.push({item:item,qty:qty,price:price});
		}
		bill.posuser = $("#pos-user").val();

		bill.paidAmount = 0;
		bill.isWeborder = false;
		bill.price = price;
		bill.qty = qty;
		bill.item = item;
		bill.method = "";
		
		return bill;
	}
	function checkOutLodging(e, category, room)
	{
		let res = null;

		for(let i = 0; i < lodging.length; i++)
		{
			if(lodging[i].Id === e)
			{
				res = lodging[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid booking id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class='w3-row'>" +

					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
					"<i class='blue la la-calendar-check-o la-2x' style='vertical-align: middle;'></i>" +
					"<span style='vertical-align: middle'> Check-out</span>" +
					"</h3>" +
					"</div> " +
					"<div class='w3-col l4 m4 s4 align-r'>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl; font-weight: bold;'>"+
					res.Bookingnumber+"</h5>" +
					"</div> " +

					"</div>" +
					"</div>" +

					"<hr style='margin: 0px; padding: 0px;'/>" +

					"<div id='reservation-con'>" +
					"<div class='pad-2'  style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
					"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.6em;'></i> "+
					res.Guest.Name+" "+res.Guest.Surname+"</h3>" +
					"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Guest.Email+"</h5>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Guest.Phone+"</h5>" +

					"</div>" +
					"<div class='w3-col l4 m4 s4'>" +
					"<h4 style='color: dimgray; font-weight: normal;'>Total: &#8358;"+numFormat(((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)).toFixed(2))+"</h4>" +
					"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Paid: &#8358;"+numFormat((Number(res.Paidamount)).toFixed(2))+"</h4>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"<hr/>" +

					"<div class='pad-2' id='checkout-room-list'></div><hr style='margin: 0; padding: 0;'/>" +

					"<div class='pad-2 w3-row'>" +
					"<div class='w3-col l6 m6 s12'>" +
					"<h6 style='font-family: Nunito, quicksandregular;'>Subtotal: &#8358;"+numFormat((Number(res.Total) - Number(res.Discount)).toFixed(2))+"</h6>" +
					"<h6 style='font-family: Nunito, quicksandregular;'>Other bills: &#8358;"+numFormat(Number(res.Bills).toFixed(2))+"</h6>" +
					"</div>" +
					"<div class='w3-col l6 m6 s12'>" +
					"<h6 style='font-family: Nunito, quicksandregular;'>Total: &#8358;"+numFormat(((Number(res.Total) - Number(res.Discount)) + Number(res.Bills)).toFixed(2))+"</h6>" +
					"<h6 style='font-family: Nunito, quicksandregular;'>Paid: &#8358;"+numFormat(Number(res.Paidamount).toFixed(2))+"</h6>" +
					"</div>" +
					"</div>" +

					"<div class='pad-2'> " +
					"<br/>" +
					"<label><input id='print-receipt' type='checkbox'/><span>Print receipt</span></label>" +
					"<br/><br/>" +
					"<button id='res-checkin-btn' class='ui blue button' onclick=\"checkOutFromLodging('"+res.Id+"','"+m.modal+"','"+category+"','"+room+"')\">" +
					"<i class='calendar alternate outline icon'></i> Check out" +
					"</button> " +
					"</div>");


				let content = "";

				for(let i = 0; i < res.Rooms.length; i++)
				{
					if((res.Rooms[i].Category.Name === category) && (res.Rooms[i].Number === room))
					{
						content +=
							"<div class='w3-row'>" +
							"<div class='w3-col l6 m6 s12'>" +
							"<h6 style='font-family: Nunito, quicksandregular;'><b>Room:</b> "+res.Rooms[i].Category.Name+"</h6>" +
							"<span>"+res.Rooms[i].Number+"</span>" +
							"</div>" +
							"<div class='w3-col l6 m6 s12'>" +
							"<span style='font-family: Nunito, quicksandregular;'>"+res.Rooms[i].Checkout.WeekDay+", "+
							res.Rooms[i].Checkout.Day+" "+res.Rooms[i].Checkout.MonthName+" "+res.Checkout.Year+"</span>" +
							"</div>" +
							"</div>";
					}
				}
				document.getElementById("checkout-room-list").innerHTML = content;

			}});
		}
	}
	function checkOutFromLodging(e, modal, category, room)
	{
		let v = document.getElementsByClassName("res-checkin-select");

		let values = [];
		let cat = [];

		for(let i = 0; i < v.length; i++)
		{
			values.push($(v[i]).dropdown('get value'));
		}

		let proceed = true;

		let deposit = Number($("#reserve-checkin-amount").val());
		let print = $("#print-receipt").prop("checked");
		let method = "";
		let paid = 0.0;

		if((deposit > 0) || (deposit.toString().toLowerCase() !== "nan"))
		{
			paid = deposit;

			if((getElement("cash_payment") != null) && (getElement("cash_payment").checked))
			{
				method = "cash";
			}
			else if((getElement("pos_payment") != null) && (getElement("pos_payment").checked))
			{
				method = "pos";
			}
			else if((getElement("transfer_payment") != null) && (getElement("transfer_payment").checked))
			{
				method = "transfer";
			}
			else if((getElement("others_payment") != null) && (getElement("others_payment").checked))
			{
				method = "others";
			}
			else
			{
				errorButton({btn:"res-checkin-btn", msg:"Select payment method"});
				return;
			}
		}

		for(let i = 0; i < values.length; i++)
		{
			if(values[i] === "")
			{
				errorButton({btn:"res-checkin-btn", msg:"incomplete room selection"});
				return;
			}
			if(countOccurance(values, values[i]) > 1)
			{
				errorButton({btn:"res-checkin-btn", msg:"room "+values[i]+" is selected more than once"});
				return;
			}
		}

		if(proceed === true)
		{
			let res = null;

			for(let i = 0; i < lodging.length; i++)
			{
				if(lodging[i].Id === e)
				{
					res = lodging[i];
				}
			}

			if(res != null)
			{
				let booking = buildCheckOutFromLodging(res, category, room, paid, method);

				if(booking != null)
				{
					addItemToQue(booking);

					if(print)
					{
						printReceipt(booking);
					}


					$("#res-checkin-btn").html("<i class='check icon'></i> Checked out");
					$("#res-checkin-btn").prop("disabled", true);

					for(let i = 0; i < lodging.length; i++)
					{
						for(let h = 0; h < lodging[i].Rooms.length; h++)
						{
							if((lodging[i].Rooms[h].Category.Name === category) && (lodging[i].Rooms[h].Number === room))
							{
								lodging[i].Rooms[h].Checkedout = true;
							}
						}
					}

					if($("#checkin-tab").hasClass("active"))
					{
						let n = new Date();
						let t = ((picker2 == null) ? new Date(n.getFullYear(), n.getMonth(), n.getDate()) : new Date(picker2.getDate()));
						drawCalendar(t);
					}
					if($("#checkout-tab").hasClass("active"))
					{
						reBuildLodgeRow(res.Id, category, room);
					}

					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
			else
			{
				ShowModal("Invalid booking selected");
			}
		}
	}
	function buildCheckOutFromLodging(res, category, room, paid, method)
	{
		let booking = {};

		booking.items = [];

		booking.total = Number(res.Total);
		booking.taxes = 0;
		booking.discount = Number(res.Discount);
		booking.operation = "checkout";
		booking.fromReserve = res.Bookingnumber === "" ? false : true;
		booking.booking = res.Id;
		booking.category = category;
		booking.room = room;

		booking.transId = res.Id;
		booking.time = (Date.now() / 1000);

		booking.printItems = [];

		booking.coupons = [];
		booking.store = {guest:res.Customer, rooms:[]};

		for(let i = 0; i < res.Rooms.length; i++)
		{
			let tx = 0.00;
			booking.printItems.push({item:res.Rooms[i].Category.Name,qty:Number(res.Rooms[i].Number),price:Number(res.Total)});
		}

		booking.discounts = [];
		booking.posuser = $("#pos-user").val();
		booking.paidAmount = Number(res.Paidamount);

		return booking;
	}

	function changeRoom(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
					$("#modal_"+m.modal+"-inner").html(
						"<div class='pad-2'>" +
						"<div class='w3-row'>" +

						"<div class='w3-col l8 m8 s8'>" +
						"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
						"<i class='blue la la-calendar-check-o la-2x' style='vertical-align: middle;'></i>" +
						"<span style='vertical-align: middle'> Check-in with reservation</span>" +
						"</h3>" +
						"</div> " +
						"<div class='w3-col l4 m4 s4 align-r'>" +
						"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl; font-weight: bold;'>"+
						res.Bookingnumber+"</h5>" +
						"</div> " +

						"</div>" +
						"</div>" +

						"<hr style='margin: 0px; padding: 0px;'/>" +

						"<div id='reservation-con'>" +
						"<div class='pad-2'  style='padding-top: 10px; padding-bottom: 10px;'>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l8 m8 s8'>" +
						"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
						"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.6em;'></i> "+
						res.Customer.Name+" "+res.Customer.Surname+"</h3>" +
						"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Customer.Email+"</h5>" +
						"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Customer.Phone+"</h5>" +

						"</div>" +
						"<div class='w3-col l4 m4 s4'>" +
						"<h4 style='color: dimgray; font-weight: normal;'>Total: &#8358;"+numFormat((Number(res.Total) - Number(res.Discount)).toFixed(2))+"</h4>" +
						"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Paid: &#8358;"+numFormat((Number(res.Paidamount)).toFixed(2))+"</h4>" +
						"</div>" +
						"</div>" +
						"</div>" +
						"<hr/>" +

						"<div class='pad-2' id='checkin-room-list'></div><hr style='margin: 0; padding: 0;'/>" +

						"<div class='pad-2' id='checkin-control-con'>" +
						"<label>Accept deposit</label>" +
						"<div class='ui fluid labeled input'>" +
						"<label class='ui label'>&#8358;</label>" +
						"<input id='reserve-checkin-amount' class='wix-textbox' value='"+
						((((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) > 0) ?
							((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) : 0) +"' placeholder='Amount'/>" +
						"</div>" +
						"<div style='margin-top: 10px;'> " +
						"<div>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<label><input id='cash_payment' name='pay-method' class='with-gap' type='radio' /><span>Cash</span></label>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6'></div> " +
						"<label><input id='pos_payment' name='pay-method' class='with-gap' type='radio' /><span>POS (credit / debit card)</span></label>" +
						"</div>" +
						"<div class='w3-row' style='margin-top: 15px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<label><input id='transfer_payment' name='pay-method' class='with-gap' type='radio' /><span>Transfer / deposit</span></label>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6'></div> " +
						"<label><input id='others_payment' name='pay-method' class='with-gap' type='radio' /><span>Others</span></label>" +
						"</div>" +
						"</div> " +
						"<hr/>" +
						"<label><input id='print-receipt' type='checkbox'/><span>Print receipt</span></label>" +
						"</div><br/>" +
						"<button id='res-checkin-btn' class='ui blue button' onclick=\"checkInFromReservation('"+res.Id+"','"+m.modal+"')\">" +
						"<i class='calendar alternate outline icon'></i> Check in" +
						"</button> " +
						"</div>");


					let rooms = "";

					for(let i = 0; i < res.Rooms.length; i++)
					{
						for(let j = 0; j < Number(res.Rooms[i].Number); j++)
						{
							initVCalendar();
							let vacant = listVacantRoom(res.Rooms[i].Room.Name, wxDateToTime(res.Checkindate), wxDateToTime(res.Checkoutdate));

							let options = "<option value=''>Select room</option>";
							for(let y = 0; y < vacant.length; y++)
							{
								options += "<option value='"+vacant[y]+"'>"+vacant[y]+"</option>"
							}

							rooms +=
								"<div>" +
								"<span style='margin: 0px; margin-bottom: 5px; padding: 0; font-family: Nunito, quicksandregular;'>"+
								res.Rooms[i].Room.Name+" <span style='color: lightgray;'>(select room)</span> "+
								res.Checkindate.WeekDay+", "+res.Checkindate.Day+"/"+res.Checkindate.MonthName+"/"+res.Checkindate.Year+" - " +
								res.Checkoutdate.WeekDay+", "+res.Checkoutdate.Day+"/"+res.Checkoutdate.MonthName+"/"+res.Checkoutdate.Year+"</span>" +
								"<select chckin-room='"+res.Rooms[i].Room.Name+"' class='ui res-checkin-select wix-textbox fluid mini dropdown' >"+options+"</select>" +
								"</div><br/>";
						}
					}
					document.getElementById("checkin-room-list").innerHTML = rooms;

					$(".res-checkin-select").dropdown();

				}});
		}
	}
	function doChangeRoom(e, modal)
	{
		let v = document.getElementsByClassName("res-checkin-select");

		let values = [];
		let cat = [];

		for(let i = 0; i < v.length; i++)
		{
			values.push($(v[i]).dropdown('get value'));
		}

		let proceed = true;

		let deposit = Number($("#reserve-checkin-amount").val());
		let print = $("#print-receipt").prop("checked");
		let method = "";
		let paid = 0.0;

		if((deposit > 0) || (deposit.toString().toLowerCase() !== "nan"))
		{
			paid = deposit;

			if((getElement("cash_payment") != null) && (getElement("cash_payment").checked))
			{
				method = "cash";
			}
			else if((getElement("pos_payment") != null) && (getElement("pos_payment").checked))
			{
				method = "pos";
			}
			else if((getElement("transfer_payment") != null) && (getElement("transfer_payment").checked))
			{
				method = "transfer";
			}
			else if((getElement("others_payment") != null) && (getElement("others_payment").checked))
			{
				method = "others";
			}
			else
			{
				errorButton({btn:"res-checkin-btn", msg:"Select payment method"});
				return;
			}
		}

		for(let i = 0; i < values.length; i++)
		{
			if(values[i] === "")
			{
				errorButton({btn:"res-checkin-btn", msg:"incomplete room selection"});
				return;
			}
			if(countOccurance(values, values[i]) > 1)
			{
				errorButton({btn:"res-checkin-btn", msg:"room "+values[i]+" is selected more than once"});
				return;
			}
		}

		if(proceed === true)
		{
			let res = null;

			for(let i = 0; i < reservations.length; i++)
			{
				if(reservations[i].Id === e)
				{
					res = reservations[i];
				}
			}

			let roomList = [];

			let pl = 0;
			for(let i = 0; i < res.Rooms.length; i++)
			{
				for(let j = 0; j < res.Rooms[i].Number; j++)
				{
					roomList.push({name:res.Rooms[i].Room.Name, number:values[pl], price:Number(res.Rooms[i].Room.Price)});
					pl++;
				}
			}

			console.log(roomList);

			if(res != null)
			{
				let booking = buildCheckinFromReserve(res, roomList, paid, method);

				console.log(booking);

				if(booking != null)
				{
					addItemToQue(booking, roomList);

					if(print)
					{
						printReceipt(booking);
					}
					addToCalendar(booking, 'lodging', true);

					$("#res-checkin-btn").html("<i class='check icon'></i> Checked in");
					$("#res-checkin-btn").prop("disabled", true);

					for(let i = 0; i < reservations.length; i++)
					{
						if(reservations[i].Id === res.Id)
						{
							reservations.splice(i, 1);
						}
					}

					if(getElement(res.Id+"-row") != null)
					{
						$("#"+res.Id+"-row").transition('fade up out', function(){
							getElement(res.Id+"-row").parentNode.removeChild(getElement(res.Id+"-row"));
						});
					}

					if($("#checkin-tab").hasClass("active"))
					{
						let n = new Date();
						let t = ((picker2 == null) ? new Date(n.getFullYear(), n.getMonth(), n.getDate()) : new Date(picker2.getDate()));
						drawCalendar(t);
					}

					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
			else
			{
				ShowModal("Invalid reservation seleted");
			}
		}
	}
	function buildChangeRoom(e)
	{
		let noshow = {};

		noshow.items = [];
		noshow.operation = "cancel reservation";
		noshow.fromReserve = true;
		noshow.booking = e;
		noshow.transId = e;
		noshow.time = (Date.now() / 1000);
		noshow.posuser = $("#pos-user").val();

		return noshow;
	}

	function extendStay(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
					$("#modal_"+m.modal+"-inner").html(
						"<div class='pad-2'>" +
						"<div class='w3-row'>" +

						"<div class='w3-col l8 m8 s8'>" +
						"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
						"<i class='blue la la-calendar-check-o la-2x' style='vertical-align: middle;'></i>" +
						"<span style='vertical-align: middle'> Check-in with reservation</span>" +
						"</h3>" +
						"</div> " +
						"<div class='w3-col l4 m4 s4 align-r'>" +
						"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl; font-weight: bold;'>"+
						res.Bookingnumber+"</h5>" +
						"</div> " +

						"</div>" +
						"</div>" +

						"<hr style='margin: 0px; padding: 0px;'/>" +

						"<div id='reservation-con'>" +
						"<div class='pad-2'  style='padding-top: 10px; padding-bottom: 10px;'>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l8 m8 s8'>" +
						"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
						"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.6em;'></i> "+
						res.Customer.Name+" "+res.Customer.Surname+"</h3>" +
						"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Customer.Email+"</h5>" +
						"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Customer.Phone+"</h5>" +

						"</div>" +
						"<div class='w3-col l4 m4 s4'>" +
						"<h4 style='color: dimgray; font-weight: normal;'>Total: &#8358;"+numFormat((Number(res.Total) - Number(res.Discount)).toFixed(2))+"</h4>" +
						"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Paid: &#8358;"+numFormat((Number(res.Paidamount)).toFixed(2))+"</h4>" +
						"</div>" +
						"</div>" +
						"</div>" +
						"<hr/>" +

						"<div class='pad-2' id='checkin-room-list'></div><hr style='margin: 0; padding: 0;'/>" +

						"<div class='pad-2' id='checkin-control-con'>" +
						"<label>Accept deposit</label>" +
						"<div class='ui fluid labeled input'>" +
						"<label class='ui label'>&#8358;</label>" +
						"<input id='reserve-checkin-amount' class='wix-textbox' value='"+
						((((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) > 0) ?
							((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) : 0) +"' placeholder='Amount'/>" +
						"</div>" +
						"<div style='margin-top: 10px;'> " +
						"<div>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<label><input id='cash_payment' name='pay-method' class='with-gap' type='radio' /><span>Cash</span></label>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6'></div> " +
						"<label><input id='pos_payment' name='pay-method' class='with-gap' type='radio' /><span>POS (credit / debit card)</span></label>" +
						"</div>" +
						"<div class='w3-row' style='margin-top: 15px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<label><input id='transfer_payment' name='pay-method' class='with-gap' type='radio' /><span>Transfer / deposit</span></label>" +
						"</div> " +
						"<div class='w3-col l6 m6 s6'></div> " +
						"<label><input id='others_payment' name='pay-method' class='with-gap' type='radio' /><span>Others</span></label>" +
						"</div>" +
						"</div> " +
						"<hr/>" +
						"<label><input id='print-receipt' type='checkbox'/><span>Print receipt</span></label>" +
						"</div><br/>" +
						"<button id='res-checkin-btn' class='ui blue button' onclick=\"checkInFromReservation('"+res.Id+"','"+m.modal+"')\">" +
						"<i class='calendar alternate outline icon'></i> Check in" +
						"</button> " +
						"</div>");


					let rooms = "";

					for(let i = 0; i < res.Rooms.length; i++)
					{
						for(let j = 0; j < Number(res.Rooms[i].Number); j++)
						{
							initVCalendar();
							let vacant = listVacantRoom(res.Rooms[i].Room.Name, wxDateToTime(res.Checkindate), wxDateToTime(res.Checkoutdate));

							let options = "<option value=''>Select room</option>";
							for(let y = 0; y < vacant.length; y++)
							{
								options += "<option value='"+vacant[y]+"'>"+vacant[y]+"</option>"
							}

							rooms +=
								"<div>" +
								"<span style='margin: 0px; margin-bottom: 5px; padding: 0; font-family: Nunito, quicksandregular;'>"+
								res.Rooms[i].Room.Name+" <span style='color: lightgray;'>(select room)</span> "+
								res.Checkindate.WeekDay+", "+res.Checkindate.Day+"/"+res.Checkindate.MonthName+"/"+res.Checkindate.Year+" - " +
								res.Checkoutdate.WeekDay+", "+res.Checkoutdate.Day+"/"+res.Checkoutdate.MonthName+"/"+res.Checkoutdate.Year+"</span>" +
								"<select chckin-room='"+res.Rooms[i].Room.Name+"' class='ui res-checkin-select wix-textbox fluid mini dropdown' >"+options+"</select>" +
								"</div><br/>";
						}
					}
					document.getElementById("checkin-room-list").innerHTML = rooms;

					$(".res-checkin-select").dropdown();

				}});
		}
	}
	function doExtendStay(e, modal)
	{
		let v = document.getElementsByClassName("res-checkin-select");

		let values = [];
		let cat = [];

		for(let i = 0; i < v.length; i++)
		{
			values.push($(v[i]).dropdown('get value'));
		}

		let proceed = true;

		let deposit = Number($("#reserve-checkin-amount").val());
		let print = $("#print-receipt").prop("checked");
		let method = "";
		let paid = 0.0;

		if((deposit > 0) || (deposit.toString().toLowerCase() !== "nan"))
		{
			paid = deposit;

			if((getElement("cash_payment") != null) && (getElement("cash_payment").checked))
			{
				method = "cash";
			}
			else if((getElement("pos_payment") != null) && (getElement("pos_payment").checked))
			{
				method = "pos";
			}
			else if((getElement("transfer_payment") != null) && (getElement("transfer_payment").checked))
			{
				method = "transfer";
			}
			else if((getElement("others_payment") != null) && (getElement("others_payment").checked))
			{
				method = "others";
			}
			else
			{
				errorButton({btn:"res-checkin-btn", msg:"Select payment method"});
				return;
			}
		}

		for(let i = 0; i < values.length; i++)
		{
			if(values[i] === "")
			{
				errorButton({btn:"res-checkin-btn", msg:"incomplete room selection"});
				return;
			}
			if(countOccurance(values, values[i]) > 1)
			{
				errorButton({btn:"res-checkin-btn", msg:"room "+values[i]+" is selected more than once"});
				return;
			}
		}

		if(proceed === true)
		{
			let res = null;

			for(let i = 0; i < reservations.length; i++)
			{
				if(reservations[i].Id === e)
				{
					res = reservations[i];
				}
			}

			let roomList = [];

			let pl = 0;
			for(let i = 0; i < res.Rooms.length; i++)
			{
				for(let j = 0; j < res.Rooms[i].Number; j++)
				{
					roomList.push({name:res.Rooms[i].Room.Name, number:values[pl], price:Number(res.Rooms[i].Room.Price)});
					pl++;
				}
			}

			console.log(roomList);

			if(res != null)
			{
				let booking = buildCheckinFromReserve(res, roomList, paid, method);

				console.log(booking);

				if(booking != null)
				{
					addItemToQue(booking, roomList);

					if(print)
					{
						printReceipt(booking);
					}
					addToCalendar(booking, 'lodging', true);

					$("#res-checkin-btn").html("<i class='check icon'></i> Checked in");
					$("#res-checkin-btn").prop("disabled", true);

					for(let i = 0; i < reservations.length; i++)
					{
						if(reservations[i].Id === res.Id)
						{
							reservations.splice(i, 1);
						}
					}

					if(getElement(res.Id+"-row") != null)
					{
						$("#"+res.Id+"-row").transition('fade up out', function(){
							getElement(res.Id+"-row").parentNode.removeChild(getElement(res.Id+"-row"));
						});
					}

					if($("#checkin-tab").hasClass("active"))
					{
						let n = new Date();
						let t = ((picker2 == null) ? new Date(n.getFullYear(), n.getMonth(), n.getDate()) : new Date(picker2.getDate()));
						drawCalendar(t);
					}

					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
			else
			{
				ShowModal("Invalid reservation seleted");
			}
		}
	}
	function buildExtend(e)
	{
		let noshow = {};

		noshow.items = [];
		noshow.operation = "mark no-show";
		noshow.fromReserve = true;
		noshow.booking = e;
		noshow.transId = e;
		noshow.time = (Date.now() / 1000);
		noshow.posuser = $("#pos-user").val();

		return noshow;
	}




	function drawGuest()
	{
		$("#front-desk-main").html(
			"<div class='l-width-2 w3-col' id='small-calendar-con'>" +
			"<div class='pad-2' style='background-color: rgba(100,100,100,0.1);'>" +
			"<h3 class='sleak' style='color: dimgray;'>Guests Summary</h3>" +
			"</div>" +
			"<br/>" +
			"<div class='pad-1'>" +
			"<div>" +

			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/name_tag.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='customer-all-guest' style='font-family: Nunito; margin: 0; font-weight: normal; color: dimgray;'>0</h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>All guests</h5>" +
			"</div> " +
			"</div> " +


			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/building_2.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='customer-in-house-guest' style='font-family: Nunito; margin: 0; font-weight: normal; color: dimgray;'>0</h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>In house guests</h5>" +
			"</div> " +
			"</div> " +

			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/calendar_7.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='customer-today-guests' style='font-family: Nunito; font-weight: normal; margin: 0; color: dimgray;'>0</h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>Checked in today</h5>" +
			"</div> " +
			"</div> " +

			"</div>" +
			"</div>" +
			"</div>" +


			"<div class='l-width-8 w3-col pad-2' id='customers-main-con'>" +
			"<div id=''>" +


			"<div class='pad-1'>" +
			DrawSearch({method:"populateCustomers"}).outerHTML +
			"</div>" +

			DrawTable(["Profile pic", "Name", "Contact", "Gender", "Address", "Identification", "Action"],
				{
					Celled: true, Padded: true, GroupAction: [{ Text: "", Method: "ConfGroupOrderDelete" }]
				}).outerHTML +

			"</div>" +
			"</div>"
		);

		$(".ui.dropdown").dropdown();

		populateCustomers();
	}

	function drawReservation()
	{
		$("#front-desk-main").html(
			"<div class='l-width-2 w3-col' id='small-calendar-con'>" +
			"<div class='pad-2' style='background-color: rgba(100,100,100,0.1);'>" +
			"<h3 class='sleak' style='color: dimgray;'>Reservation Summary</h3>" +
			"</div>" +
			"<br/>" +
			"<div class='pad-1'>" +
			"<div>" +

			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/calendar_6.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='due-today-con' style='font-family: Nunito; font-weight: normal; margin: 0; color: dimgray;'>0</h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>Due today</h5>" +
			"</div> " +
			"</div> " +


			"<div class='w3-row'>" +
			"<div class='w3-col l4 m4 s4 pad-2'>" +
			"<h3 style='padding-top: 10px;'>" +
			"<img src='"+cdn+"images/calendar_5.png' style='width: 42px;'>" +
			"</h3>" +
			"</div> " +
			"<div class='w3-col l8 m8 s8 pad-3 align-r'>" +
			"<h2 id='no-show-con' style='font-family: Nunito; font-weight: normal; margin: 0; color: dimgray;'>0</h2>" +
			"<h5 style='margin: 0; font-family: Nunito; color: dimgray;'>No Show</h5>" +
			"</div> " +
			"</div> " +



			"</div>" +
			"</div>" +
			"</div>" +


			"<div class='l-width-8 w3-col pad-2' id='large-calendar-con'>" +
			"<div id=''>" +


			"<div class='ui pointing menu'>" +
			"  <a id='all-reservations' class='active item reserve-tab' onclick='switchReserveTab(this)' style='font-family: Nunito;'>" +
			"     <i class='circle dot blue outline icon'></i>  All" +
			"  </a>" +
			"  <a id='paid-reservations' class='item reserve-tab' onclick='switchReserveTab(this)' style='font-family: Nunito;'>" +
			"     <i class='green check circle icon'></i> Paid" +
			"  </a>" +
			"  <a id='unpaid-reservations' class='item reserve-tab' onclick='switchReserveTab(this)' style='font-family: Nunito;'>" +
			"     <i class='red times circle icon'></i> Unpaid" +
			"  </a>" +
			"  <a id='abandoned-reservations' class='item reserve-tab' onclick='switchReserveTab(this)' style='font-family: Nunito;'>" +
			"     <i class='red calendar alternate outline icon'></i> No Show" +
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
			"         onkeyup='if(event.keyCode == 13){populateReservationTable();}'/>" +
			"        <i class='search link icon'></i>" +
			"      </div>" +
			"    </div>" +
			"  </div>" +
			"</div>" +

			DrawTable(["Reservation Detail", "Total", "Payment", "Date", "Status", "Action"],
				{
					Celled: true, Padded: true, GroupAction: [{ Text: "Cancel reservations", Method: "ConfGroupOrderDelete" }]
				}).outerHTML +

			"</div>" +
			"</div>"
		);

		$(".ui.dropdown").dropdown();

		let picker3 = new Lightpick({
			field: document.getElementById('reservation-due-date'),
			singleDate: true,
			inline:false,
			format:"MM/DD/YY",
			numberOfColumns:1,
			numberOfMonths:1,
			onSelect: function(date){
				populateReservationTable();
			}
		});

		populateReservationTable();
	}

	function switchReserveTab(e)
	{
		$(".reserve-tab").removeClass("active");
		$(e).addClass("active");
		$("#reservation-due-date").val("");
		$("#search-txt").val("");
		populateReservationTable();
	}
	
	function switchDepartureTab(e)
	{
		$(".reserve-tab").removeClass("active");
		$(e).addClass("active");
		populateInHouseTable();
	}
	



	function selectRoom()
	{
		$("#check-in").addClass("disabled");
		$("#check-out").addClass("disabled");

		$("#check-in").prop("disabled", true);
		$("#check-out").prop("disabled", true);

		let rd = document.createElement("div");
		rd.style.position = "absolute";
		rd.id = "checkin-dialogue";
		rd.style.top = (getElement("dates-row").offsetTop + $("#dates-row").height())+"px";
		rd.style.width = "300px";
		rd.style.left = "20px";
		rd.id = "room-select-dialogue";
		rd.style.backgroundColor = "white";
		rd.className = "widget w3-card-2 curve";
		//rd.style.height = "300px";
		rd.style.zIndex = "1000";
		rd.style.display = "none";

		document.body.appendChild(rd);

		rd.innerHTML =
			"<div class='pad-2' style='position: relative;'>" +
			"<button class='ui circular small icon red button' " +
			"style='position: absolute; top: -15px; right: -15px;' onclick='closeRoomSelect()'>" +
			"<i class='times icon'></i></button>" +
			"<h3 class='sleak' style='margin: 0;'>Add a room</h3>" +
			"<br/>" +
			"<select id='room-cat-list' class='ui wix-select fluid dropdown' onchange='roomCatSelected()'>" +
			"<option value=''>select a category</option> " +
			"</select> " +
			"<br/>" +
			"<select id='room-name-list' class='ui wix-select fluid dropdown' onchange='roomSelected()'>" +
			"<option value=''>select a room</option> " +
			"</select> " +
			"<br/>" +
			"<button id='room-select-btn' class='ui sleak small disabled button' disabled onclick='proceedSelection()'>Proceed</button> " +
			"</div>";

		$(rd).transition('fade right in',function(){
			$("#room-cat-list").dropdown();
			$("#room-name-list").dropdown();

			for(let i = 0; i < roomsList.length; i++)
			{
				let op = document.createElement("option");
				op.innerHTML = roomsList[i].category;
				op.value = roomsList[i].category;

				getElement("room-cat-list").appendChild(op);
			}
		});
	}

	function roomCatSelected()
	{
		let v = $("#room-cat-list").dropdown('get value');

		let rooms = [];

		for(let i = 0; i < roomsList.length; i++)
		{
			if(v === roomsList[i].category)
			{
				rooms = roomsList[i].rooms;
				break;
			}
		}

		getElement("room-name-list").innerHTML = "<option value=''>select a room</option> ";
		for(let i = 0; i < rooms.length; i++)
		{
			let op = document.createElement("option");
			op.innerHTML = rooms[i];
			op.value = rooms[i];

			getElement("room-name-list").appendChild(op);
		}
		$("#room-name-list").dropdown('restore defaults');
		roomSelected();
	}

	function roomSelected()
	{
		let cat = $("#room-cat-list").dropdown('get value');
		let room = $("#room-name-list").dropdown('get value');

		if((cat != "") && (room != ""))
		{
			$("#room-select-btn").removeClass("disabled");
			$("#room-select-btn").prop("disabled", false);
			$("#room-select-btn").addClass("blue");
		}
		else
		{
			$("#room-select-btn").addClass("disabled");
			$("#room-select-btn").prop("disabled", true);
			$("#room-select-btn").removeClass("blue");
		}
	}
	
	function proceedSelection()
	{
		let obj = {category:$("#room-cat-list").dropdown('get value'),
			room:$("#room-name-list").dropdown('get value'),
			checkin:Number($("#check-in-stamp").val()),
			checkout:Number($("#check-out-stamp").val()),
			id:Date.now()};

		checkinList.push(obj);

		closeRoomSelect(function () {
			launchCheckinForm();
		});
	}
	
	function closeRoomSelect(func)
	{
		$("#room-select-dialogue").transition('fade right out',function(){

			document.body.removeChild(getElement("room-select-dialogue"));

			$("#check-in-stamp").val("0");
			$("#check-out-stamp").val("0");

			$("#check-in").removeClass("disabled");
			$("#check-out").removeClass("disabled");

			$("#check-in").prop("disabled", false);
			$("#check-out").prop("disabled", false);

			$("#check-in").val("");
			$("#check-out").val("");

			if(typeof (func) === "function")
			{
				func();
			}
		});
	}

	function launchCheckinForm()
	{
		let checkinForm = document.createElement("div");
		checkinForm.style.position = "fixed";
		checkinForm.id = "checkin-dialogue";
		checkinForm.style.top = "0";
		checkinForm.style.width = "100%";
		checkinForm.style.height = "100%";
		checkinForm.style.overflowY = "auto";
		checkinForm.style.zIndex = 200;
		checkinForm.style.backgroundColor = "rgba(0,0,0,0.4)";
		checkinForm.style.display = "none";

		checkinForm.innerHTML =
			"<div class='l-margin-t-6 m-margin-t-3 s-margin-1 margin-b-9'>" +
			"<div id='checkin-form-inner' class='l-width-4 m-width-8 s-width-xl widget' style='margin: auto; display: none;'>" +
			"<div class='w3-row pad-2' style='border-bottom: 1px solid lightgray;'>" +
			"<div class='w3-col l6 m6 s6'>" +
			"<button class='ui small sleak compact blue button' onclick='addRoom()'>Add room</button> " +
			"</div> " +
			"<div class='w3-col l6 m6 s6 align-r'>" +
			"<h3 style='display: inline-block;'>" +
			"<i class='red times icon' style='cursor: pointer' onclick='closeCheckinForm()'></i>" +
			"</h3>" +
			"</div> " +
			"</div>" +
			"<div id='checkin-form-container'>" +
			"<div id='checkin-main-page' style=''></div>" +
			"</div>" +
			"<div  style='border-top: 1px solid lightgray;'>" +
			"<div id='checkin-form-action-con'>" +
			"<div id='checkin-total-con'></div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>";

		document.body.appendChild(checkinForm);

		$(checkinForm).fadeIn(500, function () {
			$("#checkin-form-inner").transition('fade up in', function () {
				addSelectedRooms();
			});
		});
	}

	function addSelectedRooms()
	{
		if(checkinList.length > 0)
		{
			let total = 0;

			$("#checkin-main-page").html(
				"<div class='w3-row l-pad-2 m-pad-1' style='background-color: rgb(250,250,250);'>" +
				"<div class='w3-col l1 m2 s3'>" +
				"<h3 style='color: dimgray;'>" +
				"<i class='la la-bed la-2x green-text' style='vertical-align: middle;'></i>" +
				"</h3>" +
				"</div>" +
				"<div class='w3-col l11 m10 s9'>" +
				"<h3 style='color: dimgray; margin-top: 7px; font-family: varela_roundregular; font-weight: normal;'>" +
				"Selected room (s)" +
				"</h3>" +
				"</div>" +
				"</div>"
			);
			$("#checkin-total-con").html("");

			for(let i = 0; i < checkinList.length; i++)
			{
				let chin = new Date(Number(checkinList[i].checkin));
				let chout = new Date(Number(checkinList[i].checkout));

				let days = (((checkinList[i].checkout - checkinList[i].checkin) / 1000) / ((60 * 60) * 24));

				let price = 0;
				for(let j = 0; j < roomsList.length; j++)
				{
					if(checkinList[i].category === roomsList[j].category)
					{
						price = roomsList[j].price;
						checkinList[i].price = Number(price);
						checkinList[i].id = roomsList[j].Id;
						checkinList[i].days = days;
						break;
					}
				}

				total += (days * price);

				let d = document.createElement("div");
				d.innerHTML =
					"<div class=' l-pad-2 m-pad-1'>" +

					"<div class='w3-row'>" +
					"<div class='w3-col l9 m9 s9'>" +
					"<h5 class='sleak' style='color: gray;'>" +
					Bookingstrip.intToShortWeekDay(chin.getDay())+", " +chin.getDate()+"/"+chin.getFullYear()+" - " +
					Bookingstrip.intToShortWeekDay(chout.getDay())+", " +chout.getDate()+"/"+chout.getFullYear() +
					"</h5>" +
					"</div> " +
					"<div class='w3-col l3 m3 s3'>" +
					days+" night(s)" +
					"</div> " +
					"</div> " +
					"<div class='w3-row'>" +
					"<div class='w3-col l9 m9 s8'>" +
					"<div>" +
					"<h3 class='sleak' style='color: dimgray; margin: 0; margin-top: 5px;'>"+
					checkinList[i].category+" <small>("+checkinList[i].room+")</small>" +
					"</h3>" +
					"<h4 style='font-family: Lato; margin: 0; margin-top: 5px; display: inline-block; " +
					"cursor: pointer;' onclick=\"removeBooking('"+checkinList[i].id+"')\">" +
					"<i class='trash red icon' style='cursor: pointer;'></i>" +
					"<small style='color: silver'>remove</small> " +
					"</h4> " +
					"</div>" +
					"</div> " +
					"<div class='w3-col l3 m3 s4 pad-1'>" +
					"<h6 class='sleak' style='margin: 0;'><small>" +
					"<span style='font-family: Lato;'>&#8358;</span>"+numFormat(Number(price).toFixed(2))+" / night</small></h6>" +
					"<h4 style='margin: 0; margin-top: 5px;'>" +
					"<span style='font-family: Lato;'>&#8358;</span>"+numFormat((Number(price) * days).toFixed(2))+
					"</h4>" +
					"</div> " +
					"</div> " +
					"</div>";
				getElement("checkin-main-page").appendChild(d);
			}

			let t = document.createElement("div");
			t.className = "pad-2";
			t.innerHTML =
				"<div class='w3-row'>" +
				"<div class='w3-col l9 m9 s9'>" +
				"<button class='ui sleak blue button' onclick=\"moveFormTo('guest-info')\">Next</button>" +
				"</div> " +
				"<div class='w3-col l3 m3 s3'>" +
				"<h3 style='margin: 0; margin-top: 5px;'>" +
				"<span style='font-family: Lato;'>&#8358;</span>"+numFormat((Number(total)).toFixed(2))+
				"</h3>" +
				"</div> " +
				"</div>";

			getElement("checkin-total-con").appendChild(t);

			checkin.total = total;
			checkin.rooms = checkinList;
		}
		else
		{
			if(getElement("checkin-form-inner") != null)
			{
				closeCheckinForm();
			}
		}
	}

	function addGuestInfo()
	{
		if(checkinList.length > 0)
		{
			$("#guest-info-page").html("");
			$("#action-btn-page").html("");


			let d = document.createElement("div");
			d.innerHTML =
				"<div>" +

				"<div class='w3-row l-pad-2 m-pad-1' style='background-color: rgb(250,250,250);'>" +
				"<div class='w3-col l1 m2 s3'>" +
				"<h3 style='color: dimgray;'>" +
				"<i class='la la-user green-text la-2x' style='vertical-align: middle;'></i>" +
				"</h3>" +
				"</div>" +
				"<div class='w3-col l11 210 s9'>" +
				"<h3 style='color: dimgray; margin-top: 7px; font-family: varela_roundregular; font-weight: normal;'>" +
				"Guest info" +
				"</h3>" +
				"</div>" +
				"</div>" +

				"<div class='l-pad-2 m-pad-1'>" +
				"<div class='w3-row'>" +
				"<div class='w3-col l6 m6 s12'>" +
				"<div class='l-width-xl'>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='user circel icon'></i> " +
				"<input id='guest-name' class='wix-textbox' value='"+(checkin.guest.name != null ? checkin.guest.name : '')+"' placeholder='Name' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"<div class='w3-col l6 m6 s12'>" +
				"<div class=''>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='icon'></i>" +
				"<input id='guest-surname' class='wix-textbox' value='"+(checkin.guest.surname != null ? checkin.guest.surname : '')+"' placeholder='Surname' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"</div> " +

				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l4 m4 s12'>" +
				"<div class='l-width-xl'>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='mobile icon'></i> " +
				"<input id='guest-phone' class='wix-textbox'  value='"+(checkin.guest.phone != null ? checkin.guest.phone : '')+"' placeholder='Phone' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"<div class='w3-col l8 m8 s12'>" +
				"<div class=''>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='at icon'></i>" +
				"<input id='guest-email' class='wix-textbox' value='"+(checkin.guest.email != null ? checkin.guest.email : '')+"' placeholder='Email' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"</div> " +

				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l6 m6 s6' style='padding-top: 10px;'>" +
				"<div class='w3-row'>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<label class='user circel icon'> " +
				"<input id='male' class='with-gap' name='gender' type='radio' "+(checkin.guest.sex != null ? (checkin.guest.sex != "female" ? 'checked' : '') : 'checked')+"/>" +
				"<span>Male</span>" +
				"</label>" +
				"</div>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<label class='user circle icon'> " +
				"<input id='' class='with-gap' name='gender' type='radio' "+(checkin.guest.sex != null ? (checkin.guest.sex == "female" ? 'checked' : '') : '')+"/>" +
				"<span>Female</span>" +
				"</label>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"<div class='w3-col l6 m6 s6'>" +
				"<div class=''>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='calendar alternate icon'></i>" +
				"<input id='dob' class='wix-textbox' value='"+(checkin.guest.dob != null ? checkin.guest.dob : '')+"' placeholder='Date of birth' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"</div> " +

				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l4 m4 s12'>" +
				"<div class='l-width-xl'>" +
				countryDropdown() +
				"</div>" +
				"</div> " +
				"<div class='w3-col l4 m4 s12'>" +
				"<div class='l-width-xl'>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='map marker icon'></i>" +
				"<input id='guest-state' value='"+(checkin.guest.state != null ? checkin.guest.state : '')+"' class='wix-textbox' placeholder='State' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"<div class='w3-col l4 m4 s12'>" +
				"<div class=''>" +
				"<div class='ui fluid left icon input'>" +
				"<i class='map icon'></i>" +
				"<input id='guest-city' value='"+(checkin.guest.city != null ? checkin.guest.city : '')+"' class='wix-textbox' placeholder='City' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +
				"</div> " +



				"<div class='ui fluid form' style='margin-top: 10px;'>" +
				"<textarea id='guest-address' class='wix-textbox' rows='3' placeholder='Address'>"+(checkin.guest.address != null ? checkin.guest.address : '')+"</textarea>" +
				"</div>" +

				"<hr/>" +

				"<div>" +
				"<div class='w3-row'>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<div class='l-width-l'> " +
				"<div class='ui fluid labeled input'>" +
				"<label class='ui label' style='font-family: Nunito, quicksandregular, serif;'>Adults</label>" +
				"<input id='adult-count' type='number' min='1' value='1'/> " +
				"</div> " +
				"</div> " +
				"</div> " +
				"<div class='w3-col l6 m6 s6'>" +
				"<div class='ui fluid labeled input'>" +
				"<label class='ui label' style='font-family: Nunito, quicksandregular, serif;'>Children</label>" +
				"<input id='children-count' type='number' value='0'/> " +
				"</div> " +
				"</div> " +
				"</div>" +

				"</div>" +
				"</div>";
			getElement("guest-info-page").appendChild(d);

			$("#country").dropdown('set selected', (checkin.guest.country != null ? checkin.guest.country : ''));


			let t = document.createElement("div");
			t.className = "pad-2";
			t.innerHTML =
				"<div class=''>" +
				"<div class=''>" +
				"<button class='ui sleak button' onclick=\"moveFormTo('rooms')\">Back</button>" +
				"<button id='billing-btn' class='ui sleak blue button' onclick=\"moveFormTo('billing', true)\">Next</button>" +
				"</div> " +
				"</div>";

				getElement("action-btn-page").appendChild(t);

			$("#country").dropdown();

			var dob = new Lightpick({
				field: document.getElementById('dob'),
				singleDate: true,
				inline:false,
				format:"MM/DD/YY",
				numberOfColumns:1,
				numberOfMonths:1,
				onSelect: function(date){
					
				}
			});
		}
		else
		{
			if(getElement("checkin-form-inner") != null)
			{
				closeCheckinForm();
			}
		}
	}

	function addBillingInfo()
	{
		if(checkinList.length > 0)
		{
			$("#guest-info-page").html("");
			$("#action-btn-page").html("");


			let d = document.createElement("div");
			d.innerHTML =
				"<div>" +

				"<div class='w3-row l-pad-2 m-pad-1' style='background-color: rgb(250,250,250);'>" +
				"<div class='w3-col l1 m2 s3'>" +
				"<h3 style='color: dimgray;'>" +
				"<i class='la la-shopping-cart green-text la-2x' style='vertical-align: middle;'></i>" +
				"</h3>" +
				"</div>" +
				"<div class='w3-col l11 210 s9'>" +
				"<h3 style='color: dimgray; margin-top: 7px; font-family: varela_roundregular; font-weight: normal;'>" +
				"Billing" +
				"</h3>" +
				"</div>" +
				"</div>" +

				"<div class=''>" +

				"<div class='l-pad-2 m-pad-1'>" +

				"<div class=''>" +
				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l6 m6 s12'>" +
				"<div class='l-width-xl'>" +
				"<h4 class='sleak' style='color: dimgray;'>Subtotal</h4>" +
				"</div>" +
				"</div> " +
				"<div class='w3-col l6 m6 s12'>" +
				"<h4 class='sleak' style='color: dimgray;'>" +
				"<span style='font-family: Lato;'>&#8358;</span>" +
				"<span id='subtotal_con'> "+
				numFormat(Number(checkin.total).toFixed(2))+
				"</span>" +
				"</h4>" +
				"</div> " +
				"</div>" +
				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l6 m6 s12'>" +
				"<div class='l-width-xl'>" +
				"<h4 class='sleak' style='color: dimgray;'>Discount</h4>" +
				"</div>" +
				"</div> " +
				"<div class='w3-col l6 m6 s12'>" +
				"<h4 class='sleak' style='color: dimgray;'>" +
				"<span style='font-family: Lato;'>&#8358;</span>" +
				"<span id='discount_con'> "+
				numFormat(Number(0).toFixed(2))+
				"</span>" +
				"</h4>" +
				"</div> " +
				"</div>" +
                "<div class='w3-row' style='margin-top: 10px;'>" +
                "<div class='w3-col l6 m12 s6'>" +
                "<div class='l-width-xl'>" +
                "<h3 class='sleak'>Total</h3>" +
                "</div>" +
                "</div> " +
                "<div class='w3-col l6 m6 s12'>" +
                "<h3 class='sleak'>" +
                "<span style='font-family: Lato;'>&#8358;</span> " +
				"<span id='total_con'>"+
                numFormat(Number(checkin.total).toFixed(2))+
                "</span>" +
				"</h3>" +
                "</div> " +
                "</div> " +
				"</div>" +


				"<div style='margin-top: 50px;'>" +
				"<div class='' style='margin: auto;'>" +
				"<h4 class='sleak'>Select payment method</h4>" +
				"<div class='w3-row'>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<label><input id='cash_pay' class='with-gap' name='pay-method' type='radio'/><span>Cash</span></label>" +
				"</div>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<label><input id='pos_pay' class='with-gap' name='pay-method' type='radio' /><span>Card (POS)</span></label>" +
				"</div>" +
				"</div>" +
				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<label><input id='transfer_pay' class='with-gap' name='pay-method' type='radio' /><span>Transfer / deposit</span></label>" +
				"</div>" +
				"<div class='w3-col l6 m6 s6'>" +
				"<label><input id='others_pay' class='with-gap' name='pay-method' type='radio' /><span>Others</span></label>" +
				"</div>" +
				"</div>" +
				"</div>" +
				"<div>" +
				"" +
				"</div>" +
				"</div>" +

				"<div style='margin-top: 40px;'>" +
				"<div class='ui fluid labeled input'>" +
				"<label class='ui label'>Deposited: &nbsp;&nbsp;&#8358;</label> " +
				"<input id='deposit-amount' class='wix-textbox' value='"+(checkin.total)+"' placeholder='Payed amount' type='text'/>" +
				"</div>" +
				"</div>" +
				"</div> " +

				"<div class='l-pad-2 m-pad-1' style='background-color: rgb(250,250,250); border: 1px solid rgb(240,240,240);'> " +
				"<div class='w3-row' style='margin-top: 10px;'>" +
				"<div class='w3-col l9 m9 s9'>" +
				"<div class='ui fluid action input'>" +
				"<input id='coupon_txt' class='wix-textbox' type='text' placeholder='Coupon code'/>" +
				"<button id='coupon_btn' class='ui blue button' style='font-family: Nunito, quicksandregular, serif;' onclick='applyCoupon()'>Apply</button> " +
				"</div> " +
				"</div> " +
				"<div class='w3-col l3 m3 s3 align-r'>" +
				"<button class='ui button' style='font-family: Nunito, quicksandregular, serif;' onclick='openDiscounts()'>Discount</button> " +
				"</div> " +
				"</div>" +

				"<div id='discount-list-con' style='margin-top: 20px;'></div>" +

				"</div> " +

				"</div>" +
				"</div>";
			getElement("guest-info-page").appendChild(d);


			let t = document.createElement("div");
			t.className = "pad-2";
			t.innerHTML =
				"<div class='w3-row'>" +
				"<div class='w3-col l10 m10 s12'>" +
				((checkinDate <= Date.now()) ?
				"<button id='process-booking-btn' class='ui sleak blue button' onclick='processBooking()'>"+
				(pushed ? "print receipt" : "Check-in and print receipt")+"</button>" : "")+
				"<button id='reserve-booking-btn' class='ui sleak green button' onclick='reserveBooking()'>Reserve</button>" +
				"<button class='ui sleak button' onclick=\"moveFormTo('guest-info')\">Back</button>" +
				"</div> " +
				"<div class='w3-col l2 m2 s12 align-r'>" +
				"<button class='ui sleak basic button' onclick=\"launchsaveOrder()\">save</button>" +
				"</div> " +
				"</div>";

			getElement("action-btn-page").appendChild(t);

			for(let g = 0; g < coupons.length; g++)
			{
				let con = document.createElement("div");
				con.className = "w3-row";
				con.id = "coupon-"+coupons[g].Id;
				con.innerHTML = "<div class='w3-col l8 m8 s8 pad-t'>" +
					"<label class='sleak' style='font-weight: bold; color: dimgray;'>"+
					coupons[g].Title+"</label></div>" +
					"<div class='w3-col l2 m2 s2'>"+
					(coupons[g].Bypercentage ? coupons[g].Value+"%" : $("#currency-symbol").val()+
						numFormat(Number(coupons[g].Value).toFixed(2)))+"</div>" +
					"<div class='w3-col l2 m2 s2 align-r'>" +
					"<i class='red times icon' style='cursor: pointer;' " +
					"onclick=\"removeCoupon('"+coupons[g].Id+"')\"></i> " +
					"</div>";

				getElement("discount-list-con").appendChild(con);
			}
			for(let g = 0; g < addedDiscount.length; g++)
			{
				let con = document.createElement("div");
				con.className = "w3-row";
				con.id = "discount-"+addedDiscount[g].Id;
				con.innerHTML = "<div class='w3-col l8 m8 s8 pad-t'>" +
					"<label class='sleak' style='font-weight: bold; color: dimgray;'>"+
					addedDiscount[g].Name+"</label></div>" +
					"<div class='w3-col l2 m2 s2'>"+
					(addedDiscount[g].Bypercentage ? addedDiscount[g].Value+"%" : $("#currency-symbol").val()+
						numFormat(Number(addedDiscount[g].Value).toFixed(2)))+"</div>" +
					"<div class='w3-col l2 m2 s2 align-r'>" +
					"<i class='red times icon' style='cursor: pointer;' " +
					"onclick=\"removeDiscount('"+addedDiscount[g].Id+"')\"></i> " +
					"</div>";

				getElement("discount-list-con").appendChild(con);
			}

			calculate();
		}
		else
		{
			if(getElement("checkin-form-inner") != null)
			{
				closeCheckinForm();
			}
		}
	}

	function completeCheckinData()
	{
		checkin.deposit = Number($("#deposit-amount").val());
		checkin.payMethod = "cash";

		if($("#card-pay").prop("checked"))
		{
			checkin.payMethod = "card";
		}
		if($("#online-pay").prop("checked"))
		{
			checkin.payMethod = "online";
		}
		if($("#others-pay").prop("checked"))
		{
			checkin.payMethod = "others";
		}
	}

	function removeBooking(e)
	{
		if(!pushed)
		{
			for(let i = 0; i < checkinList.length; i++)
			{
				if(e.toString() === checkinList[i].id.toString())
				{
					checkinList.splice(i, 1);
				}
			}
			addSelectedRooms();
		}
		else
		{
			emptyTray();
			closeCheckinForm();
		}
	}

	function closeCheckinForm()
	{
		checkinList = [];
		checkin = {guest:{}, rooms:[], discounts:[], total:0.00};

		emptyTray();

		$("#checkin-form-inner").transition('fade up out', function () {
			$("#checkin-dialogue").fadeOut(500, function () {
				document.body.removeChild(getElement("checkin-dialogue"));
			});
		});
	}
	
	function addRoom()
	{
		if(pushed)
		{
			emptyTray();
		}

		$("#checkin-form-inner").transition('fade up out', function () {
			$("#checkin-dialogue").fadeOut(500, function () {
				document.body.removeChild(getElement("checkin-dialogue"));
			});
		});
	}

	function moveFormTo(e, validate=false)
	{
		if(e === "rooms")
		{
			$("#checkin-form-action-con").transition('fade up out', function() {
				$("#checkin-form-container").transition('fade right out', function () {

					$("#checkin-form-container").html("<div id='checkin-main-page'></div>");
					$("#checkin-form-action-con").html("<div id='checkin-total-con'></div>");

					addSelectedRooms();
					$("#checkin-form-container").transition('fade left in', function(){
						$("#checkin-form-action-con").transition('fade up in');
					});
				});
			});
		}
		else if(e === "guest-info")
		{
            $("#checkin-form-action-con").transition('fade up out', function() {
                $("#checkin-form-container").transition('fade right out', function () {

                    $("#checkin-form-container").html("<div id='guest-info-page'></div>");
                    $("#checkin-form-action-con").html("<div id='action-btn-page'></div>");

                    addGuestInfo();
                    $("#checkin-form-container").transition('fade left in', function(){
                        $("#checkin-form-action-con").transition('fade up in');
                    });
                });
            });
		}
		else if(e === "billing")
		{
            if(validate === true)
            {
                if($("#guest-name").val() === "")
                {
                    errorButton({btn:"billing-btn", msg:"guest name is empty"});
                }
                else if($("#guest-surname").val() === "")
                {
                    errorButton({btn:"billing-btn", msg:"guest surname is empty"});
                }
                else if($("#guest-phone").val() === "")
                {
                    errorButton({btn:"billing-btn", msg:"phone number is empty"});
                }
                else
                {
                    checkin.guest = {};
                    checkin.guest.name = $("#guest-name").val();
                    checkin.guest.surname = $("#guest-surname").val();
                    checkin.guest.phone = $("#guest-phone").val();
                    checkin.guest.email = $("#guest-email").val();
                    checkin.guest.country = $("#country").dropdown('get value');
                    checkin.guest.state = $("#guest-state").val();
                    checkin.guest.city = $("#guest-city").val();
                    checkin.guest.address = $("#guest-address").val();
                    checkin.guest.sex = $("#male").prop("checked") ? "male" : "female";
                    checkin.guest.dob = $("#dob").val();
                    checkin.guest.adults = Number($("#adult-count").val());
                    checkin.guest.children = Number($("#children-count").val());


                    $("#checkin-form-container").transition('fade right out', function() {
                        $("#checkin-form-action-con").transition('fade up out', function () {

                            $("#checkin-form-container").html("<div id='guest-info-page'></div>");
                            $("#checkin-form-action-con").html("<div id='action-btn-page'></div>");

                            addBillingInfo();
                            $("#checkin-form-container").transition('fade left in', function(){
                                $("#checkin-form-action-con").transition('fade up in');
                            });
                        });
                    });
                }
            }
            else
            {
                $("#checkin-form-container").transition('fade right out', function() {
                    $("#checkin-form-action-con").transition('fade up out', function () {

                        $("#checkin-form-container").html("<div id='guest-info-page'></div>");
                        $("#checkin-form-action-con").html("<div id='action-btn-page'></div>");

                        addBillingInfo();
                        $("#checkin-form-container").transition('fade left in', function(){
                            $("#checkin-form-action-con").transition('fade up in');
                        });
                    });
                });
            }
		}
	}
	
	
	
	
	//---------------------------  populate tables ----------------------------------------------
	
	function populateReservation(page)
	{
		let start = page == null ? 0 : page;
		page = page == null ? 1 : page;

		let sn = start + 1;
		let perpage = 25;

		$("#table-body").html("");

		if($("#perpage").dropdown('get value') != "")
		{
			perpage = $("#perpage").dropdown('get value');
		}

		$("#pages").html(Paginate(Number(page), Number(reservations.length), Number(perpage), "populateReservation"));

		let filter = "all";

		if($("#paid-reservations").hasClass("active"))
		{
			filter = "paid";
		}
		if($("#unpaid-reservations").hasClass("active"))
		{
			filter = "unpaid";
		}
		if($("#abandoned-reservations").hasClass("active"))
		{
			filter = "abandoned";
		}


		let added = 0;

		for(let i = start; i < reservations.length; i++)
		{
			let paint = filter === "all";

			if(filter === "paid")
			{
				if(reservations[i].Paid)
				{
					paint = true;
				}
			}
			if(filter === "unpaid")
			{
				if(!reservations[i].Paid)
				{
					paint = true;
				}
			}
			if(filter === "abandoned")
			{
				if(reservations[i].Noshow)
				{
					paint = true;
				}
			}

			if(paint)
			{
				added++;

				let roomCount = 0;

				for(let h = 0; h < reservations[i].Rooms.length; h++)
				{
					roomCount += Number(reservations[i].Rooms[h].Number);
				}

				let row = document.createElement("tr");
				row.id = reservations[i].Id + "-row";
				row.setAttribute("row-num", sn);

				let td0 = document.createElement("td");
				td0.innerHTML = "<label><input id='"+reservations[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

				let td1 = document.createElement("td");
				td1.style.lineHeight = "170%";
				td1.innerHTML = "<span class='blue-text'>"+reservations[i].Customer.Name+" "+reservations[i].Customer.Surname+"</span><br/>"
					+ "<span>"+reservations[i].Bookingnumber+"</span><br/>"
					+"<span style='color: silver;'> Rooms:</span> " +(roomCount) + "&nbsp;&nbsp;&nbsp;&nbsp;" +
					"<span style='color: silver;'>adults:</span> "+(reservations[i].Adult)+ "&nbsp;&nbsp;&nbsp;&nbsp;" +
					"<span style='color: silver;'> children:</span> "+(reservations[i].Children)+"";


				let td2 = document.createElement("td");
				td2.style.lineHeight = "170%";
				td2.innerHTML = "<span style='color: silver;'>Total:</span> &#8358; "+
					numFormat(Number(reservations[i].Total).toFixed(2))+
					"<br/><span style='color: silver;'>Paid </span>&#8358; "+
					numFormat(Number(reservations[i].Paidamount).toFixed(2));



				let td3 = document.createElement("td");
				td3.style.lineHeight = "170%";
				td3.innerHTML = reservations[i].Paid ? "<span class='green-back status'>Paid</span>" : "<span class='red status'>Unpaid</span>";

				let td4 = document.createElement("td");
				td4.style.lineHeight = "170%";
				td4.innerHTML = "<span style='color: silver;'>Check in: </span>" +
					reservations[i].Checkindate.WeekDay+", "+reservations[i].Checkindate.Day+"/"+reservations[i].Checkindate.MonthName+"/"+reservations[i].Checkindate.Year+
					"<br/><span style='color: silver;'>Check out: </span>" +
					reservations[i].Checkoutdate.WeekDay+", "+reservations[i].Checkoutdate.Day+"/"+reservations[i].Checkoutdate.MonthName+"/"+reservations[i].Checkoutdate.Year;

				let td5 = document.createElement("td");
				td5.style.lineHeight = "170%";
				td5.innerHTML = ((reservations[i].Noshow) ? "<span class='status red-back'>No show</span>" : "<span class='status yellow-back'>Pending</span>");

				let td6 = document.createElement("td");

				if(reservations[i].Noshow)
				{
					td6.innerHTML = "<div class='pad-1'><button class='ui disabled icon button'><i class='cog red icon icon'></i></button></div>";
				}
				else
				{
					td6.innerHTML = "<div class='w3-container'> " +
						"<div id='" + reservations[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
						"<i class='blue wrench icon'></i>" +
						"<div class='menu'>" +
						"<div class='header'>Action</div>" +
						"<div class='item' onclick=\"showReservationDetails('" + reservations[i].Id + "')\"><i class='eye blue icon'></i>See details</div>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"acceptPayment('" + reservations[i].Id + "')\"><i class='money green icon'></i>Accept payment</div>" +
						"<div class='item' onclick=\"checkinReservation('" + reservations[i].Id + "')\"><i class='check green icon'></i>Check in</div>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"confirmMarkNoShow('" + reservations[i].Id + "')\"><i class='calendar red outline alternate times icon'></i>Mark no-show</div>" +
						"<div class='item' onclick=\"confirmCancelReservation('" + reservations[i].Id + "')\"><i class='trash red icon'></i>Cancel reservation</div>" +
						"</div>" +
						"</div></div>";
				}
				/*
				let td6 = document.createElement("td");
				td6.innerHTML = "<div class='w3-container'> " +
					"<div id='" + reservations[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
					"<i class='blue wrench icon'></i>" +
					"<div class='menu'>" +
					"<div class='header'>Action</div>" +
					"<div class='item' onclick=\"showReservationDetails('" + reservations[i].Id + "')\"><i class='eye blue icon'></i>See details</div>" +
					"<div class='ui divider'></div>" +
					"<div class='item' onclick=\"acceptPayment('" + reservations[i].Id + "')\"><i class='money green icon'></i>Accept payment</div>" +
					"<div class='item' onclick=\"checkinReservation('" + reservations[i].Id + "')\"><i class='check green icon'></i>Check in</div>" +
					"<div class='ui divider'></div>" +
					"<div class='item' onclick=\"confirmMarkNoShow('" + reservations[i].Id + "')\"><i class='calendar red outline alternate times icon'></i>Mark no-show</div>" +
					"<div class='item' onclick=\"confirmCancelReservation('" + reservations[i].Id + "')\"><i class='trash red icon'></i>Cancel reservation</div>" +
					"</div>" +
					"</div></div>";
					*/



				row.appendChild(td0);
				row.appendChild(td1);
				row.appendChild(td2);
				row.appendChild(td3);
				row.appendChild(td4);
				row.appendChild(td5);
				row.appendChild(td6);

				sn++;

				document.getElementById("table-body").appendChild(row);
			}
		}
		$(".c-menu").dropdown();

		if(added === 0)
		{
			document.getElementById("table-body").innerHTML =
				"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-list la-3x' style='color: silver;'></i> </h2>" +
				"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Empty list returned</h6></div></td></tr>";
		}
	}

	function showReservationDetails(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			let content = "";

				for(let i = 0; i < res.Rooms.length; i++)
				{
					let period = ((wxDateToTime(res.Checkoutdate) - wxDateToTime(res.Checkindate)) / (((60 * 60) * 24) * 1000));
					content +=
						"<div class='pad-2' style='padding-top: 10px; padding-bottom: 10px;'>" +

						"<div class='w3-row' style='margin-top: 10px;'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<h3 style='font-family: Nunito, segoe ui; margin: 0;'>"+res.Rooms[i].Room.Name+"</h3> " +
						"<h5 style='font-family: Nunito, segoe ui; margin: 0; margin-top: 5px;'>"+
						res.Rooms[i].Number+" <small>room (s)</small></h5> " +
						"</div> " +
						"<div class='w3-col l6 m6 s6'>" +
						"<span style='font-family: Nunito, segoe ui;'>" +
						"<span style='font-family: Lato;'> &#8358;</span>"+
						numFormat(Number(res.Rooms[i].Room.Price).toFixed(2))+" / <small>night</small></span> " +
						"<span style='font-family: Nunito, segoe ui;'><br/>" +
						"<span style='font-family: Lato;'>Total: &#8358;</span>"+
						numFormat(((Number(res.Rooms[i].Room.Price) * (res.Rooms[i].Number)) * period).toFixed(2))+"  <small><strong>("+period+")night(s)</strong></small></span> " +
						"</div> " +
						"</div> " +

						"</div>";
				}


			loadPageModal({size:"s",  onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class='w3-row'>" +

					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
					"<i class='blue la la-calendar la-2x' style='vertical-align: middle;'></i>" +
					"<span style='vertical-align: middle'> Reservation details</span>" +
					"</h3>" +
					"</div> " +
					"<div class='w3-col l4 m4 s4 align-r'>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl; font-weight: bold;'>"+
					res.Bookingnumber+"</h5>" +
					"</div> " +

					"</div>" +
					"</div>" +
					"<hr style='margin: 0px; padding: 0px;'/><br/>" +
					"<div id='reservation-con'>" +
					"<div class='pad-2'  style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
					"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.6em;'></i> "+
					res.Customer.Name+" "+res.Customer.Surname+"</h3>" +
					"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Customer.Email+"</h5>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Customer.Phone+"</h5>" +

					"</div>" +
					"<div class='w3-col l4 m4 s4'>" +
					"<h4 style='color: dimgray; font-weight: normal;'>Total: &#8358;"+numFormat(Number(res.Total).toFixed(2))+"</h4>" +
					"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Paid: &#8358;"+numFormat((Number(res.Paidamount)).toFixed(2))+"</h4>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"<hr/> " +
					"<div class='pad-2' style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span><i class='calendar outline alternate blue icon'></i> Check in</span>" +
					"<h6>"+res.Checkindate.WeekDay+", "+res.Checkindate.Day+"/"+res.Checkindate.MonthName+"/"+res.Checkindate.Year+"</h6>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'></div> " +
					"<span><i class='calendar outline alternate blue icon'></i> Check out</span>" +
					"<h6>"+res.Checkoutdate.WeekDay+", "+res.Checkoutdate.Day+"/"+res.Checkoutdate.MonthName+"/"+res.Checkoutdate.Year+"</h6>" +
					"</div> " +
					"</div> " +
					"<hr/> " +

					content +

					"<hr/>" +
					"<div class='pad-2' style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span><i class='user icon blue icon'></i> Adults <strong>("+res.Adult+")</strong></span>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span><i class='group blue icon'></i> Children <strong>("+res.Children+")</strong></span>" +
					"</div> " +
					"</div> " +
					"</div> " +
					"<hr/> " +

					"<div class='pad-2' style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class=''>" +
					"<h6 style='font-family: Nunito, segoe ui;'><i class='blue question icon'></i> Special request</h6>" +
					((res.Request != "") ?
					"<p>"+res.Request+"</p>" :
						"<br/><br/><h6 style='text-align: center; color: silver;'>No request</h6>") +
					"</div> " +
					"</div> " +

					"</div>");
			}});
		}
	}

	function acceptPayment(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class=''>" +
					"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
					"<i class='blue la la-money-bill la-2x' style='vertical-align: middle;'></i>" +
					"<span style='vertical-align: middle'> Accept payment</span>" +
					"</h3>" +
					"</div>" +
					"</div>" +
					"<hr style='margin: 0px; padding: 0px;'/><br/>" +
					"<div id='reservation-con'>" +
					"<div class='pad-2' id='checkin-control-con'>" +
					"<div>" +
					"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
					"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.5em;'></i>"+
					res.Customer.Name+" "+res.Customer.Surname+"</h3>" +
					"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Customer.Email+"</h5>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Customer.Phone+"</h5>" +
					"</div>" +
					"</div>" +
					"<hr/> " +
					"<div class='pad-2'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>Subtotal</span> " +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>" +
					"<span style='font-family: Lato;'> &#8358;</span>" +
					numFormat(Number(res.Total).toFixed(2))+"</span> " +
					"</div> " +
					"</div> " +
					"<div class='w3-row' style='margin-top: 10px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>Discount</span> " +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>" +
					"<span style='font-family: Lato;'> &#8358;</span>" +
					numFormat(Number(res.Discount).toFixed(2))+"</span> " +
					"</div> " +
					"</div> " +
					"<div class='w3-row' style='margin-top: 10px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>Total</span> " +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>" +
					"<span style='font-family: Lato;'> &#8358;</span>"+
					numFormat((Number(res.Total) - Number(res.Discount)).toFixed(2))+"</span> " +
					"</div> " +
					"</div> " +
					"<div class='w3-row' style='margin-top: 10px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>Paid</span> " +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>" +
					"<span style='font-family: Lato;'> &#8358;</span>"+
					numFormat(Number(res.Paidamount).toFixed(2))+"</span> " +
					"</div> " +
					"</div> " +
					"<div class='w3-row' style='margin-top: 10px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>Balance</span> " +
					"</div> " +
					"<div class='w3-col l6 m6 s6'>" +
					"<span style='font-family: Nunito, segoe ui;'>" +
					"<span style='font-family: Lato;'> &#8358;</span>"+
					numFormat((((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) < 0 ? 0 : ((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount)))).toFixed(2))+"</span> " +
					"</div> " +
					"</div> " +
					"</div>" +
					"<hr/>" +
					"<div class='pad-2'>" +
					"<div class='ui fluid labeled input'>" +
					"<label class='ui label' style='font-family: Nunito, quicksandregular;'>&#8358;</label>" +
					"<input id='pay-amount' class='wix-textbox' value='"+((((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) > 0) ? ((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) : 0)+"' placeholder='Amount'/>" +
					"</div>" +
					"<div>" +
					"<div class='w3-row' style='margin-top: 15px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<label><input id='cash_payment' name='pay-method' class='with-gap' type='radio' /><span>Cash</span></label>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'></div> " +
					"<label><input id='pos_payment' name='pay-method' class='with-gap' type='radio' /><span>POS (credit / debit card)</span></label>" +
					"</div>" +
					"<div class='w3-row' style='margin-top: 15px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<label><input id='transfer_payment' name='pay-method' class='with-gap' type='radio' /><span>Transfer / deposit</span></label>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'></div> " +
					"<label><input id='others_payment' name='pay-method' class='with-gap' type='radio' /><span>Others</span></label>" +
					"</div>" +
					"</div> " +
					"<hr/>" +
					"<label><input id='add-pay-print-receipt' class='filled-in' type='checkbox'/><span>Print receipt</span></label><br/><br/>" +
					"<button id='add-pay-btn' class='ui blue button' style='font-family: Nunito, quicksandregular; margin-top: 10px;' onclick=\"addPayment('"+res.Id+"','"+m.modal+"')\">Add payment</button> " +
					"</div> " +
					"</div>");
				}});
		}
	}
	function addPayment(e, modal)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			let amount = Number($("#pay-amount").val());
			let print = $("#add-pay-print-receipt").prop("checked");
			let method = "";

			if((amount <= 0) || (amount.toString().toLowerCase() === "nan"))
			{
				errorButton({btn:"add-pay-btn", msg:"Invalid amount"});
			}
			else if((getElement("cash_payment") != null) && (getElement("cash_payment").checked))
			{
				method = "cash";
			}
			else if((getElement("pos_payment") != null) && (getElement("pos_payment").checked))
			{
				method = "pos";
			}
			else if((getElement("transfer_payment") != null) && (getElement("transfer_payment").checked))
			{
				method = "transfer";
			}
			else if((getElement("others_payment") != null) && (getElement("others_payment").checked))
			{
				method = "others";
			}
			else
			{
				errorButton({btn:"add-pay-btn", msg:"Select payment method"});
			}

			if((method !== "") && ((amount > 0) && (amount.toString().toLowerCase() !== "nan")))
			{
				let payment = buildAddPayment(res, amount, method);

				for(let i = 0; i < reservations.length; i++)
				{
					if(reservations[i].Id === res.Id)
					{
						reservations[i].Paidamount = Number(reservations[i].Paidamount) + amount;
						reservations[i].Paid = true;
					}
				}

				if(payment != null)
				{
					addItemToQue(payment);

					reBuildReservationRow(res.Id);

					if(print === true)
					{
						printReceipt(payment);
					}

					$("#add-pay-btn").html("<i class='check icon'></i> payment added");
					$("#add-pay-btn").prop("disabled", true);
					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
		}
	}
	function buildAddPayment(res, amount, method)
	{
		let payment = {};

		payment.items = [];

		payment.total = Number(res.Total);
		payment.discount = Number(res.Discount);
		payment.operation = "add payment";
		payment.fromReserve = true;
		payment.amount = Number(amount);
		payment.booking = res.Id;
		payment.taxes = 0.0;

		payment.transId = res.Bookingnumber;
		payment.time = (Date.now() / 1000);

		payment.printItems = [];

		let cc = res.Rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let tx = 0.00;
			payment.printItems.push({item:cc[i].Room.Name,qty:cc[i].Number,price:Number(cc[i].Room.price)});
		}
		for(let i = 0; i < coupons.length; i++)
		{
			payment.coupons.push(coupons[i].Id);
		}
		payment.posuser = $("#pos-user").val();

		payment.paidAmount = Number(amount) + Number(res.Paidamount);
		payment.isWeborder = false;
		payment.method = method;


		return payment;
	}

	
	function checkinReservation(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			loadPageModal({size:"s",  onLoaded:function(m){
				$("#modal_"+m.modal+"-inner").html(
					"<div class='pad-2'>" +
					"<div class='w3-row'>" +

					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
					"<i class='blue la la-calendar-check-o la-2x' style='vertical-align: middle;'></i>" +
					"<span style='vertical-align: middle'> Check-in with reservation</span>" +
					"</h3>" +
					"</div> " +
					"<div class='w3-col l4 m4 s4 align-r'>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl; font-weight: bold;'>"+
					res.Bookingnumber+"</h5>" +
					"</div> " +

					"</div>" +
					"</div>" +

					"<hr style='margin: 0px; padding: 0px;'/>" +

					"<div id='reservation-con'>" +
					"<div class='pad-2'  style='padding-top: 10px; padding-bottom: 10px;'>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l8 m8 s8'>" +
					"<h3 style='font-family: Nunito, quicksandregular, serif; font-weight: normal; vertical-align: middle;'>" +
					"<i class='la la-user blue' style='vertical-align: middle; font-size: 1.6em;'></i> "+
					res.Customer.Name+" "+res.Customer.Surname+"</h3>" +
					"<h5 style='margin: 0; padding: 0; font-weight: normal; font-family: Nunito, quicksandregular;'>"+res.Customer.Email+"</h5>" +
					"<h5 style='margin: 0; margin-top: 10px; padding: 0; font-weight: normal; font-family: Nunito, quicksandregularl'>"+res.Customer.Phone+"</h5>" +

					"</div>" +
					"<div class='w3-col l4 m4 s4'>" +
					"<h4 style='color: dimgray; font-weight: normal;'>Total: &#8358;"+numFormat((Number(res.Total) - Number(res.Discount)).toFixed(2))+"</h4>" +
					"<h4 style='margin: 0; margin-top: 10px; color: dimgray; font-weight: normal;'>Paid: &#8358;"+numFormat((Number(res.Paidamount)).toFixed(2))+"</h4>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"<hr/>" +

					"<div class='pad-2' id='checkin-room-list'></div><hr style='margin: 0; padding: 0;'/>" +

					"<div class='pad-2' id='checkin-control-con'>" +
					"<label>Accept deposit</label>" +
					"<div class='ui fluid labeled input'>" +
					"<label class='ui label'>&#8358;</label>" +
					"<input id='reserve-checkin-amount' class='wix-textbox' value='"+
					((((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) > 0) ?
					((Number(res.Total) - Number(res.Discount)) - (Number(res.Paidamount))) : 0) +"' placeholder='Amount'/>" +
					"</div>" +
					"<div style='margin-top: 10px;'> " +
					"<div>" +
					"<div class='w3-row'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<label><input id='cash_payment' name='pay-method' class='with-gap' type='radio' /><span>Cash</span></label>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'></div> " +
					"<label><input id='pos_payment' name='pay-method' class='with-gap' type='radio' /><span>POS (credit / debit card)</span></label>" +
					"</div>" +
					"<div class='w3-row' style='margin-top: 15px;'>" +
					"<div class='w3-col l6 m6 s6'>" +
					"<label><input id='transfer_payment' name='pay-method' class='with-gap' type='radio' /><span>Transfer / deposit</span></label>" +
					"</div> " +
					"<div class='w3-col l6 m6 s6'></div> " +
					"<label><input id='others_payment' name='pay-method' class='with-gap' type='radio' /><span>Others</span></label>" +
					"</div>" +
					"</div> " +
					"<hr/>" +
					"<label><input id='print-receipt' type='checkbox'/><span>Print receipt</span></label>" +
					"</div><br/>" +
					"<button id='res-checkin-btn' class='ui blue button' onclick=\"checkInFromReservation('"+res.Id+"','"+m.modal+"')\">" +
					"<i class='calendar alternate outline icon'></i> Check in" +
					"</button> " +
					"</div>");


					let rooms = "";

					for(let i = 0; i < res.Rooms.length; i++)
					{
						for(let j = 0; j < Number(res.Rooms[i].Number); j++)
						{
							initVCalendar();
							let vacant = listVacantRoom(res.Rooms[i].Room.Name, wxDateToTime(res.Checkindate), wxDateToTime(res.Checkoutdate));

							let options = "<option value=''>Select room</option>";
							for(let y = 0; y < vacant.length; y++)
							{
								options += "<option value='"+vacant[y]+"'>"+vacant[y]+"</option>"
							}

							rooms +=
								"<div>" +
								"<span style='margin: 0px; margin-bottom: 5px; padding: 0; font-family: Nunito, quicksandregular;'>"+
								res.Rooms[i].Room.Name+" <span style='color: lightgray;'>(select room)</span> "+
								res.Checkindate.WeekDay+", "+res.Checkindate.Day+"/"+res.Checkindate.MonthName+"/"+res.Checkindate.Year+" - " +
								res.Checkoutdate.WeekDay+", "+res.Checkoutdate.Day+"/"+res.Checkoutdate.MonthName+"/"+res.Checkoutdate.Year+"</span>" +
								"<select chckin-room='"+res.Rooms[i].Room.Name+"' class='ui res-checkin-select wix-textbox fluid mini dropdown' >"+options+"</select>" +
								"</div><br/>";
						}
					}
					document.getElementById("checkin-room-list").innerHTML = rooms;

					$(".res-checkin-select").dropdown();

				}});
		}
	}

	function checkInFromReservation(e, modal)
	{
		let v = document.getElementsByClassName("res-checkin-select");

		let values = [];
		let cat = [];

		for(let i = 0; i < v.length; i++)
		{
			values.push($(v[i]).dropdown('get value'));
		}

		let proceed = true;

		let deposit = Number($("#reserve-checkin-amount").val());
		let print = $("#print-receipt").prop("checked");
		let method = "";
		let paid = 0.0;

		if((deposit > 0) || (deposit.toString().toLowerCase() !== "nan"))
		{
			paid = deposit;

			if((getElement("cash_payment") != null) && (getElement("cash_payment").checked))
			{
				method = "cash";
			}
			else if((getElement("pos_payment") != null) && (getElement("pos_payment").checked))
			{
				method = "pos";
			}
			else if((getElement("transfer_payment") != null) && (getElement("transfer_payment").checked))
			{
				method = "transfer";
			}
			else if((getElement("others_payment") != null) && (getElement("others_payment").checked))
			{
				method = "others";
			}
			else
			{
				errorButton({btn:"res-checkin-btn", msg:"Select payment method"});
				return;
			}
		}

		for(let i = 0; i < values.length; i++)
		{
			if(values[i] === "")
			{
				errorButton({btn:"res-checkin-btn", msg:"incomplete room selection"});
				return;
			}
			if(countOccurance(values, values[i]) > 1)
			{
				errorButton({btn:"res-checkin-btn", msg:"room "+values[i]+" is selected more than once"});
				return;
			}
		}

		if(proceed === true)
		{
			let res = null;

			for(let i = 0; i < reservations.length; i++)
			{
				if(reservations[i].Id === e)
				{
					res = reservations[i];
				}
			}

			let roomList = [];

			let pl = 0;
			for(let i = 0; i < res.Rooms.length; i++)
			{
				for(let j = 0; j < res.Rooms[i].Number; j++)
				{
					roomList.push({id:res.Rooms[i].Room.Id,name:res.Rooms[i].Room.Name, number:values[pl], price:Number(res.Rooms[i].Room.Price)});
					pl++;
				}
			}

			if(res != null)
			{
				let booking = buildCheckinFromReserve(res, roomList, paid, method);

				console.log(booking);

				if(booking != null)
				{
					addItemToQue(booking, roomList);

					if(print)
					{
						printReceipt(booking);
					}
					addToCalendar(booking, 'lodging', true);

					$("#res-checkin-btn").html("<i class='check icon'></i> Checked in");
					$("#res-checkin-btn").prop("disabled", true);

					for(let i = 0; i < reservations.length; i++)
					{
						if(reservations[i].Id === res.Id)
						{
							reservations.splice(i, 1);
						}
					}

					if(getElement(res.Id+"-row") != null)
					{
						$("#"+res.Id+"-row").transition('fade up out', function(){
							getElement(res.Id+"-row").parentNode.removeChild(getElement(res.Id+"-row"));
						});
					}

					if($("#checkin-tab").hasClass("active"))
					{
						let n = new Date();
						let t = ((picker2 == null) ? new Date(n.getFullYear(), n.getMonth(), n.getDate()) : new Date(picker2.getDate()));
						drawCalendar(t);
					}

					setTimeout(function(){
						closeGenModal(modal);
					}, 1000);
				}
			}
			else
			{
				ShowModal("Invalid reservation seleted");
			}
		}
	}
	function buildCheckinFromReserve(res, rooms, paid, method)
	{
		let booking = {};

		booking.items = [];

		booking.total = Number(res.Total);
		booking.taxes = 0;
		booking.discount = Number(res.Discount);
		booking.operation = "checkin";
		booking.fromReserve = true;
		booking.booking = res.Id;
		booking.guest = JSON.stringify(res.Children);

		booking.transId = generateId();
		booking.time = (Date.now() / 1000);

		booking.printItems = [];

		booking.coupons = [];
		booking.store = {guest:res.Customer, rooms:[]};

		for(let i = 0; i < rooms.length; i++)
		{
			let tx = 0.00;
			booking.items.push(rooms[i].id+":"+rooms[i].name+":"+rooms[i].number+":"+(wxDateToTime(res.Checkindate).getTime() / 1000)+":"+":"+(wxDateToTime(res.Checkoutdate).getTime() / 1000)+":"+":"+rooms[i].price+":"+tx);
			booking.printItems.push({item:rooms[i].name,qty:Number(res.Period),price:Number(rooms[i].price)});
			booking.store.rooms.push({category: rooms[i].name, checkin: wxDateToTime(res.Checkindate).getTime(), checkout: wxDateToTime(res.Checkoutdate).getTime(), days: res.Period,
				id: res.Id, price: rooms[i].price, room: rooms[i].number});
		}



		booking.discounts = [];
		booking.posuser = $("#pos-user").val();

		booking.paidAmount = Number(res.Paidamount) + paid;
		booking.isWeborder = false;
		booking.method = method;

		return booking;
	}

	function countOccurance(array, room)
	{
		let count = 0;
		for (let i = 0; i < array.length; i++)
		{
			if (array[i] === room)
			{
				count++;
			}
		}
		return count;
	}

	function confirmCancelReservation(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			ConfirmModal("Are you sure you want to cancel the reservation ?", function (choice, param) {
				if(choice)
				{
					cancelReservation(param);
				}
			}, null, null, e);
		}
	}
	function cancelReservation(e)
	{
		let cancel = buildCancellation(e);

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				reservations.splice(i, 1);
				break;
			}
		}
		if(cancel != null)
		{
			addItemToQue(cancel);

			if(getElement(e+"-row") != null)
			{
				$("#"+e+"-row").transition('fade up out', function(){
					getElement(e+"-row").parentNode.removeChild(getElement(e+"-row"));
				});
			}
		}
	}
	function buildCancellation(e)
	{
		let noshow = {};

		noshow.items = [];
		noshow.operation = "cancel reservation";
		noshow.fromReserve = true;
		noshow.booking = e;
		noshow.transId = e;
		noshow.time = (Date.now() / 1000);
		noshow.posuser = $("#pos-user").val();

		return noshow;
	}

	function confirmMarkNoShow(e)
	{
		let res = null;

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				res = reservations[i];
				break;
			}
		}
		if(res === null)
		{
			ShowModal("Invalid reservation id selected");
		}
		else
		{
			ConfirmModal("Are you sure you want to mark the reservation as \"no show\" ?", function (choice, param) {
				if(choice)
				{
					markNoShow(param);
				}
			}, null, null, e);
		}
	}
	function markNoShow(e)
	{
		let nShow = buildNoSHow(e);

		for(let i = 0; i < reservations.length; i++)
		{
			if(reservations[i].Id === e)
			{
				reservations[i].Noshow = true;
				break;
			}
		}
		if(nShow != null)
		{
			addItemToQue(nShow);
			reBuildReservationRow(e);
			populateReservationsSummary();
		}
	}
	function buildNoSHow(e)
	{
		let noshow = {};

		noshow.items = [];
		noshow.operation = "mark no-show";
		noshow.fromReserve = true;
		noshow.booking = e;
		noshow.transId = e;
		noshow.time = (Date.now() / 1000);
		noshow.posuser = $("#pos-user").val();

		return noshow;
	}




	function reBuildReservationRow(e)
	{
		let row = document.getElementById(e+"-row");

		if(row != null)
		{
			for(let i = 0; i < reservations.length; i++)
			{
				if(reservations[i].Id === e)
				{
					row.innerHTML = "";

					let roomCount = 0;

					for(let h = 0; h < reservations[i].Rooms.length; h++)
					{
						roomCount += Number(reservations[i].Rooms[h].Number);
					}

					let td0 = document.createElement("td");
					td0.innerHTML = "<label><input id='"+reservations[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + row.getAttribute("row-num") + "</span></label>";

					let td1 = document.createElement("td");
					td1.style.lineHeight = "170%";
					td1.innerHTML = "<span class='blue-text'>"+reservations[i].Customer.Name+" "+reservations[i].Customer.Surname+"</span><br/>"
						+ "<span>"+reservations[i].Bookingnumber+"</span><br/>"
						+"<span style='color: silver;'> Rooms:</span> " +(roomCount) + "&nbsp;&nbsp;&nbsp;&nbsp;" +
						"<span style='color: silver;'>adults:</span> "+(reservations[i].Adult)+ "&nbsp;&nbsp;&nbsp;&nbsp;" +
						"<span style='color: silver;'> children:</span> "+(reservations[i].Children)+"";


					let td2 = document.createElement("td");
					td2.style.lineHeight = "170%";
					td2.innerHTML = "<span style='color: silver;'>Total:</span> &#8358; "+
						numFormat(Number(reservations[i].Total).toFixed(2))+
						"<br/><span style='color: silver;'>Paid </span>&#8358; "+
						numFormat(Number(reservations[i].Paidamount).toFixed(2));



					let td3 = document.createElement("td");
					td3.style.lineHeight = "170%";
					td3.innerHTML = reservations[i].Paid ? "<span class='green-back status'>Paid</span>" : "<span class='red status'>Unpaid</span>";

					let td4 = document.createElement("td");
					td4.style.lineHeight = "170%";
					td4.innerHTML = "<span style='color: silver;'>Check in: </span>" +
						reservations[i].Checkindate.WeekDay+", "+reservations[i].Checkindate.Day+"/"+reservations[i].Checkindate.MonthName+"/"+reservations[i].Checkindate.Year+
						"<br/><span style='color: silver;'>Check out: </span>" +
						reservations[i].Checkoutdate.WeekDay+", "+reservations[i].Checkoutdate.Day+"/"+reservations[i].Checkoutdate.MonthName+"/"+reservations[i].Checkoutdate.Year;

					let td5 = document.createElement("td");
					td5.style.lineHeight = "170%";
					td5.innerHTML = ((reservations[i].Noshow) ? "<span class='status red-back'>No show</span>" : "<span class='status yellow-back'>Pending</span>");

					let td6 = document.createElement("td");

					if(reservations[i].Noshow)
					{
						td6.innerHTML = "<div class='pad-1'><button class='ui disabled icon button'><i class='cog red icon icon'></i></button></div>";
					}
					else
					{
						td6.innerHTML = "<div class='w3-container'> " +
							"<div id='" + reservations[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<div class='item' onclick=\"showReservationDetails('" + reservations[i].Id + "')\"><i class='eye blue icon'></i>See details</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"acceptPayment('" + reservations[i].Id + "')\"><i class='money green icon'></i>Accept payment</div>" +
							"<div class='item' onclick=\"checkinReservation('" + reservations[i].Id + "')\"><i class='check green icon'></i>Check in</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"confirmMarkNoShow('" + reservations[i].Id + "')\"><i class='calendar red outline alternate times icon'></i>Mark no-show</div>" +
							"<div class='item' onclick=\"confirmCancelReservation('" + reservations[i].Id + "')\"><i class='trash red icon'></i>Cancel reservation</div>" +
							"</div>" +
							"</div></div>";
					}



					row.appendChild(td0);
					row.appendChild(td1);
					row.appendChild(td2);
					row.appendChild(td3);
					row.appendChild(td4);
					row.appendChild(td5);
					row.appendChild(td6);
				}
				$(".c-menu").dropdown();
			}
		}
	}

	function reBuildLodgeRow(e, category, room)
	{
		let row = document.getElementById(e+"-"+category+"-"+room+"-row");

		let t = new Date();
		let today = new Date(t.getFullYear(), t.getMonth(), t.getDate());

		console.log(e+"-"+category+"-"+room+"-row");

		if(row != null)
		{
			for(let i = 0; i < lodging.length; i++)
			{
				if(lodging[i].Id === e)
				{
					for(let j = 0; j < lodging[i].Rooms.length; j++)
					{
						if((lodging[i].Rooms[j].Category.Name === category) && (lodging[i].Rooms[j].Number === room))
						{
							row.innerHTML = "";

							let roomCount = 0;

							let td0 = document.createElement("td");
							td0.innerHTML = "<label><input id='"+lodging[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + row.getAttribute("row-num"); + "</span></label>";

							let td1 = document.createElement("td");
							td1.style.lineHeight = "170%";
							td1.innerHTML = "<span class='blue-text'>"+lodging[i].Guest.Name+" "+lodging[i].Guest.Surname+"</span><br/>"
								+"<span style='color: silver;'> Room:</span> " +(lodging[i].Rooms[j].Category.Name) + "&nbsp;&nbsp;&nbsp;&nbsp;"
								+ "<span>"+lodging[i].Rooms[j].Number+"</span><br/>";


							let td2 = document.createElement("td");
							td2.style.lineHeight = "170%";
							td2.innerHTML = "<span style='color: silver;'>In:</span> <span style='font-size: 12px;'>"+
								lodging[i].Rooms[j].Checkin.WeekDay+", "+lodging[i].Rooms[j].Checkin.Day+"/"+lodging[i].Rooms[j].Checkin.MonthName+"/"+lodging[i].Rooms[j].Checkin.Year+
								"</span><br/><span style='color: silver;'>Out </span> <span style='font-size: 12px;'>"+
								lodging[i].Rooms[j].Checkout.WeekDay+", "+lodging[i].Rooms[j].Checkout.Day+"/"+lodging[i].Rooms[j].Checkout.MonthName+"/"+lodging[i].Rooms[j].Checkout.Year+
								"</span>";


							let td3 = document.createElement("td");
							td3.style.lineHeight = "170%";
							td3.innerHTML = "<span style='color: silver;'>Booking:</span> &#8358; "+
								numFormat(Number(lodging[i].Total).toFixed(2))+
								"<br/><span style='color: silver;'>Other bills </span>&#8358; "+
								numFormat(Number(lodging[i].Bills).toFixed(2));


							let td4 = document.createElement("td");
							td4.style.lineHeight = "170%";

							let b = ((Number(lodging[i].Total) + Number(lodging[i].Bills)) - Number(lodging[i].Paidamount));

							td4.innerHTML = "<span style='color: silver;'>Deposit:</span> &#8358; "+
								numFormat(Number(lodging[i].Paidamount).toFixed(2)) +

								(b >= 0 ? "<br/><span style='color: silver;'>Balance </span>&#8358; " + (numFormat(b.toFixed(2))) :
									"<br/><span style='color: silver;'>Rebate </span>&#8358; "+ (numFormat(Math.abs(b).toFixed(2))));



							let td5 = document.createElement("td");
							td5.style.lineHeight = "170%";

							if(lodging[i].Rooms[j].Checkedout)
							{
								td5.innerHTML = "<span class='checked-out status'>Checked out</span>";
							}
							else if(!lodging[i].Rooms[j].Checkedout && ((wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() > today.getTime())))
							{
								td5.innerHTML = "<span class='green-back status'>Active</span>";
							}
							else if(!lodging[i].Rooms[j].Checkedout && ((wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() === today.getTime())))
							{
								td5.innerHTML = "<span class='yellow-back status'>Due</span>";
							}
							else if(!lodging[i].Rooms[j].Checkedout && ((wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() < today.getTime())))
							{
								td5.innerHTML = "<span class='red-back status'>Overdue</span>";
							}


							let td6 = document.createElement("td");

							if(lodging[i].Rooms[j].Checkedout)
							{
								if(b === 0)
								{
									td6.innerHTML =
										"<div class='pad-1'><button class='ui disabled icon button'><i class='cog red icon icon'></i></button></div>";
								}
								else if(b > 0)
								{
									td6.innerHTML =
										"<div class='w3-container'> " +
										"<div id='" + lodging[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
										"<i class='blue wrench icon'></i>" +
										"<div class='menu'>" +
										"<div class='header'>Action</div>" +
										"<div class='item' onclick=\"acceptDeposit('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='money green icon'></i>Add payment</div>" +
										"</div>" +
										"</div></div>";
								}
								else
								{
									td6.innerHTML =
										"<div class='w3-container'> " +
										"<div id='" + lodging[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
										"<i class='blue wrench icon'></i>" +
										"<div class='menu'>" +
										"<div class='header'>Action</div>" +
										"<div class='item' onclick=\"showReservationDetails('" + lodging[i].Id + "')\"><i class='money blue icon'></i>Rebate</div>" +
										"</div>" +
										"</div></div>";
								}
							}
							else
							{
								td6.innerHTML =
									"<div class='w3-container'> " +
									"<div id='" + lodging[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
									"<i class='blue wrench icon'></i>" +
									"<div class='menu'>" +
									"<div class='header'>Action</div>" +
									"<div class='item' onclick=\"showLodgingDetails('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='eye blue icon'></i>See details</div>" +
									"<div class='ui divider'></div>" +
									"<div class='item' onclick=\"acceptDeposit('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='money green icon'></i>Add payment</div>" +
									"<div class='item' onclick=\"addBill('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='money blue times icon'></i>Add bill</div>" +
									"<!--<div class='ui divider'></div>-->" +
									"<!--<div class='item' onclick=\"changeRoom('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='blue calendar alternate outline icon'></i>Change room</div>-->" +
									"<!--<div class='item' onclick=\"extendStay('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='blue calendar alternate outline icon'></i>Extend stay</div>-->" +
									"<div class='ui divider'></div>" +
									"<div class='item' onclick=\"checkOutLodging('" + lodging[i].Id + "','"+lodging[i].Rooms[j].Category.Name+"','"+lodging[i].Rooms[j].Number+"')\"><i class='red calendar alternate outline icon'></i>Check out</div>" +
									"</div>" +
									"</div></div>";
							}

							row.appendChild(td0);
							row.appendChild(td1);
							row.appendChild(td2);
							row.appendChild(td3);
							row.appendChild(td4);
							row.appendChild(td5);
							row.appendChild(td6);
						}
						$(".c-menu").dropdown();
					}
				}
			}
		}
	}


	function populateReservationsSummary_1()
	{
		let noShows = 0;
		let dueToday = 0;

		let today = new Date();
		let tm = new Date(today.getFullYear(), today.getMonth(), today.getDate());

		for(let i = 0; i < reservations.length; i++)
		{
			if(wxDateToTime(reservations[i].Checkindate).getTime() === tm.getTime())
			{
				dueToday++;
			}
			if(reservations[i].Noshow)
			{
				noShows++;
			}
		}

		$("#no-show-con").html(noShows);
		$("#due-today-con").html(dueToday);
	}

	function populateDepartureSummary_1()
	{
		let overDue = 0;
		let dueToday = 0;

		let today = new Date();
		let tm = new Date(today.getFullYear(), today.getMonth(), today.getDate());

		for(let i = 0; i < lodging.length; i++)
		{
			for(let j = 0; j < lodging[i].Rooms.length; j++)
			{
				if(!lodging[i].Rooms[j].Checkedout)
				{
					if(wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() === tm.getTime())
					{
						dueToday++;
					}
					if(wxDateToTime(lodging[i].Rooms[j].Checkout).getTime() < tm.getTime())
					{
						overDue++;
					}
				}
			}
		}

		$("#checkout-overdue").html(overDue);
		$("#checkout-due-today-con").html(dueToday);
	}
	
	function populateGuest()
	{

	}

	//-------------------------- Non cool methods-----------------------------------------

	function f()
	{
		checkinList.deposit = Number($("#deposit-amount").val());
	}

	function initVCalendar()
	{
		vCalendar = [];

		for(let i = 0; i < lodging.length; i++)
		{
			for(let j = 0; j < lodging[i].Rooms.length; j++)
			{
				vCalendar.push({category:lodging[i].Rooms[j].Category.Name, room:lodging[i].Rooms[j].Number, checkin:wxDateToTime(lodging[i].Checkin), checkout:wxDateToTime(lodging[i].Checkout)});
			}
		}

		let stg = localStorage.getItem("frontdesk_data_que");
		if(stg != null)
		{
			stg = JSON.parse(stg);

			if(typeof (stg) == "object")
			{
				for(let i = 0; i < stg.length; i++)
				{
					if(stg[i].operation === "checkin")
					{
						for(let j = 0; j < stg[i].store.rooms.length; j++)
						{
							vCalendar.push({category:stg[i].store.rooms[j].category, room:stg[i].store.rooms[j].room,
								checkin:new Date(stg[i].store.rooms[j].checkin), checkout:new Date(stg[i].store.rooms[j].checkout)});
						}
					}
				}
			}
		}
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

	//Operation completion

	function processBooking()
	{
		pushBooking();
	}

	function reserveBooking()
	{
		if(!pushed)
		{
			pushReservation();
		}
		else
		{
			emptyTray();
			closeCheckinForm();
			ShowModal("Booking has been processed already");
		}
	}

	//-------------------------------------- Push order logic-----------------------------------------------------------
	function pushBooking()
	{
		let booking = buildBooking();

		if(!pushed)
		{
			if(booking != null)
			{
				addItemToQue(booking);
				printReceipt(booking);

                addToCalendar(booking, 'lodging', true);

				if(reprintReceipt)
				{
					$("#process-booking-btn").html("<i class='print icon'></i> Print receipt");
				}
				else
				{
					emptyTray();
					closeCheckinForm();
				}
			}
		}
		else
		{
			printReceipt(booking);
		}
	}

	function pushReservation()
	{
		let booking = buildReservation();

		if(!pushed)
		{
			if(booking != null)
			{
				addItemToQue(booking);
				//printReceipt(booking);

				addToCalendar(booking, 'reservation', false);

				$("#reserve-booking-btn").html("<i class='check icon'></i> Reservation added");
				$("#reserve-booking-btn").prop("disabled", true);
				setTimeout(function(){
					emptyTray();
					closeCheckinForm();
				}, 1000);
			}
		}
		else
		{
			printReceipt(booking);
		}
	}

	let queWork = false;
	function addItemToQue(order)
	{
		queWork = true;

		let que = JSON.parse(window.localStorage.getItem("frontdesk_data_que"));

		if(que == null)
		{
			que = [];
		}
		order.transId = generateId();

		que.push(order);
		window.localStorage.setItem('frontdesk_que_store', JSON.stringify(que));
		window.localStorage.setItem('frontdesk_data_que', JSON.stringify(que));

		window.localStorage.removeItem('frontdesk_que_store');

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

	function buildBooking()
	{
		let booking = {};

		booking.items = [];

		booking.total = bookingTotal;
		booking.taxes = bookingTaxes;
		booking.discount = bookingDiscount;
		booking.operation = "checkin";
		booking.fromReserve = parentReservation != null;
		booking.booking = parentReservation;
		booking.guest = JSON.stringify(checkin.guest);

		booking.transId = generateId();
		booking.time = (Date.now() / 1000);

		booking.printItems = [];

		let cc = checkin.rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let tx = 0.00;

			/*
			if(settings.Compundtax)
			{
				tx = Number($("#"+cc[i].id+"_tax").val());
			}
			else
			{
				tx = Number($("#"+cc[i].id+"_tax").val()) * Number($("#"+cc[i].id+"_quantity").val());
			}
			 */
			booking.items.push(cc[i].id+":"+cc[i].category+":"+cc[i].room+":"+(Number(checkinDate) / 1000)+":"+":"+(Number(checkoutDate) / 1000)+":"+":"+cc[i].price+":"+tx);
			booking.printItems.push({item:cc[i].category,qty:cc[i].days,price:Number(cc[i].price)});
		}
		booking.entity = entity.id+":"+entity.type;
		booking.coupons = [];
		booking.store = checkin;
		for(let i = 0; i < coupons.length; i++)
		{
			booking.coupons.push(coupons[i].Id);
		}
		booking.discounts = [];
		for(let i = 0; i < addedDiscount.length; i++)
		{
			booking.discounts.push(addedDiscount[i].Id);
		}
		booking.posuser = $("#pos-user").val();

		booking.paidAmount = Number($("#deposit-amount").val());
		booking.isWeborder = false;
		booking.method = "";

		booking.couponPixels = buildCouponPixels();
		booking.discountPixels = buildDiscountPixels();

		if(booking.paidAmount > 0)
		{
			if((getElement("cash_pay") != null) && (getElement("cash_pay").checked))
			{
				booking.method = "cash";
			}
			else if((getElement("pos_pay") != null) && (getElement("pos_pay").checked))
			{
				booking.method = "pos";
			}
			else if((getElement("others_pay") != null) && (getElement("others_pay").checked))
			{
				booking.method = "others";
			}
			else if((getElement("transfer_pay") != null) && (getElement("transfer_pay").checked))
			{
				booking.method = "transfer";
			}
			else
			{
				errorButton({btn:"process-booking-btn", msg:"Select pay method"});
				return ;
			}
		}

		if(booking.items.length > 0)
		{
			return booking;
		}
		else
		{
			errorButton({btn:"process-booking-btn", msg:"Booking is empty"});
		}
	}

	function buildReservation()
	{
		let booking = {};

		booking.items = [];

		booking.total = bookingTotal;
		booking.taxes = bookingTaxes;
		booking.discount = bookingDiscount;
		booking.operation = "reservation";
		booking.fromReserve = parentReservation != null;
		booking.booking = parentReservation;
		booking.guest = JSON.stringify(checkin.guest);

		booking.transId = generateId();
		booking.time = (Date.now() / 1000);

		booking.printItems = [];

		booking.checkindate = Number(checkinDate) / 1000;
		booking.checkoutdate = Number(checkoutDate) / 1000;

		let cc = checkin.rooms;

		for(let i = 0; i < cc.length; i++)
		{
			let tx = 0.00;

			/*
			if(settings.Compundtax)
			{
				tx = Number($("#"+cc[i].id+"_tax").val());
			}
			else
			{
				tx = Number($("#"+cc[i].id+"_tax").val()) * Number($("#"+cc[i].id+"_quantity").val());
			}
			 */
			booking.items.push(cc[i].id+":"+cc[i].category+":"+cc[i].room+":"+cc[i].price+":"+tx);
			booking.printItems.push({item:cc[i].category,qty:cc[i].days,price:Number(cc[i].price)});
		}
		booking.entity = entity.id+":"+entity.type;
		booking.coupons = [];
		booking.store = checkin;
		for(let i = 0; i < coupons.length; i++)
		{
			booking.coupons.push(coupons[i].Id);
		}
		booking.discounts = [];
		for(let i = 0; i < addedDiscount.length; i++)
		{
			booking.discounts.push(addedDiscount[i].Id);
		}
		booking.posuser = $("#pos-user").val();

		booking.paidAmount = Number($("#deposit-amount").val());
		booking.isWeborder = false;
		booking.method = "";

		booking.couponPixels = buildCouponPixels();
		booking.discountPixels = buildDiscountPixels();

		if(booking.paidAmount > 0)
		{
			if((getElement("cash_pay") != null) && (getElement("cash_pay").checked))
			{
				booking.method = "cash";
			}
			else if((getElement("pos_pay") != null) && (getElement("pos_pay").checked))
			{
				booking.method = "pos";
			}
			else if((getElement("others_pay") != null) && (getElement("others_pay").checked))
			{
				booking.method = "others";
			}
			else if((getElement("transfer_pay") != null) && (getElement("transfer_pay").checked))
			{
				booking.method = "transfer";
			}
			else
			{
				errorButton({btn:"reserve-booking-btn", msg:"Select pay method"});
				return ;
			}
		}

		if(booking.items.length > 0)
		{
			return booking;
		}
		else
		{
			errorButton({btn:"reserve-booking-btn", msg:"Booking is empty"});
		}
	}

	function printReceipt(booking)
	{
		if(receipt.isValid)
		{
			if(receipt.Definitions.type === "json")
			{
				let receiptRows = [];

				for(let i = 0; i < booking.printItems.length; i++)
				{
					let row = {};
					row.Item = booking.printItems[i].item;
					row.Price = $("#currency-symbol").val()+numFormat((Number(booking.printItems[i].price)).toFixed(2));
					row.Qty = numFormat(booking.printItems[i].qty);
					row.Total = $("#currency-symbol").val()+numFormat(((Number(booking.printItems[i].qty) * Number(booking.printItems[i].price))).toFixed(2));
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
				row1.Total = $("#currency-symbol").val() + numFormat(Number(booking.total).toFixed(2));
				receiptRows.push(row1);

				let row2 = {};
				row2.Item = "";
				row2.Price = "";
				row2.Qty = "<big><b>Tax:</b></big>";
				row2.Total = $("#currency-symbol").val() + numFormat(Number(booking.taxes).toFixed(2));
				receiptRows.push(row2);

				let row3 = {};
				row3.Item = "";
				row3.Price = "";
				row3.Qty = "<big><b>Discount:</b></big>";
				row3.Total = $("#currency-symbol").val() + numFormat(Number(booking.discount).toFixed(2));
				receiptRows.push(row3);

				let row4 = {};
				row4.Item = "";
				row4.Price = "";
				row4.Qty = "<big><b>Total:</b></big>";
				row4.Total = $("#currency-symbol").val() + numFormat(((Number(booking.total) + Number(booking.taxes)) - Number(booking.discount)).toFixed(2));
				receiptRows.push(row4);

				let printObject = {};
				printObject.printable = receiptRows;
				printObject.properties = ['Item', 'Price', 'Qty', 'Total'];
				printObject.type = 'json';

				printObject.style = processReplace(receipt.Style, booking);

				if(settings.Papertype === "a4")
				{
					printObject.header = processReplace(receipt.Header.a4, booking);
					printObject.headerStyle = processReplace(receipt.Definitions.a4.headerStyle, booking);
					printObject.maxWidth = processReplace(receipt.Definitions.a4.maxWidth, booking);
					printObject.css = processReplace(receipt.Links.a4, booking);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.a4.gridHeaderStyle, booking);
					printObject.gridStyle = processReplace(receipt.Definitions.a4.gridStyle, booking);
				}
				else if(settings.Papertype === "letter")
				{
					printObject.header = processReplace(receipt.Header.letter, booking);
					printObject.headerStyle = processReplace(receipt.Definitions.letter.headerStyle, booking);
					printObject.maxWidth = processReplace(receipt.Definitions.letter.maxWidth, booking);
					printObject.css = processReplace(receipt.Links.letter, booking);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.letter.gridHeaderStyle, booking);
					printObject.gridStyle = processReplace(receipt.Definitions.letter.gridStyle, booking);
				}
				else if(settings.Papertype === "80mm")
				{
					printObject.header = processReplace(receipt.Header.mm80, booking);
					printObject.headerStyle = processReplace(receipt.Definitions.mm80.headerStyle, booking);
					printObject.maxWidth = processReplace(receipt.Definitions.mm80.maxWidth, booking);
					printObject.css = processReplace(receipt.Links.mm80, booking);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.mm80.gridHeaderStyle, booking);
					printObject.gridStyle = processReplace(receipt.Definitions.mm80.gridStyle, booking);
				}
				else
				{
					printObject.header = processReplace(receipt.Header.mm58, booking);
					printObject.headerStyle = processReplace(receipt.Definitions.mm58.headerStyle, booking);
					printObject.maxWidth = processReplace(receipt.Definitions.mm58.maxWidth, booking);
					printObject.css = processReplace(receipt.Links.mm58, booking);
					printObject.gridHeaderStyle = processReplace(receipt.Definitions.mm58.gridHeaderStyle, booking);
					printObject.gridStyle = processReplace(receipt.Definitions.mm58.gridStyle, booking);
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
		let que = JSON.parse(window.localStorage.getItem("frontdesk_data_que"));

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
					if((que[i].operation === "checkin") || (que[i].operation === "reservation") || (que[i].operation === "add payment")
						|| (que[i].operation === "add bill") || (que[i].operation === "deposit"))
					{
						content +=
							"<tr id='"+que[i].transId+"-order-row'>" +
							"<td>"+que[i].transId+"</td>" +
							"<td>"+que[i].operation+"</td>" +
							"<td>"+(que[i].method === '' ? 'None' : que[i].method)+"</td>" +
							"<td>&#8358;"+numFormat(((Number(que[i].total) + Number(que[i].taxes)) - Number(que[i].discount)).toFixed(2))+"</td>" +
							"<td>&#8358;"+numFormat(Number(que[i].paidAmount).toFixed(2))+"</td>" +
							"<td id='"+que[i].transId+"-status'><small><small><i class='red circle icon'></i></small></small> pending</td>" +
							"</tr>";
					}
					else
					{
						content +=
							"<tr id='"+que[i].transId+"-order-row'>" +
							"<td>"+que[i].transId+"</td>" +
							"<td>"+que[i].operation+"</td>" +
							"<td>no payment</td>" +
							"<td>no payment</td>" +
							"<td>no payment</td>" +
							"<td id='"+que[i].transId+"-status'><small><small><i class='red circle icon'></i></small></small> pending</td>" +
							"</tr>";
					}
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
				"<td>Operation</td>" +
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

	function addToCalendar(booking, type, active)
    {
        if(($("#checkin-tab").hasClass("active")) && (strip != null))
        {
            for(let i = 0; i < booking.store.rooms.length; i++)
            {
                strip.addActivity(booking.store.rooms[i].category, booking.store.rooms[i].room,
                    new Date(Number(booking.store.rooms[i].checkin)), new Date(Number(booking.store.rooms[i].checkout)),
					((booking.store.guest.name == null) ? booking.store.guest.Name : booking.store.guest.name)+" "+
					((booking.store.guest.surname == null) ? booking.store.guest.Surname : booking.store.guest.surname), type, active);

                vCalendar.push({category:booking.store.rooms[i].category, room:booking.store.rooms[i].room, checkin:new Date(Number(booking.store.rooms[i].checkin)), checkout:new Date(Number(booking.store.rooms[i].checkout))});
            }
        }
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

	///Web data table population

	function populateReservationTable(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.filter = "all";
		request.searchterm = $("#search-txt").val();
		request.item_type = "frontdesk_item";
		request.job = "get reservations";

		request.dueDate = $("#reservation-due-date").val();

		if($("#paid-reservations").hasClass("active"))
		{
			request.filter = "paid";
		}
		if($("#unpaid-reservations").hasClass("active"))
		{
			request.filter = "unpaid";
		}
		if($("#abandoned-reservations").hasClass("active"))
		{
			request.filter = "abandoned";
		}

		let t = new Date();
		let today = new Date(t.getFullYear(), t.getMonth(), t.getDate());


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(7));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateInventoryItems"));

					$("#no-show-con").html(d.noShow);
					$("#due-today-con").html(d.dueToday);

					if(d.Data.length === 0)
					{
						document.getElementById("table-body").innerHTML =
							"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-list la-3x' style='color: silver;'></i> </h2>" +
							"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Empty list returned</h6></div></td></tr>";
					}

					for(let i = 0; i < d.Data.length; i++)
					{
						let roomCount = 0;

						for(let r = 0; r < d.Data[i].Rooms.length; r++)
						{
							roomCount += Number(d.Data[i].Rooms[r].Number);
						}

						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";
						row.setAttribute("row-num", sn);

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.style.lineHeight = "170%";
						td1.innerHTML = "<span class='blue-text'>"+d.Data[i].Customer.Name+" "+d.Data[i].Customer.Surname+"</span><br/>"
							+ "<span>"+d.Data[i].Bookingnumber+"</span><br/>"
							+"<span style='color: silver;'> Rooms:</span> " + roomCount + "&nbsp;&nbsp;&nbsp;&nbsp;" +
							"<span style='color: silver;'>adults:</span> "+(d.Data[i].Adult)+ "&nbsp;&nbsp;&nbsp;&nbsp;" +
							"<span style='color: silver;'> children:</span> "+(d.Data[i].Children)+"";


						let td2 = document.createElement("td");
						td2.style.lineHeight = "170%";
						td2.innerHTML = "<span style='color: silver;'>Total:</span> &#8358; "+
							numFormat(Number(d.Data[i].Total).toFixed(2))+
							"<br/><span style='color: silver;'>Paid </span>&#8358; "+
							numFormat(Number(d.Data[i].Paidamount).toFixed(2));



						let td3 = document.createElement("td");
						td3.style.lineHeight = "170%";
						td3.innerHTML = d.Data[i].Paid ? "<span class='green-back status'>Paid</span>" : "<span class='red status'>Unpaid</span>";

						let td4 = document.createElement("td");
						td4.style.lineHeight = "170%";
						td4.innerHTML = "<span style='color: silver;'>Check in: </span>" +
							d.Data[i].Checkindate.WeekDay+", "+d.Data[i].Checkindate.Day+"/"+d.Data[i].Checkindate.MonthName+"/"+d.Data[i].Checkindate.Year+
							"<br/><span style='color: silver;'>Check out: </span>" +
							d.Data[i].Checkoutdate.WeekDay+", "+d.Data[i].Checkoutdate.Day+"/"+d.Data[i].Checkoutdate.MonthName+"/"+d.Data[i].Checkoutdate.Year;

						let td5 = document.createElement("td");
						td5.style.lineHeight = "170%";
						td5.innerHTML = ((d.Data[i].Noshow) ? "<span class='status red-back'>No show</span>" : "<span class='status yellow-back'>Pending</span>");

						let td6 = document.createElement("td");

						if(d.Data[i].Noshow)
						{
							td6.innerHTML = "<div class='pad-1'><button class='ui disabled icon button'><i class='cog red icon icon'></i></button></div>";
						}
						else
						{
							td6.innerHTML = "<div class='w3-container'> " +
								"<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>" +
								"<div class='item' onclick=\"showReservationDetails('" + d.Data[i].Id + "')\"><i class='eye blue icon'></i>See details</div>" +
								"<div class='ui divider'></div>" +
								((wxDateToTime(d.Data[i].Checkoutdate) > today.getTime()) ?
								"<div class='item' onclick=\"acceptPayment('" + d.Data[i].Id + "')\"><i class='money green icon'></i>Accept payment</div>" : "") +
								(((wxDateToTime(d.Data[i].Checkindate) <= today.getTime()) && (wxDateToTime(d.Data[i].Checkoutdate) > today.getTime())) ?
								"<div class='item' onclick=\"checkinReservation('" + d.Data[i].Id + "')\"><i class='check green icon'></i>Check in</div>" +
									"<div class='ui divider'></div>" : "") +

								"<div class='item' onclick=\"confirmMarkNoShow('" + d.Data[i].Id + "')\"><i class='calendar red outline alternate times icon'></i>Mark no-show</div>" +
								(((wxDateToTime(d.Data[i].Checkoutdate) > today.getTime())) ?
								"<div class='item' onclick=\"confirmCancelReservation('" + d.Data[i].Id + "')\"><i class='trash red icon'></i>Cancel reservation</div>" : "") +
								"</div>" +
								"</div></div>";
						}

						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);
						row.appendChild(td5);
						row.appendChild(td6);

						sn++;

						document.getElementById("table-body").appendChild(row);
					}
					$(".c-menu").dropdown();
				}
				else
				{
					document.getElementById("table-body").innerHTML =
						"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-list la-3x' style='color: silver;'></i> </h2>" +
						"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>"+d.Message+"</h6><br/>" +
						"<button class='ui sleak button'>try again</button></div></td></tr>";
				}
			}
			else
			{
				document.getElementById("table-body").innerHTML =
					"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-list la-3x' style='color: silver;'></i> </h2>" +
					"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Connection error</h6><br/>" +
					"<button class='ui sleak button'>try again</button></div></td></tr>";
			}
		}, request);
	}

	function populateInHouseTable(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.filter = "all";
		request.searchterm = $("#search-txt").val();
		request.item_type = "frontdesk_item";
		request.job = "get inhouse";

		request.dueDate = $("#departure-due-date").val();

		if($("#due-departure").hasClass("active"))
		{
			request.filter = "due-departure";
		}
		if($("#overdue-departure").hasClass("active"))
		{
			request.filter = "overdue-departure";
		}
		if($("#arrived-today").hasClass("active"))
		{
			request.filter = "arrived-today";
		}

		let t = new Date();
		let today = new Date(t.getFullYear(), t.getMonth(), t.getDate());


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(7));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success

					$("#checkout-due-today-con").html(d.dueToday);
					$("#checkout-overdue").html(d.overDue);
					$("#checkin-today-con").html(d.arrival);

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateInHouseTable"));

					if(d.Data.length === 0)
					{
						document.getElementById("table-body").innerHTML =
							"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-list la-3x' style='color: silver;'></i> </h2>" +
							"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Empty list returned</h6></div></td></tr>";
					}

					for(let i = 0; i < d.Data.length; i++)
					{
						for(let j = 0; j < d.Data[i].Rooms.length; j++)
						{
							console.log(d.Data[i].Rooms[j]);
							let row = document.createElement("tr");
							row.id = d.Data[i].Id +"-"+(d.Data[i].Rooms[j].Category.Name ?? 'cat-' + j)+"-"+(d.Data[i].Rooms[j].Number ?? j)+"-row";
							row.setAttribute("row-num", sn);

							let td0 = document.createElement("td");
							td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";


							let td1 = document.createElement("td");
							td1.style.lineHeight = "170%";
							td1.innerHTML = "<span class='blue-text'>"+d.Data[i].Guest.Name+" "+d.Data[i].Guest.Surname+"</span><br/>"
								+"<span style='color: silver;'> Room:</span> " +(d.Data[i].Rooms[j].Category.Name ?? 'N/A') + "&nbsp;&nbsp;&nbsp;&nbsp;"
								+ "<span>"+d.Data[i].Rooms[j].Number+"</span><br/>";


							let td2 = document.createElement("td");
							td2.style.lineHeight = "170%";
							td2.innerHTML = "<span style='color: silver;'>In:</span> <span style='font-size: 12px;'>"+
								d.Data[i].Rooms[j].Checkin.WeekDay+", "+d.Data[i].Rooms[j].Checkin.Day+"/"+d.Data[i].Rooms[j].Checkin.MonthName+"/"+d.Data[i].Rooms[j].Checkin.Year+
								"</span><br/><span style='color: silver;'>Out </span> <span style='font-size: 12px;'>"+
								d.Data[i].Rooms[j].Checkout.WeekDay+", "+d.Data[i].Rooms[j].Checkout.Day+"/"+d.Data[i].Rooms[j].Checkout.MonthName+"/"+d.Data[i].Rooms[j].Checkout.Year+
								"</span>";

							let td3 = document.createElement("td");
							td3.style.lineHeight = "170%";
							td3.innerHTML = "<span style='color: silver;'>Booking:</span> &#8358; "+
								numFormat(Number(d.Data[i].Total).toFixed(2))+
								"<br/><span style='color: silver;'>Other bills </span>&#8358; "+
								numFormat(Number(d.Data[i].Bills).toFixed(2));


							let td4 = document.createElement("td");
							td4.style.lineHeight = "170%";

							let b = ((Number(d.Data[i].Total) + Number(d.Data[i].Bills)) - Number(d.Data[i].Paidamount));

							td4.innerHTML = "<span style='color: silver;'>Deposit:</span> &#8358; "+
								numFormat(Number(d.Data[i].Paidamount).toFixed(2)) +

								(b >= 0 ? "<br/><span style='color: silver;'>Balance </span>&#8358; " + (numFormat(b.toFixed(2))) :
									"<br/><span style='color: silver;'>Rebate </span>&#8358; "+ (numFormat(Math.abs(b).toFixed(2))));


							let td5 = document.createElement("td");
							td5.style.lineHeight = "170%";

							if(d.Data[i].Rooms[j].Checkedout)
							{
								td5.innerHTML = "<span class='checked-out status'>Checked out</span>";
							}
							else if(!d.Data[i].Rooms[j].Checkedout && ((wxDateToTime(d.Data[i].Rooms[j].Checkout).getTime() > today.getTime())))
							{
								td5.innerHTML = "<span class='green-back status'>In-House</span>";
							}
							else if(!d.Data[i].Rooms[j].Checkedout && ((wxDateToTime(d.Data[i].Rooms[j].Checkout).getTime() === today.getTime())))
							{
								td5.innerHTML = "<span class='yellow-back status'>Due</span>";
							}
							else if(!d.Data[i].Rooms[j].Checkedout && ((wxDateToTime(d.Data[i].Rooms[j].Checkout).getTime() < today.getTime())))
							{
								td5.innerHTML = "<span class='red-back status'>Overdue</span>";
							}

							let td6 = document.createElement("td");

							if(d.Data[i].Rooms[j].Checkedout)
							{
								if(b === 0)
								{
									td6.innerHTML =
										"<div class='pad-1'><button class='ui disabled icon button'><i class='cog red icon icon'></i></button></div>";
								}
								else if(b > 0)
								{
									td6.innerHTML =
										"<div class='w3-container'> " +
										"<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
										"<i class='blue wrench icon'></i>" +
										"<div class='menu'>" +
										"<div class='header'>Action</div>" +
										"<div class='item' onclick=\"acceptDeposit('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='money green icon'></i>Add payment</div>" +
										"</div>" +
										"</div></div>";
								}
								else
								{
									td6.innerHTML =
										"<div class='w3-container'> " +
										"<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
										"<i class='blue wrench icon'></i>" +
										"<div class='menu'>" +
										"<div class='header'>Action</div>" +
										"<div class='item' onclick=\"showReservationDetails('" + d.Data[i].Id + "')\"><i class='money blue icon'></i>Rebate</div>" +
										"</div>" +
										"</div></div>";
								}
							}
							else
							{
								td6.innerHTML =
									"<div class='w3-container'> " +
									"<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
									"<i class='blue wrench icon'></i>" +
									"<div class='menu'>" +
									"<div class='header'>Action</div>" +
									"<div class='item' onclick=\"showLodgingDetails('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='eye blue icon'></i>See details</div>" +
									"<div class='ui divider'></div>" +
									"<div class='item' onclick=\"acceptDeposit('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='money green icon'></i>Add payment</div>" +
									"<div class='item' onclick=\"addBill('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='money blue times icon'></i>Add bill</div>" +
									"<!--<div class='ui divider'></div>-->" +
									"<!--<div class='item' onclick=\"changeRoom('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='blue calendar alternate outline icon'></i>Change room</div>-->" +
									"<!--<div class='item' onclick=\"extendStay('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='blue calendar alternate outline icon'></i>Extend stay</div>-->" +
									"<div class='ui divider'></div>" +
									"<div class='item' onclick=\"checkOutLodging('" + d.Data[i].Id + "','"+d.Data[i].Rooms[j].Category.Name+"','"+d.Data[i].Rooms[j].Number+"')\"><i class='red calendar alternate outline icon'></i>Check out</div>" +
									"</div>" +
									"</div></div>";
							}

							row.appendChild(td0);
							row.appendChild(td1);
							row.appendChild(td2);
							row.appendChild(td3);
							row.appendChild(td4);
							row.appendChild(td5);
							row.appendChild(td6);


							sn++;

							document.getElementById("table-body").appendChild(row);
						}
					}
					$(".c-menu").dropdown();
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

	function populateCustomers(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.filter = "all";
		request.searchterm = $("#search-txt").val();
		request.item_type = "frontdesk_item";
		request.job = "get customers";

		request.dueDate = $("#departure-due-date").val();

		if($("#due-departure").hasClass("active"))
		{
			request.filter = "due-departure";
		}
		if($("#overdue-departure").hasClass("active"))
		{
			request.filter = "overdue-departure";
		}
		if($("#arrived-today").hasClass("active"))
		{
			request.filter = "arrived-today";
		}


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(8));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success

					$("#customer-all-guest").html(d.allGuest);
					$("#customer-in-house-guest").html(d.inHouse);
					$("#customer-today-guests").html(d.todayCheckin);

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateCustomers"));

					if(d.Data.length === 0)
					{
						document.getElementById("table-body").innerHTML =
							"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-user la-3x' style='color: silver;'></i> </h2>" +
							"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Empty customers list returned</h6></div></td></tr>";
					}

					for(let i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";
						row.setAttribute("row-num", sn);

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.style.textAlign = "center";
						td1.innerHTML = "<img src='"+((d.Data[i].Profilepic == "") ? cdn+"images/manager.svg" : "https://tripmata.com/files/" + d.Data[i].Profilepic)+"' style='width: 50px;'/>";

						let td2 = document.createElement("td");
						td2.style.lineHeight = "170%";
						td2.innerHTML = "<span style='color: silver;'> Name:</span> <span class='blue-text'>"+d.Data[i].Name+"</span><br/>"
							+"<span style='color: silver;'> Surname:</span> " + d.Data[i].Surname + "&nbsp;&nbsp;&nbsp;&nbsp;";


						let td3 = document.createElement("td");
						td3.style.lineHeight = "170%";
						td3.innerHTML = "<span style='color: silver;'>Phone:</span> "+ d.Data[i].Phone+
							"<br/><span style='color: silver;'>Email </span> "+ d.Data[i].Email;


						let td4 = document.createElement("td");
						td4.style.lineHeight = "170%";
						td4.innerHTML = d.Data[i].Sex == "" ? "<span style='color: silver;'>None</span>" : "<span class='blue-back status'>"+d.Data[i].Sex+"</span>";

						let td5 = document.createElement("td");
						td5.style.lineHeight = "170%";
						td5.innerHTML = "<span style='color: silver;'>City: </span>" + d.Data[i].City+
							"<br/><span style='color: silver;'>State: </span>" + d.Data[i].State;

						let td6 = document.createElement("td");
						td6.style.lineHeight = "170%";
						td6.innerHTML = ((d.Data[i].Idtype === "") ?
							"<span style='color: silver;'>ID type:</span><span id='"+d.Data[i].Id+"-id-type-con'> None</span><br/>"+
							"<span style='color: silver;'>ID Number:</span><span id='"+d.Data[i].Id+"-id-num-con'> None</span>"
							: "<span style='color: silver;'>ID Type:</span>" + d.Data[i].Idtype +
							"<br/><span style='color: silver;'>ID Number:</span>" + d.Data[i].Idnumber);

						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
							"<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<div class='item' onclick=\"seeCustomersProfile('" + d.Data[i].Id + "')\"><i class='user blue icon'></i>See profile</div>" +

							((d.Data[i].Idtype == '') ?
								"<div class='ui divider'></div>" +
								"<div id='"+d.Data[i].Id+"-add-id-btn' class='item' onclick=\"addIdentification('" + d.Data[i].Id + "','"+d.Data[i].Name+" "+d.Data[i].Surname+"')\">" +
								"<i class='contact book green icon'></i>Add Identification</div>"
								: "") +
							"</div>" +
							"</div></div>";

						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);
						row.appendChild(td5);
						row.appendChild(td6);
						row.appendChild(td7);

						sn++;

						document.getElementById("table-body").appendChild(row);
					}
					$(".c-menu").dropdown();
				}
				else
				{
					document.getElementById("table-body").innerHTML =
						"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-ban la-3x' style='color: silver;'></i> </h2>" +
						"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>"+d.Message+"</h6>" +
						"<br/><button class='ui button' onclick='populateCustomers()'>try again</button>" +
						"</div></td></tr>";
				}
			}
			else
			{
				document.getElementById("table-body").innerHTML =
					"<tr><td colspan='7'><div class='pad-2 align-c'><h2><i class='la la-ban la-3x' style='color: silver;'></i> </h2>" +
					"<h6 style='font-family: Nunito, quicksandregular; color: dimgray;'>Connection error</h6>" +
					"<br/><button class='ui button' onclick='populateCustomers()'>try again</button>" +
					"</div></td></tr>";
			}
		}, request);
	}

	function seeCustomersProfile(e)
	{
		$("#customers-main-con").html(
			"<div class='pad-2'>" +
			"<div><button class='ui sleak basic button' onclick='drawGuest()'><i class='left arrow icon'></i> back to customers</button></div>" +
			"<div style='margin-top: 20px;'>" +
			"<div class='w3-row'>" +
			"<div class='w3-col l6 m6 s12'>" +
			"<div>" +
			"<div style='max-width: 250px;'>" +
			"<div class='ui placeholder'>" +
			"<div class='image' style='max-width: 100px; min-height: 230px;'></div>" +
			"<div class='ui wide line'></div> " +
			"<div class='ui line'></div> " +
			"<div class='ui line'></div> " +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"<div class='w3-col l6 m6 s12'>" +
			"<div class='ui placeholder'>" +
			"<div class='ui wide line'></div> " +
			"<div class='ui line'></div> " +
			"<div class='ui line'></div> " +
			"</div>" +
			"<div class='ui placeholder'>" +
			"<div class='ui wide line'></div> " +
			"<div class='ui line'></div> " +
			"<div class='ui line'></div> " +
			"</div>" +
			"<div class='ui placeholder'>" +
			"<div class='ui wide line'></div> " +
			"<div class='ui line'></div> " +
			"<div class='ui line'></div> " +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>");

		postJson("hms-admin/worker", function(data, status) {

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					$("#customers-main-con").html(
						"<div class='pad-2'>" +
						"<div><button class='ui sleak basic button' onclick='drawGuest()'><i class='left arrow icon'></i> back to customers</button></div>" +
						"<div style='margin-top: 40px;'>" +
						"<div class='w3-row'>" +
						"<div class='w3-col l4 m6 s12'>" +
						"<div>" +
						"<div style='max-width: 250px;'>" +
						"<div class=''>" +
						"<div class='' style='max-width: 100px; ='>" +
						"<img src='"+(d.Data.Profilepic == "" ? cdn+"images/manager.svg" : "http://localhost/tripmata/files"+d.Data.Profilepic)+"' style='max-width: 100%;'/>" +
						"</div>" +
						"<div class='ui wide line'></div> " +
						"<h3 style='font-weight: normal; margin: 0; margin-top: 5px; font-family: Nunito;'><span style='color: silver;'>Name: </span>"+d.Data.Name+" "+d.Data.Surname+"</h3> " +
						"<h4 style='font-family: Nunito; margin: 0; margin-top: 5px;'><span style='color: silver;'>Email: </span>"+d.Data.Email+"</h4> " +
						"<h4 style='font-family: Nunito; margin: 0; margin-top: 5px;'><span style='color: silver;'>Phone: </span>"+d.Data.Phone+"</h4>" +
						"<br/> " +
						"<h4 style='font-family: Nunito; margin: 0; margin-top: 5px;'><span style='color: silver;'>City: </span>"+d.Data.City+"</h4> " +
						"<h4 style='font-family: Nunito; margin: 0; margin-top: 5px;'><span style='color: silver;'>State: </span>"+d.Data.State+"</h4>" +
						"<h4 style='font-family: Nunito; margin: 0; margin-top: 5px;'><span style='color: silver;'>Address: </span>"+d.Data.Street+"</h4>" +
						"</div>" +
						"</div>" +
						"</div>" +
						"</div>" +
						"<div class='w3-col l8 m6 s12'>" +
						"<div class=''>" +
						"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; margin: 0;'>Customer reservations</h3>" +
						"<table class='ui table'>" +
						"<thead>" +
						"<tr>" +
						"<th></th>" +
						"</tr>" +
						"</thead>" +
						"<tbody></tbody>" +
						"<tfood></tfood>" +
						"</table>" +
						"</div>" +
						"</div><br/><br/>" +


						"<div class='w3-col l8 m6 s12'>" +
						"<div class=''>" +
						"<br/>" +
						"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; margin: 0;'>Customer request</h3>" +
						"<table class='ui table'>" +
						"<thead>" +
						"<tr>" +
						"<th></th>" +
						"</tr>" +
						"</thead>" +
						"<tbody></tbody>" +
						"<tfood></tfood>" +
						"</table>" +
						"</div>" +
						"</div>" +

						"</div>" +
						"</div>" +
						"</div>");

				}
				else
				{
					$("#customers-main-con").html(
						"<div class='pad-2'>" +
						"<div><button class='ui sleak basic button' onclick='drawGuest()'>" +
						"<i class='left arrow icon'></i> back to customers</button></div>" +
						"<div style='margin-top: 20px;'>" +
						"<div class='pad-5 align-c'>" +
						"<h2><i class='la la-ban la-3x'></i> </h2>" +
						"<h4 style='font-family: Nunito; color: dimgray;'>"+d.Message+"</h4>" +
						"<button class='ui button' onclick=\"seeCustomersProfile('"+e+"')\">try again</button>" +
						"</div>" +
						"</div>" +
						"</div>");
				}
			}
			else
			{
				$("#customers-main-con").html(
					"<div class='pad-2'>" +
					"<div><button class='ui sleak basic button' onclick='drawGuest()'><i class='left arrow icon'></i> back to customers</button></div>" +
					"<div style='margin-top: 20px;'>" +
					"<div class='pad-5 align-c'>" +
					"<h2><i class='la la-ban la-3x'></i></h2>" +
					"<h4 style='font-family: Nunito; color: dimgray;'>Connection error.</h4>" +
					"<button class='ui button' onclick=\"seeCustomersProfile('"+e+"')\">try again</button>" +
					"</div>" +
					"</div>" +
					"</div>");
			}
		}, {customer:e, job:'get guest info', item_type:$("#pos-type").val()});
	}

	let upload = null;
	let uploadFile = null;

	function addIdentification(e, name)
	{
		loadPageModal({size:"s",  onLoaded:function(m){
			$("#modal_"+m.modal+"-inner").html(
				"<div class='pad-2'>" +
				"<div class=''>" +
				"<h3 style='font-family: Nunito, quicksandregular; color: dimgray; font-weight: normal;'>" +
				"<i class='blue la la-money-bill la-2x' style='vertical-align: middle;'></i>" +
				"<span style='vertical-align: middle'> Add Identification</span>" +
				"</h3>" +
				"</div>" +
				"</div>" +
				"<hr style='margin: 0px; padding: 0px;'/><br/>" +
				"<div id=''>" +
				"<div class='pad-2'>" +

				"<div>" +
				"<h3 style='font-family: Nunito, quicksandregular; font-weight: normal;'>" +
				"<i class='la blue la-user' style='font-size: 30px;'></i><span style='color: lightgray;'> Name: </span>"+name+
				"</h3>" +
				"</div>" +
				"<hr/>" +
				"<div>" +
				"<div class='ui fluid labeled input'>" +
				"<label class='ui sleak label'>Id Type</label>" +
				"<select id='id-type' class='wix-select' id='id-type' class='ui left labeled dropdown'>" +
				"<option>National Id card</option>" +
				"<option>Drivers licence</option>" +
				"<option>International passport</option>" +
				"</select> " +
				"</div> <br/>" +
				"<div class='ui fluid labeled input'>" +
				"<label class='ui sleak label'>Id Number</label>" +
				"<input id='profile-id-number' class='wix-textbox' type='text'>" +
				"</div> " +
				"</div><br/>" +

				"<div id='profile-id-con' style='background-color: whitesmoke; text-align: center; position: relative;'>" +
				"<br/>" +
				"<h6 style='margin-top: 80px; margin-bottom: 80px; color: silver;'>" +
				"Drag and drop image here or select" +
				"</h6>" +
				"<br/>" +
				"</div>" +


				"<hr/>" +
				"<br/>" +
				"<button id='add-id-btn' class='ui blue button' style='font-family: Nunito, quicksandregular; margin-top: 10px;' onclick=\"uploadId('"+e+"','"+m.modal+"')\">Upload Id</button> " +
				"</div> " +
				"</div>");

			$("#id-type").dropdown();

			upload = new WixUpload({});
			upload.setBrowseButton("profile-id-con");
			upload.setDropZone("profile-id-con");
			upload.on('fileselected', function(o){

				uploadFile = o.file;
				$("#profile-id-con").html("<img id='added-image' style='max-width: 100%;'>");
				$("#added-image").attr("src", URL.createObjectURL(o.file));

			});

		}});
	}

	function uploadId(e, modal)
	{
		let idType = $("#id-type").val();
		let idNumber = $("#profile-id-number").val();

		if(uploadFile === null)
		{
			errorButton({btn:"add-id-btn", msg:"Add ID image"});
		}
		else if(idNumber === "")
		{
			errorButton({btn:"add-id-btn", msg:"ID number is empty"});
		}
		else
		{
			loadingButton({btn:"add-id-btn"});
			upL = new WixUpload({url:"http://localhost/tripmata/upload/upload", file:uploadFile});
			upL.Upload(function(data, status){
				loadingButton({btn:"add-id-btn", loading:false});
				if(status === "done")
				{
					let d = JSON.parse(data);

					if(d.status === "success")
					{
						loadingButton({btn:"add-id-btn"});
						postJson("hms-admin/worker", function(data, status){
							loadingButton({btn:"add-id-btn", loading:false});
							if(status === "done")
							{
								let dd = JSON.parse(data);

								if(dd.Status === "success")
								{
									$("#add-id-btn").html("<i class='check icon'></i> ID added");
									$("#add-id-btn").prop("disabled", true);

									$("#"+e+"-id-type-con").html(idType);
									$("#"+e+"-id-num-con").html(idNumber);

									setTimeout(function () {
										closeGenModal(modal);
										getElement(e+"-add-id-btn").parentNode.removeChild(getElement(e+"-add-id-btn"));
									}, 1000);
								}
								else
								{
									errorButton({btn:"add-id-btn", msg:d.Message});
								}
							}
							else
							{
								errorButton({btn:"add-id-btn", msg:"Connection error"});
							}
						},{job:"add customer id", num:idNumber, idType:idType, idImage:d.data, item_type:$("#pos-type").val(), customer:e});
					}
					else
					{
						errorButton({btn:"add-id-btn", msg:d.message});
					}
				}
				else
				{
					errorButton({btn:"add-id-btn", msg:"Connection error"});
				}
			});
		}
	}
