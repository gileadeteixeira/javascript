/*
function parImpar(numero){
    if(numero % 2 == 0){
        return `O número ${numero} é par`;
    }
    else{
        return `O número ${numero} é impar`;
    }
}
*/

const parImpar = (numero) => {
    return numero % 2 == 0 ? `O número ${numero} é par`: `O número ${numero} é impar`;
}

console.log(parImpar(11));