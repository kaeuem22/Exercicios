// Exercício 1

function exercicio1(){
    
    let n1 = Number(prompt('Digite a nota do 1° Bimestre'))
    let n2 = Number(prompt('Digite a nota do 2° Bimestre'))
    let n3 = Number(prompt('Digite a nota do 3° Bimestre'))
    let n4 = Number(prompt('Digite a nota do 4° Bimestre'))

    const conta = (num1,num2,num3,num4) => (num1 + num2 + num3 + num4)/4;

    /*função normal

    function conta(num1,num2,num3,num4){
        const resultado = (num1 + num2 + num3 + num4)/4

        return resultado;
    }*/
        
    alert(`Média das notas: ${conta(n1,n2,n3,n4).toFixed(1)}`);
        
}



// Exercício 2

function exercicio2(){
    
    let n1 = Number(prompt('Digite o 1° valor decimal'))
    let n2 = Number(prompt('Digite o 2° valor decimal'))
    let n3 = Number(prompt('Digite o 3° valor decimal'))

    const AreaTri = (num1,num3) => (num1*num3)/2

    /*função normal

    function AreaTri(num1,num3){
        const resultado = (num1*num3)/2

        return resultado;
    }*/

    const AreaCirc = (num3) => 3.14159 * (num3**2)

    /*função normal

    function  AreaCirc(num3) { 
        const resultado = 3.14159 * (num3**2)

        return resultado;

    }*/

    const AreaTrap = (num1,num2,num3) => ((num1 + num2 )*num3)/2

    /*função normal

    function  AreaTrap(num1,num2,num3){
        const resultado = ((num1 + num2 )*num3)/2

        return resultado;

    }*/
    

    const AreaQuad = (num2) => num2**2

    /*função normal

    function  AreaQuad(num2) {
        const resultado = num2**2

        return resultado;

    }*/


    const AreaRet = (num1, num2) => num1 * num2
        
    /*função normal

    function  AreaRet(num1, num2) {
        const resultado = num1 * num2

        return resultado;

    }*/

    alert(`
    Áera do Triângulo: ${AreaTri(n1,n3).toFixed(3)}
    Áera do Círculo: ${AreaCirc(n3).toFixed(3)}
    Áera do Trapézio: ${AreaTrap(n1,n2,n3).toFixed(3)}
    Áera do Quadrado: ${AreaQuad(n2).toFixed(3)}
    Áera do Retângulo: ${AreaRet(n1,n2).toFixed(3)}
    `);
        
}


// Exercício 3

function exercicio3(){
    
    let n1 = Number(prompt('Digite o 1° número'))
    let n2 = Number(prompt('Digite o 2° número'))

    const soma = (num1,num2) => num1 + num2

     /*função normal

    function  soma(num1,num2) {
        const resultado = num1 + num2

        return resultado;

    }*/


    const multiplicacao = (num1,num2) => num1 * num2

    /*função normal

    function  multiplicacao = (num1,num2) {
        const resultado = num1 * num2

        return resultado;

    }*/


    const subtracao = (num1,num2) => num1 - num2

    /*função normal

    function  subtracao = (num1,num2) {
        const resultado = num1 - num2

        return resultado;

    }*/


    const divisao = (num1,num2) => num1 / num2

    /*função normal

    function  divisao(num1,num2) {
        const resultado = num1 / num2

        return resultado;

    }*/
        
    alert(`
    Soma = ${soma(n1,n2)}
    Subtração = ${subtracao(n1,n2)}
    Multiplicação: ${multiplicacao(n1,n2)}
    Divisão: ${divisao(n1,n2)}
    `);
        
}
