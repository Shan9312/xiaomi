<?php
 require("../init.php");
 function get_index_products(){
	 global $conn;
	 $output=[
		//recommended=>[推荐商品列表],
		// 	=>[新品上架],
		//top_sale=>[热销]
	];
	$sql="select * from xm_index_products where seq_recommended>0 order by seq_recommended";
	$result=mysqli_query($conn,$sql);
	$products=mysqli_fetch_all($result,1);
	$output["recommended"]=$products;

	$sql="select * from xm_index_products where seq_new_arrival>0 order by seq_new_arrival";
	$result=mysqli_query($conn,$sql);
	$products=mysqli_fetch_all($result,1);
	$output["new_arrival"]=$products;
	echo json_encode($output);
 }
 //get_index_products();
function getBanner(){
	global $conn;
	$sql="select * from xm_banner";
	$result=mysqli_query($conn,$sql);
	$prods=mysqli_fetch_all($result,1);
	echo json_encode($prods);
}

 function searchHelper(){
	 global $conn;
	 $sql="select pid,title from xm_index_products order by title DESC limit 10 ";
	 $result=mysqli_query($conn,$sql);
	 $rows=mysqli_fetch_all($result,1);
	//  if(mysqli_error($conn)){
    //      echo mysqli_error($conn);
	//  }
	 echo json_encode($rows);
 }

?>