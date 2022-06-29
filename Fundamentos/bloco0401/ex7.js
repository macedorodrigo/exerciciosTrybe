let nota = 71
let amplitudeNota = nota > 0 && nota < 100

if (nota > 0 && nota < 100) {
  if (nota < 100 && nota > 90) {
    console.log('Tirou nota A')
  } else if (nota >= 80) {
    console.log('Tirou B')
  } else if (nota >= 70) {
    console.log('Tirou C')
  } else if (nota >= 60) {
    console.log('Tirou D')
  } else if (nota >= 50) {
    console.log('Tirou E')
  } else if (nota < 50) {
    console.log('Tirou F')
  }
} else {
  console.log('Erro dados inválidos')
}
