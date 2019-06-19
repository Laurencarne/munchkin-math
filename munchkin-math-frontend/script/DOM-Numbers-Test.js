function runDragAndDropTest(testId) {
  currentPage = "InsideTest";
  getSingleTestFromServer(testId).then(dragAndDropPage);
}

function dragAndDropPage(test) {
  flexDivBody.innerHTML = "";
  bodyTitle.innerText = "";
  bodySecondTitle.innerText = "";
  const question = test.questions[counter];

  const question1 = document.createElement("h1");
  question1.className = "question";
  question1.innerText = question.question;
  flexDivBody.appendChild(question1);

  const holderDiv = document.createElement("div");
  holderDiv.className = "holderDiv";
  const imageDiv = document.createElement("div");
  imageDiv.className = "imageDiv";
  const divQuestion = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  const innerDiv = document.createElement("div");

  const answer1 = document.createElement("p");
  answer1.innerText = question.answer1;
  answer1.dataset.id = answer1.innerText;
  answer1.className = "answerP";

  const answer2 = document.createElement("p");
  answer2.innerText = question.answer2;
  answer2.dataset.id = answer2.innerText;
  answer2.className = "answerP";

  const answer3 = document.createElement("p");
  answer3.innerText = question.answer3;
  answer3.dataset.id = answer3.innerText;
  answer3.className = "answerP";
  const answer4 = document.createElement("p");
  answer4.innerText = question.correct_answer;
  answer4.dataset.id = answer4.innerText;
  answer4.className = "answerP";

  div1.className = "empty";
  div2.className = "empty";
  div3.className = "empty";
  div4.className = "empty";

  innerDiv.className = "fill";
  innerDiv.draggable = true;

  flexDivBody.append(imageDiv, holderDiv);
  imageDiv.appendChild(divQuestion);
  div1.appendChild(answer1);
  div2.appendChild(answer2);
  div3.appendChild(answer3);
  div4.appendChild(answer4);

  let arr = [div1, div2, div3, div4];
  let num = 0;

  while (arr.length > 0) {
    num = Math.floor(Math.random() * arr.length);
    holderDiv.append(arr[num]);
    arr.splice(num, 1);
  }
  divQuestion.appendChild(innerDiv);

  empties = document.querySelectorAll(".empty");
  fill = document.querySelector(".fill");
  fill.style.backgroundImage = `url(${question.image_url})`;

  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);

  for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
  }

  function dragStart() {
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
  }

  function dragEnd() {
    this.className = "fill";
    // this.draggable = false;
  }

  function dragOver() {
    event.preventDefault();
  }
  function dragEnter() {
    event.preventDefault();
    this.className += " hovered";
  }
  function dragLeave() {
    event.preventDefault();
    this.className = "empty";
  }
  function dragDrop() {
    event.preventDefault();
    this.className = "empty";
    this.innerText = "";
    this.append(fill);

    if (event.target.dataset.id === question.correct_answer) {
      flexDivBody.innerHTML = "";
      bodyTitle.innerHTML = "<h1>Nice Work!</h1>";
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
      bodySecondTitle.innerHTML = `<h2> The Correct Answer was ${
        question.correct_answer
      }.</h2>`;
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
      nextQuestion.addEventListener("click", runNextQuestionDrag);
      flexDivBody.appendChild(nextQuestion);
    }, 2500);
  }
}

function runNextQuestionDrag() {
  if (counter >= 4) {
    landingPage();
  } else {
    counter += 1;
    runDragAndDropTest(currentTestId);
  }
}
