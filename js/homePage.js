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
    // console.log(newsData);
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


// Political news from firebase database
const list = document.querySelector('.politics1');

const addPolitics = (Politics, id) => {

    // console.log(recipe.created_at.toDate());
    let time = (Politics.created_at.toDate());

    let html = `
    <div data-id="${id}" id="articleOne" class="row no-gutters">
      <img class="img col-12" src="${Politics.image}" alt="#">

      <div class="col-11">
        <div class="card-body">
          <h2 class="card-text">${Politics.description}</h2>
          <p class="card-text"><small class="text-muted">${time}</small></p>
        </div>
      </div>
    </div>
    `;

    list.innerHTML += html

    // console.log(html);
}

db.collection('Politics News').get().then((snapshot) =>{
    // do something when we have the data
    snapshot.docs.forEach(doc => {
        console.log(doc.id);

        addPolitics(doc.data(), doc.id);
        
    });

}).catch(err =>{
    console.log(err);
});


// Gossip section from firebase database
const gossip = document.querySelector('.gossipNews');

const addGossip = (Gossip, id) => {

    // console.log(recipe.created_at.toDate());

    let html = `
    <div data-id="${id}" id="articleOne" class="row no-gutters">
      <img class="img col-12" src="${Gossip.image}" alt="#" height="50%">

      <div class="col-11">
        <div class="card-body">
          <h2 class="card-text">${Gossip.description}</h2>
          <p class="card-text"><small class="text-muted">${Gossip.source}</small></p>
        </div>
      </div>
    </div>
    `;

    gossip.innerHTML += html

}
db.collection('Gossip News').get().then((snapshot) =>{
    // do something when we have the data
    snapshot.docs.forEach(doc => {
        console.log(doc.id);

        addGossip(doc.data(), doc.id);
        
    });

}).catch(err =>{
    console.log(err);
});



// World breaking News from firebase database 
const write = document.querySelector('.worldNews');
const form1 = document.querySelector('form');

const addLatest = (World, id) => {

    // let time = (World.created_at);

    let html = `
    <div data-id="${id}" id="articleOne" class="row no-gutters">
      <h1 class="text2"><small>${World.title}</small></h1>
        <div class="card-body">
          <h2 class="card-text">${World.description}</h2>
          <br>
          <p class="card-text">${World.author}</p>
        </div>
      <button class=" btn btn-sm my-2"5 ">delete</button>
    </div>
    `;

    write.innerHTML += html

}

// {/* <p class="card-text"><small class="text-muted">${time}</small></p> */}


// get document on real time
db.collection('World').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;

        if(change.type  === 'added'){
            addLatest(doc.data(), doc.id);
        } else if (change.type === 'removed'){
            deleteLatest(doc.id);
        }
      
    });

});

// adding documents
form1.addEventListener('submit', e => {
    e.preventDefault();
    // const now = new Date();
    const World = {

        title: form1.worldUpDate.value,
        author: form1.world1.value,
        description: form1.WorldDes.value,
        // created_at: firebase.firestore.Timestamp.fromDate(now)
    };
 
    db.collection('World').add(World).then(() =>{
        console.log('World news Updated');


    }).catch(err =>{
    console.log(err);
    })
});   

// delete Article

const deleteLatest = (id) => {
  const World = document.querySelectorAll('#articleOne');
  World.forEach(World => {

      if (World.getAttribute('data-id') === id){
          World.remove();
      }
  });
}

// deleting list items

write.addEventListener('click', e =>{
    if (e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');

        db.collection('World').doc(id).delete().then(() => {
             console.log('World news deleted');
         });
    }
});


// subscribers
const subb = document.querySelector('#butto');
const form = document.querySelector('.wrapper');
const div = document.querySelector('#me');

subb.addEventListener('click', e => {
  e.preventDefault();
  console.log('it works');
  div.style.display = 'block';
  form.style.display = 'block';

})

// adding documents
form.addEventListener('submit', e => {
  e.preventDefault();
  // const now = new Date();
  const Subscribers = {

      email: form.subscribe.value,
      // created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('Subscribers').add(Subscribers).then(() =>{
      console.log('e-mail Updated');


  }).catch(err =>{
  console.log(err);
  })
}); 