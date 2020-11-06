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

console.log("CODE 1.6");
//Assignment with a Returned Value

var processed=0;

function processArg(num){
    return (num+3)/7;
}

processed=processArg(4);

console.log(processed);

console.log("CODE 1.7");

function nextInLine(arr, item) {
    arr.push(item);//Put number 6 to the end of the arry
    var removed=arr.shift();//Remove number 1 from the first array.
    //The underneath code return second console.log
    return ["Add "+item+" to the end of the array and "+"remove "+removed+
     " from the first of the array."]; 
}

var testArr = [1,2,3,4,5];
console.log("Before: " + (testArr));//=>Before: 1,2,3,4,5
console.log(nextInLine(testArr, 6));
/*=>"Add six to the end of the array and remove 1 from the first of the 
array*/
console.log("After: " + (testArr));//=>After: 2,3,4,5,6

console.log("CODE 1.8")
function welcomeToBoolean(){
    return true;
}

console.log(welcomeToBoolean());//=>true

console.log("CODE 1.9")
function selectBoy(male){
    if(male){
        return "You're boy."
    }
    return "You're not a boy."

}

var boy=selectBoy(true);
var girl=selectBoy(false);

console.log(boy);//The var boy assign value to true.So,=>I'm boy
console.log(girl);//The var girl assign value to true.So,=>You're not boy.
  
 
  
  



