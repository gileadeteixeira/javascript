let xhr = new XMLHttpRequest();

/* GET
    let documento;

    xhr.responseType = "json";

    xhr.onreadystatechange = ()=>{
        //Quando a solicitação for concluída e a resposta estiver pronta
        if (xhr.readyState == 4 && xhr.status == 200) {
            //alert("deu certo!");
            documento = xhr.response;
            console.log(documento);
        }
        else{
            //alert("deu erro!");
        }
    };

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

    xhr.send();
*/

/* POST
    let documento = {
        "userId": 1,
        "id": 101,
        "title": "alguma coisa",
        "body": "bolo de morango, hmmm"
    }

    xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4){
            console.log(xhr);
        }
    };
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    //status 201 representa criado
    xhr.send(documento);
*/

/* DELETE
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState == 4) {
            console.log(xhr);
        }
    }
    xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.send();
*/
