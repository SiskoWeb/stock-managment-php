<?php
require_once 'Database.php';

// Create Database instance
$database = new Database();

// User data to be added
$userToAdd = [
    "userName" => "yassine",
    "password" => "siskoweb"
];

// Prepare the SQL query
$query = "INSERT INTO users (userName, password) VALUES (?, ?)";



try {
    
    // Execute the query with user data
    $params = [
        $userToAdd['userName'],
        $userToAdd['password']
    ];
   
    $database->executeQuery($query, $params);



    echo "User added successfully.";
} catch (Exception $e) {
    // Rollback the transaction if the query fails
    $database->executeQuery("ROLLBACK");
    die("Error adding user: " . $e->getMessage());
}
?>
