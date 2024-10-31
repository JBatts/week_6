
x = 123 //Assign a value to a variable (x)

let y = 456 // sets the initial value
console.log(y) // Logs 456 it hasn't been changed yet
y = 789 // changes the value 
console.log(y) // Logs 789 instead of 456

const TAX_RATE = 0.08; // You can NOT change a const variable (Recommended written capitalized)
// TAX_RATE = 0.12; // This causes an error

const list = [1, 2];
list.push(3); // Legal - No Error changing the content is allowed
// list = [] // You can't do this

const person = { first: "King", middle: "Juck", last: "The First" }
person.age = 22 // Legal adds "age" with a value of "22" above
// person = {} // You can't do this

var foo = "bar" //old school and ambigous (Generally don't use)

// Simple/Primative Data Types - Shape/Size of data in CPU memory

first = "Juck the King" // String of Characters 'a' "AAA" `aaaaa`
age = 22 // Number
DOB = new Date("08/09/2002")
console.log(DOB) // Date
goingToBeRich = true // Boolean - Logical true/flase
let u; // Undefined 
let getList = (a, b) => (a && b) ? [a, b] : null;
output = getlist(1,2)// Returns null if unsuccessfull
missing = null // Null is considered an object by typeof

// Complex Data Types - Collections ex. Array/Lists and Object/Dictionary
list1 = [111, 222, 333] // Array is an ordered list
dict = { color: "red", width: "100px" } // Object (Associative Array) {key: Value, key2: Value2}

// Operators - Math
// PEMDAS - Order of Operations 
sum = 4 + 5 // Addition
subtract = 5 - 4 // Subtraction
multi = 5 * 4 // Multiplication
divide = 12 / 4 // Division
exp = 5 ** 2 // Exponents (raise to the power of 2)

// Operators - Logic
// Truth Tables 0 is false, 1 is true
chocolate = true
vanilla = true
tasty = chocolate && vanilla // AND

// && And
// A B Output
// 0 0  0
// 0 1  0
// 1 0  0
// 1 1  1

rich = false
smart = true
good = rich || smart // Or

// || Or
// A B Output
// 0 0  0
// 1 0  1
// 0 1  1
// 1 1  1

cloudy = !sunny // ! = Not
// A Output
// 1  0
// 0  1


// More Logical Operators
a = "1" // String with a numeric character of "1"
b = 2 // Integer number with a value of 2
a == b // Equal "1" == 1 - Avoids converting text to a number
a === b // Equal and the same data type
a != b // Not Equal (Ignores data type)
a !== b // Not Equal including data type
a < b // a is less than b
a > b // a is greater than b
a <= b // a is less than or equal to b
a >= b // a is greater than or equal to b

if (hasFriends) { // If you have multiple friends do this part (Do or Not to do)
    console.log("I am glad you have friends")

} else if (hasOneFriend) { // If you have one friend do this part (Optional)
    console.log("There is nothing wrong with only one friend")

} else { // If neither exp or exp2 then do this (Optional)
    // Only if you don't have multiple friends and don't have one friend
    console.log("So you don't have friends, LOL") // 
}

//Ternary three way operator
action = isGreen ? "GO" : "STOP" // If(?) isGreen is true we say "GO" else(:) say "NO"

// Loops  - Iterates over an iterable collection like an array or list of keys
// while(exp), Good for learning loop steps
// do while(exp), Good when you want to always enter the loop once

// for(;;) classic, We want to use the index - Can do Anything

// for(of), Use a Array/List
// for(in), Use keys of an Object

// ES6 - Functional Programming
// .forEach(), Apply a function to each item
// .map(), Transforms each item, returning the same number of outputs and inputs
// .filter(), Returns all matches in a potentially shorter or even empty array
// .find(), Returns first matching object from list/array
// .findIndex(), Returns the position (index) where the first match was found

// Code Reuse - Functions (A block of code to be reused)
function add(a, b) { // Receive positional parameters in order
    return a + b;
}
// Arrow Function
const addCorrectly = (a, b) => a + b; // Same but shorter to assign an anymous function to an identifier
result = addCorrectly(12, 24); // Call or Invoke function passing arguments 12 and 24
console.log(result); // Logs 36

// IIFE - Immediately invoked function experssion (Logs 36) - GROSS
console.log(((a,b)=>a+b)(12,24)); 

// Deprecated
// Schedule for removal (Too Old)

// Coding Youtubers
// FireShip
// Programming with Mosh
// Aniakubow