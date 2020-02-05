<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="UAB „Logway1“ – Muitinės tarpininkavimas: eksporto, importo, tranzito, laikinojo saugojimo procedūros. Sandėliavimo paslaugos." />
    <meta name="keywords" content="Tarpininkai, muitinė, muitinės, sandėlio, deklarantai, sandėlis, sandėliavimas, customs, broker, warehouse, deklaravimas, importas, eksportas, tranzitas, EX, IM, T1, BDK" />
    <meta name="author" content="Marius Žakevičius" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel='shortcut icon' type='image/x-icon' href='img/favicon.png' />
    <title>Logway1</title>
</head>

<body>
    <div id="navigation"></div>
    <div id="languages">
        <a href="?lang=LT"><img src="img/flag_lt.jpg" alt="LT"></a>
        <a href="?lang=EN"><img src="img/flag_uk.jpg" alt="EN"></a>
        <a href="?lang=RU"><img src="img/flag_ru.jpg" alt="RU"></a>
    </div>
    <div id="headerCont">
        <div id="logo">
            <img alt="logo" src="img/img_red/logo_big_white2.jpg">
        </div>
    </div>
    <div id="mainCont">
        <div id="bodyCont">
            <div class="content">
                <div class="section customs">
                    <div class="img">
                        <div class="imgSkew"></div>
                    </div>
                    <ul></ul>
                </div>
                <div class="section warehouse">
                    <ul></ul>
                    <div class="img">
                        <div class="imgSkew"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="form">
            <div class='contactUs'></div>
            <form method='POST' action='#form'>
                <?php if (isset($_POST['message'])) {
                    include_once 'php/submitForm.php';
                }
                ?>

            </form>
        </div>
        <div id="contacts">
            <div class="top workers"></div>
            <div class="bottom">
                <div class="bottom left">
                    <div class="workHours">
                        <table id="workDays">
                        </table>
                    </div>
                    <div class="address"></div>
                </div>
                <div class="bottom right map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.5350679650082!2d25.16047825786487!3d54.805713939249294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd8f910d7083ed%3A0x12ce8e4783227672!2sGalin%C4%97s+g.+1%2C+Galin%C4%97+14247!5e0!3m2!1slt!2slt!4v1557135946429!5m2!1slt!2slt" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <footer>
            <div id="copyright"></div>
        </footer>
    </div>
</body>
<script src="js/functions.js"></script>
<script src="js/content.js"></script>

</html>