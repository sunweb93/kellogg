// kellogg_header.js

(function($){
	var gnb 	 		= $('.gnb');
	var gnbUl 		= gnb.children('ul');
	var gnbLi 		= gnbUl.children('li');
	var gnbA 	  	= gnbLi.children('a');
	var subMenu 	= $('.sub_menu');
	var brandDl   = $('.brand_dl');
	var brandDl02 = $('.brand_dl_02');
	var brandDd  	= brandDl.children('dd');
	var brandDd02 = brandDl02.children('dd');
	var sWrap     = $('.s_wrap');
	var bWrap     = $('.b_wrap');
	var eWrap     = $('.e_wrap');
	var sLi				=	sWrap.find('li');
	var eLi				=	eWrap.find('li');
	var sPic 		  = sWrap.find('.pic');
	var bPic 		  = bWrap.find('.pic');
	var ePic 		  = eWrap.find('.pic');
	var winW      =  $(window).width();
	var winW      =  $(window).width();
	var mob       =  463;
	var tab       =  983;
	var pc        =  1349;
	var myDevice;

// 기기별 새로고침 
var Device = function(w){
  if(w <= mob){  
    myDevice = 'mobile';
  }else if(w > mob && w <= tab){
    myDevice = 'table';
  }else if(w > tab && w <= pc){
    myDevice = 'pc';
  }else{
    myDevice = 'pcfull';
  }
return myDevice;
};

var beforeDevice = Device(winW);

$(window).on('resize',function(){
  var nowW = $(window).width();
  var afterDevice = Device(nowW);
  // console.log(beforeDevice, afterDevice);
  if(beforeDevice !== afterDevice){location.reload();}
});
var pcGnb = function(){
	gnbLi.on('mouseenter',function(){
	 	var gnbI = $(this).index();
	 	subMenu.eq(gnbI).stop(true,false).fadeIn(600);
	});

	gnbLi.on('mouseleave',function(){
	 	var gnbI = $(this).index();
	 	subMenu.eq(gnbI).stop(true,false).hide();
	});

	brandDd.on('mouseenter',function(){
		var i = $(this).index();
		bPic.css({backgroundImage:'url(../img/brand/brand_0'+i+'.png)'})
	});

	brandDd02.on('mouseenter',function(){
		var i = $(this).index();
		bPic.css({backgroundImage:'url(../img/brand/brand_2_0'+i+'.png)'});
	});

	sLi.on('mouseenter',function(){
		var i = $(this).index();
		var k = i+1;
		sPic.css({backgroundImage:'url(../img/story/story_0'+k+'.png)'});
	});
};

if(winW>=tab){
	pcGnb();
};


//모바일, 태블릿 메뉴  

var menuBtn   = $('.menu_btn');
var searchBtn = $('.search_btn');
var searchBox = $('.search_box');
var plusBtn = $('.plus_btn');
var subDt   = subMenu.find('dt');

	menuBtn.on('click',function(){
		$(this).toggleClass('open');
		gnb.toggleClass('open');
	});

	searchBtn.on('click', function(e){
		e.preventDefault();
  	searchBox.toggleClass('open');
	});


	plusBtn.on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).siblings('a').toggleClass('border');
		$(this).siblings('div').slideToggle();
		console.log($(this).siblings('a'))
	});

	subDt.on('click',function(e){
		e.preventDefault();
		var thisDd = $(this).siblings('dd');
		$(this).toggleClass('open border');
		thisDd.slideToggle(500);

	});





})(jQuery);
