'use strict';

let unknownNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

const scoreSelector = document.querySelector('.score');
const numberSelector = document.querySelector('.number');
const bodySelector = document.querySelector('body').style.backgroundImage;
const guessSelector = document.querySelector('.guess');
const messageSelector = document.querySelector('.message');

const displayMessage = function (message) {
  messageSelector.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessSelector.value);

  if (!guess) {
    displayMessage('Not a number!');
  }

  if (guess === unknownNumber) {
    displayMessage('✨You Win✨');
    numberSelector.textContent = unknownNumber;
    messageSelector.style.color = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      if (highscore === 20) {
        document.querySelector('.show-highscore').style.color = 'gold';
      }
    }
  }

  if (guess !== unknownNumber) {
    if (score > 1) {
      displayMessage(guess > unknownNumber ? 'Too much' : 'Too low');
      score--;
      scoreSelector.textContent = score;
    } else {
      displayMessage('You lost 😥');
      messageSelector.style.color = 'red';
      scoreSelector.textContent = 0;
      numberSelector.textContent = unknownNumber;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  unknownNumber = Math.trunc(Math.random() * 50) + 1;

  displayMessage('What number there is? 🤔');
  scoreSelector.textContent = 20;
  numberSelector.textContent = '?';
  guessSelector.value = '';
  messageSelector.style.color = 'inherit';
});
