function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

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
        return 'Tie! Play again.';
    }
}

function onClickHandler(playerSelection, scores, playerScoreElem, computerScoreElem, resultsContainerElem, rockButton, paperButton, scissorsButton) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.startsWith('You win')) {
        scores.player++;
    } else if (result.startsWith('You lose')) {
        scores.computer++;
    }

    // Add new p to display result if it doesn't exist, otherwise update existing div
    const resultElem = document.querySelector('p#result');
    if (!resultElem) {
        const newResultElem = document.createElement('p');
        newResultElem.id = 'result';
        newResultElem.textContent = result;
        resultsContainerElem.appendChild(newResultElem);
    } else {
        resultElem.textContent = result;
    }

    playerScoreElem.textContent = `Player score: ${scores.player}`;
    computerScoreElem.textContent = `Computer score: ${scores.computer}`;

    // If either player or computer reaches 5 points, display winner and disable buttons
    if (scores.player === 5 || scores.computer === 5) {
        const winnerElem = document.createElement('p');
        winnerElem.id = 'winner';
        winnerElem.textContent = scores.player > scores.computer ? 'YOU\'RE WINNER!' : 'L BOZO';
        resultsContainerElem.appendChild(winnerElem);

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function game() {
    const scores = { player: 0, computer: 0 };

    // Create three buttons for rock, paper, and scissors
    // create it w/ dom methods, set text content, add event listeners for click to call playRound, append to body
    const rockButton = document.querySelector('button#rock-btn');
    const paperButton = document.querySelector('button#paper-btn');
    const scissorsButton = document.querySelector('button#scissors-btn');
    const resetButton = document.querySelector('button#reset-btn');

    const playerScoreElem = document.querySelector('p#player-score');
    const computerScoreElem = document.querySelector('p#computer-score');
    const resultsContainerElem = document.querySelector('div#results-container');

    rockButton.addEventListener('click', () => onClickHandler(
        'rock',
        scores,
        playerScoreElem,
        computerScoreElem,
        resultsContainerElem,
        rockButton,
        paperButton,
        scissorsButton
    ));

    paperButton.addEventListener('click', () => onClickHandler(
        'paper',
        scores,
        playerScoreElem,
        computerScoreElem,
        resultsContainerElem,
        rockButton,
        paperButton,
        scissorsButton
    ));

    scissorsButton.addEventListener('click', () => onClickHandler(
        'scissors',
        scores,
        playerScoreElem,
        computerScoreElem,
        resultsContainerElem,
        rockButton,
        paperButton,
        scissorsButton
    ));

    // Reset score and remove all extra result p's if they exist for reset button
    // Also remove disabled button statuses too in case user wins/loses and clicks reset
    resetButton.addEventListener('click', () => {
        scores.player = 0;
        scores.computer = 0;

        playerScoreElem.textContent = `Player score: ${scores.player}`;
        computerScoreElem.textContent = `Computer score: ${scores.computer}`;

        if (document.querySelector('p#winner')) {
            resultsContainerElem.removeChild(document.querySelector('p#winner'));
        }

        if (document.querySelector('p#result')) {
            resultsContainerElem.removeChild(document.querySelector('p#result'));
        }

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    })
}

game();