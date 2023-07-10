'use strict';
// console.log(document.querySelector('.message').textContent);
// ocument.querySelector('.message').textContent = '🎉correct number';d
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//Hnadling click event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When No input
  if (!guess) {
    displayMessage('❌No number selected');
  }
  //when wins the game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉correct number';
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      guess > secretNumber ? '📈 too high!' : '📉 too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💔 You lost!!!!');
    }
  }
  //when input is high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💔 You lost!!!!';
  //   }
  // }
  // //When input is low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💔 You lost!!!!';
  //   }
  // }
});

//handling again button---restart button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  // document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = ' 15rem';
});
