<?php
require_once 'Database.php';

// Create Database instance
$database = new Database();

$api = $_SERVER['REQUEST_METHOD'];

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');



if ($api === 'POST') {

    // $userName = htmlspecialchars($_POST['userName']);
    // $password = htmlspecialchars($_POST['password']);

    //this for accepte json 
    $input = json_decode(file_get_contents("php://input"), true);

    $userName = htmlspecialchars($input['userName']);
    $password = htmlspecialchars($input['password']);
    //check  inputs exist
    if(!empty($userName) && !empty($password) ){
        
        // get user info
        $user = $database->get_user($userName);

        // Check if the user exists and the password matches
        if ($user && $user['password'] === $password) {
            http_response_code(200);
            echo json_encode($user);
        } else {
            http_response_code(401);
            echo json_encode(["error" => '401']);
        }
        
    }else{
        http_response_code(501);
        echo json_encode(["error" => "Unsupported request method"]);
    }

} else {
    // Handle other request methods
    echo json_encode(["error" => '501']);
}
?>
