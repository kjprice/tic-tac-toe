let isOn = false;

function doStuff(button) {
  if (isOn) {
    button.style.backgroundColor = 'black';
    isOn = false;
    document.getElementById('output').innerHTML = 'Off!';
  }
  else {
    button.style.backgroundColor = 'inherit';
    isOn = true;
    document.getElementById('output').innerHTML = 'On!';
  }
}

window.onload = function () {
  doStuff(document.getElementById('the-button'));

  document.querySelector('#tic-tac-toe').addEventListener('click', function (e) {
    const cell = e.target;
    cell.className = 'on';
  });
}