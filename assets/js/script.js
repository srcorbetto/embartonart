$(document).ready(function(){

    console.log("script connected.");

    // Menu Control
    //====================================================
    $(".menu-icon").on("click", function(){
        $(".hamburger-menu").toggleClass("off-canvas");
        if ($(this).text() === "MENU") {
            $(this).text("CLOSE");
            if ($(window).width() < 1200) {
                $(".menu-icon-mobile-style").css("background", "#ffc347");
                $(".menu-icon").css("color", "#f25245")
            }

        } else {
            $(this).text("MENU");
            if ($(window).width() < 1200) {
                $(".menu-icon-mobile-style").css("background", "#ffa49e");
                $(".menu-icon").css("color", "#fff6f4")
            }
        }
    });

    //Lightbox Control
    //====================================================
    $(".artwork").on("click", function(){

        if ($(window).width() > 767) {

        var artwork = $(this);
        $(".lightbox-holder").fadeIn();
        $(".zoomed-holder").html("<img src='" + artwork.attr("src") + "' class='zoomed'>");

        }
    });

    // To turn off...
    $(".x").click(function(){
        $(".lightbox-holder").fadeOut();
    });

});