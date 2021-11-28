//Star ratings

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".my-rating").starRating({
    starSize: 25,
    totalStars: 3,
    callback: function (currentRating, $el) {
        // make a server call here
    }
});

//tooltip text change
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Tooltip text chnage

function tooltipText(button) {
    $(button).find('i').remove();
    if ($(button).text().trim() == '.') {
        $(button).html($('<i />', { class: 'fa fa-rss-square' })).append(' ..').css('color', '#6b6f82');
        $(button).tooltip('hide').attr('data-original-title', 'Follow').tooltip('show');
    }
    else {
        $(button).html($('<i />', { class: 'fa fa-rss' })).append(' .').css('color', '#28d094');
        $(button).tooltip('hide').attr('data-original-title', 'Following').tooltip('show');
    }
}

//connect and follow button
function connectText(button) {
     // Change text of connect button element
     $(button).html("Connected");
}

//connect and follow button
function followText(button) {
     // Change text of connect button element
     $(button).html("Following");
}

//View more or less
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}