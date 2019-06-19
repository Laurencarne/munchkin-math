function displayScorePage() {
  flexDivBody.innerHTML = "";
  bodyTitle.innerHTML = "";
  bodySecondTitle.innerHTML = "";
  resultDiv = document.createElement("div");

  resultText = document.createElement("h2");

  if (testScore >= 3) {
    resultText.innerHTML = `Congratulations ${
      currentUser.name
    }<br>You answered ${testScore} questions correctly!!!`;
  } else {
    resultText.innerHTML = `Unlucky ${
      currentUser.name
    }<br>You answered ${testScore} questions correctly!!!<br>Keep learning!!!`;
  }

  resultDiv.append(resultText);
  flexDivBody.append(resultDiv);
  makeLeaderboard();
}

function makeLeaderboard() {
  leaderboard = document.createElement("table");
  leaderboard.innerHTML = `<tr>
    <th>User</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>${currentUser.name}</td>
     
    <td>${testScore}</td>
  </tr>`;
  flexDivBody.append(leaderboard);
}

function getAllUserTestsFromServer() {
  return fetch(userTestsUrl).then(response => response.json());
}

function getUserTestFromServer(UserTestId) {
  return fetch(userTestsUrl + `${UserTestId}`).then(response =>
    response.json()
  );
}
