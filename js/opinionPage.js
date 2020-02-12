
// this is for the first card

const Art= document.getElementsByClassName("fullArticle");





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



