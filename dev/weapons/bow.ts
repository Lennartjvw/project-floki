/// <reference path="../weapon.ts" />
/// <reference path="../gameobject.ts" />


class Bow extends Weapon {
    constructor(x: number, y: number, width: number, height: number) {
        super("bow", x, y, width, height);
    }
}