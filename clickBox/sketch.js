function setup(){
    createCanvas(600,600);
    fill('blue');
    rect(0,0, 600, 600);
}

let color = 'blue';
let toggle = true;

function mouseClicked(){
    if(toggle){
        color = 'red';
        fill(color);
        rect(0,0,600,600);
        toggle = false;
    }else{
        color = 'blue';
        fill(color);
        rect(0,0,600,600);
        toggle = true;
    }
}