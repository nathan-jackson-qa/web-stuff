const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");
const result = document.querySelector("#result");
const history = document.querySelector("#history");

let currentNumber = "first";

const getValues = () => {
    return [Number.parseFloat(num1.value), Number.parseFloat(num2.value)]
}

const addToHistory = (num1, operator, num2, result) => {
    const addParagraph = document.createElement("p");
    const info = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    addParagraph.appendChild(info);
    history.appendChild(addParagraph);
}

const printResult = (newValue) => {
    result.value = newValue;
} 

const clearHistory = () => {
    history.innerHTML = "";
}
const clearValues = () => {
    num1.value = "";
    num2.value = "";
    result.value="";
    currentNumber = "first";
}

const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    printResult(newResult);
    addToHistory(num1, "+", num2, newResult);
}
const subtract = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    printResult(newResult);
    addToHistory(num1, "-", num2, newResult);
}
const multiply = () => {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printResult(newResult);
    addToHistory(num1, "*", num2, newResult);
}
const divide = () => {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    printResult(newResult);
    addToHistory(num1, "/", num2, newResult);
}

const addNumber = (number) => {
    if(currentNumber == "first") {
        num1.value += number;
    } else {
        num2.value += number;
    }
}

const next = () => {
    if(currentNumber == "first") {
        currentNumber = "second";
    }
    else {
        currentNumber = "first";
    }
}

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener('click', add);

const btnSub = document.querySelector("#subtract");
btnSub.addEventListener('click', subtract);

const btnMul = document.querySelector("#multiply");
btnMul.addEventListener('click', multiply);

const btnDiv = document.querySelector("#divide");
btnDiv.addEventListener('click', divide);

const btnHistory = document.querySelector("#clearHistory");
btnHistory.addEventListener('click', clearHistory);

const btnValues = document.querySelector("#clearValues");
btnValues.addEventListener('click', clearValues);

const btnOne = document.querySelector("#One");
btnOne.addEventListener('click', () => addNumber(1));
const btnTwo = document.querySelector("#Two");
btnTwo.addEventListener('click', () => addNumber(2));
const btnThree = document.querySelector("#Three");
btnThree.addEventListener('click', () => addNumber(3));
const btnFour = document.querySelector("#Four");
Four.addEventListener('click', () => addNumber(4));
const btnFive = document.querySelector("#Five");
btnFive.addEventListener('click', () => addNumber(5));
const btnSix = document.querySelector("#Six");
btnSix.addEventListener('click', () => addNumber(6));
const btnSeven = document.querySelector("#Seven");
btnSeven.addEventListener('click', () => addNumber(7));
const btnEight = document.querySelector("#Eight");
btnEight.addEventListener('click', () => addNumber(8));
const btnNine = document.querySelector("#Nine");
btnNine.addEventListener('click', () => addNumber(9));
const btnZero = document.querySelector("#Zero");
btnZero.addEventListener('click', () => addNumber(0));

const btnNext = document.querySelector("#next");
btnNext.addEventListener('click', next);

window.onload = () => {
    prompt("How much do you love using calculators eh??");
}