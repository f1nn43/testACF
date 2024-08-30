const navBtn = document.querySelector('.header__navbarlow')
const nav = document.querySelector('.header__blockdowner')
navBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})