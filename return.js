function blah(){
    return console.log("blah");
}
const result = blah();
console.log(result);


function rand(){
    //random number between 0-9
    const decimal = Math.random();
    const times10 = decimal * 10;
    const final = Math.floor(times10);
    return final;
}

const result1 = rand();
console.log(result1);

