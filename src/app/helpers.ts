
export const randomColor= function() {
    let i: number;
    let j: number;
    for(j=1; j<8; j++){
        for(i=1; i<9; i++){
            let R: number = Math.floor((Math.random() *255)+1); 
            let G: number = Math.floor((Math.random() *255)+1); 
            let B: number = Math.floor((Math.random() *255)+1);
            const color: HTMLElement = <HTMLElement>document.querySelector(".col-" + i + ".row-" + j);
            color.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";   
        }
    }
}