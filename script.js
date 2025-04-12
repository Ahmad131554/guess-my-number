'use strict';

document.querySelector('.again');
document.querySelector('.check');
document.querySelector('.number');
document.querySelector('.message');
document.querySelector('.score');
document.querySelector('.highscore');
document.querySelector('.guess');

// Math.trunc() method returns number after just removing decimal part.
// Math.floor() method works similar for +ve numbers but returns 1 less for negative numbers.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
// const initialScore = 0;
let highscore = Number(document.querySelector('.highscore').textContent);

document
  .querySelector('.check')
  .addEventListener('click', function onCheckClick() {
    let guess = Number(document.querySelector('.guess').value);
    score = Number(document.querySelector('.score').textContent);
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number Entered!!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      // guess != secretNumber
      if (score > 1) {
        guess > secretNumber
          ? (document.querySelector('.message').textContent = 'Too High!!')
          : (document.querySelector('.message').textContent = 'Too Low!!');
        score--;
      } else {
        score = 0;
        document.querySelector('.message').textContent = 'You Loose!!';
      }
      document.querySelector('.score').textContent = score;
    }
  });

const resetGame = function () {
  document.querySelector('.message').textContent = 'Start Guessing...!!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  highscore = Number(document.querySelector('.highscore').textContent);
};

document.querySelector('.again').addEventListener('click', resetGame);
