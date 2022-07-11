const button = document.querySelector('.submit-button');

function stopSubmit (event) {
    event.preventDefault();
}

window.onload = function () {
    button.addEventListener('click', stopSubmit);
  };