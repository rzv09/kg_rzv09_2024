// Author: Raman Zatsarenko rzv090701@gmail.com

// get command line args
var args = process.argv.slice(2);
// console.log('args: ', args);
var result = "";
var nums = {
    "0" : "Zero",
    "1" : "One",
    "2" : "Two",
    "3" : "Three",
    "4" : "Four",
    "5" : "Five",
    "6" : "Six",
    "7" : "Seven",
    "8" : "Eight",
    "9" : "Nine"
};

for (let i=0; i<args.length; i++) {
    let num = parseInt(args[i]);
    let stringNum = "";
    let minus = "";

    // if a number is negative
    if (num < 0) {
        minus = "Minus";
        num = Math.abs(num);
    }
    // if a number is zero
    if (num == 0) {
        stringNum = nums[num];
    }
    while (num != 0) {
        stringNum = nums[num%10] + stringNum;
        num = Math.floor(num/10);
    }
    stringNum = minus + stringNum;
    // don't add a comma if this is the last number to process
    i == args.length-1 ? result += stringNum : result += stringNum + ",";

}
// print to stoud
console.log(result)