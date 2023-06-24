let valorInicial = prompt("Qual o valor inicial disponivel?")
valorInicial = parseFloat(valorInicial)
let opçao = ""
let deposito = ""
deposito = parseFloat(deposito)
let saque = ""
saque = parseFloat(saque)

do{
    opçao = prompt("Seu saldo e de: $" + valorInicial + 
    "\nEscolha uma das opções abaixo: " +
    "\n01. Depositar" +
    "\n02. Saque" +
    "\n03. Sair")

    if(opçao === "01"){
        deposito = parseFloat(prompt("Qual o valor do Deposito?"))
        valorInicial = valorInicial + deposito
        

    }else if(opçao === "02"){
            saque = parseFloat(prompt("Quanto deseja sacar?"))
            valorInicial = valorInicial - saque
            if(valorInicial < saque){
                alert("Valor solicitado acima do seu saldo!")
            }
        }else
            alert("Seu saldo e de: $" + valorInicial + 
            "\nObrigado por utilizar nosso sistema!" + 
            "\nVolte Sempre!")

}while(opçao !== "03")