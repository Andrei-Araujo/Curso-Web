function salvarNome(){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')
    let pessoa = {"nome":nome, "idade":idade}       //objeto com os conteudos de duas vqariaveissimples
    let pessoaJson =JSON.stringify(pessoa)          // transformou objeto em JSON (string)
    localStorage.setItem('pessoaSalva',pessoaJson)
}
let lerNome = function(){
    var paragrafo = document.querySelector('#mensagem')
    var pessoaSalva = localStorage.getItem('pessoaSalva')
    var pessoa = JSON.parse(pessoaSalva)
    

    if(pessoaSalva === null){
        paragrafo.innerHTML = "Não tem registro nome"
    }else{
        paragrafo.innerHTML = pessoa.nome
        paragrafo.innerHTML += ' - '
        paragrafo.innerHTML += pessoa.idade
    }
}

let apagarNome = ()=>{
    localStorage.removeItem('pessoaSalva')
    document.querySelector('#mensagem').innerHTML = "Registro Apagado"
}