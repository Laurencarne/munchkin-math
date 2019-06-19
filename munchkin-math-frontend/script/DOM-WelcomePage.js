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
  currentPage = "Balloons";
  currentUser = user;
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
