var readlineSync = require("readline-sync");
var marks = new Array(10)
var student_count = 1
var A_count = 0
for (var i = 0; i<10;i++){
    marks[i] = readlineSync.questionInt("Enter marks for student #" + student_count + ": ");
    student_count++;
    if (marks[i]>=80 && marks[i]<=100){
        A_count++;
    }
}
console.log(A_count + " students got an A.");