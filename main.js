function addMemeDiv() {
  let container = document.getElementById('memes');
  let newDiv = document.createElement('div');
  let photo = document.getElementById('photo').value;
  let upperText = document.getElementById('upper').value;
  let lowerText = document.getElementById('lower').value;

  let upperTextElement = document.createElement('p');
  upperTextElement.innerText = upperText;

  let lowerTextElement = document.createElement('p');
  lowerTextElement.innerText = lowerText;

  let photoElement = document.createElement('img');
  photoElement.setAttribute('src', photo);

  //create elements and append to newdiv
  newDiv.appendChild(upperTextElement);
  newDiv.appendChild(photoElement);
  newDiv.appendChild(lowerTextElement);

  container.appendChild(newDiv);

  //clear form
  document.getElementById('upper').value = '';
  document.getElementById('lower').value = '';
  document.getElementById('photo').value = '';
}

function addBtnListener() {
  let button = document.getElementById('memeBtn');
  button.addEventListener('click', function() {
    addMemeDiv();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  addBtnListener();
});
