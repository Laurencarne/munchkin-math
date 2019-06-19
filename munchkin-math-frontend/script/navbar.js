function home() {
  loginOrSignUp();
}

function goBack() {
  if (currentPage === "LandingPage") {
    // Do nothing
  } else if (currentPage === "InsideTest" || currentPage === "TestOptions") {
    landingPage();
  } else if (currentPage === "UserLogin" || currentPage === "UserSignup") {
    loginOrSignUp();
  } else if (currentPage === "Balloons") {
    landingPage();
  }
}

function logout() {
  currentUser = null;
  avatarNav.src = "https://i.imgur.com/QbymuiR.png";
  flexDiv.innerText = "";
  bodySecondTitle.innerHTML = "";
  bodyTitle.innerHTML = "<h1> You have been logged Out</h1>";
  setTimeout(() => {
    loginOrSignUp();
  }, 2000);
}

function userProfile() {
  loginOrSignUp();
}
