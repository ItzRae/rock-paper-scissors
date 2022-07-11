
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
    pass;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

console.log(computerPlay());