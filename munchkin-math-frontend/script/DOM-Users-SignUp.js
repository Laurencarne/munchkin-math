function signupPage() {
  currentPage = "UserSignup";
  flexDivBody.innerHTML = "";
  createSubHeading("Lets Be Friends!");

  const form = createElement("form", "input");

  const inputName = createElement("input", "input-box");
  inputName.type = "text";
  inputName.name = "Name";
  inputName.placeholder = "What is Your Name?";

  const inputAge = createElement("input", "input-box");
  inputAge.type = "text";
  inputAge.name = "Age";
  inputAge.placeholder = "How Old Are You?";

  const submit = createElement("input", "submit-box");
  submit.type = "submit";
  submit.name = "Submit";
  submit.value = "Let's Play!";

  form.addEventListener("submit", makeUser);

  const imageHolderDiv = createElement("div", "imageHolderDiv");

  avatars.forEach(image => {
    imageHolderDiv.appendChild(displayUserAvatars(image));
  });

  form.append(inputName, inputAge, imageHolderDiv, submit);

  flexDivBody.appendChild(form);
}

function displayUserAvatars(image) {
  const innerDiv = createElement("div", "miniInnerDiv");

  innerDiv.append(createImage(image, "miniUserAvatarImg"));

  innerDiv.addEventListener("click", () => chooseAvatar(image));

  return innerDiv;
}

function chooseAvatar(image) {
  const form = document.querySelector(".input");

  let eventsArray = document.querySelectorAll(".miniInnerDiv");
  let arrayList = [];
  let newArray = [];
  eventsArray.forEach(array => arrayList.push(array.classList));
  arrayList.forEach(x => newArray.push(x[1]));
  if (newArray.includes("selected")) {
    if (event.target.getAttribute("class") === "miniUserAvatarImg") {
      event.target.parentNode.classList.remove("selected");
    } else {
      event.target.classList.remove("selected");
    }
  } else {
    if (event.target.getAttribute("class") === "miniUserAvatarImg") {
      event.target.parentNode.classList.add("selected");
    } else {
      event.target.classList.add("selected");
    }
  }
  form.dataset.url = image;
}
