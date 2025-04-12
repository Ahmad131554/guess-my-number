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

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
////////////////My code Above//////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage('⛔️ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage('🎉 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
