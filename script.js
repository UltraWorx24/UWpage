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
    let index = 0;
  
    function moveCarousel() {
      const items = track.children.length;
      index = (index + 1) % items;
      track.style.transform = `translateX(-${index * 250}px)`; // Adjust the value to match the new spacing

      // Check if the first logo has completely left the viewport
      if (index === items - 1) {
        setTimeout(() => {
          // Clone the first logo and append it to the end of the track
          const firstLogo = track.children[0];
          track.appendChild(firstLogo.cloneNode(true));
          // Remove the first logo from the track
          track.removeChild(firstLogo);
          // Reset the transform to show the new first logo
          track.style.transition = 'none';
          track.style.transform = 'translateX(0)';
          // Force reflow to apply the reset transform
          track.offsetHeight;
          // Re-enable the transition
          track.style.transition = 'transform 1s ease-in-out';
          index = 0;
        }, 1000); // Adjust the timeout to match the transition duration
      }
    }
  
    setInterval(moveCarousel, 3000);
});
