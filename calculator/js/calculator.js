// creating an object
const Calculator = {
    display_value: '0',
    first_operand: null,
    wait_second_operand: false,
    operator: null,
};

function input_digit(digit) {
    const {display_value, wait_second_operand} = Calculator;
    // This checks if the wait_second is true and sets display_value
    // to the key that was clicked on
    if (wait_second_operand === true) {
        Calculator.display_value = digit;
        Calculator.wait_second_operand = false;
    } else {
        Calculator.display_value = display_value === '0' ? digit : display_value + digit;
    }
}

function input_decimal(dot) {
    // ensures accidental clicking of decimal points dont create bugs
    if (Calculator.wait_second_operand === true) return;
    if (!Calculator.display_value.includes(dot)) {
        // adding a decimal point if one doesnt exist
        Calculator.display_value += dot;
    }
}

//This section handles operators
function Handle_Operator (Next_Operator) {
    const {first_operand, display_value, operator} = Calculator;
    //When an operator key is pressed we convert the current number
    //displayed on the screento a number and then store the result in
    //Calculator.First Operand if it doesn't already exist.
    const value_of_input = parseFloat(display_value);
    //Checks if an operator already exists and if Wait Second Operand is true,
    //then updates the operator an exits from the function.
    if (operator && Calculator.wait_second_operand){
    Calculator.operator = Next_Operator;
    return;
    }
    if (first_operand == null) {
    Calculator.first_operand = value_of_input;
    } else if (operator) { //Checks if an operator already exists
    const value_now = first_operand || 0;
    //If operator exists, property lookup is performed for the operator
    //in the Perform Calculation object and the function that matches the
    //operator is exexcuted.
    let result = Perform_Calculation[operator] (value_now, value_of_input);
    //Here we add a fixed amount of numbers after the decimal.
    result = Number(result).toFixed (9) ;
    //This will remove any trailing o's
    result = (result *1).toString();
    Calculator.display_value = parseFloat(result);
    Calculator.first_operand = parseFloat (result);
    }
    Calculator.wait_second_operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (first_operand, second_operand) => first_operand / second_operand,
    '*': (first_operand, second_operand) => first_operand * second_operand,
    '+': (first_operand, second_operand) => first_operand + second_operand,
    '-': (first_operand, second_operand) => first_operand - second_operand,
    '=': (first_operand, second_operand) => second_operand
};

function calculator_reset() {
    Calculator.display_value = '0';
    Calculator.first_operand = null;
    Calculator.wait_second_operand = false;
    Calculator.operator = null;
}

// updates the calcukator screen with the contents if display
function update_display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.display_value;
}

update_display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // target variable is an object that represents the element
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        update_display();
        return;
    }
    if (target.classList.contains('decimal')) {
        input_decimal(target.value);
        update_display();
        return;
    }
    // ensures tat C clears all inputs from the calculatpr screen
    if (target.classList.contains('all-clear')) {
        calculator_reset();
        update_display();
        return;
    }
    input_digit(target.value);
    update_display();
})
