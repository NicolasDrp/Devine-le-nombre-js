//chiffre entre 1 et 100
let nombreadeviner = Math.floor(Math.random() * 100) + 1;
let choixjoueur;
let tentative = 0;

//creation des messages et du bouton reset en HTML
const message = document.createElement("p");
const compteur = document.createElement("p");
const rejouer = document.createElement("button");

//message de base
message.innerHTML = "Entre un nombre en 1 et 100";

// Lorsque le formulaire est submit, la fonction reponse est exécutée
document.getElementById("form").addEventListener("submit", reponse);
// Lorsque le bouton rejouer est cliqué, la fonction reset est exécutée.
rejouer.addEventListener("click", reset);

document.getElementById("parent").appendChild(message);

// Cette fonction vérifie si le nombre choisi par le joueur est correct et affiche un message approprié ("GAGNER !!!" ou "Moins" ou "Plus").
// Elle incrémente également le compteur de tentatives et affiche le nombre de tentatives effectuées.
function reponse(event) {
    event.preventDefault();
    choixjoueur = document.getElementById("nombre").value;


    if (nombreadeviner == choixjoueur) {
        message.innerHTML = "GAGNER !!!";
        rejouer.innerHTML = "REJOUER";
        document.getElementById("parent").appendChild(rejouer);
        rejouer.style.display = "initial";
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

// Cette fonction réinitialise les variables et les messages à leur état initial, et cache le bouton rejouer
function reset() {
    nombreadeviner = Math.floor(Math.random() * 100) + 1;
    choixjoueur = null;
    tentative = 0;
    message.innerHTML = "Entre un nombre en 1 et 100";
    compteur.innerHTML = "";
    rejouer.style.display = "none";
}
