// function home() {
//   if (currentPage === "") {
//
//   }
//   landingPage();
// }
function navLeaderboard() {
  displayLeaderboardPage();
}

function goBack() {
  if (currentPage === "LandingPage") {
  } else if (
    currentPage === "InsideTest" ||
    currentPage === "TestOptions" ||
    currentPage === "ProfilePage" ||
    currentPage === "LeaderboardPage"
  ) {
    landingPage();
  } else if (currentPage === "UserLogin" || currentPage === "UserSignup") {
    loginOrSignUp();
  } else if (currentPage === "Balloons") {
    landingPage();
  }
}

function logout() {
  if (currentPage === "ProfilePage") {
    const profileHolder = document.querySelector(".profileHolder");
    profileHolder.innerHTML = "";
  }
  currentUser = null;
  avatarNav.src = "https://i.imgur.com/QbymuiR.png";
  flexDivBody.innerText = "";
  bodySecondTitle.innerHTML = "";
  bodyTitle.innerHTML = "<h1> GoodBye! </h1>";

  const goodbyeImageDiv = createElement("div", "goodbyeImage1");
  flexDivBody.appendChild(goodbyeImageDiv);

  logoutNav.classList.add("hide");
  goBackNav.classList.add("hide");
  leaderboardNav.classList.add("hide");
  homeNav.classList.add("hide");

  setTimeout(() => {
    loginOrSignUp();
  }, 7000);
}

function userProfile() {
  if (currentUser) {
    profilePage();
  } else {
    loginOrSignUp();
  }
}
