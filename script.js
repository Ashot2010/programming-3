var matrix = [];
var n = 15
var m = 15
var side = 60;
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var predatorEaterArr = []
var WaterArr = []
for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}
function characters(index, count) {
    for (let i = 0; i < count; i++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index
    }
}


function setup() {
    characters(1, 20)
    characters(2, 20)
    characters(3, 20)
    characters(4, 20)
    characters(5, 20)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEa = new GrassEater(x, y, 1);
                grassEaterArr.push(grEa);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 1);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var preEa = new PredatorEater(x, y, 1);
                predatorEaterArr.push(preEa);
            }
            else if (matrix[y][x] == 5) {
                var wt = new Water(x, y, 1);
                WaterArr.push(wt);
            }

        }


    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in predatorEaterArr) {
        predatorEaterArr[i].eat();
    }
    for (var i in WaterArr) {
        WaterArr[i].move();
    }

}


