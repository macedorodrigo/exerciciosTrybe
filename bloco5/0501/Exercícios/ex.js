function futuroProgramador() {
  const futuro = document.getElementsByTagName('p')
  futuro[1].innerText = 'Programador ganahndo pelo menos R$12.000,00'
}
futuroProgramador()

function quadrado() {
  const quadradoUm = document.getElementsByClassName('main-content')
  for (i = 0; i < quadradoUm.length; i += 1) {
    quadradoUm[i].style.backgroundColor = 'rgb(76,164,109)'
  }
}
quadrado()

function quadradoCentral() {
  const quadradoDois = document.querySelectorAll(
    '.main-content .center-content'
  )
  quadradoDois[0].style.backgroundColor = 'white'
}
quadradoCentral()

function correcao() {
  const correcao = document.getElementsByTagName('h1')
  correcao[0].innerText = 'Exercício 5.1 - JavaScript'
}
correcao()

function letrasUpper() {
  const upperCaseTexto = document.getElementsByTagName('p')
  for (i = 0; i < upperCaseTexto.length; i += 1) {
    upperCaseTexto[i].style.textTransform = 'uppercase'
  }
}

letrasUpper()
function returnP() {
  const retornarP = document.getElementsByTagName('p')
  for (i = 0; i < retornarP.length; i += 1) {
    console.log(retornarP[i].innerText)
  }
}
returnP()
