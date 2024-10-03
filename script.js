// Log test to make sure JavaScript is working
console.log("JavaScript Loaded");

// Testing basic functionality for heart animations
const heartsContainer = document.getElementById('hearts');

// Simple heart animation generator
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);  // remove after animation
}, 1000);
