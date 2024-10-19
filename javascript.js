function getHumanChoice(){
    let guess = window.prompt("Choose Rock, Paper, or Scissors!");
    const human = guess.toLowerCase();
    return human;
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
