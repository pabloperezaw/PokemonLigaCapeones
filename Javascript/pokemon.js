fetch("http://localhost:3000/pokemones")
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#pokemon-table tbody");
    data.forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>${p.tipo_principal}</td>
        <td>${p.tipo_secundario}</td>
        <td>${p.vida}</td>
        <td>${p.ataque}</td>
        <td>${p.defensa}</td>
        <td>${p.velocidad}</td>
        <td>${p.mov1}</td>
        <td>${p.mov2}</td>
        <td>${p.mov3}</td>
        <td>${p.mov4}</td>
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