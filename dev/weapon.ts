/// <reference path="gameobject.ts" />

class Weapon extends GameObject {
    protected whatWeapon: string;

    private weaponSpeed: number;
    private weaponDirection: number;
    public startPositionX: number;

    public lastKey: number;

    constructor(whatWeapon: string, x: number, y: number, width: number, height: number) {
        super("weapon", x, y, width, height);
        console.log("And the weapon is an: " + this.whatWeapon);
        this.whatWeapon = whatWeapon;
        this.lastKey = Character.getLastKey();
    }

    public draw(lastKey, x){

        this.startPositionX = x;


        if (this.lastKey == 0) {
            this.weaponSpeed = 25;
            this.weaponDirection = 1;
        }
        if (this.lastKey == 1) {
            this.weaponDirection = -1;
            this.weaponSpeed = -25;

        }

        this.x += this.weaponSpeed;

        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX("+this.weaponDirection+")";
    }

    public getX(){
        return this.x;
    }

    public getY(){
        return this.y;
    }

}