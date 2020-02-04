
// Get the <span> element that closes the modal
const close = document.getElementsByClassName("pop-content")[0];
const popUp = document.getElementById("mypopUp")

// When the user clicks on <span> (x), close the popup
// span.onclick = function() {
//   popUp.style.display = "none";
// }
close.addEventListener('click', ()=>{
  close.style.display = "none";
});

// window.onclick = function(event){ if(event.target == popUp){
//   popUp.style.display = "none";}
// }




const popup = document.querySelector('.pop-content');
$(document).ready( function() {

    // When site loaded, load the Popupbox First
//     loadPopupBox();

//     $('#popupBoxClose').click( function() {            
//         unloadPopupBox();
//     });

//     $('#container').click( function() {
//         unloadPopupBox();
//     });

//     function unloadPopupBox() {    // TO Unload the Popupbox
//         $('#popup_box').fadeOut("slow");
//         $("#container").css({ // this is just for style        
//             "opacity": "1"  
//         }); 
//     }    

//     function loadPopupBox() {    // To Load the Popupbox
//         $('#popup_box').fadeIn("slow");
//         $("#container").css({ // this is just for style
//             "opacity": "0.3"  
//         });         
//     }        
// });


// popup auto functionh
setTimeout(function(){ 

    //makes popup display
    popup.classList.remove('d-none'); 
}, 5000);
});