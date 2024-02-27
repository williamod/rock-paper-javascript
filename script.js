let wins = 0

function getCpuChoice() {
    const num = Math.floor(Math.random()*(4-1))+1;
    let choice;

    if (num === 1){
        choice = 'rock';
    }
    else if (num === 2){
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }

    return choice;
}

function getplayerSelection() {
    let choice;
    while (choice !== 'rock' || choice !== 'paper' || choice !== 'scissors') {
        let playerInput = prompt('Choose Rock, Paper or Scissors!');
        playerInput = String(playerInput)
        playerInput = playerInput.toLowerCase();
        choice = playerInput
        if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
            break
        }

        else {
            alert('Please type "Rock", "Paper" or "Scisors"')
        }

    }
    return choice
}

function playRound (playerChoice, CPUchoice) {
    if (playerChoice === CPUchoice) {
        alert(`You both chose ${playerChoice}, it's a Tie!`);
    }
    else if (playerChoice === 'rock') {
        if (CPUchoice === 'paper') { //player:rock, cpu:paper//
            alert(`You lose! You chose ${playerChoice}, your opponent chose ${CPUchoice}.`)
        }
        else {//player:rock, cpu:scissors//
            wins ++
            alert(`You Win! you chose ${playerChoice}, your opponent chose ${CPUchoice}.`) 

        }
    }
    else if (playerChoice === 'paper') {
        if (CPUchoice === 'scissors') { //player:paper, cpu:scissors//
            alert(`You lose! You chose ${playerChoice}, your opponent chose ${CPUchoice}.`)
        }
        else {//player:paper, cpu:rock//
            wins ++
            alert(`You Win! you chose ${playerChoice}, your opponent chose ${CPUchoice}.`) 

        }
    }
    else { //playerChoice === scissors//
        if (CPUchoice === 'rock') { //player:scissors, cpu:rock//
            alert(`You lose! You chose ${playerChoice}, your opponent chose ${CPUchoice}.`)
        }
        else {//player:scissors, cpu:paper//
            wins ++
            alert(`You Win! you chose ${playerChoice}, your opponent chose ${CPUchoice}.`)   

        }
    }
}


//loop play and reset//

while (wins < 3) {
    playRound(getplayerSelection(), getCpuChoice())
}
alert('You won 3 times!')


