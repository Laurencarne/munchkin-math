function makeUserCards(user) {
  const innerDiv = document.createElement("div");
  innerDiv.className = "innerDiv";
  innerDiv.dataset.id = user.id;

  const h3 = document.createElement("h3");
  h3.className = "loginName";
  h3.innerText = user.name;

  const p = document.createElement("p");
  p.className = "loginAge";
  p.innerText = `Age: ${user.age}`;

  const img = document.createElement("img");
  img.className = "userAvatarImg";
  img.src = user.avatar;

  innerDiv.append(h3, img, p);

  innerDiv.addEventListener("click", () => sayHello(user));

  return innerDiv;
}

function renderUsers(json) {
  flexDivBody.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = "Select your profile!";
  bodySecondTitle.appendChild(h2);
  json.forEach(function(user) {
    flexDivBody.appendChild(makeUserCards(user));
  });
}

function fetchThenRenderUsers() {
  currentPage = "UserLogin";
  fetchUsers().then(renderUsers);
}
