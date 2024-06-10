import Fila from "./fila.js";

main();

function main() {
    // Latidude, Longitude
    const coords = [
        [-23.557987, -46.661759], // SPTech
        [-23.561643, -46.656101], // MASP
        [-23.556233, -46.662107], // IMS
        [-23.530335, -46.631765], // MAS - Museu de Arte Sacra
        [-23.560505, -46.672092] // Estação Oscar Freire
    ];

    const mDistance = matrizDeDistancia(coords)

    tsp(mDistance)
}

function matrizDeDistancia(coords) {
    // Matriz quadrada equivalente a coords.length
    const distanceMatrix = new Array(coords.length).fill(0).map(() => Array(coords.length).fill(0));

    for (let i = 0; i < distanceMatrix.length; i++) { // Linhas
        for (let j = 0; j < distanceMatrix[0].length; j++) { // Colunas
            distanceMatrix[i][j] = haversine(coords[i][0], coords[i][1], coords[j][0], coords[j][1])
        }
    }

    return distanceMatrix;
}

// Fórmula de haversine
function haversine(lat1, lon1, lat2, lon2) {

    const earthRadius = 6378.137; // Km
    const rLat1 = toRad(lat1);
    const rLon1 = toRad(lon1);
    const rLat2 = toRad(lat2);
    const rLon2 = toRad(lon2);

    // https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_haversine
    var d = 2 * earthRadius * Math.asin(Math.sqrt(Math.pow(Math.sin((rLat2 - rLat1) / 2), 2) + Math.cos(rLat1) * Math.cos(rLat2) * Math.pow(Math.sin((rLon2 - rLon1) / 2), 2)))

    return d;
}

function toRad(n) {
    return n * Math.PI / 180
}

function tsp(matrix) {
    const start = 0; // The index of the starting point on the arrCoordinates array
    var previous = start;

    const bestRoute = new Fila();
    bestRoute.insert(start);
    var cost = 0;

    while (bestRoute.size() != matrix.length) {

        var closest = start;
        previous = bestRoute.previous();

        const row = matrix[previous]; // Array
        // console.log("matrix[previous]: " + matrix[previous])
        // console.log("row: " + row)

        for (var i = 0; i < row.length; i++) {

            // console.log("Antes do IF")
            // console.log(`row[${i}] != 0 (${row[i] != 0})`)
            // console.log(`bestRoute.indexOf(${i}) == -1 (${bestRoute.indexOf(i) == -1})\n`)

            if (row[i] != 0 && bestRoute.indexOf(i) == -1) {

                if (closest == 0) {
                    // console.log("Primeira iteração")
                    // console.log(`Menor valor = ${row[i]}\n`)
                    closest = i;
                } else {
                    if (row[i] < row[closest]) {
                        // console.log(`row[${i}] < closest (${row[i] < row[closest]})`)
                        // console.log(`Menor valor = ${row[i]}\n`)
                        closest = i;
                    }
                }
            }

        }
        // console.log("Fim do FOR\n")
        bestRoute.insert(closest);
        cost += row[closest]
        // console.log(`bestRoute = ${bestRoute}\n`);
    }

    // console.log("Acabou")
    console.log(`Melhor rota = ${bestRoute.toString()}`);
    console.log(`Custo total = ${cost}`)
}
