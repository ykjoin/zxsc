//nav 下拉效果
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
//banner 效果
$(function(){
	$('.next').hover(function(){
		$(this).css('animation','name 0.3s')
		$(this).attr('src',"dist/images/nexthover.png")
		
	},function(){
		$(this).attr('src',"dist/images/next.png")
		$(this).css('animation','none')
	})
	$('.prev').hover(function(){
		$(this).css('animation','name 0.3s')
		$(this).attr('src',"dist/images/prevhover.png")
		
	},function(){
		$(this).attr('src',"dist/images/prev.png")
		$(this).css('animation','none')
	})
	
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
		left:"330px"
	})
	$('.study1').animate({
		right:"170px"
	})
	$('.study2').animate({
		bottom:"120px"
	})
	$('.stydy3').hide();
	$('.stydy4').hide();
	$('.stydy5').hide();
	
	
	function yy(){
	$('.study').show();
	$('.study1').show();
	$('.study2').show();
	$('.study').animate({
		left:"330px"
	})
	$('.study1').animate({
		right:"170px"
	})
	$('.study2').animate({
		bottom:"120px"
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
		left:"50px"
	})
	$('.stydy4').animate({
		right:"655px"
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
//返回顶部
$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut(0);
		}
	});
	$('.top').on('click',function(){
		$(this).animate({"bottom":1000,"opacity":0},400,function(){
			$(this).css("opacity",1).fadeOut(0).css("bottom",200);
		});
		
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	})
	
})
//按钮动画
$('.img-right').hover(function(){
		$(this).css('animation','name 0.3s')
		$(this).attr('src',"dist/images/nexthover.png")
		
	},function(){
		$(this).attr('src',"dist/images/next.png")
		$(this).css('animation','none')
	})
	$('.img-left').hover(function(){
		$(this).css('animation','name 0.3s')
		$(this).attr('src',"dist/images/prevhover.png")
		
	},function(){
		$(this).attr('src',"dist/images/prev.png")
		$(this).css('animation','none')
	})
//左侧按钮动画
$(function(){
	var index=0;
	var lenght=5;
	$('.pieces').find('.span1').hide();
	$('.pieces').find('div').eq(0).find('.span1').show();
	$('.pieces').find('div').eq(0).find('.span2').hide();
	$('.y').find('.disploy-one').hide();
	$('.y').find('.disploy-one').eq(0).show();
	$('.pieces').find('div').on('click',function(){
		var a = index;
		index=$(this).index();
		piee();
		if(a<index){
			disp();
		}else if(a>index){
			disp1();
		}
	})
	
	
	
	$('.img-left').on('click',function(){
		index--;
		if(index<0){
			index=lenght;
		}
		piee();
		disp1();
	})
	$('.img-right').on('click',function(){
		index++;
		if(index==6){
			index=0;
		}
		piee();
		disp();
	})
	function piee(){
		$('.pieces').find('div').eq(index).siblings().find('.span1').hide();
		$('.pieces').find('div').eq(index).siblings().find('.span2').show();
		$('.pieces').find('div').eq(index).find('.span1').show()
		$('.pieces').find('div').eq(index).find('.span2').hide();
	}
	function disp(){
		$('.y').find('.disploy-one').hide();
		$('.y').find('.disploy-one').eq(index).show();
		$('.y').find('.disploy-one').eq(index).find('.div-left').css('left',500);
		$('.y').find('.disploy-one').eq(index).find('.div-left').animate({left:0},500);
		$('.y').find('.disploy-one').eq(index).find('.div-right').css('right',-800);
		$('.y').find('.disploy-one').eq(index).find('.div-right').animate({right:0},600);
	}
	function disp1(){
		$('.y').find('.disploy-one').hide();
		$('.y').find('.disploy-one').eq(index).show();
		$('.y').find('.disploy-one').eq(index).find('.div-left').css('left',-500);
		$('.y').find('.disploy-one').eq(index).find('.div-left').animate({left:0},500);
		$('.y').find('.disploy-one').eq(index).find('.div-right').css('right',800);
		$('.y').find('.disploy-one').eq(index).find('.div-right').animate({right:0},600);
	}
	
})
//文字影藏
$(function(){
	$('.contents').hide();
	$('.contents').eq(0).show();
	$('.NonoeImg').eq(0).find('.falss').css({
			backgroundPositionY:'-67px'
	})
	var index=0;
	$('.falss').on('click',function(){
		var a = index;
		index = $(this).parents('.Nonoe').index()
		if(a==index){
			$(this).animate({
				backgroundPositionY:'0px',
				transition:'backgroundPositionY 1s'
			},function(){
					var disp = $(this).parents('.Nonoe').find('.contents').css('display');
					if(disp =='none'){
						$(this).animate({
							backgroundPositionY:'-67px',
							transition:'backgroundPositionY 1s'
						},function(){
							$(this).parents('.Nonoe').find('.contents').stop().slideToggle();
						})
					}else{
						$(this).animate({
							backgroundPositionY:'0px',
							transition:'backgroundPositionY 1s'
						},function(){
							$(this).parents('.Nonoe').find('.contents').stop().slideToggle();
						})
					}
			})
		}else{
			$(this).animate({
				backgroundPositionY:'-67px',
				transition:'backgroundPositionY 1s'
			},function(){
				$(this).parents('.Nonoe').siblings().find('.contents').slideUp()
				$(this).parents('.Nonoe').find('.contents').slideDown()
				$(this).parents('.Nonoe').siblings().find('.falss').css('backgroundPositionY','0px')
			})
			
			
		}
	})
	$('.NonoeImg').find('img').on('click',function(){
		var a = index;
		index = $(this).parents('.Nonoe').index()
		var disp = $(this).parents('.Nonoe').find('.contents').css('display');
		if(a==index){
			$(this).parents('.Nonoe').find('.contents').stop().slideToggle();
			
			if(disp =='none'){
						$(this).parents('.Nonoe').find('.falss').css('backgroundPositionY','-67px')
					}else{
						$(this).parents('.Nonoe').find('.falss').css('backgroundPositionY','0px')
					}
		}else{
			$(this).parents('.Nonoe').find('.falss').css('backgroundPositionY','-67px')
			$(this).parents('.Nonoe').siblings().find('.contents').slideUp()
			$(this).parents('.Nonoe').find('.contents').slideDown()
			$(this).parents('.Nonoe').siblings().find('.falss').css('backgroundPositionY','0px')
		}
	})
	
})
//团队成员介绍
$(function(){
	var img1=['dist/images/nextprevnow.png','dist/images/nextprevothers.png'];
	var index=0;
	$('.Personnel .btn .next').on('click',function(){
		index++;
		if(index==3){
			index=0;
		}
		per();
		yy();
	})
	$('.Personnel .btn .prev').on('click',function(){
		index--;
		if(index<0){
			index=2;
		}
		per();
		kk();
	})
	function per(){
		$('.cirr img').eq(index).attr('src','dist/images/nextprevnow.png')
		$('.cirr img').eq(index).siblings().attr('src','dist/images/nextprevothers.png')
		
	}
	function yy(){
		var a = $(".war div").eq(0);
		$('.war').animate({
			left:50
		},600,function(){
			$('.war').animate({
			left:-1100
			},400,function(){
				$(".war").append(a);
				$('.war').css('left',0)
			})
		})
	}
	function kk(){
		var a = $(".war>div").eq(2);
		$(".war").prepend(a);
		$('.war').animate({
			left:1100
		},200,function(){
			$('.war').animate({
				left:0
			},600)
		})
	}
})

//百度地图
$(function(){
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(106.523035,29.545208);
	map.centerAndZoom(point, 15);
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);             
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
})
//公司简介
$(function(){
	var index=0;
	var leftt=60;
	$('.line li').on('click',function(){
		var a=index;
		index=$(this).index();
			if(a>index){
				if(index==0){
					leftt=leftt-180*(a+index);
				}else{
					leftt=leftt-180*(a-index);
				}
				kk();
				yk();
				dispp()
			}else if(a<index){
				leftt=leftt+180*(index-a)
				yy()
				yk()
				disps()
			}
	})
	$('.pieces div').on('click',function(){
		var a=index;
		index=$(this).index();
			if(a>index){
				if(index==0){
					leftt=leftt-180*(a+index);
				}else{
					leftt=leftt-180*(a-index);
				}
				kk();
				yk();
				dispp()
			}else if(a<index){
				leftt=leftt+180*(index-a)
				yy()
				yk()
				disps()
			}
	})
	
	$('.about-img .img-right').on('click',function(){
		index++;
		if(index==6)
		{
			index=0;
			leftt=0;
		}
		if(leftt>=60){
			leftt=leftt+180
		}
		else{
			leftt=60;
		}
		yy()
		yk()
		disps()
	})
	$('.about-img .img-left').on('click',function(){
		index--;
		if(index<0)
		{
			index=5;
		}
		if(leftt==60){
			leftt=960
		}
		else{
			leftt=leftt-180;
		}
		kk();
		yk();
		dispp()
	})
	function yk(){
		$('.center ul').eq(0).find('li').eq(index).addClass('size-topa');
		$('.center ul').eq(0).find('li').eq(index).siblings().removeClass('size-topa');
		$('.center ul').eq(1).find('li').eq(index).addClass('linea');
		$('.center ul').eq(1).find('li').eq(index).siblings().removeClass('linea');
		$('.center ul').eq(2).find('li').eq(index).addClass('size-boma');
		$('.center ul').eq(2).find('li').eq(index).siblings().removeClass('size-boma');
		$('.about-bottom .pieces div').eq(index).find('span').eq(0).show();
		$('.about-bottom .pieces div').eq(index).find('span').eq(1).hide();
		$('.about-bottom .pieces div').eq(index).siblings().find('.span1').hide();
		$('.about-bottom .pieces div').eq(index).siblings().find('.span2').show();
	}
	function yy(){
		$('.center').find('.move .cript').animate({
			left:leftt
		})
	}
	function kk(){
		$('.center').find('.move .cript').animate({
			left:leftt
		})
	}
	function dispp(){
		$('.hre').find('.one').hide();
		$('.hre').find('.one').eq(index).show();
		$('.hre').find('.one').eq(index).find('.div-left').css('left',500);
		$('.hre').find('.one').eq(index).find('.div-left').animate({left:0},500);
		$('.hre').find('.one').eq(index).find('.div-right').css('right',-800);
		$('.hre').find('.one').eq(index).find('.div-right').animate({right:0},600);
	}
	function disps(){
		$('.hre').find('.one').hide();
		$('.hre').find('.one').eq(index).show();
		$('.hre').find('.one').eq(index).find('.div-left').css('left',-500);
		$('.hre').find('.one').eq(index).find('.div-left').animate({left:0},500);
		$('.hre').find('.one').eq(index).find('.div-right').css('right',800);
		$('.hre').find('.one').eq(index).find('.div-right').animate({right:0},600);
	}
	$('.about-bottom .hre div').eq(0).show();
	$('.about-bottom .hre div').eq(0).siblings().hide();
	$('.about-bottom .pieces div').eq(0).find('span').eq(0).show();
	$('.about-bottom .pieces div').eq(0).find('span').eq(1).hide()
})
