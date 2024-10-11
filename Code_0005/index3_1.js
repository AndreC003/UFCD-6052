let counter = 0;       
let intervalId = null; 


window.onload = function() {
    const counterDisplay = document.getElementById('counter');
    
    
    document.getElementById('startButton').addEventListener('click', function() {
        
        if (!intervalId) {
            intervalId = setInterval(function() {
                counter += 0.01; 
                counterDisplay.innerText = counter.toFixed(2); 
            }, 10); 
        }
    });

    document.getElementById('stopButton').addEventListener('click', function() {
        if (intervalId) {
            clearInterval(intervalId); 
            intervalId = null; 
        }
    });

    
    document.getElementById('resetButton').addEventListener('click', function() {
        clearInterval(intervalId); 
        intervalId = null; 
        counter = 0; 
        counterDisplay.innerText = counter.toFixed(2); 
    });
};
