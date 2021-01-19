function primeira()
{
    var nome = prompt('Entre com seu nome');
    alert("O nome é: "+nome);
    console.log(nome);
}

window.onload = function(){   
        document.getElementById('um').addEventListener('click',primeira);

        document.getElementById('dois').addEventListener('dblclick',function(){
            primeira()
        });

document.getElementById('tres').addEventListener('onmouseover', function(){
    var nome = prompt('Entre com seu nome');
    alert("O nome é: "+nome);
    console.log(nome);
});

}
