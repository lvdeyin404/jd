//控制变量
var i = 0;

//调用定时器
timer

//定时器
var timer = setInterval(run,3000);

//轮播方法
function run(){
	i++;
	if(i == 6){
		i = 0;
	}
	$(".lunbo img").eq(i).fadeIn(1000).siblings('img').fadeOut(1000);
	$(".lunbo li").eq(i).css("background","#ffffff").siblings('li').css("background","none");
}

//当鼠标移入时,停止定时器
$(".middle").hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(run,3000);
})

//鼠标放入小圆点事件
$(".lunbo ul li").mouseenter(function(){
	clearInterval(timer);
	//获取当前小圆点的序号
	i = $(this).index();
	$(".lunbo img").eq(i).fadeIn(1000).siblings('img').fadeOut(1000);
	$(".lunbo li").eq(i).css("background","#ffffff").siblings('li').css("background","none");
});

//鼠标点击left  right按钮
$(".lunbo .left").click(function(){
	// clearInterval(timer);
	if(i == 0){
		i = 6;
	}else{
		i--;
	}
	$(".lunbo img").eq(i).fadeIn(1000).siblings('img').fadeOut(1000);
	$(".lunbo li").eq(i).css("background","#ffffff").siblings('li').css("background","none");
	//timer = setInterval(run,3000);
})
$(".lunbo .right").click(function(){
	// clearInterval(timer);
	if(i == 6){
		i = 0;
	}else{
		i++;
	}
	$(".lunbo img").eq(i).fadeIn(1000).siblings('img').fadeOut(1000);
	$(".lunbo li").eq(i).css("background","#ffffff").siblings('li').css("background","none");
	//timer = setInterval(run,3000);
});

//middle右下角菜单 小菜单切换
$(".middle .middle-right .menu-items .menu0 .menu0-top ul li").mouseover(function(){
	var index = $(this).index();
	$(".middle .middle-right .menu-items .menu0 .menu0-input"+index).css('display','block').siblings('div').css('display','none');
	$(this).find('a').css('color','#F10215');
	$(this).siblings().find('a').css('color','#BEA68D');
})
$(".middle .middle-right .menu-items .menu1 .menu1-top ul li").mouseover(function(){
	var index = $(this).index();
	console.log(index);
	// $(".middle .middle-right .menu-items .menu1 .menu1-input"+index).css('display','block').siblings('div').css('display','none');
	if(index == 0){
		$(".middle .middle-right .menu-items .menu1 .menu1-box").animate({'margin-left':'0'});
	}else if(index == 1){
		$(".middle .middle-right .menu-items .menu1 .menu1-box").animate({'margin-left':'-100%'});
	}else if(index == 2){
		$(".middle .middle-right .menu-items .menu1 .menu1-box").animate({'margin-left':'-200%'});
	}
	$(this).find('a').css('color','#F10215');
	$(this).siblings().find('a').css('color','#BEA68D');
})
