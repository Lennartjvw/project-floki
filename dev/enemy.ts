class Enemy extends GameObject {

    public width = 100;
    public height = 200;

    protected whatEnemy: string;

    private character: Character;

    constructor(whatEnemy: string){
        super("enemy");
        console.log("And the enemy is an: " + whatEnemy);

        let container:HTMLElement = document.getElementById("container");

        this.div = document.createElement(whatEnemy);
        container.appendChild(this.div);
    }

    public draw() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

    public getX(){
        return this.x;
    }

    public getY(){
        return this.y;
    }

}