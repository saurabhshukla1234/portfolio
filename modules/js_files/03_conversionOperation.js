//for numbers

let score = "33"

console.log(typeof(score));
console.log(typeof score);

let valueinNumber = Number(score)

console.log(typeof(valueinNumber));
console.log(valueinNumber);

//for string to number value

let num = "saurabh"

console.log(typeof(num));
console.log(num);
                                                                                        // string --> NaN
let numberValue = Number(num)

console.log(typeof(numberValue));
console.log(numberValue);


//for number to string conversion

let numTostring = 33

let numInstring = String(numTostring)
console.log(numInstring);
console.log(typeof numInstring);


// for null value 

let value1 = null

console.log(typeof(value1));
console.log(value1);

let ValueNum = Number(value1)                                                    // null gives value -->0

console.log(typeof(ValueNum));
console.log(ValueNum);


//for undefined

let value2 = undefined

console.log(typeof(value2));
console.log(value2);

let numValue = Number(value2)                    //undefined --> NaN

console.log(typeof(numValue));
console.log(numValue);


//for boolean conversion

let TruFal = "saurabh"

console.log(typeof(TruFal));                                                 // "" --> false
console.log(typeof TruFal);                                                  // "something" --> true
                                                                             //   0 --> false; false --> 0
let boolenNum = Boolean(TruFal)                                              //  1 --> true; true --> 1

console.log(typeof(boolenNum));
console.log(boolenNum);






//***************************************************Operation*************************************************************** */



console.log(2+2);       //4
console.log(2-2);       //0
console.log(2*2);       //4
console.log(2/2);       //1
console.log(2**3);      //8
console.log(2%3);       //2

let someNumber = 3
let numberInnegative = -someNumber
console.log(numberInnegative);

let str1 = "hello"
let str2 = " saurabh"
let str3 = str1 + str2

console.log(str3);              //hello saurabh

console.log(2 + "1");           //21
console.log("1" + 2);           //12
console.log("1" + 2 + 2);       //122
console.log(1 + 2 +"2");        //32

// console.log( (3 + 7) * 5 % 8);       good method to write code

console.log(+true);         //1
console.log(+"");           //0



let num1 , num2 , num3;
num1 = num2 = num3 = 2 + 2;



let gameCounter = 100
gameCounter++;                                      //postfix increment
console.log(gameCounter);               //101
++gameCounter;                                      //prefix increment
console.log(gameCounter);               //101


