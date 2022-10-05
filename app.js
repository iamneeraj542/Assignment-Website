
let menuBtn = document.getElementById('menu-btn')
let ul = document.getElementById('menu')


const clicked = () => {
    ul.classList.add('d-none')
}

menuBtn.addEventListener('click', () => {
    document.querySelector('.navbar .menu').classList.toggle("active")
    document.querySelector('.menu-btn i').classList.toggle("active");
    ul.classList.remove('d-none')
})