//Rock Paper Scissors generated first//

//function computerPlay() {
//    let rock = "Rock";
//    let paper = "Paper";
//    let scissors = "Scissors";
//    let getRandomValue = Math.random() * 3;
//    let computerChoice = "";
//    console.log(getRandomValue);
//    if (getRandomValue <= 1) {
//        computerChoice = rock;
    //console.log(rock);
//      } else if (getRandomValue <= 2) {
//        computerChoice = paper;
    //console.log(paper);
//      } else {
//        computerChoice = scissors;
//      }
      //console.log(scissors);
//}

//This one is done to randomly generate R/P/S// 

const selectionButtons = document.querySelectorAll('[data-selection]')
//creating the selection of the emoji image

//creating possible variables and determining winners between R/P/S in array
const SELECTIONS = [ 
    //in all caps as the global variable will not change
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
] //the selections, what they are and who they beat


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = computerPlay()
    //console.log(computerSelection) //This shows the randomly generated choice for CPU 
    console.log(selection)//when each emoji is chosen, the correct name is shown in console
}

//now doing the computer selection
function computerPlay() {
    const getRandomValue = Math.floor(Math.random() * SELECTIONS.length) //gives option of 0,1 or 2
    return SELECTIONS[getRandomValue]
    //console.log(computerSelection)
}
