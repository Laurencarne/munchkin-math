// let counter = 0;

// const getAllTestsFromServer = () =>
//   fetch(testsUrl).then(response => response.json());

function getSingleTestFromServer(testId) {
  return fetch(testsUrl + `${testId}`).then(response => response.json());
}

function runTest(testId) {
  getSingleTestFromServer(testId).then(renderQuestion);
}

function onNextBtnClick() {
  event.preventDefault();
  questionCounter++;
  renderQuestion();
}

function renderQuestion(test) {
  flexDivBody.innerHTML = "";
  console.log(test);
  const question = test.questions[counter];
  console.log(question);

  // const questionCard = document.createElement("div");
  //
  // const questionDiv = document.createElement("div");
  // questionDiv.innerHTML = `<h3> ${questionObject.question} </h3> <img src= ${
  //   questionObject.image_url
  // }>`;

  const answersDiv = document.createElement("div");

  const answerA = document.createElement("div");
  answerA.innerText = questionObject.correct_answer;

  const answerB = document.createElement("div");
  answerB.innerText = questionObject.answer1;

  const answerC = document.createElement("div");
  answerC.innerText = questionObject.answer2;

  const answerD = document.createElement("div");
  answerD.innerText = questionObject.answer3;

  answersDiv.append(answerA, answerB, answerC, answerD);

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next Question";
  nextBtn.addEventListener("click", onNextBtnClick);

  questionCard.append(questionDiv, answersDiv, nextBtn);

  body.append(questionCard);
}
