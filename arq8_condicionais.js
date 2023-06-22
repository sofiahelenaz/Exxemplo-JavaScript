//Estruturas condicionais com operador lógico ou (||)

/*Para que a pessoa possa viajar sozinha ela deve
=> ter a idade maior ou igual a 18
ou
=> Estar acompanhado dp responsável */

const idade = 18
const acompanhadoDoResponsavel = false
const temCNH = false

if(idade >= 18 || acompanhadoDoResponsavel){
    console.log('Autorizado a viajar')
}else{
    console.log('NÃO está autorizaado a viajar')
}

/*Para que a pessoa possa dirigir ela deve
=> ter a idade maior ou igual a 18
e
=> ter CNH */

if(idade >= 18 && temCNH){
    console.log('Pode dirigir')
}else{
    console.log('NÃO pode dirigir')
}