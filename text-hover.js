// Mouse-based 3D perspective effect for text
document.addEventListener('DOMContentLoaded', function () {
    const figure = document.getElementById('title-container');
    const hero = document.querySelector('.hero');

    if (!figure || !hero) return;

    // Add mousemove event listener to the hero section
    hero.addEventListener('mousemove', function (e) {
        // Get the bounding rectangle of the hero section
        const rect = hero.getBoundingClientRect();

        // Calculate mouse position relative to the hero section (0 to 1)
        const x = (e.clientX - rect.left) / rect.width;  // 0 (left) to 1 (right)
        const y = (e.clientY - rect.top) / rect.height;   // 0 (top) to 1 (bottom)

        // Convert to -1 to 1 range for more natural rotation
        const normalizedX = (x - 0.5) * 2; // -1 (left) to 1 (right)
        const normalizedY = (y - 0.5) * 2; // -1 (top) to 1 (bottom)

        // Calculate rotation angles (inverted Y for natural feel)
        const maxRotation = 40; // Maximum rotation in degrees
        const rotateY = normalizedX * maxRotation; // Horizontal mouse movement affects Y-axis rotation
        const rotateX = -normalizedY * maxRotation; // Vertical mouse movement affects X-axis rotation

        // Apply the transform
        figure.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset to neutral position when mouse leaves
    hero.addEventListener('mouseleave', function () {
        figure.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });

    // Optional: set initial state when page loads
    figure.style.transition = 'transform 0.1s ease-out';
});
