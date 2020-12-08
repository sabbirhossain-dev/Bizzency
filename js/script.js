//fixed menu start//

$(window).scroll(function () {
    $scrollamout = $(window).scrollTop();

    if ($scrollamout > 200) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }

})

//fixed menu start//
