const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');
console.log(h1DOM);

const liDOM = document.querySelectorAll('li');
// console.log(liDOM);
for (let j = 0; j < liDOM.length; j++) {
    liDOM[j].classList.add('darzove');
    // console.log(liDOM[j]);
}