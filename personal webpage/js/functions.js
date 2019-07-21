
//background setup

window.scrollTo(0, 0);
setupStartPage();
setupBars();

window.addEventListener('resize', function () {
    clearBars();
    setupBars();
    contentResize();
});

function setupStartPage() {
    left.style.backgroundColor = randomColor(mainClrH, mainClrS, 80);
    right.style.backgroundColor = randomColor(mainClrH, mainClrS, 80);
    center.style.backgroundColor = randomColor(mainClrH, mainClrS, 88);

}

centerImg.addEventListener('click', hideStartPage);

function hideStartPage() {
    left.style.width = '0px';
    right.style.width = '0px';
    center.style.opacity = '0';
    startPage.style.opacity = '0';
    setTimeout(function () {
        startPage.style.display = 'none';
    }, 2000);
}

function clearBars() {
    while (topBars.hasChildNodes()) {
        topBars.removeChild(topBars.childNodes[0]);
        bottomBars.removeChild(bottomBars.childNodes[0]);
    }
}

function setupBars() {
    updateValues();
    for (let i = 0; i <= totalBars; i++) {
        var newDiv = document.createElement('DIV');
        newDiv.setAttribute('class', 'topBar');
        setupIndividualBar(newDiv, i);
        topBars.appendChild(newDiv);
        newDiv = document.createElement('DIV');
        newDiv.setAttribute('class', 'bottomBar');
        setupIndividualBar(newDiv, i);
        bottomBars.appendChild(newDiv);
    }
    topBar = document.getElementsByClassName('topBar');
    bottomBar = document.getElementsByClassName('bottomBar');
    updateBarHeight(w / 5, h / 10);
    document.getElementsByTagName("BODY")[0].addEventListener('mousemove', mouseCoordinates);
    // document.getElementsByTagName("BODY")[0].addEventListener('mousedown', mouseClickBar);
}

topBars.style.borderColor = randomColor(mainClrH, mainClrS, mainClrL);
bottomBars.style.borderColor = topBars.style.borderColor;

function setupIndividualBar(newDiv, i) {
    newDiv.style.width = bw + 'px';
    newDiv.style.minWidth = bw + 'px';
    newDiv.style.height = minHeight + 'px';
    newDiv.style.backgroundColor = randomColor(mainClrH, mainClrS, mainClrL);
    newDiv.style.borderColor = randomColor(mainClrH, mainClrS, mainClrL);
}

function randomColor(hue, sat, light) {
    var colorH = Math.random() * mainClrHVariation + hue;
    var colorS = (Math.random() * mainClrSVariation + sat) + '%';
    var colorL = (Math.random() * mainClrLVariation + light) + '%';
    var colorHSL = 'hsl(' + colorH + ', ' + colorS + ', ' + colorL + ')';
    return colorHSL;
}

function updateValues() {
    w = window.innerWidth;
    h = window.innerHeight;
    bw = w / 30;
    maxHeight = h / 2 - h / 5;
    totalBars = Math.floor(w / (bw + 2)) - 1;
    increaseRatio = 1 / (bw * totalBars / 2);
}

function mouseCoordinates(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateBarHeight(mouseX, mouseY);
}

function mouseClickBar() {
    let clickedBar = Math.floor((event.clientX - topBar[0].offsetLeft) / (bw + 2));
    setNewHeight(0, clickedBar);
}

function updateBarHeight(x, y) {
    let j = Math.floor((x - topBar[0].offsetLeft) / (bw + 2));
    if (j >= 0 && j != topBar.length) {
        if (y < h / 2) {
            newHeight = h / 2 - y;
            setNewHeight(newHeight, j);
        }
        if (y > h / 2) {
            newHeight = y - h / 2;
            setNewHeight(newHeight, j);
        }
        neighbourBars(j);
    } else {
        minimizeBars(topBar);
        minimizeBars(bottomBar);
    }
}

function setNewHeight(newHeight, j) {
    if (newHeight > maxHeight) {
        newHeight = maxHeight;
    }
    topBar[j].style.height = newHeight + 'px';
    bottomBar[j].style.height = newHeight + 'px';
}

function minimizeBars(array) {
    Array.from(array).forEach(function (bar) {
        bar.style.height = minHeight + 'px';
    });
}

function neighbourBars(j) {
    let barHeight = parseInt(topBar[j].style.height);
    for (let left = 0; left < j; left++) {
        neighbourHeight = barHeight - barHeight * increaseRatio * bw * (left + 1);
        if (neighbourHeight < 1) {
            neighbourHeight = 1;
        }
        setNeighbourHeight(j - left - 1);
    }
    for (let right = 1; right < topBar.length - j; right++) {
        neighbourHeight = barHeight - barHeight * increaseRatio * bw * right;
        if (neighbourHeight < 1) {
            neighbourHeight = 1;
        }
        setNeighbourHeight(j + right)
    }
}

function setNeighbourHeight(nHeight) {
    topBar[nHeight].style.height = neighbourHeight + 'px';
    bottomBar[nHeight].style.height = topBar[nHeight].style.height;
}


// content settings

contentResize()

document.getElementById('mainCont').style.color = randomColor(mainClrH, 100, 20);
document.getElementsByTagName('BODY')[0].style.backgroundImage = 'linear-gradient(white 30%, ' + randomColor(mainClrH, 100, 90) + ')';

for (var i = 0; i < panelDivs.length; i++) {
    panelDivs[i].addEventListener('mouseover', panelDivHover);
    panelDivs[i].addEventListener('mouseleave', panelDivLeave)
}

var footerDate = new Date;

document.getElementsByTagName('FOOTER')[0].textContent = `\u00A9 ${footerDate.getFullYear()} Marius Žakevičius. All rigths reserved`;
document.getElementsByTagName('FOOTER')[0].style.backgroundColor = randomColor(mainClrH, 100, 90)

document.getElementsByClassName('nav')[0].addEventListener('click', goHome);
document.getElementsByClassName('nav')[1].addEventListener('click', expandAboutMe);
document.getElementsByClassName('nav')[2].addEventListener('click', expandProjects);

homeLink.style.backgroundColor = randomColor(mainClrH, mainClrS, 90);
homeLink.style.boxShadow = `0px 0px 3px 5px ${randomColor(mainClrH, mainClrS, 80)}`;


function goHome() {
    document.getElementById('infoCont').style.display = 'none';
}

function expandAboutMe() {
    location.href = "https://cv.zhako.lt";
}

function expandProjects() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('infoCont').style.display = 'flex';
    document.getElementById('projects').style.display = 'flex';
    document.getElementById('mainProjects').style.display = 'flex';
    document.getElementById('mainProjects').style.backgroundImage = 'linear-gradient(white 10%, ' + randomColor(mainClrH, mainClrS, 80) + ' 70%, white 100%)';
}

function panelDivHover() {
    this.style.color = randomColor(mainClrH, 70, 35);
    this.style.textShadow = '2px 2px 5px ' + this.style.color;
}

function panelDivLeave() {
    this.style.color = document.getElementById('mainCont').style.color;
    this.style.textShadow = 'none';
}

function toggleMoreInfo() {
    const el = event.target.parentNode.getElementsByClassName('project-info')[0];
    el.classList.toggle("show");
    el.className.split(' ').map(function (classname) {
        if (classname === "show") {
            el.style.opacity = "1";
        } else {
            el.style.opacity = "0";
        }
    })
}

function contentResize() {

    //image resize

    if (w > h) {
        size = parseInt(w) * 0.2 + 100;
    } else {
        size = parseInt(w) * 0.5;
    }
    // profPhoto.style.width = size + 'px';
    // profPhoto.style.height = size + 'px';
    // photo.style.top = (h * 0.5 - (parseInt(profPhoto.style.width) / 2)) + "px";
    document.getElementById('projects').style.width = w * 0.99 + "px";
}
