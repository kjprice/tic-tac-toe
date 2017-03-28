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
let usedTurns = 0;

window.onload = function () {
  document.querySelector('#tic-tac-toe').addEventListener('click', function (e) {
    if (gameOver) {
      return;
    }
    
    if (++usedTurns == 9) {
      gameOver = true;
      showMessage('No More Moves!');
    }

    const cell = e.target;
    if (cell.className.indexOf('owned') > -1) {
        return;
    }

    cell.className = `owned user${currentPlayer}`;
    
    if (hasPlayerWon(currentPlayer)) {
      gameOver = true;
      showMessage('You Win!');
    }
    changePlayer();
  });
  
  document.querySelector('#reset').addEventListener('click', function (e) {
    const tableCells = document.querySelectorAll('#tic-tac-toe td');
    for (let i = 0; i < tableCells.length; i++) {
      tableCells[i].className = '';
    }
    
    gameOver = false;    
    usedTurns = 0;
    showMessage('');
  });
}

function showMessage(message) {
  document.getElementById('output').innerHTML = message;
}

function hasPlayerWon(currentPlayer) {
  const table = document.querySelector('#tic-tac-toe');
  const rows = table.querySelectorAll('tr');
  const columns = [];
  
  /* top-left to bottom-right */
  let diagonal1 = 0;
  /* top-right to bottom-left */
  let diagonal2 = 0;

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
    
    /* check for diagonal1 */
    if (row.querySelector(`td:nth-child(${i+1}).user${currentPlayer}`)) {
      diagonal1++;
    }
    if (diagonal1 == 3) {
      return true;
    }

   /* check for diagonal2 */
    if (row.querySelector(`td:nth-child(${3-i}).user${currentPlayer}`)) {
      diagonal2++;
    }
    if (diagonal2 == 3) {
      return true;
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