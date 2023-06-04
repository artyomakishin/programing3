var matrix = [
    [3, 0, 3, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [3, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 4, 4, 4, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 4, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],

    [2, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0, 2, 0, 3, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0],

    [0, 2, 0, 3, 0, 1, 2, 0, 2, 0, 2, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0],

    [0, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 0, 2, 2, 0, 3, 0, 0, 0, 1, 2, 0, 0, 0, 0],

    [3, 2, 0, 0, 0, 1, 0, 3, 0, 4, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 3, 0, 0, 0],

    [0, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 1, 0, 1, 0, 1, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0],

    [2, 2, 0, 1, 0, 0, 0, 1, 0, 3, 2, 0, 4, 0, 1, 0, 0, 4, 0, 0, 2, 0, 2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0],

    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],

    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 2, 1, 1, 1, 0, 1, 1, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 1, 0],

    [1, 0, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 1, 0],

    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 2, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 3, 0],

    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 2, 3, 0, 1, 3, 3, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],

    [0, 3, 2, 0, 2, 0, 2, 0, 3, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 1, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],

    [3, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 1, 0, 1, 0, 1, 0, 1, 4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 4]];

var side = 30;
var grassArr = [];
var grassEaterArr = []
var predatorArr = []
var MardArr = []
var LavaArr = []

function preload() {
    nkar = loadImage('https://t4.ftcdn.net/jpg/02/50/08/51/360_F_250085110_HYTva7n4e9DGnangPa2hZZUZfj3pVAIc.jpg')
    nkar1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg')
    nkar2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/275px-Canis_lupus_265b.jpg')
    nkar3 = loadImage('data:image/jpeg;base64,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');
    nkar4 = loadImage('data:image/jpeg;base64,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')
}


function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predotar(x, y, 3);
                predatorArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y, 4);
                MardArr.push(mard);
            }
        }
    }
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#FFFFFF");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                image(nkar, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                image(nkar1, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                image(nkar2, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                image(nkar3, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                image(nkar4, x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()
        predatorArr[i].move()
        predatorArr[i].mult()
        predatorArr[i].die()
    }

    for (var i in MardArr) {
        MardArr[i].eat()
        MardArr[i].move()
        MardArr[i].mult()
        MardArr[i].die()
    }

    for (var i in LavaArr) {
        LavaArr[i].catch()
    }

    if (grassArr.length == 0) {
        for (var i = 0; i < 50; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            if (y != 10) {
                matrix[y][x] = 1
                var gr = new Grass(x, y, 1)
                grassArr.push(gr)
            }
        }
    }

    if (grassEaterArr.length == 0) {
        for (var i = 0; i < 50; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            if (y != 10) {
                matrix[y][x] = 2
                var grEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grEater)
            }
        }
    }

    if (predatorArr.length == 0) {
        for (var i = 0; i < 50; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            if (y != 10) {
                matrix[y][x] = 3
                var predator = new Predotar(x, y, 3)
                predatorArr.push(predator)
            }
        }
    }

    if (MardArr.length == 0) {
        for (var i = 0; i < 50; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            if (y != 10) {
                matrix[y][x] = 4
                var mard = new Mard(x, y, 4)
                MardArr.push(mard)
            }
        }
    }
}