var input = require('readline-sync')
var users = parseInt(input.question("How many users? "))
var sum = "";
class BankAccount{
    constructor(name, savings) {
        this.name = name
        this.savings = savings
    }
    getBalance(){
        return (this.name + " has $" + this.savings + " in savings.")
    }
}
for (var i =0; i<users; i++){
    var n = input.question("What is your name? ")
    var s = parseFloat(input.question("How much is your savings? "))
    var a = new BankAccount(n, s)
    sum += a.getBalance() + "\n"
}
console.log("\n" + sum)

