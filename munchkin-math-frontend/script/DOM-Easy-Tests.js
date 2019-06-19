counter = 0;
testScore = 0;

function getTest(testId) {
  currentTestId = testId;
  getSingleTestFromServer(testId).then(runTest);
}

function runTest(test) {
  const question = test.questions[counter];

  flexDivBody.innerHTML = "";
  bodySecondTitle.innerText = "";
  bodyTitle.innerHTML = `<h1>${question.question}</h1>`;

  const holderDiv = document.createElement("div");
  holderDiv.className = "holderDiv";

  const div1 = document.createElement("div");
  div1.addEventListener("click", submitAnswer);

  const div2 = document.createElement("div");
  div2.addEventListener("click", submitAnswer);

  const div3 = document.createElement("div");
  div3.addEventListener("click", submitAnswer);

  const div4 = document.createElement("div");
  div4.addEventListener("click", submitAnswer);

  div1.className = "empty";
  div2.className = "empty";
  div3.className = "empty";
  div4.className = "empty";

  const answer1 = document.createElement("p");
  answer1.innerText = question.answer1;
  answer1.dataset.id = answer1.innerText;
  answer1.dataset.correct = question.correct_answer;
  answer1.className = "answerP";

  const answer2 = document.createElement("p");
  answer2.innerText = question.answer2;
  answer2.dataset.id = answer2.innerText;
  answer2.dataset.correct = question.correct_answer;
  answer2.className = "answerP";

  const answer3 = document.createElement("p");
  answer3.innerText = question.answer3;
  answer3.dataset.id = answer3.innerText;
  answer3.dataset.correct = question.correct_answer;
  answer3.className = "answerP";

  const answer4 = document.createElement("p");
  answer4.innerText = question.correct_answer;
  answer4.dataset.id = answer4.innerText;
  answer4.dataset.correct = question.correct_answer;
  answer4.className = "answerP";

  flexDivBody.appendChild(holderDiv);
  holderDiv.append(div1, div2, div3, div4);
  div1.appendChild(answer1);
  div2.appendChild(answer2);
  div3.appendChild(answer3);
  div4.appendChild(answer4);
}

function submitAnswer() {
  event.preventDefault();

  event.target.parentElement.classList.add("selected");
  answer = event.target.dataset.id;
  correctAnswer = event.target.dataset.correct;

  setTimeout(() => {
    checkAnswer(answer, correctAnswer);
  }, 500);
}

function checkAnswer(answer) {
  if (answer === correctAnswer) {
    flexDivBody.innerHTML = "";
    testScore += 1;
    debugger;
    bodyTitle.innerHTML = `<h1>Nice Work ${
      currentUser.name
    }!</h1> <br> <h2> The correct answer is ${correctAnswer}`;
    const correctDiv = document.createElement("div");
    correctDiv.className = correctDiv;
    const correctImg = document.createElement("img");
    correctImg.src =
      "http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png";
    correctImg.className = "correctImg";
    correctDiv.appendChild(correctImg);
    flexDivBody.appendChild(correctDiv);
  } else {
    flexDivBody.innerHTML = "";
    bodyTitle.innerHTML = "<h1>Not Quite...</h1>";
    bodySecondTitle.innerHTML = `<h2> The Correct Answer was ${correctAnswer}.</h2>`;
    const wrongDiv = document.createElement("div");
    wrongDiv.className = wrongDiv;
    const wrongImg = document.createElement("img");
    wrongImg.src =
      "http://www.pngmart.com/files/3/Red-Cross-Transparent-PNG.png";
    wrongImg.className = "wrongImg";
    wrongDiv.appendChild(wrongImg);
    flexDivBody.appendChild(wrongDiv);
  }
  setTimeout(() => {
    const nextQuestion = document.createElement("button");
    nextQuestion.className = "nextQuestionButton";
    nextQuestion.innerText = "Continue...";
    nextQuestion.type = "button";
    nextQuestion.addEventListener("click", runNextQuestion);
    flexDivBody.appendChild(nextQuestion);
  }, 2500);
}

function runNextQuestion() {
  if (counter >= 4) {
    // Creating a new UserTest in database with userId, TestId and score
    makeUserTest();
    landingPage();
  } else {
    counter += 1;
    getTest(currentTestId);
  }
}

function makeUserTest() {
  const newUserTest = {
    user_id: 1,
    test_id: currentTestId,
    score: testScore
  };
  debugger;
  addUserTestToServer(newUserTest);
}

function addUserTestToServer(UserTestObject) {
  return fetch(userTestsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(UserTestObject)
  });
}
