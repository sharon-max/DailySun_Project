db.collection('Opinions').get().then((snapshot) => {

    // snapshorts.docs.forEach(doc => {
    console.log(snapshot.docs);


}).catch(err => {
    console.log(err);
});






// const card = document.querySelector('ul');

// const addOpinions = (Opinions, id) => {
//     let time = (Opinions.Date.toDate());

//     //console.log(recipe.created_at.toDate());
//     // let time = (recipe.created_at.todate());
//     let html = `
//     <li data-id="${id}">
//         <li>${Opinions.Description}</li> 
//     </li>
//     <li>${Opinions.Image}</li>

//     <li> ${Time}</li>
// `;

//     //list.innerHTML += html

//     console.log(html);
// }