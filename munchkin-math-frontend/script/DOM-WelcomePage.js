document.addEventListener("DOMContentLoaded", function() {
  loginOrSignUp();
});

// function loginOrSignUp() {
//   resetPage();
//   createHeader("Welcome Munchkin");
//
//   const loginDiv = createElement("div", "innerDiv");
//
//   loginDiv.append(
//     createImage("https://i.imgur.com/mXLrWxX.png", "loginImg"),
//     createElement("p", "pLoginOrSignup", "Login")
//   );
//
//   const signupDiv = createElement("div", "innerDiv");
//
//   signupDiv.append(
//     createImage("https://i.imgur.com/WGWvq0q.png", "loginImg"),
//     createElement("p", "pLoginOrSignup", "Sign Up")
//   );
//
//   flexDivBody.append(loginDiv, signupDiv);
//
//   loginDiv.addEventListener("click", fetchThenRenderUsers);
//   signupDiv.addEventListener("click", signupPage);
// }

function sayHello(user) {
  currentPage = "Balloons";
  currentUser = user;
  avatarNav.src = user.avatar;

  resetPage();
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

function loginOrSignUp() {
  resetPage();
  createHeader("Welcome Munchkin");

  const loginDiv = createElement("div", "innerDivTest");
  loginDiv.append(createElement("p", "words", "Login"));

  const signupDiv = createElement("div", "innerDivTest");
  signupDiv.append(createElement("p", "words", "Sign Up"));

  flexDivBody.append(loginDiv, signupDiv);

  loginDiv.addEventListener("click", fetchThenRenderUsers);
  signupDiv.addEventListener("click", signupPage);
}
