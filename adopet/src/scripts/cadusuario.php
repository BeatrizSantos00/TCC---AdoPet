<?php
  // receive data from mobile app
  $json = file_get_contents('php://input');
    // Converts it into a PHP objectalwslAA
  $data = json_decode($json);
  // data for connection
  $servername = "localhost";
	$username = "id20812456_adminadopet";
	$password = "Adopet.123";
	$dbname = "id20812456_adopet";
	// create array for return result script
	$response = [];
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	mysqli_set_charset($conn, "utf8");
	// Check connection
	if ($conn->connect_error) {
	    $response[] = ['msg' => "error ".$conn->connect_error];
	}
	else{
        // define sql for input data table
    	$sql = "insert into Usuarios (id_usuario, nome, email, senha) values ('".$data->id_usuario."','".$data->nome."','".$data->email."','".$data->senha."')";
    	// run query
    	$result = $conn->query($sql);   	
    	// if ok		
    	if ($result) {
    	    $response[] = ['msg' => "Informações inseridas com sucesso"];
    	}			
    	 else {
    	      $response[] = ['msg' => "Erro ao inserir na tabela!".$sql];
    	}
	}	
	$conn->close();
	echo '{"informacoes":'.html_entity_decode(json_encode($response)).'}';
	

?> 