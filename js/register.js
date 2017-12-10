$(()=>{
	//获取input的文本框
	var $tel=$("#tel");
	var $pwd=$("#pwd");
	var $pwd2=$("#pwd2");
	//验证电话的格式，并把电话的参数传给checkPhone函数
	$tel.blur(e=>{
		var $tel=$(e.target);
		if($tel.val().trim()!=" "){
			if(/^1[34578]\d{9}$/.test($tel.val().trim())){
				checkPhone($tel);
			}else{    
				 var $p=$tel.next();
				$p.html("<img src='img/index/err.png' >手机格式不正确");	
			}
		}	
	});
	//验证密码的格式
	$pwd.blur(e=>{
		var $pwd=$(e.target);
		var $p=$pwd.next();
		if($pwd.val().trim()!=""){
            if(/^\w{6,12}$/.test($pwd.val().trim())){
				$p.html("<img src='img/index/ok.png'>");
			}else
			  $p.html("<img src='img/index/err.png' >请输入6-12位数字，字母或下划线");	
		
	}
	});
	//验证第2次输入的密码
	$pwd2.blur(e=>{
		var $p=$(e.target).next();
		if($pwd.val().trim()==$pwd2.val().trim()){
			
			$p.html("<img src='img/index/ok.png'>");
		}else
			$p.html("<img src='img/index/err.png' >密码输入不一致，请重新输入");		
	});
	//先写一个从数据库中验证电话的函数。
	function checkPhone(txt){
		//承诺 若数据库中检查无该电话，则执行提交函数时，会把提交回调函数请求回应
		return new Promise (callback=>{
            $.ajax({
				type:'post',
				url:"data/routes/checkPhone.php",
				data:"phone="+txt.val().trim(),
				dataType:'text'
			}).then(text=>{
				var $p=$tel.next();
				//验证数据库中。是否有该注册的电话
				if(text=="false"){
					$p.html("<img src='img/index/err.png' >该手机已注册");
				}else{
					//若没有该电话，则显示ok并！！返回 回调函数
					$p.html("<img src='img/index/ok.png'>");
					callback();
					
				}
			})
		})
	}
//查找 提交button，绑定单击事件
$("#btn").click(e=>{
		checkPhone($tel);
		//
       $(()=>{
			$.ajax({
			type:'post',
			url:'data/routes/register_user.php',
			data:"phone="+$tel.val().trim()+"&upwd="+$pwd.val().trim(),
			dataType:'text'
		   }).then(()=>{
			 
			alert("注册OK");
			location="index.html";
		   })
		});
	});
	
});