<?php
    session_start();
    include 'db.php';
    if($_POST['remove'] != 0) {
        $remove = $_POST["remove"];
        $sql = "DELETE FROM orders WHERE orderNumber='$remove'";
    }

    if ($mysqli->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

    $mysqli->close();   
?>  