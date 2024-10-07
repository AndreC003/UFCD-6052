let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = Number(document.getElementById('guess').value);
    let message = '';
    
    if (!userGuess) {
        message = 'Por favor, insira um número!';
    } else if (userGuess < 1 || userGuess > 100) {
        message = 'O número deve estar entre 1 e 100!';
    } else {
        attempts--;
        
        if (userGuess === randomNumber) {
            message = 'Parabéns! Você adivinhou o número!';
        } else if (attempts === 0) {
            message = `Fim de jogo! O número era ${randomNumber}.`;
        } else {
            message = userGuess < randomNumber ? 'Muito baixo!' : 'Muito alto!';
        }
    }

    document.getElementById('message').innerText = message;
    document.getElementById('attempts').innerText = attempts;

    if (attempts === 0 || userGuess === randomNumber) {
        document.getElementById('submitGuess').disabled = true;
    }
});
