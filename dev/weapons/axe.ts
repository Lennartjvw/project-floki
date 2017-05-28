/// <reference path="../weapon.ts" />
/// <reference path="../gameobject.ts" />


class Axe extends Weapon {
    constructor(x: number, y:number, width: number, height: number){
        super("axe", x, y, width, height);

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("axe");
        container.appendChild(this.div);
    }
}