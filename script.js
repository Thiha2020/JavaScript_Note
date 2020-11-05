console.log("CODE 1.1")
function functionWithArgs(x,y) {
    console.log(x+y);
}
functionWithArgs:functionWithArgs(1,2);
functionWithArgs:functionWithArgs(7,9);

console.log("CODE 1.2");
function myLocalScope() {
    var myVar = "Visible within function.";
    console.log('Inside my local scope, I am', myVar);
}
console.log(myLocalScope());

console.log("CODE 1.3");
//Global variable
var transport="Bus";

function myChoice() {
    //Local variable within function
    var transport="Taxi";
    return transport;
}
myChoice();
console.log(myChoice());

console.log("CODE 1.4");
//Return statement
function timesTen(num){
    return num*10;
}

var tenIntonum=timesTen(10);
var fiveIntonum=timesTen(5);
var zeroIntonum=timesTen(0);

console.log(tenIntonum, fiveIntonum, zeroIntonum);

console.log("CODE 1.5");
//Understanding Undefined Value returned from a Function
var sum = 0;

function addThree() {
   sum = sum + 3; 
}
var sum = 1;
function addFive() {
   sum= sum + 5;
}

console.log(addThree());
console.log(addFive());


