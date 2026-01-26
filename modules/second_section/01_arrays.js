// //arrays

const myArray = [1,2,3,4,5,6,8,7]

console.log(myArray[0]);

const newArray = new Array("heros",1,20,"sanket")

console.log(newArray[2]);

//Array method

newArray.push("saurabh")
console.log(newArray);              //[ 'heros', 1, 20, 'sanket', 'saurabh' ]

newArray.pop()
console.log(newArray);              //[ 'heros', 1, 20, 'sanket' ]


newArray.unshift(10)
console.log(newArray);              //[ 10,'heros', 1, 20, 'sanket' ]

newArray.shift()
newArray.shift()
console.log(newArray);              //[ 1, 20, 'sanket' ]


console.log(newArray.includes(9));              //false
console.log(newArray.indexOf(20));              //1


const otherArr = myArray.join()

console.log(typeof otherArr);               //string
console.log(myArray);                       //as it it

//*************************************************************************************************************/

//splice ,slice


const mnArr = [10,20,30,40,50,60]

console.log("A",mnArr);//as same as

let mnArr2 = mnArr.slice(2,5)
console.log(mnArr2);                                    //[30,40,50]
console.log("B",mnArr);//as same as

//######################################

let mnArr3 = mnArr.splice(2,5)
console.log(mnArr3);                                    //[30,40,50,60]
console.log("c",mnArr);                                 //c [ 10, 20 ]



