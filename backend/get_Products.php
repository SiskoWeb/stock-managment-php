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
    // Handle GET request

    // Check if a category parameter is passed
    $category = isset($_GET['category']) ? $_GET['category'] : null;

    // Get products based on the category (passing it to get_Products method)
    // $result = $database->get_Products($category);
    $result = $database->get_Products();

    echo json_encode($result);
} elseif ($api === 'POST') {
    // Handle POST request
    echo "This is a POST request.";
} else {
    // Handle other request methods
    echo "Unsupported request method.";
}
?>
