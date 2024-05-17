const toggleButton = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelectorAll('.navbar a');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navbarLinks.forEach(link => {
        link.classList.toggle('active');
    });
});

