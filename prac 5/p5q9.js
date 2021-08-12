var input = require("readline-sync");
var peak = input.questionInt("Peak Value: ");
var hash = "#"
if (peak>10){
    peak=3
}
for (var i = 0; i<=peak;i++){
    console.log(hash.repeat(i))
}
for(i=(peak-1);i>0;i--) {
    console.log(hash.repeat(i))
}