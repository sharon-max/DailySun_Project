// const email = inputEmail.email.value.trim();
// inputEmail.reset();

// localStorage.setItem('email', 'sharon@adadev.za');
// localStorage.setItem('password', 'Fhatuwani1');

// let email = localStorage.getItem('email');
// let password = localStorage.getItem('password');

// console.log(email, password);

// let inputEmail = document.getElementById('email');

// if(localStorage.getItem('email')){
//     inputEmail(localStorage.getItem('email'))
//     .then(data => inputEmail(data))
//     .catch(err => console.log(err));
// }

// let inputPassword= document.getElementById('password');


// new code

const signin = document.querySelector('.signin');
const login = document.querySelector('.login');
const logout = document.querySelector('.logout');

const username= localStorage.getItem('username');
const password= localStorage.getItem('password');
let loggedin= localStorage.getItem('loggedin');

loggedin= JSON.parse(loggedin);

const msg = document.querySelector('.msg');
 if (loggedin){
    msg.innerHTML=' you are logged in';
} else{
    msg.innerHTML='you are logged out';

 }


signin.addEventListener('submit',e =>{
    e.preventDefault();

}) ;


const username= localStorage.getItem('username');
const password= localStorage.getItem('password');
let loggedin= localStorage.getItem('loggedin');

const newUsername= signin.password.value;
const newPassword=signin.username.value;
const otherMsg= document.querySelector('.otherMsg');


if (!username && !password && !loggedin){
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    msg.innerHTML='you are logged in'
}   elseif ( username && newUsername === username && !loggedin);{
    otherMsg.innerHTML=' That user name already exists'
    msg.innerHTML= 'you are logged out'
}

login.addEventListener('submit', e => {
    e.preventDefault();
    const newUsername= login.username.value;
    const newPassword=login.password.value;

const username= localStorage.getItem('username');
const password= localStorage.getItem('password');
let loggedin= localStorage.getItem('loggedin');
    
if (newPassword=== password && newUsername === username && !loggedin){
    localStorage.setItem('logged','true');
    msg.innerHTML= 'you are logged in'
}   else if (loggedin){
    otherMsg.innerHTM='you are logged in';
}   else if (username === newUsername && newPassword !==password  && !loggedin){
    otherMsg.innerHTML= 'wrong password';
}
login.reset();
signin.reset();


});

logout.addEventListener('click',()=>{
    localStorage.setItem('login', 'false');
    msg.innerHTML='you are logged out'
});