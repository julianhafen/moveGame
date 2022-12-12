const statusDisplay = document.querySelector('.game--status');

let count = 0;

let gameState = [0,0,0,0,0,0,0,0,0];

let winArray = [1,2,3,4,5,6,7,8,0];

const winningMessage = () => `You won!`;
const currentMessage = () => `Züge: 0`;

statusDisplay.innerHTML = currentMessage();

window.onload = () => {
  initArray();
}

function initArray() {
    for(let i = 0 ; i < gameState.length -1; i++){
      let numberSet = false
      while(numberSet == false){
      let a = Math.floor(Math.random()*9)
      if(gameState.includes(a) == false){
          gameState[i] = a;
          numberSet=true;
      }
    }
    }
    console.log(gameState)
    printArrayToFrontEnd(gameState);
  }

const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
  
function printArrayToFrontEnd(arr){
  let val = document.getElementsByClassName("cell")
  Array.from(val).forEach((element,index)=>{ element.innerHTML = arr[index];})
}

function getEmptyFieldIndex () {
  let indexEmpty = gameState.indexOf(0);
  return indexEmpty;
}

function swapCell(clickedCellIndex) {
    let cellContent = gameState[clickedCellIndex]
    let cellIndex = clickedCellIndex;
    let emptyField = getEmptyFieldIndex();
    switch (cellIndex) {
        case 2:
            if (cellContent == gameState[emptyField - 3] || cellContent == gameState[emptyField + 3] || cellContent == gameState[emptyField + 1]) {
              gameState[emptyField] = cellContent;
              gameState[cellIndex] = 0;
              count++
            }
            break;
        case 3:
            if (cellContent == gameState[emptyField - 3] || cellContent == gameState[emptyField + 3] || cellContent == gameState[emptyField - 1]) {
              gameState[emptyField] = cellContent;
              gameState[cellIndex] = 0;
              count++
            }
            break;
        case 5:
            if (cellContent == gameState[emptyField - 3] || cellContent == gameState[emptyField + 3] || cellContent == gameState[emptyField + 1]) {
              gameState[emptyField] = cellContent;
              gameState[cellIndex] = 0;
              count++
            }
            break;
        case 6:
            if (cellContent == gameState[emptyField - 3] || cellContent == gameState[emptyField + 3] || cellContent == gameState[emptyField - 1]) {
              gameState[emptyField] = cellContent;
              gameState[cellIndex] = 0;
              count++
            }
            break;
        default:
            if (cellContent == gameState[emptyField - 3] || cellContent == gameState[emptyField + 3] || cellContent == gameState[emptyField + 1] || cellContent == gameState[emptyField - 1]) {
              gameState[emptyField] = cellContent;
              gameState[cellIndex] = 0;
              count++
            }
            break;
    }

}

function handleCellPlayed(clickedCell, clickedCellIndex) {
   /*Hier soll geprüft werden, ob die ausgewählte Zelle den Nachbar 0 hat 
     count auch nur hochzählen sobald es funktioniert hat
   */
    
    swapCell(clickedCellIndex)
    printArrayToFrontEnd(gameState)      
    }


function handleResultValidation() {
    let roundWon = false;
  /*Hier prüfen ob der Array dem Winner Array enspricht*/

  if(compareArrays(gameState, winArray)){
    roundWon = true;
  }

if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        alert("Du hast gewonnen! Falls du erneut spielen möchtest bitte Restart drücken")
        printArrayToFrontEnd(gameState)
        return;
    }else{
      statusDisplay.innerHTML = `Züge:${count}`;
      return;
    }
}

function handleCellClick(clickedCellEvent) {

        const clickedCell = clickedCellEvent.target;
        
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );

    /*Hier muss ich überprüfen ob die Zelle die ich gerade SPiele Null der von 0 ist */
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
        statusDisplay.innerHTML = `Züge:${count}`;
    }

/*Spiel wird zurück gesetzt */    
function handleRestartGame() {
    gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    count = 0;
    initArray();
    printArrayToFrontEnd(gameState)
    statusDisplay.innerHTML = "Züge: 0";
}

/*
EventListener für die einzelnen cellen, sowie den Restart Button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);