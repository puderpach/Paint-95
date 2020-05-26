let paintCanvas = document.getElementById("paint-canvas");
let timer
let paintedPixels = [];

function drawing() {
    document.querySelector("#paint-canvas").addEventListener("mousemove", createDiv);
    setInterval(createDiv(), 0.00005);
}

function stopDrawing() {
    document.querySelector("#paint-canvas").removeEventListener("mousemove", createDiv);
}

function createDiv() {
    let paintCanvas = document.getElementById("paint-canvas");
    let position = {};
    let x = event.offsetX;
    let y = event.offsetY;
    position.x = x;
    position.y = y;
    if (checkDiv(paintedPixels, x, y) === false) {
        let div = document.createElement("div");
        paintCanvas.appendChild(div);
        div.style.backgroundColor = "black";
        div.style.position = "absolute";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.height = "3px";
        div.style.width = "3px";
        paintedPixels.push(position);
    }
}

function checkDiv(array, valX, valY) {
    console.log("test");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i].x === valX && array[i].x === valY) {
            return true;
        }
        else {
            return false;
        }
    }
}