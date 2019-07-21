var languages = [
    { lang: "English", prog: "55%" },
    { lang: "Russian", prog: "70%" },
    { lang: "Lithuanian", prog: "100%" }
];

var links = {
    projects: [
        { name: "First online website", link: "https://logway1.lt", text: "logway1.lt" },
        { name: "Minesweeper with JS", link: "https://mine.zhako.lt", text: "mine.zhako.lt" },
        { name: "Website for company", link: "https://custbroker.zhako.lt", text: "custbroker.zhako.lt" },
        { name: "Project:", link: "https://random.zhako.lt", text: "random.zhako.lt" },
        { name: "Project with PHP and mySQL:", link: "https://random.zhako.lt/warehouse.php", text: "random.zhako.lt/warehouse.php" },
        { name: "Project made with Wordpress:", link: "https://wp.zhako.lt", text: "wp.zhako.lt" },
        { name: "My CV online", link: "https://cv.zhako.lt", text: "cv.zhako.lt" }
    ],
    social: [
        { name: "Github", image: "img/icon_github.png", link: "https://github.com/zakevicius", text: "github.com/zakevicius" },
        { name: "LinkedIn", image: "img/icon_linkedin.png", link: "https://www.linkedin.com/in/zakevicius", text: "linkedin.com/in/zakevicius" },
        { name: "Codewars", image: "img/icon_codewars.png", link: "https://www.codewars.com/users/zakevicius", text: "codewars.com/users/zakevicius" }
    ]
};

var skills = [
    { skill: "HTML", icon: "img/skills/html.png" },
    { skill: "CSS", icon: "img/skills/css.png" },
    { skill: "BOOTSTRAP", icon: "img/skills/bootstrap.png" },
    { skill: "SEMANTICUI", icon: "img/skills/semanticui.png" },
    { skill: "JS", icon: "img/skills/js.png" },
    { skill: "JQUERY", icon: "img/skills/jquery.png" },
    { skill: "PHP", icon: "img/skills/php.png" },
    { skill: "MYSQL", icon: "img/skills/mysql.png" },
    { skill: "MONGODB", icon: "img/skills/mongodb.png" },
    { skill: "EXPRESS", icon: "img/skills/express.png" },
    { skill: "REACT", icon: "img/skills/react.png" },
    { skill: "NODE.JS", icon: "img/skills/nodejs.png" },
    { skill: "AJAX", icon: "img/skills/ajax.png" },
    { skill: "API", icon: "img/skills/api.png" },
    { skill: "JSON", icon: "img/skills/json.png" },
    { skill: "GIT", icon: "img/skills/git.png" },
    { skill: "HEROKU", icon: "img/skills/heroku.png" },
    { skill: "DOCKER", icon: "img/skills/docker.png" },
    { skill: "GOOGLE", icon: "img/skills/google.png" }
];

var hobbies = [
    { hobby: "Piano", image: "img/icon_piano.png" },
    { hobby: "Guitar", image: "img/icon_guitar.png" },
    { hobby: "Board Games", image: "img/icon_boardgames.png" },
    { hobby: "Computer Games", image: "img/icon_comp_games.png" },
    { hobby: "Reading", image: "img/icon_book.png" },
    { hobby: "Sports", image: "img/icon_sports.png" }
];

var infoRightCont = document.getElementsByClassName("infoRightCont")[0];
var aside = document.createElement("ASIDE");
infoRightCont.appendChild(aside);
aside.ClassName = "details";

//languages
var div = document.createElement("DIV");
aside.appendChild(div);
div.className = "detailsLang";
var h2 = document.createElement("H2");
div.appendChild(h2);
h2.textContent = "Languages:";
var ul = document.createElement("UL");
div.appendChild(ul);
for (var i = 0; i < languages.length; i++) {
    var li = document.createElement("LI");
    ul.appendChild(li);
    li.textContent = languages[i].lang;
    var divprog = document.createElement("DIV");
    ul.appendChild(divprog);
    divprog.className = "progress";
    var div = document.createElement("DIV");
    divprog.appendChild(div);
    div.setAttribute("style", "width:" + languages[i].prog);
}

//links
var div = document.createElement("DIV");
aside.appendChild(div);
div.className = "detailsLinks";
var h2 = document.createElement("H2");
div.appendChild(h2);
h2.textContent = "Links:";
for (var i = 0; i < links.projects.length; i++) {
    var text = document.createElement("P");
    div.appendChild(text);
    text.textContent = links.projects[i].name;
    var a = document.createElement("A");
    a.setAttribute("href", links.projects[i].link);
    a.setAttribute("target", "_blank");
    a.textContent = links.projects[i].text;
    div.appendChild(a);
}
for (var i = 0; i < links.social.length; i++) {
    var text = document.createElement("P");
    text.textContent = links.social[i].name;
    div.appendChild(text);
    var imageDiv = document.createElement("DIV");
    div.appendChild(imageDiv);
    var img = document.createElement("IMG");
    imageDiv.appendChild(img);
    img.setAttribute("src", links.social[i].image);
    var a = document.createElement("A");
    a.setAttribute("href", links.social[i].link);
    a.setAttribute("target", "_blank");
    a.textContent = links.social[i].text;
    imageDiv.appendChild(a);
}

//skills
var div = document.createElement("DIV");
aside.appendChild(div);
div.className = "detailsSkills";
var h2 = document.createElement("H2");
div.appendChild(h2);
h2.textContent = "My skills:";
var divSkills = document.createElement("DIV");
div.appendChild(divSkills);
for (var i = 0; i < skills.length; i++) {
    var img = document.createElement("IMG");
    img.setAttribute("src", skills[i].icon);
    img.setAttribute("class", "skill-image");
    divSkills.appendChild(img);
}

//hobbies
var div = document.createElement("DIV");
aside.appendChild(div);
div.className = "detailsHobbies";
var h2 = document.createElement("H2");
div.appendChild(h2);
h2.textContent = "My hobbies:";
var ul = document.createElement("UL");
div.appendChild(ul);
for (var i = 0; i < hobbies.length; i++) {
    var li = document.createElement("LI");
    ul.appendChild(li);
    var img = document.createElement("IMG");
    li.appendChild(img);
    img.setAttribute("src", hobbies[i].image);
    var text = document.createTextNode(hobbies[i].hobby);
    li.appendChild(text);
}
