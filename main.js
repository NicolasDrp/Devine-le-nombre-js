const nombreadeviner = 15;
let choixjoueur;

const message = document.createElement("p");

document.getElementById("form").addEventListener("submit", reponse);

function reponse(event) {
    event.preventDefault();
    choixjoueur = document.getElementById("nombre").value;


    if (nombreadeviner == choixjoueur) {
        message.innerHTML = "Moins";
    } else if (choixjoueur > nombreadeviner) {
        message.innerHTML = "Moins";
    } else {
        message.innerHTML = "Plus";
    }
    document.getElementById("parent").appendChild(message);
}



