const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('nav');

// hamburgerDOM.addEventListener('click', function () {
//     logoDOM.classList.toggle('big');
// });

let logoCount = 0;
hamburgerDOM.addEventListener('click', function() {
    logoCount++;
    if (logoCount % 2 === 1) {
        logoDOM.classList.add('big');
        navDOM.classList.add('visible');
    }
    else {
        logoDOM.classList.remove('big');
        navDOM.classList.remove('visible');
    }
})