const highScoresList = document.querySelector('#leaderboard');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="leaderboard">${score.name} - ${score.score}</li>`
})