/// <reference path="weapons/axe.ts" />
class Game {

    private character: Character;

    private axe: Axe;

    private firstBoss: FirstBoss;

    private utils: Utils;

    private axeArray: Array<Axe> = [];

    
    constructor() {
        console.log("The game has started!");
        this.character = new Character(0, 600, 65, 68, 32, this);
        this.firstBoss = new FirstBoss(600,400, 500, 600);

        this.utils = new Utils();

        let container:HTMLElement = document.getElementById("container");

        requestAnimationFrame(() => this.gameLoop());
    }

    public addAxe(axe: Axe) {
        this.axeArray.push(axe);
    }

    private gameLoop() {
        this.character.draw();
        this.character.update();

        this.firstBoss.draw();

        // console.log("character levens: "+this.character.getHealth);
        // console.log("first boss levens: "+this.character.getHealth);

        if (this.utils.hasOverlap(this.character, this.firstBoss)){
            console.log("hit!");
            this.character.hit(this.firstBoss.getDamage());
            this.firstBoss.hit(this.character.getDamage());
        }
        else {
            console.log("no hit!");
        }

        for(var axe of this.axeArray){
            
            if(this.utils.hasOverlap(axe, this.firstBoss)){
                console.log("axe hit!");
                this.firstBoss.hit(this.character.getDamage());
            }
            else {
                console.log("no axe hit!");
            }
        }

        for (const axe of this.axeArray) {
            axe.draw(Character.getLastKey(), this.character.getX());
        }
    
        requestAnimationFrame(() => this.gameLoop());
    }

} 

window.addEventListener("load", function() {
    new Game();
});