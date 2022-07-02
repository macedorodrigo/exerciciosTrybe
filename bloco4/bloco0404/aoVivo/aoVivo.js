for (let i = 2; i <= 100; i += 2) console.log()

console.log(i)

let listaDeNomes = 'Rodrigo Macedo Caren Leticia'
let arrayNomes = listaDeNomes.split(' ')
console.log(arrayNomes)
console.log(arrayNomes.length)

let novaString = ''
for (nome of arrayNomes) {
  //colocar o let é opcional
  novaString += nome + '%'
  console.log(nome)
}

let numeros = [3, 84, 984, 94, 84, 84, 8, 7, 352, 2, 62, 9, 9, 4]
let maiorNumero = Math.max.apply(null, numeros)
console.log(maiorNumero)

let numeros = [3, 84, 984, 94, 84, 84, 8, 7, 352, 2, 62, 9, 9, 4]

for(numero of numeros){
  console.log(numero*3)
}


//percorrer uma string com FOR OF
let senha = 'Issoaeeof'

for(i of senha){
  console.log(i)
}

//FOr in trás o indice de cada elelmtno 
for(let n in arrayNomes){
  console.log(n)
}

let pessoa = {
  nome: 'Rodrigo Macedo Conceição',
  idade: 28,
  localDeNascimento: 'Juiz de Fora',
  apelido: 'Macedo',
}

for (chave in pessoa){
  console.log(chave)
  console.log(pessoa[chave])
}