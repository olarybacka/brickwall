export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    add(point: Point){
        this.x += point.x;
        this.y += point.y;
    }
}