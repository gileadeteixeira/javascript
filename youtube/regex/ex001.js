/*
    g - global (encontra todas as ocorrencias)
    i - insensitive (não checa letras maiúsculas)
    () - grupo
    | - ou
*/
const {texto} = require('./base.js');
const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);
if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);    
}