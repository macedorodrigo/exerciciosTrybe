const titulo = document.getElementById('header-container').style.background = "rgb(000, 250, 154)"
const quadroUrgente = document.getElementsByClassName('emergency-tasks')[0].style.background = "orange";


const subQuadrado = document.querySelectorAll('h3')
for(i = 0; i < 2; i += 1){
  subQuadrado[i].style.backgroundColor = 'purple'
}
const subQuadrado2 = document.querySelectorAll('h3')
for(i = 2; i < 4; i += 1){
  subQuadrado[i].style.backgroundColor = 'black'
}

const quadroUrgente2 = document.getElementsByClassName('no-emergency-tasks')[0].style.background = "yellow";

const rodape = document.getElementById('footer-container').style.backgroundColor = 'green'