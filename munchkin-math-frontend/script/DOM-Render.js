function getSingleTestFromServer(testId) {
  return fetch(testsUrl + `${testId}`).then(response => response.json());
}

function runTest(testId) {
  getSingleTestFromServer(testId).then(renderQuestion);
}

function makeUserTest() {
  const newUserTest = {
    user_id: currentUser.id,
    test_id: currentTestId,
    score: testScore
  };
  addUserTestToServer(newUserTest);
}

function addUserTestToServer(userTestObject) {
  return fetch(userTestsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userTestObject)
  });
}

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

function addUserToServer(user) {
  return fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(resp => resp.json());
}

function getAllUserTestsFromServer() {
  return fetch(userTestsUrl).then(response => response.json());
}

function getUserTestFromServer(UserTestId) {
  return fetch(userTestsUrl + `${UserTestId}`).then(response =>
    response.json()
  );
}
