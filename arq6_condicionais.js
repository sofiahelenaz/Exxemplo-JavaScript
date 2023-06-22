//Estruturas condicionais

const idade = 17
const senhaCorreta= '138ManhaFic'
const senhaDigitada= '138ManhaFic'

const numero = 5
const numeroTexto = '5'

const nota = 40

//=se(teste lógico ; valor se VERDADEIRO ; valor se FALSO)

/* if(teste lógico){
    valor se VERDADEIRO
}else{
    valor se FALSO
} */

if(idade >= 18){
    console.log('é MAIOR de idade')
}else{
    console.log('é MENOR de idade')
}
//Verifica se um valor é igual ao outro
if(senhaCorreta == senhaDigitada){
    console.log('Permistir acesso')
}else{
    console.log('NÃO permitir acesso')
}

//Verifica se um valor é exatamente (valor e tipo ) igual ao outro (===)
if(numero == numeroTexto){
    console.log('Os valores são exatamente iguais')
}else{
    console.log('Os valores NÃO são exatamente iguais')
}

if(nota >= 50){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}