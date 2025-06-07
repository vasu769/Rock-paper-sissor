const choices = ["rock", "paper", "scissors"];
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultText = document.getElementById("resultText");
const buttons = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    updateScores(result);
    showResult(result, playerChoice, computerChoice);
  });
});

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateDisplay();
  resultText.textContent = "Make your move!";
  resultText.style.color = "#d63031";
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  updateDisplay();
}

function updateDisplay() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function showResult(result, player, computer) {
  if (result === "draw") {
    resultText.textContent = `🤝 It's a draw! You both chose ${player}`;
    resultText.style.color = "#fdcb6e";
  } else if (result === "player") {
    resultText.textContent = `✅ You win! ${capitalize(player)} beats ${computer}`;
    resultText.style.color = "#00b894";
  } else {
    resultText.textContent = `❌ You lose! ${capitalize(computer)} beats ${player}`;
    resultText.style.color = "#d63031";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
