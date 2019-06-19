const balloonDiv = document.querySelector(".balloonDiv");
const body = document.querySelector("body");
const flexDivBody = document.querySelector("#flexDiv");
const bodyTitle = document.querySelector(".bodyTitle");
const bodySecondTitle = document.querySelector(".bodySecondTitle");
const fetchUsers = () => fetch(usersUrl).then(response => response.json());

const baseUrl = "http://localhost:3000/";
const usersUrl = `${baseUrl}users/`;
const testsUrl = `${baseUrl}tests/`;
const questionsUrl = `${baseUrl}questions/`;
const userTestsUrl = `${baseUrl}user_tests/`;
const getJsonData = json => json;
// let testId = 0;

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
const easySubtractionArray = [6, 7, 8, 9, 10];
const hardSubtractionArray = [21, 22, 23, 24, 25];
const easyAdditionArray = [1, 2, 3, 4, 5];
const hardAdditionArray = [16, 17, 18, 19, 20];
const numbersArray = [11, 12, 13, 14, 15];

let empties;
let fill;
let counter = 0;
let currentPage = "";
let currentUser = null;
