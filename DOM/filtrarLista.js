const linhasFiltro = document.querySelectorAll('.filtra-linha')
const inputfiltro = document.querySelector('#input-filtra')

console.log(linhasFiltro, inputfiltro)

function filtrar (event){
    
    const textoInput = inputfiltro.value.toUpperCase()

    for(let index = 0; index < linhasFiltro.length; index++){

        const linhaAtual = linhasFiltro[index]
        const conteudoLinhaAtual = linhaAtual.textContent
        //const conteudoLinhaAtual = linhasFiltro[index].textContent

        if(conteudoLinhaAtual.toUpperCase().includes(textoInput)){
            linhaAtual.style.display = ""
        }else{
            linhaAtual.style.display = "none"
        }
    }
}
inputfiltro.addEventListener('keyup', FileSystemDirectoryHandle)
