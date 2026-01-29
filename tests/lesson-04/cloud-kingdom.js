let powerUp = 'mushroom';
let effect = '';

// 1st way: if ... else
if(powerUp === 'mushroom') {
    effect = 'Mario becomes Super!';
} else if(powerUp === 'flower') {
    effect = 'Mario can shoot fireballs!';
} else if(powerUp === 'star') {
    effect = 'Mario is invincible!';
} else if(powerUp === 'none') {
    effect = 'Mario is normal';
} else { 
    effect = 'Unknown power-up';
}
console.log(effect);

// 2nd way: if
let effect2 = '';

if(powerUp === 'mushroom') {
    effect2 = 'Mario becomes Super!';
}
if(powerUp === 'flower') {
    effect2 = 'Mario can shoot fireballs!';
}
if(powerUp === 'star') {
    effect2 = 'Mario is invincible!';
}
if(powerUp === 'none') {
    effect2 = 'Mario is normal';
}
if(powerUp !== 'mushroom' && powerUp !== 'flower' && powerUp !== 'star' && powerUp !== 'none') {
    effect2 = 'Unknown power-up';
}
console.log(effect2);

// 3rd way: ternary operator
let effect3 = powerUp === 'mushroom' ? 'Mario becomes Super!' : 
              powerUp === 'flower' ? 'Mario can shoot fireballs!' : 
              powerUp === 'star' ? 'Mario is invincible!' : 
              powerUp === 'none' ? 'Mario is normal' : 'Unknown power-up';
console.log(effect3);

// 4th way: swith ... case
let effect4 = "";

switch (powerUp) {
    case "mushroom":
        effect4 = "Mario becomes Super!";
        break;
    case "flower":
        effect4 = "Mario can shoot fireballs!";
        break;
    case "star":
        effect4 = "Mario is invincible!";
        break;
    case "none":
        effect4 = "Mario is normal";
        break;
    default:
        effect4 = "Unknown power-up";
}

console.log(effect4);