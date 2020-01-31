const popUp = document.getElementById("myPopUp");

// Get the button that opens the popup
const btn = document.getElementById("myButto");

const butt = document.getElementById("submit");

// Get the <span> element that closes the popup
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the popup
btn.onclick = function() {
  popUp.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  popUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}
// this is the submit button functions 
btn.onclick = function() {
  popUp.style.display = "block";
}

