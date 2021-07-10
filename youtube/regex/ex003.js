const {texto, arquivos} = require('./base.js');
/*
    * (opcional) - 0 ou n vezes  {0,}
    + (obrigatório) - 1 ou n vezes  {1,}
    ? (opcional) - 0 ou 1 vez  {0,1}
    \ Caractere de escape
    {n, m} minimo e maximo
    {10,} no minimo 10
    {,10} de 0 a 10
    {5,10} de 5 a 10
    {1} uma vez
    {10} dez vezes

    
    console.log(texto);
    const regExp1 = /Jo+ão+/gi;
    console.log(texto.match(regExp1));
*/
const regExp2 = /\.(jpe?g)/gi;

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp2);
    if (!valido) continue
    console.log(arquivo, valido);
}