// Gestione del menu hamburger
const hamburger = document.querySelector('.hamburger'); // Seleziona l'icona del menu hamburger
const navMenu = document.querySelector('nav ul'); // Seleziona il menu di navigazione

// Aggiunge un event listener per il click sull'icona del menu hamburger
hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('active'); // Alterna la classe 'active' sull'icona del menu hamburger
    navMenu.classList.toggle('active'); // Alterna la classe 'active' sul menu di navigazione
});

// Aggiunge un event listener per chiudere il menu quando si clicca su un link del menu
document.querySelectorAll('nav ul li a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active'); // Rimuove la classe 'active' dall'icona del menu hamburger
    navMenu.classList.remove('active'); // Rimuove la classe 'active' dal menu di navigazione
}));