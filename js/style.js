var status = 1;
$(document).ready(function(){
	//鼠标悬浮图片高亮显示
	$(".rec_inner .shang").hover(function(){
			$(this).css("opacity","0.6");
		},function(){
			$(this).css("opacity","1");
		});
	$(".rec_inner .middle").hover(function(){
			$(this).css("opacity","0.6");
		},function(){
			$(this).css("opacity","1");
		});
	$(".rec_inner .bottom").hover(function(){
			$(this).css("opacity","0.6");
		},function(){
			$(this).css("opacity","1");
		});
	// 结束
	
	// 促销与公告底部划线
	$(".gonggao .gg").mouseover(function(){
		$(".bottom-hen").animate({left:"62px"},200);
		$(".cux-box").css("display","none");
		$(".gg-box").css("display","block");
	})
	$(".gonggao .cux").mouseover(function(){
		$(".bottom-hen").animate({left:"13px"},200);
		$(".cux-box").css("display","block");
		$(".gg-box").css("display","none");
	})
	
	// 登录下面的item栏交互效果
	var sta = 1;
	$(".menu-items .active").mouseover(function(){
		$(this).css('border-bottom','solid 2px #F10215').css('height','auto').siblings().css('border-bottom','0').css('height','33%');
// 		$(this).find('a').css('color','#F10215');
// 		$(this).siblings().find('a').css('color','#E01121');
		var index = $(this).index()
		$(".menu"+index).css("display","block").siblings().css("display","none");
		$(".middle .middle-right .menu-items ul").css('height','auto');
		$(".middle .middle-right .menu-items .quit").css('display','block');
		$(".middle .middle-right .menu-items ul").animate({
			'padding-top':"0",
			'border':'0',
		},200,function(){
			if(sta == 1){
				$(".menu-items .active").siblings(".remove").hide();
				$(".middle .middle-right .menu-items ul li .img").hide(500);	
			}
		})
		setTimeout(function(){sta = 0;},2000);
	})	
	                                                                                                                   
	//点击X 恢复上面互动效果
	$(".middle .middle-right .menu-items .quit").click(function(){
		$(".middle .middle-right .menu-items ul .active").unbind("mouseover");
		
		$(".middle .middle-right .menu-items ul").css('height','100%');
		$(".menu-items .active").css('height','33%').css('border-bottom','0');
		$(".middle .middle-right .menu-items .quit").css('display','none');
		$(".middle .middle-right .menu-items ul").css("border-top","solid 2px #EBEAEA").css("padding-top","10px");
		for(var i=0;i<4;i++){
			$(".menu"+i).css("display","none");	
		}
		$(".menu-items .active").css('border-bottom','0').siblings(".remove").show();
		$(".middle .middle-right .menu-items ul li .img").show(500);
		
		setTimeout(function(){
			$(".menu-items .active").mouseover(function(){
				$(this).css('border-bottom','solid 2px #F10215').css('height','auto').siblings().css('border-bottom','0').css('height','33%');
				var index = $(this).index()
				$(".menu"+index).css("display","block").siblings().css("display","none");
				$(".middle .middle-right .menu-items ul").css('height','auto');
				$(".middle .middle-right .menu-items .quit").css('display','block');
				$(".middle .middle-right .menu-items ul").animate({
					'padding-top':"0",
					'border':'0',
				},200,function(){
					if(sta == 1){
						$(".menu-items .active").siblings(".remove").hide();
						$(".middle .middle-right .menu-items ul li .img").hide(500);	
					}
				})
				setTimeout(function(){sta = 0;},2000);
			})
			sta = 1;
		},3000);
	})
	
	/**
	 * 京东秒杀定时器
	 */
	
	setInterval(runTime,1000);
	function runTime(){
		//获取当前时间戳
		var nowtime = Math.round(new Date()/1000);
		//秒杀截止时间戳
		var endtime = 1544750704;
		//秒数
		var second = endtime - nowtime;
		
		//获取小时数
		var hr = Math.floor(second/3600);
		var hrstr = hr.toString();
		if(hrstr.length == 1) hrstr = '0' + hrstr;
		
		//获取分钟数
		var min = Math.floor((second - hr * 3600)/60);
		var minstr = min.toString();
		if(minstr.length == 1) minstr = '0' + minstr;
		
		//获取秒数
		var sec = second - hr * 3600 - min * 60;
		var secstr = sec.toString();
		if(secstr.length == 1) secstr = '0' + secstr;
		
		//添加到html中
		$(".miaosha .left a .left-cd .cd-h").html(hrstr);
		$(".miaosha .left a .left-cd .cd-m").html(minstr);
		$(".miaosha .left a .left-cd .cd-s").html(secstr);
	}
	
	//鼠标放入秒杀栏商品高亮显示
	$(".miaosha .middle .slider .slider-item").hover(function(){
		$(this).css("opacity","0.9").find("p").css('color','#C81623');
	},function(){
		$(this).css("opacity","1").find("p").css('color','#666666');
	})
	
	//秒杀栏左右切换
// 	$(".miaosha .middle .slider .left").click(function(){
// 		
// 	})
	var index = 0;
	var left = 0;
	$(".miaosha .middle .left").click(function(){
		index++;
		var divlens = $(".miaosha .middle .slider .slider-item").length;
		if(index >= divlens/4){
			//返回第一页
			index = 0;
		}
		left = "-"+index*100+"%";
		$(".miaosha .middle .slider").animate({"margin-left":left});
	})
	$(".miaosha .middle .right").click(function(){
		var divlens = $(".miaosha .middle .slider .slider-item").length;
		if(index == 0){
			//返回最后一页
			index = divlens/4;
			index = index-1;
			left = "-"+index*100+"%";
		}else{
			index--;
			if(index == (divlens/4)-2){
				left = "-"+index*100+"%";
			}else{
				left = index*100+"%";
			}
		}
		$(".miaosha .middle .slider").animate({"margin-left":left});
	})
})
