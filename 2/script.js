const resposta = document.getElementById('p')
// exercício 1

function exerc1() {

    let n1 = Number(prompt('insira a nota do 1° Bimestre'))
    let n2 = Number(prompt('insira a nota do 2° Bimestre'))
    let n3 = Number(prompt('insira a nota do 3° Bimestre'))
    let n4 = Number(prompt('insira a nota do 4° Bimestre'))

    const resultado = (n1 + n2 + n3 + n4)/4

    resposta.innerHTML = `Nota final = ${resultado.toFixed(1)} <br>`

    if(resultado <= 5 ){
        resposta.innerHTML += `Reprovado`
    }
}

// exercício 2

function exerc2() {

    let n1 = Number(prompt("insira a quantidade de minutos que você usou"))

    let resultado = 0

    if(n1 <= 100){
        resultado = 50
    }
    else{
        resultado = ((n1 - 100) * 2) + 50
    }

    

    resposta.innerHTML = `Valor a pagar: R$ ${resultado.toFixed(2)}`
}

// exercício 3

function exerc3() {

    let n1 = Number(prompt("insira o preço único do produto"))
    let n2 = Number(prompt("insira a quantidade comprada pelo cliente"))
    let n3 = Number(prompt("insira o valor dado pelo cliente"))

    const resultado = (n1 * n2)
    let troco = 3

    if(n3 >= resultado){
        troco = n3 - resultado
        resposta.innerHTML = `Troco =  R$ ${troco.toFixed(2)}`
    }
    else{
        troco = n3 - resultado
        resposta.innerHTML = `Dinheiro insuficiente. <br>Faltam R$ ${troco.toFixed(2)*-1}`
    }

    
}

// exercício 4

function exerc4() {

    let glicose = Number(prompt("Digite a medida da glicose"))

    if (glicose <= 100){
        resposta.innerHTML = "Classificação: Normal"
    }
    else if (glicose > 100 && glicose <= 140){
        resposta.innerHTML = "Classificação: Elevado"
    }else if (glicose > 140){
        resposta.innerHTML = "Classificação: Diabetes"
    }
}

// exercício 5

function exerc5() {
    
    let menor = 9999999999999999999999999999999999999999999


    for(let i = 1; i <= 3; i++){
        let entrada = Number(prompt(`insira o ${i}° valor inteiro`))
        if(entrada < menor){
            menor = entrada
        }
    }

    resposta.innerHTML = `Menor = ${menor}`
}


// exercício 6

function exerc6() {

    let cod = Number(prompt('Insira o codigo do produto'))
    let preco = 0

    switch(cod){
        case 1:
            preco = 5
        break;
        case 2:
            preco = 3.50
        break;
        case 3:
            preco = 4.80
        break;
        case 4:
            preco = 8.90
        break;
        case 5:
            preco = 7.32
        break;
        default:
            alert('Entrada inválida, tente de novo')
        break;
    }
    let quant = 0
    if(cod >= 1 && cod <= 5){
        quant = Number(prompt("insira a quantidade comprada"))
    }

    const resultado = quant * preco

    resposta.innerHTML = `Valor a pagar R$ ${resultado.toFixed(2)}`
}
