counter = 0;
testScore = 0;

function getTest(testId) {
  currentPage = "InsideTest";
  currentTestId = testId;
  getSingleTestFromServer(testId).then(runTest);
}

function runTest(test) {
  const question = test.questions[counter];

  flexDivBody.innerHTML = "";
  bodySecondTitle.innerHTML = `<h2>${question.question}</h2>`;

  if (currentTestId >= 1 && currentTestId <= 10) {
    if (currentTestId >= 1 && currentTestId <= 5) {
      bodyTitle.innerHTML = `<h1 style="color: #4dc0b5;">Addition</h1>`;
    } else {
      bodyTitle.innerHTML = `<h1 style="color: #4dc0b5;">Subtraction</h1>`;
    }
    const holderDiv = document.createElement("div");
    holderDiv.className = "holderDiv";

    flexDivBody.appendChild(holderDiv);

    const div1 = document.createElement("div");
    div1.addEventListener("click", submitAnswerEasy);

    const div2 = document.createElement("div");
    div2.addEventListener("click", submitAnswerEasy);

    const div3 = document.createElement("div");
    div3.addEventListener("click", submitAnswerEasy);

    const div4 = document.createElement("div");
    div4.addEventListener("click", submitAnswerEasy);

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

    holderDiv.append(div1, div2, div3, div4);
    div1.appendChild(answer1);
    div2.appendChild(answer2);
    div3.appendChild(answer3);
    div4.appendChild(answer4);
  } else if (currentTestId >= 16 && currentTestId <= 25) {
    if (currentTestId >= 16 && currentTestId <= 20) {
      bodyTitle.innerHTML = `<h1 style="color: #4dc0b5;">Addition</h1>`;
    } else if (currentTestId >= 21 && currentTestId <= 25) {
      bodyTitle.innerHTML = `<h1 style="color: #4dc0b5;">Subtraction</h1>`;
    }

    const form = document.createElement("form");
    form.className = "input";
    form.dataset.correct = question.correct_answer;

    const inputAnswer = document.createElement("input");
    inputAnswer.type = "number";
    inputAnswer.name = "Answer";
    inputAnswer.placeholder = "Answer...";
    inputAnswer.className = "input-box";

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.name = "Submit";
    submit.value = "Go!";
    submit.className = "submit-box";

    form.append(inputAnswer, submit);
    flexDivBody.appendChild(form);

    form.addEventListener("submit", test => submitAnswerHard(test));
  }
}

function submitAnswerEasy() {
  event.preventDefault();

  event.target.parentElement.classList.add("selected");
  answer = event.target.dataset.id;
  correctAnswer = event.target.dataset.correct;

  setTimeout(() => {
    checkAnswer(answer, correctAnswer);
  }, 500);
}

function submitAnswerHard(test) {
  event.preventDefault();

  answer = event.target[0].value;
  correctAnswer = event.target.dataset.correct;

  setTimeout(() => {
    checkAnswer(answer, correctAnswer);
  }, 500);
}

function checkAnswer(answer) {
  if (answer === correctAnswer) {
    flexDivBody.innerHTML = "";
    testScore++;
    bodyTitle.innerHTML = `<h1>Nice Work ${currentUser.name}!</h1>`;
    bodySecondTitle.innerHTML = `<h2> The correct answer is ${correctAnswer}`;
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
    makeUserTest();
    landingPage();
  } else {
    counter += 1;
    getTest(currentTestId);
  }
}

function makeUserTest() {
  const newUserTest = {
    user_id: currentUser.id,
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
