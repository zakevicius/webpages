var headingImages = [
    "img/wh1.jpg",
    "img/cargoShip.jpg",
    "img/cargoPlane.jpg",
    "img/cargoTruck.jpg",
    "img/cargoTrain.jpg",
    "img/team.jpg"
    ];

//intro animacija
$(".warehouse").animate({opacity: 1, right: 0}, 3000);
$(".ship").animate({opacity: 1, right: 0}, 2800);
$(".plane").animate({opacity: 1, right: 0}, 2600);
$(".truck").animate({opacity: 1, right: 0}, 2400);
$(".train").animate({opacity: 1, right: 0}, 2200);
$(".team").animate({opacity: 1, right: 0}, 2000);

//uzdaromas intro ir pateikiamas pagrindinis puslapis
function enterSite() {
    $("#introContainer").css("display", "none");
    $("#mainPage").css("display", "flex");
    window.scrollTo(0, 0);
    $(".cont_logo").animate({opacity: 0.7}, 2000);
    $("#mainContainer").animate({opacity: 1}, 2000);
    $(".cont_logo").css("background-image", "url(" + headingImages[0] + ")");
    var i = 1;
    changingBackground(i);
}

// headingo background animacija
function changingBackground(i) {
    $(".cont_logo").animate({opacity: 0.7}, 2000, "linear", function () {
        $(".cont_logo").animate({opacity: 0.7}, 5000, "linear", function () {
            $(".cont_logo").animate({opacity: 0}, 2000, "linear", function () {
                $(".cont_logo").css("background-image", "url(" + headingImages[i] + ")"); 
                if (i < headingImages.length - 1){
                    i++;
                } else {
                    i = 0;
                };
                changingBackground(i);    
            });
        });
    });
}

//atsirandantis formos iskleidimo mygtukas esant maziems ekranams
$(".formExpand").onload = clickMe();
function clickMe() {
    $(".formExpand").animate({opacity: 0.9}, 1000, function() {
        $(".formExpand").css("color", "white").css("background-color", "tomato");
        $(".formExpand").animate({opacity: 1}, 1000, function() {
            $(".formExpand").css("color", "tomato").css("background-color", "white");
            clickMe();
        });
    });
}

// pranesimas pateikiant forma
$("input.formSubmit").click(function() {
    if($(".formName").val() !== "" && $(".formEmail").val() !== "" && $(".formMessage").val !== "") {
        alert("Žinutė išsiųsta. Ačiū!");
    } else {  
        alert("Neįvesti visi duomenys");
    }
});

//iskleidziamas meniu dideliuose ekranuose
var expandNav = true;
$(".nav").click(function() {
    if (expandNav) {
        $(this).animate({'flex-basis': 700}, 100, function() {
            expandNav = false;
            $(this).children("a").css("display", "inline");
        });
    } else {
        $(this).children("a").css("display", "none");
        $(this).animate({'flex-basis': 200}, 100, function() {
            expandNav = true;
        });
    }
});

//iskleidziama forma esant mazesniems ekranams
var expandButton = true;
$(".asideButton").click(function() {
    if (expandButton) {
        expandButton = false;
        $(".asideSmall").css("display", "flex");
        window.scrollTo(0, 0);
    } else {
        $(".asideSmall").css("display", "none");
        expandButton = true;
    }
});

// iskleidziamas meniu esant mazesniems ekranams
var expandSmallMenu = true;
$(".menuSmall").click(function() {
    if (expandSmallMenu) {
        expandSmallMenu = false;
        $(".smallNavLinks").css("display", "flex");
        window.scrollTo(0, 0);
    } else {
        $(".smallNavLinks").css("display", "none");
        expandSmallMenu = true;
    }
});

// kas islaikytu normalias proporcijas sumazinus ekrana, pakeiciamas initial-scale
if (document.documentElement.clientWidth < 480) { 
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=0.6");
}

// paspauds mygtukus ir padidinus ekrana susidubliuoja formos ir nuorodos. Sitas kodas isprendzia problema
$(window).on('resize', function(){
    if ($(window).width() >= 1130) {
        $(".asideSmall").css("display", "none");
        expandButton = true;
        $(".smallNavLinks").css("display", "none");
        expandSmallMenu = true;
    }  
});

// paspaudus nuoroda uzsidaro menu
$(".smallNavLinks a").click(function() {
    $(".smallNavLinks").css("display", "none");
    expandSmallMenu = true;
});


//menu scrolina kartu su ekranu
$(window).on('scroll', function(){
    $(".smallNavLinks").css("display", "none");
    expandSmallMenu = true;
});

//darbuotoju kontaktai, duomenys ir korteliu atspausdinimas
var workers = [
    {image: "img/profileDirector.jpg", division: "Direktorius", name: "Vardas", surname: "Pavardė", phone: "+37060000001", email: "boss@random.lt"},
    {image: "img/profileAir.jpg", division: "Oras", name: "Vardas", surname: "Pavardė", phone: "+37060000002", email: "air@random.lt"},
    {image: "img/profileSea.jpg", division: "Jūra", name: "Vardas", surname: "Pavardė", phone: "+37060000003", email: "sea@random.lt"},
    {image: "img/profileLand.jpg", division: "Žemė", name: "Vardas", surname: "Pavardė", phone: "+37060000004", email: "land@random.lt"}
    ];

for (var i = 0; i < workers.length; i++) {
    var div = $("<div>").addClass("card")
    $("#contacts").append(div);
    var div1 = $("<div>");
    $(div).append(div1);
    var img = $("<img>").attr("src", workers[i].image);
    div1.append(img);
    var div2 = $("<div>");
    div.append(div2);
    div2.html(workers[i].division);
    var div3 = $("<div>");
    div.append(div3);
    div3.html(workers[i].name + " " + workers[i].surname);
    var div4 = $("<div>");
    div.append(div4);
    var phone = $("<a>").attr("href", "tel:" + workers[i].phone);
    div4.append(phone);
    phone.html(workers[i].phone);
    var div5 = $("<div>");
    div.append(div5);
    var email = $("<a>").attr("href", "mailto:" + workers[i].email);
    div5.append(email);
    email.html(workers[i].email);
}

//informacija footeriui 
var date = new Date();
$("footer").html("&copy 2018-" + date.getFullYear() + " by Random");