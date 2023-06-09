/*jshint esversion: 6 */

// -----------------Start Global Var----------------- //
const question = document.querySelector(`#question`);
const answerText = Array.from(document.querySelectorAll(`.answer-text`));
const progressText = document.querySelector(`#progress-text`);
const scoreText = document.querySelector(`#score`);

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// -----------------End Global Var----------------- //

// -----------------Start Questions----------------- //

let questions = [
    {
        question: "What year was Runescape 2 created?",
        choice1: "1997",
        choice2: "2001",
        choice3: "2007",
        choice4: "2023",
        answer: 2,
    },
    {
        question: "What is the maximum amount of clan members you are able to have ranked in your clan chat?",
        choice1: "250",
        choice2: "500",
        choice3: "750",
        choice4: "1,000",
        answer: 2,
    },
    {
        question: "What year did Old School Runescape (Runescape 2) get re released?",
        choice1: "2010",
        choice2: "2007",
        choice3: "2013",
        choice4: "2020",
        answer: 3,
    },
    {
        question: "What is the maximum total level achievable on tutorial island?",
        choice1: "56",
        choice2: "49",
        choice3: "35",
        choice4: "22",
        answer: 1,
    },
    {
        question: "Which of the following is able to be purchased using star dust from Dusuri's star shop?",
        choice1: "Bag Of Diamonds",
        choice2: "Coal Bag",
        choice3: "Tinderbox",
        choice4: "Bag Of Gems",
        answer: 4,
    },
    {
        question: "Which of the following is a reward from the minigame Wintertodt",
        choice1: "Herb Box",
        choice2: "10,000GP",
        choice3: "Spoils Of War",
        choice4: "Supply Create",
        answer: 4,
    },
    {
        question: "How much Slayer XP do you get for dismantling an Oak Birdhouse on Fossil Island?",
        choice1: "420",
        choice2: "380",
        choice3: "400",
        choice4: "450",
        answer: 1,
    },
    {
        question: "How much XP do you get for sacrificing Dragon Bones to a Saradomin Gilded Alter?",
        choice1: "175",
        choice2: "180",
        choice3: "220",
        choice4: "252",
        answer: 4,
    },
    {
        question: "Which of the following medium diaries have a task that consists of killing a Fire Giant inside the waterfall dungeon?",
        choice1: "Falador",
        choice2: "Kandarin",
        choice3: "Varrock",
        choice4: "Ardougne",
        answer: 2,
    },
    {
        question: "One of the most famous Runescape players was named Zezima. How long did Zezima reign as number 1 on the HiScores for?",
        choice1: "2002 - 2005",
        choice2: "2004 - 2007",
        choice3: "2003 - 2009",
        choice4: "2005 - 2012",
        answer: 2,
    },
];

const scorePoints = 100;
const maxQuestions = 10;

// -----------------End Questions----------------- //

// -----------------Start Quiz----------------- //

let startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// -----------------End Start Quiz----------------- //

// -----------------Track Answers----------------- //

let getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem("recentScore", score);
        return window.location.assign(`end-page.html`);
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    const choices = [currentQuestion.choice1, currentQuestion.choice2, currentQuestion.choice3, currentQuestion.choice4];
    shuffle(choices);
    answerText.forEach((choice, index) => {
        choice.innerText = choices[index];
        if (choices[index] === currentQuestion['choice' + (currentQuestion.answer)]) {
            choice.dataset.number = currentQuestion.answer;
        } else {
            choice.dataset.number = index + 1;
        }
    });

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswer = true;
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// -----------------End Track Answers & End Quiz----------------- //

// -----------------Checks if answers are correct or incorrect----------------- //

answerText.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(scorePoints);
        }

        selectedChoice.parentElement.classList.add(classToApply);
// -----------------Timeout function----------------- //
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// -----------------End Correct / Incorrect Answer Logic----------------- //

// -----------------Increases score if correct----------------- //

let incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startQuiz();
