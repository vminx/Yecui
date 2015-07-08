/*
**页面加载
*/
window.onload = function(){
	$('#J_loading').animate({'opacity':0},500,function(){
		$(this).css('display','none');
});