function salvarNome(){
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
    let pessoa = {"nome":nome,"idade":idade};
    let pessoaJson = JSON.stringify(pessoa);
    sessionStorage.setItem('pessoaSalva',pessoaJson);
}

let lerNome = function(){
    var paragrafo = document.querySelector('#mensagem');
    var pessoaSalva = sessionStorage.getItem('pessoaSalva');
    var pessoa = JSON.parse(pessoaSalva);

    if(pessoaSalva === null){
        paragrafo.innerHTML = "Não tem registro nome";
    }else{
         paragrafo.innerHTML = pessoa.nome;
         paragrafo.innerHTML += ' - ';
         paragrafo.innerHTML += pessoa.idade;
    }
}

let apagarNome = ()=>{
    sessionStorage.removeItem('pessoaSalva');
    document.querySelector('#mensagem').innerHTML = "Registro Apagado";
}