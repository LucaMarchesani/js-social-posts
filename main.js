const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 -
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post nel nostro feed, (rimuovendo il post di prova dall'html).
// Milestone 2 -
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1 : Formattare le date in formato italiano (gg/mm/aaaa)
// 2 : Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3 : Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// recupero il div container dal DOM
const containerElement = document.getElementById('container');
// dichiaro una variabile per definire l'indice del ciclo
let i = 0;

// creo un ciclo while per creare tutti i post che mi servono in base alla lunghezza dell'array
while (i < posts.length) {

    // aggiungo il contenuto del container al DOM con il template literals
    containerElement.innerHTML += `
    <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${posts[i].author.image}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${posts[i].author.name}</div>
                            <div class="post-meta__time">${posts[i].created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                <div class="post__image">
                    <img src="${posts[i].media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" data-postid="${posts[i].id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`;
    i++
};

// recupero l'input dei like e il counter
const likeInput = document.querySelectorAll('a.like-button');
const likeCounter = document.querySelectorAll('div.likes__counter');

// creo un array vuoto che ospiterà gli id dei post a cui ho messo like 
let liked = [];
console.log(liked);

// aggiuingo un forEach all'elemento input
likeInput.forEach((element, index) => {

    // creo un evento 
    element.addEventListener('click', function () {
        // aggiungo la classe a element (likeInput) con un toggle in modo che se clicco di nuovo sull'input la classe si rimuove automaticamente 
        element.classList.toggle('like-button--liked');
        
        // creo una condizione in cui dico che se la classe aggiunta con il click è presente:
        if (element.classList.contains('like-button--liked') === true) {

            // :sovrascrivo con il template literals post[index].likes aggiungendo 1
            likeCounter[index].innerHTML = `Piace a <b id="${posts[index].id}" class="js-likes-counter">${posts[index].likes + 1}</b> persone`;
            // poi faccio push dell'id del post a cui ho messo like nel array liked
            liked.push(posts[index].id);
        } 
        // altrimenti se la classe non è presente lo riporto alla condizione originale
        else if (element.classList.contains('like-button--liked') === false) {
            likeCounter[index].innerHTML = `Piace a <b id="${posts[index].id}" class="js-likes-counter">${posts[index].likes}</b> persone`;
        }  
    });
});
