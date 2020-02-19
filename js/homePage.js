
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



const articleContent = document.querySelector('#newsFeed');

const newsImage = document.querySelector('.image');

// const key = 'bd5968b940f3419ca949b01b99b6e75a';


    const base = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd5968b940f3419ca949b01b99b6e75a';

    // const query = `?apikey=${key}`;
    const getNews = async () =>{

    const response = await fetch (base);
    const data = await response.json()
    .then(data =>{
    // return data;
    // }
    // getNews()
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    newsData = data;
    articleContent.innerHTML = `
    <div id="newsFeed" class="ssNews">
      <h2>${newsData.articles[9].description} </h2>
      
      <p>${newsData.articles[9].publishedAt}</p>
    </div>`;
      
        newsImage.setAttribute('src', newsData.articles[9].urlToImage);
        
         console.log(newsData);
    }).catch(err => console.log(err));

   
};

getNews();
