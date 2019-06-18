function additionTestOptions() {
  const flexDiv = document.querySelector(".flexDivLanding");
  flexDiv.innerHTML = "";

  const popOutDiv = document.createElement("div");
  popOutDiv.className = popOutDiv;

  const easyDiv = document.createElement("div");
  easyDiv.className = "easyHardDiv";
  const pEasy = document.createElement("p");
  pEasy.innerText = "Level One";
  const imgEasy = document.createElement("img");
  imgEasy.src = "https://i.imgur.com/kBwjycy.png";
  imgEasy.className = "landingPageTestPicture";
  easyDiv.append(imgEasy, pEasy);

  const hardDiv = document.createElement("div");
  hardDiv.className = "easyHardDiv";
  const pHard = document.createElement("p");
  pHard.innerText = "Level Two";
  const imgHard = document.createElement("img");
  imgHard.src = "https://i.imgur.com/ZW3TteV.png";
  imgHard.className = "landingPageTestPicture";
  hardDiv.append(imgHard, pHard);

  flexDiv.append(easyDiv, hardDiv);

  easyDiv.addEventListener("click", easyAdditionTest);
  hardDiv.addEventListener("click", hardAdditionTest);
}

function subtractionTestOptions() {
  const flexDiv = document.querySelector(".flexDivLanding");
  flexDiv.innerHTML = "";

  const popOutDiv = document.createElement("div");
  popOutDiv.className = popOutDiv;

  const easyDiv = document.createElement("div");
  easyDiv.className = "easyHardDiv";
  const pEasy = document.createElement("p");
  pEasy.innerText = "Level One";
  const imgEasy = document.createElement("img");
  imgEasy.src = "https://i.imgur.com/kBwjycy.png";
  imgEasy.className = "landingPageTestPicture";
  easyDiv.append(imgEasy, pEasy);

  const hardDiv = document.createElement("div");
  hardDiv.className = "easyHardDiv";
  const pHard = document.createElement("p");
  pHard.innerText = "Level Two";
  const imgHard = document.createElement("img");
  imgHard.src = "https://i.imgur.com/ZW3TteV.png";
  imgHard.className = "landingPageTestPicture";
  hardDiv.append(imgHard, pHard);

  flexDiv.append(easyDiv, hardDiv);

  easyDiv.addEventListener("click", easySubtractionTest);
  hardDiv.addEventListener("click", hardSubtractionTest);
}
