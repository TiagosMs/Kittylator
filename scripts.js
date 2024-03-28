

function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}
function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}

function apagar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        alert('nada pra calcular')
    }
}

  // Função para exibir um prompt e manipular o input
  function exibirPrompt() {
    // Utiliza o prompt para obter a entrada do usuário
    var userInput = prompt("Seu nome meu docinho: ");

    // Verifica se o usuário clicou em "Cancelar" ou não digitou nada
    if (userInput === null || userInput === "") {
        alert("Você não digitou nada.");
    } else {
        // Exibe o que foi digitado na página
        document.getElementById("nome").innerHTML = "Olá " + userInput + ". Provavelmente não sabe matemática básica.";    }
}

// Chama a função quando a página carrega (apenas para fins de exemplo)
window.onload = exibirPrompt;