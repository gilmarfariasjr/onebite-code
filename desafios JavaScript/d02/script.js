function salvar() {
    let data = new Date();
    let idade = data.getFullYear()
    let nme= document.getElementById('nome');
    let sobre= document.getElementById('sobrenome');
    let campo= document.getElementById('estudo');
    let ano= document.getElementById('nascimento');
    let resposta= document.getElementById('res');

    let name= nme.value;
    let sobr= sobre.value;
    
    let camp= campo.value;
    let idad = idade-Number(ano.value);
    {
    resposta.innerHTML += `<p>Dados cadastrados com sucesso</p>`
    resposta.innerHTML += `${name} ${sobr} /${camp} / ${idad} anos.`;
    }
    
}  
