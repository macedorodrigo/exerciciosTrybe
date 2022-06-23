let n1 = Math.floor(Math.random() * 60) + 1
let n2 = Math.floor(Math.random() * 60) + 1
let n3 = Math.floor(Math.random() * 60) + 1
let n4 = Math.floor(Math.random() * 60) + 1
let n5 = Math.floor(Math.random() * 60) + 1
let n6 = Math.floor(Math.random() * 60) + 1

let numerosMega = [n1, n2, n3, n4, n5, n6]

let meusNumeros = [16, 25, 58, 07, 38, 18]

let numerosAcertos = 0

for (let indexMega = 0; indexMega < numerosMega.length; indexMega += 1) {
  // console.log('Numero mega Sena:', numerosMega[indexMega])
  for (
    let indexAposta = 0;
    indexAposta < meusNumeros.length;
    indexAposta += 1
  ) {
    // console.log('Numero aposta:', meusNumeros[indexAposta])
    if (numerosMega[indexMega] === meusNumeros[indexAposta]) {
      numerosAcertos += 1
      console.log('Acertou......', meusNumeros[indexAposta])
    }
  }
}
console.log('Acertos totais', numerosAcertos)
