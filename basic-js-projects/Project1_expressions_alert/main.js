window.alert("hello, world");
document.write("HELLO WORLD");


let string1 = "This is the beginning of the string"; //String1 
let string2 = "and this is the end of the string"; //String2
let result = string1 + string2; //Concatenates string1 and string2 together, forming a new string variable

let num1 = 2 //first number
let num2 = 3 // second number
let sum = num1 + num2 //expression adding num1 and num2

// function used to add any tow given numbers, displays the sum on the browser
const add = (num1, num2) => { 
    document.write(num1 + num2)
}

add(num1, num2)

// function to display concatenated pjrase on browser



const myFunction = () => {
    let sentence = "I am learning" 
    sentence += " a lot from thhis book"
    document.getElementById('concat').innerHTML = sentence;
}