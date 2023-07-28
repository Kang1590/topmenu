$(document).ready(function(){
	$("a.mainMenu").mouseenter(function(){
		$("header nav").stop().slideDown();
		$("#bg").stop().slideDown();
	});
	$("header nav a").mouseenter(function(){
		$("a.mainMenu").removeClass('act');
		$(this).parent().prev().addClass('act');		
	});
	
	$("header ul").mouseleave(function(){
		$("a.mainMenu").removeClass('act');
		$("header nav").stop().slideUp();
		$("#bg").stop().slideUp();		
	});
	
	setInterval(down , 2500);
	function down(){
		$("#slide").stop().animate({top: 0},1000,function(){
			$("#slide").prepend( $("#slide a:eq(2)") );
			$("#slide").css("top","-300px");
		});	
	}
	$("footer>a").click(function(){
		$("#popup").show();
	});
	$("#popup>button").click(function(){
		$("#popup").fadeOut();
	});
	
	
});/////////end