$(".Part-Two-Yes").hide();
$(".yes-button").click(function() {
    $(".firstclass").hide();
    $(".Part-Two-Yes").fadeIn();
    
    
});

$(".no-button").click(function() {
    $(".firstImage").hide();
    $(".title").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".help").hide();
    $(".bye").fadeIn();
    $(".restart").fadeIn();
  
});
$(".bye").dblclick(function(){
    $(".firstImage").show();
    $(".title").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".help").show();
    $(".bye").hide();
    $(".restart").hide();
});
$(".map1").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("The Evil Wizard is still alive after your first attack!");
    $(".hide1").text("*Hover Over the Wizard to attack him again*");
    $("body").css("background-image","url(https://edgecast.wizard101.com/image/free/Wizard/C/Images/Worlds/Krokotopia/sphinx.jpg?v=1)");
    $(".fly").show();
});
$(".map2").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("The Evil Wizard attacked you and you died :(");
   
    $("body").css("background-image","url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrCl1e63Zkt1GozMGYf7GUausZ2aNP_Ua6A&usqp=CAU)");
    $(".end").slideDown("slow");
    
});
$(".fly").mouseenter(function(){
    $(".hide").text("You must defeat the Wizard he's very weak now.  ");
    $(".hide1").text("*Double Click the Wizard to attack him once more*");
    $("body").css("background-image","url(https://4.bp.blogspot.com/-5MzZtaflRHM/WFr3hBb5j5I/AAAAAAAAYho/HefBaRxrhs04ZLV6J330niv6x4uF1ObCgCEw/s1600/wizard101-empyrea-world-theory-1.jpg)");
});
$(".fly").dblclick(function(){
    $(".hide").text("The Wizard called his friends!");
    $(".hide1").text("*Unhover Over to hit them all at once*");
    $("body").css("background-image","url(https://edgecast.wizard101.com/image/free/Wizard/C/Wizard-Society/Patch-Notes/Group_01_withLogo_600.jpg?v=1)");
});
$(".fly").mouseleave(function(){
    $("body").css("background-image","url(https://edgecast.wizard101.com/image/free/Wizard/C/Wizard-Society/Patch-Notes/RaidOverYouWin_600.jpg?v=1)");
    $(".fly").hide();
    $(".end").show();
    $(".hide1").text("");
    $(".hide").text("You defeated the Wizards! Congradulations!");
});
$(".hide").click(function(){
    $(".end").toggle();
});

