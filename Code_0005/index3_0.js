let counter = 0;      // Variável que armazena o valor da contagem
let intervalId = null; // Variável que armazenará o ID do setInterval

// Espera o DOM carregar completamente
window.onload = function() {
    const counterDisplay = document.getElementById('counter');
    
    // Função para iniciar a contagem ao clicar no botão "Iniciar Contagem"
    document.getElementById('startButton').addEventListener('click', function() {
        // Verifica se o contador já está rodando
        if (!intervalId) {
            intervalId = setInterval(function() {
                counter++; // Incrementa o valor do contador
                counterDisplay.innerText = counter; // Atualiza o valor na tela em tempo real
            }, 1000); // Incrementa a cada 1 segundo
        }
    });

    // Função para parar a contagem ao clicar no botão "Parar Contagem"
    document.getElementById('stopButton').addEventListener('click', function() {
        if (intervalId) {
            clearInterval(intervalId); // Para o contador
            intervalId = null; // Reinicia o intervalId para permitir nova contagem
        }
    });

    // Função para reiniciar a contagem ao clicar no botão "Reiniciar Contagem"
    document.getElementById('resetButton').addEventListener('click', function() {
        clearInterval(intervalId); // Para o contador, se estiver rodando
        intervalId = null; // Reseta o intervalId
        counter = 0; // Reinicia o contador para zero
        counterDisplay.innerText = counter; // Atualiza o valor na tela
    });
};
