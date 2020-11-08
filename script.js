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

console.log("CODE 1.9");
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

console.log("CODE 2.0");
console.log("Comparsion Equality operators and strict equaltiy operator");
console.log("Equality operator");
function equalityOperator(ten){
if(ten==10){//equality operator(==), not assign operator(=)
        return "It is equal to 10"
    }
    return "It is not equal"

}

var firstUserInput=10;
var secondUserInput=9;
var thirdUserInput="10";
console.log(equalityOperator(firstUserInput));//=>It is equal to 10
console.log(equalityOperator(secondUserInput));//=>It is not equal
console.log(equalityOperator(thirdUserInput)); //=>It is equal to 10

console.log("Strict equality operator");
function strictEqualityOperator(ten){
    if(ten===10){
        return "It is equal to number 10 or value type"
    }
    return "It is not equal number or  value type"
}
console.log(equalityOperator(firstUserInput));
//=>It is equal to number 10 or value type
console.log(equalityOperator(secondUserInput));
//=>It is not equal number or  value type
console.log(equalityOperator(thirdUserInput));
//=>It is not equal number or  value type

console.log("Code 2.1")
function testNotEqual(val) {
    if (val !=99){//If val is not equal to 99 print Not equal
        return "Not Equal";
    }
    return "Equal";//If val is equal to 99 print Equal
}
console.log(testNotEqual(99));//=>Equal
console.log(testNotEqual(12));//=>Not Equal

console.log("Code 2.2")
function testStrictNotEqual(val){
    if (val !==10){//If  val is equal to 10 + data type print Not equal
        return "Not Equal";
    }
    return "Equal";//If val is equal to 10 but not data type print true
}

var ten=testStrictNotEqual(10);
var string=testStrictNotEqual("10");
var nine=testStrictNotEqual(9);

console.log(ten);//=>Equal
console.log(string);//=>Equal
console.log(nine);//=>Not Equal

  
console.log("Code 2.3");
function testGreaterThan(val) {
    if(val>1000){
        return "Over 1000";
    }
    if(val>100){
        return "Over 100 or 1000";
    }
    if(val>10){
        return "Over 10 or 100";
    }
    return "under or 10";  
}
console.log(testGreaterThan(1));//=>under or 10
console.log(testGreaterThan(10));//=>under or 10
console.log(testGreaterThan(100));//=>Over 10 or 100
console.log(testGreaterThan(1000));//=>Over 100 or 1000
console.log(testGreaterThan(10000));//=>Over 1000

console.log("Code 2.4");
function testLogicalAnd(val){
    if(val>25 && val<50){
        return "Yes, you selected range between 50 to 25"
    }
    return "No,you select less than 25 or greater than 50"
}
var inRange=(testLogicalAnd(25));//Put number between 25 & 50
var outRange=(testLogicalAnd(51));//Put number less than or greater than 25,50

console.log(inRange);//=>Yes, you selected range between 50 to 25
console.log(outRange);//=>No,you select less than 25 or greater than 50

console.log("Code 2.5");
function testLogicalOr(val){
    if(val<25 || val>50){
        return "Outside"
    }
    return "Inside"
}
var inside=testLogicalOr(25);
var outside=testLogicalOr(51);
console.log(inside);
console.log(outside);

console.log("Code 2.6");
function testElse(password){
    if(password===123){
        result ="Correct Password";
    }else{
        result="Incorrect Password";
    }
    return result;
}
var correctUser=testElse(123);//Right data and number
var wrongUser=testElse("blahblah");
var wrongUser2=testElse("123");//Wrong data type
console.log("Correct user "+correctUser);
console.log("Uncorrect user "+wrongUser);
console.log("Uncorrect user 2 "+wrongUser2);

console.log("CODE 2.7");
function testElseIf(lotteryNo){
    //The lottery number accept enlgish alphabet captial or small letter
    if(lotteryNo=="ABC0123456789"||lotteryNo=="abc0123456789"){
        return "Congrulation!You have win the prize!";
    }else if(lotteryNo=="CBA9876543210"||lotteryNo=="cba9876543210"){
        return "Congrulation!You have win the constellation prize!";
    }else if(string.length>13||string.length<13){
        return "Invalid number"

    }else{
        return "Sorry!Try again.";
    }
}
var invaild_input=testElseIf("abc012345678");//If user miss one number print invaild
var winner=testElseIf("abc0123456789");
var secondWinner=testElseIf("CBA9876543210");
var loser=testElseIf("CBA9876543213");
console.log(invaild_input);
console.log(winner+"Your lottery number is ABC0123456789");
console.log(secondWinner+"Your lottery number is CBA9876543210");
console.log(loser);

console.log("Is your salary low or high?");
function salary(amount){//This condition get from underneath var
     if(amount <=0){
        return amount; 
    }else if(amount<=200){
        return "low.";
    }else if(amount<=300){
        return "not so bad.";
    }else if(amount<=400){
        return "average.";
    }else if(amount<=500){
        return "good but not enough if you have big family.";
    }else if(amount<=600){
        return "good.You have enough to support your family and rent an average house if you don't have house.";
    }else if(amount<=700){
        return "good.You can buy Mac book with credit card if you want.";
    }else if(amount<=800){
        return "good. You can buy average apartment with installment."
    }else if(amount<=900){
        return "good.You can buy average apartment with full payment in one year if you save 20% of your salary per month. "
    }else if(amount<=1000){
        return "very good.Invest your money to your own business if you want."
    }else if(amount>=2000){
        return("higher than most peoples. Travel around the world if your work closed.")
    }else if( amount=string){
        return "fill with not a numbers or not fill anything. "
    }
}
//You can put number instead of NaN data type in var amount
var amount=178;//This var amount work for function salary() & final()
function final(amount){//This condition get from var amount
    if(amount<=0){
        return "Please fill your amount greater than 0";

    }else{
        return "Your salary is "+ salary(amount);
        }
}
console.log(final(amount));

console.log("CODE 2.8");
function caseInSwitch(val){
    switch(val){
        case 1:
            return "alpha";
            break;
            case 2:
                return "beta";
                break;
                case 3:
                    case 4:
                        return "theta";
                        break;
                        case 5:
                            return "gamma";
                            break;
    }
}
console.log(caseInSwitch(3));

console.log("CODE 2.9");
function switchOfStaff(val){
    switch(val){
        case "a":
            return "Apple";
            break;
            case "b":
                return "Bag";
                break;
                case "c":
                    return "cat";
                    break;
                    default:
                        return "staff";
                        break;
    }

}
console.log(switchOfStaff("not include"));//=>staff"
