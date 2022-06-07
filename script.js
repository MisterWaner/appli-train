const train = document.getElementById('train');
const originStation = document.getElementById('originStation');
const destStation = document.getElementById('destStation');
const mission = document.getElementById('mission');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const accueilDepart = document.getElementById('accueilDepart');
const filtrage = document.getElementById('filtrage');
const accueilArrivee = document.getElementById('accueilArrivee');
const situationPerturbee = document.getElementById('situationPerturbee');
const other = document.getElementById('other');
const filtrageArrivee = document.getElementById('filtrageArrivee');

const formStat = document.getElementById('formStat');
const comment = document.getElementById('commentAll');
const formStatArrivee = document.getElementById('formStatArrivee');
const tablestat1 = document.getElementById('tablestat1');
const tablestat2 = document.getElementById('tablestat2');


function filtrageClicked() {
  if (formStat.style.display = 'flex') {
    comment.style.display = 'none';
    formStatArrivee.style.display = 'none';
  } else {
    comment.style.display = 'flex';
    formStatArrivee.style.display = 'flex';
  }
}

function clicked() {
  if (comment.style.display = 'flex') {
    formStat.style.display = 'none';
    formStatArrivee.style.display = 'none';
  } else {
    formStat.style.display = 'flex';
    formStatArrivee.style.display = 'flex';
  }
}

function filtrageArriveeClicked(){
  if (formStatArrivee.style.display = 'flex') {
    formStat.style.display = 'none';
    comment.style.display = 'none';
  } else {
    formStat.style.display = 'flex';
    comment.style.display = 'flex';
  }
}





