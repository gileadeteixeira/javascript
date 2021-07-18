let frutas = `{
    "fruta": "banana",
    "preço": 15.50,
    "tipo":[
        "prata",
        "maçã",
        "nanica",
        "da terra",
        "ouro"
    ],
    "origem": "Brasil",
    "caractere": "\u2020"
}`;
console.log(frutas);
console.log(JSON.parse(frutas).caractere);