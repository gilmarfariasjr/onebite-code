const primeironome = prompt("Qual o seu primero nome?")
const segundonome = prompt("Qual o seu sobrenome?")
const campoDeEstudo = prompt("Qual o seu campo de estudo?")
const anoDeNascimento = prompt("Qual o seu ano de nascimento")

alert(
    "Recruta cadastrado com Sucesso!\n" +
    "\nNome completo: " + primeironome + " " + segundonome +
    "\nCampo de Estudo: " + campoDeEstudo + 
    "\nIdade: " + (2023 - anoDeNascimento)
)

