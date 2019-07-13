<?php

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    require_once 'sendMail.php';
    echo "<p class='message'>Ačiū, žinutė išsiųsta</p>";
} else {
    echo "<p class='message warning'>Ne visi duomenys įvesti</p>";
}
