const score = 444

//for specific number
const newscore = new Number(444)
console.log(newscore);
console.log(newscore.toString().length);
console.log(newscore.toFixed(5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const otherNumber = 200.802020

console.log(otherNumber.toPrecision(3));   //201

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const num = 1000000

console.log(num.toLocaleString('en-US'));//1,000,000
console.log(num.toLocaleString('en-IN'));//10,00,000

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*******************************                 MATHS             **********************************************//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(25.6));//26
console.log(Math.ceil(25.2));//26
console.log(Math.floor(25.9));//25
console.log(Math.min(25.9,4,50,100.10000));
console.log(Math.max(25.9,4,50,100.10000));

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const max = 20
const min = 10

console.log((Math.floor(Math.random()*(max - min)) +1) + min);                      //imp