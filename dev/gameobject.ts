class GameObject {

    protected object: string;

    protected x: number;
    protected y: number;

    protected div: HTMLElement;

    constructor(object:String){
        console.log("This object has been created: " + object);
    }

    public getPositionX(): number { 
        return this.x; 
    }
}