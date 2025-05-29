// Gestione dello slider di immagini
const imageSlider = document.querySelector('.image-slider'); // Seleziona lo slider di immagini
const images = imageSlider.querySelectorAll('img'); // Seleziona tutte le immagini all'interno dello slider
const prevBtn = document.getElementById('prev-btn'); // Seleziona il pulsante "Indietro"
const nextBtn = document.getElementById('next-btn'); // Seleziona il pulsante "Avanti"
let currentImageIndex = 0; // Indice dell'immagine corrente

// Mostra la prima immagine
images[currentImageIndex].classList.add('active');

// Funzione per mostrare l'immagine successiva
function showNextImage() {
    images[currentImageIndex].classList.remove('active'); // Rimuove la classe 'active' dall'immagine corrente
    currentImageIndex = (currentImageIndex + 1) % images.length; // Calcola il nuovo indice dell'immagine
    images[currentImageIndex].classList.add('active'); // Aggiunge la classe 'active' alla nuova immagine corrente
}

// Funzione per mostrare l'immagine precedente
function showPreviousImage() {
    images[currentImageIndex].classList.remove('active'); // Rimuove la classe 'active' dall'immagine corrente
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Calcola il nuovo indice dell'immagine, gestendo il caso in cui si va indietro dalla prima immagine
    images[currentImageIndex].classList.add('active'); // Aggiunge la classe 'active' alla nuova immagine corrente
}

// Event listener per il pulsante "Avanti"
nextBtn.addEventListener('click', showNextImage);

// Event listener per il pulsante "Indietro"
prevBtn.addEventListener('click', showPreviousImage);