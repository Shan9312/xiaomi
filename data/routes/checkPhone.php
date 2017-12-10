<?php
header("Content-Type:application/json");
require("../controllers/user.php");
if(checkPhone()) 
 echo "true";
else 
 echo "false";