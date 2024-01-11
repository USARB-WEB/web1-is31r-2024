console.log('FOR');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('WHILE');
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log('DO WHILE');
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10)


const number = 0;

if (number > 0) {
    console.log(`Pozitive number = ${number}`)
} else if(number < 0) {
    console.log(`Negative number = ${number}`)
} else {
    console.log(`Zero`)
}

console.log("IF ELSE");
const digit = 11;

if(digit === 0){
    console.log(`Zero`)
} else if(digit === 1){
    console.log(`One`)
} else if(digit === 2){
    console.log(`Two`)
} else if(digit === 3){
    console.log(`Three`)
} else if(digit === 4){
    console.log(`Four`)
} else if(digit === 5){
    console.log(`Five`)
} else if(digit === 6){
    console.log(`Six`)
} else if(digit === 7){
    console.log(`Seven`)
} else if(digit === 8){
    console.log(`Eight`)
} else if(digit === 9){
    console.log(`Nine`)
} else {
    console.log(`Not a digit`)
}

switch(digit){
    case 0:
        console.log(`Zero`)
        break;
    case 1:
        console.log(`One`)
        break;
    case 2:
        console.log(`Two`)
        break;
    case 3:
        console.log(`Three`)
        break;
    case 4:
        console.log(`Four`)
        break;
    case 5:
        console.log(`Five`)
        break;
    case 6:
        console.log(`Six`)
        break;
    case 7:
        console.log(`Seven`)
        break;
    case 8:
        console.log(`Eight`)
        break;
    case 9:
        console.log(`Nine`)
        break;
    default:
        console.log(`Not a digit`)
}

