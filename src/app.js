import './sass/style.scss'

// import './components/samllimg.js'



const navbar = document.querySelector('.navbar')
const btn = document.querySelector('.fa-outdent')
const hideMenuBtn = document.querySelector('.close')
const toggleMenu = ()=>{
    navbar.classList.toggle('show-menu')
}

btn.addEventListener('click',toggleMenu)
hideMenuBtn.addEventListener('click',toggleMenu)