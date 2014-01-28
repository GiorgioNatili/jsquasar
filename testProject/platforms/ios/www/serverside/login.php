<?php
	
	header("Access-Control-Allow-Origin: *");

	$post = file_get_contents("php://input");
	$json = json_decode($post);

	// phpinfo();
		
	$username = $json->username;
	$password = $json->password;

	$result;

	if($username == 'pippo' && $password == 'pippo'){

		$result = array('success' => true);

	}else{

		$result = array('success' => false);
	
	}	

	$jsonstring = json_encode($result);
	echo($jsonstring);
	

?>
