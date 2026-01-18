const accId = "001xx000003DGbYAAW";
let customerName = "Acme Corporation";          
var customeremail = "customer@example.com";     
customerCity = "bhavanagar"

let accState; // undefind                   //decelartion       -->creating varibles
accState = "gujarat"                        //Initialization  --> first time giving value 


/*
    prefer not to use var 
    because of issues in function scope and block scope 
    and don't use variable like this customerCity = "bhavanagar"
*/


// accId = "001xx000003DGbZAAW"; // This will cause an error because accId is a constant

//reassignment
customerName = "Globex Corporation"; // This is valid
customeremail = "customer@globex.com"; // this is also valid
customerCity = "ahemdabad"

console.log(accId);
console.log(customerName);
console.log(customeremail);
console.log(customerCity);
console.log(accState);

//you can write all log in consoletable to print all veriables together in table

console.table([accId,customerName,customeremail,customerCity, accState])


