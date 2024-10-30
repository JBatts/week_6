
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

const person = { first: "King", middle: "Juck", last: "The First"}
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
list = getlist()// could return null if unsuccessfull
missing = null // Null is considered an object by typeof

// Complex Data Types - Collections ex. Array/Lists and Object/Dictionary
list1 = [111,222,333] // Array is an ordered list
dict = {color: "red", width: "100px"} // Object (Associative Array) {key: Value, key2: Value2}

