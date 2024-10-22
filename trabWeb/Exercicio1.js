
let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}


let resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = "<strong>Números pares:</strong><br>";

// Percorrer o vetor e os números pares
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        resultadoDiv.innerHTML += numeros[i] + "<br>";
    }
}

     


