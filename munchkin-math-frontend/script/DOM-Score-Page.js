function displayScorePage() {
  resetPage();

  if (testScore >= 3) {
    createHeader(`Congratulations ${currentUser.name}`);
    createSubHeading(`You answered ${testScore} questions correctly!!!`);
  } else {
    createHeader(`Keep Learning, ${currentUser.name}`);
    createSubHeading(`You answered ${testScore} questions correctly!!!`);
  }

  makeLeaderboard();
}

function makeLeaderboard() {
  flexDivBody.append((leaderboard = createElement("table")));
  leaderboard.innerHTML = `<tr>
    <th>User</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>${currentUser.name}</td>

    <td>${testScore}</td>
  </tr>`;
}
