// kellogg_company.js

(function($){
	var headBox = $('#headBox');
	var footBox = $('#footBox');
	var sideMenu  = $('.side_menu');
	var sideLi    = sideMenu.find('li');
	var sideBtn   = sideLi.children('button');
	var container = $('.container');

	headBox.load('./common/kellogg_header.html');
	footBox.load('./common/kellogg_footer.html');
	container.load('./company/kellogg_company_introduce.html');


	sideBtn.on('click',function(e){
		var thisIndex = $(this).parent('li').index();

		e.preventDefault();
		$(this).parent('li').addClass('active');
		$(this).parent('li').siblings('li').removeClass();

		if(thisIndex==0){
			container.load('./company/kellogg_company_introduce.html');
		}else if(thisIndex==1){
			container.load('./company/kellogg_company_history.html');
		}else if(thisIndex==2){
			container.load('./company/kellogg_company_value.html');
		}else if(thisIndex==3){
			container.load('./company/kellogg_company_map.html');
		}
	});	

})(jQuery);