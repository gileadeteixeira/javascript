let valores = [8,1,7,4,2,9];
console.log(valores);
/*
for (let index = 0; index < valores.length; index++) {
    console.log(`A posição ${index} tem o valor ${valores[index]}`);
}
*/
for(let index in valores){
    console.log(`A posição ${index} tem o valor ${valores[index]}`);
}