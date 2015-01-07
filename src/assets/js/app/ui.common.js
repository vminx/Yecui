	//测试用
	// $(function(){
	// 	i=13;//i是当前第几张图0为默认
	// 	music_pause=1;//1音乐默认关闭,2打开
	// 	if(music_pause==1){
	// 		document.getElementById("player").pause();
	// 	}
	// 	$('.m-page'+i).addClass('show').removeClass('hide');
	// });
	//视频
	$("#video").on('click',function(){
		var Media = document.getElementById("player");
		Media.pause();
		// var Media = document.getElementById("player");
		// Media.pause();
		$("#video_1").show();
		//$("#movie").show();
		//$("#move_close").show();
	})
	// $('#move_close').on('click',function(){
	// 	var Media = document.getElementById("player");
	// 	Media.play();
	// 	alert(1)
	// 	$("#movie").hide();
	// 	$("#move_close").hide();
	// })

	//声音控制
	$(".musicIcon").on('click',function(){
		var Media = document.getElementById("player")
		if($('.player').attr('sta')=='play'){
			$('.player').attr('sta','pause');
			Media.pause();
			$(this).removeClass('musicStart');
			$('.note').show().html('关闭')
			setTimeout(function(){
				$('.note').hide()
			},2000);
		}
		else{
			$('.player').attr('sta','play');
			$(this).addClass('musicStart');
			Media.play();
			$('.note').show().html('打开')
			setTimeout(function(){
				$('.note').hide()
			},2000);
		}
	});
	//分享指南
	$('#share_weixin').on('click',function(){
		$('#share_mask').show()
	})
	$('#share_close').on('click',function(){
		$('#share_mask').hide()
	})
