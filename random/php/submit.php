<?php
 (isset ($_POST['phone'])) ? $phone = trim($_POST['phone']) : $phone = 'unset';

  if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    include_once 'db.php';
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = htmlspecialchars(trim($_POST['message']));
    mysqli_query($mysqli, "INSERT INTO lankytojai (name, email, phone, message) VALUES('$name', '$email', '$phone', '$message')");
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $from = "zhako@zhako.lt";
      $to = "m.zakevicius@gmail.com";
      $subject = "Nauja žinutė";
      $autorius = 'From: ' . $name . ', ' . $email;
      mail($to, $subject, $autorius, $message, $from);
      echo "<script>window.close();</script>";
    } else {
      echo "<script>window.close();</script>";
    }
  } else {
    echo "<script>window.close();</script>";
  }
?>