const h1DOM = document.querySelector('h1');

h1DOM.innerText = 'Zuikio pomidoru darzas';

h1DOM.classList.add('pavadinimas');


const liDOM = document.querySelectorAll('li');
// console.log(liDOM);

liDOM.forEach(e => {
    e.innerText = 'pomidoras';
    e.classList.add('pomidoras');
});