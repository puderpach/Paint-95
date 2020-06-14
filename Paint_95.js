let paintCanvas = document.getElementById("paint-canvas");
let timer
let color = "black";
let size = 3;
let isDrawing = false;
let form = 0;
document.addEventListener("mousedown", e => { isDrawing = true });
document.addEventListener("mouseup", e => { isDrawing = false });
document.addEventListener("mousemove", paint);

function paint() {
    if (isDrawing === true) {
        paintDiv(color, size, form)
    }
}

function paintDiv(paintColor, paintSize, paintForm) {
    let paintCanvas = document.getElementById("paint-canvas");
    let x = event.clientX - 291;
    let y = event.clientY - 113;
    let div = document.createElement("div");
    paintCanvas.appendChild(div);
    div.style.backgroundColor = paintColor;
    div.style.position = "absolute";
    div.style.left = (x - paintSize / 2) + 'px';
    div.style.top = (y - paintSize / 2) + 'px';
    div.style.height = paintSize + 'px';
    div.style.width = paintSize + 'px';
    div.style.borderRadius = paintForm + '%';
}

function changeColor(newColor) {
    let colorField = document.getElementById("current-color-box");
    color = newColor;
    colorField.style.backgroundColor = newColor;
}

function changeSize(newSize) {
    size = newSize;
}

function changeSizeButton() {
    let buttonSize = document.getElementById("pencil-size").valueAsNumber;
    changeSize(buttonSize);
}

function changeForm(radius) {
    form = radius;
}

function savePainting() {
    localStorage.savedPainting = document.getElementById("paint-canvas").innerHTML;
}

function loadPainting() {
    document.getElementById("paint-canvas").innerHTML = localStorage.savedPainting;
}