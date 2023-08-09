$(".row img").on("mouseover" ,function(){
    $(".row img").slideUp().slideDown();
});


$("#testimonials img").on("click" ,function(image){
    $("#testimonials img").slideUp().slideDown();
});


$(".col-lg-6 button").on("click" ,function(){
    $(".col-lg-6 button").animate({opacity: 0.25});
    $(".col-lg-6 button").animate({opacity: 100});
});

$(".features").on("mouseover" ,function(){
    $(".features").fadeOut().fadeIn();
});

$(".btn-block").on("click" ,function(){
    $(".btn-block").text("LOADING...");
    $(".btn-block").animate({opacity: 0.50});
    break;
});











