/// <reference path="../weapon.ts" />
/// <reference path="../gameobject.ts" />


class Bow extends Weapon {

    constructor(x: number, y:number){
        super("bow");

        this.x = x;
        this.y = y;
    }


}