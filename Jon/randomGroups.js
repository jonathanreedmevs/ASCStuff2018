let students = ["Garrett", "Andy", "Ronaldo", "Alieu", "Sage", "Bryan", "Oscar",
                "Leron", "Sammy", "Christian", "Gabriel", "Saif", "Pablo", "El-hassn", "Jeffrey"]
let groups = [];
let numOfGroups = process.argv[2];

//init groups
// for(let i = 0; i < numOfGroups; i++){
//     groups[i] = [];
//     console.log(groups);
// }

// let group1 = [],  group2 = [], group3 = [], group4 =[], shuffledStudents = [];
let shuffledStudents = [];

while(students.length != 0){
    let randomIdx = Math.floor(Math.random() * students.length);
    let randomStudent = students[randomIdx];
    shuffledStudents.push(students.splice(randomIdx, 1));
}

for(let i = 0; i < shuffledStudents.length; i++){
    // if(i % 4 == 0){
    //     group1.push(shuffledStudents[i]);
    // }else if(i % 4 == 1){
    //     group2.push(shuffledStudents[i]);
    // }else if(i % 4 == 2){
    //     group3.push(shuffledStudents[i]);
    // }else{
    //     group4.push(shuffledStudents[i]);
    // }
    let idx = i % numOfGroups
    groups[idx].push(shuffledStudents[i]);
}

for(let i = 0; i < numOfGroups; i++){
    console.log("Group" + i + groups[i]);
}

// console.log("Group1 : " + group1);
// console.log("Group2 : " + group2);
// console.log("Group3 : " + group3);
// console.log("Group4 : " + group4);