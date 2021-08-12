var input = require('readline-sync')
var fanBoolean = input.question("Is the fan on?")
if (fanBoolean === "Yes"){
    fanBoolean = "turned on"
}
else{
    fanBoolean = "turned off"
}
var s = parseInt(input.question("What is your fan speed from 1-3? "))

class FanSpeed{
    constructor(speed) {
        this.speed = speed
    }
    "1" : ["Slow"]
    "2" : ["Medium"]
    "3" : ["Fast"]
    showState(){
        return ("The fan is " + fanBoolean + " at " + this.speed + " speed.")
    }
}
console.log(FanSpeed(s))
