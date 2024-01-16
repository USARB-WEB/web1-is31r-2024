
function checkNumbers(firstNumber, secondNumber) {
    console.log(`First number = ${firstNumber}`);
    console.log(`Second number = ${secondNumber}`);
    if(firstNumber < secondNumber){
        console.log(`First number ${firstNumber} < Second number ${secondNumber}`);
    } else if(firstNumber > secondNumber){
        console.log(`First number ${firstNumber} > Second number ${secondNumber}`);
    } else {
        console.log(`First number ${firstNumber} = Second number ${secondNumber}`);
    }
}


checkNumbers(2, 4);
checkNumbers(4, 2);
checkNumbers(5, 5);


const squareOfNumber = number => number * number;

console.log(squareOfNumber(3));