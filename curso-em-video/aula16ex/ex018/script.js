const btnAdicionar = document.querySelector('input#btnAdicionar');
const btnFinalizar = document.querySelector('input#btnFinalizar');
const btnLimpar = document.querySelector('input#btnLimpar');
const btnOrdenar = document.querySelector('input#btnOrdenar');
const txtNumero = document.querySelector('input#txtNumero');
const lista = document.querySelector('select#lista');
const areaResultado = document.querySelector('div#areaResultado');
const array = [];

btnAdicionar.onclick = ()=>{
    let numero = Number(txtNumero.value);

    if (txtNumero.value.length == 0) {
        //Não digitou nada
        alert('[ERRO] Digite um número!');

    } else if(numero<1 || numero>100) {
        //Colocou um numero fora dos limites (entre 1 e 100)
        alert('[ERRO] Número Inválido!');
        
    } else if(array.indexOf(numero) != -1){
        //Digitou o mesmo numero
        alert('[ERRO] Este número já foi inserido!');

    } else {
        areaResultado.innerHTML = '';
        array.push(numero);
        let option = document.createElement('option');
        //option.value = `option${numero}`;
        option.text = `O número ${numero} foi inserido.`;
        lista.appendChild(option);
    }
    txtNumero.value = '';
    txtNumero.focus();
}

btnFinalizar.onclick = ()=>{
    if (array.length > 0) {
        let numerosCadastrados = array.length;
        let maiorValor = array[0];
        let menorValor = array[0];
    
        for (let index in array) {
            if (array[index] >= maiorValor) {
                //Se o numero atual for maior que o maior
                maiorValor = array[index];
            }
            if (array[index] <= menorValor) {
                //Se o numero atual for menor que o menor
                menorValor = array[index];
            }
        }
    
        let soma = array.reduce((prev, current) =>{
            //Começa de 0 e vai somando todos (anterior + atual)
            return prev+current;
        }, 0);
    
        let media = soma/numerosCadastrados;
    
        areaResultado.innerHTML = `
            <p>Ao todo temos ${numerosCadastrados} números cadastrados.</p>
            <p>O maior valor informado foi ${maiorValor}.</p>
            <p>O menor valor informado foi ${menorValor}.</p>
            <p>Somando todos os valores temos ${soma}.</p>
            <p>A média dos valores digitados é ${media.toFixed(2)}.</p>
        `;
    } else {
        //Não digitou nada
        alert('[ERRO] Adicione um número!');
    }
}

btnLimpar.onclick = ()=>{
    if (array.length > 0 ) {
        //Limpar dados
        txtNumero.value = '';//Limpa o input
        lista.innerHTML = '';
        array.length = 0;
        areaResultado.innerHTML = '';        
    } else {
        alert('[ERRO] Os campos já estão vazios!')
    }
}

btnOrdenar.onclick = ()=>{
    //Deixar em ordem crescente
    if (array.length > 0 ) {
        lista.innerHTML = '';
        array.sort((a, b) => a - b);
        for (let index in array) {
            let option = document.createElement('option');
            option.text = `O número ${array[index]} foi inserido.`;
            lista.appendChild(option);
        }
    } else {
        alert('[ERRO] Adicione um número!');
    }
}