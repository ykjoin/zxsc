//nav 下拉效果
$(function(){
	var a=0;
	$('.drop').hide();
	$('.li').hover(function(){
		$(this).find('img').attr('src',"dist/images/navdrophover.png")
	},function(){
		$(this).find('img').attr('src',"dist/images/navdrop.png")
	})
	$('.li').on('click',function(){
		a++;
			if(a==2){
				$('.li').find('ul').slideUp();
				d=$(this).index();
				if(Number(d)!=Number(c)){
					$(this).find('ul').slideDown();
				}else{
					$('.li').find('ul').slideUp();
				}
			}else if(a==3){
				$('.li').find('ul').slideUp();
				e=$(this).index();
				if(Number(e)!=Number(d)){
					$(this).find('ul').slideDown();
				}else{
					$('.li').find('ul').slideUp();
				}
			}else if(a==4){
				$('.li').find('ul').slideUp();
				f=$(this).index();
				if(Number(f)!=Number(e)){
					$(this).find('ul').slideDown();
				}else{
					$('.li').find('ul').slideUp();
				}
				 a=0;
				}
			else{
				$('.li').find('ul').slideUp();
				$(this).find('ul').slideDown();
				c=$(this).index();
			}	
	})
	$('.li').find('li').hover(function(){
		$(this).css('animation','name 1s')
	},function(){
		$(this).css('animation','none')
	})
})
//banner 效果
$(function(){
	var index=0;
	var img=['dist/images/banner1_bg.jpg','dist/images/banner02_bg.jpg','dist/images/banner1_bg.jpg']
	var img1=['dist/images/nextprevnow.png','dist/images/nextprevothers.png']
	$('.banner .button .prev').on('click',function(){
		index--;
		if(index<0){
			index=img.length-1;
		}
		yk();
		kk();
		kk1();
		var aa=img[index].length;
		var cc=img[0].length;
		if(aa==cc){
			yy();
		}else{
			yy1();
		}
	})
	$('.banner .button .next').on('click',function(){
		index++;
		if(index==3){
			index=0;
		}
		yk();
		kk();
		kk1();
		var aa=img[index].length;
		var cc=img[0].length;
		if(aa==cc){
			yy();
		}else{
			yy1();
		}
	})
	function yk(){
		$('.banner .banner-img').attr('src',img[index])
		$('.banner .button .cir img').attr('src',img1[1]);
		$('.banner .button .cir img').eq(index).attr('src',img1[0]);
		
	}
	$('.banner .button .cir img').on('click',function(){
		index =$(this).index();
		yk();
		kk();
		kk1();
		var aa=img[index].length;
		var cc=img[0].length;
		if(aa==cc){
			yy();
		}else{
			yy1();
		}
	})
	
	$('.study').animate({
		left:"500px"
	})
	$('.study1').animate({
		right:"400px"
	})
	$('.study2').animate({
		bottom:"150px"
	})
	$('.stydy3').hide();
	$('.stydy4').hide();
	$('.stydy5').hide();
	
	
	function yy(){
	$('.study').show();
	$('.study1').show();
	$('.study2').show();
	$('.study').animate({
		left:"500px"
	})
	$('.study1').animate({
		right:"400px"
	})
	$('.study2').animate({
		bottom:"150px"
	})
	}
	
	function kk(){
	$('.study').hide();
	$('.study1').hide();
	$('.study2').hide();
	$('.study').css({
		left:"0px"
	})
	$('.study1').css({
		right:"0px"
	})
	$('.study2').css({
		bottom:"0px"
	})
	}
	
	
	
	function yy1(){
	$('.stydy3').show();
	$('.stydy4').show();
	$('.stydy5').show();
	$('.stydy3').animate({
		left:"200px"
	})
	$('.stydy4').animate({
		right:"830px"
	})
	}
	
	function kk1(){
	$('.stydy3').hide();
	$('.stydy4').hide();
	$('.stydy5').hide();
	$('.stydy3').css({
		left:"0px"
	})
	$('.stydy4').css({
		right:"0px"
	})
	}
	
})

