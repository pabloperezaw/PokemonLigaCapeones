document.getElementById('formulario-registro').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('nombre').value.trim();
  const email = document.getElementById('gmail').value.trim();
  const password = document.getElementById('contrasena').value.trim();

  try {
    const response = await fetch('http://localhost:3000/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();

    if (response.ok) {
      alert('Usuario registrado con éxito');
      window.location.href = '../Nivel1/nivel1.html'; // Redirige al login si quieres
    } else {
      alert('Error: ' + result.error);
    }
  } catch (error) {
    console.error('Error al registrar:', error);
    alert('Error al conectar con el servidor');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menuDesplegar');

    toggle.querySelector('.submenuTitulo').addEventListener('click', (e) => {
        e.preventDefault(); // Previene el salto por href="#"
        toggle.classList.toggle('active');
    });
});