function errclose(){$(".err").slideUp(500);}


function getScript(url,func)
{
		var xmlhttp;
	
		if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState == 4)
			{
				//alert(xmlhttp.responseText);
    	        var ret = xmlhttp.responseText.split("`");
				if(ret.length < 2)
				{
					func(xmlhttp.responseText,"error");
				}
				else if(ret[0].trim() == "done")
				{
					func(ret[1],"done");
				}
				else
				{
					func(xmlhttp.responseText,"error");
				}
			}
		}
		xmlhttp.open("GET","scripts/"+url,true);
		xmlhttp.send();
	}



function getJson(url,func)
{
	var xmlhttp;

	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState > 4)
		{
			if(xmlhttp.status === 2000)
			{
				try{
					let json = JSON.parse(xmlhttp.responseText.trim());

					if(typeof func == "function")
					{
						func(xmlhttp.responseText.trim(), "done");
					}
				}
				catch (e)
				{
					if(typeof func == "function")
					{
						func(xmlhttp.responseText, "error");
					}
				}
			}
			else
			{
				if(typeof func == "function")
				{
					func(xmlhttp.responseText, "error");
				}
			}
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}


	
	function postScript(url, func, data)
	{
	    var params = typeof data == 'string' ? data : Object.keys(data).map(
	            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
	        ).join('&');
	
	    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	    xhr.open('POST', url);
	    xhr.onreadystatechange = function() {
	        if(xhr.readyState > 3)
			{
				if(xhr.status === 200)
				{
					try{
						let json = JSON.parse(xhr.responseText.trim());

						if(typeof func === "function")
						{
							func(xhr.responseText.trim(), "done");
						}
					}
					catch (e)
					{
						if(typeof func === "function")
						{
							func(xhr.responseText, "error");
						}
					}
				}
				else
				{
					if(typeof func === "function")
					{
						func(xhr.responseText, "error");
					}
				}
			}
	    };
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xhr.send(params);
	}


	function postJson(url, func, data, prepend)
	{
		// can we add the property id
		if (typeof data == 'object')
		{
			var dataProperty = document.querySelector('*[data-property]');

			// are we good ?
			if (dataProperty !== null)
			{
				data.property = dataProperty.getAttribute('data-property');
			}

			// add user_token
			if (sessionStorage.getItem('user_token') !== null)
			{
				data.user_token = sessionStorage.getItem('user_token');
			}
		}

	    var params = typeof data == 'string' ? data : Object.keys(data).map(
	            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
	        ).join('&');

	    if(prepend == null)
		{
			prepend = "";
		}
	
	    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	    xhr.open('POST', url);
	    xhr.onreadystatechange = function() {
	        if(xhr.readyState > 3)
			{
				if(xhr.status === 200)
				{
					try{
						JSON.parse(xhr.responseText.trim());
						func(xhr.responseText.trim(), "done");
					}
					catch (e)
					{
						func(xhr.responseText, "error");
					}
				}
				else
				{
					func(xhr.responseText, "error");
				}
			}
	    };
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xhr.send(params);
	}
	
	
	function fill(url,container,errormsg)
	{
		var xmlhttp;
	
		if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState == 4)
			{
    	        var ret = xmlhttp.responseText.split("`");
				if(ret[0].trim() == "done")
				{
					$(container).html(ret[1]);
				}
				else
				{
					if(errormsg != null)
					{
						$(container).html(errormsg);
					}
					else
					{
						$(container).html(xmlhttp.responseText);
					}
				}
			}
		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function btnDanger(e)
{
	$(e).removeClass("btn-warning");
	$(e).removeClass("btn-success");
	$(e).removeClass("btn-info");
	$(e).addClass("btn-danger");
}

function btnSuccess(e)
{
	$(e).removeClass("btn-warning");
	$(e).addClass("btn-success");
	$(e).removeClass("btn-info");
	$(e).removeClass("btn-danger");
}

function btnInfo(e)
{
	$(e).removeClass("btn-warning");
	$(e).removeClass("btn-success");
	$(e).addClass("btn-info");
	$(e).removeClass("btn-danger");
}

function btnWarning(e)
{
	$(e).addClass("btn-warning");
	$(e).removeClass("btn-success");
	$(e).removeClass("btn-info");
	$(e).removeClass("btn-danger");
}



function lostf(e,a)
{
	var arg;
	if((e != "text") && (e != "number"))
	{
		var arg = $('#'+e).val();
	}
	else
	{
		var arg = $('#'+a).val();
	}
	
	
	if(arg == "")
	{
		if((e == "text") || (e  == "number"))
		{
			error(a); return;
		}
		else
		{
			error(e); return;
		}
	}
	
	if(e == "dbirth")
	{
		var n = arg.split('-');
		
		if(n.length < 3)
		{
			error(e);
		}
		else
		{
			if((!parseInt(n[0])) || (!parseInt(n[0])) || (!parseInt(n[0])))
			{
				error(e);
			}
			else
			{
				success(e);
			}
		}
	}
	
	if(e == "name")
	{
		var n = arg.split(' ');
		
		if(n.length < 2)
		{
			warning(e);
		}
		else
		{
			success(e);
		}
	}
	if(e == "email")
	{
		 var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(arg))
		{
			error(e);
		}
		else
		{
			success(e);
		}
	}
	
	if(e == "email-phone")
	{
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if((!regex.test(arg)) && (arg.length != 11))
		{
			error(e);
		}
		else
		{
			success(e);
		}
	}
	
	if(e == "pass")
	{
		if(arg.length > 5)
		{
			success(e);
		}
		else
		{
			warning(e);
		}
	}
	
	if(e == "text")
	{
		if(arg != "")
		{
			success(a);
		}
		else
		{
			error(a);
		}
	}
	if(e == "number")
	{
		if(parseInt(arg) != null)
		{
			success(a);
		}
		else
		{
			error(a);
		}
	}
	if(e == "conf")
	{
		if((arg == $('#pass').val()) && (arg.length > 5))
		{
			success(e);
			success('pass');
		}
		else
		{
			warning(e);
			warning('pass');
		}
	}
	if(e == "phone")
	{
		if(arg.length != 11)
		{
			warning(e);
		}
		else
		{
			success(e);
		}
	}
}


function error(e)
{
	$('#'+e+'-group').removeClass('has-warning');
	$('#'+e+'-group').removeClass('has-success');
	$('#'+e+'-icon').removeClass('fa-check');
	$('#'+e+'-icon').removeClass('fa-exclamation-circle');
	$('#'+e+'-icon').addClass('fa-close');
	$('#'+e+'-group').addClass('has-error');
}
function success(e)
{
	$('#'+e+'-group').removeClass('has-error');
	$('#'+e+'-group').removeClass('has-warning');
	$('#'+e+'-icon').removeClass('fa-close');
	$('#'+e+'-icon').removeClass('fa-exclamation-circle');
	$('#'+e+'-icon').addClass('fa-check');
	$('#'+e+'-group').addClass('has-success');
}
function warning(e)
{
	$('#'+e+'-group').removeClass('has-error');
	$('#'+e+'-group').removeClass('has-success');
	$('#'+e+'-icon').removeClass('fa-check');
	$('#'+e+'-icon').removeClass('fa-close');
	$('#'+e+'-group').addClass('has-warning');
	$('#'+e+'-icon').addClass('fa-exclamation-circle');
}

function clerr(e)
{
	$('#'+e+'-group').removeClass('has-warning');
	$('#'+e+'-group').removeClass('has-success');
	$('#'+e+'-group').removeClass('has-error');
	$('#'+e+'-icon').removeClass('fa-close');
	$('#'+e+'-icon').removeClass('fa-check');
	$('#'+e+'-icon').removeClass('fa-exclamation-circle');
	$('#err').hide();
	document.getElementById('subbt').disabled = false;
}

function empterr()
{
	$('#err').removeClass('alert-info');
	$('#err').removeClass('alert-danger');
	$('#err').removeClass('alert-success');
	$('#err').removeClass('alert-warning');
}


function runErrInfo(btn,msg,tm)
{
	if(tm == undefined)
	{
		tm = 3000;
	}
	
	var store = $(btn).html();
	
	$(btn).html(msg);
	btnDanger(btn);
	
	setTimeout(function(){
		$(btn).html(store);
		btnInfo(btn);
	},tm);
}


function runErrWarning(btn,msg,tm)
{
	if(tm == undefined)
	{
		tm = 3000;
	}
	
	var store = $(btn).html();
	
	$(btn).html(msg);
	btnDanger(btn);
	
	setTimeout(function(){
		$(btn).html(store);
		btnWarning(btn);
	},tm);
}


function runErrSuccess(btn,msg,tm)
{
	if(tm == undefined)
	{
		tm = 3000;
	}
	
	var store = $(btn).html();
	
	$(btn).html(msg);
	btnDanger(btn);
	
	setTimeout(function(){
		$(btn).html(store);
		btnSuccess(btn);
	},tm);
}


function runErrDanger(btn,msg,tm)
{
	if(tm == undefined)
	{
		tm = 3000;
	}
	
	var store = $(btn).html();
	
	$(btn).html(msg);
	btnDanger(btn);
	
	setTimeout(function(){
		$(btn).html(store);
	},tm);
}



function setCookie(cname, cValue, cExpire)
{
	var d = new Date();
	d.setTime(d.getTime() + cExpire);
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" +cValue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	
	for(var i =0; i < ca.length; i++)
	{
		var c = ca[i].trim();
		var f = c.split('=');
		if(f[0] == cname)
		{
			return f[1];
		}
	}
	return "";
}


function btnError(btn, msg, tm, func)
{
	$(btn).prop("disabled",true);
	var st = $(btn).html();
	$(btn).removeClass("loading");
	$(btn).html(msg);
	$(btn).addClass("negative");
	
	setTimeout(function(){
		$(btn).html(st);
		$(btn).removeClass("negative");
		$(btn).prop("disabled",false);
		if(func != null)
		{
			func();
		}
	}, tm);
}


function Trans(options)
{
	if(options.btn != null)
	{
		$(options.btn).addClass("loading");
		$(options.btn).attr("disabled",true);
	}
	if(options.button != null)
	{
		$(options.button).addClass("loading");
		$(options.button).attr("disabled",true);
	}
	if(options.url != null)
	{
		var store = "";
		
		var dat = {};
		var expp = "*";
		var wait = false;
		var period = 3000;
		var doneTxt = "<i class='icon check'></i>";
		var onDone = "";
		var onFail = "";
		if(options.exp != null){expp = options.exp;}
		if(options.expected != null){expp = options.expected;}
		if(options.data != null){dat = options.data;}
		if(options.wait != null){wait = options.wait;}
		if(options.period != null){period = options.period;}
		if(options.doneTxt != null){doneTxt = options.doneTxt;}
		if(options.onDone != null){doneTxt = options.onDone;}
		if(options.onFail != null){doneTxt = options.onFail;}

		postScript(options.url,function(data, status){alert(status);
			if(options.btn != null)
			{
				$(options.btn).removeClass("loading");
			}
			if(options.button != null)
			{
				$(options.button).removeClass("loading");
			}
							
			if(status == "done")
			{
				if(expp == "*")
				{
					if(wait == true)
					{
						if(options.btn != null)
						{
							store = $(options.btn).html();
							$(options.btn).html(doneTxt);
							$(options.btn).addClass("positive");
						}
						if(options.button != null)
						{
							store = $(options.button).html();
							$(options.button).html(doneTxt);
							$(options.button).addClass("positive");
						}
			
						setTimeout(function(){
							if(options.btn != null)
							{
								$(options.btn).removeClass("positive");
								$(options.btn).attr("disabled",false);
								$(options.btn).html(store);
							}
							if(options.button != null)
							{
								$(options.button).removeClass("loading");
								$(options.button).attr("disabled",false);
								$(options.button).html(store);
							}
				
							if(typeof(onDone) == "function")
							{
								onDone(data);
							}
						}, period);
					}
					else
					{
						if(options.btn != null)
						{
							$(options.btn).attr("disabled",false);
						}
						if(options.button != null)
						{
							$(options.button).attr("disabled",false);
						}
			
						if(typeof(onDone) == "function")
						{
							onDone(data);
						}
					}
				}
				else
				{
					if(data == exp)
					{
						if(wait == true)
						{
							if(options.btn != null)
							{
								store = $(options.btn).html();
								$(options.btn).html(doneTxt);
								$(options.btn).addClass("positive");
							}
							if(options.button != null)
							{
								store = $(options.button).html();
								$(options.button).html(doneTxt);
								$(options.button).addClass("positive");
							}
				
							setTimeout(function(){

								if(options.btn != null)
								{
									$(options.btn).removeClass("positive");
									$(options.btn).attr("disabled",false);
									$(options.btn).html(store);
								}
								if(options.button != null)
								{
									$(options.button).removeClass("loading");
									$(options.button).attr("disabled",false);
									$(options.button).html(store);
								}
					
								if(typeof(onDone) == "function")
								{
									onDone(data);
								}
							}, period);
						}
						else
						{
							if(options.btn != null)
							{
								$(options.btn).attr("disabled",false);
							}
							if(options.button != null)
							{
								$(options.button).attr("disabled",false);
							}
				
							if(typeof(onDone) == "function")
							{
								onDone(data);
							}
						}
					}
					else
					{
						if((options.onFail != null) && (typeof(options.onFail) == "function"))
						{
							if(options.btn != null)
							{
								$(options.btn).attr("disabled",false);
							}
							if(options.button != null)
							{
								$(options.button).attr("disabled",false);
							}
							options.onFail(data);
						}
						else
						{
							if(options.btn != null)
							{
								btnError(options.btn,"<i class='icon exclamation'></i> Operation failed");
							}
							if(options.button != null)
							{
								btnError(options.button,"<i class='icon exclamation'></i> Operation failed");
							}
						}
					}
				}
			}
			else
			{
				if((options.onFail != null) && (typeof(options.onFail) == "function"))
				{
					if(options.btn != null)
					{
						$(options.btn).attr("disabled",false);
					}
					if(options.button != null)
					{
						$(options.button).attr("disabled",false);
					}
					options.onFail(data);
				}
				else
				{
					if(options.btn != null)
					{
						btnError(options.btn,"<i class='icon exclamation'></i> Operation failed");
					}
					if(options.button != null)
					{
						btnError(options.button,"<i class='icon exclamation'></i> Operation failed");
					}
				}
			}
		},dat)
	}
	else
	{
		if(options.btn != null)
		{
			$(options.btn).removeClass("loading");
			$(options.btn).attr("disabled",false);
			btnError(options.btn,"Invalid URL",3000);
		}
		if(options.button != null)
		{
			$(options.button).removeClass("loading");
			$(options.button).attr("disabled",false);
			btnError(options.btn,"Invalid URL",3000);
		}
	}
}