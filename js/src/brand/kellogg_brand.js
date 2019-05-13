// kellogg_brand.js

(function($){
// layout
	var headBox = $('#headBox');
	var footBox = $('#footBox');
	
	headBox.load('./common/kellogg_header.html');
	footBox.load('./common/kellogg_footer.html');

// button
	var cerealArr = [
			{"name":"스페셜 K","pic":"brand_01","url":"#"}, 
			{"name":"첵스초코","pic":"brand_02","url":"#"}, 
			{"name":"콘푸로스트","pic":"brand_03","url":"#"}, 
			{"name":"콘푸레이크","pic":"brand_10","url":"#"}, 
			{"name":"아몬드 푸레이크","pic":"brand_04","url":"#"}, 
			{"name":"그래놀라","pic":"brand_05","url":"#"}, 
			{"name":"통곡물","pic":"brand_06","url":"#"}, 
			{"name":"후르트링","pic":"brand_07","url":"#"}, 
			{"name":"코코팝스","pic":"brand_08","url":"#"}, 
			{"name":"허쉬 초코크런치","pic":"brand_09","url":"#"}, 
		];

	var barArr = [
			{"name":"크런치넛 에너지바","pic":"bar_01","url":"#"},
			{"name":"레드베리 에너지바","pic":"bar_02","url":"#"},
			{"name":"베리앤 넛바","pic":"bar_03","url":"#"},
			{"name":"라이스 크리스피바","pic":"bar_04","url":"#"},
			{"name":"라이스 크리스피바 초코맛","pic":"bar_05","url":"#"}
		];


	var newArr = [
			{"name":"리얼 그래놀라","pic":"brand_2_01","url":"#"},
			{"name":"첵스초코 쿠앤크","pic":"brand_2_02","url":"#"},
			{"name":"콘푸로스트 바나나파워","pic":"brand_2_03","url":"#"},
			{"name":"스페셜 K 레드베리","pic":"brand_2_04","url":"#"}
		];

	var bL   = $('.brand_list');
	var bUl  = bL.children('ul')
	var cLen = cerealArr.length;
	var bLen = barArr.length;
	var nLen = newArr.length;

	// console.log(barArr.length)

	var cerealLi = function(){
			bUl.empty();
		for(i=0; i < cLen; i+=1){
			bUl.append('<li><a href="#"><p></p></a></li>');
			var bLi  = bUl.children('li');		
			bLi.eq(i).find('p').text(cerealArr[i].name);
			bLi.eq(i).css({backgroundImage:'url(../../../img/brand/'+	cerealArr[i].pic+'.png)'});
		};
	};

	var barLi = function(){
			bUl.empty();
		for(i=0; i < bLen; i+=1){
			bUl.append('<li><a href="#"><p></p></a></li>');
			var bLi  = bUl.children('li');		
			bLi.css({backgroundSize:'90%',backgroundPosition: '50% 40%'});
			bLi.eq(i).find('p').text(barArr[i].name);
			bLi.eq(i).css({backgroundImage:'url(../../../img/brand/'+	barArr[i].pic+'.png)'});

		};
	};

	var newLi = function(){
			bUl.empty();
		for(i=0; i < nLen; i+=1){
			bUl.append('<li><a href="#"><p></p></a></li>');
			var bLi  = bUl.children('li');		
			bLi.eq(i).find('p').text(newArr[i].name);
			bLi.eq(i).css({backgroundImage:'url(../../../img/brand/'+	newArr[i].pic+'.png)'});
		};
	};


	cerealLi();

	var title  = $('.title');
	var button = title.find('button');

	button.on('click',function(){
		var thisLi = $(this).parent('li');
		thisLi.addClass('active');
		thisLi.siblings('li').removeClass('active');
		var i = thisLi.index();
		if(i==0){
			cerealLi();
		}else if(i==1){
			barLi();
		}else{
			newLi();
		}
	});
	
})(jQuery);