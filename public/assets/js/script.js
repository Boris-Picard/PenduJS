/* On commence par une liste de mots random contenu dans un tableau 
qui doit etre séléctionné aléatoirement */
const array = ["football",
"tennis",
"basketball",
"natation",
"volleyball",
"cyclisme",
"athletisme",
"boxe",
"golf",
"rugby",
"escrime",
"plongee",
"equitation",
"handball",
"judo",
"kayak",
"ski",
"windsurf",
"hockey",
"badminton"];
let randomArray = array[Math.floor(Math.random() * array.length)];
const blocLetter = document.querySelector(".blocLetter");
let counter = 8;
const words = document.getElementById("word");
let letterNumber = document.querySelector(".letterNumber");
const virtualBoard = document.querySelectorAll(".virtualBoard");
const disableKeyboard = document.querySelector(".disableKeyboard");
const replay = document.querySelector(".replay");
const wordWas = document.querySelector(".wordWas");
const victory = document.querySelector(".victory");
const audioVictory = document.querySelector(".audioVictory");
const gifCr7 = document.querySelector(".gifCr7");
const theOfficeNo = document.querySelector(".theOfficeNo");
const audioLoose = document.querySelector(".audioLoose");
disableKeyboard.classList.remove("disableKeyboard");


// je créer un nouveau tableau de mon mot random que je split lettre par lettre
let newArraySplit = randomArray.split("");
console.log(newArraySplit);
// je créer un tableau vide pour l'utilisateur
let userArray = [];

// j'ajoute a mon tableau utilisateur des underscores en comparaisont a la longueur du mot random dans mon html
let splitUnderscore = () => {
    for(let letter = 0; letter < newArraySplit.length; letter++ ) {
    userArray[letter] = "_";
};
};

splitUnderscore();

// j'affiche dans mon html le tableau en _
words.append(userArray.join(" "));

// je créer un fonction qui gére le compteur de fail et qui va afficher les messages si l'utilisateur perd 
let countKey = () => {
    const count = document.querySelector(".count");      
        counter--;
        count.innerHTML = `nombre de coups restant = ${counter = counter}`;
    if(counter === 0) {
        removeEventListener("keyup", keys);
        disableKeyboard.classList.add('disableKeyboard');
        replay.classList.remove("d-none");
        wordWas.innerHTML = `Le mot était ${randomArray}`;
        victory.classList.remove("d-none");
        theOfficeNo.classList.remove("d-none");
        audioLoose.play();
    };
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
let keys = (event) => {
    if(newArraySplit.includes(event.key)) {
        for(let key = 0; key < newArraySplit.length; key++) {
            if(event.key === newArraySplit[key]) {
                userArray[key] = newArraySplit[key]; 
                words.innerHTML = userArray.join(" ");
                blocLetter.classList.remove("text-danger");
                blocLetter.classList.add("text-success");
                blocLetter.innerHTML = `${event.key} est true`;
            };
        };
    }else {
        blocLetter.classList.remove("text-success");
        blocLetter.classList.add("text-danger");
        blocLetter.innerHTML = `${event.key} est false`;
        countKey();
    };
    if (userArray.join(" ") === newArraySplit.join(" ")) {
        victory.classList.remove("d-none");
        audioVictory.play();
        gifCr7.classList.remove("d-none");
        replay.classList.remove("d-none");
    };
};

addEventListener("keyup", keys);

//je créer un clavier virtuel 
virtualBoard.forEach(letter => {
    letter.addEventListener("click", () => {
        let letterValue = letter.textContent;
        if(newArraySplit.includes(letterValue)) {
            for(let key = 0; key < newArraySplit.length; key++) {
                if(letterValue === newArraySplit[key]) {
                    userArray[key] = newArraySplit[key]; 
                    words.innerHTML = userArray.join(" ");
                    event.target.classList.add("disableKeyboard","bg-success");
                    blocLetter.classList.remove("text-danger");
                    blocLetter.classList.add("text-success");
                    blocLetter.innerHTML = `${letterValue} est true`;
                };
            };     
        } else {
            event.target.classList.add("disableKeyboard","bg-danger");
            blocLetter.classList.remove("text-success");
            blocLetter.classList.add("text-danger");
            blocLetter.innerHTML = `${letterValue} est false`;
            countKey();
            
        };
        if (userArray.join(" ") === newArraySplit.join(" ")) {
            victory.classList.remove("d-none");
            audioVictory.play();
            gifCr7.classList.remove("d-none");
            replay.classList.remove("d-none");
        };
    });
});

// j'indique le nombre de lettre attendue pour le mot a deviner 
letterNumber.innerHTML = `nombre de lettres à trouver ${newArraySplit.length}`;


