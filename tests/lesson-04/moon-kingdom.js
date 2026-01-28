/* Bài 1 */

// 1st way
function createCharacters() {
    const characters = [
        { name: "Thor", level: 2, health: 1100 },
        { name: "Iron Man", level: 3, health: 900 },
        { name: "Doctor Strange", level: 4, health: 300 },
        { name: "Loki", level: 1, health: 200 },
    ];

    const charactersPowerUp = characters.map(({ name, level, health }) => ({
        name: name.toUpperCase(),
        level: level * 2,
        health: health * 3
    }));

    const possibleWinners = charactersPowerUp.filter(({ health }) => health > 1000);

    return { charactersPowerUp, possibleWinners };
}
console.log(createCharacters());
console.log("________________");

// 2nd way
function createCharacters2() {
    const characters = [
        { name: "Lisa", level: 2, health: 1100 },
        { name: "Jenny", level: 3, health: 300 },
        { name: "Jisoo", level: 4, health: 1000 },
        { name: "Rose", level: 1, health: 200 },
    ];

    const charactersPowerUp = characters.map(cha => ({
        name: cha.name.toUpperCase(),
        level: cha.level * 2,
        health: cha.health * 3
    }));

    const possibleWinners = charactersPowerUp.filter(cha => cha.health > 1000);

    return { charactersPowerUp, possibleWinners };
}
console.log(createCharacters2());
console.log("________________");

/*  Bài 2 */
const players = [
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 },
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 }
]

// 1st way
function printLeaderboard(players) {
    const sortedPlayers = players.sort((a, b) => b.score - a.score);

    for (let i = 0; i < sortedPlayers.length; i++) {
        let medal = " ";
        if (i === 0) {
            medal = "🥇";
        } else if (i === 1) {
            medal = "🥈";
        } else if (i === 2) {
            medal = "🥉";
        }

        console.log(`${medal} ${i + 1}. ${sortedPlayers[i].name} - ${sortedPlayers[i].score} pts`);
    }
}

printLeaderboard(players);
console.log("________________");

// 2nd way
function printLeaderboard2(players) {
    const sortedPlayers = players.sort((a, b) => b.score - a.score);

    sortedPlayers.forEach((player, index) => {
        let medal = " ";
        switch (index) {
            case 0: medal = "🥇";
                break;
            case 1: medal = "🥈";
                break;
            case 2: medal = "🥉";
                break;
            default: medal = " ";
        };

        console.log(`${medal} ${index + 1}. ${player.name} - ${player.score} pts`);
    });
}

printLeaderboard2(players);
console.log("________________");
// 3rd way
function printLeaderboard3(players) {
    const sortedPlayers = players.sort((a, b) => b.score - a.score);

    for (let index in sortedPlayers) {
        const i = Number(index); // convert to number ( for ... in return index is string type)

        let medal = " ";
        if (i === 0) {
            medal = "🥇";
        } else if (i === 1) {
            medal = "🥈";
        } else if (i === 2) {
            medal = "🥉";
        }

        console.log(`${medal} ${i+1}. ${sortedPlayers[index].name} - ${sortedPlayers[index].score} pts`);
    }
}

printLeaderboard3(players);
