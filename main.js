function addMemeDiv() {
  let container = document.getElementById('memes');
  let newDiv = document.createElement('div');
  newDiv.innerText = "I'm a new Div";
  container.appendChild(newDiv);
}

function addBtnListener() {
  let button = document.getElementById('memeBtn');
  button.addEventListener('click', function() {
    console.log('button clicked');
    addMemeDiv();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  addBtnListener();
});
