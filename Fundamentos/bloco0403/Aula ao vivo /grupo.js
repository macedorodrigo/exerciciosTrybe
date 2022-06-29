let soma = 0;

for (let i =35; i < 106; i++) {
 soma += i
}
console.log(soma)

// exercio 2

let cont = 0

for (let i = 15; i < 156; i++){
  if (i % 3 === 0){
    cont++
  }
}

if (cont >= 50){
  console.log('"Muitos ímpares (scecretamente')
}
console.log(cont)

// ex 3

let jogador1 = ['pedra', 'pael', 'tesoura'];
let jogador2 = ['pedra', 'pael', 'tesoura'];
let pontuacao1 = 0
let empate = 0

for (let i = 0; i < jogador1.length; i ++){
  for(let j = 0; j < jogador2.length; j++){
    if (jogador1[i] === jogador2[j]) {
      empate += 1;
    }
  }
}
console.log(empate)
