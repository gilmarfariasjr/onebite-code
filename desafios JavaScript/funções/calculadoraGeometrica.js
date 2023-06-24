let opçao = ""
let resultado = ""
let base = ""
let altura = "" 
let lado = ""
let baseMaior = ""
let baseMenor = ""
let raio = ""

do{
    opçao = prompt("CALCULADORA GEOMÉTRICA\n" +
    "\nEscolha uma opção:" +
    "\n\n01. Calcular Área do Triângulo" +
    "\n02. Calcular Área do Retângulo" +
    "\n03. Calcular Área do Quadrado" +
    "\n04. Calcular Área do Trapézio" +
    "\n05. Calcular Área do Círculo" +
    "\n06. Sair")

    switch(opçao){
        case "01":
            base = prompt("Digite a Base:")
            altura = prompt("Digite a Altura:")
            function triangulo(base, altura){
                resultado = base*altura/2
                return resultado
            }
            alert(triangulo(base, altura)+ "mts")
        break

        case "02":
            base = prompt("Digite a Base:")
            altura = prompt("Digite a Altura:")
            function retangulo(base, altura){
                resultado = base*altura
                return resultado
            }
            alert(retangulo(base, altura)+ "mts")
        break

        case "03":
            lado = prompt("Digite o tamanho do lado:")
            function quadrado(lado){
                resultado = lado * lado
                return resultado
            }
            alert(quadrado(lado)+ "mts")
        break

        case "04":
            baseMaior = prompt("Digite a Base Maior:")
            baseMenor = prompt("Digite a Base menor:")
            altura = prompt("Digite a Altura:")
            function Trapezio(baseMaior, baseMenor, altura){
                resultado = (parseInt(baseMaior) + parseInt(baseMenor))* altura / 2
                return resultado
            }
            alert(Trapezio(baseMaior, baseMenor, altura)+ "mts")
        break

        case "05":
            raio = prompt("Digite o tamanho do Raio:")
            function circulo(raio){
                resultado = 3.14*raio*raio
                return resultado
            }
            alert(circulo(raio)+ "mts")
        break

        case "06":
            alert("Saindo....")
        break

        default:
            alert("Opção Inválida!")
    }

}while(opçao!=="06")