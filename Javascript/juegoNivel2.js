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
        name: "Tyranitar",
        hp: 404,
        at: 403,
        def: 350,
        moves: [
            { name: "Roca Afilada", damage: 100, tipo: 'Roca' },
            { name: "Terremoto", damage: 100, tipo: 'Tierra' },
            { name: "Triturar", damage: 80, tipo: 'Siniestro' },
            { name: "Colmillo Rayo", damage: 65, tipo: 'Electrico'},
        ],
        tipoPrincipal: 'Roca',
        tipoSecundario: 'Siniestro'
    },
    {
        name: "Arcanine Hisui",
        hp: 344,
        at: 339,
        def: 383,
        moves: [
            { name: "Erupcion de Ira", damage: 120, tipo: 'Fuego' },
            { name: "Avalancha", damage: 75, tipo: 'Roca' },
            { name: "Triturar", damage: 80, tipo: 'Siniestro' },
            { name: "Voltio Cruel", damage: 90, tipo: 'Electrico' },
        ],
        tipoPrincipal: 'Roca',
        tipoSecundario: 'Fuego'
    },
    {
        name: "Garganacl",
        hp: 404,
        at: 328,
        def: 394,
        moves: [
            { name: "Salazon", damage: 75, tipo: 'Roca' },
            { name: "Machada", damage: 100, tipo: 'Lucha' },
            { name: "Terremoto", damage: 100, tipo: 'Tierra' },
            { name: "Puño Trueno", damage: 75, tipo: 'Electrico' },
        ],
        tipoPrincipal: 'Roca',
        tipoSecundario: null
    },
    {
        name: "Aerodactyl",
        hp: 340,
        at: 262,
        def: 399,
        moves: [
            { name: "Terremoto", damage: 100, tipo: 'Tierra' },
            { name: "Roca Afilada", damage: 100, tipo: 'Roca' },
            { name: "Cabeza de Hierro", damage: 80, tipo: 'Acero'},
            { name: "Golpe Aereo", damage: 60, tipo: 'Volador' },
        ],
        tipoPrincipal: 'Roca',
        tipoSecundario: 'Volador'
    },
    {
        name: "Glimmora",
        hp: 370,
        at: 394,
        def: 306,
        moves: [
            { name: "Onda Toxica", damage: 90, tipo: 'Veneno' },
            { name: "Joya de Luz", damage: 80, tipo: 'Roca' },
            { name: "Brillo Mágico", damage: 80, tipo: 'Hada' },
            { name: "Energibola", damage: 90, tipo: 'Planta' },
        ],
        tipoPrincipal: 'Roca',
        tipoSecundario: 'Veneno'
    },
    {
        name: "Ogerpon Cimiento",
        hp: 364,
        at: 372,
        def: 320,
        moves: [
            { name: "Garrote Liana", damage: 100, tipo: 'Planta' },
            { name: "Fuerza Bruta", damage: 120, tipo: 'Lucha' },
            { name: "Golpe Mordaza", damage: 80, tipo: 'Siniestro' },
            { name: "Teraexplosión de Tipo Roca", damage: 80, tipo: 'Roca'},
        ],
        tipoPrincipal: 'Roca',
        tipoSecundario: 'Planta'
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
    //log.innerHTML += `<p>${message}</p>`;
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
        logMessage("The battle is already over!");
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

    logMessage(`${player.name} ha usado ${moveName}, ha echo ${sinDecimales} de daño. `);
    opponent.hp -= sinDecimales;


    if (opponent.hp < 0) opponent.hp = 0;
    document.getElementById('opponent-hp').textContent = opponent.hp;

    if (opponent.hp <= 0) {
        currentOpponentIndex++;
        if (currentOpponentIndex >= opponentTeam.length) {
            logMessage("¡Campeon de tipo Hielo se ha quedado sin Pokemon! ¡Has ganado el primer combate!");
            win = 1;
            if (win == 1) {
                botonLevel.style.opacity = '1';
                botonLevel.style.pointerEvents = 'all';
            }
            // botonLevel.classList.remove('batalla')
            return;
        } else {
            logMessage(`¡${opponent.name} ha sido debilitado! ¡Campeón de tipo Bicho saca a ${opponentTeam[currentOpponentIndex].name}!`);
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
    
    logMessage(`${opponent.name} ha usado ${opponentMove.name}, ha echo ${sinDecimales2} de daño.`);
    player.hp -= sinDecimales2;
    
    if (player.hp < 0) player.hp = 0;
    document.getElementById('player-hp').textContent = player.hp;

    if (player.hp <= 0) {
        currentPlayerIndex++;
        if (currentPlayerIndex >= playerTeam.length) {
            logMessage("¡Todos tus Pokemon han sido debiltados! ¡No puedes seguir luchando! ¡Has perdido!");
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
// Iniiciar el combate
updatePokemonDisplay();