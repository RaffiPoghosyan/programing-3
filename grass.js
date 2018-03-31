class Xot extends KendaniEak {

    bazmanal(){
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if(this.multiply >= 3 && this.direction){
            var newGrass = new Xot(this.direction[0],this.direction[1],this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            xotArr.push(newGrass);

            matrix[this.direction[1]][this.direction[0]] = this.index;

            this.multiply = 2;
        }
    }
}

