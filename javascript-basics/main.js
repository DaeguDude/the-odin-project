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
// function computerPlay() {
//   items = ['Rock', 'Paper', 'Scissors']
//   element = Math.floor(Math.random() * items.length)
//   return items[element]
// }

// // Single round of Rock Paper Scissors
// // Two parameters(playerSelection, computerSelection)
// // Return a string that declares the winner of the round 
// function playRound(playerSelection, computerSelection) {
  
//   playerSelection = playerSelection.toLowerCase();
//   computerSelection = computerSelection.toLowerCase();

//   return decideWinner(playerSelection, computerSelection);
// }

// function decideWinner(playerSelection, computerSelection) {
//   if( // win
//       (playerSelection === 'rock' && computerSelection === 'scissors') ||
//       (playerSelection === 'paper' && computerSelection === 'rock') ||
//       (playerSelection === 'scissors' && computerSelection === 'paper')
//   ) {
//     return (`You won! ${playerSelection} beats ${computerSelection}`) 
//   } 
  
//   else if ( // lose
//       (playerSelection === 'rock' && computerSelection === 'paper') ||
//       (playerSelection === 'paper' && computerSelection === 'scissors') ||
//       (playerSelection === 'scissors' && computerSelection === 'rock')
//   ) {
//     return (`You lost. ${playerSelection} loses to ${computerSelection}`) 
//   } 
  
//   else if(playerSelection === computerSelection) { // draw
//     return (`It's tie, ${playerSelection} and ${computerSelection}`)
//   } 
  
//   else { // It's not rock paper or scissors.
//     return playRound(prompt("Enter your choice again"), computerPlay())
//   }
// }

// function game() {
//   for (let i=0; i<5; i++) {
//     let userChoice = prompt("It's about to begin! Enter your choice!");
//     let computerChoice = computerPlay();

//     console.log(playRound(userChoice, computerChoice));
//   }
// }

// game();
