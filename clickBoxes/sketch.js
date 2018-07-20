let img;
function preload(){
    img = loadImage('http://images5.fanpop.com/image/photos/31000000/haters-gonna-hate-random-31076705-500-375.jpg');
}
function setup(){
    createCanvas(600,600);
    fill('blue');
    rect(0,0,300,600);
    rect(300,0,300,600);
    image(img, 0,0);
}

let leftToggle = false;
let rightToggle = false;

function mouseClicked(){
    if(mouseX < 300){
        if(!leftToggle){
            fill('red');
        }else{
            fill('blue');
        }
        rect(0,0,300,600);
        leftToggle = !leftToggle;
    }else if(mouseX >= 300){
        if(!rightToggle){
            fill('red');
        }else{
            fill('blue');
        }
        rect(300,0, 300, 600);
        rightToggle = !rightToggle;
    }
    console.log(mouseX);
}