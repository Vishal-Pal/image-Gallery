fadeOthers();
function fadeOthers(){
	$(".about").fadeOut(1);
	$(".contact").fadeOut(1);	
}
$("#Home").click(function(){
	$(".container").fadeIn(1);
	fadeOthers();
});
$("#About").click(function(){
	$(".container").fadeOut(1);
	$(".about").fadeIn(1);
	$(".contact").fadeOut(1);
});
$("#Contact").click(function(){
	$(".container").fadeOut(1);
	$(".contact").fadeIn(1);
	$(".about").fadeOut(1);
});

$("h4").css("color","white");
$(".contact a").css("color", "lawngreen");