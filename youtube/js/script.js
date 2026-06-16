alert( 'Javascript puxado de fora do HTML' );

//VARIAVEIS
let nome= "João";
const pi = 3.14059;

//TIPOS DE DADOS
//STRING (TEXTO)
let nome = "João";
//integer (nuumero inteiro)
let idade = 30;
//BOOLEAN (VERDADEIRO OU FALSO
let ativo = true;
//ARRAY (MATRIZ OU LISTA POR INDICE)
let frutas = ["maçã", "banana", "laranja"];
//OBJECT (OBJETO COM PROPRIEDADES)  
let pessoa = { nome: "João", idade: 30 };

//FUNÇÕES
function saudacao(Maria) {
   return "Olá, " + nome;
}

alert(saudacao("Maria"));

function soma(a, b) {
    return a + b;
}

alert(soma(5, 10));

function trocarCor(cor) {
    document.body.style.backgroundColor = cor;}