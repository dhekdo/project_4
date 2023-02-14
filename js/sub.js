$(".thum > img").click(function(){
    $(".thum2").show();
    $("header").hide();
});
$(".fa-xmark, .thum2").click(function(){
    $(".thum2").hide();
    $("header").show();
});