document.addEventListener('DOMContentLoaded', function() {
    const resultadoDiv = document.querySelector('.resultado');
    const resultadoValorSpan = document.getElementById('resultado-valor');

    resultadoDiv.style.display = 'none';

    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);


        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        resultadoValorSpan.innerText = numeroAleatorio;
        resultadoDiv.style.display = 'block'; 
    });
});