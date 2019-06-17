let empties;
let fill;

function dragAndDropPage() {
  body.innerHTML = "";

  const answer = "3";

  const question = document.createElement("h1");
  question.className = "question";
  question.innerText = "How Many Apples are in the Basket?";
  body.appendChild(question);

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
  answer1.innerText = 5;
  answer1.dataset.id = answer1.innerText;
  const answer2 = document.createElement("p");
  answer2.innerText = 3;
  answer2.dataset.id = answer2.innerText;
  const answer3 = document.createElement("p");
  answer3.innerText = 7;
  answer3.dataset.id = answer3.innerText;
  const answer4 = document.createElement("p");
  answer4.innerText = 1;
  answer4.dataset.id = answer4.innerText;

  // divQuestion.className = "empty";
  div1.className = "empty";
  div2.className = "empty";
  div3.className = "empty";
  div4.className = "empty";

  innerDiv.className = "fill";
  innerDiv.draggable = true;

  body.append(imageDiv, holderDiv);
  imageDiv.appendChild(divQuestion);
  holderDiv.append(div1, div2, div3, div4);
  div1.appendChild(answer1);
  div2.appendChild(answer2);
  div3.appendChild(answer3);
  div4.appendChild(answer4);
  divQuestion.appendChild(innerDiv);

  empties = document.querySelectorAll(".empty");
  fill = document.querySelector(".fill");

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
    this.draggable = false;
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

    console.log(event.target.dataset.id);

    if (event.target.dataset.id === answer) {
      body.innerHTML = "";
      console.log("correct");
      const correctDiv = document.createElement("div");
      correctDiv.className = correctDiv;
      const correctImg = document.createElement("img");
      correctImg.src =
        "http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png";
      correctImg.className = "correctImg";
      correctDiv.appendChild(correctImg);
      body.appendChild(correctDiv);
    } else {
      body.innerHTML = "";
      console.log("wrong");
      const wrongDiv = document.createElement("div");
      wrongDiv.className = wrongDiv;
      const wrongImg = document.createElement("img");
      wrongImg.src =
        "http://www.pngmart.com/files/3/Red-Cross-Transparent-PNG.png";
      wrongImg.className = "wrongImg";
      wrongDiv.appendChild(wrongImg);
      body.appendChild(wrongDiv);
    }
  }
}
