'use strict';

let unknownNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const scoreSelector = document.querySelector('.score');
const numberSelector = document.querySelector('.number');
const bodySelector = document.querySelector('body').style.backgroundImage;
const guessSelector = document.querySelector('.guess');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessSelector.value);

  if (!guess) {
    displayMessage('Not a number!');
  }

  if (guess === unknownNumber) {
    displayMessage('✨You Win✨');
    numberSelector.textContent = unknownNumber;

    bodySelector = 'linear-gradient(rgb(0, 229, 250), rgb(0, 199, 100))';

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
      displayMessage('You lost 😥');
      scoreSelector.textContent = 0;
      numberSelector.textContent = unknownNumber;
      bodySelector = 'linear-gradient(-45deg, #ffe9e2, #ff0000, #8600a8, #220035)';
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
  bodySelector = 'llinear-gradient(-45deg, #ff3c01, #00d478, #4acfff, #ffee36)';
});
