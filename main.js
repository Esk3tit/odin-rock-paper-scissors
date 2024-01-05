function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // Infinite loop, if there is no tie then we return so we break out of the loop
    // otherwise repeat loop until there is no tie
    while (true) {
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You win! Rock beats scissors.';
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'You win! Paper beats rock.';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'You lose! Scissors beats paper.';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'You win! Scissors beats paper.';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            // if there is a tie, replay the round
            computerSelection = getComputerChoice();
            playerSelection = prompt('Tie! Try again. Rock, paper, or scissors?');
            playerSelection = playerSelection.toLowerCase();
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper, or scissors?');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result.startsWith('You win')) {
            playerPoints++;
        } else {
            computerPoints++;
        }

        console.log(`Player: ${playerPoints}, Computer: ${computerPoints}`);
        console.log(result);
    }

    console.log(playerPoints > computerPoints ? 'YOU\'RE WINNER!' : 'L BOZO');
}

game();