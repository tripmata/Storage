
var tops = -12;
var colors = "forestgreen";
var size = 5;

function anim1(){
	
	if(document.getElementById("dot1") == null)
	{
		size = 4;
		
		var dot1 = document.createElement("h6");
		var dot2 = document.createElement("h6");
		var dot3 = document.createElement("h6");
		var dot4 = document.createElement("h6");
		var dot5 = document.createElement("h6");
		
		dot1.id = "dot1";
		dot2.id = "dot2";
		dot3.id = "dot3";
		dot4.id = "dot4";
		dot5.id = "dot5";
		
		dot1.innerHTML = "<i class='icon circle' style='font-size: "+size+"px; margin: 0px; padding: 0px; color: "+colors+";'></i>";
		dot2.innerHTML = "<i class='icon circle' style='font-size: "+size+"px; color: "+colors+";'></i>";
		dot3.innerHTML = "<i class='icon circle' style='font-size: "+size+"px; color: "+colors+";'></i>";
		dot4.innerHTML = "<i class='icon circle' style='font-size: "+size+"px; color: "+colors+";'></i>";
		dot5.innerHTML = "<i class='icon circle' style='font-size: "+size+"px; color: "+colors+";'></i>";
		
		
		
		//jhblknlknlnlk
		$(dot1).css("position","fixed");
		$(dot1).css("top",tops+"px");
		$(dot1).css("width","100%");
		$(dot1).css("padding","0px");
		//$(dot1).css("background-color","red");
		$(dot1).css("display","inline");
		$(dot1).css("margin","0px");
		$(dot1).css("z-index","300");
		
		$(dot2).css("position","fixed");
		$(dot2).css("top",tops+"px");
		$(dot2).css("width","100%");
		$(dot2).css("padding","0px");
		$(dot2).css("margin","0px");
		$(dot2).css("z-index","300");
		
		$(dot3).css("position","fixed");
		$(dot3).css("top",tops+"px");
		$(dot3).css("width","100%");
		$(dot3).css("padding","0px");
		$(dot3).css("margin","0px");
		$(dot3).css("z-index","300");
		
		$(dot4).css("position","fixed");
		$(dot4).css("top",tops+"px");
		$(dot4).css("width","100%");
		$(dot4).css("padding","0px");
		$(dot4).css("margin","0px");
		$(dot4).css("z-index","300");
		
		$(dot5).css("position","fixed");
		$(dot5).css("top",tops+"px");
		$(dot5).css("width","100%");
		$(dot5).css("padding","0px");
		$(dot5).css("margin","0px");
		$(dot5).css("z-index","300");
		
		document.body.appendChild(dot1);
		document.body.appendChild(dot2);
		document.body.appendChild(dot3);
		document.body.appendChild(dot4);
		document.body.appendChild(dot5);
		
		setTimeout(function(){
			dot1.className = "load1";
			setTimeout(function(){
				dot2.className = "load1";
				setTimeout(function(){
					dot3.className = "load1";
					setTimeout(function(){
						dot4.className = "load1";
						setTimeout(function(){dot5.className = "load1";},100);
					},200);
				},300);
			},400);
		},100);
	}
}


//Animation style 2
var itv = null;

function anim2()
{
	size = 7;
	
	var con = document.createElement("div");
	
	con.innerHTML = "<i id='b1' class='icon circle' style='font-size: "+size+"px; color: "+colors+" ;'></i>"+
					"<i id='b2' class='icon circle' style='font-size: "+size+"px; color: "+colors+" ;'></i>"+
					"<i id='b3' class='icon circle' style='font-size: "+size+"px; color: "+colors+" ;'></i>"+
					"<i id='b4' class='icon circle' style='font-size: "+size+"px; color: "+colors+" ;'></i>";
					
	con.style.borderRadius = "4px";
	con.style.boxShadow = "0px 0px 6px -2px gray";
	con.style.position = "fixed";
	con.style.margin = "auto";
	con.style.top = "0px";
	con.style.padding = "4px";
	con.style.backgroundColor = "white";
	con.style.border = "1px solid lightgray";
	con.style.zIndex = "300";
	
	con.id = "animCon";
	
	document.body.appendChild(con);

	con.style.left = ((page_width / 2) - ($(con).width() / 2))+"px";
	
	runAnim();
}

function runAnim()
{
	$('#b1').animate({opacity: '0.1'},"slow",function(){
		$('#b2').animate({opacity: '0.1'},"slow",function(){
			$('#b3').animate({opacity: '0.1'},"slow",function(){
				$('#b4').animate({opacity: '0.1'},"slow",function(){
					$('#b1').animate({opacity: '1'},"slow",function(){
						$('#b2').animate({opacity: '1'},"slow",function(){
							$('#b3').animate({opacity: '1'},"slow",function(){
								$('#b4').animate({opacity: '1'},"slow",function(){
									setTimeout(function(){runAnim();},100);
								});
							});
						});
					});
				});
			});
		});
	});
}


function removeAnimation()
{
	if(document.getElementById("animCon") != null)
	{
		document.body.removeChild(document.getElementById("animCon"));
	}
	
	
	
	if(document.getElementById("dot1") != null)
	{
		document.body.removeChild(document.getElementById("dot1"));
	}
	
	if(document.getElementById("dot2") != null)
	{
		document.body.removeChild(document.getElementById("dot2"));
	}
	
	if(document.getElementById("dot3") != null)
	{
		document.body.removeChild(document.getElementById("dot3"));
	}
	
	if(document.getElementById("dot4") != null)
	{
		document.body.removeChild(document.getElementById("dot4"));
	}
	
	if(document.getElementById("dot5") != null)
	{
		document.body.removeChild(document.getElementById("dot5"));
	}
}