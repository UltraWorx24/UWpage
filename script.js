document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {  // Using 1 pixel threshold for immediate effect
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {  // Using 1 pixel threshold for immediate effect
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {  // Using 1 pixel threshold for immediate effect
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {  // Using 1 pixel threshold for immediate effect
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {  // Using 1 pixel threshold for immediate effect
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 10) {  // Using 1 pixel threshold for immediate effect
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const logos = Array.from(track.children);
    const logoWidth = logos[0].offsetWidth + 100; // Adjust the value to match the new spacing
    let index = 0;

    // Clone the logos to create an infinite loop effect
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

    function moveCarousel() {
        index++;
        track.style.transform = `translateX(-${index * logoWidth}px)`;

        // Reset the index and transform when the original logos have all moved out of view
        if (index >= logos.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = `translateX(0)`;
                index = 0;
                setTimeout(() => {
                    track.style.transition = 'transform 1s ease-in-out';
                }, 50);
            }, 1000); // Adjust the timeout to match the transition duration
        }
    }

    setInterval(moveCarousel, 3000);
});
