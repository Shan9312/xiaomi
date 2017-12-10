$(()=>{
	var $tel=$("#tel"),
		$pwd=$("#pwd");
	$("#btn").click(e=>{
	$.ajax({
		type:'post',
		url:'data/routes/login.php',
		data:"phone="+$tel.val().trim()+"&upwd="+$pwd.val().trim(),
		dataType:"text"
	}).then(text=>{
        if(text=="false"){
			alert("用户名或密码错误!");
			var $p=$pwd.parent().next();
	    	$p.html("<img src='img/index/err.png'>手机号码或密码不正确");
	}else{
			//如果有search
			if(location.search!==""){
				location=decodeURIComponent(
					location.search.slice(6)
				);
			}else
			    alert("登录成功");
				location="index.html";
		}
	})
 });
})