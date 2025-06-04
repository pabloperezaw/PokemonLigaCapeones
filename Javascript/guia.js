document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menuDesplegar');

    toggle.querySelector('.submenuTitulo').addEventListener('click', (e) => {
        e.preventDefault(); // Previene el salto por href="#"
        toggle.classList.toggle('active');
    });
});