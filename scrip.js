const menu = document.querySelector('#menu-icon')
const navlist = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
})

sr.revel('.hero-text',{delay: 200, origin:'top'})
sr.revel('.hero-img',{delay: 450, origin:'top'})
sr.revel('.icons',{delay: 500, origin:'left'})
sr.revel('.scroll-down',{delay: 450, origin:'right'})

const navbar = document.querySelector('.navbar');  // Selecciona el elemento <ul> con la clase 'navbar'

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('.scrolled');  // Agrega la clase 'scrolled' cuando el scroll es mayor a 50px
    } else {
        navbar.classList.remove('.scrolled');  // Remueve la clase 'scrolled' cuando el scroll es menor a 50px
    }
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
  