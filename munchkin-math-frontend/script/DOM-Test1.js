// const baseUrl = "http://localhost:3000/";
// const usersUrl = `${baseUrl}users/`;
// const testsUrl = `${baseUrl}tests/`;
// const questionsUrl = `${baseUrl}questions/`;
// const getJsonData = json => json;

// const GetAllTestsFromServer = () =>
//   fetch(testsUrl).then(response => response.json());

// function getSingleTestFromServer(testId) {
//   return fetch(testsUrl + `${testId}`).then(response => response.json());
// }

// function getQuestionsArrayFromTest(testObject) {
//   return testObject.questions;
// }

// function getQuestionObject(questionArray) {
//   return questionArray[0];
// }

// function runTest(testId) {
//   getSingleTestFromServer(testId)
//     .then(getQuestionsArrayFromTest)
//     .then(getQuestionObject)
//     .then(renderSingleQuestion);
// }

// function renderSingleQuestion(questionObject) {
//   body.innerHTML = "";
//   const questionCard = document.createElement("div");

//   const questionDiv = document.createElement("div");
//   questionDiv.innerHTML = `<h3> ${questionObject.question} </h3> <img src= ${
//     questionObject.image_url
//   }>`;

//   const answersDiv = document.createElement("div");

//   const answerA = document.createElement("div");
//   answerA.innerText = questionObject.correct_answer;

//   const answerB = document.createElement("div");
//   answerB.innerText = questionObject.answer1;

//   const answerC = document.createElement("div");
//   answerC.innerText = questionObject.answer2;

//   const answerD = document.createElement("div");
//   answerD.innerText = questionObject.answer3;

//   answersDiv.append(answerA, answerB, answerC, answerD);
//   debugger;

//   questionCard.append(questionDiv, answersDiv);

//   body.append(questionCard);
// }