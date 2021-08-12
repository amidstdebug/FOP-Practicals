var intArray = new Array(5);
for (var i = 0; i<intArray.length; i++){
    intArray[i] = parseInt(Math.random()*12);
}
console.log("Elements of intArray: " + intArray);
var max = intArray[0]
for(var q=1; q<intArray.length; q++) {
    if (intArray[q] > max) {
        max = intArray[q]
    }
}
console.log("The greatest value is " + max + ".")