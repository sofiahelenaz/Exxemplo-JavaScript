//Estruturas condicionais com operador lógico E (&&)

const nota = 70
const faltas = 2
const quantidadedeAulasCurso = 10

/*Para que o aluno seja APROVADO a nota deve ser maior ou igual que 50 e as faltas menores ou igual a 25% do total de aulas*/


//Sem o operador E

if(nota >=50){
    if(faltas <=0.25 * quantidadedeAulasCurso){
      console.log('APROVADO')
    }else{
        console.log('REPROVADO por faltas')
    }
}else{
    console.log('REPROVADO por Notas')
}

//Com o operador E (&&)
if(nota >= 50 && faltas <= 0.25 * quantidadedeAulasCurso){
    console.log('Você está APROVADO')
}else{
    console.log('Você está REPROVADO')
}