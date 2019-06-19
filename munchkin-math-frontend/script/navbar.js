function home() {
  loginOrSignUp();
}

function goBack() {}

function logout() {
  currentUser = null;
  flexDiv.innerText = "";
  bodySecondTitle.innerHTML = "";
  bodyTitle.innerHTML = "<h1> You have been logged Out</h1>";
  setTimeout(() => {
    loginOrSignUp();
  }, 2000);
}
function userProfile() {}
