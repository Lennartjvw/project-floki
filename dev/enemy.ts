class Enemy extends GameObject {

    protected whatEnemy: string;

    protected health: number;
    protected damage: number;

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

    public hit(dmgValue){
        if (this.health <= 0){
            this.dead();
        }
        else {
            this.health -= dmgValue;
            console.log("Your HP is: " + this.health);
        }
    }

    public getDamage() {
        return this.damage;
    }

    public getHealth() {
        return this.health;
    }

    public dead(){
        console.log("first boss died!");
    }

}