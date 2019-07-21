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

// courses section

var courses = [
    {
        title: "React Front To Back 2019",
        year: "07.2019 – present",
        description: "Udemy.com online course. Course about React concepts including how to create a Flux pattern using the Context API with the useContext and useReducer hooks, full stack MERN , a custom Express backend API that uses JWT (JSON Web Token) for authentication, Redux."
    },
    {
        title: "Modern React with Redux 2019",
        year: "06.2019 – 07.2019",
        description: "Udemy.com online course. Building single page applications with React JS and Redux, working with the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax. Mastering fundamental concepts behind structuring Redux applications."
    },
    {
        title: "Agile project management at Vilnius coding school",
        year: "06.2019 – 06.2019",
        description: "Agile project management with Scrum and Kanban"
    },
    {
        title: "The Complete JavaScript Course 2019",
        year: "05.2019 – 06.2019",
        description: "Udemy.com online course. JavaScript and programming fundamentals, objects, asynchronous JavaScript, ES5 and ES6+, prototypal inheritance, first-class functions, NPM, Webpack, Babel and ES6 modules"
    },
    {
        title: "Web Development Courses for Beginners at Vilnius coding school",
        year: "11.2018 – 01.2019",
        description: "Simple course to get a grip what is full-stack web development. Learned basics HTML, CSS, various interactions through JavaScript, creating  dynamic webpages. In addition learned how to setup database with mySQL, pass and retreive information with PHP, create simple login and signup forms with capability to see particular user's information. At the end implementing all new knowledge in a project."
    },
    {
        title: "Online beginner courses",
        year: "10.2018 – present",
        description: "w3schools.com, freecodecamp.org, sololearn.com"
    },
    {
        title: "Customs broker course at Customs Training Centre",
        year: "07.2010 – 08.2010",
        description: "Required course to obtain a licence to work as a Customs Broker."
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
    var p = document.createElement("P");
    divInfoLeft.appendChild(p);
    var text = document.createTextNode(courses[z].year);
    p.appendChild(text);
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

// jobs section

var employment = [
    {
        companyName: "JSC Frega",
        workPlace: "Vilnius, Lithuania",
        position: {
            expYears: ["09.2017 – Present", "11.2014 – 09.2017"],
            position: ["Head of Customs Brokers", "Customs Broker"],
            responsibilities: [
                [
                    "Representing company in receiving Authorised Economic Operator status",
                    "Upgrading company's warehouses to official customs import-export terminals",
                    "Full order management: from unloading-loading to Customs procedures",
                    "Staff management", "Searching for new customers",
                    "Daily problem solving",
                    "Implementation of company vision"
                ],
                [
                    "Full documents preparation for export: invoicing, certificates",
                    "Import, export and transit procedures",
                    "Full client representation at customs",
                    "Co-operation with customs officers"
                ]
            ]
        }
    },
    {
        companyName: "JSC Intrans",
        workPlace: "Vilnius, Lithuania",
        position: {
            expYears: ["02.2012 – 11.2014"],
            position: ["Customs Broker"],
            responsibilities: [""]
        }
    },
    {
        companyName: "JSC Frega",
        workPlace: "Vilnius, Lithuania",
        position: {
            expYears: ["02.2011 – 02.2012"],
            position: ["Customs Broker"],
            responsibilities: [""]
        }
    },
    {
        companyName: "JSC Atlantis Fruits",
        workPlace: "Vilnius, Lithuania",
        position: {
            expYears: ["12.2010 – 01.2011"],
            position: ["Customs Broker"],
            responsibilities: [""]
        }
    },
    {
        companyName: "JSC Hofa",
        workPlace: "Vilnius, Lithuania",
        position: {
            expYears: ["10.2009 – 12.2010", "09.2008 – 09.2009"],
            position: ["Head of Export Department", "Export department specialist"],
            responsibilities: [
                [
                    "Full documents preparation for export: invoicing, certificate ordering",
                    "Communicating with customs officers and customs brokers",
                    "Co-operation with other departments",
                    "Staff management"
                ],
                [
                    "Full documents preparation for export: invoicing, certificate ordering"
                ]
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
                [
                    "Computer maintenance",
                    "Software updates",
                    "Hardware troubleshooting",
                    "Assistance for lecturers"
                ]
            ]
        }
    },
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
    var text = document.createTextNode(employment[z].companyName)
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
        if (employment[z].position.responsibilities[i] !== "") {
            var text = document.createTextNode("Responsibilities: ");
            p.appendChild(text);
            var ul = document.createElement("UL");
            for (var j = 0; j < employment[z].position.responsibilities[i].length; j++) {
                var li = document.createElement("LI");
                divInfoRight.appendChild(ul);
                ul.appendChild(li);
                var text = document.createTextNode(employment[z].position.responsibilities[i][j]);
                li.appendChild(text);
            }
        }
    }
}
