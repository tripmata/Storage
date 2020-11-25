
let login = function(){
	
	let request = {
		user:$("#user").val(),
		password:$("#password").val(),
		job:"login"
	};
	
	let error = false;
	
	if(request.user == "")
	{
		$("#user-con").transition("shake");
		$("#user-con").addClass("error");
		error = true;
	}
	if(request.password == "")
	{
		$("#password-con").transition("shake");
		$("#password-con").addClass("error");
		error = true;
	}
	
	if(error == false)
	{
		$("#lg-btn").addClass("loading disabled");
		
		postJson("hms-admin/worker",function(data, status){
			$("#lg-btn").removeClass("loading disabled");
			
			if(status == "done")
			{
				let d = JSON.parse(data);
				if(d.Status == "success")
				{
					$("#lg-btn").addClass("disabled positive");
					$("#lg-btn").html("<i class='check icon'></i>Logged in");
					setTimeout(function(){
						location.reload();
					},2000);
				}
				else
				{
					$("#lg-btn").html("<i class='times icon'></i>Invalid credentials");
					$("#lg-btn").addClass("disabled negative");
					setTimeout(function(){
						$("#lg-btn").html("Login");
						$("#lg-btn").removeClass("disabled negative");
					},3000);
				}
			}
			else
			{
				$("#lg-btn").html("<i class='times icon'></i>Connection error");
				$("#lg-btn").addClass("disabled negative");
				setTimeout(function(){
					$("#lg-btn").html("Login");
					$("#lg-btn").removeClass("disabled negative");
				},3000);
			}
		},request);
	}
	
	return false;
}


function unError(e)
{
	$("#"+e.id+"-con").removeClass("error");
}