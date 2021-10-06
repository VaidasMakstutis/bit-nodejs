const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');

buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
})