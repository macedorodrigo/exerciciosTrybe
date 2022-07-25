const verificarSeENumero = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Isto não é um número!!')
  }
}
const soma = (a, b) => {
  try {
    verificarSeENumero(a, b)
    return a + b
  } catch (erro) {
    return erro.message
  }
}
console.log(soma(5, '4'))