/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bike = [
    {nome: "Canyon", peso: 7},
    {nome: "Piranello", peso: 3},
    {nome: "Colnago", peso: 4},
    {nome: "Specialized", peso: 5},
    {nome: "Trek", peso: 6}
]
// object array

for (let nome in bike) {
    console.log(bike[nome]);
}
// controllare in log se l'object array funziona

let lightBike = bike[0]
// control variable
for (i = 0; i < bike.length; i++) {
    if (bike[i].peso < lightBike.peso) {
        lightBike = bike[i]
    }
}
// lightBike updates to the lightest bike in the array

console.log(`La bicicletta più leggera è la "${lightBike.nome}" con un peso di ${lightBike.peso}kg !`);

const lightBikeEl = document.getElementById("lightBike")

lightBikeEl.innerHTML = `La bicicletta più leggera è la "${lightBike.nome}" con un peso di ${lightBike.peso}kg !`
// add result in DOM 