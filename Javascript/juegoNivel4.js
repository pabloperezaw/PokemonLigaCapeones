let nivel = 4;

const usuario = localStorage.getItem('usuario');
if (!usuario) {
    alert("No puedes acceder a esta página porque no has iniciado sesión");
    window.location.href = '../Home/home.html'; // redirige al home si no hay una sesión activa    
}

// funcion que permte cerrar la sesión
function cerrarSesion() {
    localStorage.clear(); // o localStorage.removeItem('usuario');
    alert('Sesón cerrada corectamente');
    window.location.href = '../Home/home.html'; // o la ruta correcta
}

const playerTeam = [
    {
        name: "Drapion",
        hp: 344,
        at: 306,
        def: 350,
        moves: [
            { name: "Veneno X", damage: 70, tipo: 'Veneno'},
            { name: "Tijera X", damage: 80, tipo: 'Bicho'},
            { name: "Triturar", damage: 80, tipo: 'Siniestro' },
            { name: "Terremoto", damage: 100, tipo: 'Tierra' },
        ],
        tipoPrincipal: 'Veneno',
        tipoSecundario: 'Siniestro'
    },
    {
        name: "Dragonite",
        hp: 386,
        at: 403,
        def: 317,
        moves: [
            { name: "Velocidad Extrema", damage: 80, tipo: 'Normal' },
            { name: "Enfado", damage: 120, tipo: 'Dragon' },
            { name: "Vendaval", damage: 110, tipo: 'Volador' },
            { name: "Puño Fuego", damage: 75, tipo: 'Fuego' },
        ],
        tipoPrincipal: 'Volador',
        tipoSecundario: 'Dragon'
    },
    {
        name: "Gastrodon",
        hp: 426,
        at: 311,
        def: 289,
        moves: [
            { name: "Agua Lodosa", damage: 90, tipo: 'Agua' },
            { name: "Tierra Viva", damage: 90, tipo: 'Tierra' },
            { name: "Rayo Hielo", damage: 90, tipo: 'Hielo' },
            { name: "Bomba Lodo", damage: 90, Tipo: 'Veneno' },
        ],
        tipoPrincipal: 'Agua',
        tipoSecundario: 'Tierra'
    },
    {
        name: "Togekiss",
        hp: 374,
        at: 372,
        def: 361,
        moves: [
            { name: "Fuerza Lunar", damage: 95, tipo: 'Hada' },
            { name: "Tajo Aereo", damage: 75, tipo: 'Volador' },
            { name: "Psuiquico", damage: 90, tipo: 'Psiquico' },
            { name: "Esfera Aural", damage: 80, tipo: 'Lucha' },
        ],
        tipoPrincipal: 'Hada',
        tipoSecundario: 'Volador'
    },
    {
        name: "Ferropalmas",
        hp: 512,
        at: 416,
        def: 346,
        moves: [
            { name: "Cabeza de Hierro", damage: 80, tipo: 'Acero' },
            { name: "A Bocajarro", damage: 120, tipo: 'Lucha' },
            { name: "Puño Trueno", damage: 75, tipo: 'Electrico' },
            { name: "Puño Fuego", damage: 75, tipo: 'Fuego' },
        ],
        tipoPrincipal: 'Lucha',
        tipoSecundario: 'Electrico'
    },
    {
        name: "Sceptile",
        hp: 344,
        at: 439,
        def: 295,
        moves: [
            { name: "Energibola", damage: 90, tipo: 'Planta' },
            { name: "Pulso Dragon", damage: 85, tipo: 'Dragon' },
            { name: "Onda Certera", damage: 120, tipo: 'Lucha'},
            { name: "Hiperrayo", damage: 150, tipo: 'Normal'},
        ],
        tipoPrincipal: 'Planta',
        tipoSecundario: null
    }
];

const opponentTeam = [
    {
        name: "Alakazam",
        hp: 314,
        at: 405,
        def: 295,
        moves: [
            { name: "Psiquico", damage: 90, tipo: 'Psiquico' },
            { name: "Bola Sombra", damage: 80, tipo: 'Fantasma' },
            { name: "Onda Certera", damage: 120, tipo: 'Lucha' },
            { name: "Energibola", damage: 90, tipo: 'Planta' },
        ],
        tipoPrincipal: 'Psiquico',
        tipoSecundario: null
    },
    {
        name: "Indeedee",
        hp: 344,
        at: 317,
        def: 339,
        moves: [
            { name: "Psiquico", damage: 90, tipo: 'Psiquico' },
            { name: "Vozarron", damage: 90, tipo: 'Normal' },
            { name: "Bola Sombra", damage: 80, tipo: 'Fantasma' },
            { name: "Brillo Mágico", damage: 80, tipo: 'Hada' },
        ],
        tipoPrincipal: 'Psiquico',
        tipoSecundario: 'Normal'
    },
    {
        name: "Farigiraf",
        hp: 444,
        at: 350,
        def: 262,
        moves: [
            { name: "Laser Doble", damage: 80, tipo: 'Psiquico' },
            { name: "Brillo Mágico", damage: 80, tipo: 'Hada' },
            { name: "Bola Sombra", damage: 80, tipo: 'Fantasma' },
            { name: "Vozarrón", damage: 90, tipo: 'Normal' },
        ],
        tipoPrincipal: 'Psiquico',
        tipoSecundario: 'Normal'
    },
    {
        name: "Metagross",
        hp: 364,
        at: 405,
        def: 394,
        moves: [
            { name: "Puño Meteoro", damage: 90, tipo: 'Acero' },
            { name: "Cabezazo Zen", damage: 80, tipo: 'Psiquico' },
            { name: "Terremoto", damage: 100, tipo: 'Tierra' },
            { name: "Puño Hielo", damage: 75 },
        ],
        tipoPrincipal: 'Psiquico',
        tipoSecundario: 'Acero'
    },
    {
        name: "Gardevoir",
        hp: 340,
        at: 383,
        def: 361,
        moves: [
            { name: "Fuerza Lunar", damage: 95, tipo: 'Hada'},
            { name: "Psiquico", damage: 90, tipo: 'Psiquico' },
            { name: "Llama Embrujada", damage: 75, tipo: 'Fuego' },
            { name: "Rayo", damage: 90, tipo: 'Electrico' },
        ],
        tipoPrincipal: 'Psiquico',
        tipoSecundario: 'Hada'
    },
    {
        name: "Solgaleo",
        hp: 478,
        at: 410,
        def: 344,
        moves: [
            { name: "Meteoimpacto", damage: 100, tipo: 'Acero' },
            { name: "Cabezazo Zen", damage: 80, tipo: 'Psiquico'},
            { name: "Triturar", damage: 80, tipo: 'Siniestro' },
            { name: "Terremoto", damage: 100, tipo: 'Tierra' },
        ],
        tipoPrincipal: 'Psiquico',
        tipoSecundario: 'Acero'
    },
];

const typeChart = {
    Fuego: {
      Resistente: ['Planta', 'Hielo', 'Bicho', 'Acero', 'Fuego', 'Hada'],
      Debil: ['Agua', 'Roca', 'Tierra'],
      Inmune: [],
    },
    Agua: {
      Resistente: ['Acero', 'Agua', 'Fuego', 'Hielo'],
      Debil: ['Electrico', 'Planta'],
      Inmune: [],
    },
    Planta: {
      Resistente: ['Agua', 'Electrico', 'Tierra', 'Planta'],
      Debil: ['Fuego', 'Bicho', 'Veneno', 'Volador', 'Hielo'],
      Inmune: [],
    },
    Acero: {
        Resistente: ['Volador', 'Roca', 'Acero', 'Dragon', 'Hada', 'Hielo', 'Normal', 'Planta', 'Psiquico', 'Bicho'],
        Debil: ['Fuego', 'Lucha', 'Tierra'],
        Inmune: ['Veneno'],
    },
    Bicho: {
        Resistente: ['Lucha', 'Planta', 'Tierra'],
        Debil: ['Fuego', 'Roca', 'Volador'],
        Inmune: [],
    },
    Dragon: {
        Resistente: ['Agua', 'Planta', 'Fuego', 'Electrico'],
        Debil: ['Dragon', 'Hada', 'Hielo', 'Fuego'],
        Inmune: [],
    },
    Electrico: {
        Resistente: ['Acero', 'Volador', 'Electrico'],
        Debil: ['Tierra'],
        Inmune: [],
    },
    Fantasma: {
        Resistente: ['Bicho', 'Veneno'],
        Debil: ['Fantasma', 'Siniestro'],
        Inmune: ['Lucha', 'Normal'],
    },
    Hada: {
        Resistente: ['Bicho', 'Lucha', 'Siniestro'],
        Debil: ['Acero', 'Veneno'],
        Inmune: ['Dragon'],
    },
    Hielo: {
        Resistente: ['Hielo'],
        Debil: ['Acero', 'Fuego', 'Lucha', 'Roca'],
        Inmune: [],
    },
    Lucha: {
        Resistente: ['Bicho', 'Roca', 'Siniestro'],
        Debil: ['Hada', 'Psiquico', 'Volador'],
        Inmune: [],
    },
    Normal: {
        Resistente: [],
        Debil: ['Lucha'],
        Inmune: ['Fantasma'],
    },
    Psiquico: {
        Resistente: ['Lucha', 'Psiquico'],
        Debil: ['Bicho', 'Fantasma', 'Siniestro'],
        Inmune: [],
    },
    Roca: {
        Resistente: ['Volador', 'Veneno', 'Roca', 'Fuego'],
        Debil: ['Lucha', 'Acero', 'Agua', 'Planta', 'Tierra'],
        Inmune: [],
    },
    Siniestro: {
        Resistente: ['Fantasma', 'Siniestro'],
        Debil: ['Lucha', 'Hada', 'Bicho'],
        Inmune: ['Psiquico'],
    },
    Tierra: {
        Resistente: ['Roca', 'Veneno'],
        Debil: ['Agua', 'Hielo', 'Planta'],
        Inmune: ['Electrico'],
    },
    Veneno: {
        Resistente: ['Bicho', 'Veneno', 'Hada', 'Lucha', 'Planta'],
        Debil: ['Tierra', 'Psiquico'],
        Inmune: [],
    },
    Volador: {
        Resistente: ['Bicho', 'Lucha', 'Planta'],
        Debil: ['Electrico', 'Hielo', 'Roca'],
        Inmune: ['Tierra'],
    },
};

let currentPlayerIndex = 0;
let currentOpponentIndex = 0;

function logMessage(message) {
    const log = document.getElementById('battle-log');
    log.innerHTML += `<p style="text-align:center; color: white;">${message}</p>`;
    log.scrollTop = log.scrollHeight;
}

function updatePokemonDisplay() {
    const player = playerTeam[currentPlayerIndex];
    const opponent = opponentTeam[currentOpponentIndex];

    document.getElementById('nombre-tu-pokemon').textContent = player.name;
    document.getElementById('player-pokemon').innerHTML = `<img src="../../Media/Imagenes/${player.name}.gif" alt="${player.name}" style="width: 100px; height: 100px;">`;
    document.getElementById('player-hp').textContent = player.hp;

    document.getElementById('nombre-opp-pokemon').textContent = opponent.name;
    document.getElementById('opponent-pokemon').innerHTML = `<img src="../../Media/Imagenes/${opponent.name}.gif" alt="${opponent.name}" style="width: 100px; height: 100px;">`;
    document.getElementById('opponent-hp').textContent = opponent.hp;

    const movesDiv = document.getElementById('player-moves');
    movesDiv.innerHTML = '';
    player.moves.forEach((move) => {
        const button = document.createElement('button');
        button.className = 'btn btn-success m-1';
        button.textContent = move.name;
        button.onclick = () => playerMove(move.name, move.damage, move.tipo);
        movesDiv.appendChild(button);
    });
}

function stab(tipoMovimiento, tipo1, tipo2) {
    if (tipoMovimiento == tipo1 || tipoMovimiento == tipo2) {
        return 1.5;
    }
    return 1;
}

function Efectividad1(tipoPokemon, tipoMovimiento) {
    const moveType = typeChart[tipoPokemon];
    console.log(tipoPokemon);
    if (!moveType) {
      console.log('tipo no valido');
      return 1; // Tipo no válido, se considera neutro
    }

    if (moveType.Resistente.includes(tipoMovimiento)) return 0.5;      // Resiste
    if (moveType.Debil.includes(tipoMovimiento)) return 2;      // Super eficaz

    if (moveType.Inmune.includes(tipoMovimiento)) return 0;    // Inmunidad

    console.log('Ataque neutral');
    return 1; // Neutro
}

function Efectividad2(tipoPokemon, tipoMovimiento) {
    const moveType = typeChart[tipoPokemon];
    console.log(tipoPokemon);
    if (!moveType) {
      console.log('tipo no valido');
      return 1; // Tipo no válido, se considera neutro
    }
  
    if (moveType.Resistente.includes(tipoMovimiento)) return 0.5;      // Resiste
    if (moveType.Debil.includes(tipoMovimiento)) return 2;      // Super eficaz

    if (moveType.Inmune.includes(tipoMovimiento)) return 0;    // Inmunidad

    console.log('Ataque neutral');
    return 1; // Neutro
}

function playerMove(moveName, damage, tipoMovimiento) {
    let win = 0;
    let botonLevel = document.querySelector('.batalla');
    let botonLevel2 = document.querySelector('.batalla2');
    const player = playerTeam[currentPlayerIndex];
    const opponent = opponentTeam[currentOpponentIndex];

    if (player.hp <= 0 || opponent.hp <= 0) {
        logMessage("El combate ha terminado");
        return;
    }

    // Calculamos el daño del Stab del jugador
    let danoStabPropio = stab(tipoMovimiento, player.tipoPrincipal, player.tipoSecundario);

    // Calculamos el daño de efectividad del jugador
    let efect1Propio = Efectividad1(opponent.tipoPrincipal, tipoMovimiento);
    let efect2Propio = Efectividad2(opponent.tipoSecundario, tipoMovimiento);
    let efectividadTotPropio = efect1Propio * efect2Propio;
    console.log(efect1Propio + " " + efect2Propio + " " + efectividadTotPropio);

    // Ataque del jugador
    let playerDamage = 0.01 * danoStabPropio * efectividadTotPropio * 100 * ((0.2 * 100 + 1) * damage * player.at /*/ (25 * opponent.def) + 2*/);
    let oppoDefensa = (25 * opponent.def) + 2;
    let danoTotalJugador = playerDamage/oppoDefensa;
    let sinDecimales = parseInt(danoTotalJugador);  // Quitar los decimales

    console.log("Ataque del jugador = " + playerDamage);
    console.log("Defensa del enemigo = " + oppoDefensa);

    // mensajes que aparecen en el recuadro gris de la derecha informando de lo que se ha echo en cada jugada
    if (efectividadTotPropio >= 2) {
        logMessage(`Ha sido un ataque super efectivo. ${player.name} ha usado ${moveName}, ha hecho ${sinDecimales} de daño. `);
    }else if(efectividadTotPropio < 1 && efectividadTotPropio > 0){
        logMessage(`Ha sido un ataque poco eficaz. ${player.name} ha usado ${moveName}, ha hecho ${sinDecimales} de daño. `);
    }else if(efectividadTotPropio == 0){
        logMessage(`El ataque no ha tenido efecto. ${player.name} ha usado ${moveName}, ha hecho ${sinDecimales} de daño. `);
    }else{
        logMessage(`${player.name} ha usado ${moveName}, ha hecho ${sinDecimales} de daño. `);
    }

    //logMessage(`${player.name} ha usado ${moveName}, ha echo ${sinDecimales} de daño. `);
    opponent.hp -= sinDecimales;


    if (opponent.hp < 0) opponent.hp = 0;
    document.getElementById('opponent-hp').textContent = opponent.hp;

    if (opponent.hp <= 0) {
        currentOpponentIndex++;
        if (currentOpponentIndex >= opponentTeam.length) {
            logMessage("¡Campeon de tipo Psiquico se ha quedado sin Pokemon! ¡Has ganado el primer combate!");
            detenerTemporizador();
            win = 1;
            if (win == 1) {
                botonLevel.style.opacity = '1';
                botonLevel.style.pointerEvents = 'all';
            }
            // botonLevel.classList.remove('batalla')
            registrarPartida(nivel, segundos, usuario);
            return;
        } else {
            logMessage(`¡${opponent.name} ha sido debilitado! ¡Campeón de tipo Psiquico saca a ${opponentTeam[currentOpponentIndex].name}!`);
            updatePokemonDisplay();
            return;
        }
    }

    // Opponent attacks
    const opponentMove = opponent.moves[Math.floor(Math.random() * opponent.moves.length)];
    
    // Calculamos el daño del Stab del Rival
    let danoStabRival = stab(opponentMove.tipo, opponent.tipoPrincipal, opponent.tipoSecundario);

    // Calculamos el daño de efectividad del rival
    let efect1Rival = Efectividad1(player.tipoPrincipal, opponentMove.tipo);
    let efect2Rival = Efectividad2(player.tipoSecundario, opponentMove.tipo);
    let efectividadTotRival = efect1Rival * efect2Rival;
    console.log(efect1Rival + " " + efect2Rival + " " + efectividadTotRival);
    
    //danoTotalEnemigo = 0.01 * danoStabRival * efectividadTotRival * ((0.2 * 100 + 1) * opponentMove.damage * opponent.at /*/ (25 * player.def) + 2*/);
    let rivalDamage = 0.01 * danoStabRival * efectividadTotRival * 100 * ((0.2 * 100 + 1) * opponentMove.damage * opponent.at);
    let jugadorDefensa = (25 * player.def) + 2;
    let danoTotalEnemigo = rivalDamage/jugadorDefensa;
    let sinDecimales2 = parseInt(danoTotalEnemigo);  // Quitar los decimales
    console.log("Ataque del enemigo = " + rivalDamage);
    console.log("Defensa del jugador = " + jugadorDefensa);
    Math.round(sinDecimales2);
    
    // mensajes que aparecen en el recuadro gris de la derecha informando de lo que se ha echo en cada jugada
    if (efectividadTotRival >= 2) {
        logMessage(`Ha sido un ataque super efectivo. ${opponent.name} ha usado ${opponentMove.name}, ha hecho ${sinDecimales2} de daño. `);
    }else if(efectividadTotRival < 1 && efectividadTotRival > 0){
        logMessage(`Ha sido un ataque poco eficaz. ${opponent.name} ha usado ${opponentMove.name}, ha hecho ${sinDecimales2} de daño. `);
    }else if(efectividadTotRival == 0){
        logMessage(`El ataque no ha tenido efecto. ${opponent.name} ha usado ${opponentMove.name}, ha hecho ${sinDecimales2} de daño. `);
    }else{
        logMessage(`${opponent.name} ha usado ${opponentMove.name}, ha hecho ${sinDecimales2} de daño. `);
    }

    //logMessage(`${opponent.name} ha usado ${opponentMove.name}, ha echo ${sinDecimales2} de daño.`);
    player.hp -= sinDecimales2;
    
    if (player.hp < 0) player.hp = 0;
    document.getElementById('player-hp').textContent = player.hp;

    if (player.hp <= 0) {
        currentPlayerIndex++;
        if (currentPlayerIndex >= playerTeam.length) {
            logMessage("¡Todos tus Pokemon han sido debiltados! ¡No puedes seguir luchando! ¡Has perdido!");
            detenerTemporizador();
            win = 0;
            if (win == 0) {
                botonLevel2.style.opacity = '1';
                botonLevel2.style.pointerEvents = 'all';
            }
            return;
        } else {
            logMessage(`¡${player.name} ha sido debilitado! ¡${playerTeam[currentPlayerIndex].name} ha entrado al combate!`);
            updatePokemonDisplay();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menuDesplegar');

    toggle.querySelector('.submenuTitulo').addEventListener('click', (e) => {
        e.preventDefault(); // Previene el salto por href="#"
        toggle.classList.toggle('active');
    });
});

// variables usadas para crear el temporizador
let segundos = 0;
let temporizador = document.getElementById('temporizador');
let intervalo;

// funcion para iniciar el temporizador que comenzara cuando se habra la pagina
function iniciarTemporizador() {
    intervalo = setInterval(() => {
        segundos++;
        temporizador.textContent = "Tiempo: " + segundos + " segundos";
    }, 1000);
}

// funcion para detener el temporizador que se ejecuta cuando se pierde o se gana la partida
function detenerTemporizador() {
    clearInterval(intervalo);
}

// Empezamos el temporizador
iniciarTemporizador();

// guardar la partida
async function registrarPartida(nivel, tiempo, usuario) {
    try {
      const respuesta = await fetch('http://localhost:3000/guardar-partida', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nivel: nivel,
          tiempo_segundos: tiempo,
          usuario: usuario
        })
      });

      const resultado = await respuesta.json();
      if (resultado.exito) {
        alert('Partida registrada correctamente.');
      } else {
        alert('Hubo un error al registrar la partida.');
      }
    } catch (error) {
      console.error(error);
      alert('Error al conectar con el servidor.');
    }
}

// Iniiciar el combate
updatePokemonDisplay();
