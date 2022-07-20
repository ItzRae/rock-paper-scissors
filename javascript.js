
/* create function computerPlay that randomly returns R P or S --> check in console
- fucntion w 2 parameters (playerSelection & computerSelection)
- playerSelection is case-insensitive
- return string determining winner of round
- game() func that runs playRound() in a loop from 0 to 5
*/

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == "scissors" && computerSelection == "scissors"
    || playerSelection == "rock" && computerSelection == "rock"
    || playerSelection == "paper" && computerSelection == "paper") {
        console.log("tie");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"
    || playerSelection == "rock" && computerSelection == "paper"
    || playerSelection == "scissors" && computerSelection == "rock") {
        console.log("comp win");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"
    || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "rock") {
        console.log("player win!!!!!!");    
    }
}

function game(id) {
    let userChoice = id;
    playRound(userChoice, computerPlay());

}


console.log(computerPlay());