const balloonDiv = document.querySelector(".balloonDiv");
const flexDivBody = document.querySelector("#flexDivBody");
const bodyTitle = document.querySelector(".bodyTitle");
const body = document.querySelector("body");
const profileDiv = document.querySelector(".profileDiv");
const bodySecondTitle = document.querySelector(".bodySecondTitle");
const fetchUsers = () => fetch(usersUrl).then(response => response.json());
const totalScoreboard = document.querySelector(".totalScoreboard");

const baseUrl = "http://localhost:3000/";
const usersUrl = `${baseUrl}users/`;
const testsUrl = `${baseUrl}tests/`;
const questionsUrl = `${baseUrl}questions/`;
const userTestsUrl = `${baseUrl}user_tests/`;
const getJsonData = json => json;

const avatars = [
  "https://i.imgur.com/FH0SJMM.png",
  "https://i.imgur.com/tTpEPBa.png",
  "https://i.imgur.com/LnDRhUl.png",
  "https://i.imgur.com/smtuHn5.png",
  "https://i.imgur.com/rRlxBHn.png",
  "https://i.imgur.com/xan5sih.png",
  "https://i.imgur.com/hzCfWht.png",
  "https://i.imgur.com/V0lOVy8.png",
  "https://i.imgur.com/x6P8NhG.png",
  "https://i.imgur.com/SnKgXqk.png"
];

let currentTestId = 0;

const easyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const easyAdditionArray = [1, 2, 3, 4, 5];
const easySubtractionArray = [6, 7, 8, 9, 10];
const hardArray = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const hardAdditionArray = [16, 17, 18, 19, 20];
const hardSubtractionArray = [21, 22, 23, 24, 25];
const numbersArray = [11, 12, 13, 14, 15];

let empties;
let fill;
let counter = 0;
let currentPage = "";
let currentUser = null;
let testScore = 0;

const avatarNav = document.querySelector(".avatar");
const logoutNav = document.querySelector(".logout");
const goBackNav = document.querySelector(".back");
const homeNav = document.querySelector(".home");
const leaderboardNav = document.querySelector(".leaderboard");

const resetPage = () => {
  flexDivBody.innerHTML = "";
  bodySecondTitle.innerHTML = "";
  bodyTitle.innerHTML = "";
  profileDiv.innerHTML = "";
};

const createHeader = text => {
  const h1 = document.createElement("h1");
  h1.innerText = text;
  bodyTitle.appendChild(h1);
};

const createSubHeading = text => {
  const h2 = document.createElement("h2");
  h2.innerText = text;
  bodySecondTitle.appendChild(h2);
};

const createElement = (element, className = null, text = "") => {
  x = document.createElement(element);
  x.className = className;
  x.innerText = text;
  return x;
};

const createImage = (src, className) => {
  x = document.createElement("img");
  x.src = src;
  x.className = className;
  return x;
};
