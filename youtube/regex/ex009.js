const {lookahead} = require('./base.js');
console.log(lookahead);
//console.log(lookahead.match(/.+[^in]active$/gm));



// Positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gm));

// Positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=inactive)/gm));

// Negative lookahead (frases que não tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gm));

// Negative lookahead (frases que não tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gm));



// Positive lookabehind (frases que começam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+).*/gm));

// Negative lookabehind (frases que não começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gm));

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))