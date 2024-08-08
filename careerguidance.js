fetch('http://127.0.0.1:5500/connect.php')
.then(response => response.json())
.then(data => {
  console.log('Data received from server:', data);
  // You can handle the received data here
})
.catch(error => console.error('Error fetching data:', error));
 
 const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const btnLogin = document.querySelector('.btn-login');
 const closeBtn = document.querySelector('.closeicon ');
 registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
 });

 loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
 });

 btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
 });
 closeBtn.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
 });