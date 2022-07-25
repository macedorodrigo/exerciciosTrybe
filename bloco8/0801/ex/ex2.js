const loteria = (meuNumero, callback) => {
  const sorteio = Math.floor(Math.random() * 5 + 1);
  return callback(meuNumero, sorteio)
    ? 'Parabéns você ganhou'
    : 'Tente novamente';
};
const verificarNumero = (meuNumero, sorteio) => meuNumero === sorteio;

console.log(loteria(2, verificarNumero));
