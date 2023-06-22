const retangulo = document.querySelector('.retangulo')
const botao = document.querySelector('.btn')



function mudaClasse (){
    retangulo.classList.toggle('muda-cor')
}

botao.addEventListener('click', mudaClasse)