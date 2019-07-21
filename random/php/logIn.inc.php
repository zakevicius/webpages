<?php
  session_start();
  if(isset($_POST['submit'])) {
    include_once'db.php';
    $uid = mysqli_real_escape_string($mysqli, $_POST['uid']);
    $pwd = mysqli_real_escape_string($mysqli, $_POST['pwd']);
    if(empty($uid) || empty($pwd)) {
      header("Location: ../warehouse.php?=login=empty"); 
      $message = "invalid"; 
      exit();
    } else {
      $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
      $result = mysqli_query($mysqli, $sql);
      $result_check = mysqli_num_rows($result);
      if($result_check < 1) {
        header("Location: ../warehouse.php?=login=klaidaname");  
        exit();
      } else {
        if($row = mysqli_fetch_assoc($result)) {
          $hashedPwdCheck = password_verify($pwd, $row['user_pwd']);
          if($hashedPwdCheck == false) {
            header("Location: ../warehouse.php?=login=klaidapass"); 
            exit();
          } elseif($hashedPwdCheck == true) {
            $_SESSION['u_id'] = $row['user_id'];
            $_SESSION['u_first'] = $row['user_first'];
            $_SESSION['u_last'] = $row['user_last'];
            $_SESSION['u_email'] = $row['user_email'];
            $_SESSION['u_uid'] = $row['user_uid'];
            header("Location: ../warehouse.php?=login=success"); 
            exit();
          }
        }
      }
    }
  } else {
    header("Location: ../warehouse.php?=login=error");  
    $message = "Login Error";
    exit();
  }

?>