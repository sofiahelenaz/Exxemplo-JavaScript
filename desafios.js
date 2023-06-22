/*Cálculo de IMC;
    - Crie um código que calcula e retorna o valor IMC (ìndice de Massa Corporal)
    - Fórmula
    => IMC = peso / (altura * altura)*/

    const meuPeso = 70
    const minhaAltura = 1.70

function calculaIMC(peso, altura){
    const IMC = peso / (altura * altura)
    if(IMC < 18.5){
    return "Baixo peso"
    }if(IMC < 25){
    return"Normal"
    }if (IMC < 30){
        return "Sobre peso"
    }else{
        return "Obeso"
    }
}

console.log(calculaIMC(meuPeso, minhaAltura))

const n1 = 10
const n2 = 8

function comparaNumeros(Valor1, valor2){

    if (valor1 > valor2){
        return `${Valor1} é maior que ${valor2}`
    if (valor1 > valor2){
        return `${Valor1} é MENOR que ${valor2}`
    }else{
        return`$ {Valor1}`
    }
    }
}