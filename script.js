const container =  document.getElementById('container')

const register = document.getElementById('register')

const loginbtn = document.getElementById('login')


register.addEventListener('click',()=>{
    container.classList.add("active")
})

loginbtn.addEventListener('click',()=>{
    container.classList.remove('active')
})