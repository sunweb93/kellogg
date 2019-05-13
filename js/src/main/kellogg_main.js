// kellogg_main.js

(function($){
	var headBox = $('#headBox');
	var footBox = $('#footBox');
	
	headBox.load('./common/kellogg_header.html');
	footBox.load('./common/kellogg_footer.html');

// slide banner

var bUl = $('#banner').children('ul');
var bLi = bUl.children('li');
var nBtn = $('.n_btn');
var pBtn = $('.p_btn');
var lastLi = bLi.last();
var indi = $('.indicator');
var indiLi = indi.find('li');
var n = 0;




// slide banner
lastLi.clone(true).prependTo(bUl);
var bLi = bUl.children('li');
liLen = bLi.length;
console.log(liLen);

bUl.css({width:liLen*100+'%',
          marginLeft:-100+'%',
          position:'relative',
          left:0});
bLi.css({width:100/liLen+'%'});



var num = 0;

var classSelect = function(n){
	indiLi.eq(n).addClass('active');
	indiLi.eq(n).siblings('li').removeClass('active');
};

var ani = function(n){
	bUl.animate({left:num*-100+'%'});
	classSelect(n);
};

indiLi.eq(num).addClass('active');

indiLi.on('click',function(e){
    e.preventDefault();
    num = $(this).index();
    ani(num);
  });

nBtn.on('click',function(e){
    e.preventDefault();

    if(num >= liLen-2){
      bUl.css({left:100+'%'});
      num = 0;
      ani(num);
      }else{
      num += 1;
      ani(num);
      };
  });

pBtn.on('click',function(e){
    e.preventDefault();
    num -= 1;
    
    if(num < 0){
      num=liLen-2;
      bUl.animate({left:100+'%'},function(){
      bUl.css({left:num*-100+'%'});
      });
      classSelect(num);
      }else{
      ani(num);
      };
  });


})(jQuery);