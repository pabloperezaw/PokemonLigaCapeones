document.getElementById('formulario-login').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Enviamos el usuario al servidor para que nos devuelva los datos del usuario
    try {
        const res = await fetch('http://localhost:3000/getUser?username=' + encodeURIComponent(username));
        if (!res.ok) throw new Error('Error en la consulta al servidor');

        const data = await res.json();

        if (!data) {
            alert('Usuario no encontrado');
            return;
        }

        // Aquí haces la comprobación de contraseña en el front
        if (data.contrasena === password) {
            alert('Login realizado con exito');

            localStorage.setItem('usuario', data.nombre);
            // redireccion
            //window.location.href = '../Nivel1/nivel1.html';
            if (data.nivel > 4) {
                window.location.href = "../Nivel1/nivel1.html";
            } else {
                window.location.href = `../Nivel${data.nivel+1}/nivel${data.nivel+1}.html`;
            }
            
        } else {
            alert('Contraseña incorrecta');
        }

        console.log('Contraseña del input:', password);
        console.log('Contraseña de la base de datos:', data.contrasena);
        console.log('Nivel guardado', data.nivel);

    } catch (error) {
        alert('Error al conectarse al servidor: ' + error.message);
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const toggle = document.querySelector('.menuDesplegar');

//     toggle.querySelector('.submenuTitulo').addEventListener('click', (e) => {
//         e.preventDefault(); // Previene el salto por href="#"
//         toggle.classList.toggle('active');
//     });
// });
