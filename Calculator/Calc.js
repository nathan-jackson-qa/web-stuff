const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");
const result = document.querySelector("#result");
const history = document.querySelector("#history");


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

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener('click', add);

const btnSub = document.querySelector("#subtract");
btnSub.addEventListener('click', subtract);

const btnMul = document.querySelector("#multiply");
btnMul.addEventListener('click', multiply);

const btnDiv = document.querySelector("#divide");
btnDiv.addEventListener('click', divide);

window.onload = () => {
    prompt("How much do you love using calculators eh??");
}