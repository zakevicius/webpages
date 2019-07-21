<?php
  if(isset($_POST['submit'])) {
    include_once 'db.php';
    $first = mysqli_real_escape_string($mysqli, $_POST['first']);
    $last = mysqli_real_escape_string($mysqli, $_POST['last']);
    $email = mysqli_real_escape_string($mysqli, $_POST['email']);
    $uid = mysqli_real_escape_string($mysqli, $_POST['uid']);
    $pwd = mysqli_real_escape_string($mysqli, $_POST['pwd']);
    if(empty($first) || empty($last) || empty($email) || empty($uid) || empty($pwd)) {
      header("Location: ../warehouse.php?signup=invalid"); 
      $message = "invalid"; 
      exit();
    } else {
      if(!preg_match("/^[a-žA-Ž]*$/", $first) || !preg_match("/^[a-žA-Ž]*$/", $last)) {
        header("Location: ../warehouse.php?signup=invalid");  
        $message = "invalidName"; 
        exit();
      } else {
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          header("Location: ../warehouse.php?signup=invalidemail");  
          $message = "invalidEmail"; 
          exit();
        } else {
          $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
          $result = mysqli_query($mysqli, $sql);
          $result_check = mysqli_num_rows($result);
          if($result_check > 0) {
            header("Location: ../warehouse.php?signup=usertaken");  
            $message = "invalidId"; 
            exit();
          } else {
            $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (user_first, user_last, user_email, user_uid, user_pwd) VALUES('$first', '$last', '$email', '$uid', '$hashedPwd');";
            mysqli_query($mysqli, $sql);
            header("Location: ../warehouse.php?signup=success");  
            $message = "Success!"; 
            exit();
          }
        }
      }
    }
  } else {
    header("Location: ../warehouse.php?nieko");
    $message = "empty"; 
    exit();
  }
?>