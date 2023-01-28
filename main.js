//chiffre entre 1 et 100
let nombreadeviner = Math.floor(Math.random() * 100) + 1;
let choixjoueur;
let tentative = 0;

//creation des messages et du bouton reset 
const message = document.createElement("p");
const compteur = document.createElement("p");
const rejouer = document.createElement("button");

message.innerHTML = "Entre un nombre en 1 et 100";

document.getElementById("form").addEventListener("submit", reponse);
rejouer.addEventListener("click", reset);

document.getElementById("parent").appendChild(message);

function reponse(event) {
    event.preventDefault();
    choixjoueur = document.getElementById("nombre").value;


    if (nombreadeviner == choixjoueur) {
        message.innerHTML = "GAGNER !!!";
        rejouer.innerHTML = "REJOUER"
        document.getElementById("parent").appendChild(rejouer);
    } else if (choixjoueur > nombreadeviner) {
        message.innerHTML = "Moins";
        tentative++;
    } else {
        message.innerHTML = "Plus";
        tentative++;
    }
    compteur.innerHTML = "Nombre de tentatives : " + tentative;
    document.getElementById("parent").appendChild(message);
    document.getElementById("parent").appendChild(compteur);
}

function reset() {
    nombreadeviner = Math.floor(Math.random() * 100) + 1;
    choixjoueur = null;
    tentative = 0;
    message.innerHTML = "Entre un nombre en 1 et 100";
    compteur.innerHTML = "";
    rejouer.style.display = "none";
}
