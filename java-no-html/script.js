

function exercicio2(){
    
    const n1 = Number(document.querySelector('#numero1').value)
    const n2 = Number(document.querySelector('#numero2').value)
    const n3 = Number(document.querySelector('#numero3').value)
    
    let resultado = document.querySelector('.resultado')

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


    const AreaRet = (num1,num2) => num1 * num2
        
    /*função normal

    function  AreaRet(num1, num2) {
        const resultado = num1 * num2

        return resultado;

    }*/

    resultado.innerHTML = `
    Triângulo: ${AreaTri(n1,n3).toFixed(3)} <br>
    Círculo: ${AreaCirc(n3).toFixed(3)} <br>
    Trapézio: ${AreaTrap(n1,n2,n3).toFixed(3)} <br>
    Quadrado: ${AreaQuad(n2).toFixed(3)} <br>
    Retângulo: ${AreaRet(n1,n2).toFixed(3)} <br>
    `
        
}
