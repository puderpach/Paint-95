let paintCanvas = document.getElementById("paint-canvas");
let timer
let color = "black";
let tool

function drawing() {
    document.addEventListener("mousemove", createDiv);
    setInterval(createDiv(), 0.00005);
}

function stopDrawing() {
    document.removeEventListener("mousemove", createDiv);
}

function createDiv() {
    let paintCanvas = document.getElementById("paint-canvas");
    let x = event.clientX - 291;
    let y = event.clientY - 113;
    let div = document.createElement("div");
    paintCanvas.appendChild(div);
    div.style.backgroundColor = color;
    div.style.position = "absolute";
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.height = "3px";
    div.style.width = "3px";
}

function changeColor(newColor) {
    color = newColor;
}
