// Scroll suave a una sección por id
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Año dinámico en el footer + menú móvil + galerías
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

    // Galerías de artículos
    const galleries = document.querySelectorAll("[data-gallery]");

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll(".gallery-images img");
        const prevBtn = gallery.querySelector(".gallery-nav.prev");
        const nextBtn = gallery.querySelector(".gallery-nav.next");
        let currentIndex = 0;

        if (!images.length || !prevBtn || !nextBtn) return;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle("active", i === index);
            });
        }

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    });
});

// Cerrar menú móvil al hacer clic en un enlace
function closeMobileMenu() {
    const mobileMenu = document.getElementById("navbarMobile");
    if (mobileMenu) {
        mobileMenu.style.display = "none";
    }
}

// (La función de formulario de demo se queda comentada por si la quieres en el futuro)
//function handleFormSubmit(event) {
//    event.preventDefault();
//
//    alert("Esta es una demo. Aquí podrías conectar el formulario a tu correo, WhatsApp o un servicio externo.");
//
//    // Opcional: resetear el formulario
//    event.target.reset();
//}
