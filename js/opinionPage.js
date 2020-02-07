// const popUp = document.getElementById("myPopUp");

// Get the button that opens the modal
// const btn = document.getElementById("myButto");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// this is for the first card

const Art= document.getElementsByClassName("fullArticle");



// // When the user clicks the button, open the form 
// btn.onclick = function() {
//   form.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";}
  }

  const btn = document.querySelector(".myButto");
 btn.addEventListener('click', ()=>{
     window.open('http://127.0.0.1:5500/Form.html')
 });

// function for displayin full article
const card = document.querySelector(".A");
card.addEventListener('click', ()=>{
    window.open('http://127.0.0.1:5500/artcle.html')
});

const backY = document.querySelector(".back");
backY.addEventListener('click', ()=>{
    window.open('http://127.0.0.1:5500/opinionPage.html')
});



