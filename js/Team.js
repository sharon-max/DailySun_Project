function openNav() {
    document.getElementById("mySidenav").style.left = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-100vw";
  }

// popup and forms 
  
// Get the <span> element that closes the modal
const close = document.querySelector(".pop-content");
const zip = document.querySelector(".zip");

// When the user clicks on <span> (x), close the popup
zip.onclick = function() {
  close.style.display = "none";
}


const popup = document.querySelector('.pop-content');
$(document).ready( function() {

// popup auto functionh
setTimeout(function(){ 

    //makes popup display
    popup.classList.remove('d-none'); 
}, 5000);
});


const button = document.querySelector('.bbt');
const log = document.querySelector('#login')
 button.addEventListener('click', e =>{
   e.preventDefault();
     window.open('http://127.0.0.1:5500/userDetails.html');
 });

//  const butto = document.querySelector('.signup');
//  butto.addEventListener('click', ()=>{
//      window.open('http://127.0.0.1:5500/userDetails.html');
//  });
