var readlineSync = require("readline-sync");
var input = readlineSync.questionInt("How many numbers: ");
var intArray = new Array(input);
var evenArray = [];
var oddArray = [];
for (var i = 0; i<intArray.length; i++) {
    intArray[i] = parseInt(Math.random() * 101);
    if (intArray[i]%2==0){
        evenArray.push(intArray[i])
    }else{oddArray.push(intArray[i])
    }
}
console.log("\n" + "Original array: " + intArray+ "\n");
console.log("Even numbers: " + evenArray + "\n")
console.log("Odd numbers: " + oddArray)
