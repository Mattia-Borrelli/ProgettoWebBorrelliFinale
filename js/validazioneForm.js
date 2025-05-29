// Validazione del form di iscrizione alla newsletter
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm'); // Seleziona il form di iscrizione alla newsletter

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            // Rimuovi eventuali messaggi di errore precedenti e stili
            clearErrorMessages();

            let nome = document.getElementById('nome'); // Seleziona il campo Nome
            let cognome = document.getElementById('cognome'); // Seleziona il campo Cognome
            let email = document.getElementById('email'); // Seleziona il campo Email
            let telefono = document.getElementById('telefono'); // Seleziona il campo Telefono

            let formHasErrors = false; // Flag per indicare se ci sono errori nel form

            // Validazione campo Nome
            if (nome.value.trim() === '') {
                showError(nome, 'Campo Nome Obbligatorio'); // Mostra errore se il campo Nome è vuoto
                formHasErrors = true; 
            }
            // Validazione campo Cognome
            if (cognome.value.trim() === '') {
                showError(cognome, 'Campo Cognome Obbligatorio'); // Mostra errore se il campo Cognome è vuoto
                formHasErrors = true;
            }

            // Validazione campo Email
            if (email.value.trim() === '') {
                showError(email, 'Campo Email Obbligatorio'); // Mostra errore se il campo Email è vuoto
                formHasErrors = true;
            } else if (!isValidEmail(email.value)) { 
                showError(email, 'Email non valida'); // Mostra errore se l'email non è valida
                formHasErrors = true;
            }

            // Validazione campo Telefono
            if (telefono.value.trim() === '') {
                showError(telefono, 'Campo Telefono Obbligatorio'); // Mostra errore se il campo Telefono è vuoto
            } else if (!/^\d{10}$/.test(telefono.value)) { // Verifica che il telefono sia un numero di 10 cifre
                formHasErrors = true;
            }

            // Se ci sono errori, impedisci l'invio del form
            if (formHasErrors) {
                event.preventDefault(); // Sposta il focus sul primo campo con errore per migliorare l'usabilità
                const firstErrorInput = document.querySelector('.input-error'); // Seleziona il primo input con errore
                if (firstErrorInput) {
                    firstErrorInput.focus(); // Sposta il focus sul primo campo con errore
                }
            } else {
                alert('Grazie per esserti iscritto alla newsletter!'); // Messaggio di successo
                newsletterForm.reset(); // Resetta il form dopo l'invio
            }
        });

        // Listener per rimuovere i messaggi di errore quando l'utente inizia a digitare
        newsletterForm.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', function() {
                const formGroup = this.closest('.form-group'); // Trova il form-group più vicino all'input
                const errorDiv = formGroup.querySelector('.error-message'); // Seleziona il div del messaggio di errore
                if (errorDiv) {
                    errorDiv.remove(); // Rimuove il div del messaggio di errore
                }
                this.classList.remove('input-error'); // Rimuove il bordo rosso dall'input
            });
        });
    }

    // Funzione per mostrare un messaggio di errore sotto il campo input
    function showError(inputElement, message) {
        const formGroup = inputElement.closest('.form-group'); // Trova il form-group più vicino all'input
        if (formGroup) {
            let errorDiv = formGroup.querySelector('.error-message'); // Seleziona il div del messaggio di errore all'interno del form-group
            if (!errorDiv) { 
                errorDiv = document.createElement('div'); // Crea un nuovo div per il messaggio di errore
                errorDiv.className = 'error-message'; // Aggiunge la classe 'error-message' al div
                formGroup.appendChild(errorDiv); // Aggiunge il div del messaggio di errore al form-group
            }
            errorDiv.textContent = message; // Imposta il testo del messaggio di errore
            inputElement.classList.add('input-error'); // Aggiunge la classe 'input-error' all'input per evidenziarlo
        }
    }

    // Funzione per rimuovere tutti i messaggi di errore e la classe di errore dagli input
    function clearErrorMessages() {
        document.querySelectorAll('.error-message').forEach(el => el.remove()); // Rimuove tutti i div dei messaggi di errore
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error')); // Rimuove la classe 'input-error' da tutti gli input
    }

    // Funzione di validazione molto basilare per l'email
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email); // Verifica se l'email ha un formato valido
    }
});