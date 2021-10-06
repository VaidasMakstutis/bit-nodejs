const formDOM = document.querySelector('form');
const resetDOM = formDOM.querySelector('.reset');
const minusDOM = formDOM.querySelector('.minus');
const plusDOM = formDOM.querySelector('.plus');
const numberDOM = formDOM.querySelector('.number');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

let counter = 0;

const defaulH1tText = h1DOM.innerText;
const changeH1Status = "Zaidimas progrese";

ulDOM.innerHTML = '<li>Tu pasileidai zaidima - sekmes!</li>';

minusDOM.addEventListener('click', function () {
    numberDOM.innerText = --counter;
    h1DOM.innerText = changeH1Status;
    ulDOM.innerHTML += `<li>Paspaudei minusa ir dabartinis rezultatas yra ${counter}.</li>`;
});

plusDOM.addEventListener('click', function () {
    numberDOM.innerText = ++counter;
    h1DOM.innerText = changeH1Status;
    ulDOM.innerHTML += `<li>Paspaudei pliusa ir dabartinis rezultatas yra ${counter}.</li>`;
});

resetDOM.addEventListener('click', function () {
    counter = 0;
    numberDOM.innerText = counter;
    h1DOM.innerText = defaulH1tText;
    ulDOM.innerHTML += `<li>Paspaudei reset ir dabartinis rezultatas yra ${counter}.</li>`;
});