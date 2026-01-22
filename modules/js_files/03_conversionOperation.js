//for numbers

let score = "33"

console.log(typeof(score));
console.log(typeof score);

let valueinNumber = Number(score)

console.log(typeof(valueinNumber))
console.log(valueinNumber)

//for string to number value

let num = "saurabh"

console.log(typeof(num));
console.log(num);
                                                                                        // string --> NaN
let numberValue = Number(num)

console.log(typeof(numberValue))
console.log(numberValue)


//for number to string conversion

let numTostring = 33

let numInstring = String(numTostring)
console.log(numInstring)
console.log(typeof numInstring)


// for null value 

let value1 = null

console.log(typeof(value1));
console.log(value1);

let ValueNum = Number(value1)                                                    // null gives value -->0

console.log(typeof(ValueNum))
console.log(ValueNum)


//for undefined

let value2 = undefined

console.log(typeof(value2));
console.log(value2);

let numValue = Number(value2)                    //undefined --> NaN

console.log(typeof(numValue))
console.log(numValue)


//for boolean conversion

let TruFal = "saurabh"

console.log(typeof(TruFal));                                                 // "" --> false
console.log(typeof TruFal);                                                  // "something" --> true
                                                                             //   0 --> false; false --> 0
let boolenNum = Boolean(TruFal)                                              //  1 --> true; true --> 1

console.log(typeof(boolenNum))
console.log(boolenNum)
                                                           
