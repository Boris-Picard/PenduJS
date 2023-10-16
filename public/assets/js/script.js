/* On commence par une liste de mots random contenu dans un tableau 
qui doit etre séléctionné aléatoirement */
const array = ["azerty", "kevin", "deux", "arnaud", "maxime", "aaaeee"];
let randomArray = array[Math.floor(Math.random() * array.length)];
console.log(randomArray);

// je créer un nouveau tableau de mon mot random que je split lettre par lettre
let newArraySplit = randomArray.split("");
console.log(newArraySplit);

// je créer un tableau vide pour l'utilisateur
let userArray = [];
console.log(userArray);

// j'ajoute a mon tableau utilisateur des underscores suivant la longueur du mot random dans mon html
let splitUnderscore = () => {
    for(let letter = 0; letter < newArraySplit.length; letter++ ) {
    userArray[letter] = "_";
    console.log(userArray);
};
};

splitUnderscore();

// j'affiche dans mon html le tableau en _
const words = document.getElementById("word");
words.append(userArray.join(" "));

// je récupère la lettre tapé par l'utilisateur que je vais comparer au tableau du mot random et afficher la lettre correspondante si true dans le tableau avec _
let key = (event) => {
    event.key;
    // for()
};

addEventListener("keydown", key);



// on affiche le nombres de lettres attendu pour ce mot random

// on affiche un tableau de lettres cliquable mais aussi possibilité de taper au clavier

// je défini les nombres de coups possible pour trouver un mot

/* quand une lettre est tapé elle est vérifié sur le mot random qui a été généré au préalable et si la lettre 
est correct elle s'affiche dans le mot a trouver si false le dessin commence a s'afficher */

//la lettre tapé disparait du tableau et l'user n'a plus la possibilité de taper la meme lettre

// si l'user trouve le mot un message de victoire s'affiche 

// si l'user perd un screamer s'affiche

// je créer un bouton pour rejouer 



// if(newArraySplit.find((element) => element === event.key)){
        
//     console.log("aaa");
// };