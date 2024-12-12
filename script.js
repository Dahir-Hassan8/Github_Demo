

const options = ["Rock", "Paper", "Scissors"];
let score = 0;
function startGame(playerChoice)  //take the player choice as an argument instead of setting variable
{
  let cpuChoice = options[Math.floor(Math.random() * 3)];
  let results; //will be undefined for now

  if (
    (playerChoice === "Rock" && cpuChoice === "Scissors") ||
    (playerChoice === "Paper" && cpuChoice === "Rock") ||
    (playerChoice === "Scissors" && cpuChoice === "Paper")
  ) {
    score++;
    document.body.style.backgroundColor = "#48f338"
    results = `You picked: ${playerChoice} and the CPU picked ${cpuChoice}.
    
    Congratulations you have won this round`;
  } else if (playerChoice === cpuChoice) {
    results = ` You both picked ${playerChoice}. It is a draw, please play again;`
    document.body.style.backgroundColor = "#F3F138"
  } else {
    score--;
    results = `You picked ${playerChoice} while the cpu picked ${cpuChoice}. you lost Better luck next time`;
    document.body.style.backgroundColor = "#B11B31"
  }
  document.getElementById("Result").innerText = results;
  document.getElementById("Score").innerText = `Score: ${score}`;
}



document.getElementById("Rock").addEventListener("click", function() {
    startGame("Rock")
})
document.getElementById("Paper").addEventListener("click", function() {
    startGame("Paper")
})
document.getElementById("Scissors").addEventListener("click", function() {
    startGame("Scissors")
})

document.getElementById("Reset").addEventListener("click", function() {
    score = 0;

document.body.style.backgroundColor = "";
document.getElementById("Score").innerText = `Score: ${score}`
document.getElementById("Result").innerText = `Game restarted please try again`})