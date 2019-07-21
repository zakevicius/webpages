<?php
  session_start();
  include 'db.php';

  if($_SESSION['u_uid']) {
    $client = $_SESSION['u_uid'];
    if($client == "admin"){
      $sql = "SELECT * from orders";
    } else {
      $sql = "SELECT * from orders WHERE orderClient='$client'";
    }
  } else {
    $sql = "SELECT * from orders WHERE orderClient='demo'";
  };

  $result = $mysqli->query($sql);
  
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    $data[] = $row;
    }
    echo json_encode($data);
  } else {
    echo "Tuscia";
  }
 $mysqli->close();   
?>   