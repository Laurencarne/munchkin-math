function landingPage() {
  body.innerHTML = "";

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
  body.appendChild(flexDiv);

  // numbersTestDiv.addEventListener("click", numbersTest);
  additionTestDiv.addEventListener("click", additionTestOptions);
  subtractionTestDiv.addEventListener("click", subtractionTestOptions);
}
