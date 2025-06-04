document
  .getElementById("formulario-registro")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("nombre").value.trim();
    const email = document.getElementById("gmail").value.trim();
    const password = document.getElementById("contrasena").value.trim();

    // Validación de contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "La contraseña debe tener entre 8 y 12 caracteres, incluir al menos una letra mayúscula y un número."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Usuario registrado con éxito");
        window.location.href = "../Nivel1/nivel1.html"; // Redirige al login si quieres
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al conectar con el servidor");
    }
});
