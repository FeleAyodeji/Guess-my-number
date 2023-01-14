'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23; //we used value because it is an input
console.log(document.querySelector('.guess').value);
 */

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
let highscore = 0;

const displayMessage = function (message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {  //  added functionality to the check button
  const guess = Number(document.querySelector('.guess').value);  // it  takes in a value (number) . An input
  console.log(guess);

  //when the player enters no number
  if (!guess) {
    document.querySelector('.guess').textContent = 'No Number';
  }

  //when the player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'correct Number'
    displayMessage("correct Number")
    document.querySelector('.number').textContent = secretNumber; // the secretnumber is displayed when the guess matches it
    document.querySelector('body').style.backgroundColor = '#60b347'; //chnage the backgorund color to green when the player wins
    document.querySelector('.number').style.width = '30rem'; // changes the width of the number box when the player wins
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  //when the player is wrong.
  else if (guess == !secretNumber) {
    // applying the DRY principle .DRY = donot repeat yourself
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';
        displayMessage( guess > secretNumber ? 'Too high' : 'Too low')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lost';
      displayMessage('You Lost')
      document.querySelector('.score').textContent = 0;
    }
  }
});

//when the player enters a number greater than the secretnumber
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost';
//       document.querySelector('.score').textContent = 0;
//     }

//   //when the player enters a number less than the secretnumber
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     document.querySelector('.message').textContent = 'You Lost';
//     document.querySelector('.score').textContent = 0;
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  //the again button serves the reset function
  score = 20;
  document.querySelector('.score').textContent = score; //restoring the initial value of score
  // document.querySelector('.message').textContent = 'Start guessing...'; // retore the initial condition of message
  displayMessage('Start guessing...')
  document.querySelector('.guess').value = ''; // restoring the initial condition of guess
  document.querySelector('body').style.backgroundColor = '#222'; // restoring the initial color of the background
  document.querySelector('.number').style.width = '15rem'; //restoring the initial width of the number box
  document.querySelector('.number').textContent = '?';
});
