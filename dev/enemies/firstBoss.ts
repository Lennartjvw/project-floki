/// <reference path="../enemy.ts" />


class FirstBoss extends Enemy {

    constructor(x:number, y:number, width:number, height: number){
        super("FirstBoss", x, y, width, height);

        this.health = 500;
        this.damage = 5;

    }

}