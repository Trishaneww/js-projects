
// selects the paragraphs based on id
const add =  document.querySelector('#add');
const subtract =  document.querySelector('#subtract');
const multiply =  document.querySelector('#multiply');
const divide =  document.querySelector('#divide');
const remainder =  document.querySelector('#remainder');
const expression = document.querySelector('#expression');
const negative = document.querySelector('#negative');



// add function 
const addition = () => {
    let result = 8 - 3;
    add.innerHTML = result;
}


// subtraction function
const subtraction = () => {
    let result = 8 - 3;
    subtract.innerHTML = result;
}

// multiplication function
const multiplication = () => {
    let result = 8*3;
    multiply.innerHTML = result;
}

// division function
const division = () => {
    let result = 8/3;
    divide.innerHTML = result;
}

// modular function
const modular = () => {
    let result = 8 % 3;
    remainder.innerHTML = result;
}

// math function
const math_expression = () => {
    let result = (8 + 10 - 2 * 2)/2;
    expression.innerHTML = result
}

negative.innerHTML = -5;
let randnum = Math.random() * 100;
document.write(randnum++)
document.write(randnum--)

// creates a random number and conducts multiplication, division and addition to it
const random = () => {
    let randnum = Math.random() * 5;
    let result = (randnum*3)/2 + 6;
    document.write(result)
}


// calls functions
addition();
subtraction();
multiplication();
division();
modular();
math_expression()
