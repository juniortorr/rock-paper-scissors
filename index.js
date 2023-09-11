let userScore = 0;
let puterScore = 0


function game () {
    if(userScore || puterScore < 5) {
        let newPlayerChoice = prompt('Rock, Paper, or Scissors?', '') 
        let newComputerChoice = getComputerChoice();
        let round = playRound(newPlayerChoice, newComputerChoice);
        console.log(`Computron picks ${newComputerChoice}`);
        if(round.includes('player wins')) {
            userScore++
        }
        if(round.includes('computer wins')) {
            puterScore++
        }
        else if(round.includes('tie')) {
            puterScore++
            userScore++
        }
        console.log(`${round} The score is ${userScore} to ${puterScore}`);
        game();
    }
    else if(userScore == 5){
        return 'You won!'
    }
    else if(puterScore == 5) {
        return 'You lose!'
    }
    else if(puterScore == userScore) {
        return 'You tied!'
    }
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice.toLowerCase() === 'rock' &&  computerChoice == 'scissors') {
        return 'rock beats scissors, player wins!'

    }
    else if(playerChoice.toLowerCase() === 'rock' && computerChoice == 'rock'){
        return 'tie!'
    }
    else if(playerChoice.toLowerCase() === 'rock' && computerChoice == 'paper') {
        return 'paper beats rock! computer wins!'
    }
    else if(playerChoice.toLowerCase() === 'scissors' && computerChoice == 'rock') {
        return 'rock beats scissors! computer wins!'
    }
    else if(playerChoice.toLowerCase() === 'scissors' && computerChoice == 'scissors'){
        return 'tie!'
    }
    else if(playerChoice.toLowerCase() === 'scissors' && computerChoice == 'paper') {
        return 'scissors beats paper, player wins!'
    }
    else if(playerChoice.toLowerCase() === 'paper' && computerChoice == 'rock') {
        return 'paper beats rock! player wins!'
    }
    else if(playerChoice.toLowerCase() === 'paper' && computerChoice == 'scissors') {
        return 'scissors beats paper! computer wins!'
    }
    else if(playerChoice.toLowerCase() === 'paper' && computerChoice == 'paper') {
        return 'tie!'
    }
    else {
        alert('idk what game you are playing');
        let playerChoice = prompt('Rock, Paper, or Scissors?', '');
        let newComputerChoice = getComputerChoice()
        console.log(`computrons new choice is ${newComputerChoice}`);
        playRound(playerChoice, newComputerChoice);
        console.log(playRound(playerChoice, newComputerChoice));
       
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




console.log(game());

