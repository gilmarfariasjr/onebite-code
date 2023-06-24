const cadastros = []
let opçao = ""

do{
    opçao = prompt("Bem vindo(a) ao Cadastro de Imóveis!\n" +
    "Imóveis Cadastrados: " + cadastros.length + 
    "\n\nEscolha uma opção:\n01 - Novo Imóvel\n02 - Listar Imóveis\n03 - Sair")

    switch(opçao){
        case "01":
           const cadastro = {}

           cadastro.proprietario = prompt("Informa o nome do proprietário do imóvel:")
           cadastro.quartos = prompt("Quantos quartos possui o imóvel?")
           cadastro.banheiros = prompt("Quantos banheiros possui o imóvel?")
           cadastro.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

           const confirmaçao = confirm(
            "Salvar este imóvel?\n" +
            "\nProprietário: " + cadastro.proprietario +
            "\nQuartos: " + cadastro.quartos +
            "\nBanheiros: " + cadastro.banheiros +
            "\nPossui garagem? " + cadastro.garagem
            )

            if(confirmaçao){
                cadastros.push(cadastro)
                alert("Imóvel salvo com sucesso!")
            }else{
                alert("Voltando ao menu.")
            }

            break
        case "02":
            for(let i = 0; i < cadastros.length; i++){
                alert(
                    "Imóvel " + (i+1) +
                    "\nProprietário: " + cadastros[i].proprietario +
                    "\nQuartos: " + cadastros[i].quartos +
                    "\nBanheiros: " + cadastros[i].banheiros + 
                    "\nPossui garagem? " + cadastros[i].garagem
                )
            }
            break
        case "03":
            alert("Encerrando...")
        break
        default:
            alert("Opção Inválida!")
    }
}while(opçao !== "03")