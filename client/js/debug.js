

function Debug_Space(){
	
	function Initerro()
	{
		document.title = "Application Error";
	}
	this.Error = function(e, mode)
	{
		if(e == "Unknown Mode")
		{
			document.title = "Application Error";
			$('body').css("background-color","white");
			$('body').css("background","white");
			var cont= "<div class='w3-row w3-container' style='font-family: lato, ubuntulight, segoe ui; margin-top: 50px;'>"
			+"<div class='w3-col l3 m1 s12'>.</div><div class='w3-col l6 m10 s12'>"
			
			+"<div class='alert alert-danger w3-card-4'>"
			+"<h3 style='font-family: ubunturegular, lato, segoe ui;'>Application Error</h3><hr/>"
			+"Sorry the application has experiences internal error.<br/>"
			+"<h6 style='font-family: lato, ubuntulight, segoe ui;'>Source: Application_Mode undefined in bluehive.config file</h6><br/>"
			+"<button class='btn btn-danger' onclick='location.href=\"../space/\"'>Back to hive space</button></div></div></div>"
			$('body').html(cont);
			die();
		}
		if(e == "NETWORK")
		{
			var co = document.createElement("div");
			$(co).css("position","fixed");
			$(co).css("width","100%");
			$(co).css("height","100%");
			co.id = "err_cov";
			$(co).css("top","0px");
			$(co).css("background-color","rgba(100,100,100,0.8)");
			$(co).css("z-index","300");
			$(co).css("padding","20px");
			$(co).html("<div class='w3-row'><div class='w3-col l4 m3 s12'>.</div><div class='w3-col l4 m6 s12'><div style='width: 90%; margin: auto; text-align: center;'>"
			+"<h3 class='ui center aligned icon header' style='color: white; margin-top: 100px; font-family: comfortaaregular, lato, segoe ui;'>"
			+"<i class='icon wifi' style='color: white;'></i>Network Error!</h3><br/><button class='ui yellow button' onClick=\"document.body.removeChild(document.getElementById('err_cov')); Reload()\">Reload</button></div></div></div>");
			document.body.appendChild(co);
		}
		if(e == "NOT_FOUND")
		{
			var co = document.createElement("div");
			$(co).css("position","fixed");
			$(co).css("width","100%");
			$(co).css("height","100%");
			co.id = "err_cov";
			$(co).css("top","0px");
			$(co).css("background-color","rgba(100,100,100,0.8)");
			$(co).css("z-index","300");
			$(co).css("padding","20px");
			$(co).html("<div class='w3-row'><div class='w3-col l4 m3 s12'>.</div><div class='w3-col l4 m6 s12'><div style='width: 90%; margin: auto; text-align: center;'>"
			+"<h3 class='ui center aligned icon header' style='color: white; margin-top: 100px; font-family: comfortaaregular, lato, segoe ui;'>"
			+"<i class='icon linkify' style='color: white;'></i>Page not found!</h3><br/><button class='ui circular huge yellow icon button' onClick=\"document.body.removeChild(document.getElementById('err_cov'));\">"
			+"<i class='icon times'></i></button></div></div></div>");
			document.body.appendChild(co);
		}
		if(e == "NO_MANIFEST")
		{
			if(mode == true)
			{
				document.title = "Application Error";
				$('body').css("background-color","white");
				$('body').css("background","white");
				var cont= "<div class='w3-row w3-container' style='font-family: lato, ubuntulight, segoe ui; margin-top: 50px;'>"
				+"<div class='w3-col l3 m1 s12'>.</div><div class='w3-col l6 m10 s12'>"
				
				+"<div class='alert alert-danger w3-card-4'>"
				+"<h3 style='font-family: ubunturegular, lato, segoe ui;'>Manifest data missing</h3><hr/>"
				+"Internal error.<br/>"
				+"<h6 style='font-family: lato, ubuntulight, segoe ui;'>Requested view has not been added to manifest</h6><br/>"
				+"</div></div></div>"
				$('body').html(cont);
				die();
			}
			else
			{
				var co = document.createElement("div");
				$(co).css("position","fixed");
				$(co).css("width","100%");
				$(co).css("height","100%");
				co.id = "err_cov";
				$(co).css("top","0px");
				$(co).css("background-color","rgba(100,100,100,0.8)");
				$(co).css("z-index","300");
				$(co).css("padding","20px");
				$(co).html("<div class='w3-row'><div class='w3-col l4 m3 s12'>.</div><div class='w3-col l4 m6 s12'><div style='width: 90%; margin: auto; text-align: center;'>"
				+"<h3 class='ui center aligned icon header' style='color: white; margin-top: 100px; font-family: comfortaaregular, lato, segoe ui;'>"
				+"<i class='icon file alternate outline' style='color: white;'></i>Internal application error</h3><br/><button class='ui circular huge yellow icon button' onClick=\"document.body.removeChild(document.getElementById('err_cov'));\">"
				+"<i class='icon times'></i></button></div></div></div>");
				document.body.appendChild(co);
			}
		}
		if(e == "MISSING_MANIFEST_DATA")
		{
			if(mode == true)
			{
				document.title = "Application Error";
				$('body').css("background-color","white");
				$('body').css("background","white");
				var cont= "<div class='w3-row w3-container' style='font-family: lato, ubuntulight, segoe ui; margin-top: 50px;'>"
				+"<div class='w3-col l3 m1 s12'>.</div><div class='w3-col l6 m10 s12'>"
				
				+"<div class='alert alert-danger w3-card-4'>"
				+"<h3 style='font-family: ubunturegular, lato, segoe ui;'>Application Error</h3><hr/>"
				+"Internal error.<br/>"
				+"<h6 style='font-family: lato, ubuntulight, segoe ui;'>Manifest file missing</h6><br/>"
				+"</div></div></div>"
				$('body').html(cont);
				die();
			}
			else
			{
				var co = document.createElement("div");
				$(co).css("position","fixed");
				$(co).css("width","100%");
				$(co).css("height","100%");
				co.id = "err_cov";
				$(co).css("top","0px");
				$(co).css("background-color","rgba(100,100,100,0.8)");
				$(co).css("z-index","300");
				$(co).css("padding","20px");
				$(co).html("<div class='w3-row'><div class='w3-col l4 m3 s12'>.</div><div class='w3-col l4 m6 s12'><div style='width: 90%; margin: auto; text-align: center;'>"
				+"<h3 class='ui center aligned icon header' style='color: white; margin-top: 100px; font-family: comfortaaregular, lato, segoe ui;'>"
				+"<i class='icon file alternate outline' style='color: white;'></i>Internal application error</h3><br/><button class='ui circular huge yellow icon button' onClick=\"document.body.removeChild(document.getElementById('err_cov'));\">"
				+"<i class='icon times'></i></button></div></div></div>");
				document.body.appendChild(co);
			}
		}
	}
}