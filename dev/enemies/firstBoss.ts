/// <reference path="../enemy.ts" />


class FirstBoss extends Enemy {

    private damage:number = 5;

    constructor(x:number, y:number, width:number, height: number){
        super("FirstBoss", x, y, width, height);
    }

    public getDamage() {
        return this.damage;
    }

}