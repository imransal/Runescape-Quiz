// -----------------Start Global Var----------------- //
const username = document.querySelector(`#username`);
const saveScore = document.querySelector(`#save-score`);
const finalScore = document.querySelector(`#quiz-finalscore`);
const recentScore = localStorage.getItem(`recentScore`);
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

const maxHighScores = 10;

finalScore.innerText = recentScore;

// -----------------Remove disabled option when input is typed into----------------- //
username.addEventListener(`keyup`, () => {
    saveScore.disabled = !username.value;
});
// -----------------Save button should save user score and name and save user name to local storage and reset page----------------- //
let saveHighscore = e => {
    e.preventDefault();

    const score = {
        score: recentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem(`highScores`, JSON.stringify(highScores));
    window.location.assign(`/`);


};