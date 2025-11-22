// Scroll suave a una sección por id
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Año dinámico en el footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Menú móvil
    const toggle = document.getElementById("navbarToggle");
    const mobileMenu = document.getElementById("navbarMobile");

    if (toggle && mobileMenu) {
        toggle.addEventListener("click", () => {
            const isVisible = mobileMenu.style.display === "flex";
            mobileMenu.style.display = isVisible ? "none" : "flex";
        });
    }
});

// Cerrar menú móvil al hacer clic en un enlace
function closeMobileMenu() {
    const mobileMenu = document.getElementById("navbarMobile");
    if (mobileMenu) {
        mobileMenu.style.display = "none";
    }
}

// Manejar envío del formulario (demo)
//function handleFormSubmit(event) {
//    event.preventDefault();

//    alert("Esta es una demo. Aquí podrías conectar el formulario a tu correo, WhatsApp o un servicio externo.");

    // Opcional: resetear el formulario
//    event.target.reset();
//}
