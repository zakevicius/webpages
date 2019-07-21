var duomenys = {
    dataType: "json",
    url: "php/allOrders.inc.php",
};

$.ajax(duomenys).done(function(orders) {
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
        var remove = $("<td>");
        $("table").append(tr);
        tr.append(enter);
//sukuriamas unikalus mygtukas pilno užsakymo atvaizdavimui
        enter.append("<button value=" + i + " class='fullOrderButton'>Daugiau");
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
        tr.append(remove);
        remove.append("<button value=" + (orders[i].orderNumber) + " class='removeOrderButton'>Pašalinti");
        console.log($('.removeOrderButton').attr('value'));
    }

            
    $('.removeOrderButton').on("click", function() {
        $.ajax({
            type: 'POST',
            url: 'php/removeOrder.php',
            data: {remove: $(this).attr('value')},
            success:function() {
                alert('Užsakymas ištrintas');
                location.reload();
            }
        });
    });
   
//generuoja pilna uzsakyma issokanciam lange mygtuko paspaudimu
    $(".fullOrderButton").on("click", function() {
        var order = $(this).val();
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

//pilno užsakymo atvaizdavimas iššokančiam lange
    function fullOrder(order) {
        $(".fullOrderCont").css("display", "flex");
        var table = $("<table id='fullOrderTable'>");
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
    $("#fullOrderTable tr:last").remove();
    }

    $(".fullOrderCont").on("click", function() {
        $(".fullOrderCont").css("display", "none");
        $(".fullOrderCont table").remove();
    });
});