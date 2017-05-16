class Game {

    private character:Character;
    
    constructor() {
        console.log("The game has started!");
        this.character = new Character(0, 750, 65, 68, 32);

        let container:HTMLElement = document.getElementById("container");

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.character.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

} 


// load
window.addEventListener("load", function() {
    new Game();
});