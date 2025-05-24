fetch("http://localhost:3002/entrenadores")
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#pokemon-table tbody");
    data.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.id}</td>
        <td>${p.nombre_entrenador}</td>
        <td>${p.tipo_especializa}</td>
        <td>${p.nombre_poke1}</td>
        <td>${p.nombre_poke2}</td>
        <td>${p.nombre_poke3}</td>
        <td>${p.nombre_poke4}</td>
        <td>${p.nombre_poke5}</td>
        <td>${p.nombre_poke6}</td>
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
