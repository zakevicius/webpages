<?php
  define('DB_SERVER', 'zhako.lt');
  define('DB_USER', 'zhako_random');
  define('DB_PASSWORD', 'Ki5Ki5Ki5');
  define('DB_NAME', 'zhako_random');

  $mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);

  if($mysqli->connect_error) {
    echo "Atsiprašome, svetainė susidūrė su problema <br>";
    echo 'Klaida: ' . $mysqli->connect_error . '<br>';
    exit();
  }
?>