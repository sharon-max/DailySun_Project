const popUp = document.getElementById("myPopUp");

// Get the button that opens the modal
const btn = document.getElementById("myButto");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  popUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";}
  }

  const button = document.querySelector(".submit");
 button.addEventListener('click', ()=>{
     window.open('http://127.0.0.1:5500/Form.html')
 });