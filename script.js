socket = io()

var n = 15
var m = 15
var side = 60;
var localMatrix = []

function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

function draw() {
    for (var y = 0; y < localMatrix.length; y++) {
        for (var x = 0; x < localMatrix[y].length; x++) {
            if (localMatrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (localMatrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (localMatrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (localMatrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (localMatrix[y][x] == 4) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (localMatrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

socket.on("matrix", function(matrix) {
    localMatrix = matrix
})
