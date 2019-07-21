<?php
  session_start();
  if(!empty($_POST['orderWarehouse']) && !empty($_POST['orderDate'])) // &&
//     !empty($_POST['orderSender']) && !empty($_POST['orderReceiver']) && !empty($_POST['orderQuantity']) && !empty($_POST['orderWeight']) && !empty($_POST['orderTruckNumber']) && !empty($_POST['orderTrailerNumber']) && !empty($_POST['orderExDeclaration']) && !empty($_POST['orderTrDeclaration']) && !empty($_POST['orderComments']) && !empty($_POST['orderResponsibleWorker'])) 
     {
    include_once 'db.php';
    $orderWarehouse = mysqli_real_escape_string($mysqli, $_POST['orderWarehouse']);
    $orderDate = mysqli_real_escape_string($mysqli, $_POST['orderDate']);
    $orderSender = mysqli_real_escape_string($mysqli, $_POST['orderSender']);
    $orderReceiver = mysqli_real_escape_string($mysqli, $_POST['orderReceiver']);
    $orderQuantity = mysqli_real_escape_string($mysqli, $_POST['orderQuantity']);
    $orderWeight = mysqli_real_escape_string($mysqli, $_POST['orderWeight']);
    $orderTruckNumber = mysqli_real_escape_string($mysqli, $_POST['orderTruckNumber']);
    $orderTrailerNumber = mysqli_real_escape_string($mysqli, $_POST['orderTrailerNumber']);
    $orderExDeclaration = mysqli_real_escape_string($mysqli, $_POST['orderExDeclaration']);
    $orderTrDeclaration = mysqli_real_escape_string($mysqli, $_POST['orderTrDeclaration']);
    $orderComments = mysqli_real_escape_string($mysqli, $_POST['orderComments']);
    $orderResponsibleWorker = mysqli_real_escape_string($mysqli, $_POST['orderResponsibleWorker']);
    $orderDocuments = mysqli_real_escape_string($mysqli, $_POST['orderDocuments']);
    if($_SESSION['u_uid']) {
      $orderClient = mysqli_real_escape_string($mysqli, $_SESSION['u_uid']);
    } else $orderClient = mysqli_real_escape_string($mysqli, 'demo');
    
    
    mysqli_query($mysqli, "INSERT INTO orders (orderWarehouse, orderDate, orderSender, orderReceiver, orderQuantity, orderWeight, orderTruckNumber, orderTrailerNumber, orderExDeclaration, orderTrDeclaration, orderComments, orderResponsibleWorker, orderDocuments, orderClient) VALUES('$orderWarehouse', '$orderDate', '$orderSender', '$orderReceiver', '$orderQuantity', '$orderWeight', '$orderTruckNumber', '$orderTrailerNumber', '$orderExDeclaration', '$orderTrDeclaration', '$orderComments', '$orderResponsibleWorker', '$orderDocuments', '$orderClient')");
    
    header("Location: ../warehouse.php?=order=confirmed"); 
  } else {
    echo "<p>AJAJAJ</p>";
  }
?>