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
console.log(newArraySplit);

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

// je créer un fonction qui gére le compteur de fail et qui va afficher les messages si l'utilisateur perd 
let counter = 8
let countKey = () => {
    const count = document.querySelector(".count");
        counter--;
        count.innerHTML = `nombre de coups restant = ${counter = counter}`;
    if(counter === 0) {
        removeEventListener("keyup", keys);
        const replay = document.querySelector(".replay");
        replay.classList.remove("d-none");
    }
    const img = document.querySelector(".pendu1");
    const img2 = document.querySelector(".pendu2");
    const img3 = document.querySelector(".pendu3");
    const img4 = document.querySelector(".pendu4");
    const img5 = document.querySelector(".pendu5");
    const img6 = document.querySelector(".pendu6");
    const img7 = document.querySelector(".pendu7");
    const img8 = document.querySelector(".pendu8");
        switch(counter) {
            case 7:
                img.classList.remove("d-none");
            break;
            case 6:
                img.classList.add("d-none");
                img2.classList.remove("d-none");
            break;
            case 5:
                img.classList.add("d-none");
                img2.classList.add("d-none");
                img3.classList.remove("d-none");
            break;
            case 4:
                img.classList.add("d-none");
                img2.classList.add("d-none");
                img3.classList.add("d-none");
                img4.classList.remove("d-none");
            break;
            case 3:
                img.classList.add("d-none");
                img2.classList.add("d-none");
                img3.classList.add("d-none");
                img4.classList.add("d-none");
                img5.classList.remove("d-none");
            break;
            case 2:
                img.classList.add("d-none");
                img2.classList.add("d-none");
                img3.classList.add("d-none");
                img4.classList.add("d-none");
                img5.classList.add("d-none");
                img6.classList.remove("d-none");
            break;
            case 1:
                img.classList.add("d-none");
                img2.classList.add("d-none");
                img3.classList.add("d-none");
                img4.classList.add("d-none");
                img5.classList.add("d-none");
                img6.classList.add("d-none");
                img7.classList.remove("d-none");
            break;
            case 0:
                img.classList.add("d-none");
                img2.classList.add("d-none");
                img3.classList.add("d-none");
                img4.classList.add("d-none");
                img5.classList.add("d-none");
                img6.classList.add("d-none");
                img7.classList.add("d-none");
                img8.classList.remove("d-none");
            break;
        };
};

// je récupère la lettre tapé par l'utilisateur que je vais comparer au tableau du mot random et afficher la lettre correspondante si true dans le tableau user
const blocLetter = document.querySelector(".blocLetter")
let keys = (event) => {
    if(newArraySplit.includes(event.key)) {
        for(let key = 0; key < newArraySplit.length; key++) {
            if(event.key === newArraySplit[key]) {
                userArray[key] = newArraySplit[key]; 
                words.innerHTML = userArray.join(" ");
                blocLetter.innerHTML = `${event.key} est true`;
            };
        };
    }else {
        blocLetter.innerHTML = `${event.key} est false`;
        countKey();
    }
};

addEventListener("keyup", keys);

//je créer un clavier virtuel 
const virtualBoard = document.querySelectorAll(".virtualBoard");
virtualBoard.forEach(letter => {
    letter.addEventListener("click", () => {
        let letterValue = letter.textContent;
        if(newArraySplit.includes(letterValue)) {
            for(let key = 0; key < newArraySplit.length; key++) {
                if(letterValue === newArraySplit[key]) {
                    userArray[key] = newArraySplit[key]; 
                    words.innerHTML = userArray.join(" ");
                    blocLetter.innerHTML = `${letterValue} est true`;
                };
            };     
        } else {
            blocLetter.innerHTML = `${letterValue} est false`;
            countKey();
        };
    });
});

// j'indique le nombre de lettre attendue pour le mot a deviner 
let letterNumber = document.querySelector(".letterNumber");
letterNumber.innerHTML = `nombre de lettres = ${newArraySplit.length}`;






//la lettre tapé disparait du tableau et l'user n'a plus la possibilité de taper la meme lettre

// si l'user trouve le mot un message de victoire s'affiche 

// si l'user perd un screamer s'affiche

// je créer un bouton pour rejouer 

