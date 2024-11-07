// Crear el botón "Volver arriba"
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = "Volver arriba";
    scrollButton.classList.add('scroll-up-btn');
    document.body.appendChild(scrollButton);
    
    // Mostrar el botón cuando se hace scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block'; // Mostrar botón
        } else {
            scrollButton.style.display = 'none'; // Ocultar botón
        }
    });

    // Funcionalidad de volver arriba al hacer clic
    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// Mostrar mensaje de confirmación al enviar el formulario
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario de manera tradicional
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('¡Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
        // Aquí puedes agregar la lógica para enviar los datos del formulario, si es necesario.
    }
});
// Espera a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el formulario
    const contactForm = document.querySelector('.contact-form');
    
    // Intercepta el evento de envío del formulario
    contactForm.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe y la página se recargue
        event.preventDefault();

        // Muestra el mensaje de confirmación en pantalla
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
        confirmationMessage.classList.add('confirmation-message');

        // Inserta el mensaje en el DOM, después del formulario
        contactForm.appendChild(confirmationMessage);
    });
});
