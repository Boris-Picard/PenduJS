/* On commence par une liste de mots random contenu dans un tableau 
qui doit etre séléctionné aléatoirement */
const array = ["azerty", "kevin", "deux", "arnaud", "maxime", "aaaeee"];
let randomArray = array[Math.floor(Math.random() * array.length)];
console.log(randomArray);

// je créer un nouveau tableau de mon mot random que je split lettre par lettre
let newArraySplit = randomArray.split("");
console.log(newArraySplit);
// je créer ensuite un tableau vide pour l'utilisateur 
let userArray = [];
console.log(userArray);
/* je vais comparer la lettre tapé par l'utilisateur par rapport a une lettre contenu dans random.split et 
ajouter la bonne lettre tapé dans le tableau vide de l'utilisateur */
const compareKey = (event) => {
    if(newArraySplit.find((element) => element === event.key)) {
        userArray.push(...event.key)
        return console.log(userArray);
    };
};




document.querySelector("body").addEventListener("keydown", compareKey);


// je fais en sorte que la longueur du tableau de l'utilisateur ne dépasse pas celui du mot random









// on affiche le nombres de lettres attendu pour ce mot random

// on affiche un tableau de lettres cliquable mais aussi possibilité de taper au clavier

// je défini les nombres de coups possible pour trouver un mot

/* quand une lettre est tapé elle est vérifié sur le mot random qui a été généré au préalable et si la lettre 
est correct elle s'affiche dans le mot a trouver si false le dessin commence a s'afficher */

//la lettre tapé disparait du tableau et l'user n'a plus la possibilité de taper la meme lettre

// si l'user trouve le mot un message de victoire s'affiche 

// si l'user perd un screamer s'affiche

// je créer un bouton pour rejouer 

