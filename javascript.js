
/* create function computerPlay that randomly returns R P or S --> check in console
- fucntion w 2 parameters (playerSelection & computerSelection)
- playerSelection is case-insensitive
- return string determining winner of round
- game() func that runs playRound() in a loop from 0 to 5
*/

let playerScore = 0;
let computerScore = 0;
let gameIsOver = false;



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
        document.getElementById("round").innerHTML = "Round: Tie!";
        console.log("tie");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"
    || playerSelection == "rock" && computerSelection == "paper"
    || playerSelection == "scissors" && computerSelection == "rock") {
        console.log("comp win");
        computerScore++;
        document.getElementById("round").innerHTML = "Round: Computer Wins!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"
    || playerSelection == "scissors" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "rock") {
        console.log("player win!!!!!!");    
        playerScore++;
        document.getElementById("round").innerHTML = "Round: Player Wins!"
    }

    if (playerScore == 5){
        gameOver("Player");
    }
    else if (computerScore == 5){
        gameOver("Computer");
    }

    console.log(playerScore);
    console.log(computerScore);
}

function displayLives() {
    document.getElementById("player-score").innerHTML = `Score: ${playerScore}`;
    document.getElementById("computer-score").innerHTML = `Score: ${computerScore}`;
}

window.onload = function() {
    playerScore = 0;
    computerScore = 0;
    displayLives();
}

function gameOver(winner) {
    gameOver = true;
    alert(`GAME OVER! ${winner} wins!`);
    document.location.reload();
    return;
}

function game(id, playerScore, computerScore) {
    userChoice= id;
    playRound(userChoice, computerPlay());
    displayLives();
}

//console.log(computerPlay());