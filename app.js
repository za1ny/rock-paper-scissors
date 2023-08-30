//Rock Paper Scissors generated first//

function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random() * 3;
    let computerChoice = "";
    console.log(getRandomValue);
    if (getRandomValue <= 1) {
        computerChoice = rock;
    //console.log(rock);
      } else if (getRandomValue <= 2) {
        computerChoice = paper;
    //console.log(paper);
      } else {
        computerChoice = scissors;
      }
      //console.log(scissors);
}

//This one is done to randomly generate R/P/S// 
