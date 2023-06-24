/*function soma(a,b){
    alert("a soma de a + b é igual a " + (a+b))
}

soma(5,8)
soma(10,15)*/

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function novoUsuario(nome, tipo="admin", email, senha){
    const usuario = {
        nome,
        email,
        senha, tipo
    }

    console.log(usuario)
}

criarUsuario("Gilmar", "gilmargsfj@gmail.com", "1234")
novoUsuario("Gilmar", "admin", "gilmargsfj@gmail.com", "1234")

function muitosParametros(nome, telefone, endereço, aniversario, email, senha){

}

function objetoComoParametro(usuario){
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereço", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereço: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)

