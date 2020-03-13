
//seasons
const list = document.querySelector('ul');
const addSeasons = (season) =>{
 let time= (season.time);
 let title=(season.title);
  let html= `
  <div>
      <h2> ${season.season}</h2>
      <img src="${title}" alt="" width="80%" >
      <p>${time}</p>
      
  </div>
  `;
  list.innerHTML+=html;
}

db.collection('seasons').get().then((snapshot)=>{
  snapshot.docs.forEach(doc =>{
    addSeasons(doc.data());
  });
  }).catch(err =>{
    console.log(err)
  
});


//cities

const citylist = document.querySelector('.cities');
const addCities = (city)=>{
  let title= (city.title);
  let forecast= (city.forecast);
  let temperature = (city.temperature);
  let img =(city.img)
  let html=`
  <div class="cities">
  <h1>Other city</h1>
  <h6> ${title}</h5>
 <img src="${img}" alt="" width="40%" >
  <h6>${forecast}</h6>
  <p>${temperature}</P>
  </div>
  `;
  list.innerHTML+= html

}


db.collection('Cities').get().then((snapshot)=>{
  snapshot.docs.forEach(doc =>{
    addCities(doc.data());
  });
  }).catch(err =>{
    console.log(err)
  
});

//Weather
  
const weatherTerms = document.querySelector('.terms');
const form = document.querySelector('form');

const addTerms= (weather_terms, id)=>{
  // let description=(weather_terms.description);
  // let author=(terms.author)

  let created_at = weather_terms.created_at.toDate();

  let html=`
  <div class="termsDiv" data-id="${id}"> 
   <h2>${weather_terms.title}</h2>
   <p>${weather_terms.description} </p>
   <p> ${weather_terms.author} </p}
   <p>${created_at}</p>
 
  <button class="btn btn-sm my-2"5>Delete</button>
  </div>
`;
  weatherTerms.innerHTML+= html
};


const deleteTerms = (id) =>{

  const weather_terms = document.querySelectorAll('.termsDiv');
  weather_terms.forEach(weather_terms =>{
      if(weather_terms.getAttribute('data-id')===id){
        weather_terms.remove();
      }
  });

};



//get document
db.collection('weather_terms').onSnapshot(snapshot =>{
  snapshot.docChanges().forEach(change =>{
    const doc =change.doc;
    if(change.type === 'added'){
      addTerms(doc.data(),doc.id);
    } else if( change.type === 'removed'){
      deleteTerms(doc.id);
    }
  });
 // console.log(snapshot.docChanges())
});

// db.collection('weather_terms').get().then((snapshot)=>{
//   snapshot.docs.forEach(doc =>{
//     //console.log(doc.id)
//     addTerms(doc.data(),doc.id);
//   });
//   }).catch(err =>{
//     console.log(err)
  
// });

// add document



  form.addEventListener ('submit', e =>{
  e.preventDefault();

  const now = new Date();
  const weather_terms = {

    title:form.userterm.value,
    description: form.userterms.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };


db.collection('weather_terms').add(weather_terms).then(() =>{
  console.log('terms added');
  
}).catch (err=>{
  console.log(err); 
})

});

//deleting data

weatherTerms.addEventListener('click', e =>{
 if (e.target.tagName === 'BUTTON'){
   const id =e.target.parentElement.getAttribute('data-id')

   db.collection('weather_terms').doc(id).delete().then(()=>{
     console.log('terms deleted')
   })

 }
});


// subscriber
 const forms =document.querySelector('.formS');
forms.addEventListener ('submit', e =>{
    e.preventDefault();
  
    
    const subscribers= {
    email:forms.subscriber.value,
      
    };
  
  
  db.collection('subscribers').add(subscribers).then(() =>{
    console.log('subscriber added');
    
  }).catch (err=>{
    console.log(err); 
  })
  
  });