let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');
let scoreOne = document.querySelector('#score--0');
let scoreTwo = document.querySelector('#score--1');
let diceImage = document.querySelector('.dice');
diceImage.style.display = "none";

btnRoll.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1);
  diceImage.src = `dice-${randomNumber}.png`;
  diceImage.style.display = "block"
  if (playerOne.classList.contains('player--active') && Number(scoreOne.textContent) < 100 && Number(scoreTwo.textContent) < 100) {
    let currentScore = document.querySelector('#current--0');
    let totalCurrentScore = Number(currentScore.textContent) + randomNumber;
    console.log(randomNumber);

    if (randomNumber !== 1) {
      currentScore.textContent = totalCurrentScore;
    } else {
      currentScore.textContent = 0;
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');
    }
  }

  else if (playerTwo.classList.contains('player--active') && Number(scoreOne.textContent) < 100 && Number(scoreTwo.textContent) < 100) {
    let currentScore = document.querySelector('#current--1');
    let totalCurrentScore = Number(currentScore.textContent) + randomNumber;
    console.log(randomNumber);

    if (randomNumber !== 1) {
      currentScore.textContent = totalCurrentScore;
    } else {
      currentScore.textContent = 0;
      playerTwo.classList.remove('player--active');
      playerOne.classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playerOne.classList.contains('player--active') && Number(scoreOne.textContent) < 100) {
    let currentScore = document.querySelector('#current--0');
    let totalScore = Number(scoreOne.textContent) + Number(currentScore.textContent);
    scoreOne.textContent = totalScore;
    currentScore.textContent = 0;

    if (totalScore >= 100) {
      playerOne.classList.add('player--winner');
      playerOne.classList.remove('player--active');
    } else {
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');
    }
  } 
  
  else if (playerTwo.classList.contains('player--active') && Number(scoreTwo.textContent) < 100) {
    let currentScore = document.querySelector('#current--1');
    let totalScore = Number(scoreTwo.textContent) + Number(currentScore.textContent);
    scoreTwo.textContent = totalScore;
    currentScore.textContent = 0;

    if (totalScore >= 100) {
      playerTwo.classList.add('player--winner');
      playerTwo.classList.remove('player--active');
    } else {
      playerTwo.classList.remove('player--active');
      playerOne.classList.add('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  diceImage.style.display = "none";
});
