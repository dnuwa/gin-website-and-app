$((function () {
    "use strict";
    var e = $(".app-content"),
        s = $(".app-content-overlay"),
        o = $(".sidebar-left"),
        l = $(".message-app-details"),
        i = $(".message-application"),
        a = $(".compose-new-mail-sidebar"),
        n = $(".message-user-list"),
        t = $(".message-app-list"),
        r = $(".user-action .checkbox-con");
    if ($.app.menu.is_touch_device()) $(".sidebar-menu-list").css("overflow", "scroll"), $(".message-user-list").css("overflow", "scroll"), $(".message-scroll-area").css("overflow", "scroll"), $(".compose-new-mail-sidebar").css("overflow", "scroll");
    else {
        $(".sidebar-menu-list").css("overflow", "scroll"), $(".message-user-list").css("overflow", "scroll"), $(".message-scroll-area").css("overflow", "scroll"), $(".compose-new-mail-sidebar").css("overflow", "scroll");      
        
    }
    var c = new Quill(".snow-container .detail-view-editor", {
        modules: {
            toolbar: ".detail-quill-toolbar"
        },
        placeholder: "Type something..... ",
        theme: "snow"
    });
    new Quill(".snow-container .compose-editor", {
        modules: {
            toolbar: ".compose-quill-toolbar"
        },
        placeholder: "Type something..... ",
        theme: "snow"
    });
    $(".mail-reply").on("click", (function () {
        c.focus()
    })), $(".menu-toggle").on("click", (function (o) {
        e.find(".sidebar-left").removeClass("show"), s.removeClass("show"), a.removeClass("show")
    })), i.find(".sidebar-close-icon").on("click", (function () {
        o.removeClass("show"), s.removeClass("show")
    })), $(".sidebar-toggle").on("click", (function (e) {
        e.stopPropagation(), o.toggleClass("show"), s.addClass("show")
    })), s.on("click", (function () {
        o.removeClass("show"), s.removeClass("show")
    })), i.find(".list-group-messages a,.list-group-labels a").on("click", (function () {
        var e = $(this);
        i.find(".list-group-messages a,.list-group-labels a").hasClass("active") && (i.find(".list-group-messages a,.list-group-labels a").removeClass("active"), e.addClass("active"))
    })), $(".sidebar-close-icon").on("click", (function () {
        $(".sidebar-content").removeClass("show"), s.removeClass("show")
    })), t.find(".message-user-list li").on("click", (function () {
        l.toggleClass("show")
    })), $(".go-back, #inbox-menu").on("click", (function (e) {
        e.stopPropagation(), l.removeClass("show"), $(".detail-view-editor .ql-editor")[0].innerHTML = ""
    })), i.find(".favorite i").on("click", (function (e) {
        e.stopPropagation();
        var s = $(this);
        s.parent(".favorite").toggleClass("warning"), s.hasClass("bx-star") ? (s.addClass("bxs-star"), s.removeClass("bx-star")) : (s.addClass("bx-star"), s.removeClass("bxs-star"))
    })), r.on("click", (function (e) {
        e.stopPropagation()
    })), r.find("input").on("change", (function () {
        var e = $(this);
        e.is(":checked") ? e.closest(".media").addClass("selected-row-bg") : e.closest(".media").removeClass("selected-row-bg")
    })), $(document).on("change", ".message-app-list .selectAll input", (function () {
        $(this).is(":checked") ? r.find("input").prop("checked", this.checked).closest(".media").addClass("selected-row-bg") : r.find("input").prop("checked", "").closest(".media").removeClass("selected-row-bg")
    })), i.find(".mail-delete").on("click", (function () {
        r.find("input:checked").closest("li").remove(), i.find(".selectAll input").prop("checked", ""), 0 == $(".message-user-list .users-list-wrapper li:visible").length ? n.find(".no-results").addClass("show") : n.find(".no-results").hasClass("show") && n.find(".no-results").removeClass("show")
    })), i.find(".mail-unread").on("click", (function () {
        r.find("input:checked").closest("li").removeClass("mail-read"), i.find(".user-action .checkbox-con input:checked , .selectAll input").prop("checked", "").closest(".media").removeClass("selected-row-bg")
    })), t.find("#message-search").on("keyup", (function () {
        var e = $(this).val().toLowerCase();
        ($(".media").css("animation", "none"), "" != e) ? (n.find(".users-list-wrapper li").filter((function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(e) > -1)
        })), 0 == $(".message-user-list .users-list-wrapper li:visible").length ? n.find(".no-results").addClass("show") : n.find(".no-results").hasClass("show") && n.find(".no-results").removeClass("show")) : (n.find(".users-list-wrapper li").show(), n.find(".no-results").hasClass("show") && n.find(".no-results").removeClass("show"))
    })), $(".message-detail-head .dropdown-item").on("click", (function () {
        $(".dropdown-toggle").dropdown("hide")
    })), $(".collapse-header").on("click", (function () {
        $(this).toggleClass("open")
    })), $(".close-icon, .cancel-btn, .app-content-overlay").on("click", (function () {
        a.removeClass("show"), s.removeClass("show"), $("#compose-form").find("input").val(""), $(".custom-file .custom-file-label")[0].innerHTML = "Attach File", $("#compose-form .ql-editor")[0].innerHTML = ""
    })), $(".compose-btn").on("click", (function () {
        a.addClass("show"), s.addClass("show"), o.removeClass("show")
    })), $(".information .dropdown-menu a").on("click", (function (e) {
        e.stopPropagation(), $(this).parent().removeClass("show")
    })), $(window).width() > 768 && s.hasClass("show") && s.removeClass("show"), $(window).on("resize", (function () {
        $(window).width() > 768 && (s.hasClass("show") && (o.removeClass("show"), s.removeClass("show"), a.removeClass("show")), $("#compose-form").find("input").val(""), $(".custom-file .custom-file-label")[0].innerHTML = "Attach File", $("#compose-form .ql-editor")[0].innerHTML = "")
    }))
}));