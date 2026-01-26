let marvelHeros = ["Ironmen", "Dr. strange", "spidermen"]
let dcheros = ["flash", "supermen","supergirl"]

// marvelHeros.push(dcheros)

// console.log(marvelHeros);               //["Ironmen", "Dr. strange", "spidermen",["flash", "supermen","supergirl"]]
// console.log(marvelHeros[3][1]);         //suprmen

//for better code 
let concatArr = marvelHeros.concat(dcheros)

// console.log(concatArr);                   //     [ 'Ironmen','Dr. strange','spidermen','flash','supermen','supergirl']


//for this type 

let newHeros = [...marvelHeros,...dcheros]
// console.log(newHeros);                                                  //as same as given in concat

//////////////////

let arr_in_Arr = [10,100,[20,30,40],50,[60,70,[70,80,90,]]]

let essayArr = arr_in_Arr.flat(Infinity)
console.log(essayArr);      //[10, 100, 20, 30, 40,50,60, 70, 70, 80,90] 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Array.isArray("saurabh"));                              //false
console.log(Array.from("saurabh"));                                 //['s', 'a', 'u','r', 'a', 'b','h']
console.log(Array.from({name : "saurabh"}));                        //[]

/////////////////

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





