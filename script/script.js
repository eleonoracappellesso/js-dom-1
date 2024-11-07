"use strict";
console.clear();

// seleziono gli elementi del DOM 
const onOffButton = document.getElementById("on-off-btn");
const firstImg = document.querySelector('img');

// creo una funzione per cambiare l'immagine e il testo del bottone 
function lightOnOff(){
    if(firstImg.src.includes("img/white_lamp.png")) {
        firstImg.src = "img/yellow_lamp.png";
        firstImg.alt = "light-on";
        onOffButton.innerHTML = "Spegni";
    } else {
        firstImg.src = "img/white_lamp.png";
        firstImg.alt = "light-off";
        onOffButton.innerHTML = "Accendi";
    }
}

// al click richiamo la funzione lightOnOff
onOffButton.addEventListener('click', lightOnOff);