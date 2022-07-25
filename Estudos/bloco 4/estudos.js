const adicao = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;
const modulo = (a, b) => a % b;


const maior = (a, b) => (a > b) ? a : b;

console.log(maior(30, 50))

const maiorDe3 = (a, b, c) => {
  if (a > b && a > c){
    return a
  } else if ( b > a && b > c){
    return b
  } else {
    return c
  }
}
console.log(maiorDe3(30, 50, 100))

const numero = (a) => (a > 0) ? 'Positivo' : 'Negativo'

console.log(numero(2))

const triangulo = (a, b, c) => {
  if (a < 0 || b < 0 || c < 0){
    throw new Error('Angulo inválido')
  } else if (a + b + c !== 180){
    return false
  } else {
    return true
  }
}
console.log(triangulo(10, -10, 130))