//@ts-check

/*
1. player picks a weapon
2. computer pick a random weapon
3. determine winner
4. display results
5. play again?
*/

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let timesPlayed = 0;
let tieCount = 0;
let playerScore = 0;
let computerScore = 0;

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null) {
    throw "aftermath is not defined! Check your HTML!!";
}

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let playerWinsElement = document.getElementById("playerWins");
if (playerWinsElement == null) {
    throw "playerWins is not defined! Check your HTML!!";
}

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let computerWinsElement = document.getElementById("computerWins");
if (computerWinsElement == null) {
    throw "computerWins is not defined! Check your HTML!!";
}

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let timesTiedElement = document.getElementById("timesTied");
if (timesTiedElement == null) {
    throw "timesTied is not defined! Check your HTML!!";
}

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let totalPlaysElement = document.getElementById("totalPlays");
if (totalPlaysElement == null) {
    throw "totalPlays is not defined! Check your HTML!!";
}

const pickWeapon = function (weapon) {
    let aftermathText = `Player picked ${weapon}. `;

    let computerWeapon = computerPickWeapon();
    aftermathText = aftermathText + `Computer picked ${computerWeapon}. `

    // get results from decideResults()
    let results = decideResults(weapon, computerWeapon);

    let winner = "";
    if (results.isTie) {
        winner = results.description;
        tieCount += 1;
    }
    else if (results.playerWon) {
        winner = "Player wins.";
        playerScore += 1;
    }
    else {
        winner = "Computer wins!";
        computerScore += 1;
    }
    aftermathText = aftermathText + `${winner} Because ${results.description}`;
    timesPlayed += 1;

    aftermathElement.textContent = aftermathText;
    let playerWinsText = "Player has won " + (playerScore.toString()) + " times.";
    playerWinsElement.textContent = playerWinsText;
    let computerWinsText = "Computer has won " + (computerScore.toString()) + " times.";
    computerWinsElement.textContent = computerWinsText;
    let timesTiedText = "You have tied " + (tieCount.toString()) + " times.";
    timesTiedElement.textContent = timesTiedText;
    let totalPlaysText = "You have played " + (timesPlayed.toString()) + " times.";
    totalPlaysElement.textContent = totalPlaysText;
}

const computerPickWeapon = function () {
    const randNum = Math.floor(Math.random() * 3);
    let weapon = "None";
    if (randNum == 0) {
        return ROCK;
    }
    else if (randNum == 1) {
        return PAPER;
    }
    else if (randNum == 2) {
        return SCISSORS;
    }
    else {
        console.log("ERROR WEAPON NOT DEFINED!");
        throw "Unknown Weapon";
    }
}

function decideResults(player, computer) {
    let result = {
        isTie: false,
        playerWon: false,
        description: "",
    }

    if (player == computer) {
        result.isTie = true;
        result.description = "Tis a Tie";
        return result;
    }

    if (player == ROCK && computer == SCISSORS) {
        result.playerWon = true;
        result.description = "The Rock doth beateth the Scissors";
        return result;
    }

    if (player == PAPER && computer == ROCK) {
        result.playerWon = true;
        result.description = "The Paper doth covereth the Rock";
        return result;
    }

    if (player == SCISSORS && computer == PAPER) {
        result.playerWon = true;
        result.description = "The Scissors doth cuteth the Paper";
        return result;
    }

    /**
     * 
     * Computer wins
     * 
     */

    if (player == SCISSORS && computer == ROCK) {
        result.description = "The Rock doth beateth the Scissors";
        return result;
    }

    if (player == ROCK && computer == PAPER) {
        result.description = "The Paper doth covereth the Rock";
        return result;
    }

    if (player == PAPER && computer == SCISSORS) {
        result.description = "The Scissors doth cuteth the Paper";
        return result;
    }

    result.description = "Don't know what happened!";
    return result;
}