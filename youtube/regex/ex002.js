const {texto} = require('./base.js');
const regExp1 = /(João|Maria)/gi;

// console.log(texto);
// console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|Maria)/gi, '"$1"'));
console.log(texto.replace(regExp1, function(input){
    return input.toUpperCase();
}));