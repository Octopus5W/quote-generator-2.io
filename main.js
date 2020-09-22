let intro = document.getElementById('intro');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

let data

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
    console.log('add')
};
// verification anti-doublon
let notTwoTime = function (myQuote, array) {
    if (array == null){
        console.log('null')
        myStorage();
    }
    else{
        array.forEach((array) => {
        if (myQuote == array) {
            return quote.innerText = "cette quote est déjà dans tes favoris";;
        }
        myStorage();
    });
    }
};
// initialisation des tableaux de stockages
let storageQuote = [];
let storageAuthor = [];
// stockage dans localStorage   
let myStorage = function () {
    // console.log(localStorage.length)
    storageQuote.push(quote.innerText);
    storageAuthor.push(author.innerText);
    console.log(storageQuote)
    localStorage.setItem('quote', JSON.stringify(storageQuote));
    localStorage.setItem('author', JSON.stringify(storageAuthor));
    // console.log(localStorage.length)
};


// initialise le conteneur des Favoris (localStorage)
let Contener = document.getElementById("droite");
//supprime le contenu de section (id=droite)
let myRemoveChild = function () {
    while (Contener.firstChild) {
        Contener.removeChild(Contener.firstChild);
    }
};

// add élément HTML dans le conteneur (section avec id 'droite' dans l'HTML)
let addElement = function (cpt) {
    // ajout d'un paragraphe quote
    pQuote = document.createElement('p');
    pQuote.class = "quote";
    pQuote.id = "quote" + cpt;
    pQuote.textContent = quoteLS;
    // ajout d'un paragraphe author
    pAuthor = document.createElement('p');
    pAuthor.class = "author";
    pAuthor.id = "author" + cpt;
    pAuthor.textContent = authorLS;
};


// bouton affichage des favoris
let affFavorite = function () {
    console.log('start')
    myRemoveChild();
    if (true) {
        console.log('if')
        storageQuote = JSON.parse(localStorage.getItem('quote'));
        console.log(storageQuote)
        storageAuthor = JSON.parse(localStorage.getItem('author'));
        for (i = 0; i < storageQuote.length; i++) {
            addElement(i+1)
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