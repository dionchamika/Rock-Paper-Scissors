let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

function computerPlay() {
  let options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true;
  });
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let result = '';

 
    if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose the same!`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore += 1;
    result = `You win! ${playerSelection} beats ${computerSelection}`;

    if (playerScore === 5) {
      result += ' You won!';
      disableButtons();
      result += ' Please refresh the page!';
    }
  } else {
    computerScore += 1;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;

    if (computerScore === 5) {
      result += ' I won!';
      disableButtons();
      result += ' Please refresh the page!';
    }
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  document.getElementById('result').textContent = result;
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    playRound(button.value);
  });
});
