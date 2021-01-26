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
