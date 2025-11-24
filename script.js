// Main JavaScript for Epicure Express

document.addEventListener('DOMContentLoaded', function() {
    // Menu category switching functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-amber-600', 'text-white');
                btn.classList.add('bg-amber-100', 'text-amber-700');
            });
            
            this.classList.add('active', 'bg-amber-600', 'text-white');
            this.classList.remove('bg-amber-100', 'text-amber-700');

            // Show target category
            menuCategories.forEach(category => {
                category.classList.add('hidden');
                category.classList.remove('active');
            });

            const targetElement = document.getElementById(targetCategory);
            if (targetElement) {
                targetElement.classList.remove('hidden');
                targetElement.classList.add('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Handle reservation button click
    const reservationBtn = document.querySelector('button:contains("Réserver")');
    if (reservationBtn) {
        reservationBtn.addEventListener('click', function() {
            alert('Notre système de réservation sera bientôt disponible ! En attendant, vous pouvez nous appeler au 01 23 45 67 89.');
        });
    }
});

// Utility function to check if element contains text (for reservation button)
Element.prototype.contains = function(text) {
    return this.textContent.includes(text);
};