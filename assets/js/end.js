// -----------------Start Global Var----------------- //
const username = document.querySelector(`#username`);
const saveScore = document.querySelector(`#save-btn`);
const finalScore = document.querySelector(`#quiz-finalscore`);
const mostRecentScore = localStorage.getItem(`mostRecentScore`);
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

finalScore.innerText = mostRecentScore;
// -----------------End Global Var----------------- //

// -----------------Add Event Listener so when input entered, disabled is removed from the save button----------------- //
username.addEventListener(`keyup`, () => {
    saveScore.disabled = !username.value;
});
// -----------------Allow button to be clicked to save score and name and reset the page----------------- //
let saveHighscore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(6);

    localStorage.setItem(`highScores`, JSON.stringify(highScores));
    window.location.assign('/');
};