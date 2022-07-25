const geradorNomes = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

const novoEmail = (func) => {
  const funcionarios = {
    id1: func('Rodrigo Macedo'),
    id2: func('Anna Claudia'),
    id3: func('Maria Jose')
  };
  return funcionarios;
};

console.log(novoEmail(geradorNomes));

