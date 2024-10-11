let counter = 0;       // Variável que armazena o valor da contagem
let intervalId = null; // Variável que armazenará o ID do setInterval

// Espera o DOM carregar completamente
window.onload = function() {
    const counterDisplay = document.getElementById('counter');
    
    // Função para iniciar a contagem ao clicar no botão "Iniciar Contagem"
    document.getElementById('startButton').addEventListener('click', function() {
        // Verifica se o contador já está rodando
        if (!intervalId) {
            intervalId = setInterval(function() {
                counter += 0.01; // Incrementa o valor do contador em 0.01 segundos (10 ms)
                counterDisplay.innerText = counter.toFixed(2); // Exibe o valor com duas casas decimais
            }, 10); // Incrementa a cada 10 milissegundos (0.01 segundos)
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
        counterDisplay.innerText = counter.toFixed(2); // Atualiza o valor na tela com duas casas decimais
    });
};
