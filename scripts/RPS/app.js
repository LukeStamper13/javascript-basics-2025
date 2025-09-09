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

let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
    console.log("Player picked: ", weapon);

    let computerWeapon = computerPickWeapon();

    console.log("Computer picked: ", computerWeapon);

    return weapon;
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
}