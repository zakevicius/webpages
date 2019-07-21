var orders = [];

var orderLT = {
    orderNumber: "Užsakymo nr.",
    orderWarehouse: "Sandėlis",
    orderDate: "Atvykimo data",
    orderClient: "Klientas",
    orderSender: "Siuntėjas",
    orderReceiver: "Gavėjas",
    orderQuantity: "Vietų sk.",
    orderWeight: "Bruto, kg",
    orderTruckNumber: "Vilkikas",
    orderTrailerNumber: "Priekaba",
    orderExDeclaration: "EX",
    orderTrDeclaration: "T1",
    orderComments: "Komentarai",
    orderResponsibleWorker: "Atsakingas Darbuotojas",
    orderDocuments: "Dokumentai"
};

//mirgsintis mygtukas
$(".generateButton").onload = clickMe();

function clickMe() {
    $(".generateButton").animate({opacity: 0.9}, 1000, function() {
        $(this).css("color", "white").css("background-color", "tomato");
        $(this).animate({opacity: 1}, 1000, function() {
            $(this).css("color", "tomato").css("background-color", "white");
            clickMe();
        });
    });
}

// random uzsakymu generavimas ir atvaizdavimas
$(".generateButton").on("click", function() {
    orders = [];
    var total = prompt("Kiek užsakymų rodyti?");
    var j, order;
    for (j = 0; j < total; j++) {
        order = j + 1;
        orders[j] = {};
        orders[j].orderNumber = order;
        orders[j].orderWarehouse = "Sandelis " + order;
        orders[j].orderDate = "2018.01.0" + order;
        orders[j].orderClient = "Klientas " + order;
        orders[j].orderSender = "Siuntėjas " + order;
        orders[j].orderReceiver = "Gavėjas " + order;
        orders[j].orderQuantity = "" + order + "" + order;
        orders[j].orderWeight = "" + order + "" + order + "" + order;
        orders[j].orderTruckNumber = "ABC" + order;
        orders[j].orderTrailerNumber = "DE " + order;
        orders[j].orderExDeclaration = "18LTVG2000EK00000" + order;
        orders[j].orderTrDeclaration = "-";
        orders[j].orderComments = "Komentaras apie užsakymą nr. " + order;
        orders[j].orderResponsibleWorker = "Deklarantas" + order;
        orders[j].orderDocuments = "Dokumentai" + order;
    }
    $(".orderRow").remove();
// atvaizduojami visi uzsakymai
    var i;
    for (i = 0; i < orders.length; i++) {
        var tr = $("<tr>");
        var enter = $("<td>");
        var td1 = $("<td>");
        var td2 = $("<td>");
        var td3 = $("<td>");
        var td4 = $("<td>");
        var td5 = $("<td>");
        var td6 = $("<td>");
        var td7 = $("<td>");
        var td8 = $("<td>");
        $("table").append(tr);
        tr.append(enter);
//sukuriamas unikalus mygtukas pilno užsakymo atvaizdavimui
        enter.append("<button value='" + orders[i].orderNumber + " '  class='fullOrderButton'>Daugiau");
        tr.append(td1).addClass("orderRow");
        td1.append(orders[i].orderNumber);
        tr.append(td2);
        td2.append(orders[i].orderDate);
        tr.append(td3);
        td3.append(orders[i].orderClient);
        tr.append(td4);
        td4.append(orders[i].orderSender);
        tr.append(td5);
        td5.append(orders[i].orderReceiver);
        tr.append(td6);
        td6.append(orders[i].orderQuantity);
        tr.append(td7);
        td7.append(orders[i].orderWeight);
        tr.append(td8);
        td8.append(orders[i].orderTruckNumber + " / " + orders[i].orderTrailerNumber);
    }
//generuoja pilna uzsakyma issokanciam lange mygtuko paspaudimu
    $(".fullOrderButton").on("click", function() {
        var order = $(this).val() - 1;
        fullOrder(order);
    });
//stilistiniai priedai sugeneruotai lentelei ir mygtukams
    $("tr").hover(function() {
        $(this).css("opacity", 0.5);
    });
    $("tr").mouseleave(function() {
        $(this).css("opacity", 1);
    });
    $(".fullOrderButton").hover(function() {
        $(this).css("background-color", "white").css("color", "tomato");
    });
    $(".fullOrderButton").mouseleave(function() {
        $(this).css("background-color", "tomato").css("color", "white");
    });
});

//pilno užsakymo atvaizdavimas iššokančiam lange
function fullOrder(order) {
    $(".fullOrderCont").css("display", "flex");
    var table = $("<table>");
    var fullOrder = orders[order];
    $(".fullOrderWindow").append(table);
    Object.keys(fullOrder).forEach(function(item) {
        var tr = $("<tr>");
        table.append(tr);
        var td1 = $("<td>");
        tr.append(td1);
        td1.append(orderLT[item]);
        var td2 = $("<td>");
        tr.append(td2);
        td2.append(fullOrder[item]);
    });
}

$(".fullOrderCont").on("click", function() {
    $(".fullOrderCont").css("display", "none");
    $(".fullOrderCont table").remove();
});

//naujo vartotojo sukurimo langas
var openSignUpWindow = true;
$(".signUp").click(function() {
    if (openSignUpWindow = true) {
        newSignUpWindow();
        openSignUpWindow = false;
    }
});

function closeSignUpWindow() {
    $("#signUpCont").css("display", "none");
    openSignUpWindow = true;  
}

function newSignUpWindow() {
    $("#signUpCont").empty();
    $("#signUpCont").css("display", "flex");
    var buttonCloseS = $("<button type='button' onclick=closeSignUpWindow()>").addClass("closeWindow").html("X");  
    var formS = $("<form>").attr("action", "php/signUp.php").attr("target", "_self").attr("method", "post");
    var divS1 = $("<div>").addClass("fieldSetCont");
    $("#signUpCont").append(formS);
    $("#signUpCont").append(buttonCloseS);
    formS.append(divS1);
    var fieldsetS = $("<fieldset>");
    var legendS = $("<legend>");
    var divL = $("<div>");
    divS1.append(fieldsetS);
    fieldsetS.append(legendS);
    legendS.append(divL);
    divL.html("Naujo vartotojo registracija");
    var rowTitle = ["Vardas:", "Pavardė:", "El. paštas:", "Vartotojo vardas:", "Slaptažodis:"];
    var inputName = ["first", "last", "email", "uid", "pwd"];
    var inputType = ["text", "text", "email", "text", "password"];
    var inputPlaceholder = ["Jūsų vardas", "Jūsų pavardė", "El. paštas", "User ID", "password"];
    for (var i = 0; i<rowTitle.length; i++) {
        var divF1 = $("<div>").addClass("row");
        var divR1 = $("<div>").html(rowTitle[i]);
        var divR2 = $("<div>");
        var inputS1 = $("<input>").attr("name", inputName[i]).attr("type", inputType[i]).attr("placeholder", inputPlaceholder[i]);
        fieldsetS.append(divF1);
        divF1.append(divR1);
        divF1.append(divR2);
        divR2.append(inputS1);
    }
    var divButtons = $("<div>").addClass("bottomButtons");
    divS1.append(divButtons);
    var inputS1 = $("<input>").attr("type", "submit").attr("value", "Įvesti").attr("name", "submit");
    var inputS2 = $("<input>").attr("type", "reset").attr("value", "Iš naujo");
    divButtons.append(inputS1).append(inputS2);    
}

//informacija footeriui 
var date = new Date();
$("footer").html("&copy 2018-" + date.getFullYear() + " by Random");