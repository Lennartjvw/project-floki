class Enemy extends GameObject {

    protected whatEnemy: string;

    private character: Character;

    constructor(whatEnemy: string, x: number, y: number, width: number, height: number) {
        super("enemy", x, y, width, height);
        console.log("And the enemy is an: " + whatEnemy);

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement(whatEnemy);
        container.appendChild(this.div);
    }

    public draw() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

    public hit(){
        this.div.remove();
    }

}