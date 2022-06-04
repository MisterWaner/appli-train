const train = document.getElementById('train');
const originStation = document.getElementById('originStation');
const destStation = document.getElementById('destStation');
const mission = document.getElementById('mission');
const button1 = document.getElementById('button1');

const formStat = document.getElementById('formStat')
const comment = document.getElementById('commentAll')

button1.addEventListener('click', () => {
  if(getComputedStyle(formStat).display == 'none') {
    formStat.style.display = 'flex';
  } else {
    formStat.style.display = 'none';
  }
})

