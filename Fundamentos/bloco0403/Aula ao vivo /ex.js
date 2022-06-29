let sistemas = ['Folha de pagamento', 'RH', 'Treinamento','Slack', 'Zoom'];

let login = 'usuarioTrybe';
let senha = 'trybe2022';
let temAcesso = false;

if (login === 'usuarioTrybe' && senha 'trybe2022'){
  console.log('Acesso permitido');
  temAcesso = true;
} else {
  console.log('Acesso negado')
}


if (temAcesso === true){
  console.log('--Inicio gerador de senhas')
  for(let index = 0; index < novosUsuarios.length; index += 1)
    let novaSenha = novosUsuarios[index]+'_'+Math.random()*2022
    console.log('Usuario:', novosUsuarios[index],'senha:', novaSenha)
}else {
  console.log('Não tem acesso')
}
