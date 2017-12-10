$(() => {
  function loginStatus() {
    var $isLogin = $("#isLogin"),
      $Login = $("#Login");
    $.ajax({
      type: "GET",
      url: "data/routes/isLogin.php",
      data: {},
      dataType: "json",
      success: function (data) {
        // data=JSON.stringify(data);
        // data=JSON.parse(data);
        //console.log(data);
        //console.dir(typeof(data));
        if (data.ok == 1) {
          $isLogin.hide();
          $Login.show();
          $("#user_name").html(data.phone);
        } else {
          $isLogin.show();
          $Login.hide();
        }
      },
      error: function () {
        // alert(7);
      }
    });
  }
  //加载头部页面
  $("#header").load('header.html', html => {
    loginStatus();
  //添加头部的事件
  $("ul.header_nav-list>li").hover((e)=>{
        e.preventDefault();
        var i=$(e.target).parent().index();
        $("#names_box").show();
        $("#names_box").children(":eq("+i+")").show().siblings().hide();
        
  });
  $("#names_box").hover(()=>{
    $("#names_box").show();
   },()=>{
    $("#names_box").hide();
   })
  
   //注销账号
  $("#logout_b").click((e)=>{
      e.preventDefault();
      $.ajax({
        type:"get",
        url:"data/routes/loginOut.php",
        dataType:'text',
        success:function(){
          alert("注销成功");
          location.reload();
        },
        error:function(e){
          console.dir(e);
          alert("注销失败，请重新注销");
        }
      
      });
  });
  // 搜索框功能
  var $shelper=$("#shelper"),
      $txtSearch=$("#txtSearch"),
      $inputLogo=$(".header_input_logo_txt");
      $txtSearch.keyup(e=>{
          $inputLogo.children().hide();
          $shelper.show();
        if(e.keyCode!=13){
           if(e.keyCode==40){
             if(!$shelper.is(":has(.focus)")){
               $shelper.children().first().addClass("focus");
             }else{
                if($shelper.children().last().is(".focus")){
                    $shelper.children().last().removeClass("focus");
                    $shelper.children().first().addClass("focus");
                }else{
                  $shelper.children(".focus").removeClass("focus").next().addClass("focus");
                }
             }
             $txtSearch.val($shelper.children(".focus").attr("title"));
        }else if(e.keyCode==38){
              if(!$shelper.is(":has(.focus)")){
                $shelper.children()
                  .last().addClass("focus");
              }else{
                 if($shelper.children()
                   .first().is(".focus")){
                  $shelper.children(".focus")
                        .removeClass("focus");
                  $shelper.children()
                        .last().addClass("focus");
                 }else{
                   $shelper.children(".focus")
                        .removeClass("focus")
                        .prev().addClass("focus");
                }
             }
            $txtSearch.val(
              $shelper.children(".focus").attr("title")
            );
      }else{
             var $tar=$(e.target);
             $.ajax({
               type:"get",
               url:"data/routes/searchHelper.php",
               success:function(data){
                var html="";
                for(var p of data){
                  html+=`<li title="${p.title}" >
                  <div class="search-item" title="${p.title}">${p.title}</div>
                  </li>`;
                }
                $shelper.html(html);
               },
               erroe:function(){alert("无数据ok")}
             })
           }
    }
  }).blur(()=>{
     $shelper.hide();
  });
  // $(window).scroll(()=>{
  //   var scrollTop=$(window).scrollTop();
  //   if(scrollTop>=500)
	// 		$("#header").addClass("fixed_nav");
	// 	//否则，就移除id为header-top的div的fixed_nav class
	// 	else
	// 		$("#header").removeClass("fixed_nav");
  // })
 })
});
