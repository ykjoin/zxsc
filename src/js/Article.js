$(function(){
	var a=0;
	$('.drop').hide();
	$('.li').hover(function(){
		$(this).find('img').attr('src',"dist/images/navdrophover.png")
	},function(){
		$(this).find('img').attr('src',"dist/images/navdrop.png")
	})
	
	$('.li').hover(function(){
		$(this).find('.drop').stop().slideDown(500);
	},function(){
		$(this).find('.drop').stop().slideUp(100);
	})
})