var main = document.getElementById('mainProjects');
var projects = [
    {
        'link': 'https://random.zhako.lt',
        'src': 'img/1.jpg',
        'order': 1,
        'info': 'Project for coding school - website',
        'skills': ['HTML', 'CSS', 'JS', 'JQUERY', 'PHP', 'MYSQL']
    },
    {
        'link': 'https://random.zhako.lt/warehouse.php',
        'src': 'img/2.jpg',
        'order': 2,
        'info': `Project for coding school - system for order management`,
        'skills': ['HTML', 'CSS', 'JS', 'JQUERY', 'PHP', 'MYSQL']
    },
    {
        'link': 'https://mine.zhako.lt',
        'src': 'img/3.jpg',
        'order': 3,
        'info': 'Javascript Minesweeper game clone',
        'skills': ['HTML', 'CSS', 'JS']
    },
    {
        'link': 'https://custbroker.zhako.lt',
        'src': 'img/4.jpg',
        'order': 4,
        'info': 'Website for logistics company',
        'skills': ['HTML', 'CSS', 'JS']
    },
    {
        'link': 'https://logway1.lt',
        'src': 'img/5.jpg',
        'order': 5,
        'info': 'First real project for logistic company',
        'skills': ['HTML', 'CSS', 'JS', 'PHP']
    },
    {
        'link': 'https://scrape-client.herokuapp.com/',
        'src': 'img/6.jpg',
        'order': 6,
        'info': 'Simple app for scraping information about what local television is showing at the moment and sending data from backend to frontend.',
        'add_link': 'https://scrape-api.herokuapp.com/',
        'skills': ['HTML', 'CSS', 'BOOTSTRAP', 'JS', 'REACT', 'NODE.JS']
    },
    {
        'link': 'https://damp-hamlet-47083.herokuapp.com/',
        'src': 'img/7.jpg',
        'order': 7,
        'info': `In progress. Making warehouse management system while learning MERN stack.`,
        'add_link': 'https://scrape-api.herokuapp.com/',
        'skills': ['HTML', 'CSS', 'SEMANTIC-UI', 'JS', 'REACT', 'REDUX', 'NODE.JS', 'MONGODB', 'EXPRESS']
    }
];

for (var i = 0; i < projects.length; i++) {
    var project = document.createElement("DIV");
    project.setAttribute('class', 'project');
    main.appendChild(project);
    var more = document.createElement("I");
    more.setAttribute("class", "fas fa-info-circle fa-2x more-info");
    more.addEventListener('click', toggleMoreInfo);
    more.style.color = randomColor(mainClrH, mainClrS, 70);
    project.appendChild(more);
    var link = document.createElement("A");
    project.appendChild(link);
    link.setAttribute('href', projects[i]['link']);
    link.setAttribute('target', '_blank');
    link.style.color = randomColor(mainClrH, 100, 20);
    var div = document.createElement("DIV");
    div.setAttribute('class', 'project-link');
    link.appendChild(div);
    div.style.backgroundImage = 'url(' + projects[i]['src'] + ')';
    div.style.borderColor = randomColor(mainClrH, mainClrS, mainClrL);
    div.style.boxShadow = `0px 0px 3px 5px ${randomColor(mainClrH, mainClrS, mainClrL)}`;
    var info = document.createElement("DIV");
    info.setAttribute('class', 'project-info');
    div.appendChild(info);
    var text = document.createElement("DIV");
    text.setAttribute('class', 'info-description');
    text.style.color = randomColor(mainClrH, 100, 0);
    info.appendChild(text);
    text.textContent = projects[i]['info'];
    var skills = document.createElement("DIV");
    skills.setAttribute('class', 'info-skills');
    var skillsText = document.createElement("DIV");
    skills.appendChild(skillsText);
    skillsText.textContent = "What I used:"
    info.appendChild(skills);
    for (var j = 0; j < projects[i]['skills'].length; j++) {
        var skill = document.createElement("IMG");
        skill.setAttribute('class', 'info-skill-image')
        skill.setAttribute('src', selectImage(projects[i]['skills'][j]))
        skills.appendChild(skill);
    }
};

function selectImage(skill) {
    switch (skill) {
        case 'HTML':
            return 'img/skills/html.png';
        case 'CSS':
            return 'img/skills/css.png';
        case 'JS':
            return 'img/skills/js.png';
        case 'PHP':
            return 'img/skills/php.png';
        case 'MYSQL':
            return 'img/skills/mysql.png';
        case 'JQUERY':
            return 'img/skills/jquery.png';
        case 'BOOTSTRAP':
            return 'img/skills/bootstrap.png';
        case 'SEMANTIC-UI':
            return 'img/skills/semanticui.png';
        case 'REACT':
            return 'img/skills/react.png';
        case 'NODE.JS':
            return 'img/skills/nodejs.png';
        case 'REDUX':
            return 'img/skills/redux.png';
        case 'MONGODB':
            return 'img/skills/mongodb.png';
        case 'EXPRESS':
            return 'img/skills/express.png';
        default:
            return "";
    }
}

// var projectDivs = document.getElementsByClassName('project');

// updateProjects();

// var arrows = document.getElementsByClassName('arrow');
// arrows[0].addEventListener('click', projectsLeft);
// arrows[1].addEventListener('click', projectsRight);

// function projectsRight() {
//     for (let i = 0; i < projects.length; i++) {
//         if (projects[i]['order'] == 1) {
//             projects[i]['order'] = projects.length;
//         } else {
//             projects[i]['order'] -= 1
//         }
//     }
//     updateProjects('right');
// }

// function projectsLeft() {
//     for (let i = 0; i < projects.length; i++) {
//         if (projects[i]['order'] == projects.length) {
//             projects[i]['order'] = 1;
//         } else {
//             projects[i]['order'] += 1
//         }
//     }
//     updateProjects('left');
// }

// function updateProjects(dir) {
//     for (var i = 0; i < projects.length; i++) {
//         // projectDivs[i].style.left = projects[i]['order'] * 10 + '%';
//         document.getElementById('mainProjects').getElementsByTagName('A')[i].style.order = projects[i]['order'];
//     }
// }

