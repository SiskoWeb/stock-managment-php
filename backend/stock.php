<?php

require_once('conectDB.php');


// $pdoUS = $pdo;
// function createUser($user){
//   try {
//     //create user
//     $sqlUser = "INSERT INTO students (fname, lname)
//     VALUES ('$user', 'Doe')";
//     $pdo->exec($sqlUser);
    
//       echo "New record created successfully";
//     } catch(PDOException $e) {
//       echo  "<br>" . $e->getMessage();
//     }
// }


//get user
$sqlState = $pdo->query("SELECT * FROM students");
$students = $sqlState->fetchAll(PDO::FETCH_OBJ);
// $students = $sqlState->fetchAll(PDO::FETCH_ASSOC);
echo "<pre>";
print_r($students);
echo "</pre>";


if($_SERVER['REQUEST_METHOD'] == "POST"){
    $res = $_POST["user"];
    try {
      //create user
      $sqlUser = "INSERT INTO students (name,age)
      VALUES ('$res', 25)";
      $pdo->exec($sqlUser);
      
        echo "New record created successfully";
      } catch(PDOException $e) {
        echo  "<br>" . $e->getMessage();
      }
  session_start();
  $_SESSION['name']= "yassie";
  header("Location:home.php");
 
}



// query bad for securty

// to hanlde input secrurty
//htmlspecialchars tell them should input be html
// $name = trim(htmlspecialchars($_POST['name']))


// add 

$sql = $pdo->prepare("INSERT INTO students (null,name,age)")


// OR
// $sqlUser = "INSERT INTO students (name,age)
// VALUES ('$res', 25)";
// $pdo->exec($sqlUser);


///////////////

// update 

// $sql = "UPDATE students SET name='ZORO2' WHERE id=2";
// $pdo->query($sql)
// $pdo->exec($sql)


// Delete 

// $sql = "DELETE FROM students WHERE id=1";
// $pdo->exec($sql);
// $pdo->query($sql);


// Get 

// $sqlState = $pdo->query("SELECT * FROM students");
// $sqlState = $pdo->exec("SELECT * FROM students");
// $students = $sqlState->fetchAll(PDO::FETCH_OBJ);
// $students = $sqlState->fetchAll(PDO::FETCH_ASSOC);




?>