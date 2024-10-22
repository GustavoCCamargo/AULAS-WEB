document.getElementById('adicionar').addEventListener('click', function() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const numeros = [];
    let soma = 0;
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpa resultados anteriores

    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.innerHTML = "Por favor, digite um número válido.";
        return;
    }

    // Solicitar números ao usuário
    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            resultadoDiv.innerHTML = "Entrada inválida. Certifique-se de digitar números inteiros.";
            return;
        }
    }

    // Calcular a soma dos elementos do vetor
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    // Imprimir o resultado
    resultadoDiv.innerHTML = "A soma dos elementos do vetor é: " + soma;
});