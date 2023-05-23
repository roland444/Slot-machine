// 1.Despot some money
// 2.Determine number of lines to bet on
// 2.Colect a bet amount
// 4.Spin the slot machine
// 5.Check if the user won
// 6.Give the user their winnings
// 7.Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
      const depositAmount = prompt("Enter a deposite amount: ");
        const numberDepositeAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositeAmount) || numberDepositeAmount <= 0) {
        console.log("Invalid deposit amount, try again");
        } else {
            return numberDepositeAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter teh number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
  
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines;
        }
      }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
