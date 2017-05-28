/// <reference path="weapons/axe.ts" />

class Game {

    private character: Character;
    private archer: Archer;
    private background: Background;

    private axe: Axe;

    private axeArray: Array<Axe> = [];
    
    constructor() {
        console.log("The game has started!");
        this.background = new Background();
        this.character = new Character(0, 600, 65, 68, 32, this);

        let container:HTMLElement = document.getElementById("container");

        requestAnimationFrame(() => this.gameLoop());
    }

    public addAxe(axe: Axe) {
        this.axeArray.push(axe);
    }

    private gameLoop() {
        this.character.draw();
        this.character.update();

        // this.background.movingBackground(this.character.getX);

        for (const axe of this.axeArray) {
            axe.draw(Character.getLastKey(), this.character.getX());
        }
    
        requestAnimationFrame(() => this.gameLoop());
    }

} 

window.addEventListener("load", function() {
    new Game();
});