const a = 90;
const b = 70;
const c = -1;

let soma = a+b+c;
let maiorQueZero = a > 0 && b > 0 && c > 0;

if (maiorQueZero){
  if(soma === 180){
    console.log(true)
  } else {
    console.log(false)
  }
} else {
  console.log("Erro")
}