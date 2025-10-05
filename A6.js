const randomNumber = Math.floor(Math.random() * 50) + 1;
let chancesLeft = 5;
const input = document.getElementById('userGuess');
const btn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const chances = document.getElementById('chances');

btn.addEventListener('click', function() {
  const guess = Number(input.value);
  if (guess < 1 || guess > 50 || isNaN(guess)) {
    message.textContent = "Enter a number between 1 and 50";
    return;
  }
  chancesLeft--;
  if (guess === randomNumber) {
    message.textContent = "Correct! You guessed the number.";
    input.disabled = true;
    btn.disabled = true;
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Too low! Try again.";
  }
  chances.textContent = chancesLeft;
  if (chancesLeft === 0 && guess !== randomNumber) {
    message.textContent = `Game Over! The correct number was ${randomNumber}.`;
    input.disabled = true;
    btn.disabled = true;
  }
  input.value = '';
  input.focus();
});
