/// <reference path="gameobject.ts" />


class Character extends GameObject {

    private leftkey: number;
    private rightkey: number;
    private spacebar: number;

    private leftSpeed: number = 0;
    private rightSpeed: number = 0;


    private jump_y: number;
    private goingDown: boolean = false;
    private jumpLimit: number = 700;
    private jumping;

    constructor(x: number, y: number, left: number, right: number, space: number){
        super("Character");

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement("character");
        container.appendChild(this.div);

        this.x = x;
        this.y = y;

        this.jump_y = this.y;

        this.leftkey = left;
        this.rightkey = right;
        this.spacebar = space;

        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));

    }

    private onKeyDown(event: KeyboardEvent){

        if(event.keyCode == 65) {
            this.leftSpeed = 5;
            console.log("A was pressed (left)");
        }
        else if(event.keyCode == 68) {
            this.rightSpeed = 5;
            console.log("D was pressed (right)");
        }
        else if(event.keyCode == 32) {
            this.jumping = setInterval(this.jump.bind(this), 10)
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
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)"; 
    }

    private jump() {
        if(this.y > this.jumpLimit && !this.goingDown){
            this.y -= 10;
            console.log("Jumping: " + this.y)
        }
        else {
            this.goingDown = true;
            this.y += 10;
            if(this.y == this.jump_y){
                clearInterval(this.jumping)
                this.goingDown = false;
                } 
        }

    }

}