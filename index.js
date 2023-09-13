let userScore = 0;
let puterScore = 0;
let playerChoice;



function game(choice) {
    if(choice && userScore || puterScore < 5){
            let newComputerChoice = getComputerChoice();
            let round = playRound(choice, newComputerChoice);
            console.log(`Computron picks ${newComputerChoice}`);
            if(round.includes('player wins')) {
                userScore++
            } else if(round.includes('computer wins')) {
                puterScore++
            } else if(round.includes('tie')) {
                puterScore++
                userScore++
            }
            if(userScore == 5){
                console.log('You won!')
            }
            else if(puterScore == 5) {
                console.log('You lose!')
            }
            else if(puterScore && userScore == 5) {
                console.log('You tied!')
            } else {
                console.log(`${round} The score is ${userScore} to ${puterScore}`);
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





