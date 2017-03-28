/*
** TODO:
** Decide whose turn it is
** Let user click on empty block
** Change ownership of block to user
** Determine if user has won after selecting block
** If not won, Decide whose turn it is
** Repeat...
*/

let currentPlayer = 1;
let gameOver = false;

window.onload = function () {
  document.querySelector('#tic-tac-toe').addEventListener('click', function (e) {
    const cell = e.target;
    if (cell.className.indexOf('owned') > -1) {
        return;
    }

    cell.className = `owned user${currentPlayer}`;
    
    changePlayer();
  });
}


function changePlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  }
  else {
    currentPlayer = 1;
  } 
}