

function Quantidadesuco()
{
    var Quantidadesuco = document.getElementById('inputnumberQuantidadesuco').value;
    if(Quantidadesuco > 10)
    {
        precosuco = 4.50
        alert("Sua conta é de: R$" + precosuco * Quantidadesuco)
    }
    else
    {
        precosuco = 5.50
        alert("Sua conta é de: R$" + precosuco * Quantidadesuco)
    }

} 

function respostaFila()
{
    var respostaFila = document.getElementById('respostaFila').value;
    if(respostaFila == "sim")
    {
        alert( "Vá para os caixas 1, 2 ou 3")
    }
    if(respostaFila == "não")
    {
        alert("Vá para os caixas 4, 5 ou 6")
    }
    
}

 function abastesa()
 {
    var numbervalorEtanol = document.getElementById('numbervalorEtanol').value;
    var numbervalorGasolina = document.getElementById('numbervalorGasolina').value;
    if((numbervalorEtanol / numbervalorGasolina) >= 0.7)
    {
        alert("Abasteça com gasolina")
    }
    else
    {
        alert("Abasteça com etanol")
    }
 }

 function numero()
 {
    var numberpositivonegativo = document.getElementById('numberpositivonegativo').value;
    if(numberpositivonegativo < 0)
    {
        alert("Valor negativo")
    }
    else
    {
        alert("valor positivo")
    }
 }