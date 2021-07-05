(meuNome = function(nome='Gileade'){
    console.log(`meu nome é ${nome}`);
})();

var n = 2;
(function(){
    var n = 3;
    console.log(n);
})();
console.log(n);

let x = 2;
{
    let x = 3;
    console.log(x);
};
console.log(x);