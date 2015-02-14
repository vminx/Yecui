var imgUrls = [
    'img/bg.jpg',
    'img/btn.png',
    'img/denglong.png',
    'img/ft-bg.png',
    'img/tit.png'
];
var imgs = [];
var sum = 0;
function check(){
	sum++;
	var percent = sum/imgUrls.length * 100;
	$('#processValue').html(percent.toFixed(0)+'%');
	if(sum == imgUrls.length){
		$('#loadMask').hide();
		$('.J-loading-show').show();
	}
}

for (var i=0;i<imgUrls.length;i++) {
	imgs[i] = new Image();
	imgs[i].src = imgUrls[i];
	imgs[i].onload = check;
};