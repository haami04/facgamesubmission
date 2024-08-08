document.addEventListener('DOMContentLoaded', () => {
  const playerScoreElement = document.getElementById('player-score');
  const computerScoreElement = document.getElementById('computer-score');
  const resultMessageElement = document.getElementById('result-message');
  const resetButton = document.getElementById('reset-game');
  const choices = document.querySelectorAll('.choice');

  let playerScore = 0;
  let computerScore = 0;

  choices.forEach(choice => choice.addEventListener('click', playRound));
  resetButton.addEventListener('click', resetGame);

  function playRound(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    updateScore(winner);
    displayResult(winner, playerChoice, computerChoice);
  }

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(player, computer) {
    if (player === computer) {
      return 'draw';
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }

  function updateScore(winner) {
    if (winner === 'player') {
      playerScore++;
      playerScoreElement.textContent = `Player: ${playerScore}`;
    } else if (winner === 'computer') {
      computerScore++;
      computerScoreElement.textContent = `Computer: ${computerScore}`;
    }
  }

  function displayResult(winner, playerChoice, computerChoice) {
    if (winner === 'draw') {
      resultMessageElement.textContent = `It's a draw! You both chose ${capitalize(playerChoice)}.`;
    } else if (winner === 'player') {
      resultMessageElement.textContent = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
      resultMessageElement.textContent = `Computer wins! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = 'Player: 0';
    computerScoreElement.textContent = 'Computer: 0';
    resultMessageElement.textContent = 'Make your move!';
  }
});
