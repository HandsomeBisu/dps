document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const banner = document.getElementById('banner');
    const images = [logo, banner];
    let currentIndex = 0;

    function cycle() {
        const currentImage = images[currentIndex];
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];

        // Special handling for logo fade-out
        if (currentImage.id === 'logo') {
            currentImage.classList.add('logo-fade-out');
        } else {
            // Normal fade-out for other images (banner)
            currentImage.classList.remove('active');
        }

        setTimeout(() => {
            // Clean up current image
            currentImage.classList.remove('active', 'logo-fade-out');
            
            // Activate next image
            currentIndex = nextIndex;
            nextImage.classList.add('active');
        }, 600); // Match CSS transition
    }

    // Initial start
    images[currentIndex].classList.add('active');
    
    // Start the cycle
    setInterval(cycle, 4000);
});