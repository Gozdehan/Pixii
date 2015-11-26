<?php
  $dsn = 'mysql:dbname=gozdeflow, host=localhost';
  $user = 'root';
  $password = ' ';
     try{
     	$dbh = new PDO($dsn,$user,$password);
     	$sql = $dbh->prepare("INSERT INTO general(name,description,color,responsible) VALUES(:name,:description,:color,:responsible)");

      $sql->execute(array(':name' => $_POST['name'] , ':description' => $_POST['desc'], ':color' => $_POST['color'], ':responsible' => $_POST['responsible']));

      echo "tamamlandı";
     }
     catch(PDOException $e){
     	echo 'Bağlantı kurulamadı:' . $e -> getMessage();
     }
?>