const leaderboard = document.querySelector(`#leaderboard`);
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

leaderboard.innerHTML =
    highScores.map(score => {
        return `<li class="leaderboardList">${score.name} - ${score.score}</li>`;
    }).join(``);
