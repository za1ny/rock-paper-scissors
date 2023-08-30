//Rock Paper Scissors generated first//

// let playerScore = 0
// let computerScore = 0
// const buttons = document.querySelectorAll('input')

//function computerPlay() {
//    let choices = ['rock', 'paper', 'scissors']
//    return choices[Math.floor(Math.random() * choices.length)]
//      }

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
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

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
    const computerSelection = randomComputer()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    //console.log(computerSelection) // This shows the randomly generated choice for CPU 
    //console.log(selection) // when each emoji is chosen, the correct name is shown in console

    addSelectionResult(computerSelection, computerWinner) //CPU first 
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

//now doing the computer selection
function randomComputer() {
    const randomValue = Math.floor(Math.random() * SELECTIONS.length) //gives option of 0,1 or 2
    return SELECTIONS[randomValue]
    //console.log(computerSelection)
}

//creating winner section
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}