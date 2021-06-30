//RECURSIVIDADE (uma função chama ela mesma)
function fatorial(numero){
    if (numero != 1) {
        return numero * fatorial(numero-1);
        
    } else {
        return 1;
    }
}
console.log(fatorial(5));

/*
5! = 5x4x3x2x1
5! = 5x4!
n! = n x (n-1)!
1! = 1
*/