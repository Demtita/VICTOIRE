// Scripts JavaScript pour le portfolio

document.addEventListener("DOMContentLoaded", () => {
    // Fonctionnalité pour les liens de navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ajouter un effet de surbrillance sur la section active lors du défilement
    const sections = document.querySelectorAll('section');

    const highlightSection = () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightSection);

    // Initialiser l'effet au chargement
    highlightSection();
});
