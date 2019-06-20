function displayTestResultPage() {
  resetPage();

  if (testScore >= 3) {
    createHeader(`Congratulations ${currentUser.name}`);
    createSubHeading(`You answered ${testScore} questions correctly!!!`);
  } else {
    createHeader(`Keep Learning, ${currentUser.name}`);
    createSubHeading(`You answered ${testScore} questions correctly!!!`);
  }
}

function makeLeaderboard() {
  flexDivBody.append((leaderboard = createElement("table")));
  leaderboard.innerHTML = `<tr>
    <th>User</th>
    <th>Test</th>
    <th>Score</th>
  </tr>`;
}

//function that takes current user id and shows all tests for that user

function displayPersonalScores() {
  resetPage();
  createHeader(`Your completed tests:`);
  makeLeaderboard();
  getAllUserTestsFromServer()
    .then(logUserTestIdsLoop)
    .then(filteredUserTestsLoop);
}

function logUserTestIdsLoop(userTestArray) {
  return userTestArray.filter(el => {
    return el.user_id === currentUser.id;
  });
}

function filteredUserTestsLoop(filteredUserTestsArray) {
  debugger;
  filteredUserTestsArray.forEach(logPersonalTest);
}

function logPersonalTest(userTest) {
  console.log(
    `Test: ${userTest.test_id}, name: ${userTest.test.name}, Score: ${
      userTest.score
    }`
  );
  const scoreRow = createElement("tr");
  scoreRow.innerHTML = `<td>${userTest.user.name}</td><td>${
    userTest.test.name
  }</td><td>${userTest.score}</td>`;
  leaderboard.append(scoreRow);
}
