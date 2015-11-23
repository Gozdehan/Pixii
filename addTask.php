<?php
  $dsn = 'mysql:dbname=gozdeflow, host=localhost';
  $user = 'root';
  $password = ' ';
     try{
     	$dbh = new PDO($dsn,$user,$password)
     	$sql = $dbh -> prepare("INSERT INTO general(name,description,color,responsible) VALUES(:name,:description,:color,:responsible)");

     }
     catch(PDOException $e){
     	echo 'Bağlantı kurulamadı:' . $e -> getMessage();
     }
?>