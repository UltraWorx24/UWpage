document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded and DOM ready');
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        console.log('Scroll event fired, scrollY:', window.scrollY);
        if (window.scrollY > 20) {
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
        }
    });
});
