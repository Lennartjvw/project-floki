class startJumping implements Behaviour {

    public character: Character;

    private jump_y: number;
    private goingDown: boolean = false;
    private jumpLimit: number = 550;
    private isJumping: boolean;

    private timer: number;

    constructor(c:Character){

        console.log("Behaviour Jump!");

        this.character = c;
        this.jump_y = this.character.getY();
        this.isJumping = false;
    }

    performBehaviour(){
    }

    startJumping(){
        console.log("jump");
        let y = this.character.getY();

        if (!this.isJumping) {
          this.isJumping = true;
          
          this.timer = setInterval(() => {

            if (y > this.jumpLimit && !this.goingDown) {
              y -= 10;
              this.character.setY(y);
            } else {
              this.goingDown = true;
              y += 10;
              this.character.setY(y);
              if (y == this.jump_y) {
                clearInterval(this.timer)
                this.goingDown = false;
                this.isJumping = false;
              }
            }

          }, 25)
        }
    }
}
