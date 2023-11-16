
CREATE DATABASE product_management;
USE product_management;

 CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    category VARCHAR(50),
    quantity INT,
    min_stock_quantity INT
); 

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    passowrd VARCHAR(255) NOT NULL
); 
