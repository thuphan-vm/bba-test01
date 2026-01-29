let playerName = "Mario";
let currentLives = 3;

const COIN_LEVEL_1 = 25;
const COIN_LEVEL_2 = 30;
const COIN_LEVEL_3 = 45;

// 1st way
// Total coin
const totalCoin = COIN_LEVEL_1 + COIN_LEVEL_2 + COIN_LEVEL_3;

// Average coin
const averageCoin = totalCoin / 3;

// REMAIN COIN 
const remainCoin = totalCoin % 3;

// output
console.log(`Total coins: ${totalCoin}`);
console.log(`Average coins: ${averageCoin}`);
console.log(`Remaining coins when total coins devided by 3: ${remainCoin}`);
console.log("________________________________");

// 2nd way - create function
function calculateCoin(l1, l2, l3) {
    const totalCoin2 = l1 + l2 + l3;
    const averageCoin2 = totalCoin2 / 3;
    const remainCoin2 = totalCoin2 % 3;
    console.log(`Total coins: ${totalCoin2}`);
    console.log(`Average coins: ${averageCoin2}`);
    console.log(`Remaining coins when total coins devided by 3: ${remainCoin2}`);
    console.log("___________________________");
}
calculateCoin(COIN_LEVEL_1, COIN_LEVEL_2, COIN_LEVEL_3);

// 3rd way - use array, utils reduce
const coinArray = [COIN_LEVEL_1, COIN_LEVEL_2, COIN_LEVEL_3];
const totalCoin3 = coinArray.reduce((sum, coin) => sum + coin, 0);
const averageCoin3 = totalCoin3 / coinArray.length;
const remainCoin3 = totalCoin3 % coinArray.length;
console.log(`Total coins: ${totalCoin3}`);
console.log(`Average coins: ${averageCoin3}`);
console.log(`Remaining coins when total coins devided by 3: ${remainCoin3}`);
