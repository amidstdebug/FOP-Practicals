var readlineSync = require("readline-sync");
var grade = readlineSync.questionFloat("What is your score?: ")
var gradeGiven = ""
if (grade>=80) {
    gradeGiven = "A";
}
else if (70<=grade<80) {
    gradeGiven = "B";
}
else if (60<=grade<70) {
    gradeGiven = "C";
}
else if (50<=grade<60){
    gradeGiven = "D";z
}
else if (grade<50){
    gradeGiven = "F";
}

console.log("Your grade is " + gradeGiven)
