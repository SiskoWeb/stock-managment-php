<?php
require_once 'Database.php';

// Create Database instance
$database = new Database();

$api = $_SERVER['REQUEST_METHOD'];

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

if ($api === 'GET') {
    
    $result = $database->get_Category();
    http_response_code(200);
    echo json_encode($result);
} elseif ($api === 'POST') {
    // Handle POST request
    echo "This is a POST request.";
} else {
    // Handle other request methods
    http_response_code(401);
    echo json_encode(["error" => "problem in server"]);
}
?>
