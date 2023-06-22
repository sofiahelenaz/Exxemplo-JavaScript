//A função deve receber uma nota e retornar:
// => Aprovado SE a nota for maior ou igual a 70
// => Recuperação SE a nota for maior ou igual a 50
// => Reprovado SE a nota for menor que 50

 const nomeAluno = "Marivaldo"
const notaAluno = 70

function avaliaNota(nota, nome) {
    if (nota >= 70) {
        return `${nome} está APROVADO!`
    } if (nota >= 50) {
        return `${nome} está de RECUPERAÇÃO`
    } else {
        return `${nome} está REPROVADO!`
    }
} 

//console.log(avaliaNota(notaAluno, nomeAluno))

//A função deve receber um Array de nomes e um nome específico e
//verificar se este nome consta no Array 

const listaNomes = new Array(
    "João",
    "Maria",
    "Carlos",
    "Carla",
    "Ricardo"
)
const nomeProcurado = "Marivaldo"
let encontrouNome = ''

function procuraNome (nomes, nome){

    /*for(contador; critério; acrescentar){
        if(){}...
    }*/

    for(let i = 0; i < nomes.length; i++){
        if(nomes[i] == nome){
            encontrouNome = true
            break
        }else{
            encontrouNome = false
        }
    }
    if(encontrouNome == true){
    console.log(`${nome} foi encontrado`)
    }else{
        console.log(`${nome} NÃO foi encontrado`)
    }
}

procuraNome(listaNomes, nomeProcurado)