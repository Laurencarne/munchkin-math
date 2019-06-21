function landingPage() {
  logoutNav.classList.remove("hide");
  goBackNav.classList.remove("hide");
  homeNav.classList.remove("hide");
  leaderboardNav.classList.remove("hide");

  currentPage = "LandingPage";
  counter = 0;
  testScore = 0;

  resetPage();
  createHeader("Munchkin Math");
  createSubHeading("Select Today's Test");

  const numbersTestDiv = createElement("div", "innerDiv");
  numbersTestDiv.append(
    createImage("https://i.imgur.com/WqiJEuY.png", "landingPageTestPicture"),
    "Numbers"
  );

  const additionTestDiv = createElement("div", "innerDiv");
  additionTestDiv.append(
    createImage("https://i.imgur.com/v8bB57y.png", "landingPageTestPicture"),
    "Addition"
  );

  const subtractionTestDiv = createElement("div", "innerDiv");
  subtractionTestDiv.append(
    createImage("https://i.imgur.com/7T3wwK8.png", "landingPageTestPicture"),
    "Subtraction"
  );

  flexDivBody.append(numbersTestDiv, additionTestDiv, subtractionTestDiv);

  numbersTestDiv.addEventListener("click", setTestIdAndRun);
  additionTestDiv.addEventListener("click", () => testOptions("Addition"));
  subtractionTestDiv.addEventListener("click", () =>
    testOptions("Subtraction")
  );
}
