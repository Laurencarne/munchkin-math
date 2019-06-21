function profilePage() {
  currentPage = "ProfilePage";
  resetPage();
  createHeader(`${currentUser.name}'s Area`);

  const profileHolderDiv = createElement("div", "profileHolder");

  const pictureDiv = createElement("div");
  pictureDiv.append(createImage(currentUser.avatar, "profilePicture"));

  const profile = createElement("div", "profile");

  profile.append(
    createElement("h2", null, `Name: ${currentUser.name}`),
    createElement("h3", null, `Age: ${currentUser.age} Years Old!`)
  );

  profileDiv.append(profileHolderDiv);
  profileHolderDiv.append(pictureDiv, profile);

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

  const myTestsDiv = createElement("div", "innerDiv");
  myTestsDiv.append(
    createImage("https://i.imgur.com/vPg8yr4.png", "landingPageTestPicture"),
    createElement("p", null, "My Test Results")
  );
  myTestsDiv.addEventListener("click", displayPersonalScores);
  changeMyAgeDiv.addEventListener("click", updateUserAge);
  flexDivBody.append(changeMyAvatarDiv, changeMyAgeDiv, myTestsDiv);
}

function changeMyAvatar() {
  flexDivBody.innerHTML = "";
  profileDiv.innerHTML = "";
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
