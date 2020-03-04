
// political news section
const topNews = document.querySelector('.topNews');
const politicalNews = document.querySelector('.News');

const getNewsData = async () =>{

  const baseB = 'http://newsapi.org/v2/top-headlines?country=za&apiKey=bd5968b940f3419ca949b01b99b6e75a';

  const response = await fetch (baseB);
  const data = await response.json();
  return data;
  };

  getNewsData()
  .then(data =>{
    const newsData = data;
    const articles = newsData.articles;
    console.log(newsData);

    for(i = 0; i < 10; i++){

   topNews.innerHTML =`
   <div class="topNews" class="col-12">
      <h1 class="text1 text-white">${articles[i].title}</h1>
    </div>
   `;

    politicalNews.innerHTML +=`
    <div class="ssNews">
    <img src="${articles[i].urlToImage}" width="100%" height="50%" alt="${articles[i].source}"> <br><br>
    <h2>${articles[i].description}</h2>
    <p>${articles[i].publishedAt}</p>
    </div>
    `;

   
  };
}).catch(err => console.log(err));



const articleContent = document.querySelector('.newsFeed');
 const gossipNews = document.querySelector('.gossipNews');

const base = 'http://newsapi.org/v2/top-headlines?country=za&category=entertainment&apiKey=bd5968b940f3419ca949b01b99b6e75a';

const getNews = async () =>{
  const response = await fetch (base);
  const data = await response.json();
  return data;
  };

  getNews()
  .then(data =>{
    const newsData = data;
    console.log(newsData);
    const articles = newsData.articles;
 
    for(i = 0; i < 10; i++){

    articleContent.innerHTML =`
    <h1 class="text2">${newsData.articles[i].title}</h1><br>
    <div class="row no-gutters">
    <div class="col-12">
    <img src="${newsData.articles[i].urlToImage}" width="100%" alt="${articles[i].source}">
    </div>
  
    <div class="col-12">
    <div class="card-body">
    <h2 class="card-text">${newsData.articles[i].content}</h2>
    <p class="card-text"><small class="text-muted">${newsData.articles[i].publishedAt}</small></p>
    </div>
    </div>`;
 
  };

}).catch(err => console.log(err));



// const political = document.querySelector('#politics1');
// const article = document.querySelector('#politics2');
// const articleO = document.querySelector('#politics3');
// const articleT = document.querySelector('#politics4');
// const articleTh = document.querySelector('#politics5');
// const articleF = document.querySelector('#politics6');
// const articleSix = document.querySelector('#politics7');
// const articleS = document.querySelector('#politics8');
// const articleN = document.querySelector('#politics9');
// const articleTen = document.querySelector('#politics10');


// articleOne.innerHTML =`
//   <img class="img col-5" src="${newsData.articles[3].urlToImage}" class="card-img" alt="group-of-people">
//   <div class="col-7">
//     <div class="card-body">
//       <h2 class="card-text">${newsData.articles[3].description}</h2>
//       <p class="card-text"><small class="text-muted">${newsData.articles[3].publishedAt}</small></p>
//     </div>
//   </div>`;

 // articleO.innerHTML =`
    // <div id="politics3" class="ssNews">
    // <img src="${newsData1.articles[7].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[7].description}</h2>
    // <p>${newsData1.articles[7].publishedAt}</p>
    // </div>`;

    // articleT.innerHTML =`
    // <div id="politics4" class="ssNews">
    // <img src="${newsData1.articles[14].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[14].description}</h2>
    // <p>${newsData1.articles[14].publishedAt}</p>
    // </div>`;

    // articleTh.innerHTML =`
    // <div id="politics5" class="ssNews">
    // <img src="${newsData1.articles[5].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[5].description}</h2>
    // <p>${newsData1.articles[5].publishedAt}</p>
    // </div>`;

    // articleF.innerHTML =`
    // <div id="politics6" class="ssNews">
    // <img src="${newsData1.articles[6].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[6].description}</h2>
    // <p>${newsData1.articles[6].publishedAt}</p>
    // </div>`;

    // articleSix.innerHTML =`
    // <div id="politics7" class="ssNews">
    // <img src="${newsData1.articles[1].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[1].description}</h2>
    // <p>${newsData1.articles[1].publishedAt}</p>
    // </div>`;

    // articleS.innerHTML =`
    // <div id="politics8" class="ssNews">
    // <img src="${newsData1.articles[18].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[18].description}</h2>
    // <p>${newsData1.articles[18].publishedAt}</p>
    // </div>`;

    // articleN.innerHTML =`
    // <div id="politics9" class="ssNews">
    // <img src="${newsData1.articles[19].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[19].description}</h2>
    // <p>${newsData1.articles[19].publishedAt}</p>
    // </div>`;

    // articleTen.innerHTML =`
    // <div id="politics10" class="ssNews">
    // <img src="${newsData1.articles[12].urlToImage}" width="100%" height="50%" alt="trump"> <br><br>
    // <h2>${newsData1.articles[12].description}</h2>
    // <p>${newsData1.articles[12].publishedAt}</p>
    // </div>`;
     // headlines.innerHTML =`
    // <div id="topNews" class="col-10">
    // <h1 class="text1 text-white">${newsData1.articles[0].title}</h1>
    // </div>`;

    // political.innerHTML =`<div id="politics1" class="ssNews"><br>
    // <img  src="${newsData1.articles[17].urlToImage}" width="100%" height="50%" alt="news"><br> <br>
    // <h2>${newsData1.articles[17].description}</h2>
    // <p>${newsData1.articles[17].publishedAt}</p>
    // </div>`;



    
    // gossipNews.innerHTML +=`
    // <div id="articleOne" class="row no-gutters">
    // <img class="img col-5" src="${articles[i].urlToImage} alt="${articles[i].source}">
    // <div class="col-7">
    // <div class="card-body">
    // <h2 class="card-text">${articles[i].description}</h2>
    // <p class="card-text"><small class="text-muted">${articles[i].publishedAt}</small></p>
    // </div>
    // </div>
    // </div>
    // `; 