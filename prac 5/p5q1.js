var readlineSync = require("readline-sync");
var number = readlineSync.questionInt("What is the number? ");
if (number>0 && number<50) {
    console.log("Input Accepted! Program terminated..");

}else{
    console.log("Invalid number of children! \n" +
        "Please enter in the range of 0 to 50.\n")
}