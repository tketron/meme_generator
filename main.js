function removeMemeDiv() {
  const targetDiv = event.target;
  const parentDiv = targetDiv.parentNode;
  console.log(targetDiv.parentNode);
  parentDiv.parentNode.removeChild(parentDiv);
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

  newDiv.classList.add('meme-div');
  photoElement.classList.add('meme-image');
  upperTextElement.classList.add('meme-text');
  upperTextElement.classList.add('upper-text');
  lowerTextElement.classList.add('meme-text');
  lowerTextElement.classList.add('lower-text');

  //create elements and append to newdiv
  newDiv.appendChild(upperTextElement);
  newDiv.appendChild(photoElement);
  newDiv.appendChild(lowerTextElement);

  // container.appendChild(newDiv);
  container.prepend(newDiv);

  newDiv.addEventListener('click', removeMemeDiv);

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
});
