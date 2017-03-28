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
    if (gameOver) {
      return;
    }

    const cell = e.target;
    if (cell.className.indexOf('owned') > -1) {
        return;
    }

    cell.className = `owned user${currentPlayer}`;
    
    if (hasPlayerWon(currentPlayer)) {
      gameOver = true;
      document.getElementById('output').innerHTML = 'You Win!';
    }
    changePlayer();
  });
}

function hasPlayerWon(currentPlayer) {
  document.getElementById('output').innerHTML = currentPlayer + '<br/>';
  const table = document.querySelector('#tic-tac-toe');
  const rows = table.querySelectorAll('tr');
  const columns = [];
  
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.querySelectorAll(`td.user${currentPlayer}`)
    const rowCellNumbers = cells.length;
    
    /* Check for row equality */
    if (rowCellNumbers == 3) {
      return true;
    }
    
    /* Check for column equality */
    for (let n = 0; n < rowCellNumbers; n++) {
      const column = row.querySelector(`td:nth-child(${n+1}).user${currentPlayer}`);
      if (column) {
        columns[n] = (columns[n] || 0) +1;
        if (columns[n] == 3) {
          return true;
        }
      }
    }

  }
}

function changePlayer() {
  if (currentPlayer == 1) {
    currentPlayer = 2;
  }
  else {
    currentPlayer = 1;
  } 
}