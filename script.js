$(".product-colors span").click(function() {
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");
    $(".active").css("border-color", $(this).attr("data-color-sec"));
    $("body").css("background", $(this).css("background")); 
    $(".content h2, .content h3").css("color", $(this).attr("data-color-sec"));
    $(".container .imgBx, .container .details .btn").css("background", $(this).css("background")); 
    $(".imgBx img").attr('src', $(this).attr("data-pic"));
});
