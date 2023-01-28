//chiffre entre 1 et 100
const nombreadeviner = Math.floor(Math.random() * 100) + 1;
let choixjoueur;
let tentative = 0;

//creation du message 
const message = document.createElement("p");
const compteur = document.createElement("p");

document.getElementById("form").addEventListener("submit", reponse);

function reponse(event) {
    event.preventDefault();
    choixjoueur = document.getElementById("nombre").value;


    if (nombreadeviner == choixjoueur) {
        message.innerHTML = "GAGNER !!!";
    } else if (choixjoueur > nombreadeviner) {
        message.innerHTML = "Moins";
        tentative ++;
    } else {
        message.innerHTML = "Plus";
        tentative ++;
    }
    compteur.innerHTML = "Nombre de tentatives : "+tentative;
    document.getElementById("parent").appendChild(message);
    document.getElementById("parent").appendChild(compteur);
}



