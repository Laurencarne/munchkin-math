function profilePage() {
  currentPage = "ProfilePage";
  resetPage();
  createHeader(`${currentUser.name}'s Area`);

  // const profileDiv = createElement("div", "flexDivBody");

  const innerDiv = createElement("div", "innerDiv");
  innerDiv.append(
    createImage(currentUser.avatar, "landingPageTestPicture"),
    createElement("")
  );

  // profileDiv.append(innerDiv);

  bodySecondTitle.append(
    innerDiv,
    profileDiv,
    createElement("h2", null, currentUser.name),
    createElement("h3", null, currentUser.age)
  );

  addUpdateDiv();
}

function addUpdateDiv() {
  const changeMyAvatarDiv = createElement("div", "innerDiv");
  changeMyAvatarDiv.append(
    createImage("https://i.imgur.com/WqiJEuY.png", "landingPageTestPicture"),
    createElement("p", null, "Change My Avatar")
  );
  changeMyAvatarDiv.addEventListener("click", changeMyAvatar);

  const changeMyAgeDiv = createElement("div", "innerDiv");
  changeMyAgeDiv.append(
    createImage("https://i.imgur.com/SfPAZzf.png", "landingPageTestPicture"),
    createElement("p", null, "It's My Birthday!")
  );
  changeMyAgeDiv.addEventListener("click", updateUserAge);
  flexDivBody.append(changeMyAvatarDiv, changeMyAgeDiv);
}

function changeMyAvatar() {
  flexDivBody.innerHTML = "";
  createSubHeading("Choose Your New Avatar");

  const form = createElement("form", "input");
  const imageHolderDiv = createElement("div", "imageHolderDiv");
  const submit = createElement("input", "submit-box");
  submit.type = "submit";
  submit.name = "Submit";
  submit.value = "Change!";

  avatars.forEach(image => {
    imageHolderDiv.appendChild(displayUserAvatars(image));
  });

  form.append(imageHolderDiv, submit);
  flexDivBody.appendChild(form);

  form.addEventListener("submit", updateUserAvatar);
}
