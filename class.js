class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.multiply = 0;
        this.energy = 8
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    eat() {
        let foods = this.chooseCell(2)
        let food = random(foods)
        if (food) {
            this.energy=8
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5
            this.x = newX
            this.y = newY
            for (var i in WaterArr) {
                if (newX == WaterArr[i].x && newY == WaterArr[i].y) {
                    WaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy > 12) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
}