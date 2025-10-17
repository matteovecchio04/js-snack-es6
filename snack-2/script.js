/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {name: "Roma", punti: 0, falliSubiti: 0},
    {name: "Napoli", punti: 0, falliSubiti: 0},
    {name: "Milan", punti: 0, falliSubiti: 0},
    {name: "Inter", punti: 0, falliSubiti: 0},
    {name: "Hellas Verona", punti: 0, falliSubiti: 0},
    {name: "Juventus", punti: 0, falliSubiti: 0}
]
// object array

for (let club of teams) {
    club.punti = Math.floor(Math.random() * 108)
    club.falliSubiti = Math.floor(Math.random() * 50)
}
// generate random points and fouls 

const squadreFalli = teams.map(club => {
    return {
        name: club.name,
        falliSubiti: club.falliSubiti
    }
})
// new array in which the elements cointain only the name of the teams and how many fouls they've earned

console.log(teams);
console.log(squadreFalli);

