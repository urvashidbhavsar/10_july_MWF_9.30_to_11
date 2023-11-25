$(function () {
    $(window).scroll(function () {
        // $currval = $(this).scrollTop();
        if ($(this).scrollTop() > 0) {
            $("header").addClass("topfixed")
        } else {
            $("header").removeClass("topfixed")
        }
    })
})
// scrollTop() used to store vertical scroll value
// same as js scrollY property.