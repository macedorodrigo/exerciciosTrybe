const acordando = () => 'Acordando';
const cafeDaManha = () => 'Bora tomar café!!'
const dormir = () => 'Partiu domir!!'


const oquefazer = (func) => {
  const result = func();
  console.log(result)
}

oquefazer(acordando)