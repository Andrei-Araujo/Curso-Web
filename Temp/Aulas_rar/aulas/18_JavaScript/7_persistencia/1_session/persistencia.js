function salvarNome(){
    let nome = document.querySelector('#nome');
    sessionStorage.setItem('nomeSalvo',nome.value);
    //sessionStorage.nomeSalvo=nome.value;
    //sessionStorage['nomeSalvo']=nome.value;
    nome.value='';

}
let lerNome = function(){
    var paragrafo = document.querySelector('#mensagem');
    var nome = sessionStorage.getItem('nomeSalvo');
    //var nome = sessionStorage.nomeSalvo;

    if(nome === null){
        paragrafo.innerHTML = "Não tem registro nome";
    }else{
         paragrafo.innerHTML = nome;
    }
}

let apagarNome = ()=>{
    sessionStorage.removeItem('nomeSalvo');
    document.querySelector('#mensagem').innerHTML = "Registro Apagado";
}