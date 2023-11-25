$(document).ready(function () {
    $i = $("#icon");
    $(".btntog").click(function () {
        $(".nav").toggleClass("navigation");
        if ($(".nav").hasClass("navigation") == true) {
            $i.removeClass("fa-bars-staggered")
            $i.addClass("fa-xmark")
        } else {
            $i.removeClass("fa-xmark")
            $i.addClass("fa-bars-staggered")
        }
    })
})
// hasClass() = check class exist or not
// same as js contains()
