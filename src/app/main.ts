import { Ball } from './ball';
import { randomColor } from './helpers';




const container = document.querySelector(".container");
const ballElement: HTMLElement = <HTMLElement>document.querySelector(".ball");
const boardElement: HTMLElement = <HTMLElement>document.querySelector(".game-board");

const ball:Ball = new Ball(parseInt(getComputedStyle(ballElement)['border-top-left-radius']), ballElement.offsetLeft, ballElement.offsetTop, 1, -1);



//set the board
randomColor();

// constraints
ball.setConstraints(0, 0, boardElement.offsetWidth, boardElement.offsetHeight);


// move the ball 
setInterval(() => {
    let {x: posX, y: posY} = ball.move();

    ballElement.style.left = posX + 'px';
    ballElement.style.top = posY + 'px';
}, 10) 




