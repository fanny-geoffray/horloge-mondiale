document.addEventListener("DOMContentLoaded", function () {
    const cityCards = document.querySelectorAll('.city-card');

    function updateClock() {
        const now = new Date();

        cityCards.forEach(card => {
            const cityName = card.getAttribute('data-city');
            const timezone = card.getAttribute('data-timezone');

            const options = { timeZone: timezone, hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const formattedTime = new Intl.DateTimeFormat('fr-FR', options).format(now);

            const timeElement = card.querySelector('.current-time');
            if (timeElement) {
                timeElement.textContent = `Heure actuelle : ${formattedTime}`;
            }
        });
    }

    // Mettre à jour l'horloge initiale
    updateClock();

    // Mettre à jour l'horloge chaque seconde
    setInterval(updateClock, 1000);
});







