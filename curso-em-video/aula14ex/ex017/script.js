const btnGerar = document.querySelector('input#btnGerar');

btnGerar.onclick = () => {
    let txtNumero = document.querySelector('input#txtNumero');
    let txtLista = document.querySelector('select#txtLista');

    if (txtNumero.value.length != 0) {
        let numero = Number(txtNumero.value);
        txtLista.innerHTML = '';

        for(let n = 0; n<=10; n++){
            let txtOption = document.createElement('option');
            txtOption.text = `${numero} x ${n} = ${numero*n}`;
            txtOption.value = `option${n}`;
            txtLista.appendChild(txtOption);
        }

    } else {
        alert('[ERRO] Digite um número!');
    }
}