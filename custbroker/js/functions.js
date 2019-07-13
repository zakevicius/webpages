//heading images animation

var sliderImages = ["url(img/warehouse.jpg)", "url(img/customs.jpg)"];

var sliderCont = document.getElementsByClassName("sliderCont");
var sliderText = document.getElementsByClassName("sliderText");

sliderCont[0].addEventListener("load", changeBackground());
function changeBackground() {
    var i = 1;
    var interval = setInterval(change, 3000);
    function change() {
        sliderCont[0].style.backgroundImage = sliderImages[i];
        for (var j = 0; j < sliderText.length; j++) {
            if (j == i) {
                sliderText[j].style.display = "flex";
            } else {
                sliderText[j].style.display = "none";
            }
        }
        (i < sliderImages.length -1) ? i++ : i--;
    }
}

//navigation links 

var subnav = document.getElementsByClassName("subnav")[0];
document.getElementsByClassName("menuLinkLogistics")[0].onmouseover = function() {
    subnav.style.display = "flex";
}
document.getElementsByClassName("menuLinkLogistics")[0].onmouseleave = function() {
    subnav.style.display = "none";
}

var articles = document.getElementsByClassName("logisticsSliderText");
var customsLink = document.getElementsByClassName("menuSublinkCustoms")[0];
var nvsLink = document.getElementsByClassName("menuSublinkNVS")[0];
var insuranceLink = document.getElementsByClassName("menuSublinkInsurance")[0];
var warehouseLink = document.getElementsByClassName("menuSublinkWarehouse")[0];
var art = 0;

customsLink.onmousedown = function() {   
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    }
    var article = document.getElementsByClassName("logisticsSliderText customs")[0];
    article.style.display = "flex";
    art = 1;
    subnav.style.display = "none";
    }

nvsLink.onmousedown = function() {   
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    }
    var article = document.getElementsByClassName("logisticsSliderText NVS")[0];
    article.style.display = "flex";
    art = 2;
    subnav.style.display = "none";
    }

insuranceLink.onmousedown = function() {   
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    }
    var article = document.getElementsByClassName("logisticsSliderText insurance")[0];
    article.style.display = "flex";
    art = 3;
    subnav.style.display = "none";
    }

warehouseLink.onmousedown = function() {   
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    }
    var article = document.getElementsByClassName("logisticsSliderText warehouse")[0];
    article.style.display = "flex";
    art = 4;
    subnav.style.display = "none";
    }


//controls for article slider

function slideNext() {
    if (art < articles.length-1) {
        art++;
        for (var j = 0; j < articles.length; j++) {
            if (j == art) continue;
            articles[j].style.display = "none";
        }        
        articles[art].style.display = "flex";
    } else {
        art = 0;
        for (var j = 0; j < articles.length; j++) {
            if (j == art) continue;
            articles[j].style.display = "none";
        }        
        articles[art].style.display = "flex";        
    }
}

function slidePrev() {
    if (art > 0) {
        art--
        for (var j = 0; j < articles.length; j++) {
            if (j == art) continue;
            articles[j].style.display = "none";
        }
        
        articles[art].style.display = "flex";
    } else {
        art = articles.length-1;
        for (var j = 0; j < articles.length; j++) {
            if (j == art) continue;
            articles[j].style.display = "none";
        }        
        articles[art].style.display = "flex";
    }
}

document.getElementById("logistics").onmouseover = function() {
    document.getElementsByClassName("leftButton")[0].style.opacity = 0.2;
    document.getElementsByClassName("rightButton")[0].style.opacity = 0.2;
};

document.getElementById("logistics").onmouseleave = function() {
    document.getElementsByClassName("leftButton")[0].style.opacity = 0;
    document.getElementsByClassName("rightButton")[0].style.opacity = 0;
};


//displaying more info on articles


var expanded = [false, false, false, false, false, false, false];
var w = 0;
    var h = 0;
function displayMore(num) {    
    var elem = document.getElementsByClassName("buttonMore")
    [num].parentNode.childNodes[3];
    if (expanded[num]) {
        elem.style.color = "transparent"; 
        var intMin = setInterval(minimize, 10);
        document.getElementsByClassName("buttonMore")[num].innerHTML = "+";
        expanded[num] = false;
    } else {
        var intMax = setInterval(maximize, 10);
        elem.style.display = "flex"; 
        document.getElementsByClassName("buttonMore")[num].innerHTML = "-";
        expanded[num] = true;
    }
    function maximize() {
        elem.style.width = w + "%";
        w += 5;
        elem.style.height = h + "%";
        h += 2;
        if (w > 65) {
            clearInterval(intMax);
            elem.style.color = "inherit"; 
            elem.style.height = "auto";
        } 
    }
    function minimize() {
        elem.style.width = w + "%";
        w -= 5;
        elem.style.height = h + "%";
        h -= 2;
        if (w <= 0) {
            clearInterval(intMin);
            elem.style.display = "none";
        }
    }
}