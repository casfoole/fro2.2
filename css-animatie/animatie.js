const knop = document.getElementById('knop')
let vlak = document.querySelector('.vlakje');
let vlakZwart = document.querySelector('.vlakje-zwart');
let vlakRood = document.querySelector('.vlakje-rood');

const schuif = () => {
    vlak.classList.toggle('vlakje--schuif-uit');
    vlakZwart.classList.toggle('vlakje--schuif-uit');
    vlakRood.classList.toggle('vlakje--schuif-uit');
}

knop.addEventListener('click', schuif)
