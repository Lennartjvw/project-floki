class GameObject {

    protected object: string;

    protected x: number;
    protected y: number;

    public width: number;
    public height: number;

    protected div: HTMLElement;

    constructor(object: string, x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        console.log("This object has been created: " + object);
    }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public setY(y: number): void {
    this.y = y;
  }
}