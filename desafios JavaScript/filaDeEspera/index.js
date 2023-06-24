let filaDeEspera = []
let opçao = ""

do{
    let pacientes = ""
    for (let i = 0; i < filaDeEspera.length; i++){
        pacientes += (i + 1) + "º - " + filaDeEspera[i] + "\n"
    }

    opçao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n01 Novo paciente\n02. Consultar paciente\n03. Sair"
    )

    switch(opçao){
        case "01":
            const novoPaciente = prompt("Qual o nome do paciente?")
            filaDeEspera.push(novoPaciente)
            break
        case "02":
            const pacienteConsultado = filaDeEspera.shift()
            if(pacienteConsultado){
            alert(pacienteConsultado + "foi removido da fila.")
        }else{
            alert("Não há pacientes na fila!")
        }
            break
        case "03":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
   
}while(opçao !=="03")