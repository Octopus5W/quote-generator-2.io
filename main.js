let intro = document.getElementById('intro');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

// bouton générateur de quote
function generator() {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    quote.innerHTML = data[0].quote;
                    author.innerHTML = data[0].author;
                })
            } else {
                intro.innerHTML = "L'URL de l'API est inexistante.";
                quote.innerHTML = "T'as encore tout cassé...";
            }
        })
}

// bouton d'ajout aux favoris (localStorage)
function addFavorite() {
    notTwoTime(quote.innerText, storageQuote)
};


// verification anti-doublon
let notTwoTime = function (myQuote, array) {
    if (array.length == 0) {
        myStorage();
    }
    else {
        array.forEach((array) => {
            if (myQuote == array) {
                return quote.innerText = "cette quote est déjà dans tes favoris";;
            }
        });
    }
};
// initialisation du tableau de stockage

console.log(myTempStorage[0].quote);
// stockage dans localStorage   
let myStorage = function () {
    let myTempStorage = new [
        {
            quote: quote.innerText,
            author: author.innerText
        }
    ];
    localStorage.setItem('myTempStorage', JSON.stringify(myTempStorage));
};


// initialise le conteneur des Favoris (localStorage)
let Contener = document.getElementById("droite");
//supprime le contenu de section (id=droite)
let myRemoveChild = function () {
    while (Contener.firstChild) {
        Contener.removeChild(Contener.firstChild);
    }
};


// let myQuotes = [
//     {
//         quote: "Blablaldlfksljf",
//         author: "Sebastien Cardon"
//     },
//     {
//         quote: "Blablaldlfksljf",
//         author: "Sebastien Cardon"
//     },
//     {
//         quote: "Blablaldlfksljf",
//         author: "Sebastien Cardon"
//     },
//     {
//         quote: "Blablaldlfksljf",
//         author: "Sebastien Cardon"
//     }
// ];

// console.log(myQuotes[0].quote)




// add élément HTML dans le conteneur (section avec id 'droite' dans l'HTML)
let addElement = function (cpt) {
    // ajout d'un paragraphe quote
    let pQuote = document.createElement('p');
    pQuote.class = "quote";
    pQuote.id = "quote" + cpt;
    pQuote.textContent = JSON.parse(localStorage.getItem(myQuote[cpt]));
    // ajout d'un paragraphe author
    let pAuthor = document.createElement('p');
    pAuthor.class = "author";
    pAuthor.id = "author" + cpt;
    pAuthor.textContent = g;
};


// bouton affichage des favoris
let affFavorite = function () {
    myRemoveChild();
    if (localStorage.length == 2) {
        storageQuote = JSON.parse(localStorage.getItem('quote'));
        storageAuthor = JSON.parse(localStorage.getItem('author'));
        for (i = 0; i < storageQuote.length; i++) {
            addElement(i);
        }
    }
    else {
        //gestion d'erreur aucun favori
        let noFavorite = document.createElement('p');
        noFavorite.class = "quote";
        noFavorite.textContent = "Tu n'as pas de favori";
        document.getElementById("droite").appendChild(noFavorite);
    }
};


// bouton supprimer les favoris (localStorage)
let supFavorite = function () {
    myRemoveChild();
    localStorage.clear();
    cpt = localStorage.length;
};