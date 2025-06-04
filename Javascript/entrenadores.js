fetch("http://localhost:3000/entrenadores")
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#pokemon-table tbody");
    data.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.nombre_entrenador}</td>
        <td>${p.tipo_especializa}</td>
        <td>${p.pokemon_equipo}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menuDesplegar');

    toggle.querySelector('.submenuTitulo').addEventListener('click', (e) => {
        e.preventDefault(); // Previene el salto por href="#"
        toggle.classList.toggle('active');
    });
});
