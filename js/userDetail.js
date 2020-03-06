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

// signup details
signin.addEventListener('submit',e =>{
    e.preventDefault();

const username= localStorage.getItem('username');
const password= localStorage.getItem('password');
let loggedin= localStorage.getItem('loggedin');

const newUsername= signin.Password.value;
const newPassword= signin.username.value;
const otherMsg= document.querySelector('.otherMsg');


if (!username && !password && !loggedin){
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    msg.innerHTML='you are logged in'
}   else if ( username && newUsername === username && !loggedin);{
    otherMsg.innerHTML=' That user name already exists'
    msg.innerHTML= 'you are logged out'
}
}) ;

// login details
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
