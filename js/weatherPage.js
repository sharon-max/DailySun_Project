 const button = document.querySelector(".buton");
 button.addEventListener('click', ()=>{
     window.open('http://127.0.0.1:5500/weatherJohannesburg.html')
 });




 function openNav() {
    document.getElementById("mySidenav").style.width = "360px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }