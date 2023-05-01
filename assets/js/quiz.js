const question = document.querySelector(`#question`);
const answerText = Array.from(document.querySelectorAll(`.answer-text`));
const progressText = document.querySelector(`#progress-text`);
const scoreText = document.querySelector(`#score`);

let currentQuestion = {};
let acceptingAnswer = true;