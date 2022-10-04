'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23; //we used value because it is an input
console.log(document.querySelector('.guess').value);
 */

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.guess').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You Lost';
    document.querySelector('.score').textContent = 0;
  }
});
