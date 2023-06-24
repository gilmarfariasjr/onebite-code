let atacante = prompt("Qual o nome do Atacante?")
let ataque = prompt("Qual o poder de Ataque?")
let ataqueF = parseFloat(ataque)

let defensor = prompt("Qual o nome do Defensor?")
let defesa = prompt("Qual o seu poder de defesa?")
let defesaF = parseFloat(defesa)
let pontosDeVida = prompt("Quantos pontos de vida possui?")
let escudo = prompt("Possui Escudo, (SIM/NÃO)")

let dano = 0

if(ataqueF>defesaF && escudo==="não"){
    dano = ataqueF - defesaF
}else if(ataqueF>defesaF && escudo==="sim"){
    dano = (ataqueF - defesaF)/2
}

pontosDeVida = pontosDeVida - dano

alert(`${atacante} causou ${dano} de dano em ${defensor}`)
alert(`${atacante} 
Poder de ataque: ${ataqueF}
${defensor}
Pontos de vida: ${pontosDeVida}
Poder de defesa: ${defesaF}
Possui escudo: ${escudo}`)