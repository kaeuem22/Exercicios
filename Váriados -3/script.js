// exercício 1

function exerc1() {

    let n1 = Number(prompt("insira o primeiro valor para a soma"))
    let n2 = Number(prompt("insira o segundo valor para a soma"))

    const soma = n1 + n2

    alert(`O resultado da soma é ${soma}`)
}

// exercício 2

function exerc2() {

    let n1 = Number(prompt("insira o primeiro valor para o produto"))
    let n2 = Number(prompt("insira o segundo valor para o produto"))

    const produto = n1 * n2

    alert(`O resultado do produto é ${produto}`)
}

// exercício 3

function exerc3() {

    let n1 = Number(prompt("insira um primeiro valor entre 0 e 10"))
    let n2 = Number(prompt("insira um segundo valor entre 0 e 10"))


    const resultado = ((n1 * 3.5) + (n2 * 7.5)) / (3.5 + 7.5)

    alert(`A média ponderada é ${resultado.toFixed(5)}`)
}

// exercício 4

function exerc4() {

    let n1 = Number(prompt("insira um 1° valor entre 0 e 10"))
    let n2 = Number(prompt("insira um 2° valor entre 0 e 10"))
    let n3 = Number(prompt("insira um 3° valor entre 0 e 10"))


    const resultado = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / (2 + 3 + 5)

    alert(`A média ponderada é ${resultado.toFixed(1)}`)
}

// exercício 5

function exerc5() {

    let nome = prompt("insira um nome")

    let n2 = Number(prompt("insira a quantidade de horas trabalhadas no mês"))

    let n3 = Number(prompt("insira o valor pago por hora (sem o símbolo 'R$')"))


    const resultado = n2 * n3

    alert(`Olá ${nome}. Seu salário desse mês com base nas horas trabalhadas é  R$ ${resultado.toFixed(2)}`)
}


// exercício 6

function exerc6() {

    let nome = prompt("insira um nome")

    let n2 = Number(prompt("insira um salário mensal (sem o símbolo 'R$')"))

    let n3 = Number(prompt("insira a quantidade de vendas feitas nesse mês em dinheiro (sem o símbolo 'R$')"))


    const bonus = (n3 * 0.15)

    const resultado = bonus + n2

    alert(`Funcionário ${nome}, Seu bônus deste mês pelas vendas efetuadas é de R$ ${bonus.toFixed(2)}. O salário total a ser recebido é de R$ ${resultado.toFixed(2)}`)
}

// exercício 7

function exerc7() {

    let n1 = Number(prompt("insira o 1° valor decimal"))

    let n2 = Number(prompt("insira o 2° valor decimal"))

    let n3 = Number(prompt("insira o 3° valor decimal"))


    const areaT = (n1*n3)/2

    const areaC = 3.14159 * (n3**2)

    const areaTrap = ((n1+n2)*n3)/2

    const areaQ = n2**2

    const areaRet = n1*n2

    alert(`
    Área do Triângulo: ${areaT.toFixed(3)}
    
    Área do Círculo: ${areaC.toFixed(3)}
    
    Área do Trapézio: ${areaTrap.toFixed(3)}
    
    Área do Quadrado: ${areaQ.toFixed(3)}
    
    Área do Retângulo: ${areaRet.toFixed(3)}`)
}

// exercício 8

function exerc8() {

    let n1 = Number(prompt("insira a distância total percorrida em Km"))

    let n2 = Number(prompt("insira o tatal de combustivel gasto em Litros"))


    const resultado = n1 / n2

    alert(`${resultado.toFixed(3)} Km/L`)
}