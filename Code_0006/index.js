let direcaoAtual = null;  // Variável que armazena a direção atual
let motorParado = true;   // Variável que simula o sensor de movimento
let intervaloMovimento = null;  // Variável para o intervalo de movimento do motor
let angulo = 0; // Posição inicial do veio do motor

// Elementos da página
const botaoEsquerda = document.getElementById("esquerda");
const botaoDireita = document.getElementById("direita");
const botaoStop = document.getElementById("stop");
const velocidadeInput = document.getElementById("velocidade");
const valorVelocidade = document.getElementById("valor-velocidade");
const statusMotor = document.getElementById("status-motor");
const veio = document.getElementById("veio");

// Função para atualizar a velocidade mostrada e refletir a mudança no motor
velocidadeInput.addEventListener("input", function () {
    valorVelocidade.textContent = velocidadeInput.value;

    // Se o motor estiver em movimento, ajustar a velocidade instantaneamente
    if (!motorParado) {
        clearInterval(intervaloMovimento);  // Para o movimento atual
        moverMotor(direcaoAtual);           // Reinicia o movimento com a nova velocidade
    }
});

// Função para parar o motor
function pararMotor() {
    clearInterval(intervaloMovimento);
    motorParado = true;
    statusMotor.textContent = "Status: Parado";
    direcaoAtual = null;
}

// Função para mover o veio do motor
function moverMotor(direcao) {
    const velocidade = velocidadeInput.value;  // Pega o valor da velocidade

    clearInterval(intervaloMovimento);  // Para o movimento anterior

    intervaloMovimento = setInterval(() => {
        angulo += (direcao === "esquerda" ? -1 : 1) * (velocidade / 10);  // Ajusta o ângulo de acordo com a direção e a velocidade
        veio.style.transform = `rotate(${angulo}deg)`;
    }, 100);
}

// Função para mudar a direção do motor
function mudarDirecao(direcao) {
    if (motorParado || direcao === "stop") {
        direcaoAtual = direcao;

        if (direcao === "stop") {
            pararMotor();
        } else {
            motorParado = false;
            statusMotor.textContent = `Status: Movendo para ${direcao}`;
            moverMotor(direcao);  // Inicia o movimento na direção escolhida
        }
    } else {
        alert("O motor precisa estar parado para mudar a direção!");
    }
}

// Eventos de clique dos botões
botaoStop.addEventListener("click", function () {
    mudarDirecao("stop");
});

botaoEsquerda.addEventListener("click", function () {
    mudarDirecao("esquerda");
});

botaoDireita.addEventListener("click", function () {
    mudarDirecao("direita");
});
