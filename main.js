const nombreadeviner = 15;
let choixjoueur;



function checkAnswer(event) {
    event.preventDefault();
    choixjoueur = document.getElementById("nombre").value;
    if (nombreadeviner == choixjoueur) {
        alert("c'est bon");
    }else if(choixjoueur > nombreadeviner) {
        alert("c'est moins");
    }else{
        alert("c'est plus");
    }

}

document.getElementById("form").addEventListener("submit", checkAnswer);

