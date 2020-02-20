// 1. Remove logic that plays exactly five rounds

// 2. Create three buttons, one for each selection
// Add an event listener to the buttons that calls my playRound function
// with the correct playerSelection every time a button is clicked.

// 3. Add a div for displaying results and change all of my console.log
// into DOM methods 

// 4. Display the running score, and announce a winner of the game once
// one player reaches 5 points.

// 5. You will likely have to refactor your original code, that's okay
// Reworking old code is an important part of the programmer's life

// 6. When everything is finished, go back to the RPC project and add the
// new version


// This will return either 'rock', 'paper' or 'scissors'.
function selectChoice() {
  items = ['rock', 'paper', 'scissors']
  element = Math.floor(Math.random() * items.length)
  return items[element]
}

// Single round of Rock Paper Scissors
// Two parameters(playerSelection, computerSelection)
// Return a string that declares the winner of the round 
function playRound(playerSelection, computerSelection) {
  
  // win, lose, tie
  return decideWinner(playerSelection, computerSelection);
}

// Returns the results
function decideWinner(playerSelection, computerSelection) {
  if( // win
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } 
  
  else if ( // lose
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return 'lose';
  } 
  
  else { // draw
    return 'tie';
  } 
}

// Check the score
function checkScore(numOne, numTwo) {
  if (numOne >= 5 || numTwo >= 5) {
    return true;
  } else {
    return false;
  }
}

// Reset the game
function reset() {
  userScore = 0;
  computerScore = 0;
  userScoreBoard.textContent = userScore;
  computerScoreBoard.textContent = computerScore;
  
}


const divs = document.querySelectorAll('.rps-item');

let userChoice = '';
let computerChoice = '';
let result = '';
let userScore = 0;
let computerScore = 0;

let userScoreBoard = '';
let computerScoreBoard = '';
let resultBoard = '';


divs.forEach( (div) => {
  div.addEventListener('click', (e) => { 
    // Both of them will have either rock, paper, or scissors
    userChoice = div.getAttribute('id');
    computerChoice = selectChoice();
    result = playRound(userChoice, computerChoice);
    
    // Get resultBoard ready to present the result
    resultBoard = document.querySelector('#round-result');
    if(result === 'win') {
      resultBoard.textContent = 'You win!';
      userScore++;
      userScoreBoard = document.querySelector('#user-score');
      userScoreBoard.textContent = userScore;

      
    } else if(result === 'lose') {
      resultBoard.textContent = 'You lose!';
      computerScore++;
      computerScoreBoard = document.querySelector('#computer-score');
      computerScoreBoard.textContent = computerScore;
      // I need to have computerScore section and change the value
    } else {
      resultBoard.textContent = "It's tie!";
    }

    // Check the score to finish or replay
    if (checkScore(userScore, computerScore)) {
      let stopOrPlay = '';
      // Maybe we can add just a little time to show the result before prompt 
      // runs? Yeah it worked. So apparently, get html to show with what
      // our DOM object did, it takes time I guess.
      setTimeout(() => {
        stopOrPlay = prompt(`Someone reached 5 points. Would you like to play 
                      again?`);
        
        // null can cause error
        if (stopOrPlay != null) {
          stopOrPlay = stopOrPlay.toLowerCase();
        }
        
        if (stopOrPlay === 'yes' || stopOrPlay === '') {
          console.log("yes");
          reset();
        } else {
          console.log("No");
        }
      }, 100);
    }
  });
});






