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
      for (i=0; i<2; i++){
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





// //dataBase


// //seasons
// const list = document.querySelector('ul');
// const addSeasons = (season) =>{
//  let time= (season.time);
//  let title=(season.title);
//   let html= `
//   <h2>
//       <div> ${season.season}</div>
//       <img src="${title}" alt="" width="80%" >
//       <div>${time}</div>
      
//   </h2>
//   `;
//   list.innerHTML+=html;
// }



// db.collection('seasons').get().then((snapshot)=>{
//   snapshot.docs.forEach(doc =>{
//     addSeasons(doc.data());
//   });
//   }).catch(err =>{
//     console.log(err)
  
// });


// //cities

// const citylist = document.querySelector('.cities');
// const addCities = (city)=>{
//   let title= (city.title);
//   let forecast= (city.forecast);
//   let temperature = (city.temperature);
//   let img =(city.img)
//   let html=`
//   <div class="cities">
//   <h1>Other city</h1>
//   <h2> ${title}</h2>
//  <img src="${img}" alt="" width="40%" >
//   <h2>${forecast}</h2>
//   <p>${temperature}</P>
//   </div>
//   `;
//   list.innerHTML+= html

// }


// db.collection('Cities').get().then((snapshot)=>{
//   snapshot.docs.forEach(doc =>{
//     addCities(doc.data());
//   });
//   }).catch(err =>{
//     console.log(err)
  
// });




// //Weather





  
// const weatherTerms = document.querySelector('.terms');
// const form = document.querySelector('form');

// const addTerms= (weather_terms, id)=>{
//   // let description=(weather_terms.description);
//   // let author=(terms.author)

//   let created_at = (weather_terms.created_at.toDate());

//   let html=`
//   <div data-id="${id}"> 
//    <h2>${weather_terms.title}</h2>
//    <p>${weather_terms.description} </p>
//    <p> ${weather_terms.author} </p}
//    <p>${created_at}</p>
//   </div>
//   <button class="btn btn-danger btn-sm my-2">Delete</button>
// `;
//   weatherTerms.innerHTML+= html
// };


// const deleteTerms = (id) =>{

//   const weather_terms = document.querySelectorAll('p');
//   weather_terms.forEach(weather_terms =>{
//       if(weather_terms.getAttribute('data-id')===id){
//         weather_terms.remove();
//       }
//   })

// }



// //get document
// db.collection('weather_terms').onSnapshot(snapshot =>{
//   snapshot.docChanges().forEach(change =>{
//     const doc =change.doc;
//     if(change.type === 'added'){
//       addTerms(doc.data(),doc.id);
//     } else if( change.type === 'removed'){
//       deleteTerm(doc.id);
//     }
//   });
//  // console.log(snapshot.docChanges())
// });

// // db.collection('weather_terms').get().then((snapshot)=>{
// //   snapshot.docs.forEach(doc =>{
// //     //console.log(doc.id)
// //     addTerms(doc.data(),doc.id);
// //   });
// //   }).catch(err =>{
// //     console.log(err)
  
// // });

// // add document



//   form.addEventListener ('submit', e =>{
//   e.preventDefault();

//   const now = new Date();
//   const weather_terms = {

//     title:form.userterm.value,
//     description: form.userterms.value,
//     created_at: firebase.firestore.Timestamp.fromDate(now)
//   };


// db.collection('weather_terms').add(weather_terms).then(() =>{
//   console.log('terms added');
  
// }).catch (err=>{
//   console.log(err); 
// })

// });

// //deleting data

// weatherTerms.addEventListener('click', e =>{
//  if (e.target.tagName === 'BUTTON'){
//    const id =e.target.parentElement.getAttribute('data-id')

//    db.collection('weather_terms').doc(id).delete().then(()=>{
//      console.log('terms deleted')
//    })

//  }
// });


















