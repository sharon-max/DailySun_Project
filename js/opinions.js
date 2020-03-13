//This code takes you form the opinions page to the form
// const btn = document.querySelector(".myButto");

// btn.addEventListener('click', () => {
//     window.open('http://127.0.0.1:5500/Form.html')
// });

const card = document.querySelector('.OpinionBase');


const addOpinions = (Opinions, id) => {
    let Time = (Opinions.created_at.toDate());

    //let description = (opinion.description);

    let html = `

    <div data-id="${id}" class="OpinionBase">

    <div class="card-body">

        <p class="card-text">${Opinions.Desrciption} </p>
        <p class="card-text"><small class="text-muted">${Time}</small></p>
    </div>
    </div>
    `;
    // console.log(html);
    card.innerHTML += html;
    console.log(id);
}

db.collection('Opinions').get().then((snapshot) => {
    // do something when we have the data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach(doc => {
        console.log(doc.id);

        addOpinions(doc.data(), doc);

    });

}).catch(err => {
    console.log(err);
});


// // console.log(Opinions.Opinion_by.Date());
// // let time = (Opinions.Date.toDate());

// // let html = `
// //     <div data-id="${id}">
// //     <img src="" class="card-img-top" alt="Potrait of Mrs Suzen Lee">
// //     <div class="card-body">

// //     <p class="card-text">${Opinions.Opinion_by} </p>
// //                 <p class="card-text"><small class="text-muted">${time}</small></p>
// //     </div>
// //     `;
// // console.log(html);
// // }