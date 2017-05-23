class Idle implements Behaviour {

    public character: Character;

    constructor(c:Character){

        this.character = c;

    }

    performBehaviour(){
        console.log("Behaviour update");
    }

    startJumping(){
    }

}