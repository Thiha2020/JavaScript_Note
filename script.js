console.log("CODE 1.1")
function functionWithArgs(x,y) {
    console.log(x+y);
}
functionWithArgs:functionWithArgs(1,2);
functionWithArgs:functionWithArgs(7,9);

console.log("CODE 1.2");
function myLocalScope() {
    var myVar = "Visible";
    console.log('Inside my local scope, I am', myVar);
}
myLocalScope();
console.log('Outside my local scope,I am', myVar);
