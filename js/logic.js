let avatarPy = document.getElementById("avatar-py");
let avatarPc = document.getElementById("avatar-pc");
let optionPy = document.getElementById("option-player");
let optionPc = document.getElementById("option-pc");
let optionPyImage = document.getElementById("player-option-image");
let optionPyName = document.getElementById("player-option-name");
let optionPcImage = document.getElementById("pc-option-image");
let optionPcName = document.getElementById("pc-option-name");
let round1Py = document.getElementById("round-1-py");
let round2Py = document.getElementById("round-2-py");
let round3Py = document.getElementById("round-3-py");
let round1Pc = document.getElementById("round-1-pc");
let round2Pc = document.getElementById("round-2-pc");
let round3Pc = document.getElementById("round-3-pc");
let playButton = document.getElementById("play-button");
let restartButton = document.getElementById("restart-button");
let homeButton = document.getElementById("home-button");
let homeDisplay = document.getElementById("home-display");
let mainGame = document.getElementById("main-game--home");
let winnerMessage = document.getElementById("winner-message");

let countVictories = 0;
let countDefeats = 0;

function startGame() {
    playButton.classList.add("hide");
    homeDisplay.classList.add("hide");
    mainGame.classList.add("main-game--start");
}

// Reinicia los estilos de todos los elementos
function clean() {
    round1Py.className = "box-result";
    round2Py.className = "box-result";
    round3Py.className = "box-result";
    round1Pc.className = "box-result";
    round2Pc.className = "box-result";
    round3Pc.className = "box-result";
    avatarPy.src="./src/img/winner.png";
    avatarPc.src="./src/img/winner.png";
    optionPy.className = "play-option";
    optionPc.className = "play-option";
    winnerMessage.classList.add("hide");
    countDefeats = 0;
    countVictories = 0; 
    restartButton.classList.add("hide");
    homeButton.classList.add("hide");
}

function restartGame() {
    clean();
    startGame();    
}

// Reinicia los estilos y devuelve a la pantalla inicial
function goHome() {
    clean();
    playButton.classList.remove("hide");
    homeDisplay.classList.remove("hide");
    mainGame.classList.remove("main-game--start");
}


// Determina al ganador de 2 de 3 rondas y lo muestra en un mensaje
function defineWinner() {
    if (countDefeats + countVictories === 3) {
        if (countVictories >= 2) {
            homeDisplay.classList.remove("hide");
            mainGame.classList.remove("main-game--start");  
            restartButton.classList.remove("hide");
            homeButton.classList.remove("hide");
            winnerMessage.classList.remove("hide");
            winnerMessage.innerHTML ="Ganaste :)";
            
        } else if (countDefeats >= 2) {
            homeDisplay.classList.remove("hide");
            mainGame.classList.remove("main-game--start");            
            restartButton.classList.remove("hide");
            homeButton.classList.remove("hide");
            winnerMessage.classList.remove("hide");
            winnerMessage.innerHTML = "Perdiste :(";
        }
    }
}  

// Determina la lógica del juego y determina quien es el ganador de cada ronda
function game(player) {    
    // Piedra = 1, Papel = 2, Tijera = 3
    let pc = Math.floor(Math.random()*3+1);;
    let result = 0;
    // result:  0=emp, 1=gana, 2=pierde
    switch (player) {
        case 1:
            if (pc === 2) {
                //pierde
                result = 2;
                countDefeats +=1;
            } else if( pc === 3) {
                //gana
                result = 1;
                countVictories +=1;
            }
            break;
        case 2:
            if (pc === 1) {
                //gana
                result = 1;
                countVictories +=1;
            } else if( pc === 3) {
                //pierde
                result = 2;
                countDefeats +=1;
            }
            break;
        case 3:
            if (pc === 1) {
                //pierde
                result = 2;
                countDefeats +=1;                
            } else if (pc === 2) {
                //gana
                result = 1;
                countVictories +=1;
            }
            break;
    }
    changeAvatar(result);
    changeOptionPlayed(result);
    changeOptionImage(player, pc);
    changeMarker(countVictories, countDefeats, result);
    defineWinner();
}
        
function changeAvatar(result) {
    switch (result) {
        case 0:
            avatarPy.src = "./src/img/loser.png";
            avatarPc.src = "./src/img/loser.png";
            break;
        case 1:
            avatarPy.src = "./src/img/winner.png";
            avatarPc.src = "./src/img/loser.png";
            break;
        case 2:
            avatarPy.src= "./src/img/loser.png";
            avatarPc.src= "./src/img/winner.png";
            break;
    }
}

// Rodea la opción con un cuadro de color de acuerdo al resultado del juego
function changeOptionPlayed(result) {
    optionPy.className = "play-option";
    optionPc.className = "play-option";    
    switch (result) {
        case 0:
            optionPy.classList.add("tie-play-option");
            optionPc.classList.add("tie-play-option");
            break;
            case 1:
                optionPy.classList.add("win-play-option");
                optionPc.classList.add("lose-play-option");
                break;
                case 2:
                    optionPy.classList.add("lose-play-option");
                    optionPc.classList.add("win-play-option");
                    break;
                }
}
            
// Muestra en un cuadro la opción elegida por el jugador y la de la máquina
function changeOptionImage(py, pc) {
    switch(py) {
        case 1:
            optionPyImage.src="./src/img/puño.png";
            optionPyName.src="./src/img/piedra.png";
            break;
        case 2:
            optionPyImage.src="./src/img/palma.png";
            optionPyName.src="./src/img/papel.png";
            break;
        case 3:
            optionPyImage.src="./src/img/paz.png";
            optionPyName.src="./src/img/tijera.png";
            break;
    }
    switch(pc) {
        case 1:
            optionPcImage.src="./src/img/puño.png";
            optionPcName.src="./src/img/piedra.png";
            break;
        case 2:
            optionPcImage.src="./src/img/palma.png";
            optionPcName.src="./src/img/papel.png";
            break;
        case 3:
            optionPcImage.src="./src/img/paz.png";
            optionPcName.src="./src/img/tijera.png";
            break;
    }
}


// Cambia el marcador en la parte superior de acuerdo al resultado
// Con una x roja a quien pierda y una verde a quien gane
function changeMarker (victories, defeats, result) {
    let round = victories + defeats;
    if (result !== 0){        
        if (round === 1){       
                if (victories === 1 && defeats === 0) {
                    round1Py.classList.add("box-result-win");
                    round1Pc.classList.add("box-result-lose");
                } else if (defeats === 1 && victories === 0) {
                    round1Py.classList.add("box-result-lose");
                    round1Pc.classList.add("box-result-win");
                }            
        } else if (round === 2){
            if (victories === 2 && defeats === 0) {
                round2Py.classList.add("box-result-win");
                round2Pc.classList.add("box-result-lose");
            } else if (defeats === 2 || victories === 0) {
                round2Py.classList.add("box-result-lose");
                round2Pc.classList.add("box-result-win");
            } else if (defeats === 1 && victories === 1) {
                if (round1Py.classList.contains('box-result-win')) {
                    round2Py.classList.add("box-result-lose");
                    round2Pc.classList.add("box-result-win");
                } else if (round1Py.classList.contains('box-result-lose')) {
                    round2Py.classList.add("box-result-win");
                    round2Pc.classList.add("box-result-lose");
                }
            }
        } else if (round === 3){
            if (victories === 3 && defeats === 0) {
                round3Py.classList.add("box-result-win");
                round3Pc.classList.add("box-result-lose");
            } else if (defeats === 3 && victories === 0) {
                round3Py.classList.add("box-result-lose");
                round3Pc.classList.add("box-result-win");
            } else if (victories === 2 && defeats === 1) {
                if (round1Py.classList.contains('box-result-win') && round2Py.classList.contains('box-result-win')) {
                    round3Py.classList.add("box-result-lose");
                    round3Pc.classList.add("box-result-win");
                } else {
                    round3Py.classList.add("box-result-win");
                    round3Pc.classList.add("box-result-lose");
                }
            } else if (defeats === 2 && victories === 1) {
                if (round1Py.classList.contains('box-result-lose') && round2Py.classList.contains('box-result-lose')) {
                    round3Py.classList.add("box-result-win");
                    round3Pc.classList.add("box-result-lose");
                } else {
                    round3Py.classList.add("box-result-lose");
                    round3Pc.classList.add("box-result-win");
                }
            }   
        }         
    }
}