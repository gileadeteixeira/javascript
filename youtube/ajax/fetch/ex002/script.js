const cep = document.querySelector('#cep');
// viacep.com.br/ws/01001000/json/

const loadDados = (dados)=>{
    for (const campo in dados) {
        if (document.querySelector(`#${campo}`)) {
            const element = document.querySelector(`#${campo}`);
            element.value = dados[campo];
        }
    }
}

cep.addEventListener('change', ()=>{
    let numero = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`http://viacep.com.br/ws/${numero}/json/`, options)
    .then((response)=>{
        if(!response.ok) throw new Error (`ERRO! Status: ${response.status}`);
        response.json()
        .then((dados) => loadDados(dados));
    })
    .catch((error)=>{
        console.error(error);
    })
})