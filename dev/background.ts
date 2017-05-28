class Background {

    private character:Character;

    private background: HTMLElement;

    constructor(){

        let container:HTMLElement = document.getElementById("container");

        this.background = document.createElement("container");
        this.background.style.backgroundImage = "url(images/bakground_game-01.png)";

        container.appendChild(this.background);

        this.background.style.backgroundSize = "1200px 800px"

    }

    // public movingBackground(characterX){
    //     console.log(characterX);

    //     console.log("checking background");

    //         if(characterX >= 600){

    //         this.background.style.backgroundPosition = `${-characterX * 4}px center`;

    //         }


    // }

}