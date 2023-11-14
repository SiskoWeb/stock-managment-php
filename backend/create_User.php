<?php
require_once 'Database.php';

// Create Database instance
$database = new Database();

// User data to be added
$userToAdd = [
    "userName" => "yassine",
    "password" => password_hash("sisko", PASSWORD_DEFAULT) // Use password_hash for secure password storage
];

// Prepare the SQL query
$query = "INSERT INTO user (userName, password) VALUES (?, ?)";

// Use a transaction to ensure atomicity
$database->executeQuery("START TRANSACTION");

try {
    // Execute the query with user data
    $params = [
        $userToAdd['userName'],
        $userToAdd['password']
    ];

    $database->executeQuery($query, $params);

    // Commit the transaction if the query is successful
    $database->executeQuery("COMMIT");

    echo "User added successfully.";
} catch (Exception $e) {
    // Rollback the transaction if the query fails
    $database->executeQuery("ROLLBACK");
    die("Error adding user: " . $e->getMessage());
}
?>
