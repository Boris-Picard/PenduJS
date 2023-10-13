/* On commence par une liste de mots random contenu dans un tableau 
qui doit etre séléctionné aléatoirement */
const array = ["azerty", "kevin", "deux", "arnaud", "maxime"];
let randomArray = array[Math.floor(Math.random() * array.length)];
console.log(randomArray);

// on affiche le nombres de lettres attendu pour ce mot random et la lettre associé si elle est true ou false
let arrayLength = randomArray.length;
console.log(arrayLength);
const dNone = document.querySelectorAll(".d-none");
console.log(dNone);
dNone.forEach(element => {
    element.classList.remove("d-none")
});
// on affiche un tableau de lettres cliquable mais aussi possibilité de taper au clavier

// je défini les nombres de coups possible pour trouver un mot

/* quand une lettre est tapé elle est vérifié sur le mot random qui a été généré au préalable et si la lettre 
est correct elle s'affiche dans le mot a trouver si false le dessin commence a s'afficher */

//la lettre tapé disparait du tableau et l'user n'a plus la possibilité de taper la meme lettre

// si l'user trouve le mot un message de victoire s'affiche 

// si l'user perd un screamer s'affiche

// je créer un bouton pour rejouer 


