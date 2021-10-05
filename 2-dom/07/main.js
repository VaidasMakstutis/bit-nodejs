const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const resetDOM = document.querySelector('.reset');
const numberDOM = document.querySelector('.number');

let pirstukas = 0;

minusDOM.addEventListener('click', function () {
    // pirstukas--;
    // numberDOM.innerText = pirstukas;
    numberDOM.innerText = --pirstukas;
})

plusDOM.addEventListener('click', function () {
    pirstukas++;
    numberDOM.innerText = pirstukas;
})

resetDOM.addEventListener('click', function () {
    pirstukas = 0;
    numberDOM.innerText = pirstukas;
})