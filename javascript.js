function getComputerChoice(rps){
    const value = Math.floor(Math.random() * 9);
    if (value >= 0 && value <= 3) {
        let answer = "Rock";
        return answer;
    }
    else if (value >=4 && value <=6){
        let answer = "Paper";
        return answer;
    }
    else {
        let answer ="Scissors";
        return answer;
    }
    
}
console.log(getComputerChoice());