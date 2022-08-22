'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highscore = 0;
let no_of_guesses = 0;
let guessArray = [];

//Game

document.querySelector('.play').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  //When there's no input
  if ((!guessNumber && guessNumber < 1) || guessNumber > 20) {
    document.querySelector('.message').textContent =
      'Enter Number Between 1 and 20 to Guess!';

    //When the player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎊🎆🎇';
    document.querySelector('.number').textContent = secretNumber;

    //Changing the background color!
    document.querySelector('.container').style.backgroundColor = '#0c4105';
    document.querySelector('.number').style.backgroundColor = '#0c4105';
    document.querySelector('.play').style.backgroundColor = '#0c4105';

    //Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the guess is wrong
  } else if (guessNumber !== secretNumber) {
    no_of_guesses += 1;
    guessArray.push(guessNumber);
    document.querySelector('.guessed-in').textContent =
      'Total number of guesses: ' + no_of_guesses;
    document.querySelector('.guessed').textContent =
      'Your guesses were: ' + guessArray;

    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNumber > secretNumber ? 'Too High! ↗️' : 'Too Low ↙️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.container').style.backgroundColor = '#f91818';
      document.querySelector('.number').style.backgroundColor = '#f91818';
      document.querySelector('.play').style.backgroundColor = '#f91818';
      document.querySelector('.number').textContent = 0;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = 10;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = 0;

  document.querySelector('.guessed-in').textContent =
    'Total number of guesses: ' + 0;
  document.querySelector('.guessed').textContent = 'Your guesses were: ' + 0;

  document.querySelector('.container').style.backgroundColor = '#cecece';
  document.querySelector('.number').style.backgroundColor = '#4d4d4d';
  document.querySelector('.play').style.backgroundColor = '#4d4d4d';
});
