const linhas = document.querySelectorAll('.linhaUl')
console.log(linhas)

function apagarLinha(event){

    const linhaClicada = event.target

    linhaClicada.remove()
}

for(let index = 0; index < linhas.length; index++){

    linhas[index].addEventListener('click', apagarLinha)
}