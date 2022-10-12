
function inserir(numero)
{
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function apagaUltimoCaracter()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substr(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "vazio";
    }
}
