function calcularMedia (a,b){
    const media = (a+b)/2
    return media
}

const resultado = calcularMedia(7,2)
console.log(resultado)




function criarProduto(nome, preço){
    const produto = {
        nome,
        preço,
        estoque: 1
    }
    return produto
}

console.log(criarProduto("Samsung i5 8GB", "3500"))
console.log(criarProduto(" Smartv Samsung 4K 50Pol", "2500"))




function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

console.log(areaRetangular(7,2))
console.log(areaQuadrada(9))




function maiorIdade(idade){
    if(idade>=18){
        return "Maior de Idade"
    }else{
        return "Menor de Idade"
    }
}

console.log(maiorIdade(29))
console.log(maiorIdade(13))




let pokemon = "Pickathu"

function evoluir(){
    pokemon = "Pickatudo"
}

console.log(pokemon)
evoluir()
console.log(pokemon)