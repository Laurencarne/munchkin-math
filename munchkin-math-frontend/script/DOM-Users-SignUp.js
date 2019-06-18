function signupPage() {
  flexDivBody.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.innerText = "Lets Be Friends!";
  bodySecondTitle.appendChild(h2);

  const form = document.createElement("form");
  form.className = "input";

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "Name";
  inputName.placeholder = "What is Your Name?";
  inputName.className = "input-box";

  const inputAge = document.createElement("input");
  inputAge.type = "text";
  inputAge.name = "Age";
  inputAge.placeholder = "How Old Are You?";
  inputAge.className = "input-box";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.name = "Submit";
  submit.value = "Let's Play!";
  submit.className = "submit-box";

  form.addEventListener("submit", makeUser);

  const imageHolderDiv = document.createElement("div");
  imageHolderDiv.className = "imageHolderDiv";

  avatars.forEach(image => {
    imageHolderDiv.appendChild(displayUserAvatars(image));
  });

  form.append(inputName, inputAge, imageHolderDiv, submit);

  flexDivBody.appendChild(form);
}

function displayUserAvatars(image) {
  const innerDiv = document.createElement("div");
  innerDiv.className = "miniInnerDiv";

  const img = document.createElement("img");
  img.className = "miniUserAvatarImg";
  img.src = image;

  innerDiv.append(img);

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

function makeUser() {
  event.preventDefault();

  const newUser = {
    name: event.target[0].value,
    age: event.target[1].value,
    avatar: event.target.dataset.url,
    color: ""
  };
  addUserToServer(newUser).then(sayHello(newUser));

  event.target.reset();
}

function addUserToServer(user) {
  return fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
}
