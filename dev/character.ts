/// <reference path="gameobject.ts" />
/// <reference path="weapon.ts" />
/// <reference path="weapons/axe.ts" />
/// <reference path="main.ts" />


class Character extends GameObject {

    public behaviour: Behaviour;

    public width = 75;
    public height = 200;

    private leftkey: number;
    private rightkey: number;
    private spacebar: number;
    private static lastKey: number = 0;

    private direction:number = 1;

    private leftSpeed: number = 0;
    private rightSpeed: number = 0;
    
    private game: Game;

    public axes: Array<Axe> = new Array<Axe>();
    public axeArray = [];
    public axe:Axe;


    constructor(x: number, y: number, left: number, right: number, space: number, game: Game){
        super("Character");

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("character");
        container.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.leftkey = left;
        this.rightkey = right;
        this.spacebar = space;

        this.game = game;

        this.behaviour = new startJumping(this);

        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    public getX() {
        return this.x;
    }

    public getY(){
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public update(){
        this.behaviour.performBehaviour();
    }

    public static getLastKey(): number { return Character.lastKey; }

    private onKeyDown(event: KeyboardEvent){
        if(event.keyCode == 65) {
            this.leftSpeed = 7;
            console.log("A was pressed (left)");
            Character.lastKey = 1;
            this.direction = -1;
        }
        else if(event.keyCode == 68) {
            this.rightSpeed = 7;
            console.log("D was pressed (right)");
            Character.lastKey = 0;
            this.direction = 1;
        }
        else if(event.keyCode == 32) {
            this.startJumping();
        }
        else if(event.keyCode == 75){
            this.attack();
        }
    }

    private onKeyUp(event: KeyboardEvent){
        if(event.keyCode == 65) {
            this.leftSpeed = 0;
        }
        else if(event.keyCode == 68) {
            this.rightSpeed = 0;
        }
    }

    public draw() {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX("+this.direction+")";
    }

    public startJumping(){
        this.behaviour.startJumping();
    }

    public attack(){
        console.log("K was pressed (attack)");
        this.game.addAxe(new Axe(this.x, this.y + 55));
        console.log("There are " + this.axeArray.length + " axes in the array");
    }

}