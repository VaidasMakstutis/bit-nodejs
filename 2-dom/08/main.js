const formDOM = document.querySelector('form');
const resetDOM = formDOM.querySelector('.reset');
const minusDOM = formDOM.querySelector('.minus');
const plusDOM = formDOM.querySelector('.plus');
const numberDOM = formDOM.querySelector('.number');
const h1DOM = document.querySelector('h1');

let counter = 0;

const defaulH1tText = h1DOM.innerText;
const changeStatus = "Zaidimas progrese";

minusDOM.addEventListener('click', function () {
    numberDOM.innerText = --counter;
    h1DOM.innerText = changeStatus;
});

plusDOM.addEventListener('click', function () {
    numberDOM.innerText = ++counter;
    h1DOM.innerText = changeStatus;
});

resetDOM.addEventListener('click', function () {
    counter = 0;
    numberDOM.innerText = counter;
    h1DOM.innerText = defaulH1tText;
});