class Lava {
    constructor(x, y) {
        this.x = x
        this.y = y
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
    chooseCell(char1, char2, char3) {
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

     catch() {
        var food = random(this.chooseCell(2, 3, 4))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            } else  if (matrix[newY][newX] == 3) {
                for (var i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            }else  if (matrix[newY][newX] == 4) {
                for (var i in MardArr) {
                    if (newX == MardArr[i].x && newY == MardArr[i].y) {
                       MardArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 0
           
        }
    }
}