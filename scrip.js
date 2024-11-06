// Seleccionar todos los enlaces de la barra de navegación
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces

        const targetId = link.getAttribute("href"); // Obtener el id de la sección
        const targetElement = document.querySelector(targetId); // Buscar el elemento con ese id

        // Desplazarse suavemente hacia la sección
        targetElement.scrollIntoView({
            behavior: "smooth", // Desplazamiento suave
            block: "start" // Alineación en la parte superior
        });
    });
});
