const startPage = document.getElementById('startPage');
const left = document.getElementsByClassName('startPage-left')[0];
const right = document.getElementsByClassName('startPage-right')[0];
const center = document.getElementsByClassName('startPage-center')[0];
const centerImg = document.getElementsByClassName('startPage-center-image')[0];
const topBars = document.getElementById('topBars');
const bottomBars = document.getElementById('bottomBars');
const panelDivs = document.getElementById('panel').getElementsByClassName('nav');
const moreInfo = document.getElementsByClassName('more-info');
let homeLink = document.getElementById('panel').getElementsByClassName('home')[0];
let topBar;
let bottomBar;
let w = window.innerWidth;
let h = window.innerHeight;
let bw = w / 30;
let increaseRatio;
const mainClrH = Math.random() * 360;
const mainClrHVariation = 30; // from mainClrH upto mainClrH + mainClrHVariation
const mainClrS = 50;
const mainClrSVariation = 0; // from mainClrS upto mainClrS + mainClrSVariation
const mainClrL = 88;
const mainClrLVariation = 7; // from mainClrL upto mainClrL + mainClrLVariation
let totalBars;
let newHeight;
let maxHeight = h / 2 - h / 5;
const minHeight = 2;
let neighbourHeight;
const photo = document.getElementById("photo");
let size = 0;
let mouseX;
let mouseY;
