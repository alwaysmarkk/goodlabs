// script.js (cały kod, nadpisz nim istniejący script.js)

// --- Obsługa aktywnej sekcji w nawigacji ---
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function activateNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Sprawdzamy, czy górna krawędź sekcji jest widoczna lub jest powyżej okna przeglądarki
            // Dostosowujemy o margines na wysokość nagłówka/nawigacji, jeśli jest sticky
            const offset = 100; // Dopasuj ten offset, jeśli nawigacja jest sticky
            if (pageYOffset >= sectionTop - offset) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Aktywuj przy ładowaniu strony
});

// --- Obsługa przycisku "Scroll to Top" ---
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Pokaż/ukryj przycisk w zależności od przewinięcia strony
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Pokaż przycisk po przewinięciu 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Płynne przewijanie do góry po kliknięciu
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// --- Obsługa przełączania formularzy logowania/rejestracji ---
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');

    if (showRegisterLink && showLoginLink) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault(); // Zapobiega przewijaniu strony
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });

        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault(); // Zapobiega przewijaniu strony
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        });
    }
});