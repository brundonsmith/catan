


// game logic
function addPlayer({ color, name }) {
    gameState.players.push({
        color,
        name,
        resources: {
            "wood": 0,
            "clay": 0,
            "stone": 0,
            "wheat": 0,
            "sheep": 0,
        }
    });
}

function rollDice({ player }) {
    const first = Math.ceil(Math.random() * 6);
    const second = Math.ceil(Math.random() * 6);
    const result = first + second;

    if (result === 7) {
        // TODO: thief
    } else {
        const relevantTiles = gameState.tiles.filter(tile => tile.number === result);
        
        for (const tile of relevantTiles) {
            const adjacentSettlements = [ /* TODO */ ];

            for (const settlement of adjacentSettlements) {
                const numberGained = settlement.isCity ? 2 : 1;

                gameState.players[settlement.owner].resources[tile.type] += numberGained;
            }
        }
    }
}

function buildSettlement({ settlement, player }) {
    gameState.settlementSlots[settlement] = {
        owner: player,
        color: gameState.players[player].color,
        isCity: false,
    };
}

function upgradeSettlement({ settlement }) {
    gameState.settlementSlots[settlement].isCity = true;
}

function buildRoad({ road, player }) {
    gameState.road[settlement] = {
        owner: player,
        color: gameState.players[player].color,
    };
}

function trade(a, b) {
    subtractResources(a.player, a.resources)
    addResources(a.player, b.resources)

    subtractResources(b.player, b.resources)
    addResources(b.player, a.resources)
}

function addResources(player, resources) {
    for (const [type, amount] of Object.entries(resources)) {
        gameState.players[player].resources[type] += amount;
    }
}

function subtractResources(player, resources) {
    for (const [type, amount] of Object.entries(resources)) {
        gameState.players[player].resources[type] -= amount;
    }
}

// init
function generateGameState() {
    return {
        ...generateBoardState(),
        players: [],
    }
}

function generateBoardState() {
    let tileTypesClone = TILE_TYPES.slice();
    let tileNumsClone = TILE_NUMS.slice();

    let tiles = [];
    let thiefTile = null;

    while (tileTypesClone.length > 0) {
        const tileTypeIndex = Math.floor(Math.random() * tileTypesClone.length);
        const type = tileTypesClone.splice(tileTypeIndex, 1);

        let number;

        if (type !== "desert") {
            const tileNumIndex = Math.floor(Math.random() * tileNumsClone.length);
            number = tileNumsClone.splice(tileNumIndex, 1);
        } else {
            number = null;
            thiefTile = tiles.length;
        }

        tiles.push({ type, number });
    }

    return {
        thiefTile,
        tiles,
        roadSlots: new Array(NUM_ROAD_SLOTS).fill(null),
        settlementSlots: new Array(NUM_SETTLEMENT_SLOTS).fill(null),
    }
}

function numberDots(tileNumber) {
    return 5 - Math.abs(7 - tileNumber);
}

const NUM_ROAD_SLOTS = 72;
const NUM_SETTLEMENT_SLOTS = 54;

const TILE_NUMS = Object.freeze([
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12
]);

const TILE_TYPES = Object.freeze([
    "clay",
    "clay",
    "clay",
    "desert",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "stone",
    "stone",
    "stone",
    "wheat",
    "wheat",
    "wheat",
    "wheat",
    "wood",
    "wood",
    "wood",
    "wood"
]);

const gameState = generateGameState();

module.exports = { gameState, addPlayer, rollDice, buildSettlement, upgradeSettlement, buildRoad }
