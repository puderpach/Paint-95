// window.onload = function init() {
//     drawField = document.getElementById('myCanvas');

//     canvas.addEventListener('mousemove', function (evt) {
//         mousePos = getMousePos(canvas, evt);
//         var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//         writeMessage(canvas, message);
//     }, false);

//     canvas.addEventListener('mousedown', function (evt) {
//         mouseButton = evt.button;
//         var message = "Mouse down button " + evt.button + " down at position: " + mousePos.x + ',' + mousePos.y;
//         writeMessage(canvas, message);
//     }, false);

//     canvas.addEventListener('mouseup', function (evt) {
//         var message = "Mouse up at position: " + mousePos.x + ',' + mousePos.y;
//         writeMessage(canvas, message);
//     }, false);
// };

function drawing(event) {
    let paintCanvas = document.getElementById("paint-canvas");
    let x = event.offsetX;
    let y = event.offsetY;
    console.log("x = " + x + " y = " + y);
    let div = document.createElement("div");
    paintCanvas.appendChild(div);
    div.style.backgroundColor = "black";
    div.style.position = "absolute";
    div.style.left = x +'px';
    div.style.top = y +'px';
    div.style.height = "3px";
    div.style.width = "3px";
}