var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../programming-3"));
app.get("/", function (req, res) {
   res.redirect("index.html");
});
server.listen(3000, function () {
   console.log("App is running on port 3000");
});

let random = require("./random")
let Grass = require("./class")
let GrassEater = require("./grassEater")
let Predator = require("./predator")
let PredatorEater = require("./predatorEater")
let Water = require("./water")



matrix = [];
n = 15
m = 15
side = 60;
grassArr = []
grassEaterArr = []
predatorArr = []
predatorEaterArr = []
WaterArr = []
for (let i = 0; i < n; i++) {
   matrix.push([])
   for (let j = 0; j < m; j++) {
      matrix[i].push(0)
   }
}
function characters(index, count) {
   for (let i = 0; i < count; i++) {
      var v = Math.floor(random(n))
      var w = Math.floor(random(m))
      matrix[v][w] = index
   }
}

function createGame() {
   characters(1, 20)
   characters(2, 20)
   characters(3, 20)
   characters(4, 20)
   characters(5, 20)

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

function startGame() {
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

createGame()

io.on("connection", function(socket) {
   setInterval(() => {
      startGame()
      socket.emit("matrix", matrix)
   })
})