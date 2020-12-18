
    function savePartnerPassword()
    {
        let request = {
            oldpassword: $("#old-password").val(),
            newpassword: $("#new-password").val(),
            confirmpassword: $("#confirm-password").val(),
        };

        if(request.oldpassword === "")
        {
            errorButton({btn:"partner-pass-btn", msg:"Old password is required"});
        }
        else if(request.newpassword === "")
        {
            errorButton({btn:"partner-pass-btn", msg:"Enter new password"});
        }
        else if(request.confirmpassword === "")
        {
            errorButton({btn:"partner-pass-btn", msg:"Retype password"});
        }
        else
        {
            loadingButton({btn:"partner-pass-btn"});
            postJson(api+"/savepartnerpassword", function (data, status) {
                loadingButton({btn:"partner-pass-btn", loading:false});
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#partner-pass-btn").addClass("disabled success");
                        $("#partner-pass-btn").html("<i class=''></i> password saved");
                        setTimeout(function () {
                            $("#partner-pass-btn").removeClass("disabled success");
                            $("#partner-pass-btn").html("<i class='save icon'></i> Save password");
                        }, 3000);
                    }
                    else
                    {
                        errorButton({btn:"partner-pass-btn", msg:d.message});
                    }
                }
                else
                {
                    errorButton({btn:"partner-pass-btn", msg:"Connection error"});
                }
            }, request);
        }
        return false;
    }

    function DoSignOut()
    {
        let cover = document.createElement("div");
        cover.style.position = "fixed";
        cover.style.top = "0px";
        cover.style.width = "100%";
        cover.style.height = "100%";
        cover.style.left = "0px";
        cover.className = "ui loading form";
        cover.style.zIndex = "300";
        cover.id = "logout-cover";

        document.body.append(cover);
        cover.style.backgroundColor = "rgba(255,255,255,0.0)";

        postJson("worker/logout", function (data, status) {
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    document.body.removeChild(document.getElementById("logout-cover"));
                    location.href = "home";
                }
                else
                {
                    ShowModal(d.message);
                }
            }
            else
            {
                ShowModal("Connection error. Unable to logout");
            }
        },{});
    }
