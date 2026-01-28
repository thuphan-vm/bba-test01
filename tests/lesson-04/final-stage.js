//1st way
function findPairsDivisibleBy17() {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j}) = ${i+j}`);
                count++;
            }
        }
    }
    console.log(`Total pairs: ${count}`);
}
findPairsDivisibleBy17();
console.log("____________________________");

//2nd way
function findPairsDivisibleBy17_2() {
    const pairArray = [];

    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                pairArray.push(`(${i}, ${j})`)
            }
        }
    }
    // pairArray.forEach(pair => console.log(pair));
    console.log(`Total pairs: ${pairArray.length}`);
}
findPairsDivisibleBy17_2();