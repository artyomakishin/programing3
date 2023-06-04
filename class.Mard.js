class Mard {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 10
        this.directions = []
    }
    getNewCoordinates() {
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
    chooseCell(char1, char2) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] ==char1 || matrix[y][x] ==char2) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var newMard = new Mard(newX, newY, 4)
            MardArr.push(newMard)
            this.energy = 5
        }
    }
    move() {
        var food = random(this.chooseCell(0))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            this.x = food[0]
            this.y = food[1]

        }
        this.energy--;
    }
    eat() {
        var food = random(this.chooseCell(2, 3))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            } else {
                for (var i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 4
            this.x = food[0]
            this.y = food[1]
            this.energy += 5
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in MardArr) {
                if (MardArr[i].x == this.x && MardArr[i].y == this.y) {
                    MardArr.splice(i, 1)
                    break
                }
            }
        }
    }
}