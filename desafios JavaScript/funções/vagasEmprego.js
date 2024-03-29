const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        //1. nome, (x candidatos)
        textoFinal += indice+ ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
        }, "")
    
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga:")
    const descriçao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa para a vaga:")

    const confirmaçao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descriçao + "\nData limite: " + dataLimite
    )

    if(confirmaçao){
        const novaVaga = {nome, descriçao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function ( textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descriçao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " + candidatosEmTexto
    )

}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmaçao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descriçao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmaçao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmaçao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descriçao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmaçao){
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu(){
    const opçao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Increver um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opçao
}

function executar(){
    let opçao = ""

    do{
        opçao = exibirMenu()

        switch(opçao){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo....")
                break
            default:
                alert("Opção inválida!!!")
        }
    }while (opçao !== "6")

    executar()
}