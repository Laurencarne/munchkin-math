function displayLeaderboardPage() {
  //Get each users userTests and add the scores
  resetPage();
  currentPage = "LeaderboardPage";
  createHeader(`Overall Leaderboard`);
  // makeTotalScoreboard();

  getAllUserTestsFromServer()
    // .then(sortUserTestArraybyUser)
    .then(addUserTestScores);
  // .then(filteredUserTestsLoop);
}

// //now a redundant step, can potentially be removed
// function sortUserTestArraybyUser(UserTestsArray) {
//   return UserTestsArray.sort(function(a, b) {
//     return a.user_id - b.user_id;
//   });
// }

function addUserTestScores(SortedTestsArray) {
  let aggregateScores = [];
  let userIds = [
    ...new Set(SortedTestsArray.map(userTest => userTest.user_id))
  ];
  userIds.forEach(id => {
    let userTests = SortedTestsArray.filter(test => test.user_id === id);
    let selectedName = userTests[0].user.name;
    let score = userTests.map(test => test.score).reduce((a, b) => a + b);
    let userScore = {};
    userScore["name"] = `${selectedName}`;
    userScore["score"] = score;
    aggregateScores.push(userScore);
  });

  tests = aggregateScores.slice(0);
  tests.sort(function(a, b) {
    let x = a.score;
    let y = b.score;
    return y < x ? -1 : y > x ? 1 : 0;
  });

  const totalScoreboard = createElement("table", "totalScoreboard");
  totalScoreboard.innerHTML = `<tr>
  <th>User</th>
  <th>Total Score</th>
  </tr>`;

  tests.forEach(test => {
    const leaderboardRow = createElement("tr", "tableRow");
    leaderboardRow.innerHTML = `<td>${test.name}</td><td>${test.score}</td>`;
    totalScoreboard.append(leaderboardRow);
  });
  flexDivBody.append(totalScoreboard);
}
