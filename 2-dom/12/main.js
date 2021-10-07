const customerDOM = document.getElementById('customer');
const sriubaDOM = document.getElementById('sriuba');
const patiekalasDOM = document.getElementById('patiekalas');
const desertasDOM = document.getElementById('desertas');
const gerimaiDOM = document.querySelectorAll('input[type="radio"]');
const submitDOM = document.querySelector('button[type="submit"]');
const orderDOM = document.querySelector('.order');

// console.log(orderDOM);

submitDOM.addEventListener('click', function (e){
    e.preventDefault();
    const name = customerDOM.value.trim();
    let sakinioPradzia = '';

    if (name !== '') {
        sakinioPradzia = `vardu ${name}`;
    } else {
        sakinioPradzia = 'nenurodes vardo';
    }

    let arNoriSriubos ='nenori';
    let arNoriPatiekalo ='nenori';
    let arNoriDeserto ='nenori';

    if (sriubaDOM.checked){
        arNoriSriubos = 'nori';
    }

    if (patiekalasDOM.checked) {
        arNoriPatiekalo = 'nori';
    }

    if (desertasDOM.checked) {
        arNoriDeserto = 'nori';
    }  

    let pasirinktasGerimas = '';

    for (let i = 0; i < gerimaiDOM.length; i++) {
        if(gerimaiDOM[i].checked) {
            pasirinktasGerimas = gerimaiDOM[i].value;
            break;
        }
    }

    orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNoriSriubos} sriubos, ${arNoriPatiekalo} pagrindinio patiekalo, ${arNoriDeserto} deserto ir ${pasirinktasGerimas} yra pasirinktas gerimas.`
})