
 const btn = document.querySelector(".myButto");
 btn.addEventListener('click',()=>{
    window.open('http://127.0.0.1:5500/Form.html')
 });

//  const butto = document.querySelector(".SubmitF");
//  butto.addEventListener('click', ()=>{
//  window.open('http://127.0.0.1:5500/opinions.html')
//  });

//random Quotes API's

// fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
// 		"x-rapidapi-key": "1fe8f68069msh7f3d9fb3243733cp104675jsn2ef84734cf1f"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

//  const articleContent = document.querySelector('.card-text');


// const key ='1fe8f68069msh7f3d9fb3243733cp104675jsn2ef84734cf1f';

// const getQuote = async () =>{
// //     const base='andruxnet-random-famous-quotes.p.rapidapi.com';
    
//      const query =`?apikey=${key}`;
    
//     const response= await fetch(base + query);
    
//     const data = await response.json().then
//     (data=>{
//         catData= data[6];
    
//        articleContent.innerHTML=`<p class="card-text">${quote}</p>`;
//              }).catch(err => console.log(err));
    
   
//  };
//  getQuote();
