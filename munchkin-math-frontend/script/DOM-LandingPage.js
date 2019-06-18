function landingPage() {
  body.innerHTML = "";

  const flexDiv = document.createElement("div");
  flexDiv.className = "flexDivLanding";

  const numbersTestDiv = document.createElement("div");
  numbersTestDiv.className = "testCat";
  const pictureNumbers = document.createElement("img");
  pictureNumbers.src = "https://i.imgur.com/WqiJEuY.png";
  pictureNumbers.className = "landingPageTestPicture";
  const numbersTestDivInner = document.createElement("h4");
  numbersTestDivInner.innerText = "Numbers";
  numbersTestDivInner.className = "testCatInner";
  numbersTestDiv.append(pictureNumbers, numbersTestDivInner);

  const additionTestDiv = document.createElement("div");
  additionTestDiv.className = "testCat";
  const pictureAddition = document.createElement("img");
  pictureAddition.src = "https://i.imgur.com/v8bB57y.png";
  pictureAddition.className = "landingPageTestPicture";
  const additionTestDivInner = document.createElement("h4");
  additionTestDivInner.innerText = "Addition";
  additionTestDivInner.className = "testCatInner";
  additionTestDiv.append(pictureAddition, additionTestDivInner);

  const subtractionTestDiv = document.createElement("div");
  subtractionTestDiv.className = "testCat";
  const pictureSubtraction = document.createElement("img");
  pictureSubtraction.src = "https://i.imgur.com/7T3wwK8.png";
  pictureSubtraction.className = "landingPageTestPicture";
  const subtractionTestDivInner = document.createElement("h4");
  subtractionTestDivInner.innerText = "Subtraction";
  subtractionTestDivInner.className = "testCatInner";
  subtractionTestDiv.append(pictureSubtraction, subtractionTestDivInner);

  flexDiv.append(numbersTestDiv, additionTestDiv, subtractionTestDiv);
  body.appendChild(flexDiv);

  numbersTestDiv.addEventListener("click", numbersTestOptions);
  additionTestDiv.addEventListener("click", additionTestOptions);
  subtractionTestDiv.addEventListener("click", subtractionTestOptions);
}

const popOutDiv = document.createElement("div");
popOutDiv.className = popOutDiv;

const easyDiv = document.createElement("div");
easyDiv.className = easyDiv;
const pEasy = document.createElement("p");
pEasy.innerText = "Level One";
const imgEasy = document.createElement("img");
imgEasy.src = "https://i.imgur.com/kBwjycy.png";
imgEasy.className = "landingPageTestPicture";
easyDiv.append(imgEasy, pEasy);

const hardDiv = document.createElement("div");
hardDiv.className = hardDiv;
const pHard = document.createElement("p");
pHard.innerText = "Level Two";
const imgHard = document.createElement("img");
imgHard.src = "https://i.imgur.com/ZW3TteV.png";
imgHard.className = "landingPageTestPicture";
hardDiv.append(imgHard, pHard);

popOutDiv.append(easyDiv, hardDiv);

function numbersTestOptions() {
  console.log("Numbers");
}

function additionTestOptions() {
  console.log("Addition");
  const flexDivLanding = document.querySelector(".flexDivLanding");
}

function subtractionTestOptions() {
  console.log("Subtraction");
}
