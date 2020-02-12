
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

