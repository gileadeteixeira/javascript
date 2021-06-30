const btnContar = document.querySelector('input#btnContar');
btnContar.onclick = () => {
    let txtInicio = document.querySelector('input#txtInicio');
    let txtFim = document.querySelector('input#txtFim');
    let txtPasso = document.querySelector('input#txtPasso');
    let resultado = document.querySelector('p#txtResultado');

    if (txtInicio.value.length != 0 && txtFim.value.length != 0 ) {
        let inicio = Number(txtInicio.value);
        let fim = Number(txtFim.value);
        let passo = Number(txtPasso.value);

        if (txtPasso.value.length == 0) {
            //Não-Informado
            alert('[Passo não-informado!] Considerando PASSO 1.');
            passo = 1;
        } else if (passo == 0){
            //Inválido: não dá pra pular de 0 em 0.
            alert('[Passo Inválido!] Considerando PASSO 1.');
            passo = 1;
        }

        resultado.innerHTML = '';
        if (inicio < fim) {
            //Contagem Crescente
            for (let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} &#x1F449 `;
            }            
        } else {
            //Contagem Regressiva
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} &#x1F449 `;
            }
        }
        resultado.innerHTML += '&#x1F3C1';
    } else {
        alert('[ERRO] Faltam dados!');
        resultado.innerHTML = 'Impossível contar!';
    }
}