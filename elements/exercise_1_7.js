// Find() Returns first matching object or undefined
// FindIndex() Returns index to the first or -1

function isOver60(arrayValue) {
    return arrayValue > 60;

    // if (arrayValue > 60) {
    //     return true;
    // } else {
    //     return false;
    // }
}

let numbers = [7, 9, 64, 60, 12, 23, 65, 62];

let firstValOver60 = numbers.find(isOver60) // returns 64

if (firstValOver60 != undefined) {
    console.log(firstValOver60);
} else {
    console.log("No values over 60")
}

let index = numbers.findIndex(isOver60) // return 2
console.log(index);
console.log(index === -1 ? "Can't find what you are looking for" : "Found at " + index)
//////////////////////////////////////

let allOver60 = numbers.filter(isOver60); 
// returns an array containing [64, 65, 62]
if (allOver60.length > 0) {
console.log(allOver60); // displays the array
}
else {
console.log("No values over 60");
}
