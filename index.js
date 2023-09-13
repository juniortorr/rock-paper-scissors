let userScore = 0;
let puterScore = 0;
let playerChoice;
const content = document.querySelector('.content');
const userScoreDisplay = document.querySelector('#userScore');
const puterScoreDisplay = document.querySelector('#puterScore');
const currentScore = document.createElement('h1');
const currentPuterChoice = document.querySelector('#computerChoice')



function game(choice) {
    if(choice && userScore || puterScore < 5){
            let newComputerChoice = getComputerChoice();
            let round = playRound(choice, newComputerChoice);
            currentPuterChoice.textContent = `Computron picks ${newComputerChoice}`;
            if(round.includes('player wins')) {
                userScore++
                userScoreDisplay.textContent = userScore;
            } else if(round.includes('computer wins')) {
                puterScore++;
                puterScoreDisplay.textContent = puterScore;
            } else if(round.includes('tie')) {
                puterScore++
                userScore++
                userScoreDisplay.textContent = userScore;
                puterScoreDisplay.textContent = puterScore;
            }
            if(userScore == 5){
                currentScore.textContent = 'You Win!'
                content.append(currentScore);
            }
            else if(puterScore == 5) {
                currentScore.textContent = 'You Lose!'
                content.append(currentScore);
            }
            else if(puterScore && userScore == 5) {
                currentScore.textContent = 'Tie!'
                content.append(currentScore);
            } else {
                console.log();
                currentScore.textContent = `${round} The score is ${userScore} to ${puterScore}`
                content.append(currentScore);
            }
  
    }
}

function playRound(playersChoice, computerChoice) {
    if(playersChoice === 'rock' &&  computerChoice == 'scissors') {
        return 'rock beats scissors, player wins!'

    }
    else if(playersChoice === 'rock' && computerChoice == 'rock'){
        return 'tie!'
    }
    else if(playersChoice === 'rock' && computerChoice == 'paper') {
        return 'paper beats rock! computer wins!'
    }
    else if(playersChoice === 'scissors' && computerChoice == 'rock') {
        return 'rock beats scissors! computer wins!'
    }
    else if(playersChoice === 'scissors' && computerChoice == 'scissors'){
        return 'tie!'
    }
    else if(playersChoice === 'scissors' && computerChoice == 'paper') {
        return 'scissors beats paper, player wins!'
    }
    else if(playersChoice === 'paper' && computerChoice == 'rock') {
        return 'paper beats rock! player wins!'
    }
    else if(playersChoice === 'paper' && computerChoice == 'scissors') {
        return 'scissors beats paper! computer wins!'
    }
    else if(playersChoice === 'paper' && computerChoice == 'paper') {
        return 'tie!'
    }
    else {
        alert('idk what game you are playing');
        }
};


function getComputerChoice () {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: 
            return 'rock'
            
        case 1: 
            return 'paper'
            
        case 2: 
            return 'scissors'
            
    }
} 

const btnValues = document.querySelectorAll('.btn');
btnValues.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.value;
        game(playerChoice);
    })
})





