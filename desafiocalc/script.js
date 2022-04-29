function calcular(){
    var num1 = document.getElementById('n1')
    var num2 = document.getElementById('n2')
    var ope = document.getElementById('op')
    var res = document.getElementById('res')

    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var op = Number(ope.value)

    switch (op) {
        case 1:
            res.innerHTML = `${n1} + ${n2} = ${n1 +n2}`
            break;
        
        case 2:
            res.innerHTML = `${n1} - ${n2} = ${n1-n2}`
            break;

        case 3:
            res.innerHTML = `${n1} * ${n2} = ${n1*n2}`
            break;
        
        case 4:
            res.innerHTML = `${n1} / ${n2} = ${n1/n2}`
            break;
    
        default:
            res.innerHTML = `[ERRO] Digite um valor entre 1 a 4 para selecionar uma operação!`
            break;
    }
}