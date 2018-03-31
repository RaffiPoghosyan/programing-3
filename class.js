
/*class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.directions = [];
        this.index = 2;
        this.multiply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
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
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 8) {
            gishatichArr.push(new Gishatich(this.x, this.y));
            this.energy = 15;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xotaker = random(this.yntrelVandak(2));
        if (xotaker) {
            matrix[this.y][this.x] = 0;
            this.x = xotaker[0];
            this.y = xotaker[1];
            matrix[this.y][this.x] = 3;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                    matrix[this.y][this.x] = 0;

                }

            }
        }
    }
}

class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
        this.multiply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
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
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 8) {
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 4;
        }
    }
    utel2() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)
                }
            }
        }
        else if (matrix[this.y][this.x] == 2) {
            this.utel1();
        }
        else {
            this.utel();
        }
    }
    utel1() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(2));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
        else {
            this.utel();
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(3));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    mahanal() {
        if (this.energy <= 0) {
            for (var i in amenakerArr) {
                if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1)
                    matrix[this.y][this.x] = 0;

                }
            }
        }
    }
}
class Mah {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 2;
        this.multiply = 0;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
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
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            // this.energy--;
            // this.mahanal();
        }
    }
    bazmanal() {
        if (this.energy == 8) {
            mahArr.push(new Mah(this.x, this.y));
            this.energy = 4;
        }
    }
    utel3() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 5;
            // this.energy++;
            // this.bazmanal();
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)
                }
            }
        }
        else if (matrix[this.y][this.x] == 2) {
            this.utel2();
        }
        else if (matrix[this.y][this.x] == 3) {
            this.utel1();
        }
        else {
            this.utel();
        }
    }

    utel2() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(2));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 5;
            // this.energy++;
            // this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
        else if (matrix[this.y][this.x] == 3) {
            this.utel1();
        }
        else {
            this.utel();
        }
    }
    utel1() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(3));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 5;
            // this.energy++;
            // this.bazmanal();
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
        else {
            this.utel();
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(4));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 5;
            // this.energy++;
            // this.bazmanal();
            for (var i in amenakerArr) {
                if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1)
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    // mahanal() {
    //     if (this.energy <= 0) {
    //         for (var i in mahArr) {
    //             if (this.x == mahArr[i].x && this.y == mahArr[i].y) {
    //                 mahArr.splice(i, 1)
    //                 matrix[this.y][this.x] = 0;
    //             }
    //         }
    //     }
    // }
}*/