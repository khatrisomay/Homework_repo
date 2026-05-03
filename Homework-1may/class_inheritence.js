class Box{
    constructor(length,b){
        this.length=length;
        this.b=b;

    }
    showDimentions(){
        console.log(`${this.length}`);
    }
}
const b1 = new Box(12,99);
b1.showDimentions();