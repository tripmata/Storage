
	function populateAdminRoles(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get roles";


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
			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateRole"));

					if(d.Data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='4'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/role.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Role list is empty</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";



						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = "";

						td2.innerHTML += GetAccessLabel("Booking", d.Data[i].Booking);
						td2.innerHTML += GetAccessLabel("Coupon & Discount", d.Data[i].Discount);
						td2.innerHTML += GetAccessLabel("Customers", d.Data[i].Customers);
						td2.innerHTML += GetAccessLabel("Staff", d.Data[i].Staff);
						td2.innerHTML += GetAccessLabel("Rooms", d.Data[i].Rooms);
						td2.innerHTML += GetAccessLabel("Kitchen", d.Data[i].Kitchen);
						td2.innerHTML += GetAccessLabel("Bakery", d.Data[i].Bakery);
						td2.innerHTML += GetAccessLabel("Bar", d.Data[i].Bar);
						td2.innerHTML += GetAccessLabel("Laundry", d.Data[i].Laundry);
						td2.innerHTML += GetAccessLabel("Housekeeping", d.Data[i].Housekeeping);
						td2.innerHTML += GetAccessLabel("Pool", d.Data[i].Pool);
						td2.innerHTML += GetAccessLabel("Store", d.Data[i].Store);
						td2.innerHTML += GetAccessLabel("Event", d.Data[i].Event);
						td2.innerHTML += GetAccessLabel("Finance", d.Data[i].Finance);
						td2.innerHTML += GetAccessLabel("Branch", d.Data[i].Branch);
						td2.innerHTML += GetAccessLabel("Log", d.Data[i].Log);
						td2.innerHTML += GetAccessLabel("Report", d.Data[i].Report);
						td2.innerHTML += GetAccessLabel("Messaging", d.Data[i].Messaging);
						td2.innerHTML += GetAccessLabel("Webfront", d.Data[i].Webfront);
						td2.innerHTML += GetAccessLabel("Webconfig", d.Data[i].Webconfig);
						td2.innerHTML += GetAccessLabel("Settings", d.Data[i].Settings);

						td2.innerHTML += GetAccessLabel("Front Desk", d.Data[i].Frontdesk);
						td2.innerHTML += GetAccessLabel("Kitchen POS", d.Data[i].Kitchenpos);
						td2.innerHTML += GetAccessLabel("Bakery POS", d.Data[i].Bakerypos);
						td2.innerHTML += GetAccessLabel("Bar POS", d.Data[i].Barpos);
						td2.innerHTML += GetAccessLabel("Laundry POS", d.Data[i].Laundrypos);
						td2.innerHTML += GetAccessLabel("Pool POS", d.Data[i].Poolpos);

						let td3 = document.createElement("td");
						if(d.Data[i].System == false)
						{
                            td3.innerHTML = "<div class='w3-container'> " +
                                "<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
                                "<i class='blue wrench icon'></i>" +
                                "<div class='menu'>" +
                                "<div class='header'>Action</div>" +
                                "<a class='item' href='#add-role/" + d.Data[i].Id + "'><i class='pencil icon'></i>Edit</a>" +
                                "<div class='ui divider'></div>" +
                                "<div class='item' onclick=\"ConfirmRoleDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
                                "</div>" +
                                "</div></div>";
                        }
						else
                        {
                            td3.innerHTML = "<button class='ui inverted green icon button'><i class='cog icon'></i></button>";
                        }


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
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

	function GetAccessLabel(name, access)
	{
		let ret = "";

		if(access.ReadAccess === true)
		{
			ret = "R";
		}
		if(access.WriteAccess === true)
		{
			if(ret == ""){ret = "W";}else{ret += "/W";}
		}

		let color = "";

		if(access.ReadAccess && access.WriteAccess)
		{
			color = "green-back";
		}
		else if(!access.WriteAccess && access.ReadAccess)
		{
			color = "blue-back";
		}
		else if(access.WriteAccess && !access.ReadAccess)
		{
			color = "red-back";
		}
		else
		{
			color = "blue-back";
		}


		if(ret !== "")
		{
			return "<label class='status "+color+"' style='margin: 1px; display: inline-block; padding: 0px 2px !important;'>"+name+": "+ret+"</label>"
		}
		else
		{
			return "";
		}
	}

	function populateCustomer(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "sort by";
		request.Filtervalue = "created";
		request.job = "get customers";


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

		$("#table-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);

					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateCustomer"));

					if(d.Data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Customers list is empty</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<span class='blue-text'>"+d.Data[i].Name+" "+d.Data[i].Surname+"</span><br/>" +
                        "<span style='color: silver;'>Email: </span><span style='color: dimgray;'>"+
                        d.Data[i].Email+"</span><br/>" +
                        "<span style='color: silver;'>Phone: </span><span style='color: dimgray;'>"
                        +d.Data[i].Phone+"</span>";

						let td2 = document.createElement("td");
						td2.innerHTML = "<span style='color: silver;'>Registered: </span><span style='color: dimgray;'>"+
                        d.Data[i].Created.WeekDay+" - "+d.Data[i].Created.Day+"/"+d.Data[i].Created.MonthName+"/"+d.Data[i].Created.Year+"</span><br/>" +
                        "<span style='color: silver;'>Last seen: </span><span style='color: dimgray;'>"
                        +d.Data[i].Lastseen.WeekDay+" - "+d.Data[i].Lastseen.Day+"/"+d.Data[i].Lastseen.MonthName+"/"+d.Data[i].Lastseen.Year+"</span>";

						let td3 = document.createElement("td");
						td3.innerHTML = "<span class='blue-back status'>"+d.Data[i].Guestid+"</span>";

						let td4 = document.createElement("td");
						td4.innerHTML = "<span class='green-back status'>Lodged</span>";

						let td5 = document.createElement("td");
						td5.innerHTML = "<div class='w3-container'> " +
                        "<div id='" + d.Data[i].Id + "-btn' class='ui icon top right pointing dropdown button c-menu'>" +
                        "<i class='blue wrench icon'></i>" +
                        "<div class='menu'>" +
                        "<div class='header'>Action</div>" +
                        "<a href='#customer/"+d.Data[i].Id+"' class='item'><i class='male icon'></i> Profile</a>" +
                        "<div class='item' onclick=\"editContestant('" + d.Data[i].Id + "')\"><i class='sign in icon'></i> Login As Customer</div>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"editContestant('" + d.Data[i].Id + "')\"><i class='address book icon'></i>Add to custom list</div>" +
						"<div class='ui divider'></div>" +
                        "<div class='item' onclick=\"ConfirmCustomerDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i> Delete</div>" +
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

	function populateDepartments()
	{
		let request = {
			job:"get departments"
		};

		$("#dept-tbl").html("");
		$("#dept-tbl").html(tableLoader(3));

		postJson("hms-admin/worker", function(data, status){

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					$("#dept-tbl").html("");

					if(d.Data.length == 0)
					{
						$("#dept-tbl").html("<tr><td colspan='3'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>No Department Has Been Added</h6>" +
						"</div></td></tr>");
					}


					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Department.Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = d.Data[i].Department.Name;

						let td1 = document.createElement("td");
						td1.innerHTML = "<label class='status green-back'>"+d.Data[i].Staffcount+" staff</label>";

						let td2 = document.createElement("td");
						td2.style.textAlign = "right";
						td2.innerHTML = "<span style='cursor: pointer;' onclick=\"editDepartment('" + d.Data[i].Department.Id + "','"+d.Data[i].Department.Name+"')\"><i class='pencil blue icon'></i></span>&nbsp;&nbsp;&nbsp;" +
						"<span id='"+d.Data[i].Department.Id+"-del-btn' style='cursor: pointer;' onclick=\"ConfirmDepartmentDelete('" + d.Data[i].Department.Id + "')\"><i class='trash red icon'></i></span>";

						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);

						document.getElementById("dept-tbl").appendChild(row);
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

	function populateShift()
	{
		let request = {
			job:"get shift"
		};

		$("#shift-tbl").html("");
		$("#shift-tbl").html(tableLoader(4));

		postJson("hms-admin/worker", function(data, status){
			$("#shift-tbl").html("");
			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					$("#shift-tbl").html("");

					if(d.Data.length == 0)
					{
						$("#shift-tbl").html("<tr><td colspan='3'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>No Shift Has Been Created</h6>" +
						"</div></td></tr>");
					}


					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Shift.Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = d.Data[i].Shift.Name;

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Period;

						let td2 = document.createElement("td");
						td2.innerHTML = "<label class='status'>"+d.Data[i].Hours+"</label>";

						let td3 = document.createElement("td");
						td3.style.textAlign = "right";
						td3.innerHTML = "<span style='cursor: pointer;' onclick=\"editShift('" + d.Data[i].Shift.Id + "', this)\"><i class='pencil blue icon'></i></span>&nbsp;&nbsp;&nbsp;" +
						"<span id='"+d.Data[i].Shift.Id+"-del-btn' style='cursor: pointer;' onclick=\"ConfirmShiftDelete('" + d.Data[i].Shift.Id + "')\"><i class='trash red icon'></i></span>";

						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);

						document.getElementById("shift-tbl").appendChild(row);
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

	function populateStaff(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "sort by";
		request.Filtervalue = "created";
		request.job = "get staff";


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
		if(request.Filter == "filter by department")
		{
			request.Filtervalue = $("#filter-department").val();
		}
		if(request.Filter == "filter by shift")
		{
			request.Filtervalue = $("#filter-shift").val();
		}
		if(request.Filter == "filter by status")
		{
			request.Filtervalue = $("#filter-status").val();
		}
		if(request.Filter == "filter by suspended")
		{
			request.Filtervalue = $("#filter-suspended").val();
		}

		$("#table-body").html(tableLoader(8));

		postJson("hms-admin/worker", function(data, status){

			$("#table-body").html("");

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					//$("#total_count").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateStaff"));

					if(d.Data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Staff list is empty</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Staff.Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Staff.Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.Data[i].Staff.Passport+"' style='width: 45px; border-radius: 50%;'/>";


						let td2 = document.createElement("td");
						td2.innerHTML = "<span class='blue-text'>"+d.Data[i].Staff.Name+" "+d.Data[i].Staff.Surname+"</span><br/>" +
                        "<span style='color: silver;'>Email: </span><span style='color: dimgray;'>"+
                        d.Data[i].Staff.Email+"</span><br/>" +
                        "<span style='color: silver;'>Phone: </span><span style='color: dimgray;'>"
                        +d.Data[i].Staff.Phone+"</span>";

						let td3 = document.createElement("td");
						td3.innerHTML = d.Data[i].Staff.Department.Name;

						let td4 = document.createElement("td");
						td4.innerHTML = d.Data[i].Onduty ? "<label class='status green' style=''>On duty</label>"
						: "<label class='status blue-back' style=''>off duty</label>";

						let td5 = document.createElement("td");
						td5.innerHTML = d.Currency+""+numFormat(Number(d.Data[i].Surcharge));

						let td6 = document.createElement("td");
						td6.innerHTML = d.Data[i].Staff.State;

						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
						"<div id='"+ d.Data[i].Staff.Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
						"<i class='blue wrench icon'></i>" +
						"<div class='menu'>" +
						"<div class='header'>Action</div>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"ConfirmStaffDelete('" + d.Data[i].Staff.Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
				else if(d.Status == "access denied")
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
		request.job = "list banner";


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

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateBanner"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>banner list is empty</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.Data[i].Image+"' style='width: 150px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Text;

						let td3 = document.createElement("td");
						td3.innerHTML = d.Data[i].Subtext;

						let td4 = document.createElement("td");
						td4.innerHTML = d.Data[i].Sort;

						let td5 = document.createElement("td");
						let status = d.Data[i].Status ? "checked" : "";
						td5.innerHTML = "<div class='switch'><label>" +
							"<input type='checkbox' "+status+" onchange=\"SetBanner_Status(this, '"+d.Data[i].Id+"')\"/>" +
							"<span class='lever'></span></label></div>";


						let td6 = document.createElement("td");
						td6.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#new-banner/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit banner</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmBannerDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
				else if(d.Status === "access denied")
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

    function populateUser(page)
    {
        let request = {};
        request.Page = 1;
        request.Perpage = 25;
        request.Filter = "search list";
        request.Filtervalue = $("#search-txt").val();
        request.job = "get admin users";


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

                if(d.Status === "success")
                {
                    let sn = ((d.Page - 1) * d.Perpage) + 1;
                    $("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateUser"));

                    if(d.Data.length === 0)
                    {
                        $("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
                            "<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
                            "<h6 class='sleak-b' style='color: dimgray;'>Admin Users list is empty</h6>" +
                            "</div></td></tr>");
                    }

                    for(var i = 0; i < d.Data.length; i++)
                    {
                        let row = document.createElement("tr");
                        row.id = d.Data[i].Id + "-row";

                        let td0 = document.createElement("td");
                        td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                        let td1 = document.createElement("td");
                        td1.innerHTML = d.Data[i].Name +" "+d.Data[i].Surname;

                        let td2 = document.createElement("td");
                        td2.innerHTML = d.Data[i].Username;

                        let td3 = document.createElement("td");
                        td3.innerHTML = "<span class='status green-back'>"+d.Data[i].Role.Name+"</span>";

                        let td4 = document.createElement("td");
                        let chkd = d.Data[i].Status ? "checked" : "";
                        td4.innerHTML = "<div class='switch'><label><input type='checkbox' "+chkd+" onchange=\"SetUserStatus(this,'"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

                        let td5 = document.createElement("td");
                        td5.innerHTML = "<div class='w3-container'> " +
                            "<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
                            "<i class='blue wrench icon'></i>" +
                            "<div class='menu'>" +
                            "<div class='header'>Action</div>" +
                            "<a href='#admin-user-log/"+d.Data[i].Id+"' class='item'><i class='cog icon'></i>View Activities</a>" +
                            "<a href='#new-admin-user/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit</a>" +
                            "<div class='ui divider'></div>" +
                            "<div class='item' onclick=\"ConfirmUserDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
                else if(d.Status === "access denied")
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

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#faq-cat-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaqcategory"));

					if(d.Data.length === 0)
					{
						$("#faq-cat-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty FAQ category list returned</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = sn;

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Sort;

						let td3 = document.createElement("td");
						let ch = d.Data[i].Status ? "checked" : "";
						td3.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetFaqcategory_Status(this, '"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td4 = document.createElement("td");
						td4.innerHTML = "<span><i class='green pencil icon' style='cursor: pointer;' onclick=\"editFaqcategory('"+escape(JSON.stringify(d.Data[i]))+"')\"></i></span>" +
						"&nbsp;&nbsp;&nbsp;<span><i id='faqcat-del-btn-"+d.Data[i].Id+"' class='red trash icon' style='cursor: pointer;' onclick=\"ConfirmFaqcategoryDelete('" + d.Data[i].Id + "')\"></i></span>";


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
				else if(d.Status === "ACCESS_DENIED")
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

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					if(d.Data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty FAQ list returned</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Question;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Category.Name;

						let td3 = document.createElement("td");
                        td3.innerHTML = d.Data[i].Sort;

						let td4 = document.createElement("td");
                        let ch = d.Data[i].Status ? "checked" : "";
                        td4.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetFaq_Status(this, '"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td5 = document.createElement("td");
						td5.innerHTML = "<div class='w3-container'> " +
						"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
						"<i class='blue wrench icon'></i>" +
						"<div class='menu'>" +
						"<div class='header'>Action</div>" +
						"<div class='item' onclick=\"viewFaqAnswer('" + escape(JSON.stringify(d.Data[i])) + "')\"><i class='question circle icon'></i>View Answer</div>" +
						"<a class='item' href='#new-faq/"+ d.Data[i].Id + "'><i class='pencil icon'></i>Edit FAQ</a>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"ConfirmFaqDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
				else if(d.Status === "access denied")
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

				if(d.Status === "success")
				{
					for(let i = 0; i < d.Data.length; i++)
                    {
                        let ch = d.Data[i].Status ? "checked" : "";

                        getElement("gallery-content").appendChild(div({
                            add:"<div id='gallery-item-"+i+"' class='w3-col l3 m6 s12 pad-1 galeries'>" +

                                "<div class='lift-1'>" +

                                "<input id='gallery-id-"+i+"' type='hidden' value='"+d.Data[i].Id+"'/>" +
                                "<input id='gallery-image-name-"+i+"' type='hidden' value='"+d.Data[i].Image+"'/>" +

                                "<div style='height: 200px; background-color: whitesmoke; position: relative;'>" +
                                "<img id='gallery-image-"+i+"' src='files/"+d.Data[i].Image+"' style='width: 100%;'/>" +
                                "<div id='gallery-sort-con-"+i+"' class='ui mini labeled input' " +
                                "style='background-color: transparent; position: absolute; left: 0px; top: 0px;'> " +
                                "<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
                                "<input id='gallery-sort-"+i+"' type='number' value='"+d.Data[i].Sort+"' " +
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
                                " onchange=\"saveGallery('"+i+"')\" value='"+d.Data[i].Heading+"' onkeyup='checkGalleryPlaceholders()'/>" +
                                "</div>" +
                                "<div class='ui form' style='margin-top: 5px;'>" +
                                "<div class='field'>" +
                                "<textarea id='gallery-description-"+i+"' class='wix-textbox' rows='1' placeholder='short description'" +
                                " onchange=\"saveGallery('"+i+"')\" onkeyup='checkGalleryPlaceholders()' style='border-radius: 0px;'>"+d.Data[i].Description+"</textarea>" +
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

	function populateServicesContent(func)
	{
		$("#service-content").html("");

		getElement("service-content").appendChild(div({
			add:servicePlaceholder()+
				servicePlaceholder() +
				servicePlaceholder() +
				servicePlaceholder()
		}));


		postJson("hms-admin/worker", function(data, status){
			$("#service-content").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					for(let i = 0; i < d.Data.length; i++)
					{
						let ch = d.Data[i].Status ? "checked" : "";

						let icon = "";
						let iconDisplay = "display: none;";
						let imageDisplay = "";

						if(d.Data[i].Icontype === "icon")
						{
							icon = "<i class='"+d.Data[i].Icon+" icon'></i>";
							iconDisplay = "";
							imageDisplay = "display: none;";
						}

						getElement("service-content").appendChild(div({
							add:"<div id='service-item-"+i+"' class='w3-col l6 m6 s12 pad-1 services'>" +

								"<div class='w3-row lift-1'>" +

								"<input id='service-id-"+i+"' type='hidden' value='"+d.Data[i].Id+"'/>" +
								"<input id='service-image-name-"+i+"' type='hidden' value='"+d.Data[i].Icon+"'/>" +
								"<input id='service-icontype-"+i+"' type='hidden' value='"+d.Data[i].Icontype+"'/>" +

								"<div class='w3-col l4 m4 s12' style='min-height: 200px; background-color: whitesmoke; position: relative;'>" +
								"<img id='service-image-"+i+"' src='files/"+d.Data[i].Icon+"' style='width: 100%; margin-top: 15px; "+imageDisplay+"'/>" +
								"<h1 id='icon-con-"+i+"' class='ui center aligned icon header' style='color: dimgray; margin-top: 60px; "+iconDisplay+"'>" +
								icon + "</h1>" +
								"<button id='service-btn-"+i+"' class='ui circular icon green-back button' "+
								"style='position: absolute; top: 0px; left: 0px;' onclick=\"imageIconChoice('"+i+"')\">" +
								"<i class='plus icon'></i></button>" +
								"<button id='service-delete-btn-"+i+"' class='ui circular icon red button' "+
								"style='position: absolute; top: 0px; left: 30px;' onclick=\"confirmServiceItemDelete('"+i+"')\">" +
								"<i class='trash icon'></i></button>" +
								"<input id='service-file-"+i+"' type='file' onchange=\"processServiceImage(this, '"+i+"')\" style='display: none;'/>" +
								"</div>" +
								"<div class='w3-col l8 m8 s12 pad-1'>" +
								"<div class='ui fluid input'>" +
								"<input id='service-heading-"+i+"' class='wix-textbox' type='textbox' placeholder='Heading' style='margin-top: 5px; border-radius: 0px;'" +
								" onchange=\"saveServices('"+i+"'); activateService('"+i+"')\" value='"+d.Data[i].Heading+"' onkeyup='checkServicePlaceholders()'/>" +
								"</div>" +
								"<div class='ui form' style='margin-top: 5px;'>" +
								"<div class='field'>" +
								"<textarea id='service-description-"+i+"' class='wix-textbox' rows='1' placeholder='short description'" +
								" onchange=\"saveServices('"+i+"'); activateService('"+i+"')\" onkeyup='checkServicePlaceholders()' style='border-radius: 0px;'>"+d.Data[i].Body+"</textarea>" +
								"</div>" +
								"</div>" +
								"<div id='service-sort-con-"+i+"' class='ui mini labeled input' style=' margin-top: 5px;'> " +
								"<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
								"<input id='service-sort-"+i+"' type='number' value='"+d.Data[i].Sort+"' " +
								"style='width: 60px; border-radius: 0px;'  onchange=\"saveServices('"+i+"'); activateService('"+i+"')\"/>" +
								"</div>" +
								"<div class='switch' style='float: right; margin-top: 5px;'>" +
								"<label>" +
								"<input type='checkbox' id='service-status-"+i+"' "+ch+" onchange=\"saveServices('"+i+"'); activateService('"+i+"')\"/><span class='lever'></span></label></div>" +
								"<h6 id='service-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
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
		},{job:"get services"});
	}

	function populateTeamContent(func)
	{
		$("#team-content").html("");

		getElement("team-content").appendChild(div({
			add:imageTextPlaceholder()+
				imageTextPlaceholder()+
				imageTextPlaceholder()+
				imageTextPlaceholder()
		}));


		postJson("hms-admin/worker", function(data, status){
			$("#team-content").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					for(let i = 0; i < d.Data.length; i++)
					{
						let ch = d.Data[i].Status ? "checked" : "";

						getElement("team-content").appendChild(div({
							add:"<div id='team-item-"+i+"' class='w3-col l3 m6 s12 pad-1 teams'>" +

								"<div class='lift-1'>" +

								"<input id='team-id-"+i+"' type='hidden' value='"+d.Data[i].Id+"'/>" +
								"<input id='team-image-name-"+i+"' type='hidden' value='"+d.Data[i].Image+"'/>" +

								"<div style='height: 200px; background-color: whitesmoke; position: relative;'>" +
								"<img id='team-image-"+i+"' src='files/"+d.Data[i].Image+"' style='width: 100%;'/>" +
								"<div id='team-sort-con-"+i+"' class='ui mini labeled input' " +
								"style='background-color: transparent; position: absolute; left: 0px; top: 0px;'> " +
								"<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
								"<input id='team-sort-"+i+"' type='number' value='"+d.Data[i].Sort+"' " +
								"style='width: 60px; border-radius: 0px;'  onchange=\"saveTeam('"+i+"')\"/>" +
								"</div>" +
								"<button id='team-btn-"+i+"' class='ui circular icon green-back button' "+
								"style='position: absolute; top: 0px; right: 0px;' onclick=\"getElement('team-file-"+i+"').click()\">" +
								"<i class='image icon'></i></button>" +
								"<button id='team-delete-btn-"+i+"' class='ui circular icon red button' "+
								"style='position: absolute; top: 0px; right: 30px;' onclick=\"confirmTeamItemDelete('"+i+"')\">" +
								"<i class='trash icon'></i></button>" +
								"<input id='team-file-"+i+"' type='file' onchange=\"processTeamImage(this, '"+i+"')\" style='display: none;'/>" +
								"</div>" +
								"<div class='pad-1'>" +
								"<div class='ui fluid input'>" +
								"<input id='team-name-"+i+"' class='wix-textbox' type='textbox' placeholder='Name' style='margin-top: 5px; border-radius: 0px;'" +
								" onchange=\"saveTeam('"+i+"')\" value='"+d.Data[i].Name+"' onkeyup='checkTeamPlaceholders()'/>" +
								"</div>" +
								"<div class='ui form' style='margin-top: 5px;'>" +
								"<div class='field'>" +
								"<textarea id='team-description-"+i+"' class='wix-textbox' rows='1' placeholder='short description'" +
								" onchange=\"saveTeam('"+i+"')\" onkeyup='checkTeamPlaceholders()' style='border-radius: 0px;'>"+d.Data[i].Description+"</textarea>" +
								"</div>" +
								"</div>" +
								"<div class='switch' style='float: right; margin-top: 5px;'>" +
								"<label>" +
								"<input type='checkbox' id='team-status-"+i+"' "+ch+" onchange=\"saveTeam('"+i+"')\"/><span class='lever'></span></label></div>" +
								"<h6 id='team-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
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
		},{job:"get team"});
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

				if(d.Status === "success")
				{
					for(; i < d.Data.length; i++)
					{
						let ch = d.Data[i].Status ? "checked" : "";

						getElement("testimonial-content").appendChild(div({
							add:"<div id='testimonial-item-"+i+"' class='w3-row pad-1 testimonial' style=''>" +

								"<div class='lift-1'>" +

								"<input id='testimonial-id-"+i+"' type='hidden' value='"+d.Data[i].Id+"'/>" +
								"<input id='testimonial-image-name-"+i+"' type='hidden' value='"+d.Data[i].Image+"'/>" +


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
								"<input id='testimonial-sort-"+i+"' type='number' value='"+d.Data[i].Sort+"' " +
								"style='width: 60px; border-radius: 0px;'  onchange=\"saveTestimonial('"+i+"')\"/>" +
								"</div><br/>" +

								"<div id='testimonial-rating-"+i+"' class='ui star big rating' data-rating='"+d.Data[i].Rating+"'" +
								" onclick=\"ratingSaveTestimonial('"+i+"')\"></div> "+

								"<br/>" +
								"<button id='testimonial-delete-btn-"+d.Data[i].Id+"' class='ui circular icon red button' "+
								"style='left: 30px;' onclick=\"confirmTestimonialItemDelete('"+i+"')\">" +
								"<i class='trash icon'></i></button>" +

								"</div> " +


								"<div class='w3-col l3 m3 s12 pad-2'>" +
								"<div class='l-width-l m-width-xl' style='height: 200px; background-color: whitesmoke; position: relative; border-radius: 0px;'>" +
								"<img id='testimonial-image-"+i+"' src='files/"+d.Data[i].Image+"' style='width: 100%;'/>" +
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
								" onchange=\"saveTestimonial('"+i+"')\" value='"+d.Data[i].Name+"' onkeyup='checkTestimonialPlaceholders()'/>" +
								"</div>" +
								"<div class='ui form' style='margin-top: 5px;'>" +
								"<div class='field'>" +
								"<textarea id='testimonial-description-"+i+"' class='wix-textbox' rows='3' placeholder='Testimony'" +
								" onchange=\"saveTestimonial('"+i+"')\" onkeyup='checkTestimonialPlaceholders()' style='border-radius: 0px;'>"+d.Data[i].Body+"</textarea>" +
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

	function populateFacilitiesContent(func)
	{
		$("#facilities-content").html("");

		getElement("facility-content").appendChild(div({
			add:facilityPlaceholder()+
				facilityPlaceholder() +
				facilityPlaceholder() +
				facilityPlaceholder()
		}));


		postJson("hms-admin/worker", function(data, status){
			$("#facility-content").html("");
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					for(let i = 0; i < d.Data.length; i++)
					{
						let ch = d.Data[i].Status ? "checked" : "";

						let icon = "";
						let iconDisplay = "display: none;";

						let imageDisplay = "";

						if(d.Data[i].Icontype === "icon")
						{
							icon = "<i class='"+d.Data[i].Icon+" icon'></i>";
							iconDisplay = "";
							imageDisplay = "display: none;";
						}

						getElement("facility-content").appendChild(div({
							add:"<div id='facility-item-"+i+"' class='w3-col l6 m6 s12 pad-1 facility'>" +

								"<div class='w3-row lift-1'>" +

								"<input id='facility-id-"+i+"' type='hidden' value='"+d.Data[i].Id+"'/>" +
								"<input id='facility-image-name-"+i+"' type='hidden' value='"+d.Data[i].Icon+"'/>" +
								"<input id='facility-icontype-"+i+"' type='hidden' value='"+d.Data[i].Icontype+"'/>" +

								"<div class='w3-col l4 m4 s12' style='min-height: 200px; background-color: whitesmoke; position: relative;'>" +
								"<img id='facility-image-"+i+"' src='files/"+d.Data[i].Icon+"' style='width: 100%; margin-top: 15px; "+imageDisplay+"'/>" +
								"<h1 id='icon-con-"+i+"' class='ui center aligned icon header' style='color: dimgray; margin-top: 60px; "+iconDisplay+"'>" +
								icon + "</h1>" +
								"<button id='facility-btn-"+i+"' class='ui circular icon green-back button' "+
								"style='position: absolute; top: 0px; left: 0px;' onclick=\"facilityImageIconChoice('"+i+"')\">" +
								"<i class='plus icon'></i></button>" +
								"<button id='facility-delete-btn-"+i+"' class='ui circular icon red button' "+
								"style='position: absolute; top: 0px; left: 30px;' onclick=\"confirmFacilityItemDelete('"+i+"')\">" +
								"<i class='trash icon'></i></button>" +
								"<input id='facility-file-"+i+"' type='file' onchange=\"processFacilityImage(this, '"+i+"')\" style='display: none;'/>" +
								"</div>" +
								"<div class='w3-col l8 m8 s12 pad-1'>" +
								"<div class='ui fluid input'>" +
								"<input id='facility-heading-"+i+"' class='wix-textbox' type='textbox' placeholder='Heading' style='margin-top: 5px; border-radius: 0px;'" +
								" onchange=\"saveFacility('"+i+"'); activateFacility('"+i+"')\" value='"+d.Data[i].Heading+"' onkeyup='checkFacilityPlaceholders()'/>" +
								"</div>" +
								"<div class='ui form' style='margin-top: 5px;'>" +
								"<div class='field'>" +
								"<textarea id='facility-description-"+i+"' class='wix-textbox' rows='1' placeholder='short description'" +
								" onchange=\"saveFacility('"+i+"'); activateFacility('"+i+"')\" onkeyup='checkFacilityPlaceholders()' style='border-radius: 0px;'>"+d.Data[i].Body+"</textarea>" +
								"</div>" +
								"</div>" +
								"<div id='facility-sort-con-"+i+"' class='ui mini labeled input' style=' margin-top: 5px;'> " +
								"<label class='ui sleak blue-back label' style='border-radius: 0px;'>sort</label>" +
								"<input id='facility-sort-"+i+"' type='number' value='"+d.Data[i].Sort+"' " +
								"style='width: 60px; border-radius: 0px;'  onchange=\"saveFacility('"+i+"'); activateFacility('"+i+"')\"/>" +
								"</div>" +
								"<div class='switch' style='float: right; margin-top: 5px;'>" +
								"<label>" +
								"<input type='checkbox' id='facility-status-"+i+"' "+ch+" onchange=\"saveFacility('"+i+"'); activateFacility('"+i+"')\"/><span class='lever'></span></label></div>" +
								"<h6 id='facility-status-text-"+i+"' style='color: silver; margin-top: 5px;'>Status</h6>" +
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
		},{job:"get facility"});
	}

	function populateRoomcategory(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "";
		request.job = "get room category";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}

		$("#table-body").html(tableLoader(9));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateRoomcategory"));

					if(d.Data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/bed.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty Room Category list returned</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.Data[i].Images[0]+"' style='width: 80px; border-radius: 4px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Name;

						let td3 = document.createElement("td");
						td3.innerHTML += "<br/><span><span style='color: lightgray;'>Price: </span>" +
							$("#currency-symbol").val() + numFormat(Number(d.Data[i].Price).toFixed(2))+"</span>";

						if(d.Data[i].Compareat > 0)
						{
							td3.innerHTML += "<br/><span><span style='color: lightgray;'>Compare at: </span><strike>" +
							$("#currency-symbol").val() + numFormat(Number(d.Data[i].Compareat).toFixed(2))+"</strike></span>";
						}

						let td4 = document.createElement("td");
						td4.innerHTML += "<br/><span><span style='color: lightgray;'>Rooms: </span>" +
							d.Data[i].Rooms+"</span>";
							td4.innerHTML += "<br/><span><span style='color: lightgray;'>Occupied: </span>" +
							d.Data[i].Occupied+"</span>";

						let td5 = document.createElement("td");
						let ch = d.Data[i].Onsite ? "checked" : "";
						let rv = d.Data[i].Reservable ? "checked" : "";
						td5.innerHTML = "<label><input class='filled-in' type='checkbox' "+ch+" onchange=\"SetRoomcategory_Onsite(this,'"+d.Data[i].Id+"')\"/><span>Visiblility</span></label>";
						td5.innerHTML += "<br/><label><input class='filled-in' type='checkbox' "+rv+" onchange=\"SetRoomcategory_Reservable(this, '"+d.Data[i].Id+"')\"/><span>Can reserve</span></label>";

						let td6 = document.createElement("td");
						td6.innerHTML = d.Data[i].Sort;

						let td7 = document.createElement("td");
						ch = d.Data[i].Status ? "checked" : "";
						td7.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetRoomcategory_Status(this,'"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td8 = document.createElement("td");
						td8.innerHTML = "<div class='w3-container'> " +
						"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
						"<i class='blue wrench icon'></i>" +
						"<div class='menu'>" +
						"<div class='header'>Action</div>" +
						"<a class='item' href='#new-room-category/" + d.Data[i].Id + "'><i class='pencil icon'></i>Edit Category</a>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"ConfirmRoomcategoryDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
				else if(d.Status === "access denied")
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

	function populateRoom(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "";
		request.job = "get rooms";


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

			if(status == "done")
			{
				let d = JSON.parse(data);

				if(d.Status == "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateRoom"));

					if(d.Data.length == 0)
					{
						$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/bed.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty Room list returned</h6>" +
						"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Room.Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Room.Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<span><span style='color: lightgray;'>Room: </span>"+d.Data[i].Room.Number+"</span>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Room.Category.Name;

						let td3 = document.createElement("td");
						let occp = d.Data[i].Occupied ? "<label class='status green-back'>Occupied</label>" : "<label class='status blue-back'>Free</label>";
						td3.innerHTML = occp;

						let td4 = document.createElement("td");
						let ch = d.Data[i].Room.Status ? "checked" : "";
						td4.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetRoom_Status(this, '"+d.Data[i].Room.Id+"')\"/><span class='lever'></span></label></div>";

						let td5 = document.createElement("td");
						td5.innerHTML = "<div class='w3-container'> " +
						"<div id='"+ d.Data[i].Room.Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
						"<i class='blue wrench icon'></i>" +
						"<div class='menu'>" +
						"<div class='header'>Action</div>" +
						"<a class='item' href='#new-room/" + d.Data[i].Room.Id + "'><i class='pencil icon'></i>Edit</a>" +
						"<div class='ui divider'></div>" +
						"<div class='item' onclick=\"ConfirmRoomDelete('" + d.Data[i].Room.Id + "')\"><i class='trash icon'></i>Delete</div>" +
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
				else if(d.Status == "access denied")
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

	function populateSettings()
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function (data, status) {
			$("#page").removeClass("ui loading form");
			if(status === "done") {

				let d = JSON.parse(data);

				if (d.Status === "success")
				{
					$("#hotel-name").val(d.Data.Name);
					$("#hotel-phone1").val(d.Data.Phone1);
					$("#hotel-phone2").val(d.Data.Phone2);
					$("#hotel-email1").val(d.Data.Email1);
					$("#hotel-email2").val(d.Data.Email2);
					$("#hotel-adddress").val(d.Data.Address);
					$("#hotel-country").dropdown("set selected", d.Data.Country);
					$("#hotel-state").val(d.Data.State);
					$("#hotel-city").val(d.Data.City);

					getElement("logo-img").src = Router.resolvePath("files/" + d.Data.Logo);

					$("#primary-color").val(d.Data.Site.PrimaryColor);
					$("#primary-color").css("background-color", d.Data.Site.PrimaryColor);
					$("#primary-color").css("color", "white");

					$("#secondary-color").val(d.Data.Site.SecondaryColor);
					$("#secondary-color").css("background-color", d.Data.Site.SecondaryColor);
					$("#secondary-color").css("color", "white");


					$("#primary-font").dropdown("set selected", d.Data.Site.TextFont);
					$("#secondary-font").dropdown("set selected", d.Data.Site.SecondaryFont);
					$("#bold-font").dropdown("set selected", d.Data.Site.BoldFont);
					$("#sleak-font").dropdown("set selected", d.Data.Site.LightFont);

					getElement("customersaddress").checked = d.Data.Site.Customersaddress;
					getElement("customersselfngt").checked = d.Data.Site.Customerselfdatamgt;
					getElement("showtextname").checked = d.Data.Site.ShowName;
					getElement("showlogo").checked = d.Data.Site.ShowLogo;


					if(d.Data.Site.Guestformtype === "DETAILED")
					{
						getElement("detailed-check").checked = true;
					}
					else if(d.Data.Site.Guestformtype === "INTERMEDIARY")
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
							d.Message +
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

				if (d.Status === "success")
				{
					loadingIntegration = true;

					$("#facebook-integration").val(d.Data.Facebook);
					$("#twitter-integration").val(d.Data.Twitter);
					$("#google-integration").val(d.Data.Google);
					$("#linkedin-integration").val(d.Data.Linkedin);
					$("#whatsapp-integration").val(d.Data.Whatsapp);
					$("#telegram-integration").val(d.Data.Telegram);
					$("#instagram-integration").val(d.Data.Instagram);


					$("#live-chat-integration").val(d.Data.Livechat);
					$("#google-analytics-integration").val(d.Data.Analytics);
					$("#google-tag-integration").val(d.Data.Googletag);
					$("#translator-integration").val(d.Data.Translator);

					$("#longitude-integration").val(d.Data.Longitude);
					$("#latitude-integration").val(d.Data.Latitude);
					$("#apikey-integration").val(d.Data.Apikey);

					loadingIntegration = false;
				}
				else
				{
					_page({ add: pageTop({ icon: "code", text: "Integrations" }), clear: true });
					_page({add:"<div class='pad-3 widget lift-1'>" +
							"<div class='align-c'>" +
							"<h6 class='sleak'>" +
							"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
							d.Message +
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

				if(d.Status === "success")
				{
					populatingCurrency = true;

					$("#currency-name-con").html(d.Data.Name);
					$("#currency-code-con").html(d.Data.Code);
					$("#symbol-con").html(d.Data.Symbol);
					$("#country-con").html(d.Data.Country);

					$("#current-currency").dropdown("set selected", d.Data.Code);


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
							d.Message +
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

	function populateCoupon(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get coupon list";

		request.usestatus = "all";

		if($("#used-coupon-tab").hasClass("active"))
		{
			request.usestatus = "used";
		}
		else if($("#unused-coupon-tab").hasClass("active"))
		{
			request.usestatus = "unused";
		}
		else if($("#expired-coupon-tab").hasClass("active"))
		{
			request.usestatus = "expired";
		}


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') !== "")
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
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					//$("#total_count").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateCoupon"));

					if(d.Data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='7'><div class='align-c pad-2'>" +
						"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>Empty coupon list returned</h6>" +
						"</div></td></tr>");
					}

					$("#all-coupon-label").html(d.Allcount);
					$("#used-coupon-label").html(d.Usedcount);
					$("#unused-coupon-label").html(d.Unusedcount);
					$("#expired-coupon-label").html(d.Expiredcount);

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Title;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Code;

						let td3 = document.createElement("td");
						if(d.Data[i].Bypercentage)
						{
							td3.innerHTML = numFormat(d.Data[i].Value)+"%";
						}
						else
						{
							td3.innerHTML = $("#currency-symbol").val()+numFormat(d.Data[i].Value);
						}


						let td4 = document.createElement("td");
						if(d.Data[i].Booking.length > 0)
						{
							td4.innerHTML += "<label class='status'>Booking</label>";
						}
						if(d.Data[i].Food.length > 0)
						{
							td4.innerHTML += "<label class='status'>Food</label>";
						}
						if(d.Data[i].Drinks.length > 0)
						{
							td4.innerHTML += "<label class='status'>Drinks</label>";
						}
						if(d.Data[i].Pastries.length > 0)
						{
							td4.innerHTML += "<label class='status'>Pastries</label>";
						}
						if(d.Data[i].Laundry.length > 0)
						{
							td4.innerHTML += "<label class='status'>Laundry</label>";
						}
						if(d.Data[i].Pool.length > 0)
						{
							td4.innerHTML += "<label class='status'>Pool</label>";
						}
						if(d.Data[i].Services.length > 0)
						{
							td4.innerHTML += "<label class='status'>Services</label>";
						}


						let td5 = document.createElement("td");
						if(d.Data[i].Used == true)
						{
							td5.innerHTML = "<label class='status yellow-back'>Used</label>";
						}
						else if(d.Data[i].Expired == true)
						{
							td5.innerHTML = "<label class='status red-back'>Expired</label>";
						}
						else
						{
							td5.innerHTML = "<label class='status blue-back'>Unused</label>";
						}


						let td6 = document.createElement("td");
						td6.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#coupon-detail/"+d.Data[i].Id+"' class='item'><i class='eye icon'></i>Coupon detail</a>" +
							"<a href='#new-coupon/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit coupon</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmCouponDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

    function populateDiscount(page)
    {
        let request = {};
        request.Page = 1;
        request.Perpage = 25;
        request.Filter = "search list";
        request.Filtervalue = $("#search-txt").val();
        request.job = "get discount list";


        if(Number(page) > 0)
        {
            request.Page = Number(page);
        }
        if($("#perpage").dropdown('get value') !== "")
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
                    let sn = ((d.Page - 1) * d.Perpage) + 1;
                    //$("#total_count").html(d.Total);
                    $("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateCoupon"));

                    if(d.Data.length === 0)
                    {
                        $("#table-body").html("<tr><td colspan='7'><div class='align-c pad-2'>" +
                            "<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
                            "<h6 class='sleak-b' style='color: dimgray;'>Empty Discount list returned</h6>" +
                            "</div></td></tr>");
                    }


                    for(var i = 0; i < d.Data.length; i++)
                    {
                        let row = document.createElement("tr");
                        row.id = d.Data[i].Id + "-row";

                        let td0 = document.createElement("td");
                        td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                        let td1 = document.createElement("td");
                        td1.innerHTML = d.Data[i].Name;

                        let td2 = document.createElement("td");
                        if(d.Data[i].Bypercentage)
                        {
                            td2.innerHTML = numFormat(d.Data[i].Value)+"%";
                        }
                        else
                        {
                            td2.innerHTML = $("#currency-symbol").val()+numFormat(d.Data[i].Value);
                        }


                        let td3 = document.createElement("td");
                        if(d.Data[i].Booking.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Booking</label>";
                        }
                        if(d.Data[i].Food.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Food</label>";
                        }
                        if(d.Data[i].Drinks.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Drinks</label>";
                        }
                        if(d.Data[i].Pastries.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Pastries</label>";
                        }
                        if(d.Data[i].Laundry.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Laundry</label>";
                        }
                        if(d.Data[i].Pool.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Pool</label>";
                        }
                        if(d.Data[i].Services.length > 0)
                        {
                            td3.innerHTML += "<label class='status'>Services</label>";
                        }



                        let td4 = document.createElement("td");
                        if(d.Data[i].Autoapply)
                        {
                            td4.innerHTML = "<label class='status'>" +
                                "<i class='green circle icon' style='font-size: 8px;'></i>" +
                                " Automatically</label>";
                        }
                        else
                        {
                            td4.innerHTML = "<label class='status'>" +
                                "<i class='red circle icon' style='font-size: 8px;'></i>" +
                                " Manually</label>";
                        }


                        let td5 = document.createElement("td");
                        if(d.Data[i].Status == true)
                        {
                            td5.innerHTML = "<div class='switch'><label><input type='checkbox' " +
                                "checked onchange=\"SetDiscount_status(this, '"+d.Data[i].Id+"')\"/>" +
                                "<span class='lever'></span></label></div>";
                        }
                        else
                        {
                            td5.innerHTML = "<div class='switch'><label><input type='checkbox' " +
                                "onchange=\"SetDiscount_status(this, '"+d.Data[i].Id+"')\"/>" +
                                "<span class='lever'></span></label></div>";
                        }


                        let td6 = document.createElement("td");
                        td6.innerHTML = "<div class='w3-container'> " +
                            "<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
                            "<i class='blue wrench icon'></i>" +
                            "<div class='menu'>" +
                            "<div class='header'>Action</div>" +
                            "<a href='#discount-detail/"+d.Data[i].Id+"' class='item'><i class='eye icon'></i>Discount detail</a>" +
                            "<a href='#new-discount/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit discount</a>" +
                            "<div class='ui divider'></div>" +
                            "<div class='item' onclick=\"ConfirmDiscountDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

	function populateExtraservice(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.job = "get extra services";

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

				if(d.Status == "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					//$("#total_count").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateExtraservice"));

					if(d.Data.length == 0)
					{
						//Empty set returned
						//$("#table-body").html("<tr><td colspan='4'></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = $("#currency-symbol").val()+numFormat(Number(d.Data[i].Price).toFixed(2));

						let td3 = document.createElement("td");
						td3.innerHTML = "<span style='cursor: pointer;'>" +
							"<i class='pencil green icon' onclick=\"editExtraservices('"+d.Data[i].Id+"','"+d.Data[i].Name+"','"+d.Data[i].Price+"')\"></i></span>" +
						"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='cursor: pointer;' " +
							"onclick=\"ConfirmExtraserviceDelete('"+d.Data[i].Id+"')\"><i id='"+d.Data[i].Id+"-delete-icon' class='trash red icon'></i></span>";

						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);

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

	function populateFoodcategory(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "";
		request.job = "get food category";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#food-cat-perpage").dropdown('get value') !== "")
		{
			request.Perpage = $("#food-cat-perpage").dropdown('get value');
		}

		$("#food-cat-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){

			$("#food-cat-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#food-cat-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFoodcategory"));

					if(d.Data.length === 0)
					{
						$("#food-cat-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty Food category list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = sn;

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Sort;

						let td3 = document.createElement("td");
						let ch = d.Data[i].Status ? "checked" : "";
						td3.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetFoodcategory_Status(this, '"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td4 = document.createElement("td");
						td4.innerHTML = "<span><i class='green pencil icon' style='cursor: pointer;' onclick=\"editFoodcategory('"+escape(JSON.stringify(d.Data[i]))+"')\"></i></span>" +
							"&nbsp;&nbsp;&nbsp;<span><i id='foodcat-del-btn-"+d.Data[i].Id+"' class='red trash icon' style='cursor: pointer;' onclick=\"ConfirmFoodcategoryDelete('" + d.Data[i].Id + "')\"></i></span>";


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);

						sn++;

						document.getElementById("food-cat-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.Status === "access denied")
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

	function populateFood(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get food list";


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

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFood"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='16'></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.Data[i].Images[0]+"' style='width: 80px; border-radius: 4px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Name+"<br/><span style='color: silver;'>Category: <span style='color: dimgray;'>"+
                            d.Data[i].Category.Name+"</span></span>";

						let td3 = document.createElement("td");
						td3.innerHTML = "<br/><span><span style='color: lightgray;'>Price: </span>" +
                            $("#currency-symbol").val() + numFormat(Number(d.Data[i].Price).toFixed(2))+"</span>";

                        if(d.Data[i].Compareat > 0)
                        {
                            td3.innerHTML += "<br/><span><span style='color: lightgray;'>Compare at: </span><strike>" +
                                $("#currency-symbol").val() + numFormat(Number(d.Data[i].Compareat).toFixed(2))+"</strike></span>";
                        }

                        let td4 = document.createElement("td");
                        let ch = d.Data[i].Onsite ? "checked" : "";
                        let rv = d.Data[i].Reservable ? "checked" : "";
                        td4.innerHTML = "<label><input class='filled-in' type='checkbox' "+ch+" onchange=\"SetFood_Visibility(this,'"+d.Data[i].Id+"')\"/><span>Visiblility</span></label>";
                        td4.innerHTML += "<br/><label><input class='filled-in' type='checkbox' "+rv+" onchange=\"SetFood_Reservable(this, '"+d.Data[i].Id+"')\"/><span>Can reserve</span></label>";


                        let td5 = document.createElement("td");
						td5.innerHTML = d.Data[i].Sort;

                        let td6 = document.createElement("td");
                        ch = d.Data[i].Status ? "checked" : "";
                        td6.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetFood_Status(this,'"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";


                        let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#food-report/"+d.Data[i].Id+"' class='item'><i class='pie chart icon'></i>Sales report</a>" +
							"<a href='#add-food/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit Food</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmFoodDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

						//optional fields
						/*
						row.appendChild(td14);
						*/

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

	function populateDrinkcategory(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "";
		request.job = "get drink category";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#drink-cat-perpage").dropdown('get value') !== "")
		{
			request.Perpage = $("#drink-cat-perpage").dropdown('get value');
		}

		$("#drink-cat-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){

			$("#drink-cat-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#drink-cat-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateDrinkcategory"));

					if(d.Data.length === 0)
					{
						$("#drink-cat-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty Drinks category list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = sn;

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Sort;

						let td3 = document.createElement("td");
						let ch = d.Data[i].Status ? "checked" : "";
						td3.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetDrinkcategory_Status(this, '"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td4 = document.createElement("td");
						td4.innerHTML = "<span><i class='green pencil icon' style='cursor: pointer;' onclick=\"editDrinkcategory('"+escape(JSON.stringify(d.Data[i]))+"')\"></i></span>" +
							"&nbsp;&nbsp;&nbsp;<span><i id='drinkcat-del-btn-"+d.Data[i].Id+"' class='red trash icon' style='cursor: pointer;' onclick=\"ConfirmDrinkcategoryDelete('" + d.Data[i].Id + "')\"></i></span>";


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);

						sn++;

						document.getElementById("drink-cat-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.Status === "access denied")
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

    function populateDrinks(page)
    {
        let request = {};
        request.Page = 1;
        request.Perpage = 25;
        request.Filter = "search list";
        request.Filtervalue = $("#search-txt").val();
        request.job = "get drink list";


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

                    let sn = ((d.Page - 1) * d.Perpage) + 1;
                    $("#total_count_btn").html(d.Total);
                    $("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFood"));

                    if(d.Data.length === 0)
                    {
                        //Empty set returned
                        $("#table-body").html("<tr><td colspan='16'></td></tr>");
                    }

                    for(var i = 0; i < d.Data.length; i++)
                    {
                        let row = document.createElement("tr");
                        row.id = d.Data[i].Id + "-row";

                        let td0 = document.createElement("td");
                        td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                        let td1 = document.createElement("td");
                        td1.innerHTML = "<img src='files/"+d.Data[i].Images[0]+"' style='width: 80px; border-radius: 4px;'/>";

                        let td2 = document.createElement("td");
                        td2.innerHTML = d.Data[i].Name+"<br/><span style='color: silver;'>Category: <span style='color: dimgray;'>"+
                            d.Data[i].Category.Name+"</span></span>";

                        let td3 = document.createElement("td");
                        td3.innerHTML = "<br/><span><span style='color: lightgray;'>Price: </span>" +
                            $("#currency-symbol").val() + numFormat(Number(d.Data[i].Price).toFixed(2))+"</span>";

                        if(d.Data[i].Compareat > 0)
                        {
                            td3.innerHTML += "<br/><span><span style='color: lightgray;'>Compare at: </span><strike>" +
                                $("#currency-symbol").val() + numFormat(Number(d.Data[i].Compareat).toFixed(2))+"</strike></span>";
                        }

                        let td4 = document.createElement("td");
                        let ch = d.Data[i].Onsite ? "checked" : "";
                        let rv = d.Data[i].Reservable ? "checked" : "";
                        td4.innerHTML = "<label><input class='filled-in' type='checkbox' "+ch+" onchange=\"SetDrink_Visibility(this,'"+d.Data[i].Id+"')\"/><span>Visiblility</span></label>";
                        td4.innerHTML += "<br/><label><input class='filled-in' type='checkbox' "+rv+" onchange=\"SetDrink_Reservable(this, '"+d.Data[i].Id+"')\"/><span>Can reserve</span></label>";


                        let td5 = document.createElement("td");
                        td5.innerHTML = d.Data[i].Sort;

                        let td6 = document.createElement("td");
                        ch = d.Data[i].Status ? "checked" : "";
                        td6.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetDrink_Status(this,'"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";


                        let td7 = document.createElement("td");
                        td7.innerHTML = "<div class='w3-container'> " +
                            "<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
                            "<i class='blue wrench icon'></i>" +
                            "<div class='menu'>" +
                            "<div class='header'>Action</div>" +
							"<a href='#drink-report/"+d.Data[i].Id+"' class='item'><i class='pie chart icon'></i>Sales report</a>" +
							"<a href='#add-drinks/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit Drink</a>" +
							"<div class='ui divider'></div>" +
                            "<div class='item' onclick=\"ConfirmDrinkDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

	function populatePastrycategory(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "";
		request.job = "get pastry category";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#pastry-cat-perpage").dropdown('get value') !== "")
		{
			request.Perpage = $("#pastry-cat-perpage").dropdown('get value');
		}

		$("#pastry-cat-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){

			$("#pastry-cat-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pastry-cat-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populatePastrycategory"));

					if(d.Data.length === 0)
					{
						$("#pastry-cat-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/question.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty Pastry category list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = sn;

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Sort;

						let td3 = document.createElement("td");
						let ch = d.Data[i].Status ? "checked" : "";
						td3.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetPastrycategory_Status(this, '"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";

						let td4 = document.createElement("td");
						td4.innerHTML = "<span><i class='green pencil icon' style='cursor: pointer;' onclick=\"editPastrycategory('"+escape(JSON.stringify(d.Data[i]))+"')\"></i></span>" +
							"&nbsp;&nbsp;&nbsp;<span><i id='pastrycat-del-btn-"+d.Data[i].Id+"' class='red trash icon' style='cursor: pointer;' onclick=\"ConfirmPastrycategoryDelete('" + d.Data[i].Id + "')\"></i></span>";


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);

						sn++;

						document.getElementById("pastry-cat-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.Status === "access denied")
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

	function populatePastries(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get pastry list";


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

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populatePastries"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='16'></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = "<img src='files/"+d.Data[i].Images[0]+"' style='width: 80px; border-radius: 4px;'/>";

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Name+"<br/><span style='color: silver;'>Category: <span style='color: dimgray;'>"+
							d.Data[i].Category.Name+"</span></span>";

						let td3 = document.createElement("td");
						td3.innerHTML = "<br/><span><span style='color: lightgray;'>Price: </span>" +
							$("#currency-symbol").val() + numFormat(Number(d.Data[i].Price).toFixed(2))+"</span>";

						if(d.Data[i].Compareat > 0)
						{
							td3.innerHTML += "<br/><span><span style='color: lightgray;'>Compare at: </span><strike>" +
								$("#currency-symbol").val() + numFormat(Number(d.Data[i].Compareat).toFixed(2))+"</strike></span>";
						}

						let td4 = document.createElement("td");
						let ch = d.Data[i].Onsite ? "checked" : "";
						let rv = d.Data[i].Reservable ? "checked" : "";
						td4.innerHTML = "<label><input class='filled-in' type='checkbox' "+ch+" onchange=\"SetPastry_Visibility(this,'"+d.Data[i].Id+"')\"/><span>Visiblility</span></label>";
						td4.innerHTML += "<br/><label><input class='filled-in' type='checkbox' "+rv+" onchange=\"SetPastry_Reservable(this, '"+d.Data[i].Id+"')\"/><span>Can reserve</span></label>";


						let td5 = document.createElement("td");
						td5.innerHTML = d.Data[i].Sort;

						let td6 = document.createElement("td");
						ch = d.Data[i].Status ? "checked" : "";
						td6.innerHTML = "<div class='switch'><label><input type='checkbox' "+ch+" onchange=\"SetPastry_Status(this,'"+d.Data[i].Id+"')\"/><span class='lever'></span></label></div>";


						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#pastry-report/"+d.Data[i].Id+"' class='item'><i class='pie chart icon'></i>Sales report</a>" +
							"<a href='#add-pastry/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit Pastry</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmPastryDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

						//optional fields
						/*
                        row.appendChild(td14);
                        */

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

				if(d.Status === "success")
				{

					$("#all-count-con").html(d.Totalcount);
					$("#resolved-count-con").html(d.Resolvedcount);
					$("#unresolved-count-con").html(d.Unresolvedcount);
					$("#stared-count-con").html(d.Staredcount);

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					if(d.Data.length === 0)
					{
						$("#table-body").html("<div class='align-c widget curve pad-2' style='margin-top: 5px; width: 100%;'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty message list returned</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.Data[i].Id + "-row";
						row.className = "w3-row widget hoverable curve message-con";
						row.style.marginTop = "5px";
						row.style.backgroundColor = !d.Data[i].Seen ? "rgb(240,255,240)" : "white";

						let snNumber = !d.Data[i].Opened ? sn +" <small><small><small><i class='circle green icon' title='Unread message'></i></small></small></small>" : sn;

						let check = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + snNumber + "</span></label>";

						let star = d.Data[i].Stared ?
							"<i id='"+d.Data[i].Id+"-star' class='star yellow icon' style='cursor: pointer;' onclick=\"starMessage(this, '"+d.Data[i].Id+"')\"></i>" :
							"<i id='"+d.Data[i].Id+"-star' class='star outline icon' style='cursor: pointer;' onclick=\"starMessage(this, '"+d.Data[i].Id+"')\"></i>";


						let status = d.Data[i].Status ? "<label class='status green-back'>Resolved</label>" : "<label class='red-back status'>Unresolved</label>";

						row.innerHTML =
							"<div class='w3-col l2 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke;'>" +
							check +
							"</div> " +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke;'>" +
							"<div class='align-c'>"+star+"</div> " +
							"</div> " +
							"<a href='#open-message/"+d.Data[i].Id+"'>" +
							"<div class='w3-col l2 m2 s12 l-pad-2 s-pad-1' style='cursor: pointer;'>" +
							"<div class=''>"+status+"</div> " +
							"</div> " +
							"</a>" +
							"<a href='#open-message/"+d.Data[i].Id+"'>" +
							"<div class='w3-col l6 m5 s12 l-pad-2 s-pad-1' style='border-right: 1px solid whitesmoke; cursor: pointer;'>" +
							"<div class=''><h6 class='sleak' style='margin:0px; font-family: Lato; font-size: 14px; font-weight: bold; color: black;'>"+
							shortenText(50, d.Data[i].Body)+"</h6></div> " +
							"</div> " +
							"</a>" +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1'>" +
							"<div class='align-c'><i id='"+d.Data[i].Id+"-btn' class='trash red icon' style='cursor: pointer;' onclick=\"ConfirmMessageDelete('"+d.Data[i].Id+"')\"></i></div> " +
							"</div> ";

						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();

					setTimeout(function () {
						$(".message-con").css("background-color","white");
					},  5000);
				}
				else if(d.Status === "access denied")
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

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					$("#email-count-con").html(d.Emailcount);
					$("#sms-count-con").html(d.SMScount);

					if(d.Data.length === 0)
					{
						$("#table-body").html("<div class='align-c widget curve pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Message template list is empty returned</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.Data[i].Id + "-row";
						row.className = "w3-row widget hoverable curve";
						row.style.marginTop = "3px";
						row.style.cursor = "pointer";

						let check = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";
						let emailsms = d.Data[i].Type == "email" ? "<h6 class='sleak' style='font-weight: bold;'><i class='green at icon'></i> Email</h6>"
							: "<h6 class='sleak' style='margin: 0px; font-weight: bold;'><i class='green mobile icon'></i> SMS</h6>";

						row.innerHTML =
							"<div class='widget w3-card curve'> " +
							"<div class='w3-row' style='border-bottom: 1px solid whitesmoke;'>" +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style=''>" +
							check +
							"</div>" +
							"<div class='w3-col l8 m7 s7 l-pad-2 s-pad-1'>" +
							"<h4 class='sleak' style='font-weight: normal;'>"+shortenText(100, d.Data[i].Title, (d.Data[i].Type == "sms" ? d.Data[i].Body : d.Data[i].Subject))+"</h4>" +
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
				else if(d.Status === "access denied")
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

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					if(d.Data.length === 0)
					{
						$("#table-body").html("<tr><td colspan='4'><div class='align-c widget curve pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty contact list returned</h6>" +
							"</div></td></tr>");
					}

					for(let i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' s-data=\""+d.Data[i].Id+":"+d.Data[i].Type+"\" type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
                        td1.innerHTML =
						d.Data[i].Type == "supplier" ?
                            (d.Data[i].Company == "" ? d.Data[i].Contactperson + "<br/><span style='color: silver;'>Source: <span class='blue-text'>"+d.Data[i].Type+"</span></span>"
                                : d.Data[i].Company + "<br/><span style='color: silver;'>Source: <span class='blue-text'>"+d.Data[i].Type+"</span></span>") : d.Data[i].Name + " " + d.Data[i].Surname + "<br/>" +
						"<span style='color: silver;'>Source: <span class='blue-text'>"+d.Data[i].Type+"</span></span>";

						let td2 = document.createElement("td");
						td2.innerHTML = "<span style='color: silver;'>Phone: </span>"+d.Data[i].Phone+"<br/>" +
						"<span style='color: silver;'>Email: </span>"+d.Data[i].Email;


						let td3 = document.createElement("td");


						let con3 = "";

						if(d.Data[i].Type === "subscriber")
						{
							let ob = {id:d.Data[i].Id, names:d.Data[i].Name +' '+d.Data[i].Surname, phone:d.Data[i].Phone, email:d.Data[i].Email};

							con3 = "<div class='w3-container'> " +
								"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>";

								if($("#contact-list-custom").hasClass("active"))
								{
									con3 += "<div class='item' onclick=\"removeContactfromList('"+d.Data[i].Id+"','"+d.Data[i].Type+"')\"><i class='minus icon'></i>Remove from this list</div>";
								}
								else
								{
									con3 += "<div class='item' onclick=\"addToContactList('"+d.Data[i].Id+"','"+d.Data[i].Type+"')\"><i class='plus icon'></i>Add to custom list</div>";
								}

								con3 +=
								"<div class='item' onclick=\"launchAddContact('"+escape(JSON.stringify(ob))+"')\"><i class='pencil icon'></i>Edit contact</div>" +
								"<div class='item' onclick=\"ConfirmContactDelete('"+d.Data[i].Id+"')\"><i class='trash icon'></i>Delete Contact</div>" +
								"</div>" +
								"</div></div>";
						}
						else
						{
							con3 = "<div class='w3-container'> " +
								"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
								"<i class='blue wrench icon'></i>" +
								"<div class='menu'>" +
								"<div class='header'>Action</div>";

								if($("#contact-list-custom").hasClass("active"))
								{
									con3 += "<div class='item' onclick=\"removeContactfromList('"+d.Data[i].Id+"','"+d.Data[i].Type+"')\"><i class='minus icon'></i>Remove from this list</div>";
								}
								else
								{
									con3 += "<div class='item' onclick=\"addToContactList('"+d.Data[i].Id+"','"+d.Data[i].Type+"')\"><i class='plus icon'></i>Add to custom list</div>";
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
				else if(d.Status === "access denied")
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

	function populateReviews()
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get reviews";


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

				if(d.Status === "success")
				{
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateFaq"));

					$("#review-responses-count").html(numFormat(d.Totalresponsecount));
					$("#sent-review-count").html(numFormat(d.Totalsentreviews));
					$("#ignored-review-count").html(numFormat(d.Totalsentreviews - d.Totalresponsecount));

					let resp_curve = "";
					for(let k = 0; k < d.Span.length; k++)
					{
						if(resp_curve == "")
						{
							resp_curve = d.Span[k].toString();
						}
						else
						{
							resp_curve += ","+d.Span[k].toString();
						}
					}
					$("#response-curve").html(resp_curve);
					$("#response-curve").peity('line', {fill:["rgb(64,153,255)"]});

					if(d.Data.length === 0)
					{
						$("#table-body").html("<div class='align-c widget w3-card curve pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Review list is empty</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.Data[i].Id + "-row";
						row.className = "w3-row widget hoverable curve";
						row.style.marginTop = "5px";

						let check = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";
						let emailsms = d.Data[i].Type == "email" ? "<label class='status'><i class='blue at icon'></i> Email</label>"
							: "<label class='status'><i class='blue mobile icon'></i> SMS</label>";
						let star = "<i class='star yellow icon'></i>";

						let status = d.Data[i].Status ? "<label class='status green-back'>Resolved</label>" : "<label class='red-back status'>Unresolved</label>";

						row.innerHTML =
							"<div class='widget w3-card curve'> " +
							"<div class='w3-row' style='border-bottom: 1px solid whitesmoke;'>" +
							"<div class='w3-col l1 m1 s12 l-pad-2 s-pad-1' style=''>" +
							check +
							"</div>" +
							"<a href='#review/"+d.Data[i].Id+"'> " +
							"<div class='w3-col l7 m7 s7 l-pad-2 s-pad-1'>" +
							"<h4 class='sleak' style='font-weight: normal; color: black;'>"+
							shortenText(80, d.Data[i].Title, d.Data[i].Body)+"</h4>" +
							"</div> " +
							"</a>" +
							"<a href='#review/"+d.Data[i].Id+"'> " +
							"<div class='w3-col l3 m3 s12 l-pad-2 s-pad-1'>" +
							"<div class='align-c'>" +
							"<h2 class='sleak red-text' style='margin: 0px;'>"+d.Data[i].Responsecount+"</h2>" +
							"<h6 class='sleak' style='margin: 0px; font-size: 12px; color: dimgray;'>Responses</h6>" +
							"</div> " +
							"</div> " +
							"</a>" +
							"<div class='w3-col l1 m4 s12 l-pad-2 s-pad-1'>" +
							"<div style='float: right;' class='ui right top pointing dropdown c-menu'>" +
							"<div class=''><i class='ellipsis vertical icon'></i></div>" +
							"<div class='menu'>" +
							"<div class='item' onclick=\"createLink('"+d.Data[i].Id+"')\"><i class='linkify icon'></i> Create Link</div>" +
							"<div class='item' onclick=\"createButton('"+d.Data[i].Id+"')\"><i class='hand pointer icon'></i> Create Button</div>" +
							"<div class='divider'></div>" +
							"<!--[for later]<a href='#create-review/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i> Edit</a>-->" +
							"<div class='item' onclick=\"ConfirmReviewDelete('"+d.Data[i].Id+"')\"><i class='trash icon'></i> Delete</div>" +
							"</div>" +
							"</div> " +
							"</div> " +
							"</div>" +


							"</div>";

						sn++;

						document.getElementById("table-body").appendChild(row);
					}

					$(".c-menu").dropdown();
				}
				else if(d.Status === "access denied")
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

	loadingSeo = true;
	function populateSeo()
	{
		$("#page").addClass("ui loading form");
		postJson("hms-admin/worker", function (data, status) {
			$("#page").removeClass("ui loading form");
			if(status === "done") {

				let d = JSON.parse(data);

				if (d.Status === "success")
				{
					getElement("auto-seo").checked = d.Data.Autoseo;
					$("#homepage-seo-keywords").val(d.Data.Homekeywords);
					$("#homepage-seo-description").val(d.Data.Homedescription);
					$("#lodging-seo-keywords").val(d.Data.Lodgingkeywords);
					$("#lodging-seo-description").val(d.Data.Lodgingdescription);
					$("#restaurant-seo-keywords").val(d.Data.Restaurantkeywords);
					$("#restaurant-seo-description").val(d.Data.Restaurantdescription);
					$("#bar-seo-keywords").val(d.Data.Barkeywords);
					$("#bar-seo-description").val(d.Data.Bardescription);
					$("#pastry-seo-keywords").val(d.Data.Pastrykeywords);
					$("#pastry-seo-description").val(d.Data.Pastrydescription);

					loadingSettings = false;
				}
				else
				{
					_page({ add: pageTop({ icon: "search", text: "Search Engine Optimization" }), clear: true });
					_page({add:"<div class='pad-3 widget lift-1'>" +
							"<div class='align-c'>" +
							"<h6 class='sleak'>" +
							"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
							d.Message +
							"</h6> " +
							"<button class='ui sleak blue button' onclick='DrawSEO()'>Try again</button>" +
							"</div>" +
							"</div>", class:"l-pad-3 s-pad-1"});
				}
			}
			else
			{
				_page({ add: pageTop({ icon: "search", text: "Search Engine Optimization" }), clear: true });
				_page({add:"<div class='pad-3 widget lift-1'>" +
						"<div class='align-c'>" +
						"<h6 class='sleak'>" +
						"<i class='ban icon' style='font-size: 3em; color: rgba(255,0,0,0.1)'></i><br/><br/>" +
						"Connection error. Check your connection and try again" +
						"</h6> " +
						"<button class='ui sleak blue button' onclick='DrawSEO()'>Try again</button>" +
						"</div>" +
						"</div>", class:"l-pad-3 s-pad-1"});
			}
		}, {job:"get seo"});
	}

	function populateLaundry(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "created";
		request.job = "get laundry items";


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

				if(d.Status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					//$("#total_count").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateLaundry"));

					if(d.Data.length == 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Laundry item list is empty</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = $("#currency-symbol").val()+numFormat(Number(d.Data[i].Price).toFixed(2));

						let td3 = document.createElement("td");
						td3.id = d.Data[i].Id + "-sale-con";
						td3.innerHTML = "0 sold";

						let td4 = document.createElement("td");
						td4.innerHTML = "<div class='switch'><label>" +
							"<input type='checkbox' "+(d.Data[i].Status ? "checked" : "")+" " +
							"onchange=\"changeLaundryStatus('"+d.Data[i].Id+"', this)\"/>" +
							"<span class='lever'></span></label></div>";

						let td5 = document.createElement("td");
						td5.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#new-laundry-item/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmLaundryDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

					populatePOSReport();
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

	function populatePool(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.Filter = "search list";
		request.Filtervalue = "created";
		request.job = "get pool sessions";


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

				if(d.Status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					//$("#total_count").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populatePool"));

					if(d.Data.length == 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='5'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Laundry item list is empty</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Name;

						let td2 = document.createElement("td");
						td2.innerHTML = $("#currency-symbol").val()+numFormat(Number(d.Data[i].Price).toFixed(2));

						let td3 = document.createElement("td");
						td3.id = d.Data[i].Id + "-sale-con";
						td3.innerHTML = "0 sold";


						let td4 = document.createElement("td");
						td4.innerHTML = "<div class='switch'><label>" +
							"<input type='checkbox' "+(d.Data[i].Status ? "checked" : "")+" " +
							"onchange=\"changePoolStatus('"+d.Data[i].Id+"', this)\"/>" +
							"<span class='lever'></span></label></div>";

						let td5 = document.createElement("td");
						td5.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='#new-pool-session/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmPoolDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

					populatePOSReport();
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

				if(d.Status === "success")
				{
					$("#event-count-con").html(d.Total);

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#event-pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateSchedule"));

					if(d.Data.length == 0)
					{
						$("#event-table").html("<div class='widget pad-6 curve w3-card align-c'>" +
						"<img src='"+host+"cdn/images/icons/pastel/code.png' style='width: 60px;'/>" +
						"<h6 class='sleak-b' style='color: dimgray;'>No events have been created yet</h6>" +
						"</div>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.Data[i].Id + "-row";
						row.className = "widget margin-b-t hoverable curve w3-card";
						row.style.cursor = "pointer";

						let con =
							"<div class='w3-row'>" +
							"<a href='#event-detail/"+d.Data[i].Id+"'>" +
							"<div class='w3-col l11 m11 s11 pad-t'>" +

							"<h6 class='sleak' style='font-weight: bold; color: rgb(80,80,80); margin-left: 10px;'>" +
							d.Data[i].Title +
							"</h6>" +

							"<h6 class='sleak' style='color: gray; margin-left: 10px; font-weight: bold;'>" +
							"<small><i class='terminal red-text icon'></i> "+
							shortenText(40, d.Data[i].Eventname)+
							"</small></h6>" +

							"</div>" +
							"</a>" +
							"<div class='w3-col l1 m1 s1 pad-t'>" +

							"<div style='float: right; margin-top: 7px;' class='ui right top pointing dropdown'>" +
							"<div class=''><i class='ellipsis vertical icon'></i></div>" +
							"<div class='menu'>" +

							(d.Data[i].Issystem ? "<div class='item disabled'>System event</div>" :

							(d.Data[i].Status ? "<div id='status-item-"+d.Data[i].Id+"' cur-status='false' class='item' onclick=\"changeEventStatus('"+d.Data[i].Id+"',this)\">Stop listening</div>" :
								"<div id='status-item-"+d.Data[i].Id+"' cur-status='true' class='item' onclick=\"changeEventStatus('"+d.Data[i].Id+"',this)\">Start listening</div>")
							)+

							(d.Data[i].Issystem ? "<div class='item disabled'>System event</div>" :
								"<a href='#new-event-listener/"+d.Data[i].Id+"' class='item'>Edit event</a>")+

							"<div class='divider'></div>" +
							"<div class='item' onclick=\"ConfirmEventlistenerDelete('"+d.Data[i].Id+"')\">Delete event</div>" +
							"</div>" +
							"</div> " +

							"</div>" +
							"</div><hr style='margin: 0px; padding: 0px;'/>" +

							"<a href='#event-detail/"+d.Data[i].Id+"'>" +
							"<div class='w3-row'>" +
							"<div class='w3-col l7 m7 s7'> " +
							"<div class='pad-t'>" +
							"<h6 id='status-con-"+d.Data[i].Id+"' class='sleak' style='margin-left: 10px; color: dimgray; font-weight: bold;'>" +
							(d.Data[i].Status ?
								"<span class='small-blue-pulse'></span> &nbsp;&nbsp;<small>Listening..." :
								"<span class='red-back' style='display: inline-block; border-radius: 50%; " +
								"height: 6px; width: 6px;'></span>" +
								" &nbsp;&nbsp;<small>Pending..") +
							"</small></h6>" +
							"</div>" +
							"</div>" +
							"<div class='w3-col l5 m5 s5'>" +
							"<h6 class='sleak blue-text' style='font-weight: bold; float: right; margin-right: 10px;'>" +
							"<small><i class='"+(d.Data[i].Message.Type == "sms" ? "mobile" : "at")+
							" icon'></i> "+(d.Data[i].Message.Type)+"</small></h6>" +
							"<h6 class='sleak green-text' style='font-weight: bold;'>" +
							"<small><i class='code icon'></i> "+(d.Data[i].Firecount)+"</small></h6>" +
							"</div> " +
							"</div>" +
							"</a>";

						row.innerHTML =  con;
						getElement("event-table").appendChild(row);
					}
					$(".ui.dropdown").dropdown();
				}
				else if(d.Status == "access_denied")
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

				if(d.Status == "success")
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

					if(d.Data.length == 0)
					{
						$("#schedule-table").html("<div class='widget pad-6 curve w3-card align-c'>" +
							"<img src='"+host+"cdn/images/icons/pastel/schedule.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No schedules have been created yet</h6>" +
							"</div>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("div");
						row.id = d.Data[i].Id + "-row";
						row.className = "widget margin-b-t hoverable curve w3-card";
						row.style.cursor = "pointer";

						let con =
							"<div class='w3-row'>" +
							"<a href='#schedule-detail/"+d.Data[i].Id+"'>" +
							"<div class='w3-col l11 m11 s11 pad-t'>" +

							"<h6 class='sleak' style='font-weight: bold; color: rgb(80,80,80); margin-left: 10px;'>" +
							d.Data[i].Title +
							"</h6>" +

							"<h6 class='sleak' style='color: gray; margin-left: 10px; font-weight: bold;'>" +
							"<small><i class='open envelope blue-text icon'></i> "+
							shortenText(40, d.Data[i].Message.Title, (d.Data[i].Message.Type == "sms" ?
								d.Data[i].Message.Body : d.Data[i].Message.Subject))+
							"</small></h6>" +

							"</div>" +
							"</a>" +
							"<div class='w3-col l1 m1 s1 pad-t'>" +

							"<div style='float: right; margin-top: 7px;' class='ui right top pointing dropdown'>" +
							"<div class=''><i class='ellipsis vertical icon'></i></div>" +
							"<div class='menu'>" +

							(d.Data[i].Issystem ? "<div class='item disabled'>System schedule</div>" :
							"<a href='#new-shchedule/"+d.Data[i].Id+"' class='item'>Edit schedule</a>")+

							"<div class='divider'></div>" +
							"<div class='item' onclick=\"ConfirmMessagescheduleDelete('"+d.Data[i].Id+"')\">Delete schedule</div>" +
							"</div>" +
							"</div> " +

							"</div>" +
							"</div><hr style='margin: 0px; padding: 0px;'/>" +

							"<a href='#schedule-detail/"+d.Data[i].Id+"'>" +
							"<div class='w3-row'>" +
							"<div class='w3-col l7 m7 s7'> " +
							"<div class='pad-t'>" +
							"<h6 id='status-con-"+d.Data[i].Id+"' class='sleak' style='margin-left: 10px; color: dimgray; font-weight: bold;'>" +
							(!d.Data[i].Completed ?
								"<i class='stopwatch green-text icon'></i> &nbsp;<small>Waiting.." :
								"<small><i class='check blue-text icon'></i></small> &nbsp;<small>Completed") +
							"</small></h6>" +
							"</div>" +
							"</div>" +
							"<div class='w3-col l5 m5 s5'>" +
							"<h6 class='sleak blue-text' style='font-weight: bold; float: right; margin-right: 10px;'>" +
							"<small><i class='"+(d.Data[i].Message.Type == "sms" ? "mobile" : "at")+
							" icon'></i> "+(d.Data[i].Message.Type)+"</small></h6>" +
							"</div> " +
							"</div>" +
							"</a>";

						row.innerHTML =  con;
						getElement("schedule-table").appendChild(row);
					}
					$(".ui.dropdown").dropdown();
				}
				else if(d.Status == "access_denied")
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

    function populateSupplier(page)
    {
        let request = {};
        request.Page = 1;
        request.Perpage = 25;
        request.Filter = "search list";
        request.Filtervalue = $("#search-txt").val();
        request.job = "get suppliers list";


        if(Number(page) > 0)
        {
            request.Page = Number(page);
        }
        if($("#perpage").dropdown('get value') !== "")
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
                    let sn = ((d.Page - 1) * d.Perpage) + 1;
                    //$("#total_count").html(d.Total);
                    $("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateCoupon"));

                    if(d.Data.length === 0)
                    {
                        $("#table-body").html("<tr><td colspan='7'><div class='align-c pad-2'>" +
                            "<img src='"+host+"cdn/images/icons/pastel/user.png' style='width: 60px;'/>" +
                            "<h6 class='sleak-b' style='color: dimgray;'>Empty suppliers list returned</h6>" +
                            "</div></td></tr>");
                    }


                    for(var i = 0; i < d.Data.length; i++)
                    {
                        let row = document.createElement("tr");
                        row.id = d.Data[i].Id + "-row";

                        let td0 = document.createElement("td");
                        td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' s-data=\""+d.Data[i].Id+":"+d.Data[i].Type+"\" class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                        let td1 = document.createElement("td");
                        td1.innerHTML = d.Data[i].Company;

                        let td2 = document.createElement("td");
                        td2.innerHTML = d.Data[i].Contactperson;


                        let td3 = document.createElement("td");
                        td3.innerHTML = d.Data[i].Phone;


                        let td4 = document.createElement("td");
                        td4.innerHTML = d.Data[i].Email;

                        let td5 = document.createElement("td");
                        td5.innerHTML = d.Data[i].Address;



                        let td6 = document.createElement("td");
                        td6.innerHTML = "<div class='w3-container'> " +
                            "<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
                            "<i class='blue wrench icon'></i>" +
                            "<div class='menu'>" +
                            "<div class='header'>Action</div>" +
                            "<a href='#new-supplier/"+d.Data[i].Id+"' class='item'><i class='pencil icon'></i>Edit supplier</a>" +
                            "<div class='ui divider'></div>" +
                            "<div class='item' onclick=\"ConfirmSupplierDelete('" + d.Data[i].Id + "')\"><i class='trash icon'></i>Delete</div>" +
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

    function populateInventoryItems(page)
    {
        let request = {};
        request.Page = 1;
        request.Perpage = 25;
        request.filter = "all";
        request.item_type = $("#inventory-item-type").val();
        request.searchterm = $("#search-txt").val();
        request.job = "get inventory items";

        if(!$("#instock-item-tab").hasClass("basic"))
        {
            request.filter = "instock";
        }
        if(!$("#lowstock-item-tab").hasClass("basic"))
        {
            request.filter = "lowstock";
        }
        if(!$("#outofstock-item-tab").hasClass("basic"))
        {
            request.filter = "outofstock";
        }

        let sterm = request.searchterm.split("-");
        if(sterm.length === 2)
        {
            if((Number(sterm[0].trim()) != NaN) && (Number(sterm[1].trim()) != NaN))
            {
                request.filter = "stockspan";
                request.rangestart = Number(sterm[0].trim());
                request.rangestop = Number(sterm[1].trim());
            }
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

                    $("#item-instock-statistic").html(d.instockcount);
                    $("#item-lowstock-statistic").html(d.lowstockcount);
                    $("#item-outofstock-statistic").html(d.outofstockcount);

                    let sn = ((d.Page - 1) * d.Perpage) + 1;
                    $("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateInventoryItems"));

                    if(d.Data.length === 0)
                    {
                        //Empty set returned
                        $("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
                            "<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
                            "<h6 class='sleak-b' style='color: dimgray;'>Empty products list returned</h6>" +
                            "</div></td></tr>");
                    }

                    for(var i = 0; i < d.Data.length; i++)
                    {
                        let row = document.createElement("tr");
                        row.id = d.Data[i].Id + "-row";
                        row.className = Number(d.Data[i].Stock) == 0 ? "negative" :
                            (Number(d.Data[i].Stock) <= Number(d.Data[i].Lowstockpoint) ? "warning" : "");

                        let td0 = document.createElement("td");
                        td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

                        let td1 = document.createElement("td");
                        td1.innerHTML = d.Data[i].Image != "" ?
                            "<img src='files/"+d.Data[i].Image+"' style='width: 60px; border-radius: 3px;'/>" :
                            "<img src='"+host+"cdn/images/icons/pastel/imageplaceholder.png' style='width: 40px; border-radius: 3px;'/>" ;

                        let td2 = document.createElement("td");
                        td2.style.fontWeight = "bold";
                        td2.innerHTML = d.Data[i].Name+"<br/><small class='blue-text' style='font-weight: bold;'>SKU: "+d.Data[i].Sku+"</small>";

                        let td3 = document.createElement("td");
                        td3.innerHTML = d.Data[i].Unit+
                            "<br/><small style='font-weight: bold; color: dimgray;'>plural: "+d.Data[i].Pluralunit+"</small>";


                        let td4 = document.createElement("td");
                        td4.style.fontWeight = "bold";
                        td4.id = d.Data[i].Id+"-stock-con";
                        td4.innerHTML = numFormat(Number(d.Data[i].Stock));


                        let td5 = document.createElement("td");
                        td5.style.fontWeight = "bold";
                        td5.innerHTML = numFormat(Number(d.Data[i].Lowstockpoint));

                        let td6 = document.createElement("td");
                        td6.id = d.Data[i].Id+"-status-con";
                        td6.innerHTML = Number(d.Data[i].Stock) <= 0 ? "<label class='red-back status'>Out of stock</label>" :
                            (Number(d.Data[i].Stock) > Number(d.Data[i].Lowstockpoint) ? "<label class='green-back status'>In Stock</label>" :
                                "<label class='yellow-back status'>Low stock</label>");

                        let editPath = "";
                        if(d.Data[i].Type === "bar_item")
                        {
                            editPath = "#new-bar-item/"+d.Data[i].Id;
                        }
                        if(d.Data[i].Type === "kitchen_item")
                        {
                            editPath = "#new-kitchen-item/"+d.Data[i].Id;
                        }
                        if(d.Data[i].Type === "pastry_item")
                        {
                            editPath = "#new-pastry-item/"+d.Data[i].Id;
                        }
                        if(d.Data[i].Type === "pool_item")
                        {
                            editPath = "#new-pool-item/"+d.Data[i].Id;
                        }
                        if(d.Data[i].Type === "room_item")
                        {
                            editPath = "#new-room-item/"+d.Data[i].Id;
                        }
                        if(d.Data[i].Type === "store_item")
                        {
                            editPath = "#new-store-item/"+d.Data[i].Id;
                        }
                        if(d.Data[i].Type === "laundry_item")
                        {
                            editPath = "#new-laundry-item/"+d.Data[i].Id;
                        }


                        let td7 = document.createElement("td");
                        td7.innerHTML = "<div class='w3-container'> " +
                            "<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
                            "<i class='blue wrench icon'></i>" +
                            "<div class='menu'>" +
                            "<div class='header'>Action</div>" +
                            "<div class='item' onclick=\"recordUsage('"+d.Data[i].Id+"')\"><i class='minus icon'></i>Record usage</div>" +
                            "<div class='divider'></div>" +
                            "<a href='' class='item'><i class='pie chart icon'></i>Inventory details</a>" +
                            "<div class='item' onclick=\"raisePurchaseRequest('"+d.Data[i].Id+"')\"><i class='plus icon'></i>Raise purchase request</div>" +
                            "<div class='item' onclick=\"recordDamage('"+d.Data[i].Id+"')\"><i class='minus icon'></i>Record damage</div>" +
                            "<div class='item' onclick=\"recordSurplus('"+d.Data[i].Id+"')\"><i class='plus icon'></i>Record surplus</div>" +
                            "<div class='ui divider'></div>" +
							"<div class='item' onclick=\"recordReturn('"+d.Data[i].Id+"')\"><i class='minus icon'></i>Record return</div>" +
							"<div class='ui divider'></div>" +
							"<a href='"+editPath+"' class='item'><i class='pencil icon'></i>Edit</a>" +
                            "<div class='item' onclick=\"ConfirmItemDelete('"+d.Data[i].Id+"')\"><i class='trash icon'></i>Delete</div>" +
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

                        //optional fields
                        /*
                        row.appendChild(td14);
                        */

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

	function populateInventoryItemsTimeline()
	{
		let request = {};
		request.Page = 0;
		request.Perpage = 0;
		request.filter = "all";
		request.item_type = $("#inventory-item-type").val();
		request.searchterm = $("#search-txt").val();
		request.job = "get inventory items";

		if($("#timeline-item-filter").dropdown('get value').toString().toLowerCase() == "in stock")
		{
			request.filter = "instock";
		}
		if($("#timeline-item-filter").dropdown('get value').toString().toLowerCase() == "low stock")
		{
			request.filter = "lowstock";
		}
		if($("#timeline-item-filter").dropdown('get value').toString().toLowerCase() == "out of stock")
		{
			request.filter = "outofstock";
		}

		let sterm = request.searchterm.split("-");
		if(sterm.length === 2)
		{
			if((Number(sterm[0].trim()) != NaN) && (Number(sterm[1].trim()) != NaN))
			{
				request.filter = "stockspan";
				request.rangestart = Number(sterm[0].trim());
				request.rangestop = Number(sterm[1].trim());
			}
		}


		$("#timeline-table").html(tableLoader(1));
		postJson("hms-admin/worker", function(data, status){
			$("#timeline-table").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#timeline-table").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty products list returned</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id;
						row.className = Number(d.Data[i].Stock) <= 0 ? "negative" :
							(Number(d.Data[i].Stock) <= Number(d.Data[i].Lowstockpoint) ? "warning" : "hoverable-item") +" item-rows";
						row.style.cursor = "pointer";
						row.onclick = function(){
							openItemTimeline(this.id);
						};

						let td0 = document.createElement("td");
						td0.innerHTML =
							"<div class='w3-row'>" +
							"<div class='w3-col l6 m6 s6'> <span style='font-weight: bold;'>"+d.Data[i].Name+"</span><br/>" +
							"<small class='blue-text' style='font-weight: bold;'>Product</small></div>" +
							"<div class='w3-col l6 m6 s6 align-r'>"+numFormat(Number(d.Data[i].Stock))+" "+
							(Number(d.Data[i].Stock) != 1 ? d.Data[i].Pluralunit : d.Data[i].Unit)+"<br/>" +

							(Number(d.Data[i].Stock) <= 0 ? "<small class='red-text' style='font-weight: bold;'>Out of stock</small>" :
								(Number(d.Data[i].Stock) <= Number(d.Data[i].Lowstockpoint) ?
									"<small class='yellow' style='font-weight: bold;'>Low stock</small>" :
									"<small class='green-text' style='font-weight: bold;'>In stock</small>"))+"</div>" +
							"</div>";


						row.appendChild(td0);
						document.getElementById("timeline-table").appendChild(row);
						row.onclick = function(){openItemTimeline(this.id)};
					}

					let rows = document.getElementsByClassName("item-rows");
					if(rows.length > 0)
					{
						rows[0].click();
					}
				}
				else if(d.Status == "access_denied")
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

	function populatePurchaseRequest(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.filter = "all";
		request.item_type = $("#inventory-item-type").val();
		request.searchterm = $("#search-txt").val();
		request.job = "get purchase requests";

		if($("#fulfilled-pr-tab").hasClass("active"))
		{
			request.filter = "fulfilled";
		}
		if($("#processing-pr-tab").hasClass("active"))
		{
			request.filter = "processing";
		}
		if($("#pending-pr-tab").hasClass("active"))
		{
			request.filter = "pending";
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

					$("#all-pr-label").html(d.All);
					$("#fulfilled-pr-label").html(d.Fulfilled);
					$("#processing-pr-label").html(d.Processing);
					$("#pending-pr-label").html(d.Pending);


					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateInventoryItems"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No purchase requests in this listing</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Reference;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Items.length;

						let td3 = document.createElement("td");
						td3.innerHTML = $("#currency-symbol").val()+numFormat(Number(d.Data[i].Total).toFixed(2));

						let td4 = document.createElement("td");
						td4.innerHTML = typeof(d.Data[i].User) != "string" ?
							((d.Data[i].User.Id != "") ? d.Data[i].User.Name+" "+d.Data[i].User.Surname :
								"<span class='red'>Suspended or removed</span>") :
								"<span class='red'>Unknown user</span>";

						let td5 = document.createElement("td");
						td5.innerHTML = d.Data[i].Created.WeekDay+", "+
							d.Data[i].Created.MonthName+"/"+
							d.Data[i].Created.Day+"/"+
							d.Data[i].Created.Year;


						let td6 = document.createElement("td");
						td6.innerHTML = d.Data[i].Fulfilled == true ? "<label class='green-back status'>Fullfilled</label>" :
							((d.Data[i].Order_reference == "") ? "<label class='red-back status'>Pending</label>" :
								"<label class='yellow-back status'>Processing</label>");


						let pPath = "";
						if(d.Data[i].Type === "bar_pr")
						{
							pPath = "#bar-"
						}
						if(d.Data[i].Type === "kitchen_pr")
						{
							pPath = "#kitchen-";
						}
						if(d.Data[i].Type === "pastry_pr")
						{
							pPath = "#pastry-";
						}
						if(d.Data[i].Type === "pool_pr")
						{
							pPath = "#pool-";
						}
						if(d.Data[i].Type === "room_pr")
						{
							pPath = "#room-";
						}
						if(d.Data[i].Type === "store_pr")
						{
							pPath = "#store-";
						}
						if(d.Data[i].Type === "laundry_pr")
						{
							pPath = "#laundry-";
						}


						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='"+pPath+(d.Data[i].Order_reference == "" ? "pr/"+d.Data[i].Id : "po/"+d.Data[i].Order_reference)+"' class='item'><i class='eye icon'></i>Open</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmPrDelete('"+d.Data[i].Id+"')\"><i class='trash icon'></i>Delete</div>" +
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

						//optional fields
						/*
                        row.appendChild(td14);
                        */

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


	let prItems = [];
	let prSuppliers = [];
	function populatePurchaseRequestData()
	{
		let request = {
			item_type: $("#inventory-item-type").val(),
			prid:getArg(),
			job: "get purchase request"
		};

		$("#table-body").html(tableLoader(6));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success
					prSuppliers = d.Suppliers;

					$("#total-con").html(numFormat(Number(d.Data.Total).toFixed(2)));
					$("#item-count-con").html(numFormat(Number(d.Data.Items.length)));

					if(d.Data.Items.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>" +
							"Invalid request. Request order may have been generated already</h6>" +
							"</div></td></tr>");
					}

					if(d.Data.Order_reference != "")
					{
						let pPath = "";
						if(request.item_type === "bar_item")
						{
							pPath = "#bar-po/"
						}
						if(request.item_type === "kitchen_item")
						{
							pPath = "#kitchen-po/";
						}
						if(request.item_type === "pastry_item")
						{
							pPath = "#pastry-po/";
						}
						if(request.item_type === "pool_item")
						{
							pPath = "#pool-po/";
						}
						if(request.item_type === "room_item")
						{
							pPath = "#room-po/";
						}
						if(request.item_type === "store_item")
						{
							pPath = "#store-po/";
						}
						if(request.item_type === "laundry_item")
						{
							pPath = "#laundry-po/";
						}

						$("#pr-generate-btn").prop("disabled", true);

						$("#table-body").html("<tr><td colspan='6'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>" +
							"The order for this request have been generated already</h6>" +
							"<br/>" +
							"<a href='"+pPath+d.Data.Order_reference+"'>" +
							"<button class='ui sleak blue button'>Goto request</button>" +
							"</a>" +
							"</div></td></tr>");
					}
					else
					{
						for(let i = 0; i < d.Data.Items.length; i++)
						{
							let row = document.createElement("tr");
							row.id = d.Data.Items[i].Item.Id;
							row.className = "item-row";

							let td0 = document.createElement("td");
							td0.innerHTML = "<span>" +(i + 1)+ "</span>";


							let td1 = document.createElement("td");
							td1.innerHTML = d.Data.Items[i].Item.Name;


							let td2 = document.createElement("td");
							td2.id = d.Data.Items[i].Item.Id+"-quantity";
							td2.innerHTML = d.Data.Items[i].Quantity;

							let td3 = document.createElement("td");
							td3.innerHTML = "<input id='"+d.Data.Items[i].Item.Id+"-rate' type='hidden' value='"+Number(d.Data.Items[i].Rate)+"'/>"+
								$("#currency-symbol").val()+numFormat(Number(d.Data.Items[i].Rate).toFixed(2));

							let td4 = document.createElement("td");
							td4.innerHTML = $("#currency-symbol").val()+numFormat((Number(d.Data.Items[i].Quantity) * Number(d.Data.Items[i].Rate)).toFixed(2));

							let td5 = document.createElement("td");

							let options = "";
							for(let j = 0; j < d.Data.Items[i].Item.Suppliers.length; j++)
							{
								options += "<option value='"+d.Data.Items[i].Item.Suppliers[j].Id+"'>" +
									(d.Data.Items[i].Item.Suppliers[j].Company != "" ?
										d.Data.Items[i].Item.Suppliers[j].Company :
										d.Data.Items[i].Item.Suppliers[j].Contactperson) +
									"</option>";
							}

							let genOptions = "";
							for(let j = 0; j < d.Suppliers.length; j++)
							{
								genOptions += "<option value='"+d.Suppliers[j].Id+"'>" +
									(d.Suppliers[j].Company != "" ?  d.Suppliers[j].Company : d.Suppliers[j].Contactperson)+
									"</option>";
							}
							td5.innerHTML = "<div>" +
								"<label><input class='with-gap' name='supplier-type-"+d.Data.Items[i].Id+"' type='radio' "+
								(d.Data.Items[i].Item.Suppliers.length == 0 ? "disabled" : "checked")+
								" onclick=\"populateSuppliers('"+d.Data.Items[i].Item.Id+"', 'assoc', this)\"/>" +
								"<span>Associated</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
								"<label><input class='with-gap' name='supplier-type-"+d.Data.Items[i].Id+"' type='radio'" +
								(d.Data.Items[i].Item.Suppliers.length == 0 ? "checked" : "")+
								" onclick=\"populateSuppliers('"+d.Data.Items[i].Item.Id+"', 'added', this)\"/>" +
								"<span>Added &nbsp;&nbsp;&nbsp;&nbsp;(suppliers)</span></label><br/>" +
								"<select id='"+d.Data.Items[i].Item.Id+"-select' class='ui fluid dropdown'><option value=''>Select supplier</option>"+
								(d.Data.Items[i].Item.Suppliers.length > 0 ? options : genOptions)+"</select>" +
								"</div>";


							prItems.push(d.Data.Items[i]);


							let prPath = "";
							if(request.item_type === "bar_pr")
							{
								prPath = "#bar-pr"
							}
							if(request.item_type === "kitchen_pr")
							{
								prPath = "#kitchen-pr";
							}
							if(request.item_type === "pastry_pr")
							{
								prPath = "#pastry-pr";
							}
							if(request.item_type === "pool_pr")
							{
								prPath = "#pool-pr";
							}
							if(request.item_type === "room_pr")
							{
								prPath = "#room-pr";
							}
							if(request.item_type === "store_pr")
							{
								prPath = "#store-pr";
							}
							if(request.item_type === "laundry_pr")
							{
								prPath = "#laundry-pr";
							}


							row.appendChild(td0);
							row.appendChild(td1);
							row.appendChild(td2);
							row.appendChild(td3);
							row.appendChild(td4);
							row.appendChild(td5);

							document.getElementById("table-body").appendChild(row);
						}

						$(".ui.dropdown").dropdown();
					}
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

	function populateSinglePurchaseOrder(e)
	{
		let request = {};
		request.item_type = $("#inventory-item-type").val();
		request.reference = e;
		request.job = "get purchase order";

		$("#order-table-list").html(
            "<div class='w3-row'>" +
            "<div class='w3-col l8 m12 s12'>" +
            "<div class='l-width-xl'>" +
            "<table class='ui celled structured table'>" +
            "<thead>" +
            "    <tr>" +
            "      <th>Item</th>" +
            "      <th>Quantity</th>" +
            "      <th>Rate</th>" +
            "      <th>Price</th>" +
            "      <th>Received</th>" +
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
            "      <th id='supplier-0'></th>" +
            "    </tr>" +
            "  </thead>" +
            "  <tbody id='suppliers-table-body'>" +
            "  </tbody>" +
            "</table>" +
            "</div>" +
            "</div>");

		$("#table-body").html(tableLoader(5));
		$("#suppliers-table-body").html(tableLoader(2));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");
			$("#suppliers-table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success
					if (d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='" + host + "cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No quotation document found</h6>" +
							"</div></td></tr>");
					}
					else
					{
						$("#order-table-list").html("");

						for(let i = 0; i < d.Data.length; i++)
						{
							let con = document.createElement("div");
							con.style.marginTop = "20px";
							con.className = "w3-row";

							let tots = 0;
							for(let k = 0; k < d.Data[i].Items.length; k++)
                            {
                                tots += (Number(d.Data[i].Items[k].Supplied) * Number(d.Data[i].Items[k].Rate));
                            }

							con.innerHTML =
								"<div class='w3-col l8 m12 s12'>" +
								"<div class='l-width-xl'>" +
								"<table class='ui celled structured table'>" +
								"<thead>" +
								"    <tr>" +
								"      <th>Item</th>" +
								"      <th>Quantity</th>" +
								"      <th>Rate</th>" +
								"      <th>Price</th>" +
								"      <th>Received</th>" +
								"    </tr>" +
								"  </thead>" +
								"  <tbody id='"+d.Data[i].Id+"-table-body'>" +
								"  </tbody>" +
								"</table>" +
								"</div>" +
								"</div>" +
								"<div class='w3-col l4 m12 s12'>" +
								"<table class='ui celled structured table'>" +
								"<thead>" +
								"    <tr>" +
								"      <th>Supplier</th>" +
								"      <td class='align-r blue' style='font-weight: bold;'>"+
                                            (d.Data[i].Supplier.Company != "" ?
                                            d.Data[i].Supplier.Company : d.Data[i].Supplier.Contactperson)+
                                "       </td>" +
								"    </tr>" +
                                "    <tr>" +
                                "      <th>Total</th>" +
                                "      <td>"+
                                        "<span style='font-weight: normal;'>"+$("#currency-symbol").val()+"</span> "+
                                        numFormat(Number(d.Data[i].Total).toFixed(2))+
                                "       </td>" +
                                "    </tr>" +
                                "    <tr>" +
                                "      <th>Generated by</th>" +
                                "      <td>" +
                                            d.Data[i].User.Name+" "+d.Data[i].User.Surname+
                                "       </td>" +
                                "    </tr>" +
                                "    <tr>" +
                                "      <td>Print order</td>" +
                                "      <td>" +
                                "           <button id='"+d.Data[i].Id+"-print-btn' " +
                                "               class='ui blue icon basic button' " +
                                "               onclick=\"getOrderPrintSession('"+d.Data[i].Id+"')\">" +
                                "               <i class='print icon'></i>" +
                                "           </button>"+
                                        (d.Data[i].Received ?
                                "           <button id='"+d.Data[i].Creditnote+"-print-btn' " +
                                "               class='ui blue sleak icon button' " +
                                "               onclick=\"getOrderCreditPrintSession('"+d.Data[i].Creditnote+"')\">" +
                                "               Print Credit Note" +
                                "           </button>": "") +
                                "       </td>" +
                                "    </tr>" +
                                (d.Data[i].Received ?
                                    "    <tr>" +
                                    "      <td>Receiver</td>" +
                                    "      <td>"+d.Data[i].Receiver.Name+" "+d.Data[i].Receiver.Surname+"</td>" +
                                    "</tr>" : ""
                                ) +
                                    (d.Data[i].Received ? "" :
                                "    <tr>" +
                                "      <td>Send order</td>" +
                                "      <td class='align-r blue'>" +
                                "           <div class='ui compact small buttons'>" +
                                "               <button id='"+d.Data[i].Id+"-sms-btn' class='ui blue sleak compact button' " +
                                                    (d.Data[i].Supplier.Phone == "" ? "disabled" : "onclick=\"sendOrderBySMS('"+d.Data[i].Id+"')\">") +
                                "                   <i class='open envelope icon'></i> SMS" +
                                "               </button>" +
                                "               <div class='or blue'></div>"+
                                "               <button id='"+d.Data[i].Id+"-email-btn' class='ui blue sleak compact button' " +
                                                    (d.Data[i].Supplier.Email == "" ? "disabled" : "onclick=\"sendOrderByMail('"+d.Data[i].Id+"')\">") +
                                "                   <i class='at icon'></i> E-mail" +
                                "               </button>" +
                            "               </div>"+
                                "       </td>" +
                                "    </tr>")+
                                "    <tr>" +
                                        (d.Data[i].Received ?
                                "       <td>Received amount</td>" +
                                "        <td>"+$("#currency-symbol").val()+numFormat(tots.toFixed(2))+"</td>"
                                        :
                                "      <th>Receive</th>" +
                                "      <td class='align-r blue'>"+
                                "           <button id='"+d.Data[i].Id+"-received-btn' class='ui green compact button' " +
                                "               onclick=\"confirmReceived('"+d.Data[i].Id+"')\">" +
                                "               <i class='check icon'></i> Mark received" +
                                "           </button>"+
                                "       </td>"
                                )
                                "    </tr>" +
								"  </thead>" +
								"  <tbody id='suppliers-table-body'>" +
								"  </tbody>" +
								"</table>" +
								"</div>" +
								"</div>";

							getElement("order-table-list").appendChild(con);

							for(let j = 0; j < d.Data[i].Items.length; j++)
                            {
                                let row = document.createElement("tr");

                                let td1 = document.createElement("td");
                                td1.innerHTML = d.Data[i].Items[j].Item.Name;

                                let td2 = document.createElement("td");
                                td2.innerHTML = numFormat(Number(d.Data[i].Items[j].Quantity));

                                let td3 = document.createElement("td");
                                td3.innerHTML = numFormat(Number(d.Data[i].Items[j].Rate).toFixed(2));

                                let td4 = document.createElement("td");
                                td4.innerHTML = numFormat((Number(d.Data[i].Items[j].Quantity) * (Number(d.Data[i].Items[j].Rate))).toFixed(2));

                                let td5 = document.createElement("td");
                                td5.innerHTML =
                                    "<input class='"+d.Data[i].Id+"-rec-qty' id='"+d.Data[i].Items[j].Id+"' " +
                                    "type='text' value='"+Number(d.Data[i].Items[j].Supplied)+"' style='padding: 5px; border: 0px; max-width: 100px;" +
                                    "background-color: white;' "+(d.Data[i].Received ? "disabled" : "")+"/>";

                                row.appendChild(td1);
                                row.appendChild(td2);
                                row.appendChild(td3);
                                row.appendChild(td4);
                                row.appendChild(td5);

                                getElement(d.Data[i].Id+"-table-body").appendChild(row);
                            }
						}
					}
				}
				else if(d.Status == "access denied")
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

	function populatePriceEnquiary(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.item_type = $("#inventory-item-type").val();
		request.searchterm = $("#search-txt").val();
		request.job = "get price enquiries";

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
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populatePriceEnquiary"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No quotation document found</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Displayreference;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Items.length;

						let td3 = document.createElement("td");
						td3.innerHTML = numFormat(Number(d.Data[i].Suppliers.length));

						let td4 = document.createElement("td");
						td4.innerHTML = d.Data[i].Sms ? "<i class='mobile blue icon'></i>SMS<br/>" : "";
						td4.innerHTML += d.Data[i].Email ? "<i class='at blue icon'></i>Email" : "";

						let td5 = document.createElement("td");
						td5.innerHTML = d.Data[i].Created.WeekDay+", "+
							d.Data[i].Created.MonthName+"/"+
							d.Data[i].Created.Day+"/"+
							d.Data[i].Created.Year;


						let td6 = document.createElement("td");
						td6.innerHTML = d.Data[i].Responsecomplete == true ? "<label class='green-back status'>Responded</label>" :
								"<label class='yellow-back status'>Waiting</label>";


						let prPath = "";
						if(d.Data[i].Type === "bar_quotation")
						{
							prPath = "#bar-quotation"
						}
						if(d.Data[i].Type === "kitchen_quotation")
						{
							prPath = "#kitchen-quotation";
						}
						if(d.Data[i].Type === "pastry_quotation")
						{
							prPath = "#pastry-quotation";
						}
						if(d.Data[i].Type === "pool_quotation")
						{
							prPath = "#pool-quotation";
						}
						if(d.Data[i].Type === "room_quotation")
						{
							prPath = "#room-quotation";
						}
						if(d.Data[i].Type === "store_quotation")
						{
							prPath = "#store-quotation";
						}
						if(d.Data[i].Type === "laundry_quotation")
						{
							prPath = "#laundry-quotation";
						}


						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='"+prPath+"/"+d.Data[i].Id+"' class='item'><i class='eye icon'></i>Open</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"ConfirmQuotationDelete('"+d.Data[i].Id+"')\"><i class='trash icon'></i>Delete</div>" +
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

						//optional fields
						/*
                        row.appendChild(td14);
                        */

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

	function populateSinglePriceEnquiry(e)
	{
		let request = {};
		request.item_type = $("#inventory-item-type").val();
		request.quotid = e;
		request.job = "get price enquiry";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(5));
		$("#suppliers-table-body").html(tableLoader(2));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");
			$("#suppliers-table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success
					if(d.Data.Items.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No quotation document found</h6>" +
							"</div></td></tr>");
					}

					for(let i = 0; i < d.Data.Items.length; i++)
					{
						let row = document.createElement("tr");

						let td0 = document.createElement("td");
						td0.innerHTML = d.Data.Items[i].Item.Name;
						td0.rowSpan = d.Data.Items[i].Pixel.length > 0 ?
							d.Data.Items[i].Pixel.length : 1;

						let td1 = document.createElement("td");
						td1.innerHTML = numFormat(Number(d.Data.Items[i].Quantity));
						td1.rowSpan = d.Data.Items[i].Pixel.length > 0 ?
							d.Data.Items[i].Pixel.length : 1;

						let td2 = document.createElement("td");
						if(d.Data.Items[i].Pixel.length > 0)
						{
							td2.innerHTML = d.Data.Items[i].Pixel[0].Supplier.Company != "" ?
								d.Data.Items[i].Pixel[0].Supplier.Company : d.Data.Items[i].Pixel[0].Supplier.Contactperson;
						}
						else
						{
							td2.innerHTML = "<span class='red'>Item has no suppliers</span>";
						}


						let td3 = document.createElement("td");
						if(d.Data.Items[i].Pixel.length > 0)
						{
							td3.innerHTML = $("#currency-symbol").val()+
							numFormat(Number(d.Data.Items[i].Pixel[0].Price).toFixed(2));
						}
						else
						{
							td3.innerHTML = "<span class='red'>Item has no suppliers</span>";
						}

						let td4 = document.createElement("td");
						if(d.Data.Items[i].Pixel.length > 0)
						{
							td4.innerHTML = $("#currency-symbol").val() +
								numFormat(Number(d.Data.Items[i].Pixel[0].Price * d.Data.Items[i].Quantity).toFixed(2));
						}
						else
						{
							td4.innerHTML = "<span class='red'>Item has no suppliers</span>";
						}

						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);

						document.getElementById("table-body").appendChild(row);

						if(d.Data.Items[i].Pixel.length > 1)
						{
							for(let j = 1; j < d.Data.Items[i].Pixel.length; j++)
							{
								let r = document.createElement("tr");

								let sup = document.createElement("td");
								sup.innerHTML = d.Data.Items[i].Pixel[j].Supplier.Company != ""  ?
								d.Data.Items[i].Pixel[j].Supplier.Company :
								d.Data.Items[i].Pixel[j].Supplier.Contactperson;

								let price = document.createElement("td");
								price.innerHTML = $("#currency-symbol").val()+
									numFormat(Number(d.Data.Items[i].Pixel[j].Price).toFixed(2));


								let tot = document.createElement("td");
								tot.innerHTML = $("#currency-symbol").val()+
									numFormat(Number(d.Data.Items[i].Pixel[j].Price * d.Data.Items[i].Quantity).toFixed(2));

								r.appendChild(sup);
								r.appendChild(price);
								r.appendChild(tot);

								document.getElementById("table-body").appendChild(r);
							}

						}
					}


					for(let i = 0; i < d.Data.Suppliers.length; i++)
					{
						let row = document.createElement("tr");

						let td0 = document.createElement("td");
						td0.innerHTML = (d.Data.Suppliers[i].Company != "" ?
							d.Data.Suppliers[i].Company :
							d.Data.Suppliers[i].Contactperson);

						let td1 = document.createElement("td");
						td1.innerHTML = "<button class='ui blue icon button' " +
							"onclick=\"resendQuotation(this, '"+getArg()+"','"+d.Data.Suppliers[i].Id+"')\">" +
							"<i class='paper plane icon'></i></button>";

						row.appendChild(td0);
						row.appendChild(td1);

						document.getElementById("suppliers-table-body").appendChild(row);
					}

				}
				else if(d.Status == "access denied")
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

	function populateAudits(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.item_type = $("#inventory-item-type").val();
		request.searchterm = $("#search-txt").val();
		request.job = "get inventory audits";


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
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateInventoryItems"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No Audits in this listing</h6>" +
							"</div></td></tr>");
					}

					for(let i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Title;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Created.WeekDay+", "+
							d.Data[i].Created.MonthName+"/"+
							d.Data[i].Created.Day+"/"+
							d.Data[i].Created.Year;

						let td3 = document.createElement("td");
						td3.innerHTML = numFormat(d.Data[i].Items.length);

						let td4 = document.createElement("td");
						td4.innerHTML = numFormat(Number(d.Itemscount) - d.Data[i].Items.length);

						let td5 = document.createElement("td");
						td5.innerHTML = "<span style='color: dimgray;'>Items: </span>"+
							"<span style='color: dimgray;'>" +numFormat(Number(d.Data[i].Surplus))+"</span></span><br/>" +
							"<span style='color: dimgray;'>Total: </span>"+
							"<span style='color: dimgray;'>" +numFormat(Number(d.Data[i].Surplustotal))+"</span></span>";


						let td6 = document.createElement("td");
						td6.innerHTML = "<span style='color: dimgray;'>Items: </span>"+
							"<span style='color: dimgray;'>" +numFormat(Number(d.Data[i].Shortage))+"</span></span><br/>" +
							"<span style='color: dimgray;'>Total: </span>"+
							"<span style='color: dimgray;'>" +numFormat(Number(d.Data[i].Shortagetotal))+"</span></span>";


						let prPath = "";
						if(d.Data[i].Type === "bar_audit")
						{
							prPath = "#bar-audit"
						}
						if(d.Data[i].Type === "kitchen_audit")
						{
							prPath = "#kitchen-audit";
						}
						if(d.Data[i].Type === "pastry_audit")
						{
							prPath = "#pastry-audit";
						}
						if(d.Data[i].Type === "pool_audit")
						{
							prPath = "#pool-audit";
						}
						if(d.Data[i].Type === "room_audit")
						{
							prPath = "#room-audit";
						}
						if(d.Data[i].Type === "store_audit")
						{
							prPath = "#store-audit";
						}
						if(d.Data[i].Type === "laundry_audit")
						{
							prPath = "#laundry-audit";
						}

						let c = {id:d.Data[i].Id, title:d.Data[i].Title};

						let td7 = document.createElement("td");
						td7.innerHTML = "<div class='w3-container'> " +
							"<div id='"+ d.Data[i].Id +"-btn' class='ui icon top right pointing dropdown button c-menu s-float-r'>" +
							"<i class='blue wrench icon'></i>" +
							"<div class='menu'>" +
							"<div class='header'>Action</div>" +
							"<a href='"+prPath+"/"+d.Data[i].Id+"' class='item'><i class='eye icon'></i>Open</a>" +
							"<div class='ui divider'></div>" +
							"<div class='item' onclick=\"launchAddInventoryAudit('"+escape(JSON.stringify(c))+"')\"><i class='pencil icon'></i>Edit title</div>" +
							"<div class='item' onclick=\"ConfirmAuditDelete('"+d.Data[i].Id+"')\"><i class='trash icon'></i>Delete</div>" +
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

						//optional fields
						/*
                        row.appendChild(td14);
                        */

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

	function populateSingleAudit(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.item_type = $("#inventory-item-type").val();
		request.searchterm = $("#search-txt").val();
		request.auditid = getArg();
		request.job = "get inventory audit";


		let audutItems = [];


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

				if(d.Status === "success")
				{

					for(let i = 0; i < d.Data.Audits.Items.length; i++)
					{
						audutItems.push(d.Data.Audits.Items[i].Item);
					}

					$("#accurate-count-con").html(numFormat(Number(d.Data.Audits.Accuratestock)));
					$("#shortage-count-con").html(numFormat(Number(d.Data.Audits.Shortagestock)));
					$("#surplus-count-con").html(numFormat(Number(d.Data.Audits.Surplusstock)));


					//on success
					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateInventoryItems"));

					if(d.Data.Items.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No Items to audit</h6>" +
							"</div></td></tr>");
					}


					for(let i = 0; i < d.Data.Items.length; i++)
					{

						if(((getElement("remove-audited").checked) && (!audutItems.includes(d.Data.Items[i].Id))) || (!getElement("remove-audited").checked))
						{
							let row = document.createElement("tr");
							row.id = d.Data.Items[i].Id + "-row";

							let td0 = document.createElement("td");
							td0.innerHTML = sn;

							let td1 = document.createElement("td");
							td1.innerHTML = d.Data.Items[i].Image == "" ?
								"<img src='"+host+"/cdn/images/icons/pastel/imageplaceholder.png'/>" :
								"<img src='files/"+d.Data.Items[i].Image+"' style='width: 80px; border-radius: 3px;'/>";


							let td2 = document.createElement("td");
							td2.innerHTML = d.Data.Items[i].Name;

							let td3 = document.createElement("td");
							let td4 = document.createElement("td");
							let td5 = document.createElement("td");

							if(audutItems.includes(d.Data.Items[i].Id))
							{
								for(let j = 0; j < d.Data.Audits.Items.length; j++)
								{
									if(d.Data.Audits.Items[j].Item == d.Data.Items[i].Id)
									{
										row.className = ((Number(d.Data.Audits.Items[j].Counted) == Number(d.Data.Audits.Items[j].Stock)) ?
											"" : ((Number(d.Data.Audits.Items[j].Counted) > Number(d.Data.Audits.Items[j].Stock)) ?
												"positive" : "negative"));


										td3.innerHTML = numFormat(Number(d.Data.Audits.Items[j].Counted)) + " <span style='color: lightgray;'>" +
											(Number(d.Data.Audits.Items[j].Counted) != 1 ?
												d.Data.Items[i].Pluralunit : d.Data.Items[i].Pluralunit) + "</span>";


										td4.innerHTML = ((Number(d.Data.Audits.Items[j].Counted) == Number(d.Data.Audits.Items[j].Stock)) ?
											"<i class='check green icon'></i> Accurate" :
											((Number(d.Data.Audits.Items[j].Counted) > Number(d.Data.Audits.Items[j].Stock)) ?
												"<i class='up arrow blue icon'></i> Surplus" :
												"<i class='down arrow red icon'></i> Shortage"));


										td5.innerHTML = ((Number(d.Data.Audits.Items[j].Counted) == Number(d.Data.Audits.Items[j].Stock)) ?
											0 :
											((Number(d.Data.Audits.Items[j].Counted) > Number(d.Data.Audits.Items[j].Stock)) ?
												numFormat(Number(d.Data.Audits.Items[j].Counted) - Number(d.Data.Audits.Items[j].Stock)) :
												numFormat(Number(d.Data.Audits.Items[j].Stock) - Number(d.Data.Audits.Items[j].Counted)))) +

											" <span style='color: lightgray;'>" +
											(Number(d.Data.Audits.Items[j].Counted) != 1 ?
												d.Data.Items[i].Pluralunit : d.Data.Items[i].Pluralunit) + "</span>";
									}
								}
							}
							else
							{
								td3.id = "count-row-"+d.Data.Items[i].Id;
								td3.innerHTML = "<div class='ui input'>" +
									"<input id='"+d.Data.Items[i].Id+"-count' type='text' value='0' style='border: none;'/>" +
									"</div>" +
									"<button class='ui blue sleak small button' " +
									"onclick=\"saveAudit('"+d.Data.Items[i].Id+"','"+d.Data.Audits.Id+"',this)\">" +
									"Save</button>";
								td3.colSpan = 3;
							}



							row.appendChild(td0);
							row.appendChild(td1);
							row.appendChild(td2);
							row.appendChild(td3);
							if(audutItems.includes(d.Data.Items[i].Id))
							{
								row.appendChild(td4);
								row.appendChild(td5);
							}
							sn++;

							document.getElementById("table-body").appendChild(row);
						}
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

				if(d.Status === "success")
				{
					$(".settings-control").prop("disabled", false);
					$(".settings-text").css("color","dimgray");


					$("#receipt-name").html(d.Data.Receipttemplate);

					if(getElement("receipt-image") != null)
					{
						getElement("receipt-image").src = host+"/hms/pages/receipt/"+d.Data.Receipttemplate+"/default.jpg";
					}

					$("#receipttemplate").val(d.Data.Receipttemplate);
					$("#lowstockemail").val(d.Data.Lowstockemail);
					$("#lowstockphone").val(d.Data.Lowstockphone);
					$("#onlineorderphone").val(d.Data.Onlineorderphone);
					getElement("receiptaddess").checked = d.Data.Receiptaddress;
					getElement("receiptemail").checked = d.Data.Receiptemail;
					getElement("receiptlogo").checked = d.Data.Receiptlogo;
					getElement("receiptsalutation").checked = d.Data.Receiptsalutation;
					getElement("cash_pay").checked = d.Data.Cash;
					getElement("pos_pay").checked = d.Data.Pos;

					getElement("online_pay").checked = d.Data.Online;
					getElement("other_pay").checked = d.Data.Others;
					getElement("refund").checked = d.Data.Refund;
					getElement("compound_tax").checked = d.Data.Compundtax;

					$("#salutation").val(d.Data.Salutation);

					if(d.Data.Papertype === "a4")
					{
						getElement("a4").checked = true;
						getElement("letter").checked = false;
						getElement("mm58").checked = false;
						getElement("mm80").checked = false;
					}
					if(d.Data.Papertype === "letter")
					{
						getElement("a4").checked = false;
						getElement("letter").checked = true;
						getElement("mm58").checked = false;
						getElement("mm80").checked = false;
					}
					if(d.Data.Papertype === "58mm")
					{
						getElement("a4").checked = false;
						getElement("letter").checked = false;
						getElement("mm58").checked = true;
						getElement("mm80").checked = false;
					}
					if(d.Data.Papertype === "80mm")
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
                    $("#error-pane-text").html(d.Message);
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

                if(d.Status === "success")
                {
                    $(".settings-control").prop("disabled", false);
                    $(".settings-text").css("color","dimgray");


                    $("#sms-unti-con").html(d.SMSUnits);
                    $("#low-unit-phone").val(d.Data.Lowunitphone);
                    $("#ononiru-message-api-key").val(d.Data.Ononiruapikey);
                    $("#low-uint-point").val(d.Data.Lowunitpoint);

                    $("#buy_units_link").attr("href", "https://gigahotels.com/client/smsunits/"+d.token);

                    if(d.Data.Tagprocessing === "remove")
                    {
                        getElement("remove-tag").checked = true;
                        getElement("leave-tag").checked = false;
                        getElement("cancel-tag").checked = false;
                    }
                    if(d.Data.Tagprocessing === "leave")
                    {
                        getElement("remove-tag").checked = false;
                        getElement("leave-tag").checked = true;
                        getElement("cancel-tag").checked = false;
                    }
                    if(d.Data.Tagprocessing === "cancel")
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
                    $("#error-pane-text").html(d.Message);
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

	function populateSystemLog(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.start_date = $("#from-date").val();
		request.stop_date = $("#to-date").val();
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get system log";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateSystemLog"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='5'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No rescord in the time span</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Created.WeekDay+", "+d.Data[i].Created.Day+"/"+
							d.Data[i].Created.MonthName+"/"+d.Data[i].Created.Year;

						let td2 = document.createElement("td");
						td2.innerHTML = "<span class='status green-back'>"+d.Data[i].Event+"</span>";

						let td3 = document.createElement("td");
						td3.innerHTML = d.Data[i].Source;

						let td4 = document.createElement("td");
						td4.innerHTML = d.Data[i].Description;


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);
						//optional fields
						/*
						row.appendChild(td14);
						*/

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

	function populateEventLog(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.start_date = $("#from-date").val();
		request.stop_date = $("#to-date").val();
		request.Filter = "search list";
		request.Filtervalue = $("#search-txt").val();
		request.job = "get event log";


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(5));

		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateSystemLog"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='5'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No rescord in the time span</h6>" +
							"</div></td></tr>");
					}

					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id + "-row";

						let td0 = document.createElement("td");
						td0.innerHTML = "<label><input id='"+d.Data[i].Id+"' class='check-sel' type='checkbox' onchange='CheckProcess()'><span>" + sn + "</span></label>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Created.WeekDay+", "+d.Data[i].Created.Day+"/"+
							d.Data[i].Created.MonthName+"/"+d.Data[i].Created.Year;

						let td2 = document.createElement("td");
						td2.innerHTML = "<span class='status green-back'>"+d.Data[i].Event+"</span>";

						let td3 = document.createElement("td");
						td3.innerHTML = d.Data[i].Source;

						let td4 = document.createElement("td");
						td4.innerHTML = d.Data[i].Description;


						row.appendChild(td0);
						row.appendChild(td1);
						row.appendChild(td2);
						row.appendChild(td3);
						row.appendChild(td4);
						//optional fields
						/*
						row.appendChild(td14);
						*/

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



	let line = null;
	let donut = null;
	function populatePOSReport(e)
	{
		let request = {
			start_date:$("#from-date").val(),
			stop_date:$("#to-date").val(),
			item_type:$("#report-item-type").val(),
			plotCriteria:"customer",
			job:"get pos report"
		};

		if(!$("#plot-customer").hasClass("blue"))
		{
			request.plotCriteria = "items";
		}

		//loaders
		if((e == null) || (e === true))
		{
			$("#pos-list-con").html("");
			for(let i = 0; i < 2; i++)
			{
				let pos = document.createElement("div");
				pos.innerHTML = "<div class='widget curve w3-card pad-1 w3-row' style='margin-bottom: 3px;'>" +
					"<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
					"<div class='ui placeholder'>" +
					"<div class='line'></div>"+
					"</div>" +
					"</div>" +
					"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>"+
					"<div class='ui placeholder'>" +
					"<div class='line'></div>"+
					"</div>" +
					"</div>" +
					"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
					"<div class='ui placeholder'>" +
					"<div class='line'></div>"+
					"</div>" +
					"</div>" +
					"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
					"<div class='ui placeholder'>" +
					"<div class='line'></div>"+
					"</div>" +
					"</div>" +
					"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
					"<div class='ui placeholder'>" +
					"<div class='line'></div>"+
					"</div>" +
					"</div>" +
					"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
					"<div class='ui placeholder'>" +
					"<div class='line'></div>"+
					"</div>" +
					"</div>" +
					"</div>";

				getElement("pos-list-con").appendChild(pos);
			}
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
		}

		postJson("hms-admin/worker", function(data, status){
			if((e == null) || (e === true))
			{
				$("#pos-list-con").html("");
				$(".load-slip").removeClass("ui placeholder");
				let load = document.getElementsByClassName("load-slip");
				for(let i = 0; i < load.length; i++)
				{
					if(load[i].getAttribute("color-store") != null)
					{
						load[i].style.color = load[i].getAttribute("color-store");
					}
				}
			}
			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(getElement("daily-sale-average-graph").innerHTML.length < 10)
					{
						line = Morris.Line({
							element: 'daily-sale-average-graph',
							data:d.Data.General.SalesPeriod,
							olddata: [
								{year: '2009', value: null},
								{year: '2010', value: 3},
								{year: '2011', value: 3},
								{year: '2012', value: 1},
								{year: '2013', value: 2},
								{year: '2014', value: 8},
								{year: '2015', value: 4},
								{year: '2016', value: null}
							],
							xkey: 'time',
							ykeys: ['value'],
							gridTextFamily:"quicksandregular",
							gridTextWeight: "bold",
							resize:true,
							gridTextSize:"14px",
							smooth:true,
							parseTime:false,
							//pointFillColors: "",
							//pointStrokeColors: "",
							parseTime:false, //set to false when x values are just data
							pointSize:"5px",
							//goals:[1.0, -1.0],
							//events:['2009','2010','2011','2012','2013','2014','2015','2016'],
							eventStrokeWidth:"1px",
							eventLineColors:["lightgray"],
							axes:true, //remove the text from graph if false
							grid:true, //remove horizontal lines if false
							lineWidth:"3px",
							lineColors:["steelblue"],
							labels: ['value']
						}).on('click', function(i, row){
							console.log(i, row);
						});
					}
					else
					{
						line.setData(d.Data.General.SalesPeriod);
					}

					if(getElement("sale-source-donut") != null)
					{
						if(getElement("sale-source-donut").innerHTML.length < 10)
						{
							donut = Morris.Donut({
								element: 'sale-source-donut',
								data: [
									{value: Number(d.Data.General.POSChannelSales), label: 'POS', formatted: Math.round(d.Data.General.POSChannelSales)+'%' },
									{value: Number(d.Data.General.WebChannelSales), label: 'Online', formatted: Math.round(d.Data.General.WebChannelSales)+'%' },
								],
								colors:["rgb(33,133,208)","whitesmoke","rgb(49,148,83)","whitesmoke"],
								formatter: function (x, data) { return data.formatted; }
							});
						}
						else
						{
							let data = [
								{value: Number(d.Data.General.POSChannelSales), label: 'POS', formatted: Math.round(d.Data.General.POSChannelSales)+'%' },
								{value: Number(d.Data.General.WebChannelSales), label: 'Online', formatted: Math.round(d.Data.General.WebChannelSales)+'%' },
							];
							donut.setData(data);
						}
					}


					let path = "";
					if(request.item_type === "kitchen_item")
					{
						path = "#kitchen-pos-transactions";
					}
					if(request.item_type === "pastry_item")
					{
						path = "#pastry-pos-transactions";
					}
					if(request.item_type === "bar_item")
					{
						path = "#bar-pos-transactions";
					}
					if(request.item_type === "laundry_item")
					{
						path = "#laundry-pos-transactions";
					}
					if(request.item_type === "pool_item")
					{
						path = "#pool-pos-transactions";
					}


					for(let i = 0; i < d.Data.Users.length; i++)
					{
						if(getElement(d.Data.Users[i].User.Id+"-pos-con") == null)
						{
							let pos = document.createElement("a");
							pos.id = d.Data.Users[i].User.Id+"-pos-con";
							pos.setAttribute("href", path+"/"+d.Data.Users[i].User.Id);
							pos.innerHTML = "<div class='widget curve hoverable w3-card pad-1 w3-row' style='margin-bottom: 3px; cursor: pointer;'>" +
								"<div class='w3-col l2 m4 s6' style='padding: 5px;'>" +
								"<h5 id='"+d.Data.Users[i].User.Id+"pos-user-name' class='sleak' style='color: black;'>"+
								d.Data.Users[i].User.Name+" "+d.Data.Users[i].User.Surname+"</h5>" +
								"</div>" +
								"<div id='"+d.Data.Users[i].User.Id+"pos-status' class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>"+
								(d.Data.Users[i].isActive ? "<span class='status green-back'>Active</span>" :
									"<span class='status yellow-back'>Inactive</span>")+"</div>" +
								"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
								"<h5 id='"+d.Data.Users[i].User.Id+"pos-item-count' class='sleak' style='color: dimgray; font-weight: bold;'>"+
								numFormat(Number(d.Data.Users[i].Itemcount))+"</h5>" +
								"</div>" +
								"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
								"<h5 class='sleak' style='color: dimgray; font-weight: bold;'>" +
								"<span style='font-family: arial; font-weight: normal;'>"+
								$('#currency-symbol').val()+"</span> <span id='"+d.Data.Users[i].User.Id+"pos-sold'>"+
								numFormat(Number(d.Data.Users[i].Sold).toFixed(2))+"</span></h5>" +
								"</div>" +
								"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
								"<h5 class='sleak' style='color: dimgray; font-weight: bold;'>" +
								"<span style='font-family: arial; font-weight: normal;'>"+
								$('#currency-symbol').val()+"</span> <span id='"+d.Data.Users[i].User.Id+"pos-paid'>"+
								numFormat(Number(d.Data.Users[i].Paid).toFixed(2))+"</span></h5>" +
								"</div>" +
								"<div class='w3-col l2 m4 s6 align-r' style='padding: 5px;'>" +
								"<h5 class='sleak' style='color: dimgray; font-weight: bold;'>" +
								"<span style='font-family: arial; font-weight: normal;'>"+
								$('#currency-symbol').val()+"</span> <span id='"+d.Data.Users[i].User.Id+"pos-balance'>"+
								numFormat(Number(d.Data.Users[i].Balance).toFixed(2))+"</h5>" +
								"</div>" +
								"</div>";

							getElement("pos-list-con").appendChild(pos);
						}
						else
						{
							$("#"+d.Data.Users[i].User.Id+"pos-user-name").html(d.Data.Users[i].User.Name+" "+d.Data.Users[i].User.Surname);
							$("#"+d.Data.Users[i].User.Id+"pos-status").html((d.Data.Users[i].isActive ? "<span class='status green-back'>Active</span>" :
								"<span class='status yellow-back'>Inactive</span>"));
							$("#"+d.Data.Users[i].User.Id+"pos-item-count").html(numFormat(Number(d.Data.Users[i].Itemcount)));
							$("#"+d.Data.Users[i].User.Id+"pos-sold").html(numFormat(Number(d.Data.Users[i].Sold).toFixed(2)));
							$("#"+d.Data.Users[i].User.Id+"pos-paid").html(numFormat(Number(d.Data.Users[i].Paid).toFixed(2)));
							$("#"+d.Data.Users[i].User.Id+"pos-balance").html(numFormat(Number(d.Data.Users[i].Balance).toFixed(2)));
						}
					}

					$("#general-total-con").html(numFormat(Number(d.Data.General.Totalsold).toFixed(2)));
					$("#general-items-con").html(numFormat(Number(d.Data.General.Itemcount)));
					$("#general-customers-con").html(numFormat(Number(d.Data.General.Customers)));


					if(getElement("most-sold-con") != null)
					{
						$("#most-sold-con").html("");

						if(d.Data.General.Salesort.length == 0)
						{
							$("#most-sold-con").html(
								"<div class='align-c pad-4'>" +
								"<h2 class='ui header' style='font-weight: normal; color: lightgray;'><i class='box icon'></i>" +
								"There are no items to show" +
								"</h2>" +
								"</div>");
						}

						for(let i = 0; i < d.Data.General.Salesort.length; i++)
						{
							let con = document.createElement("div");
							con.className = "w3-row";
							con.style.borderBottom = "1px solid lightgray";
							con.innerHTML =
								"<div class='w3-col l2 m2 s2 pad-1'>" +
								"<img src='files/"+
								(d.Data.General.Salesort[i].Item.Images[0] != null ?
									d.Data.General.Salesort[i].Item.Images[0] : "") +
								"' style='max-width: 100%; border-radius: 4px; width: 80px;'/>" +
								"</div>" +
								"<div class='w3-col l7 m7 s7 pad-1'>" +
								"<h6 class='sleak' style='font-weight: bold;'>"+
								d.Data.General.Salesort[i].Item.Name+
								"</h6>" +
								"</div>" +
								"<div class='w3-col l3 m3 s3 pad-1 align-r'>" +
								"<h6 class='sleak' style='font-weight: bold;'>"+
								numFormat(Number(d.Data.General.Salesort[i].Quantity)) +
								" sold</h6>" +
								"</div>";

							getElement("most-sold-con").appendChild(con);

							if(i >= 4)
							{
								break;
							}
						}

						$("#least-sold-con").html("");

						if(d.Data.General.Salesort.length <= 5)
						{
							$("#least-sold-con").html(
								"<div class='align-c pad-4'>" +
								"<h2 class='ui sleak header' " +
								"style='font-weight: normal; color: lightgray;'>" +
								"<i class='box icon'></i>" +
								"There are no items to show" +
								"</h2>" +
								"</div>");
						}

						for(let i = (d.Data.General.Salesort.length - 1); i > 4; i--)
						{
							let con = document.createElement("div");
							con.className = "w3-row";
							con.style.borderBottom = "1px solid lightgray";
							con.innerHTML =
								"<div class='w3-col l2 m2 s2 pad-1'>" +
								"<img src='files/"+
								(d.Data.General.Salesort[i].Item.Images[0] != null ?
									d.Data.General.Salesort[i].Item.Images[0] : "") +
								"' style='max-width: 100%; border-radius: 4px; width: 80px;'/>" +
								"</div>" +
								"<div class='w3-col l7 m7 s7 pad-1'>" +
								"<h6 class='sleak' style='font-weight: bold;'>"+
								d.Data.General.Salesort[i].Item.Name+
								"</h6>" +
								"</div>" +
								"<div class='w3-col l3 m3 s3 pad-1 align-r'>" +
								"<h6 class='sleak' style='font-weight: bold;'>"+
								numFormat(Number(d.Data.General.Salesort[i].Quantity)) +
								" sold</h6>" +
								"</div>";

							getElement("least-sold-con").appendChild(con);

							if(i <= (d.Data.General.Salesort.length - 5))
							{
								break;
							}
						}
					}
					else
					{
						for(let i = 0; i < d.Data.General.Salesort.length; i++)
						{
							if(getElement(d.Data.General.Salesort[i].Item.Id) != null)
							{
								$("#"+d.Data.General.Salesort[i].Item.Id+"-sale-con").html(d.Data.General.Salesort[i].Quantity+" sold");
							}
						}
					}
				}
				else
				{
					$(".settings-text").css("color","lightgray");
					$(".settings-control").prop("disabled", true);
					$("#error-pane-text").html(d.Message);
					$("#error-pane").transition("drop in");

					if((e == null) || (e === true))
					{
						$(".load-slip").removeClass("ui placeholder");
						$(".load-slip").css("color", "silver");
					}
				}
			}
			else
			{
				$(".settings-text").css("color","lightgray");
				$(".settings-control").prop("disabled", true);
				$("#error-pane-text").html("Connection error. Check your connection and try again");
				$("#error-pane").transition("drop in");

				if((e == null) || (e === true))
				{
					$(".load-slip").removeClass("ui placeholder");
					$(".load-slip").css("color", "silver");
				}
			}
		},request);
	}

	function populateUserPOSReport(e)
	{
		let request = {
			start_date:$("#from-date").val(),
			stop_date:$("#to-date").val(),
			item_type:$("#report-item-type").val(),
			user:e,
			job:"get user pos report"
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
		$("#table-body").html(tableLoader(8));

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
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					$("#customers-con").html(numFormat(Number(d.Data.Customers)));
					$("#sold-items-con").html(numFormat(Number(d.Data.Solditems)));
					$("#total-sold-amount").html(numFormat(Number(d.Data.Totalcash).toFixed(2)));

					$("#total-sale").html(numFormat(Number(d.Data.Totalcash).toFixed(2)));
					$("#total-paid").html(numFormat(Number(d.Data.Paidcash).toFixed(2)));
					$("#total-balance").html(numFormat(Number(d.Data.Balance).toFixed(2)));
					$("#total-rebate").html(numFormat(Number(d.Data.Rebate).toFixed(2)));

					$("#cash-amount").html(numFormat(Number(d.Data.Cash).toFixed(2)));
					$("#pos-amount").html(numFormat(Number(d.Data.Pos).toFixed(2)));
					$("#web-amount").html(numFormat(Number(d.Data.Online).toFixed(2)));
					$("#others-amount").html(numFormat(Number(d.Data.Others).toFixed(2)));

					$("#pos-orders").html(numFormat(Number(d.Data.POSOrder)));
					$("#web-orders").html(numFormat(Number(d.Data.WebOrder)));

					$("#cash-bar").progress({percent: d.Data.Cashbar});
					$("#pos-bar").progress({percent: d.Data.Posbar});
					$("#web-bar").progress({percent: d.Data.Onlinebar});
					$("#others-bar").progress({percent: d.Data.Othersbar});

					if(d.Data.user.Id != "")
					{
						$("#pos-user-name").html(
							"<i class='green user circle icon'></i>"+
							d.Data.user.Name+" "+d.Data.user.Surname);
					}
					else
					{
						$("#pos-user-name").html("Unknow user");
					}

					populateUserPOSTransactions();
				}
				else
				{
					$(".settings-text").css("color","lightgray");
					$(".settings-control").prop("disabled", true);
					$("#error-pane-text").html(d.Message);
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

	function populateUserPOSTransactions(page)
	{
		let request = {};
		request.Page = 1;
		request.Perpage = 25;
		request.start_date = $("#from-date").val();
		request.stop_date = $("#to-date").val();
		request.Filter = "all";
		request.Filtervalue = $("#search-txt").val();
		request.user = getArg();
		request.item_type = $("#report-item-type").val();
		request.job = "get user pos transactions";

		request.sale_span = "";
		request.spanStart = 0;
		request.spanStop = 0;

		if($("#staff-filter").hasClass("active"))
		{
			request.Filter = "staff";
		}
		if($("#customers-filter").hasClass("active"))
		{
			request.Filter = "guest";
		}
		if($("#others-filter").hasClass("active"))
		{
			request.Filter = "others";
		}


		let split = request.Filtervalue.split(" ");
		if(split.length > 1)
		{
			if((split[(split.length - 1)].trim() === "items") || (split[(split.length - 1)].trim() == "item") || (split[(split.length - 1)].trim() == "paid"))
			{
				let col = "";
				for(let i = 0; i < (split.length - 1); i++)
				{
					col += split[i];
				}
				let sp = col.split("-");

				if(sp.length === 2)
				{
					if(Number(sp[1]))
					{
						request.sale_span = split[(split.length - 1)].trim() == "item" ? "items" : split[(split.length - 1)].trim();
						request.spanStart = Number(sp[0].trim());
						request.spanStop = Number(sp[1].trim());

						request.Filtervalue = "";
					}
				}
			}
		}


		split = request.Filtervalue.split("-");

		if(split.length === 2)
		{
			if(Number(split[1].trim()))
			{
				request.sale_span = "paid";
				request.spanStart = Number(split[0].trim());
				request.spanStop = Number(split[1].trim());

				request.Filtervalue = "";
			}
		}


		if(Number(page) > 0)
		{
			request.Page = Number(page);
		}
		if($("#perpage").dropdown('get value') != "")
		{
			request.Perpage = $("#perpage").dropdown('get value');
		}


		$("#table-body").html(tableLoader(9));
		postJson("hms-admin/worker", function(data, status){
			$("#table-body").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					//on success

					let sn = ((d.Page - 1) * d.Perpage) + 1;
					$("#total_count_btn").html(d.Total);
					$("#pages").html(Paginate(Number(d.Page), Number(d.Total), Number(d.Perpage), "populateUserPOSTransactions"));

					if(d.Data.length === 0)
					{
						//Empty set returned
						$("#table-body").html("<tr><td colspan='9'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/documents.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>No record in the time span</h6>" +
							"</div></td></tr>");
					}


					let path = "";
					if(request.item_type === "kitchen_item")
					{
						path = "#kitchen-pos-transaction-detail/";
					}
					if(request.item_type === "pastry_item")
					{
						path = "#pastry-pos-transaction-detail/";
					}
					if(request.item_type === "bar_item")
					{
						path = "#bar-pos-transaction-detail/";
					}
					if(request.item_type === "laundry_item")
					{
						path = "#laundry-pos-transaction-detail/";
					}
					if(request.item_type === "pool_item")
					{
						path = "#pool-pos-transaction-detail/";
					}


					for(var i = 0; i < d.Data.length; i++)
					{
						let row = document.createElement("tr");
						row.id = d.Data[i].Id;

						$(row).on("click", function(){
							location.hash = path+this.id;
						});

						let td0 = document.createElement("td");
						td0.innerHTML = "<span>" + sn + "</span>";

						let td1 = document.createElement("td");
						td1.innerHTML = d.Data[i].Transactionid;

						let td2 = document.createElement("td");
						td2.innerHTML = d.Data[i].Itemcount;

						let td3 = document.createElement("td");
						td3.innerHTML = $("#currency-symbol").val()+
							numFormat(((Number(d.Data[i].Total) + Number(d.Data[i].Taxes)) -
								(Number(d.Data[i].Discount))).toFixed(2));

						let td4 = document.createElement("td");
						td4.innerHTML = $("#currency-symbol").val()+
							numFormat(Number(d.Data[i].Paidamount).toFixed(2));

						let td5 = document.createElement("td");
						td5.innerHTML = $("#currency-symbol").val()+
							numFormat((((Number(d.Data[i].Total) + Number(d.Data[i].Taxes)) -
								(Number(d.Data[i].Discount))) - Number(d.Data[i].Paidamount)).toFixed(2));

						let td6 = document.createElement("td");
						td6.innerHTML = d.Data[i].Channel == "pos" ?
							"<span class='status green-back'>pos</span>" :
							"<span class='status blue-back'>web</span>";

						let td7 = document.createElement("td");
						td7.innerHTML = d.Data[i].Hasstaff ?
							"<span class='status green-back'>Staff</span>" :
							(d.Data[i].Hasguest ? "<span class='status blue-back'>Guest</span>" :
								"<span class='status yellow-back'>Unknown</span>");

						let td8 = document.createElement("td");
						td8.innerHTML = d.Data[i].Created.WeekDay+", "+d.Data[i].Created.Day+"/"+
							d.Data[i].Created.MonthName+"/"+d.Data[i].Created.Year+" - "+
					d.Data[i].Created.Hour+":"+d.Data[i].Created.Miniute;


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

	function populatePosTransaction()
	{
		let request = {
			sale: getArg(),
			item_type: $("#report-item-type").val(),
			job: "get pos transaction"
		};


		$("#timeline-table").html(tableLoader(1));
		postJson("hms-admin/worker", function(data, status){
			$("#timeline-table").html("");

			if(status === "done")
			{
				let d = JSON.parse(data);

				if(d.Status === "success")
				{
					if(d.Data.sale.Items.length === 0)
					{
						//Empty set returned
						$("#timeline-table").html("<tr><td colspan='8'><div class='align-c pad-2'>" +
							"<img src='"+host+"cdn/images/icons/pastel/empty_box.png' style='width: 60px;'/>" +
							"<h6 class='sleak-b' style='color: dimgray;'>Empty products list returned</h6>" +
							"</div></td></tr>");
					}
					$("#currently-viewed-transaction").val(d.Data.sale.Id);

					for(let i = 0; i < d.Data.sale.Items.length; i++)
					{
						let row = document.createElement("tr");

						let td0 = document.createElement("td");
						td0.innerHTML =
							"<div class='w3-row'>" +
							(d.Data.sale.Items[i].Item.Images != null ?
							"<div class='w3-col l3 m3 s3'>" +
							(d.Data.sale.Items[i].Item.Images.length > 0 ?
								"<img src='files/"+d.Data.sale.Items[i].Item.Images[0]+"' style='max-width: 100%; border-radius: 5px; width: 60px;'/>" : "") +
							"</div>" : "") +
							"<div class='w3-col l6 m6 s6 pad-1'> " +
								"<h4 class='sleak' style='font-weight: bold; margin: 0px; padding: 0px;'>"+
								d.Data.sale.Items[i].Item.Name+"</h4>" +
							"</div>" +
							"<div class='w3-col "+(d.Data.sale.Items[i].Item.Images != null ? "l3 m3 s3" : "l6 m6 s6")+" align-r'>"+
							numFormat(Number(d.Data.sale.Items[i].Quantity))+"<br/>" +
									"<small class='green' style='font-weight: bold;'>Qty</small>"+
									"</div>" +
							"</div>";


						row.appendChild(td0);
						document.getElementById("timeline-table").appendChild(row);
					}

					getElement("inventory-timeline-con").innerHTML = "";

					let con = document.createElement("div");
					con.className = "w3-row";
					con.style.marginTop = "20px";
					con.innerHTML =
						"<div class='w3-row' style='margin-top: 20px;'>" +
						"<div class='w3-col l3 m4 s4'>" +
						"<div class='align-r pad-1'>" +
						"<label class='sleak widget lift-1 curve' " +
						"style='display: inline-block; font-weight: bold; padding: 7px;'>Transaction Summary</label>" +
						"</div>" +
						"</div>" +
						"<div class='w3-col l9 m8 s8'>" +
						"<div class='l-width-8 pad-1'>" +
						"<div id='item-detail-con' class='widget pad-1 lift-1 curve'>" +

						"<div class='w3-row'>" +
						"<div class='w3-col l6 m6 s6'>" +
						"<h3 class='sleak' style='font-weight: bold; color: black; margin-bottom: 0px;'>" +
						"<i class='shopping basket circular blue icon'></i> "+d.Data.sale.Channel + " order" +
						"</h3>" +
						"</div>" +
						"<div class='w3-col l6 m6 s6 align-r'>" +
						"<label style='cursor: pointer; color: dimgray;'>" +
						"<span style='color: rgb(235,235,235); font-weight: bold;'>"+ " details" +
						"</span>" +
						"<i class='chevron up icon' onclick=\"toggleDetail('item-detail', this)\"></i></label>" +
						"</div>" +

						"</div>" +

						"<div class='detail-con open' style='margin-top: 15px;'>" +
						"<table class='ui very basic table'>" +
						"<tr>" +
						"<td>Items</td>" +
						"<td>"+
						numFormat(Number(d.Data.sale.Itemcount))+
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Subtotal</td>" +
						"<td>"+
						$("#currency-symbol").val()+numFormat(Number(d.Data.sale.Total).toFixed(2))+
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Taxes</td>" +
						"<td>"+
						$("#currency-symbol").val()+numFormat(Number(d.Data.sale.Taxes).toFixed(2))+
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Discount</td>" +
						"<td>"+
						$("#currency-symbol").val()+numFormat(Number(d.Data.sale.Discount).toFixed(2))+
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Total</td>" +
						"<td>"+
						$("#currency-symbol").val()+numFormat(((Number(d.Data.sale.Total) + Number(d.Data.sale.Taxes)) - Number(d.Data.sale.Discount)).toFixed(2))+
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Paid</td>" +
						"<td>"+
						$("#currency-symbol").val()+numFormat(Number(d.Data.sale.Paidamount).toFixed(2)) +
						"</td>" +
						"</tr>" +
						"<tr>" +
						"<td>Balance</td>" +
						"<td>"+
						$("#currency-symbol").val()+numFormat((((Number(d.Data.sale.Total) + Number(d.Data.sale.Taxes)) - Number(d.Data.sale.Discount)) - Number(d.Data.sale.Paidamount)).toFixed(2)) +
						"</td>" +
						"</tr>" +
						"</table>" +
						"<input id='trans-total' type='hidden' value='"+((Number(d.Data.sale.Total) + Number(d.Data.sale.Taxes)) - Number(d.Data.sale.Discount)).toFixed(2)+"'/>" +
						"<input id='trans-paid' type='hidden' value='"+(Number(d.Data.sale.Paidamount)).toFixed(2)+"'/>" +
						"</div>" +
						"</div>" +
						"</div>" +
						"</div>" +
						"</div>";

					getElement("inventory-timeline-con").appendChild(con);

					if(d.Data.transaction == 0)
					{
						let con = document.createElement("div");
						con.className = "w3-row";
						con.style.marginTop = "20px";
						con.innerHTML =
							"<div class='w3-row' style='margin-top: 20px;'>" +
							"<div class='w3-col l3 m4 s4'>" +
							"<div class='align-r pad-1'>" +
							"<label style='display: inline-block; color: transparent;'>.</label>" +
							"</div>" +
							"</div>" +
							"<div class='w3-col l9 m8 s8'>" +
							"<div class='l-width-8 pad-1'>" +
							"<div class='widget pad-3 lift-1 curve align-c'>" +
							"<h2><i class='clipboard blue circular icon'></i></h2>" +
							"<h5 class='sleak' style='font-weight: bold; color: black; text-align: center;'>" +
							"No Payment record was found" +
							"</h5>" +
							"</div>" +
							"</div>" +
							"</div>" +
							"</div>";

						getElement("inventory-timeline-con").appendChild(con);
					}


					if(d.Data.sale.Guest.Id != "")
					{
						let con = document.createElement("div");
						con.className = "w3-row";
						con.style.marginTop = "0px";
						con.innerHTML =
							"<div class='w3-row' style=''>" +
							"<div class='w3-col l3 m4 s4'>" +
							"<span style='color: transparent;'>.</span>" +
							"</div>" +
							"<div class='w3-col l9 m8 s8'>" +
							"<div class='l-width-8 pad-1'>" +
							"<div id='"+d.Data.sale.Guest.Id+"-con' class='sleak widget pad-t lift-1 curve'>" +
							"<label style='float: right; cursor: pointer; color: dimgray;'>" +
							"<span style='color: silver; font-weight: bold;'>"+ " " +
							"Customer" +
							"</span>" +
							"<i class='chevron down icon' onclick=\"toggleDetail('"+d.Data.sale.Guest.Id+"', this)\"></i></label>" +
							"<label style='font-weight: bold; color: rgb(0,100,140);'>" +
							"<i class='user circular blue icon'></i> "+
							"<span style='font-family: Lato; font-weight: normal;'>"+
							"</span> " +
							d.Data.sale.Guest.Name +" "+d.Data.sale.Guest.Surname +
							"</label>" +
							"<div class='pad-1 detail-con' style='display: none;'>" +
							"<hr/>" +
							"<a href='#customer/"+d.Data.sale.Guest.Id+"'>" +
							"<button class='ui blue button'>See profile</button>" +
							"</a>" +
							"</div>" +
							"</div>" +
							"</div>" +
							"</div>" +
							"</div>";

						getElement("inventory-timeline-con").appendChild(con);
					}

					if(d.Data.sale.Staff.Id != "")
					{
						let con = document.createElement("div");
						con.className = "w3-row";
						con.style.marginTop = "0px";
						con.innerHTML =
							"<div class='w3-row' style=''>" +
							"<div class='w3-col l3 m4 s4'>" +
							"<span style='color: transparent;'>.</span>" +
							"</div>" +
							"<div class='w3-col l9 m8 s8'>" +
							"<div class='l-width-8 pad-1'>" +
							"<div id='"+d.Data.sale.Staff.Id+"-con' class='sleak widget pad-t lift-1 curve'>" +
							"<label style='float: right; cursor: pointer; color: dimgray;'>" +
							"<span style='color: silver; font-weight: bold;'>"+ " " +
							"Staff" +
							"</span>" +
							"<i class='chevron down icon' onclick=\"toggleDetail('"+d.Data.sale.Staff.Id+"', this)\"></i></label>" +
							"<label style='font-weight: bold; color: rgb(0,100,140);'>" +
							"<i class='user circular blue icon'></i> "+
							"<span style='font-family: Lato; font-weight: normal;'>"+
							"</span> " +
							d.Data.sale.Staff.Name +" "+d.Data.sale.Staff.Surname +
							"</label>" +
							"<div class='pad-1 detail-con' style='display: none;'>" +
							"<hr/>" +
							"<a href='#staff-profile/"+d.Data.sale.Staff.Id+"'>" +
							"<button class='ui blue button'>See profile</button>" +
							"</a>" +
							"</div>" +
							"</div>" +
							"</div>" +
							"</div>" +
							"</div>";

						getElement("inventory-timeline-con").appendChild(con);
					}

					for(let i = 0; i < d.Data.transaction.length; i++)
					{
						if(d.Data.transaction[i].Type == "debit")
						{
							let con = document.createElement("div");
							con.className = "w3-row";
							con.style.marginTop = "20px";
							con.innerHTML =
								"<div class='w3-row' style='margin-top: 20px;'>" +
								"<div class='w3-col l3 m4 s4'>" +
								"<div class='align-r pad-1'>" +
								"<label class='sleak widget lift-1 curve' " +
								"style='display: inline-block; font-weight: bold; padding: 7px;'>" +
								d.Data.transaction[i].Paytime.WeekDay+", " + d.Data.transaction[i].Paytime.Day + " "
								+ d.Data.transaction[i].Paytime.MonthName+" " + d.Data.transaction[i].Paytime.Year +
								"</label>" +
								"</div>" +
								"</div>" +
								"<div class='w3-col l9 m8 s8'>" +
								"<div class='l-width-8 pad-1'>" +
								"<div id='"+d.Data.transaction[i].Id+"-con' class='sleak widget pad-t lift-1 curve'>" +
								"<label style='float: right; cursor: pointer; color: dimgray;'>" +
								"<span style='color: silver; font-weight: bold;'>"+ " " +
								"Debit" +
								"</span>" +
								"<i class='chevron down icon' onclick=\"toggleDetail('"+d.Data.transaction[i].Id+"', this)\"></i></label>" +
								"<label style='font-weight: bold; color: maroon;'>" +
								"<i class='arrow up circular red icon'></i> "+
								"<span style='font-family: Lato; font-weight: normal;'>"+
								$("#currency-symbol").val()+
								"</span> " +
								numFormat(Number(d.Data.transaction[i].Amount).toFixed(2)) +
								"</label>" +
								"<div class='pad-1 detail-con' style='display: none;'>" +
								"<hr/>" +
								"<label style='font-weight: bold; color: dimgray;'><span style='color: silver;'>" +
								"Authorized by:</span> "+d.Data.transaction[i].User.Name+" "+d.Data.transaction[i].User.Surname+"</label>" +
								"<p style='margin-bottom: 0px;'>"+d.Data.transaction[i].Paytime.Hour+":" + d.Data.transaction[i].Paytime.Miniute +"</p>" +
								"<p style='color: dimgray; line-height: 170%;'>"+d.Data.transaction[i].Text+"</p>" +
								"</div>" +
								"</div>" +
								"<div class='widget lift-1 curve' style='margin-top: 3px; padding: 7px;'>" +
								"<label style='font-family: Lato; float: right; color: maroon;'>"+
								d.Data.transaction[i].Method+" &nbsp;</label>" +
								"<label style='font-family: Lato;'>" +
								"Pay method: &nbsp; <span style='color: rgb(255,182,77);'>"+
								"</span></label>" +
								"</div>" +
								"</div>" +
								"</div>" +
								"</div>";

							getElement("inventory-timeline-con").appendChild(con);
						}
						if(d.Data.transaction[i].Type == "credit")
						{
							let con = document.createElement("div");
							con.className = "w3-row";
							con.style.marginTop = "20px";
							con.innerHTML =
								"<div class='w3-row' style='margin-top: 20px;'>" +
								"<div class='w3-col l3 m4 s4'>" +
								"<div class='align-r pad-1'>" +
								"<label class='sleak widget lift-1 curve' " +
								"style='display: inline-block; font-weight: bold; padding: 7px;'>" +
								d.Data.transaction[i].Paytime.WeekDay+", " + d.Data.transaction[i].Paytime.Day + " "
								+ d.Data.transaction[i].Paytime.MonthName+" " + d.Data.transaction[i].Paytime.Year +
								"</label>" +
								"</div>" +
								"</div>" +
								"<div class='w3-col l9 m8 s8'>" +
								"<div class='l-width-8 pad-1'>" +
								"<div id='"+d.Data.transaction[i].Id+"-con' class='sleak widget pad-t lift-1 curve'>" +
								"<label style='float: right; cursor: pointer; color: dimgray;'>" +
								"<span style='color: silver; font-weight: bold;'>"+ " " +
								"Credit" +
								"</span>" +
								"<i class='chevron down icon' onclick=\"toggleDetail('"+d.Data.transaction[i].Id+"', this)\"></i></label>" +
								"<label style='font-weight: bold; color: forestgreen;'>" +
								"<i class='arrow down circular icon' style='color: forestgreen;'></i> "+
								"<span style='font-family: Lato; font-weight: normal;'>"+
								$("#currency-symbol").val()+
								"</span> " +
								numFormat(Number(d.Data.transaction[i].Amount).toFixed(2)) +
								"</label>" +
								"<div class='pad-1 detail-con' style='display: none;'>" +
								"<hr/>" +
								"<label style='font-weight: bold; color: dimgray;'><span style='color: silver;'>" +
								"Authorized by:</span> "+d.Data.transaction[i].User.Name+" "+d.Data.transaction[i].User.Surname+"</label>" +
								"<p style='margin-bottom: 0px;'>"+d.Data.transaction[i].Paytime.Hour+":" + d.Data.transaction[i].Paytime.Miniute +"</p>" +
								"<p style='color: dimgray; line-height: 170%;'>"+d.Data.transaction[i].Text+"</p>" +
								"</div>" +
								"</div>" +
								"<div class='widget lift-1 curve' style='margin-top: 3px; padding: 7px;'>" +
								"<label style='font-family: Lato; float: right; color: forestgreen;'>"+
								d.Data.transaction[i].Method+" &nbsp;</label>" +
								"<label style='font-family: Lato;'>" +
								"Pay method: &nbsp; <span style='color: rgb(255,182,77);'>"+
								"</span></label>" +
								"</div>" +
								"</div>" +
								"</div>" +
								"</div>";

							getElement("inventory-timeline-con").appendChild(con);
						}
					}
				}
				else if(d.Status == "access_denied")
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



	let itemRevenue = null;
    function populateItemReport(e)
    {
        let request = {
            start_date:$("#from-date").val(),
            stop_date:$("#to-date").val(),
            item_type:$("#report-item-type").val(),
            item:e,
            job:"get item report"
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

                if(d.Status === "success")
                {
                    getElement("item-image").src = "files/"+d.Data.Item.Images[0];
                    $("#item-name").html(d.Data.Item.Name);
                    $("#item-category").html(d.Data.Item.Category.Name);

					if(itemRevenue == null)
					{
						itemRevenue = new EasyPieChart(document.querySelector('#revenue-percentage'), {
							easing: 'easeOutElastic',
							onStep: function(from, to, percent) {
								this.el.children[0].innerHTML = Math.round(percent);
							}
						});
					}
					itemRevenue.update(2.3);
                }
                else
                {
                    $(".settings-text").css("color","lightgray");
                    $(".settings-control").prop("disabled", true);
                    $("#error-pane-text").html(d.Message);
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

	function ReportPopulateTemplate(e)
	{
		let request = {
			start_date:$("#from-date").val(),
			stop_date:$("#to-date").val(),
			item_type:$("#report-item-type").val(),
			user:e,
			job:"get user pos report"
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

				if(d.Status === "success")
				{

				}
				else
				{
					$(".settings-text").css("color","lightgray");
					$(".settings-control").prop("disabled", true);
					$("#error-pane-text").html(d.Message);
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
