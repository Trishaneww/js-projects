const clickMe = () => {
    let car = {
        model: "911",
        make: 'Porsche',
        color: 'black',
        miles: 200
    }
    delete car.model
    document.getElementById('dictionary').innerHTML = car.model;
}

document.write("hello world")
