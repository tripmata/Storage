
	let host = url.host ?? null;
	let cdn = url.storage ?? null;
	

	function logoutOutlet()
	{
		if (location.href.match(/(\?handshake)/))
		{
			window.close();
		}
		else
		{
			loadingButton({btn:"logout-btn"});
			postJson("logout", function(data, status){
				loadingButton({btn:"logout-btn",loading:false});
				if(status == "done")
				{
					let d = JSON.parse(data);

					if(d.status == "success")
					{
						location.reload();
					}
					else
					{
						ShowModal("Logout failed. Try again");
					}
				}
				else
				{
					ShowModal("Connection error. Try again");
				}
			},{});

		}
	}

	function openSecurity()
	{
		loadModal({title:"<i class='lock blue-txt icon'></i>Change password",size:"s",cover:"white",curve:true,html:
		"<div class='l-pad-2'><br/>" +
			"<form action='' method='post' onsubmit='return savePassword()'/>" +
			"<div class='ui fluid left icon input'><i class='shield green icon'></i><input id='old-password' class='wix-textbox' type='password' placeholder='Old Password'/></div><br/>" +
			"<div class='ui fluid left icon input'><i class='lock green icon'></i><input id='new-password' class='wix-textbox' type='password' placeholder='New Password'/></div><br/>" +
			"<div class='ui fluid left icon input'><i class='unlock green icon'></i><input id='conf-password' class='wix-textbox' type='password' placeholder='Re-type Password'/></div><br/>" +
			"<button id='pass-save-btn' class='ui blue compact sleak button'>Save Password</button>" +
			"</form>" +
		"</div>"});
	}

	function savePassword()
	{
		let request = {
			old:$("#old-password").val(),
			new:$("#new-password").val(),
			job:"update admin user password"
		};

		if(request.old == "")
		{
			errorButton({btn:"pass-save-btn",msg:"Incomplete data"});
		}
		else if(request.new == "")
		{
			errorButton({btn:"pass-save-btn",msg:"Incomplete data"});
		}
		else if(request.new != $("#conf-password").val())
		{
			errorButton({btn:"pass-save-btn",msg:"Passwords don't match"});
		}
		else
		{
			loadingButton({btn:"pass-save-btn"});
			postJson("hms-admin/worker", function(data, status){
				loadingButton({btn:"pass-save-btn",loading:false});
				if(status == "done")
				{
					let d = JSON.parse(data);

					if(d.Status == "success")
					{
						$("#old-password").val("");
						$("#new-password").val("");
						$("#conf-password").val("");

						$("#pass-save-btn").addClass("disabled positive");
						$("#pass-save-btn").html("<i class='check icon'></i>Saved");
						setTimeout(function(){
							$("#pass-save-btn").removeClass("disabled positive");
							$("#pass-save-btn").html("Save Password");
						},3000);
					}
					else
					{
						errorButton({btn:"pass-save-btn",msg:d.Message});
					}
				}
				else
				{
					errorButton({btn:"pass-save-btn",msg:"Connection error"});
				}
			},request);
		}

		return false;
	}

	function ShowModal(msg)
	{
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


		$("#modal").fadeIn(500, function(){

			modal.innerHTML = "<div id='modal-inner' style='display: none;'>"+
				"<div class='w3-col l4 m2 s12' style='color: transparent;'>.</div>" +
				"<div class='w3-col l4 m8 s12 s-pad-t'>" +
				"<div class='widget curve l-margin-t-7 margin-b-3'>" +
				"<div class='pad-1'><h6 style='font-family: quicksandregular; font-weight: bold;" +
				" color: dimgray;'>Message</h6></div>" +
				"<hr style='margin: 0px;'/>" +
				"<div class='pad-2'><p style='font-family: Lato;'>"+msg+"</p></div>" +
				"<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
				"<button class='btn green-back btn-small' onclick='closeModal()'>OK</button></div>" +
				"</div></div></div><br/><br/>";

			$("#modal-inner").transition('fade right in');

		});
	}

	function ConfirmModal(msg, func, yesmg, nomsg, param)
	{
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

		if(yesmg == null)
		{
			yesmg = "Yes";
		}
		if(nomsg == null)
		{
			nomsg = "Cancel";
		}


		document.body.appendChild(modal);


		$("#modal").fadeIn(500, function(){

			modal.innerHTML = "<div id='modal-inner' style='display: none;'>"+
				"<div class='w3-col l4 m2 s12' style='color: transparent;'>.</div>" +
				"<div class='w3-col l4 m8 s12 w3-padding-tiny'>" +
				"<div class='widget curve l-margin-t-7 margin-b-3'>" +
				"<div class='pad-1 '><h6 style='font-family: quicksandregular; font-weight: bold;" +
				" color: dimgray;'>Confirmation</h6></div>" +
				"<hr style='margin: 0px;'/>" +
				"<div class='pad-2'><p style='font-family: Lato;'>"+msg+"</p></div>" +
				"<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
				"<button class='ui small sleak button red-back' onclick=\"closeConfirm("+func+",false,'"+param+"')\">"+nomsg+"</button> " +
				"<button class='ui small sleak button green-back' onclick=\"closeConfirm("+func+",true,'"+param+"')\">"+yesmg+"</button></div>" +
				"</div></div></div><br/><br/>";

			$("#modal-inner").transition('fade right in');
		});
	}

	function closeConfirm(func, choice, param) {

		$("#modal-inner").transition('fade right', function(){
			$('#modal').fadeOut(500, function () {
				document.body.removeChild(document.getElementById('modal'));
				if(typeof func == "function")
				{
					func(choice, param);
				}
			});
		});
	}

	function closeModal(func)
	{
		$("#modal-inner").transition('fade right', function(){
			$('#modal').fadeOut(500, function () {
				document.body.removeChild(document.getElementById('modal'));
				if(typeof func == "function")
				{
					func();
				}
			});
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

		if(o != null)
		{
			if(o.btn != null)
			{
				b = document.getElementById(o.btn);
			}
			if(o.btn != null)
			{
				b = document.getElementById(o.btn);
			}
			if(o.msg != null)
			{
				m = o.msg;
			}
			if(o.delay != null)
			{
				d = o.delay;
			}

			if(b != null)
			{
				store = b.innerHTML;
				b.innerHTML = m;
				d.disabled = true;

				has_blue = $(b).hasClass("blue-back") ? true : false;
				has_red = $(b).hasClass("red-back") ? true : false;
				has_green = $(b).hasClass("green-back") ? true : false;
				has_yellow = $(b).hasClass("yellow-back") ? true : false;

				if(($(b).hasClass("ui")) && ($(b).hasClass("button")))
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

				setTimeout(function(){

					b.innerHTML = store;
					b.disabled = false;

					if(($(b).hasClass("ui")) && ($(b).hasClass("button")))
					{
						$(b).removeClass("negative");
						$(b).removeClass("disabled");
					}
					else
					{
						bc = $(b).css("background-color", bc);
						cl = $(b).css("color", cl);
					}
				}, d);
			}
		}
	}

	function loadingButton(o)
	{
		let b = null;
		let l = true;

		let store = "";

		if(o != null)
		{
			if(o.btn != null)
			{
				b = getElement(o.btn);
			}
			if(o.loading != null)
			{
				l = o.loading;
			}

			if(b != null)
			{
				if(l == true)
				{
					b.disabled = true;

					if(($(b).hasClass("ui")) && ($(b).hasClass("button")))
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

					if(($(b).hasClass("ui")) && ($(b).hasClass("button")))
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

	function loadModal(o)
	{
		let m_num = 0;

		while(getElement("modal_"+m_num) != null)
		{
		  m_num++;
		}

		let modal = document.createElement("div");
		modal.style.position = "fixed";
		modal.style.backgroundColor = "rgba(0,0,0,0.6)";
		modal.style.top = "0px";
		modal.style.width = "100%";
		modal.style.height = "100%";
		modal.style.zIndex = 300;
		modal.id = "modal_"+m_num;
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
		let curve = "", lift = "";
		let top = 7;


		if(o != null)
		{
			if(o.title != null)
			{
				title = o.title;
			}
			if(o.html != "")
			{
				html = o.html;
			}
			if(o.size != null)
			{
				if((o.size == "large") || (o.size == "l"))
				{
					outter = "l2 m1 s12";
					inner = "l8 m10 s12";
				}
				if((o.size == "midium") || (o.size == "m"))
				{
					outter = "l3 m3 s12";
					inner = "l6 m6 s12";
				}
				if((o.size == "small") || (o.size == "s"))
				{
					outter = "l4 m3 s12";
					inner = "l4 m6 s12";
				}
				if(o.curve != null)
				{
					curve = o.curve ? "curve" : "";
				}
				if(o.cover != null)
				{
					if(o.cover == "white")
					{
						modal.style.backgroundColor = "rgba(255,255,255,0.6)";
						lift = "lift-1";
					}
				}
			}
		}


		$("#modal_"+m_num).fadeIn(500, function(){

			modal.innerHTML = "<div id='modal_"+m_num+"-inner' style='display: none;'>"+
				"<div class='w3-col "+outter+"' style='color: transparent;'>.</div>" +
				"<div class='w3-col "+inner+" w3-padding-tiny'>" +
				"<div class='widget "+curve+" "+lift+" l-margin-t-"+top.toString()+" margin-b-3'>" +
				"<div class='pad-1 '>" +
				"<h6 id='modal-"+m_num+"-close-btn' style='font-family: quicksandbold; " +
				"color: dimgray; float: right; cursor: pointer;' onclick=\"closeGenModal('"+m_num+"')\">" +
				"<i class='times red-txt icon'></i></h6>" +
				"<h6 style='font-family: quicksandbold; color: dimgray;'>"+title+"</h6>" +
				"</div>" +
				"<hr style='margin: 0px;'/>" +
				"<div>"+html+"</div>" +
				"</div></div></div><br/><br/>";

			$("#modal_"+m_num+"-inner").transition('fade right in', function(){

				if(o.onLoaded != null)
				{
					o.onLoaded({modal:m_num});
				}

			});
		});
	}

	/*
	function closeGenModal(e, func)
	{
		$("#modal_"+e+"-inner").transition('fade right out', function(){
		  $("#modal_"+e).fadeOut(600, function(){
			document.body.removeChild(getElement("modal_"+e));
			if(typeof func == "function")
			{
				func();
			}
		  });
		});
	}
	 */

	function getElement(e, callback=null)
	{
		if(typeof e == "string")
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

	function closeGenModal(e, func) {
		$("#modal_" + e + "-inner").transition('fade right out', function () {
			$("#modal_" + e).fadeOut(600, function () {
				document.body.removeChild(getElement("modal_" + e));
				if (typeof func == "function") {
					func();
				}
			});
		});
	}

	function list(o) {
		let select = null;
		let type = "all";
		let job = "";

		let workingF = null;
		let doneF = null;

		if (o != null) {
			if (o.con != null) {
				select = o.con;
			}
			if (o.all != null) {
				type = o.all ? "all" : "search";
			}
			if (o.job != null) {
				job = o.job;
			}
			if (o.working != null) {
				workingF = o.working;
			}
			if (o.done != null) {
				doneF = o.done;
			}
			if (o.onCompleted != null) {
				doneF = o.onCompleted;
			}
			if (o.onLoaded != null) {
				doneF = o.onLoaded;
			}

			if ((select != null) && (job != ""))
			{
				if (type == "all") {
					if (typeof working == "function") {
						workingF();
					}
					postJson("hms-admin/worker", function (data, status) {
						if (status == "done") {
							let d = JSON.parse(data);

							if (d.Status == "success") {
								for (let i = 0; i < d.Data.length; i++) {
									let op = document.createElement("option");
									if (d.Data[i].Id != null) {
										op.value = d.Data[i].Id;
									}
									else if (d.Data[i].Code != null) {
										op.value = d.Data[i].Code;
									}
									if (d.Data[i].Name != null) {
										op.innerHTML = d.Data[i].Name;
									}
									else if (d.Data[i].Title != null) {
										op.innerHTML = d.Data[i].Title;
									}
									else {
										op.innerHTML = d.Data[i];
									}
									select.appendChild(op);
								}

								if (typeof doneF == "function") {
									doneF({ status: 'success' });
								}
							}
							else {
								if (typeof doneF == "function") {
									doneF({ status: 'error', message: "unable to load data" });
								}
							}
						}
						else {
							doneF({ status: 'error', message: "connection error" });
						}
					}, { job: job });
				}
				else
				{
					$(select).dropdown({
						apiSettings: {
							url: 'hms-admin/worker?job=' + job + '&q={query}'
						},
					});
				}
			}
		}
	}

	function DrawTable(lst, o) {
		let table = document.createElement("table");
		let cs = "ui table";
		let sn = true;
		let check = true;
		if (o != null) {
			if (o.class != null) {
					cs += " "+o.class;
			}
		}
		if (o != null) {
			if (o.Celled != null) {
				if (o.Celled === true) {
					cs += " celled";
				}
			}
		}
		if (o != null) {
			if (o.Padded != null) {
				if (o.Padded === true) {
					cs += " padded";
				}
			}
		}
		if (o != null) {
			if ((o.SN != null) && (typeof (o.SN) == "boolean")) {
				sn = o.SN;
			}
		}
		if (o != null) {
			if ((o.Checkbox != null) && (typeof (o.Checkbox) == "boolean")) {
				check = o.Checkbox;
			}
		}
		table.className = cs;
		$(table).css("font-family", "quicksandregular");

		let tText = "";
		tText = "<thead>" +
			"<tr>";
		if (sn == true) {
			if (check == true) {
				tText +=
					"<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>";
			}
			else {
				tText +=
					"<th><label><span>SN</span></label></th>";
			}
		}

		let hCon = "";
		for (let i = 0; i < lst.length; i++) {
			hCon += "<th>" + lst[i] + "</th>";
		}

		tText += hCon + "</tr></thead>" +
			"<tbody id='table-body' style='font-family: Lato;'>" +
			"</tbody>" +
			"<tfoot>" +
			"<tr>";

		let groupAction = "";

		if (o != null) {
			if (o.GroupAction != null) {
				groupAction = "<th colspan='1'>" +
					"<div class='ui icon top left pointing dropdown button'>" +
					"<i class='wrench blue icon'></i>" +
					"<div class='menu'>" +
					"<div class='header'>Group Action</div>";


				for (let i = 0; i < o.GroupAction.length; i++) {
					if (o.GroupAction[i].Text.toLowerCase() == "divider") {
						groupAction += "<div class='ui divider'></div>";
					}
					else {
						groupAction += "<div class='item' onclick='" + o.GroupAction[i].Method + "()'>" + o.GroupAction[i].Text + "</div>";
					}
				}

				groupAction += "</div></div></th>";
			}
		}

		tText += groupAction;

		table.innerHTML += tText + "<th colspan='1'>" +
			"<h4 class='ui header'>" +
			"<div class='content'>" +
			"<div id='perpage' class='ui inline dropdown'>" +
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
			"</div>" +
			"</h4>" +
			"" +
			"</th>" +
			"<th colspan='" + lst.length + "'>" +
			"      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
			"      </div>" +
			"    </th>" +
			"</tr>" +
			"</tfoot>";

		return table;
	}

	function DrawSearch(o) {
		let m = "";
		if (o != null) {
			if (o.Method != null) {
				m = o.Method;
			}
			if (o.method != null) {
				m = o.method;
			}
		}
		let ret = document.createElement("div");
		ret.className = "ui search";
		ret.innerHTML = "<div class='ui icon input'>" +
			"<input id='search-txt' class='prompt' type='text' placeholder='Search' onkeyup='if(event.keyCode == 13){" + m + "();}'> " +
			"<i class='search link blue circular inverted icon' onclick='" + m + "()'></i> </div> <div class='results'></div>";

		return ret;
	}

	function CheckAll(e) {
		var boxes = document.getElementsByClassName("check-sel");

		for (var i = 0; i < boxes.length; i++) {
			boxes[i].checked = e.checked;
		}
	}

	function CheckProcess() {
		var boxes = document.getElementsByClassName("check-sel");

		let checked = false;
		let unchecked = false;

		for (var i = 0; i < boxes.length; i++) {
			if (boxes[i].checked == true) {
				checked = true;
			}
			else {
				unchecked = true;
			}
		}

		if (checked && !unchecked) {
			$("#main-sel").prop("indeterminate", false);
			document.getElementById("main-sel").checked = true;
		}
		else if (!checked && unchecked) {
			$("#main-sel").prop("indeterminate", false);
			document.getElementById("main-sel").checked = false;
		}
		else if (checked && unchecked) {
			$("#main-sel").prop("indeterminate", true);
		}
	}

	function Paginate(current, total, perpage, func) {
		let content = "";


		let pages = Math.ceil(total / perpage);


		if (current <= 1) {
			content = " <a class='icon item'>" +
				"          <i class='left chevron icon'></i>" +
				"       </a>";
		}
		else {
			content = " <a class='icon item' onclick='" + func + "(" + (current - 1) + ")'>" +
				"          <i class='left chevron icon'></i>" +
				"       </a>";
		}


		if (pages <= 7) {
			for (var t = 1; t < (pages + 1); t++) {
				if (t == current) {
					content += "<a class='item active'>" + t + "</a>";
				}
				else {
					content += "<a class='item' onclick='" + func + "(" + t + ")'>" + t + "</a>";
				}
			}
		}
		else {
			let st = (current - 3);
			if (st <= 1) { st = 1; }
			else if ((current - 3) == 2) {
				content += "<a class='item' onclick='" + func + "(1)'>1</a>";
			}
			else {
				content += "<a class='item' onclick='" + func + "(1)'>1</a>";
				content += "<a class='item'>...</a>";
			}


			for (var j = st; j < current; j++) {
				if (j == current) {
					content += "<a class='item active'>" + j + "</a>";
				}
				else {
					content += "<a class='item' onclick='" + func + "(" + j + ")'>" + j + "</a>";
				}
			}

			var k = current;

			for (; k < (current + 4); k++) {
				if (k == current) {
					content += "<a class='item active'>" + k + "</a>";
				}
				else {
					content += "<a class='item' onclick='" + func + "(" + k + ")'>" + k + "</a>";
				}
				if (k == pages) {
					break;
				}
			}


			if ((current + 4) == pages) {
				content += "<a class='item' onclick='" + func + "(" + pages + ")'>" + pages + "</a>";
			}
			else if (k < pages) {
				content += "<a class='item'>...</a>";
				content += "<a class='item' onclick='" + func + "(" + pages + ")'>" + pages + "</a>";
			}
		}


		if (current >= pages) {
			content += " <a class='icon item'>" +
				"          <i class='right chevron icon'></i>" +
				"       </a>";
		}
		else {
			content += " <a class='icon item' onclick='" + func + "(" + (current + 1) + ")'>" +
				"          <i class='right chevron icon'></i>" +
				"       </a>";
		}


		return content;
	}

	function tableLoader(e) {
		let td = "";
		for (var i = 0; i < e; i++) {
			td += "<td><div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div></div></div> </td>";
		}
		return "<tr>" + td + "</tr>" + "<tr>" + td + "</tr>";
	}

	function dateSpan(elem, o)
	{
		let initial = "this month";
		if(o.default != null)
		{
			initial = o.default;
		}
		if(o.initial != null)
		{
			initial = o.initial;
		}
		$("#"+elem+" .date-span-from-date").on("change", function(){
			$("#"+elem+" .date-span-dropdown").dropdown("set text", "Custom");
			if(o.onChange != null)
			{
				if(typeof o.onChange == "function")
				{
					o.onChange($("#"+elem+" .date-span-from-date").val(), $("#"+elem+" .date-span-to-date").val());
				}
			}
		});
		$("#"+elem+" .date-span-to-date").on("change", function(){
			$("#"+elem+" .date-span-dropdown").dropdown("set text", "Custom");
			if(o.onChange != null)
			{
				if(typeof o.onChange == "function")
				{
					o.onChange($("#"+elem+" .date-span-from-date").val(), $("#"+elem+" .date-span-to-date").val());
				}
			}
		});
		$("#"+elem+" .date-span-dropdown").dropdown("set selected", initial);
		$("#"+elem+" .date-span-dropdown").dropdown({onChange:function(value, text, choice){
				processPeriod(elem, value, o);
			}});
		processPeriod(elem, initial, o);
	}

	function processPeriod(con, period, func)
	{
		let d = new Date();

		if(period.toString().toLowerCase() == "today")
		{
			$("#"+con+" .date-span-from-date").val(zerofy(d.getMonth() + 1)+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
			$("#"+con+" .date-span-to-date").val(zerofy(d.getMonth() + 1)+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
		}
		if(period.toString().toLowerCase() == "this month")
		{
			$("#"+con+" .date-span-from-date").val((zerofy(d.getMonth() + 1))+"/01/"+d.getFullYear());
			$("#"+con+" .date-span-to-date").val(zerofy((d.getMonth() + 1))+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
		}
		if(period.toString().toLowerCase() == "this year")
		{
			$("#"+con+" .date-span-from-date").val("01/01/"+d.getFullYear());
			$("#"+con+" .date-span-to-date").val(zerofy(d.getMonth() + 1)+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
		}
		if(period.toString().toLowerCase() == "last year")
		{
			$("#"+con+" .date-span-from-date").val("01/01/"+(d.getFullYear() - 1));
			$("#"+con+" .date-span-to-date").val("12/31/"+(d.getFullYear() - 1));
		}

		if(func.onChange != null)
		{
			if(typeof func.onChange == "function")
			{
				func.onChange($("#"+con+" .date-span-from-date").val(), $("#"+con+" .date-span-to-date").val());
			}
		}
	}

	function zerofy(num)
	{
		return Number(num) < 10 ? "0"+num : num;
	}

	function numToDay(num)
	{
		let ret  = "";

		switch(num)
		{
			case 0:
				ret = "Sunday";
				break;
			case 1:
				ret = "Monday";
				break;
			case 2:
				ret = "Tuesday";
				break;
			case 3:
				ret = "Wednesday";
				break;
			case 4:
				ret = "Thursday";
				break;
			case 5:
				ret = "Friday";
				break;
			case 6:
				ret = "Saturday";
				break;
			default:
				ret = "Unknown";
		}
		return ret;
	}

	function numToMonth(num)
	{
		let ret  = "";

		switch(num)
		{
			case 0:
				ret = "January";
				break;
			case 1:
				ret = "February";
				break;
			case 2:
				ret = "March";
				break;
			case 3:
				ret = "April";
				break;
			case 4:
				ret = "May";
				break;
			case 5:
				ret = "June";
				break;
			case 6:
				ret = "July";
				break;
			case 7:
				ret = "August";
				break;
			case 8:
				ret = "September";
				break;
			case 9:
				ret = "October";
				break;
			case 10:
				ret = "November";
				break;
			case 11:
				ret = "December";
				break;
			default:
				ret = "Unknown";
		}
		return ret;
	}

	function numToDayShort(num)
	{
		let ret  = "";

		switch(num)
		{
			case 0:
				ret = "Sun";
				break;
			case 1:
				ret = "Mon";
				break;
			case 2:
				ret = "Tue";
				break;
			case 3:
				ret = "Wed";
				break;
			case 4:
				ret = "Thu";
				break;
			case 5:
				ret = "Fri";
				break;
			case 6:
				ret = "Sat";
				break;
			default:
				ret = "Unknown";
		}
		return ret;
	}

	function numToMonthShort(num)
	{
		let ret  = "";

		switch(num)
		{
			case 0:
				ret = "Jan";
				break;
			case 1:
				ret = "Feb";
				break;
			case 2:
				ret = "Mar";
				break;
			case 3:
				ret = "Apr";
				break;
			case 4:
				ret = "May";
				break;
			case 5:
				ret = "Jun";
				break;
			case 6:
				ret = "Jul";
				break;
			case 7:
				ret = "Aug";
				break;
			case 8:
				ret = "Sep";
				break;
			case 9:
				ret = "Oct";
				break;
			case 10:
				ret = "Nov";
				break;
			case 11:
				ret = "Dec";
				break;
			default:
				ret = "Unknown";
		}
		return ret;
	}