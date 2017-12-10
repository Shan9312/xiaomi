set names utf8;
drop database if exists xiaomi;
create database xiaomi charset=utf8;
use xiaomi;
create table xm_index_products(
    pid INT PRIMARY KEY  AUTO_INCREMENT,
    title  varchar(64),
    desc1  varchar(128),
    price  	decimal(10,2),
    pic   	varchar(128),
    href    varchar(128),
    seq_recommended  tinyint(4),
    seq_new_arrival  tinyint(4),
    seq_top_sale  tinyint(4),
    seq_top_sale_f4  tinyint(4)
);
INSERT INTO xm_index_products 
VALUES(NULL,null,null, null, 'img/index/xmad_15021010132973_BOkcp.jpg', 'product_details.html?lid=1',1,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米AI音箱','你指的拥有', '299.00', 'img/index/pms_1501057018.70015369!220x220.jpg', 'product_details.html?lid=1',2,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'米家床头灯','如梦如幻，多彩光世界', '249.00', 'img/index/pms_1508724951.09887337!220x220.jpg', 'product_details.html?lid=1',3,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小白智能摄像机大众','看得更清，看得更远', '109.00', 'img/index/pms_1508230324.1313855!220x220.jpg', 'product_details.html?lid=1',4,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'车载空气净化器(USB车充版)','高效净化车内空气', '449.00', 'img/index/pms_1506733860.3164711!220x220.jpg', 'product_details.html?lid=1',5,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,null,null, null, 'img/index/xmad_15076499921129_idgHC.jpg', 'product_details.html?lid=1',6,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'米家行车记录','晚上能拍清车牌的行车记录仪', '349.00', 'img/index/pms_1488338229.6467773!220x220.jpg', 'product_details.html?lid=1',7,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'九号平衡车','年轻人的酷玩具', '299.00', 'img/index/T1PXhgBbdT1RXrhCrK!220x220.jpg', 'product_details.html?lid=1',8,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'米家iHealth','爸妈上手就会用的智能血压计', '399.00', 'img/index/T1HQA_BCd_1RXrhCrK!220x220.jpg', 'product_details.html?lid=1',9,0,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米VR眼镜',null, '299.00', 'img/index/pms_1477985364.89714934!220x220.jpg', 'product_details.html?lid=1',10,0,0,0);

INSERT INTO xm_index_products 
VALUES(NULL,null,null, null, 'img/index/xmad_15021010132973_BOkcp.jpg', 'product_details.html?lid=1',0,1,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米电视4A 32','64位四核处理器／1GB+4GB大内存', '999.00', 'img/index/pms_1500287084.72131750!220x220.jpg', 'product_details.html?lid=1',0,2,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米电视4A 49英寸 标准版','2GB+8GB 大储存／全高清HDR', '249.00', 'img/index/pms_1503909218.70932288!220x220.png', 'product_details.html?lid=1',0,3,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米笔记本Pro 15.6寸','全金属强化机身FHD全贴膜屏', '5599.00', 'img/index/pms_1499138177.54329452!220x220.jpg', 'product_details.html?lid=1',0,4,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米笔记本Pro i7处理器','8GB内存+256GB', '5599.00', 'img/index/725a37e3-78b7-4298-8098-c40097bf179d-.png', 'product_details.html?lid=1',0,5,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,null,null, null, 'img/index/xmad_15053023729301_vkfBo.jpg', 'product_details.html?lid=1',6,6,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'米家恒温电水壶','水温控制，304不锈钢内胆', '199.00', 'img/index/pms_1465366178.11466342!220x220.jpg', 'product_details.html?lid=1',0,7,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'智米全直流变频空调','一级效能', '4399.00', 'img/index/pms_1508120469.3053874!220x220.jpg', 'product_details.html?lid=1',0,8,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米净水器','400加仑流量，纳水更多', '399.00', 'img/index/pms_1497801904.81994356!220x220.jpg', 'product_details.html?lid=1',0,9,0,0);
INSERT INTO xm_index_products 
VALUES(NULL,'小米VR眼镜',null, '299.00', 'img/index/pms_1477985364.89714934!220x220.jpg', 'product_details.html?lid=1',0,10,0,0);



SET NAMES UTF8;
USE xiaomi;
CREATE TABLE xm_user(
     uid INT PRIMARY KEY AUTO_INCREMENT,
     phone VARCHAR (16) ,
    upwd  VARCHAR (32) NOT NULL
   
);
INSERT INTO  xm_user VALUES(NULL,18362390861, 123456);
INSERT INTO  xm_user VALUES(NULL,18362390862, 111111);
INSERT INTO  xm_user VALUES(NULL,18362390860, 112233);
INSERT INTO  xm_user VALUES(NULL,18362390864, 334455);

SET NAMES UTF8;
USE xiaomi;
CREATE TABLE xm_banner(
   bid INT PRIMARY KEY AUTO_INCREMENT,
   img varchar(128),
   href varchar(128)
);
INSERT INTO xm_banner VALUES(null,"img/index/xmad_15084688880977_tjRVO.jpg","product.html?bid=1");
INSERT INTO xm_banner VALUES(null,"img/index/xmad_15087560386349_Uuhwi.jpg","product.html?bid=1");
INSERT INTO xm_banner VALUES(null,"img/index/xmad_15094571680872_tQHLk.jpg","product.html?bid=1");
INSERT INTO xm_banner VALUES(null,"img/index/xmad_15077714738381_erTKQ.jpg","product.html?bid=1");
INSERT INTO xm_banner VALUES(null,"img/index/xmad_15058906332794_gQDJX.jpg","product.html?bid=1");
INSERT INTO xm_banner VALUES(null,"img/index/xmad_150945679272_euVbH.jpg","product.html?bid=1");

