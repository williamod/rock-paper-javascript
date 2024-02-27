function getCpuChoice() {
    num = Math.floor(Math.random()*(4-1))+1
    if (num === 1){
        choice = 'Rock'
    }
    else if (num === 2){
        choice = 'Paper'
    }
    else {
        choice = 'Scissors'
    }

    return choice
}

function playerSelection() {
    //prompt and input // 
}

function playRound (playerChoice, CPUchoice) {
    //compare selections and declare winner//
}


//loop play and reset//

getCpuChoice()