$(function(){
    /*toggle class */
    $(".menu li a").click(function(){
        $("#hamburger_gnb").addClass("on");
    });
    $("#hamburger_gnb li img").click(function(){
        $("#hamburger_gnb").removeClass("on");
    });
});