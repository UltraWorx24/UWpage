document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');

    /* ================================
       1) SCROLLED HEADER LOGIC
    ================================ */
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });

    /* ================================
       2) CAROUSEL LOGO TRACK LOGIC
    ================================ */
    const track = document.querySelector('.carousel-track');
    if (track) {
        const logos = Array.from(track.children);
        // Increase or decrease "100" to control spacing between logos
        const logoWidth = logos[0].offsetWidth + 100; 
        let index = 0;

        // Clone each logo to create an infinite loop
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });

        function moveCarousel() {
            index++;
            track.style.transform = `translateX(-${index * logoWidth}px)`;

            // Once the original set has scrolled out of view, reset
            if (index >= logos.length) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    track.style.transform = `translateX(0)`;
                    index = 0;
                    // Briefly wait, then restore transition for a smooth loop
                    setTimeout(() => {
                        track.style.transition = 'transform 1s ease-in-out';
                    }, 50);
                }, 1000);
            }
        }

        // Move the carousel every 3 seconds (adjust as needed)
        setInterval(moveCarousel, 3000);
    }

    /* ================================
       3) SERVICE CARD TOGGLE LOGIC
    ================================ */
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the 'active' class to expand/collapse the detail text
            card.classList.toggle('active');
        });
    });
});

