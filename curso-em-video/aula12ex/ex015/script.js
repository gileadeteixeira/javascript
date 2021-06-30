let data = new Date();
let anoMaximo = data.getUTCFullYear();
let txtAno = document.querySelector('input#txtAno');
txtAno.max = anoMaximo.toString();

verificar = () => {
    var resultado  = document.querySelector('div#resultado');
    var sexo = document.getElementsByName('radSex');
    if (!sexo[0].checked && !sexo[1].checked) {
        alert('[ERRO] Escolha um sexo!');
    } else if (txtAno.value.length == 0) {
        alert('[ERRO] Você não informou um ano!');
    } else if (txtAno.value.length != 4) {
        alert('[ERRO] O ano precisa ter quatro números!');
    } else if (txtAno.value < txtAno.min) {
        alert(`[ERRO] Ano Inválido! Selecione um ano entre 1900 e ${anoMaximo}!`);        
    } else {        
        var idade = anoMaximo - Number(txtAno.value);
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 10) {
                //Criança
                imagem.setAttribute('src', 'homem-crianca.png');
            } else if (idade < 30) {
                //Jovem
                imagem.setAttribute('src', 'homem-jovem.png');
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src', 'homem-adulto.png');
            } else {
                //Idoso
                imagem.setAttribute('src', 'homem-idoso.png');
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                //Criança
                imagem.setAttribute('src', 'mulher-crianca.png');
            } else if (idade < 30) {
                //Jovem
                imagem.setAttribute('src', 'mulher-jovem.png');
            } else if (idade < 50) {
                //Adulta
                imagem.setAttribute('src', 'mulher-adulta.png');
            } else {
                //Idosa
                imagem.setAttribute('src', 'mulher-idosa.png');
            }
        }
        resultado.innerHTML = `Resultado: ${genero} de ${idade} anos.`
        resultado.appendChild(imagem);
    }
}