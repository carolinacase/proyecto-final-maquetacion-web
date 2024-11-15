document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navbar');

    if (menuIcon && navlist) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        };
    } else {
        console.error("Elementos no encontrados: #menu-icon o .navbar");
    }
});

const revealEffect = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
});

revealEffect.reveal('.hero-text', { delay: 200, origin: 'top' });
revealEffect.reveal('.hero-img', { delay: 450, origin: 'top' });
revealEffect.reveal('.icons', { delay: 500, origin: 'left' });
revealEffect.reveal('.scroll-down', { delay: 450, origin: 'right' });


const navbar = document.querySelector('.navbar');  // Selecciona el elemento <ul> con la clase 'navbar'

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelectorAll('.circle').forEach(link => {
    link.addEventListener('click', () => {
      console.log(`Has hecho clic en ${link.textContent}`);
    });
  });
  
function copyEmail() {
    const email = document.getElementById("email-display").textContent;
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copiado al portapapeles");
    });
}

function sendEmail() {
    const email = document.getElementById("email-display").textContent;
    window.location.href = `mailto:${email}?subject=Contacto%20desde%20tu%20portafolio`;
}
