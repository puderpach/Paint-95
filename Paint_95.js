let paintCanvas = document.getElementById("paint-canvas");
let timer

function drawing() {
    document.addEventListener("mousemove", createDiv);
    setInterval(createDiv(), 1);
}

function stopDrawing() {
    document.removeEventListener("mousemove", createDiv);
}

function createDiv() {
    let paintCanvas = document.getElementById("paint-canvas");
    let x = event.offsetX;
    let y = event.offsetY;
    let div = document.createElement("div");
    paintCanvas.appendChild(div);
    div.style.backgroundColor = "black";
    div.style.position = "absolute";
    div.style.left = x +'px';
    div.style.top = y +'px';
    div.style.height = "3px";
    div.style.width = "3px";
}