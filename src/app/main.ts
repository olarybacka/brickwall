import { data } from "./helper";

const container = document.querySelector(".container");

class Ball {
    posX:number;
    posY:number;
    dirX:number;
    dirY:number;
    
    constructor(posX:number, posY:number, dirX:number, dirY:number) {
        this.posX = posX;
        this.posY = posY;
        this.dirX = dirX;
        this.dirY = dirY;
     }

    move() {
        this.posX += this.dirX;
        this.posY += this.dirY;
     } 

}

const ball:Ball = new Ball(100, 100, 1, 1);

const ballElement: HTMLElement = <HTMLElement>document.getElementsByClassName("ball")[0];

setInterval(() => {
    let posX = ball.posX;
    let posY = ball.posY;
    ball.move();

    ballElement.style.left = posX + 'px';
    ballElement.style.top = posY + 'px';
}, 10)




