const add =  document.querySelector('#add');
const subtract =  document.querySelector('#subtract');
const multiply =  document.querySelector('#multiply');
const divide =  document.querySelector('#divide');
const remainder =  document.querySelector('#remainder');
const expression = document.querySelector('#expression');
const negative = document.querySelector('#negative');


const addition = () => {
    let result = 8 - 3;
    add.innerHTML = result;
}

const subtraction = () => {
    let result = 8 - 3;
    subtract.innerHTML = result;
}

const multiplication = () => {
    let result = 8*3;
    multiply.innerHTML = result;
}

const division = () => {
    let result = 8/3;
    divide.innerHTML = result;
}

const modular = () => {
    let result = 8 % 3;
    remainder.innerHTML = result;
}

const math_expression = () => {
    let result = (8 + 10 - 2 * 2)/2;
    expression.innerHTML = result
}

negative.innerHTML = -5;
let randnum = Math.random() * 100;
document.write(randnum++)
document.write(randnum--)


const random = () => {
    let randnum = Math.random() * 5;
    let result = (randnum*3)/2 + 6;
    document.write(result)
}

addition();
subtraction();
multiplication();
division();
modular();
math_expression()