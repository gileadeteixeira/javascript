let txtNome = document.querySelector('#txtNome');
let txtJob = document.querySelector('#txtJob');
let form = document.querySelector('#form');
let url = "https://reqres.in";

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (txtNome.value != "" && txtJob.value != "") {
        let dados = {
            name: txtNome.value,
            job: txtJob.value
        };
        
        fetch(`${url}/api/users`,{
            method: "POST",
            body: JSON.stringify(dados)
        })
        .then((response)=>{
            //console.log(response);
            return response.json();
        })
        .then((response)=>{
            //console.log(response);
            alert("cadastro feito com sucesso!")
        
        });
        
    } else {
        alert('Preencha os campos!');
    }
});


