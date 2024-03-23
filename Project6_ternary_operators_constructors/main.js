function Car(make, model, year, color) { // creating constructor class and its properties
    this.Car_make = make;
    this.Car_model = model;
    this.Car_year = year;
    this.Car_color = color;
}

let trish = new Car("Porsche", "911", 2009, "black") // creting a new instance of the class
const myFunction = () => {
    document.querySelector('#output').innerHTML = `Trish drives a ${trish.Car_make}`
}


const age_function = () => {
    let age = document.querySelector('#age').value; // obtaining the age value if the input field
    let output = (age <= 20 ) ? "You are old enough":"You are too young"; //tunirary opertor to shorten code
    document.querySelector('#ride').innerHTML = output;
}

// nested function
const nested_func = () => {
    document.querySelector('#nested').innerHTML = Add();
    function Add() { // add function within the main function
        let result = 2 + 3;
        return result
    }
}

nested_func(5) // calling the nested function
