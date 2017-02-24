import { Point } from './point';


export class Ball {
    radius: number;

    pos: Point;

    dir: Point;

    min: Point;
    max: Point;
    
    constructor(radius, posX:number, posY:number, dirX:number, dirY:number) {
        this.radius = radius;
        this.pos = new Point(posX, posY);
        this.dir = new Point(dirX, dirY);
     }

    move() : Point {

        // top
        if( this.pos.y + this.dir.y <= this.min.y){
            console.log("top")
            this.dir.y *= -1;
        }
        // right
        if (this.pos.x + this.dir.x + this.radius * 2 >= this.max.x){
            console.log("right")
            this.dir.x *= -1;
        }
        // left
        if (this.pos.x + this.dir.x <= this.min.x) {
            console.log("left")
            this.dir.x *= -1;
        }
        // bottom
        if (this.pos.y + this.dir.y + this.radius * 2 >= this.max.y){
            console.log("botton")
            this.dir.y *= -1;
        }
        this.pos.add(this.dir);

        return this.pos;
     } 

    setConstraints(minX: number, minY: number, maxX: number, maxY: number){
        this.min = new Point(minX, minY);
        this.max = new Point(maxX, maxY);

    }
}
