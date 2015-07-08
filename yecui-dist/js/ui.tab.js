	//菜单切换
    var tab_contrl = function(){
    	// $(this).on('click',function() {
			$(this).siblings().removeClass('z-active')
	        $(this).addClass('z-active');
	        var num = $(this).parent().children('li').index(this);
	        var con_num = $(this).parents('.ui-tab').find('.ui-tab-cont .cont-item').eq(num);
	        con_num.show();
	        con_num.siblings('.cont-item').hide();

    	// });
    }
	$('.ui-tab-nav .nav-item').on('click',tab_contrl);
