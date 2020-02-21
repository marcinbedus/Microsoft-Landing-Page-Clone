const btn = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-links');

btn.addEventListener('click', toggleNav);

function toggleNav() {
    nav.classList.toggle('active');
}