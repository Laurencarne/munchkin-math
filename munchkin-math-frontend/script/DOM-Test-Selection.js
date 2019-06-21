function testOptions(sum) {
  currentPage = "TestOptions";

  flexDivBody.innerHTML = "";

  const popOutDiv = createElement("div", "popOutDiv");

  const easyDiv = createElement("div", "innerDiv");
  easyDiv.append(
    createImage("https://i.imgur.com/kBwjycy.png", "landingPageTestPicture"),
    createElement("p", null, sum + " - Level One")
  );

  const hardDiv = createElement("div", "innerDiv");
  hardDiv.append(
    createImage("https://i.imgur.com/ZW3TteV.png", "landingPageTestPicture"),
    createElement("p", null, sum + " - Level Two")
  );

  flexDivBody.append(easyDiv, hardDiv);

  easyDiv.addEventListener("click", setTestIdAndRun);
  hardDiv.addEventListener("click", setTestIdAndRun);
}

function setTestIdAndRun() {
  let testTarget = event.target.parentElement.innerText;

  if (testTarget === "Numbers") {
    currentTestId =
      numbersArray[Math.floor(Math.random() * numbersArray.length)];
    runDragAndDropTest(currentTestId);
  } else if (testTarget === "Addition - Level One") {
    currentTestId =
      easyAdditionArray[Math.floor(Math.random() * easyAdditionArray.length)];
    getTest(currentTestId);
  } else if (testTarget === "Addition - Level Two") {
    currentTestId =
      hardAdditionArray[Math.floor(Math.random() * hardAdditionArray.length)];
    getTest(currentTestId);
  } else if (testTarget === "Subtraction - Level One") {
    currentTestId =
      easySubtractionArray[
        Math.floor(Math.random() * easySubtractionArray.length)
      ];
    getTest(currentTestId);
  } else if (testTarget === "Subtraction - Level Two") {
    currentTestId =
      hardSubtractionArray[
        Math.floor(Math.random() * hardSubtractionArray.length)
      ];
    getTest(currentTestId);
  }
}

function runNextQuestionDrag() {
  if (counter >= 4) {
    makeUserTest();
    displayTestResultPage();
    setTimeout(() => {
      landingPage();
    }, 3000);
  } else {
    counter += 1;
    runDragAndDropTest(currentTestId);
  }
}
