//declarção de variaveis globais
var vit = 0
var empate = 0
var derrota = 0

function zerar() {
    window.vit = 0
    window.derrota = 0
    window.empate = 0
    placar.innerHTML = `Vitória: ${window.vit} <br>Derrota: ${window.derrota}<br>Empate: ${window.empate}`
}

function jogar(){
    var ope = document.getElementById('op')
    var res = document.getElementById('res')
    var placar = document.getElementById('placar')

    var op = Number(ope.value)

    var num = [1, 2, 3]
    var maq = Math.floor(Math.random() * num.length)

    
    if (op == 4) {
        placar.innerHTML = `Placar final!<br>`
        placar.innerHTML += `Vitória: ${window.vit} <br>Derrota: ${window.derrota}<br>Empate: ${window.empate}`
        return res.innerHTML = `Obrigado por jogar!`
        
    } else{
        do {
            //Pedra
            if (op == 1 && num[maq] == 1) {
                res.innerHTML = `Você jogou Pedra e Maquina jogou Pedra, portanto deu EMPATE!`
                window.empate++
            }
            else if (op == 1 && num[maq] == 2) {
                res.innerHTML = `Você jogou Pedra e Maquina jogou Papel, portanto você PERDEU!`
                window.derrota++
            }
            else if (op == 1 && num[maq] == 3) {
                res.innerHTML = `Você jogou Pedra e Maquina jogou Tesoura, portanto você GANHOU!`
                window.vit++    
            }

            //Papel
            else if (op == 2 && num[maq] == 1) {
                res.innerHTML = `Você jogou Papel e Maquina jogou pedra, portanto você GANHOU!`
                window.vit++
            }
            else if (op == 2 && num[maq] == 2) {
                res.innerHTML = `Você jogou Papel e Maquina jogou Papel, portanto deu EMPATE!`
                window.empate++
            }
            else if (op == 2 && num[maq] == 3) {
                res.innerHTML = `Você jogou Papel e Maquina jogou Tesoura, portanto você PERDEU!`           
                window.derrota++
            }

            //Tesoura
            else if (op == 3 && num[maq] == 1) {
                res.innerHTML = `Você jogou Tesoura e Maquina jogou Pedra, portanto você PERDEU!`        
                window.derrota++
            }
            else if (op == 3 && num[maq] == 2) {
                res.innerHTML = `Você jogou Tesoura e Maquina jogou Papel, portanto você GANHOU!`
                window.vit++
            }
            else if (op == 3 && num[maq] == 3) {
                res.innerHTML = `Você jogou Tesoura e Maquina jogou Tesoura, portanto deu EMPATE!`            
                window.empate++
            }
            else {
                res.innerHTML = `Você digitou alguma opção inválida! Favor escolher 1, 2 ou 3 ou 4 para sair do jogo!`
            }
        } while (op == 4);
        placar.innerHTML = `Vitória: ${window.vit} <br>Derrota: ${window.derrota}<br>Empate: ${window.empate}`
    }
}