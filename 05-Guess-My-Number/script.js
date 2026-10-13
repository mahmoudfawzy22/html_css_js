'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let displayMessage = function (messge) {
  document.querySelector('.message').textContent = messge;
};

let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    displayMessage('⛔️ No number!');
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      score -= 1;
      displayMessage(
        guessNumber > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      displayMessage('💥 You lost the game!');
    }
  } else if (guessNumber === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
