import operacaoSoma, {subtrair, multiplicar, dividir as d} from './modulos/operacoes.js';
import {default as SOMA} from './modulos/operacoes.js';
import * as TUDO from './modulos/operacoes.js';
export {default as SOMAR} from './modulos/operacoes.js';

/*
import somar, {multiplicar, dividir} from './modulos/operacoes.js';

onde:
    - somar pode ser qualquer nome. O sistema entende que é referencia à função "somar" do arquivo chamado, pois o mesmo foi exportado como default;
    - export sem default, o nome deve ser igual, e entre {}. Por isso o "multiplicar" está entre {};
    - para renomear um export sem default, use nomeOriginal as e ponha um novo nome. dividir as divisao.
*/

const teste = TUDO.default(10, 10);
console.log(teste);

const novaSoma = SOMA(3, 4);
console.log(novaSoma);

const soma = operacaoSoma(1, 2);
console.log(soma);

const subtracao = subtrair(9, 4);
console.log(subtracao);

const multiplicacao = multiplicar(10, 20);
console.log(multiplicacao);

const divisao = d(10, 5);
console.log(divisao);
