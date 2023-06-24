const baralho = []
let opçao = ""

do{
    opçao = prompt(
        "Cartas do Baralho: " + baralho.length +
        "\n01 - Adicionar uma carta\n02 - Puxar uma carta\n03 - Sair"
    )

    switch(opçao){
        case "01":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "02":
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada){
                alert("Não há nenhuma carta no baralho")
            } else{
                alert("Você puxou um(a) " + cartaPuxada)
            }
            break
        case "03":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
}while (opçao !=="03")