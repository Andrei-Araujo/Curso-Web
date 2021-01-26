onload = function(){
  document.getElementById('compara').addEventListener('click', () => {
            let num1 = parseFloat(document.querySelector('#num1').value);
            let paragrafo = document.getElementById('p_resultado');
            let a = 1*num1;
            let b = 2*num1;
            let c = 3*num1;

            paragrafo.innerHTML = a + " ovos" + "<br />" + b+" xicaras de leite" + "<br />" + c + " tangerinas"
        })
}

function openReceita(){
    document.getElementById("div_receita").style.display="block"
    document.getElementById("div_receita").style.marginRight="0%"
    document.getElementById("div_receita").style.width="20%"
    document.getElementById("openbtn").style.display="none"
}

function closeReceita(){
    document.getElementById("div_receita").style.display="none"
    document.getElementById("openbtn").style.display="block"
}

function showMenu(){
    if(document.getElementById("logo2").style.display=="block"){
        document.getElementById("logo2").style.display="none"
        /*document.getElementById("logo2").style.visibility="hidden"*/
    }else{
        document.getElementById("logo2").style.display="block"
        /*document.getElementById("logo2").style.visibility="visible"*/
    }

}