const list = document.querySelector('.opinions');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addOpinions = (Opinions, id) => {
    console.log(id);
    //console.log(data);
    //let time = Opinions.created_at .toDate();
    let html = `
    <div data-id="${id}"style="text-align: center; padding-top:2;">
    <img src="${Opinions.Image}" class="card-img-top" alt="Potrait of Mrs Suzen Lee"><br>
    <p>${Opinions.Date}</P>
    <h2>${Opinions.Description}</h2>
   
    <button class="btn  c2 btn-sm my-2">delete</button>
    </div>
  `;

    list.innerHTML += html;
};

const deleteOpinions = (id) => {

    const Opinions = document.querySelectorAll('li');
    Opinions.forEach(Opinions => {
        if (Opinions.getAttribute('data-id') === id) {
            Opinions.remove();
        }
    });
}

// get documents
const unsub = db.collection('Opinions').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added') {
            addOpinions(doc.data(), doc.id);
        } else if (change.type === 'removed') {

            deleteOpinons(doc.id);
        }
    });
});

// save documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const Opinions = {
        Description: form.opinion.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('Opinions').add(Opinions).then(() => {
        console.log('Opinions added');
    }).catch(err => {
        console.log(err);
    });
});

// deleting data
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('Opinions').doc(id).delete().then(() => {
            console.log('Opinions deleted');
        });
    }
});

//collection 2
const employ = document.querySelector('#employmentSec');

const addEmployment = (EmploymentOpportunities, id) => {

    // let disk = EmploymentOpportunitie.JobDescription;
    // let loca = EmploymentOpportunitie.Location;
    // console.log('id');


    let time = (EmploymentOpportunities.created_at);

    let html = `
    <div data-id="${id}">

          <h2 class="card-text">${EmploymentOpportunities.Location}</h2>
          <p>${EmploymentOpportunities.JobDescription}</P>
          <p class="card-text"><small class="text-muted">${time}</small>
          </p>
    </div>
    `;

    employ.innerHTML += html

    console.log(html);
}


db.collection('EmploymentOpportunities').get().then((snapshot) => {
    // do something when we have the data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        console.log(doc.id);

        console.log(addEmployment(doc.data(), doc.id))

    });

}).catch(err => {
    console.log(err);
});


const movie = document.querySelector('.movieSec')
const addsaMovies = (saMovies) => {

    // console.log(id);



    let pic = saMovies.Image;

    let html = `
    <div style="display:inline-block; margin-left:5px">
       <img src="${pic}" style="width:100px; height="auto">
       <p>${saMovies.Movie}</P>
       <p>${saMovies.Date}</P>
   </div>
  `;

    movie.innerHTML += html;
};

db.collection('saMovies').get().then((snapshot) => {
    // do something when we have the data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        console.log(doc.id);

        addsaMovies(doc.data(), doc.id);

    });

}).catch(err => {
    console.log(err);
});

// subscriber
const forms = document.querySelector('.formS');
forms.addEventListener('submit', e => {
    e.preventDefault();


    const subscribers = {
        email: forms.subscriber.value,

    };


    db.collection('subscribers').add(subscribers).then(() => {
        console.log('subscriber added');

    }).catch(err => {
        console.log(err);
    })

});