function additionTestOptions() {
  currentPage = "TestOptions";
  const flexDiv = document.querySelector(".flexDiv");
  flexDiv.innerHTML = "";

  const popOutDiv = document.createElement("div");
  popOutDiv.className = popOutDiv;

  const easyDiv = document.createElement("div");
  easyDiv.className = "innerDiv";
  const pEasy = document.createElement("p");
  pEasy.innerText = "Addition - Level One";
  const imgEasy = document.createElement("img");
  imgEasy.src = "https://i.imgur.com/kBwjycy.png";
  imgEasy.className = "landingPageTestPicture";
  easyDiv.append(imgEasy, pEasy);

  const hardDiv = document.createElement("div");
  hardDiv.className = "innerDiv";
  const pHard = document.createElement("p");
  pHard.innerText = "Addition - Level Two";
  const imgHard = document.createElement("img");
  imgHard.src = "https://i.imgur.com/ZW3TteV.png";
  imgHard.className = "landingPageTestPicture";
  hardDiv.append(imgHard, pHard);

  flexDiv.append(easyDiv, hardDiv);

  easyDiv.addEventListener("click", setTestIdAndRun);
  hardDiv.addEventListener("click", setTestIdAndRun);
}

function subtractionTestOptions() {
  currentPage = "TestOptions";
  const flexDiv = document.querySelector(".flexDiv");
  flexDiv.innerHTML = "";

  const popOutDiv = document.createElement("div");
  popOutDiv.className = popOutDiv;

  const easyDiv = document.createElement("div");
  easyDiv.className = "innerDiv";
  const pEasy = document.createElement("p");
  pEasy.innerText = "Subtraction - Level One";
  const imgEasy = document.createElement("img");
  imgEasy.src = "https://i.imgur.com/kBwjycy.png";
  imgEasy.className = "landingPageTestPicture";
  easyDiv.append(imgEasy, pEasy);

  const hardDiv = document.createElement("div");
  hardDiv.className = "innerDiv";
  const pHard = document.createElement("p");
  pHard.innerText = "Subtraction - Level Two";
  const imgHard = document.createElement("img");
  imgHard.src = "https://i.imgur.com/ZW3TteV.png";
  imgHard.className = "landingPageTestPicture";
  hardDiv.append(imgHard, pHard);

  flexDiv.append(easyDiv, hardDiv);

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
