document.getElementById('contar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpa resultados anteriores

    if (isNaN(numero) || numero <= 0) {
        resultadoDiv.innerHTML = "Por favor, digite um número inteiro positivo.";
        return;
    }

    // Contagem regressiva
    if (numero > 10) {
        resultadoDiv.innerHTML = "O número é maior que 10. Parando a contagem.";
        return;
    }

    for (let i = 10; i >= numero; i--) {
        resultadoDiv.innerHTML += i + "<br>";
    }
});