let activePlayer = 'X';
let selectedSquares = [];

function placeXorO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png)';
        } else {
            select.style.backgroundImage = 'url("images/o.png)';
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./media/place.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function() { computersTurn(); }, 1000);
        }
        return true;
    }

    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXorO(pickASquare)) {
                placeXorO(pickASquare)
                success = true;
            }
        }
    }
}


// this function parses the array of selectedsquares and searces for win conditions
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes('00', '10', '20')) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('30', '40', '50')) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('60', '70', '80')) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('00', '30', '60')) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('10', '40', '70')) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('20', '50', '80')) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('60', '40', '20')) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('00', '40', '80')) { drawWinLine(100, 100, 520, 520)}

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function() { resetGame()}, 500);
    }
}

// this function checks if an array includes 3 strings
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) { return true; }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() { body.style.pointerEvents = 'auto'}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}


function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    // start of a lines X axis
    let x1 = coordX1
    // start of a lines Y axis
    let y1 = coordY1
    // end of a lines X axis
    let x2 = coordX2
    // end of a lines y axis
    let y2 =  coordY2
    let x = x1
    let y = y1

    // function to interact with the canvas
    function animateLineDrawing() {
        const animationLoop =  requestAnimtionFrame(animateLineDrawing);
        // clears content from last loop
        c.clearRect(0, 0, 608, 608);
        //starts a new path
        c.beginPath();
        // moves to starting point 
        c.moveTo(x1, y1);
        // end point in the line
        c.lineTo(x,y);
        // sets width of the line
        c.lineWidth = 10;
        // sets color
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        // checks if we've reached endpoints
        if (x1 <= x2 && y1 <= y2) {
            // adds 10 to previous end x point
            if (x < x2) { x+= 10 }
            // adds 10 to previous y point
            if (y < y2) { y+= 10;}
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop)}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x+= 10 }
            if (y > y2) { y -= 10}
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop)}
        }
    }

    function clear() {
        // starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        // clears canvas
        c.cleatRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    // disables clicking while the win sound is playing
    disableClick()
    // plays the win sound
    audio('./media.winGame.mp3');
    // calls main animation loop
    animateLineDrawing();
    // resets canvas after a second
    setTimeout(function() { clear(); resetGame(); }, 1000)
}




function resetGame() {
    // iterates for each square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        // removes backgroungImage
        square.style.backgroundImage = '';
    }
    // resets array to empty to restart game
    selectedSquares = [];
}