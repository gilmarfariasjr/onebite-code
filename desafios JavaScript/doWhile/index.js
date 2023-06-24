let opçao = ""

do{
    opçao = prompt("Escolha uma das opções abaixo:" + "\n01. Opção Um" + "\n02. Opção Dois" + "\n03. Opção Três" + "\n04. Opção Quatro" + "\n05. Encerrar")   
    
    switch(opçao){
        case "01":
            alert("Você escolheu a opção um!")
            break
        case "02":
            alert("Você escolheu a opção dois!")
            break
        case "03":
            alert("Você escolheu a opção três!")
            break
        case "04":
            alert("Você escolheu a opção quatro!")
            break
        case "05":
            alert("Você escolheu Encerrar!")
            break
        default:
            alert("Opção Invalida!")
    }

} while(opçao !== "05")
    


