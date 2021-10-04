const liDOM = document.querySelectorAll('li');

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i];
    const pavadinimas = ingredientas.textContent;
    console.log(pavadinimas);
}

// alternatyva
// for (const ingredientas of liDOM) {
//     console.log(ingredientas.textContent);
// }


let arrayUppercase = [];

for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i];
    const pavadinimasUppercase = ingredientas.textContent.toUpperCase();
    arrayUppercase.push(pavadinimasUppercase);
    // console.log(pavadinimasUppercase);
}


console.log(arrayUppercase);