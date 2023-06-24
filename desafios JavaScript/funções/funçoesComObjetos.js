let pessoa = {
    nome: "Gilmar",
    idade: 34,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla()