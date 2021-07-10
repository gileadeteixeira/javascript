const {cpfs,ips} = require('./base.js');
/*
    CPF
    minimo: 000.000.000-00
    máximo: 999.999.999-99

    IP
    minimo: 0.0.0.0
    maximo: 255.255.255.255
*/
//const regexCPF = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
const regexCPF = /(\d{3}\.){2}\d{3}\-\d{2}/g;

const regexIP = /([0-9]{1,3}\.){3}[0-9]{1,3}/g;

/*
    for (let i = 0; i<=300; i++){
        const ip = `${i}.${i}.${i}.${i}`
        console.log(ip, ip.match(regexIP));
    }
*/

console.log(cpfs.match(regexCPF));
console.log(ips.match(regexIP));