document.addEventListener('DOMContentLoaded', () => {
    // Style the image container
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.textAlign = 'center'; // Centers the image horizontally
    imageContainer.style.padding = '10px';
    imageContainer.style.backgroundColor = '#f4f4f4';
    imageContainer.style.border = '2px solid #ddd';
    imageContainer.style.borderRadius = '10px';
    imageContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    imageContainer.style.width = '80%';
    imageContainer.style.margin = '20px auto';
    imageContainer.style.margin = '50px auto 20px'; // Added top margin of 40px, bottom margin of 20px

    // Style the image
    const image = document.getElementById('right-image');
    image.style.maxWidth = '100%';
    image.style.height = 'auto';
    image.style.display = 'block';
    image.style.margin = '0 auto';

    // Image switcher
    const images = ['images/1.jpg' , 'images/2.jpg', 'images/3.jpg'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    }, 3000); // Change image every 3 seconds
});
