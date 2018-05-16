function removeMemeDiv() {
  const targetDiv = event.target;
  const parentDiv = targetDiv.parentNode;
  console.log(targetDiv.parentNode);
  parentDiv.parentNode.removeChild(parentDiv);
  // let container = document.getElementById('memes');

  // container.removeChild(targetDiv);
}

function addMemeDiv() {
  const container = document.getElementById('memes');
  const newDiv = document.createElement('div');
  const photo = document.getElementById('photo').value;
  const upperText = document.getElementById('upper').value;
  const lowerText = document.getElementById('lower').value;

  const upperTextElement = document.createElement('p');
  upperTextElement.innerText = upperText;

  const lowerTextElement = document.createElement('p');
  lowerTextElement.innerText = lowerText;

  const photoElement = document.createElement('img');
  photoElement.setAttribute('src', photo);

  //create elements and append to newdiv
  newDiv.appendChild(upperTextElement);
  newDiv.appendChild(photoElement);
  newDiv.appendChild(lowerTextElement);

  container.appendChild(newDiv);

  newDiv.addEventListener('click', removeMemeDiv);
  // newDiv.addEventListener('click', function() {
  //   removeMemeDiv();
  //   // console.log(event.target);
  // });

  //clear form
  document.getElementById('upper').value = '';
  document.getElementById('lower').value = '';
  document.getElementById('photo').value = '';
}

function addBtnListener() {
  let button = document.getElementById('memeBtn');
  button.addEventListener('click', addMemeDiv);
}

document.addEventListener('DOMContentLoaded', function() {
  addBtnListener();
  // document.getElementById('memes').addEventListener('click', removeMemeDiv);
});
