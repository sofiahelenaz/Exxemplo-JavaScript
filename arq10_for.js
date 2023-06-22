//estrutura de|Laço com for

const listaDeDestinos = new Array(
    'São Paulo',
    'Paraná',
    'Rio De Janeiro',
    'Espirito Santo',
    'Santa Catarina',
    'Bahia',
    'Pernambuco'
)

const destinoDesejado = 'Pernambuco'
const idade = 18

let destinoEncontrado = ''

for(indice = 0; indice < listaDeDestinos.length; indice++){
    
    if(listaDeDestinos[indice] == destinoDesejado){
        desatinoEncontrado = true
        break
    }else{
        destinoEncontrado = false
    }
}

if(idade >= 18 && destinoDesejado){
    console.log('Viagem autorizada')
}else{
    console.log('Viagem NÃO autorizada')
}


const valor = 4

for(let multiplo = 1; multiplo <= 10; multiplo ++){
    console.log(valor * multiplo)
}
