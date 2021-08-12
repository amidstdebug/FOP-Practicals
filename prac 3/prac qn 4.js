var year1 = 1996;
var year2 = 1900;
var count1 = (((year1%4)==0)&&((year1%100)!=0))
var count2 = (((year1/400)==0))
var isLeapYear =(count1||count2)
console.log("1996 is a Leap Year? " + isLeapYear)
var check2 =((((year2%4)==0)&&((year2%100)!=0))||(((year2/400)==0)))
console.log("1990 is a Leap Year? " + check2)
