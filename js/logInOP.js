//  const data = [
//      { username: 'Beauty@adadeve', password: '246810' },
//      { username: 'Sharon@adadeve', password: '246811' },
//      { username: ':Livhu@adadeve', password: '246812' }
//  ];

//  function getInfo() {
//      const username = document.getElementById('username').value
//      const password = document.getElementById('password').value

//      for (i = 0; i < data.length; i++) {
//          if (username == data[i].username && password == data[i].password) {
//              console.log(username + "is logged in")
//              return
//          }
//      }
//  };

const form = document.querySelector('form');
const button = document.querySelector('.bbt1');


// localStorage.setItem('username', 'beauty@adadeve');
// localStorage.setItem('password', '246810');
// localStorage.setItem('loggedin', 'youre loggoed in');

let name = localStorage.getItem('username', 'beauty@adadeve');
let password = localStorage.getItem('password', '246810');
let logged = localStorage.getItem('loggedin', 'youre loggoed in');

console.log(name, password, logged);

//updating info
localStorage.setItem('username', 'sharon@adadev');
localStorage.password = 246811;
name = localStorage.getItem('username');
password = localStorage.getItem('password');
console.log(name, password);

//parse variable into js

const base = '{"username":"beauty@adadev", "password":246810, "logged":"you are logged in"}'

// const loggedin = JSON.parse(base);
// document.querySelector("form").innerHTML = loggedin.username + ", " + loggedin.logged;
// console.log(loggedin);






//  button.addEventListener('click', e => {

//      e.preventDefault();
//      if (input = username.password) 
//      window.open('http://127.0.0.1:5500/Form.html')
//  });





//variable logged in

//  function getIterm() {
//      const loggedin = document.getElementById('username').value


//      for (i = 0; i < data.length; i++) {
//          if (username == data[i].username && password == object[i].password) {
//              console.log(username + "is logged in")
//          }
//      }
//  }