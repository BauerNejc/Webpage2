$(document).ready(function(){

    new WOW().init();

    /* SMOOTH SCROLL */

    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            })
        }
    });

    /* HAMBURGER NAV */

    $(".burger-nav").on("click", function(){
        $(".container nav ul").toggleClass("open");
    });



    /* IPHONE SLIDES UP */
    $(".js-wp-2").waypoint(function(direction){

        $(".js-wp-2").addClass("animated slideInUp");

    }, {
        offset: "70%"
    });

    /* TURN IPHONE SCREEN ON */
     $(".js-wp-3").waypoint(function(direction){

        $(".js-wp-3").addClass("animated fadeIn");

    }, {
        offset: "70%"
    });

    /* IPHONE BUTTON CLICKS */
    $(".iphone-btn").delay(1300).animate({bottom: "-=3"}, 300);
    $(".iphone-btn").delay(100).animate({top: "-=3"}, 300);

});