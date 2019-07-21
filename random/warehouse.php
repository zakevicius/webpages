<?php
    session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=0.5">
    <link href="css/warehouse.css" rel="stylesheet" />
    <link href="css/forma.css" rel="stylesheet" />
    <title>Sandėlis</title>
</head>

<body>
    <div id="newOrderWindow"></div>
    <div id="signUpCont"></div>
    <div class="fullOrderCont">
        <div class="fullOrderWindow">
        </div>
    </div>
    <div class="container">
        <div class="contHeader">
            <div class="contHeaderLeft">
                <a href="index.html"><img src="img/randomLogo.jpg"/></a>
                <p>SANDĖLIS</p>
            </div>
            
            <?php
                if(isset($_SESSION['u_id'])) {
                    include("php/logOut.php");  
                } else {
                    include("php/logIn.php");
                }
            ?>
        </div>

        <?php
            if(isset($_SESSION['u_id'])) {
                echo "<div class='navBar'><a class='openNewOrder'>Naujas užsakymas</a>
                </div>";
            } else {
                echo "<div class='navBar'><button class='generateButton'>Generuoti užsakymus</button></div>";
            }
        include 'php/ordersTable.php';
        ?>
    </div>
    <div id="footer">
        <footer></footer>
    </div>
    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/allOrders.js"></script>
    <script src="js/warehouse.js"></script>
    <script src="js/newOrder.js"></script>
    
</body>
</html>