
  let host = url.host ?? null;
	let cdn = url.storage ?? null;

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

          case "#work-flow-admin":
              DrawWorkFlowAdmin();
              break;

          case "#admin-group-role":
              DrawAdminGroupRoles();
              break;

          case "#admin-users":
              DrawAdminUsers()
              break;

          case "#new-admin-user":
              DrawNewAdminUsers();
              break;

          case "#admin-user-log":
              DrawAdminUserLog();
              break;

          case "#modules":
              DrawModules();
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

          case "#modules-pages":
              DrawModulesPages();
              break;

          case "#integrations":
              DrawIntegrations();
              break;

          case "#seo":
              DrawSEO();
              break;

          case "#menu-design":
              DrawMenuDesign();
              break;

          case "#currency-payment":
              DrawCurrencyPayment();
              break;

          case "#services-display":
              DrawServicesDisplay();
              break;

          case "#promotional-content":
              DrawPromotionalContent();
              break;

          case "#themes":
              DrawThemes();
              break;

          case "#admin-themes":
              DrawAdminTheme();
              break;

          case "#menues":
              DrawMenues();
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

          case "#sales-report":
              DrawSalesReport();
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

          case "#attendance-report":
              DrawAttendanceReport();
              break;

          case "#general-report":
              DrawGeneralReport();
              break;

          case "#event-log":
              DrawEventLog();
              break;

          case "#reminder-log":
              DrawReminderLog();
              break;

          case "#system-log":
              DrawSystemLog();
              break;

          case "#manage-branch":
              DrawManageBranch();
              break;

          case "#add-branch":
              DrawAddBranch();
              break;

          case "#event-pos":
              DrawEventPos();
              break;

          case "#manage-event":
              DrawManageEvent();
              break;

          case "#event-inventory":
              DrawEventInventory();
              break;

          case "#event-report":
              DrawEventReport();
              break;

          case "#event-settings":
              DrawEventSettings();
              break;

          case "#purchases":
              DrawPurchases();
              break;

          case "#low-stock":
              DrawLowStock();
              break;

          case "#suppliers":
              DrawSuppliers();
              break;

          case "#new-supplier":
              DrawAddSupplier();
              break;

          case "#store-inventory":
              DrawStoreInventory();
              break;

          case "#new-store-item":
              DrawAddStoreInventoryItem();
              break;

          case "#store-price-enquiry":
              DrawStoreInventoryPriceInquiry();
              break;

          case "#store-inventory-auditing":
              DrawStoreInventoryAudits();
              break;

          case "#store-product-timeline":
              DrawStoreInventoryTimeline();
              break

          case "#store-purchase-request":
              DrawStoreInventoryPurchaseRequest();
              break;

          case "#store-pr":
              DrawOpenStorePurchaseRequest();
              break;

          case "#store-po":
              DrawOpenStorePurchaseOrder();
              break;

          case "#store-audit":
              DrawOpenStoreAudit();
              break;

          case "#store-quotation":
              DrawOpenStoreQuotation();
              break;

          case "#store-report":
              DrawStoreReport();
              break;

          case "#pool":
              DrawPool();
              break;

          case "#new-pool-session":
              DrawNewPoolSession();
              break;

          case "#pool-pos-transactions":
              DrawPoolPOSTransactions();
              break;

          case "#pool-pos-transaction-detail":
              DrawPoolPOSTransactionsDetails();
              break;

          case "#pool-inventory":
              DrawPoolInventory();
              break;

          case "#new-pool-item":
              DrawAddPoolInventoryItem();
              break;

          case "#pool-price-enquiry":
              DrawPoolInventoryPriceInquiry();
              break;

          case "#pool-inventory-auditing":
              DrawPoolInventoryAudits();
              break;

          case "#pool-product-timeline":
              DrawPoolInventoryTimeline();
              break

          case "#pool-purchase-request":
              DrawPoolInventoryPurchaseRequest();
              break;

          case "#pool-pr":
              DrawOpenPoolPurchaseRequest();
              break;

          case "#pool-po":
              DrawOpenPoolPurchaseOrder();
              break;

          case "#pool-audit":
              DrawOpenPoolAudit();
              break;

          case "#pool-quotation":
              DrawOpenPoolQuotation();
              break;

          case "#pool-report":
              DrawPoolReport();
              break;

          case "#pool-settings":
              DrawPoolSettings();
              break;

          case "#laundry":
              DrawLaundry();
              break;

          case "#laundry-pos-transactions":
              DrawLaundryPOSTransactions();
              break;

          case "#laundry-pos-transaction-detail":
              DrawLaundryPOSTransactionsDetails();
              break;

          case "#new-laundry-item":
              DrawNewLaundryItem();
              break;

          case "#laundry-inventory":
              DrawLaundryInventory();
              break;

          case "#new-laundry-inventory-item":
              DrawAddLaundryInventoryItem();
              break;

          case "#laundry-price-enquiry":
              DrawLaundryInventoryPriceInquiry();
              break;

          case "#laundry-inventory-auditing":
              DrawLaundryInventoryAudits();
              break;

          case "#laundry-product-timeline":
              DrawLaundryInventoryTimeline();
              break;

          case "#laundry-purchase-request":
              DrawLaundryInventoryPurchaseRequest();
              break;

          case "#laundry-pr":
              DrawOpenLaundryPurchaseRequest();
              break;

          case "#laundry-po":
              DrawOpenLaundryPurchaseOrder();
              break;

          case "#laundry-audit":
              DrawOpenLaundryAudit();
              break;

          case "#laundry-quotation":
              DrawOpenLaundryQuotation();
              break;

          case "#laundry-report":
              DrawLaundryReport();
              break;

          case "#laundry-settings":
              DrawLaundrySettings();
              break;

          case "#bar":
              DrawBarPos();
              break;

          case "#bar-pos-transaction-detail":
              DrawBarPOSTransactionsDetails();
              break;

          case "#bar-pos-transactions":
              DrawBarPOSTransactions();
              break;

          case "#bar-drinks":
              DrawBarDrinks();
              break;

          case "#add-drinks":
              DrawAddDrinks();
              break;

          case "#bar-inventory":
              DrawBarInventory();
              break;

          case "#new-bar-item":
              DrawAddBarInventoryItem();
              break;

          case "#bar-price-enquiry":
              DrawBarInventoryPriceInquiry();
              break;

          case "#bar-inventory-auditing":
              DrawBarInventoryAudits();
              break;

          case "#bar-product-timeline":
              DrawBarInventoryTimeline();
              break;

          case "#bar-purchase-request":
              DrawBarInventoryPurchaseRequest();
              break;

          case "#bar-pr":
              DrawOpenBarPurchaseRequest();
              break;

          case "#bar-po":
              DrawOpenBarPurchaseOrder();
              break;

          case "#bar-audit":
              DrawOpenBarAudit();
              break;

          case "#bar-quotation":
              DrawOpenBarQuotation();
              break;

          case "#bar-report":
              DrawBarReport();
              break;

          case "#bar-settings":
              DrawBarSettings();
              break;

          case "#bakery":
              DrawPastryPos();
              break;

          case "#pastry-pos-transactions":
              DrawPastryPOSTransactions();
              break;

          case "#pastry-pos-transaction-detail":
              DrawPastryPOSTransactionsDetails();
              break;

          case "#pastries":
              DrawPastries();
              break;

          case "#add-pastry":
              DrawAddPastry();
              break;

          case "#bakery-inventory":
              DrawBakeryInventory();
              break;

          case "#pastry-inventory":
              DrawBakeryInventory();
              break;

          case "#new-pastry-item":
              DrawAddPastryInventoryItem();
              break;

          case "#pastry-price-enquiry":
              DrawPastryInventoryPriceInquiry();
              break;

          case "#pastry-inventory-auditing":
              DrawPastryInventoryAudits();
              break;

          case "#pastry-product-timeline":
              DrawPastryInventoryTimeline();
              break

          case "#pastry-purchase-request":
              DrawPastryInventoryPurchaseRequest();
              break;

          case "#pastry-pr":
              DrawOpenPastryPurchaseRequest();
              break;

          case "#pastry-po":
              DrawOpenPastryPurchaseOrder();
              break;

          case "#pastry-audit":
              DrawOpenPastryAudit();
              break;

          case "#pastry-quotation":
              DrawOpenPastryQuotation();
              break;

          case "#bakery-report":
              DrawBakeryReport();
              break;

          case "#bakery-settings":
              DrawBakerySettings();
              break;

          case "#kitchen-pos":
              DrawKitchenPos();
              break;

          case "#food":
              DrawFood();
              break;

          case "#add-food":
              DrawAddFood();
              break;

          case "#food-report":
              DrawFoodReport();
              break;

          case "#kitchen-inventory":
              DrawKitchenInventory();
              break;

          case "#new-kitchen-item":
              DrawAddKitchenInventoryItem();
              break;

          case "#kitchen-price-enquiry":
              DrawKitchenInventoryPriceInquiry();
              break;

          case "#kitchen-inventory-auditing":
              DrawKitchenInventoryAudits();
              break;

          case "#kitchen-product-timeline":
              DrawKitchenInventoryTimeline();
              break

          case "#kitchen-purchase-request":
              DrawKitchenInventoryPurchaseRequest();
              break;

          case "#kitchen-pr":
              DrawOpenKitchenPurchaseRequest();
              break;

          case "#kitchen-po":
              DrawOpenKitchenPurchaseOrder();
              break;

          case "#kitchen-audit":
              DrawOpenKitchenAudit();
              break;

          case "#kitchen-quotation":
              DrawOpenKitchenQuotation();
              break;

          case "#kitchen-report":
              DrawKitchenReport();
              break;

          case "#kitchen-inventory-report":
              DrawKitchenInventoryReport();
              break;

          case "#kitchen-financial-report":
              DrawKitchenFinancialReport();
              break;

          case "#kitchen-pos-transactions":
              DrawKitchenPOSTransactions();
              break;


          case "#kitchen-pos-transaction-detail":
              DrawKitchenPOSTransactionsDetails();
              break;

          case "#kitchen-settings":
              DrawKitchenSettings();
              break;

          case "#rooms":
              DrawRooms();
              break;

          case "#new-room":
              DrawNewRoom();
              break;

          case "#room-categories":
              DrawRoomCategories();
              break;

          case "#new-room-category":
              DrawNewRoomCategory();
              break;

          case "#room-inventory":
              DrawRoomInventory();
              break;

          case "#new-room-item":
              DrawAddRoomInventoryItem();
              break;

          case "#room-price-enquiry":
              DrawRoomInventoryPriceInquiry();
              break;

          case "#room-inventory-auditing":
              DrawRoomInventoryAudits();
              break;

          case "#room-product-timeline":
              DrawRoomInventoryTimeline();
              break

          case "#room-purchase-request":
              DrawRoomInventoryPurchaseRequest();
              break;

          case "#room-pr":
              DrawOpenRoomPurchaseRequest();
              break;

          case "#room-po":
              DrawOpenRoomPurchaseOrder();
              break;

          case "#room-quotation":
              DrawOpenRoomQuotation();
              break;

          case "#room-audit":
              DrawOpenRoomAudit();
              break;

          case "#room-maintainance":
              DrawRoomMaintainance();
              break;

          case "#extra-services":
              DrawExtraServices();
              break;

          case "#room-report":
              DrawRoomReport();
              break;

          case "#staff":
              DrawStaff();
              break;

          case "#attendance":
              DrawAttendance();
              break;

          case "#announcement":
              DrawAnouncement();
              break;

          case "#staff-polls":
              DrawStaffPolls();
              break;

          case "#staff-bonus":
              DrawStaffBonus();
              break;

          case "#staff-leave":
              DrawStaffLeave();
              break;

          case "#staff-surcharge":
              DrawStaffSurchage();
              break;

          case "#staff-report":
              DrawStaffReport();
              break;

          case "#staff-department-shift":
              DrawDepartment_Shift();
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


          case "#customer-review":
              DrawCustomersReview();
              break;

          case "#review":
              DrawReviewResponse();
              break;

          case "#create-review":
              DrawAddCustomerReview();
              break;

          case "#review-response-list":
              DrawIndivdualResponses();
              break;

          case "#review-item-listing":
              DrawItemRatingList();
              break;

          case "#discount":
              DrawDiscount();
              break;

          case "#new-discount":
              DrawNewDiscount();
              break;

          case "#discount-detail":
              DrawDiscountDetail();
              break;

          case "#discount-analytics":
              DrawDiscountAnalytics();
              break;

          case "#coupon":
              DrawCoupon();
              break;

          case "#new-coupon":
              DrawNewCoupon();
              break;

          case "#coupon-detail":
              DrawCouponDetails();
              break;

          case "#coupon-analytics":
              DrawCouponAnalytics();
              break;

          case "#coupon-use-history":
              DrawCouponHistory();
              break;


          case "#reservations":
              DrawReservations();
              break;

          case "#new-booking":
              DrawNewBooking();
              break;

          case "#booking-status":
              DrawBookingStatus();
              break;

          case "#lodging":
              DrawLoging();
              break;

          case "#guests":
              DrawGuests();
              break;

          case "#frontdesk-settings":
              DrawFrontdeskSettings();
              break;

          case "#payment-request":
              DrawPaymentRequest();
              break;

          case "#add-staff":
              DrawNewStaff();
              break;

          case "#add-role":
              DrawNewGroupRole();
              break;


          case "#logout":
              DrawLogOut();
              break;

          default:

          break;
      }
  }



  function DrawHeader(icon, text) {
    let pageTop = document.createElement("div");
    pageTop.className = "l-pad-1 lift-1";
    pageTop.innerHTML = "<h6 style='font-weight: normal; font-family: quicksandregular; color: dimgray;'>" +
      "<div class='icon-block blue-back'> <i class='" + icon + " icon'></i></div> " + text + "</h6>";
    pageTop.style.backgroundColor = "white";

    return pageTop;
  }



  function CheckAll(e) {
    var boxes = document.getElementsByClassName("check-sel");

    for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = e.checked;
    }
  }


  function CheckProcess() {
    var boxes = document.getElementsByClassName("check-sel");

    let checked = false;
    let unchecked = false;

    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked == true) {
        checked = true;
      }
      else {
        unchecked = true;
      }
    }

    if (checked && !unchecked) {
      $("#main-sel").prop("indeterminate", false);
      document.getElementById("main-sel").checked = true;
    }
    else if (!checked && unchecked) {
      $("#main-sel").prop("indeterminate", false);
      document.getElementById("main-sel").checked = false;
    }
    else if (checked && unchecked) {
      $("#main-sel").prop("indeterminate", true);
    }
  }


  function Paginate(current, total, perpage, func) {
    let content = "";


    let pages = Math.ceil(total / perpage);


    if (current <= 1) {
      content = " <a class='icon item'>" +
        "          <i class='left chevron icon'></i>" +
        "       </a>";
    }
    else {
      content = " <a class='icon item' onclick='" + func + "(" + (current - 1) + ")'>" +
        "          <i class='left chevron icon'></i>" +
        "       </a>";
    }


    if (pages <= 7) {
      for (var t = 1; t < (pages + 1); t++) {
        if (t == current) {
          content += "<a class='item active'>" + t + "</a>";
        }
        else {
          content += "<a class='item' onclick='" + func + "(" + t + ")'>" + t + "</a>";
        }
      }
    }
    else {
      let st = (current - 3);
      if (st <= 1) { st = 1; }
      else if ((current - 3) == 2) {
        content += "<a class='item' onclick='" + func + "(1)'>1</a>";
      }
      else {
        content += "<a class='item' onclick='" + func + "(1)'>1</a>";
        content += "<a class='item'>...</a>";
      }


      for (var j = st; j < current; j++) {
        if (j == current) {
          content += "<a class='item active'>" + j + "</a>";
        }
        else {
          content += "<a class='item' onclick='" + func + "(" + j + ")'>" + j + "</a>";
        }
      }

      var k = current;

      for (; k < (current + 4); k++) {
        if (k == current) {
          content += "<a class='item active'>" + k + "</a>";
        }
        else {
          content += "<a class='item' onclick='" + func + "(" + k + ")'>" + k + "</a>";
        }
        if (k == pages) {
          break;
        }
      }


      if ((current + 4) == pages) {
        content += "<a class='item' onclick='" + func + "(" + pages + ")'>" + pages + "</a>";
      }
      else if (k < pages) {
        content += "<a class='item'>...</a>";
        content += "<a class='item' onclick='" + func + "(" + pages + ")'>" + pages + "</a>";
      }
    }


    if (current >= pages) {
      content += " <a class='icon item'>" +
        "          <i class='right chevron icon'></i>" +
        "       </a>";
    }
    else {
      content += " <a class='icon item' onclick='" + func + "(" + (current + 1) + ")'>" +
        "          <i class='right chevron icon'></i>" +
        "       </a>";
    }


    return content;
  }


  function DrawTable(lst, o) {
    let table = document.createElement("table");
    let cs = "ui table";
    let sn = true;
    let check = true;
    if (o != null) {
      if (o.Celled != null) {
        if (o.Celled === true) {
          cs += " celled";
        }
      }
    }
    if (o != null) {
      if (o.Padded != null) {
        if (o.Padded === true) {
          cs += " padded";
        }
      }
    }
    if (o != null) {
      if ((o.SN != null) && (typeof (o.SN) == "boolean")) {
        sn = o.SN;
      }
    }
    if (o != null) {
      if ((o.Checkbox != null) && (typeof (o.Checkbox) == "boolean")) {
        check = o.Checkbox;
      }
    }
    table.className = cs;
    $(table).css("font-family", "quicksandregular");

    let tText = "";
    tText = "<thead>" +
      "<tr>";
    if (sn == true) {
      if (check == true) {
        tText +=
          "<th><label><input id='main-sel' type='checkbox' onchange='CheckAll(this)'><span>SN</span></label></th>";
      }
      else {
        tText +=
          "<th><label><span>SN</span></label></th>";
      }
    }

    let hCon = "";
    for (let i = 0; i < lst.length; i++) {
      hCon += "<th>" + lst[i] + "</th>";
    }

    tText += hCon + "</tr></thead>" +
      "<tbody id='table-body' style='font-family: Lato;'>" +
      "</tbody>" +
      "<tfoot>" +
      "<tr>";

    let groupAction = "";

    if (o != null) {
      if (o.GroupAction != null) {
        groupAction = "<th colspan='1'>" +
          "<div class='ui icon top left pointing dropdown button'>" +
          "<i class='wrench blue icon'></i>" +
          "<div class='menu'>" +
          "<div class='header'>Group Action</div>";


        for (let i = 0; i < o.GroupAction.length; i++) {
          if (o.GroupAction[i].Text.toLowerCase() == "divider") {
            groupAction += "<div class='ui divider'></div>";
          }
          else {
            groupAction += "<div class='item' onclick='" + o.GroupAction[i].Method + "()'>" + o.GroupAction[i].Text + "</div>";
          }
        }

        groupAction += "</div></div></th>";
      }
    }

    tText += groupAction;

    table.innerHTML += tText + "<th colspan='1'>" +
      "<h4 class='ui header'>" +
      "<div class='content'>" +
      "<div id='perpage' class='ui inline dropdown'>" +
      "<div class='text sleak'> 25</div>" +
      "<i class='dropdown icon'></i>" +
      "<div class='menu'>" +
      "<div class='header'>Show per page</div>" +
      "<div class='active item' data-text='25'>25</div>" +
      "<div class='item' data-text='50'>50</div>" +
      "<div class='item' data-text='100'>100</div>" +
      "<div class='item' data-text='200'>200</div>" +
      "<div class='item' data-text='300'>300</div>" +
      "<div class='item' data-text='400'>400</div>" +
      "<div class='item' data-text='500'>500</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</h4>" +
      "" +
      "</th>" +
      "<th colspan='" + lst.length + "'>" +
      "      <div id='pages' class='ui right floated pagination tiny compact menu'>" +
      "      </div>" +
      "    </th>" +
      "</tr>" +
      "</tfoot>";

    return table;
  }


  function DrawSearch(o) {
    let m = "";
    if (o != null) {
      if (o.Method != null) {
        m = o.Method;
      }
      if (o.method != null) {
        m = o.method;
      }
    }
    let ret = document.createElement("div");
    ret.className = "ui search";
    ret.innerHTML = "<div class='ui icon input'>" +
      "<input id='search-txt' class='prompt' type='text' placeholder='Search' onkeyup='if(event.keyCode == 13){" + m + "();}'> " +
      "<i class='search link blue circular inverted icon' onclick='" + m + "()'></i> </div> <div class='results'></div>";

    return ret;
  }

  function pageTop(e) {
    let icon = "";
    let text = "";

    if (e != null) {
      if (e.icon != "") {
        icon = e.icon;
      }
      if (e.text != null) {
        text = e.text;
      }
    }
    let pageTop = document.createElement("div");
    pageTop.className = "l-pad-1 s-pad-1 lift-1";
    pageTop.id = "page-header";
    pageTop.innerHTML = "<h6 style='font-weight: normal; font-family: quicksandregular; color: dimgray;'>" +
      "<div class='icon-block blue-back'> <i id='header-icon' class='" + icon + " icon'></i></div>" +
        " <span class='header-text'>" + text + "</span></h6>";
    pageTop.style.backgroundColor = "white";

    return pageTop;
  }

  function _page(o, func) {
    if (o == null) {
      return document.getElementById("page");
    }
    else {
      if (o.clear != null) {
        if (o.clear == true) {
          document.getElementById("page").innerHTML = "";
        }
      }
      if (o.title != null) {
        document.title = o.title;
      }
      if (o.add != null) {
        if (typeof o.add == "string") {
          let div = document.createElement("div");
          div.innerHTML = o.add;
          document.getElementById("page").appendChild(div);
          if (o.classes != null) {
            div.className = o.classes;
          }
          if (o.class != null) {
            div.className = o.class;
          }
        }
        else {
          document.getElementById("page").appendChild(o.add);
          if (o.classes != null) {
            if (o.add.className != null) {
              o.add.className = o.add.className + " " + o.classes;
            }
          }
          if (o.class != null) {
            if (o.add.className != null) {
              o.add.className = o.add.className + " " + o.classes;
            }
          }
        }
      }
    }

    if (typeof func == "function") {
      func();
    }
  }


  function buttonStack(o) {
    let ret = document.createElement("div");

    if (o != null) {
      if (typeof o == "array") {
        for (let i = 0; i < o.length; i++) {
          let text = "";
          let classs = "";

          if (o[i].pointing == null) {
            let button = document.createElement("button");
            if (o[i].text != null) {
              text = o[i].text;
            }
            if (o[i].class != null) {
              classs = o[i].text;
            }
            button.outerHTML = "<button class='ui button " + classs + "'>" + text + "</div>";

            ret.appendChild(button);
          }
          else {
            if (o[i].pointing == true) {

            }
            else {
              let button = document.createElement("button");
              button.className = "ui button";

              if (o[i].text != null) {
                button.innerHTML = o[i].text;
              }
              if (o[i].class != null) {
                $(button).addClass(o[i].class);
              }
              if (o[i].classes != null) {
                $(button).addClass(o[i].classes);
              }
              if (o[i].class != null) {
                $(button).addClass(o[i].class);
              }

              ret.appendChild(button);
            }
          }
        }
      }
      else {
        if (o.pointing == null) {
          let button = document.createElement("button");
          button.className = "ui button";

          if (o.text != null) {
            button.innerHTML = o.text;
          }
          if (o.class != null) {
            $(button).addClass(o.class);
          }
          if (o.classes != null) {
            $(button).addClass(o.classes);
          }
          if (o.class != null) {
            $(button).addClass(o.class);
          }
          if (o.color != null) {
            $(button).addClass(o.color);
          }

          ret.appendChild(button);
        }
        else {
          if (o.pointing == true) {

          }
          else {
            let button = document.createElement("button");
            button.className = "ui button";

            if (o.text != null) {
              button.innerHTML = o.text;
            }
            if (o.class != null) {
              $(button).addClass(o.class);
            }
            if (o.classes != null) {
              $(button).addClass(o.classes);
            }
            if (o.class != null) {
              $(button).addClass(o.class);
            }
            if (o.color != null) {
              $(button).addClass(o.color);
            }

            ret.appendChild(button);
          }
        }
      }
    }

    return ret;
  }


  function div(o)
  {
        let d = document.createElement("div");

        if (o != null)
        {
            if (o.class != null)
            {
                d.className = o.class;
            }
            if (o.id != null)
            {
                d.id = o.id;
            }
            if(o.attrb != null)
            {
                if(typeof(o.attrb) === "object")
                {
                    for(let i = 0; i < o.attrb.length; i++)
                    {
                        if((o.attrb[i].name != null) && (o.attrb[i].value != null))
                        {
                            d.setAttribute(o.attrb[i].name, o.attrb[i].value);
                        }
                    }
                }
            }
            if(o.style != null)
            {
                d.style = o.style;
            }
            if (o.classes != null)
            {
                d.className = o.classes;
            }
            if (o.add != null)
            {
                if (typeof o.add == "string")
                {
                    d.innerHTML = o.add;
                }
                else
                {
                    d.appendChild(o.add);
                }
            }
            if (o.html != null)
            {
                if (typeof o.add == "string")
                {
                    d.innerHTML = o.html;
                }
                else
                {
                    d.appendChild(o.html);
                }
            }
        }
        return d;
  }

  function getElement(e, callback=null) {
    if (typeof e == "string") {
      var id = document.getElementById(e);

      // check callback
      if (callback !== null && typeof callback == 'function')
      {
          callback.call(this, id);
      }

      // manage failed id
      id = (id === null) ? Object.create(null) : id;

      // return id
      return id;
    }
    else {

    }
  }

  function _bid(e) {
    if (typeof e == "string") {
      return document.getElementById(e);
    }
    else {

    }
  }

  function errorButton(o) {
    let b = null;
    let d = 2000;
    let m = "";

    let bc = "";
    let cl = "";

    let has_blue = false;
    let has_red = false;
    let has_green = false;
    let has_yellow = false;


    let store = "";

    if (o != null) {
      if (o.btn != null) {
        b = document.getElementById(o.btn);
      }
      if (o.btn != null) {
        b = document.getElementById(o.btn);
      }
      if (o.msg != null) {
        m = o.msg;
      }
      if (o.delay != null) {
        d = o.delay;
      }

      if (b != null) {
        store = b.innerHTML;
        b.innerHTML = m;
        d.disabled = true;

        has_blue = $(b).hasClass("blue-back") ? true : false;
        has_red = $(b).hasClass("red-back") ? true : false;
        has_green = $(b).hasClass("green-back") ? true : false;
        has_yellow = $(b).hasClass("yellow-back") ? true : false;

        if (($(b).hasClass("ui")) && ($(b).hasClass("button"))) {
          $(b).addClass("negative");
          $(b).addClass("disabled");
        }
        else {
          bc = $(b).css("background-color");
          cl = $(b).css("color");

          $(b).css("background-color", "red");
          $(b).css("color", "white");
        }

        setTimeout(function () {

          b.innerHTML = store;
          b.disabled = false;

          if (($(b).hasClass("ui")) && ($(b).hasClass("button"))) {
            $(b).removeClass("negative");
            $(b).removeClass("disabled");
          }
          else {
            bc = $(b).css("background-color", bc);
            cl = $(b).css("color", cl);
          }
        }, d);
      }
    }
  }

  function loadingButton(o) {
    let b = null;
    let l = true;

    let store = "";

    if (o != null) {
      if (o.btn != null) {
        b = getElement(o.btn);
      }
      if (o.loading != null) {
        l = o.loading;
      }

      if (b != null) {
        if (l == true) {
          b.disabled = true;

          if (($(b).hasClass("ui")) && ($(b).hasClass("button"))) {
            $(b).addClass("loading");
            $(b).addClass("disabled");
          }
          else {
            b.name = b.innerHTML;
            b.innerHTML = "Loading...";
          }
        }
        else {
          b.disabled = false;

          if (($(b).hasClass("ui")) && ($(b).hasClass("button"))) {
            $(b).removeClass("loading");
            $(b).removeClass("disabled");
          }
          else {
            b.innerHTML = b.name;
          }
        }
      }
    }
  }



  function loadModal(o) {
    let m_num = 0;

    while (getElement("modal_" + m_num) != null) {
      m_num++;
    }

    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.backgroundColor = "rgba(0,0,0,0.6)";
    modal.style.top = "0px";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.zIndex = 300;
    modal.id = "modal_" + m_num;
    modal.style.overflowY = "auto";
    modal.className = "w3-row";
    modal.style.display = "none";


    document.body.appendChild(modal);

    let title = "";
    let html = "";
    let close = "close";
    let closeBtn = false;
    let outter = "l4 m3 s12";
    let inner = "l4 m6 s12";
    let curve = 5;
    let titlebar = true;
    let type = "standard";


    if(o != null)
    {
        if (o.title != null)
        {
            title = o.title;
        }
        if (o.curve != null)
        {
            curve = o.curve;
        }
        if (o.html != "")
        {
            html = o.html;
        }
        if (o.titlebar != null)
        {
            titlebar = o.titlebar;
        }
        if (o.size != null)
        {
            if ((o.size == "large") || (o.size == "l"))
            {
                outter = "l2 m1 s12";
                inner = "l8 m10 s12";
            }
            if ((o.size == "midium") || (o.size == "m"))
            {
                outter = "l3 m3 s12";
                inner = "l6 m6 s12";
            }
            if ((o.size == "small") || (o.size == "s"))
            {
                outter = "l4 m3 s12";
                inner = "l4 m6 s12";
            }
        }
    }


    $("#modal_" + m_num).fadeIn(500, function () {

        let content = "";

      content = "<div id='modal_" + m_num + "-inner' style='display: none;'>" +
        "<div class='w3-col " + outter + "' style='color: transparent;'>.</div>" +
        "<div class='w3-col " + inner + " w3-padding-tiny s-pad-6'>" +
        "<div class='widget l-margin-t-7 s-margin-t-8 margin-b-3' style='border-radius: "+curve+"px;'>";

        if(titlebar)
        {
            content +=
                "<div class='pad-1'>" +
                "<h6 id='modal-" + m_num + "-close-btn' style='font-family: quicksandbold; " +
                "color: dimgray; float: right; cursor: pointer;' onclick=\"closeGenModal('" + m_num + "')\">" +
                "<i class='times red icon'></i></h6>" +
                "<h6 style='font-family: quicksandbold; color: dimgray;'>" + title + "</h6>" +
                "</div>" +
                "<hr style='margin: 0px;'/>";
        }

        content +=
        "<div id='modal-"+m_num+"-content'>" + html + "</div>" +
        "</div></div></div><br/><br/>";

        modal.innerHTML = content;

      $("#modal_" + m_num + "-inner").transition('fade right in', function () {

        if (o.onLoaded != null) {
          o.onLoaded({ modal: m_num });
        }
      });
    });
  }




  function loadPageModal(o) {
      let m_num = 0;

      while (getElement("modal_" + m_num) != null) {
          m_num++;
      }

      let modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.backgroundColor = "rgba(0,0,0,0.6)";
      modal.style.top = "0px";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.zIndex = 300;
      modal.id = "modal_" + m_num;
      modal.style.overflowY = "auto";
      modal.className = "w3-row";
      modal.style.display = "none";


      document.body.appendChild(modal);

      let title = "";
      let html = "";
      let close = "close";
      let closeBtn = false;
      let outter = "l4 m3 s12";
      let inner = "l-width-5";
      let curve = 5;
      let titlebar = true;
      let type = "standard";


      if(o != null)
      {
          if (o.title != null)
          {
              title = o.title;
          }
          if (o.curve != null)
          {
              curve = o.curve;
          }
          if (o.html != "")
          {
              html = o.html;
          }
          if (o.titlebar != null)
          {
              titlebar = o.titlebar;
          }
          if (o.size != null)
          {
              if ((o.size == "xlarge") || (o.size == "xl"))
              {
                  outter = "l2 m1 s12";
                  inner = "l-width-9";
              }
              if ((o.size == "large") || (o.size == "l"))
              {
                  outter = "l2 m1 s12";
                  inner = "l-width-7";
              }
              if ((o.size == "midium") || (o.size == "m"))
              {
                  outter = "l3 m3 s12";
                  inner = "l-width-5";
              }
              if ((o.size == "small") || (o.size == "ms"))
              {
                  outter = "l4 m3 s12";
                  inner = "l-width-4";
              }
              if ((o.size == "small") || (o.size == "s"))
              {
                  outter = "l4 m3 s12";
                  inner = "l-width-3";
              }
              if ((o.size == "xsmall") || (o.size == "xs"))
              {
                  outter = "l4 m3 s12";
                  inner = "l-width-1";
              }
          }
      }


      $("#modal_" + m_num).fadeIn(500, function () {

          let content = "";

          content = "<div id='modal_"+m_num +"-inner' class='"+inner+" widget' " +
              "style='right: 0px; height: 100%; display: none; position: absolute; overflow-y: auto;' " +
              "onclick='preventPropagation(event)'></div>";

          modal.innerHTML = content;

          $("#modal_" + m_num + "-inner").transition('fade right in', function () {

              if (o.onLoaded != null) {
                  o.onLoaded({ modal: m_num });
              }
          });
      });


      modal.onclick = function () {
          $("#modal_" + m_num+"-inner").transition('fade right out', function ()
          {
              $("#modal_" + m_num).fadeOut(800, function(){
                  document.body.removeChild(getElement("modal_"+m_num));
              });
          });
      };
  }

  function preventPropagation(e)
  {
      e.stopPropagation();
  }



  function closeGenModal(e, func) {
    $("#modal_" + e + "-inner").transition('fade right out', function () {
      $("#modal_" + e).fadeOut(600, function () {
        document.body.removeChild(getElement("modal_" + e));
        if (typeof func == "function") {
          func();
        }
      });
    });
  }



  function tableLoader(e) {
    let td = "";
    for (var i = 0; i < e; i++) {
      td += "<td><div class='ui placeholder'><div class='header'><div class='line'></div><div class='line'></div></div></div> </td>";
    }
    return "<tr>" + td + "</tr>" + "<tr>" + td + "</tr>";
  }



  function list(o) {
    let select = null;
    let type = "all";
    let job = "";

    let workingF = null;
    let doneF = null;

    if (o != null) {
      if (o.con != null) {
        select = o.con;
      }
      if (o.all != null) {
        type = o.all ? "all" : "search";
      }
      if (o.job != null) {
        job = o.job;
      }
      if (o.working != null) {
        workingF = o.working;
      }
      if (o.done != null) {
        doneF = o.done;
      }
      if (o.onCompleted != null) {
          doneF = o.onCompleted;
      }
      if (o.onLoaded != null) {
          doneF = o.onLoaded;
      }

      if ((select != null) && (job != "")) {
        if (type == "all") {
          if (typeof working == "function") {
            workingF();
          }
          postJson("hms-admin/worker", function (data, status) {
            if (status == "done") {
              let d = JSON.parse(data);

              if (d.Status == "success") {
                for (let i = 0; i < d.Data.length; i++) {
                  let op = document.createElement("option");
                  if (d.Data[i].Id != null) {
                    op.value = d.Data[i].Id;
                  }
                  else if (d.Data[i].Code != null) {
                    op.value = d.Data[i].Code;
                  }
                  if (d.Data[i].Name != null) {
                    op.innerHTML = d.Data[i].Name;
                  }
                  else if (d.Data[i].Title != null) {
                    op.innerHTML = d.Data[i].Title;
                  }
                  else {
                    op.innerHTML = d.Data[i];
                  }
                  select.appendChild(op);
                }

                if (typeof doneF == "function") {
                  doneF({ status: 'success' });
                }
              }
              else {
                if (typeof doneF == "function") {
                  doneF({ status: 'error', message: "unable to load data" });
                }
              }
            }
            else {
              doneF({ status: 'error', message: "connection error" });
            }
          }, { job: job });
        }
        else {
          $(select).dropdown({
            apiSettings: {
              url: 'hms-admin/worker?job=' + job + '&q={query}'
            },
          });
        }
      }
    }
  }


  function dateSpan(elem, o)
  {
      let initial = "this month";
      if(o.default != null)
      {
          initial = o.default;
      }
      if(o.initial != null)
      {
          initial = o.initial;
      }
      $("#"+elem+" .date-span-from-date").on("change", function(){
          $("#"+elem+" .date-span-dropdown").dropdown("set text", "Custom");
          if(o.onChange != null)
          {
              if(typeof o.onChange == "function")
              {
                  o.onChange($("#"+elem+" .date-span-from-date").val(), $("#"+elem+" .date-span-to-date").val());
              }
          }
      });
      $("#"+elem+" .date-span-to-date").on("change", function(){
          $("#"+elem+" .date-span-dropdown").dropdown("set text", "Custom");
          if(o.onChange != null)
          {
              if(typeof o.onChange == "function")
              {
                  o.onChange($("#"+elem+" .date-span-from-date").val(), $("#"+elem+" .date-span-to-date").val());
              }
          }
      });
      $("#"+elem+" .date-span-dropdown").dropdown("set selected", initial);
      $("#"+elem+" .date-span-dropdown").dropdown({onChange:function(value, text, choice){
              processPeriod(elem, value, o);
      }});
      processPeriod(elem, initial, o);
  }

  function processPeriod(con, period, func)
  {
      let d = new Date();

      if(period.toString().toLowerCase() == "today")
      {
          $("#"+con+" .date-span-from-date").val(zerofy(d.getMonth() + 1)+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
          $("#"+con+" .date-span-to-date").val(zerofy(d.getMonth() + 1)+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
      }
      if(period.toString().toLowerCase() == "this month")
      {
          $("#"+con+" .date-span-from-date").val((zerofy(d.getMonth() + 1))+"/01/"+d.getFullYear());
          $("#"+con+" .date-span-to-date").val(zerofy((d.getMonth() + 1))+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
      }
      if(period.toString().toLowerCase() == "this year")
      {
          $("#"+con+" .date-span-from-date").val("01/01/"+d.getFullYear());
          $("#"+con+" .date-span-to-date").val(zerofy(d.getMonth() + 1)+"/"+zerofy(d.getDate())+"/"+d.getFullYear());
      }
      if(period.toString().toLowerCase() == "last year")
      {
          $("#"+con+" .date-span-from-date").val("01/01/"+(d.getFullYear() - 1));
          $("#"+con+" .date-span-to-date").val("12/31/"+(d.getFullYear() - 1));
      }

      if(func.onChange != null)
      {
          if(typeof func.onChange == "function")
          {
              func.onChange($("#"+con+" .date-span-from-date").val(), $("#"+con+" .date-span-to-date").val());
          }
      }
  }


  let cropping = null;
  let cropPayload = null;
  let cropSize = "viewport"; //values viewport or original
  let cropQuality = 1; //values 0 - 1

  function cropImage(o, func, payload) {
    let img = null;
    let resizable = true;
    let shape = "square";
    let width = 250;
    let height = 250;

    // bind config
    this.CropConfig = o;

    cropPayload = payload;

    if (o != null) {
      if (o.file != null) {
        img = o.file;
      }
      if (o.width != null) {
        width = o.width;
      }
      if (o.height != null) {
        height = o.height;
      }
      if (o.shape != null) {
        shape = o.shape;
      }
      if (o.elastic != null) {
        resizable = o.elastic;
      }
      if (o.resizable != null) {
        resizable = o.resizable;
      }
      if (o.ratio != null) {
        height = 250;
        width = Number(o.ratio * 250);
      }
      if (o.aspectratio != null) {
        height = 250;
        width = Number(o.aspectratio * 250);
      }
      if (o.size != null) {
        cropSize = o.size;
      }
      if (o.Size != null) {
        cropSize = o.Size;
      }
      if (o.quality != null) {
        cropSize = o.quality;
      }
      if (o.Quality != null) {
        cropSize = o.Quality;
      }
    }

    if (img != null) {
      let modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.backgroundColor = "rgba(0,0,0,0.6)";
      modal.style.top = "0px";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.zIndex = 300;
      modal.id = "passport-modal";
      modal.style.overflowY = "auto";
      modal.className = "w3-row";
      modal.style.display = "none";


      document.body.appendChild(modal);


      $("#passport-modal").fadeIn(500, function () {

        modal.innerHTML = "<div id='passport-modal-inner' style='display: none;'>" +
          "<div class='w3-col l3 m2 s12' style='color: transparent;'>.</div>" +
          "<div class='w3-col l6 m8 s12 s-pad-t'>" +
          "<div class='widget l-margin-t-7 margin-b-3'>" +
          "<div class='pad-1'><h6 style='font-family: quicksandbold; color: dimgray;'>Crop Image</h6></div>" +
          "<hr style='margin: 0px;'/>" +
          "<div class='pad-2 align-c style='width: 100%;'>" +
          "<div id='image-crop' style='height: 250px; width: 100%;'>" +
          "</div></div><br/><br/>" +
          "<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
          "<button class='ui compact sleak w3-green button' onclick='deliverCropedImage(" + func + ")'>OK</button>" +
          "<button class='ui compact sleak basic button' onclick='closepassportModal()'>Cancel</button></div>" +
          "</div></div></div><br/><br/>";

        $("#passport-modal-inner").transition('fade right in', function () {

          //getElement("image-crop").src = URL.createObjectURL(img);

          cropping = new Croppie(getElement("image-crop"), {
            viewport: {
              width: width,
              height: height,
              enableResize: resizable,
              type: shape
            }
          });

          cropping.bind({
            url: URL.createObjectURL(img),
          });
        });
      });
    }
  }



  function closepassportModal() {
    $("#passport-modal-inner").transition('fade right out', function () {
      $("#passport-modal").fadeIn(500, function () {
        document.body.removeChild(getElement("passport-modal"));
      });
    });
  }


  function deliverCropedImage(func) {
    cropping.result({ type: "blob", size: cropSize, quality: cropQuality, circle: false }).then(function (blob) {
      if (typeof func == "function") {
        func(blob, URL, cropPayload);
      }
    });
    closepassportModal();
  }


  function numFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }



  var country_dropdown = "<div id='country' class='ui search selection dropdown'>" +
    "  <input type='hidden' name='country'>" +
    "  <i class='dropdown icon'></i>" +
    "  <div class='default text'>Select Country</div>" +
    "  <div class='menu'>" +
    "  <div class='item' data-value='af'><i class='af flag'></i>Afghanistan</div>" +
    "  <div class='item' data-value='ax'><i class='ax flag'></i>Aland Islands</div>" +
    "  <div class='item' data-value='al'><i class='al flag'></i>Albania</div>" +
    "  <div class='item' data-value='dz'><i class='dz flag'></i>Algeria</div>" +
    "  <div class='item' data-value='as'><i class='as flag'></i>American Samoa</div>" +
    "  <div class='item' data-value='ad'><i class='ad flag'></i>Andorra</div>" +
    "  <div class='item' data-value='ao'><i class='ao flag'></i>Angola</div>" +
    "  <div class='item' data-value='ai'><i class='ai flag'></i>Anguilla</div>" +
    "  <div class='item' data-value='ag'><i class='ag flag'></i>Antigua</div>" +
    "  <div class='item' data-value='ar'><i class='ar flag'></i>Argentina</div>" +
    "  <div class='item' data-value='am'><i class='am flag'></i>Armenia</div>" +
    "  <div class='item' data-value='aw'><i class='aw flag'></i>Aruba</div>" +
    "  <div class='item' data-value='au'><i class='au flag'></i>Australia</div>" +
    "  <div class='item' data-value='at'><i class='at flag'></i>Austria</div>" +
    "  <div class='item' data-value='az'><i class='az flag'></i>Azerbaijan</div>" +
    "  <div class='item' data-value='bs'><i class='bs flag'></i>Bahamas</div>" +
    "  <div class='item' data-value='bh'><i class='bh flag'></i>Bahrain</div>" +
    "  <div class='item' data-value='bd'><i class='bd flag'></i>Bangladesh</div>" +
    "  <div class='item' data-value='bb'><i class='bb flag'></i>Barbados</div>" +
    "  <div class='item' data-value='by'><i class='by flag'></i>Belarus</div>" +
    "  <div class='item' data-value='be'><i class='be flag'></i>Belgium</div>" +
    "  <div class='item' data-value='bz'><i class='bz flag'></i>Belize</div>" +
    "  <div class='item' data-value='bj'><i class='bj flag'></i>Benin</div>" +
    "  <div class='item' data-value='bm'><i class='bm flag'></i>Bermuda</div>" +
    "  <div class='item' data-value='bt'><i class='bt flag'></i>Bhutan</div>" +
    "" +
    "  <div class='item' data-value='bo'><i class='bo flag'></i>Bolivia</div>" +
    "  <div class='item' data-value='ba'><i class='ba flag'></i>Bosnia</div>" +
    "  <div class='item' data-value='bw'><i class='bw flag'></i>Botswana</div>" +
    "  <div class='item' data-value='bv'><i class='bv flag'></i>Bouvet Island</div>" +
    "  <div class='item' data-value='br'><i class='br flag'></i>Brazil</div>" +
    "  <div class='item' data-value='vg'><i class='vg flag'></i>British Virgin Islands</div>" +
    "  <div class='item' data-value='bn'><i class='bn flag'></i>Brunei</div>" +
    "  <div class='item' data-value='bg'><i class='bg flag'></i>Bulgaria</div>" +
    "  <div class='item' data-value='bf'><i class='bf flag'></i>Burkina Faso</div>" +
    "  <div class='item' data-value='mm'><i class='mm flag'></i>Burma</div>" +
    "  <div class='item' data-value='bi'><i class='bi flag'></i>Burundi</div>" +
    "  <div class='item' data-value='tc'><i class='tc flag'></i>Caicos Islands</div>" +
    "  <div class='item' data-value='kh'><i class='kh flag'></i>Cambodia</div>" +
    "  <div class='item' data-value='cm'><i class='cm flag'></i>Cameroon</div>" +
    "  <div class='item' data-value='ca'><i class='ca flag'></i>Canada</div>" +
    "  <div class='item' data-value='cv'><i class='cv flag'></i>Cape Verde</div>" +
    "  <div class='item' data-value='ky'><i class='ky flag'></i>Cayman Islands</div>" +
    "  <div class='item' data-value='cf'><i class='cf flag'></i>Central African Republic</div>" +
    "  <div class='item' data-value='td'><i class='td flag'></i>Chad</div>" +
    "  <div class='item' data-value='cl'><i class='cl flag'></i>Chile</div>" +
    "  <div class='item' data-value='cn'><i class='cn flag'></i>China</div>" +
    "  <div class='item' data-value='cx'><i class='cx flag'></i>Christmas Island</div>" +
    "  <div class='item' data-value='cc'><i class='cc flag'></i>Cocos Islands</div>" +
    "  <div class='item' data-value='co'><i class='co flag'></i>Colombia</div>" +
    "  <div class='item' data-value='km'><i class='km flag'></i>Comoros</div>" +
    "  <div class='item' data-value='cg'><i class='cg flag'></i>Congo Brazzaville</div>" +
    "  <div class='item' data-value='cd'><i class='cd flag'></i>Congo</div>" +
    "  <div class='item' data-value='ck'><i class='ck flag'></i>Cook Islands</div>" +
    "  <div class='item' data-value='cr'><i class='cr flag'></i>Costa Rica</div>" +
    "  <div class='item' data-value='ci'><i class='ci flag'></i>Cote Divoire</div>" +
    "  <div class='item' data-value='hr'><i class='hr flag'></i>Croatia</div>" +
    "  <div class='item' data-value='cu'><i class='cu flag'></i>Cuba</div>" +
    "  <div class='item' data-value='cy'><i class='cy flag'></i>Cyprus</div>" +
    "  <div class='item' data-value='cz'><i class='cz flag'></i>Czech Republic</div>" +
    "  <div class='item' data-value='dk'><i class='dk flag'></i>Denmark</div>" +
    "  <div class='item' data-value='dj'><i class='dj flag'></i>Djibouti</div>" +
    "  <div class='item' data-value='dm'><i class='dm flag'></i>Dominica</div>" +
    "  <div class='item' data-value='do'><i class='do flag'></i>Dominican Republic</div>" +
    "  <div class='item' data-value='ec'><i class='ec flag'></i>Ecuador</div>" +
    "  <div class='item' data-value='eg'><i class='eg flag'></i>Egypt</div>" +
    "  <div class='item' data-value='sv'><i class='sv flag'></i>El Salvador</div>" +
    "  <div class='item' data-value='gb'><i class='gb flag'></i>England</div>" +
    "  <div class='item' data-value='gq'><i class='gq flag'></i>Equatorial Guinea</div>" +
    "  <div class='item' data-value='er'><i class='er flag'></i>Eritrea</div>" +
    "  <div class='item' data-value='ee'><i class='ee flag'></i>Estonia</div>" +
    "  <div class='item' data-value='et'><i class='et flag'></i>Ethiopia</div>" +
    "  <div class='item' data-value='eu'><i class='eu flag'></i>European Union</div>" +
    "  <div class='item' data-value='fk'><i class='fk flag'></i>Falkland Islands</div>" +
    "  <div class='item' data-value='fo'><i class='fo flag'></i>Faroe Islands</div>" +
    "  <div class='item' data-value='fj'><i class='fj flag'></i>Fiji</div>" +
    "  <div class='item' data-value='fi'><i class='fi flag'></i>Finland</div>" +
    "  <div class='item' data-value='fr'><i class='fr flag'></i>France</div>" +
    "  <div class='item' data-value='gf'><i class='gf flag'></i>French Guiana</div>" +
    "  <div class='item' data-value='pf'><i class='pf flag'></i>French Polynesia</div>" +
    "  <div class='item' data-value='tf'><i class='tf flag'></i>French Territories</div>" +
    "  <div class='item' data-value='ga'><i class='ga flag'></i>Gabon</div>" +
    "  <div class='item' data-value='gm'><i class='gm flag'></i>Gambia</div>" +
    "  <div class='item' data-value='ge'><i class='ge flag'></i>Georgia</div>" +
    "  <div class='item' data-value='de'><i class='de flag'></i>Germany</div>" +
    "  <div class='item' data-value='gh'><i class='gh flag'></i>Ghana</div>" +
    "  <div class='item' data-value='gi'><i class='gi flag'></i>Gibraltar</div>" +
    "  <div class='item' data-value='gr'><i class='gr flag'></i>Greece</div>" +
    "  <div class='item' data-value='gl'><i class='gl flag'></i>Greenland</div>" +
    "  <div class='item' data-value='gd'><i class='gd flag'></i>Grenada</div>" +
    "  <div class='item' data-value='gp'><i class='gp flag'></i>Guadeloupe</div>" +
    "  <div class='item' data-value='gu'><i class='gu flag'></i>Guam</div>" +
    "  <div class='item' data-value='gt'><i class='gt flag'></i>Guatemala</div>" +
    "  <div class='item' data-value='gw'><i class='gw flag'></i>Guinea-Bissau</div>" +
    "  <div class='item' data-value='gn'><i class='gn flag'></i>Guinea</div>" +
    "  <div class='item' data-value='gy'><i class='gy flag'></i>Guyana</div>" +
    "  <div class='item' data-value='ht'><i class='ht flag'></i>Haiti</div>" +
    "  <div class='item' data-value='hm'><i class='hm flag'></i>Heard Island</div>" +
    "  <div class='item' data-value='hn'><i class='hn flag'></i>Honduras</div>" +
    "  <div class='item' data-value='hk'><i class='hk flag'></i>Hong Kong</div>" +
    "  <div class='item' data-value='hu'><i class='hu flag'></i>Hungary</div>" +
    "  <div class='item' data-value='is'><i class='is flag'></i>Iceland</div>" +
    "  <div class='item' data-value='in'><i class='in flag'></i>India</div>" +
    "  <div class='item' data-value='io'><i class='io flag'></i>Indian Ocean Territory</div>" +
    "  <div class='item' data-value='id'><i class='id flag'></i>Indonesia</div>" +
    "  <div class='item' data-value='ir'><i class='ir flag'></i>Iran</div>" +
    "  <div class='item' data-value='iq'><i class='iq flag'></i>Iraq</div>" +
    "  <div class='item' data-value='ie'><i class='ie flag'></i>Ireland</div>" +
    "  <div class='item' data-value='il'><i class='il flag'></i>Israel</div>" +
    "  <div class='item' data-value='it'><i class='it flag'></i>Italy</div>" +
    "  <div class='item' data-value='jm'><i class='jm flag'></i>Jamaica</div>" +
    "  <div class='item' data-value='jp'><i class='jp flag'></i>Japan</div>" +
    "  <div class='item' data-value='jo'><i class='jo flag'></i>Jordan</div>" +
    "  <div class='item' data-value='kz'><i class='kz flag'></i>Kazakhstan</div>" +
    "  <div class='item' data-value='ke'><i class='ke flag'></i>Kenya</div>" +
    "  <div class='item' data-value='ki'><i class='ki flag'></i>Kiribati</div>" +
    "  <div class='item' data-value='kw'><i class='kw flag'></i>Kuwait</div>" +
    "  <div class='item' data-value='kg'><i class='kg flag'></i>Kyrgyzstan</div>" +
    "  <div class='item' data-value='la'><i class='la flag'></i>Laos</div>" +
    "  <div class='item' data-value='lv'><i class='lv flag'></i>Latvia</div>" +
    "  <div class='item' data-value='lb'><i class='lb flag'></i>Lebanon</div>" +
    "  <div class='item' data-value='ls'><i class='ls flag'></i>Lesotho</div>" +
    "  <div class='item' data-value='lr'><i class='lr flag'></i>Liberia</div>" +
    "  <div class='item' data-value='ly'><i class='ly flag'></i>Libya</div>" +
    "  <div class='item' data-value='li'><i class='li flag'></i>Liechtenstein</div>" +
    "  <div class='item' data-value='lt'><i class='lt flag'></i>Lithuania</div>" +
    "  <div class='item' data-value='lu'><i class='lu flag'></i>Luxembourg</div>" +
    "  <div class='item' data-value='mo'><i class='mo flag'></i>Macau</div>" +
    "  <div class='item' data-value='mk'><i class='mk flag'></i>Macedonia</div>" +
    "  <div class='item' data-value='mg'><i class='mg flag'></i>Madagascar</div>" +
    "  <div class='item' data-value='mw'><i class='mw flag'></i>Malawi</div>" +
    "  <div class='item' data-value='my'><i class='my flag'></i>Malaysia</div>" +
    "  <div class='item' data-value='mv'><i class='mv flag'></i>Maldives</div>" +
    "  <div class='item' data-value='ml'><i class='ml flag'></i>Mali</div>" +
    "  <div class='item' data-value='mt'><i class='mt flag'></i>Malta</div>" +
    "  <div class='item' data-value='mh'><i class='mh flag'></i>Marshall Islands</div>" +
    "  <div class='item' data-value='mq'><i class='mq flag'></i>Martinique</div>" +
    "  <div class='item' data-value='mr'><i class='mr flag'></i>Mauritania</div>" +
    "  <div class='item' data-value='mu'><i class='mu flag'></i>Mauritius</div>" +
    "  <div class='item' data-value='yt'><i class='yt flag'></i>Mayotte</div>" +
    "  <div class='item' data-value='mx'><i class='mx flag'></i>Mexico</div>" +
    "  <div class='item' data-value='fm'><i class='fm flag'></i>Micronesia</div>" +
    "  <div class='item' data-value='md'><i class='md flag'></i>Moldova</div>" +
    "  <div class='item' data-value='mc'><i class='mc flag'></i>Monaco</div>" +
    "  <div class='item' data-value='mn'><i class='mn flag'></i>Mongolia</div>" +
    "  <div class='item' data-value='me'><i class='me flag'></i>Montenegro</div>" +
    "  <div class='item' data-value='ms'><i class='ms flag'></i>Montserrat</div>" +
    "  <div class='item' data-value='ma'><i class='ma flag'></i>Morocco</div>" +
    "  <div class='item' data-value='mz'><i class='mz flag'></i>Mozambique</div>" +
    "  <div class='item' data-value='na'><i class='na flag'></i>Namibia</div>" +
    "  <div class='item' data-value='nr'><i class='nr flag'></i>Nauru</div>" +
    "  <div class='item' data-value='np'><i class='np flag'></i>Nepal</div>" +
    "  <div class='item' data-value='an'><i class='an flag'></i>Netherlands Antilles</div>" +
    "  <div class='item' data-value='nl'><i class='nl flag'></i>Netherlands</div>" +
    "  <div class='item' data-value='nc'><i class='nc flag'></i>New Caledonia</div>" +
    "  <div class='item' data-value='pg'><i class='pg flag'></i>New Guinea</div>" +
    "  <div class='item' data-value='nz'><i class='nz flag'></i>New Zealand</div>" +
    "  <div class='item' data-value='ni'><i class='ni flag'></i>Nicaragua</div>" +
    "  <div class='item' data-value='ne'><i class='ne flag'></i>Niger</div>" +
    "  <div class='item' data-value='ng'><i class='ng flag'></i>Nigeria</div>" +
    "  <div class='item' data-value='nu'><i class='nu flag'></i>Niue</div>" +
    "  <div class='item' data-value='nf'><i class='nf flag'></i>Norfolk Island</div>" +
    "  <div class='item' data-value='kp'><i class='kp flag'></i>North Korea</div>" +
    "  <div class='item' data-value='mp'><i class='mp flag'></i>Northern Mariana Islands</div>" +
    "  <div class='item' data-value='no'><i class='no flag'></i>Norway</div>" +
    "  <div class='item' data-value='om'><i class='om flag'></i>Oman</div>" +
    "  <div class='item' data-value='pk'><i class='pk flag'></i>Pakistan</div>" +
    "  <div class='item' data-value='pw'><i class='pw flag'></i>Palau</div>" +
    "  <div class='item' data-value='ps'><i class='ps flag'></i>Palestine</div>" +
    "  <div class='item' data-value='pa'><i class='pa flag'></i>Panama</div>" +
    "  <div class='item' data-value='py'><i class='py flag'></i>Paraguay</div>" +
    "  <div class='item' data-value='pe'><i class='pe flag'></i>Peru</div>" +
    "  <div class='item' data-value='ph'><i class='ph flag'></i>Philippines</div>" +
    "  <div class='item' data-value='pn'><i class='pn flag'></i>Pitcairn Islands</div>" +
    "  <div class='item' data-value='pl'><i class='pl flag'></i>Poland</div>" +
    "  <div class='item' data-value='pt'><i class='pt flag'></i>Portugal</div>" +
    "  <div class='item' data-value='pr'><i class='pr flag'></i>Puerto Rico</div>" +
    "  <div class='item' data-value='qa'><i class='qa flag'></i>Qatar</div>" +
    "  <div class='item' data-value='re'><i class='re flag'></i>Reunion</div>" +
    "  <div class='item' data-value='ro'><i class='ro flag'></i>Romania</div>" +
    "  <div class='item' data-value='ru'><i class='ru flag'></i>Russia</div>" +
    "  <div class='item' data-value='rw'><i class='rw flag'></i>Rwanda</div>" +
    "  <div class='item' data-value='sh'><i class='sh flag'></i>Saint Helena</div>" +
    "  <div class='item' data-value='kn'><i class='kn flag'></i>Saint Kitts and Nevis</div>" +
    "  <div class='item' data-value='lc'><i class='lc flag'></i>Saint Lucia</div>" +
    "  <div class='item' data-value='pm'><i class='pm flag'></i>Saint Pierre</div>" +
    "  <div class='item' data-value='vc'><i class='vc flag'></i>Saint Vincent</div>" +
    "  <div class='item' data-value='ws'><i class='ws flag'></i>Samoa</div>" +
    "  <div class='item' data-value='sm'><i class='sm flag'></i>San Marino</div>" +
    "  <div class='item' data-value='gs'><i class='gs flag'></i>Sandwich Islands</div>" +
    "  <div class='item' data-value='st'><i class='st flag'></i>Sao Tome</div>" +
    "  <div class='item' data-value='sa'><i class='sa flag'></i>Saudi Arabia</div>" +
    "  <div class='item' data-value='sn'><i class='sn flag'></i>Senegal</div>" +
    "  <div class='item' data-value='cs'><i class='cs flag'></i>Serbia</div>" +
    "  <div class='item' data-value='rs'><i class='rs flag'></i>Serbia</div>" +
    "  <div class='item' data-value='sc'><i class='sc flag'></i>Seychelles</div>" +
    "  <div class='item' data-value='sl'><i class='sl flag'></i>Sierra Leone</div>" +
    "  <div class='item' data-value='sg'><i class='sg flag'></i>Singapore</div>" +
    "  <div class='item' data-value='sk'><i class='sk flag'></i>Slovakia</div>" +
    "  <div class='item' data-value='si'><i class='si flag'></i>Slovenia</div>" +
    "  <div class='item' data-value='sb'><i class='sb flag'></i>Solomon Islands</div>" +
    "  <div class='item' data-value='so'><i class='so flag'></i>Somalia</div>" +
    "  <div class='item' data-value='za'><i class='za flag'></i>South Africa</div>" +
    "  <div class='item' data-value='kr'><i class='kr flag'></i>South Korea</div>" +
    "  <div class='item' data-value='es'><i class='es flag'></i>Spain</div>" +
    "  <div class='item' data-value='lk'><i class='lk flag'></i>Sri Lanka</div>" +
    "  <div class='item' data-value='sd'><i class='sd flag'></i>Sudan</div>" +
    "  <div class='item' data-value='sr'><i class='sr flag'></i>Suriname</div>" +
    "  <div class='item' data-value='sj'><i class='sj flag'></i>Svalbard</div>" +
    "  <div class='item' data-value='sz'><i class='sz flag'></i>Swaziland</div>" +
    "  <div class='item' data-value='se'><i class='se flag'></i>Sweden</div>" +
    "  <div class='item' data-value='ch'><i class='ch flag'></i>Switzerland</div>" +
    "  <div class='item' data-value='sy'><i class='sy flag'></i>Syria</div>" +
    "  <div class='item' data-value='tw'><i class='tw flag'></i>Taiwan</div>" +
    "  <div class='item' data-value='tj'><i class='tj flag'></i>Tajikistan</div>" +
    "  <div class='item' data-value='tz'><i class='tz flag'></i>Tanzania</div>" +
    "  <div class='item' data-value='th'><i class='th flag'></i>Thailand</div>" +
    "  <div class='item' data-value='tl'><i class='tl flag'></i>Timorleste</div>" +
    "  <div class='item' data-value='tg'><i class='tg flag'></i>Togo</div>" +
    "  <div class='item' data-value='tk'><i class='tk flag'></i>Tokelau</div>" +
    "  <div class='item' data-value='to'><i class='to flag'></i>Tonga</div>" +
    "  <div class='item' data-value='tt'><i class='tt flag'></i>Trinidad</div>" +
    "  <div class='item' data-value='tn'><i class='tn flag'></i>Tunisia</div>" +
    "  <div class='item' data-value='tr'><i class='tr flag'></i>Turkey</div>" +
    "  <div class='item' data-value='tm'><i class='tm flag'></i>Turkmenistan</div>" +
    "  <div class='item' data-value='tv'><i class='tv flag'></i>Tuvalu</div>" +
    "  <div class='item' data-value='ug'><i class='ug flag'></i>Uganda</div>" +
    "  <div class='item' data-value='ua'><i class='ua flag'></i>Ukraine</div>" +
    "  <div class='item' data-value='ae'><i class='ae flag'></i>United Arab Emirates</div>" +
    "  <div class='item' data-value='us'><i class='us flag'></i>United States</div>" +
    "  <div class='item' data-value='uy'><i class='uy flag'></i>Uruguay</div>" +
    "  <div class='item' data-value='um'><i class='um flag'></i>Us Minor Islands</div>" +
    "  <div class='item' data-value='vi'><i class='vi flag'></i>Us Virgin Islands</div>" +
    "  <div class='item' data-value='uz'><i class='uz flag'></i>Uzbekistan</div>" +
    "  <div class='item' data-value='vu'><i class='vu flag'></i>Vanuatu</div>" +
    "  <div class='item' data-value='va'><i class='va flag'></i>Vatican City</div>" +
    "  <div class='item' data-value='ve'><i class='ve flag'></i>Venezuela</div>" +
    "  <div class='item' data-value='vn'><i class='vn flag'></i>Vietnam</div>" +
    "  <div class='item' data-value='wf'><i class='wf flag'></i>Wallis and Futuna</div>" +
    "  <div class='item' data-value='eh'><i class='eh flag'></i>Western Sahara</div>" +
    "  <div class='item' data-value='ye'><i class='ye flag'></i>Yemen</div>" +
    "  <div class='item' data-value='zm'><i class='zm flag'></i>Zambia</div>" +
    "  <div class='item' data-value='zw'><i class='zw flag'></i>Zimbabwe</div>" +
    "</div>";



  function InitEditor(e) {
    $(e).froalaEditor(

      {
        //Setting environment for saving images
        //Set the image upload URl
        imageUploadURL: 'scripts/upload/images.php',

        //Set method
        imageUploadMethod: 'POST',

        //Set Maximum Size in mb
        imageMaxSize: 50 * 1024 * 1024,

        //Allow Upload Type
        imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],



        //Setting environment for managing images
        //Set a preloader
        imageManagerPreloader: "../files/images/loading.gif",

        // Set page size
        imageManagerPageSize: 20,

        //Set scroll offset
        imageManagerScrollOffset: 10,

        //Set Load images request URL
        imageManagerLoadURL: "scripts/manage/images.php",

        //Set delete image request URL
        imageManagerDeleteURL: "scripts/manage/delete_images.php",



        //Setting environment for videos
        //set the videos upload URL
        videoUploadURL: 'scripts/upload/videos.php',

        //Set Request Type
        videoUploadMethod: 'POST',

        //Allow to upload file types
        //videoAllowedTypes: ['webm', 'jpg', 'ogg'],

        //Set max video size to 50mb
        videoMaxSize: 5000 * 1024 * 1024,


        //Setting environment for file uploads
        //Set file upload URL
        fileUploadURL: 'scripts/upload/files.php',

        //Set request type
        fileUploadMethod: 'POST',

        //Set Max file Size
        fileMaxSize: 5000 * 1024 * 1024,

        //Allowed to upload any file
        fileAllowedType: ['*']
      }

    )
      .on('froalaEditor.image.beforeUpload', function (e, editor, images) {
        //Returns false if you want to stop the image upload
      })
      .on('froalaEditor.image.uploaded', function (e, editor, response) {
        //Image was uploaded to server
      })
      .on('froalaEditor.image.inserted', function (e, editor, $img, response) {
        //Image was inserted in the editor
      })
      .on('froalaEditor.image.replaced', function (e, editor, $img, response) {
        //Image was replaced in the editor
      })
      .on('froalaEditor.image.error', function (e, editor, error, response) {
        if (error.code == 1) {
          //Bad link
        }
        else if (error.code == 2) {
          //No link in upload response
        }
        else if (error.code == 3) {
          //Error during image upload
        }
        else if (error.code == 4) {
          //Parsing response failed
        }
        else if (error.code == 5) {
          //Image too text-large
        }
        else if (error.code == 6) {
          //Invalid image type
        }
        else if (error.code == 7) {
          //Image can be uploaded only to same domain in IE 8 and IE 9
        }
      })
      .on('froalaEditor.imageManager.error', function (e, editor, error, response) {
        if (error.code == 10) {
          //Bad link. One of the returned images links cannot be loaded
        }
        if (error.code == 11) {
          //Error during request
        }
        if (error.code == 12) {
          //Missing imagesLoadURL option
        }
        if (error.code == 13) {
          //Parsing response failed
        }
      })
      .on('froalaEditor.imageManager.imagesLoaded', function (e, editor, data) {
        //Images finish loading with success
      })
      .on('froalaEditor.imageManager.imageLoaded', function (e, editor, data) {
        //An image is loaded in the image manager
      })
      .on('froalaEditor.imageManager.deforeDeleteImage', function (e, editor, $img) {
        //An image is loaded in the image manager
      })
      .on('froalaEditor.imageManager.imageDeleted', function (e, editor, data) {
        //An image is loaded in the image manager
      })
      .on('froalaEditor.video.error', function (e, editor, error, response) {
        if (error.code == 1) {
          //Bad link
        }
        if (error.code == 2) {
          //No link in upload response
        }
        if (error.code == 3) {
          //Error during video upload
        }
        if (error.code == 4) {
          //Parsing response failed
        }
        if (error.code == 5) {
          //Video too text-large
        }
        if (error.code == 6) {
          //Invalid Video type
        }
        if (error.code == 7) {
          //Video can be uploaded only to same domain in IE 8 and IE 9
        }
      })
      .on('froalaEditor.video.beforeUpload', function (e, editor, response) {
        //Return false to stop further upload
      })
      .on('froalaEditor.video.uploaded', function (e, editor, $img, response) {
        //Video was uploaded to the server
      })
      .on('froalaEditor.video.inserted', function (e, editor, $img, videos) {
        //Video was inserted in the editor
      })
      .on('froalaEditor.video.replaced', function (e, editor, $img, videos) {
        //Video was replaced in the editor
      })
      .on('froalaEditor.file.error', function (e, editor, error, response) {
        if (error.code == 1) {
          //Bad link
        }
        if (error.code == 2) {
          //No link in upload response
        }
        if (error.code == 3) {
          //Error during file upload
        }
        if (error.code == 4) {
          //Parsing response failed
        }
        if (error.code == 5) {
          //File too text-large
        }
        if (error.code == 6) {
          //Invalid file type
        }
        if (error.code == 7) {
          //File can be uploaded to same Domain in IE and IE 9
        }
      })
      .on('froalaEditor.file.beforeUpload', function (e, editor, files) {
        //Return false to prevent file upload
      })
      .on('froalaEditor.file.uploaded', function (e, editor, response) {
        //File was uploaded to the server
      })
      .on('froalaEditor.file.inserted', function (e, editor, $file, response) {
        //File was inserted
      });

  }


  function openShell(e) {
    $(".shell-cont").slideUp(600);

    if ($("#shell_" + e).css("display") == "none") {
      $("#shell_" + e).slideDown(600);
    }
    else {
      $("#shell_" + e).slideUp(600);
    }
  }




  function ShowModal(msg) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.backgroundColor = "rgba(0,0,0,0.6)";
    modal.style.top = "0px";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.zIndex = 300;
    modal.id = "modal";
    modal.style.overflowY = "auto";
    modal.className = "w3-row";
    modal.style.display = "none";


    document.body.appendChild(modal);


    $("#modal").fadeIn(500, function () {

      modal.innerHTML = "<div id='modal-inner' style='display: none;'>" +
        "<div class='w3-col l4 m2 s12' style='color: transparent;'>.</div>" +
        "<div class='w3-col l4 m8 s12 s-pad-t'>" +
        "<div class='widget curve l-margin-t-7 margin-b-3'>" +
        "<div class='pad-1'><h6 style='font-family: quicksandregular; color: dimgray; font-weight: bold;'>Message</h6></div>" +
        "<hr style='margin: 0px;'/>" +
        "<div class='pad-2'><p style='font-family: Lato;'>" + msg + "</p></div>" +
        "<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
        "<button class='btn green-back btn-small' onclick='closeModal()'>OK</button></div>" +
        "</div></div></div><br/><br/>";

      $("#modal-inner").transition('fade right in');

    });
  }



  function ConfirmModal(msg, func, yesmg, nomsg, param) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.backgroundColor = "rgba(0,0,0,0.6)";
    modal.style.top = "0px";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.zIndex = 300;
    modal.id = "modal";
    modal.style.overflowY = "auto";
    modal.className = "w3-row";
    modal.style.display = "none";

    if (yesmg == null) {
      yesmg = "Yes";
    }
    if (nomsg == null) {
      nomsg = "Cancel";
    }


    document.body.appendChild(modal);


    $("#modal").fadeIn(500, function () {

      modal.innerHTML = "<div id='modal-inner' style='display: none;'>" +
        "<div class='w3-col l4 m2 s12' style='color: transparent;'>.</div>" +
        "<div class='w3-col l4 m8 s12 w3-padding-tiny'>" +
        "<div class='widget curve l-margin-t-7 margin-b-3'>" +
        "<div class='pad-1 '><h6 style='font-family: quicksandregular; font-weight: bold;" +
          " color: dimgray;'>Confirmation</h6></div>" +
        "<hr style='margin: 0px;'/>" +
        "<div class='pad-2'><p style='font-family: Lato;'>" + msg + "</p></div>" +
        "<div class='pad-1' style='background-color: whitesmoke; border-radius: 0px 0px 4px 4px;'>" +
        "<button class='ui small sleak button red-back' onclick=\"closeConfirm(" + func + ",false,'" + param + "')\">" + nomsg + "</button> " +
        "<button class='ui small sleak button green-back' onclick=\"closeConfirm(" + func + ",true,'" + param + "')\">" + yesmg + "</button></div>" +
        "</div></div></div><br/><br/>";

      $("#modal-inner").transition('fade right in');
    });
  }


  function closeConfirm(func, choice, param) {

    $("#modal-inner").transition('fade right', function () {
      $('#modal').fadeOut(500, function () {
        document.body.removeChild(document.getElementById('modal'));
        if (typeof func == "function") {
          func(choice, param);
        }
      });
    });
  }



  function closeModal(func) {
    $("#modal-inner").transition('fade right', function () {
      $('#modal').fadeOut(500, function () {
        document.body.removeChild(document.getElementById('modal'));
        if (typeof func == "function") {
          func();
        }
      });
    });
  }

  function shortenText(max, header, body)
  {
        let ret = "";

        if(body == null)
        {
            if(header.length <= max)
            {
                ret = header;
            }
            else
            {
                let store = "";

                let split = header.split(" ");

                for(let i = 0; i < split.length; i++)
                {
                    if((store + " " + split[i]).trim().length > max)
                    {
                        store += "...";
                        break;
                    }
                    else
                    {
                        store+= " "+split[i];
                    }
                }
                ret = store;
            }
        }
        else
        {
            if(header.length <= max)
            {
                ret = "<b>"+header+"</b> - ";

                let store = "";

                let split = body.split(" ");

                for(let i = 0; i < split.length; i++)
                {
                    if(((store + " " + split[i]).trim().length + header.length) > max)
                    {
                        store += "...";
                        break;
                    }
                    else
                    {
                        store+= " "+split[i];
                    }
                }
                ret += store;
            }
            else
            {
                let store = "";

                let split = header.split(" ");

                for(let i = 0; i < split.length; i++)
                {
                    if((store + " " + split[i]).trim().length > max)
                    {
                        store += "...";
                        break;
                    }
                    else
                    {
                        store+= " "+split[i];
                    }
                }
                ret = "<b>"+store+"</b>";
            }
        }

        return ret;
  }



  function copyToClipboard(e, func)
  {
      var el = document.createElement('textarea');
      el.value = e;
      el.setAttribute('readonly','');
      el.style.position = 'absolute';
      el.style.left = '-99999px';
      document.body.appendChild(el);

      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);

      if(selected)
      {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
      }

      if(typeof func == "function")
      {
          func();
      }
  }



  function dropNotification(msg)
  {
      var dr = null;
      var h = 50;

      if(document.getElementById("copy_txt") == null)
      {
          dr = document.createElement("div");
          dr.style.position = "fixed";
          dr.style.padding = "10px";
          dr.id = "copy_txt";
          dr.style.zIndex = 350;
          dr.style.right = "10px";
          dr.style.borderRadius = "3px";
          dr.style.display = "inline";
          dr.className = "w3-card-4";
          dr.style.backgroundColor = "rgb(0,178,111)";
          $(dr).css("border-left","10px solid rgb(119,136,153)");
          dr.innerHTML = "<span style='color: white; font-family: quicksandregular; font-weight: bold;'>"
              +msg+"</span>";

          document.body.appendChild(dr);

          h = dr.outerHeight || dr.clientHeight;
          $(dr).css("top","-"+h+"px");
      }
      else
      {
          dr = document.getElementById("copy_txt");
          h = dr.outerHeight || dr.clientHeight;
      }

      $(dr).animate({top:'50px'}, function(){
          setTimeout(function(){
              $(dr).animate({top:'-'+h+'px'}, function(){
                  document.body.removeChild(dr);
              });
          },2000);
      });
  }


  function cloneItem(item, count)
  {
      let ret = "";
      for(let i = 0; i < count; i++)
      {
          ret += item;
      }
      return ret;
  }

  function zerofy(num)
  {
      return Number(num) < 10 ? "0"+num : num;
  }


  function IntToMonth(number)
  {
      let ret = "Unknown";

      if(Number(number)== 1)
      {
          ret = "january";
      }
      if(Number(number)== 2)
      {
          ret = "february";
      }
      if(Number(number)== 3)
      {
          ret = "march";
      }
      if(Number(number)== 4)
      {
          ret = "april";
      }
      if(Number(number)== 5)
      {
          ret = "may";
      }
      if(Number(number)== 6)
      {
          ret = "june";
      }
      if(Number(number)== 7)
      {
          ret = "july";
      }
      if(Number(number)== 8)
      {
          ret = "august";
      }
      if(Number(number)== 9)
      {
          ret = "september";
      }
      if(Number(number)== 10)
      {
          ret = "october";
      }
      if(Number(number)== 11)
      {
          ret = "november";
      }
      if(Number(number)== 12)
      {
          ret = "december";
      }

      return ret;
  }



	let icon_dropdown = "<option>american sign language interpreting</option>" +
    "<option>assistive listening systems</option>" +
    "<option>audio description</option>" +
    "<option>blind</option>" +
    "<option>braille</option>" +
    "<option>closed captioning</option>" +
    "<option>deaf</option>" +
    "<option>low vision</option>" +
    "<option>phone volume</option>" +
    "<option>question circle</option>" +
    "<option>sign language</option>" +
    "<option>tty</option>" +
    "<option>universal access</option>" +
    "<option>wheelchair</option>" +
    "<option>angle double down</option>" +
    "<option>angle double left</option>" +
    "<option>angle double right</option>" +
    "<option>angle double up</option>" +
    "<option>angle down</option>" +
    "<option>angle left</option>" +
    "<option>angle right</option>" +
    "<option>angle up</option>" +
    "<option>arrow alternate circle down</option>" +
    "<option>arrow alternate circle left</option>" +
    "<option>arrow alternate circle right</option>" +
    "<option>arrow alternate circle up</option>" +
    "<option>arrow circle down</option>" +
    "<option>arrow circle left</option>" +
    "<option>arrow circle right</option>" +
    "<option>arrow circle up</option>" +
    "<option>arrow down</option>" +
    "<option>arrow left</option>" +
    "<option>arrow right</option>" +
    "<option>arrow up</option>" +
    "<option>arrows alternate</option>" +
    "<option>arrows alternate horizontal</option>" +
    "<option>arrows alternate vertical</option>" +
    "<option>caret down</option>" +
    "<option>caret left</option>" +
    "<option>caret right</option>" +
    "<option>caret square down</option>" +
    "<option>audio description</option>" +
    "<option>backward</option>" +
    "<option>circle</option>" +
    "<option>closed captioning</option>" +
    "<option>compress</option>" +
    "<option>eject</option>" +
    "<option>expand</option>" +
    "<option>expand arrows alternate</option>" +
    "<option>fast backward</option>" +
    "<option>fast forward</option>" +
    "<option>file audio</option>" +
    "<option>file video</option>" +
    "<option>film</option>" +
    "<option>forward</option>" +
    "<option>headphones</option>" +
    "<option>microphone</option>" +
    "<option>microphone slash</option>" +
    "<option>music</option>" +
    "<option>pause</option>" +
    "<option>pause circle</option>" +
    "<option>phone volume</option>" +
    "<option>play</option>" +
    "<option>play circle</option>" +
    "<option>podcast</option>" +
    "<option>random</option>" +
    "<option>redo</option>" +
    "<option>redo alternate</option>" +
    "<option>rss</option>" +
    "<option>rss square</option>" +
    "<option>step backward</option>" +
    "<option>step forward</option>" +
    "<option>stop</option>" +
    "<option>stop circle</option>" +
    "<option>sync</option>" +
    "<option>sync alternate</option>" +
    "<option>undo</option>" +
    "<option>undo alternate</option>" +
    "<option>video</option>" +
    "<option>volume down</option>" +
    "<option>volume off</option>" +
    "<option>volume up</option>" +
    "<option>address book</option>" +
    "<option>address card</option>" +
    "<option>archive</option>" +
    "<option>balance scale</option>" +
    "<option>birthday cake</option>" +
    "<option>book</option>" +
    "<option>briefcase</option>" +
    "<option>building</option>" +
    "<option>bullhorn</option>" +
    "<option>bullseye</option>" +
    "<option>calculator</option>" +
    "<option>calendar</option>" +
    "<option>calendar alternate</option>" +
    "<option>certificate</option>" +
    "<option>chart area</option>" +
    "<option>chart bar</option>" +
    "<option>chart line</option>" +
    "<option>chart pie</option>" +
    "<option>clipboard</option>" +
    "<option>coffee</option>" +
    "<option>columns</option>" +
    "<option>compass</option>" +
    "<option>copy</option>" +
    "<option>copyright</option>" +
    "<option>cut</option>" +
    "<option>edit</option>" +
    "<option>envelope</option>" +
    "<option>envelope open</option>" +
    "<option>envelope square</option>" +
    "<option>eraser</option>" +
    "<option>fax</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>folder</option>" +
    "<option>folder open</option>" +
    "<option>globe</option>" +
    "<option>industry</option>" +
    "<option>paperclip</option>" +
    "<option>paste</option>" +
    "<option>pen square</option>" +
    "<option>pencil alternate</option>" +
    "<option>percent</option>" +
    "<option>phone</option>" +
    "<option>phone square</option>" +
    "<option>phone volume</option>" +
    "<option>registered</option>" +
    "<option>save</option>" +
    "<option>sitemap</option>" +
    "<option>sticky note</option>" +
    "<option>suitcase</option>" +
    "<option>table</option>" +
    "<option>tag</option>" +
    "<option>tags</option>" +
    "<option>tasks</option>" +
    "<option>thumbtack</option>" +
    "<option>trademark</option>" +
    "<option>chess</option>" +
    "<option>chess bishop</option>" +
    "<option>chess board</option>" +
    "<option>chess king</option>" +
    "<option>chess knight</option>" +
    "<option>chess pawn</option>" +
    "<option>chess queen</option>" +
    "<option>chess rook</option>" +
    "<option>square full</option>" +
    "<option>archive</option>" +
    "<option>barcode</option>" +
    "<option>bath</option>" +
    "<option>bug</option>" +
    "<option>code</option>" +
    "<option>code branch</option>" +
    "<option>coffee</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>file code</option>" +
    "<option>filter</option>" +
    "<option>fire extinguisher</option>" +
    "<option>folder</option>" +
    "<option>folder open</option>" +
    "<option>keyboard</option>" +
    "<option>microchip</option>" +
    "<option>qrcode</option>" +
    "<option>shield alternate</option>" +
    "<option>sitemap</option>" +
    "<option>terminal</option>" +
    "<option>user secret</option>" +
    "<option>window close</option>" +
    "<option>window maximize</option>" +
    "<option>window minimize</option>" +
    "<option>window restore</option>" +
    "<option>address book</option>" +
    "<option>address card</option>" +
    "<option>american sign language interpreting</option>" +
    "<option>assistive listening systems</option>" +
    "<option>at</option>" +
    "<option>bell</option>" +
    "<option>bell slash</option>" +
    "<option>bullhorn</option>" +
    "<option>comment</option>" +
    "<option>comment alternate</option>" +
    "<option>comments</option>" +
    "<option>envelope</option>" +
    "<option>envelope open</option>" +
    "<option>envelope square</option>" +
    "<option>fax</option>" +
    "<option>inbox</option>" +
    "<option>language</option>" +
    "<option>microphone</option>" +
    "<option>microphone slash</option>" +
    "<option>mobile</option>" +
    "<option>mobile alternate</option>" +
    "<option>paper plane</option>" +
    "<option>phone</option>" +
    "<option>phone square</option>" +
    "<option>phone volume</option>" +
    "<option>rss</option>" +
    "<option>rss square</option>" +
    "<option>tty</option>" +
    "<option>wifi</option>" +
    "<option>desktop</option>" +
    "<option>download</option>" +
    "<option>hdd</option>" +
    "<option>headphones</option>" +
    "<option>keyboard</option>" +
    "<option>laptop</option>" +
    "<option>microchip</option>" +
    "<option>mobile</option>" +
    "<option>mobile alternate</option>" +
    "<option>plug</option>" +
    "<option>power off</option>" +
    "<option>print</option>" +
    "<option>save</option>" +
    "<option>server</option>" +
    "<option>tablet</option>" +
    "<option>tablet alternate</option>" +
    "<option>tv</option>" +
    "<option>upload</option>" +
    "<option>dollar sign</option>" +
    "<option>euro sign</option>" +
    "<option>lira sign</option>" +
    "<option>money bill alternate</option>" +
    "<option>pound sign</option>" +
    "<option>ruble sign</option>" +
    "<option>rupee sign</option>" +
    "<option>shekel sign</option>" +
    "<option>won sign</option>" +
    "<option>yen sign</option>" +
    "<option>bell</option>" +
    "<option>bell slash</option>" +
    "<option>calendar</option>" +
    "<option>calendar alternate</option>" +
    "<option>calendar check</option>" +
    "<option>calendar minus</option>" +
    "<option>calendar plus</option>" +
    "<option>calendar times</option>" +
    "<option>clock</option>" +
    "<option>hourglass</option>" +
    "<option>hourglass end</option>" +
    "<option>hourglass half</option>" +
    "<option>hourglass start</option>" +
    "<option>stopwatch</option>" +
    "<option>adjust</option>" +
    "<option>clone</option>" +
    "<option>copy</option>" +
    "<option>crop</option>" +
    "<option>crosshairs</option>" +
    "<option>cut</option>" +
    "<option>edit</option>" +
    "<option>eraser</option>" +
    "<option>eye</option>" +
    "<option>eye dropper</option>" +
    "<option>eye slash</option>" +
    "<option>object group</option>" +
    "<option>object ungroup</option>" +
    "<option>paint brush</option>" +
    "<option>paste</option>" +
    "<option>pencil alternate</option>" +
    "<option>save</option>" +
    "<option>tint</option>" +
    "<option>align center</option>" +
    "<option>align justify</option>" +
    "<option>align left</option>" +
    "<option>align right</option>" +
    "<option>bold</option>" +
    "<option>clipboard</option>" +
    "<option>clone</option>" +
    "<option>columns</option>" +
    "<option>copy</option>" +
    "<option>cut</option>" +
    "<option>edit</option>" +
    "<option>eraser</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>font</option>" +
    "<option>heading</option>" +
    "<option>i cursor</option>" +
    "<option>indent</option>" +
    "<option>italic</option>" +
    "<option>linkify</option>" +
    "<option>list</option>" +
    "<option>list alternate</option>" +
    "<option>list ol</option>" +
    "<option>list ul</option>" +
    "<option>outdent</option>" +
    "<option>paper plane</option>" +
    "<option>paperclip</option>" +
    "<option>paragraph</option>" +
    "<option>paste</option>" +
    "<option>pencil alternate</option>" +
    "<option>print</option>" +
    "<option>quote left</option>" +
    "<option>quote right</option>" +
    "<option>redo</option>" +
    "<option>redo alternate</option>" +
    "<option>reply</option>" +
    "<option>reply all</option>" +
    "<option>share</option>" +
    "<option>strikethrough</option>" +
    "<option>subscript</option>" +
    "<option>superscript</option>" +
    "<option>sync</option>" +
    "<option>sync alternate</option>" +
    "<option>table</option>" +
    "<option>tasks</option>" +
    "<option>text height</option>" +
    "<option>text width</option>" +
    "<option>th</option>" +
    "<option>th large</option>" +
    "<option>th list</option>" +
    "<option>trash</option>" +
    "<option>trash alternate</option>" +
    "<option>underline</option>" +
    "<option>undo</option>" +
    "<option>undo alternate</option>" +
    "<option>unlink</option>" +
    "<option>archive</option>" +
    "<option>clone</option>" +
    "<option>copy</option>" +
    "<option>cut</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>file archive</option>" +
    "<option>file audio</option>" +
    "<option>file code</option>" +
    "<option>file excel</option>" +
    "<option>file image</option>" +
    "<option>file pdf</option>" +
    "<option>file powerpoint</option>" +
    "<option>file video</option>" +
    "<option>file word</option>" +
    "<option>folder</option>" +
    "<option>folder open</option>" +
    "<option>paste</option>" +
    "<option>save</option>" +
    "<option>sticky note</option>" +
    "<option>genderless</option>" +
    "<option>mars</option>" +
    "<option>mars double</option>" +
    "<option>mars stroke</option>" +
    "<option>mars stroke horizontal</option>" +
    "<option>mars stroke vertical</option>" +
    "<option>mercury</option>" +
    "<option>neuter</option>" +
    "<option>transgender</option>" +
    "<option>transgender alternate</option>" +
    "<option>venus</option>" +
    "<option>venus double</option>" +
    "<option>venus mars</option>" +
    "<option>hand lizard</option>" +
    "<option>hand paper</option>" +
    "<option>hand peace</option>" +
    "<option>hand point down</option>" +
    "<option>hand point left</option>" +
    "<option>hand point right</option>" +
    "<option>hand point up</option>" +
    "<option>hand pointer</option>" +
    "<option>hand rock</option>" +
    "<option>hand scissors</option>" +
    "<option>hand spock</option>" +
    "<option>handshake</option>" +
    "<option>thumbs down</option>" +
    "<option>thumbs up</option>" +
    "<option>ambulance</option>" +
    "<option>h square</option>" +
    "<option>heart</option>" +
    "<option>heartbeat</option>" +
    "<option>hospital</option>" +
    "<option>medkit</option>" +
    "<option>plus square</option>" +
    "<option>stethoscope</option>" +
    "<option>user md</option>" +
    "<option>wheelchair</option>" +
    "<option>adjust</option>" +
    "<option>bolt</option>" +
    "<option>camera</option>" +
    "<option>camera retro</option>" +
    "<option>clone</option>" +
    "<option>compress</option>" +
    "<option>expand</option>" +
    "<option>eye</option>" +
    "<option>eye dropper</option>" +
    "<option>eye slash</option>" +
    "<option>file image</option>" +
    "<option>film</option>" +
    "<option>id badge</option>" +
    "<option>id card</option>" +
    "<option>image</option>" +
    "<option>images</option>" +
    "<option>sliders horizontal</option>" +
    "<option>tint</option>" +
    "<option>ban</option>" +
    "<option>barcode</option>" +
    "<option>bars</option>" +
    "<option>beer</option>" +
    "<option>bell</option>" +
    "<option>bell slash</option>" +
    "<option>bug</option>" +
    "<option>bullhorn</option>" +
    "<option>bullseye</option>" +
    "<option>calculator</option>" +
    "<option>calendar</option>" +
    "<option>calendar alternate</option>" +
    "<option>calendar check</option>" +
    "<option>calendar minus</option>" +
    "<option>calendar plus</option>" +
    "<option>calendar times</option>" +
    "<option>certificate</option>" +
    "<option>check</option>" +
    "<option>check circle</option>" +
    "<option>check square</option>" +
    "<option>circle</option>" +
    "<option>clipboard</option>" +
    "<option>clone</option>" +
    "<option>cloud</option>" +
    "<option>cloud download</option>" +
    "<option>cloud upload</option>" +
    "<option>coffee</option>" +
    "<option>cog</option>" +
    "<option>cogs</option>" +
    "<option>copy</option>" +
    "<option>cut</option>" +
    "<option>database</option>" +
    "<option>dot circle</option>" +
    "<option>download</option>" +
    "<option>edit</option>" +
    "<option>ellipsis horizontal</option>" +
    "<option>ellipsis vertical</option>" +
    "<option>envelope</option>" +
    "<option>envelope open</option>" +
    "<option>eraser</option>" +
    "<option>exclamation</option>" +
    "<option>exclamation circle</option>" +
    "<option>exclamation triangle</option>" +
    "<option>external alternate</option>" +
    "<option>external square alternate</option>" +
    "<option>eye</option>" +
    "<option>eye slash</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>filter</option>" +
    "<option>flag</option>" +
    "<option>flag checkered</option>" +
    "<option>folder</option>" +
    "<option>folder open</option>" +
    "<option>frown</option>" +
    "<option>hashtag</option>" +
    "<option>heart</option>" +
    "<option>history</option>" +
    "<option>home</option>" +
    "<option>i cursor</option>" +
    "<option>info</option>" +
    "<option>info circle</option>" +
    "<option>language</option>" +
    "<option>magic</option>" +
    "<option>meh</option>" +
    "<option>microphone</option>" +
    "<option>microphone slash</option>" +
    "<option>minus</option>" +
    "<option>minus circle</option>" +
    "<option>minus square</option>" +
    "<option>paste</option>" +
    "<option>pencil alternate</option>" +
    "<option>plus</option>" +
    "<option>plus circle</option>" +
    "<option>plus square</option>" +
    "<option>qrcode</option>" +
    "<option>question</option>" +
    "<option>question circle</option>" +
    "<option>quote left</option>" +
    "<option>quote right</option>" +
    "<option>redo</option>" +
    "<option>redo alternate</option>" +
    "<option>reply</option>" +
    "<option>reply all</option>" +
    "<option>rss</option>" +
    "<option>rss square</option>" +
    "<option>save</option>" +
    "<option>search</option>" +
    "<option>search minus</option>" +
    "<option>search plus</option>" +
    "<option>share</option>" +
    "<option>share alternate</option>" +
    "<option>share alternate square</option>" +
    "<option>share square</option>" +
    "<option>shield alternate</option>" +
    "<option>sign in alternate</option>" +
    "<option>sign out alternate</option>" +
    "<option>signal</option>" +
    "<option>sitemap</option>" +
    "<option>sliders horizontal</option>" +
    "<option>smile</option>" +
    "<option>sort</option>" +
    "<option>sort alphabet down</option>" +
    "<option>sort alphabet up</option>" +
    "<option>sort amount down</option>" +
    "<option>sort amount up</option>" +
    "<option>sort down</option>" +
    "<option>sort numeric down</option>" +
    "<option>sort numeric up</option>" +
    "<option>sort up</option>" +
    "<option>star</option>" +
    "<option>star half</option>" +
    "<option>sync</option>" +
    "<option>sync alternate</option>" +
    "<option>thumbs down</option>" +
    "<option>thumbs up</option>" +
    "<option>times</option>" +
    "<option>times circle</option>" +
    "<option>toggle off</option>" +
    "<option>toggle on</option>" +
    "<option>trash</option>" +
    "<option>trash alternate</option>" +
    "<option>trophy</option>" +
    "<option>undo</option>" +
    "<option>undo alternate</option>" +
    "<option>upload</option>" +
    "<option>user</option>" +
    "<option>user circle</option>" +
    "<option>wifi</option>" +
    "<option>box</option>" +
    "<option>boxes</option>" +
    "<option>clipboard check</option>" +
    "<option>clipboard list</option>" +
    "<option>dolly</option>" +
    "<option>dolly flatbed</option>" +
    "<option>pallet</option>" +
    "<option>shipping fast</option>" +
    "<option>truck</option>" +
    "<option>warehouse</option>" +
    "<option>ambulance</option>" +
    "<option>anchor</option>" +
    "<option>balance scale</option>" +
    "<option>bath</option>" +
    "<option>bed</option>" +
    "<option>beer</option>" +
    "<option>bell</option>" +
    "<option>bell slash</option>" +
    "<option>bicycle</option>" +
    "<option>binoculars</option>" +
    "<option>birthday cake</option>" +
    "<option>blind</option>" +
    "<option>bomb</option>" +
    "<option>book</option>" +
    "<option>bookmark</option>" +
    "<option>briefcase</option>" +
    "<option>building</option>" +
    "<option>car</option>" +
    "<option>coffee</option>" +
    "<option>crosshairs</option>" +
    "<option>dollar sign</option>" +
    "<option>eye</option>" +
    "<option>eye slash</option>" +
    "<option>fighter jet</option>" +
    "<option>fire</option>" +
    "<option>fire extinguisher</option>" +
    "<option>flag</option>" +
    "<option>flag checkered</option>" +
    "<option>flask</option>" +
    "<option>gamepad</option>" +
    "<option>gavel</option>" +
    "<option>gift</option>" +
    "<option>glass martini</option>" +
    "<option>globe</option>" +
    "<option>graduation cap</option>" +
    "<option>h square</option>" +
    "<option>heart</option>" +
    "<option>heartbeat</option>" +
    "<option>home</option>" +
    "<option>hospital</option>" +
    "<option>image</option>" +
    "<option>images</option>" +
    "<option>industry</option>" +
    "<option>info</option>" +
    "<option>info circle</option>" +
    "<option>key</option>" +
    "<option>leaf</option>" +
    "<option>lemon</option>" +
    "<option>life ring</option>" +
    "<option>lightbulb</option>" +
    "<option>location arrow</option>" +
    "<option>low vision</option>" +
    "<option>magnet</option>" +
    "<option>male</option>" +
    "<option>map</option>" +
    "<option>map marker</option>" +
    "<option>map marker alternate</option>" +
    "<option>map pin</option>" +
    "<option>map signs</option>" +
    "<option>medkit</option>" +
    "<option>money bill alternate</option>" +
    "<option>motorcycle</option>" +
    "<option>music</option>" +
    "<option>newspaper</option>" +
    "<option>paw</option>" +
    "<option>phone</option>" +
    "<option>phone square</option>" +
    "<option>phone volume</option>" +
    "<option>plane</option>" +
    "<option>plug</option>" +
    "<option>plus</option>" +
    "<option>plus square</option>" +
    "<option>print</option>" +
    "<option>recycle</option>" +
    "<option>road</option>" +
    "<option>rocket</option>" +
    "<option>search</option>" +
    "<option>search minus</option>" +
    "<option>search plus</option>" +
    "<option>ship</option>" +
    "<option>shopping bag</option>" +
    "<option>shopping basket</option>" +
    "<option>shopping cart</option>" +
    "<option>shower</option>" +
    "<option>street view</option>" +
    "<option>subway</option>" +
    "<option>suitcase</option>" +
    "<option>tag</option>" +
    "<option>tags</option>" +
    "<option>taxi</option>" +
    "<option>thumbtack</option>" +
    "<option>ticket alternate</option>" +
    "<option>tint</option>" +
    "<option>train</option>" +
    "<option>tree</option>" +
    "<option>trophy</option>" +
    "<option>truck</option>" +
    "<option>tty</option>" +
    "<option>umbrella</option>" +
    "<option>university</option>" +
    "<option>utensil spoon</option>" +
    "<option>utensils</option>" +
    "<option>wheelchair</option>" +
    "<option>wifi</option>" +
    "<option>wrench</option>" +
    "<option>ambulance</option>" +
    "<option>band aid</option>" +
    "<option>dna</option>" +
    "<option>first aid</option>" +
    "<option>heart</option>" +
    "<option>heartbeat</option>" +
    "<option>hospital</option>" +
    "<option>hospital symbol</option>" +
    "<option>pills</option>" +
    "<option>plus</option>" +
    "<option>stethoscope</option>" +
    "<option>syringe</option>" +
    "<option>thermometer</option>" +
    "<option>user md</option>" +
    "<option>weight</option>" +
    "<option>ambulance</option>" +
    "<option>anchor</option>" +
    "<option>archive</option>" +
    "<option>balance scale</option>" +
    "<option>bath</option>" +
    "<option>bed</option>" +
    "<option>beer</option>" +
    "<option>bell</option>" +
    "<option>bicycle</option>" +
    "<option>binoculars</option>" +
    "<option>birthday cake</option>" +
    "<option>bomb</option>" +
    "<option>book</option>" +
    "<option>bookmark</option>" +
    "<option>briefcase</option>" +
    "<option>bug</option>" +
    "<option>building</option>" +
    "<option>bullhorn</option>" +
    "<option>bullseye</option>" +
    "<option>bus</option>" +
    "<option>calculator</option>" +
    "<option>calendar</option>" +
    "<option>calendar alternate</option>" +
    "<option>camera</option>" +
    "<option>camera retro</option>" +
    "<option>car</option>" +
    "<option>clipboard</option>" +
    "<option>cloud</option>" +
    "<option>coffee</option>" +
    "<option>cog</option>" +
    "<option>cogs</option>" +
    "<option>compass</option>" +
    "<option>copy</option>" +
    "<option>cube</option>" +
    "<option>cubes</option>" +
    "<option>cut</option>" +
    "<option>envelope</option>" +
    "<option>envelope open</option>" +
    "<option>eraser</option>" +
    "<option>eye</option>" +
    "<option>eye dropper</option>" +
    "<option>fax</option>" +
    "<option>fighter jet</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>film</option>" +
    "<option>fire</option>" +
    "<option>fire extinguisher</option>" +
    "<option>flag</option>" +
    "<option>flag checkered</option>" +
    "<option>flask</option>" +
    "<option>futbol</option>" +
    "<option>gamepad</option>" +
    "<option>gavel</option>" +
    "<option>gem</option>" +
    "<option>gift</option>" +
    "<option>glass martini</option>" +
    "<option>globe</option>" +
    "<option>graduation cap</option>" +
    "<option>hdd</option>" +
    "<option>headphones</option>" +
    "<option>heart</option>" +
    "<option>home</option>" +
    "<option>hospital</option>" +
    "<option>hourglass</option>" +
    "<option>image</option>" +
    "<option>images</option>" +
    "<option>industry</option>" +
    "<option>key</option>" +
    "<option>keyboard</option>" +
    "<option>laptop</option>" +
    "<option>leaf</option>" +
    "<option>lemon</option>" +
    "<option>life ring</option>" +
    "<option>lightbulb</option>" +
    "<option>lock</option>" +
    "<option>lock open</option>" +
    "<option>magic</option>" +
    "<option>magnet</option>" +
    "<option>map</option>" +
    "<option>map marker</option>" +
    "<option>map marker alternate</option>" +
    "<option>map pin</option>" +
    "<option>map signs</option>" +
    "<option>medkit</option>" +
    "<option>microchip</option>" +
    "<option>microphone</option>" +
    "<option>mobile</option>" +
    "<option>mobile alternate</option>" +
    "<option>money bill alternate</option>" +
    "<option>moon</option>" +
    "<option>motorcycle</option>" +
    "<option>newspaper</option>" +
    "<option>paint brush</option>" +
    "<option>paper plane</option>" +
    "<option>paperclip</option>" +
    "<option>paste</option>" +
    "<option>paw</option>" +
    "<option>pencil alternate</option>" +
    "<option>phone</option>" +
    "<option>plane</option>" +
    "<option>plug</option>" +
    "<option>print</option>" +
    "<option>puzzle piece</option>" +
    "<option>road</option>" +
    "<option>rocket</option>" +
    "<option>save</option>" +
    "<option>search</option>" +
    "<option>shield alternate</option>" +
    "<option>shopping bag</option>" +
    "<option>shopping basket</option>" +
    "<option>shopping cart</option>" +
    "<option>shower</option>" +
    "<option>snowflake</option>" +
    "<option>space shuttle</option>" +
    "<option>star</option>" +
    "<option>sticky note</option>" +
    "<option>stopwatch</option>" +
    "<option>subway</option>" +
    "<option>suitcase</option>" +
    "<option>sun</option>" +
    "<option>tablet</option>" +
    "<option>tablet alternate</option>" +
    "<option>tachometer alternate</option>" +
    "<option>tag</option>" +
    "<option>tags</option>" +
    "<option>taxi</option>" +
    "<option>thumbtack</option>" +
    "<option>ticket alternate</option>" +
    "<option>train</option>" +
    "<option>trash</option>" +
    "<option>trash alternate</option>" +
    "<option>tree</option>" +
    "<option>trophy</option>" +
    "<option>truck</option>" +
    "<option>tv</option>" +
    "<option>umbrella</option>" +
    "<option>university</option>" +
    "<option>unlock</option>" +
    "<option>unlock alternate</option>" +
    "<option>utensil spoon</option>" +
    "<option>utensils</option>" +
    "<option>wheelchair</option>" +
    "<option>wrench</option>" +
    "<option>bell</option>" +
    "<option>bookmark</option>" +
    "<option>bullhorn</option>" +
    "<option>camera</option>" +
    "<option>camera retro</option>" +
    "<option>cart arrow down</option>" +
    "<option>cart plus</option>" +
    "<option>certificate</option>" +
    "<option>credit card</option>" +
    "<option>gem</option>" +
    "<option>gift</option>" +
    "<option>handshake</option>" +
    "<option>heart</option>" +
    "<option>key</option>" +
    "<option>shopping bag</option>" +
    "<option>shopping basket</option>" +
    "<option>shopping cart</option>" +
    "<option>star</option>" +
    "<option>tag</option>" +
    "<option>tags</option>" +
    "<option>thumbs down</option>" +
    "<option>thumbs up</option>" +
    "<option>trophy</option>" +
    "<option>bookmark</option>" +
    "<option>calendar</option>" +
    "<option>certificate</option>" +
    "<option>circle</option>" +
    "<option>cloud</option>" +
    "<option>comment</option>" +
    "<option>file</option>" +
    "<option>folder</option>" +
    "<option>heart</option>" +
    "<option>map marker</option>" +
    "<option>play</option>" +
    "<option>square</option>" +
    "<option>star</option>" +
    "<option>asterisk</option>" +
    "<option>certificate</option>" +
    "<option>circle notch</option>" +
    "<option>cog</option>" +
    "<option>compass</option>" +
    "<option>crosshairs</option>" +
    "<option>life ring</option>" +
    "<option>snowflake</option>" +
    "<option>spinner</option>" +
    "<option>sun</option>" +
    "<option>sync</option>" +
    "<option>baseball ball</option>" +
    "<option>basketball ball</option>" +
    "<option>bowling ball</option>" +
    "<option>football ball</option>" +
    "<option>futbol</option>" +
    "<option>golf ball</option>" +
    "<option>hockey puck</option>" +
    "<option>quidditch</option>" +
    "<option>table tennis</option>" +
    "<option>volleyball ball</option>" +
    "<option>ban</option>" +
    "<option>battery empty</option>" +
    "<option>battery full</option>" +
    "<option>battery half</option>" +
    "<option>battery quarter</option>" +
    "<option>battery three quarters</option>" +
    "<option>bell</option>" +
    "<option>bell slash</option>" +
    "<option>calendar</option>" +
    "<option>calendar alternate</option>" +
    "<option>calendar check</option>" +
    "<option>calendar minus</option>" +
    "<option>calendar plus</option>" +
    "<option>calendar times</option>" +
    "<option>cart arrow down</option>" +
    "<option>cart plus</option>" +
    "<option>exclamation</option>" +
    "<option>exclamation circle</option>" +
    "<option>exclamation triangle</option>" +
    "<option>eye</option>" +
    "<option>eye slash</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>folder</option>" +
    "<option>folder open</option>" +
    "<option>info</option>" +
    "<option>info circle</option>" +
    "<option>lock</option>" +
    "<option>lock open</option>" +
    "<option>minus</option>" +
    "<option>minus circle</option>" +
    "<option>minus square</option>" +
    "<option>plus</option>" +
    "<option>plus circle</option>" +
    "<option>plus square</option>" +
    "<option>question</option>" +
    "<option>question circle</option>" +
    "<option>shield alternate</option>" +
    "<option>shopping cart</option>" +
    "<option>sign in alternate</option>" +
    "<option>sign out alternate</option>" +
    "<option>thermometer empty</option>" +
    "<option>thermometer full</option>" +
    "<option>thermometer half</option>" +
    "<option>thermometer quarter</option>" +
    "<option>thermometer three quarters</option>" +
    "<option>thumbs down</option>" +
    "<option>thumbs up</option>" +
    "<option>toggle off</option>" +
    "<option>toggle on</option>" +
    "<option>unlock</option>" +
    "<option>unlock alternate</option>" +
    "<option>address book</option>" +
    "<option>address card</option>" +
    "<option>bed</option>" +
    "<option>blind</option>" +
    "<option>child</option>" +
    "<option>female</option>" +
    "<option>frown</option>" +
    "<option>id badge</option>" +
    "<option>id card</option>" +
    "<option>male</option>" +
    "<option>meh</option>" +
    "<option>power off</option>" +
    "<option>smile</option>" +
    "<option>street view</option>" +
    "<option>user</option>" +
    "<option>user circle</option>" +
    "<option>user md</option>" +
    "<option>user plus</option>" +
    "<option>user secret</option>" +
    "<option>user times</option>" +
    "<option>users</option>" +
    "<option>wheelchair</option>" +
    "<option>ambulance</option>" +
    "<option>bicycle</option>" +
    "<option>bus</option>" +
    "<option>car</option>" +
    "<option>fighter jet</option>" +
    "<option>motorcycle</option>" +
    "<option>paper plane</option>" +
    "<option>plane</option>" +
    "<option>rocket</option>" +
    "<option>ship</option>" +
    "<option>shopping cart</option>" +
    "<option>space shuttle</option>" +
    "<option>subway</option>" +
    "<option>taxi</option>" +
    "<option>train</option>" +
    "<option>truck</option>" +
    "<option>wheelchair</option>" +
    "<option>archive</option>" +
    "<option>book</option>" +
    "<option>bookmark</option>" +
    "<option>edit</option>" +
    "<option>envelope</option>" +
    "<option>envelope open</option>" +
    "<option>eraser</option>" +
    "<option>file</option>" +
    "<option>file alternate</option>" +
    "<option>folder</option>" +
    "<option>folder open</option>" +
    "<option>keyboard</option>" +
    "<option>newspaper</option>" +
    "<option>paper plane</option>" +
    "<option>paperclip</option>" +
    "<option>paragraph</option>" +
    "<option>pen square</option>" +
    "<option>pencil alternate</option>" +
    "<option>quote left</option>" +
    "<option>quote right</option>" +
    "<option>sticky note</option>" +
    "<option>thumbtack</option>";
