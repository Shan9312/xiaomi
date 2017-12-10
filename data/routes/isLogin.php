<?php
header('Content-type: application/json');
require("../controllers/user.php");
echo json_encode(isLogin());