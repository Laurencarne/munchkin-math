const balloonDiv = document.querySelector(".balloonDiv");
const body = document.querySelector("body");
const enterSiteDiv = document.querySelector(".enterSite");
const flexDivBody = document.querySelector("#flexDiv");
const bodyTitle = document.querySelector(".bodyTitle");
const bodySecondTitle = document.querySelector(".bodySecondTitle");
const fetchUsers = () => fetch(usersUrl).then(response => response.json());
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

document.addEventListener("DOMContentLoaded", function() {
  loginOrSignUp();
});

function loginOrSignUp() {
  const flexDiv = document.createElement("div");
  flexDiv.className = "flexDiv";

  const loginDiv = document.createElement("div");
  loginDiv.className = "innerDiv";
  const imgLogin = document.createElement("img");
  imgLogin.src = "https://i.imgur.com/mXLrWxX.png";
  imgLogin.className = "loginImg";
  const pLogin = document.createElement("p");
  pLogin.className = "pLoginOrSignup";
  pLogin.innerText = "Login";

  loginDiv.append(imgLogin, pLogin);

  const signupDiv = document.createElement("div");
  signupDiv.className = "innerDiv";
  const imgSignup = document.createElement("img");
  imgSignup.src = "https://i.imgur.com/WGWvq0q.png";
  imgSignup.className = "loginImg";
  const pSignup = document.createElement("p");
  pSignup.className = "pLoginOrSignup";
  pSignup.innerText = "Sign Up";

  signupDiv.append(imgSignup, pSignup);
  flexDiv.append(loginDiv, signupDiv);
  flexDivBody.appendChild(flexDiv);

  loginDiv.addEventListener("click", fetchThenRenderUsers);
  signupDiv.addEventListener("click", signupPage);
}

function sayHello(user) {
  flexDivBody.innerHTML = "";
  bodySecondTitle.innerHTML = "";

  bodySecondTitle.className += " nameBounce";

  let splitName = user.name.split("");

  splitName.forEach(letter => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.className = "letterBounce";
    bodySecondTitle.appendChild(span);
  });
  flyBalloon();

  setTimeout(() => {
    landingPage();
  }, 9500);
}

function enterSite() {
  setTimeout(() => {
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/3u67mk8.png";
    img.className = "enterImg";
    enterSiteDiv.append(img);
  }, 6000);
}

function enterPage() {
  landingPage();
}
