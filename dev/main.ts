class Game {
    
    constructor() {

        console.log("The game has started!");

        let container:HTMLElement = document.getElementById("container");

        requestAnimationFrame(() => this.gameLoop());

    }

    private gameLoop(){

        requestAnimationFrame(() => this.gameLoop());
        
    }

} 


// load
window.addEventListener("load", function() {
    new Game();
});