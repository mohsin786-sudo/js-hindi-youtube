// primitive 

// 7 types : String , Number ,  Booolean, null,undefined, symbol 
// Bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 123437287836468739n


// Reference (Non prirmitive)

// Array,Objects,Functions

const heros = ["Shaktiman","naagraj","doga"];
let myObj = {
    name:"mohsin",
    age:21,
}


const myFunction = function(){
    console.log("hello world");

}

console.log(typeof bigNumber);



//  stack (Primitive),Heap(Non-Primitive

let myYoutubename = "Mohainkazidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log (myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com"
   

}
let userTwo = userOne

userTwo.email = "mohsin@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
