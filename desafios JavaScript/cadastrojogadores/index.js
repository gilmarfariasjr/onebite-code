const jogadores = []
let opçao = ""

do{
    opçao = prompt("Bem vindo(a) ao Sistema da Confederação Brasileira de Futebol - CBF\n" +
    "\nTotal de Jogadores Inscritos: " + jogadores.length + 
    "\n\nEscolha uma opção: \n01. Inscrever Jogador\n02. Consultar Jogador\n03. Sair")

    switch(opçao){
        case "01":
            const jogador = {}

            jogador.nome = prompt("Nome do Atleta: ")
            jogador.idade = prompt("Idade: ")   
            jogador.nacionalidade = prompt("Nacionalidade: ")
            jogador.altura = prompt("Altura: ")
            jogador.peso = prompt("Peso: ")
            jogador.posiçao = prompt("Posição: ")
            jogador.clubeAtual = prompt("Clube Atual: ")

            const confirmaçao = confirm("Deseja salvar os Dados? \n" +
            "\nNome do Atleta: " + jogador.nome + 
            "\nIdade: " + jogador.idade + " anos" +
            "\nNacionalidade: " + jogador.nacionalidade +
            "\nAltura: " + jogador.altura + "Mts" +
            "\nPeso: " + jogador.peso + "Kg" +
            "\nPosição: " + jogador.posiçao + 
            "\nClube Atual: " + jogador.clubeAtual) 

            if(confirmaçao){
                jogadores.push(jogador)
                alert("Atleta cadastrado com Sucesso!!!")
            }else{
                alert("Voltando ao Menu inicial!")
            }
            break

        case "02":
            for(let i = 0; i < jogadores.length; i++){
                alert("Dados dos Atletas: " + (i+1) +
                "\nNome do Atleta: " + jogadores[i].nome +
                "\nIdade: " + jogadores[i].idade +
                "\nNacionalidade: " + jogadores[i].nacionalidade +
                "\nAltura: " + jogadores[i].altura +
                "\nPeso: " + jogadores[i].peso +
                "\nPosição: " + jogadores[i].posiçao +
                "\nClube Atual: " + jogadores[i].clubeAtual)
            }
            break
        case "03":
            alert("Finalizando...")
            break
        default:
            alert("Opção Inválida!")
    }

}while(opçao !== "03")