const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
     userChoice = e.target.id
     userChoiceDisplay.innerHTML = userChoice
     generateComputerChoice()
     getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor( Math.random()*3) // or possibleChoices.length
    

if (randomNumber === 0) {
    computerChoice =" Rock"
}
if (randomNumber === 1) {
    computerChoice =" Scissors"
}
if (randomNumber === 2) {
    computerChoice =" Paper"
}
computerChoiceDisplay.innerHTML = computerChoice 
}

function getResult(){
    if (computerChoice === userChoice){
        result= " Draw!"
    }
        if (computerChoice === " Rock" && userChoice === " Scissors"){
            result = " You Lost!"
        }
            if (computerChoice === " Rock" && userChoice === " Paper"){
                result = " You Win!"
            }
                if (computerChoice === " Paper" && userChoice === " Rock"){
                    result = " You Lost!"
                }
                    if (computerChoice === " Paper" && userChoice === " Scissors"){
                        result = " You Win!"
                    }
                        if (computerChoice === " Scissors" && userChoice === " Rock"){
                            result = " You Lost!"
                        }
                            if (computerChoice === " Scrissors" && userChoice === " Paper"){
                                result = " You Win!"
                            }
                            resultDisplay.innerHTML = result;
                        }