# GuessTheNumber
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (isNaN(userGuess)) {
        document.getElementById('resultMessage').textContent = "Please enter a valid number.";
    } else if (userGuess < numberToGuess) {
        document.getElementById('resultMessage').textContent = "Too low! Try again.";
    } else if (userGuess > numberToGuess) {
        document.getElementById('resultMessage').textContent = "Too high! Try again.";
    } else {
        document.getElementById('resultMessage').textContent = `Congratulations! You guessed the number ${numberToGuess} in ${attempts} attempts.`;
        // Optionally reset the game
        resetGame();
    }

    document.getElementById('attemptsMessage').textContent = `Attempts: ${attempts}`;
});

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('attemptsMessage').textContent = '';
}
