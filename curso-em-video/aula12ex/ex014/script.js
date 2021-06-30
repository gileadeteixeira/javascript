carregar = () => {
    var msg = document.querySelector('div#msg');
    var foto = document.querySelector('img#foto');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 5;
    msg.innerHTML = hora != 1 ? `Agora são ${hora} horas.` : `Agora é ${hora} hora.`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        foto.src = 'fotomanha.png';
        document.body.style.background = '#ebb881';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        foto.src = 'fototarde.png';
        document.body.style.background = '#e9875a';
    } else {
        //BOA NOITE
        foto.src = 'fotonoite.png';
        document.body.style.background = '#3a4244';
    }
}
