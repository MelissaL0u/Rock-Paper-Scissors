function getHumanChoice(){
    let guess = prompt("Choose Rock, Paper, or Scissors!");
    
}

function getComputerChoice(rps){
    const value = Math.floor(Math.random() * 9);
    if (value >= 0 && value <= 3) {
        let answer = "rock";
        return answer;
    }
    else if (value >=4 && value <=6){
        let answer = "paper";
        return answer;
    }
    else {
        let answer ="scissors";
        return answer;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanAnswer = getHumanChoice();
        const computerAnswer = getComputerChoice();
        let hans = humanAnswer.toLowerCase();
        if (hans === "rock" && computerAnswer === "rock" || hans === "paper" && computerAnswer === "paper" || hans === "scissors" && computerAnswer === "scissor"){
            const draw = hans.toUpperCase() + " vs " + computerAnswer.toUpperCase() + "! It's a draw!";
            console.log(draw);
        }
        if (hans === "rock" && computerAnswer === "scissors" || hans === "paper" && computerAnswer === "rock" || hans === "scissors" && computerAnswer === "paper"){
            const huWin = hans.toUpperCase() + " vs " + computerAnswer.toUpperCase() + "! You win!" + hans.toUpperCase() + " beats " + computerAnswer.toUpperCase();
            humanScore++;
            console.log(huWin);
        }
        if (hans === "rock" && computerAnswer === "paper" || hans === "paper" && computerAnswer === "scissors" || hans === "scissors" && computerAnswer === "rock"){
            const huLose = hans.toUpperCase() + " vs " + computerAnswer.toUpperCase() + "! You lose!" + computerAnswer.toUpperCase() + " beats " + hans.toUpperCase();
            computerScore++;
            console.log(huLose);
        }
    }

    function rounds(){
        let r = 0;
        while (r < 5) {
            r++;
            playRound();
        }
    }
    rounds()

    if (humanScore < computerScore) {
        console.log("You:" + humanScore + " Computer:" + computerScore + " You lost this time. Refresh the page to try again!")
    }
    else if (humanScore > computerScore) {
        console.log("You:" + humanScore + " Computer:" + computerScore + " You won this time. Refresh the page to play again!")
    }
    else if (humanScore = computerScore) {
        console.log("You:" + humanScore + " Computer:" + computerScore + " It's a draw. Refresh the page to play again!")
    }
}
playGame();