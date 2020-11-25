	
	let format, seconds, timestring;
	
	$(document).ready(function(){
		
		format = $("#time-format").val();
		seconds = $("#show-seconds").val();
		runClock();
		displayDate();
		
	});
	
	
	function runClock()
	{
		setInterval(displayTime,1000);
	}
	
	function displayTime()
	{		
		if(document.getElementById("time-con") != null)
		{
			let time = new Date();
			
			timestring = "";
			
			if(format == "12")
			{
				if(time.getHours() > 12)
				{
					timestring = (zerofy(time.getHours() - 12))+":"+zerofy(time.getMinutes());
				}
				else
				{
					timestring = zerofy(time.getHours())+":"+zerofy(time.getMinutes());
				}
			}
			else
			{
				timestring = zerofy(time.getHours())+":"+zerofy(time.getMinutes());
			}
			if(seconds.toString() == "true")
			{
				timestring += ":"+zerofy(time.getSeconds());
			}
			
			$("#time-con").html(timestring);
		}
	}
	
	function displayDate()
	{
		if(document.getElementById("date-con") != null)
		{
			let t = new Date();
			let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
			$("#date-con").html(days[Number(t.getDay())]+" - "+t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear());
		}
	}
	
	function zerofy(e)
	{
		if(Number(e) < 10)
		{
			return "0"+e;
		}
		return e;
	}
	
	