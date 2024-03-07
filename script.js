let wins = 0

function capitalize(string) {
    console.log(string.charAt(0).toUpperCase() + string.slice(1))
    return string.charAt(0).toUpperCase() + string.slice(1)
}

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

function playRound (playerChoice, CPUchoice) {
    if (playerChoice === CPUchoice) {
        alert(`It's a Tie!`);
    }
    else if (playerChoice === 'rock') {
        if (CPUchoice === 'paper') { //player:rock, cpu:paper//
            alert(`You lose!`)
        }
        else {//player:rock, cpu:scissors//
            wins ++
            alert(`You Win!`) 

        }
    }
    else if (playerChoice === 'paper') {
        if (CPUchoice === 'scissors') { //player:paper, cpu:scissors//
            alert(`You lose!`)
        }
        else {//player:paper, cpu:rock//
            wins ++
            alert(`You Win!`) 

        }
    }
    else { //playerChoice === scissors//
        if (CPUchoice === 'rock') { //player:scissors, cpu:rock//
            alert(`You lose!`)
        }
        else {//player:scissors, cpu:paper//
            wins ++
            alert(`You Win!`)   

        }
    }
}

function checkWins (wins) {
    if (wins >= 5){
        alert('You won 5 times!')
        window.close()
    }
}




const displayBox = document.querySelector('.display-box')


const cpuDisplay = document.querySelector('.cpu')

const playerDisplay = document.querySelector('.player')




const winsDisplay = document.querySelector('.wins')
winsDisplay.textContent = `Points: ${wins}`


const rockButton = document.querySelector('#rock')
rockButton.onclick = () => {
    let playerChoice = 'rock'
    let cpuChoice = getCpuChoice()
    playRound(playerChoice, cpuChoice)

    playerDisplay.textContent = capitalize(playerChoice)
    cpuDisplay.textContent = capitalize(cpuChoice)
    winsDisplay.textContent = `Points: ${wins}`
    checkWins(wins)
    
}

const paperButton = document.querySelector('#paper')
paperButton.onclick = () => {
    let playerChoice = 'paper'
    let cpuChoice = getCpuChoice()
    playRound(playerChoice, cpuChoice)

    playerDisplay.textContent = capitalize(playerChoice)
    cpuDisplay.textContent = capitalize(cpuChoice)
    winsDisplay.textContent = `Wins: ${wins}`
    checkWins(wins)
}

const scissorsButton = document.querySelector('#scissors')
scissorsButton.onclick = () => {
    let playerChoice = 'scissors'
    let cpuChoice = getCpuChoice()
    playRound(playerChoice, cpuChoice)

    playerDisplay.textContent = capitalize(playerChoice)
    cpuDisplay.textContent = capitalize(cpuChoice)
    winsDisplay.textContent = `Wins: ${wins}`
    checkWins(wins)
}






