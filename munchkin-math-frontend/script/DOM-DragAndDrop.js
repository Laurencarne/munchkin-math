let empties;
let fill;

function dragAndDropPage() {
  body.innerHTML = "";

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  const innerDiv = document.createElement("div");

  div1.className = "empty";
  div2.className = "empty";
  div3.className = "empty";
  div4.className = "empty";

  innerDiv.className = "fill";
  innerDiv.draggable = true;

  body.append(div1, div2, div3, div4);
  div1.appendChild(innerDiv);

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
    this.append(fill);
  }
}
