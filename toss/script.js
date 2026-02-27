const userChoice = document.querySelectorAll(".move-circle");
const placeholders = document.querySelectorAll('.placeholder-move');
const userLogo = placeholders[0];
const computerMove = placeholders[1];

const score = document.querySelectorAll('.score-item');
const userScore = score[0].querySelector('strong');
const computerScore = score[1].querySelector('strong');

const emojiMap = {
    Rock : "🪨",
    Scissors  : "✂️",
    Paper : "📄"
};

function aiChoice() {
    const moves = [ "Rock", "Paper", "Scissors" ];
    const guess = moves[Math.floor(Math.random() * 3)];
    
    computerMove.textContent = emojiMap[guess];
    return guess;
}

let aiScore = 0;
let scoreUser = 0;
userChoice.forEach(choice => {
    choice.addEventListener('click', () => {
        aiChoice();
        if(choice.children[1].textContent === 'Rock') {
            userLogo.textContent = "🪨";
            // winning situations for ai
            if(computerMove.textContent === '📄') {
                aiScore += 1;
                computerScore.textContent = aiScore;
                // losing situations
            } else if(computerMove.textContent === '✂️') {
                scoreUser += 1;
                userScore.textContent = scoreUser;
            } else {
                userScore.textContent = scoreUser;
                computerScore.textContent = aiScore;
            }
        } else if(choice.children[1].textContent === 'Paper') {
            userLogo.textContent = "📄";
            // winning situations for ai
            if(computerMove.textContent === '✂️') {
                aiScore += 1;
                computerScore.textContent = aiScore;
                // losing situations
            } else if(computerMove.textContent === '🪨') {
                scoreUser += 1;
                userScore.textContent = scoreUser;
            } else {
                userScore.textContent = scoreUser;
                computerScore.textContent = aiScore;
            }
        } else if(choice.children[1].textContent === 'Scissors') {
            userLogo.textContent = "✂️";
            // winning situations for ai
            if(computerMove.textContent === '🪨') {
                aiScore += 1;
                computerScore.textContent = aiScore;
                // losing situations
            } else if(computerMove.textContent === '📄') {
                scoreUser += 1;
                userScore.textContent = scoreUser;
            } else {
                userScore.textContent = scoreUser;
                computerScore.textContent = aiScore;
            }
        }
        // console.log(aiScore, scoreUser);
        // aiChoice();
    })
});