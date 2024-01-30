"use strict"

const signs = ["schere.svg", "papier.svg", "eidechse.svg", "stein.svg", "spock.svg"];
const computerSign = document.getElementById("computer")
const button = document.querySelector(".startBtn")
const qBtn = document.getElementById("quitBtn")
const parentListLog = document.getElementById("logList")
const start = document.getElementById("spielStart")


let countRound = 1
let randomNumber = -1
let gameStart = true
let nextStep = true
let maxRounds = ''
let winsComputer = 0
let winsPlayer = 0

function compare(playerSign, computerSign) {
    

    let playerWin = false
    let computerWin = false
    
    if (playerSign === computerSign) {
        // unentschieden
        
        playerWin = false
        computerWin = false
        
    }else if( (!playerSign.localeCompare("eidechse.svg") && !computerSign.localeCompare("stein.svg")) || (!playerSign.localeCompare("schere.svg") && !computerSign.localeCompare("stein.svg"))){
        // Computer gewinnt mit stein
        
        
        computerWin = true
        
    }else if((!playerSign.localeCompare("papier.svg") && !computerSign.localeCompare("stein.svg")) || (!playerSign.localeCompare("spock.svg") && !computerSign.localeCompare("stein.svg"))){
        // computer verliert mit stein
        
        playerWin = true
        
        
    }else if ((!playerSign.localeCompare("stein.svg") && !computerSign.localeCompare("papier.svg")) || (!playerSign.localeCompare("spock.svg") && !computerSign.localeCompare("papier.svg"))) {
        // computer gewinnt mit papier
        
        computerWin = true
        
        //-----------------------------------------
    }else if ((!playerSign.localeCompare("schere.svg") && !computerSign.localeCompare("papier.svg")) || (!playerSign.localeCompare("eidechse.svg") && !computerSign.localeCompare("papier.svg"))) {
        // computer verliert mit papier
        
        playerWin = true
        
    }else if ((!playerSign.localeCompare("papier.svg") && !computerSign.localeCompare("schere.svg")) || (!playerSign.localeCompare("eidechse.svg") && !computerSign.localeCompare("schere.svg"))) {
        // computer gewinnt mit schere
        
        computerWin = true
        
    } else if((!playerSign.localeCompare("stein.svg") && !computerSign.localeCompare("schere.svg")) || (!playerSign.localeCompare("spock.svg") && !computerSign.localeCompare("schere.svg"))){
        // computer verliert mit schere
        
        playerWin = true
        
    }else if((!playerSign.localeCompare("papier.svg") && !computerSign.localeCompare("eidechse.svg")) || (!playerSign.localeCompare("spock.svg") && !computerSign.localeCompare("eidechse.svg"))){
        // computer gewinnt mit eidechse
        
        computerWin = true
        
    }else if((!playerSign.localeCompare("stein.svg") && !computerSign.localeCompare("eidechse.svg")) || (!playerSign.localeCompare("schere.svg") && !computerSign.localeCompare("eidechse.svg"))){
        // computer verliert mit eidechse
        
        playerWin = true
        
    }else if((!playerSign.localeCompare("stein.svg") && !computerSign.localeCompare("spock.svg")) || (!playerSign.localeCompare("schere.svg") && !computerSign.localeCompare("spock.svg"))){
        // computer gewinnt mit spock
       
        computerWin = true
        
        
    }else{
        
        playerWin = true
        
    }
    const node = document.createElement("li")
    const computerImgNode = document.createElement("img")
    const playerImgNode = document.createElement("img")
    let textnode = document.createTextNode("Equal")
    computerImgNode.src = 'img/' + computerSign
    playerImgNode.src = 'img/' + playerSign
    node.appendChild(computerImgNode)
    

    if (computerWin) {
        winsComputer++
        textnode = document.createTextNode("Computer wins round")

    }else if (playerWin) {
        winsPlayer++
        textnode = document.createTextNode("Player wins round")
    }
    
    node.appendChild(textnode)
    node.appendChild(playerImgNode)
    parentListLog.appendChild(node)
}

button.addEventListener("click", startGame)
function startGame() {
    maxRounds = document.getElementById("rundenAnzahl")
    if (maxRounds.value != '' && gameStart) {
        
        gameStart = false
        start.style.display = "block"

    }
}

const gameOptionEl = document.querySelector('.choose');
gameOptionEl.addEventListener('click', getPlayerInput)

function getPlayerInput(event) {
    
    if (countRound <= maxRounds.value) {

        

        if (event.target.tagName == 'IMG') {

            const imgSource = event.target.getAttribute('alt') + ".svg";
            
            // setze random img ins html
            const possibleSigns = signs.length
            randomNumber = Math.floor(Math.random() * possibleSigns)
            
            computerSign.src = "img/" + signs[randomNumber]
            compare(imgSource, signs[randomNumber])
        }


        countRound++
    }else{
        // wer gewinnt
        if (winsComputer > winsPlayer) {
            alert("Computer wins")
            location.reload()
        }else if (winsPlayer > winsComputer) {
            alert("Player wins")
            location.reload()
        } else {
            alert("tie")
            location.reload()
        }
    }
}

// refresh page
qBtn.addEventListener("click", quit)
function quit() {
    location.reload()
}





