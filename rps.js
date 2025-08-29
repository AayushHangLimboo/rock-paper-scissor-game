const buttons = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");
const loader = document.getElementById('loader');
const choices = ["Rock", "Paper", "Scissors"];

buttons.forEach(div => {
  div.addEventListener("click", () => {
    resultDisplay.classList.add('hidden');
    loader.classList.remove('hidden');

    buttons.forEach(btn => btn.classList.remove('selected'));
    div.classList.add('selected');

    setTimeout(() => {

      const playerChoice = div.id;
      const randomNumber = Math.floor(Math.random() * 3);
      const computerChoice = choices[randomNumber];
      let result = '';

      if (playerChoice === computerChoice) {
        result = "Tie!";
      } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        result = "You Win!";
      } else {
        result = "You Lose!";
      }

      resultDisplay.textContent = `You: ${playerChoice}\nComputer: ${computerChoice}\n\n${result}`;

      loader.classList.add('hidden');
      resultDisplay.classList.remove('hidden');

    }, 1000);
  });
});