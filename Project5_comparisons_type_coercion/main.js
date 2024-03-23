document.write(typeof 2)

let result = "10" + 2;
document.write(result)

// displays number higher than infinity
document.write(3E310)

// displays number lower  than negative infinity
document.write(-3E310)

// displays the result of the the NAN operator
const test = document.querySelector('#test');
test.innerHTML = isNaN(7);
test.innerHTML = isNaN("hi");
test.innerHTML = 0/0


// displays the result of the boolean logic operator
const boolean = document.querySelector('#boolean');
boolean.innerHTML = 10 > 2;

const add = () => {
    console.log(2+2)
}

add();
console.log(10 == 10)
console.log(10 == "hello")


// triple equals statemnts
console.log(10 === 10) //true
console.log(10 === 5)  // f
console.log(10 === "five") // f
console.log(10 === "5")  // f


// AND OR opertors
console.log(10 > 2 && 10 > 1) // T
console.log(10 > 2 && 1 > 10) // F
console.log(10 > 2 || 1 > 10) // T
console.log(1 > 2 && 1 > 10) // F

// NOT operator
console.log(5 !== 5) // F
console.log(5 !== 10) // T
