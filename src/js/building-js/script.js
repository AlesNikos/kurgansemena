import Seo from './parts/seo'

document.addEventListener('DOMContentLoaded', () => {


  const seo = new Seo();

  console.log(typeof 'NTcn' == 'string');

  let getMessage = (text, name) => {
    console.log(`${text}, ${name}`);
  }

  setTimeout(getMessage, 500, 'Hi', 'Vasya');

});