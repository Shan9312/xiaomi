$(() => {
	// 点击动态加载框图
	$("#nav_lf>li>a").hover(e=>{
		e.preventDefault();
		var i;
			i=$(e.target).parent().index();
			$("#nav_box").show();
			console.log(i);
			$("#nav_box").children(":eq("+i+")")
			  .show().siblings().hide();	
	 });
	 $("#nav_box").mouseenter(()=>{
		$("#nav_box").show();
	  });
	  $(".nav_lf_list_box").mouseleave(()=>{
		$("#nav_box").hide();
	  });
	var $ulImgs = $("#nav_main>ul"),//轮播 ul元素
		$ulInds = $("#nav .point"),//轮播的5个小圆点
		LIWIDTH = 1226,//每次移动的距离
		INTERVAL = 1000,//转换下一张的时间
		WAIT = 3000,//自动播放的时间3s
		moved = 0,//移动的个数
		timer = null,//当前的定时器
		canMove = true;//判断是否能移动

	$.get("data/routes/getBanner.php").then(data => {
		console.log(data);
		var html = "";
		for (var b of data) {
			html += `<li><a href="#">
		<img src="${b.img}" alt="${b.bid}">
		</a></li>`;
		}
		html += `<li><a href="#">
	 <img src="${data[0].img}" alt="${data[0].bid}">
	 </a></li>`;
		$ulImgs.html(html).css("width", (data.length + 1) * LIWIDTH + "px");
		$ulInds.children().first().addClass("hover").siblings().removeClass("hover");
		$ulInds.html("<li></li>".repeat(data.length))
			.children().first().addClass("hover");

		//封装构造函数
		function move(dir, callback) {
			moved += dir;//dir代表方向，左右滑动，正负1；
			if (moved < data.length) {
				$ulInds.children(":eq(" + moved + ")")
					.addClass("hover").siblings().removeClass("hover");
			} else {
				$ulInds.children(":eq(0)")
					.addClass("hover").siblings().removeClass("hover");
			}
			//先清除ul上的动画事件。
			$ulImgs.stop(true).animate({
				left: -LIWIDTH * moved
			}, INTERVAL, callback);
		}
		//1.先设置轮播图定时器自传
		function automove() {
			if (canMove) {
				if (moved == data.length) {
					moved = 0;
					$ulImgs.css("left", 0);
				}
				timer = setTimeout(() => {
					move(1, automove);
				}, WAIT);
			}
		}
		automove();
		$("#nav").hover(() => {
			canMove = false;
			clearTimeout(timer);
			timer = null;
		}, () => {
			canMove = true;
			automove();
		});
		$ulInds.on("click", "li", e => {
			moved = $(e.target).index();
			$ulImgs.stop(true).animate({
				left: -LIWIDTH * moved
			}, INTERVAL);
			$ulInds.children(":eq(" + moved + ")")
				.addClass("hover").siblings().removeClass("hover");
		});
		$("#nav>[data-move=left]").click(e => {
			e.preventDefault();
			if (moved == 0) {
				moved = data.length;
				$ulImgs.css("left", -LIWIDTH * moved);
			}
			move(-1);
		});
		$("#nav>[data-move=right]").click(e => {
			e.preventDefault();
			if (moved == data.length) {
				moved = 0;
				$ulImgs.css("left", 0);
			}
			move(1);
		});
	});
});
//中间10个小产品的轮播图
$(() => {
	var $ulbox = $("#xm_box_detail"),
		ULWIDTH = 1226,//每次移动的距离
		WAIT = 5000,//自动播放的时间3s
		timer = null,//当前的定时器
		INTERVAL=2000,
		$btnGroup = $('#bannerBtnGroup'),
		 dir = 0;
	//先渲染轮播图的滚动
	function boxmove(a,callback) {
		if(a===-1){
		  $btnGroup.children().last().addClass("active").siblings().removeClass('active');
	  }else{
		 $btnGroup.children().first().addClass("active").siblings().removeClass("active");
	  }
	  automove();
	//   $ulbox.stop(true).animate({
	// 	  left: a * ULWIDTH,
	//   },INTERVAL,callback);
	}
	$("#bannerBtnGroup>[data-bt=left]").stop(true).click(e=>{
		e.preventDefault();
		if(dir===-1){
			dir=0;  
			$ulbox.css('left', 0);
			$(e.target).addClass("active").siblings().removeClass("active");
		} 
		boxmove(0);

	});
	$("#bannerBtnGroup>[data-bt=right]").stop(true).click(e=>{
		e.preventDefault();
		if(dir===0){
			dir=-1;  
			$ulbox.css('left',-ULWIDTH);
			$(e.target).addClass("active").siblings().removeClass("active");
		  } 
		  boxmove(-1);
	});
	function automove() {
		if (!dir) {
			dir=-1;
			$ulbox.css('left', dir * ULWIDTH);	
		}else{
		   dir=0;  
		   $ulbox.css('left',  dir * ULWIDTH);
		}
		clearInterval(timer);
		timer = setInterval(()=>{
			boxmove(dir,automove)
		}, WAIT);
	}
	automove();
	$("#xm_box").hover(()=>{
		clearTimeout(timer);
		timer = null;
	},()=>{
        automove();
	}
   )
	
})



//楼层加载

$(() => {
	ajax({
		type: 'get',
		url: 'data/routes/index_product.php'
	}).then(output => {
		console.log(output);
		//output.recommended;output.new_arrival;output.top_sale;output.top_sale_f4; 
		var html = `<ul class="xm_main_box" >`;
		for (var key in output.recommended) {
			var p = output.recommended[key];
			// console.log(p);
			// console.log(p.pic);
			if (key == 0) {
				html += `
			 <li class="li_1">
			   <a href="${p.href}"><img src="${p.pic}" alt=""></a>
		     </li>`;
			} else if (key > 0 && key < 5) {
				html += `<li>
			<a href="#" class="new_p">新品</a>
			<p>
			  <a href="#" class="pic"><img src="${p.pic}"alt=""></a>
			</p>
			<a href="#" class="title">${p.title}</a>
			<p class="desc1">${p.desc1}</p>
			<span class="price">${p.price}元</span>
			<div class="banner_msg">
			<a href="#">
				<span>${p.desc1}</span>
				<span class="title">来自于 比 的评价 </span>
			</a>
		</div>
			
		    </li>`;
			} else if (key == 5) {
				html +=
					`<li class="li_1">
			   <a href="${p.href}"><img src="${p.pic}" alt=""></a>
		    </li>`;
			} else if (key > 5 && key < 9) {
				html += `<li>
			<p>
			   <a href="#" class="pic"><img src="${p.pic}" alt=""></a>
			</p>
			 <a href="#" class="title">${p.title}</a>
			 <p class="desc">${p.desc1}</p>
			 <span class="price">${p.price}元</span>
			 <div class="banner_msg">
			 <a href="#">
				 <span>${p.desc1}</span>
				 <span class="title">来自于 比 的评价 </span>
			 </a>
		 </div>
		    </li>`;
			} else if (key == 9) {
				html += `<li class="box_last">
		     <div>
			   <p class="title">${p.title}</p>
			   <p class="price"><span>${p.price}</span>元</p>
			   <div class="pic"><a href="#"><img src="${p.pic}" alt=""></a></div>
			 </div>
			 <div>
				<p class="title">浏览更多</p>
				<p class="price">热门</p>
				<div class="pic"><a href="#"><img src="img/index/pms_1468806372.46368911!220x220.jpg" alt=""></a></div>
		    </div>
			 </li>
			 `;
			}
		}
		html += `</ul>`;
		$("#xm_floo1").html(html);
		var htt = `<ul class="xm_main_box" >`;
		for (var i in output.new_arrival) {
			var p1 = output.new_arrival[i];
			if (i == 0) {
				htt += `
			 <li class="li_1">
			   <a href="${p.href}"><img src="${p.pic}" alt=""></a>
		     </li>`;
			} else if (i > 0 && i < 5) {
				htt += `<li>
			<a href="#" class="new_p">新品</a>
			<p>
			  <a href="#" class="pic"><img src="${p1.pic}"alt=""></a>
			</p>
			<a href="#" class="title">${p1.title}</a>
			<p class="desc1">${p1.desc1}</p>
			<span class="price">${p1.price}元</span>
			<div class="banner_msg">
			<a href="#">
				<span>${p1.desc1}</span>
				<span class="title">来自于 比 的评价 </span>
			</a>
		</div>
		    </li>`;
			} else if (i == 5) {
				htt +=
					`<li class="li_1">
			   <a href="${p1.href}"><img src="${p1.pic}" alt=""></a>
		    </li>`;
			} else if (i > 5 && i < 9) {
				htt += `<li>
			<p>
			   <a href="#" class="pic"><img src="${p1.pic}" alt=""></a>
			</p>
			 <a href="#" class="title">${p1.title}</a>
			 <p class="desc">${p1.desc1}</p>
			 <span class="price">${p1.price}元</span>
			 <div class="banner_msg">
			 <a href="#">
				 <span>${p1.desc1}</span>
				 <span class="title">来自于 比 的评价 </span>
			 </a>
		 </div>
		    </li>`;
			} else if (i== 9) {
				htt += `<li class="box_last">
		     <div>
			   <p class="title">${p1.title}</p>
			   <p class="price"><span>${p1.price}</span>元</p>
			   <div class="pic"><a href="#"><img src="${p1.pic}" alt=""></a></div>
			 </div>
			 <div>
				<p class="title">浏览更多</p>
				<p class="price">热门</p>
				<div class="pic"><a href="#"><img src="img/index/pms_1468806372.46368911!220x220.jpg" alt=""></a></div>
		    </div>
			 </li>
			 `;
			}
		}
		htt += `</ul>`;
		$("#xm_floo2").html(htt);
		// $("#xm_floo3").html(html);
		// $("#xm_floo4").html(html);

	});
})