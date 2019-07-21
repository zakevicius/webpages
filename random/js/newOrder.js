// duomenys naudojami formos sukurimui
var formElements = [
    {id: "Data:", class: "row", name: "orderDate", type: "date"},
    {id: "Siuntėjas:", class: "row", name: "orderSender", type: "text"},
    {id: "Gavėjas:", class: "row", name: "orderReceiver", type: "text"},
    {id: "Vietų sk.:", class: "row", name: "orderQuantity", type: "number"},
    {id: "Svoris, kg:", class: "row", name: "orderWeight", type: "number"},
    {id: "Vilkiko nr.:", class: "row", name: "orderTruckNumber", type: "text"},
    {id: "Priekabos nr.:", class: "row", name: "orderTrailerNumber", type: "text"},
    {id: "EX:", class: "row", name: "orderExDeclaration", type: "text"},
    {id: "T1:", class: "row", name: "orderTrDeclaration", type: "text"}
    ];
var sandeliai = [
    {name: "Vilnius", value: "Vilnius"},
    {name: "Kaunas", value: "Kaunas"},
    {name: "Terminalas", value: "terminalas"}
    ];
var darbuotojai = ["Deklarantas", "Sandėlininkas", "Priėmėjas", "Vadybininkas"];

// aktyvuojamas uzsakymo langas
var openOrderWindow = true;
$(".openNewOrder").click(function() {
    if (openOrderWindow = true) {
        newOrderWindow();
        openOrderWindow = false;
    }
});
// uzdaromas uzsakymo langas
function closeNewOrderWindow() {
    $("#newOrderWindow").css("display", "none");
    openOrderWindow = true;  
}

//atvaizduojamas uzsakymo langas
function newOrderWindow() {
    $("#newOrderWindow").empty();
    $("#newOrderWindow").css("display", "flex");
    var buttonClose = $("<button type='button' onclick=closeNewOrderWindow()>").addClass("closeWindow").html("X");
    var newOrderCont = $("<div>").addClass("newOrderCont")
    $("#newOrderWindow").append(newOrderCont);
    var form = $("<form>");
    newOrderCont.append(form).append(buttonClose);
    form.attr("action", "php/submitOrder.php").attr("method", "POST");
    var divMain = $("<div>").addClass("fieldSetCont");
    form.append(divMain);
    var fieldset = $("<fieldset>");
    divMain.append(fieldset);
    var legend = $("<legend>");
    fieldset.append(legend);
    var divOrder = $("<div>");
    legend.append(divOrder);
    divOrder.html("Užsakymas Nr.");
    var inputNumber = $("<input name='orderNumber' type='text'>");
    legend.append(inputNumber);
    var divWarehouse = $("<div>").addClass("row");
    fieldset.append(divWarehouse);
    var divWarehouse1 = $("<div>");
    divWarehouse.append(divWarehouse1);
    divWarehouse1.html("Sandėlis:");
    var divWarehouse2 = $("<div>");
    divWarehouse.append(divWarehouse2);
    var select = $("<select name='orderWarehouse' size='1'>");
    divWarehouse2.append(select);
// ciklas atvaizduoti visu sandeliu pasirinkima
    for (var i = 0; i<sandeliai.length; i++) {
        var option = $("<option>").attr("value", sandeliai[i].value).html(sandeliai[i].name);
        select.append(option);
    }
// ciklas atvaizduoti panasius ivedimo laukus
    for (var i = 0; i<formElements.length; i++) {
        var divRow = $("<div>").addClass(formElements[i].class);
        fieldset.append(divRow);
        var divRow1 = $("<div>").html(formElements[i].id);
        divRow.append(divRow1);
        var divRow2 = $("<div>");
        divRow.append(divRow2);
        var inputName = $("<input name='" + formElements[i].name + "' type='" + formElements[i].type + "'>");
        divRow2.append(inputName);
    }
    var divComments = $("<div>").addClass("row");
    fieldset.append(divComments);
    var divComments1 = $("<div>").html("Pastabos:");
    divComments.append(divComments1);
    var divComments2= $("<div>");
    divComments.append(divComments2);
    var inputComments = $("<textarea name='orderComments' type='text' rows='7'>").addClass("input");
    divComments2.append(inputComments);
    var divWorker = $("<div>").addClass("row");
    fieldset.append(divWorker);
    var divWorker1 = $("<div>").html("Darbuotojas:");
    divWorker.append(divWorker1);
    var divWorker2= $("<div>");
    divWorker.append(divWorker2);
    var inputList = $("<input list='darbuotojai' name='orderResponsibleWorker' class='input'>");
    divWorker2.append(inputList);
    var datalist = $("<datalist id='darbuotojai'>");
    divWorker2.append(datalist);
// ciklas atvaizduoti visus darbuotojus
    for (var i = 0; i<darbuotojai.length; i++) {         
        var option = $("<option>").attr("value", darbuotojai[i]);
        datalist.append(option);
    }
//    var divDocs = $("<div>").addClass("row");
//    fieldset.append(divDocs);
//    var divDocs1 = $("<div>").html("Dokumentai:");
//    divDocs.append(divDocs1);
//    var divDocs2= $("<div>");
//    divDocs.append(divDocs2);
//    var inputFile = $("<input type='file' name='orderDocuments'>");
//    var buttonFile = $("<button class='documentsButton' type='button' value='Prisegti' onclick='upload.php'>").html("Prisegti");
//    divDocs2.append(inputFile).append(buttonFile);
    var divButtons = $("<div>").addClass("bottomButtons");
    divMain.append(divButtons);
    var inputConfirm = $("<input type='submit' name='submit' value='Įvesti'>");
    var inputReset = $("<input type='reset' value='Iš naujo'>");
    divButtons.append(inputConfirm, inputReset);

    openOrderWindow = false;
}