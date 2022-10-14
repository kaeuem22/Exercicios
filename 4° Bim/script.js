// Exercício 1

function exercicio1(){
    
    let n1 = Number(prompt('Digite a nota do 1° Bimestre'))
    let n2 = Number(prompt('Digite a nota do 2° Bimestre'))
    let n3 = Number(prompt('Digite a nota do 3° Bimestre'))
    let n4 = Number(prompt('Digite a nota do 4° Bimestre'))

    const conta = (num1,num2,num3,num4) => (num1 + num2 + num3 + num4)/4;
        
    alert(`Média das notas: ${conta(n1,n2,n3,n4).toFixed(1)}`);
        
}


// Exercício 2

function exercicio2(){
    
    let n1 = Number(prompt('Digite o 1° valor decimal'))
    let n2 = Number(prompt('Digite o 2° valor decimal'))
    let n3 = Number(prompt('Digite o 3° valor decimal'))

    const AreaTri = (num1,num3) => (num1*num3)/2

    const AreaCirc = (num3) => 3.14159 * (num3**2)

    const AreaTrap = (num1,num2,num3) => ((num1 + num2 )*num3)/2

    const AreaQuad = (num2) => num2**2

    const AreaRet = (num1, num2) => num1 * num2
        
    alert(`
    Triângulo: ${AreaTri(n1,n3).toFixed(3)}
    Círculo: ${AreaCirc(n3).toFixed(3)}
    Trapézio: ${AreaTrap(n1,n2,n3).toFixed(3)}
    Quadrado: ${AreaQuad(n2).toFixed(3)}
    Retângulo: ${AreaRet(n1,n2).toFixed(3)}
    `);
        
}


// Exercício 2

function exercicio2(){
    
    let n1 = Number(prompt('Digite o 1° valor decimal'))
    let n2 = Number(prompt('Digite o 2° valor decimal'))
    let n3 = Number(prompt('Digite o 3° valor decimal'))

    const AreaTri = (num1,num3) => (num1*num3)/2

    const AreaCirc = (num3) => 3.14159 * (num3**2)

    const AreaTrap = (num1,num2,num3) => ((num1 + num2 )*num3)/2

    const AreaQuad = (num2) => num2**2

    const AreaRet = (num1, num2) => num1 * num2
        
    alert(`
    Triângulo: ${AreaTri(n1,n3).toFixed(3)}
    Círculo: ${AreaCirc(n3).toFixed(3)}
    Trapézio: ${AreaTrap(n1,n2,n3).toFixed(3)}
    Quadrado: ${AreaQuad(n2).toFixed(3)}
    Retângulo: ${AreaRet(n1,n2).toFixed(3)}
    `);
        
}


// Exercício 3

function exercicio3(){
    
    let n1 = Number(prompt('Digite o 1° valor decimal'))
    let n2 = Number(prompt('Digite o 2° valor decimal'))

    const soma = (num1,num2) => num1 + num2

    const multiplicacao = (num1,num2) => num1 * num2

    const subtracao = (num1,num2) => num1 - num2

    const divisao = (num1,num2) => num1 / num2
        
    alert(`
    Soma = ${soma(n1,n2)}
    Subtração = ${subtracao(n1,n2)}
    Multiplicação: ${multiplicacao(n1,n2)}
    Dicisão: ${divisao(n1,n2)}
    `);
        
}