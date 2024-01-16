const firstNumber = 1;
const secondNumber = 2;
const thirdNumber = 3;
const fourthNumber = 4;
const fifthNumber = 5;
const sixthNumber = 6;

const sumWrong = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber + sixthNumber;

const numbers = [1, 2, 3, 4, 5, 6];

let sumCorrect = 0;
for(let i = 0; i < numbers.length; i++) {
    sumCorrect += numbers[i];
}

console.log(sumWrong);
console.log(sumCorrect);


console.log(numbers.map(number => number**2));
console.log(numbers.reduce((accumulator, value)  => accumulator + value));
console.log(numbers.filter(number => number % 2 === 1));
