let paintCanvas = document.getElementById("paint-canvas");
let timer
let color = "black";

function paint() {
    removeListener();
    document.addEventListener("mousedown", startPaint);
    document.addEventListener("mouseup", stopPaint);
}

function startPaint() {
    document.addEventListener("mousemove", paintDiv);
    setInterval(paintDiv(), 0.00005);
}

function stopPaint() {
    document.removeEventListener("mousemove", paintDiv);
}

function paintDiv() {
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

function erase() {
    removeListener();
    document.addEventListener("mousedown", startErase);
    document.addEventListener("mouseup", stopErase);
}

function startErase() {
    document.addEventListener("mousemove", eraseDiv);
    setInterval(eraseDiv(), 0.00005);
}

function stopErase() {
    document.removeEventListener("mousemove", eraseDiv);
}

function eraseDiv() {
    let paintCanvas = document.getElementById("paint-canvas");
    let x = event.clientX - 291;
    let y = event.clientY - 113;
    let div = document.createElement("div");
    paintCanvas.appendChild(div);
    div.style.backgroundColor = "white";
    div.style.position = "absolute";
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.height = "15px";
    div.style.width = "15px";
}

function changeColor(newColor) {
    let colorField = document.getElementById("current-color-box");
    color = newColor;
    colorField.style.backgroundColor = newColor;
}

function removeListener() {
    document.removeEventListener("mousedown", startPaint);
    document.removeEventListener("mouseup", stopPaint);
    document.removeEventListener("mousedown", startErase);
    document.removeEventListener("mouseup", stopErase);
    console.log("All erased")
}