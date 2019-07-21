var person = [
    {
        image: "img/profile_photo.jpg",
        name: "Marius Žakevičius",
        year: "25.01.1986",
        place: "Vilnius, Lithuania",
        email: "m.zakevicius@gmail.com",
        phone: "+370 675 98894"
    }   
];

var headerCont = document.getElementsByClassName("headerCont")[0];
var header = document.createElement("HEADER");
headerCont.appendChild(header);
var divHeaderImg = document.createElement("DIV");
divHeaderImg.className = "headerImg";
header.appendChild(divHeaderImg);
var img = document.createElement("IMG");
img.setAttribute("src", person[0].image);
divHeaderImg.appendChild(img);
var divHeaderInfo = document.createElement("DIV");
divHeaderInfo.className = "headerInfo";
header.appendChild(divHeaderInfo);
var h1 = document.createElement("H1");
divHeaderInfo.appendChild(h1);
h1.textContent = person[0].name;
var a = document.createElement("A");
a.setAttribute("href", "https://www.google.com/maps/place/Vilnius/");
a.setAttribute("target", "_blank");
a.textContent = person[0].place;
divHeaderInfo.appendChild(a);
var p = document.createElement("P");
divHeaderInfo.appendChild(p);
p.textContent = "mob.: ";
var a = document.createElement("A");
a.setAttribute("href", "tel:0037067598894");
a.textContent = person[0].phone;
p.appendChild(a);
var p = document.createElement("P");
divHeaderInfo.appendChild(p);
p.textContent = "e-mail: ";
var a = document.createElement("A");
a.setAttribute("href", "mailto:m.zakevicius@gmail.com");
a.textContent = person[0].email;
p.appendChild(a);
var p = document.createElement("P");
divHeaderInfo.appendChild(p);
p.textContent = "Date of birth: " + person[0].year;
var article = document.createElement("ARTICLE");
article.className = "profile";
headerCont.appendChild(article);
var h2 = document.createElement("H2");
article.appendChild(h2);
h2.textContent = "Profile";
var p = document.createElement("P");
p.innerHTML = "My main strenghts are <b>accuracy</b> and <b>calculation</b>. I pay great <b>attention to details</b>, what is very important when working as a Customs Broker. I am very <b>adaptive</b> and can <b>master new things</b> very quickly. Before I solve a problem, I try to <b>analyze</b> it so that I can fix it to the maximum. Working as an export specialist I familiarized with customs brokers’ work and after a quick course I managed to learn most of specifics in a new field and became customs broker myself.</p><p>On the other hand I didn’t find <b>new challenges</b> as a customs broker and started to look for another field where I could <b>brainstorm</b> myself. I tried HTML and CSS courses online, then found local WEB development courses which I attended and finished with basic knowledge of Javascript, PHP, MySQL, Wordpress. It got me so excited that I decided to <b>fully commit</b> to programming."
article.appendChild(p);