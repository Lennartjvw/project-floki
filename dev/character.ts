/// <reference path="gameobject.ts" />


class Character extends GameObject {

    private leftkey : number;
    private rightkey : number;

    private leftSpeed : number = 0;
    private rightSpeed : number = 0;

    constructor(x: number, y: number, left: number, right: number){
        super("Character");

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("character");
        container.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.leftkey = left;
        this.rightkey = right;

        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

    }

    private onKeyDown(event: KeyboardEvent){

        if(event.keyCode == 65){
            this.leftSpeed = 10;
            console.log("A was pressed (left)");
        }
        else if(event.keyCode == 68) {
            this.rightSpeed = 10;
            console.log("D was pressed (right)");
        }

    }

    private onKeyUp(event: KeyboardEvent){
        
        if(event.keyCode == 65) {
            this.leftSpeed = 0;
        }
        else if(event.keyCode == 68){
            this.rightSpeed = 0;
        }


    }

    public draw() {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)"; 
    }



}