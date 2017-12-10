<?php
 require("../init.php");
 function register(){
	global $conn;
	@$phone=$_REQUEST['phone'];
	@$upwd=$_REQUEST['upwd'];
 if($phone&&$upwd){
	$sql="insert into xm_user(uid,phone,upwd) values(null,'$phone','$upwd')";
	mysqli_query($conn,$sql);
  }
}

function checkPhone(){
	global $conn;
	@$phone=$_REQUEST['phone'];
	if($phone){
		$sql="select * from xm_user where phone='$phone'";
		$result=mysqli_query($conn,$sql);
		$user=mysqli_fetch_all($result,1);
		if(count($user)!=0){
			return "0";//注册失败
		}else{
			return "1";//注册成功
		}
	}
}
function login(){
	global $conn;
	@$phone=$_REQUEST['phone'];
	@$upwd=$_REQUEST['upwd'];
	if($phone&&$upwd){
		$sql="select * from xm_user where phone='$phone' and upwd='$upwd'";
		$result=mysqli_query($conn,$sql);
		$user=mysqli_fetch_all($result,1);
		if(count($user)!=0){
			session_start();//打开session
			$_SESSION["uid"]=$user[0]["uid"];
			return true;//登录成功
		}else 
		   return  false;//登录失败
	}
   }
function isLogin(){
	   global $conn;
	   session_start();
	   @$uid=$_SESSION["uid"];
	   if($uid){
		   $sql="select phone from xm_user where uid='$uid'";
		   $result=mysqli_query($conn,$sql);
		   $user=mysqli_fetch_all($result,1);
		   return  ["ok"=>1,"phone"=>$user[0]["phone"]];
	   }else
	      return ["ok"=>0];
}

function logout(){
	session_start();
	$_SESSION["uid"]=null;
}

?>