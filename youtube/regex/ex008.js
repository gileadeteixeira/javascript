const {html2} = require('./base.js');
/*
    $1  $2  $3 - Retrovisores   \1
*/
//console.log(html2);
// console.log(html2.match(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2+>)/g));
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2+>)/g, '$1"KKK $3"$4'));