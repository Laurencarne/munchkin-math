function displayLeaderboardPage() {
  //Get each users userTests and add the scores
  resetPage();
  createHeader(`Overall Leaderboard`);
  makeTotalScoreboard();

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
    userScore[`${selectedName}`] = score;
    aggregateScores.push(userScore);
  });

  console.log(aggregateScores);
}

function makeTotalScoreboard() {
  flexDivBody.append((totalScoreboard = createElement("table")));
  totalScoreboard.innerHTML = `<tr>
      <th>User</th>
      <th>Total Score</th>
    </tr>`;
}
