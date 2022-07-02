const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
const pai = elementoOndeVoceEsta.parentElement
pai.style.color = 'blue';
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Filho do Filho'
const primeiroFilho = pai.firstElementChild
const primeitoFilho2 = elementoOndeVoceEsta.previousElementSibling;
const textElement = elementoOndeVoceEsta.nextElementSibling0