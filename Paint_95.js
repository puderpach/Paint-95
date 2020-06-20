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
    if (isDrawing) {
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
    let paintingName = document.getElementById("save-input").value;
    let painting = document.getElementById("paint-canvas").innerHTML;
    if (paintingName !== "") {
        localStorage.setItem(paintingName, painting)
    }
    else {
        window.alert("Please enter a name for your painting.")
    }
}

function loadPainting() {
    let paintingName = document.getElementById("save-input").value;
    if (paintingName === "") {
        window.alert("Please enter the name of your painting you want to load.");
    }
    else {
        if (localStorage.getItem(paintingName) === null) {
            window.alert("Your painting could not be found, please enter a valid name.");
        }
        else {
            document.getElementById("paint-canvas").innerHTML = localStorage.getItem(paintingName);
        }
    }
}