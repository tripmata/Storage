
    let emails = [];
    let numbers = [];

    let contacts = [];
    let openContacts = [];

    let entities = [];

    let message = {};

    let messageType = "email";

    let stopRequest = false;

    function closeMessaging()
    {
        stopRequest = true;
        $("#message-send-pane").transition('fade out', function () {
            document.body.removeChild(getElement("message-send-pane"));
        });
    }

    function sendEmail()
    {
        if(getElement("message-send-pane") != null)
        {
            ShowModal("Cancel the running session to start a new one");
        }
        else
        {
            message.from = $("#from-email").val();
            message.name = $("#from-name").val();
            message.replyto = $("#reply-to-email").val();
            message.subject = $("#email-subject").val();
            message.body = $("#email-body").val();
            message.attachment = $("#email-attachment").val();

            let contactlist = document.getElementsByClassName("contact-list-item");

            for(let i = 0; i < contactlist.length; i++)
            {
                if(contactlist[i].checked)
                {
                    contacts.push(contactlist[i].id);
                }
            }


            let l = $("#open-contacts").val().split(",");

            for(let h = 0; h < l.length; h++)
            {
                let g = l[h].split("\n");

                for(let j = 0; j < g.length; j++)
                {
                    if(g[j] != "")
                    {
                        openContacts.push(g[j]);
                    }
                }
            }

            if(message.from === "")
            {
                errorButton({btn:"send-email-btn", msg:"from mail is empty"});
            }
            else if(message.name === "")
            {
                errorButton({btn:"send-email-btn", msg:"from name is empty"});
            }
            else if(message.replyto === "")
            {
                errorButton({btn:"send-email-btn", msg:"reply to is empty"});
            }
            else if(message.subject === "")
            {
                errorButton({btn:"send-email-btn", msg:"subject is empty"});
            }
            else if(message.body === "")
            {
                errorButton({btn:"send-email-btn", msg:"body is empty"});
            }
            else if((contacts.length === 0) && (openContacts.length === 0))
            {
                errorButton({btn:"send-email-btn", msg:"No contacts have been added"});
            }
            else
            {
                let sendIndic = document.createElement("div");
                sendIndic.style.position = "fixed";
                sendIndic.style.width = "100%";
                sendIndic.style.height = "100%";
                sendIndic.style.top = "0px";
                sendIndic.style.backgroundColor = "rgba(0,0,0,0.8)";
                sendIndic.style.zIndex = 300;
                sendIndic.style.display = "none";
                sendIndic.id = "message-send-pane";

                sendIndic.innerHTML =
                    "<div id='message-send-status-con' class='pad-1 align-c' style='display: none;'>" +
                    "<div class='l-margin-t-xl'>" +
                    "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
                    "<i class='crosshairs icon loading'></i>Initializing.. " +
                    "</h2>" +
                    "<h6 class='sleak' style='color: white;'>Please do not exit the page</h6>" +
                    "</div>" +
                    "</div>" +
                    "</div>";

                document.body.appendChild(sendIndic);

                $("#message-send-pane").transition('fade in', function(){
                    $("#message-send-status-con").transition('drop in', function () {

                        initSending();

                    });
                });
            }
        }
    }

    let called = 0;
    function initSending()
    {
        called = 0;
        stopRequest = false;
        $("#message-send-pane").html("<div id='message-send-status-con' class='pad-1 align-c'>" +
            "<div class='l-margin-t-xl'>" +
            "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
            "<i class='crosshairs icon loading'></i>Initializing.. " +
            "</h2>" +
            "<h6 class='sleak' style='color: white;'>Please do not exit the page</h6>" +
            "</div>" +
            "</div>" +
            "</div>");

        getContacts(contactCalled);
    }


    let contactCalled = function(status){
        //console.log(status);
        if(status === "success")
        {
            if(messageType === "email")
            {
                $("#message-send-pane").html(
                    "<div id='message-send-status-con' class='pad-1 align-c'>" +
                    "<div class='l-margin-t-xl'>" +
                    "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
                    "<i class='crosshairs icon loading'></i>Initializing.. " +
                    "</h2>" +
                    "<h6 class='sleak' style='color: white;'>Please do not exit the page</h6>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

                confirmMailing(function (status, data) {
                    if(status === "success")
                    {
                        if(data == true)
                        {
                            startSendingEmail();
                        }
                        else
                        {
                            $("#message-send-pane").html("<div id='message-send-status-con' class='pad-1 align-c'>" +
                                "<div class='l-margin-t-xl'>" +
                                "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
                                "<i class='ban icon'></i> Failed! " +
                                "</h2>" +
                                "<h6 class='sleak' style='color: white;'>Your mail forwarder may be down please contact support</h6>" +
                                "<br/><br/>" +
                                "<button class='ui blue sleak button' onclick=\"contactCalled('success')\">Try again</button> " +
                                "<button class='ui sleak button' onclick='closeMessaging()'>Close</button> " +
                                "</div>" +
                                "</div>" +
                                "</div>");
                        }
                    }
                    else
                    {
                        $("#message-send-pane").html("<div id='message-send-status-con' class='pad-1 align-c'>" +
                            "<div class='l-margin-t-xl'>" +
                            "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
                            "<i class='ban icon'></i> Failed! " +
                            "</h2>" +
                            "<h6 class='sleak' style='color: white;'>Unable to initialize mailing engine</h6>" +
                            "<br/><br/>" +
                            "<button class='ui blue sleak button' onclick=\"contactCalled('success')\">Try again</button> " +
                            "<button class='ui sleak button' onclick='closeMessaging()'>Close</button> " +
                            "</div>" +
                            "</div>" +
                            "</div>");
                    }
                });
            }
            else
            {
                startSendingSMS();
            }
        }
        else
        {

            $("#message-send-pane").html("<div id='message-send-status-con' class='pad-1 align-c'>" +
                "<div class='l-margin-t-xl'>" +
                "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
                "<i class='ban icon'></i> Failed! " +
                "</h2>" +
                "<h6 class='sleak' style='color: white;'>Unable to initialize contact list</h6>" +
                "<br/><br/>" +
                "<button class='ui blue sleak button' onclick='initSending()'>Try again</button> " +
                "<button class='ui sleak button' onclick='closeMessaging()'>Cancel</button> " +
                "</div>" +
                "</div>" +
                "</div>");
        }
    };
    
    
    function getContacts(func)
    {
        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    entities = d.data;

                    if(typeof func == "function")
                    {
                        func("success");
                    }
                }
                else
                {
                    if(typeof func == "function")
                    {
                        func("error", d.message);
                    }
                }
            }
            else
            {
                if(typeof func == "function")
                {
                    func("error", "Connection error");
                }
            }
        },{job:"fetch contact list", primers:contacts});
    }


    function confirmMailing(func)
    {
        postJson("hms-admin/worker", function(data, status){
            if(status === "done")
            {
                let d = JSON.parse(data);

                if(d.status === "success")
                {
                    if(typeof func == "function")
                    {
                        func("success", d.data);
                    }
                }
                else
                {
                    if(typeof func == "function")
                    {
                        func("error", d.message);
                    }
                }
            }
            else
            {
                if(typeof func == "function")
                {
                    func("error", "Connection error");
                }
            }
        },{job:"confirm mailing"});
    }



    function send()
    {

    }

    function startSendingEmail()
    {
        $("#message-send-pane").transition('fade out', function(){

            document.body.removeChild(getElement("message-send-pane"));


            let Indic = document.createElement("div");
            Indic.style.position = "fixed";
            Indic.style.width = "100%";
            Indic.style.bottom = "0px";
            Indic.style.backgroundColor = "white";
            Indic.style.zIndex = 300;
            Indic.id = "message-send-pane";
            Indic.style.display = "none";
            Indic.className = "widget w3-card-4 s-pad-1";

            Indic.innerHTML = "<div class='w3-row'>" +
                "<div class='w3-col l3 m3 s12'>" +
                "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 15px;'>" +
                "<i class='green at icon'></i> Sending mails..</h3> " +
                "<h6 class='sleak' style='font-weight: bold; margin: 0px; margin-left: 10px; margin-top: 5px;'>" +
                "<i id='activity-icon' class='spinner loading icon'></i> <span id='activity-text'>Sending..</span>" +
                "</h6>" +
                "</div>" +
                "<div class='w3-col l6 m6 s12'>" +

                "<div class='w3-row margin-1'>" +
                "<div class='w3-col l4 m4 s4'>" +
                "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
                "<span id='sent-messages-count'>0</span></h6>" +
                "</div> " +
                "<div class='w3-col l4 m4 s4'>" +
                "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
                "<span id='failed-messages-count'>0</span></h6>" +
                "</div> " +
                "<div class='w3-col l4 m4 s4'>" +
                "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate emails: " +
                "<span id='duplicate-messages-count'>0</span></h6>" +
                "</div> " +
                "</div> " +
                "<div id='message-bar' class='ui indicating tiny progress'>" +
                "<div class='bar'></div> " +
                "</div> " +
                "</div>" +
                "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
                "<button class='ui sleak red button' style='margin-top: 13px;' onclick='confirmMesageending()'>" +
                "<i class='times icon'></i> Cancel</button> " +
                "</div> " +
                "</div>";

            document.body.append(Indic);

            $("#message-send-pane").transition('vertical flip in', function () {

                let lst = document.getElementsByClassName("custom-list-item");
                for(let i = 0; i < lst.length; i++)
                {
                    getElement("contact-table-list").removeChild(lst[i]);
                }
                $("#email-body").val("");
                $("#email-subject").val("");
                $("#reply-to-email").val("");
                $("#from-email").val("");

                $(".contact-list-item").prop("checked", false);

                sendMail();
            });
        });
    }


    function startSendingSMS()
    {
        $("#message-send-pane").transition('fade out', function(){

            document.body.removeChild(getElement("message-send-pane"));


            let Indic = document.createElement("div");
            Indic.style.position = "fixed";
            Indic.style.width = "100%";
            Indic.style.bottom = "0px";
            Indic.style.backgroundColor = "white";
            Indic.style.zIndex = 300;
            Indic.id = "message-send-pane";
            Indic.style.display = "none";
            Indic.className = "widget w3-card-4 s-pad-1";

            Indic.innerHTML = "<div class='w3-row'>" +
                "<div class='w3-col l3 m3 s12'>" +
                "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 15px;'>" +
                "<i class='green mobile icon'></i> Sending SMS..</h3> " +
                "<h6 class='sleak' style='font-weight: bold; margin: 0px; margin-left: 10px; margin-top: 5px;'>" +
                "<i id='activity-icon' class='spinner loading icon'></i> <span id='activity-text'>Sending..</span>" +
                "</h6>" +
                "</div>" +
                "<div class='w3-col l6 m6 s12'>" +

                "<div class='w3-row margin-1'>" +
                "<div class='w3-col l4 m4 s4'>" +
                "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
                "<span id='sent-messages-count'>0</span></h6>" +
                "</div> " +
                "<div class='w3-col l4 m4 s4'>" +
                "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
                "<span id='failed-messages-count'>0</span></h6>" +
                "</div> " +
                "<div class='w3-col l4 m4 s4'>" +
                "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate numbers: " +
                "<span id='duplicate-messages-count'>0</span></h6>" +
                "</div> " +
                "</div> " +
                "<div id='message-bar' class='ui indicating tiny progress'>" +
                "<div class='bar'></div> " +
                "</div> " +
                "</div>" +
                "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
                "<button class='ui sleak red button' style='margin-top: 13px;' onclick='confirmMesageending()'>" +
                "<i class='times icon'></i> Cancel</button> " +
                "</div> " +
                "</div>";

            document.body.append(Indic);

            $("#message-send-pane").transition('vertical flip in', function () {

                let lst = document.getElementsByClassName("custom-list-item");
                for(let i = 0; i < lst.length; i++)
                {
                    getElement("contact-table-list").removeChild(lst[i]);
                }
                $("#sms-body").val("");
                $("#from-name").val("");

                $(".contact-list-item").prop("checked", false);

                sendSMS();
            });
        });
    }


    let place = 0;
    let place2 = 0;
    let sent = 0;
    let failed = 0;
    let duplicate = 0;
    let usedMail = [];

    let sendTries = 0;
    function sendMail()
    {
        if(stopRequest)
        {
            stopRequest = false;
            return;
        }
        $("#message-bar").progress({percent: (((place + place2) / (entities.length + openContacts.length)) * 100.0)});

        let email = "";
        let user = "";
        let usertype = "";
        let mode = 'external';

        if(place < entities.length)
        {
            email = entities[place].email.toLocaleLowerCase().trim();
            user = entities[place].id;
            usertype = entities[place].type;
            mode = entities[place].messageType;
            $("#activity-text").html("Sending to "+entities[place].name+" "+entities[place].surname);
        }
        else if(place2 < openContacts.length)
        {
            email = openContacts[place2].toLocaleLowerCase().trim();
            user = email;
            usertype = "";
            $("#activity-text").html("Sending to "+openContacts[place2])
        }
        else
        {
            sendingDone();
            return;
        }

        if(usedMail.includes(email))
        {
            duplicate++;

            if (place < entities.length)
            {
                place++;
            }
            else if (place2 < openContacts.length)
            {
                place2++;
            }

            $("#sent-messages-count").html(numFormat(sent));
            $("#failed-messages-count").html(numFormat(failed));
            $("#duplicate-messages-count").html(numFormat(duplicate));

            sendMail();
        }
        else
        {

            let request = {
                from: message.from,
                name: message.name,
                user: user,
                email : email,
                type: usertype,
                subject: message.subject,
                replyto: message.replyto,
                replytoname: message.name,
                attachment: message.attachment,
                message: message.body,
                mode: mode,

                job: "send mail"
            };

            postJson("hms-admin/worker", function (data, status) {
                if (status == "done")
                {
                    let d = JSON.parse(data);

                    if (d.status == "success")
                    {
                        sendTries = 0;

                        if (d.data == true)
                        {
                            sent++;
                        }
                        else
                        {
                            failed++;
                        }

                        if (place < entities.length)
                        {
                            place++;
                        }
                        else if (place2 < openContacts.length)
                        {
                            place2++;
                        }

                        usedMail.push(email);

                        sendMail();
                    }
                    else
                    {
                        if (sendTries >= 3)
                        {
                            $("#message-send-pane").html(
                                "<div class='w3-row'>" +
                                "<div class='w3-col l3 m3 s12'>" +
                                "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 20px;'>" +
                                "<i class='bug red icon'></i> Failed. System error </h3> " +
                                "</div>" +
                                "<div class='w3-col l6 m6 s12'>" +

                                "<div class='w3-row margin-1'>" +
                                "<div class='w3-col l4 m4 s4'>" +
                                "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
                                "<span id='sent-messages-count'>0</span></h6>" +
                                "</div> " +
                                "<div class='w3-col l4 m4 s4'>" +
                                "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
                                "<span id='failed-messages-count'>0</span></h6>" +
                                "</div> " +
                                "<div class='w3-col l4 m4 s4'>" +
                                "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate emails: " +
                                "<span id='duplicate-messages-count'>0</span></h6>" +
                                "</div> " +
                                "</div> " +
                                "</div>" +
                                "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
                                "<button class='ui sleak blue button' style='' onclick='restartSending()'>" +
                                "Try again</button> " +
                                "<button class='ui sleak button' style='' onclick='endMessaging()'>" +
                                "<i class='times icon'></i> Close</button> " +
                                "</div> " +
                                "</div>");

                            $("#sent-messages-count").html(numFormat(sent));
                            $("#failed-messages-count").html(numFormat(failed));
                            $("#duplicate-messages-count").html(numFormat(duplicate));

                        }
                        else
                        {
                            sendTries++;
                            setTimeout(function () {
                                sendMail();
                            }, 2000);
                        }
                    }
                }
                else
                {
                    if (sendTries >= 3)
                    {
                        $("#message-send-pane").html(
                            "<div class='w3-row'>" +
                            "<div class='w3-col l3 m3 s12'>" +
                            "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 20px;'>" +
                            "<i class='wifi red icon'></i> Check your connection </h3> " +
                            "</div>" +
                            "<div class='w3-col l6 m6 s12'>" +

                            "<div class='w3-row margin-1'>" +
                            "<div class='w3-col l4 m4 s4'>" +
                            "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
                            "<span id='sent-messages-count'>0</span></h6>" +
                            "</div> " +
                            "<div class='w3-col l4 m4 s4'>" +
                            "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
                            "<span id='failed-messages-count'>0</span></h6>" +
                            "</div> " +
                            "<div class='w3-col l4 m4 s4'>" +
                            "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate emails: " +
                            "<span id='duplicate-messages-count'>0</span></h6>" +
                            "</div> " +
                            "</div> " +
                            "</div>" +
                            "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
                            "<button class='ui sleak blue button' style='' onclick='restartSending()'>" +
                            "Try again</button> " +
                            "<button class='ui sleak button' style='' onclick='endMessaging()'>" +
                            "<i class='times icon'></i> Close</button> " +
                            "</div> " +
                            "</div>");

                        $("#sent-messages-count").html(numFormat(sent));
                        $("#failed-messages-count").html(numFormat(failed));
                        $("#duplicate-messages-count").html(numFormat(duplicate));

                    }
                    else
                    {
                        sendTries++;
                        setTimeout(function () {
                            sendMail();
                        }, 2000);
                    }
                }
            }, request);

            $("#sent-messages-count").html(numFormat(sent));
            $("#failed-messages-count").html(numFormat(failed));
            $("#duplicate-messages-count").html(numFormat(duplicate));

        }
    }



    function sendSMS()
    {
        if(stopRequest)
        {
            stopRequest = false;
            return;
        }
        $("#message-bar").progress({percent: (((place + place2) / (entities.length + openContacts.length)) * 100.0)});

        let phone = "";
        let user = "";
        let usertype = "";

        if(place < entities.length)
        {
            phone = entities[place].phone.toLocaleLowerCase().trim();
            user = entities[place].id;
            usertype = entities[place].type;
            $("#activity-text").html("Sending to "+entities[place].name+" "+entities[place].surname);
        }
        else if(place2 < openContacts.length)
        {
            phone = openContacts[place2].toLocaleLowerCase().trim();
            user = phone;
            usertype = "";
            $("#activity-text").html("Sending to "+openContacts[place2])
        }
        else
        {
            smsSendingDone();
            return;
        }

        if(usedMail.includes(phone))
        {
            duplicate++;

            if (place < entities.length)
            {
                place++;
            }
            else if (place2 < openContacts.length)
            {
                place2++;
            }

            $("#sent-messages-count").html(numFormat(sent));
            $("#failed-messages-count").html(numFormat(failed));
            $("#duplicate-messages-count").html(numFormat(duplicate));

            sendSMS();
        }
        else
        {

            let request = {
                fromname: message.name,
                user: user,
                type: usertype,
                message: message.body,

                job: "send sms"
            };

            postJson("hms-admin/worker", function (data, status) {
                if (status == "done")
                {
                    let d = JSON.parse(data);

                    if (d.status == "success")
                    {
                        sendTries = 0;

                        if (d.data == true)
                        {
                            sent++;
                        }
                        else
                        {
                            failed++;
                        }

                        if (place < entities.length)
                        {
                            place++;
                        }
                        else if (place2 < openContacts.length)
                        {
                            place2++;
                        }

                        usedMail.push(phone);

                        sendSMS();
                    }
                    else
                    {
                        if (sendTries >= 3)
                        {
                            $("#message-send-pane").html(
                                "<div class='w3-row'>" +
                                "<div class='w3-col l3 m3 s12'>" +
                                "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 20px;'>" +
                                "<i class='bug red icon'></i> Failed. System error </h3> " +
                                "</div>" +
                                "<div class='w3-col l6 m6 s12'>" +

                                "<div class='w3-row margin-1'>" +
                                "<div class='w3-col l4 m4 s4'>" +
                                "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
                                "<span id='sent-messages-count'>0</span></h6>" +
                                "</div> " +
                                "<div class='w3-col l4 m4 s4'>" +
                                "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
                                "<span id='failed-messages-count'>0</span></h6>" +
                                "</div> " +
                                "<div class='w3-col l4 m4 s4'>" +
                                "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate numbers: " +
                                "<span id='duplicate-messages-count'>0</span></h6>" +
                                "</div> " +
                                "</div> " +
                                "</div>" +
                                "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
                                "<button class='ui sleak blue button' style='' onclick='restartSMSSending()'>" +
                                "Try again</button> " +
                                "<button class='ui sleak button' style='' onclick='endMessaging()'>" +
                                "<i class='times icon'></i> Close</button> " +
                                "</div> " +
                                "</div>");

                            $("#sent-messages-count").html(numFormat(sent));
                            $("#failed-messages-count").html(numFormat(failed));
                            $("#duplicate-messages-count").html(numFormat(duplicate));

                        }
                        else
                        {
                            sendTries++;
                            setTimeout(function () {
                                sendSMS();
                            }, 2000);
                        }
                    }
                }
                else
                {
                    if (sendTries >= 3)
                    {
                        $("#message-send-pane").html(
                            "<div class='w3-row'>" +
                            "<div class='w3-col l3 m3 s12'>" +
                            "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 20px;'>" +
                            "<i class='wifi red icon'></i> Check your connection </h3> " +
                            "</div>" +
                            "<div class='w3-col l6 m6 s12'>" +

                            "<div class='w3-row margin-1'>" +
                            "<div class='w3-col l4 m4 s4'>" +
                            "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
                            "<span id='sent-messages-count'>0</span></h6>" +
                            "</div> " +
                            "<div class='w3-col l4 m4 s4'>" +
                            "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
                            "<span id='failed-messages-count'>0</span></h6>" +
                            "</div> " +
                            "<div class='w3-col l4 m4 s4'>" +
                            "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate numbers: " +
                            "<span id='duplicate-messages-count'>0</span></h6>" +
                            "</div> " +
                            "</div> " +
                            "</div>" +
                            "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
                            "<button class='ui sleak blue button' style='' onclick='restartSMSSending()'>" +
                            "Try again</button> " +
                            "<button class='ui sleak button' style='' onclick='endMessaging()'>" +
                            "<i class='times icon'></i> Close</button> " +
                            "</div> " +
                            "</div>");

                        $("#sent-messages-count").html(numFormat(sent));
                        $("#failed-messages-count").html(numFormat(failed));
                        $("#duplicate-messages-count").html(numFormat(duplicate));

                    }
                    else
                    {
                        sendTries++;
                        setTimeout(function () {
                            sendMail();
                        }, 2000);
                    }
                }
            }, request);

            $("#sent-messages-count").html(numFormat(sent));
            $("#failed-messages-count").html(numFormat(failed));
            $("#duplicate-messages-count").html(numFormat(duplicate));

        }
    }





    function restartSending()
    {
        $("#message-send-pane").html(
            "<div class='w3-row'>" +
            "<div class='w3-col l3 m3 s12'>" +
            "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 15px;'>" +
            "<i class='green at icon'></i> Sending mails..</h3> " +
            "<h6 class='sleak' style='font-weight: bold; margin: 0px; margin-left: 10px; margin-top: 5px;'>" +
            "<i id='activity-icon' class='spinner loading icon'></i> <span id='activity-text'>Sending..</span>" +
            "</h6>" +
            "</div>" +
            "<div class='w3-col l6 m6 s12'>" +

            "<div class='w3-row margin-1'>" +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
            "<span id='sent-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
            "<span id='failed-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate emails: " +
            "<span id='duplicate-messages-count'>0</span></h6>" +
            "</div> " +
            "</div> " +
            "<div id='message-bar' class='ui indicating tiny progress'>" +
            "<div class='bar'></div> " +
            "</div> " +
            "</div>" +
            "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
            "<button class='ui sleak red button' style='margin-top: 13px;' onclick='confirmMesageending()'>" +
            "<i class='times icon'></i> Cancel</button> " +
            "</div> " +
            "</div>");

        sendTries = 0;
        sendMail();
    }


    function restartSMSSending()
    {
        $("#message-send-pane").html(
            "<div class='w3-row'>" +
            "<div class='w3-col l3 m3 s12'>" +
            "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 15px;'>" +
            "<i class='green mobile icon'></i> Sending SMS..</h3> " +
            "<h6 class='sleak' style='font-weight: bold; margin: 0px; margin-left: 10px; margin-top: 5px;'>" +
            "<i id='activity-icon' class='spinner loading icon'></i> <span id='activity-text'>Sending..</span>" +
            "</h6>" +
            "</div>" +
            "<div class='w3-col l6 m6 s12'>" +

            "<div class='w3-row margin-1'>" +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
            "<span id='sent-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
            "<span id='failed-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate numbers: " +
            "<span id='duplicate-messages-count'>0</span></h6>" +
            "</div> " +
            "</div> " +
            "<div id='message-bar' class='ui indicating tiny progress'>" +
            "<div class='bar'></div> " +
            "</div> " +
            "</div>" +
            "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
            "<button class='ui sleak red button' style='margin-top: 13px;' onclick='confirmMesageending()'>" +
            "<i class='times icon'></i> Cancel</button> " +
            "</div> " +
            "</div>");

        sendTries = 0;
        sendSMS();
    }
    
    
    function sendingDone()
    {
        $("#message-send-pane").html(
            "<div class='w3-row'>" +
            "<div class='w3-col l3 m3 s12'>" +
            "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 20px;'>" +
            "<i class='check green icon'></i> Completed</h3> " +
            "</div>" +
            "<div class='w3-col l6 m6 s12'>" +

            "<div class='w3-row margin-1'>" +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
            "<span id='sent-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
            "<span id='failed-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate emails: " +
            "<span id='duplicate-messages-count'>0</span></h6>" +
            "</div> " +
            "</div> " +
            "</div>" +
            "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
            "<button class='ui sleak button' style='' onclick='endMessaging()'>" +
            "<i class='times icon'></i> Close</button> " +
            "</div> " +
            "</div>");

        $("#sent-messages-count").html(numFormat(sent));
        $("#failed-messages-count").html(numFormat(failed));
        $("#duplicate-messages-count").html(numFormat(duplicate));
    }



    function smsSendingDone()
    {
        $("#message-send-pane").html(
            "<div class='w3-row'>" +
            "<div class='w3-col l3 m3 s12'>" +
            "<h3 class='ui sleak header' style='margin: 0px; margin-left: 10px; margin-top: 20px;'>" +
            "<i class='check green icon'></i> Completed</h3> " +
            "</div>" +
            "<div class='w3-col l6 m6 s12'>" +

            "<div class='w3-row margin-1'>" +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='check circle green icon'></i> Sent: " +
            "<span id='sent-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='times circle red icon'></i> Failed: " +
            "<span id='failed-messages-count'>0</span></h6>" +
            "</div> " +
            "<div class='w3-col l4 m4 s4'>" +
            "<h6 class='sleak' style='font-weight: bold;'><i class='clone blue icon'></i> Duplicate numbers: " +
            "<span id='duplicate-messages-count'>0</span></h6>" +
            "</div> " +
            "</div> " +
            "</div>" +
            "<div class='w3-col l3 m2 s12 align-r pad-1'>" +
            "<button class='ui sleak button' style='' onclick='endMessaging()'>" +
            "<i class='times icon'></i> Close</button> " +
            "</div> " +
            "</div>");

        $("#sent-messages-count").html(numFormat(sent));
        $("#failed-messages-count").html(numFormat(failed));
        $("#duplicate-messages-count").html(numFormat(duplicate));
    }


    function endMessaging(func)
    {
        stopRequest = true;

        entities = [];
        usedMail = [];
        sent = 0;
        failed = 0;
        duplicate = 0;
        openContacts = [];
        contacts = [];
        place = 0;
        place2 = 0;
        message = {};
        messageType = "email";

        $("#message-send-pane").transition('vertical flip out', function () {
            document.body.removeChild(getElement("message-send-pane"));
            if(typeof func == "function")
            {
                func();
            }
        });
    }

    function confirmMesageending()
    {
        ConfirmModal("Are you sure you want to stop messaging", function(choice){
            if(choice)
            {
                endMessaging();
            }
        },"Yes","No");
    }
    
    
    function loadEmailTemplatelist()
    {
        loadModal({title:"Select template", curve: 2,
            html:"<div id='template-loader' class='pad-1 ui loading form'>" +
                "<select id='template-list' class='ui fluid wix-select dropdown'>" +
                "<option value=''>Select template</option>" +
                "</select>" +
                "<br/>" +
                "<button id='import-btn' class='ui blue sleak button' onclick='importTemplate()'>" +
                "<i class='download icon'></i> Import</button><br/> " +
                "</div>",
            onLoaded:function(m){
                $(".ui.dropdown").dropdown();
                getElement("import-btn").setAttribute("modalid", m.modal);
                list({ con: getElement("template-list"), job: 'list email template', all: true, onLoaded:function (status) {
                        $("#template-loader").removeClass("ui loading form");
                    } });
            }});
    }


    function importTemplate()
    {
        let tmp = $("#template-list").val();

        if(tmp == "")
        {
            ShowModal("Select template from dropdown to import");
        }
        else
        {
            closeGenModal(getElement("import-btn").getAttribute("modalid"));
            $("#page").addClass("ui loading form");
            postJson("hms-admin/worker", function (data, status) {
                $("#page").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#email-body").val(d.data.Body);
                        $("#email-subject").val(d.data.Subject);
                        $("#reply-to-email").val(d.data.Replyto);
                        $("#from-name").val(d.data.Fromname);
                        $("#from-email").val(d.data.From);

                        $("#email-body").froalaEditor({update:d.data.Body});
                    }
                    else
                    {
                        ShowModal(d.message);
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to connect to the server");
                }
            },{job:"single message template", messageid:tmp});
        }
    }



    // ---------------------------------------------- SMS Send Methods ---------------------------------------

    function loadSMSTemplatelist()
    {
        loadModal({title:"Select template", curve: 2,
            html:"<div id='template-loader' class='pad-1 ui loading form'>" +
                "<select id='template-list' class='ui fluid wix-select dropdown'>" +
                "<option value=''>Select template</option>" +
                "</select>" +
                "<br/>" +
                "<button id='import-btn' class='ui blue sleak button' onclick='importSMSTemplate()'>" +
                "<i class='download icon'></i> Import</button><br/> " +
                "</div>",
            onLoaded:function(m){
                $(".ui.dropdown").dropdown();
                getElement("import-btn").setAttribute("modalid", m.modal);
                list({ con: getElement("template-list"), job: 'list sms template', all: true, onLoaded:function (status) {
                        $("#template-loader").removeClass("ui loading form");
                    } });
            }});
    }


    function importSMSTemplate()
    {
        let tmp = $("#template-list").val();

        if(tmp == "")
        {
            ShowModal("Select template from dropdown to import");
        }
        else
        {
            closeGenModal(getElement("import-btn").getAttribute("modalid"));
            $("#page").addClass("ui loading form");
            postJson("hms-admin/worker", function (data, status) {
                $("#page").removeClass("ui loading form");
                if(status === "done")
                {
                    let d = JSON.parse(data);

                    if(d.status === "success")
                    {
                        $("#sms-body").val(d.data.Body);
                        $("#from-name").val(d.data.Fromname);
                    }
                    else
                    {
                        ShowModal(d.message);
                    }
                }
                else
                {
                    ShowModal("Connection error. Unable to connect to the server");
                }
            },{job:"single message template", messageid:tmp});
        }
    }



    function sendSMSMessage()
    {
        if(getElement("message-send-pane") != null)
        {
            ShowModal("Cancel the running session to start a new one");
        }
        else
        {
            message.name = $("#from-name").val();
            message.body = $("#sms-body").val();

            let contactlist = document.getElementsByClassName("contact-list-item");

            for(let i = 0; i < contactlist.length; i++)
            {
                if(contactlist[i].checked)
                {
                    contacts.push(contactlist[i].id);
                }
            }


            let l = $("#open-contacts").val().split(",");

            for(let h = 0; h < l.length; h++)
            {
                let g = l[h].split("\n");

                for(let j = 0; j < g.length; j++)
                {
                    if(g[j] != "")
                    {
                        openContacts.push(g[j]);
                    }
                }
            }

            if(message.from === "")
            {
                errorButton({btn:"send-sms-btn", msg:"Senders name is empty"});
            }
            else if(message.body === "")
            {
                errorButton({btn:"send-sms-btn", msg:"body is empty"});
            }
            else if((contacts.length === 0) && (openContacts.length === 0))
            {
                errorButton({btn:"send-sms-btn", msg:"No contacts have been added"});
            }
            else
            {
                let sendIndic = document.createElement("div");
                sendIndic.style.position = "fixed";
                sendIndic.style.width = "100%";
                sendIndic.style.height = "100%";
                sendIndic.style.top = "0px";
                sendIndic.style.backgroundColor = "rgba(0,0,0,0.8)";
                sendIndic.style.zIndex = 300;
                sendIndic.style.display = "none";
                sendIndic.id = "message-send-pane";

                sendIndic.innerHTML =
                    "<div id='message-send-status-con' class='pad-1 align-c' style='display: none;'>" +
                    "<div class='l-margin-t-xl'>" +
                    "<div><h2 id='email-status-text' class='ui sleak header' style='color: white;'>" +
                    "<i class='crosshairs icon loading'></i>Initializing.. " +
                    "</h2>" +
                    "<h6 class='sleak' style='color: white;'>Please do not exit the page</h6>" +
                    "</div>" +
                    "</div>" +
                    "</div>";

                document.body.appendChild(sendIndic);

                messageType = "sms";

                $("#message-send-pane").transition('fade in', function(){
                    $("#message-send-status-con").transition('drop in', function () {

                        initSending();

                    });
                });
            }
        }
    }