const MAX_TENTATIVAS = 5;
const palavrasAnimais = ["cachorro", "gato", "elefante", "tigre", "leao"];
const palavrasFilmes = ["matrix", "titanic", "avatar", "rocky", "jumanji"];
const palavrasObjetos = ["mesa", "cadeira", "computador", "telefone", "laptop"];

let tentativas = MAX_TENTATIVAS;
let palavra = '';
let palavraOculta = [];
let letrasErradas = [];
let letrasUsadas = [];
let acertou = false;

// Função para mostrar a forca
function mostrarForca() {
    const head = document.querySelector('.head');
    const body = document.querySelector('.body');
    const armLeft = document.querySelector('.arm-left');
    const armRight = document.querySelector('.arm-right');
    const legLeft = document.querySelector('.leg-left');
    const legRight = document.querySelector('.leg-right');

    head.style.display = tentativas <= 4 ? 'block' : 'none';
    body.style.display = tentativas <= 3 ? 'block' : 'none';
    armLeft.style.display = tentativas <= 2 ? 'block' : 'none';
    armRight.style.display = tentativas <= 2 ? 'block' : 'none';
    legLeft.style.display = tentativas <= 1 ? 'block' : 'none';
    legRight.style.display = tentativas === 0 ? 'block' : 'none';
}

// Função para escolher uma palavra aleatória
function escolherPalavra(grupo) {
    const randomIndex = Math.floor(Math.random() * 5);
    switch (grupo) {
        case 'a': // Animais
            return palavrasAnimais[randomIndex];
        case 'b': // Filmes
            return palavrasFilmes[randomIndex];
        case 'c': // Objetos
            return palavrasObjetos[randomIndex];
        default:
            return 'erro';
    }
}

// Função para iniciar o jogo
function iniciarJogo(grupo) {
    tentativas = MAX_TENTATIVAS;
    letrasErradas = [];
    letrasUsadas = [];
    palavra = escolherPalavra(grupo);
    palavraOculta = Array(palavra.length).fill('_');
    atualizarDisplay();
}

// Função para atualizar a exibição da palavra e letras erradas
function atualizarDisplay() {
    document.getElementById('palavra-oculta').textContent = palavraOculta.join(' ');
    document.getElementById('letras-erradas').textContent = letrasErradas.join(', ');
    document.getElementById('result-message').textContent = '';
    mostrarForca();

    if (tentativas === 0) {
        document.getElementById('result-message').textContent = 'Você perdeu! A palavra era: ' + palavra;
        document.getElementById('restart-button').style.display = 'block';
    } else if (!palavraOculta.includes('_')) {
        document.getElementById('result-message').textContent = 'Parabéns, você ganhou!';
        document.getElementById('restart-button').style.display = 'block';
    } else {
        document.getElementById('restart-button').style.display = 'none';
    }
}

// Função para verificar a letra adivinhada
function verificarLetra(letra) {
    if (letrasUsadas.includes(letra) || letrasErradas.includes(letra)) {
        alert('Você já tentou essa letra. Tente outra.');
        return;
    }

    letrasUsadas.push(letra);

    if (palavra.includes(letra)) {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i] === letra) {
                palavraOculta[i] = letra;
            }
        }
    } else {
        tentativas--;
        letrasErradas.push(letra);
    }

    atualizarDisplay();
}

// Evento do botão de adivinhar
document.getElementById('guess-button').addEventListener('click', function() {
    const letraInput = document.getElementById('letra-input');
    const letra = letraInput.value.toLowerCase();

    if (letra) {
        verificarLetra(letra);
        letraInput.value = '';
    } else {
        alert('Digite uma letra.');
    }
});

// Evento do botão de reiniciar
document.getElementById('restart-button').addEventListener('click', function() {
    const grupo = prompt('Escolha um grupo: a (Animais), b (Filmes), c (Objetos)');
    if (grupo) {
        iniciarJogo(grupo);
    }
});

// Iniciar o jogo ao carregar a página
window.onload = function() {
    const grupo = prompt('Escolha um grupo: a (Animais), b (Filmes), c (Objetos)');
    if (grupo) {
        iniciarJogo(grupo);
    }
};
