/*Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior
valor e o índice do menor valor.*/

const array =[1,2,3,4,5,6,7,8,9];
console.log(array.length);

const primeiroValor = array[0];
console.log(primeiroValor);

const ultimoValor = array[array.length -1];
console.log(ultimoValor);

module.exports = {array, primeiroValor, ultimoValor}