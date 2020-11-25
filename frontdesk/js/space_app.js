
var app_id = "";
var app_path = "";
var page_height = 0;
var page_width = 0;

var Load_animation = 0;
var SubLoad_animation = 0;

var Debug_Mode = false;

var Device = "Unknown";
var Show_Header = true;

var Space_Path = location.href;

var view_pane = null;

var Debug = null;


$(document).ready(function(){
	
	/* Initialize app environment */
	debug = new Debug_Space();

	window.onhashchange = locationChanged;
	
	window.onscroll = adstrip;
	
	window.onresize = reSize;
	
	Load_animation = Number($('#app_animation').val());
	SubLoad_animation = Number($('#subload_animation').val());
	
	if(document.getElementById('app_mode') != null)
	{
		if($('#app_mode').val() == "debug")
		{
			Debug_Mode = true;
		}
		else
		{
			debug.Error("Unknown Mode");
		}
	}
	
	view_pane = document.getElementById("view_pane");
	
	page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	/* confirm environment from server side */
	var view = location.hash;
	var qstring  = location.search;
	if(view == "")
	{
		view = "main.php";
		location.hash = "main";
	}
	else
	{
		Load_View(view,qstring);
	}
	//setTimeout(function(){Load_View(view,qstring);}, 2000);
});



function adstrip()
{
	if(document.getElementById("adstrip") != null)
	{
		var strip = document.getElementById("adstrip");
		var sticky = strip.offsetTop + $('#slider_con').height();

		if (window.pageYOffset >= sticky)
		{
			$("#adstrip").css("position","fixed");
			$("#adstrip").css("width","22.4%");
			$("#hder").addClass("w3-card-4");
			$("#adstrip").css("top",($('#hder').height() + 15));
		} 
		else 
		{
			$("#adstrip").css("position","static");
			$("#hder").removeClass("w3-card-4");
			$("#adstrip").css("width","auto");
		}
	}
}

function reSize()
{
	page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	$(".f-height").height(page_height);
	$(".h-height").height(page_height / 2);
}

function locationChanged()
{
	Load_View(location.hash,this.location.search);
}

function btnError(btn,msg,tm)
{
	$(btn).prop('disabled',true);
	$(btn).removeClass("loading");
	var st = $(btn).html();
	$(btn).html(msg);
	$(btn).addClass("negative");
	
	setTimeout(function(){
		$(btn).prop('disabled',false);
		$(btn).html(st);
		$(btn).removeClass("negative");
	},tm);
	
}




