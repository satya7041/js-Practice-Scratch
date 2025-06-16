let attemptCount = 0;

let randomNumber ;
function generateNumber(){

    randomNumber = Math.floor(Math.random() * 100) + 1;
    // return randomNumber;
}
randomNumber = generateNumber();

function checkGuess() {
  let guessValue = document.getElementById("guess").value;
  console.log("value is", guessValue);
  if (guessValue === "" || isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
    document.getElementById("message").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }
  attemptCount++;
  if (parseInt(guessValue)=== randomNumber) {
    document.getElementById("message").textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
    document.getElementById("message").style.color = "green";
} else if (parseInt(guessValue) > randomNumber) {
   
    document.getElementById("message").textContent = "Too high! Try again.";
    document.getElementById("message").style.color = "red";
} else {

    document.getElementById("message").textContent = "Too Low! Try again."
    document.getElementById("message").style.color = "red"
  }
  // If the attempts exceed 3, show a loss message and stop further attempts
  if (attemptCount >= 3) {
    document.getElementById("message").textContent = `You lost! The correct number was: ${randomNumber}`;
    document.getElementById("message").style.color = "red";
    alert(`You lost! The correct number was: ${randomNumber}`);
    resetGame();
    return;
  }
  document.getElementById("attempts").textContent = `Attempts: ${attemptCount}`;
}

function resetGame(){
    attemptCount = 0;
    document.getElementById("attempts").textContent = `Attempts: ${attemptCount};`
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
}
