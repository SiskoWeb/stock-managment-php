<?php

class Database
{
    //variable
    private $host;
    private $dbname;
    private $user;
    private $password;
    private $pdo;

    public function __construct($host = "localhost", $dbname = "product_management", $user = "root", $password = "yassine")
    {
        $this->host = $host;
        $this->dbname = $dbname;
        $this->user = $user;
        $this->password = $password;
        //after calling class and passing atrb conect to db automaticly
        $this->connect();
    }


    // this function work automaticly when we inhert class
    private function connect()
    {
        try {
            $this->pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {// handle error
            die("Connection failed: " . $e->getMessage());
        }
    }
// this function required to pass query select or insert .. & values 
    public function executeQuery($query, $params = [])
    {
        try {
            $stmt = $this->pdo->prepare($query);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {// handle error
            die("Query failed: " . $e->getMessage());
        }
    }

    
    public function get_Products()
    {
        $query = "SELECT * FROM products";


        try {
            $stmt = $this->pdo->prepare($query);


            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        } catch (PDOException $e) {
            die("Query failed: " . $e->getMessage());
        }
    }

    public function get_user($user)
    {
       

        try {
            $stmt = $this->pdo->prepare("SELECT * FROM users WHERE userName = :userName");
            $stmt->execute(['userName' => $user]); 
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            return $user;
         

        } catch (PDOException $e) {
            die("Query failed: " . $e->getMessage());
        }
    }
   
    public function get_Category()
    {
        try {

            //keyword 'DISTINCT' to bring only unique category
            $stmt = $this->pdo->prepare("SELECT DISTINCT category FROM products");
    
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result;
    
        } catch (PDOException $e) {
            die("Query failed: " . $e->getMessage());
        }
    }
    

}
?>





