const h1DOM = document.querySelector('h1');
console.log(h1DOM);
h1DOM.innerText = 'Zuikio darzas';

const liDOM = document.querySelectorAll('li');
liDOM.forEach(e => {
    e.innerText = 'Israuta darzove';
});