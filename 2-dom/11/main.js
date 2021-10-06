const inputDOM = document.querySelector('#message');
const buttonDOM = document.querySelector('button');
const spanDOM = document.querySelector('div > span');
const textColorDOM = document.querySelector('#text-color');
const bgColorDOM = document.querySelector('#bg-color');
// console.log(inputDOM);

inputDOM.style.color = "red";

buttonDOM.addEventListener('click', function (event) {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    spanDOM.style.color = textColorDOM.value;
    spanDOM.style.backgroundColor = bgColorDOM.value;
    inputDOM.value = '';
})