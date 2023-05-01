// -----------------Start Global Var----------------- //
const username = document.querySelector(`#username`);
const saveScore = document.querySelector(`#save-score`);
const finalScore = document.querySelector(`#quiz-finalscore`);
const recentScore = localStorage.getItem(`recentScore`);
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];