const form = document.querySelector("form");
const balloonDiv = document.querySelector(".balloonDiv");
const body = document.querySelector("body");
const enterSiteDiv = document.querySelector(".enterSite");

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
  body.appendChild(flexDiv);

  loginDiv.addEventListener("click", loginPage);
  signupDiv.addEventListener("click", signupPage);
}

function sayHello() {
  event.preventDefault();

  const nameDiv = document.querySelector(".nameBounce");

  let splitName = event.target[0].value.split("");

  splitName.forEach(letter => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.className = "letterBounce";
    nameDiv.appendChild(span);
  });

  event.target.reset();
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
