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

function checkScore(numOne, numTwo) {
  if (numOne >= 5 || numTwo >= 5) {
    return true;
  } else {
    return false;
  }
}


const divs = document.querySelectorAll('.rps-item');

let userChoice = '';
let computerChoice = '';
let result = '';
let userScore = 0;
let computerScore = 0;


divs.forEach( (div) => {
  div.addEventListener('click', (e) => { 
    // Both of them will have either rock, paper, or scissors
    userChoice = div.getAttribute('id');
    computerChoice = selectChoice();
    result = playRound(userChoice, computerChoice);
    
    if(result === 'win') {
      userScore++;
      // I need to have userScore section and change the value
    } else if(result === 'lose') {
      computerScore++;
      // I need to have computerScore section and change the value
    } else {
      // tie
    }

    // Finish the game
    if (checkScore(userScore, computerScore)) {
      
      // If true, we need to reset.
      prompt("Someone reached 5 points. Would you like to play again?");
    }

    console.log(`userScore: ${userScore}`);
    console.log(`computerScore: ${computerScore}`);
    
    
  });
});






