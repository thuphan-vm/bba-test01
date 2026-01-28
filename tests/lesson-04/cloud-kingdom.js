let playerName = "Mario";
let currentLives = 3;

const COIN_LEVEL_1 = 25;
const COIN_LEVEL_2 = 30;
const COIN_LEVEL_3 = 45;

// 1st way
// Total coin
let totalCoin = COIN_LEVEL_1 + COIN_LEVEL_2 + COIN_LEVEL_3;

// Average coin
let averageCoin = totalCoin / 3;

// REMAIN COIN 
let remainCoin = totalCoin % 3;

// output
console.log(`Total coins: ${totalCoin}`);
console.log(`Average coins: ${averageCoin}`);
console.log(`1st way - Remaining coins when total coins devided by 3: ${remainCoin}`);

// 2nd way - creat function
function calculate(l1, l2, l3) {
    let totalCoin2 = COIN_LEVEL_1 + COIN_LEVEL_2 + COIN_LEVEL_3;
    let averageCoin2 = totalCoin2 / 3;
    let remainCoin2 = totalCoin2 % 3;
    return remainCoin2; 
}
console.log(`2nd way - Remaining coins when total coins devided by 3: ${calculate(COIN_LEVEL_1, COIN_LEVEL_2, COIN_LEVEL_3)}`);
