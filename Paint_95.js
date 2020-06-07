let paintCanvas = document.getElementById("paint-canvas");
let timer
let color = "black";
let size = "3px";
let isDrawing = false;
document.addEventListener("mousedown", e => {isDrawing = true});
document.addEventListener("mouseup", e => {isDrawing = false});
document.addEventListener("mousemove", paint);

function paint() {
    if (isDrawing === true) {
        paintDiv(color, size)
    }
}

function paintDiv(paintColor, paintSize) {
    let paintCanvas = document.getElementById("paint-canvas");
    let x = event.clientX - 291;
    let y = event.clientY - 113;
    let div = document.createElement("div");
    paintCanvas.appendChild(div);
    div.style.backgroundColor = paintColor;
    div.style.position = "absolute";
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.height = paintSize;
    div.style.width = paintSize;
}

function changeColor(newColor) {
    let colorField = document.getElementById("current-color-box");
    color = newColor;
    colorField.style.backgroundColor = newColor;
}

function changeSize(newSize) {
    size = newSize;
}