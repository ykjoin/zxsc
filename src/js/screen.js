$(document).ready(function() {
	$('#fullpage').fullpage();
});
//灯光闪烁
$(function(){
	
	var index=0;
	setInterval(function(){
		index++;
		if(index==1){
			$('.Emerald .a').animate({opacity:1,transition:'opacity 0.5s'})
			$('.Emerald .b').animate({opacity:1,transition:'opacity 0.5s'})
			$('.Emerald .c').animate({opacity:1,transition:'opacity 0.5s'})
			$('.Emerald .d').animate({opacity:1,transition:'opacity 0.5s'})
		}else if(index==2){
			$('.Emerald .a').animate({opacity:0,transition:'opacity 0.5s'})
			$('.Emerald .b').animate({opacity:0,transition:'opacity 0.5s'})
			$('.Emerald .c').animate({opacity:0,transition:'opacity 0.5s'})
			$('.Emerald .d').animate({opacity:0,transition:'opacity 0.5s'})
			index=0;
		}
	},1000)
	
})
//滑动
$(function(){
		$('.hd-right').on('click',function(){
			$('.span2').animate({
				width:'0%'
			},800)
		$('.span1').css('background','#006fd6')
			$('.span1').animate({
				width:'100%'
			},1200)
			$('.erbai').animate({
				marginLeft:'-910px'
			},600)
		})
		
		
		$('.hd-left').on('click',function(){
			$('.span2').animate({
				width:'100%'
			},1200)
		$('.span1').css('background','#006fd6')
			$('.span1').animate({
				width:'0%'
			},800)
			$('.erbai').animate({
				marginLeft:'0px'
			},600)
		})
		
})
$(function(){
	 var wi=$(document.body).width()
	 var th=-1;
	 $('.Summ').css('width',wi);
	 $('.war').css('marginLeft',-wi)
	 $('.flo-right').on('click',function(){
	 	$('.flo-right').css({opacity:1})
	 	$('.flo-left').css({opacity:1})
	 	th--;
	 	if(th==-3){
	 		th=-2;
	 		$('.flo-right').animate({opacity:0.6,transition:'opacity 0.5s'})
	 	}
	 	$('.war').animate({
	 		marginLeft:th*wi
	 	},800)
	 })
	 $('.flo-left').on('click',function(){
	 	$('.flo-left').css({opacity:1})
	 	$('.flo-right').css({opacity:1})
	 	th++;
	 	if(th==1){
	 		th=0;
	 		$('.flo-left').animate({opacity:0.6,transition:'opacity 0.5s'})
	 	}
	 	$('.war').animate({
	 		marginLeft:th*wi
	 	},800)
	 })
})
