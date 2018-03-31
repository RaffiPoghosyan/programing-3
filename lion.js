class Lion extends KendaniEak {

 
     sharjvel() {
        this.stanalNorKordinatner();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 6;
            // this.energy--;
            // this.mahanal();
        }
    }
    // bazmanal() {
    //     if (this.energy == 7) {
    //         lionArr.push(new Lion(this.x, this.y));
    //         this.energy = 4;
    //     }
    // }
      
    utel2() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(2));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 6;
           
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
            matrix[this.y][this.x] = 6;
            
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
            matrix[this.y][this.x] = 6;
            
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
           utel3() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 6;
            // this.energy++;
            // this.bazmanal();
            for (var r in xotArr) {
                if (this.x == xotArr[r].x && this.y == xotArr[r].y) {
                    xotArr.splice(r, 1)

                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    //     mahanal() {
    //     if (this.energy <= 0) {
    //         for (var i in lionArr) {
    //             if (this.x == lionArr[i].x && this.y == lionArr[i].y) {
    //                 lionArr.splice(i, 1)
    //                 matrix[this.y][this.x] = 0;

    //             }

    //         }
    //     }
    // }
} 