<?php
require("../controllers/user.php");
if(login()) 
  echo "true";
else 
  echo "false";