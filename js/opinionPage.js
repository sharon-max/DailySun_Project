const btn = document.querySelector(".myButto");
btn.addEventListener('click',()=>{
    window.open('http://127.0.0.1:5500/Form.html')
});

// function for displayin full article
const card = document.querySelector(".A");
card.addEventListener('click', ()=>{
   window.open('http://127.0.0.1:5500/articleOne.html')
});

const cardB = document.querySelector(".B");
cardB.addEventListener('click', ()=>{
   window.open('http://127.0.0.1:5500/articleTwo.html')
});

const cardC = document.querySelector(".C");
cardC.addEventListener('click', ()=>{
   window.open('http://127.0.0.1:5500/articleThree.html')
});

const cardD = document.querySelector(".D");
cardD.addEventListener('click', ()=>{
   window.open('http://127.0.0.1:5500/articleFour.html')
});
const cardE = document.querySelector(".E");
cardE.addEventListener('click', ()=>{
   window.open('http://127.0.0.1:5500/articleFive.html')
})

const butto = document.getElementsByClassName("SubmitF");
butto.addEventListener('click', ()=>{
    window.open('http://127.0.0.1:5500/opinions.html')
});
