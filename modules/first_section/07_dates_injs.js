//dates

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());

// console.log(typeof mydate);//imp

//////////////////////////////////////////////////////////////////////////////

// let mycreatedDate = new Date(2007,10,13,0,0)
// let mycreatedDate = new Date("2007-11-13")
let mycreatedDate = new Date("11-13-2007")

// console.log(mycreatedDate.toLocaleString());

//////////////////////////////////////////////////////////////////////////////

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(mycreatedDate.getTime());
//in second
console.log(Math.floor(Date.now()/1000));

let newDate  = new Date()
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default' ,{
    weekday : "long",
})




