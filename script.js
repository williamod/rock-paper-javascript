function getCpuChoice() {
    const num = Math.floor(Math.random()*(4-1))+1;
    let choice;

    if (num === 1){
        choice = 'Rock';
    }
    else if (num === 2){
        choice = 'Paper';
    }
    else {
        choice = 'Scissors';
    }

    return choice;
}

function playerSelection() {
     
}

function playRound (playerChoice, CPUchoice) {
    //compare selections and declare winner//
}


//loop play and reset//

let x = getCpuChoice()

console.log(x)