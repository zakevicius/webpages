<?php

if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    require_once 'sendMail.php';
    if($_GET['lang'] === 'RU'){
    echo "<p class='message'>Сообщение выслано</p>";
  } else if ($_GET['lang'] === 'EN') {
    echo "<p class='message'>Message sent</p>";
  } else {
    echo "<p class='message'>Ačiū, žinutė išsiųsta</p>";
  }
} else {
    echo "<p class='message warning'>Ne visi duomenys įvesti</p>";
}
