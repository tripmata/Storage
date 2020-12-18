let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function signin()
{
    $("#form-error").hide(400);

    let request = {
        user:$("#user").val(),
        password:$("#password").val(),
        args:$("#args").val()
    };

    let error = false;

    if(request.user === "")
    {
        $("#user-con").addClass("error");
        $("#user-con").transition('shake');
        error = true;
    }
    if(request.password === "")
    {
        $("#password-con").addClass("error");
        $("#password-con").transition('shake');
        error = true;
    }

    if(error === false)
    {
        $("#sign-in-form").addClass("loading");
        postJson(api+"/signin", function (data, status) {
            $("#sign-in-form").removeClass("loading");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#sign-in-form").addClass("loading");
                    postJson("/tripmata/logcustomer", function (data, status) {
                        $("#sign-in-form").removeClass("loading");
                        if(status === "done")
                        {
                            let d = JSON.parse(data);

                            if(d.status === "success")
                            {
                                $("#form-error").html("<i class='check icon'></i> Success. Please wait..");
                                $("#form-error").addClass("positive");
                                $("#form-error").removeClass("error");
                                $("#form-error").transition('drop in');

                                $("#signin-btn").html("<i class='check icon'></i>");
                                $("#signin-btn").addClass("positive disabled");

                                setTimeout(function () {
                                    location.href = d.url;
                                }, 2000);
                            }
                            else
                            {
                                $("#form-error").html(d.message);
                                $("#form-error").transition('drop in');
                            }
                        }
                        else
                        {
                            $("#form-error").html("Connection error. Check your connection and try again");
                            $("#form-error").transition('drop in');
                        }
                    },{user:d.data.token, path:d.data.url});
                }
                else
                {
                    $("#form-error").html(d.message);
                    $("#form-error").transition('drop in');
                }
            }
            else
            {
                $("#form-error").html("Connection error. Check your connection and try again");
                $("#form-error").transition('drop in');
            }
        }, request);
    }
    return false;
}

function resetInput(e)
{
    $(e.parentNode).removeClass("error");
}

function resetpassword()
{
    $("#form-error").hide(400);

    let request = {
        user:$("#user").val()
    };

    if(request.user === "")
    {
        $("#user-con").addClass("error");
        $("#user-con").transition('shake');
    }
    else
    {
        $("#sign-in-form").addClass("loading");
        postJson(api+"/resetpassword", function (data, status) {
            $("#sign-in-form").removeClass("loading");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#form-error").html("<i class='check icon'></i> Success.check your email for a reset link");
                    $("#form-error").addClass("positive");
                    $("#form-error").removeClass("error");
                    $("#form-error").transition('drop in');

                    $("#user").val("");

                    $("#signin-btn").html("<i class='check icon'></i>");
                    $("#signin-btn").addClass("positive disabled");
                }
                else
                {
                    $("#form-error").html(d.message);
                    $("#form-error").transition('drop in');
                }
            }
            else
            {
                $("#form-error").html("Connection error. Check your connection and try again");
                $("#form-error").transition('drop in');
            }
        }, request);
    }
    return false;
}

function signup()
{
    $("#form-error").hide(400);

    let request = {
        names:$("#names").val(),
        email:$("#email").val(),
        phone:$("#phone").val(),
        password:$("#password").val(),
        args:$("#args").val()
    };

    let error = false;

    if(request.names.split(" ").length < 2)
    {
        $("#names-con").addClass("error");
        $("#names-con").transition('shake');

        $("#form-error").html("Full name is required");
        $("#form-error").transition('drop in');
        error = true;
    }
    if(!regex.test(request.email))
    {
        $("#email-con").addClass("error");
        $("#email-con").transition('shake');

        $("#form-error").html("Invalid email");
        $("#form-error").transition('drop in');
        error = true;
    }
    if(request.phone === "")
    {
        $("#phone-con").addClass("error");
        $("#phone-con").transition('shake');

        $("#form-error").html("Phone number is empty");
        $("#form-error").transition('drop in');
        error = true;
    }
    if(request.password === "")
    {
        $("#password-con").addClass("error");
        $("#password-con").transition('shake');

        $("#form-error").html("Enter a valid password");
        $("#form-error").transition('drop in');
        error = true;
    }
    if(error === false)
    {
        $("#sign-in-form").addClass("loading");
        postJson(api+"/createaccount", function (data, status) {
            $("#sign-in-form").removeClass("loading");
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    $("#sign-in-form").addClass("loading");
                    postJson("/logcustomer", function (data, status) {
                        $("#sign-in-form").removeClass("loading");
                        if(status === "done")
                        {
                            let d = JSON.parse(data);

                            if(d.status === "success")
                            {
                                $("#form-error").html("<i class='check icon'></i> Success. Please wait..");
                                $("#form-error").addClass("positive");
                                $("#form-error").removeClass("error");
                                $("#form-error").transition('drop in');

                                $("#names").val("");
                                $("#email").val("");
                                $("#phone").val("");
                                $("#password").val("");

                                $("#signin-btn").html("<i class='check icon'></i>");
                                $("#signin-btn").addClass("positive disabled");

                                setTimeout(function () {
                                    location.href = d.url;
                                }, 2000);
                            }
                            else
                            {
                                $("#form-error").html(d.message);
                                $("#form-error").transition('drop in');
                            }
                        }
                        else
                        {
                            $("#form-error").html("Connection error. Check your connection and try again");
                            $("#form-error").transition('drop in');
                        }
                    },{user:d.data.token, path:d.data.url});
                }
                else
                {
                    $("#form-error").html(d.message);
                    $("#form-error").transition('drop in');
                }
            }
            else
            {
                $("#form-error").html("Connection error. Check your connection and try again");
                $("#form-error").transition('drop in');
            }
        }, request);
    }
    return false;
}

function switchPasswordSee(e)
{
    if($(e).hasClass("slash"))
    {
        $(e).removeClass("slash");
        $("#password").attr("type", "text");
    }
    else
    {
        $(e).addClass("slash");
        $("#password").attr("type", "password");
    }
}