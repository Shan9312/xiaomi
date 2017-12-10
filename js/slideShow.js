function sildeShow(){
  var img=document.querySelector("#nav_main>a .img_show");
  img.className="";
  if(img.parentNode.nextElementSibling){
	img.parentNode.nextElementSibling.children[0].className="img_show";
 }else
	nav_main.children[0].children[0].className='img_show'
}
var timer=setInterval(sildeShow,2000);	
var divs=document.getElementById("nav_main");
console.log(divs);
divs.onmouseover=()=>{
	clearInterval(timer);
	timer=null;	
}
divs.onmouseout=()=>{
	timer=setInterval(sildeShow,2000);//启动定时器
}



