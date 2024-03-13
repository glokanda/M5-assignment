/*-------------------------------------------------------------------------------
# Name:        module 5 / Question #2
# Purpose: 
# Author:      Gloire Kanda
# Created:     03/05/2024
# Copyright:   (c) Kanda 2024
-------------------------------------------------------------------------------*/


function getUserChoice() {
    // Welcome message and prompt for user input
    alert("Welcome to The Rock, Paper, Scissors Game!");
    let choice = prompt("Choose rock, paper, or scissors: ");
  
    // Validate user input using a loop
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt("Invalid choice. Please choose rock, paper, or scissors: ");
    }
  
    // Return the validated user choice
    return choice; 
  }
  
  function getComputerChoice() {
    // Generate a random number between 0 and 1 (inclusive)
    const randomNumber = Math.random();
  
    // Map the random number to a choice using conditional logic
    if (randomNumber <= 0.33) {
      return "rock";
    } else if (randomNumber <= 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    // Determine the winner based on game logic
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return "You win! Rock destroys scissors.";
      } else {
        return "Computer wins! Paper covers rock.";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "You win! Paper covers rock.";
      } else {
        return "Computer wins! Scissors cut paper.";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return "You win! Scissors cut paper.";
      } else {
        return "Computer wins! Rock destroys scissors.";
      }
    } else {
      // Handle unexpected user input (shouldn't be necessary after validation)
      return "Invalid choice. Please try again.";
    }
  }
  
  function playGame() {
    // Get user and computer choices
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
  
    // Determine the winner and display the result
    const winner = determineWinner(userChoice, computerChoice);
    alert(winner);
  }
  
  // Call the main function to start the game
  playGame();
  