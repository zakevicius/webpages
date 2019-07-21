var newAside = $("<aside>");
$(".asideSmall").append(newAside);
var div1 = $("<div>");
newAside.append(div1);
div1.append("<img src='img/randomLogo.jpg'>").addClass("asideLogo");
var div2 = $("<div>");
newAside.append(div2);
div2.html("Jau dirbame kartu?");
var div3 = $("<div class='newOrder'>");
newAside.append(div3);
var link = $("<a href='warehouse.php'>Į sandėlį>>></a>").attr("target", "_blank");
div3.append(link);
var div4 = $("<div>");
newAside.append(div4);
div4.html("Turi klausimų ar pasiūlymų?");
var newForm = $("<form action='php/submit.php' target='_blank' method='POST'>");
newAside.append(newForm);
var div5 = $("<div>");
newForm.append(div5);
div5.html("Vardas");
var input1 = $("<input type='text' name='name' required>").addClass("formNameSmall");
newForm.append(input1);
var div6 = $("<div>");
newForm.append(div6);
div6.html("El. paštas");
var input2 = $("<input type='email' name='email' required>").addClass("formEmailSmall");
newForm.append(input2);
var div7 = $("<div>");
newForm.append(div7);
div7.html("Tel. nr.");
var input3 = $("<input type='text' name='phone'>").addClass("formPhoneSmall");
newForm.append(input3);
var div8 = $("<div>");
newForm.append(div8);
div8.html("Komentarai:");
var tArea = $("<textarea name='message' required>").addClass("formMessageSmall");
newForm.append(tArea);
var div9 = $("<div>");
newForm.append(div9);
var input4 = $("<input name='submit' class='formSubmitSmall' type='submit' value='Siųsti'>");
div9.append(input4);
var div10 = $("<div>");
newAside.append(div10);
div10.html("Kontaktai:");
var adres = $("<address>");
div10.append(adres);
var par1 = $("<p>");
adres.append(par1);
par1.html("Nemuno g. 23A");
var par2 = $("<p>");
adres.append(par2);
par2.html("Klaipėda, LT-93239");
var par3 = $("<p>");
adres.append(par3);
par3.html("Tel.: <a href='tel: +37060000000'>+370 600 00000</a>");


// pranesimas pateikiant forma
$("input.formSubmitSmall").click(function() {
    if($(".formNameSmall").val() !== "" && $(".formEmailSmall").val() !== "" && $(".formMessageSmall").val !== "") {
        alert("Žinutė išsiųsta. Ačiū!");
    } else {  
        alert("Neįvesti visi duomenys");
    }
});