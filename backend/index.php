<?php

require_once 'Database.php';

// Database connection parameters
$dbHost = "your_database_host";
$dbName = "your_database_name";
$dbUser = "your_database_user";
$dbPassword = "your_database_password";

// Create Database instance
$database = new Database($dbHost, $dbName, $dbUser, $dbPassword);


$stmt = $conn->prepare(
        "SELECT * FROM fetch_record");
$stmt->execute();
$users = $stmt->fetchAll();
?>