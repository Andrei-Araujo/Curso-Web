function primeira()
        {
            var nome = prompt('Entre com seu nome');
            alert("O nome é: "+nome);
            console.log(nome);
        }
    //Uncaught TypeError: Cannot read property 'info' of undefined
    //essa instrução funcionara somente após o objeto existir
    //coloca-la apos o HTML

    
    
    window.onload = function(){
        document.getElementById('um').addEventListener('click', primeira)   // so serve para funcao sem parametro de entrada; se precisar passar valor, n rola desse jeito pois o programa vai tentar executar na hora

        document.getElementById('dois').addEventListener('dblclick', function(){ // funcao anonima que chama uma outra funcao
            primeira()})

        document.getElementById('tres').addEventListener('onmouseover', function(){ // ou usa uma funcao anonima com codigo exclusivo (nao chama outra funcao)
            var nome = prompt('Entre com seu nome');
            alert("O nome é: "+nome);
            console.log(nome);
        });
        
    }
    