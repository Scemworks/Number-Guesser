// Initialize game variables
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM elements
const guessInput = document.getElementById('guessInput');
const resultLabel = document.getElementById('result');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');

// Function to handle the guess
submitButton.addEventListener('click', function () {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        resultLabel.textContent = 'Please enter a valid number.';
        resultLabel.style.color = 'purple';
        return;
    }

    attempts++;

    // Check the guess and provide feedback
    if (guess < numberToGuess) {
        if (numberToGuess - guess <= 5) {
            resultLabel.textContent = "A little low! You're very close.";
            resultLabel.style.color = 'orange';
        } else if (numberToGuess - guess <= 10) {
            resultLabel.textContent = "A bit low. Try again!";
            resultLabel.style.color = 'yellow';
        } else {
            resultLabel.textContent = "Too low! Try again.";
            resultLabel.style.color = 'red';
        }
    } else if (guess > numberToGuess) {
        if (guess - numberToGuess <= 5) {
            resultLabel.textContent = "A little high! You're very close.";
            resultLabel.style.color = 'orange';
        } else if (guess - numberToGuess <= 10) {
            resultLabel.textContent = "A bit high. Try again!";
            resultLabel.style.color = 'yellow';
        } else {
            resultLabel.textContent = "Too high! Try again.";
            resultLabel.style.color = 'red';
        }
    } else {
        // Show congratulatory alert when the user guesses correctly
        alert(`Congratulations! You've guessed the number in ${attempts} attempts!`);
        resetGame(); // Reset game after showing the congratulations alert
    }

    guessInput.value = ''; // Clear input field after each guess
});

// Function to reset the game
resetButton.addEventListener('click', resetGame);

function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultLabel.textContent = "Enter your guess:"; // Reset result label
    resultLabel.style.color = 'green'; // Reset color
    guessInput.value = ''; // Clear the input field
}