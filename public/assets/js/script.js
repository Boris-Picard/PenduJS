/* On commence par une liste de mots random contenu dans un tableau 
qui doit etre séléctionné aléatoirement */
const array = ["sorciere",
"citrouille",
"fantome",
"vampire",
"zombie",
"momie",
"chausouris",
"araignee",
"toiledaraignee",
"monstre",
"costume",
"balai",
"potion",
"crane",
"os",
"tombe",
"cimetiere",
"nuit",
"epouvantail",
"epee",
"balaivolant",
"chaudron",
"bonbon",
"squelette",
"maquillage",
"magie",
"mystere",
"sorcellerie",
"chatnoir",
"lune",
"hurlement",
"chausourisvampire",
"loupgarou",
"feufollet",
"zombieaffame",
"arbrehante",
"diable",
"frisson",
"epouvante",
"sombre",
"effrayant",
"noir",
"effetdelumiere",
"hurleur",
"chateauhante",
"masque",
"ossements",
"ombre",
"epine",
"abomination",
"sang",
"malediction",
"chairputrefiee",
"chasseurdemonstres",
"frankenstein",
"balaiensorcele",
"clignotant",
"tombstone",
"fouet",
"loup",
"magicien",
"enchanteur",
"citrouilleilluminee",
"chaudronbouillonnant",
"chaines",
"sombreforet",
"cris",
"effroi",
"portail",
"fete",
"noirceur",
"labyrinthe",
"chaudronfumant",
"rirediabolique",
"cicatrice",
"tetedemort",
"aiguille",
"monstrueux",
"effetsonore",
"potionmagique",
"sueurfroide",
"malediction",
"morsure",
"crevette",
"malefique",
"lueur",
"maudit",
"demon",
"decadent",
"poupeeensorcelee",
"goules",
"sombresoiree",
"chateaulugubre",
"necromancien",
"maitredestenebres",
"saignee",
"mortvivant",
"loupgarouaffame",
"princessedestenebres",
"hurlementdeloup"];
let randomArray = array[Math.floor(Math.random() * array.length)];

// je créer un nouveau tableau de mon mot random que je split lettre par lettre
let newArraySplit = randomArray.split("");

// je créer un tableau vide pour l'utilisateur
let userArray = [];

// j'ajoute a mon tableau utilisateur des underscores suivant la longueur du mot random dans mon html
let splitUnderscore = () => {
    for(let letter = 0; letter < newArraySplit.length; letter++ ) {
    userArray[letter] = "_";
};
};

splitUnderscore();

// j'affiche dans mon html le tableau en _
const words = document.getElementById("word");
words.append(userArray.join(" "));

// je récupère la lettre tapé par l'utilisateur que je vais comparer au tableau du mot random et afficher la lettre correspondante si true dans le tableau user
let keys = (event) => {
    if(newArraySplit.includes(event.key)) {
        for(let key = 0; key < newArraySplit.length; key++) {
            if(event.key === newArraySplit[key]) {
                userArray[key] = newArraySplit[key]; 
                words.innerHTML = userArray.join(" ");
            };
        };     
    } else {
        console.log("wrong");
    };
};

addEventListener("keydown", keys);

//je créer aussi un clavier virtuel 
const virtualBoard = document.querySelectorAll(".virtualBoard");

virtualBoard.forEach(letter => {
    letter.addEventListener("click", () => {
        const letterValue = letter.textContent;
        if(newArraySplit.includes(letterValue)) {
            for(let key = 0; key < newArraySplit.length; key++) {
                if(letterValue === newArraySplit[key]) {
                    userArray[key] = newArraySplit[key]; 
                    words.innerHTML = userArray.join(" ");
                };
            };     
        } else {
            console.log("wrong");
        };
    })
})


// on affiche le nombres de lettres attendu pour ce mot random

// on affiche un tableau de lettres cliquable mais aussi possibilité de taper au clavier

// je défini les nombres de coups possible pour trouver un mot

/* quand une lettre est tapé elle est vérifié sur le mot random qui a été généré au préalable et si la lettre 
est correct elle s'affiche dans le mot a trouver si false le dessin commence a s'afficher */

//la lettre tapé disparait du tableau et l'user n'a plus la possibilité de taper la meme lettre

// si l'user trouve le mot un message de victoire s'affiche 

// si l'user perd un screamer s'affiche

// je créer un bouton pour rejouer 

