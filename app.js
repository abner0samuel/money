const login = document.querySelector(".gHGrYB");
const sign = document.querySelector('.cQZTBr');
const btn = document.querySelector(".btn-s-l");
const div = document.querySelector('.eWILQB')
login.addEventListener('click',()=>{
   
    
    login.style.color = '#0085FF'
    sign.style.color = '#8A94A6'
    div.style.background ='linear-gradient(to right, #f1f7fd 0 50 %, #0085ff 50 % 100 %)'

})
sign.addEventListener('click', () => {
    // login.style.display = 'none'
    // btn.innerText = 'sign out'
    login.style.color = '#8A94A6'
    sign.style.color = '#0085FF'
    div.style.background = 'linear-gradient(to right, #0085ff 0 50 %, #f1f7fd 50 % 100 %)'

})
