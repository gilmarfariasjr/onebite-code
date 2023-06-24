const valor = prompt("Digite um valor: ")
const opçao = prompt("Qual a forma de conversão vc deseja: milimetro centimetro decimetro decametro hectometro quilometro")

switch (opçao) {
    case "milimetro":
        alert(valor/0.001);
        break;
    case "centimetro":
        alert(valor/100);
        break;
    case "decimetro":
        alert(valor/10);
        break;
    case "decametro":
        alert(valor*10);
        break;
    case "hectometro":
        alert(valor*100);
        break;
    case "quilometro":
        alert(valor*1000);
        break;
    default:
        alert("Opção Invalida...")
}


