// Encontra todas as palavras
const regexPalavras = /([\wÁ-ú])/g;

// Não números
const regexNaoNumeros = /\D/;

// Valida IP
const regexIP = /(?:\d{1,3}\.){3}\d{1,3}/g;

// Valida CPF
const regexCPF = /(?:\d{3}\.){2}\d{3}\-\d{2}/g;

// Valida Telefone
const regexTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Valida senhas fortes
const regexSenhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,}$/g

// Validar e-mails
    // Permisiva -> /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm