let age = 5 //global variable
 const add = () => {
    let num1 = 2; //local variable
    return num1 + 2;
 }


 // if else statment
 const func = () => {
    if (5 > 1) {
        console.log("5 is higher");
    } else {
        console.log("5 is lower");
    }
 }
// function to determine current time
 const time_function = () => {
    let time = new Date().getHours(); // retrieves time from computer
    let reply;
    if (time < 12 == time > 0) {
        reply = "its morning"
    } else if( time >= 12 == time < 18) {
        reply = "its afternoon";
    } else {
        reply = "its evening"
    }
    document.querySelector('#time').innerHTML = reply;
 }

 time_function()

 const err_func = () => {
    if 10 > 5 { //will produce a error (must add brackets around statement)
        console.log("hello world")
    } else {
        console.log("hello")
    }
 }