const call_loop = () => {
    let str = "string"
    let x = 0;
    while(x < str.length) {
        document.querySelector('#loop').innerHTML = x;
        x++
    }
}

// loops through each item in the array and adds it to the empty string
const instruments_list = ["Guitar", "Piano", "Recorder", "Flute", "Violin"];
const instruments = () => {
    let content = ""
    for (let instrument of instruments_list) {
        content += `${instrument} `
    }
    document.querySelector('#list_instruments').innerHTML = content
}


// creates empty array and pushes (adds) values to it
const call_array = () => {
    let petArr = [];
    petArr.push("Dog");
    petArr.push("Cat");
    petArr.push("Lizard");
    document.querySelector('#array').innerHTML = petArr;
}

// creates a object named fresca
const fresca = { 
    name: 'Fresca',
    calories: 0,
    protein: 0.1,
    sodium: 70
}

const constant_function = () => {
    fresca['sodium'] = 60; // changes value of sodium to 60
    fresca['carbs'] = 0; // creates new property named carbs and gives it a value of 0
    console.log(fresca);
    document.querySelector('#constant').innerHTML = `the new property is carbs (${fresca.carbs}) and the changed category is sodium(${fresca.sodium})`;
}


let person = {
    firstName: "Megan",
    lastName: 'Schofy',
    id: 2,
    fullName: function() {
        return `${this.firstName} ${this.lastName}` // retrieves the value of firstname and lastbame and combines them into one string
    }
}

const let_function = () => {
    document.querySelector('#let').innerHTML = person.fullName();
}