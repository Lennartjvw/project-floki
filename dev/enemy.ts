class Enemy extends GameObject {

    protected whatEnemy: string;

    private character: Character;

    constructor(whatEnemy: string, x: number, y: number) {
        super("enemy", x, y, 100, 200);
        console.log("And the enemy is an: " + whatEnemy);

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement(whatEnemy);
        container.appendChild(this.div);
    }

    public draw() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}