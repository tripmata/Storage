
    function dologin()
    {
        let request = {
            user:$("#user-cred").val(),
            password:$("#password").val(),
            platform:"web"
        };

        if(request.user === "")
        {
            errorButton({btn:"login-btn", msg:"email / username required"});
        }
        else if(request.password === "")
        {
            errorButton({btn:"login-btn", msg:"password is empty"});
        }
        else
        {
            loadingButton({btn:"login-btn"});
            postJson(api+"/adminlogin", function (data, status) {
                loadingButton({btn:"login-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        loadingButton({btn:"login-btn"});
                        postJson("loguser", function (data, status) {
                            loadingButton({btn:"login-btn", loading:false});

                            if(status === "done")
                            {
                                let st = JSON.parse(data);

                                if(st.status === "success")
                                {
                                    $("#login-btn").addClass("positive disabled");
                                    $("#login-btn").html("<i class='check icon'></i> logged in");

                                    location.reload();
                                }
                                else
                                {
                                    errorButton({btn:"login-btn", msg:"Unable to login"});
                                }
                            }
                            else
                            {
                                errorButton({btn:"login-btn", msg:"Connection error"});
                            }
                        },{user:d.data});
                    }
                    else
                    {
                        errorButton({btn:"login-btn", msg:d.message});
                    }
                }
                else
                {
                    errorButton({btn:"login-btn", msg:"Connection error"});
                }
            }, request);
        }

        return false;
    }