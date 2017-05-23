/// <reference path="../weapon.ts" />
/// <reference path="../gameobject.ts" />


class Axe extends Weapon {

    constructor(x: number, y:number){
        super("axe");

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("axe");
        container.appendChild(this.div);

        this.x = x;
        this.y = y;
    }

}