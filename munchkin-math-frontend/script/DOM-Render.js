const baseUrl = "http://localhost:3000/";
const usersUrl = `${baseUrl}users`;
const testsUrl = `${baseUrl}tests`;
const questionsUrl = `${baseUrl}questions`;

const fetchTestsData = () => fetch(testsUrl).then(response => response.json());

const getJsonData = json => json;

function renderQuestion(filterTests) {
  filterTests.forEach(question => {
    body.appendChild(addToPage(question));
  });
}

function displayTestQuestion(testName) {
  fetchTestsData().then(json => {
    tests = json.slice(0);
    let filterTests = tests.filter(test => test.name === testName);
    renderQuestion(filterTests);
  });
}

// // function renderQuestions(json) {
// //   // return data.find(data => data.name === testName);
// //   json.forEach(test => {
// //     test.questions.forEach(question => {
// //       const pp = document.createElement("p");
// //       pp.innerText = question.question;
// //       body.appendChild(pp);
// //     });
// //   });
// // }
//
// function fetchThenRenderTestQuestion() {
//   return fetchTestsData()
//     .then(getJsonData)
//     .then(renderQuestions);
// }
//
// function addToPage(question) {
//   const divy = document.createElement("div");
//   const pp = document.createElement("p");
//   pp.innerText = question;
//   body.appendChild(divy);
//   divy.appendChild(pp);
//   return divy;
// }
//
