function runDragAndDropTest(testId) {
  currentPage = "InsideTest";
  getSingleTestFromServer(testId).then(dragAndDropPage);
}

function dragAndDropPage(test) {
  resetPage();

  const question = test.questions[counter];

  bodyTitle.appendChild(createElement("h1", "question", question.question));

  const holderDiv = createElement("div", "holderDiv");
  const imageDiv = document.createElement("div", "imageDiv");
  const divQuestion = createElement("div", "imageHolder");
  const div1 = createElement("div", "empty");
  const div2 = createElement("div", "empty");
  const div3 = createElement("div", "empty");
  const div4 = createElement("div", "empty");
  const fill = createElement("div", "fill");
  fill.draggable = true;

  const answer1 = createElement("p", "answerP", question.answer1);
  answer1.dataset.id = answer1.innerText;
  const answer2 = createElement("p", "answerP", question.answer2);
  answer2.dataset.id = answer2.innerText;
  const answer3 = createElement("p", "answerP", question.answer3);
  answer3.dataset.id = answer3.innerText;
  const answer4 = createElement("p", "answerP", question.correct_answer);
  answer4.dataset.id = answer4.innerText;

  bodySecondTitle.append(imageDiv);
  flexDivBody.append(holderDiv);
  imageDiv.appendChild(divQuestion);
  div1.appendChild(answer1);
  div2.appendChild(answer2);
  div3.appendChild(answer3);
  div4.appendChild(answer4);

  // RANDOMIZING THE ANSWER ORDER
  let arr = [div1, div2, div3, div4];
  let num = 0;
  while (arr.length > 0) {
    num = Math.floor(Math.random() * arr.length);
    holderDiv.append(arr[num]);
    arr.splice(num, 1);
  }
  divQuestion.appendChild(fill);
  //
  empties = document.querySelectorAll(".empty");
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

    resetPage();
    createSubHeading(`The Correct Answer was ${question.correct_answer}.`);
    // CHECK IF THE ANSWER IS CORRECT
    if (event.target.dataset.id === question.correct_answer) {
      createHeader(`Nice Work ${currentUser.name}!`);

      const correctDiv = createElement("div", "correctDiv");

      correctDiv.appendChild(
        createImage(
          "http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png",
          "correctImg"
        )
      );
      flexDivBody.appendChild(correctDiv);
    } else {
      createHeader(`Not Quite ${currentUser.name}`);

      const wrongDiv = createElement("div", "wrongDiv");

      wrongDiv.appendChild(
        createImage(
          "http://www.pngmart.com/files/3/Red-Cross-Transparent-PNG.png",
          "wrongImg"
        )
      );

      flexDivBody.appendChild(wrongDiv);
    }
    // SHOW IF ANSWER IS CORRECT TO USER AND LOAD CONTINUE BUTTON
    setTimeout(() => {
      const nextQuestion = createElement(
        "button",
        "nextQuestionButton",
        "Continue..."
      );
      nextQuestion.type = "button";
      nextQuestion.addEventListener("click", runNextQuestionDrag);
      flexDivBody.appendChild(nextQuestion);
    }, 2500);
  }
}

// function dragAndDropPage(test) {
//   resetPage();
//
//   const question = test.questions[counter];
//
//   flexDivBody.appendChild(createElement("h1", "question", question.question));
//
//   const holderDiv = createElement("div", "holderDiv");
//   const imageDiv = document.createElement("div", "imageDiv");
//   const divQuestion = createElement("div");
//   const div1 = createElement("div", "empty");
//   const div2 = createElement("div", "empty");
//   const div3 = createElement("div", "empty");
//   const div4 = createElement("div", "empty");
//   const innerDiv = createElement("div", "fill");
//   innerDiv.draggable = true;
//
//   const answer1 = createElement("p", "answerP", question.answer1);
//   answer1.dataset.id = answer1.innerText;
//   const answer2 = createElement("p", "answerP", question.answer2);
//   answer2.dataset.id = answer2.innerText;
//   const answer3 = createElement("p", "answerP", question.answer3);
//   answer3.dataset.id = answer3.innerText;
//   const answer4 = createElement("p", "answerP", question.correct_answer);
//   answer4.dataset.id = answer4.innerText;
//
//   flexDivBody.append(imageDiv, holderDiv);
//   imageDiv.appendChild(divQuestion);
//   div1.appendChild(answer1);
//   div2.appendChild(answer2);
//   div3.appendChild(answer3);
//   div4.appendChild(answer4);
//
//   // RANDOMIZING THE ANSWER ORDER
//   let arr = [div1, div2, div3, div4];
//   let num = 0;
//   while (arr.length > 0) {
//     num = Math.floor(Math.random() * arr.length);
//     holderDiv.append(arr[num]);
//     arr.splice(num, 1);
//   }
//   divQuestion.appendChild(innerDiv);
//   //
//   empties = document.querySelectorAll(".empty");
//   fill = document.querySelector(".fill");
//   fill.style.backgroundImage = `url(${question.image_url})`;
//
//   fill.addEventListener("dragstart", dragStart);
//   fill.addEventListener("dragend", dragEnd);
//
//   for (const empty of empties) {
//     empty.addEventListener("dragover", dragOver);
//     empty.addEventListener("dragenter", dragEnter);
//     empty.addEventListener("dragleave", dragLeave);
//     empty.addEventListener("drop", dragDrop);
//   }
//
//   function dragStart() {
//     this.className += " hold";
//     setTimeout(() => (this.className = "invisible"), 0);
//   }
//
//   function dragEnd() {
//     this.className = "fill";
//   }
//
//   function dragOver() {
//     event.preventDefault();
//   }
//   function dragEnter() {
//     event.preventDefault();
//     this.className += " hovered";
//   }
//   function dragLeave() {
//     event.preventDefault();
//     this.className = "empty";
//   }
//   function dragDrop() {
//     event.preventDefault();
//     this.className = "empty";
//     this.innerText = "";
//     this.append(fill);
//
//     resetPage();
//     createSubHeading(`The Correct Answer was ${question.correct_answer}.`);
//     // CHECK IF THE ANSWER IS CORRECT
//     if (event.target.dataset.id === question.correct_answer) {
//       createHeader(`Nice Work ${currentUser.name}!`);
//
//       const correctDiv = createElement("div", "correctDiv");
//
//       correctDiv.appendChild(
//         createImage(
//           "http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png",
//           "correctImg"
//         )
//       );
//       flexDivBody.appendChild(correctDiv);
//     } else {
//       createHeader(`Not Quite ${currentUser.name}`);
//
//       const wrongDiv = createElement("div", "wrongDiv");
//
//       wrongDiv.appendChild(
//         createImage(
//           "http://www.pngmart.com/files/3/Red-Cross-Transparent-PNG.png",
//           "wrongImg"
//         )
//       );
//
//       flexDivBody.appendChild(wrongDiv);
//     }
//     // SHOW IF ANSWER IS CORRECT TO USER AND LOAD CONTINUE BUTTON
//     setTimeout(() => {
//       const nextQuestion = createElement(
//         "button",
//         "nextQuestionButton",
//         "Continue..."
//       );
//       nextQuestion.type = "button";
//       nextQuestion.addEventListener("click", runNextQuestionDrag);
//       flexDivBody.appendChild(nextQuestion);
//     }, 2500);
//   }
// }
