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


