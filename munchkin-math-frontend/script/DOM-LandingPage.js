function landingPage() {
  flexDivBody.innerHTML = "";
  bodySecondTitle.className -= " nameBounce";
  bodySecondTitle.innerHTML = "";
  bodyTitle.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.innerText = "Munchkin Math";
  bodyTitle.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.innerText = "Select Today's Test";
  bodySecondTitle.appendChild(h2);

  const flexDiv = document.createElement("div");
  flexDiv.className = "flexDiv";

  const numbersTestDiv = document.createElement("div");
  numbersTestDiv.className = "innerDiv";
  const pictureNumbers = document.createElement("img");
  pictureNumbers.src = "https://i.imgur.com/WqiJEuY.png";
  pictureNumbers.className = "landingPageTestPicture";
  const numbersTestDivInner = document.createElement("h4");
  numbersTestDivInner.innerText = "Numbers";
  // numbersTestDivInner.className = "innerDiv";
  numbersTestDiv.append(pictureNumbers, numbersTestDivInner);

  const additionTestDiv = document.createElement("div");
  additionTestDiv.className = "innerDiv";
  const pictureAddition = document.createElement("img");
  pictureAddition.src = "https://i.imgur.com/v8bB57y.png";
  pictureAddition.className = "landingPageTestPicture";
  const additionTestDivInner = document.createElement("h4");
  additionTestDivInner.innerText = "Addition";
  // additionTestDivInner.className = "innerDiv";
  additionTestDiv.append(pictureAddition, additionTestDivInner);

  const subtractionTestDiv = document.createElement("div");
  subtractionTestDiv.className = "innerDiv";
  const pictureSubtraction = document.createElement("img");
  pictureSubtraction.src = "https://i.imgur.com/7T3wwK8.png";
  pictureSubtraction.className = "landingPageTestPicture";
  const subtractionTestDivInner = document.createElement("h4");
  subtractionTestDivInner.innerText = "Subtraction";
  // subtractionTestDivInner.className = "innerDiv";
  subtractionTestDiv.append(pictureSubtraction, subtractionTestDivInner);

  flexDiv.append(numbersTestDiv, additionTestDiv, subtractionTestDiv);
  flexDivBody.appendChild(flexDiv);

  // numbersTestDiv.addEventListener("click", numbersTest);
  additionTestDiv.addEventListener("click", additionTestOptions);
  subtractionTestDiv.addEventListener("click", subtractionTestOptions);
}
