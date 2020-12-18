
	function loadDashboard()
	{
		let request = {
			job:"get dashboard"
		};

		//loaders
		$(".load-slip").addClass("ui placeholder");
		let load = document.getElementsByClassName("load-slip");
		for(let i = 0; i < load.length; i++)
		{
			if(load[i].getAttribute("color-store") == undefined)
			{
				load[i].setAttribute("color-store", load[i].style.color);
			}
		}
		$(".load-slip").css("color","transparent");

		postJson("hms-admin/worker", function(data, status){

			$(".load-slip").removeClass("ui placeholder");
			let load = document.getElementsByClassName("load-slip");
			for(let i = 0; i < load.length; i++)
			{
				if(load[i].getAttribute("color-store") != null)
				{
					load[i].style.color = load[i].getAttribute("color-store");
				}
			}

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					if(d.data.Trendingroom != null)
					{
						if ((getElement("trending-room-item") != null) && (d.data.Trendingroom.Images.length > 0))
						{
							getElement("trending-room-item").style.backgroundImage = "url('files/" + d.data.Trendingroom.Images[0] + "')";
						}
						$("#room-item-name").html(d.data.Trendingroom.Name);
					}
					else
					{
						$("#room-item-name").html("No Data Yet")
						$("#room-item-name").css("color", "silver");
						$("#trending-room-gradient").css("background", "white");
					}
					if(d.data.Trendingfood != null)
					{
						if ((getElement("trending-food-item") != null) && (d.data.Trendingfood.Images.length > 0))
						{
							getElement("trending-food-item").style.backgroundImage = "url('files/" + d.data.Trendingfood.Images[0] + "')";
						}
						$("#food-item-name").html(d.data.Trendingfood.Name);
					}
					else
					{
						$("#food-item-name").html("No Data Yet")
						$("#food-item-name").css("color", "silver");
						$("#trending-food-gradient").css("background", "white");
					}
					if(d.data.Trendingdrink != null)
					{
						if((getElement("trending-drink-item") != null) && (d.data.Trendingdrink.Images.length > 0))
						{
							getElement("trending-drink-item").style.backgroundImage = "url('files/"+d.data.Trendingdrink.Images[0]+"')";
						}
						$("#drink-item-name").html(d.data.Trendingdrink.Name);
					}
					else
					{
						$("#drink-item-name").html("No Data Yet")
						$("#drink-item-name").css("color", "silver");
						$("#trending-drink-gradient").css("background", "white");
					}

					if(d.data.Trendingpastry != null)
					{
						if((getElement("trending-pastry-item") != null) && (d.data.Trendingpastry.Images.length > 0))
						{
							getElement("trending-pastry-item").style.backgroundImage = "url('files/"+d.data.Trendingpastry.Images[0]+"')";
						}
						$("#pastry-item-name").html(d.data.Trendingpastry.Name);
					}
					else
					{
						$("#pastry-item-name").html("No Data Yet")
						$("#pastry-item-name").css("color", "silver");
						$("#trending-pastry-gradient").css("background", "white");
					}


					//Do messages
					$("#version-con").html(d.data.Version);

					$("#admin-theme").html(d.data.Admintheme);
					$("#client-theme").html(d.data.Webfronttheme);


					$("#new-message-con").html(d.data.Newmessages);
					$("#unread-message-con").html(d.data.Unreadmessages);

					if(Number(d.data.Newmessages) > 0)
					{
						$("#message-alert").removeClass("slash");
						$("#message-alert").addClass("red");
						$("#message-alert").transition("set looping").transition('tada','1000ms');

						$("#new-message-con").addClass("green");
					}
					if(Number(d.data.Newmessages) > 0)
					{
						$("#unread-message-con").addClass("green");
					}

					//Working out head blog post
					$("#blog-heading").html(d.data.Blog.Heading);
					$("#blog-sub-heading").html(d.data.Blog.Subheading);
					$("#learn-more-path").html("<h6>Learn More</h6>");
					$("#learn-more-path").attr("href", d.data.Blog.Path);
					getElement("blog-back").style.backgroundImage = "url('"+d.data.Blog.Cover+"')";

					//working out postfeed
					if(d.data.Feed.length > 0)
					{
						for(let i = 0; i < d.data.Feed.length; i++)
						{
							let con = document.createElement("div");

							if(d.data.Feed[i].Images.length > 0)
							{
								con.className = "w3-row";
								con.style.borderBottom = "1px solid lightgray";

								let content =
									"<div class='w3-col l3 m3 s3'>" +
									"<img src='"+d.data.Feed[i].Images[0]+"' style='width: 100%; margin-top: 10px;'/>" +
									"</div>" +
									"<div class='w3-col l9 m9 s9 pad-1'>" +
									"<h5 class='sleak'>"+
									(d.data.Feed[i].Path != "" ? "<i class='linkify green-txt icon'></i>" : "")+
									d.data.Feed[i].Heading+"</h5>" +
									"<h6 style='font-family: Lato; color: dimgray; font-size: 12px;'>"+
									d.data.Feed[i].Subheading+"</h6>" +
									"</div>";

								if(d.data.Feed[i].Path != "")
								{
									con.className += " hoverable";
									con.innerHTML = "<a href='"+d.data.Feed[i].Path+"' target='_blank'>"+content+"</a>";
								}
								else
								{
									con.innerHTML = content;
								}
							}
							else
							{
								con.style.borderBottom = "1px solid lightgray";

								let content =
									"<div class='pad-1'>" +
									"<h5 class='sleak'>"+
									(d.data.Feed[i].Path != "" ? "<i class='linkify green-txt icon'></i>" : "")+
									d.data.Feed[i].Heading+"</h5>" +
									"<h6 style='font-family: Lato; color: dimgray; font-size: 12px;'>"+
									d.data.Feed[i].Subheading+"</h6>" +
									"</div>";

								if(d.data.Feed[i].Path != "")
								{
									con.className += " hoverable";
									con.innerHTML = "<a href='"+d.data.Feed[i].Path+"' target='_blank'>"+content+"</a>";
								}
								else
								{
									con.innerHTML = content;
								}
							}
							getElement("feed-con").appendChild(con);
						}
					}
					else
					{
						let con = document.createElement("div");
						con.className = "pad-1 align-c";
						con.innerHTML =
							"<h1 class='ui header' style='font-weight: normal; color: silver; text-align: center; " +
							"line-height: 160%; margin-top: 20px;'>" +
							"<i class='rss icon'></i>" +
							"</h1>" +
							"<h6 class='sleak' style='color: silver;'>No feed at the moment</h6>";

						getElement("feed-con").appendChild(con);
					}

					if(d.data.Staff.length > 0)
					{
						getElement("staff-of-month").innerHTML =
							"<img src='files/"+d.data.Staff[0].Passport+"' style='width: 120px; " +
							"border-radius: 50%; border: 3px solid white; position: absolute; left: 10px;" +
							" background-color: white; z-index: 3;'/>" +
							"<img src='files/"+d.data.Staff[0].Fullshot+"' style='width: 120px; " +
							"border-radius: 50%; border: 3px solid white; position: absolute; left: 40px;" +
							" background-color: white; z-index: 2;'/>";

						$("#staff-of-month-name").html(
							"<h6 class='sleak' style='font-weight: bold;'>"+d.data.Staff[0].Name+" "+d.data.Staff[0].Surname+"</h6>" +
							"<h6 class='sleak' style='color: dimgray;'><small>"+d.data.Staff[0].Department.Name+"</small></h6>");
					}
					else
					{
						getElement("staff-of-month").innerHTML =
							"<img src='"+cdn+"images/icons/pastel/customer.png' style='width: 100px; " +
							"border-radius: 50%; border: 3px solid gray; position: absolute; left: 10px;" +
							" background-color: white; z-index: 3;'/>" +
							"<img src='"+cdn+"images/icons/pastel/customer.png' style='width: 100px; " +
							"border-radius: 50%; border: 3px solid gray; position: absolute; left: 40px;" +
							" background-color: white; z-index: 2;'/>";

						$("#staff-of-month-name").html(
							"<h6 class='sleak' style='font-weight: bold;'>Staff fullname</h6>" +
							"<h6 class='sleak' style='color: dimgray;'><small>Department</small></h6>");
					}

					if(d.data.Announcement.length > 0)
					{
						for(let i = 0; i < d.data.Announcement.length; i++)
						{
							let con = document.createElement("div");
							con.style.borderBottom = "1px solid lightgray";
							con.className = "pad-1";
							con.innerHTML = "<h6 style='font-family: Lato; color: dimgray; " +
								"line-height: 160%; font-size: 13px;'>"+
								d.data.Announcement[i].Body+"</h6>";

							getElement("announce-con").appendChild(con);
						}
					}
					else
					{
						let con = document.createElement("div");
						con.className = "pad-1 align-c";
						con.innerHTML =
							"<h1 class='ui header' style='font-weight: normal; color: silver; text-align: center; " +
							"line-height: 160%; margin-top: 20px;'>" +
							"<i class='bullhorn icon'></i>" +
							"</h1>" +
							"<h6 class='sleak' style='color: silver;'>No announcements at the moment</h6>";

						getElement("announce-con").appendChild(con);
					}
				}
				else
				{
					$(".settings-text").css("color","lightgray");
					$(".settings-control").prop("disabled", true);
					$("#error-pane-text").html(d.status);
					$("#error-pane").transition("drop in");


					$(".load-slip").removeClass("ui placeholder");
					$(".load-slip").css("color", "silver");
				}
			}
			else
			{
				$(".settings-text").css("color","lightgray");
				$(".settings-control").prop("disabled", true);
				$("#error-pane-text").html("Connection error. Check your connection and try again");
				$("#error-pane").transition("drop in");


				$(".load-slip").removeClass("ui placeholder");
				$(".load-slip").css("color", "silver");
			}
		},request);
	}

	function populateCustomers(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "sort by";
		request.Filtervalue = "created";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}
		if($("#filter").dropdown('get value') != "")
		{
			//request.Filter = $("#filter").dropdown('get value');
		}


		if(request.Filter == "search list")
		{
			request.Filtervalue = $("#search-txt").val();
		}
		if(request.Filter == "sort by")
		{
			//request.Filtervalue = $("#default-order").val();
		}
		if(request.Filter == "filter by country")
		{
			request.Filtervalue = $("#filter-country").val();
		}
		if(request.Filter == "filter by state")
		{
			request.Filtervalue = $("#filter-state").val();
		}
		if(request.Filter == "filter by city")
		{
			request.Filtervalue = $("#filter-city").val();
		}

		if(request.Filter == "filter by status")
		{
			request.Filtervalue = $("#filter-status").val();
		}

		$("#table-body").html(tableLoader(7));

		postJson(api+"/getcustomers", function(data, status){
			$("#table-body").html("");

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);

					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateCustomers"));

					if(d.data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Customers list is empty</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.data[i].Profilepic != "" ?
							"<img src='files/"+d.data[i].Profilepic+"' style='width: 50px; border-radius: 50%;'/>" :
							(((d.data[i].Sex == "male") || (d.data[i].Sex == "")) ?
								"<img src='"+cdn+"/images/icons/pastel/customer.png' style='width: 50px;'/>" :
								"<img src='"+cdn+"/images/icons/pastel/customer.png' style='width: 50px; border-radius: 50%;'/>");


						let td2 = document.createElement("td");
						td2.innerHTML = "<span class='blue-text'>"+d.data[i].Name+" "+d.data[i].Surname+"</span><br/>" +
                        "<span style='color: silver;'>Email: </span><span style='color: dimgray;'>"+
                        d.data[i].InternalEmail+"</span><br/>" +
                        "<span style='color: silver;'>Phone: </span><span style='color: dimgray;'>"
                        +d.data[i].Phone+"</span>";

						let td3 = document.createElement("td");
						td3.innerHTML = "<span style='color: silver;'>Registered: </span><span style='color: dimgray;'>"+
                        d.data[i].Created.WeekDay+" - "+d.data[i].Created.Day+"/"+d.data[i].Created.MonthName+"/"+d.data[i].Created.Year+"</span><br/>" +
                        "<span style='color: silver;'>Last seen: </span><span style='color: dimgray;'>"
                        +d.data[i].Lastseen.WeekDay+" - "+d.data[i].Lastseen.Day+"/"+d.data[i].Lastseen.MonthName+"/"+d.data[i].Lastseen.Year+"</span>";

						let td4 = document.createElement("td");
						td4.innerHTML = d.data[i].Guestid != "" ?
							"<span class='blue-back status'>"+d.data[i].Guestid+"</span>" :
							"<span class='red-back status'>No guest</span>";

						let td5 = document.createElement("td");
						td5.innerHTML = d.data[i].isLodged ? "<span class='green-back status'>Lodged</span>" :
							"<span class='yellow-back status'>not-lodged</span>";

						let td6 = document.createElement("td");
						td6.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + d.data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<a href='#customer/"+d.data[i].Id+"' class='item'><i class='male icon'></i> Profile</a>" +
                        "<div class='item' onclick=\"editContestant('" + d.data[i].Id + "')\"><i class='sign in icon'></i> Login As Customer</div>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"editContestant('" + d.data[i].Id + "')\"><i class='address book icon'></i>Add to custom list</div>" +
						"<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"ConfirmCustomerDelete('" + d.data[i].Id + "')\"><i class='trash icon'></i> Delete</div>" +
                        "</div>" +
                        "</div></div>";


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

	function populateBanner(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "all";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(7));

		postJson(api+"/listbanner", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateBanner"));

					if(d.data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>banner list is empty</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.data[i].Image+"' style='width: 150px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.data[i].Text;

						let td3 = document.createElement("td");
						td3.innerHTML = d.data[i].Subtext;

						let td4 = document.createElement("td");
						td4.innerHTML = d.data[i].Sort;

						let td5 = document.createElement("td");
						let status = d.data[i].Status ? "checked" : "";
						td5.innerHTML = "<div class='switch'><label>" +
							"<input type='checkbox' "+status+" onchange=\"SetBanner_Status(this, '"+d.data[i].Id+"')\"/>" +
							"<span class='lever'></span></label></div>";


						let td6 = document.createElement("td");
						td6.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#new-banner/"+d.data[i].Id+"' class='item'><i class='pencil icon'></i>Edit banner</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmBannerDelete('" + d.data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
							"</div>" +
							"</div></div>";


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
				else if(d.status === "access denied")
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

	function populateFaqcategory(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "";
		request.job = "get faq category";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#faq-cat-perpage").dropdown('get value') !== "")
		{
			request.Perpage = $("#faq-cat-perpage").dropdown('get value');
		}

		$("#faq-cat-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){

			$("#faq-cat-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#faq-cat-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaqcategory"));

					if(d.data.length === 0)
					{
						$("#faq-cat-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty FAQ category list returned</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = sn;

						let td1 = document.createElement("td");
						td1.innerHTML = d.data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = d.data[i].Sort;

						let td3 = document.createElement("td");
						let ch = d.data[i].Status ? "checked" : "";
						td3.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetFaqcategory_Status(this, '"+d.data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td4 = document.createElement("td");
						td4.innerHTML = "<span><i class='green pencil icon' style='cursor: pointer;' onclick=\"editFaqcategory('"+escape(JSON.stringify(d.data[i]))+"')\"></i></span>" +
						"&nbsp;&nbsp;&nbsp;<span><i id='faqcat-del-btn-"+d.data[i].Id+"' class='red trash icon' style='cursor: pointer;' onclick=\"ConfirmFaqcategoryDelete('" + d.data[i].Id + "')\"></i></span>";


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);

						sn++;

						document.getElementById("faq-cat-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.status === "ACCESS_DENIED")
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

	function populateFaq(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get faq";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		$("#table-body").html(tableLoader(6));

		postJson("hms-admin/worker", function(data, status){

			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					if(d.data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty FAQ list returned</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.data[i].Question;

						let td2 = document.createElement("td");
						td2.innerHTML = d.data[i].Category.Name;

						let td3 = document.createElement("td");
                        td3.innerHTML = d.data[i].Sort;

						let td4 = document.createElement("td");
                        let ch = d.data[i].Status ? "checked" : "";
                        td4.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetFaq_Status(this, '"+d.data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td5 = document.createElement("td");
						td5.innerHTML = "<div class='w3-container'> " +
						"<div id='"+ d.data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
						"<i class='blue wrench icon'></i>" +
						"<div class='menu'>" +
						"<div class='header'>Action</div>" +
						"<div class='item' onclick=\"viewFaqAnswer('" + escape(JSON.stringify(d.data[i])) + "')\"><i class='question circle icon'></i>View Answer</div>" +
						"<a class='item' href='#new-faq/"+ d.data[i].Id + "'><i class='pencil icon'></i>Edit FAQ</a>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"ConfirmFaqDelete('" + d.data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
						"</div>" +
						"</div></div>";


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
				else if(d.status === "access denied")
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

	function populateGalleryContent(func)
	{
		$("#gallery-content").html("");

		getElement("gallery-content").appendChild(div({
			add:imageTextPlaceholder()+
				imageTextPlaceholder()+
				imageTextPlaceholder()+
				imageTextPlaceholder()
			}));


		postJson("hms-admin/worker", function(data, status){
			$("#gallery-content").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					for(let i = 0; i < d.data.length; i++)
                    {
                        let ch = d.data[i].Status ? "checked" : "";

                        getElement("gallery-content").appendChild(div({
                            add:"<div id='gallery-item-"+i+"' class='w3-col l3 m6 s12 pad-1 galeries'>" +

                                "<div class='lift-1'>" +

                                "<input id='gallery-id-"+i+"' type='hidden' value='"+d.data[i].Id+"'/>" +
                                "<input id='gallery-image-name-"+i+"' type='hidden' value='"+d.data[i].Image+"'/>" +

                                "<div style='height: 200px; background-color: whitesmoke; position: relative;'>" +
                                "<img id='gallery-image-"+i+"' src='files/"+d.data[i].Image+"' style='width: 100%;'/>" +
                                "<div id='gallery-sort-con-"+i+"' class='ui mini labeled input' " +
                                "style='background-color: transparent; position: absolute; left: 0px; top: 0px;'> " +
                                "<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
                                "<input id='gallery-sort-"+i+"' type='number' value='"+d.data[i].Sort+"' " +
                                "style='width: 60px; border-radius: 0px;'  onchange=\"saveGallery('"+i+"')\"/>" +
                                "</div>" +
                                "<button id='gallery-btn-"+i+"' class='ui circular icon green-back button' "+
                                "style='position: absolute; top: 0px; right: 0px;' onclick=\"getElement('gallery-file-"+i+"').click()\">" +
                                "<i class='image icon'></i></button>" +
                                "<button id='gallery-delete-btn-"+i+"' class='ui circular icon red button' "+
                                "style='position: absolute; top: 0px; right: 30px;' onclick=\"confirmGalleryItemDelete('"+i+"')\">" +
                                "<i class='trash icon'></i></button>" +
                                "<input id='gallery-file-"+i+"' type='file' onchange=\"processGalleryImage(this, '"+i+"')\" style='display: none;'/>" +
                                "</div>" +
                                "<div class='pad-1'>" +
                                "<div class='ui fluid input'>" +
                                "<input id='gallery-heading-"+i+"' class='wix-textbox' type='textbox' placeholder='Heading' style='margin-top: 5px; border-radius: 0px;'" +
                                " onchange=\"saveGallery('"+i+"')\" value='"+d.data[i].Heading+"' onkeyup='checkGalleryPlaceholders()'/>" +
                                "</div>" +
                                "<div class='ui form' style='margin-top: 5px;'>" +
                                "<div class='field'>" +
                                "<textarea id='gallery-description-"+i+"' class='wix-textbox' rows='1' placeholder='short description'" +
                                " onchange=\"saveGallery('"+i+"')\" onkeyup='checkGalleryPlaceholders()' style='border-radius: 0px;'>"+d.data[i].Description+"</textarea>" +
                                "</div>" +
                                "</div>" +
                                "<div class='switch' style='float: right; margin-top: 5px;'>" +
                                "<label>" +
                                "<input type='checkbox' id='gallery-status-"+i+"' "+ch+" onchange=\"saveGallery('"+i+"')\"/><span class='lever'></span></label></div>" +
                                "<h6 id='gallery-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
                                "</div>" +

                                "</div>" +

                                "</div>"
                        }));
                    }
				}
				else
				{

				}
				if(typeof func == "function")
				{
					func();
				}
			}
			else
			{

			}
		},{job:"get gallery"});
	}

	function populateTestimonialContent(func)
	{
		$("#testimonial-content").html("");

		getElement("testimonial-content").appendChild(div({
			add:testimonialPlaceholder()+
				testimonialPlaceholder()
		}));


		postJson("hms-admin/worker", function(data, status){
			$("#testimonial-content").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				let i = 0;

				if(d.status === "success")
				{
					for(; i < d.data.length; i++)
					{
						let ch = d.data[i].Status ? "checked" : "";

						getElement("testimonial-content").appendChild(div({
							add:"<div id='testimonial-item-"+i+"' class='w3-row pad-1 testimonial' style=''>" +

								"<div class='lift-1'>" +

								"<input id='testimonial-id-"+i+"' type='hidden' value='"+d.data[i].Id+"'/>" +
								"<input id='testimonial-image-name-"+i+"' type='hidden' value='"+d.data[i].Image+"'/>" +


								"<div class='w3-col l2 m2 s12 pad-2'>" +
								"<div class='switch' style='float: right; margin-top: 5px;'>" +
								"<label>" +
								"<input type='checkbox' id='testimonial-status-"+i+"' "+ch+" onchange=\"saveTestimonial('"+i+"')\"/><span class='lever'></span></label>" +
								"</div>" +
								"<h6 id='testimonial-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
								"<br/>" +
								"<div id='testimonial-sort-con-"+i+"' class='ui mini fluid labeled input' " +
								"style=''> " +
								"<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
								"<input id='testimonial-sort-"+i+"' type='number' value='"+d.data[i].Sort+"' " +
								"style='width: 60px; border-radius: 0px;'  onchange=\"saveTestimonial('"+i+"')\"/>" +
								"</div><br/>" +

								"<div id='testimonial-rating-"+i+"' class='ui star big rating' data-rating='"+d.data[i].Rating+"'" +
								" onclick=\"ratingSaveTestimonial('"+i+"')\"></div> "+

								"<br/>" +
								"<button id='testimonial-delete-btn-"+d.data[i].Id+"' class='ui circular icon red button' "+
								"style='left: 30px;' onclick=\"confirmTestimonialItemDelete('"+i+"')\">" +
								"<i class='trash icon'></i></button>" +

								"</div> " +


								"<div class='w3-col l3 m3 s12 pad-2'>" +
								"<div class='l-width-l m-width-xl' style='height: 200px; background-color: whitesmoke; position: relative; border-radius: 0px;'>" +
								"<img id='testimonial-image-"+i+"' src='files/"+d.data[i].Image+"' style='width: 100%;'/>" +
								"<button id='testimonial-btn-"+i+"' class='ui circular icon green-back button' "+
								"style='position: absolute; top: 0px; left: 0px;' onclick=\"getElement('testimonial-file-"+i+"').click()\">" +
								"<i class='image icon'></i></button>" +
								"<input id='testimonial-file-"+i+"' type='file' onchange=\"processTestimonialImage(this, '"+i+"')\" style='display: none;'/>" +
								"</div>" +
								"</div>" +


								"<div class='w3-col l7 m7 s12 pad-2'>" +
								"<div class=''>" +
								"<div class='ui fluid input'>" +
								"<input id='testimonial-name-"+i+"' class='wix-textbox' type='textbox' placeholder='Name' style='margin-top: 5px; border-radius: 0px;'" +
								" onchange=\"saveTestimonial('"+i+"')\" value='"+d.data[i].Name+"' onkeyup='checkTestimonialPlaceholders()'/>" +
								"</div>" +
								"<div class='ui form' style='margin-top: 5px;'>" +
								"<div class='field'>" +
								"<textarea id='testimonial-description-"+i+"' class='wix-textbox' rows='3' placeholder='Testimony'" +
								" onchange=\"saveTestimonial('"+i+"')\" onkeyup='checkTestimonialPlaceholders()' style='border-radius: 0px;'>"+d.data[i].Body+"</textarea>" +
								"</div>" +
								"</div>" +

								"</div>" +
								"</div>" +

								"</div>" +

								"</div>"
						}));

						$("#testimonial-rating-"+i).rating({maxRating: 5});
					}
				}
				else
				{

				}
				if(typeof func == "function")
				{
					func(i);
				}
			}
			else
			{

			}
		},{job:"get testimonial"});
	}

	function populateSettings()
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function (data, status) {
			$("#page").removeClass("ui loading form");
			if(status === "done") {

				let d = JSON.parse(data);

				if (d.status === "success")
				{
					$("#hotel-name").val(d.data.Name);
					$("#hotel-phone1").val(d.data.Phone1);
					$("#hotel-phone2").val(d.data.Phone2);
					$("#hotel-email1").val(d.data.Email1);
					$("#hotel-email2").val(d.data.Email2);
					$("#hotel-adddress").val(d.data.Address);
					$("#hotel-country").dropdown("set selected", d.data.Country);
					$("#hotel-state").val(d.data.State);
					$("#hotel-city").val(d.data.City);


					$("#primary-color").val(d.data.Site.PrimaryColor);
					$("#primary-color").css("background-color", d.data.Site.PrimaryColor);
					$("#primary-color").css("color", "white");

					$("#secondary-color").val(d.data.Site.SecondaryColor);
					$("#secondary-color").css("background-color", d.data.Site.SecondaryColor);
					$("#secondary-color").css("color", "white");


					$("#primary-font").dropdown("set selected", d.data.Site.TextFont);
					$("#secondary-font").dropdown("set selected", d.data.Site.SecondaryFont);
					$("#bold-font").dropdown("set selected", d.data.Site.BoldFont);
					$("#sleak-font").dropdown("set selected", d.data.Site.LightFont);

					getElement("customersaddress").checked = d.data.Site.Customersaddress;
					getElement("customersselfngt").checked = d.data.Site.Customerselfdatamgt;


					if(d.data.Site.Guestformtype === "DETAILED")
					{
						getElement("detailed-check").checked = true;
					}
					else if(d.data.Site.Guestformtype === "INTERMEDIARY")
					{
						getElement("intermediary-check").checked = true;
					}
					else
					{
						getElement("simple-check").checked = true;
					}


					loadingSettings = false;
				}
				else
				{
					_page({ add: pageTop({ icon: "cog", text: "General Settings" }), clear: true });
					_page({add:"<div class='pad-3 widget lift-1'>" +
							"<div class='align-c'>" +
							"<h6 class='sleak'>" +
							"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
							d.status +
							"</h6> " +
							"<button class='ui sleak blue button' onclick='DrawGeneralSetting()'>Try again</button>" +
							"</div>" +
							"</div>", class:"l-pad-3 s-pad-1"});
				}
			}
			else
			{
				_page({ add: pageTop({ icon: "cog", text: "General Settings" }), clear: true });
				_page({add:"<div class='pad-3 widget lift-1'>" +
						"<div class='align-c'>" +
						"<h6 class='sleak'>" +
						"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
						"Connection error. Check your connection and try again" +
						"</h6> " +
						"<button class='ui sleak blue button' onclick='DrawGeneralSetting()'>Try again</button>" +
						"</div>" +
						"</div>", class:"l-pad-3 s-pad-1"});
			}
		}, {job:"get general settings"});
	}

	let loadingIntegration = false;
	function populateIntegration()
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function (data, status) {
			$("#page").removeClass("ui loading form");
			if(status === "done") {

				let d = JSON.parse(data);

				if (d.status === "success")
				{
					loadingIntegration = true;

					$("#facebook-integration").val(d.data.Facebook);
					$("#twitter-integration").val(d.data.Twitter);
					$("#google-integration").val(d.data.Google);
					$("#linkedin-integration").val(d.data.Linkedin);
					$("#whatsapp-integration").val(d.data.Whatsapp);
					$("#telegram-integration").val(d.data.Telegram);
					$("#instagram-integration").val(d.data.Instagram);


					$("#live-chat-integration").val(d.data.Livechat);
					$("#google-analytics-integration").val(d.data.Analytics);
					$("#google-tag-integration").val(d.data.Googletag);
					$("#translator-integration").val(d.data.Translator);

					$("#longitude-integration").val(d.data.Longitude);
					$("#latitude-integration").val(d.data.Latitude);
					$("#apikey-integration").val(d.data.Apikey);

					loadingIntegration = false;
				}
				else
				{
					_page({ add: pageTop({ icon: "code", text: "Integrations" }), clear: true });
					_page({add:"<div class='pad-3 widget lift-1'>" +
							"<div class='align-c'>" +
							"<h6 class='sleak'>" +
							"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
							d.status +
							"</h6> " +
							"<button class='ui sleak blue button' onclick='populateIntegration()'>Try again</button>" +
							"</div>" +
							"</div>", class:"l-pad-3 s-pad-1"});
				}
			}
			else
			{
				_page({ add: pageTop({ icon: "code", text: "Integrations" }), clear: true });
				_page({add:"<div class='pad-3 widget lift-1'>" +
						"<div class='align-c'>" +
						"<h6 class='sleak'>" +
						"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
						"Connection error. Check your connection and try again" +
						"</h6> " +
						"<button class='ui sleak blue button' onclick='populateIntegration()'>Try again</button>" +
						"</div>" +
						"</div>", class:"l-pad-3 s-pad-1"});
			}
		}, {job:"get integration data"});
	}

	let populatingCurrency = false;
	function populateCurrency()
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function (data, status) {
			$("#page").removeClass("ui loading form");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					populatingCurrency = true;

					$("#currency-name-con").html(d.data.Name);
					$("#currency-code-con").html(d.data.Code);
					$("#symbol-con").html(d.data.Symbol);
					$("#country-con").html(d.data.Country);

					$("#current-currency").dropdown("set selected", d.data.Code);


					$("#paypal-id").val(d.Gateway.Paypalid);
					$("#paypal-username").val(d.Gateway.Paypalusername);
					$("#paypal-password").val(d.Gateway.Paypalpassword);
					$("#paystack-private-key").val(d.Gateway.Paystackprivate);
					$("#paystack-public-key").val(d.Gateway.Paystackpublic);
					$("#marchant-id").val(d.Gateway.Interswitchmarchantid);

					getElement("webpay-status").checked = d.Webpay;
					getElement("no-pay-reservation").checked = d.Nopayreservation;


					populatingCurrency = false;
				}
				else
				{
					_page({ add: pageTop({ icon: "money", text: "Currency & Payment Method" }), clear: true });
					_page({add:"<div class='pad-3 widget lift-1'>" +
							"<div class='align-c'>" +
							"<h6 class='sleak'>" +
							"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
							d.status +
							"</h6> " +
							"<button class='ui sleak blue button' onclick='populateCurrency()'>Try again</button>" +
							"</div>" +
							"</div>", class:"l-pad-3 s-pad-1"});
				}
			}
			else
			{
				_page({ add: pageTop({ icon: "money", text: "Currency & Payment Method" }), clear: true });
				_page({add:"<div class='pad-3 widget lift-1'>" +
						"<div class='align-c'>" +
						"<h6 class='sleak'>" +
						"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
						"Connection error. Check your connection and try again" +
						"</h6> " +
						"<button class='ui sleak blue button' onclick='populateCurrency()'>Try again</button>" +
						"</div>" +
						"</div>", class:"l-pad-3 s-pad-1"});
			}
		},{job:"get currency"});
	}

	function populateReceivedMessages(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get messages";
		request.tab = "all";

		if($("#unresolved-messge-tab").hasClass("active"))
		{
			request.tab = "unresolved";
		}
		if($("#resolved-messge-tab").hasClass("active"))
		{
			request.tab = "resolved";
		}
		if($("#stared-messge-tab").hasClass("active"))
		{
			request.tab = "stared";
		}


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		$("#table-body").html(receivedmessageLoader()+receivedmessageLoader());

		postJson("hms-admin/worker", function(data, status){

			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{

					$("#all-count-con").html(d.Totalcount);
					$("#resolved-count-con").html(d.Resolvedcount);
					$("#unresolved-count-con").html(d.Unresolvedcount);
					$("#stared-count-con").html(d.Staredcount);

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					if(d.data.length === 0)
					{
						$("#table-body").html("<div class='align-c widget curve pad-2' style='margin-top: 5px; width: 100%;'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty message list returned</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.data[i].Id + "-row";
						row.className = "w3-row widget hoverable curve message-con";
						row.style.marginTop = "5px";
						row.style.backgroundColor = !d.data[i].Seen ? "rgb(240,255,240)" : "white";

						let snNumber = !d.data[i].Opened ? sn +" <small><small><small><i class='circle green icon' title='Unread message'></i></small></small></small>" : sn;

						let check = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + snNumber + "</span></label>";

						let star = d.data[i].Stared ?
							"<i id='"+d.data[i].Id+"-star' class='star yellow icon' style='cursor: pointer;' onclick=\"starMessage(this, '"+d.data[i].Id+"')\"></i>" :
							"<i id='"+d.data[i].Id+"-star' class='star outline icon' style='cursor: pointer;' onclick=\"starMessage(this, '"+d.data[i].Id+"')\"></i>";


						let status = d.data[i].Status ? "<label class='status green-back'>Resolved</label>" : "<label class='red-back status'>Unresolved</label>";

						row.innerHTML =
							"<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke;'>" +
							check +
							"</div> " +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke;'>" +
							"<div class='align-c'>"+star+"</div> " +
							"</div> " +
							"<a href='#open-message/"+d.data[i].Id+"'>" +
							"<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1' style='cursor: pointer;'>" +
							"<div class=''>"+status+"</div> " +
							"</div> " +
							"</a>" +
							"<a href='#open-message/"+d.data[i].Id+"'>" +
							"<div class='w3-col l6 m5 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke; cursor: pointer;'>" +
							"<div class=''><h6 class='sleak' style='margin:0px; font-family: Lato; font-size: 14px; font-weight: bold; color: black;'>"+
							shortenText(50, d.data[i].Body)+"</h6></div> " +
							"</div> " +
							"</a>" +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1'>" +
							"<div class='align-c'><i id='"+d.data[i].Id+"-btn' class='trash red icon' style='cursor: pointer;' onclick=\"ConfirmMessageDelete('"+d.data[i].Id+"')\"></i></div> " +
							"</div> ";

						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();

					setTimeout(function () {
						$(".message-con").css("background-color","white");
					},  5000);
				}
				else if(d.status === "access denied")
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

	function populateMessageTemplate(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get messagetemplate";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') !== "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		$("#table-body").html(receivedmessageLoader()+receivedmessageLoader());

		postJson("hms-admin/worker", function(data, status){

			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					$("#email-count-con").html(d.Emailcount);
					$("#sms-count-con").html(d.SMScount);

					if(d.data.length === 0)
					{
						$("#table-body").html("<div class='align-c widget curve pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Message template list is empty returned</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.data[i].Id + "-row";
						row.className = "w3-row widget hoverable curve";
						row.style.marginTop = "3px";
						row.style.cursor = "pointer";

						let check = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";
						let emailsms = d.data[i].Type == "email" ? "<h6 class='sleak' style='font-weight: bold;'><i class='green at icon'></i> Email</h6>"
							: "<h6 class='sleak' style='margin: 0px; font-weight: bold;'><i class='green mobile icon'></i> SMS</h6>";

						row.innerHTML =
							"<div class='widget w3-card curve'> " +
							"<div class='w3-row' style='border-bottom: 1px solid whitesmoke;'>" +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style=''>" +
							check +
							"</div>" +
							"<div class='w3-col l8 m7 s7 l-pad-2 s-pad-1'>" +
							"<h4 class='sleak' style='font-weight: normal;'>"+shortenText(100, d.data[i].Title, (d.data[i].Type == "sms" ? d.data[i].Body : d.data[i].Subject))+"</h4>" +
							"</div> " +
							"<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1'>" +
							"<div class=''>"+emailsms+"</div> " +
							"</div> " +
							"<div class='w3-col l1 m4 s12 l-pad-2 s-pad-1'>" +
							"<div style='float: right;' class='ui right top pointing dropdown c-menu'>" +
							"<div class=''><i class='ellipsis vertical icon'></i></div>" +
							"<div class='menu'>" +
							"<div class='item'>Import customers list</div>" +
							"<div class='item'>Import staff list</div>" +
							"<div class='item'><i class='pencil icon'></i> Edit</div>" +
							"<div class='item'><i class='trash icon'></i> Delete</div>" +
							"</div>" +
							"</div> " +
							"</div> " +
							"</div>" +


							"<div class='w3-row' style=''>" +
							"<div class='w3-col l2 m3 s3 l-pad-1 s-pad-1 align-c' style=''>" +
							"<label style='color: dimgray;'>Events <b class='blue-text'>0</b></label>" +
							"</div>" +
							"<div class='w3-col l3 m3 s3 l-pad-1 s-pad-1 align-c' style=''>" +
							"<label style='color: dimgray;'>Schedule <b class='blue-text'>0</b></label>" +
							"</div>" +
							"<div class='w3-col l7 m6 s12 l-pad-1 s-pad-1'>" +

							"</div> " +
							"</div>" +

							"</div>";

						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.status === "access denied")
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

	function populateContactList(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get contact list";
		request.tab = "all";
		request.list = $("#custom-list-id").val();

		if($("#contact-list-customer").hasClass("active"))
		{
			request.tab = "customer";
		}
		if($("#contact-list-guest").hasClass("active"))
		{
			request.tab = "guest";
		}
		if($("#contact-list-staff").hasClass("active"))
		{
			request.tab = "staff";
		}
		if($("#contact-list-subscribers").hasClass("active"))
		{
			request.tab = "subscribers";
		}
		if($("#contact-list-messaging").hasClass("active"))
		{
			request.tab = "messaging";
		}
		if($("#contact-list-custom").hasClass("active"))
		{
			request.tab = "custom";
		}



		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		$("#table-body").html(tableLoader(4));

		postJson("hms-admin/worker", function(data, status){

			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					if(d.data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='4'><div class='align-c widget curve pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty contact list returned</h6>" +
							"</div></td></tr>");
					}

					for(let i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Id+"' class='check-sel' s-data=\""+d.data[i].Id+":"+d.data[i].Type+"\" type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
                        td1.innerHTML =
						d.data[i].Type == "supplier" ?
                            (d.data[i].Company == "" ? d.data[i].Contactperson + "<br/><span style='color: silver;'>Source: <span class='blue-text'>"+d.data[i].Type+"</span></span>"
                                : d.data[i].Company + "<br/><span style='color: silver;'>Source: <span class='blue-text'>"+d.data[i].Type+"</span></span>") : d.data[i].Name + " " + d.data[i].Surname + "<br/>" +
						"<span style='color: silver;'>Source: <span class='blue-text'>"+d.data[i].Type+"</span></span>";

						let td2 = document.createElement("td");
						td2.innerHTML = "<span style='color: silver;'>Phone: </span>"+d.data[i].Phone+"<br/>" +
						"<span style='color: silver;'>Email: </span>"+d.data[i].Email;


						let td3 = document.createElement("td");


						let con3 = "";

						if(d.data[i].Type === "subscriber")
						{
							let ob = {id:d.data[i].Id, names:d.data[i].Name +' '+d.data[i].Surname, phone:d.data[i].Phone, email:d.data[i].Email};

							con3 = "<div class='w3-container'> " +
								"<div id='"+ d.data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>";

								if($("#contact-list-custom").hasClass("active"))
								{
									con3 += "<div class='item' onclick=\"removeContactfromList('"+d.data[i].Id+"','"+d.data[i].Type+"')\"><i class='minus icon'></i>Remove from this list</div>";
								}
								else
								{
									con3 += "<div class='item' onclick=\"addToContactList('"+d.data[i].Id+"','"+d.data[i].Type+"')\"><i class='plus icon'></i>Add to custom list</div>";
								}

								con3 +=
								"<div class='item' onclick=\"launchAddContact('"+escape(JSON.stringify(ob))+"')\"><i class='pencil icon'></i>Edit contact</div>" +
								"<div class='item' onclick=\"ConfirmContactDelete('"+d.data[i].Id+"')\"><i class='trash icon'></i>Delete Contact</div>" +
								"</div>" +
								"</div></div>";
						}
						else
						{
							con3 = "<div class='w3-container'> " +
								"<div id='"+ d.data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>";

								if($("#contact-list-custom").hasClass("active"))
								{
									con3 += "<div class='item' onclick=\"removeContactfromList('"+d.data[i].Id+"','"+d.data[i].Type+"')\"><i class='minus icon'></i>Remove from this list</div>";
								}
								else
								{
									con3 += "<div class='item' onclick=\"addToContactList('"+d.data[i].Id+"','"+d.data[i].Type+"')\"><i class='plus icon'></i>Add to custom list</div>";
								}

								con3 +=
								"</div>" +
								"</div></div>";
						}

						td3.innerHTML = con3;


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);

						//optional fields
						/*
                        row.appendChild(td14);
                        */

						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.status === "access denied")
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

	function populateEvent(page)
	{
		let request = {
			Page:1,
			Perpage:25,
			list:"user",
			job:"get events"
		};

		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#event-perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#event-perpage").dropdown('get value');
		}

		if($("#system-event-tab").hasClass("active"))
		{
				request.list = "system";
		}

		$("#event-table").html("<div class='widget pad-2 curve w3-card'>" +
			"<div class='ui placeholder'>"+
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div></div>");


		postJson("hms-admin/worker", function(data, status){
			$("#event-table").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$("#event-count-con").html(d.Total);

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#event-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateSchedule"));

					if(d.data.length == 0)
					{
						$("#event-table").html("<div class='widget pad-6 curve w3-card align-c'>" +
						"<img src='"+host+"cdn/images/icons/pastel/code.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>No events have been created yet</h6>" +
						"</div>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.data[i].Id + "-row";
						row.className = "widget margin-b-t hoverable curve w3-card";
						row.style.cursor = "pointer";

						let con =
							"<div class='w3-row'>" +
							"<a href='#event-detail/"+d.data[i].Id+"'>" +
							"<div class='w3-col l11 m11 s11 pad-t'>" +

							"<h6 class='sleak' style='font-weight: bold; color: rgb(80,80,80); margin-left: 10px;'>" +
							d.data[i].Title +
							"</h6>" +

							"<h6 class='sleak' style='color: gray; margin-left: 10px; font-weight: bold;'>" +
							"<small><i class='terminal red-text icon'></i> "+
							shortenText(40, d.data[i].Eventname)+
							"</small></h6>" +

							"</div>" +
							"</a>" +
							"<div class='w3-col l1 m1 s1 pad-t'>" +

							"<div style='float: right; margin-top: 7px;' class='ui right top pointing dropdown'>" +
							"<div class=''><i class='ellipsis vertical icon'></i></div>" +
							"<div class='menu'>" +

							(d.data[i].Issystem ? "<div class='item disabled'>System event</div>" :

							(d.data[i].Status ? "<div id='status-item-"+d.data[i].Id+"' cur-status='false' class='item' onclick=\"changeEventStatus('"+d.data[i].Id+"',this)\">Stop listening</div>" :
								"<div id='status-item-"+d.data[i].Id+"' cur-status='true' class='item' onclick=\"changeEventStatus('"+d.data[i].Id+"',this)\">Start listening</div>")
							)+

							(d.data[i].Issystem ? "<div class='item disabled'>System event</div>" :
								"<a href='#new-event-listener/"+d.data[i].Id+"' class='item'>Edit event</a>")+

							"<div class='divider'></div>" +
							"<div class='item' onclick=\"ConfirmEventlistenerDelete('"+d.data[i].Id+"')\">Delete event</div>" +
							"</div>" +
							"</div> " +

							"</div>" +
							"</div><hr style='margin: 0px; padding: 0px;'/>" +

							"<a href='#event-detail/"+d.data[i].Id+"'>" +
							"<div class='w3-row'>" +
							"<div class='w3-col l7 m7 s7'> " +
							"<div class='pad-t'>" +
							"<h6 id='status-con-"+d.data[i].Id+"' class='sleak' style='margin-left: 10px; color: dimgray; font-weight: bold;'>" +
							(d.data[i].Status ?
								"<span class='small-blue-pulse'></span> &nbsp;&nbsp;<small>Listening..." :
								"<span class='red-back' style='display: inline-block; border-radius: 50%; " +
								"height: 6px; width: 6px;'></span>" +
								" &nbsp;&nbsp;<small>Pending..") +
							"</small></h6>" +
							"</div>" +
							"</div>" +
							"<div class='w3-col l5 m5 s5'>" +
							"<h6 class='sleak blue-text' style='font-weight: bold; float: right; margin-right: 10px;'>" +
							"<small><i class='"+(d.data[i].Message.Type == "sms" ? "mobile" : "at")+
							" icon'></i> "+(d.data[i].Message.Type)+"</small></h6>" +
							"<h6 class='sleak green-text' style='font-weight: bold;'>" +
							"<small><i class='code icon'></i> "+(d.data[i].Firecount)+"</small></h6>" +
							"</div> " +
							"</div>" +
							"</a>";

						row.innerHTML =  con;
						getElement("event-table").appendChild(row);
					}
					$(".ui.dropdown").dropdown();
				}
				else if(d.status == "access_denied")
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

	function populateSchedule(page)
	{
		let request = {
			Page:1,
			Perpage:25,
			list:"user",
			job:"get message schedule"
		};

		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#schedule-perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#schedule-perpage").dropdown('get value');
		}

		if($("#system-schedule-tab").hasClass("active"))
		{
			request.list = "system";
		}

		$("#schedule-table").html("<div class='widget pad-2 curve w3-card'>" +
			"<div class='ui placeholder'>"+
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"<div class='line'></div>" +
			"</div></div>");


		postJson("hms-admin/worker", function(data, status){
			$("#schedule-table").html("");
			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.status == "success")
				{
					$("#schedule-count-con").html(d.Total);

					if(d.Total > 0)
					{
						plotGraph(((d.Completed / d.Total) * (100.0 / 1.0)).toFixed(2));
					}
					else
					{
						plotGraph(0);
					}

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#schedule-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateSchedule"));

					if(d.data.length == 0)
					{
						$("#schedule-table").html("<div class='widget pad-6 curve w3-card align-c'>" +
							"<img src='"+host+"cdn/images/icons/pastel/schedule.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No schedules have been created yet</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.data[i].Id + "-row";
						row.className = "widget margin-b-t hoverable curve w3-card";
						row.style.cursor = "pointer";

						let con =
							"<div class='w3-row'>" +
							"<a href='#schedule-detail/"+d.data[i].Id+"'>" +
							"<div class='w3-col l11 m11 s11 pad-t'>" +

							"<h6 class='sleak' style='font-weight: bold; color: rgb(80,80,80); margin-left: 10px;'>" +
							d.data[i].Title +
							"</h6>" +

							"<h6 class='sleak' style='color: gray; margin-left: 10px; font-weight: bold;'>" +
							"<small><i class='open envelope blue-text icon'></i> "+
							shortenText(40, d.data[i].Message.Title, (d.data[i].Message.Type == "sms" ?
								d.data[i].Message.Body : d.data[i].Message.Subject))+
							"</small></h6>" +

							"</div>" +
							"</a>" +
							"<div class='w3-col l1 m1 s1 pad-t'>" +

							"<div style='float: right; margin-top: 7px;' class='ui right top pointing dropdown'>" +
							"<div class=''><i class='ellipsis vertical icon'></i></div>" +
							"<div class='menu'>" +

							(d.data[i].Issystem ? "<div class='item disabled'>System schedule</div>" :
							"<a href='#new-shchedule/"+d.data[i].Id+"' class='item'>Edit schedule</a>")+

							"<div class='divider'></div>" +
							"<div class='item' onclick=\"ConfirmMessagescheduleDelete('"+d.data[i].Id+"')\">Delete schedule</div>" +
							"</div>" +
							"</div> " +

							"</div>" +
							"</div><hr style='margin: 0px; padding: 0px;'/>" +

							"<a href='#schedule-detail/"+d.data[i].Id+"'>" +
							"<div class='w3-row'>" +
							"<div class='w3-col l7 m7 s7'> " +
							"<div class='pad-t'>" +
							"<h6 id='status-con-"+d.data[i].Id+"' class='sleak' style='margin-left: 10px; color: dimgray; font-weight: bold;'>" +
							(!d.data[i].Completed ?
								"<i class='stopwatch green-text icon'></i> &nbsp;<small>Waiting.." :
								"<small><i class='check blue-text icon'></i></small> &nbsp;<small>Completed") +
							"</small></h6>" +
							"</div>" +
							"</div>" +
							"<div class='w3-col l5 m5 s5'>" +
							"<h6 class='sleak blue-text' style='font-weight: bold; float: right; margin-right: 10px;'>" +
							"<small><i class='"+(d.data[i].Message.Type == "sms" ? "mobile" : "at")+
							" icon'></i> "+(d.data[i].Message.Type)+"</small></h6>" +
							"</div> " +
							"</div>" +
							"</a>";

						row.innerHTML =  con;
						getElement("schedule-table").appendChild(row);
					}
					$(".ui.dropdown").dropdown();
				}
				else if(d.status == "access_denied")
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

	function populateGeneralSettings()
	{
		let request = {
			item_type : $("#inventory-item-type").val(),
			job:"get settings"
		};

		//settings page loading
		//$(".settings-con").addClass("ui loading form");
		$(".settings-control").prop("disabled", true);
		$(".settings-text").addClass("ui placeholder");
		$(".settings-text").css("color","transparent");

		postJson("hms-admin/worker", function(data, status){
			$(".settings-text").removeClass("ui placeholder");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					$(".settings-control").prop("disabled", false);
					$(".settings-text").css("color","dimgray");


					$("#receipt-name").html(d.data.Receipttemplate);

					if(getElement("receipt-image") != null)
					{
						getElement("receipt-image").src = host+"/hms/pages/receipt/"+d.data.Receipttemplate+"/default.jpg";
					}

					$("#receipttemplate").val(d.data.Receipttemplate);
					$("#lowstockemail").val(d.data.Lowstockemail);
					$("#lowstockphone").val(d.data.Lowstockphone);
					$("#onlineorderphone").val(d.data.Onlineorderphone);
					getElement("receiptaddess").checked = d.data.Receiptaddress;
					getElement("receiptemail").checked = d.data.Receiptemail;
					getElement("receiptlogo").checked = d.data.Receiptlogo;
					getElement("receiptsalutation").checked = d.data.Receiptsalutation;
					getElement("cash_pay").checked = d.data.Cash;
					getElement("pos_pay").checked = d.data.Pos;

					getElement("online_pay").checked = d.data.Online;
					getElement("other_pay").checked = d.data.Others;
					getElement("refund").checked = d.data.Refund;
					getElement("compound_tax").checked = d.data.Compundtax;

					$("#salutation").val(d.data.Salutation);

					if(d.data.Papertype === "a4")
					{
						getElement("a4").checked = true;
						getElement("letter").checked = false;
						getElement("mm58").checked = false;
						getElement("mm80").checked = false;
					}
					if(d.data.Papertype === "letter")
					{
						getElement("a4").checked = false;
						getElement("letter").checked = true;
						getElement("mm58").checked = false;
						getElement("mm80").checked = false;
					}
					if(d.data.Papertype === "58mm")
					{
						getElement("a4").checked = false;
						getElement("letter").checked = false;
						getElement("mm58").checked = true;
						getElement("mm80").checked = false;
					}
					if(d.data.Papertype === "80mm")
					{
						getElement("a4").checked = false;
						getElement("letter").checked = false;
						getElement("mm58").checked = false;
						getElement("mm80").checked = true;
					}
				}
				else
				{
					$(".settings-text").css("color","lightgray");
					$(".settings-control").prop("disabled", true);
                    $("#error-pane-text").html(d.status);
                    $("#error-pane").transition("drop in");
				}
			}
			else
			{
				$(".settings-text").css("color","lightgray");
				$(".settings-control").prop("disabled", true);
                $("#error-pane-text").html("Connection error. Check your connection and try again");
                $("#error-pane").transition("drop in");
			}
		},request);
	}

    function populateMessageSettings()
    {
        let request = {
            item_type : $("#inventory-item-type").val(),
            job:"get message settings"
        };

        $(".settings-control").prop("disabled", true);
        $(".settings-text").addClass("ui placeholder");
        $(".settings-text").css("color","transparent");

        postJson("hms-admin/worker", function(data, status){
            $(".settings-text").removeClass("ui placeholder");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $(".settings-control").prop("disabled", false);
                    $(".settings-text").css("color","dimgray");


                    $("#sms-unti-con").html(d.SMSUnits);
                    $("#low-unit-phone").val(d.data.Lowunitphone);
                    $("#ononiru-message-api-key").val(d.data.Ononiruapikey);
                    $("#low-uint-point").val(d.data.Lowunitpoint);

                    $("#buy_units_link").attr("href", "https://gigahotels.com/client/smsunits/"+d.token);

                    if(d.data.Tagprocessing === "remove")
                    {
                        getElement("remove-tag").checked = true;
                        getElement("leave-tag").checked = false;
                        getElement("cancel-tag").checked = false;
                    }
                    if(d.data.Tagprocessing === "leave")
                    {
                        getElement("remove-tag").checked = false;
                        getElement("leave-tag").checked = true;
                        getElement("cancel-tag").checked = false;
                    }
                    if(d.data.Tagprocessing === "cancel")
                    {
                        getElement("remove-tag").checked = false;
                        getElement("leave-tag").checked = false;
                        getElement("cancel-tag").checked = true;
                    }
                }
                else
                {
                    $(".settings-text").css("color","lightgray");
                    $(".settings-control").prop("disabled", true);
                    $("#error-pane-text").html(d.status);
                    $("#error-pane").transition("drop in");
                }
            }
            else
            {
                $(".settings-text").css("color","lightgray");
                $(".settings-control").prop("disabled", true);
                $("#error-pane-text").html("Connection error. Check your connection and try again");
                $("#error-pane").transition("drop in");
            }
        },request);
    }

    function populateCustomer()
    {
        let request = {
            customerid:getArg(),
            job:"get customer"
        };

        //loaders
        $(".load-slip").addClass("ui placeholder");
        let load = document.getElementsByClassName("load-slip");
        for(let i = 0; i < load.length; i++)
        {
            if(load[i].getAttribute("color-store") == undefined)
            {
                load[i].setAttribute("color-store", load[i].style.color);
            }
        }
        $(".load-slip").css("color","transparent");

        postJson("hms-admin/worker", function(data, status){

            $(".load-slip").removeClass("ui placeholder");
            let load = document.getElementsByClassName("load-slip");
            for(let i = 0; i < load.length; i++)
            {
                if(load[i].getAttribute("color-store") != null)
                {
                    load[i].style.color = load[i].getAttribute("color-store");
                }
            }

            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    if(d.data.Profilepic == "")
                    {
                        $("#profile-img-con").html(
                            "<div class='pad-4'>" +
                            "<img id='profile-img' src='"+
                            cdn+"images/icons/pastel/customer.png' style='max-width: 100%;'/>" +
                            "</div>");
                    }
                    else
                    {
                        $("#profile-img-con").html(
                            "<div>" +
                            "<img id='profile-img' src='files/"+
                            d.data.Profilepic+"' style='max-width: 100%;'/>" +
                            "</div>");
                    }

                    $("#creation-date").html(d.data.Created.WeekDay+", "+d.data.Created.Day+"/"+d.data.Created.MonthName+"/"+d.data.Created.Year);
                    $("#customer-name").html(d.data.Name+" "+d.data.Surname);

                    $("#salutation").html(d.data.Salutation != "" ? d.data.Salutation : "<span style='color: silver;'>Salutation</span>");
                    $("#occupation").html(d.data.Occupation != "" ? d.data.Occupation : "<span style='color: silver;'>Occupation</span>");
                    $("#gender").html(d.data.Sex != "" ? d.data.Sex : "<span style='color: silver;'>Gender</span>");

                    $("#dob").html(d.data.Dateofbirth.Year < 1980 ? "<span style='color: silver;'>DOB</span>" :
                        d.data.Dateofbirth.Day+"/"+d.data.Dateofbirth.Month+"/"+d.data.Dateofbirth.Year);
                    $("#lastseen").html(d.data.Lastseen.Year < 1980 ? "<span style='color: silver;'>Lastseen</span>" :
                        d.data.Lastseen.WeekDay+", "+d.data.Lastseen.Day+"/"+d.data.Lastseen.Month+"/"+d.data.Lastseen.Year+" - "+
                    d.data.Lastseen.Hour+":"+d.data.Lastseen.Miniute);

                    $("#country").html(d.data.Country != "" ? d.data.Country : "<span style='color: silver;'>Country</span>");
                    $("#city").html(d.data.City != "" ? d.data.City : "<span style='color: silver;'>City</span>");
                    $("#state").html(d.data.State != "" ? d.data.State : "<span style='color: silver;'>State</span>");
                    $("#email").html(d.data.Email != "" ? d.data.InternalEmail : "<span style='color: silver;'>Email</span>");
                    $("#phone").html(d.data.Phone != "" ? d.data.Phone : "<span style='color: silver;'>Phone</span>");
                }
                else
                {
                    $(".settings-text").css("color","lightgray");
                    $(".settings-control").prop("disabled", true);
                    $("#error-pane-text").html(d.status);
                    $("#error-pane").transition("drop in");


                    $(".load-slip").removeClass("ui placeholder");
                    $(".load-slip").css("color", "silver");
                }
            }
            else
            {
                $(".settings-text").css("color","lightgray");
                $(".settings-control").prop("disabled", true);
                $("#error-pane-text").html("Connection error. Check your connection and try again");
                $("#error-pane").transition("drop in");


                $(".load-slip").removeClass("ui placeholder");
                $(".load-slip").css("color", "silver");
            }
        },request);
    }



	function populateProperty(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		request.job = "property";

		$("#table-body").html(tableLoader(8));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateProperty"));

					if(d.data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<h1 class='ui icon header' style='color: whitesmoke;'><i class='building icon circular'></i> </h1>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty Property list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Property.Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Property.Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.data[i].Property.Images[0]+"' style='width: 80px; border-radius: 4px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.data[i].Property.Name;

						let td3 = document.createElement("td");
						td3.innerHTML = d.data[i].Property.Type;

						let td4 = document.createElement("td");
						td4.innerHTML = "<span style='color: lightgray;'>City: </span>"+
							d.data[i].Property.City+"<br/>" +
							"<span style='color: lightgray;'>State: </span>"+d.data[i].Property.State;


						let td5 = document.createElement("td");
						td5.innerHTML = ((d.data[i].Property.Wifi ? "<label class='ui label margin-t-1 blue' style='margin-top: 8px;'><i class='wifi icon'></i> WIFI</label> " : " ")+
							(d.data[i].Property.Parking ? "<label class='ui label sleak blue' style='margin-top: 8px;'><i class='taxi icon'></i> parking</label> " : "") +
							(d.data[i].Property.Restaurant ? "<label class='ui label sleak blue' style='margin-top: 8px;'><i class='utensils icon'></i> restaurant</label> " : "") +
							(d.data[i].Property.Bar ? "<br/><label class='ui label sleak margin-t-1 blue' style='margin-top: 8px;'><i class='martini glass icon'></i> bar</label> " : "") +
							(d.data[i].Property.Security ? "<label class='ui label sleak margin-t-1 blue' style='margin-top: 8px;'><i class='shield icon'></i> Security</label> " : "") +
							(d.data[i].Property.Gym ? "<label class='ui label sleak  blue' style='margin-top: 8px;'><i class='life ring icon'></i> gym</label> " : "")
						);

						let td6 = document.createElement("td");
						td6.innerHTML = "<div class='switch'><label><input type='checkbox' "+(d.data[i].Property.Status ? "checked" : "")+" onchange=\"changePropertyState('"+d.data[i].Property.Id+"', this)\"/><span class='lever'></span></label></div> ";

						let td7 = document.createElement("td");
						td7.innerHTML =
							"<div class='w3-container'> " +
							"<div id='"+ d.data[i].Property.Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#property-overview/"+d.data[i].Property.Id+"' class='item'><i class='eye icon'></i>Overview</a>" +
							"<div class='item' onclick=\"loadProperty('" + d.data[i].Property.Id + "')\"><i class='building icon'></i>Open property</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"linkPartner('" + d.data[i].Property.Id + "')\"><i class='user circle icon'></i>Link a partner</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmPropertyDelete('" + d.data[i].Property.Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
					$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
						"<h1 class='ui icon header' style='color: whitesmoke;'><i class='bug icon circular'></i> </h1>" +
						"<h6 class='sleak-b' style='color: dimgray;'>"+d.message+"</h6>" +
						"<br/>" +
						"<button class='ui blue button' onclick='populateProperty()'>try again</button> " +
						"</div></td></tr>");
				}
			}
			else
			{
				$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
					"<h1 class='ui icon header' style='color: whitesmoke;'><i class='signal icon circular'></i> </h1>" +
					"<h6 class='sleak-b' style='color: dimgray;'>Connection error</h6>" +
					"<br/>" +
					"<button class='ui blue button' onclick='populateProperty()'>try again</button> " +
					"</div></td></tr>");
			}
		}, request);
	}

	function populateVehicle(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		request.job = "vehicle";

		$("#table-body").html(tableLoader(22));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateVehicle"));

					if(d.data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
							"<h1 class='ui icon header' style='color: whitesmoke;'><i class='taxi icon circular'></i> </h1>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty vehicle list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Vehicle.Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Vehicle.Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.data[i].Vehicle.Image1+"' style='border-radius: 4px; width: 80px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = "<span style='color: lightgray;'>Type: </span>"+d.data[i].Vehicle.Type+"<br/>" +
							"<span style='color: lightgray;'>Model: </span>"+d.data[i].Vehicle.Model;

						let td3 = document.createElement("td");
						td3.innerHTML = "<span style='color: lightgray;'>City: </span>"+d.data[i].Vehicle.City+"<br/>" +
							"<span style='color: lightgray;'>State: </span>"+d.data[i].Vehicle.State;

						let td4 = document.createElement("td");
						td4.innerHTML = (d.data[i].Vehicle.Driver.Id == "" ? "<span class='red status'>No Driver</span>" :
							"<span class='green status'>"+d.data[i].Vehicle.Driver.Name+"</span>");

						let td5 = document.createElement("td");
						td5.innerHTML = "<span style='color: lightgray;'>Price: </span>" +(Number(d.data[i].Vehicle.Price) <= 0 ? "Free<br/>" :
							$("#currency-symbol").val()+numFormat(Number(d.data[i].Vehicle.Price).toFixed(2))+"<br/>") +
							"<span style='color: lightgray;'>Mileage cap: </span>"+
							(Number(d.data[i].Vehicle.Milagecap) <= 0 ? "No cap<br/>" :
								$("#currency-symbol").val()+numFormat(Number(d.data[i].Vehicle.Milagecap).toFixed(2))+"<br/>") +
							"<span style='color: lightgray;'>Extra mile: </span>"+
							(Number(d.data[i].Vehicle.Extramilage) <= 0 ? "Free<br/>" :
								$("#currency-symbol").val()+numFormat(Number(d.data[i].Vehicle.Extramilage).toFixed(2)));


						let td6 = document.createElement("td");
						td6.innerHTML = (d.data[i].Vehicle.Busy ?
							"<span class='red red'><small><i class='circle red icon'></i></small> Busy</span>" :
							"<span class='green'><small><i class='circle green icon'></i></small> Free</span>");


						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='switch'>" +
						"<label><input type='checkbox' "+(d.data[i].Vehicle.Status ? "checked": "")+" onchange=\"changeVehicleState('"+d.data[i].Vehicle.Id+"', this)\">" +
							"<span class='lever'></span></label></div>";

						let td8 = document.createElement("td");
						td8.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.data[i].Vehicle.Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#vehicle-overview/"+d.data[i].Vehicle.Id+"' class='item'><i class='eye icon'></i>Overview</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"linkPartnerToVehicle('" + d.data[i].Vehicle.Id + "')\"><i class='user circle icon'></i>Link a partner</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmVehicleDelete('" + d.data[i].Vehicle.Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
						row.appendChild(td8);
						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else
				{
					$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
						"<h1 class='ui icon header' style='color: whitesmoke;'><i class='bug icon circular'></i> </h1>" +
						"<h6 class='sleak-b' style='color: dimgray;'>"+d.message+"</h6>" +
						"<br/>" +
						"<button class='ui blue button' onclick='populateVehicle()'>try again</button> " +
						"</div></td></tr>");
				}
			}
			else
			{
				$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
					"<h1 class='ui icon header' style='color: whitesmoke;'><i class='bug icon circular'></i> </h1>" +
					"<h6 class='sleak-b' style='color: dimgray;'>Connection error</h6>" +
					"<br/>" +
					"<button class='ui blue button' onclick='populateVehicle()'>try again</button> " +
					"</div></td></tr>");
			}
		}, request);
	}

	function populateDriver(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		request.job = "driver";

		$("#table-body").html(tableLoader(14));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateDriver"));

					if(d.data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
							"<h1 class='ui icon header' style='color: whitesmoke;'><i class='user circle icon circular'></i> </h1>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty drivers list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.data[i].Profilepic+"' style='width: 60px; border-radius: 3px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.data[i].Name +" "+d.data[i].Surname;

						let td3 = document.createElement("td");
						td3.innerHTML = "<span style='color: lightgray;'>Phone: </span>"+
							d.data[i].Phone+"</span><br/>" +
							"<span style='color: lightgray;'>Email: </span>"+
							d.data[i].InternalEmail;

						let td4 = document.createElement("td");
						td4.innerHTML = "<span style='color: lightgray;'>City: </span>"+
							d.data[i].City+"</span><br/>" +
							"<span style='color: lightgray;'>State: </span>"+
							d.data[i].State;

						let td5 = document.createElement("td");
						td5.innerHTML = Math.floor(d.data[i].Age)+"yrs";

						let td6 = document.createElement("td");
						td6.innerHTML = d.data[i].Gender;

						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='switch'><label>" +
						"<input type='checkbox' "+(d.data[i].Status ? "checked" : "")+
							" onchange=\"changeDriverState('"+d.data[i].Id+"', this)\"/><span class='lever'></span></label></div>";

						let td8 = document.createElement("td");
						td8.innerHTML =
							"<div class='w3-container'> " +
							"<div id='"+ d.data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#driver-overview/"+d.data[i].Id+"' class='item'><i class='eye icon'></i>Overview</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmDriverDelete('" + d.data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
						row.appendChild(td8);

						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else
				{
					$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
						"<h1 class='ui icon header' style='color: whitesmoke;'><i class='bug icon circular'></i> </h1>" +
						"<h6 class='sleak-b' style='color: dimgray;'>"+d.message+"</h6>" +
						"<br/>" +
						"<button class='ui blue button' onclick='populateDriver()'>try again</button> " +
						"</div></td></tr>");
				}
			}
			else
			{
				$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
					"<h1 class='ui icon header' style='color: whitesmoke;'><i class='signal icon circular'></i> </h1>" +
					"<h6 class='sleak-b' style='color: dimgray;'>Connection error</h6>" +
					"<br/>" +
					"<button class='ui blue button' onclick='populateDriver()'>try again</button> " +
					"</div></td></tr>");
			}
		}, request);
	}

	function populatePartner(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		request.job = "partner";

		$("#table-body").html(tableLoader(7));

		postJson("hms-admin/worker", function(data, status)
		{
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populatePartner"));

					if(d.data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
							"<h1 class='ui icon header' style='color: whitesmoke;'><i class='user circle icon circular'></i> </h1>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty partners list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.data[i].Profilepic+"' style='width: 60px; border-radius: 4px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.data[i].Name+" "+d.data[i].Surname;

						let td3 = document.createElement("td");
						td3.innerHTML = "<span style='color: silver;'>Phone: </span>"+d.data[i].Phone+"<br/>" +
							"<span style='color: silver;'>Email: </span>"+d.data[i].Email;

						let td4 = document.createElement("td");
						td4.innerHTML = "<span style='color: silver;'>Country: </span>"+d.data[i].Country+"<br/>" +
							"<span style='color: silver;'>State: </span>"+d.data[i].State;

						let td5 = document.createElement("td");
						td5.innerHTML = d.data[i].Gender;

						let td6 = document.createElement("td");
						td6.innerHTML = "<div class='switch'><label><input type='checkbox' "+
							(d.data[i].Status ? "checked" : "")+"/>" +
							"<span class='lever'></span></label></div>";

						let td7 = document.createElement("td");
						td7.innerHTML =
							"<div class='w3-container'> " +
							"<div id='"+ d.data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#partner-overview/"+d.data[i].Id+"' class='item'><i class='eye icon'></i>Overview</a>" +
							"<div class='item' onclick=\"loadPartner('" + d.data[i].Id + "')\"><i class='user circle icon'></i>Login as partner</div>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmPartnerDelete('" + d.data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
							"</div>" +
							"</div>" +
							"</div>";


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
					$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
						"<h1 class='ui icon header' style='color: whitesmoke;'><i class='bug icon circular'></i> </h1>" +
						"<h6 class='sleak-b' style='color: dimgray;'>"+d.message+"</h6>" +
						"<br/>" +
						"<button class='ui blue button' onclick='populatePartner()'>try again</button> " +
						"</div></td></tr>");
				}
			}
			else
			{
				$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
					"<h1 class='ui icon header' style='color: whitesmoke;'><i class='bug icon circular'></i> </h1>" +
					"<h6 class='sleak-b' style='color: dimgray;'>Connection error</h6>" +
					"<br/>" +
					"<button class='ui blue button' onclick='populatePartner()'>try again</button> " +
					"</div></td></tr>");
			}
		}, request);
	}