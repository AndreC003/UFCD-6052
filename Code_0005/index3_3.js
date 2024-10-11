let counter = 0;       
let intervalId = null; 
let isRunning = false; 


window.onload = function() {
    const counterDisplay = document.getElementById('counter');
    const toggleButton = document.getElementById('toggleButton');


    toggleButton.addEventListener('click', function() {
        if (isRunning) {
           
            clearInterval(intervalId); 
            intervalId = null; 
            toggleButton.innerText = "Iniciar Contagem"; 
            toggleButton.classList.remove('stop'); 
            toggleButton.classList.add('start'); 
        } else {
           
            intervalId = setInterval(function() {
                counter += 0.01; 
                counterDisplay.innerText = counter.toFixed(2); 
            }, 10); 
            toggleButton.innerText = "Parar Contagem"; 
            toggleButton.classList.remove('start'); 
            toggleButton.classList.add('stop'); 
        }
        isRunning = !isRunning; 
    });

  
    document.getElementById('resetButton').addEventListener('click', function() {
        clearInterval(intervalId);
        intervalId = null; 
        counter = 0;
        counterDisplay.innerText = counter.toFixed(2); 
        toggleButton.innerText = "Iniciar Contagem"; 
        toggleButton.classList.remove('stop');
        toggleButton.classList.add('start');
        isRunning = false; 
    });
};
