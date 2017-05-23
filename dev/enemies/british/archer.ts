/// <reference path="../../enemy.ts" />


class Archer extends Enemy {

    constructor(x: number, y: number) {
        super("archer");

        this.x = x;
        this.y = y;
        
    }

}