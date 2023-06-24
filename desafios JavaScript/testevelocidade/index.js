let nome1 = prompt("Informe o nome do veículo1?")
let veiculo1 = prompt("Qual a velocidade do veículo?")
let nome2 = prompt("Informe o nome do veículo2?")
let veiculo2 = prompt("Qual a velocidade do veículo?")

if(veiculo1 > veiculo2){
    alert(nome1 + " está mais rápido que o " + nome2)
}
    else if(veiculo1 == veiculo2){
        alert(" Os veículos estão na msm velocidade")
    }
    else{
        alert(nome2 + " está mais rápido que o " + nome1)
    }


