var workers = [
  {
    name: "Tadas Lekerauskas",
    phone: "+37062176494",
    email: "tadas@logway1.lt",
    photo: "img/img_red/logo_big_white.jpg",
    skype: ["leikeris", "Tadas"]
  },
  {
    name: "Paulius Gučius",
    phone: "+37065552644",
    email: "paulius@logway1.lt",
    photo: "img/img_red/logo_big_white.jpg",
    skype: ["live:6ca4de6d0b8be973", "Paulius"]
  },
  {
    name: "Ilona Zapolskaja",
    phone: "+37060541314",
    email: "ilona@logway1.lt",
    photo: "img/img_red/logo_big_white.jpg",
    skype: ["ilona-sakbar", "Ilona"]
  },
  {
    name: "Maija Kilbovskaja",
    phone: "+37063119399",
    email: "maija@logway1.lt",
    photo: "img/img_red/logo_big_white.jpg",
    skype: ["Maija-Logway1", "Maija"]
  }
];

// CREATING CONTACT CARDS

var workersDiv = document.getElementsByClassName("workers")[0];

for (var i = 0; i < workers.length; i++) {
  var workMain = document.createElement("DIV");
  workMain.setAttribute("class", "worker");
  var photo = document.createElement("IMG");
  photo.setAttribute("src", workers[i]["photo"]);
  workersDiv.appendChild(workMain);
  workMain.appendChild(photo);
  photo.style.borderRadius = "50%";
  var workInfo = document.createElement("DIV");
  workInfo.setAttribute("class", "workerInfo");
  workMain.appendChild(workInfo);
  for (var key in workers[i]) {
    if (workers[i].hasOwnProperty(key) && key != "photo") {
      let p = document.createElement("P");
      workInfo.appendChild(p);
      switch (key) {
        case "phone":
          let iconTel = document.createElement("IMG");
          iconTel.setAttribute("src", "img/icon_phone.png");
          p.appendChild(iconTel);
          let aTel = document.createElement("A");
          let tel = "tel: " + workers[i][key];
          aTel.setAttribute("href", tel);
          p.appendChild(aTel);
          aTel.innerHTML = workers[i][key];
          break;
        case "email":
          let iconEmail = document.createElement("IMG");
          iconEmail.setAttribute("src", "img/icon_email.png");
          p.appendChild(iconEmail);
          let aMail = document.createElement("A");
          let mail = "mailto: " + workers[i][key];
          aMail.setAttribute("href", mail);
          p.appendChild(aMail);
          aMail.innerHTML = workers[i][key];
          break;
        case "skype":
          let iconSkype = document.createElement("IMG");
          iconSkype.setAttribute("src", "img/icon_skype.png");
          p.appendChild(iconSkype);
          let aSkype = document.createElement("A");
          let skype = "skype:" + workers[i][key][0] + "?chat";
          aSkype.setAttribute("href", skype);
          p.appendChild(aSkype);
          aSkype.innerHTML = workers[i][key][1];
          break;
        default:
          p.innerHTML = workers[i][key];
          break;
      }
    }
  }
}
var date = new Date();
var year = date.getFullYear();
document.getElementById("copyright").innerHTML =
  "Visos teisės saugomos &copy; " + year + " Logway1";

// var listCust = document.getElementsByClassName('customs')[0].getElementsByTagName('LI');
// var listWare = document.getElementsByClassName('warehouse')[0].getElementsByTagName('LI');
// var sections = document.getElementsByClassName('section');

// resize();

// window.addEventListener('resize', resize);

// function resize() {
//     if (window.innerWidth > 1000) {
//         for (var i = 0; i < listCust.length; i++) {
//             listCust[i].style.marginLeft = 50 * i + 'px';
//             listWare[i].style.marginRight = 50 * i + 'px';
//         }
//     } else {
//         for (var i = 0; i < listCust.length; i++) {
//             listCust[i].style.marginLeft = 0 + 'px';
//             listWare[i].style.marginRight = 0 + 'px';
//         }
//     }
// }
