function getTest(testId) {
  currentPage = "InsideTest";
  currentTestId = testId;
  getSingleTestFromServer(testId).then(runTest);
}

function runTest(test) {
  const question = test.questions[counter];
  resetPage();
  createSubHeading(`${question.question}`);

  if (
    easyAdditionArray.includes(currentTestId) ||
    hardAdditionArray.includes(currentTestId)
  ) {
    bodyTitle.innerHTML = `<h1 style="color: #4dc0b5;">Addition</h1>`;
  } else {
    bodyTitle.innerHTML = `<h1 style="color: #4dc0b5;">Subtraction</h1>`;
  }

  if (easyArray.includes(currentTestId)) {
    const holderDiv = createElement("div", "holderDiv");

    flexDivBody.appendChild(holderDiv);
    // CREATE ALL THE DIVS AND ADD EVENT LISTENERS
    const div1 = createElement("div", "empty");
    div1.addEventListener("click", submitAnswerEasy);
    const div2 = createElement("div", "empty");
    div2.addEventListener("click", submitAnswerEasy);
    const div3 = createElement("div", "empty");
    div3.addEventListener("click", submitAnswerEasy);
    const div4 = createElement("div", "empty");
    div4.addEventListener("click", submitAnswerEasy);
    // CREATE ALL THE P ELEMENTS AND ADD DATA SETS
    const answer1 = createElement("p", "answerP", question.answer1);
    answer1.dataset.id = answer1.innerText;
    answer1.dataset.correct = question.correct_answer;
    const answer2 = createElement("p", "answerP", question.answer2);
    answer2.dataset.id = answer2.innerText;
    answer2.dataset.correct = question.correct_answer;
    const answer3 = createElement("p", "answerP", question.answer3);
    answer3.dataset.id = answer3.innerText;
    answer3.dataset.correct = question.correct_answer;
    const answer4 = createElement("p", "answerP", question.correct_answer);
    answer4.dataset.id = answer4.innerText;
    answer4.dataset.correct = question.correct_answer;
    // APPEND ALL THE ANSWERS TO THE DIVS
    div1.appendChild(answer1);
    div2.appendChild(answer2);
    div3.appendChild(answer3);
    div4.appendChild(answer4);
    // RANDOMIZE THE ANSWER ORDER
    let arr = [div1, div2, div3, div4];
    let num = 0;
    while (arr.length > 0) {
      num = Math.floor(Math.random() * arr.length);
      holderDiv.append(arr[num]);
      arr.splice(num, 1);
    }
  } else if (hardArray.includes(currentTestId)) {
    const form = createElement("form", "input");
    form.dataset.correct = question.correct_answer;

    const inputAnswer = createElement("input", "input-box");
    inputAnswer.type = "number";
    inputAnswer.name = "Answer";
    inputAnswer.placeholder = "Answer...";

    const submit = createElement("input", "submit-box");
    submit.type = "submit";
    submit.name = "Submit";
    submit.value = "Go!";

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

function submitAnswerHard() {
  event.preventDefault();

  answer = event.target[0].value;
  correctAnswer = event.target.dataset.correct;

  setTimeout(() => {
    checkAnswer(answer, correctAnswer);
  }, 500);
}

function checkAnswer(answer, correctAnswer) {
  resetPage();

  profileDiv.append(
    createElement("h2", null, `The Correct Answer is ${correctAnswer}.`)
  );

  if (answer === correctAnswer) {
    testScore++;
    createHeader(`Nice Work ${currentUser.name}!`);

    const correctDiv = createElement("div", "correctDiv");
    correctDiv.appendChild(
      createImage(
        "http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png",
        "correctImg"
      )
    );
    setTimeout(() => {
      bodySecondTitle.innerHTML = "";
      const nextQuestionArrow = createImage(
        "https://i.imgur.com/oZI7ULF.png",
        "nextQuestionArrow"
      );
      bodySecondTitle.appendChild(nextQuestionArrow);
      nextQuestionArrow.addEventListener("click", runNextQuestion);
    }, 2500);
    bodySecondTitle.appendChild(correctDiv);
  } else {
    createHeader(`Not Quite ${currentUser.name}`);
    const wrongDiv = createElement("div", "wrongDiv");
    wrongDiv.appendChild(
      createImage(
        "http://www.pngmart.com/files/3/Red-Cross-Transparent-PNG.png",
        "wrongImg"
      )
    );
    setTimeout(() => {
      bodySecondTitle.innerHTML = "";
      const nextQuestionArrow = createImage(
        "https://i.imgur.com/oZI7ULF.png",
        "nextQuestionArrow"
      );
      bodySecondTitle.appendChild(nextQuestionArrow);
      nextQuestionArrow.addEventListener("click", runNextQuestion);
    }, 2500);
    bodySecondTitle.appendChild(wrongDiv);
  }
}

function runNextQuestion() {
  if (counter >= 4) {
    makeUserTest();
    displayTestResultPage();
    setTimeout(() => {
      landingPage();
    }, 3000);
  } else {
    counter += 1;
    getTest(currentTestId);
  }
}
