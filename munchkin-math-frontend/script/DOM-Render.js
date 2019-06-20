function getSingleTestFromServer(testId) {
  return fetch(testsUrl + `${testId}`).then(response => response.json());
}

function runTest(testId) {
  getSingleTestFromServer(testId).then(renderQuestion);
}
// MAKE USER
function makeUser() {
  event.preventDefault();

  const newUser = {
    name: event.target[0].value,
    age: event.target[1].value,
    avatar: event.target.dataset.url,
    color: ""
  };
  addUserToServer(newUser).then(sayHello);
  event.target.reset();
}
// ADD USER TO SERVER
function addUserToServer(user) {
  return fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(resp => resp.json());
}
// UPDATE USER AVATAR
function updateUserAvatar() {
  event.preventDefault();

  const updatedUser = {
    avatar: event.target.dataset.url
  };
  updateUserToServer(updatedUser, currentUser.id).then(updateCurrentUser);
}
// UPDATE USER AGE
function updateUserAge() {
  event.preventDefault();

  const updatedUser = {
    age: currentUser.age + 1
  };
  updateUserToServer(updatedUser, currentUser.id).then(updateCurrentUser);
}
// UPDATE USER ON SERVER
function updateUserToServer(user, id) {
  return fetch(usersUrl + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(resp => resp.json());
}

function updateCurrentUser(json) {
  currentUser = json;
  avatarNav.src = currentUser.avatar;
  profilePage();
}

function getAllUserTestsFromServer() {
  return fetch(userTestsUrl).then(response => response.json());
}

function getUserTestFromServer(UserTestId) {
  return fetch(userTestsUrl + `${UserTestId}`).then(response =>
    response.json()
  );
}
//  MAKE USERTESTS
function makeUserTest() {
  const newUserTest = {
    user_id: currentUser.id,
    test_id: currentTestId,
    score: testScore
  };
  addUserTestToServer(newUserTest);
}
// ADD USERTESTS TO SERVER
function addUserTestToServer(userTestObject) {
  return fetch(userTestsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userTestObject)
  });
}
