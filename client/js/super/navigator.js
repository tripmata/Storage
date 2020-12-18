
let host = "http://localhost/hotels/";
let cdn = "http://localhost/hotels/cdn/";

var ThemeColor = "";
var ThemeIcon = "";


$(document).ready(function () {

    window.onhashchange = locationChanged;

    //window.onscroll = pageScrolled;

    window.onresize = reSize;

    FirstRun();

});


function locationChanged() {
    FirstRun();
}

function reSize()
{
    let page_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let page_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    $(".f-height").height(page_height);

    let x = $(document).innerHeight();
    let hh = 0;
    if(getElement("page-header") != null)
    {
        hh += $('#page-header').innerHeight();
    }
    if(getElement("page-control-menu") != null)
    {
        hh += $("#page-control-menu").innerHeight();
    }
    if(getElement("header-menu") != null)
    {
        hh += $("#header-menu").innerHeight();
    }

    let r = x - (hh  + 2);
    $("#inventory-item-table-con").height(r);
    $("#inventory-timeline-con").height(r);


}


function getArg(num) {
    let hashes = location.hash.split("/");
    if (num == null) {
        if (hashes.length > 1) {
            return hashes[1];
        }
    }
    else {
        if (hashes.length > (1 + num)) {
            return hashes[(1 + num)];
        }
    }
}


function pageScrolled() {

}


function FirstRun() {
    let hash = location.hash;

    let page = hash.split("/")[0];

    if (page == "") {
        location.hash = "#dashboard";
        DrawDashboard();
    }

    switch (page)
    {
        case "#dashboard":
            DrawDashboard();
            break;

        case "#security":
            DrawAdminSecurity();
            break;

        case "#t&c":
            DrawTC();
            break;

        case "#general-setting":
            DrawGeneralSetting();
            break;

        case "#privacy-policy":
            DrawPrivacyPolicy();
            break;

        case "#integrations":
            DrawIntegrations();
            break;

        case "#seo":
            DrawSEO();
            break;

        case "#currency-payment":
            DrawCurrencyPayment();
            break;

        case "#banners":
            DrawBanners();
            break;

        case "#new-banner":
            DrawAddBanner();
            break;

        case "#faq":
            DrawFAQ();
            break;

        case "#new-faq":
            DrawNewFAQ();
            break;

        case "#web-content":
            DrawWebContent();
            break;

        case "#messages-template":
            DrawMessagesTemplate();
            break;

        case "#add-message-template":
            DrawAddMessagesTemplate();
            break;

        case "#add-sms-template":
            DrawAddSMSTemplate();
            break;

        case "#received-message":
            DrawReceivedMessage();
            break;

        case "#open-message":
            DrawOpenMessage();
            break;

        case "#contact-list":
            DrawContactList();
            break;

        case "#send-messages":
            DrawSendMessages();
            break;

        case "#send-sms":
            DrawSendSMS();
            break;

        case "#sent-message-history":
            DrawSentMessagesHistory();
            break;

        case "#message-settings":
            DrawMessageSettings();
            break;

        case "#reminders":
            DrawReminders();
            break;

        case "#new-event-listener":
            DrawNewEventListner();
            break;

        case "#event-detail":
            DrawEventDetails();
            break;

        case "#schedule-detail":
            DrawScheduleDetail();
            break;

        case "#new-shchedule":
            DrawSchedule();
            break;

        case "#financial-report":
            DrawFinancialReport();
            break;

        case "#customers-report":
            DrawCustomersReport();
            break;

        case "#report-analytics":
            DrawBusinessAnalytics();
            break;

        case "#customers":
            DrawCustomers();
            break;

        case "#customer":
            DrawCustomerProfile();
            break;

        case "#add-customer":
            DrawAddCustomer();
            break;


        case "#logout":
            DrawLogOut();
            break;


        case "#listing":
            DrawPropertyListing();
            break;

        case "#add-property":
            DrawAddProperty();
            break;

        case "#property-overview":
            DrawPropertyOverview();
            break;

        case "#cars-listing":
            DrawCarListing();
            break;

        case "#add-car":
            DrawAddCar();
            break;

        case "#vehicle-overview":
            DrawCarOverview();
            break;

        case "#rental-report":
            DrawCarReport();
            break;

        case "#drivers-listing":
            DrawDrivers();
            break;

        case "#add-driver":
            DrawAddDrivers();
            break;

        case "#partners":
            DrawPartners();
            break;

        case "#add-partner":
            DrawAddPartners();
            break;

        case "#partnership-request":
            DrawPartnershipRequest();
            break;

        case "#leasing":
            DrawManageLeasing();
            break;

        default:

            break;
    }
}