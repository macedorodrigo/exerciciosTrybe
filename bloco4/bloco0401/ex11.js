let inss;
let ir;

const salario = 5000

if (salario >0 && salario <= 1556.94){
  inss = salario * 0.08
} else if (salario >= 1556.95 && salario <=2594.92){  
  inss = salario *0.09
} else if (salario >= 2594.93 && salario <=5189.82){
  inss = salario* 0.11
} else {
  inss = 570.88
}    
const salariobase = (salario - inss);

if (salariobase > 0 && salariobase <= 1903.98){
  ir = 0
}else if (salariobase >=1903.99 && salariobase <=2826.65){
  ir = ((salariobase*0.75)-142.80) 
}else if(salariobase >= 2826.66 && salario <=3751.05){
  ir = ((salariobase*0225)-636.13)
}else {
  ir = ((salariobase*0.275)-869.36)
}
console.log("Salário:R$"+(salariobase-ir))
