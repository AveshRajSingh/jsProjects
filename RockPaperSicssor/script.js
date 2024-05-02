let userScore = 0
let compScore = 0
//dom manupulating for who is winning the game 
let userWin = () => {
    let showuserScore = document.querySelector("#userScore")
    userScore++
    showuserScore.innerHTML = `${userScore}`
    let result = document.querySelector("#result")
    result.innerHTML = "User Win "
    result.style.color = "green"
   

}
let compWin = () => {
    
    let showcompScore = document.querySelector("#compScore")
    compScore++
    showcompScore.innerHTML = `${compScore}`
    let result = document.querySelector("#result")
    result.innerHTML = "Comp Win "
    result.style.color = "red"

}

const getCompChoice = () => {
    let options = ["rock", "paper", "scissor"]
    let randIdx = Math.floor(Math.random() * 3)
    return options[randIdx]
}

const drawGame = () => {
    let result = document.querySelector("#result")
    result.innerHTML = "game draw"
    result.style.color = "blue"
}
const palyGame = (userChoice) => {
    let compChoice = getCompChoice()
    console.log("user " + userChoice)
    console.log("comp " + compChoice)
    if (userChoice === compChoice) {
        // draw game
        drawGame()
    }
    else {
        if (userChoice == "rock" && compChoice == "scissor") {
            userWin()
        }
        else if (userChoice == "scissor" && compChoice == "paper") {
            userWin()
        }
        else if (userChoice == "paper" && compChoice == "rock") {
            userWin()
        }
        else {
            compWin()
        }

    }
}

let choiceConntainer = document.querySelectorAll(".choice")

choiceConntainer.forEach((choice) => {
    choice.addEventListener("click", function () {
        let userChoice = choice.getAttribute("id")
        palyGame(userChoice)

    })
})