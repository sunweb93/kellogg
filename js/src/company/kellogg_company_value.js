(function($){
var vWrap = $('.v_wrap');
var vLi = vWrap.children('li');


var valueArr = [
			{"pic":"value_01","color":"#759e36"}, 
			{"pic":"value_02","color":"#e4e317"}, 
			{"pic":"value_03","color":"#6f3e97"}, 
			{"pic":"value_04","color":"#03aced"}, 
			{"pic":"value_05","color":"#fec20a"}			
		];

for(i=0; i < 5; i+=1){
	vLi.eq(i).children('.v_pic').css({backgroundImage:'url(../img/company/'+valueArr[i].pic+'.png)', borderColor:valueArr[i].color});
	};


})(jQuery);