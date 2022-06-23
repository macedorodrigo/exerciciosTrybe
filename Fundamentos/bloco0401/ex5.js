const a = 178;
const b = 1;
const c = 1;

let soma = a + b + c;
let positivo = a > 0 && b > 0 && c > 0;

if (positivo){
  if(soma === 180){
    console.log(true)
  } else {
    console.log(false)
  }
} else {
  console.log('Erro, angulos não aprovados')
}
