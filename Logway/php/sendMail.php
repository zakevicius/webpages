<?php
(isset ($_POST['phone'])) ? $phone = trim($_POST['phone']) : $phone = 'unset';

if(!empty($_POST['name']) &&
   !empty($_POST['email']) &&
   !empty($_POST['message'])) {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "info@logway1.lt";
        $subject = "Nauja žinutė";
        $autorius = 'From: ' . $name . ', ' . $email;
        mail($to, $subject, $autorius, $message);
    }
};
?>
