var chatSidebarListWrapper = $(".chat-sidebar-list-wrapper"),
    chatOverlay = $(".chat-overlay"),
    chatContainer = $(".chat-container"),
    chatSidebarProfileToggle = $(".chat-sidebar-profile-toggle"),
    chatProfileToggle = $(".chat-profile-toggle"),
    chatSidebarClose = $(".chat-sidebar-close"),
    chatProfile = $(".chat-profile"),
    chatUserProfile = $(".chat-user-profile"),
    chatProfileClose = $(".chat-profile-close"),
    chatSidebar = $(".chat-sidebar"),
    chatArea = $(".chat-area"),
    chatStart = $(".chat-start"),
    chatSidebarToggle = $(".chat-sidebar-toggle"),
    chatMessageSend = $(".chat-message-send");

function chatMessagesSend(a) {
    var e = chatMessageSend.val();
    if ("" != e) {
        var t = '<div class="chat-message"><p>' + e + "</p><div class=chat-time>3:35 AM</div></div>";
        $(".chat-wrapper .chat:last-child .chat-body").append(t), chatMessageSend.val(""), chatContainer.scrollTop($(".chat-container > .chat-content").height())
    }
}
$(document).ready((function () {
    "use strict";
    if ($.app.menu.is_touch_device()) $(".chat-sidebar-list-wrapper").css("overflow", "scroll"), $(".chat-user-profile-scroll").css("overflow", "scroll"), $(".chat-container").css("overflow", "scroll"), $(".chat-profile-content").css("overflow", "scroll");
    else {
        $(".chat-sidebar-list-wrapper").css("overflow", "scroll"), $(".chat-user-profile-scroll").css("overflow", "scroll"), $(".chat-container").css("overflow", "scroll"), $(".chat-profile-content").css("overflow", "scroll");
        /*
        if (chatSidebarListWrapper.length > 0) new PerfectScrollbar(".chat-sidebar-list-wrapper");
        if ($(".chat-user-profile-scroll").length > 0) new PerfectScrollbar(".chat-user-profile-scroll");
        if (chatContainer.length > 0) new PerfectScrollbar(".chat-container");
        if ($(".chat-profile-content").length > 0) new PerfectScrollbar(".chat-profile-content")
        */
    }
    chatSidebarProfileToggle.on("click", (function () {
        chatUserProfile.addClass("show"), chatOverlay.addClass("show")
    })), chatProfileToggle.on("click", (function () {
        chatProfile.addClass("show"), chatOverlay.addClass("show")
    })), chatProfileClose.on("click", (function () {
        chatUserProfile.removeClass("show"), chatProfile.removeClass("show"), chatSidebar.hasClass("show") || chatOverlay.removeClass("show")
    })), chatSidebarClose.on("click", (function () {
        chatSidebar.removeClass("show"), chatOverlay.removeClass("show")
    })), chatOverlay.on("click", (function () {
        chatSidebar.removeClass("show"), chatOverlay.removeClass("show"), chatUserProfile.removeClass("show"), chatProfile.removeClass("show")
    })), $(".chat-sidebar-list-wrapper ul li").on("click", (function () {
        $(".chat-sidebar-list-wrapper ul li").hasClass("active") && $(".chat-sidebar-list-wrapper ul li").removeClass("active"), $(this).addClass("active"), $(".chat-sidebar-list-wrapper ul li").hasClass("active") ? (chatStart.addClass("d-none"), chatArea.removeClass("d-none")) : (chatStart.removeClass("d-none"), chatArea.addClass("d-none"))
    })), $(".chat-icon-favorite i").on("click", (function (a) {
        $(this).parent(".chat-icon-favorite").toggleClass("warning"), $(this).toggleClass("bxs-star bx-star"), a.stopPropagation()
    })), $(window).width() < 992 && chatSidebarToggle.on("click", (function () {
        chatSidebar.addClass("show"), chatOverlay.addClass("show")
    })), $(".chat-sidebar-list li").on("click", (function () {
        chatContainer.animate({
            scrollTop: chatContainer[0].scrollHeight
        }, 400)
    })), $(".menu-toggle").click((function () {
        chatSidebar.removeClass("show"), chatOverlay.removeClass("show"), chatUserProfile.removeClass("show"), chatProfile.removeClass("show")
    })), $("#chat-search").on("keyup", (function () {
        var a = $(this).val().toLowerCase();
        "" != a ? $(".chat-sidebar-list-wrapper .chat-sidebar-list li").filter((function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1)
        })) : $(".chat-sidebar-list-wrapper .chat-sidebar-list li").show()
    })), $(window).on("resize", (function () {
        $(window).width() > 992 && chatOverlay.hasClass("show") && chatOverlay.removeClass("show"), $(window).width() < 992 && chatSidebarToggle.on("click", (function () {
            chatSidebar.addClass("show"), chatOverlay.addClass("show")
        })), $(window).width() > 992 && chatSidebarToggle.on("click", (function () {
            chatOverlay.removeClass("show")
        }))
    }))
}));