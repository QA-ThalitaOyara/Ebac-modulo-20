const funcaoSoma = (a,b) => {
    let soma = 0;
    for (i = 0; i < 1000; i += 1) {
       if (i % a === 0 || i % b === 0) {
          soma += i;
       };
    };
    return soma;
 } 

module.exports = { funcaoSoma }