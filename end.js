const username = document.getElementById('username');
const name = document.getElementById('name');
const saveScoreBtn = document.getElementById('saveScoreBtn')
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore')
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    name.innerText = `Nice work, ${username.value}!`;
    saveScoreBtn.disabled = !username.value;
})



saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./");

    console.log(highScores);
};