const fetchUsers = () => fetch(usersUrl).then(response => response.json());

// const getJsonData = json => json;

function loginPage() {
  body.html = "";
}

function makeUserCards(user) {
  const flexDiv = document.createElement("div");
  flexDiv.className = flexDiv;

  const h3 = document.createElement("h3");
  h3.className = "loginName";
  h3.innerText = user.name;

  const p = document.createElement("p");
  p.className = "loginAge";
  p.innerText = `Age: ${user.age}`;

  const img = document.createElement("img");
  img.className = "userAvatarImg";
  img.src = user.avatar;

  flexDiv.append(h3, img, p);

  return flexDiv;
}

function renderUsers(json) {
  body.innerHTML = "";
  json.forEach(function(user) {
    body.appendChild(makeUserCards(user));
  });
}

function fetchThenRenderUsers() {
  fetchUsers().then(renderUsers);
}
