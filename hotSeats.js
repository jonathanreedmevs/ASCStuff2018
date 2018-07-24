let students = ["Garrett", "Andy", "Ronaldo", "Alieu", "Sage", "Bryan", "Oscar",
                "Leron", "Sammy", "Christian", "Gabriel", "Saif", "Jeffrey", "Jonathon"]


for(let i = 0; i < 1; i++){
    let randomNumber = Math.floor(Math.random() * students.length);
    let randomStudent = students[randomNumber]; 
    console.log(randomStudent);
    students.splice(randomNumber, 1);
}

