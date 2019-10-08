// courses section

var courses = [
  {
    title: "React Front To Back 2019 at Udemy.com",
    year: "07.2019 – 08.2019",
    duration: "14 hours",
    description:
      "MongoDB, Express, Node.js, React, Hooks, Context API, JSON Web Token, Redux."
  },
  {
    title: "Modern React with Redux 2019 at Udemy.com",
    year: "06.2019 – 07.2019",
    duration: "30 hours",
    description: "React, Redux, NPM, Webpack, Babel, ES6/2015 Javascript."
  },
  {
    title: "Agile project management at Vilnius coding school",
    year: "06.2019 – 06.2019",
    duration: "12 hours",
    description: "Agile project management with Scrum and Kanban"
  },
  {
    title: "The Complete JavaScript Course 2019 at Udemy.com",
    year: "05.2019 – 06.2019",
    duration: "28 hours",
    description:
      "JS, objects, async JS, ES5 and ES6+, prototypal inheritance, first-class functions, NPM, Webpack, Babel and ES6 modules."
  },
  {
    title: "Web Development Courses for Beginners at Vilnius coding school",
    year: "11.2018 – 01.2019",
    duration: "72 hours",
    description: "Basics of HTML, CSS, JavaScript, PHP, mySQL."
  },
  {
    title: "Online beginner courses",
    year: "10.2018 – present",
    duration: "unlimited",
    description: "w3schools.com, freecodecamp.org, sololearn.com"
  },
  {
    title: "Customs broker course at Customs Training Centre",
    year: "07.2010 – 08.2010",
    duration: "80 hours",
    description:
      "Required course to obtain a licence to work as a Customs Broker."
  }
];

var infoLeftCont = document.getElementsByClassName("infoLeftCont")[0];
var article = document.createElement("ARTICLE");
article.className = "courses";
infoLeftCont.appendChild(article);
var fieldset = document.createElement("FIELDSET");
article.appendChild(fieldset);
var legend = document.createElement("LEGEND");
fieldset.appendChild(legend);
var text = document.createTextNode("Courses");
legend.appendChild(text);
var divInfo = document.createElement("DIV");
divInfo.className = "info";
fieldset.appendChild(divInfo);

for (var z = 0; z < courses.length; z++) {
  var divInfoLeft = document.createElement("DIV");
  divInfoLeft.className = "infoLeft";
  divInfo.appendChild(divInfoLeft);
  var p1 = document.createElement("P");
  divInfoLeft.appendChild(p1);
  var text = document.createTextNode(courses[z].year);
  p1.appendChild(text);
  var p2 = document.createElement("P");
  divInfoLeft.appendChild(p2);
  var duration = document.createTextNode(courses[z].duration);
  p2.appendChild(duration);
  var divInfoRight = document.createElement("DIV");
  divInfoRight.className = "infoRight";
  divInfo.appendChild(divInfoRight);
  var h3 = document.createElement("H3");
  divInfoRight.appendChild(h3);
  var text = document.createTextNode(courses[z].title);
  h3.appendChild(text);
  var text = document.createTextNode(courses[z].description);
  divInfoRight.appendChild(text);
}

// education section

var education = [
  {
    place: "Vilnius College",
    year: "09.2005 – 06.2008",
    degree: "Bachelor degree",
    field: "Field of Science - Accounting, internal audit"
  }
];

var infoLeftCont = document.getElementsByClassName("infoLeftCont")[0];
var article = document.createElement("ARTICLE");
article.className = "education";
infoLeftCont.appendChild(article);
var fieldset = document.createElement("FIELDSET");
article.appendChild(fieldset);
var legend = document.createElement("LEGEND");
fieldset.appendChild(legend);
var text = document.createTextNode("Education");
legend.appendChild(text);
var divInfo = document.createElement("DIV");
divInfo.className = "info";
fieldset.appendChild(divInfo);

for (var z = 0; z < education.length; z++) {
  var divInfoLeft = document.createElement("DIV");
  divInfoLeft.className = "infoLeft";
  divInfo.appendChild(divInfoLeft);
  var p = document.createElement("P");
  divInfoLeft.appendChild(p);
  var text = document.createTextNode(education[z].year);
  p.appendChild(text);
  var divInfoRight = document.createElement("DIV");
  divInfoRight.className = "infoRight";
  divInfo.appendChild(divInfoRight);
  var h3 = document.createElement("H3");
  divInfoRight.appendChild(h3);
  var text = document.createTextNode(education[z].place);
  h3.appendChild(text);
  var text = document.createTextNode(education[z].degree);
  divInfoRight.appendChild(text);
  var br = document.createElement("BR");
  divInfoRight.appendChild(br);
  var text = document.createTextNode(education[z].field);
  divInfoRight.appendChild(text);
}

// jobs section

var employment = [
  {
    companyName: "Freelancer",
    workPlace: "Vilnius, Lithuania",
    position: {
      expYears: ["06.2019 – present"],
      position: ["Full-stack developer"],
      responsibilities: [
        [
          "Creating full-stack web application for warehouse managment",
          "Backend server setup",
          "Database connection and managment",
          "Setup ftp for file uploading and downloading",
          "Implementing various accounts for clients and employees",
          "Constant application updating"
        ]
      ]
    }
  },
  {
    companyName: "JSC Frega",
    workPlace: "Vilnius, Lithuania",
    position: {
      expYears: ["09.2017 – 06.2019"], //, "11.2014 – 09.2017"
      position: ["Head of Customs Brokers"], //, "Customs Broker"
      responsibilities: [
        [
          "Representing company in receiving Authorised Economic Operator status",
          "Upgrading company's warehouses to official customs import-export terminals",
          "Full order management: from unloading-loading to Customs procedures",
          "Staff management",
          "Searching for new customers",
          "Daily problem solving",
          "Implementation of company vision"
        ]
        // [
        //     "Full documents preparation for export: invoicing, certificates",
        //     "Import, export and transit procedures",
        //     "Full client representation at customs",
        //     "Co-operation with customs officers"
        // ]
      ]
    }
  },
  {
    companyName: "Various companies",
    workPlace: "Vilnius, Lithuania",
    position: {
      expYears: ["02.2010 – 09.2017"],
      position: ["Customs Broker"],
      responsibilities: [
        [
          "Full documents preparation for export: invoicing, certificates",
          "Import, export and transit procedures",
          "Full client representation at customs",
          "Co-operation with customs officers"
        ]
      ]
    }
  },
  // {
  //     companyName: "JSC Frega",
  //     workPlace: "Vilnius, Lithuania",
  //     position: {
  //         expYears: ["02.2011 – 02.2012"],
  //         position: ["Customs Broker"],
  //         responsibilities: [""]
  //     }
  // },
  // {
  //     companyName: "JSC Atlantis Fruits",
  //     workPlace: "Vilnius, Lithuania",
  //     position: {
  //         expYears: ["12.2010 – 01.2011"],
  //         position: ["Customs Broker"],
  //         responsibilities: [""]
  //     }
  // },
  {
    companyName: "JSC Hofa",
    workPlace: "Vilnius, Lithuania",
    position: {
      expYears: ["10.2009 – 12.2010", "09.2008 – 09.2009"],
      position: ["Head of Export Department", "Export department specialist"],
      responsibilities: [
        [],
        []
        // [
        //     "Full documents preparation for export: invoicing, certificate ordering",
        //     "Communicating with customs officers and customs brokers",
        //     "Co-operation with other departments",
        //     "Staff management"
        // ],
        // [
        //     "Full documents preparation for export: invoicing, certificate ordering"
        // ]
      ]
    }
  },
  {
    companyName: "Vilnius College",
    workPlace: "Vilnius, Lithuania",
    position: {
      expYears: ["12.2005 – 06.2007"],
      position: ["Junior IT assistant"],
      responsibilities: [
        []
        // [
        //     "Computer maintenance",
        //     "Software updates",
        //     "Hardware troubleshooting",
        //     "Assistance for lecturers"
        // ]
      ]
    }
  }
];

var infoLeftCont = document.getElementsByClassName("infoLeftCont")[0];
var article = document.createElement("ARTICLE");
article.className = "employment";
infoLeftCont.appendChild(article);
var fieldset = document.createElement("FIELDSET");
article.appendChild(fieldset);
var legend = document.createElement("LEGEND");
fieldset.appendChild(legend);
var text = document.createTextNode("Employment History");
legend.appendChild(text);
var divInfo = document.createElement("DIV");
divInfo.className = "info";
fieldset.appendChild(divInfo);

for (var z = 0; z < employment.length; z++) {
  var divCompanyName = document.createElement("DIV");
  divCompanyName.className = "companyName";
  divInfo.appendChild(divCompanyName);
  var h3 = document.createElement("H3");
  divCompanyName.appendChild(h3);
  var text = document.createTextNode(employment[z].companyName);
  h3.appendChild(text);
  var span = document.createElement("SPAN");
  divCompanyName.appendChild(span);
  var text = document.createTextNode(employment[z].workPlace);
  span.appendChild(text);
  for (var i = 0; i < employment[z].position.expYears.length; i++) {
    var divInfoLeft = document.createElement("DIV");
    divInfoLeft.className = "infoLeft";
    divInfo.appendChild(divInfoLeft);
    var p = document.createElement("P");
    divInfoLeft.appendChild(p);
    var text = document.createTextNode(employment[z].position.expYears[i]);
    p.appendChild(text);
    var p = document.createElement("P");
    divInfoLeft.appendChild(p);
    var divInfoRight = document.createElement("DIV");
    divInfoRight.className = "infoRight";
    divInfo.appendChild(divInfoRight);
    var h4 = document.createElement("H4");
    divInfoRight.appendChild(h4);
    var text = document.createTextNode(employment[z].position.position[i]);
    h4.appendChild(text);
    if (employment[z].position.responsibilities[i].length > 0) {
      var text = document.createTextNode("Responsibilities: ");
      p.appendChild(text);
      var ul = document.createElement("UL");
      for (
        var j = 0;
        j < employment[z].position.responsibilities[i].length;
        j++
      ) {
        var li = document.createElement("LI");
        divInfoRight.appendChild(ul);
        ul.appendChild(li);
        var text = document.createTextNode(
          employment[z].position.responsibilities[i][j]
        );
        li.appendChild(text);
      }
    }
  }
}
