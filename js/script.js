/* ========================
		  漢堡(導覽列) 
=========================== */
$(".menu-btn").on("click", function(){
	$(".main-nav-list").stop()
	                   .slideToggle(500);
});


$(".main-nav-list a").on("click", function(){
	$(".current").removeClass("current");
	$(this).addClass("current");
});