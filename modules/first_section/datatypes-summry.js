//data types has two type primitive and non-primitive

//primitive --> 7types:
//string ,number,null,boolean,undefined,symbol,BigInt


//reference type(non primitive):
//Array,objects,function


//java script in dynamically typed language ---> you have not to declare type of varible
//ex: 
const varibale = 100           //number
const scoreValue = 100.3   //nummber
const temprature = null   
const BooleanData = true    //boolean
const varString = "saurabh"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// stack (primitive) , heap (non-primitive)
let mohan =  "tushar@gmail.com"
let krishna = mohan 

console.log(krishna);
console.log(mohan);         //both  have same value but krishna get copy value of mohan from stack memory

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//heap
let userone = {
    email : "user@gmail.com",
    no : "xxxxxxxx79"
}

let usertwo = userone
usertwo.email = "mohini@gmail.com"              // when you change value of usertwo it's also change value of userone because usertwo get reference of userone 

console.log(userone);        //{ email: 'mohini@gmail.com', no: 'xxxxxxxx79' }
console.log(usertwo);       //{ email: 'mohini@gmail.com', no: 'xxxxxxxx79' }
