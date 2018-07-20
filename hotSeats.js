let students = ["Garrett", "Andy", "Ronaldo", "Alieu", "Sage", "Bryan", "Oscar",
                "Leron", "Sammy", "Christian", "Gabriel", "Saif", "Pablo", "El-hassn", "Jeffrey"]


for(let i = 0; i < 4; i++){
    let randomNumber = Math.floor(Math.random() * students.length);
    let randomStudent = students[randomNumber]; 
    console.log(randomStudent);
    students.splice(randomNumber, 1);
}
console.log(students.length);
