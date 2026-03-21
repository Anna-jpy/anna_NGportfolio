// Smooth Scroll Navigation
// This script smooth scrolls to anchors on the page

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Effects
// Example: Changing the background color of an element on hover
const elements = document.querySelectorAll('.interactive');
elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = '#ffcc00';
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = '';
    });
});