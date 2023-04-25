'use strict';

let unknownNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const scoreSelector = document.querySelector('.score');
const numberSelector = document.querySelector('.number');
const bodySelector = document.querySelector('body');
const guessSelector = document.querySelector('.guess');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessSelector.value);

  if (!guess) {
    displayMessage('Not a number');
  }

  if (guess === unknownNumber) {
    displayMessage('You Win');
    numberSelector.textContent = unknownNumber;

    bodySelector.style.backgroundImage = 'linear-gradient(rgb(0, 229, 250), rgb(0, 199, 100))';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (guess !== unknownNumber) {
    if (score > 1) {
      displayMessage(guess > unknownNumber ? 'Too much' : 'Too low');
      score--;
      scoreSelector.textContent = score;
    } else {
      displayMessage(`You lost`);
      scoreSelector.textContent = 0;
      bodySelector.style.backgroundImage = 'linear-gradient(rgb(86, 0, 59), rgb(255, 0, 0))';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  unknownNumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage('What nuber there is?');
  scoreQuery.textContent = 20;
  numberSelector.textContent = '?';
  guessSelector.value = '';
  bodySelector.style.backgroundImage = 'linear-gradient(rgb(255, 212, 212), rgb(123, 0, 180))';
});
