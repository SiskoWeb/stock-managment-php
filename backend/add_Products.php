<?php
require_once 'Database.php';


// $dbHost = "localhost";
// $dbName = "product_managment";
// $dbUser = "root";
// $dbPassword = "";

// Create Database instance
$database = new Database();

// zrray of products to be added
$productsToAdd = [
    [
        "name" => "Product 1",
        "price" => 19.99,
        "description" => "Description 1",
        "image_url" => "image1.jpg",
        "category" => "Category 1",
        "quantity" => 100,
        "min_stock_quantity" => 10,
    ],
    [
        "name" => "Product 2",
        "price" => 29.99,
        "description" => "Description 2",
        "image_url" => "image2.jpg",
        "category" => "Category 2",
        "quantity" => 50,
        "min_stock_quantity" => 5,
    ],
    // Add more products as needed
];

// Prepare the SQL query
$query = "INSERT INTO products (name, price, description, image_url, category, quantity, min_stock_quantity) VALUES (?, ?, ?, ?, ?, ?, ?)";

// Use a transaction to ensure atomicity
$database->executeQuery("START TRANSACTION");

try {
    // Loop through each product and execute the query
    foreach ($productsToAdd as $product) {
        $params = [
            $product['name'],
            $product['price'],
            $product['description'],
            $product['image_url'],
            $product['category'],
            $product['quantity'],
            $product['min_stock_quantity']
        ];

        $database->executeQuery($query, $params);
    }

    // Commit the transaction if all queries are successful
    $database->executeQuery("COMMIT");

    echo "Products added successfully.";
} catch (Exception $e) {
    // Rollback the transaction if any query fails
    $database->executeQuery("ROLLBACK");
    die("Error adding products: " . $e->getMessage());
}
?>
