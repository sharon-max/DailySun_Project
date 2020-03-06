 const buttons = document.querySelector(".buton");
 buttons.addEventListener('click', ()=>{
     window.open('http://127.0.0.1:5500/weatherJohannesburg.html')
 });




 function openNav() {
    document.getElementById("mySidenav").style.width = "360px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }















  // const weatherContent =document.querySelector('#weatherPod');
  // const weatherImages = document.querySelector('#image');


  // //const key = 'A8DgCodL9yOguubazTwGdqfmzR8dkkSKc5WIEBlH';


  // const getWeather = async () =>{

  //     const base= 'https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=w0CaNM7MywFUNPfeopb2O2GQq9gGQgowkpdpU1Yt'
  

  //   // const base = 'https://api.nasa.gov/techport/api/projects/17792?api_key=w0CaNM7MywFUNPfeopb2O2GQq9gGQgowkpdpU1Yt'



  //   const response = await fetch (base);
    

  //    const data = await response.json().then(data =>{

  //   return(data);

  //     weatherData= data;
  //     weatherContent.innerHTML= 
  //     `<h2  id='weatherPod'>${weatherData.title}</h2>
  //      <p id="image">${weatherData.date}</p>
  //      <p  id='weatherPod'>${weatherData.explanation}</p>
  //       <p id="image">${weatherData.service_version}</p>
  //      `

      
  //    });
  
    

  //    console.log(data);
     
  
  // }
 
  // getWeather();

  






  

  const picContent =document.querySelector('#data');
  const weatherImg = document.querySelector('#pic');


  const getWeather = async () =>{

    
    const base = 'https://api.nasa.gov/planetary/apod?api_key=HxIQvyzOOxwUE0pEUn3o18v9tJFdfmqWKrhkzIdL'


    const response = await fetch (base);
    

     const data = await response.json().then(data =>{

  // return(data);

      weatherData= data;
      picContent.innerHTML= 
      `<h2  id='data'>${data.title}</h2>
      <p  id='data'>${data.date}</p>
      <p  id='data'>${data.explanation}</p>
       `
       weatherImg.setAttribute('src',data.hdurl);
      
     });
  
    

   //console.log(data);
     
  
  }
 
  getWeather();














  
  

  const weatherContent =document.querySelector('#weatherPod');
  const weatherImages = document.querySelector('#image');


  const getdata = async () =>{

    
  


    const base = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=w0CaNM7MywFUNPfeopb2O2GQq9gGQgowkpdpU1Yt'




    const response = await fetch (base);
    

     const data = await response.json()
     .then(data =>{
      for (i=0; i<1; i++){

        weatherContent.innerHTML+=
        `
        <img src="${data.photos[i].img_src}" alt="imagefrom Nasa" id="image" height="50%" width="100%">

        <h2>${data.photos[i].camera.name}</h2>
        <p>${data.photos[i].camera.full_name}</p>
        <p>${data.photos[i].camera.rover_id}</p>

        `
      }




 // return(data);
      
      
     });
  
    
    
 
 //console.log(data);
     
  
  }
 
  getdata();










  
  const weatherContents =document.querySelector('#weatherP');
  const weatherImage = document.querySelector('#images');


  const getWeathers = async () =>{

    const base ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=w0CaNM7MywFUNPfeopb2O2GQq9gGQgowkpdpU1Yt'

    const response = await fetch (base);
    

    const data = await response.json()
    .then(data =>{
      for (i=0; i<8; i++){
        weatherP.innerHTML+=`
        <img src="${data.photos[i].img_src}" alt="image from nasa" id="images" height="50%" width="100%">
        <h2>${data.photos[i].camera.name}</h2>
        <p>${data.photos[i].camera.full_name}</p>
        <p>${data.photos[i].camera.id}</p>
        `
      }

 

 
});




  // console.log(data);


}

getWeathers();













//local storage and filter

//log in and out of the website
  
let count = 3;
function validate() {
  let un = document.myform.username.value;
  let pw = document.myform.pword.value;
  let valid = false;

  const unArray = ["username1", "username2", "username3", "username4"];  // as many as you like - no comma after final entry
  const pwArray = ["password1", "password2", "password3", "password4"];  // the corresponding passwords;
  for (let i=0; i <unArray.length; i++) {
  if ((un == unArray[i]) && (pw == pwArray[i])) {
  valid = true;
  break;
  }
  }

  if (valid) {
    alert ("Login was sucessfully processed.  You will be redirected to the members page now.");
    window.location = "http://www.google.com";
    return false;
    }
    const t = " tries";
    if (count == 1) {t = " try"}
    if (count >= 1) {
    alert ("Invalid username and/or password.  You have " + count + t + " left.");
    document.myform.username.value = "";
    document.myform.pword.value = "";
    setTimeout("document.myform.username.focus()", 25);
    setTimeout("document.myform.username.select()", 25);
    count --;
    }
    else {
      alert ("Still incorrect! You have no more tries left!");
      document.myform.username.value = "No more tries allowed!";
      document.myform.pword.value = "";
      document.myform.username.disabled = true;
      document.myform.pword.disabled = true;
      return false;
      }
    }      



